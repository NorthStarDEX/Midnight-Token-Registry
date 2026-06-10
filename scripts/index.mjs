#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { ContractState } from '@midnight-ntwrk/compact-runtime';

const DEFAULT_CONFIG = path.resolve('registry', 'preprod.json');
const DEFAULT_ARTIFACT = path.resolve('generated', 'TokenRegistry', 'contract', 'index.js');

const parseArgs = (argv) => {
  const parsed = { _: [] };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith('--')) {
      parsed._.push(arg);
      continue;
    }
    const [rawKey, inlineValue] = arg.slice(2).split('=', 2);
    const key = rawKey.replace(/-([a-z])/gu, (_, letter) => letter.toUpperCase());
    if (inlineValue != null) {
      parsed[key] = inlineValue;
      continue;
    }
    const next = argv[index + 1];
    if (next && !next.startsWith('--')) {
      parsed[key] = next;
      index += 1;
    } else {
      parsed[key] = true;
    }
  }
  return parsed;
};

const normalizeHex = (value) => String(value ?? '').trim().replace(/^0x/iu, '').toLowerCase();

const assertBytes32Hex = (value, label) => {
  const normalized = normalizeHex(value);
  if (!/^[0-9a-f]{64}$/u.test(normalized)) {
    throw new Error(`${label} must be 32-byte hex`);
  }
  return normalized;
};

const bytesToHex = (bytes) => Buffer.from(bytes).toString('hex').toLowerCase();
const bytesToText = (bytes) => Buffer.from(bytes).toString('utf8').replace(/\0+$/u, '');
const maybeText = (value) => (value.is_some ? bytesToText(value.value) : null);
const maybeNumber = (value) => (value.is_some ? Number(value.value) : null);

const entryToJson = ([key, entry]) => ({
  tokenColor: bytesToHex(entry.tokenColor ?? key),
  surface: entry.surface === 0 ? 'unshielded' : 'shielded',
  active: Boolean(entry.active),
  metadata: {
    name: bytesToText(entry.metadata.name),
    symbol: maybeText(entry.metadata.symbol),
    decimals: maybeNumber(entry.metadata.decimals),
    description: maybeText(entry.metadata.description),
    image: maybeText(entry.metadata.image),
    mediaType: maybeText(entry.metadata.mediaType),
    version: Number(entry.metadata.version),
  },
});

const queryContractState = async ({ indexer, contractAddress }) => {
  const response = await fetch(indexer, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      query: `query RegistryState($address: HexEncoded!) {
        contractAction(address: $address) {
          state
          transaction { block { height hash timestamp } }
        }
      }`,
      variables: { address: contractAddress },
    }),
  });

  if (!response.ok) {
    throw new Error(`indexer request failed: HTTP ${response.status}`);
  }

  const body = await response.json();
  if (body.errors?.length) {
    throw new Error(body.errors.map((error) => error.message).join('; '));
  }

  const contractAction = body.data?.contractAction;
  if (!contractAction?.state) {
    throw new Error(`contract state not found: ${contractAddress}`);
  }

  return contractAction;
};

const run = async () => {
  const args = parseArgs(process.argv.slice(2));
  const configPath = path.resolve(args.config ?? DEFAULT_CONFIG);
  const config = JSON.parse(await readFile(configPath, 'utf8'));
  const network = args.network ?? config.network ?? 'preprod';
  const contractAddress = assertBytes32Hex(args.contract ?? config.contractAddress, 'contract address');
  const indexer = String(args.indexer ?? config.indexer ?? '').trim();
  if (!indexer) throw new Error('indexer URL is required');

  const artifactPath = path.resolve(args.artifact ?? DEFAULT_ARTIFACT);
  const tokenRegistry = await import(pathToFileURL(artifactPath).href);

  const contractAction = await queryContractState({ indexer, contractAddress });
  const contractState = ContractState.deserialize(Buffer.from(contractAction.state, 'hex'));
  const ledger = tokenRegistry.ledger(contractState.data ?? contractState);

  let tokens = Array.from(ledger.entries, entryToJson)
    .sort((left, right) => left.tokenColor.localeCompare(right.tokenColor));
  if (args.activeOnly) {
    tokens = tokens.filter((token) => token.active);
  }

  const output = {
    network,
    contractAddress,
    indexer,
    block: contractAction.transaction?.block ?? null,
    projectName: ledger.projectName,
    registryVersion: Number(ledger.registryVersion),
    entryCount: Number(ledger.entries.size()),
    tokens,
  };

  console.log(JSON.stringify(output, null, 2));
};

run().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});

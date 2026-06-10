#!/usr/bin/env node
import { execFile } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

const requestFilesFromEnv = () =>
  String(process.env.CHANGED_REQUEST_FILES ?? '')
    .split(/\r?\n/u)
    .map((file) => file.trim())
    .filter(Boolean);

const requestFilesFromArgs = () => process.argv.slice(2).filter(Boolean);

const normalizeHex = (value) => String(value ?? '').trim().replace(/^0x/iu, '').toLowerCase();

const loadRegistry = async () => {
  const { stdout } = await execFileAsync(process.execPath, ['scripts/index.mjs'], {
    maxBuffer: 10 * 1024 * 1024,
  });
  return JSON.parse(stdout);
};

const run = async () => {
  const files = requestFilesFromArgs().length > 0 ? requestFilesFromArgs() : requestFilesFromEnv();
  if (files.length !== 1) {
    throw new Error(`pull requests must change exactly one request JSON file; found ${files.length}`);
  }

  const file = files[0];
  const request = JSON.parse(await readFile(file, 'utf8'));
  const action = String(request.action ?? 'list').toLowerCase();
  const tokenColor = normalizeHex(request.tokenColor);

  const registry = await loadRegistry();
  const existing = registry.tokens.find((token) => token.tokenColor === tokenColor);

  if (action === 'list' && existing) {
    throw new Error(`token color is already listed in the registry: ${tokenColor}`);
  }

  if (action === 'remove' && !existing) {
    throw new Error(`token color is not listed in the registry: ${tokenColor}`);
  }

  console.log(JSON.stringify({
    request: file,
    action,
    tokenColor,
    registryContract: registry.contractAddress,
    registryEntryCount: registry.entryCount,
    registryCheck: action === 'remove' ? 'listed-token-found' : 'token-not-listed',
  }, null, 2));
};

run().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});

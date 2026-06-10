#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const REQUEST_DIR = path.resolve('requests', 'preprod');
const utf8 = new TextEncoder();

const normalizeHex = (value) => String(value ?? '').trim().replace(/^0x/iu, '').toLowerCase();
const byteLength = (value) => utf8.encode(String(value)).length;

const isTokenColor = (value) => /^[0-9a-f]{64}$/u.test(String(value ?? '').trim());

const checkString = ({ object, key, errors, required = false, maxBytes }) => {
  const value = object[key];
  if (value == null) {
    if (required) errors.push(`${key} is required`);
    return;
  }
  if (typeof value !== 'string') {
    errors.push(`${key} must be a string`);
    return;
  }
  if (required && value.trim() === '') errors.push(`${key} cannot be empty`);
  if (maxBytes != null && byteLength(value) > maxBytes) {
    errors.push(`${key} is ${byteLength(value)} UTF-8 bytes; max is ${maxBytes}`);
  }
};

const checkUrl = ({ value, key, errors, allowIpfs = false }) => {
  if (value == null || value === '') return;
  if (typeof value !== 'string') return;
  if (allowIpfs && (value.startsWith('ipfs://') || value.startsWith('/ipfs/'))) return;

  try {
    const url = new URL(value);
    if (!['https:', 'http:'].includes(url.protocol)) {
      errors.push(`${key} must use http:// or https://`);
    }
    if (key === 'image' && url.protocol !== 'https:') {
      errors.push('image must use https://, ipfs://, or /ipfs/');
    }
  } catch {
    errors.push(`${key} must be a valid URL`);
  }
};

const validateListing = ({ file, request, errors }) => {
  checkString({ object: request, key: 'name', errors, required: true, maxBytes: 32 });
  checkString({ object: request, key: 'symbol', errors, maxBytes: 10 });
  checkString({ object: request, key: 'description', errors, maxBytes: 256 });
  checkString({ object: request, key: 'image', errors, maxBytes: 256 });
  checkString({ object: request, key: 'mediaType', errors, maxBytes: 32 });
  checkString({ object: request, key: 'projectUrl', errors });
  checkString({ object: request, key: 'notes', errors });

  if (request.decimals != null && (!Number.isInteger(request.decimals) || request.decimals < 0 || request.decimals > 255)) {
    errors.push('decimals must be an integer from 0 to 255');
  }
  if (request.image && !request.mediaType) errors.push('mediaType is required when image is set');
  checkUrl({ value: request.image, key: 'image', errors, allowIpfs: true });
  checkUrl({ value: request.projectUrl, key: 'projectUrl', errors });

  const expected = `${normalizeHex(request.tokenColor)}.json`;
  if (path.basename(file) !== expected) errors.push(`filename must be ${expected}`);
};

const validateRemoval = ({ file, request, errors }) => {
  checkString({ object: request, key: 'reason', errors, required: true, maxBytes: 256 });
  checkString({ object: request, key: 'projectUrl', errors });
  checkUrl({ value: request.projectUrl, key: 'projectUrl', errors });

  const expected = `remove-${normalizeHex(request.tokenColor)}.json`;
  if (path.basename(file) !== expected) errors.push(`filename must be ${expected}`);
};

const validateRequest = ({ file, request }) => {
  const errors = [];
  if (request == null || typeof request !== 'object' || Array.isArray(request)) {
    return ['request must be a JSON object'];
  }

  const action = String(request.action ?? 'list').toLowerCase();
  if (!['list', 'remove'].includes(action)) errors.push('action must be list or remove');
  if (!isTokenColor(request.tokenColor)) errors.push('tokenColor must be 64 lowercase hex chars');

  if (isTokenColor(request.tokenColor)) {
    if (action === 'remove') validateRemoval({ file, request, errors });
    else validateListing({ file, request, errors });
  }

  if (request.status != null) {
    if (typeof request.status !== 'object' || Array.isArray(request.status)) {
      errors.push('status must be an object');
    } else {
      checkString({ object: request.status, key: 'state', errors, required: true });
      if (request.status.state != null && !['listed', 'removed', 'rejected'].includes(request.status.state)) {
        errors.push('status.state must be listed, removed, or rejected');
      }
      checkString({ object: request.status, key: 'contractAddress', errors });
      if (request.status.contractAddress != null && !isTokenColor(request.status.contractAddress)) {
        errors.push('status.contractAddress must be 64 lowercase hex chars');
      }
      checkString({ object: request.status, key: 'txId', errors });
      if (request.status.txId != null && !/^00[0-9a-f]{64}$/u.test(request.status.txId)) {
        errors.push('status.txId must be a Midnight transaction id');
      }
      if (['listed', 'removed'].includes(request.status.state)) {
        if (!request.status.contractAddress) errors.push('status.contractAddress is required when status.state is listed or removed');
        if (!request.status.txId) errors.push('status.txId is required when status.state is listed or removed');
      }
    }
  }

  return errors;
};

const run = async () => {
  const entries = await readdir(REQUEST_DIR, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
    .map((entry) => path.join(REQUEST_DIR, entry.name))
    .sort();

  let failures = 0;
  for (const file of files) {
    let request;
    try {
      request = JSON.parse(await readFile(file, 'utf8'));
    } catch (error) {
      console.error(`${file}: invalid JSON: ${error instanceof Error ? error.message : String(error)}`);
      failures += 1;
      continue;
    }

    const errors = validateRequest({ file, request });
    if (errors.length === 0) continue;
    failures += errors.length;
    for (const error of errors) console.error(`${file}: ${error}`);
  }

  if (failures > 0) {
    console.error(`request validation failed with ${failures} error(s)`);
    process.exitCode = 1;
    return;
  }

  console.log(`validated ${files.length} request file(s)`);
};

run().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});

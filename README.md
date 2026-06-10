# Midnight Token Registry

Token metadata registry for Midnight preprod.

## Registry

```text
Network:  preprod
Contract: eaab93c9bb71ec1423d10775ef0556580020560dfdf4f4536a8560b2fefd625e
Indexer:  https://indexer.preprod.midnight.network/api/v4/graphql
```

Contract source:

```text
contracts/token-registry.compact
```

## Query

```bash
npm ci
npm run index
```

Optional:

```bash
npm run index -- --active-only
npm run index -- --contract eaab93c9bb71ec1423d10775ef0556580020560dfdf4f4536a8560b2fefd625e
```

The command prints JSON from the deployed contract.

The latest committed cache is:

```text
registry/preprod.tokens.json
```

GitHub Actions refreshes that file once per day and commits only when the indexed contract state changes.

## Request A Listing

Add one file:

```text
requests/preprod/<token-color>.json
```

Example:

```json
{
  "tokenColor": "441fb2c1a834a4250bb78f2dd6ebaab82d34fde7e97344435d4973d547a6f64d",
  "name": "NorthStar",
  "symbol": "NSTAR",
  "decimals": 0,
  "description": "Follow the NorthStar",
  "image": "ipfs://bafkreignuu6ao6e2wemzf2gcqerljfqga6hqbceyh2rwdwth4jkwew7kfu",
  "mediaType": "image/png",
  "projectUrl": "https://preprod.northstardex.com",
  "notes": ""
}
```

Rules:

```text
tokenColor:   64 lowercase hex chars
name:         required, max 32 UTF-8 bytes
symbol:       optional, max 10 UTF-8 bytes
decimals:     optional, integer 0-255
description:  optional, max 256 UTF-8 bytes
image:        optional, ipfs://, /ipfs/, or https://, max 256 UTF-8 bytes
mediaType:    required when image is set, max 32 UTF-8 bytes
projectUrl:   optional
notes:        optional
```

Check the request before opening a pull request:

```bash
npm run validate:requests
```

Pull requests run the same validation in GitHub Actions. The action also queries the deployed registry and rejects listing requests for token colors that are already listed.

## Request Removal

Add one file:

```text
requests/preprod/remove-<token-color>.json
```

Example:

```json
{
  "action": "remove",
  "tokenColor": "441fb2c1a834a4250bb78f2dd6ebaab82d34fde7e97344435d4973d547a6f64d",
  "reason": "Project requested removal",
  "projectUrl": "https://preprod.northstardex.com"
}
```

## Review

A pull request is a request to update the registry. The on-chain contract is the source of truth.

Accepted requests are submitted on-chain by the registry maintainer. After that, `npm run index` will show the updated registry state.

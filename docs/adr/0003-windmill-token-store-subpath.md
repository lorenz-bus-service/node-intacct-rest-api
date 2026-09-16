---
status: accepted
---
# Ship a Windmill token store as an optional subpath, not in the core

The core is host-agnostic: it knows nothing about where it runs. Windmill is the first real host, and because it starts a fresh process per job the in-memory token cache never hits, so every job minted a new Intacct token. Rather than have every script hand-write the same store, the package exposes `@lorenzbus/intacct-rest/windmill` with a `WindmillTokenStore` backed by a Windmill secret variable. `windmill-client` is an optional peer dependency and is only loaded by that subpath, so the root import stays dependency-free and host-agnostic.

## Considered options

- Keep the store in each Windmill script or a shared Windmill module. Rejected: copy-pasted plumbing in every consumer, and the pattern already used by the sibling ADP package puts the adapter in the library.
- Add Windmill support to the core. Rejected: it would drag a host dependency into every consumer.

## Consequences

- Other hosts (Azure Functions, Lambda) can follow the same pattern as further subpaths without touching the core.
- The adapter is tested against a mocked `windmill-client`, never a live Windmill.

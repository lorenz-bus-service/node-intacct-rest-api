---
status: accepted
---
# Typed resources expose the Query Service, not Intacct's parameterless list

Intacct's `GET /objects/<application>/<object>` accepts no filters, fields or sorting and returns only Object References (`{key, id, href}`), so callers would need one extra request per record to see any data. Typed resources therefore expose `query()` (one page) and `queryAll()` (async enumeration) backed by `POST /services/core/query`, and do not expose the plain list endpoint at all. The generic untyped client still reaches it for anyone who needs it.

## Consequences

- Lookup by user-facing Id also goes through `query()`, since URL paths accept only the system Key.
- Pagination is offset-based with a 4,000 row cap and Intacct evaluates pages independently, so `queryAll()` documents that records can be skipped or duplicated between pages and accepts a `maxRecords` guard.

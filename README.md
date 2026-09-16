# @lorenzbus/intacct-rest

Typed, host-agnostic TypeScript client for the [Sage Intacct REST API](https://developer.sage.com/intacct/docs/) (`/ia/api/v1`).

Every Object, Workflow Action and service in Sage's OpenAPI specification is available, fully typed, from day one. Nothing per endpoint is hand-written: a generator turns the spec into types plus one-line resource definitions, and a small generic core does the actual work. See [docs/adr](docs/adr/) for why.

- Node 20+, native `fetch`, zero runtime dependencies, ESM and CommonJS.
- OAuth client-credentials and refresh-token grants, with tokens reused until they expire.
- Query Service with rows typed from the fields you ask for, one page at a time or as an async iterable.
- Errors as classes per family, optional retry on throttling, per-request Entity context.

## Install

```sh
npm install @lorenzbus/intacct-rest
```

## Quick start

```ts
import { IntacctClient, ClientCredentials } from "@lorenzbus/intacct-rest";
import { accountsPayable } from "@lorenzbus/intacct-rest/accounts-payable";

const client = new IntacctClient({
  auth: new ClientCredentials({
    clientId: process.env.INTACCT_CLIENT_ID!,
    clientSecret: process.env.INTACCT_CLIENT_SECRET!,
    username: "api_user@MyCompany", // or "api_user@MyCompany|EntityId"
  }),
});

const ap = accountsPayable(client);

// Get one record by its system key
const bill = await ap.bill.get("60");
console.log(bill.billNumber, bill.vendor?.name);

// Create, update, delete
const ref = await ap.bill.create({ vendor: { id: "V-100" }, billNumber: "INV-1", createdDate: "2026-09-16", lines: [/* ... */] });
await ap.bill.update(ref.key, { description: "Updated" });
await ap.bill.delete(ref.key);

// Workflow Actions live on the resource too
await ap.bill.submit({ key: ref.key });
```

Each Intacct Application is its own entry point, so you only import the parts you use:

```ts
import { accountsReceivable } from "@lorenzbus/intacct-rest/accounts-receivable";
import { generalLedger } from "@lorenzbus/intacct-rest/general-ledger";
import { companyConfiguration } from "@lorenzbus/intacct-rest/company-configuration";
```

Available entry points: `accounts-payable`, `accounts-receivable`, `cash-management`, `common-resources`, `company-configuration`, `consolidation`, `construction`, `contracts-and-revenue-management`, `expenses`, `fixed-assets-management`, `general-ledger`, `inventory-control`, `order-entry`, `project-and-resource-management`, `purchasing`, `reports`, `tax`, `time`.

## Querying

Intacct's plain `GET /objects/...` list returns only `{ key, id, href }` references with no filtering, so this library does not expose it. Listing goes through the Query Service instead, with rows typed from the `fields` you request.

```ts
// One page
const page = await ap.vendor.query({
  fields: ["id", "name", "totalDue", "primaryContact.email"],
  filters: [{ $eq: { status: "active" } }, { $gt: { totalDue: "0" } }],
  filterExpression: "1 and 2",
  orderBy: [{ totalDue: "desc" }],
  size: 200,
});
page.items;      // { id: string; name: string; totalDue: string; "primaryContact.email": string }[]
page.totalCount; // total matching records
page.next;       // start value for the next page, or null

// Every record, following pages automatically
for await (const vendor of ap.vendor.queryAll({ fields: ["id", "name"] }, { maxRecords: 10_000 })) {
  console.log(vendor.id, vendor.name);
}
```

Direct fields keep their schema type. One level of dotted related fields (`vendor.name`) is resolved when the schema knows the relation. Aggregates such as `sum:totalDue` and deeper paths are typed `unknown`.

Intacct evaluates each page independently and caps a page at 4,000 rows, so records can be skipped or repeated if data changes while you iterate.

Looking up by the user-facing `id` rather than the system `key` also goes through `query`, since URL paths only accept keys.

## Authentication

Pass any of these as `auth`:

| Provider | When to use |
| --- | --- |
| `new ClientCredentials({ clientId, clientSecret, username })` | Server-to-server with a Web Services user. The default. |
| `new RefreshToken({ clientId, clientSecret, refreshToken, entityId? })` | You completed an authorization-code login elsewhere and hold a refresh token. Rotated refresh tokens are picked up automatically. |
| `new StaticToken("...")` or a plain string | You manage tokens yourself. |

Access tokens are reused until shortly before `expires_in` (default skew 60 s) and re-minted on demand. Concurrent callers share one token request. A 401 triggers one automatic re-authentication.

Tokens are cached in memory by default. To share them across processes or restarts, supply a `TokenStore`:

```ts
import type { TokenStore } from "@lorenzbus/intacct-rest";

const store: TokenStore = {
  get: (key) => myCache.get(key),          // StoredToken | undefined, sync or async
  set: (key, token) => myCache.set(key, token),
  delete: (key) => myCache.delete(key),
};

new ClientCredentials({ clientId, clientSecret, username, store, onToken: (t) => audit(t) });
```

The initial authorization-code redirect flow is a one-time human step and is out of scope; see Sage's [OAuth 2.0 guide](https://developer.sage.com/intacct/docs/1/sage-intacct-rest-api/authorization-and-security/oauth2).

## Entities

For multi-entity companies, set a default on the client and override per call. `null` forces the top level.

```ts
const client = new IntacctClient({ auth, entity: "CentralUS-35" });
await ap.bill.get("60");                          // X-IA-API-Param-Entity: CentralUS-35
await ap.bill.get("60", { entity: "West-12" });   // override
await ap.bill.get("60", { entity: null });        // top-level company
const west = client.withEntity("West-12");        // a sibling client with a different default
```

## Errors

Every failed response throws a subclass of `IntacctError` carrying `status`, Intacct's `code` (such as `GW-0010`), `message`, `supportId`, `details` and the raw `body`. Intacct's three inconsistent error envelopes are all normalised.

| Class | Status |
| --- | --- |
| `ValidationError` | 400, 422 |
| `AuthenticationError` | 401 |
| `AuthorizationError` | 403 |
| `NotFoundError` | 404 |
| `ConflictError` | 409 |
| `RateLimitError` (with `retryAfterSeconds`) | 429 |
| `ServerError` | 5xx |

```ts
import { NotFoundError, RateLimitError } from "@lorenzbus/intacct-rest";

try {
  await ap.bill.get("nope");
} catch (err) {
  if (err instanceof NotFoundError) return undefined;
  if (err instanceof RateLimitError) await sleep(err.retryAfterSeconds ?? 5);
  throw err;
}
```

## Retries

Off by default, because silent retries surprise batch jobs. Opt in to retry 429 and 503, honouring Intacct's `X-IA-*-Retry-After` headers and falling back to exponential backoff:

```ts
new IntacctClient({ auth, retry: true });
new IntacctClient({ auth, retry: { maxRetries: 5, baseDelayMs: 1000, maxDelayMs: 60_000, statuses: [429, 503] } });
```

## The generic client

Anything the typed layer does not cover is one call away. Paths are relative to the API base URL.

```ts
const { result, meta, response } = await client.request("GET", "objects/accounts-payable/bill/60");
await client.post("services/core/query", { object: "accounts-payable/vendor", fields: ["id"] });
await client.patch("objects/accounts-payable/bill/60", { description: "x" }, { entity: "West-12" });
```

Currently only two spec endpoints are not on the typed layer: `POST /objects/accounts-payable/advance-line/{key}` and `POST /objects/purchasing/txn-definition/{key}`. Use the generic client for those.

## Parameterized Objects, singletons and services

Some Intacct paths do not follow the plain Object pattern. The generator maps each kind to a small, predictable shape.

```ts
import { orderEntry } from "@lorenzbus/intacct-rest/order-entry";
import { companyConfiguration } from "@lorenzbus/intacct-rest/company-configuration";
import { generalLedger } from "@lorenzbus/intacct-rest/general-ledger";

// /objects/order-entry/document::{documentName}/{key}
await orderEntry(client).documentByDocumentName("Sales Invoice").get("123");

// /objects/company-config/consolidation-preference/setup (keyless GET/PATCH)
await companyConfiguration(client).consolidationPreferenceSetup.get();

// /services/reports/general-ledger/trial-balance
await generalLedger(client).services.reports.generalLedger.trialBalance({ /* ... */ });
```

## Types

Every Application exports a PascalCase type per Object plus `Create` and `Update` body types, and the raw `components` and `operations` from the spec.

```ts
import type { Bill, BillCreate, VendorUpdate, components } from "@lorenzbus/intacct-rest/accounts-payable";
```

## Regenerating from Sage's spec

The 18 per-Application OpenAPI documents are committed under [spec/](spec/) with a hash manifest, and the generated output under [src/generated/](src/generated/). Neither is hand-edited.

```sh
npm run spec:fetch   # download the latest spec; only changed groups are rewritten
npm run generate     # emit src/generated/<group>/{types,index}.ts
npm run typecheck && npm test
```

A weekly GitHub Actions workflow does this and opens a PR when Sage publishes changes. CI fails if `src/generated` drifts from what the generator produces.

## Design

- **Generic core, generated edge.** [src/core](src/core/) holds the client, auth, query, error and definition machinery. [src/generated](src/generated/) is what `scripts/generate.ts` emits. Adding coverage never means writing an endpoint by hand.
- **Vocabulary** lives in [CONTEXT.md](CONTEXT.md). **Decisions** live in [docs/adr](docs/adr/).
- **Tests** run against a mocked `fetch`, with happy-path fixtures taken straight from the spec's examples and hand-written cases for Intacct's inconsistent error shapes.

## License

MIT

# Intacct REST Client

A usage-agnostic TypeScript library for Sage Intacct's REST API (`/ia/api/v1`). The core knows nothing about the host that calls it; host adapters live in optional subpaths (see ADR 0003).

## Language

### Intacct API

**Object**:
An Intacct record type addressable at `/objects/<application>/<object>`, such as `accounts-payable/bill`. Every Object supports the same list, get, create, update and delete shape.
_Avoid_: Entity (see below), resource, model, table

**Application**:
The Intacct module an Object belongs to, and the first path segment under `/objects/`: `accounts-payable`, `general-ledger`, `company-config`, and so on.
_Avoid_: Domain, group, area

**Key**:
The system-assigned record identifier Intacct uses in URLs (`/objects/.../bill/{key}`). Always a string. Distinct from Id.
_Avoid_: RecordNo, primary key

**Id**:
The user-facing identifier of a record, such as a vendor id or bill number. Not usable in URL paths; look up by Id goes through the Query Service.
_Avoid_: Name, number, code

**Object Reference**:
The minimal `{key, id, href}` triple Intacct returns from list, create and update calls instead of the full record.
_Avoid_: Stub, summary, pointer

**Query Service**:
`POST /services/core/query`: the only way to filter, select fields, sort or paginate records. Offset-based, 4,000 rows maximum per page.
_Avoid_: Search, list (list is the parameterless `GET /objects/...`)

**Workflow Action**:
A state transition on an Object exposed at `/workflows/<application>/<object>/<action>`, such as submit, approve, decline, recall.
_Avoid_: Command, operation, transition

**Envelope**:
The response wrapper `{"ia::result": ..., "ia::meta": ...}` every successful call returns. Errors use `ia::error` and vary in nesting.
_Avoid_: Response body, payload wrapper

**Entity**:
A legal entity or location inside a multi-entity Intacct company. Selected per request via the `X-IA-API-Param-Entity` header, or baked into a token. The default is the top level.
_Avoid_: Location (in library vocabulary), tenant, company

**Company**:
An Intacct tenant identified by a company id. Tokens belong to a user in a Company.
_Avoid_: Tenant, account, organization

### Library shapes

**Resource**:
The typed handle for one Object: get, create, update and delete as Intacct offers them, plus `query` and `queryAll`, plus its Workflow Actions as methods.
_Avoid_: Repository, model, service

**Parameterized Object**:
An Object whose path embeds a name, such as `order-entry/document::{documentName}`. Exposed as a function of that name returning a Resource, named `<object>By<Param>`.
_Avoid_: Templated object, dynamic object

**Singleton**:
A keyless record with its own path, such as a preferences page, with only get and update (and occasionally create).
_Avoid_: Settings object, config

**Service**:
A non-Object endpoint under `/services/...`, exposed as a plain function nested by path segment.
_Avoid_: RPC, endpoint, action (reserved for Workflow Actions)

---
status: accepted
---
# Generate types and typed resources for every Object from the OpenAPI spec

Sage publishes an OpenAPI 3.0.3 spec covering roughly 530 Objects that all share one URL shape (`/objects/<application>/<object>[/{key}]`). Rather than hand-writing types and resource classes per Object, a dev-time generator pulls the per-Application spec documents, emits TypeScript types and one-line typed resource registrations for every Object, and the output is committed to the repo. Output is split into per-Application entry points so consumers import only the Applications they use.

## Considered options

- Hand-write types and resources for each Object as needed. Rejected: it is exactly the per-endpoint labour the library exists to avoid, and coverage would lag Intacct indefinitely.
- Generate at consumer install time. Rejected: fragile, slow, and needs the generator as a runtime dependency.
- One combined generated file. Rejected: 7 MB and 188k lines, hostile to editors and to reviewing spec diffs.

## Consequences

- Hand-written effort goes only into the generic transport, auth, query, errors and any conveniences the spec cannot express (for example Workflow Actions).
- The spec version is pinned; bumping it is a reviewed diff per Application.
- Generated files must never be hand-edited.

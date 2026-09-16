// Generated from spec/consolidation.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** consolidation/adjustment-journal */
export type AdjustmentJournal = components["schemas"]["objects.consolidation.adjustment-journal"];
export type AdjustmentJournalCreate = RequestBody<operations["create-consolidation-adjustment-journal"]>;
export type AdjustmentJournalUpdate = RequestBody<operations["update-consolidation-adjustment-journal-key"]>;
/** consolidation/book */
export type Book = components["schemas"]["objects.consolidation.book"];
export type BookCreate = RequestBody<operations["create-consolidation-book"]>;
export type BookUpdate = RequestBody<operations["update-consolidation-book-key"]>;
/** consolidation/elimination-account */
export type EliminationAccount = components["schemas"]["objects.consolidation.elimination-account"];
export type EliminationAccountCreate = RequestBody<operations["create-consolidation-elimination-account"]>;
export type EliminationAccountUpdate = RequestBody<operations["update-consolidation-elimination-account-key"]>;
/** consolidation/entity */
export type Entity = components["schemas"]["objects.consolidation.entity"];
export type EntityCreate = RequestBody<operations["create-consolidation-entity"]>;
export type EntityUpdate = RequestBody<operations["update-consolidation-entity-key"]>;
/** consolidation/override-account */
export type OverrideAccount = components["schemas"]["objects.consolidation.override-account"];
export type OverrideAccountCreate = RequestBody<operations["create-consolidation-override-account"]>;
export type OverrideAccountUpdate = RequestBody<operations["update-consolidation-override-account-key"]>;
/** consolidation/ownership-entity */
export type OwnershipEntity = components["schemas"]["objects.consolidation.ownership-entity"];
/** consolidation/ownership-structure */
export type OwnershipStructure = components["schemas"]["objects.consolidation.ownership-structure"];
export type OwnershipStructureCreate = RequestBody<operations["create-consolidation-ownership-structure"]>;
export type OwnershipStructureUpdate = RequestBody<operations["update-consolidation-ownership-structure-key"]>;
/** consolidation/ownership-structure-period */
export type OwnershipStructurePeriod = components["schemas"]["objects.consolidation.ownership-structure-period"];
export type OwnershipStructurePeriodCreate = RequestBody<operations["create-consolidation-ownership-structure-period"]>;
export type OwnershipStructurePeriodUpdate = RequestBody<operations["update-consolidation-ownership-structure-period-key"]>;
/** consolidation/ownership-subsidiary-entity */
export type OwnershipSubsidiaryEntity = components["schemas"]["objects.consolidation.ownership-subsidiary-entity"];
/** consolidation/run-status */
export type RunStatus = components["schemas"]["objects.consolidation.run-status"];
/** consolidation/time-period */
export type TimePeriod = components["schemas"]["objects.consolidation.time-period"];

export const consolidation = defineApplication({
  adjustmentJournal: object(shape<{ record: AdjustmentJournal; create: AdjustmentJournalCreate; update: AdjustmentJournalUpdate }>(), "consolidation/adjustment-journal", ["create","delete","get","update"]),
  book: object(shape<{ record: Book; create: BookCreate; update: BookUpdate }>(), "consolidation/book", ["create","delete","get","update"]),
  eliminationAccount: object(shape<{ record: EliminationAccount; create: EliminationAccountCreate; update: EliminationAccountUpdate }>(), "consolidation/elimination-account", ["create","delete","get","update"]),
  entity: object(shape<{ record: Entity; create: EntityCreate; update: EntityUpdate }>(), "consolidation/entity", ["create","delete","get","update"]),
  overrideAccount: object(shape<{ record: OverrideAccount; create: OverrideAccountCreate; update: OverrideAccountUpdate }>(), "consolidation/override-account", ["create","delete","get","update"]),
  ownershipEntity: object(shape<{ record: OwnershipEntity }>(), "consolidation/ownership-entity", ["delete","get"]),
  ownershipStructure: object(shape<{ record: OwnershipStructure; create: OwnershipStructureCreate; update: OwnershipStructureUpdate }>(), "consolidation/ownership-structure", ["create","delete","get","update"]),
  ownershipStructurePeriod: object(shape<{ record: OwnershipStructurePeriod; create: OwnershipStructurePeriodCreate; update: OwnershipStructurePeriodUpdate }>(), "consolidation/ownership-structure-period", ["create","delete","get","update"]),
  ownershipSubsidiaryEntity: object(shape<{ record: OwnershipSubsidiaryEntity }>(), "consolidation/ownership-subsidiary-entity", ["delete","get"]),
  runStatus: object(shape<{ record: RunStatus }>(), "consolidation/run-status", ["get"]),
  timePeriod: object(shape<{ record: TimePeriod }>(), "consolidation/time-period", ["get"]),
  services: group({
    consolidation: group({
      book: group({
        consolidate: service<RequestBody<operations["post-consolidation-book-consolidate"]>, ResponseResult<operations["post-consolidation-book-consolidate"]>>("services/consolidation/book/consolidate", "POST"),
      }),
      ownershipStructure: group({
        consolidate: service<RequestBody<operations["post-consolidation-ownership-structure-consolidate"]>, ResponseResult<operations["post-consolidation-ownership-structure-consolidate"]>>("services/consolidation/ownership-structure/consolidate", "POST"),
      }),
    }),
  }),
});

export default consolidation;

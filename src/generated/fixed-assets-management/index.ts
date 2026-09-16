// Generated from spec/fixed-assets-management.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** fixed-assets/asset */
export type Asset = components["schemas"]["objects.fixed-assets.asset"];
export type AssetCreate = RequestBody<operations["post-fixed-assets-asset"]>;
export type AssetUpdate = RequestBody<operations["patch-fixed-assets-asset-key"]>;
/** fixed-assets/asset-classification */
export type AssetClassification = components["schemas"]["objects.fixed-assets.asset-classification"];
export type AssetClassificationCreate = RequestBody<operations["post-fixed-assets-classification"]>;
export type AssetClassificationUpdate = RequestBody<operations["patch-fixed-assets-classification-key"]>;
/** fixed-assets/asset-depreciation-rule */
export type AssetDepreciationRule = components["schemas"]["objects.fixed-assets.asset-depreciation-rule"];
export type AssetDepreciationRuleCreate = RequestBody<operations["post-fixed-assets-asset-depreciation-rule"]>;
export type AssetDepreciationRuleUpdate = RequestBody<operations["patch-fixed-assets-asset-depreciation-rule-key"]>;
/** fixed-assets/classification-depreciation-rule */
export type ClassificationDepreciationRule = components["schemas"]["objects.fixed-assets.classification-depreciation-rule"];
export type ClassificationDepreciationRuleCreate = RequestBody<operations["post-fixed-assets-classification-depreciation-rule"]>;
export type ClassificationDepreciationRuleUpdate = RequestBody<operations["patch-fixed-assets-classification-depreciation-rule-key"]>;
/** fixed-assets/depreciation-method */
export type DepreciationMethod = components["schemas"]["objects.fixed-assets.depreciation-method"];
/** fixed-assets/depreciation-schedule */
export type DepreciationSchedule = components["schemas"]["objects.fixed-assets.depreciation-schedule"];
/** fixed-assets/depreciation-schedule-entry */
export type DepreciationScheduleEntry = components["schemas"]["objects.fixed-assets.depreciation-schedule-entry"];
/** fixed-assets/disposal */
export type Disposal = components["schemas"]["objects.fixed-assets.disposal"];
/** fixed-assets/disposal-depreciation-schedule-map */
export type DisposalDepreciationScheduleMap = components["schemas"]["objects.fixed-assets.disposal-depreciation-schedule-map"];
/** fixed-assets/setup */
export type Setup = components["schemas"]["objects.fixed-assets.setup"];
export type SetupCreate = RequestBody<operations["post-fixed-assets-setup"]>;
export type SetupUpdate = RequestBody<operations["patch-fixed-assets-setup-key"]>;
/** fixed-assets/setup-posting-rule */
export type SetupPostingRule = components["schemas"]["objects.fixed-assets.setup-posting-rule"];
export type SetupPostingRuleCreate = RequestBody<operations["post-fixed-assets-setup-posting-rule"]>;
export type SetupPostingRuleUpdate = RequestBody<operations["patch-fixed-assets-setup-posting-rule-key"]>;
/** fixed-assets/transfer-history */
export type TransferHistory = components["schemas"]["objects.fixed-assets.transfer-history"];
export type TransferHistoryCreate = RequestBody<operations["post-fixed-assets-transfer-history"]>;
export type TransferHistoryUpdate = RequestBody<operations["patch-fixed-assets-transfer-history"]>;
/** fixed-assets/transfer-journal-entry-map */
export type TransferJournalEntryMap = components["schemas"]["objects.fixed-assets.transfer-journal-entry-map"];

export const fixedAssetsManagement = defineApplication({
  asset: object(shape<{ record: Asset; create: AssetCreate; update: AssetUpdate }>(), "fixed-assets/asset", ["create","delete","get","update"]),
  assetClassification: object(shape<{ record: AssetClassification; create: AssetClassificationCreate; update: AssetClassificationUpdate }>(), "fixed-assets/asset-classification", ["create","delete","get","update"]),
  assetDepreciationRule: object(shape<{ record: AssetDepreciationRule; create: AssetDepreciationRuleCreate; update: AssetDepreciationRuleUpdate }>(), "fixed-assets/asset-depreciation-rule", ["create","delete","get","update"]),
  classificationDepreciationRule: object(shape<{ record: ClassificationDepreciationRule; create: ClassificationDepreciationRuleCreate; update: ClassificationDepreciationRuleUpdate }>(), "fixed-assets/classification-depreciation-rule", ["create","delete","get","update"]),
  depreciationMethod: object(shape<{ record: DepreciationMethod }>(), "fixed-assets/depreciation-method", ["get"]),
  depreciationSchedule: object(shape<{ record: DepreciationSchedule }>(), "fixed-assets/depreciation-schedule", ["get"]),
  depreciationScheduleEntry: object(shape<{ record: DepreciationScheduleEntry }>(), "fixed-assets/depreciation-schedule-entry", ["get"]),
  disposal: object(shape<{ record: Disposal }>(), "fixed-assets/disposal", ["delete","get"]),
  disposalDepreciationScheduleMap: object(shape<{ record: DisposalDepreciationScheduleMap }>(), "fixed-assets/disposal-depreciation-schedule-map", ["get"]),
  setup: object(shape<{ record: Setup; create: SetupCreate; update: SetupUpdate }>(), "fixed-assets/setup", ["create","delete","get","update"]),
  setupPostingRule: object(shape<{ record: SetupPostingRule; create: SetupPostingRuleCreate; update: SetupPostingRuleUpdate }>(), "fixed-assets/setup-posting-rule", ["create","delete","get","update"]),
  transferHistory: object(shape<{ record: TransferHistory; create: TransferHistoryCreate; update: TransferHistoryUpdate }>(), "fixed-assets/transfer-history", ["create","delete","get","update"]),
  transferJournalEntryMap: object(shape<{ record: TransferJournalEntryMap }>(), "fixed-assets/transfer-journal-entry-map", ["get"]),
});

export default fixedAssetsManagement;

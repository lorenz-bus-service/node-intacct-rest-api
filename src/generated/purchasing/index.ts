// Generated from spec/purchasing.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** purchasing/document */
export type Document = components["schemas"]["objects.purchasing.document"];
/** purchasing/document-configuration-preference */
export type DocumentConfigurationPreference = components["schemas"]["objects.purchasing.document-configuration-preference"];
export type DocumentConfigurationPreferenceUpdate = RequestBody<operations["update-purchasing-document-configuration-preference-key"]>;
/** purchasing/document-history */
export type DocumentHistory = components["schemas"]["objects.purchasing.document-history"];
/** purchasing/document-line */
export type DocumentLine = components["schemas"]["objects.purchasing.document-line"];
/** purchasing/document-line-detail */
export type DocumentLineDetail = components["schemas"]["objects.purchasing.document-line-detail"];
/** purchasing/document-line-subtotal */
export type DocumentLineSubtotal = components["schemas"]["objects.purchasing.document-line-subtotal"];
/** purchasing/document-line::{documentName} */
export type DocumentLineByDocumentName = components["schemas"]["objects.purchasing.document-line"];
export type DocumentLineByDocumentNameCreate = RequestBody<operations["create-purchasing-named-document-line"]>;
export type DocumentLineByDocumentNameUpdate = RequestBody<operations["update-purchasing-named-document-line-key"]>;
/** purchasing/document-subtotal */
export type DocumentSubtotal = components["schemas"]["objects.purchasing.document-subtotal"];
/** purchasing/document::{documentName} */
export type DocumentByDocumentName = components["schemas"]["objects.purchasing.document"];
export type DocumentByDocumentNameCreate = RequestBody<operations["create-purchasing-named-document"]>;
export type DocumentByDocumentNameUpdate = RequestBody<operations["update-purchasing-named-document-key"]>;
/** purchasing/price-list */
export type PriceList = components["schemas"]["objects.purchasing.price-list"];
export type PriceListCreate = RequestBody<operations["create-purchasing-price-list"]>;
export type PriceListUpdate = RequestBody<operations["update-purchasing-price-list-key"]>;
/** purchasing/price-list-entry */
export type PriceListEntry = components["schemas"]["objects.purchasing.price-list-entry"];
export type PriceListEntryCreate = RequestBody<operations["create-purchasing-price-list-entry"]>;
export type PriceListEntryUpdate = RequestBody<operations["update-purchasing-price-list-entry-key"]>;
/** purchasing/price-schedule */
export type PriceSchedule = components["schemas"]["objects.purchasing.price-schedule"];
export type PriceScheduleCreate = RequestBody<operations["create-purchasing-price-schedule"]>;
export type PriceScheduleUpdate = RequestBody<operations["update-purchasing-price-schedule-key"]>;
/** purchasing/recurring-document */
export type RecurringDocument = components["schemas"]["objects.purchasing.recurring-document"];
/** purchasing/recurring-document-line */
export type RecurringDocumentLine = components["schemas"]["objects.purchasing.recurring-document-line"];
export type RecurringDocumentLineCreate = RequestBody<operations["create-purchasing-recurring-document-line"]>;
/** purchasing/recurring-document-subtotal */
export type RecurringDocumentSubtotal = components["schemas"]["objects.purchasing.recurring-document-subtotal"];
/** purchasing/recurring-document::{documentName} */
export type RecurringDocumentByDocumentName = components["schemas"]["objects.purchasing.recurring-document"];
export type RecurringDocumentByDocumentNameCreate = RequestBody<operations["create-purchasing-named-recurring-document"]>;
export type RecurringDocumentByDocumentNameUpdate = RequestBody<operations["update-purchasing-recurring-document-key"]>;
/** purchasing/secondary-vendor */
export type SecondaryVendor = components["schemas"]["objects.purchasing.secondary-vendor"];
export type SecondaryVendorCreate = RequestBody<operations["create-purchasing-secondary-vendor"]>;
export type SecondaryVendorUpdate = RequestBody<operations["update-purchasing-secondary-vendor-key"]>;
/** purchasing/subtotal-template */
export type SubtotalTemplate = components["schemas"]["objects.purchasing.subtotal-template"];
export type SubtotalTemplateCreate = RequestBody<operations["create-purchasing-subtotal-template"]>;
export type SubtotalTemplateUpdate = RequestBody<operations["update-purchasing-subtotal-template-key"]>;
/** purchasing/subtotal-template-line */
export type SubtotalTemplateLine = components["schemas"]["objects.purchasing.subtotal-template-line"];
export type SubtotalTemplateLineCreate = RequestBody<operations["create-purchasing-subtotal-template-line"]>;
export type SubtotalTemplateLineUpdate = RequestBody<operations["update-purchasing-subtotal-template-line-key"]>;
/** purchasing/txn-automation-preference */
export type TxnAutomationPreference = components["schemas"]["objects.purchasing.txn-automation-preference"];
export type TxnAutomationPreferenceUpdate = RequestBody<operations["update-purchasing-txn-automation-preference-key"]>;
/** purchasing/txn-automation-without-match-preference */
export type TxnAutomationWithoutMatchPreference = components["schemas"]["objects.purchasing.txn-automation-without-match-preference"];
export type TxnAutomationWithoutMatchPreferenceUpdate = RequestBody<operations["update-purchasing-txn-automation-without-match-preference-key"]>;
/** purchasing/txn-definition */
export type TxnDefinition = components["schemas"]["objects.purchasing.txn-definition"];
export type TxnDefinitionUpdate = RequestBody<operations["update-purchasing-txn-definition-key"]>;
/** purchasing/txn-definition-additional-gl-detail */
export type TxnDefinitionAdditionalGlDetail = components["schemas"]["objects.purchasing.txn-definition-additional-gl-detail"];
export type TxnDefinitionAdditionalGlDetailUpdate = RequestBody<operations["update-purchasing-txn-definition-additional-gl-detail-key"]>;
/** purchasing/txn-definition-ap-direct-gl-detail */
export type TxnDefinitionApDirectGlDetail = components["schemas"]["objects.purchasing.txn-definition-ap-direct-gl-detail"];
export type TxnDefinitionApDirectGlDetailCreate = RequestBody<operations["create-purchasing-txn-definition-ap-direct-gl-detail"]>;
export type TxnDefinitionApDirectGlDetailUpdate = RequestBody<operations["update-purchasing-txn-definition-ap-direct-gl-detail-key"]>;
/** purchasing/txn-definition-entity-setting-detail */
export type TxnDefinitionEntitySettingDetail = components["schemas"]["objects.purchasing.txn-definition-entity-setting-detail"];
export type TxnDefinitionEntitySettingDetailCreate = RequestBody<operations["create-purchasing-txn-definition-entity-setting-detail"]>;
export type TxnDefinitionEntitySettingDetailUpdate = RequestBody<operations["update-purchasing-txn-definition-entity-setting-detail-key"]>;
/** purchasing/txn-definition-inventory-total-detail */
export type TxnDefinitionInventoryTotalDetail = components["schemas"]["objects.purchasing.txn-definition-inventory-total-detail"];
export type TxnDefinitionInventoryTotalDetailCreate = RequestBody<operations["create-purchasing-txn-definition-inventory-total-detail"]>;
export type TxnDefinitionInventoryTotalDetailUpdate = RequestBody<operations["update-purchasing-txn-definition-inventory-total-detail-key"]>;
/** purchasing/txn-definition-source-document-detail */
export type TxnDefinitionSourceDocumentDetail = components["schemas"]["objects.purchasing.txn-definition-source-document-detail"];
export type TxnDefinitionSourceDocumentDetailCreate = RequestBody<operations["create-purchasing-txn-definition-source-document-detail"]>;
export type TxnDefinitionSourceDocumentDetailUpdate = RequestBody<operations["update-purchasing-txn-definition-source-document-detail-key"]>;
/** purchasing/txn-definition-subtotal-detail */
export type TxnDefinitionSubtotalDetail = components["schemas"]["objects.purchasing.txn-definition-subtotal-detail"];
export type TxnDefinitionSubtotalDetailCreate = RequestBody<operations["create-purchasing-txn-definition-subtotal-detail"]>;
export type TxnDefinitionSubtotalDetailUpdate = RequestBody<operations["update-purchasing-txn-definition-subtotal-detail-key"]>;
/** purchasing/txn-match-tolerance-preference */
export type TxnMatchTolerancePreference = components["schemas"]["objects.purchasing.txn-match-tolerance-preference"];
export type TxnMatchTolerancePreferenceUpdate = RequestBody<operations["update-purchasing-txn-match-tolerance-preference-key"]>;
/** purchasing/vendor-gl-group */
export type VendorGlGroup = components["schemas"]["objects.purchasing.vendor-gl-group"];
export type VendorGlGroupCreate = RequestBody<operations["create-purchasing-vendor-gl-group"]>;
export type VendorGlGroupUpdate = RequestBody<operations["update-purchasing-vendor-gl-group-key"]>;

export const purchasing = defineApplication({
  document: object(shape<{ record: Document }>(), "purchasing/document", ["get"], {
    approve: action<RequestBody<operations["approve-purchasing-document"]>, ResponseResult<operations["approve-purchasing-document"]>>("approve"),
    decline: action<RequestBody<operations["decline-purchasing-document"]>, ResponseResult<operations["decline-purchasing-document"]>>("decline"),
    submit: action<RequestBody<operations["submit-purchasing-document"]>, ResponseResult<operations["submit-purchasing-document"]>>("submit"),
  }),
  documentConfigurationPreference: object(shape<{ record: DocumentConfigurationPreference; update: DocumentConfigurationPreferenceUpdate }>(), "purchasing/document-configuration-preference", ["get","update"]),
  documentHistory: object(shape<{ record: DocumentHistory }>(), "purchasing/document-history", ["get"]),
  documentLine: object(shape<{ record: DocumentLine }>(), "purchasing/document-line", ["get"]),
  documentLineDetail: object(shape<{ record: DocumentLineDetail }>(), "purchasing/document-line-detail", ["get"]),
  documentLineSubtotal: object(shape<{ record: DocumentLineSubtotal }>(), "purchasing/document-line-subtotal", ["get"]),
  documentLineByDocumentName: parameterizedObject(shape<{ record: DocumentLineByDocumentName; create: DocumentLineByDocumentNameCreate; update: DocumentLineByDocumentNameUpdate }>(), "purchasing/document-line::{documentName}", ["create","delete","get","update"]),
  documentSubtotal: object(shape<{ record: DocumentSubtotal }>(), "purchasing/document-subtotal", ["get"]),
  documentByDocumentName: parameterizedObject(shape<{ record: DocumentByDocumentName; create: DocumentByDocumentNameCreate; update: DocumentByDocumentNameUpdate }>(), "purchasing/document::{documentName}", ["create","delete","get","update"]),
  priceList: object(shape<{ record: PriceList; create: PriceListCreate; update: PriceListUpdate }>(), "purchasing/price-list", ["create","delete","get","update"]),
  priceListEntry: object(shape<{ record: PriceListEntry; create: PriceListEntryCreate; update: PriceListEntryUpdate }>(), "purchasing/price-list-entry", ["create","delete","get","update"]),
  priceSchedule: object(shape<{ record: PriceSchedule; create: PriceScheduleCreate; update: PriceScheduleUpdate }>(), "purchasing/price-schedule", ["create","delete","get","update"]),
  recurringDocument: object(shape<{ record: RecurringDocument }>(), "purchasing/recurring-document", ["get"]),
  recurringDocumentLine: object(shape<{ record: RecurringDocumentLine; create: RecurringDocumentLineCreate }>(), "purchasing/recurring-document-line", ["create","delete","get"]),
  recurringDocumentSubtotal: object(shape<{ record: RecurringDocumentSubtotal }>(), "purchasing/recurring-document-subtotal", ["get"]),
  recurringDocumentByDocumentName: parameterizedObject(shape<{ record: RecurringDocumentByDocumentName; create: RecurringDocumentByDocumentNameCreate; update: RecurringDocumentByDocumentNameUpdate }>(), "purchasing/recurring-document::{documentName}", ["create","delete","get","update"]),
  secondaryVendor: object(shape<{ record: SecondaryVendor; create: SecondaryVendorCreate; update: SecondaryVendorUpdate }>(), "purchasing/secondary-vendor", ["create","delete","get","update"]),
  subtotalTemplate: object(shape<{ record: SubtotalTemplate; create: SubtotalTemplateCreate; update: SubtotalTemplateUpdate }>(), "purchasing/subtotal-template", ["create","delete","get","update"]),
  subtotalTemplateLine: object(shape<{ record: SubtotalTemplateLine; create: SubtotalTemplateLineCreate; update: SubtotalTemplateLineUpdate }>(), "purchasing/subtotal-template-line", ["create","delete","get","update"]),
  txnAutomationPreference: object(shape<{ record: TxnAutomationPreference; update: TxnAutomationPreferenceUpdate }>(), "purchasing/txn-automation-preference", ["get","update"]),
  txnAutomationWithoutMatchPreference: object(shape<{ record: TxnAutomationWithoutMatchPreference; update: TxnAutomationWithoutMatchPreferenceUpdate }>(), "purchasing/txn-automation-without-match-preference", ["get","update"]),
  txnDefinition: object(shape<{ record: TxnDefinition; update: TxnDefinitionUpdate }>(), "purchasing/txn-definition", ["delete","get","update"]),
  txnDefinitionAdditionalGlDetail: object(shape<{ record: TxnDefinitionAdditionalGlDetail; update: TxnDefinitionAdditionalGlDetailUpdate }>(), "purchasing/txn-definition-additional-gl-detail", ["delete","get","update"]),
  txnDefinitionApDirectGlDetail: object(shape<{ record: TxnDefinitionApDirectGlDetail; create: TxnDefinitionApDirectGlDetailCreate; update: TxnDefinitionApDirectGlDetailUpdate }>(), "purchasing/txn-definition-ap-direct-gl-detail", ["create","delete","get","update"]),
  txnDefinitionEntitySettingDetail: object(shape<{ record: TxnDefinitionEntitySettingDetail; create: TxnDefinitionEntitySettingDetailCreate; update: TxnDefinitionEntitySettingDetailUpdate }>(), "purchasing/txn-definition-entity-setting-detail", ["create","delete","get","update"]),
  txnDefinitionInventoryTotalDetail: object(shape<{ record: TxnDefinitionInventoryTotalDetail; create: TxnDefinitionInventoryTotalDetailCreate; update: TxnDefinitionInventoryTotalDetailUpdate }>(), "purchasing/txn-definition-inventory-total-detail", ["create","delete","get","update"]),
  txnDefinitionSourceDocumentDetail: object(shape<{ record: TxnDefinitionSourceDocumentDetail; create: TxnDefinitionSourceDocumentDetailCreate; update: TxnDefinitionSourceDocumentDetailUpdate }>(), "purchasing/txn-definition-source-document-detail", ["create","delete","get","update"]),
  txnDefinitionSubtotalDetail: object(shape<{ record: TxnDefinitionSubtotalDetail; create: TxnDefinitionSubtotalDetailCreate; update: TxnDefinitionSubtotalDetailUpdate }>(), "purchasing/txn-definition-subtotal-detail", ["create","delete","get","update"]),
  txnMatchTolerancePreference: object(shape<{ record: TxnMatchTolerancePreference; update: TxnMatchTolerancePreferenceUpdate }>(), "purchasing/txn-match-tolerance-preference", ["get","update"]),
  vendorGlGroup: object(shape<{ record: VendorGlGroup; create: VendorGlGroupCreate; update: VendorGlGroupUpdate }>(), "purchasing/vendor-gl-group", ["create","delete","get","update"]),
});

export default purchasing;

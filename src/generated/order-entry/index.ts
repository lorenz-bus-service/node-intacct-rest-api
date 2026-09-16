// Generated from spec/order-entry.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** order-entry/customer-gl-group */
export type CustomerGlGroup = components["schemas"]["objects.order-entry.customer-gl-group"];
export type CustomerGlGroupCreate = RequestBody<operations["create-order-entry-customer-gl-group"]>;
export type CustomerGlGroupUpdate = RequestBody<operations["update-order-entry-customer-gl-group-key"]>;
/** order-entry/document */
export type Document = components["schemas"]["objects.order-entry.document"];
/** order-entry/document-configuration-preference */
export type DocumentConfigurationPreference = components["schemas"]["objects.order-entry.document-configuration-preference"];
export type DocumentConfigurationPreferenceUpdate = RequestBody<operations["update-order-entry-document-configuration-preference-key"]>;
/** order-entry/document-history */
export type DocumentHistory = components["schemas"]["objects.order-entry.document-history"];
/** order-entry/document-line */
export type DocumentLine = components["schemas"]["objects.order-entry.document-line"];
/** order-entry/document-line-detail */
export type DocumentLineDetail = components["schemas"]["objects.order-entry.document-line-detail"];
/** order-entry/document-line-subtotal */
export type DocumentLineSubtotal = components["schemas"]["objects.order-entry.document-line-subtotal"];
/** order-entry/document-line::{documentName} */
export type DocumentLineByDocumentName = components["schemas"]["objects.order-entry.document-line"];
export type DocumentLineByDocumentNameCreate = RequestBody<operations["create-order-entry-named-document-line"]>;
export type DocumentLineByDocumentNameUpdate = RequestBody<operations["update-order-entry-named-document-line-key"]>;
/** order-entry/document-subtotal */
export type DocumentSubtotal = components["schemas"]["objects.order-entry.document-subtotal"];
/** order-entry/document::{documentName} */
export type DocumentByDocumentName = components["schemas"]["objects.order-entry.document"];
export type DocumentByDocumentNameCreate = RequestBody<operations["create-order-entry-named-document"]>;
export type DocumentByDocumentNameUpdate = RequestBody<operations["update-order-entry-document-key"]>;
/** order-entry/price-list */
export type PriceList = components["schemas"]["objects.order-entry.price-list"];
export type PriceListCreate = RequestBody<operations["create-order-entry-price-list"]>;
export type PriceListUpdate = RequestBody<operations["update-order-entry-price-list-key"]>;
/** order-entry/price-list-entry */
export type PriceListEntry = components["schemas"]["objects.order-entry.price-list-entry"];
export type PriceListEntryCreate = RequestBody<operations["create-order-entry-price-list-entry"]>;
export type PriceListEntryUpdate = RequestBody<operations["update-order-entry-price-list-entry-key"]>;
/** order-entry/price-schedule */
export type PriceSchedule = components["schemas"]["objects.order-entry.price-schedule"];
export type PriceScheduleCreate = RequestBody<operations["create-order-entry-price-schedule"]>;
export type PriceScheduleUpdate = RequestBody<operations["update-order-entry-price-schedule-key"]>;
/** order-entry/recurring-document */
export type RecurringDocument = components["schemas"]["objects.order-entry.recurring-document"];
/** order-entry/recurring-document-line */
export type RecurringDocumentLine = components["schemas"]["objects.order-entry.recurring-document-line"];
export type RecurringDocumentLineCreate = RequestBody<operations["create-order-entry-recurring-document-line"]>;
/** order-entry/recurring-document-subtotal */
export type RecurringDocumentSubtotal = components["schemas"]["objects.order-entry.recurring-document-subtotal"];
/** order-entry/recurring-document::{documentName} */
export type RecurringDocumentByDocumentName = components["schemas"]["objects.order-entry.recurring-document"];
export type RecurringDocumentByDocumentNameCreate = RequestBody<operations["create-order-entry-named-recurring-document"]>;
export type RecurringDocumentByDocumentNameUpdate = RequestBody<operations["update-order-entry-recurring-document-key"]>;
/** order-entry/recurring-schedule */
export type RecurringSchedule = components["schemas"]["objects.order-entry.recurring-schedule"];
export type RecurringScheduleCreate = RequestBody<operations["create-order-entry-recurring-schedule"]>;
export type RecurringScheduleUpdate = RequestBody<operations["update-order-entry-recurring-schedule-key"]>;
/** order-entry/renewal-template */
export type RenewalTemplate = components["schemas"]["objects.order-entry.renewal-template"];
export type RenewalTemplateCreate = RequestBody<operations["create-order-entry-renewal-template"]>;
export type RenewalTemplateUpdate = RequestBody<operations["update-order-entry-renewal-template-key"]>;
/** order-entry/subtotal-template */
export type SubtotalTemplate = components["schemas"]["objects.order-entry.subtotal-template"];
export type SubtotalTemplateCreate = RequestBody<operations["create-order-entry-subtotal-template"]>;
export type SubtotalTemplateUpdate = RequestBody<operations["update-order-entry-subtotal-template-key"]>;
/** order-entry/subtotal-template-line */
export type SubtotalTemplateLine = components["schemas"]["objects.order-entry.subtotal-template-line"];
export type SubtotalTemplateLineCreate = RequestBody<operations["create-order-entry-subtotal-template-line"]>;
export type SubtotalTemplateLineUpdate = RequestBody<operations["update-order-entry-subtotal-template-line-key"]>;
/** order-entry/txn-buy-to-order-preference */
export type TxnBuyToOrderPreference = components["schemas"]["objects.order-entry.txn-buy-to-order-preference"];
export type TxnBuyToOrderPreferenceUpdate = RequestBody<operations["update-order-entry-txn-buy-to-order-preference-key"]>;
/** order-entry/txn-definition */
export type TxnDefinition = components["schemas"]["objects.order-entry.txn-definition"];
export type TxnDefinitionCreate = RequestBody<operations["create-order-entry-txn-definition"]>;
export type TxnDefinitionUpdate = RequestBody<operations["update-order-entry-txn-definition-key"]>;
/** order-entry/txn-definition-additional-gl-detail */
export type TxnDefinitionAdditionalGlDetail = components["schemas"]["objects.order-entry.txn-definition-additional-gl-detail"];
export type TxnDefinitionAdditionalGlDetailUpdate = RequestBody<operations["update-order-entry-txn-definition-additional-gl-detail-key"]>;
/** order-entry/txn-definition-ar-direct-gl-detail */
export type TxnDefinitionArDirectGlDetail = components["schemas"]["objects.order-entry.txn-definition-ar-direct-gl-detail"];
export type TxnDefinitionArDirectGlDetailUpdate = RequestBody<operations["update-order-entry-txn-definition-ar-direct-gl-detail-key"]>;
/** order-entry/txn-definition-cogs-gl-detail */
export type TxnDefinitionCogsGlDetail = components["schemas"]["objects.order-entry.txn-definition-cogs-gl-detail"];
export type TxnDefinitionCogsGlDetailUpdate = RequestBody<operations["update-order-entry-txn-definition-cogs-gl-detail-key"]>;
/** order-entry/txn-definition-entity-setting-detail */
export type TxnDefinitionEntitySettingDetail = components["schemas"]["objects.order-entry.txn-definition-entity-setting-detail"];
export type TxnDefinitionEntitySettingDetailCreate = RequestBody<operations["create-order-entry-txn-definition-entity-setting-detail"]>;
export type TxnDefinitionEntitySettingDetailUpdate = RequestBody<operations["update-order-entry-txn-definition-entity-setting-detail-key"]>;
/** order-entry/txn-definition-inventory-total-detail */
export type TxnDefinitionInventoryTotalDetail = components["schemas"]["objects.order-entry.txn-definition-inventory-total-detail"];
export type TxnDefinitionInventoryTotalDetailCreate = RequestBody<operations["create-order-entry-txn-definition-inventory-total-detail"]>;
export type TxnDefinitionInventoryTotalDetailUpdate = RequestBody<operations["update-order-entry-txn-definition-inventory-total-detail-key"]>;
/** order-entry/txn-definition-source-document-detail */
export type TxnDefinitionSourceDocumentDetail = components["schemas"]["objects.order-entry.txn-definition-source-document-detail"];
export type TxnDefinitionSourceDocumentDetailCreate = RequestBody<operations["create-order-entry-txn-definition-source-document-detail"]>;
export type TxnDefinitionSourceDocumentDetailUpdate = RequestBody<operations["update-order-entry-txn-definition-source-document-detail-key"]>;
/** order-entry/txn-definition-subtotal-detail */
export type TxnDefinitionSubtotalDetail = components["schemas"]["objects.order-entry.txn-definition-subtotal-detail"];
export type TxnDefinitionSubtotalDetailCreate = RequestBody<operations["create-order-entry-txn-definition-subtotal-detail"]>;
export type TxnDefinitionSubtotalDetailUpdate = RequestBody<operations["update-order-entry-txn-definition-subtotal-detail-key"]>;
/** order-entry/txn-drop-ship-preference */
export type TxnDropShipPreference = components["schemas"]["objects.order-entry.txn-drop-ship-preference"];
export type TxnDropShipPreferenceUpdate = RequestBody<operations["update-order-entry-txn-drop-ship-preference-key"]>;

export const orderEntry = defineApplication({
  customerGlGroup: object(shape<{ record: CustomerGlGroup; create: CustomerGlGroupCreate; update: CustomerGlGroupUpdate }>(), "order-entry/customer-gl-group", ["create","delete","get","update"]),
  document: object(shape<{ record: Document }>(), "order-entry/document", ["get"], {
    generatePdf: action<RequestBody<operations["generate-pdf-order-entry-document"]>, ResponseResult<operations["generate-pdf-order-entry-document"]>>("generate-pdf"),
  }),
  documentConfigurationPreference: object(shape<{ record: DocumentConfigurationPreference; update: DocumentConfigurationPreferenceUpdate }>(), "order-entry/document-configuration-preference", ["get","update"]),
  documentHistory: object(shape<{ record: DocumentHistory }>(), "order-entry/document-history", ["get"]),
  documentLine: object(shape<{ record: DocumentLine }>(), "order-entry/document-line", ["get"]),
  documentLineDetail: object(shape<{ record: DocumentLineDetail }>(), "order-entry/document-line-detail", ["get"]),
  documentLineSubtotal: object(shape<{ record: DocumentLineSubtotal }>(), "order-entry/document-line-subtotal", ["get"]),
  documentLineByDocumentName: parameterizedObject(shape<{ record: DocumentLineByDocumentName; create: DocumentLineByDocumentNameCreate; update: DocumentLineByDocumentNameUpdate }>(), "order-entry/document-line::{documentName}", ["create","delete","get","update"]),
  documentSubtotal: object(shape<{ record: DocumentSubtotal }>(), "order-entry/document-subtotal", ["get"]),
  documentByDocumentName: parameterizedObject(shape<{ record: DocumentByDocumentName; create: DocumentByDocumentNameCreate; update: DocumentByDocumentNameUpdate }>(), "order-entry/document::{documentName}", ["create","delete","get","update"]),
  priceList: object(shape<{ record: PriceList; create: PriceListCreate; update: PriceListUpdate }>(), "order-entry/price-list", ["create","delete","get","update"]),
  priceListEntry: object(shape<{ record: PriceListEntry; create: PriceListEntryCreate; update: PriceListEntryUpdate }>(), "order-entry/price-list-entry", ["create","delete","get","update"]),
  priceSchedule: object(shape<{ record: PriceSchedule; create: PriceScheduleCreate; update: PriceScheduleUpdate }>(), "order-entry/price-schedule", ["create","delete","get","update"]),
  recurringDocument: object(shape<{ record: RecurringDocument }>(), "order-entry/recurring-document", ["get"]),
  recurringDocumentLine: object(shape<{ record: RecurringDocumentLine; create: RecurringDocumentLineCreate }>(), "order-entry/recurring-document-line", ["create","delete","get"]),
  recurringDocumentSubtotal: object(shape<{ record: RecurringDocumentSubtotal }>(), "order-entry/recurring-document-subtotal", ["get"]),
  recurringDocumentByDocumentName: parameterizedObject(shape<{ record: RecurringDocumentByDocumentName; create: RecurringDocumentByDocumentNameCreate; update: RecurringDocumentByDocumentNameUpdate }>(), "order-entry/recurring-document::{documentName}", ["create","delete","get","update"]),
  recurringSchedule: object(shape<{ record: RecurringSchedule; create: RecurringScheduleCreate; update: RecurringScheduleUpdate }>(), "order-entry/recurring-schedule", ["create","delete","get","update"]),
  renewalTemplate: object(shape<{ record: RenewalTemplate; create: RenewalTemplateCreate; update: RenewalTemplateUpdate }>(), "order-entry/renewal-template", ["create","delete","get","update"]),
  subtotalTemplate: object(shape<{ record: SubtotalTemplate; create: SubtotalTemplateCreate; update: SubtotalTemplateUpdate }>(), "order-entry/subtotal-template", ["create","delete","get","update"]),
  subtotalTemplateLine: object(shape<{ record: SubtotalTemplateLine; create: SubtotalTemplateLineCreate; update: SubtotalTemplateLineUpdate }>(), "order-entry/subtotal-template-line", ["create","delete","get","update"]),
  txnBuyToOrderPreference: object(shape<{ record: TxnBuyToOrderPreference; update: TxnBuyToOrderPreferenceUpdate }>(), "order-entry/txn-buy-to-order-preference", ["delete","get","update"]),
  txnDefinition: object(shape<{ record: TxnDefinition; create: TxnDefinitionCreate; update: TxnDefinitionUpdate }>(), "order-entry/txn-definition", ["create","delete","get","update"]),
  txnDefinitionAdditionalGlDetail: object(shape<{ record: TxnDefinitionAdditionalGlDetail; update: TxnDefinitionAdditionalGlDetailUpdate }>(), "order-entry/txn-definition-additional-gl-detail", ["delete","get","update"]),
  txnDefinitionArDirectGlDetail: object(shape<{ record: TxnDefinitionArDirectGlDetail; update: TxnDefinitionArDirectGlDetailUpdate }>(), "order-entry/txn-definition-ar-direct-gl-detail", ["delete","get","update"]),
  txnDefinitionCogsGlDetail: object(shape<{ record: TxnDefinitionCogsGlDetail; update: TxnDefinitionCogsGlDetailUpdate }>(), "order-entry/txn-definition-cogs-gl-detail", ["delete","get","update"]),
  txnDefinitionEntitySettingDetail: object(shape<{ record: TxnDefinitionEntitySettingDetail; create: TxnDefinitionEntitySettingDetailCreate; update: TxnDefinitionEntitySettingDetailUpdate }>(), "order-entry/txn-definition-entity-setting-detail", ["create","delete","get","update"]),
  txnDefinitionInventoryTotalDetail: object(shape<{ record: TxnDefinitionInventoryTotalDetail; create: TxnDefinitionInventoryTotalDetailCreate; update: TxnDefinitionInventoryTotalDetailUpdate }>(), "order-entry/txn-definition-inventory-total-detail", ["create","delete","get","update"]),
  txnDefinitionSourceDocumentDetail: object(shape<{ record: TxnDefinitionSourceDocumentDetail; create: TxnDefinitionSourceDocumentDetailCreate; update: TxnDefinitionSourceDocumentDetailUpdate }>(), "order-entry/txn-definition-source-document-detail", ["create","delete","get","update"]),
  txnDefinitionSubtotalDetail: object(shape<{ record: TxnDefinitionSubtotalDetail; create: TxnDefinitionSubtotalDetailCreate; update: TxnDefinitionSubtotalDetailUpdate }>(), "order-entry/txn-definition-subtotal-detail", ["create","delete","get","update"]),
  txnDropShipPreference: object(shape<{ record: TxnDropShipPreference; update: TxnDropShipPreferenceUpdate }>(), "order-entry/txn-drop-ship-preference", ["delete","get","update"]),
});

export default orderEntry;

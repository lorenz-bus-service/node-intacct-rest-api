// Generated from spec/tax.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** tax/account-label-tax-group */
export type AccountLabelTaxGroup = components["schemas"]["objects.tax.account-label-tax-group"];
export type AccountLabelTaxGroupCreate = RequestBody<operations["create-tax-account-label-tax-group"]>;
export type AccountLabelTaxGroupUpdate = RequestBody<operations["update-tax-account-label-tax-group-key"]>;
/** tax/contact-tax-group */
export type ContactTaxGroup = components["schemas"]["objects.tax.contact-tax-group"];
export type ContactTaxGroupCreate = RequestBody<operations["create-tax-contact-tax-group"]>;
export type ContactTaxGroupUpdate = RequestBody<operations["update-tax-contact-tax-group-key"]>;
/** tax/item-tax-group */
export type ItemTaxGroup = components["schemas"]["objects.tax.item-tax-group"];
export type ItemTaxGroupCreate = RequestBody<operations["create-tax-item-tax-group"]>;
export type ItemTaxGroupUpdate = RequestBody<operations["update-tax-item-tax-group-key"]>;
/** tax/order-entry-tax-detail */
export type OrderEntryTaxDetail = components["schemas"]["objects.tax.order-entry-tax-detail"];
export type OrderEntryTaxDetailCreate = RequestBody<operations["create-tax-order-entry-tax-detail"]>;
export type OrderEntryTaxDetailUpdate = RequestBody<operations["update-tax-order-entry-tax-detail-key"]>;
/** tax/order-entry-tax-schedule */
export type OrderEntryTaxSchedule = components["schemas"]["objects.tax.order-entry-tax-schedule"];
export type OrderEntryTaxScheduleCreate = RequestBody<operations["create-tax-order-entry-tax-schedule"]>;
export type OrderEntryTaxScheduleUpdate = RequestBody<operations["update-tax-order-entry-tax-schedule-key"]>;
/** tax/order-entry-tax-schedule-detail */
export type OrderEntryTaxScheduleDetail = components["schemas"]["objects.tax.order-entry-tax-schedule-detail"];
/** tax/purchasing-tax-detail */
export type PurchasingTaxDetail = components["schemas"]["objects.tax.purchasing-tax-detail"];
export type PurchasingTaxDetailCreate = RequestBody<operations["create-tax-purchasing-tax-detail"]>;
export type PurchasingTaxDetailUpdate = RequestBody<operations["update-tax-purchasing-tax-detail-key"]>;
/** tax/purchasing-tax-schedule */
export type PurchasingTaxSchedule = components["schemas"]["objects.tax.purchasing-tax-schedule"];
export type PurchasingTaxScheduleCreate = RequestBody<operations["create-tax-purchasing-tax-schedule"]>;
export type PurchasingTaxScheduleUpdate = RequestBody<operations["update-tax-purchasing-tax-schedule-key"]>;
/** tax/purchasing-tax-schedule-detail */
export type PurchasingTaxScheduleDetail = components["schemas"]["objects.tax.purchasing-tax-schedule-detail"];
/** tax/tax-authority */
export type TaxAuthority = components["schemas"]["objects.tax.tax-authority"];
export type TaxAuthorityCreate = RequestBody<operations["create-tax-tax-authority"]>;
export type TaxAuthorityUpdate = RequestBody<operations["update-tax-tax-authority-key"]>;
/** tax/tax-detail */
export type TaxDetail = components["schemas"]["objects.tax.tax-detail"];
/** tax/tax-record */
export type TaxRecord = components["schemas"]["objects.tax.tax-record"];
/** tax/tax-return */
export type TaxReturn = components["schemas"]["objects.tax.tax-return"];
export type TaxReturnCreate = RequestBody<operations["create-tax-tax-return"]>;
export type TaxReturnUpdate = RequestBody<operations["update-tax-tax-return-key"]>;
/** tax/tax-solution */
export type TaxSolution = components["schemas"]["objects.tax.tax-solution"];

export const tax = defineApplication({
  accountLabelTaxGroup: object(shape<{ record: AccountLabelTaxGroup; create: AccountLabelTaxGroupCreate; update: AccountLabelTaxGroupUpdate }>(), "tax/account-label-tax-group", ["create","delete","get","update"]),
  contactTaxGroup: object(shape<{ record: ContactTaxGroup; create: ContactTaxGroupCreate; update: ContactTaxGroupUpdate }>(), "tax/contact-tax-group", ["create","delete","get","update"]),
  itemTaxGroup: object(shape<{ record: ItemTaxGroup; create: ItemTaxGroupCreate; update: ItemTaxGroupUpdate }>(), "tax/item-tax-group", ["create","delete","get","update"]),
  orderEntryTaxDetail: object(shape<{ record: OrderEntryTaxDetail; create: OrderEntryTaxDetailCreate; update: OrderEntryTaxDetailUpdate }>(), "tax/order-entry-tax-detail", ["create","delete","get","update"]),
  orderEntryTaxSchedule: object(shape<{ record: OrderEntryTaxSchedule; create: OrderEntryTaxScheduleCreate; update: OrderEntryTaxScheduleUpdate }>(), "tax/order-entry-tax-schedule", ["create","delete","get","update"]),
  orderEntryTaxScheduleDetail: object(shape<{ record: OrderEntryTaxScheduleDetail }>(), "tax/order-entry-tax-schedule-detail", ["get"]),
  purchasingTaxDetail: object(shape<{ record: PurchasingTaxDetail; create: PurchasingTaxDetailCreate; update: PurchasingTaxDetailUpdate }>(), "tax/purchasing-tax-detail", ["create","delete","get","update"]),
  purchasingTaxSchedule: object(shape<{ record: PurchasingTaxSchedule; create: PurchasingTaxScheduleCreate; update: PurchasingTaxScheduleUpdate }>(), "tax/purchasing-tax-schedule", ["create","delete","get","update"]),
  purchasingTaxScheduleDetail: object(shape<{ record: PurchasingTaxScheduleDetail }>(), "tax/purchasing-tax-schedule-detail", ["get"]),
  taxAuthority: object(shape<{ record: TaxAuthority; create: TaxAuthorityCreate; update: TaxAuthorityUpdate }>(), "tax/tax-authority", ["create","delete","get","update"]),
  taxDetail: object(shape<{ record: TaxDetail }>(), "tax/tax-detail", ["get"]),
  taxRecord: object(shape<{ record: TaxRecord }>(), "tax/tax-record", ["get"]),
  taxReturn: object(shape<{ record: TaxReturn; create: TaxReturnCreate; update: TaxReturnUpdate }>(), "tax/tax-return", ["create","delete","get","update"]),
  taxSolution: object(shape<{ record: TaxSolution }>(), "tax/tax-solution", ["delete","get"]),
});

export default tax;

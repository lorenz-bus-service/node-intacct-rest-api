// Generated from spec/accounts-receivable.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** accounts-receivable/account-label */
export type AccountLabel = components["schemas"]["objects.accounts-receivable.account-label"];
export type AccountLabelCreate = RequestBody<operations["create-accounts-receivable-account-label"]>;
export type AccountLabelUpdate = RequestBody<operations["update-accounts-receivable-account-label-key"]>;
/** accounts-receivable/adjustment */
export type Adjustment = components["schemas"]["objects.accounts-receivable.adjustment"];
export type AdjustmentCreate = RequestBody<operations["create-accounts-receivable-adjustment"]>;
export type AdjustmentUpdate = RequestBody<operations["update-accounts-receivable-adjustment-key"]>;
/** accounts-receivable/adjustment-line */
export type AdjustmentLine = components["schemas"]["objects.accounts-receivable.adjustment-line"];
export type AdjustmentLineCreate = RequestBody<operations["create-accounts-receivable-adjustment-line"]>;
export type AdjustmentLineUpdate = RequestBody<operations["update-accounts-receivable-adjustment-line"]>;
/** accounts-receivable/adjustment-tax-entry */
export type AdjustmentTaxEntry = components["schemas"]["objects.accounts-receivable.adjustment-tax-entry"];
/** accounts-receivable/advance */
export type Advance = components["schemas"]["objects.accounts-receivable.advance"];
export type AdvanceCreate = RequestBody<operations["create-accounts-receivable-advance"]>;
export type AdvanceUpdate = RequestBody<operations["update-accounts-receivable-advance-key"]>;
/** accounts-receivable/advance-line */
export type AdvanceLine = components["schemas"]["objects.accounts-receivable.advance-line"];
export type AdvanceLineCreate = RequestBody<operations["create-receivable-advance-line"]>;
export type AdvanceLineUpdate = RequestBody<operations["update-accounts-receivable-advance-line"]>;
/** accounts-receivable/billback-template */
export type BillbackTemplate = components["schemas"]["objects.accounts-receivable.billback-template"];
export type BillbackTemplateCreate = RequestBody<operations["create-accounts-receivable-billback-template"]>;
export type BillbackTemplateUpdate = RequestBody<operations["update-accounts-receivable-billback-template-key"]>;
/** accounts-receivable/billback-template-line */
export type BillbackTemplateLine = components["schemas"]["objects.accounts-receivable.billback-template-line"];
export type BillbackTemplateLineCreate = RequestBody<operations["create-accounts-receivable-billback-template-line"]>;
export type BillbackTemplateLineUpdate = RequestBody<operations["update-accounts-receivable-billback-template-line"]>;
/** accounts-receivable/customer */
export type Customer = components["schemas"]["objects.accounts-receivable.customer"];
export type CustomerCreate = RequestBody<operations["create-accounts-receivable-customer"]>;
export type CustomerUpdate = RequestBody<operations["update-accounts-receivable-customer-key"]>;
/** accounts-receivable/customer-contact */
export type CustomerContact = components["schemas"]["objects.accounts-receivable.customer-contact"];
/** accounts-receivable/customer-electronic-payment */
export type CustomerElectronicPayment = components["schemas"]["objects.accounts-receivable.customer-electronic-payment"];
/** accounts-receivable/customer-email-template */
export type CustomerEmailTemplate = components["schemas"]["objects.accounts-receivable.customer-email-template"];
export type CustomerEmailTemplateCreate = RequestBody<operations["create-accounts-receivable-customer-email-template"]>;
export type CustomerEmailTemplateUpdate = RequestBody<operations["update-accounts-receivable-customer-email-template-key"]>;
/** accounts-receivable/customer-group */
export type CustomerGroup = components["schemas"]["objects.accounts-receivable.customer-group"];
export type CustomerGroupCreate = RequestBody<operations["create-accounts-receivable-customer-group"]>;
export type CustomerGroupUpdate = RequestBody<operations["update-accounts-receivable-customer-group-key"]>;
/** accounts-receivable/customer-item-cross-reference */
export type CustomerItemCrossReference = components["schemas"]["objects.accounts-receivable.customer-item-cross-reference"];
export type CustomerItemCrossReferenceCreate = RequestBody<operations["create-accounts-receivable-customer-item-cross-reference"]>;
export type CustomerItemCrossReferenceUpdate = RequestBody<operations["update-accounts-receivable-customer-item-cross-reference-key"]>;
/** accounts-receivable/customer-message */
export type CustomerMessage = components["schemas"]["objects.accounts-receivable.customer-message"];
export type CustomerMessageCreate = RequestBody<operations["create-accounts-receivable-customer-message"]>;
export type CustomerMessageUpdate = RequestBody<operations["update-accounts-receivable-customer-message-key"]>;
/** accounts-receivable/customer-refund */
export type CustomerRefund = components["schemas"]["objects.accounts-receivable.customer-refund"];
export type CustomerRefundCreate = RequestBody<operations["create-accounts-receivable-customer-refund"]>;
export type CustomerRefundUpdate = RequestBody<operations["update-accounts-receivable-customer-refund-key"]>;
/** accounts-receivable/customer-refund-detail */
export type CustomerRefundDetail = components["schemas"]["objects.accounts-receivable.customer-refund-detail"];
/** accounts-receivable/customer-refund-line */
export type CustomerRefundLine = components["schemas"]["objects.accounts-receivable.customer-refund-line"];
/** accounts-receivable/customer-restricted-department */
export type CustomerRestrictedDepartment = components["schemas"]["objects.accounts-receivable.customer-restricted-department"];
/** accounts-receivable/customer-restricted-location */
export type CustomerRestrictedLocation = components["schemas"]["objects.accounts-receivable.customer-restricted-location"];
/** accounts-receivable/customer-total */
export type CustomerTotal = components["schemas"]["objects.accounts-receivable.customer-total"];
/** accounts-receivable/customer-type */
export type CustomerType = components["schemas"]["objects.accounts-receivable.customer-type"];
export type CustomerTypeCreate = RequestBody<operations["create-accounts-receivable-customer-type"]>;
export type CustomerTypeUpdate = RequestBody<operations["update-accounts-receivable-customer-type-key"]>;
/** accounts-receivable/delivery-history */
export type DeliveryHistory = components["schemas"]["objects.accounts-receivable.delivery-history"];
/** accounts-receivable/dunning-customer */
export type DunningCustomer = components["schemas"]["objects.accounts-receivable.dunning-customer"];
/** accounts-receivable/dunning-invoice */
export type DunningInvoice = components["schemas"]["objects.accounts-receivable.dunning-invoice"];
/** accounts-receivable/dunning-level */
export type DunningLevel = components["schemas"]["objects.accounts-receivable.dunning-level"];
export type DunningLevelCreate = RequestBody<operations["create-accounts-receivable-dunning-level"]>;
export type DunningLevelUpdate = RequestBody<operations["update-accounts-receivable-dunning-level-key"]>;
/** accounts-receivable/dunning-notice */
export type DunningNotice = components["schemas"]["objects.accounts-receivable.dunning-notice"];
export type DunningNoticeCreate = RequestBody<operations["create-accounts-receivable-dunning-notice"]>;
/** accounts-receivable/invoice */
export type Invoice = components["schemas"]["objects.accounts-receivable.invoice"];
export type InvoiceCreate = RequestBody<operations["create-accounts-receivable-invoice"]>;
export type InvoiceUpdate = RequestBody<operations["update-accounts-receivable-invoice-key"]>;
/** accounts-receivable/invoice-line */
export type InvoiceLine = components["schemas"]["objects.accounts-receivable.invoice-line"];
export type InvoiceLineCreate = RequestBody<operations["create-accounts-receivable-invoice-line"]>;
export type InvoiceLineUpdate = RequestBody<operations["update-accounts-receivable-invoice-line"]>;
/** accounts-receivable/invoice-summary */
export type InvoiceSummary = components["schemas"]["objects.accounts-receivable.invoice-summary"];
/** accounts-receivable/invoice-tax-entry */
export type InvoiceTaxEntry = components["schemas"]["objects.accounts-receivable.invoice-tax-entry"];
/** accounts-receivable/manual-deposit */
export type ManualDeposit = components["schemas"]["objects.accounts-receivable.manual-deposit"];
export type ManualDepositCreate = RequestBody<operations["create-accounts-receivable-manual-deposit"]>;
/** accounts-receivable/manual-deposit-line */
export type ManualDepositLine = components["schemas"]["objects.accounts-receivable.manual-deposit-line"];
/** accounts-receivable/manual-deposit-summary */
export type ManualDepositSummary = components["schemas"]["objects.accounts-receivable.manual-deposit-summary"];
/** accounts-receivable/payment */
export type Payment = components["schemas"]["objects.accounts-receivable.payment"];
export type PaymentCreate = RequestBody<operations["create-accounts-receivable-payment"]>;
/** accounts-receivable/payment-detail */
export type PaymentDetail = components["schemas"]["objects.accounts-receivable.payment-detail"];
/** accounts-receivable/payment-line */
export type PaymentLine = components["schemas"]["objects.accounts-receivable.payment-line"];
/** accounts-receivable/payment-summary */
export type PaymentSummary = components["schemas"]["objects.accounts-receivable.payment-summary"];
export type PaymentSummaryCreate = RequestBody<operations["create-accounts-receivable-payment-summary"]>;
export type PaymentSummaryUpdate = RequestBody<operations["update-accounts-receivable-payment-summary"]>;
/** accounts-receivable/recurring-invoice */
export type RecurringInvoice = components["schemas"]["objects.accounts-receivable.recurring-invoice"];
export type RecurringInvoiceCreate = RequestBody<operations["create-accounts-receivable-recurring-invoice"]>;
export type RecurringInvoiceUpdate = RequestBody<operations["update-accounts-receivable-recurring-invoice-key"]>;
/** accounts-receivable/recurring-invoice-line */
export type RecurringInvoiceLine = components["schemas"]["objects.accounts-receivable.recurring-invoice-line"];
export type RecurringInvoiceLineCreate = RequestBody<operations["create-accounts-receivable-recurring-invoice-line"]>;
export type RecurringInvoiceLineUpdate = RequestBody<operations["update-accounts-receivable-recurring-invoice-line"]>;
/** accounts-receivable/recurring-invoice-tax-entry */
export type RecurringInvoiceTaxEntry = components["schemas"]["objects.accounts-receivable.recurring-invoice-tax-entry"];
/** accounts-receivable/revenue-recognition-template */
export type RevenueRecognitionTemplate = components["schemas"]["objects.accounts-receivable.revenue-recognition-template"];
export type RevenueRecognitionTemplateCreate = RequestBody<operations["create-accounts-receivable-revenue-recognition-template"]>;
export type RevenueRecognitionTemplateUpdate = RequestBody<operations["update-accounts-receivable-revenue-recognition-template-key"]>;
/** accounts-receivable/shipping-method */
export type ShippingMethod = components["schemas"]["objects.accounts-receivable.shipping-method"];
export type ShippingMethodCreate = RequestBody<operations["create-accounts-receivable-shipping-method"]>;
export type ShippingMethodUpdate = RequestBody<operations["update-accounts-receivable-shipping-method-key"]>;
/** accounts-receivable/summary */
export type Summary = components["schemas"]["objects.accounts-receivable.summary"];
export type SummaryCreate = RequestBody<operations["create-accounts-receivable-summary"]>;
export type SummaryUpdate = RequestBody<operations["update-accounts-receivable-summary-key"]>;
/** accounts-receivable/term */
export type Term = components["schemas"]["objects.accounts-receivable.term"];
export type TermCreate = RequestBody<operations["create-accounts-receivable-term"]>;
export type TermUpdate = RequestBody<operations["update-accounts-receivable-term-key"]>;
/** accounts-receivable/territory */
export type Territory = components["schemas"]["objects.accounts-receivable.territory"];
export type TerritoryCreate = RequestBody<operations["create-accounts-receivable-territory"]>;
export type TerritoryUpdate = RequestBody<operations["update-accounts-receivable-territory-key"]>;
/** accounts-receivable/territory-group */
export type TerritoryGroup = components["schemas"]["objects.accounts-receivable.territory-group"];
export type TerritoryGroupCreate = RequestBody<operations["create-accounts-receivable-territory-group"]>;
export type TerritoryGroupUpdate = RequestBody<operations["update-accounts-receivable-territory-group-key"]>;

export const accountsReceivable = defineApplication({
  accountLabel: object(shape<{ record: AccountLabel; create: AccountLabelCreate; update: AccountLabelUpdate }>(), "accounts-receivable/account-label", ["create","delete","get","update"]),
  adjustment: object(shape<{ record: Adjustment; create: AdjustmentCreate; update: AdjustmentUpdate }>(), "accounts-receivable/adjustment", ["create","delete","get","update"], {
    reclassify: action<RequestBody<operations["reclassify-accounts-receivable-adjustment"]>, ResponseResult<operations["reclassify-accounts-receivable-adjustment"]>>("reclassify"),
    reverse: action<RequestBody<operations["reverse-accounts-receivable-adjustment"]>, ResponseResult<operations["reverse-accounts-receivable-adjustment"]>>("reverse"),
    submit: action<RequestBody<operations["submit-accounts-receivable-adjustment"]>, ResponseResult<operations["submit-accounts-receivable-adjustment"]>>("submit"),
  }),
  adjustmentLine: object(shape<{ record: AdjustmentLine; create: AdjustmentLineCreate; update: AdjustmentLineUpdate }>(), "accounts-receivable/adjustment-line", ["create","delete","get","update"]),
  adjustmentTaxEntry: object(shape<{ record: AdjustmentTaxEntry }>(), "accounts-receivable/adjustment-tax-entry", ["get"]),
  advance: object(shape<{ record: Advance; create: AdvanceCreate; update: AdvanceUpdate }>(), "accounts-receivable/advance", ["create","delete","get","update"], {
    reverse: action<RequestBody<operations["reverse-accounts-receivable-advance"]>, ResponseResult<operations["reverse-accounts-receivable-advance"]>>("reverse"),
    submit: action<RequestBody<operations["submit-accounts-receivable-advance"]>, ResponseResult<operations["submit-accounts-receivable-advance"]>>("submit"),
  }),
  advanceLine: object(shape<{ record: AdvanceLine; create: AdvanceLineCreate; update: AdvanceLineUpdate }>(), "accounts-receivable/advance-line", ["create","get","update"]),
  billbackTemplate: object(shape<{ record: BillbackTemplate; create: BillbackTemplateCreate; update: BillbackTemplateUpdate }>(), "accounts-receivable/billback-template", ["create","delete","get","update"]),
  billbackTemplateLine: object(shape<{ record: BillbackTemplateLine; create: BillbackTemplateLineCreate; update: BillbackTemplateLineUpdate }>(), "accounts-receivable/billback-template-line", ["create","delete","get","update"]),
  customer: object(shape<{ record: Customer; create: CustomerCreate; update: CustomerUpdate }>(), "accounts-receivable/customer", ["create","delete","get","update"]),
  customerContact: object(shape<{ record: CustomerContact }>(), "accounts-receivable/customer-contact", ["get"]),
  customerElectronicPayment: object(shape<{ record: CustomerElectronicPayment }>(), "accounts-receivable/customer-electronic-payment", ["get"]),
  customerEmailTemplate: object(shape<{ record: CustomerEmailTemplate; create: CustomerEmailTemplateCreate; update: CustomerEmailTemplateUpdate }>(), "accounts-receivable/customer-email-template", ["create","delete","get","update"]),
  customerGroup: object(shape<{ record: CustomerGroup; create: CustomerGroupCreate; update: CustomerGroupUpdate }>(), "accounts-receivable/customer-group", ["create","delete","get","update"]),
  customerItemCrossReference: object(shape<{ record: CustomerItemCrossReference; create: CustomerItemCrossReferenceCreate; update: CustomerItemCrossReferenceUpdate }>(), "accounts-receivable/customer-item-cross-reference", ["create","delete","get","update"]),
  customerMessage: object(shape<{ record: CustomerMessage; create: CustomerMessageCreate; update: CustomerMessageUpdate }>(), "accounts-receivable/customer-message", ["create","get","update"]),
  customerRefund: object(shape<{ record: CustomerRefund; create: CustomerRefundCreate; update: CustomerRefundUpdate }>(), "accounts-receivable/customer-refund", ["create","delete","get","update"], {
    reverse: action<RequestBody<operations["reverse-accounts-receivable-customer-refund"]>, ResponseResult<operations["reverse-accounts-receivable-customer-refund"]>>("reverse"),
    submit: action<RequestBody<operations["submit-accounts-receivable-customer-refund"]>, ResponseResult<operations["submit-accounts-receivable-customer-refund"]>>("submit"),
  }),
  customerRefundDetail: object(shape<{ record: CustomerRefundDetail }>(), "accounts-receivable/customer-refund-detail", ["get"]),
  customerRefundLine: object(shape<{ record: CustomerRefundLine }>(), "accounts-receivable/customer-refund-line", ["get"]),
  customerRestrictedDepartment: object(shape<{ record: CustomerRestrictedDepartment }>(), "accounts-receivable/customer-restricted-department", ["get"]),
  customerRestrictedLocation: object(shape<{ record: CustomerRestrictedLocation }>(), "accounts-receivable/customer-restricted-location", ["get"]),
  customerTotal: object(shape<{ record: CustomerTotal }>(), "accounts-receivable/customer-total", ["get"]),
  customerType: object(shape<{ record: CustomerType; create: CustomerTypeCreate; update: CustomerTypeUpdate }>(), "accounts-receivable/customer-type", ["create","delete","get","update"]),
  deliveryHistory: object(shape<{ record: DeliveryHistory }>(), "accounts-receivable/delivery-history", ["get"]),
  dunningCustomer: object(shape<{ record: DunningCustomer }>(), "accounts-receivable/dunning-customer", ["get"]),
  dunningInvoice: object(shape<{ record: DunningInvoice }>(), "accounts-receivable/dunning-invoice", ["get"]),
  dunningLevel: object(shape<{ record: DunningLevel; create: DunningLevelCreate; update: DunningLevelUpdate }>(), "accounts-receivable/dunning-level", ["create","delete","get","update"]),
  dunningNotice: object(shape<{ record: DunningNotice; create: DunningNoticeCreate }>(), "accounts-receivable/dunning-notice", ["create","get"]),
  invoice: object(shape<{ record: Invoice; create: InvoiceCreate; update: InvoiceUpdate }>(), "accounts-receivable/invoice", ["create","delete","get","update"], {
    generatePdf: action<RequestBody<operations["generate-pdf-accounts-receivable-invoice"]>, ResponseResult<operations["generate-pdf-accounts-receivable-invoice"]>>("generate-pdf"),
    reclassify: action<RequestBody<operations["reclassify-accounts-receivable-invoice"]>, ResponseResult<operations["reclassify-accounts-receivable-invoice"]>>("reclassify"),
    reverse: action<RequestBody<operations["reverse-accounts-receivable-invoice"]>, ResponseResult<operations["reverse-accounts-receivable-invoice"]>>("reverse"),
    submit: action<RequestBody<operations["submit-accounts-receivable-invoice"]>, ResponseResult<operations["submit-accounts-receivable-invoice"]>>("submit"),
  }),
  invoiceLine: object(shape<{ record: InvoiceLine; create: InvoiceLineCreate; update: InvoiceLineUpdate }>(), "accounts-receivable/invoice-line", ["create","delete","get","update"]),
  invoiceSummary: object(shape<{ record: InvoiceSummary }>(), "accounts-receivable/invoice-summary", ["get"]),
  invoiceTaxEntry: object(shape<{ record: InvoiceTaxEntry }>(), "accounts-receivable/invoice-tax-entry", ["get"]),
  manualDeposit: object(shape<{ record: ManualDeposit; create: ManualDepositCreate }>(), "accounts-receivable/manual-deposit", ["create","get"]),
  manualDepositLine: object(shape<{ record: ManualDepositLine }>(), "accounts-receivable/manual-deposit-line", ["get"]),
  manualDepositSummary: object(shape<{ record: ManualDepositSummary }>(), "accounts-receivable/manual-deposit-summary", ["get"]),
  payment: object(shape<{ record: Payment; create: PaymentCreate }>(), "accounts-receivable/payment", ["create","delete","get"], {
    reverse: action<RequestBody<operations["reverse-accounts-receivable-payment"]>, ResponseResult<operations["reverse-accounts-receivable-payment"]>>("reverse"),
    submit: action<RequestBody<operations["submit-accounts-receivable-payment"]>, ResponseResult<operations["submit-accounts-receivable-payment"]>>("submit"),
  }),
  paymentDetail: object(shape<{ record: PaymentDetail }>(), "accounts-receivable/payment-detail", ["get"]),
  paymentLine: object(shape<{ record: PaymentLine }>(), "accounts-receivable/payment-line", ["get"]),
  paymentSummary: object(shape<{ record: PaymentSummary; create: PaymentSummaryCreate; update: PaymentSummaryUpdate }>(), "accounts-receivable/payment-summary", ["create","delete","get","update"]),
  recurringInvoice: object(shape<{ record: RecurringInvoice; create: RecurringInvoiceCreate; update: RecurringInvoiceUpdate }>(), "accounts-receivable/recurring-invoice", ["create","delete","get","update"]),
  recurringInvoiceLine: object(shape<{ record: RecurringInvoiceLine; create: RecurringInvoiceLineCreate; update: RecurringInvoiceLineUpdate }>(), "accounts-receivable/recurring-invoice-line", ["create","delete","get","update"]),
  recurringInvoiceTaxEntry: object(shape<{ record: RecurringInvoiceTaxEntry }>(), "accounts-receivable/recurring-invoice-tax-entry", ["get"]),
  revenueRecognitionTemplate: object(shape<{ record: RevenueRecognitionTemplate; create: RevenueRecognitionTemplateCreate; update: RevenueRecognitionTemplateUpdate }>(), "accounts-receivable/revenue-recognition-template", ["create","delete","get","update"]),
  shippingMethod: object(shape<{ record: ShippingMethod; create: ShippingMethodCreate; update: ShippingMethodUpdate }>(), "accounts-receivable/shipping-method", ["create","delete","get","update"]),
  summary: object(shape<{ record: Summary; create: SummaryCreate; update: SummaryUpdate }>(), "accounts-receivable/summary", ["create","delete","get","update"]),
  term: object(shape<{ record: Term; create: TermCreate; update: TermUpdate }>(), "accounts-receivable/term", ["create","delete","get","update"]),
  territory: object(shape<{ record: Territory; create: TerritoryCreate; update: TerritoryUpdate }>(), "accounts-receivable/territory", ["create","delete","get","update"]),
  territoryGroup: object(shape<{ record: TerritoryGroup; create: TerritoryGroupCreate; update: TerritoryGroupUpdate }>(), "accounts-receivable/territory-group", ["create","delete","get","update"]),
});

export default accountsReceivable;

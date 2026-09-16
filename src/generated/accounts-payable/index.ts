// Generated from spec/accounts-payable.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** accounts-payable/account-label */
export type AccountLabel = components["schemas"]["objects.accounts-payable.account-label"];
export type AccountLabelCreate = RequestBody<operations["create-accounts-payable-account-label"]>;
export type AccountLabelUpdate = RequestBody<operations["update-accounts-payable-account-label-key"]>;
/** accounts-payable/adjustment */
export type Adjustment = components["schemas"]["objects.accounts-payable.adjustment"];
export type AdjustmentCreate = RequestBody<operations["create-accounts-payable-adjustment"]>;
export type AdjustmentUpdate = RequestBody<operations["update-accounts-payable-adjustment-key"]>;
/** accounts-payable/adjustment-line */
export type AdjustmentLine = components["schemas"]["objects.accounts-payable.adjustment-line"];
export type AdjustmentLineCreate = RequestBody<operations["create-accounts-payable-adjustment-line"]>;
export type AdjustmentLineUpdate = RequestBody<operations["update-accounts-payable-adjustment-line"]>;
/** accounts-payable/adjustment-summary */
export type AdjustmentSummary = components["schemas"]["objects.accounts-payable.adjustment-summary"];
/** accounts-payable/adjustment-tax-entry */
export type AdjustmentTaxEntry = components["schemas"]["objects.accounts-payable.adjustment-tax-entry"];
/** accounts-payable/advance */
export type Advance = components["schemas"]["objects.accounts-payable.advance"];
export type AdvanceCreate = RequestBody<operations["create-accounts-payable-advance"]>;
export type AdvanceUpdate = RequestBody<operations["update-accounts-payable-advance-key"]>;
/** accounts-payable/advance-line */
export type AdvanceLine = components["schemas"]["objects.accounts-payable.advance-line"];
export type AdvanceLineUpdate = RequestBody<operations["update-accounts-payable-advance-line"]>;
/** accounts-payable/amortization-template */
export type AmortizationTemplate = components["schemas"]["objects.accounts-payable.amortization-template"];
export type AmortizationTemplateCreate = RequestBody<operations["create-accounts-payable-amortization-template"]>;
export type AmortizationTemplateUpdate = RequestBody<operations["update-accounts-payable-amortization-template-key"]>;
/** accounts-payable/bill */
export type Bill = components["schemas"]["objects.accounts-payable.bill"];
export type BillCreate = RequestBody<operations["create-accounts-payable-bill"]>;
export type BillUpdate = RequestBody<operations["update-accounts-payable-bill-key"]>;
/** accounts-payable/bill-line */
export type BillLine = components["schemas"]["objects.accounts-payable.bill-line"];
export type BillLineCreate = RequestBody<operations["create-accounts-payable-bill-line"]>;
export type BillLineUpdate = RequestBody<operations["update-accounts-payable-bill-line-key"]>;
/** accounts-payable/bill-summary */
export type BillSummary = components["schemas"]["objects.accounts-payable.bill-summary"];
/** accounts-payable/bill-tax-entry */
export type BillTaxEntry = components["schemas"]["objects.accounts-payable.bill-tax-entry"];
/** accounts-payable/check-run */
export type CheckRun = components["schemas"]["objects.accounts-payable.check-run"];
export type CheckRunCreate = RequestBody<operations["create-accounts-payable-check-run"]>;
export type CheckRunUpdate = RequestBody<operations["update-accounts-payable-check-run-key"]>;
/** accounts-payable/joint-payee */
export type AccountsPayableJointPayee = components["schemas"]["objects.accounts-payable.joint-payee"];
export type AccountsPayableJointPayeeCreate = RequestBody<operations["create-accounts-payable-joint-payee"]>;
/** accounts-payable/payment */
export type Payment = components["schemas"]["objects.accounts-payable.payment"];
export type PaymentCreate = RequestBody<operations["create-accounts-payable-payment"]>;
export type PaymentUpdate = RequestBody<operations["update-accounts-payable-payment-key"]>;
/** accounts-payable/payment-detail */
export type PaymentDetail = components["schemas"]["objects.accounts-payable.payment-detail"];
/** accounts-payable/payment-line */
export type PaymentLine = components["schemas"]["objects.accounts-payable.payment-line"];
/** accounts-payable/recurring-bill */
export type RecurringBill = components["schemas"]["objects.accounts-payable.recurring-bill"];
export type RecurringBillCreate = RequestBody<operations["create-accounts-payable-recurring-bill"]>;
export type RecurringBillUpdate = RequestBody<operations["update-accounts-payable-recurring-bill-key"]>;
/** accounts-payable/recurring-bill-line */
export type RecurringBillLine = components["schemas"]["objects.accounts-payable.recurring-bill-line"];
export type RecurringBillLineCreate = RequestBody<operations["create-accounts-payable-recurring-bill-line"]>;
export type RecurringBillLineUpdate = RequestBody<operations["update-accounts-payable-recurring-bill-line"]>;
/** accounts-payable/recurring-bill-tax-entry */
export type RecurringBillTaxEntry = components["schemas"]["objects.accounts-payable.recurring-bill-tax-entry"];
/** accounts-payable/summary */
export type Summary = components["schemas"]["objects.accounts-payable.summary"];
export type SummaryCreate = RequestBody<operations["create-accounts-payable-summary"]>;
export type SummaryUpdate = RequestBody<operations["update-accounts-payable-summary-key"]>;
/** accounts-payable/term */
export type Term = components["schemas"]["objects.accounts-payable.term"];
export type TermCreate = RequestBody<operations["create-accounts-payable-term"]>;
export type TermUpdate = RequestBody<operations["update-accounts-payable-term-key"]>;
/** accounts-payable/vendor */
export type Vendor = components["schemas"]["objects.accounts-payable.vendor"];
export type VendorCreate = RequestBody<operations["create-accounts-payable-vendor"]>;
export type VendorUpdate = RequestBody<operations["update-accounts-payable-vendor-key"]>;
/** accounts-payable/vendor-account-number */
export type VendorAccountNumber = components["schemas"]["objects.accounts-payable.vendor-account-number"];
export type VendorAccountNumberCreate = RequestBody<operations["create-accounts-payable-vendor-account-number"]>;
export type VendorAccountNumberUpdate = RequestBody<operations["update-accounts-payable-vendor-account-number"]>;
/** accounts-payable/vendor-bank-file-setup */
export type VendorBankFileSetup = components["schemas"]["objects.accounts-payable.vendor-bank-file-setup"];
/** accounts-payable/vendor-contact */
export type VendorContact = components["schemas"]["objects.accounts-payable.vendor-contact"];
export type VendorContactCreate = RequestBody<operations["create-accounts-payable-vendor-contact-key"]>;
export type VendorContactUpdate = RequestBody<operations["update-accounts-payable-vendor-contact-key"]>;
/** accounts-payable/vendor-email-template */
export type VendorEmailTemplate = components["schemas"]["objects.accounts-payable.vendor-email-template"];
export type VendorEmailTemplateCreate = RequestBody<operations["create-accounts-payable-vendor-email-template"]>;
export type VendorEmailTemplateUpdate = RequestBody<operations["update-accounts-payable-vendor-email-template-key"]>;
/** accounts-payable/vendor-group */
export type VendorGroup = components["schemas"]["objects.accounts-payable.vendor-group"];
export type VendorGroupCreate = RequestBody<operations["create-accounts-payable-vendor-group"]>;
export type VendorGroupUpdate = RequestBody<operations["update-accounts-payable-vendor-group-key"]>;
/** accounts-payable/vendor-payment-provider */
export type VendorPaymentProvider = components["schemas"]["objects.accounts-payable.vendor-payment-provider"];
export type VendorPaymentProviderCreate = RequestBody<operations["create-accounts-payable-vendor-payment-provider"]>;
export type VendorPaymentProviderUpdate = RequestBody<operations["update-accounts-payable-vendor-payment-provider-key"]>;
/** accounts-payable/vendor-restricted-department */
export type VendorRestrictedDepartment = components["schemas"]["objects.accounts-payable.vendor-restricted-department"];
/** accounts-payable/vendor-restricted-location */
export type VendorRestrictedLocation = components["schemas"]["objects.accounts-payable.vendor-restricted-location"];
/** accounts-payable/vendor-total */
export type VendorTotal = components["schemas"]["objects.accounts-payable.vendor-total"];
/** accounts-payable/vendor-type */
export type VendorType = components["schemas"]["objects.accounts-payable.vendor-type"];
export type VendorTypeCreate = RequestBody<operations["create-accounts-payable-vendor-type"]>;
export type VendorTypeUpdate = RequestBody<operations["update-accounts-payable-vendor-type-key"]>;
/** acounts-payable/joint-payee */
export type AcountsPayableJointPayee = ResponseResult<operations["get-accounts-payable-joint-payee-key"]>;
export type AcountsPayableJointPayeeUpdate = RequestBody<operations["update-accounts-payable-joint-payee"]>;

export const accountsPayable = defineApplication({
  accountLabel: object(shape<{ record: AccountLabel; create: AccountLabelCreate; update: AccountLabelUpdate }>(), "accounts-payable/account-label", ["create","delete","get","update"]),
  adjustment: object(shape<{ record: Adjustment; create: AdjustmentCreate; update: AdjustmentUpdate }>(), "accounts-payable/adjustment", ["create","delete","get","update"], {
    reverse: action<RequestBody<operations["reverse-accounts-payable-adjustment"]>, ResponseResult<operations["reverse-accounts-payable-adjustment"]>>("reverse"),
    submit: action<RequestBody<operations["submit-accounts-payable-adjustment"]>, ResponseResult<operations["submit-accounts-payable-adjustment"]>>("submit"),
  }),
  adjustmentLine: object(shape<{ record: AdjustmentLine; create: AdjustmentLineCreate; update: AdjustmentLineUpdate }>(), "accounts-payable/adjustment-line", ["create","delete","get","update"]),
  adjustmentSummary: object(shape<{ record: AdjustmentSummary }>(), "accounts-payable/adjustment-summary", ["get"]),
  adjustmentTaxEntry: object(shape<{ record: AdjustmentTaxEntry }>(), "accounts-payable/adjustment-tax-entry", ["get"]),
  advance: object(shape<{ record: Advance; create: AdvanceCreate; update: AdvanceUpdate }>(), "accounts-payable/advance", ["create","delete","get","update"], {
    reverse: action<RequestBody<operations["reverse-accounts-payable-advance"]>, ResponseResult<operations["reverse-accounts-payable-advance"]>>("reverse"),
    submit: action<RequestBody<operations["submit-accounts-payable-advance"]>, ResponseResult<operations["submit-accounts-payable-advance"]>>("submit"),
  }),
  advanceLine: object(shape<{ record: AdvanceLine; update: AdvanceLineUpdate }>(), "accounts-payable/advance-line", ["delete","get","update"]),
  amortizationTemplate: object(shape<{ record: AmortizationTemplate; create: AmortizationTemplateCreate; update: AmortizationTemplateUpdate }>(), "accounts-payable/amortization-template", ["create","delete","get","update"]),
  bill: object(shape<{ record: Bill; create: BillCreate; update: BillUpdate }>(), "accounts-payable/bill", ["create","delete","get","update"], {
    approve: action<RequestBody<operations["approve-accounts-payable-bill"]>, ResponseResult<operations["approve-accounts-payable-bill"]>>("approve"),
    decline: action<RequestBody<operations["decline-accounts-payable-bill"]>, ResponseResult<operations["decline-accounts-payable-bill"]>>("decline"),
    recall: action<RequestBody<operations["recall-accounts-payable-bill"]>, ResponseResult<operations["recall-accounts-payable-bill"]>>("recall"),
    reverse: action<RequestBody<operations["reverse-accounts-payable-bill"]>, ResponseResult<operations["reverse-accounts-payable-bill"]>>("reverse"),
    submit: action<RequestBody<operations["submit-accounts-payable-bill"]>, ResponseResult<operations["submit-accounts-payable-bill"]>>("submit"),
  }),
  billLine: object(shape<{ record: BillLine; create: BillLineCreate; update: BillLineUpdate }>(), "accounts-payable/bill-line", ["create","delete","get","update"], {
    release: action<RequestBody<operations["release-accounts-payable-bill-line"]>, ResponseResult<operations["release-accounts-payable-bill-line"]>>("release"),
  }),
  billSummary: object(shape<{ record: BillSummary }>(), "accounts-payable/bill-summary", ["get"]),
  billTaxEntry: object(shape<{ record: BillTaxEntry }>(), "accounts-payable/bill-tax-entry", ["get"]),
  checkRun: object(shape<{ record: CheckRun; create: CheckRunCreate; update: CheckRunUpdate }>(), "accounts-payable/check-run", ["create","delete","get","update"]),
  accountsPayableJointPayee: object(shape<{ record: AccountsPayableJointPayee; create: AccountsPayableJointPayeeCreate }>(), "accounts-payable/joint-payee", ["create"]),
  payment: object(shape<{ record: Payment; create: PaymentCreate; update: PaymentUpdate }>(), "accounts-payable/payment", ["create","delete","get","update"], {
    approve: action<RequestBody<operations["approve-accounts-payable-payment"]>, ResponseResult<operations["approve-accounts-payable-payment"]>>("approve"),
    confirm: action<RequestBody<operations["confirm-accounts-payable-payment"]>, ResponseResult<operations["confirm-accounts-payable-payment"]>>("confirm"),
    decline: action<RequestBody<operations["decline-accounts-payable-payment"]>, ResponseResult<operations["decline-accounts-payable-payment"]>>("decline"),
    print: action<RequestBody<operations["print-accounts-payable-payment"]>, ResponseResult<operations["print-accounts-payable-payment"]>>("print"),
    reverse: action<RequestBody<operations["reverse-accounts-payable-payment"]>, ResponseResult<operations["reverse-accounts-payable-payment"]>>("reverse"),
    submit: action<RequestBody<operations["submit-accounts-payable-payment"]>, ResponseResult<operations["submit-accounts-payable-payment"]>>("submit"),
  }),
  paymentDetail: object(shape<{ record: PaymentDetail }>(), "accounts-payable/payment-detail", ["get"]),
  paymentLine: object(shape<{ record: PaymentLine }>(), "accounts-payable/payment-line", ["get"]),
  recurringBill: object(shape<{ record: RecurringBill; create: RecurringBillCreate; update: RecurringBillUpdate }>(), "accounts-payable/recurring-bill", ["create","delete","get","update"]),
  recurringBillLine: object(shape<{ record: RecurringBillLine; create: RecurringBillLineCreate; update: RecurringBillLineUpdate }>(), "accounts-payable/recurring-bill-line", ["create","delete","get","update"]),
  recurringBillTaxEntry: object(shape<{ record: RecurringBillTaxEntry }>(), "accounts-payable/recurring-bill-tax-entry", ["get"]),
  summary: object(shape<{ record: Summary; create: SummaryCreate; update: SummaryUpdate }>(), "accounts-payable/summary", ["create","delete","get","update"]),
  term: object(shape<{ record: Term; create: TermCreate; update: TermUpdate }>(), "accounts-payable/term", ["create","delete","get","update"]),
  vendor: object(shape<{ record: Vendor; create: VendorCreate; update: VendorUpdate }>(), "accounts-payable/vendor", ["create","delete","get","update"], {
    approve: action<RequestBody<operations["approve-accounts-payable-vendor"]>, ResponseResult<operations["approve-accounts-payable-vendor"]>>("approve"),
    decline: action<RequestBody<operations["decline-accounts-payable-vendor"]>, ResponseResult<operations["decline-accounts-payable-vendor"]>>("decline"),
  }),
  vendorAccountNumber: object(shape<{ record: VendorAccountNumber; create: VendorAccountNumberCreate; update: VendorAccountNumberUpdate }>(), "accounts-payable/vendor-account-number", ["create","delete","get","update"]),
  vendorBankFileSetup: object(shape<{ record: VendorBankFileSetup }>(), "accounts-payable/vendor-bank-file-setup", ["get"]),
  vendorContact: object(shape<{ record: VendorContact; create: VendorContactCreate; update: VendorContactUpdate }>(), "accounts-payable/vendor-contact", ["create","delete","get","update"]),
  vendorEmailTemplate: object(shape<{ record: VendorEmailTemplate; create: VendorEmailTemplateCreate; update: VendorEmailTemplateUpdate }>(), "accounts-payable/vendor-email-template", ["create","delete","get","update"]),
  vendorGroup: object(shape<{ record: VendorGroup; create: VendorGroupCreate; update: VendorGroupUpdate }>(), "accounts-payable/vendor-group", ["create","delete","get","update"]),
  vendorPaymentProvider: object(shape<{ record: VendorPaymentProvider; create: VendorPaymentProviderCreate; update: VendorPaymentProviderUpdate }>(), "accounts-payable/vendor-payment-provider", ["create","get","update"]),
  vendorRestrictedDepartment: object(shape<{ record: VendorRestrictedDepartment }>(), "accounts-payable/vendor-restricted-department", ["get"]),
  vendorRestrictedLocation: object(shape<{ record: VendorRestrictedLocation }>(), "accounts-payable/vendor-restricted-location", ["get"]),
  vendorTotal: object(shape<{ record: VendorTotal }>(), "accounts-payable/vendor-total", ["get"]),
  vendorType: object(shape<{ record: VendorType; create: VendorTypeCreate; update: VendorTypeUpdate }>(), "accounts-payable/vendor-type", ["create","delete","get","update"]),
  acountsPayableJointPayee: object(shape<{ record: AcountsPayableJointPayee; update: AcountsPayableJointPayeeUpdate }>(), "acounts-payable/joint-payee", ["delete","get","update"]),
});

export default accountsPayable;

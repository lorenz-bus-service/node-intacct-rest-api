// Generated from spec/cash-management.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** cash-management/ar-advance-txn-line-template */
export type ArAdvanceTxnLineTemplate = components["schemas"]["objects.cash-management.ar-advance-txn-line-template"];
/** cash-management/ar-advance-txn-template */
export type ArAdvanceTxnTemplate = components["schemas"]["objects.cash-management.ar-advance-txn-template"];
export type ArAdvanceTxnTemplateCreate = RequestBody<operations["create-cash-management-ar-advance-txn-template"]>;
export type ArAdvanceTxnTemplateUpdate = RequestBody<operations["update-cash-management-ar-advance-txn-template-key"]>;
/** cash-management/bank-account */
export type BankAccount = components["schemas"]["objects.cash-management.bank-account"];
/** cash-management/bank-fee */
export type BankFee = components["schemas"]["objects.cash-management.bank-fee"];
export type BankFeeCreate = RequestBody<operations["create-cash-management-bank-fee"]>;
export type BankFeeUpdate = RequestBody<operations["update-cash-management-bank-fee-key"]>;
/** cash-management/bank-fee-line */
export type BankFeeLine = components["schemas"]["objects.cash-management.bank-fee-line"];
/** cash-management/bank-fee-tax-entry */
export type BankFeeTaxEntry = components["schemas"]["objects.cash-management.bank-fee-tax-entry"];
/** cash-management/bank-feed */
export type BankFeed = components["schemas"]["objects.cash-management.bank-feed"];
export type BankFeedCreate = RequestBody<operations["create-cash-management-bank-feed"]>;
/** cash-management/bank-file */
export type BankFile = components["schemas"]["objects.cash-management.bank-file"];
/** cash-management/bank-file-detail */
export type BankFileDetail = components["schemas"]["objects.cash-management.bank-file-detail"];
/** cash-management/bank-reconciliation */
export type BankReconciliation = components["schemas"]["objects.cash-management.bank-reconciliation"];
export type BankReconciliationCreate = RequestBody<operations["create-cash-management-bank-reconciliation"]>;
/** cash-management/bank-reconciliation-record */
export type BankReconciliationRecord = components["schemas"]["objects.cash-management.bank-reconciliation-record"];
/** cash-management/bank-transaction */
export type BankTransaction = components["schemas"]["objects.cash-management.bank-transaction"];
/** cash-management/bank-txn-assignment-rule */
export type BankTxnAssignmentRule = components["schemas"]["objects.cash-management.bank-txn-assignment-rule"];
export type BankTxnAssignmentRuleCreate = RequestBody<operations["create-cash-management-bank-txn-assignment-rule"]>;
export type BankTxnAssignmentRuleUpdate = RequestBody<operations["update-cash-management-bank-txn-assignment-rule-key"]>;
/** cash-management/bank-txn-assignment-rule-filter */
export type BankTxnAssignmentRuleFilter = components["schemas"]["objects.cash-management.bank-txn-assignment-rule-filter"];
/** cash-management/bank-txn-rule */
export type BankTxnRule = components["schemas"]["objects.cash-management.bank-txn-rule"];
export type BankTxnRuleCreate = RequestBody<operations["create-cash-management-bank-txn-rule"]>;
export type BankTxnRuleUpdate = RequestBody<operations["update-cash-management-bank-txn-rule-key"]>;
/** cash-management/bank-txn-rule-filter */
export type BankTxnRuleFilter = components["schemas"]["objects.cash-management.bank-txn-rule-filter"];
/** cash-management/bank-txn-rule-group */
export type BankTxnRuleGroup = components["schemas"]["objects.cash-management.bank-txn-rule-group"];
/** cash-management/bank-txn-rule-map */
export type BankTxnRuleMap = components["schemas"]["objects.cash-management.bank-txn-rule-map"];
/** cash-management/bank-txn-rule-match */
export type BankTxnRuleMatch = components["schemas"]["objects.cash-management.bank-txn-rule-match"];
/** cash-management/bank-txn-rule-set */
export type BankTxnRuleSet = components["schemas"]["objects.cash-management.bank-txn-rule-set"];
export type BankTxnRuleSetCreate = RequestBody<operations["create-cash-management-bank-txn-rule-set"]>;
export type BankTxnRuleSetUpdate = RequestBody<operations["update-cash-management-bank-txn-rule-set-key"]>;
/** cash-management/bank-txn-rule-set-run-detail */
export type BankTxnRuleSetRunDetail = components["schemas"]["objects.cash-management.bank-txn-rule-set-run-detail"];
/** cash-management/bank-txn-rule-set-run-log */
export type BankTxnRuleSetRunLog = components["schemas"]["objects.cash-management.bank-txn-rule-set-run-log"];
export type BankTxnRuleSetRunLogCreate = RequestBody<operations["create-cash-management-bank-txn-rule-set-run-log"]>;
/** cash-management/checking-account */
export type CheckingAccount = components["schemas"]["objects.cash-management.checking-account"];
export type CheckingAccountCreate = RequestBody<operations["post-objects-checking-account"]>;
export type CheckingAccountUpdate = RequestBody<operations["patch-objects-checking-account"]>;
/** cash-management/credit-card-account */
export type CreditCardAccount = components["schemas"]["objects.cash-management.credit-card-account"];
export type CreditCardAccountCreate = RequestBody<operations["post-objects-credit-card-account"]>;
export type CreditCardAccountUpdate = RequestBody<operations["patch-objects-credit-card-account"]>;
/** cash-management/credit-card-fee */
export type CreditCardFee = components["schemas"]["objects.cash-management.credit-card-fee"];
export type CreditCardFeeCreate = RequestBody<operations["create-cash-management-credit-card-fee"]>;
export type CreditCardFeeUpdate = RequestBody<operations["update-cash-management-credit-card-fee-key"]>;
/** cash-management/credit-card-fee-line */
export type CreditCardFeeLine = components["schemas"]["objects.cash-management.credit-card-fee-line"];
/** cash-management/credit-card-fee-tax-entry */
export type CreditCardFeeTaxEntry = components["schemas"]["objects.cash-management.credit-card-fee-tax-entry"];
/** cash-management/credit-card-reconciliation */
export type CreditCardReconciliation = components["schemas"]["objects.cash-management.credit-card-reconciliation"];
export type CreditCardReconciliationCreate = RequestBody<operations["create-cash-management-credit-card-reconciliation"]>;
/** cash-management/credit-card-reconciliation-record */
export type CreditCardReconciliationRecord = components["schemas"]["objects.cash-management.credit-card-reconciliation-record"];
/** cash-management/credit-card-txn */
export type CreditCardTxn = components["schemas"]["objects.cash-management.credit-card-txn"];
export type CreditCardTxnCreate = RequestBody<operations["create-cash-management-credit-card-txn"]>;
export type CreditCardTxnUpdate = RequestBody<operations["update-cash-management-credit-card-txn-key"]>;
/** cash-management/credit-card-txn-line */
export type CreditCardTxnLine = components["schemas"]["objects.cash-management.credit-card-txn-line"];
/** cash-management/credit-card-txn-line-template */
export type CreditCardTxnLineTemplate = components["schemas"]["objects.cash-management.credit-card-txn-line-template"];
/** cash-management/credit-card-txn-tax-entry */
export type CreditCardTxnTaxEntry = components["schemas"]["objects.cash-management.credit-card-txn-tax-entry"];
/** cash-management/credit-card-txn-template */
export type CreditCardTxnTemplate = components["schemas"]["objects.cash-management.credit-card-txn-template"];
export type CreditCardTxnTemplateCreate = RequestBody<operations["create-cash-management-credit-card-txn-template"]>;
export type CreditCardTxnTemplateUpdate = RequestBody<operations["update-cash-management-credit-card-txn-template-key"]>;
/** cash-management/deposit */
export type Deposit = components["schemas"]["objects.cash-management.deposit"];
export type DepositCreate = RequestBody<operations["create-cash-management-deposit"]>;
/** cash-management/deposit-detail */
export type DepositDetail = components["schemas"]["objects.cash-management.deposit-detail"];
/** cash-management/deposit-line */
export type DepositLine = components["schemas"]["objects.cash-management.deposit-line"];
/** cash-management/financial-institution */
export type FinancialInstitution = components["schemas"]["objects.cash-management.financial-institution"];
export type FinancialInstitutionCreate = RequestBody<operations["create-cash-management-financial-institution"]>;
export type FinancialInstitutionUpdate = RequestBody<operations["update-cash-management-financial-institution-key"]>;
/** cash-management/funds-transfer */
export type FundsTransfer = components["schemas"]["objects.cash-management.funds-transfer"];
export type FundsTransferCreate = RequestBody<operations["create-cash-management-funds-transfer"]>;
/** cash-management/funds-transfer-line */
export type FundsTransferLine = components["schemas"]["objects.cash-management.funds-transfer-line"];
/** cash-management/initial-open-item */
export type InitialOpenItem = components["schemas"]["objects.cash-management.initial-open-item"];
/** cash-management/journal-entry-line-template */
export type JournalEntryLineTemplate = components["schemas"]["objects.cash-management.journal-entry-line-template"];
/** cash-management/journal-entry-template */
export type JournalEntryTemplate = components["schemas"]["objects.cash-management.journal-entry-template"];
export type JournalEntryTemplateCreate = RequestBody<operations["create-cash-management-journal-entry-template"]>;
export type JournalEntryTemplateUpdate = RequestBody<operations["update-cash-management-journal-entry-template-key"]>;
/** cash-management/other-receipt */
export type OtherReceipt = components["schemas"]["objects.cash-management.other-receipt"];
export type OtherReceiptCreate = RequestBody<operations["create-cash-management-other-receipt"]>;
export type OtherReceiptUpdate = RequestBody<operations["update-cash-management-other-receipt-key"]>;
/** cash-management/other-receipt-line */
export type OtherReceiptLine = components["schemas"]["objects.cash-management.other-receipt-line"];
/** cash-management/other-receipt-tax-entry */
export type OtherReceiptTaxEntry = components["schemas"]["objects.cash-management.other-receipt-tax-entry"];
/** cash-management/payment-provider */
export type PaymentProvider = components["schemas"]["objects.cash-management.payment-provider"];
/** cash-management/payment-provider-bank-account */
export type PaymentProviderBankAccount = components["schemas"]["objects.cash-management.payment-provider-bank-account"];
export type PaymentProviderBankAccountCreate = RequestBody<operations["create-cash-management-payment-provider-bank-account"]>;
export type PaymentProviderBankAccountUpdate = RequestBody<operations["update-cash-management-payment-provider-bank-account-key"]>;
/** cash-management/provider-payment-method */
export type ProviderPaymentMethod = components["schemas"]["objects.cash-management.provider-payment-method"];
/** cash-management/received-payment */
export type ReceivedPayment = components["schemas"]["objects.cash-management.received-payment"];
export type ReceivedPaymentCreate = RequestBody<operations["create-cash-management-received-payment"]>;
/** cash-management/received-payment-line */
export type ReceivedPaymentLine = components["schemas"]["objects.cash-management.received-payment-line"];
/** cash-management/reconciliation-source-record */
export type ReconciliationSourceRecord = components["schemas"]["objects.cash-management.reconciliation-source-record"];
/** cash-management/savings-account */
export type SavingsAccount = components["schemas"]["objects.cash-management.savings-account"];
export type SavingsAccountCreate = RequestBody<operations["post-objects-savings-account"]>;
export type SavingsAccountUpdate = RequestBody<operations["patch-objects-savings-account"]>;
/** cash-management/undeposited-fund */
export type UndepositedFund = components["schemas"]["objects.cash-management.undeposited-fund"];

export const cashManagement = defineApplication({
  arAdvanceTxnLineTemplate: object(shape<{ record: ArAdvanceTxnLineTemplate }>(), "cash-management/ar-advance-txn-line-template", ["get"]),
  arAdvanceTxnTemplate: object(shape<{ record: ArAdvanceTxnTemplate; create: ArAdvanceTxnTemplateCreate; update: ArAdvanceTxnTemplateUpdate }>(), "cash-management/ar-advance-txn-template", ["create","delete","get","update"]),
  bankAccount: object(shape<{ record: BankAccount }>(), "cash-management/bank-account", ["get"]),
  bankFee: object(shape<{ record: BankFee; create: BankFeeCreate; update: BankFeeUpdate }>(), "cash-management/bank-fee", ["create","get","update"], {
    reverse: action<RequestBody<operations["reverse-cash-management-bank-fee"]>, ResponseResult<operations["reverse-cash-management-bank-fee"]>>("reverse"),
  }),
  bankFeeLine: object(shape<{ record: BankFeeLine }>(), "cash-management/bank-fee-line", ["get"]),
  bankFeeTaxEntry: object(shape<{ record: BankFeeTaxEntry }>(), "cash-management/bank-fee-tax-entry", ["get"]),
  bankFeed: object(shape<{ record: BankFeed; create: BankFeedCreate }>(), "cash-management/bank-feed", ["create","delete","get"]),
  bankFile: object(shape<{ record: BankFile }>(), "cash-management/bank-file", ["delete","get"]),
  bankFileDetail: object(shape<{ record: BankFileDetail }>(), "cash-management/bank-file-detail", ["get"]),
  bankReconciliation: object(shape<{ record: BankReconciliation; create: BankReconciliationCreate }>(), "cash-management/bank-reconciliation", ["create","get"], {
    reopen: action<RequestBody<operations["reopen-cash-management-bank-reconciliation"]>, ResponseResult<operations["reopen-cash-management-bank-reconciliation"]>>("reopen"),
  }),
  bankReconciliationRecord: object(shape<{ record: BankReconciliationRecord }>(), "cash-management/bank-reconciliation-record", ["get"]),
  bankTransaction: object(shape<{ record: BankTransaction }>(), "cash-management/bank-transaction", ["get"], {
    assignCustomer: action<RequestBody<operations["assign-customer-cash-management-bank-transaction"]>, ResponseResult<operations["assign-customer-cash-management-bank-transaction"]>>("assign-customer"),
    ignore: action<RequestBody<operations["ignore-cash-management-bank-transaction"]>, ResponseResult<operations["ignore-cash-management-bank-transaction"]>>("ignore"),
    stopIgnoring: action<RequestBody<operations["stop-ignoring-cash-management-bank-transaction"]>, ResponseResult<operations["stop-ignoring-cash-management-bank-transaction"]>>("stop-ignoring"),
  }),
  bankTxnAssignmentRule: object(shape<{ record: BankTxnAssignmentRule; create: BankTxnAssignmentRuleCreate; update: BankTxnAssignmentRuleUpdate }>(), "cash-management/bank-txn-assignment-rule", ["create","delete","get","update"]),
  bankTxnAssignmentRuleFilter: object(shape<{ record: BankTxnAssignmentRuleFilter }>(), "cash-management/bank-txn-assignment-rule-filter", ["get"]),
  bankTxnRule: object(shape<{ record: BankTxnRule; create: BankTxnRuleCreate; update: BankTxnRuleUpdate }>(), "cash-management/bank-txn-rule", ["create","delete","get","update"]),
  bankTxnRuleFilter: object(shape<{ record: BankTxnRuleFilter }>(), "cash-management/bank-txn-rule-filter", ["get"]),
  bankTxnRuleGroup: object(shape<{ record: BankTxnRuleGroup }>(), "cash-management/bank-txn-rule-group", ["get"]),
  bankTxnRuleMap: object(shape<{ record: BankTxnRuleMap }>(), "cash-management/bank-txn-rule-map", ["delete","get"]),
  bankTxnRuleMatch: object(shape<{ record: BankTxnRuleMatch }>(), "cash-management/bank-txn-rule-match", ["get"]),
  bankTxnRuleSet: object(shape<{ record: BankTxnRuleSet; create: BankTxnRuleSetCreate; update: BankTxnRuleSetUpdate }>(), "cash-management/bank-txn-rule-set", ["create","delete","get","update"]),
  bankTxnRuleSetRunDetail: object(shape<{ record: BankTxnRuleSetRunDetail }>(), "cash-management/bank-txn-rule-set-run-detail", ["get"]),
  bankTxnRuleSetRunLog: object(shape<{ record: BankTxnRuleSetRunLog; create: BankTxnRuleSetRunLogCreate }>(), "cash-management/bank-txn-rule-set-run-log", ["create","get"]),
  checkingAccount: object(shape<{ record: CheckingAccount; create: CheckingAccountCreate; update: CheckingAccountUpdate }>(), "cash-management/checking-account", ["create","delete","get","update"]),
  creditCardAccount: object(shape<{ record: CreditCardAccount; create: CreditCardAccountCreate; update: CreditCardAccountUpdate }>(), "cash-management/credit-card-account", ["create","delete","get","update"]),
  creditCardFee: object(shape<{ record: CreditCardFee; create: CreditCardFeeCreate; update: CreditCardFeeUpdate }>(), "cash-management/credit-card-fee", ["create","get","update"], {
    reverse: action<RequestBody<operations["reverse-cash-management-credit-card-fee"]>, ResponseResult<operations["reverse-cash-management-credit-card-fee"]>>("reverse"),
  }),
  creditCardFeeLine: object(shape<{ record: CreditCardFeeLine }>(), "cash-management/credit-card-fee-line", ["get"]),
  creditCardFeeTaxEntry: object(shape<{ record: CreditCardFeeTaxEntry }>(), "cash-management/credit-card-fee-tax-entry", ["get"]),
  creditCardReconciliation: object(shape<{ record: CreditCardReconciliation; create: CreditCardReconciliationCreate }>(), "cash-management/credit-card-reconciliation", ["create","delete","get"], {
    reopen: action<RequestBody<operations["reopen-cash-management-credit-card-reconciliation"]>, ResponseResult<operations["reopen-cash-management-credit-card-reconciliation"]>>("reopen"),
  }),
  creditCardReconciliationRecord: object(shape<{ record: CreditCardReconciliationRecord }>(), "cash-management/credit-card-reconciliation-record", ["get"]),
  creditCardTxn: object(shape<{ record: CreditCardTxn; create: CreditCardTxnCreate; update: CreditCardTxnUpdate }>(), "cash-management/credit-card-txn", ["create","delete","get","update"], {
    reverse: action<RequestBody<operations["reverse-cash-management-credit-card-txn"]>, ResponseResult<operations["reverse-cash-management-credit-card-txn"]>>("reverse"),
  }),
  creditCardTxnLine: object(shape<{ record: CreditCardTxnLine }>(), "cash-management/credit-card-txn-line", ["get"]),
  creditCardTxnLineTemplate: object(shape<{ record: CreditCardTxnLineTemplate }>(), "cash-management/credit-card-txn-line-template", ["get"]),
  creditCardTxnTaxEntry: object(shape<{ record: CreditCardTxnTaxEntry }>(), "cash-management/credit-card-txn-tax-entry", ["get"]),
  creditCardTxnTemplate: object(shape<{ record: CreditCardTxnTemplate; create: CreditCardTxnTemplateCreate; update: CreditCardTxnTemplateUpdate }>(), "cash-management/credit-card-txn-template", ["create","delete","get","update"]),
  deposit: object(shape<{ record: Deposit; create: DepositCreate }>(), "cash-management/deposit", ["create","get"], {
    reverse: action<RequestBody<operations["reverse-cash-management-deposit"]>, ResponseResult<operations["reverse-cash-management-deposit"]>>("reverse"),
  }),
  depositDetail: object(shape<{ record: DepositDetail }>(), "cash-management/deposit-detail", ["get"]),
  depositLine: object(shape<{ record: DepositLine }>(), "cash-management/deposit-line", ["get"]),
  financialInstitution: object(shape<{ record: FinancialInstitution; create: FinancialInstitutionCreate; update: FinancialInstitutionUpdate }>(), "cash-management/financial-institution", ["create","delete","get","update"]),
  fundsTransfer: object(shape<{ record: FundsTransfer; create: FundsTransferCreate }>(), "cash-management/funds-transfer", ["create","get"], {
    reverse: action<RequestBody<operations["reverse-cash-management-funds-transfer"]>, ResponseResult<operations["reverse-cash-management-funds-transfer"]>>("reverse"),
  }),
  fundsTransferLine: object(shape<{ record: FundsTransferLine }>(), "cash-management/funds-transfer-line", ["get"]),
  initialOpenItem: object(shape<{ record: InitialOpenItem }>(), "cash-management/initial-open-item", ["get"]),
  journalEntryLineTemplate: object(shape<{ record: JournalEntryLineTemplate }>(), "cash-management/journal-entry-line-template", ["get"]),
  journalEntryTemplate: object(shape<{ record: JournalEntryTemplate; create: JournalEntryTemplateCreate; update: JournalEntryTemplateUpdate }>(), "cash-management/journal-entry-template", ["create","delete","get","update"]),
  otherReceipt: object(shape<{ record: OtherReceipt; create: OtherReceiptCreate; update: OtherReceiptUpdate }>(), "cash-management/other-receipt", ["create","delete","get","update"], {
    reverse: action<RequestBody<operations["reverse-cash-management-other-receipt"]>, ResponseResult<operations["reverse-cash-management-other-receipt"]>>("reverse"),
  }),
  otherReceiptLine: object(shape<{ record: OtherReceiptLine }>(), "cash-management/other-receipt-line", ["get"]),
  otherReceiptTaxEntry: object(shape<{ record: OtherReceiptTaxEntry }>(), "cash-management/other-receipt-tax-entry", ["get"]),
  paymentProvider: object(shape<{ record: PaymentProvider }>(), "cash-management/payment-provider", ["get"]),
  paymentProviderBankAccount: object(shape<{ record: PaymentProviderBankAccount; create: PaymentProviderBankAccountCreate; update: PaymentProviderBankAccountUpdate }>(), "cash-management/payment-provider-bank-account", ["create","get","update"]),
  providerPaymentMethod: object(shape<{ record: ProviderPaymentMethod }>(), "cash-management/provider-payment-method", ["get"]),
  receivedPayment: object(shape<{ record: ReceivedPayment; create: ReceivedPaymentCreate }>(), "cash-management/received-payment", ["create","get"]),
  receivedPaymentLine: object(shape<{ record: ReceivedPaymentLine }>(), "cash-management/received-payment-line", ["get"]),
  reconciliationSourceRecord: object(shape<{ record: ReconciliationSourceRecord }>(), "cash-management/reconciliation-source-record", ["get"]),
  savingsAccount: object(shape<{ record: SavingsAccount; create: SavingsAccountCreate; update: SavingsAccountUpdate }>(), "cash-management/savings-account", ["create","delete","get","update"]),
  undepositedFund: object(shape<{ record: UndepositedFund }>(), "cash-management/undeposited-fund", ["get"]),
  services: group({
    cashManagement: group({
      bankFile: group({
        generate: service<RequestBody<operations["generate-bank-file"]>, ResponseResult<operations["generate-bank-file"]>>("services/cash-management/bank-file/generate", "POST"),
      }),
    }),
  }),
});

export default cashManagement;

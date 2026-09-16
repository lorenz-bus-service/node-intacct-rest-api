// Generated from spec/general-ledger.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** general-ledger/account */
export type Account = components["schemas"]["objects.general-ledger.account"];
export type AccountCreate = RequestBody<operations["create-general-ledger-account"]>;
export type AccountUpdate = RequestBody<operations["update-general-ledger-account-key"]>;
/** general-ledger/account-allocation */
export type AccountAllocation = components["schemas"]["objects.general-ledger.account-allocation"];
export type AccountAllocationCreate = RequestBody<operations["create-general-ledger-account-allocation"]>;
export type AccountAllocationUpdate = RequestBody<operations["update-general-ledger-account-allocation-key"]>;
/** general-ledger/account-allocation-basis */
export type AccountAllocationBasis = components["schemas"]["objects.general-ledger.account-allocation-basis"];
export type AccountAllocationBasisUpdate = RequestBody<operations["update-general-ledger-account-allocation-basis-key"]>;
/** general-ledger/account-allocation-group */
export type AccountAllocationGroup = components["schemas"]["objects.general-ledger.account-allocation-group"];
export type AccountAllocationGroupCreate = RequestBody<operations["create-general-ledger-account-allocation-group"]>;
export type AccountAllocationGroupUpdate = RequestBody<operations["update-general-ledger-account-allocation-group-key"]>;
/** general-ledger/account-allocation-group-member */
export type AccountAllocationGroupMember = components["schemas"]["objects.general-ledger.account-allocation-group-member"];
/** general-ledger/account-allocation-reverse */
export type AccountAllocationReverse = components["schemas"]["objects.general-ledger.account-allocation-reverse"];
export type AccountAllocationReverseUpdate = RequestBody<operations["update-general-ledger-account-allocation-reverse-key"]>;
/** general-ledger/account-allocation-run */
export type AccountAllocationRun = components["schemas"]["objects.general-ledger.account-allocation-run"];
export type AccountAllocationRunCreate = RequestBody<operations["create-general-ledger-account-allocation-run"]>;
/** general-ledger/account-allocation-source */
export type AccountAllocationSource = components["schemas"]["objects.general-ledger.account-allocation-source"];
export type AccountAllocationSourceUpdate = RequestBody<operations["update-general-ledger-account-allocation-source-key"]>;
/** general-ledger/account-allocation-target */
export type AccountAllocationTarget = components["schemas"]["objects.general-ledger.account-allocation-target"];
export type AccountAllocationTargetUpdate = RequestBody<operations["update-general-ledger-account-allocation-target-key"]>;
/** general-ledger/account-category */
export type AccountCategory = components["schemas"]["objects.general-ledger.account-category"];
/** general-ledger/account-group */
export type AccountGroup = components["schemas"]["objects.general-ledger.account-group"];
export type AccountGroupCreate = RequestBody<operations["create-general-ledger-account-group"]>;
export type AccountGroupUpdate = RequestBody<operations["update-general-ledger-account-group-key"]>;
/** general-ledger/account-group-category-member */
export type AccountGroupCategoryMember = components["schemas"]["objects.general-ledger.account-group-category-member"];
/** general-ledger/account-group-computation */
export type AccountGroupComputation = components["schemas"]["objects.general-ledger.account-group-computation"];
/** general-ledger/account-group-map */
export type AccountGroupMap = components["schemas"]["objects.general-ledger.account-group-map"];
/** general-ledger/account-group-member */
export type AccountGroupMember = components["schemas"]["objects.general-ledger.account-group-member"];
/** general-ledger/account-group-purpose */
export type AccountGroupPurpose = components["schemas"]["objects.general-ledger.account-group-purpose"];
export type AccountGroupPurposeCreate = RequestBody<operations["create-general-ledger-account-group-purpose"]>;
export type AccountGroupPurposeUpdate = RequestBody<operations["update-general-ledger-account-group-purpose-key"]>;
/** general-ledger/account-name-entity-map */
export type AccountNameEntityMap = components["schemas"]["objects.general-ledger.account-name-entity-map"];
export type AccountNameEntityMapCreate = RequestBody<operations["create-account-title-by-location"]>;
export type AccountNameEntityMapUpdate = RequestBody<operations["update-account-title-by-location-key"]>;
/** general-ledger/account-range */
export type AccountRange = components["schemas"]["objects.general-ledger.account-range"];
/** general-ledger/accounting-sequence */
export type AccountingSequence = components["schemas"]["objects.general-ledger.accounting-sequence"];
export type AccountingSequenceCreate = RequestBody<operations["create-general-ledger-accounting-sequence"]>;
export type AccountingSequenceUpdate = RequestBody<operations["update-general-ledger-accounting-sequence-key"]>;
/** general-ledger/accounting-sequence-line */
export type AccountingSequenceLine = components["schemas"]["objects.general-ledger.accounting-sequence-line"];
export type AccountingSequenceLineCreate = RequestBody<operations["create-general-ledger-accounting-sequence-line"]>;
export type AccountingSequenceLineUpdate = RequestBody<operations["update-general-ledger-accounting-sequence-line-key"]>;
/** general-ledger/adjustment-journal */
export type AdjustmentJournal = components["schemas"]["objects.general-ledger.adjustment-journal"];
export type AdjustmentJournalCreate = RequestBody<operations["create-general-ledger-adjustment-journal"]>;
export type AdjustmentJournalUpdate = RequestBody<operations["update-general-ledger-adjustment-journal-key"]>;
/** general-ledger/budget */
export type Budget = components["schemas"]["objects.general-ledger.budget"];
export type BudgetCreate = RequestBody<operations["create-general-ledger-budget"]>;
export type BudgetUpdate = RequestBody<operations["update-general-ledger-budget-key"]>;
/** general-ledger/budget-detail */
export type BudgetDetail = components["schemas"]["objects.general-ledger.budget-detail"];
/** general-ledger/financial-graph */
export type FinancialGraph = components["schemas"]["objects.general-ledger.financial-graph"];
/** general-ledger/gaap-adjustment-journal */
export type GaapAdjustmentJournal = components["schemas"]["objects.general-ledger.gaap-adjustment-journal"];
export type GaapAdjustmentJournalCreate = RequestBody<operations["create-general-ledger-gaap-adjustment-journal"]>;
export type GaapAdjustmentJournalUpdate = RequestBody<operations["update-general-ledger-gaap-adjustment-journal-key"]>;
/** general-ledger/journal */
export type Journal = components["schemas"]["objects.general-ledger.journal"];
export type JournalCreate = RequestBody<operations["create-general-ledger-journal"]>;
export type JournalUpdate = RequestBody<operations["update-general-ledger-journal-key"]>;
/** general-ledger/journal-entry */
export type JournalEntry = components["schemas"]["objects.general-ledger.journal-entry"];
export type JournalEntryCreate = RequestBody<operations["create-general-ledger-journal-entry"]>;
export type JournalEntryUpdate = RequestBody<operations["update-general-ledger-journal-entry-key"]>;
/** general-ledger/journal-entry-line */
export type JournalEntryLine = components["schemas"]["objects.general-ledger.journal-entry-line"];
/** general-ledger/journal-entry-tax-entry */
export type JournalEntryTaxEntry = components["schemas"]["objects.general-ledger.journal-entry-tax-entry"];
/** general-ledger/journal-entry-txn-template */
export type JournalEntryTxnTemplate = components["schemas"]["objects.general-ledger.journal-entry-txn-template"];
export type JournalEntryTxnTemplateCreate = RequestBody<operations["create-general-ledger-journal-entry-txn-template"]>;
export type JournalEntryTxnTemplateUpdate = RequestBody<operations["update-general-ledger-journal-entry-txn-template-key"]>;
/** general-ledger/journal-entry-txn-template-line */
export type JournalEntryTxnTemplateLine = components["schemas"]["objects.general-ledger.journal-entry-txn-template-line"];
/** general-ledger/recurring-account-allocation */
export type RecurringAccountAllocation = components["schemas"]["objects.general-ledger.recurring-account-allocation"];
export type RecurringAccountAllocationCreate = RequestBody<operations["create-general-ledger-recurring-account-allocation"]>;
export type RecurringAccountAllocationUpdate = RequestBody<operations["update-general-ledger-recurring-account-allocation-key"]>;
/** general-ledger/report-audience */
export type ReportAudience = components["schemas"]["objects.general-ledger.report-audience"];
export type ReportAudienceCreate = RequestBody<operations["create-general-ledger-report-audience"]>;
export type ReportAudienceUpdate = RequestBody<operations["update-general-ledger-report-audience-key"]>;
/** general-ledger/report-type */
export type ReportType = components["schemas"]["objects.general-ledger.report-type"];
export type ReportTypeCreate = RequestBody<operations["create-general-ledger-report-type"]>;
export type ReportTypeUpdate = RequestBody<operations["update-general-ledger-report-type-key"]>;
/** general-ledger/reporting-account */
export type ReportingAccount = components["schemas"]["objects.general-ledger.reporting-account"];
/** general-ledger/reporting-account-map */
export type ReportingAccountMap = components["schemas"]["objects.general-ledger.reporting-account-map"];
/** general-ledger/reporting-account-set */
export type ReportingAccountSet = components["schemas"]["objects.general-ledger.reporting-account-set"];
export type ReportingAccountSetCreate = RequestBody<operations["create-general-ledger-reporting-account-set"]>;
export type ReportingAccountSetUpdate = RequestBody<operations["update-general-ledger-reporting-account-set-key"]>;
/** general-ledger/reporting-account-set-permission */
export type ReportingAccountSetPermission = components["schemas"]["objects.general-ledger.reporting-account-set-permission"];
/** general-ledger/reporting-category */
export type ReportingCategory = components["schemas"]["objects.general-ledger.reporting-category"];
/** general-ledger/reporting-period */
export type ReportingPeriod = components["schemas"]["objects.general-ledger.reporting-period"];
export type ReportingPeriodCreate = RequestBody<operations["create-general-ledger-reporting-period"]>;
export type ReportingPeriodUpdate = RequestBody<operations["update-general-ledger-reporting-period-key"]>;
/** general-ledger/statistical-account */
export type StatisticalAccount = components["schemas"]["objects.general-ledger.statistical-account"];
export type StatisticalAccountCreate = RequestBody<operations["create-statistical-account"]>;
export type StatisticalAccountUpdate = RequestBody<operations["update-statistical-account-key"]>;
/** general-ledger/statistical-adjustment-journal */
export type StatisticalAdjustmentJournal = components["schemas"]["objects.general-ledger.statistical-adjustment-journal"];
export type StatisticalAdjustmentJournalCreate = RequestBody<operations["create-general-ledger-statistical-adjustment-journal"]>;
export type StatisticalAdjustmentJournalUpdate = RequestBody<operations["update-general-ledger-statistical-adjustment-journal-key"]>;
/** general-ledger/statistical-journal */
export type StatisticalJournal = components["schemas"]["objects.general-ledger.statistical-journal"];
export type StatisticalJournalCreate = RequestBody<operations["create-general-ledger-statistical-journal"]>;
export type StatisticalJournalUpdate = RequestBody<operations["update-general-ledger-statistical-journal-key"]>;
/** general-ledger/statistical-journal-entry */
export type StatisticalJournalEntry = components["schemas"]["objects.general-ledger.statistical-journal-entry"];
export type StatisticalJournalEntryCreate = RequestBody<operations["create-general-ledger-statistical-journal-entry"]>;
export type StatisticalJournalEntryUpdate = RequestBody<operations["update-general-ledger-statistical-journal-entry-key"]>;
/** general-ledger/statistical-journal-entry-line */
export type StatisticalJournalEntryLine = components["schemas"]["objects.general-ledger.statistical-journal-entry-line"];
/** general-ledger/tax-adjustment-journal */
export type TaxAdjustmentJournal = components["schemas"]["objects.general-ledger.tax-adjustment-journal"];
export type TaxAdjustmentJournalCreate = RequestBody<operations["create-general-ledger-tax-adjustment-journal"]>;
export type TaxAdjustmentJournalUpdate = RequestBody<operations["update-general-ledger-tax-adjustment-journal-key"]>;
/** general-ledger/txn-allocation-template */
export type TxnAllocationTemplate = components["schemas"]["objects.general-ledger.txn-allocation-template"];
export type TxnAllocationTemplateCreate = RequestBody<operations["create-general-ledger-txn-allocation-template"]>;
export type TxnAllocationTemplateUpdate = RequestBody<operations["update-general-ledger-txn-allocation-template-key"]>;
/** general-ledger/txn-allocation-template-line */
export type TxnAllocationTemplateLine = components["schemas"]["objects.general-ledger.txn-allocation-template-line"];
/** general-ledger/user-defined-book */
export type UserDefinedBook = components["schemas"]["objects.general-ledger.user-defined-book"];
export type UserDefinedBookCreate = RequestBody<operations["create-general-ledger-user-defined-book"]>;
export type UserDefinedBookUpdate = RequestBody<operations["update-general-ledger-user-defined-book-key"]>;
/** general-ledger/user-defined-journal */
export type UserDefinedJournal = components["schemas"]["objects.general-ledger.user-defined-journal"];
export type UserDefinedJournalCreate = RequestBody<operations["create-general-ledger-user-defined-journal"]>;
export type UserDefinedJournalUpdate = RequestBody<operations["update-general-ledger-user-defined-journal-key"]>;

export const generalLedger = defineApplication({
  account: object(shape<{ record: Account; create: AccountCreate; update: AccountUpdate }>(), "general-ledger/account", ["create","delete","get","update"]),
  accountAllocation: object(shape<{ record: AccountAllocation; create: AccountAllocationCreate; update: AccountAllocationUpdate }>(), "general-ledger/account-allocation", ["create","delete","get","update"]),
  accountAllocationBasis: object(shape<{ record: AccountAllocationBasis; update: AccountAllocationBasisUpdate }>(), "general-ledger/account-allocation-basis", ["get","update"]),
  accountAllocationGroup: object(shape<{ record: AccountAllocationGroup; create: AccountAllocationGroupCreate; update: AccountAllocationGroupUpdate }>(), "general-ledger/account-allocation-group", ["create","delete","get","update"]),
  accountAllocationGroupMember: object(shape<{ record: AccountAllocationGroupMember }>(), "general-ledger/account-allocation-group-member", ["get"]),
  accountAllocationReverse: object(shape<{ record: AccountAllocationReverse; update: AccountAllocationReverseUpdate }>(), "general-ledger/account-allocation-reverse", ["get","update"]),
  accountAllocationRun: object(shape<{ record: AccountAllocationRun; create: AccountAllocationRunCreate }>(), "general-ledger/account-allocation-run", ["create","delete","get"], {
    restart: action<RequestBody<operations["restart-general-ledger-account-allocation-run"]>, ResponseResult<operations["restart-general-ledger-account-allocation-run"]>>("restart"),
  }),
  accountAllocationSource: object(shape<{ record: AccountAllocationSource; update: AccountAllocationSourceUpdate }>(), "general-ledger/account-allocation-source", ["get","update"]),
  accountAllocationTarget: object(shape<{ record: AccountAllocationTarget; update: AccountAllocationTargetUpdate }>(), "general-ledger/account-allocation-target", ["get","update"]),
  accountCategory: object(shape<{ record: AccountCategory }>(), "general-ledger/account-category", ["get"]),
  accountGroup: object(shape<{ record: AccountGroup; create: AccountGroupCreate; update: AccountGroupUpdate }>(), "general-ledger/account-group", ["create","delete","get","update"]),
  accountGroupCategoryMember: object(shape<{ record: AccountGroupCategoryMember }>(), "general-ledger/account-group-category-member", ["get"]),
  accountGroupComputation: object(shape<{ record: AccountGroupComputation }>(), "general-ledger/account-group-computation", ["get"]),
  accountGroupMap: object(shape<{ record: AccountGroupMap }>(), "general-ledger/account-group-map", ["get"]),
  accountGroupMember: object(shape<{ record: AccountGroupMember }>(), "general-ledger/account-group-member", ["get"]),
  accountGroupPurpose: object(shape<{ record: AccountGroupPurpose; create: AccountGroupPurposeCreate; update: AccountGroupPurposeUpdate }>(), "general-ledger/account-group-purpose", ["create","delete","get","update"]),
  accountNameEntityMap: object(shape<{ record: AccountNameEntityMap; create: AccountNameEntityMapCreate; update: AccountNameEntityMapUpdate }>(), "general-ledger/account-name-entity-map", ["create","delete","get","update"]),
  accountRange: object(shape<{ record: AccountRange }>(), "general-ledger/account-range", ["get"]),
  accountingSequence: object(shape<{ record: AccountingSequence; create: AccountingSequenceCreate; update: AccountingSequenceUpdate }>(), "general-ledger/accounting-sequence", ["create","delete","get","update"]),
  accountingSequenceLine: object(shape<{ record: AccountingSequenceLine; create: AccountingSequenceLineCreate; update: AccountingSequenceLineUpdate }>(), "general-ledger/accounting-sequence-line", ["create","delete","get","update"]),
  adjustmentJournal: object(shape<{ record: AdjustmentJournal; create: AdjustmentJournalCreate; update: AdjustmentJournalUpdate }>(), "general-ledger/adjustment-journal", ["create","delete","get","update"]),
  budget: object(shape<{ record: Budget; create: BudgetCreate; update: BudgetUpdate }>(), "general-ledger/budget", ["create","delete","get","update"]),
  budgetDetail: object(shape<{ record: BudgetDetail }>(), "general-ledger/budget-detail", ["get"]),
  financialGraph: object(shape<{ record: FinancialGraph }>(), "general-ledger/financial-graph", ["delete","get"]),
  gaapAdjustmentJournal: object(shape<{ record: GaapAdjustmentJournal; create: GaapAdjustmentJournalCreate; update: GaapAdjustmentJournalUpdate }>(), "general-ledger/gaap-adjustment-journal", ["create","delete","get","update"]),
  journal: object(shape<{ record: Journal; create: JournalCreate; update: JournalUpdate }>(), "general-ledger/journal", ["create","delete","get","update"]),
  journalEntry: object(shape<{ record: JournalEntry; create: JournalEntryCreate; update: JournalEntryUpdate }>(), "general-ledger/journal-entry", ["create","delete","get","update"]),
  journalEntryLine: object(shape<{ record: JournalEntryLine }>(), "general-ledger/journal-entry-line", ["delete","get"]),
  journalEntryTaxEntry: object(shape<{ record: JournalEntryTaxEntry }>(), "general-ledger/journal-entry-tax-entry", ["get"]),
  journalEntryTxnTemplate: object(shape<{ record: JournalEntryTxnTemplate; create: JournalEntryTxnTemplateCreate; update: JournalEntryTxnTemplateUpdate }>(), "general-ledger/journal-entry-txn-template", ["create","delete","get","update"]),
  journalEntryTxnTemplateLine: object(shape<{ record: JournalEntryTxnTemplateLine }>(), "general-ledger/journal-entry-txn-template-line", ["delete","get"]),
  recurringAccountAllocation: object(shape<{ record: RecurringAccountAllocation; create: RecurringAccountAllocationCreate; update: RecurringAccountAllocationUpdate }>(), "general-ledger/recurring-account-allocation", ["create","delete","get","update"]),
  reportAudience: object(shape<{ record: ReportAudience; create: ReportAudienceCreate; update: ReportAudienceUpdate }>(), "general-ledger/report-audience", ["create","delete","get","update"]),
  reportType: object(shape<{ record: ReportType; create: ReportTypeCreate; update: ReportTypeUpdate }>(), "general-ledger/report-type", ["create","delete","get","update"]),
  reportingAccount: object(shape<{ record: ReportingAccount }>(), "general-ledger/reporting-account", ["delete","get"]),
  reportingAccountMap: object(shape<{ record: ReportingAccountMap }>(), "general-ledger/reporting-account-map", ["get"]),
  reportingAccountSet: object(shape<{ record: ReportingAccountSet; create: ReportingAccountSetCreate; update: ReportingAccountSetUpdate }>(), "general-ledger/reporting-account-set", ["create","delete","get","update"]),
  reportingAccountSetPermission: object(shape<{ record: ReportingAccountSetPermission }>(), "general-ledger/reporting-account-set-permission", ["delete","get"]),
  reportingCategory: object(shape<{ record: ReportingCategory }>(), "general-ledger/reporting-category", ["get"]),
  reportingPeriod: object(shape<{ record: ReportingPeriod; create: ReportingPeriodCreate; update: ReportingPeriodUpdate }>(), "general-ledger/reporting-period", ["create","delete","get","update"]),
  statisticalAccount: object(shape<{ record: StatisticalAccount; create: StatisticalAccountCreate; update: StatisticalAccountUpdate }>(), "general-ledger/statistical-account", ["create","delete","get","update"]),
  statisticalAdjustmentJournal: object(shape<{ record: StatisticalAdjustmentJournal; create: StatisticalAdjustmentJournalCreate; update: StatisticalAdjustmentJournalUpdate }>(), "general-ledger/statistical-adjustment-journal", ["create","delete","get","update"]),
  statisticalJournal: object(shape<{ record: StatisticalJournal; create: StatisticalJournalCreate; update: StatisticalJournalUpdate }>(), "general-ledger/statistical-journal", ["create","delete","get","update"]),
  statisticalJournalEntry: object(shape<{ record: StatisticalJournalEntry; create: StatisticalJournalEntryCreate; update: StatisticalJournalEntryUpdate }>(), "general-ledger/statistical-journal-entry", ["create","delete","get","update"]),
  statisticalJournalEntryLine: object(shape<{ record: StatisticalJournalEntryLine }>(), "general-ledger/statistical-journal-entry-line", ["get"]),
  taxAdjustmentJournal: object(shape<{ record: TaxAdjustmentJournal; create: TaxAdjustmentJournalCreate; update: TaxAdjustmentJournalUpdate }>(), "general-ledger/tax-adjustment-journal", ["create","delete","get","update"]),
  txnAllocationTemplate: object(shape<{ record: TxnAllocationTemplate; create: TxnAllocationTemplateCreate; update: TxnAllocationTemplateUpdate }>(), "general-ledger/txn-allocation-template", ["create","delete","get","update"]),
  txnAllocationTemplateLine: object(shape<{ record: TxnAllocationTemplateLine }>(), "general-ledger/txn-allocation-template-line", ["get"]),
  userDefinedBook: object(shape<{ record: UserDefinedBook; create: UserDefinedBookCreate; update: UserDefinedBookUpdate }>(), "general-ledger/user-defined-book", ["create","delete","get","update"]),
  userDefinedJournal: object(shape<{ record: UserDefinedJournal; create: UserDefinedJournalCreate; update: UserDefinedJournalUpdate }>(), "general-ledger/user-defined-journal", ["create","delete","get","update"]),
  services: group({
    reports: group({
      generalLedger: group({
        accountBalance: service<RequestBody<operations["gl-report-account-balance"]>, ResponseResult<operations["gl-report-account-balance"]>>("services/reports/general-ledger/account-balance", "POST"),
        accountBalanceByDimension: service<RequestBody<operations["gl-report-account-balance-by-dimension"]>, ResponseResult<operations["gl-report-account-balance-by-dimension"]>>("services/reports/general-ledger/account-balance-by-dimension", "POST"),
        accountGroupHierarchy: service<RequestBody<operations["gl-report-account-group-hierarchy"]>, ResponseResult<operations["gl-report-account-group-hierarchy"]>>("services/reports/general-ledger/account-group-hierarchy", "POST"),
        details: service<RequestBody<operations["gl-report-details"]>, ResponseResult<operations["gl-report-details"]>>("services/reports/general-ledger/details", "POST"),
        trialBalance: service<RequestBody<operations["gl-report-trial-balance"]>, ResponseResult<operations["gl-report-trial-balance"]>>("services/reports/general-ledger/trial-balance", "POST"),
      }),
    }),
  }),
});

export default generalLedger;

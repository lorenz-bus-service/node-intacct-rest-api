// Generated from spec/contracts-and-revenue-management.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** contracts/billing-price-list */
export type BillingPriceList = components["schemas"]["objects.contracts.billing-price-list"];
export type BillingPriceListCreate = RequestBody<operations["create-contracts-billing-price-list"]>;
export type BillingPriceListUpdate = RequestBody<operations["update-contracts-billing-price-list-key"]>;
/** contracts/billing-price-list-entry */
export type BillingPriceListEntry = components["schemas"]["objects.contracts.billing-price-list-entry"];
export type BillingPriceListEntryCreate = RequestBody<operations["create-contracts-billing-price-list-entry"]>;
export type BillingPriceListEntryUpdate = RequestBody<operations["update-contracts-billing-price-list-entry-key"]>;
/** contracts/billing-price-list-entry-line */
export type BillingPriceListEntryLine = components["schemas"]["objects.contracts.billing-price-list-entry-line"];
export type BillingPriceListEntryLineUpdate = RequestBody<operations["update-contracts-billing-price-list-entry-line-key"]>;
/** contracts/billing-price-list-entry-line-tier */
export type BillingPriceListEntryLineTier = components["schemas"]["objects.contracts.billing-price-list-entry-line-tier"];
export type BillingPriceListEntryLineTierCreate = RequestBody<operations["create-contracts-billing-price-list-entry-line-tier"]>;
export type BillingPriceListEntryLineTierUpdate = RequestBody<operations["update-contracts-billing-price-list-entry-line-tier-key"]>;
/** contracts/billing-schedule */
export type BillingSchedule = ResponseResult<operations["get-contracts-billing-schedule-key"]>;
export type BillingScheduleUpdate = RequestBody<operations["update-contracts-billing-schedule-key"]>;
/** contracts/billing-schedule-line */
export type BillingScheduleLine = components["schemas"]["objects.contracts.billing-schedule-line"];
/** contracts/billing-template */
export type BillingTemplate = components["schemas"]["objects.contracts.billing-template"];
export type BillingTemplateCreate = RequestBody<operations["create-contracts-billing-template"]>;
export type BillingTemplateUpdate = RequestBody<operations["update-contracts-billing-template-key"]>;
/** contracts/billing-template-line */
export type BillingTemplateLine = components["schemas"]["objects.contracts.billing-template-line"];
/** contracts/bulk-action-run-summary */
export type BulkActionRunSummary = components["schemas"]["objects.contracts.bulk-action-run-summary"];
/** contracts/compliance-checklist-task */
export type ComplianceChecklistTask = components["schemas"]["objects.contracts.compliance-checklist-task"];
export type ComplianceChecklistTaskCreate = RequestBody<operations["create-contract-compliance-checklist-task"]>;
export type ComplianceChecklistTaskUpdate = RequestBody<operations["update-contract-compliance-checklist-task-key"]>;
/** contracts/compliance-note */
export type ComplianceNote = components["schemas"]["objects.contracts.compliance-note"];
export type ComplianceNoteCreate = RequestBody<operations["create-contract-compliance-note"]>;
export type ComplianceNoteUpdate = RequestBody<operations["update-contract-compliance-note-key"]>;
/** contracts/compliance-task */
export type ComplianceTask = components["schemas"]["objects.contracts.compliance-task"];
export type ComplianceTaskCreate = RequestBody<operations["create-contract-compliance-task"]>;
export type ComplianceTaskUpdate = RequestBody<operations["update-contract-compliance-task-key"]>;
/** contracts/contract */
export type Contract = components["schemas"]["objects.contracts.contract"];
export type ContractCreate = RequestBody<operations["create-contracts-contract"]>;
export type ContractUpdate = RequestBody<operations["update-contracts-contract-key"]>;
/** contracts/contract-group */
export type ContractGroup = components["schemas"]["objects.contracts.contract-group"];
export type ContractGroupCreate = RequestBody<operations["post-objects-contract-group"]>;
export type ContractGroupUpdate = RequestBody<operations["patch-objects-contract-group-key"]>;
/** contracts/contract-group-member */
export type ContractGroupMember = components["schemas"]["objects.contracts.contract-group-member"];
/** contracts/contract-line */
export type ContractLine = components["schemas"]["objects.contracts.contract-line"];
export type ContractLineCreate = RequestBody<operations["create-contracts-contract-line"]>;
export type ContractLineUpdate = RequestBody<operations["update-contracts-contract-line-key"]>;
/** contracts/contract-mea-allocation */
export type ContractMeaAllocation = components["schemas"]["objects.contracts.contract-mea-allocation"];
export type ContractMeaAllocationCreate = RequestBody<operations["create-contracts-contract-mea-allocation"]>;
/** contracts/contract-renewal-template */
export type ContractRenewalTemplate = components["schemas"]["objects.contracts.contract-renewal-template"];
export type ContractRenewalTemplateCreate = RequestBody<operations["post-objects-contracts-contract-renewal-template"]>;
export type ContractRenewalTemplateUpdate = RequestBody<operations["patch-objects-contracts-contract-renewal-template-key"]>;
/** contracts/contract-txn-history */
export type ContractTxnHistory = components["schemas"]["objects.contracts.contract-txn-history"];
/** contracts/contract-type */
export type ContractType = components["schemas"]["objects.contracts.contract-type"];
export type ContractTypeCreate = RequestBody<operations["create-contracts-contract-type"]>;
export type ContractTypeUpdate = RequestBody<operations["update-contracts-contract-type-key"]>;
/** contracts/contract-usage */
export type ContractUsage = components["schemas"]["objects.contracts.contract-usage"];
export type ContractUsageCreate = RequestBody<operations["create-contracts-contract-usage"]>;
export type ContractUsageUpdate = RequestBody<operations["update-contracts-contract-usage-key"]>;
/** contracts/evergreen-template */
export type EvergreenTemplate = components["schemas"]["objects.contracts.evergreen-template"];
export type EvergreenTemplateCreate = RequestBody<operations["post-objects-evergreen-template"]>;
export type EvergreenTemplateUpdate = RequestBody<operations["patch-objects-evergreen-template-key"]>;
/** contracts/expense */
export type Expense = components["schemas"]["objects.contracts.expense"];
export type ExpenseCreate = RequestBody<operations["create-contracts-expense"]>;
export type ExpenseUpdate = RequestBody<operations["update-contracts-expense-key"]>;
/** contracts/expense-schedule */
export type ExpenseSchedule = ResponseResult<operations["get-contracts-expense-schedule-key"]>;
export type ExpenseScheduleUpdate = RequestBody<operations["update-contracts-expense-schedule-key"]>;
/** contracts/expense-schedule-line */
export type ExpenseScheduleLine = components["schemas"]["objects.contracts.expense-schedule-line"];
/** contracts/expense-template */
export type ExpenseTemplate = components["schemas"]["objects.contracts.expense-template"];
export type ExpenseTemplateCreate = RequestBody<operations["create-contracts-expense-template"]>;
export type ExpenseTemplateUpdate = RequestBody<operations["update-contracts-expense-template-key"]>;
/** contracts/expense-template-line */
export type ExpenseTemplateLine = components["schemas"]["objects.contracts.expense-template-line"];
/** contracts/historical-schedule-run */
export type HistoricalScheduleRun = components["schemas"]["objects.contracts.historical-schedule-run"];
/** contracts/mea-category */
export type MeaCategory = components["schemas"]["objects.contracts.mea-category"];
export type MeaCategoryCreate = RequestBody<operations["create-contracts-mea-category"]>;
export type MeaCategoryUpdate = RequestBody<operations["update-contracts-mea-category-key"]>;
/** contracts/mea-price-list */
export type MeaPriceList = components["schemas"]["objects.contracts.mea-price-list"];
export type MeaPriceListCreate = RequestBody<operations["create-contracts-mea-price-list"]>;
export type MeaPriceListUpdate = RequestBody<operations["update-contracts-mea-price-list-key"]>;
/** contracts/mea-price-list-entry */
export type MeaPriceListEntry = components["schemas"]["objects.contracts.mea-price-list-entry"];
export type MeaPriceListEntryCreate = RequestBody<operations["create-contracts-mea-price-list-entry"]>;
export type MeaPriceListEntryUpdate = RequestBody<operations["update-contracts-mea-price-list-entry-key"]>;
/** contracts/mea-price-list-entry-line */
export type MeaPriceListEntryLine = components["schemas"]["objects.contracts.mea-price-list-entry-line"];
export type MeaPriceListEntryLineUpdate = RequestBody<operations["update-contracts-mea-price-list-entry-line-key"]>;
/** contracts/revenue-schedule */
export type RevenueSchedule = ResponseResult<operations["get-contracts-revenue-schedule-key"]>;
export type RevenueScheduleUpdate = RequestBody<operations["update-contracts-revenue-schedule-key"]>;
/** contracts/revenue-schedule-line */
export type RevenueScheduleLine = components["schemas"]["objects.contracts.revenue-schedule-line"];
/** contracts/revenue-template */
export type RevenueTemplate = components["schemas"]["objects.contracts.revenue-template"];
export type RevenueTemplateCreate = RequestBody<operations["create-contracts-revenue-template"]>;
export type RevenueTemplateUpdate = RequestBody<operations["update-contracts-revenue-template-key"]>;

export const contractsAndRevenueManagement = defineApplication({
  billingPriceList: object(shape<{ record: BillingPriceList; create: BillingPriceListCreate; update: BillingPriceListUpdate }>(), "contracts/billing-price-list", ["create","delete","get","update"]),
  billingPriceListEntry: object(shape<{ record: BillingPriceListEntry; create: BillingPriceListEntryCreate; update: BillingPriceListEntryUpdate }>(), "contracts/billing-price-list-entry", ["create","delete","get","update"]),
  billingPriceListEntryLine: object(shape<{ record: BillingPriceListEntryLine; update: BillingPriceListEntryLineUpdate }>(), "contracts/billing-price-list-entry-line", ["delete","get","update"]),
  billingPriceListEntryLineTier: object(shape<{ record: BillingPriceListEntryLineTier; create: BillingPriceListEntryLineTierCreate; update: BillingPriceListEntryLineTierUpdate }>(), "contracts/billing-price-list-entry-line-tier", ["create","delete","get","update"]),
  billingSchedule: object(shape<{ record: BillingSchedule; update: BillingScheduleUpdate }>(), "contracts/billing-schedule", ["get","update"]),
  billingScheduleLine: object(shape<{ record: BillingScheduleLine }>(), "contracts/billing-schedule-line", ["get"]),
  billingTemplate: object(shape<{ record: BillingTemplate; create: BillingTemplateCreate; update: BillingTemplateUpdate }>(), "contracts/billing-template", ["create","delete","get","update"]),
  billingTemplateLine: object(shape<{ record: BillingTemplateLine }>(), "contracts/billing-template-line", ["get"]),
  bulkActionRunSummary: object(shape<{ record: BulkActionRunSummary }>(), "contracts/bulk-action-run-summary", ["get"]),
  complianceChecklistTask: object(shape<{ record: ComplianceChecklistTask; create: ComplianceChecklistTaskCreate; update: ComplianceChecklistTaskUpdate }>(), "contracts/compliance-checklist-task", ["create","delete","get","update"]),
  complianceNote: object(shape<{ record: ComplianceNote; create: ComplianceNoteCreate; update: ComplianceNoteUpdate }>(), "contracts/compliance-note", ["create","delete","get","update"]),
  complianceTask: object(shape<{ record: ComplianceTask; create: ComplianceTaskCreate; update: ComplianceTaskUpdate }>(), "contracts/compliance-task", ["create","delete","get","update"]),
  contract: object(shape<{ record: Contract; create: ContractCreate; update: ContractUpdate }>(), "contracts/contract", ["create","delete","get","update"], {
    cancel: action<RequestBody<operations["cancel-contracts-contract"]>, ResponseResult<operations["cancel-contracts-contract"]>>("cancel"),
    clearAllMea: action<RequestBody<operations["clear-all-mea-contracts-contract"]>, ResponseResult<operations["clear-all-mea-contracts-contract"]>>("clear-all-mea"),
    clearLastActiveMea: action<RequestBody<operations["clear-last-active-mea-contracts-contract"]>, ResponseResult<operations["clear-last-active-mea-contracts-contract"]>>("clear-last-active-mea"),
    expire: action<RequestBody<operations["expire-contracts-contract"]>, ResponseResult<operations["expire-contracts-contract"]>>("expire"),
    holdSchedules: action<RequestBody<operations["hold-schedules-contracts-contract"]>, ResponseResult<operations["hold-schedules-contracts-contract"]>>("hold-schedules"),
    post: action<RequestBody<operations["post-contracts-contract"]>, ResponseResult<operations["post-contracts-contract"]>>("post"),
    renew: action<RequestBody<operations["renew-contracts-contract"]>, ResponseResult<operations["renew-contracts-contract"]>>("renew"),
    resumeSchedules: action<RequestBody<operations["resume-schedules-contracts-contract"]>, ResponseResult<operations["resume-schedules-contracts-contract"]>>("resume-schedules"),
    uncancel: action<RequestBody<operations["uncancel-contracts-contract"]>, ResponseResult<operations["uncancel-contracts-contract"]>>("uncancel"),
  }),
  contractGroup: object(shape<{ record: ContractGroup; create: ContractGroupCreate; update: ContractGroupUpdate }>(), "contracts/contract-group", ["create","delete","get","update"]),
  contractGroupMember: object(shape<{ record: ContractGroupMember }>(), "contracts/contract-group-member", ["get"]),
  contractLine: object(shape<{ record: ContractLine; create: ContractLineCreate; update: ContractLineUpdate }>(), "contracts/contract-line", ["create","delete","get","update"], {
    deliver: action<RequestBody<operations["deliver-contracts-contract-line-key"]>, ResponseResult<operations["deliver-contracts-contract-line-key"]>>("deliver"),
    holdSchedules: action<RequestBody<operations["hold-schedules-contracts-contract-line-key"]>, ResponseResult<operations["hold-schedules-contracts-contract-line-key"]>>("hold-schedules"),
    post: action<RequestBody<operations["post-contracts-contract-line-key"]>, ResponseResult<operations["post-contracts-contract-line-key"]>>("post"),
    reestimate: action<RequestBody<operations["reestimate-contracts-contract-line-key"]>, ResponseResult<operations["reestimate-contracts-contract-line-key"]>>("reestimate"),
    resumeSchedules: action<RequestBody<operations["resume-schedules-contracts-contract-line-key"]>, ResponseResult<operations["resume-schedules-contracts-contract-line-key"]>>("resume-schedules"),
    revalue: action<RequestBody<operations["revalue-contracts-contract-line-key"]>, ResponseResult<operations["revalue-contracts-contract-line-key"]>>("revalue"),
    uncancel: action<RequestBody<operations["uncancel-contracts-contract-line-key"]>, ResponseResult<operations["uncancel-contracts-contract-line-key"]>>("uncancel"),
  }),
  contractMeaAllocation: object(shape<{ record: ContractMeaAllocation; create: ContractMeaAllocationCreate }>(), "contracts/contract-mea-allocation", ["create","get"]),
  contractRenewalTemplate: object(shape<{ record: ContractRenewalTemplate; create: ContractRenewalTemplateCreate; update: ContractRenewalTemplateUpdate }>(), "contracts/contract-renewal-template", ["create","delete","get","update"]),
  contractTxnHistory: object(shape<{ record: ContractTxnHistory }>(), "contracts/contract-txn-history", ["get"]),
  contractType: object(shape<{ record: ContractType; create: ContractTypeCreate; update: ContractTypeUpdate }>(), "contracts/contract-type", ["create","delete","get","update"]),
  contractUsage: object(shape<{ record: ContractUsage; create: ContractUsageCreate; update: ContractUsageUpdate }>(), "contracts/contract-usage", ["create","delete","get","update"]),
  evergreenTemplate: object(shape<{ record: EvergreenTemplate; create: EvergreenTemplateCreate; update: EvergreenTemplateUpdate }>(), "contracts/evergreen-template", ["create","delete","get","update"]),
  expense: object(shape<{ record: Expense; create: ExpenseCreate; update: ExpenseUpdate }>(), "contracts/expense", ["create","delete","get","update"], {
    holdSchedules: action<RequestBody<operations["hold-schedules-contracts-expense"]>, ResponseResult<operations["hold-schedules-contracts-expense"]>>("hold-schedules"),
    post: action<RequestBody<operations["post-contracts-expense"]>, ResponseResult<operations["post-contracts-expense"]>>("post"),
    resumeSchedules: action<RequestBody<operations["resume-schedules-contracts-expense"]>, ResponseResult<operations["resume-schedules-contracts-expense"]>>("resume-schedules"),
  }),
  expenseSchedule: object(shape<{ record: ExpenseSchedule; update: ExpenseScheduleUpdate }>(), "contracts/expense-schedule", ["get","update"]),
  expenseScheduleLine: object(shape<{ record: ExpenseScheduleLine }>(), "contracts/expense-schedule-line", ["get"], {
    post: action<RequestBody<operations["post-contracts-expense-schedule-line"]>, ResponseResult<operations["post-contracts-expense-schedule-line"]>>("post"),
    unpost: action<RequestBody<operations["unpost-contracts-expense-schedule-line"]>, ResponseResult<operations["unpost-contracts-expense-schedule-line"]>>("unpost"),
  }),
  expenseTemplate: object(shape<{ record: ExpenseTemplate; create: ExpenseTemplateCreate; update: ExpenseTemplateUpdate }>(), "contracts/expense-template", ["create","delete","get","update"]),
  expenseTemplateLine: object(shape<{ record: ExpenseTemplateLine }>(), "contracts/expense-template-line", ["get"]),
  historicalScheduleRun: object(shape<{ record: HistoricalScheduleRun }>(), "contracts/historical-schedule-run", ["get"]),
  meaCategory: object(shape<{ record: MeaCategory; create: MeaCategoryCreate; update: MeaCategoryUpdate }>(), "contracts/mea-category", ["create","delete","get","update"]),
  meaPriceList: object(shape<{ record: MeaPriceList; create: MeaPriceListCreate; update: MeaPriceListUpdate }>(), "contracts/mea-price-list", ["create","delete","get","update"]),
  meaPriceListEntry: object(shape<{ record: MeaPriceListEntry; create: MeaPriceListEntryCreate; update: MeaPriceListEntryUpdate }>(), "contracts/mea-price-list-entry", ["create","delete","get","update"]),
  meaPriceListEntryLine: object(shape<{ record: MeaPriceListEntryLine; update: MeaPriceListEntryLineUpdate }>(), "contracts/mea-price-list-entry-line", ["delete","get","update"]),
  revenueSchedule: object(shape<{ record: RevenueSchedule; update: RevenueScheduleUpdate }>(), "contracts/revenue-schedule", ["get","update"]),
  revenueScheduleLine: object(shape<{ record: RevenueScheduleLine }>(), "contracts/revenue-schedule-line", ["get"], {
    post: action<RequestBody<operations["post-contracts-revenue-schedule-line"]>, ResponseResult<operations["post-contracts-revenue-schedule-line"]>>("post"),
    unpost: action<RequestBody<operations["unpost-contracts-revenue-schedule-line"]>, ResponseResult<operations["unpost-contracts-revenue-schedule-line"]>>("unpost"),
  }),
  revenueTemplate: object(shape<{ record: RevenueTemplate; create: RevenueTemplateCreate; update: RevenueTemplateUpdate }>(), "contracts/revenue-template", ["create","delete","get","update"]),
  services: group({
    contracts: group({
      expenseSchedule: group({
        reallocate: service<RequestBody<operations["reallocate-contract-expense-schedule"]>, ResponseResult<operations["reallocate-contract-expense-schedule"]>>("services/contracts/expense-schedule/reallocate", "POST"),
      }),
      revenueSchedule: group({
        reallocate: service<RequestBody<operations["reallocate-contract-revenue-schedule"]>, ResponseResult<operations["reallocate-contract-revenue-schedule"]>>("services/contracts/revenue-schedule/reallocate", "POST"),
      }),
    }),
  }),
});

export default contractsAndRevenueManagement;

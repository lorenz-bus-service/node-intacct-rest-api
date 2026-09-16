// Generated from spec/construction.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** construction-forecasting/wip-forecast-detail */
export type WipForecastDetail = components["schemas"]["objects.construction-forecasting.wip-forecast-detail"];
export type WipForecastDetailUpdate = RequestBody<operations["update-construction-forecasting-wip-forecast-detail-key"]>;
/** construction-forecasting/wip-period */
export type WipPeriod = components["schemas"]["objects.construction-forecasting.wip-period"];
export type WipPeriodCreate = RequestBody<operations["create-construction-forecasting-wip-period"]>;
export type WipPeriodUpdate = RequestBody<operations["update-construction-forecasting-wip-period-key"]>;
/** construction-forecasting/wip-project */
export type WipProject = components["schemas"]["objects.construction-forecasting.wip-project"];
export type WipProjectCreate = RequestBody<operations["create-construction-forecasting-wip-project"]>;
export type WipProjectUpdate = RequestBody<operations["update-construction-forecasting-wip-project-key"]>;
/** construction-forecasting/wip-project-manager-forecast */
export type WipProjectManagerForecast = components["schemas"]["objects.construction-forecasting.wip-project-manager-forecast"];
export type WipProjectManagerForecastCreate = RequestBody<operations["create-construction-forecasting-wip-project-manager-forecast"]>;
export type WipProjectManagerForecastUpdate = RequestBody<operations["update-construction-forecasting-wip-project-manager-forecast-key"]>;
/** construction-forecasting/wip-project-setting */
export type WipProjectSetting = components["schemas"]["objects.construction-forecasting.wip-project-setting"];
export type WipProjectSettingCreate = RequestBody<operations["create-construction-forecasting-wip-project-setting"]>;
export type WipProjectSettingUpdate = RequestBody<operations["update-construction-forecasting-wip-project-setting-key"]>;
/** construction-forecasting/wip-setup */
export type WipSetup = components["schemas"]["objects.construction-forecasting.wip-setup"];
export type WipSetupCreate = RequestBody<operations["create-construction-forecasting-wip-setup"]>;
export type WipSetupUpdate = RequestBody<operations["update-construction-forecasting-wip-setup-key"]>;
/** construction-forecasting/wip-setup-account */
export type WipSetupAccount = components["schemas"]["objects.construction-forecasting.wip-setup-account"];
export type WipSetupAccountCreate = RequestBody<operations["create-construction-forecasting-wip-setup-account"]>;
export type WipSetupAccountUpdate = RequestBody<operations["update-construction-forecasting-wip-setup-account-key"]>;
/** construction-forecasting/wip-target-project */
export type WipTargetProject = components["schemas"]["objects.construction-forecasting.wip-target-project"];
export type WipTargetProjectUpdate = RequestBody<operations["update-construction-forecasting-wip-target-project-key"]>;
/** construction/accumulation-type */
export type AccumulationType = components["schemas"]["objects.construction.accumulation-type"];
export type AccumulationTypeCreate = RequestBody<operations["create-construction-accumulation-type"]>;
export type AccumulationTypeUpdate = RequestBody<operations["update-construction-accumulation-type-key"]>;
/** construction/ap-releasable-retainage */
export type ApReleasableRetainage = components["schemas"]["objects.construction.ap-releasable-retainage"];
/** construction/ap-retainage-release */
export type ApRetainageRelease = components["schemas"]["objects.construction.ap-retainage-release"];
export type ApRetainageReleaseCreate = RequestBody<operations["create-construction-ap-retainage-release"]>;
export type ApRetainageReleaseUpdate = RequestBody<operations["update-construction-ap-retainage-release-key"]>;
/** construction/ap-retainage-release-line */
export type ApRetainageReleaseLine = components["schemas"]["objects.construction.ap-retainage-release-line"];
/** construction/ar-releasable-retainage */
export type ArReleasableRetainage = components["schemas"]["objects.construction.ar-releasable-retainage"];
/** construction/ar-retainage-release */
export type ArRetainageRelease = components["schemas"]["objects.construction.ar-retainage-release"];
export type ArRetainageReleaseCreate = RequestBody<operations["create-construction-ar-retainage-release"]>;
export type ArRetainageReleaseUpdate = RequestBody<operations["update-construction-ar-retainage-release-key"]>;
/** construction/ar-retainage-release-line */
export type ArRetainageReleaseLine = components["schemas"]["objects.construction.ar-retainage-release-line"];
/** construction/change-request */
export type ChangeRequest = components["schemas"]["objects.construction.change-request"];
export type ChangeRequestCreate = RequestBody<operations["create-construction-change-request"]>;
export type ChangeRequestUpdate = RequestBody<operations["update-construction-change-request-key"]>;
/** construction/change-request-line */
export type ChangeRequestLine = components["schemas"]["objects.construction.change-request-line"];
/** construction/change-request-status */
export type ChangeRequestStatus = components["schemas"]["objects.construction.change-request-status"];
export type ChangeRequestStatusCreate = RequestBody<operations["create-construction-change-request-status"]>;
export type ChangeRequestStatusUpdate = RequestBody<operations["update-construction-change-request-status-key"]>;
/** construction/change-request-type */
export type ChangeRequestType = components["schemas"]["objects.construction.change-request-type"];
export type ChangeRequestTypeCreate = RequestBody<operations["create-construction-change-request-type"]>;
export type ChangeRequestTypeUpdate = RequestBody<operations["update-construction-change-request-type-key"]>;
/** construction/compliance-definition */
export type ComplianceDefinition = components["schemas"]["objects.construction.compliance-definition"];
export type ComplianceDefinitionCreate = RequestBody<operations["create-construction-compliance-definition"]>;
export type ComplianceDefinitionUpdate = RequestBody<operations["update-construction-compliance-definition-key"]>;
/** construction/compliance-definition-association */
export type ComplianceDefinitionAssociation = components["schemas"]["objects.construction.compliance-definition-association"];
/** construction/compliance-record */
export type ComplianceRecord = components["schemas"]["objects.construction.compliance-record"];
export type ComplianceRecordCreate = RequestBody<operations["create-construction-compliance-record"]>;
export type ComplianceRecordUpdate = RequestBody<operations["update-construction-compliance-record-key"]>;
/** construction/compliance-type */
export type ComplianceType = components["schemas"]["objects.construction.compliance-type"];
export type ComplianceTypeCreate = RequestBody<operations["create-construction-compliance-type"]>;
export type ComplianceTypeUpdate = RequestBody<operations["update-construction-compliance-type-key"]>;
/** construction/cost-type-observed-percent-completed */
export type CostTypeObservedPercentCompleted = components["schemas"]["objects.construction.cost-type-observed-percent-completed"];
export type CostTypeObservedPercentCompletedCreate = RequestBody<operations["create-construction-cost-type-observed-percent-completed"]>;
export type CostTypeObservedPercentCompletedUpdate = RequestBody<operations["update-construction-cost-type-observed-percent-completed-key"]>;
/** construction/employee-position */
export type EmployeePosition = components["schemas"]["objects.construction.employee-position"];
export type EmployeePositionCreate = RequestBody<operations["create-construction-employee-position"]>;
export type EmployeePositionUpdate = RequestBody<operations["update-construction-employee-position-key"]>;
/** construction/labor-class */
export type LaborClass = components["schemas"]["objects.construction.labor-class"];
export type LaborClassCreate = RequestBody<operations["create-construction-labor-class"]>;
export type LaborClassUpdate = RequestBody<operations["update-construction-labor-class-key"]>;
/** construction/labor-shift */
export type LaborShift = components["schemas"]["objects.construction.labor-shift"];
export type LaborShiftCreate = RequestBody<operations["create-construction-labor-shift"]>;
export type LaborShiftUpdate = RequestBody<operations["update-construction-labor-shift-key"]>;
/** construction/labor-union */
export type LaborUnion = components["schemas"]["objects.construction.labor-union"];
export type LaborUnionCreate = RequestBody<operations["create-construction-labor-union"]>;
export type LaborUnionUpdate = RequestBody<operations["update-construction-labor-union-key"]>;
/** construction/primary-document-accounts-payable-bill */
export type PrimaryDocumentAccountsPayableBill = components["schemas"]["objects.construction.primary-document-accounts-payable-bill"];
/** construction/primary-document-accounts-payable-payment */
export type PrimaryDocumentAccountsPayablePayment = components["schemas"]["objects.construction.primary-document-accounts-payable-payment"];
/** construction/primary-document-detail */
export type PrimaryDocumentDetail = components["schemas"]["objects.construction.primary-document-detail"];
/** construction/primary-document-retainage-release */
export type PrimaryDocumentRetainageRelease = components["schemas"]["objects.construction.primary-document-retainage-release"];
/** construction/primary-document-summary */
export type PrimaryDocumentSummary = components["schemas"]["objects.construction.primary-document-summary"];
/** construction/project-change-order */
export type ProjectChangeOrder = components["schemas"]["objects.construction.project-change-order"];
export type ProjectChangeOrderCreate = RequestBody<operations["create-construction-project-change-order"]>;
export type ProjectChangeOrderUpdate = RequestBody<operations["update-construction-project-change-order-key"]>;
/** construction/project-contract */
export type ProjectContract = components["schemas"]["objects.construction.project-contract"];
export type ProjectContractCreate = RequestBody<operations["create-construction-project-contract"]>;
export type ProjectContractUpdate = RequestBody<operations["update-construction-project-contract-key"]>;
/** construction/project-contract-billing-invoice-detail */
export type ProjectContractBillingInvoiceDetail = components["schemas"]["objects.construction.project-contract-billing-invoice-detail"];
/** construction/project-contract-billing-invoice-summary */
export type ProjectContractBillingInvoiceSummary = components["schemas"]["objects.construction.project-contract-billing-invoice-summary"];
/** construction/project-contract-line */
export type ProjectContractLine = components["schemas"]["objects.construction.project-contract-line"];
export type ProjectContractLineCreate = RequestBody<operations["create-construction-project-contract-line"]>;
export type ProjectContractLineUpdate = RequestBody<operations["update-construction-project-contract-line-key"]>;
/** construction/project-contract-line-entry */
export type ProjectContractLineEntry = components["schemas"]["objects.construction.project-contract-line-entry"];
/** construction/project-contract-line-task-map */
export type ProjectContractLineTaskMap = components["schemas"]["objects.construction.project-contract-line-task-map"];
export type ProjectContractLineTaskMapCreate = RequestBody<operations["create-construction-project-contract-line-task-map"]>;
/** construction/project-contract-type */
export type ProjectContractType = components["schemas"]["objects.construction.project-contract-type"];
export type ProjectContractTypeCreate = RequestBody<operations["create-construction-project-contract-type"]>;
export type ProjectContractTypeUpdate = RequestBody<operations["update-construction-project-contract-type-key"]>;
/** construction/project-estimate */
export type ProjectEstimate = components["schemas"]["objects.construction.project-estimate"];
export type ProjectEstimateCreate = RequestBody<operations["create-construction-project-estimate"]>;
export type ProjectEstimateUpdate = RequestBody<operations["update-construction-project-estimate-key"]>;
/** construction/project-estimate-line */
export type ProjectEstimateLine = components["schemas"]["objects.construction.project-estimate-line"];
/** construction/project-estimate-type */
export type ProjectEstimateType = components["schemas"]["objects.construction.project-estimate-type"];
export type ProjectEstimateTypeCreate = RequestBody<operations["create-construction-project-estimate-type"]>;
export type ProjectEstimateTypeUpdate = RequestBody<operations["update-construction-project-estimate-type-key"]>;
/** construction/rate-table */
export type RateTable = components["schemas"]["objects.construction.rate-table"];
export type RateTableCreate = RequestBody<operations["create-construction-rate-table"]>;
export type RateTableUpdate = RequestBody<operations["update-construction-rate-table-key"]>;
/** construction/rate-table-accounts-payable-line */
export type RateTableAccountsPayableLine = components["schemas"]["objects.construction.rate-table-accounts-payable-line"];
/** construction/rate-table-credit-card-line */
export type RateTableCreditCardLine = components["schemas"]["objects.construction.rate-table-credit-card-line"];
/** construction/rate-table-employee-expense-line */
export type RateTableEmployeeExpenseLine = components["schemas"]["objects.construction.rate-table-employee-expense-line"];
/** construction/rate-table-journal-line */
export type RateTableJournalLine = components["schemas"]["objects.construction.rate-table-journal-line"];
/** construction/rate-table-purchasing-line */
export type RateTablePurchasingLine = components["schemas"]["objects.construction.rate-table-purchasing-line"];
/** construction/rate-table-timesheet-line */
export type RateTableTimesheetLine = components["schemas"]["objects.construction.rate-table-timesheet-line"];
/** construction/work-order */
export type WorkOrder = components["schemas"]["objects.construction.work-order"];
export type WorkOrderCreate = RequestBody<operations["create-construction-work-order"]>;
export type WorkOrderUpdate = RequestBody<operations["update-construction-work-order-key"]>;
/** construction/work-order-call-type */
export type WorkOrderCallType = components["schemas"]["objects.construction.work-order-call-type"];
export type WorkOrderCallTypeCreate = RequestBody<operations["create-construction-work-order-call-type"]>;
export type WorkOrderCallTypeUpdate = RequestBody<operations["update-construction-work-order-call-type-key"]>;
/** construction/work-order-problem-code */
export type WorkOrderProblemCode = components["schemas"]["objects.construction.work-order-problem-code"];
export type WorkOrderProblemCodeCreate = RequestBody<operations["create-construction-work-order-problem-code"]>;
export type WorkOrderProblemCodeUpdate = RequestBody<operations["update-construction-work-order-problem-code-key"]>;
/** construction/work-order-state */
export type WorkOrderState = components["schemas"]["objects.construction.work-order-state"];
export type WorkOrderStateCreate = RequestBody<operations["create-construction-work-order-state"]>;
export type WorkOrderStateUpdate = RequestBody<operations["update-construction-work-order-state-key"]>;
/** construction/work-order-type */
export type WorkOrderType = components["schemas"]["objects.construction.work-order-type"];
export type WorkOrderTypeCreate = RequestBody<operations["create-construction-work-order-type"]>;
export type WorkOrderTypeUpdate = RequestBody<operations["update-construction-work-order-type-key"]>;

export const construction = defineApplication({
  wipForecastDetail: object(shape<{ record: WipForecastDetail; update: WipForecastDetailUpdate }>(), "construction-forecasting/wip-forecast-detail", ["get","update"]),
  wipPeriod: object(shape<{ record: WipPeriod; create: WipPeriodCreate; update: WipPeriodUpdate }>(), "construction-forecasting/wip-period", ["create","delete","get","update"]),
  wipProject: object(shape<{ record: WipProject; create: WipProjectCreate; update: WipProjectUpdate }>(), "construction-forecasting/wip-project", ["create","get","update"]),
  wipProjectManagerForecast: object(shape<{ record: WipProjectManagerForecast; create: WipProjectManagerForecastCreate; update: WipProjectManagerForecastUpdate }>(), "construction-forecasting/wip-project-manager-forecast", ["create","delete","get","update"]),
  wipProjectSetting: object(shape<{ record: WipProjectSetting; create: WipProjectSettingCreate; update: WipProjectSettingUpdate }>(), "construction-forecasting/wip-project-setting", ["create","delete","get","update"]),
  wipSetup: object(shape<{ record: WipSetup; create: WipSetupCreate; update: WipSetupUpdate }>(), "construction-forecasting/wip-setup", ["create","get","update"]),
  wipSetupAccount: object(shape<{ record: WipSetupAccount; create: WipSetupAccountCreate; update: WipSetupAccountUpdate }>(), "construction-forecasting/wip-setup-account", ["create","delete","get","update"]),
  wipTargetProject: object(shape<{ record: WipTargetProject; update: WipTargetProjectUpdate }>(), "construction-forecasting/wip-target-project", ["get","update"]),
  accumulationType: object(shape<{ record: AccumulationType; create: AccumulationTypeCreate; update: AccumulationTypeUpdate }>(), "construction/accumulation-type", ["create","delete","get","update"]),
  apReleasableRetainage: object(shape<{ record: ApReleasableRetainage }>(), "construction/ap-releasable-retainage", ["get"]),
  apRetainageRelease: object(shape<{ record: ApRetainageRelease; create: ApRetainageReleaseCreate; update: ApRetainageReleaseUpdate }>(), "construction/ap-retainage-release", ["create","delete","get","update"]),
  apRetainageReleaseLine: object(shape<{ record: ApRetainageReleaseLine }>(), "construction/ap-retainage-release-line", ["get"]),
  arReleasableRetainage: object(shape<{ record: ArReleasableRetainage }>(), "construction/ar-releasable-retainage", ["get"]),
  arRetainageRelease: object(shape<{ record: ArRetainageRelease; create: ArRetainageReleaseCreate; update: ArRetainageReleaseUpdate }>(), "construction/ar-retainage-release", ["create","delete","get","update"]),
  arRetainageReleaseLine: object(shape<{ record: ArRetainageReleaseLine }>(), "construction/ar-retainage-release-line", ["get"]),
  changeRequest: object(shape<{ record: ChangeRequest; create: ChangeRequestCreate; update: ChangeRequestUpdate }>(), "construction/change-request", ["create","delete","get","update"]),
  changeRequestLine: object(shape<{ record: ChangeRequestLine }>(), "construction/change-request-line", ["get"]),
  changeRequestStatus: object(shape<{ record: ChangeRequestStatus; create: ChangeRequestStatusCreate; update: ChangeRequestStatusUpdate }>(), "construction/change-request-status", ["create","delete","get","update"]),
  changeRequestType: object(shape<{ record: ChangeRequestType; create: ChangeRequestTypeCreate; update: ChangeRequestTypeUpdate }>(), "construction/change-request-type", ["create","delete","get","update"]),
  complianceDefinition: object(shape<{ record: ComplianceDefinition; create: ComplianceDefinitionCreate; update: ComplianceDefinitionUpdate }>(), "construction/compliance-definition", ["create","delete","get","update"]),
  complianceDefinitionAssociation: object(shape<{ record: ComplianceDefinitionAssociation }>(), "construction/compliance-definition-association", ["get"]),
  complianceRecord: object(shape<{ record: ComplianceRecord; create: ComplianceRecordCreate; update: ComplianceRecordUpdate }>(), "construction/compliance-record", ["create","delete","get","update"]),
  complianceType: object(shape<{ record: ComplianceType; create: ComplianceTypeCreate; update: ComplianceTypeUpdate }>(), "construction/compliance-type", ["create","delete","get","update"]),
  costTypeObservedPercentCompleted: object(shape<{ record: CostTypeObservedPercentCompleted; create: CostTypeObservedPercentCompletedCreate; update: CostTypeObservedPercentCompletedUpdate }>(), "construction/cost-type-observed-percent-completed", ["create","delete","get","update"]),
  employeePosition: object(shape<{ record: EmployeePosition; create: EmployeePositionCreate; update: EmployeePositionUpdate }>(), "construction/employee-position", ["create","delete","get","update"]),
  laborClass: object(shape<{ record: LaborClass; create: LaborClassCreate; update: LaborClassUpdate }>(), "construction/labor-class", ["create","delete","get","update"]),
  laborShift: object(shape<{ record: LaborShift; create: LaborShiftCreate; update: LaborShiftUpdate }>(), "construction/labor-shift", ["create","delete","get","update"]),
  laborUnion: object(shape<{ record: LaborUnion; create: LaborUnionCreate; update: LaborUnionUpdate }>(), "construction/labor-union", ["create","delete","get","update"]),
  primaryDocumentAccountsPayableBill: object(shape<{ record: PrimaryDocumentAccountsPayableBill }>(), "construction/primary-document-accounts-payable-bill", ["get"]),
  primaryDocumentAccountsPayablePayment: object(shape<{ record: PrimaryDocumentAccountsPayablePayment }>(), "construction/primary-document-accounts-payable-payment", ["get"]),
  primaryDocumentDetail: object(shape<{ record: PrimaryDocumentDetail }>(), "construction/primary-document-detail", ["get"]),
  primaryDocumentRetainageRelease: object(shape<{ record: PrimaryDocumentRetainageRelease }>(), "construction/primary-document-retainage-release", ["get"]),
  primaryDocumentSummary: object(shape<{ record: PrimaryDocumentSummary }>(), "construction/primary-document-summary", ["get"]),
  projectChangeOrder: object(shape<{ record: ProjectChangeOrder; create: ProjectChangeOrderCreate; update: ProjectChangeOrderUpdate }>(), "construction/project-change-order", ["create","delete","get","update"]),
  projectContract: object(shape<{ record: ProjectContract; create: ProjectContractCreate; update: ProjectContractUpdate }>(), "construction/project-contract", ["create","delete","get","update"]),
  projectContractBillingInvoiceDetail: object(shape<{ record: ProjectContractBillingInvoiceDetail }>(), "construction/project-contract-billing-invoice-detail", ["get"]),
  projectContractBillingInvoiceSummary: object(shape<{ record: ProjectContractBillingInvoiceSummary }>(), "construction/project-contract-billing-invoice-summary", ["get"]),
  projectContractLine: object(shape<{ record: ProjectContractLine; create: ProjectContractLineCreate; update: ProjectContractLineUpdate }>(), "construction/project-contract-line", ["create","delete","get","update"]),
  projectContractLineEntry: object(shape<{ record: ProjectContractLineEntry }>(), "construction/project-contract-line-entry", ["delete","get"]),
  projectContractLineTaskMap: object(shape<{ record: ProjectContractLineTaskMap; create: ProjectContractLineTaskMapCreate }>(), "construction/project-contract-line-task-map", ["create","delete","get"]),
  projectContractType: object(shape<{ record: ProjectContractType; create: ProjectContractTypeCreate; update: ProjectContractTypeUpdate }>(), "construction/project-contract-type", ["create","delete","get","update"]),
  projectEstimate: object(shape<{ record: ProjectEstimate; create: ProjectEstimateCreate; update: ProjectEstimateUpdate }>(), "construction/project-estimate", ["create","delete","get","update"]),
  projectEstimateLine: object(shape<{ record: ProjectEstimateLine }>(), "construction/project-estimate-line", ["get"]),
  projectEstimateType: object(shape<{ record: ProjectEstimateType; create: ProjectEstimateTypeCreate; update: ProjectEstimateTypeUpdate }>(), "construction/project-estimate-type", ["create","delete","get","update"]),
  rateTable: object(shape<{ record: RateTable; create: RateTableCreate; update: RateTableUpdate }>(), "construction/rate-table", ["create","delete","get","update"]),
  rateTableAccountsPayableLine: object(shape<{ record: RateTableAccountsPayableLine }>(), "construction/rate-table-accounts-payable-line", ["get"]),
  rateTableCreditCardLine: object(shape<{ record: RateTableCreditCardLine }>(), "construction/rate-table-credit-card-line", ["get"]),
  rateTableEmployeeExpenseLine: object(shape<{ record: RateTableEmployeeExpenseLine }>(), "construction/rate-table-employee-expense-line", ["get"]),
  rateTableJournalLine: object(shape<{ record: RateTableJournalLine }>(), "construction/rate-table-journal-line", ["get"]),
  rateTablePurchasingLine: object(shape<{ record: RateTablePurchasingLine }>(), "construction/rate-table-purchasing-line", ["get"]),
  rateTableTimesheetLine: object(shape<{ record: RateTableTimesheetLine }>(), "construction/rate-table-timesheet-line", ["get"]),
  workOrder: object(shape<{ record: WorkOrder; create: WorkOrderCreate; update: WorkOrderUpdate }>(), "construction/work-order", ["create","delete","get","update"]),
  workOrderCallType: object(shape<{ record: WorkOrderCallType; create: WorkOrderCallTypeCreate; update: WorkOrderCallTypeUpdate }>(), "construction/work-order-call-type", ["create","delete","get","update"]),
  workOrderProblemCode: object(shape<{ record: WorkOrderProblemCode; create: WorkOrderProblemCodeCreate; update: WorkOrderProblemCodeUpdate }>(), "construction/work-order-problem-code", ["create","delete","get","update"]),
  workOrderState: object(shape<{ record: WorkOrderState; create: WorkOrderStateCreate; update: WorkOrderStateUpdate }>(), "construction/work-order-state", ["create","delete","get","update"]),
  workOrderType: object(shape<{ record: WorkOrderType; create: WorkOrderTypeCreate; update: WorkOrderTypeUpdate }>(), "construction/work-order-type", ["create","delete","get","update"]),
  services: group({
    constructionForecasting: group({
      wipJournal: group({
        entryHistory: service<never, ResponseResult<operations["get-construction-forecasting-wip-journal-entry-history-key"]>>("services/construction-forecasting/wip-journal/entry-history", "GET"),
        generatePreview: service<RequestBody<operations["post-construction-forecasting-wip-journal-generate-preview"]>, ResponseResult<operations["post-construction-forecasting-wip-journal-generate-preview"]>>("services/construction-forecasting/wip-journal/generate-preview", "POST"),
        postPeriod: service<RequestBody<operations["create-construction-forecasting-wip-journal-post-period"]>, ResponseResult<operations["create-construction-forecasting-wip-journal-post-period"]>>("services/construction-forecasting/wip-journal/post-period", "POST"),
        revertPost: service<RequestBody<operations["create-construction-forecasting-wip-journal-revert-post"]>, ResponseResult<operations["create-construction-forecasting-wip-journal-revert-post"]>>("services/construction-forecasting/wip-journal/revert-post", "POST"),
      }),
      wipPeriod: group({
        canPost: service<RequestBody<operations["get-construction-forecasting-wip-period-can-post"]>, ResponseResult<operations["get-construction-forecasting-wip-period-can-post"]>>("services/construction-forecasting/wip-period/can-post", "POST"),
        generate: service<RequestBody<operations["generate-construction-forecasting-wip-period"]>, ResponseResult<operations["generate-construction-forecasting-wip-period"]>>("services/construction-forecasting/wip-period/generate", "POST"),
        getWarnings: service<RequestBody<operations["get-construction-forecasting-wip-period-get-warnings"]>, ResponseResult<operations["get-construction-forecasting-wip-period-get-warnings"]>>("services/construction-forecasting/wip-period/get-warnings", "POST"),
        priorPeriods: service<RequestBody<operations["get-construction-forecasting-wip-period-prior-periods"]>, ResponseResult<operations["get-construction-forecasting-wip-period-prior-periods"]>>("services/construction-forecasting/wip-period/prior-periods", "POST"),
        refresh: service<RequestBody<operations["create-construction-forecasting-wip-period-refresh"]>, ResponseResult<operations["create-construction-forecasting-wip-period-refresh"]>>("services/construction-forecasting/wip-period/refresh", "POST"),
      }),
      wipProject: group({
        calculate: service<RequestBody<operations["get-construction-forecasting-wip-project-calculate"]>, ResponseResult<operations["get-construction-forecasting-wip-project-calculate"]>>("services/construction-forecasting/wip-project/calculate", "POST"),
      }),
      wipReportingPeriod: group({
        getAvailable: service<RequestBody<operations["get-construction-forecasting-wip-reporting-period-get-available"]>, ResponseResult<operations["get-construction-forecasting-wip-reporting-period-get-available"]>>("services/construction-forecasting/wip-reporting-period/get-available", "POST"),
        getNext: service<RequestBody<operations["get-construction-forecasting-wip-reporting-period-get-next"]>, ResponseResult<operations["get-construction-forecasting-wip-reporting-period-get-next"]>>("services/construction-forecasting/wip-reporting-period/get-next", "POST"),
      }),
      wipRollupProject: group({
        excludeFromWip: service<RequestBody<operations["update-construction-forecasting-wip-rollup-project-exclude-from-wip"]>, ResponseResult<operations["update-construction-forecasting-wip-rollup-project-exclude-from-wip"]>>("services/construction-forecasting/wip-rollup-project/exclude-from-wip", "POST"),
        findRollupProjects: service<RequestBody<operations["get-construction-forecasting-wip-rollup-project-find-rollup-projects"]>, ResponseResult<operations["get-construction-forecasting-wip-rollup-project-find-rollup-projects"]>>("services/construction-forecasting/wip-rollup-project/find-rollup-projects", "POST"),
        includeAsWip: service<RequestBody<operations["update-construction-forecasting-wip-rollup-project-include-as-wip"]>, ResponseResult<operations["update-construction-forecasting-wip-rollup-project-include-as-wip"]>>("services/construction-forecasting/wip-rollup-project/include-as-wip", "POST"),
        includeInProject: service<RequestBody<operations["update-construction-forecasting-wip-rollup-project-include-in-project"]>, ResponseResult<operations["update-construction-forecasting-wip-rollup-project-include-in-project"]>>("services/construction-forecasting/wip-rollup-project/include-in-project", "POST"),
        includeInRoot: service<RequestBody<operations["update-construction-forecasting-wip-rollup-project-include-in-root"]>, ResponseResult<operations["update-construction-forecasting-wip-rollup-project-include-in-root"]>>("services/construction-forecasting/wip-rollup-project/include-in-root", "POST"),
      }),
    }),
  }),
});

export default construction;

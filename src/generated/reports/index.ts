// Generated from spec/reports.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** reports/interactive-custom-report */
export type InteractiveCustomReport = components["schemas"]["objects.reports.interactive-custom-report"];
export type InteractiveCustomReportCreate = RequestBody<operations["create-reports-interactive-custom-report"]>;
export type InteractiveCustomReportUpdate = RequestBody<operations["update-reports-interactive-custom-report-key"]>;
/** reports/stored-report */
export type StoredReport = components["schemas"]["objects.reports.stored-report"];
/** reports/stored-report-error-record */
export type StoredReportErrorRecord = components["schemas"]["objects.reports.stored-report-error-record"];

export const reports = defineApplication({
  interactiveCustomReport: object(shape<{ record: InteractiveCustomReport; create: InteractiveCustomReportCreate; update: InteractiveCustomReportUpdate }>(), "reports/interactive-custom-report", ["create","delete","get","update"]),
  storedReport: object(shape<{ record: StoredReport }>(), "reports/stored-report", ["delete","get"]),
  storedReportErrorRecord: object(shape<{ record: StoredReportErrorRecord }>(), "reports/stored-report-error-record", ["get"]),
  services: group({
    reports: group({
      cancel: service<RequestBody<operations["post-services-reports-cancel"]>, ResponseResult<operations["post-services-reports-cancel"]>>("services/reports/cancel", "POST"),
      download: service<never, ResponseResult<operations["report-download"]>>("services/reports/download", "GET"),
      status: service<never, ResponseResult<operations["get-services-report-status"]>>("services/reports/status", "GET"),
      storedReports: service<RequestBody<operations["post-services-stored-reports"]>, ResponseResult<operations["post-services-stored-reports"]>>("services/reports/stored-reports", "POST"),
    }),
  }),
});

export default reports;

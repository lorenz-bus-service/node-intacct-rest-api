// Generated from spec/time.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** time/time-type */
export type TimeType = components["schemas"]["objects.time.time-type"];
export type TimeTypeCreate = RequestBody<operations["create-time-type"]>;
export type TimeTypeUpdate = RequestBody<operations["update-time-type-key"]>;
/** time/timesheet */
export type Timesheet = components["schemas"]["objects.time.timesheet"];
export type TimesheetCreate = RequestBody<operations["create-time-timesheet"]>;
export type TimesheetUpdate = RequestBody<operations["update-time-timesheet-key"]>;
/** time/timesheet-approval-record */
export type TimesheetApprovalRecord = components["schemas"]["objects.time.timesheet-approval-record"];
/** time/timesheet-line */
export type TimesheetLine = components["schemas"]["objects.time.timesheet-line"];
export type TimesheetLineCreate = RequestBody<operations["create-time-timesheet-line"]>;
export type TimesheetLineUpdate = RequestBody<operations["update-time-timesheet-line-key"]>;
/** time/timesheet-rule */
export type TimesheetRule = components["schemas"]["objects.time.timesheet-rule"];
export type TimesheetRuleCreate = RequestBody<operations["create-time-timesheet-rule"]>;
export type TimesheetRuleUpdate = RequestBody<operations["update-time-timesheet-rule-key"]>;
/** time/timesheet-to-approve */
export type TimesheetToApprove = components["schemas"]["objects.time.timesheet-to-approve"];

export const time = defineApplication({
  timeType: object(shape<{ record: TimeType; create: TimeTypeCreate; update: TimeTypeUpdate }>(), "time/time-type", ["create","delete","get","update"]),
  timesheet: object(shape<{ record: Timesheet; create: TimesheetCreate; update: TimesheetUpdate }>(), "time/timesheet", ["create","delete","get","update"]),
  timesheetApprovalRecord: object(shape<{ record: TimesheetApprovalRecord }>(), "time/timesheet-approval-record", ["get"]),
  timesheetLine: object(shape<{ record: TimesheetLine; create: TimesheetLineCreate; update: TimesheetLineUpdate }>(), "time/timesheet-line", ["create","delete","get","update"]),
  timesheetRule: object(shape<{ record: TimesheetRule; create: TimesheetRuleCreate; update: TimesheetRuleUpdate }>(), "time/timesheet-rule", ["create","delete","get","update"]),
  timesheetToApprove: object(shape<{ record: TimesheetToApprove }>(), "time/timesheet-to-approve", ["get"]),
});

export default time;

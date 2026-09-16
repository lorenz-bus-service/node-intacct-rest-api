// Generated from spec/common-resources.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** core/operation */
export type Operation = components["schemas"]["objects.core.operation"];
export type OperationCreate = RequestBody<operations["create-core-operation"]>;
export type OperationUpdate = RequestBody<operations["update-core-operation-key"]>;
/** core/schedule */
export type Schedule = components["schemas"]["objects.core.schedule"];
export type ScheduleCreate = RequestBody<operations["create-core-schedule"]>;
export type ScheduleUpdate = RequestBody<operations["update-core-schedule-key"]>;
/** core/scheduled-operation */
export type ScheduledOperation = components["schemas"]["objects.core.scheduled-operation"];
export type ScheduledOperationCreate = RequestBody<operations["create-core-scheduled-operation"]>;
export type ScheduledOperationUpdate = RequestBody<operations["update-core-scheduled-operation-key"]>;
/** core/system-view */
export type SystemView = components["schemas"]["objects.core.system-view"];
/** core/txn-definition */
export type TxnDefinition = components["schemas"]["objects.core.txn-definition"];
export type TxnDefinitionCreate = RequestBody<operations["create-common-core-txn-definition"]>;
export type TxnDefinitionUpdate = RequestBody<operations["update-common-core-txn-definition-key"]>;
/** core/user-view */
export type UserView = components["schemas"]["objects.core.user-view"];
export type UserViewCreate = RequestBody<operations["create-core-user-view"]>;
export type UserViewUpdate = RequestBody<operations["update-core-user-view-key"]>;

export const commonResources = defineApplication({
  operation: object(shape<{ record: Operation; create: OperationCreate; update: OperationUpdate }>(), "core/operation", ["create","delete","get","update"]),
  schedule: object(shape<{ record: Schedule; create: ScheduleCreate; update: ScheduleUpdate }>(), "core/schedule", ["create","delete","get","update"]),
  scheduledOperation: object(shape<{ record: ScheduledOperation; create: ScheduledOperationCreate; update: ScheduledOperationUpdate }>(), "core/scheduled-operation", ["create","delete","get","update"]),
  systemView: object(shape<{ record: SystemView }>(), "core/system-view", []),
  txnDefinition: object(shape<{ record: TxnDefinition; create: TxnDefinitionCreate; update: TxnDefinitionUpdate }>(), "core/txn-definition", ["create","delete","get","update"]),
  userView: object(shape<{ record: UserView; create: UserViewCreate; update: UserViewUpdate }>(), "core/user-view", ["create","delete","get","update"]),
  services: group({
    bulk: group({
      job: group({
        create: service<RequestBody<operations["post-bulk-job-create"]>, ResponseResult<operations["post-bulk-job-create"]>>("services/bulk/job/create", "POST"),
        status: service<never, ResponseResult<operations["get-bulk-job-status"]>>("services/bulk/job/status", "GET"),
      }),
    }),
    core: group({
      composite: service<RequestBody<operations["post-services-composite"]>, ResponseResult<operations["post-services-composite"]>>("services/core/composite", "POST"),
      export: service<RequestBody<operations["post-core-export"]>, ResponseResult<operations["post-core-export"]>>("services/core/export", "POST"),
      model: service<never, ResponseResult<operations["get-services-model"]>>("services/core/model", "GET"),
      query: service<RequestBody<operations["post-services-query"]>, ResponseResult<operations["post-services-query"]>>("services/core/query", "POST"),
      view: service<RequestBody<operations["post-services-view"]>, ResponseResult<operations["post-services-view"]>>("services/core/view", "POST"),
      allowedOperations: group({
        list: service<RequestBody<operations["list-allowed-operations"]>, ResponseResult<operations["list-allowed-operations"]>>("services/core/allowed-operations/list", "POST"),
      }),
      session: group({
        id: service<never, ResponseResult<operations["get-core-session-id"]>>("services/core/session/id", "GET"),
      }),
    }),
  }),
});

export default commonResources;

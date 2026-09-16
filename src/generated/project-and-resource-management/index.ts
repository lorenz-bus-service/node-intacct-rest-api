// Generated from spec/project-and-resource-management.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** construction/cost-type */
export type CostType = components["schemas"]["objects.construction.cost-type"];
export type CostTypeCreate = RequestBody<operations["create-construction-cost-type"]>;
export type CostTypeUpdate = RequestBody<operations["update-construction-cost-type-key"]>;
/** construction/standard-cost-type */
export type StandardCostType = components["schemas"]["objects.construction.standard-cost-type"];
export type StandardCostTypeCreate = RequestBody<operations["create-construction-standard-cost-type"]>;
export type StandardCostTypeUpdate = RequestBody<operations["update-construction-standard-cost-type-key"]>;
/** construction/standard-task */
export type StandardTask = components["schemas"]["objects.construction.standard-task"];
export type StandardTaskCreate = RequestBody<operations["create-construction-standard-task"]>;
export type StandardTaskUpdate = RequestBody<operations["update-construction-standard-task-key"]>;
/** projects/employee-out-of-office */
export type EmployeeOutOfOffice = components["schemas"]["objects.projects.employee-out-of-office"];
export type EmployeeOutOfOfficeCreate = RequestBody<operations["create-projects-employee-out-of-office"]>;
export type EmployeeOutOfOfficeUpdate = RequestBody<operations["update-projects-employee-out-of-office-key"]>;
/** projects/employee-out-of-office-line */
export type EmployeeOutOfOfficeLine = components["schemas"]["objects.projects.employee-out-of-office-line"];
/** projects/invoice-run */
export type InvoiceRun = components["schemas"]["objects.projects.invoice-run"];
/** projects/position-skill */
export type PositionSkill = components["schemas"]["objects.projects.position-skill"];
export type PositionSkillCreate = RequestBody<operations["create-projects-position-skill"]>;
export type PositionSkillUpdate = RequestBody<operations["update-projects-position-skill-key"]>;
/** projects/project */
export type Project = components["schemas"]["objects.projects.project"];
export type ProjectCreate = RequestBody<operations["create-projects-project"]>;
export type ProjectUpdate = RequestBody<operations["update-projects-project-key"]>;
/** projects/project-billing-template */
export type ProjectBillingTemplate = components["schemas"]["objects.projects.project-billing-template"];
export type ProjectBillingTemplateCreate = RequestBody<operations["create-projects-project-billing-template"]>;
export type ProjectBillingTemplateUpdate = RequestBody<operations["update-projects-project-billing-template-key"]>;
/** projects/project-billing-template-milestone */
export type ProjectBillingTemplateMilestone = components["schemas"]["objects.projects.project-billing-template-milestone"];
/** projects/project-group */
export type ProjectGroup = components["schemas"]["objects.projects.project-group"];
export type ProjectGroupCreate = RequestBody<operations["create-projects-project-group"]>;
export type ProjectGroupUpdate = RequestBody<operations["update-projects-project-group-key"]>;
/** projects/project-group-member */
export type ProjectGroupMember = components["schemas"]["objects.projects.project-group-member"];
/** projects/project-observed-percent-completed */
export type ProjectObservedPercentCompleted = components["schemas"]["objects.projects.project-observed-percent-completed"];
export type ProjectObservedPercentCompletedCreate = RequestBody<operations["create-projects-project-observed-percent-completed"]>;
export type ProjectObservedPercentCompletedUpdate = RequestBody<operations["update-projects-project-observed-percent-completed-key"]>;
/** projects/project-resource */
export type ProjectResource = components["schemas"]["objects.projects.project-resource"];
export type ProjectResourceCreate = RequestBody<operations["create-projects-project-resource"]>;
export type ProjectResourceUpdate = RequestBody<operations["update-projects-project-resource-key"]>;
/** projects/project-status */
export type ProjectStatus = components["schemas"]["objects.projects.project-status"];
export type ProjectStatusCreate = RequestBody<operations["create-projects-project-status"]>;
export type ProjectStatusUpdate = RequestBody<operations["update-projects-project-status-key"]>;
/** projects/project-type */
export type ProjectType = components["schemas"]["objects.projects.project-type"];
export type ProjectTypeCreate = RequestBody<operations["create-projects-project-type"]>;
export type ProjectTypeUpdate = RequestBody<operations["update-projects-project-type-key"]>;
/** projects/task */
export type Task = components["schemas"]["objects.projects.task"];
export type TaskCreate = RequestBody<operations["create-projects-task"]>;
export type TaskUpdate = RequestBody<operations["update-projects-task-key"]>;
/** projects/task-group */
export type TaskGroup = components["schemas"]["objects.projects.task-group"];
export type TaskGroupCreate = RequestBody<operations["create-projects-task-group"]>;
export type TaskGroupUpdate = RequestBody<operations["update-projects-task-group-key"]>;
/** projects/task-observed-percent-completed */
export type TaskObservedPercentCompleted = components["schemas"]["objects.projects.task-observed-percent-completed"];
export type TaskObservedPercentCompletedCreate = RequestBody<operations["create-projects-task-observed-percent-completed"]>;
export type TaskObservedPercentCompletedUpdate = RequestBody<operations["update-projects-task-observed-percent-completed-key"]>;
/** projects/task-resource */
export type TaskResource = components["schemas"]["objects.projects.task-resource"];
export type TaskResourceCreate = RequestBody<operations["create-projects-task-resource"]>;
export type TaskResourceUpdate = RequestBody<operations["update-projects-task-resource-key"]>;

export const projectAndResourceManagement = defineApplication({
  costType: object(shape<{ record: CostType; create: CostTypeCreate; update: CostTypeUpdate }>(), "construction/cost-type", ["create","delete","get","update"]),
  standardCostType: object(shape<{ record: StandardCostType; create: StandardCostTypeCreate; update: StandardCostTypeUpdate }>(), "construction/standard-cost-type", ["create","delete","get","update"]),
  standardTask: object(shape<{ record: StandardTask; create: StandardTaskCreate; update: StandardTaskUpdate }>(), "construction/standard-task", ["create","delete","get","update"]),
  employeeOutOfOffice: object(shape<{ record: EmployeeOutOfOffice; create: EmployeeOutOfOfficeCreate; update: EmployeeOutOfOfficeUpdate }>(), "projects/employee-out-of-office", ["create","delete","get","update"]),
  employeeOutOfOfficeLine: object(shape<{ record: EmployeeOutOfOfficeLine }>(), "projects/employee-out-of-office-line", ["get"]),
  invoiceRun: object(shape<{ record: InvoiceRun }>(), "projects/invoice-run", ["get"]),
  positionSkill: object(shape<{ record: PositionSkill; create: PositionSkillCreate; update: PositionSkillUpdate }>(), "projects/position-skill", ["create","delete","get","update"]),
  project: object(shape<{ record: Project; create: ProjectCreate; update: ProjectUpdate }>(), "projects/project", ["create","delete","get","update"]),
  projectBillingTemplate: object(shape<{ record: ProjectBillingTemplate; create: ProjectBillingTemplateCreate; update: ProjectBillingTemplateUpdate }>(), "projects/project-billing-template", ["create","delete","get","update"]),
  projectBillingTemplateMilestone: object(shape<{ record: ProjectBillingTemplateMilestone }>(), "projects/project-billing-template-milestone", ["get"]),
  projectGroup: object(shape<{ record: ProjectGroup; create: ProjectGroupCreate; update: ProjectGroupUpdate }>(), "projects/project-group", ["create","delete","get","update"]),
  projectGroupMember: object(shape<{ record: ProjectGroupMember }>(), "projects/project-group-member", ["get"]),
  projectObservedPercentCompleted: object(shape<{ record: ProjectObservedPercentCompleted; create: ProjectObservedPercentCompletedCreate; update: ProjectObservedPercentCompletedUpdate }>(), "projects/project-observed-percent-completed", ["create","delete","get","update"]),
  projectResource: object(shape<{ record: ProjectResource; create: ProjectResourceCreate; update: ProjectResourceUpdate }>(), "projects/project-resource", ["create","delete","get","update"]),
  projectStatus: object(shape<{ record: ProjectStatus; create: ProjectStatusCreate; update: ProjectStatusUpdate }>(), "projects/project-status", ["create","delete","get","update"]),
  projectType: object(shape<{ record: ProjectType; create: ProjectTypeCreate; update: ProjectTypeUpdate }>(), "projects/project-type", ["create","delete","get","update"]),
  task: object(shape<{ record: Task; create: TaskCreate; update: TaskUpdate }>(), "projects/task", ["create","delete","get","update"]),
  taskGroup: object(shape<{ record: TaskGroup; create: TaskGroupCreate; update: TaskGroupUpdate }>(), "projects/task-group", ["create","delete","get","update"]),
  taskObservedPercentCompleted: object(shape<{ record: TaskObservedPercentCompleted; create: TaskObservedPercentCompletedCreate; update: TaskObservedPercentCompletedUpdate }>(), "projects/task-observed-percent-completed", ["create","delete","get","update"]),
  taskResource: object(shape<{ record: TaskResource; create: TaskResourceCreate; update: TaskResourceUpdate }>(), "projects/task-resource", ["create","delete","get","update"]),
});

export default projectAndResourceManagement;

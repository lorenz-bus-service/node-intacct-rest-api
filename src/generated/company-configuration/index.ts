// Generated from spec/company-configuration.json by scripts/generate.ts. Do not edit.
import type { components, operations } from "./types.js";
import { action, defineApplication, group, object, parameterizedObject, service, shape, singleton } from "../../core/define.js";
import type { RequestBody, ResponseResult } from "../../core/define.js";

export type { components, operations };

/** company-config/advanced-audit-history */
export type AdvancedAuditHistory = components["schemas"]["objects.company-config.advanced-audit-history"];
/** company-config/affiliate-entity */
export type AffiliateEntity = components["schemas"]["objects.company-config.affiliate-entity"];
/** company-config/affiliate-entity-group */
export type AffiliateEntityGroup = components["schemas"]["objects.company-config.affiliate-entity-group"];
export type AffiliateEntityGroupCreate = RequestBody<operations["create-company-config-affiliate-entity-group"]>;
export type AffiliateEntityGroupUpdate = RequestBody<operations["update-company-config-affiliate-entity-group-key"]>;
/** company-config/attachment */
export type Attachment = components["schemas"]["objects.company-config.attachment"];
export type AttachmentCreate = RequestBody<operations["create-company-config-attachment"]>;
export type AttachmentUpdate = RequestBody<operations["update-company-config-attachment-key"]>;
/** company-config/audit-history */
export type AuditHistory = components["schemas"]["objects.company-config.audit-history"];
/** company-config/class */
export type Class = components["schemas"]["objects.company-config.class"];
export type ClassCreate = RequestBody<operations["create-company-config-class"]>;
export type ClassUpdate = RequestBody<operations["update-company-config-class-key"]>;
/** company-config/class-group */
export type ClassGroup = components["schemas"]["objects.company-config.class-group"];
export type ClassGroupCreate = RequestBody<operations["create-company-config-class-group"]>;
export type ClassGroupUpdate = RequestBody<operations["update-company-config-class-group-key"]>;
/** company-config/cloud-storage */
export type CloudStorage = components["schemas"]["objects.company-config.cloud-storage"];
export type CloudStorageCreate = RequestBody<operations["create-company-config-cloud-storage"]>;
export type CloudStorageUpdate = RequestBody<operations["update-company-config-cloud-storage-key"]>;
/** company-config/company-message */
export type CompanyMessage = components["schemas"]["objects.company-config.company-message"];
export type CompanyMessageCreate = RequestBody<operations["create-company-config-company-message"]>;
export type CompanyMessageUpdate = RequestBody<operations["update-company-config-company-message-key"]>;
/** company-config/company-preference */
export type CompanyPreference = components["schemas"]["objects.company-config.company-preference"];
export type CompanyPreferenceUpdate = RequestBody<operations["update-company-config-company-preference"]>;
/** company-config/contact */
export type Contact = components["schemas"]["objects.company-config.contact"];
export type ContactCreate = RequestBody<operations["create-company-config-contact"]>;
export type ContactUpdate = RequestBody<operations["update-company-config-contact-key"]>;
/** company-config/contact-version */
export type ContactVersion = components["schemas"]["objects.company-config.contact-version"];
/** company-config/cover-letter-template */
export type CoverLetterTemplate = components["schemas"]["objects.company-config.cover-letter-template"];
export type CoverLetterTemplateCreate = RequestBody<operations["create-company-config-cover-letter-template"]>;
export type CoverLetterTemplateUpdate = RequestBody<operations["update-company-config-cover-letter-template-key"]>;
/** company-config/department */
export type Department = components["schemas"]["objects.company-config.department"];
export type DepartmentCreate = RequestBody<operations["create-company-config-department"]>;
export type DepartmentUpdate = RequestBody<operations["update-company-config-department-key"]>;
/** company-config/department-group */
export type DepartmentGroup = components["schemas"]["objects.company-config.department-group"];
export type DepartmentGroupCreate = RequestBody<operations["create-company-config-department-group"]>;
export type DepartmentGroupUpdate = RequestBody<operations["update-company-config-department-group-key"]>;
/** company-config/department-group-member */
export type DepartmentGroupMember = components["schemas"]["objects.company-config.department-group-member"];
/** company-config/document-sequence */
export type DocumentSequence = components["schemas"]["objects.company-config.document-sequence"];
export type DocumentSequenceCreate = RequestBody<operations["create-company-config-document-sequence"]>;
export type DocumentSequenceUpdate = RequestBody<operations["update-company-config-document-sequence-key"]>;
/** company-config/document-sequence-rollover */
export type DocumentSequenceRollover = components["schemas"]["objects.company-config.document-sequence-rollover"];
/** company-config/earning-type */
export type EarningType = components["schemas"]["objects.company-config.earning-type"];
export type EarningTypeCreate = RequestBody<operations["create-objects-company-config-earning-type-key"]>;
export type EarningTypeUpdate = RequestBody<operations["patch-objects-company-config-earning-type-key"]>;
/** company-config/email-delivery-record */
export type EmailDeliveryRecord = components["schemas"]["objects.company-config.email-delivery-record"];
/** company-config/email-template */
export type EmailTemplate = components["schemas"]["objects.company-config.email-template"];
export type EmailTemplateCreate = RequestBody<operations["create-company-config-email-template"]>;
export type EmailTemplateUpdate = RequestBody<operations["update-company-config-email-template-key"]>;
/** company-config/employee */
export type Employee = components["schemas"]["objects.company-config.employee"];
export type EmployeeCreate = RequestBody<operations["create-company-config-employee"]>;
export type EmployeeUpdate = RequestBody<operations["update-company-config-employee-key"]>;
/** company-config/employee-bank-file-setup */
export type EmployeeBankFileSetup = components["schemas"]["objects.company-config.employee-bank-file-setup"];
/** company-config/employee-group */
export type EmployeeGroup = components["schemas"]["objects.company-config.employee-group"];
export type EmployeeGroupCreate = RequestBody<operations["create-company-config-employee-group"]>;
export type EmployeeGroupUpdate = RequestBody<operations["update-company-config-employee-group-key"]>;
/** company-config/employee-rate */
export type EmployeeRate = components["schemas"]["objects.company-config.employee-rate"];
/** company-config/employee-type */
export type EmployeeType = components["schemas"]["objects.company-config.employee-type"];
export type EmployeeTypeCreate = RequestBody<operations["create-company-config-employee-type"]>;
export type EmployeeTypeUpdate = RequestBody<operations["update-company-config-employee-type-key"]>;
/** company-config/entity */
export type Entity = components["schemas"]["objects.company-config.entity"];
export type EntityCreate = RequestBody<operations["create-company-config-entity"]>;
export type EntityUpdate = RequestBody<operations["update-company-config-entity-key"]>;
/** company-config/exchange-rate */
export type ExchangeRate = components["schemas"]["objects.company-config.exchange-rate"];
export type ExchangeRateCreate = RequestBody<operations["create-company-config-exchange-rate"]>;
export type ExchangeRateUpdate = RequestBody<operations["update-company-config-exchange-rate-key"]>;
/** company-config/exchange-rate-line */
export type ExchangeRateLine = components["schemas"]["objects.company-config.exchange-rate-line"];
export type ExchangeRateLineCreate = RequestBody<operations["create-company-config-exchange-rate-line"]>;
export type ExchangeRateLineUpdate = RequestBody<operations["update-company-config-exchange-rate-line-key"]>;
/** company-config/exchange-rate-type */
export type ExchangeRateType = components["schemas"]["objects.company-config.exchange-rate-type"];
export type ExchangeRateTypeCreate = RequestBody<operations["create-company-config-exchange-rate-type"]>;
export type ExchangeRateTypeUpdate = RequestBody<operations["update-company-config-exchange-rate-type-key"]>;
/** company-config/external-authorization */
export type ExternalAuthorization = components["schemas"]["objects.company-config.external-authorization"];
export type ExternalAuthorizationCreate = RequestBody<operations["create-company-config-external-authorization"]>;
export type ExternalAuthorizationUpdate = RequestBody<operations["update-company-config-external-authorization-key"]>;
/** company-config/file */
export type File = components["schemas"]["objects.company-config.file"];
/** company-config/folder */
export type Folder = components["schemas"]["objects.company-config.folder"];
export type FolderCreate = RequestBody<operations["create-company-config-folder"]>;
export type FolderUpdate = RequestBody<operations["update-company-config-folder-key"]>;
/** company-config/holiday */
export type Holiday = components["schemas"]["objects.company-config.holiday"];
/** company-config/holiday-schedule */
export type HolidaySchedule = components["schemas"]["objects.company-config.holiday-schedule"];
export type HolidayScheduleCreate = RequestBody<operations["create-company-config-holiday-schedule"]>;
export type HolidayScheduleUpdate = RequestBody<operations["update-company-config-holiday-schedule-key"]>;
/** company-config/inter-entity-account-mapping */
export type InterEntityAccountMapping = components["schemas"]["objects.company-config.inter-entity-account-mapping"];
export type InterEntityAccountMappingUpdate = RequestBody<operations["update-company-config-inter-entity-account-mapping-key"]>;
/** company-config/inter-entity-advanced-map */
export type InterEntityAdvancedMap = components["schemas"]["objects.company-config.inter-entity-advanced-map"];
/** company-config/inter-entity-basic-map */
export type InterEntityBasicMap = components["schemas"]["objects.company-config.inter-entity-basic-map"];
/** company-config/location */
export type Location = components["schemas"]["objects.company-config.location"];
export type LocationCreate = RequestBody<operations["create-company-config-location"]>;
export type LocationUpdate = RequestBody<operations["update-company-config-location-key"]>;
/** company-config/location-group */
export type LocationGroup = components["schemas"]["objects.company-config.location-group"];
export type LocationGroupCreate = RequestBody<operations["create-company-config-location-group"]>;
export type LocationGroupUpdate = RequestBody<operations["update-company-config-location-group-key"]>;
/** company-config/location-group-member */
export type LocationGroupMember = components["schemas"]["objects.company-config.location-group-member"];
/** company-config/multi-entity-preference */
export type MultiEntityPreference = components["schemas"]["objects.company-config.multi-entity-preference"];
export type MultiEntityPreferenceUpdate = RequestBody<operations["update-company-config-multi-entity-preference-key"]>;
/** company-config/order-entry-preference */
export type OrderEntryPreference = components["schemas"]["objects.company-config.order-entry-preference"];
export type OrderEntryPreferenceUpdate = RequestBody<operations["update-company-config-order-entry-preference-key"]>;
/** company-config/payment-provider-notification */
export type PaymentProviderNotification = components["schemas"]["objects.company-config.payment-provider-notification"];
/** company-config/permission */
export type Permission = components["schemas"]["objects.company-config.permission"];
/** company-config/purchasing-preference */
export type PurchasingPreference = components["schemas"]["objects.company-config.purchasing-preference"];
export type PurchasingPreferenceUpdate = RequestBody<operations["update-company-config-purchasing-preference-key"]>;
/** company-config/role */
export type Role = components["schemas"]["objects.company-config.role"];
export type RoleCreate = RequestBody<operations["create-company-config-role"]>;
export type RoleUpdate = RequestBody<operations["update-company-config-role-key"]>;
/** company-config/role-permission-assignment */
export type RolePermissionAssignment = components["schemas"]["objects.company-config.role-permission-assignment"];
export type RolePermissionAssignmentUpdate = RequestBody<operations["update-company-config-role-permission-assignment-key"]>;
/** company-config/role-user-group-map */
export type RoleUserGroupMap = components["schemas"]["objects.company-config.role-user-group-map"];
/** company-config/role-user-map */
export type RoleUserMap = components["schemas"]["objects.company-config.role-user-map"];
/** company-config/sandbox */
export type Sandbox = components["schemas"]["objects.company-config.sandbox"];
export type SandboxCreate = RequestBody<operations["create-company-config-sandbox"]>;
export type SandboxUpdate = RequestBody<operations["update-company-config-sandbox-key"]>;
/** company-config/txn-currency */
export type TxnCurrency = components["schemas"]["objects.company-config.txn-currency"];
export type TxnCurrencyCreate = RequestBody<operations["create-company-config-txn-currency"]>;
export type TxnCurrencyUpdate = RequestBody<operations["update-company-config-txn-currency-key"]>;
/** company-config/user */
export type User = components["schemas"]["objects.company-config.user"];
export type UserCreate = RequestBody<operations["create-company-config-user"]>;
export type UserUpdate = RequestBody<operations["update-company-config-user-key"]>;
/** company-config/user-group */
export type UserGroup = components["schemas"]["objects.company-config.user-group"];
export type UserGroupCreate = RequestBody<operations["create-company-config-user-group"]>;
export type UserGroupUpdate = RequestBody<operations["update-company-config-user-group-key"]>;
/** company-config/user-group-member */
export type UserGroupMember = components["schemas"]["objects.company-config.user-group-member"];
export type UserGroupMemberCreate = RequestBody<operations["create-company-config-user-group-member"]>;
/** objects/company-config/advanced-consolidation-preference/setup */
export type AdvancedConsolidationPreferenceSetup = ResponseResult<operations["get-services-preferences.advanced-consolidation"]>;
export type AdvancedConsolidationPreferenceSetupUpdate = RequestBody<operations["update-services-preferences.advanced-consolidation"]>;
export type AdvancedConsolidationPreferenceSetupCreate = RequestBody<operations["create-services-preferences.advanced-consolidation"]>;
/** objects/company-config/consolidation-preference/setup */
export type ConsolidationPreferenceSetup = ResponseResult<operations["get-services-preferences.consolidation"]>;
export type ConsolidationPreferenceSetupUpdate = RequestBody<operations["update-services-preferences.consolidation"]>;

export const companyConfiguration = defineApplication({
  advancedAuditHistory: object(shape<{ record: AdvancedAuditHistory }>(), "company-config/advanced-audit-history", ["get"]),
  affiliateEntity: object(shape<{ record: AffiliateEntity }>(), "company-config/affiliate-entity", ["get"]),
  affiliateEntityGroup: object(shape<{ record: AffiliateEntityGroup; create: AffiliateEntityGroupCreate; update: AffiliateEntityGroupUpdate }>(), "company-config/affiliate-entity-group", ["create","delete","get","update"]),
  attachment: object(shape<{ record: Attachment; create: AttachmentCreate; update: AttachmentUpdate }>(), "company-config/attachment", ["create","delete","get","update"]),
  auditHistory: object(shape<{ record: AuditHistory }>(), "company-config/audit-history", ["get"]),
  class: object(shape<{ record: Class; create: ClassCreate; update: ClassUpdate }>(), "company-config/class", ["create","delete","get","update"]),
  classGroup: object(shape<{ record: ClassGroup; create: ClassGroupCreate; update: ClassGroupUpdate }>(), "company-config/class-group", ["create","delete","get","update"]),
  cloudStorage: object(shape<{ record: CloudStorage; create: CloudStorageCreate; update: CloudStorageUpdate }>(), "company-config/cloud-storage", ["create","delete","get","update"]),
  companyMessage: object(shape<{ record: CompanyMessage; create: CompanyMessageCreate; update: CompanyMessageUpdate }>(), "company-config/company-message", ["create","delete","get","update"]),
  companyPreference: object(shape<{ record: CompanyPreference; update: CompanyPreferenceUpdate }>(), "company-config/company-preference", ["get","update"]),
  contact: object(shape<{ record: Contact; create: ContactCreate; update: ContactUpdate }>(), "company-config/contact", ["create","delete","get","update"]),
  contactVersion: object(shape<{ record: ContactVersion }>(), "company-config/contact-version", ["get"]),
  coverLetterTemplate: object(shape<{ record: CoverLetterTemplate; create: CoverLetterTemplateCreate; update: CoverLetterTemplateUpdate }>(), "company-config/cover-letter-template", ["create","delete","get","update"]),
  department: object(shape<{ record: Department; create: DepartmentCreate; update: DepartmentUpdate }>(), "company-config/department", ["create","delete","get","update"]),
  departmentGroup: object(shape<{ record: DepartmentGroup; create: DepartmentGroupCreate; update: DepartmentGroupUpdate }>(), "company-config/department-group", ["create","delete","get","update"]),
  departmentGroupMember: object(shape<{ record: DepartmentGroupMember }>(), "company-config/department-group-member", ["get"]),
  documentSequence: object(shape<{ record: DocumentSequence; create: DocumentSequenceCreate; update: DocumentSequenceUpdate }>(), "company-config/document-sequence", ["create","delete","get","update"]),
  documentSequenceRollover: object(shape<{ record: DocumentSequenceRollover }>(), "company-config/document-sequence-rollover", ["get"]),
  earningType: object(shape<{ record: EarningType; create: EarningTypeCreate; update: EarningTypeUpdate }>(), "company-config/earning-type", ["create","delete","get","update"]),
  emailDeliveryRecord: object(shape<{ record: EmailDeliveryRecord }>(), "company-config/email-delivery-record", ["get"]),
  emailTemplate: object(shape<{ record: EmailTemplate; create: EmailTemplateCreate; update: EmailTemplateUpdate }>(), "company-config/email-template", ["create","delete","get","update"]),
  employee: object(shape<{ record: Employee; create: EmployeeCreate; update: EmployeeUpdate }>(), "company-config/employee", ["create","delete","get","update"]),
  employeeBankFileSetup: object(shape<{ record: EmployeeBankFileSetup }>(), "company-config/employee-bank-file-setup", ["get"]),
  employeeGroup: object(shape<{ record: EmployeeGroup; create: EmployeeGroupCreate; update: EmployeeGroupUpdate }>(), "company-config/employee-group", ["create","delete","get","update"]),
  employeeRate: object(shape<{ record: EmployeeRate }>(), "company-config/employee-rate", ["delete","get"]),
  employeeType: object(shape<{ record: EmployeeType; create: EmployeeTypeCreate; update: EmployeeTypeUpdate }>(), "company-config/employee-type", ["create","delete","get","update"]),
  entity: object(shape<{ record: Entity; create: EntityCreate; update: EntityUpdate }>(), "company-config/entity", ["create","delete","get","update"]),
  exchangeRate: object(shape<{ record: ExchangeRate; create: ExchangeRateCreate; update: ExchangeRateUpdate }>(), "company-config/exchange-rate", ["create","delete","get","update"]),
  exchangeRateLine: object(shape<{ record: ExchangeRateLine; create: ExchangeRateLineCreate; update: ExchangeRateLineUpdate }>(), "company-config/exchange-rate-line", ["create","delete","get","update"]),
  exchangeRateType: object(shape<{ record: ExchangeRateType; create: ExchangeRateTypeCreate; update: ExchangeRateTypeUpdate }>(), "company-config/exchange-rate-type", ["create","delete","get","update"]),
  externalAuthorization: object(shape<{ record: ExternalAuthorization; create: ExternalAuthorizationCreate; update: ExternalAuthorizationUpdate }>(), "company-config/external-authorization", ["create","get","update"]),
  file: object(shape<{ record: File }>(), "company-config/file", ["delete","get"]),
  folder: object(shape<{ record: Folder; create: FolderCreate; update: FolderUpdate }>(), "company-config/folder", ["create","delete","get","update"]),
  holiday: object(shape<{ record: Holiday }>(), "company-config/holiday", ["get"]),
  holidaySchedule: object(shape<{ record: HolidaySchedule; create: HolidayScheduleCreate; update: HolidayScheduleUpdate }>(), "company-config/holiday-schedule", ["create","delete","get","update"]),
  interEntityAccountMapping: object(shape<{ record: InterEntityAccountMapping; update: InterEntityAccountMappingUpdate }>(), "company-config/inter-entity-account-mapping", ["get","update"]),
  interEntityAdvancedMap: object(shape<{ record: InterEntityAdvancedMap }>(), "company-config/inter-entity-advanced-map", ["delete","get"]),
  interEntityBasicMap: object(shape<{ record: InterEntityBasicMap }>(), "company-config/inter-entity-basic-map", ["delete","get"]),
  location: object(shape<{ record: Location; create: LocationCreate; update: LocationUpdate }>(), "company-config/location", ["create","delete","get","update"]),
  locationGroup: object(shape<{ record: LocationGroup; create: LocationGroupCreate; update: LocationGroupUpdate }>(), "company-config/location-group", ["create","delete","get","update"]),
  locationGroupMember: object(shape<{ record: LocationGroupMember }>(), "company-config/location-group-member", ["get"]),
  multiEntityPreference: object(shape<{ record: MultiEntityPreference; update: MultiEntityPreferenceUpdate }>(), "company-config/multi-entity-preference", ["get","update"]),
  orderEntryPreference: object(shape<{ record: OrderEntryPreference; update: OrderEntryPreferenceUpdate }>(), "company-config/order-entry-preference", ["get","update"]),
  paymentProviderNotification: object(shape<{ record: PaymentProviderNotification }>(), "company-config/payment-provider-notification", ["get"]),
  permission: object(shape<{ record: Permission }>(), "company-config/permission", ["get"]),
  purchasingPreference: object(shape<{ record: PurchasingPreference; update: PurchasingPreferenceUpdate }>(), "company-config/purchasing-preference", ["get","update"]),
  role: object(shape<{ record: Role; create: RoleCreate; update: RoleUpdate }>(), "company-config/role", ["create","delete","get","update"]),
  rolePermissionAssignment: object(shape<{ record: RolePermissionAssignment; update: RolePermissionAssignmentUpdate }>(), "company-config/role-permission-assignment", ["get","update"]),
  roleUserGroupMap: object(shape<{ record: RoleUserGroupMap }>(), "company-config/role-user-group-map", ["get"]),
  roleUserMap: object(shape<{ record: RoleUserMap }>(), "company-config/role-user-map", ["get"]),
  sandbox: object(shape<{ record: Sandbox; create: SandboxCreate; update: SandboxUpdate }>(), "company-config/sandbox", ["create","delete","get","update"], {
    refresh: action<RequestBody<operations["refresh-company-config-sandbox"]>, ResponseResult<operations["refresh-company-config-sandbox"]>>("refresh"),
  }),
  txnCurrency: object(shape<{ record: TxnCurrency; create: TxnCurrencyCreate; update: TxnCurrencyUpdate }>(), "company-config/txn-currency", ["create","delete","get","update"]),
  user: object(shape<{ record: User; create: UserCreate; update: UserUpdate }>(), "company-config/user", ["create","delete","get","update"]),
  userGroup: object(shape<{ record: UserGroup; create: UserGroupCreate; update: UserGroupUpdate }>(), "company-config/user-group", ["create","delete","get","update"]),
  userGroupMember: object(shape<{ record: UserGroupMember; create: UserGroupMemberCreate }>(), "company-config/user-group-member", ["create","delete","get"]),
  advancedConsolidationPreferenceSetup: singleton(shape<{ record: AdvancedConsolidationPreferenceSetup; update: AdvancedConsolidationPreferenceSetupUpdate; create: AdvancedConsolidationPreferenceSetupCreate }>(), "objects/company-config/advanced-consolidation-preference/setup", ["get","update","create"]),
  consolidationPreferenceSetup: singleton(shape<{ record: ConsolidationPreferenceSetup; update: ConsolidationPreferenceSetupUpdate }>(), "objects/company-config/consolidation-preference/setup", ["get","update"]),
  services: group({
    companyConfig: group({
      dimensions: group({
        list: service<never, ResponseResult<operations["get-company-config-dimensions-list"]>>("services/company-config/dimensions/list", "GET"),
      }),
      documentSequence: group({
        generateNextValue: service<RequestBody<operations["company-config-document-sequence-generate-next-value"]>, ResponseResult<operations["company-config-document-sequence-generate-next-value"]>>("services/company-config/document-sequence/generate-next-value", "POST"),
      }),
    }),
  }),
});

export default companyConfiguration;

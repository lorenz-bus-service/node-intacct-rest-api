// Generated from spec/time.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/time/timesheet": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List timesheets
         * @description Returns a collection with a key, ID, and link for each timesheet. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-time-timesheet"];
        put?: never;
        /**
         * Create a timesheet
         * @description Creates a new timesheet.
         */
        post: operations["create-time-timesheet"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/time/timesheet/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the timesheet.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a timesheet
         * @description Returns detailed information for a specified timesheet.
         */
        get: operations["get-time-timesheet-key"];
        put?: never;
        post?: never;
        /**
         * Delete a timesheet
         * @description Deletes a timesheet.
         */
        delete: operations["delete-time-timesheet-key"];
        options?: never;
        head?: never;
        /**
         * Update a timesheet
         * @description Updates an existing timesheet by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-time-timesheet-key"];
        trace?: never;
    };
    "/objects/time/timesheet-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List timesheet lines
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each timesheet line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find timesheet lines that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-time-timesheet-line"];
        put?: never;
        /**
         * Create a timesheet line
         * @description Creates a new timesheet line.
         */
        post: operations["create-time-timesheet-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/time/timesheet-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the timesheet line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a timesheet line
         * @description Returns detailed information for a specified timesheet line.
         */
        get: operations["get-time-timesheet-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a timesheet line
         * @description Deletes a timesheet line. If a timesheet has posted to the General Ledger or has been invoiced, it cannot be deleted.
         */
        delete: operations["delete-time-timesheet-line-key"];
        options?: never;
        head?: never;
        /**
         * Update a timesheet line
         * @description Updates an existing timesheet line by setting field values. Any fields not provided remain unchanged. Whether approvals are turned on for a company, and where a timesheet is in the approval process determines if a timesheet line can be edited. For more information, see [Edit timesheets to correct information](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Edit_timesheets) in the Sage Intacct Help center.
         */
        patch: operations["update-time-timesheet-line-key"];
        trace?: never;
    };
    "/objects/time/time-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List time types
         * @description Returns a collection with a key, ID, and link for each time type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-time-type"];
        put?: never;
        /**
         * Create a time type
         * @description Creates a new time type.
         */
        post: operations["create-time-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/time/time-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the time type.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a time type
         * @description Returns detailed information for a specified time type.
         */
        get: operations["get-time-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete a time type
         * @description Deletes a time type.
         */
        delete: operations["delete-time-type-key"];
        options?: never;
        head?: never;
        /**
         * Update a time type
         * @description Updates an existing time type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-time-type-key"];
        trace?: never;
    };
    "/objects/time/timesheet-to-approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List timesheets to approve
         * @description Returns a collection with a key, ID, and link for each timesheet to approve. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-time-timesheet-to-approve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/time/timesheet-to-approve/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the timesheet-to-approve.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a timesheet to approve
         * @description Returns detailed information for a specified timesheet to approve.
         */
        get: operations["get-time-timesheet-to-approve-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/time/timesheet-approval-record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List timesheet approval records
         * @description Returns a collection with a key, ID, and link for each timesheet approval record. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-time-timesheet-approval-record"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/time/timesheet-approval-record/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the timesheet approval record.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a timesheet approval record
         * @description Returns detailed information for a specified timesheet approval record.
         */
        get: operations["get-time-timesheet-approval-record-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/time/timesheet-rule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List timersheet rules
         * @description Returns a collection with a key, ID, and link for each timesheet rule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-time-timesheet-rule"];
        put?: never;
        /**
         * Create a timesheet rule
         * @description Creates a new timesheet rule.
         */
        post: operations["create-time-timesheet-rule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/time/timesheet-rule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the timesheet rule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a timesheet rule
         * @description Returns detailed information for a specified timesheet rule.
         */
        get: operations["get-time-timesheet-rule-key"];
        put?: never;
        post?: never;
        /**
         * Delete a timesheet rule
         * @description Deletes a timesheet rule.
         */
        delete: operations["delete-time-timesheet-rule-key"];
        options?: never;
        head?: never;
        /**
         * Update a timesheet rule
         * @description Updates an existing timesheet rule by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-time-timesheet-rule-key"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Reference to created or updated object. */
        "object-reference": {
            /**
             * @description System-assigned key for the object.
             * @example 12345
             */
            key?: string;
            /**
             * @description Unique identifier for the object.
             * @example ID123
             */
            id?: string;
            /**
             * @description URL endpoint for the object.
             * @example /objects/<application>/<name>/12345
             */
            readonly href?: string;
        };
        /** @description Metadata for collection response */
        "metadata-pages": {
            /**
             * @description Total number of members in the result set.
             * @example 3
             */
            readonly totalCount?: number;
            /**
             * @description First member of the result set included in the current response.
             * @example 1
             */
            readonly start?: number;
            /**
             * @description Maximum number of members included in the current response. The response may contain fewer members if the final page of the result set is smaller than the page size.
             * @example 100
             */
            readonly pageSize?: number;
            /**
             * @description First member number of the next page of results.
             * @example 101
             */
            readonly next?: number | null;
            /**
             * @description First member number of the previous page of results.
             * @example null
             */
            readonly previous?: number | null;
        };
        /** @description Header information for timesheets. Includes employee name, period begin date, period end date, GL post date, description, and attachments. */
        "objects.time.timesheet": {
            /**
             * @description System-assigned unique key for the timesheet.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the timesheet. This value is same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the timesheet.
             * @example /objects/time/timesheet/23
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Begin date of the work period.
             * @example 2024-01-01
             */
            beginDate?: string;
            /**
             * Format: date
             * @description The calculated end date of the work period, based on the `beginDate`.
             * @example 2024-12-31
             */
            readonly endDate?: string;
            /**
             * Format: date
             * @description Defaults to timesheet `endDate`. If `endDate` falls within a closed GL period, then `postingDate` automatically defaults to the first day of the next open GL period.
             * @example 2024-01-01
             */
            postingDate?: string;
            /**
             * @description State of the timesheet in the approval cycle, such as approved or declined.
             * @default draft
             * @example submitted
             * @enum {string}
             */
            state?: "submitted" | "approved" | "partiallyApproved" | "declined" | "draft" | "partiallyDeclined" | "saved";
            /**
             * @description Unit of measure, such as hours or days, used in labor cost calculations. Maps to configuration set in Projects and cannot be changed.
             * @example hours
             */
            readonly unitOfMeasure?: string;
            /**
             * @description Hours in a day. Used to calculate labor cost.
             * @example 8
             */
            readonly hoursInDay?: number;
            /**
             * @description Timesheet description, up to 400 characters.
             * @example Week of 2024-01-01 to cover help desk
             */
            description?: string;
            /**
             * @description The calculation method used for pay and defined by `time-type.earningType`. Used in labor cost and billing calculations. When `null`, the labor amount does not calculate for the timesheet. For example, labor costs for certain roles, such as management or sales, might not need to be calculated.
             * @default null
             * @example hourly
             * @enum {string|null}
             */
            readonly calculationMethod?: null | "hourly" | "salary";
            /**
             * @description Only `true` when `employee.postActualCostWithVariance` is set to `true` to indicate that `calculationMethod` is `salary`. When `employee.postActualCostWithVariance` is set to false, `calculationMethod` is `hourly`, so `postActualLaborCost` is `false`.
             * @example false
             */
            readonly postActualLaborCost?: boolean;
            /** @description The employee who performed the work and whose time is being tracked. */
            employee?: {
                /**
                 * @description Unique key for the employee.
                 * @example 973
                 */
                key?: string;
                /**
                 * @description Unique identifier for the employee.
                 * @example E-001
                 */
                id?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/973
                 */
                readonly href?: string;
            };
            /** @description Employee contact. */
            readonly employeeContact?: {
                /**
                 * @description Unique key for the contact.
                 * @example 977
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier of the contact.
                 * @example John Smith
                 */
                readonly id?: string;
                /**
                 * @description The first name of the contact.
                 * @example John
                 */
                readonly firstName?: string;
                /**
                 * @description The last name of the contact.
                 * @example Smith
                 */
                readonly lastName?: string;
                /**
                 * @description URL endpoint for the contact.
                 * @example /objects/company-config/contact/973
                 */
                readonly href?: string;
            };
            /** @description Supporting documentation for the timesheet. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 8420
                 */
                key?: string;
                /**
                 * @description Unique identifier for the attachment.
                 * @example Attach-01
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/8420
                 */
                readonly href?: string;
            };
            /** @description Time entries */
            lines?: components["schemas"]["objects.time.timesheet-line"][];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "time-timesheetRequiredProperties": Record<string, never>;
        /** @description Metadata for the response. */
        metadata: {
            /**
             * @description Total count.
             * @example 3
             */
            readonly totalCount?: number;
            /**
             * @description Total success.
             * @example 2
             */
            readonly totalSuccess?: number;
            /**
             * @description Total errors.
             * @example 1
             */
            readonly totalError?: number;
        };
        /** @description Line items in a timesheet represent time details for specified periods captured in the timesheet. */
        "objects.time.timesheet-line": {
            /**
             * @description System-assigned unique key for the timesheet line.
             * @example 1411
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the timesheet line. This value is the same as the 'key' for this object.
             * @example 1411
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the timesheet line.
             * @example /objects/time/timesheet-line/1411
             */
            readonly href?: string;
            /** @description The timesheet to which the line belongs. */
            timesheet?: {
                /**
                 * @description Unique key for the timesheet.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description Unique identifier of the timesheet.
                 * @example 11
                 */
                id?: string;
                /**
                 * @description URL endpoint for the timesheet.
                 * @example /objects/time/timesheet/11
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Date of the timesheet line entry.
             * @example 2024-04-01
             */
            entryDate?: string;
            /**
             * @description Number of hours or quantity.
             * @example 6
             */
            quantity?: number;
            /**
             * @description Line number of the timesheet line entry.
             * @example 1
             */
            readonly lineNumber?: number;
            /**
             * @description Description of the individual timesheet line.
             * @example 04/01/24: work on Project Z.
             */
            description?: string | null;
            /**
             * @description Notes about the timesheet line.
             * @example Talked to client regarding project
             */
            notes?: string | null;
            /**
             * @description State of the timesheet line in the approval cycle, such as `approved` or `declined`.
             * @default draft
             * @example approved
             * @enum {string}
             */
            readonly state?: "submitted" | "approved" | "partiallyApproved" | "declined" | "draft" | "saved" | "readyForApproval";
            /** @description Categorizes the time. Each company's time types can differ and can include salary, contract hours, overtime, vacation, travel time, and so on. */
            timeType?: {
                /**
                 * @description Unique key for the time type.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier of the Time type.
                 * @example Salaries At Root
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the time type.
                 * @example /objects/time/time-type/1
                 */
                readonly href?: string | null;
            };
            /**
             * @description Indicates whether the line can be billed. Set to `true` if the line can be billed to a customer.
             * @default false
             * @example true
             */
            isBillable?: boolean;
            /**
             * @description Indicates whether the line has been billed to a customer.
             * @default false
             * @example false
             * @enum {string}
             */
            readonly isBilled?: "true" | "false" | "partial";
            /** @description Statistical journal used for the timesheet line. Statistical account entries are non-monetary and simply increase or decrease a value. */
            readonly statisticalJournal?: {
                /**
                 * @description Unique key for the statistical journal.
                 * @example 7483
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier of the statistical journal.
                 * @example TSSJ
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the statistical journal.
                 * @example /objects/general-ledger/statistical-journal/7483
                 */
                readonly href?: string;
            };
            /** @description General ledger account used for the billable utilized time recorded. */
            readonly billableUtilizedGLAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 8293
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the GL account.
                 * @example 9293
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/statistical-account/8293
                 */
                readonly href?: string;
            };
            /** @description General ledger account used for the non-billable utilized time recorded. */
            readonly nonBillableUtilizedGLAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 8294
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier of the GL account.
                 * @example 9294
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/statistical-account/8294
                 */
                readonly href?: string;
            };
            /** @description General ledger account used for the billable non-utilized time recorded. */
            readonly billableNonUtilizedGLAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 8295
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier of the GL account.
                 * @example 9295
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/statistical-account/8295
                 */
                readonly href?: string;
            };
            /** @description General ledger account used for the non-billable non-utilized time recorded. */
            readonly nonBillableNonUtilizedGLAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 8296
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier of the GL Account for Non-Billable Non-Utilized entry.
                 * @example 9296
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/statistical-account/8296
                 */
                readonly href?: string;
            };
            /** @description Details about the hours recorded on the timesheet line. */
            readonly hours?: {
                /**
                 * @description Number of billable hours.
                 * @example 4
                 */
                readonly billable?: number | null;
                /**
                 * @description Number of non-billable hours.
                 * @example 4
                 */
                readonly nonBillable?: number | null;
                /**
                 * @description Number of approved hours.
                 * @example 8
                 */
                readonly approved?: number | null;
                /**
                 * @description Number of approved billable hours.
                 * @example 4
                 */
                readonly approvedBillable?: number | null;
                /**
                 * @description Number of approved non-billable hours.
                 * @example 4
                 */
                readonly approvedNonBillable?: number | null;
                /**
                 * @description Utilized or actual hours worked against the budgeted hours.
                 * @example 8
                 */
                readonly utilized?: number | null;
                /**
                 * @description Non-utilized hours or hours not worked against the budgeted hours.
                 * @example 4
                 */
                readonly nonUtilized?: number | null;
                /**
                 * @description Approved utilized or actual hours worked against the budgeted hours.
                 * @example 3
                 */
                readonly approvedUtilized?: number | null;
                /**
                 * @description Approved non-utilized hours or hours not worked against the budgeted hours.
                 * @example 2
                 */
                readonly approvedNonUtilized?: number | null;
            };
            /** @description External payroll details, such as information from Sage Intacct Construction Payroll. */
            externalPayroll?: {
                /**
                 * @description External cost rate used.
                 * @example 115
                 */
                costRate?: number | null;
                /**
                 * @description External billing rate used.
                 * @example 1
                 */
                billingRate?: number | null;
                /**
                 * Format: decimal-precision-2
                 * @description Labor amount. (Construction subscription.)
                 * @example 90
                 */
                amount?: string | null;
                /**
                 * @description Employer taxes. (Construction subscription.)
                 * @example 15
                 */
                employerTaxes?: number | null;
                /**
                 * @description Amount of the fringes cost. (Construction subscription.)
                 * @example 10
                 */
                fringes?: number | null;
                /**
                 * @description Amount of the cash fringes cost. (Construction subscription.)
                 * @example 2
                 */
                cashFringes?: number | null;
            };
            /** @description Labor class for the timesheet line. (Construction subscription.) */
            readonly laborClass?: {
                /**
                 * @description Unique key for the labor class.
                 * @example 15
                 */
                key?: string | null;
                /**
                 * @description Unique identifier of the labor class.
                 * @example LC001
                 */
                id?: string | null;
                /**
                 * @description Labor class name associated with the timesheet.
                 * @example Journeyperson
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the class dimension.
                 * @example /objects/construction/labor-class/15
                 */
                readonly href?: string;
            };
            /** @description Labor shift for the timesheet line. (Construction subscription.) */
            readonly laborShift?: {
                /**
                 * @description Unique key for the labor shift.
                 * @example 18
                 */
                key?: string | null;
                /**
                 * @description Unique identifier of the labor shift.
                 * @example LS001
                 */
                id?: string | null;
                /**
                 * @description Labor shift associated with the timesheet.
                 * @example Swing shift
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the labor shift.
                 * @example /objects/construction/labor-shift/18
                 */
                readonly href?: string;
            };
            /** @description Labor union for the timesheet line. (Construction subscription.) */
            readonly laborUnion?: {
                /**
                 * @description Unique key for the labor union.
                 * @example 20
                 */
                key?: string | null;
                /**
                 * @description Unique identifier of the labor union.
                 * @example LU001
                 */
                id?: string | null;
                /**
                 * @description Labor union associated with the timesheet.
                 * @example Steamfitters Local 467
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the labor union.
                 * @example /objects/construction/labor-union/20
                 */
                readonly href?: string;
            };
            /** @description References the employee position, applies only to companies with a Construction subscription. */
            readonly employeePosition?: {
                /**
                 * @description Unique key for the employee position.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the employee position.
                 * @example SV001
                 */
                id?: string | null;
                /**
                 * @description Name of the employee position.
                 * @example permanent
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the employee position.
                 * @example /objects/construction/employee-position/1
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /** @description Company location. */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier of the location.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Location name
                     * @example San Jose
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/1
                     */
                    readonly href?: string;
                };
                /** @description Company department. */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier of the department.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Department name
                     * @example IT
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/1
                     */
                    readonly href?: string;
                };
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "time-timesheet-lineRequiredProperties": Record<string, never>;
        /** @description Line items in time types capture and track categories of time. */
        "objects.time.time-type": {
            /**
             * @description System-assigned key for the time-type.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the time type.
             * @example Overtime
             */
            id?: string;
            /**
             * @description URL endpoint for the time type.
             * @example /objects/time/time-type/23
             */
            readonly href?: string;
            /** @description Posts project labor costs to one or more GL journals. Optionally overrides a standard earning type for an employee. */
            earningType?: {
                /**
                 * @description URL endpoint for the earning type.
                 * @example /objects/company-config/earning-type/18
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the earning type.
                 * @example 18
                 */
                key?: string | null;
                /**
                 * @description Unique identifier of the earning type.
                 * @example Salary
                 */
                id?: string | null;
            };
            /** @description General ledger account to post the labor cost for any `time.timesheet-line` with the time type. */
            glAccount?: {
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/12
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the GL account.
                 * @example 12
                 */
                key?: string | null;
                /**
                 * @description Unique identifier of the GL account.
                 * @example 5001
                 */
                id?: string | null;
                /**
                 * @description Time type GL account name.
                 * @example Labor
                 */
                readonly name?: string | null;
            };
            /** @description The liability account to use for the time type, such as accrued compensation. */
            offsetGLAccount?: {
                /**
                 * @description URL endpoint for the offset GL account.
                 * @example /objects/general-ledger/account/13
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the offset GL account.
                 * @example 13
                 */
                key?: string | null;
                /**
                 * @description Unique identifier of the time type offset account.
                 * @example 5002
                 */
                id?: string | null;
                /**
                 * @description Time type Offset account name.
                 * @example Labor Offset
                 */
                readonly name?: string | null;
            };
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
        };
        "time-typeRequiredProperties": Record<string, never>;
        /** @description Header information for a timesheet to approve. */
        "objects.time.timesheet-to-approve": {
            /**
             * @description System-assigned unique key for the timesheet to approve.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the timesheet to approve. This value is same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the timesheet to approve.
             * @example /objects/timesheet/23
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Begin date of the work period on the timesheet to approve.
             * @example 2025-01-01
             */
            beginDate?: string;
            /**
             * Format: date
             * @description End date of the work period on the timesheet to approve.
             * @example 2025-12-31
             */
            readonly endDate?: string;
            /**
             * Format: date
             * @description The date that the timesheet was posted to the General Ledger.
             * @example 2025-01-01
             */
            postingDate?: string;
            /**
             * @description State of the timesheet in the approval cycle, such as approved or declined.
             * @default draft
             * @example submitted
             * @enum {string}
             */
            state?: "submitted" | "approved" | "partiallyApproved" | "declined" | "draft" | "partiallyDeclined" | "saved";
            /**
             * @description Unit of measure, such as hours or days, used in labor cost calculations. Maps to configuration set in Projects and cannot be changed.
             * @example Hours
             */
            readonly unitOfMeasure?: string;
            /**
             * @description Hours in a day. Used to calculate labor cost.
             * @example 8
             */
            readonly hoursInDay?: number;
            /**
             * Format: decimal-precision-2
             * @description Number of billable hours.
             * @example 33.00
             */
            readonly billableQuantity?: string;
            /**
             * Format: decimal-precision-2
             * @description Number of non-billable hours.
             * @example 0.00
             */
            readonly nonBillableQuantity?: string;
            /**
             * @description Timesheet description, up to 400 characters.
             * @example Week of 2025-01-01
             */
            description?: string;
            /**
             * @description The calculation method used for pay and defined by `time-type.earningType`. Used in labor cost and billing calculations. When `null`, the labor amount does not calculate for the timesheet. For example, labor costs for certain roles, such as management or sales, might not need to be calculated.
             * @default null
             * @example hourly
             * @enum {string|null}
             */
            readonly calculationMethod?: null | "hourly" | "salary";
            /**
             * @description Post actual labor cost.
             * @default false
             * @example false
             */
            readonly postActualLaborCost?: boolean;
            /** @description The employee who performed the work and whose time is being tracked. */
            employee?: {
                /**
                 * @description Unique key for the employee.
                 * @example 973
                 */
                key?: string;
                /**
                 * @description Unique identifier for the employee.
                 * @example E-001
                 */
                id?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/employee/973
                 */
                readonly href?: string;
            };
            /** @description Employee contact. */
            employeeContact?: {
                /**
                 * @description Unique key for the employee contact.
                 * @example 973
                 */
                key?: string;
                /**
                 * @description Employee contact Name.
                 * @example John Smith
                 */
                readonly name?: string;
                /**
                 * @description The first name of the contact.
                 * @example John
                 */
                readonly firstName?: string;
                /**
                 * @description The last name of the contact.
                 * @example Smith
                 */
                readonly lastName?: string;
                /**
                 * @description URL endpoint for the employee contact.
                 * @example /objects/company-config/contact/973
                 */
                readonly href?: string;
            };
            /** @description Supporting documentation for the timesheet. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 8420
                 */
                key?: string;
                /**
                 * @description Unique identifier for the attachment.
                 * @example Attach-01
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/8420
                 */
                readonly href?: string;
            };
            /** @description Time entries */
            lines?: components["schemas"]["objects.time.timesheet-to-approve-line"][];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        /** @description Record of employee timesheet approvals. */
        "objects.time.timesheet-approval-record": {
            /**
             * @description System-assigned unique key for the timesheet approval record.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the timesheet approval record. This value is the same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the timesheet approval record.
             * @example /objects/time/timesheet-approval-record/23
             */
            readonly href?: string;
            /**
             * @description The current stage of the approval cycle, from 1 to 5.
             * @example 1
             */
            readonly approvalStage?: number;
            /**
             * @description The approval type used for this record, such as User Level or Department Approval.
             * @example Department Approval
             */
            readonly approvalType?: string;
            /**
             * @description The configured approval level, from 1 - 5, required for this record. For example, a level 1 approval might simply require a department manager's approval. A level 2 approval might require a department manager's approval followed by a department director's approval. For more information about configuring time and approval levels, see [Configure time](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configure_time).
             * @example 2
             */
            readonly approvalLevel?: string;
            /**
             * @description Comments provided by the reviewer (approver) of this record.
             * @example Approved by Admin in lieu of department manager.
             */
            readonly comments?: string | null;
            /**
             * Format: date
             * @description Date when the approval or decline action occurs.
             * @example 2021-01-23
             */
            readonly recordDate?: string;
            /**
             * @description The state of the record in the approval cycle.
             * @example submitted
             * @enum {string}
             */
            readonly state?: "submitted" | "pendingApproval" | "approved" | "declined";
            /** @description The timesheet related to this approval record. */
            readonly timesheet?: {
                /**
                 * @description Unique key for the timesheet.
                 * @example 101
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier of the timesheet.
                 * @example 101
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the timesheet.
                 * @example /objects/time/timesheet/101
                 */
                readonly href?: string;
            };
            /** @description Individual timesheet line entry. */
            readonly timesheetLine?: {
                /**
                 * @description Unique key for the timesheet line entry.
                 * @example 142
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier of the timesheet line entry.
                 * @example 142
                 */
                readonly id?: string;
                /**
                 * @description The timesheet entry line number.
                 * @example 3
                 */
                readonly lineNumber?: number;
                /**
                 * @description URL endpoint for the timesheet line entry.
                 * @example /objects/time/timesheet-line/142
                 */
                readonly href?: string;
            };
            /** @description The user who approved or declined the timesheet line entry. */
            readonly approvedBy?: {
                /**
                 * @description Unique key for the user.
                 * @example 202
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the user.
                 * @example cjackson
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/202
                 */
                readonly href?: string;
            };
            /** @description The user assigned to approve the timesheet line entry. */
            readonly approver?: {
                /**
                 * @description Unique key for the user.
                 * @example 203
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier of the user.
                 * @example jlee
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/203
                 */
                readonly href?: string;
            };
            /** @description The user who made the timesheet line entry change. */
            readonly completedBy?: {
                /**
                 * @description System-assigned key for the user.
                 * @example 204
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier of the user.
                 * @example gadams
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/204
                 */
                readonly href?: string;
            };
            /** @description The user who created the timesheet approval request. */
            readonly initiatedBy?: {
                /**
                 * @description Unique key for the user.
                 * @example 205
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the user.
                 * @example vluce
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/205
                 */
                readonly href?: string;
            };
        };
        /** @description List of timesheet rules. */
        "objects.time.timesheet-rule": {
            /**
             * @description System-assigned key for the timesheet-rule.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the timesheet rule. This value is the same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the timesheet rule.
             * @example /objects/time/timesheet-rule/23
             */
            readonly href?: string;
            /**
             * @description Rule name.
             * @example Weekend overtime limit
             */
            name?: string;
            /**
             * @description Days of the week defined as work days that apply to the timesheet rule.
             * @default []
             * @example [
             *       "MONDAY",
             *       "TUESDAY",
             *       "WEDNESDAY",
             *       "THURSDAY",
             *       "FRIDAY"
             *     ]
             */
            businessDays?: string[];
            /**
             * @description Days of the weekend defined as work days that apply to the timesheet rule.
             * @default []
             * @example [
             *       "SATURDAY",
             *       "SUNDAY"
             *     ]
             */
            weekends?: string[];
            /**
             * Format: date
             * @description The timesheet rule start date.
             * @example 2025-06-01
             */
            startDate?: string;
            /**
             * Format: date
             * @description The timesheet rule end date. The end date must occur after the start date.
             * @example 2026-06-01
             */
            endDate?: string;
            /**
             * Format: decimal-precision-2
             * @description The minimum hours required for approval.
             * @example 0.2
             */
            minHoursForApproval?: string | null;
            /**
             * Format: decimal-precision-2
             * @description The maximum hours allowed for approval.
             * @example 5
             */
            maxHoursForApproval?: string | null;
            /**
             * Format: decimal-precision-2
             * @description The minimum required non-weekend hours per work day.
             * @example 2.0
             */
            minHoursPerWorkDay?: string | null;
            /**
             * Format: decimal-precision-2
             * @description The maximum allowed non-weekend hours per work day.
             * @example 10.0
             */
            maxHoursPerWorkDay?: string | null;
            /**
             * @description Indicates whether notes are required (true) or not (false) for the timesheet.
             * @default false
             * @example false
             */
            requireNotes?: boolean;
            /**
             * @description Indicates whether to reject timesheets submitted with work performed on a defined holiday (true) or not (false).
             * @default false
             * @example false
             */
            doNotAllowOnHolidays?: boolean;
            /**
             * Format: decimal-precision-2
             * @description The minimum weekend hours. Use '0' if no one works.
             * @example 0.2
             */
            minHoursPerWeekend?: string | null;
            /**
             * Format: decimal-precision-2
             * @description The maximum weekend hours. Use '0' if no one works.
             * @example 5.0
             */
            maxHoursPerWeekend?: string | null;
            timesheetRuleEmployees?: {
                /**
                 * @description Unique key for the employee to whom the timesheet rule applies.
                 * @example 5606
                 */
                key?: string;
                /**
                 * @description Unique identifier for the employee to whom the timesheet rule applies.
                 * @example EMP-1
                 */
                id?: string;
                /**
                 * @description Name of the employee to whom the timesheet rule applies.
                 * @example John Smith
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the employee to whom the timesheet rule applies.
                 * @example /objects/company-config/employee/5606
                 */
                readonly href?: string;
            }[];
            status?: components["schemas"]["status"];
        };
        "time-timesheet-ruleRequiredProperties": Record<string, never>;
        /**
         * @description Error response
         * @example {
         *       "ia::result": {
         *         "ia::error": {
         *           "code": "invalidRequest",
         *           "message": "A POST request requires a payload",
         *           "errorId": "REST-1028",
         *           "additionalInfo": {
         *             "messageId": "IA.REQUEST_REQUIRES_A_PAYLOAD",
         *             "placeholders": {
         *               "OPERATION": "POST"
         *             },
         *             "propertySet": {}
         *           },
         *           "supportId": "Kxi78%7EZuyXBDEGVHD2UmO1phYXDQAAAAo"
         *         }
         *       },
         *       "ia::meta": {
         *         "totalCount": 1,
         *         "totalSuccess": 0,
         *         "totalError": 1
         *       }
         *     }
         */
        "error-response": {
            "ia::result"?: {
                "ia::error"?: {
                    /** @example invalidRequest */
                    code?: string;
                    /** @example Payload contains errors */
                    message?: string;
                    /** @example sQrM9%7EYdh5oDEWVb80mrn9xuHjoAAAABBQ */
                    supportId?: string;
                    /** @example REST-1064 */
                    errorId?: string;
                    additionalInfo?: {
                        /** @example IA.PAYLOAD_CONTAINS_ERRORS */
                        messageId?: string;
                        /** @example {} */
                        placeholders?: Record<string, never>;
                        /** @example {} */
                        propertySet?: Record<string, never>;
                    };
                    details?: {
                        /** @example invalidRequest */
                        code?: string;
                        /** @example /newDate is not a valid field */
                        message?: string;
                        /** @example REST-1043 */
                        errorId?: string;
                        /** @example /newDate */
                        target?: string;
                        additionalInfo?: {
                            /** @example IA.NOT_A_VALID_FIELD */
                            messageId?: string;
                            /** @example {} */
                            placeholders?: Record<string, never>;
                            /** @example {} */
                            propertySet?: Record<string, never>;
                        };
                    }[];
                };
                "ia::meta"?: components["schemas"]["metadata"];
            };
        };
        "audit.s1": {
            /**
             * Format: date-time
             * @description Date and time when the record was created.
             * @example 2025-05-16T15:34:35Z
             */
            readonly createdDateTime?: string;
            /**
             * Format: date-time
             * @description Date and time when the record was last modified.
             * @example 2025-09-14T21:23:42Z
             */
            readonly modifiedDateTime?: string;
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `createdByUser` field instead.
             */
            readonly createdBy?: string | null;
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `modifiedByUser` field instead.
             */
            readonly modifiedBy?: string | null;
            /** @description The user who created the object. */
            readonly createdByUser?: {
                /**
                 * @description System-assigned key for the user.
                 * @example 436
                 */
                readonly key?: string | null;
                /**
                 * @description User login ID.
                 * @example JohnDoe
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/436
                 */
                readonly href?: string;
            };
            /** @description The user who last modified this object. */
            readonly modifiedByUser?: {
                /**
                 * @description System-assigned key for the user.
                 * @example 3086
                 */
                readonly key?: string | null;
                /**
                 * @description User login ID.
                 * @example JaneDoe
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/3086
                 */
                readonly href?: string;
            };
        };
        /** @description The entity that the object is associated with. Objects created at the top level do not have an entity reference so the `key`, `id`, and `name` properties will be `null`. */
        "entity-ref": {
            /**
             * @description System-assigned key for the entity.
             * @example 46
             */
            readonly key?: string | null;
            /**
             * @description Unique identifier for the entity.
             * @example CORP
             */
            readonly id?: string | null;
            /**
             * @description Name for the entity.
             * @example Corp
             */
            readonly name?: string | null;
            /**
             * @description URL endpoint for the entity.
             * @example /objects/company-config/entity/46
             */
            readonly href?: string;
        };
        "dimension-ref": {
            location?: {
                /**
                 * @description System-assigned key for the location.
                 * @example 22
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the location.
                 * @example LOC-22
                 */
                id?: string | null;
                /**
                 * @description Name for the location.
                 * @example California
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/22
                 */
                readonly href?: string;
            };
            department?: {
                /**
                 * @description System-assigned key for the department.
                 * @example 11
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the department.
                 * @example DEP-11
                 */
                id?: string | null;
                /**
                 * @description Name for the department.
                 * @example Sales and Marketing
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/11
                 */
                readonly href?: string;
            };
            employee?: {
                /**
                 * @description System-assigned key for the employee.
                 * @example 10
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the employee.
                 * @example EMP-10
                 */
                id?: string | null;
                /**
                 * @description Name for the employee.
                 * @example Thomas, Glenn
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/10
                 */
                readonly href?: string;
            };
            project?: {
                /**
                 * @description System-assigned key for the project.
                 * @example 2
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the project.
                 * @example NET-XML30-2
                 */
                id?: string | null;
                /**
                 * @description Name for the project.
                 * @example Talcomp training
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/2
                 */
                readonly href?: string;
            };
            customer?: {
                /**
                 * @description System-assigned key for the customer.
                 * @example 13
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the customer.
                 * @example CUST-13
                 */
                id?: string | null;
                /**
                 * @description Name for the customer.
                 * @example Jack In the Box
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/13
                 */
                readonly href?: string;
            };
            vendor?: {
                /**
                 * @description System-assigned key for the vendor.
                 * @example 357
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the vendor.
                 * @example 1605212096809
                 */
                id?: string | null;
                /**
                 * @description Name for the vendor.
                 * @example GenLab
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/357
                 */
                readonly href?: string;
            };
            item?: {
                /**
                 * @description System-assigned key for the item.
                 * @example 13
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the item.
                 * @example Case 13
                 */
                id?: string | null;
                /**
                 * @description Name for the item.
                 * @example Platform pack
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/13
                 */
                readonly href?: string;
            };
            warehouse?: {
                /**
                 * @description System-assigned key for the warehouse.
                 * @example 6
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the warehouse.
                 * @example WH01
                 */
                id?: string | null;
                /**
                 * @description Name for the warehouse.
                 * @example WH01
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the warehouse.
                 * @example /objects/inventory-control/warehouse/6
                 */
                readonly href?: string;
            };
            class?: {
                /**
                 * @description System-assigned key for the class.
                 * @example 731
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the class.
                 * @example REST_CLS_001
                 */
                id?: string | null;
                /**
                 * @description Name for the class.
                 * @example Enterprises
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the class.
                 * @example /objects/company-config/class/731
                 */
                readonly href?: string;
            };
            task?: {
                /**
                 * @description Unique identifier for the task.
                 * @example 1
                 */
                id?: string | null;
                /**
                 * @description System-assigned key for the task.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Name for the task.
                 * @example Project Task
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the task.
                 * @example /objects/projects/task/1
                 */
                readonly href?: string;
            };
            costType?: {
                /**
                 * @description Unique identifier for the cost type.
                 * @example 2
                 */
                id?: string | null;
                /**
                 * @description System-assigned key for the cost type.
                 * @example 2
                 */
                key?: string | null;
                /**
                 * @description Name for the cost type.
                 * @example Project Expense
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the cost type.
                 * @example /objects/construction/cost-type/2
                 */
                readonly href?: string;
            };
            asset?: {
                /**
                 * @description Unique identifier for the asset.
                 * @example A001
                 */
                id?: string | null;
                /**
                 * @description System-assigned key for the asset.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Name for the asset.
                 * @example Laptop
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the asset.
                 * @example /objects/fixed-assets/asset/1
                 */
                readonly href?: string;
            };
            contract?: {
                /**
                 * @description Unique identifier for the contract.
                 * @example CON-0045-1
                 */
                id?: string | null;
                /**
                 * @description System-assigned key for the contract.
                 * @example 12
                 */
                key?: string | null;
                /**
                 * @description Name for the contract.
                 * @example ACME Widgets - Service
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the contract.
                 * @example /objects/contracts/contract/12
                 */
                readonly href?: string;
            };
            affiliateEntity?: {
                /**
                 * @description System-assigned key for the affiliate entity.
                 * @example 23
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the affiliate entity.
                 * @example AFF-23
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the affiliate entity.
                 * @example /objects/affiliate-entity/23
                 */
                readonly href?: string;
                /**
                 * @description Name for the affiliate entity.
                 * @example 100-USA
                 */
                readonly name?: string | null;
            };
            loanAccount?: {
                /**
                 * @description Unique identifier for the loan account.
                 * @example LN001
                 */
                id?: string | null;
                /**
                 * @description System-assigned key for the loan account.
                 * @example 852
                 */
                key?: string | null;
                /**
                 * @description Name for the loan account.
                 * @example Business Loan
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the loan account.
                 * @example /objects/loan-management/loan-account/852
                 */
                readonly href?: string;
            };
            /** @description Work order associated with the dimension. */
            workOrder?: {
                /**
                 * @description System-assigned key for the work order.
                 * @example 18
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the work order.
                 * @example WO-0017
                 */
                id?: string | null;
                /**
                 * @description Name for the work order.
                 * @example WO-India
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the work order.
                 * @example /objects/construction/work-order/18
                 */
                readonly href?: string;
            };
        };
        /**
         * @description Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
         * @default active
         * @example active
         * @enum {string}
         */
        status: "active" | "inactive";
        /** @description A single timesheet entry, including customer, project, number of hours, billing rates, and cost rates. */
        "objects.time.timesheet-to-approve-line": {
            /**
             * @description System-assigned unique key for the timesheet entry.
             * @example 1411
             */
            readonly key?: string;
            /**
             * @description This value is the same as the 'key' value for this object.
             * @example 1411
             */
            readonly id?: string;
            /**
             * @description Endpoint for the timesheet entry.
             * @example /objects/time/timesheet-to-approve-line/1411
             */
            readonly href?: string;
            /** @description The timesheet that the entry belongs to. */
            timesheetToApprove?: {
                /**
                 * @description The timesheet that the entry belongs to.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description ID of Timesheet.
                 * @example 11
                 */
                id?: string;
                /**
                 * @description Endpoint of the timesheet
                 * @example /objects/timesheet-to-approve/11
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Date of the timesheet entry.
             * @example 2023-04-01
             */
            entryDate?: string;
            /**
             * @description Number of hours or quantity.
             * @example 6
             */
            quantity?: number;
            /**
             * @description Line number to add entry to.
             * @example 1
             */
            readonly lineNumber?: number;
            /**
             * @description Description.
             * @example Week of 04/01/23
             */
            description?: string;
            /**
             * @description Notes
             * @example Talked to client regarding project
             */
            notes?: string;
            /**
             * @description State
             * @example approved
             * @enum {string}
             */
            readonly state?: "submitted" | "approved" | "partiallyApproved" | "declined" | "draft" | "saved" | "readyForApproval" | "pending" | "notApplicable";
            /** @description Time type */
            timeType?: {
                /**
                 * @description Time type key
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Time type ID.
                 * @example Salaries At Root
                 */
                id?: string;
                /**
                 * @description Time type name.
                 * @example Salaries At Root
                 */
                readonly name?: string;
                /** @example /objects/time-type/1 */
                readonly href?: string;
            };
            /**
             * @description Set to 'true' if time can be billed to the customer.
             * @default false
             * @example true
             */
            isBillable?: boolean;
            /**
             * @description Billed.
             * @default false
             * @example false
             * @enum {string}
             */
            readonly isBilled?: "true" | "false" | "partial";
            readonly statisticalJournal?: {
                /**
                 * @description Statistical journal key.
                 * @example 7483
                 */
                readonly key?: string;
                /**
                 * @description Statistical journal ID.
                 * @example TSSJ
                 */
                readonly id?: string;
                /** @example /objects/statistical-journal/7483 */
                readonly href?: string;
            };
            readonly billableUtilizedGLAccount?: {
                /**
                 * @description GL Account Key for Billable Utilized entry.
                 * @example 8293
                 */
                readonly key?: string;
                /**
                 * @description GL Account ID for Billable Utilized entry
                 * @example 9293
                 */
                readonly id?: string;
                /** @example /objects/statistical-gl-account/8293 */
                readonly href?: string;
            };
            readonly nonBillableUtilizedGLAccount?: {
                /**
                 * @description GL Account Key for Non-Billable Utilized entry.
                 * @example 8294
                 */
                readonly key?: string;
                /**
                 * @description GL Account ID for Non-Billable Utilized entry.
                 * @example 9294
                 */
                readonly id?: string;
                /** @example /objects/statistical-gl-account/8294 */
                readonly href?: string;
            };
            readonly billableNonUtilizedGLAccount?: {
                /**
                 * @description GL Account Key for Billable Non-Utilized entry.
                 * @example 8295
                 */
                readonly key?: string;
                /**
                 * @description GL Account ID for Billable Non-Utilized entry.
                 * @example 9295
                 */
                readonly id?: string;
                /** @example /objects/statistical-gl-account/8295 */
                readonly href?: string;
            };
            readonly nonBillableNonUtilizedGLAccount?: {
                /**
                 * @description GL Account Key for Non-Billable Non-Utilized entry.
                 * @example 8296
                 */
                readonly key?: string;
                /**
                 * @description GL Account ID for Non-Billable Non-Utilized entry.
                 * @example 9296
                 */
                readonly id?: string;
                /** @example /objects/statistical-gl-account/8296 */
                readonly href?: string;
            };
            hours?: {
                /**
                 * @description Billable hours.
                 * @example 8
                 */
                readonly billable?: number;
                /**
                 * @description Non-billable hours.
                 * @example 2
                 */
                readonly nonBillable?: number;
                /**
                 * @description Approved hours.
                 * @example 10
                 */
                readonly approved?: number;
                /**
                 * @description Approved billable hours.
                 * @example 8
                 */
                readonly approvedBillable?: number;
                /**
                 * @description Approved non-billable hours.
                 * @example 2
                 */
                readonly approvedNonBillable?: number;
                /**
                 * @description Utilized hours.
                 * @example 10
                 */
                readonly utilized?: number;
                /**
                 * @description Non-utilized hours.
                 * @example 4
                 */
                readonly nonUtilized?: number;
                /**
                 * @description Approved utilized hours
                 * @example 3
                 */
                readonly approvedUtilized?: number;
                /**
                 * @description Approved non-utilized hours
                 * @example 2
                 */
                readonly approvedNonUtilized?: number;
            };
            externalPayroll?: {
                /**
                 * @description External cost rate
                 * @example 1
                 */
                costRate?: number;
                /**
                 * @description External billing rate
                 * @example 1
                 */
                billingRate?: number;
                /**
                 * @description Labor Amount
                 * @example 90
                 */
                amount?: string;
                /**
                 * @description Employer taxes
                 * @example 15
                 */
                employerTaxes?: number;
                /**
                 * @description Fringes
                 * @example 10
                 */
                fringes?: number;
                /**
                 * @description Cash fringes
                 * @example 2
                 */
                cashFringes?: number;
            };
            /** @description Labor class used to track the timesheet. */
            readonly laborClass?: {
                /**
                 * @description System-assigned key for a class dimension associated with the timesheet.
                 * @example 15
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for a class dimension associated with the timesheet.
                 * @example LC001
                 */
                readonly id?: string;
                /**
                 * @description Class name associated with the timesheet.
                 * @example Labor Class
                 */
                readonly name?: string;
                /** @example /objects/labor-class/15 */
                readonly href?: string;
            };
            /** @description Labor shift to track the timesheet. */
            readonly laborShift?: {
                /**
                 * @description System-assigned key for a labor shift  associated with the timesheet.
                 * @example 18
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for a labor shift associated with the timesheet.
                 * @example LS001
                 */
                readonly id?: string;
                /**
                 * @description Labor shift associated with the timesheet.
                 * @example Labor Shift
                 */
                readonly name?: string;
                /** @example /objects/labor-shift/18 */
                readonly href?: string;
            };
            /** @description Labor union to track the timesheet. */
            readonly laborUnion?: {
                /**
                 * @description System-assigned key for a labor union associated with the timesheet.
                 * @example 20
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for a labor union associated with the timesheet.
                 * @example LU001
                 */
                readonly id?: string;
                /**
                 * @description Labor union associated with the timesheet.
                 * @example Labor Union
                 */
                readonly name?: string;
                /** @example /objects/labor-union/20 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                location?: {
                    /**
                     * @description Location key
                     * @example 1
                     */
                    key?: string;
                    /**
                     * @description Location
                     * @example 1
                     */
                    id?: string;
                    /**
                     * @description Location name
                     * @example USA
                     */
                    readonly name?: string;
                };
                department?: {
                    /**
                     * @description Department key
                     * @example 1
                     */
                    key?: string;
                    /**
                     * @description Department
                     * @example 1
                     */
                    id?: string;
                    /**
                     * @description Department name
                     * @example IT
                     */
                    readonly name?: string;
                };
            };
            audit?: components["schemas"]["audit.s1"];
        };
    };
    responses: {
        /** @description Bad Request */
        "400error": {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["error-response"];
            };
        };
    };
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "list-time-timesheet": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-time-timesheet": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description timesheet */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.time.timesheet"] & components["schemas"]["time-timesheetRequiredProperties"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-time-timesheet-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the timesheet.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.time.timesheet"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-time-timesheet-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the timesheet.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["400error"];
        };
    };
    "update-time-timesheet-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the timesheet.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.time.timesheet"] & {
                    readonly id?: unknown;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-time-timesheet-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-time-timesheet-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description timesheet-line */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.time.timesheet-line"] & components["schemas"]["time-timesheet-lineRequiredProperties"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-time-timesheet-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the timesheet line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.time.timesheet-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-time-timesheet-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the timesheet line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["400error"];
        };
    };
    "update-time-timesheet-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the timesheet line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.time.timesheet-line"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-time-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-time-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.time.time-type"] & components["schemas"]["time-typeRequiredProperties"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-time-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the time type.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.time.time-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-time-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the time type.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["400error"];
        };
    };
    "update-time-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the time type.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.time.time-type"] & {
                    readonly id?: unknown;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-time-timesheet-to-approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-time-timesheet-to-approve-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the timesheet-to-approve.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.time.timesheet-to-approve"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-time-timesheet-approval-record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-time-timesheet-approval-record-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the timesheet approval record.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.time.timesheet-approval-record"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-time-timesheet-rule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-time-timesheet-rule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.time.timesheet-rule"] & components["schemas"]["time-timesheet-ruleRequiredProperties"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-time-timesheet-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the timesheet rule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.time.timesheet-rule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-time-timesheet-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the timesheet rule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["400error"];
        };
    };
    "update-time-timesheet-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the timesheet rule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.time.timesheet-rule"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
}

// Generated from spec/expenses.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/expenses/employee-expense": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee expenses
         * @description Returns up to 100 employee expense objects from the collection with a key, ID, and link for each expense. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find expense objects that meet certain criteria and to specify the properties that are returned.
         */
        get: operations["list-expenses-employee-expense"];
        put?: never;
        /**
         * Create an employee expense
         * @description Creates a new employee expense. You must specify a unique employee expense ID when creating an employee expense unless document sequencing is configured, in which case the ID is auto-generated.
         */
        post: operations["create-expenses-employee-expense"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/employee-expense/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee-expense.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee expense
         * @description Returns detailed information for a specified employee expense.
         */
        get: operations["get-expenses-employee-expense-key"];
        put?: never;
        post?: never;
        /**
         * Delete an employee expense
         * @description Deletes an employee expense.
         */
        delete: operations["delete-expenses-employee-expense-key"];
        options?: never;
        head?: never;
        /**
         * Update an employee expense
         * @description Updates an existing employee expense by setting field values. Any fields not provided remain unchanged. Allowed values for the `state` field are `draft`, and `submitted`.
         */
        patch: operations["update-expenses-employee-expense-key"];
        trace?: never;
    };
    "/workflows/expenses/employee-expense/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reverse an employee expense
         * @description Reverses an employee expense that has a state of `posted`, `paid`, `partiallyPaid`, `approved`, or `selected`. When reversed, the employee expense transitions to `reversed`. Reversing an employee expense instead of deleting it creates a record for audit trail purposes.
         */
        post: operations["reverse-expenses-employee-expense"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/expenses/employee-expense/recall": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Recall an employee expense
         * @description Recalls an employee expense that has a state of `submitted`. When recalled, the employee expense transitions to `draft` so that it can be edited and resubmitted for approval.
         */
        post: operations["recall-expenses-employee-expense"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/employee-expense-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee expense lines
         * @description Returns a collection with a key, ID, and link for each employee expense line.
         */
        get: operations["list-expenses-employee-expense-line"];
        put?: never;
        /**
         * Create an employee expense line
         * @description Creates a new employee expense line.
         */
        post: operations["create-expenses-employee-expense-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/employee-expense-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee expense line
         * @description Returns detailed information for a specified employee expense line.
         */
        get: operations["get-expenses-employee-expense-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete an employee expense line
         * @description Deletes an employee expense line.
         */
        delete: operations["delete-expenses-employee-expense-line-key"];
        options?: never;
        head?: never;
        /**
         * Update an employee expense line
         * @description Updates an existing employee expense line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-expenses-employee-expense-line-key"];
        trace?: never;
    };
    "/objects/expenses/employee-expense-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee expense summaries
         * @description Returns a collection with a key, ID, and link for each expense summary. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-expenses-employee-expense-summary"];
        put?: never;
        /**
         * Create an employee expense summary
         * @description Creates a new employee expense summary.
         */
        post: operations["create-expenses-employee-expense-summary"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/employee-expense-summary/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense summary.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee expense summary
         * @description Returns detailed information for a specified employee expense summary.
         */
        get: operations["get-expenses-employee-expense-summary-key"];
        put?: never;
        post?: never;
        /**
         * Delete an employee expense summary
         * @description Deletes an employee expense summary.
         */
        delete: operations["delete-expenses-employee-expense-summary-key"];
        options?: never;
        head?: never;
        /**
         * Update an employee expense summary
         * @description Updates an existing employee expense summary by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-expenses-employee-expense-summary-key"];
        trace?: never;
    };
    "/objects/expenses/employee-expense-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee expense types
         * @description Returns a collection with a key, ID, and link for each employee expense type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-expenses-employee-expense-type"];
        put?: never;
        /**
         * Create an employee expense type
         * @description Creates a new employee expense type.
         */
        post: operations["create-expenses-employee-expense-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/employee-expense-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense type.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee expense type
         * @description Returns detailed information for a specified employee expense type.
         */
        get: operations["get-expenses-employee-expense-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete an employee expense type
         * @description Deletes an employee expense type.
         */
        delete: operations["delete-expenses-employee-expense-type-key"];
        options?: never;
        head?: never;
        /**
         * Update an employee expense type
         * @description Updates an existing employee expense type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-expenses-employee-expense-type-key"];
        trace?: never;
    };
    "/objects/expenses/employee-expense-payment-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee expense payment types
         * @description Returns a collection with a key, ID, and link for each employee expense payment type.
         */
        get: operations["list-expenses-employee-expense-payment-type"];
        put?: never;
        /**
         * Create an employee expense payment type
         * @description Creates a new employee expense payment type.
         */
        post: operations["create-expenses-employee-expense-payment-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/employee-expense-payment-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense payment type.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee expense payment type
         * @description Returns detailed information for a specified employee expense payment type.
         */
        get: operations["get-expenses-employee-expense-payment-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete an employee expense payment type
         * @description Deletes an employee expense payment type.
         */
        delete: operations["delete-expenses-employee-expense-payment-type-key"];
        options?: never;
        head?: never;
        /**
         * Update an employee expense payment type
         * @description Updates an existing employee expense payment type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-expenses-employee-expense-payment-type-key"];
        trace?: never;
    };
    "/objects/expenses/employee-expense-adjustment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee expense adjustments
         * @description Returns a collection with a key, ID, and link for each employee expense adjustment.
         */
        get: operations["list-expenses-employee-expense-adjustment"];
        put?: never;
        /**
         * Create an employee expense adjustment
         * @description Creates a new employee expense adjustment.
         *
         *     You must specify a unique employee expense ID when creating an employee expense unless document sequencing is configured, in which case the ID is auto-generated.
         */
        post: operations["create-expenses-employee-expense-adjustment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/employee-expense-adjustment/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee-expense-adjustment.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee expense adjustment
         * @description Returns detailed information for a specified employee expense adjustment.
         */
        get: operations["get-expenses-employee-expense-adjustment-key"];
        put?: never;
        post?: never;
        /**
         * Delete an employee expense adjustment
         * @description Deletes an employee expense adjustment.
         */
        delete: operations["delete-expenses-employee-expense-adjustment-key"];
        options?: never;
        head?: never;
        /**
         * Update an employee expense adjustment
         * @description Updates an existing employee expense adjustment by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-expenses-employee-expense-adjustment-key"];
        trace?: never;
    };
    "/objects/expenses/employee-expense-adjustment-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee expense adjustment lines
         * @description Returns a collection with a key, ID, and link for each employee expense adjustment line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-expenses-employee-expense-adjustment-line"];
        put?: never;
        /**
         * Create an employee expense adjustment line
         * @description Creates a new employee expense adjustment line.
         */
        post: operations["create-expenses-employee-expense-adjustment-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/employee-expense-adjustment-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense adjustment line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee expense adjustment line
         * @description Returns detailed information for a specified employee expense adjustment line.
         */
        get: operations["get-expenses-employee-expense-adjustment-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete an employee expense adjustment line
         * @description Deletes an employee expense adjustment line.
         */
        delete: operations["delete-expenses-employee-expense-adjustment-line-key"];
        options?: never;
        head?: never;
        /**
         * Update an employee expense adjustment line
         * @description Updates an existing employee expense adjustment line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-expenses-employee-expense-adjustment-line-key"];
        trace?: never;
    };
    "/objects/expenses/employee-expense-approval-record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee expense approval records
         * @description Returns a collection with a key, ID, and link for each employee expense approval record. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-expenses-employee-expense-approval-record"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/employee-expense-approval-record/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee expense approval record.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee expense approval record
         * @description Returns detailed information for a specified employee expense approval record.
         */
        get: operations["get-expenses-employee-expense-approval-record-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/unit-rate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List unit rates
         * @description Returns a collection with a key, ID, and link for each unit rate. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-expenses-unit-rate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/unit-rate/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the unit rate.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a unit rate
         * @description Returns detailed information for a specified unit rate.
         */
        get: operations["get-expenses-unit-rate-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/electronic-receipt": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List electronic receipts
         * @description Returns a collection with a key, ID, and link for each electronic receipt.
         */
        get: operations["list-expenses-electronic-receipt"];
        put?: never;
        /**
         * Create an electronic receipt
         * @description Creates a new electronic receipt. Specify a unique electronic receipt ID when creating an electronic receipt unless document sequencing is configured. If document sequencing is configured, then the ID is auto-generated.
         */
        post: operations["post-expenses-electronic-receipt"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/electronic-receipt/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the electronic-receipt.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an electronic receipt
         * @description Returns detailed information for a specified electronic receipt.
         */
        get: operations["get-expenses-electronic-receipt-key"];
        put?: never;
        post?: never;
        /**
         * Delete an electronic receipt
         * @description Deletes an electronic receipt.
         */
        delete: operations["delete-expenses-electronic-receipt-key"];
        options?: never;
        head?: never;
        /**
         * Update an electronic receipt
         * @description Updates an existing electronic receipt by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["patch-expenses-electronic-receipt-key"];
        trace?: never;
    };
    "/objects/expenses/electronic-receipt-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List electronic receipt lines
         * @description Returns a collection with a key, ID, and link for each electronic receipt line.
         */
        get: operations["list-expenses-electronic-receipt-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/electronic-receipt-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the electronic receipt line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an electronic receipt line
         * @description Returns detailed information for a specified electronic receipt line.
         */
        get: operations["get-expenses-electronic-receipt-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/expense-to-approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee expenses to approve
         * @description Returns a collection with a key, ID, and link for each expense to approve. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-expenses-expense-to-approve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/expense-to-approve/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the expense-to-approve.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee expense to approve
         * @description Returns detailed information for a specified expense to approve.
         */
        get: operations["get-expenses-expense-to-approve-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/expense-to-approve-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee expense lines to approve
         * @description Returns a collection with a key, ID, and link for each expense to approve line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-expenses-expense-to-approve-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/expenses/expense-to-approve-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense to approve line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an approve employee expense line
         * @description Returns detailed information for a specified expense to approve line.
         */
        get: operations["get-expenses-expense-to-approve-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
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
        /** @description Expense report for an employee. This is the header object for employee expense lines. */
        "objects.expenses.employee-expense": {
            /**
             * @description System-assigned key for the employee expense.
             * @example 124
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the employee expense. This value is the same as the key for this object.
             * @example 124
             */
            readonly id?: string;
            /**
             * Format: date
             * @description Date the employee expense was created.
             * @example 2024-11-11
             */
            createdDate?: string;
            /** @description Employee that incurred the expense. */
            employee?: {
                /**
                 * @description Unique key for the employee.
                 * @example 12345
                 */
                key?: string;
                /**
                 * @description Unique identifier for the employee.
                 * @example EMP-025
                 */
                id?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/12345
                 */
                readonly href?: string;
            };
            /** @description The contact for the employee. */
            readonly employeeContact?: {
                /**
                 * @description Unique key for the employee contact.
                 * @example 977
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the employee contact.
                 * @example Thomas, Glenn
                 */
                readonly id?: string;
                /**
                 * @description First name of the employee.
                 * @example Glenn
                 */
                readonly firstName?: string;
                /**
                 * @description Last name of the employee.
                 * @example Thomas
                 */
                readonly lastName?: string;
                /**
                 * @description URL endpoint for the employee contact.
                 * @example /objects/company-config/contact/977
                 */
                readonly href?: string;
            };
            /**
             * @description Status of the employee expense in its life cycle. Expenses are posted to the general ledger when approved.
             * @default submitted
             * @example draft
             * @enum {string}
             */
            state?: "draft" | "submitted" | "partiallyApproved" | "partiallyDeclined" | "approved" | "posted" | "declined" | "reversalPending" | "reversed" | "reversal" | "paid" | "confirmed" | "voided" | "partiallyPaid" | "selected";
            /** @description Base payment details for the employee expense report. */
            basePayment?: {
                /**
                 * @description Base currency used for the expense report and determined by company currency used for reporting.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * Format: date
                 * @description Date the employee expense was fully paid.
                 * @example 2024-11-12
                 */
                readonly paidDate?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount entered for the expense.
                 * @example 123.45
                 */
                readonly totalEntered?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount paid for the expense.
                 * @example 123.45
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount due for the expense.
                 * @example 123.45
                 */
                readonly totalDue?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Amount selected for reimbursement.
                 * @example 110.00
                 */
                readonly totalSelected?: string;
            };
            /** @description Reimbursement details. */
            reimbursement?: {
                /**
                 * @description The currency used to pay for the expense. For multi-currency companies.
                 * @example EUR
                 */
                reimbursementCurrency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total reimbursable amount.
                 * @example 123.16
                 */
                readonly totalEntered?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount paid to the employee for the expense.
                 * @example 123.16
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount due to the employee for the expense.
                 * @example 123.16
                 */
                readonly totalDue?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Amount selected for reimbursement.
                 * @example 123.16
                 */
                readonly totalSelected?: string;
            };
            /**
             * @description Report number associated with the employee expense.
             * @example EXP-00001
             */
            expenseReportNumber?: string;
            /** @description Expense summary that this expense is reported on. */
            expenseSummary?: {
                /**
                 * @description Unique key for the employee expense summary.
                 * @example 334
                 */
                key?: string;
                /**
                 * @description Unique identifier for the expense summary.
                 * @example 334
                 */
                id?: string;
                /**
                 * @description Title of the expense summary.
                 * @example Expenses 2024/01/31 batch
                 */
                readonly title?: string;
                /**
                 * Format: date
                 * @description GL posting date.
                 * @example 2024-01-23
                 */
                postingDate?: string;
                /**
                 * @description Indicates whether the expense summary is open or closed.
                 * @default open
                 * @example open
                 * @enum {string}
                 */
                readonly state?: "open" | "closed";
                /**
                 * @description Not for GL posting.
                 * @default false
                 * @example false
                 */
                readonly preventGLPosting?: boolean;
                /**
                 * @description URL endpoint for the employee expense summary.
                 * @example /objects/expenses/employee-expense-summary/334
                 */
                readonly href?: string;
            };
            /** @description Non-reimbursable portion of the expense. An expense report line is considered non-reimbursable when `employee-expense-line.isBillable` is `false` and `employee-expense-line.paymentType.isNonReimbursable` is `true`. */
            readonly nonReimbursable?: {
                /**
                 * Format: decimal-precision-2
                 * @description Non-reimbursable amount in base currency.
                 * @example 123.45
                 */
                readonly baseTotalEntered?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total non-reimbursable amount in the reimbursement currency.
                 * @example 123.45
                 */
                readonly reimbursementTotalEntered?: string;
            };
            /**
             * @description Memo.
             * @example Paid to employee
             */
            memo?: string;
            /**
             * @description Reason for the expense.
             * @example Supplies for customer training
             */
            description?: string;
            /**
             * @description If an expense is reclassified, reason for the reclassification.
             * @example Classified as supplies, not travel expense
             */
            reclassificationNotes?: string;
            /** @description An attachment for employee expenses.(Company subscription with permissions to Add and Edit Attachments.) */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 25
                 */
                key?: string;
                /**
                 * @description Unique identifier for the attachment.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/25
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            /** @description Line items of the employee expense. */
            lines?: components["schemas"]["objects.expenses.employee-expense-line"][];
            entity?: components["schemas"]["entity-ref"];
        };
        "expenses-employee-expenseRequiredProperties": Record<string, never>;
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
        "expenses-employee-expense-actions-reverse-request": {
            /**
             * @description System-assigned unique key for the employee expense.
             * @example 132
             */
            key: string;
            /**
             * Format: date
             * @description Date on which to reverse the transaction. This date must be after the `postingDate`.
             * @example 2026-03-03
             */
            reverseDate: string;
            /**
             * @description Notes or comments about this employee expense reversal.
             * @example Reversed for reposting.
             */
            notes?: string;
        };
        "expenses-employee-expense-actions-reverse-response": {
            /**
             * @description System-assigned unique key for the employee expense.
             * @example 132
             */
            key?: string;
            /**
             * @description Unique ID for the employee expense. This value is the same as the `key` for this object.
             * @example 132
             */
            id?: string;
            /**
             * @description URL endpoint for the employee expense.
             * @example /objects/expenses/employee-expense/132
             */
            href?: string;
            /**
             * @description Current state of the employee expense.
             * @example reversed
             * @enum {string}
             */
            state?: "reversed";
        };
        "expenses-employee-expense-actions-recall-request": {
            /**
             * @description System-assigned unique key for the employee expense.
             * @example 132
             */
            key: string;
        };
        "expenses-employee-expense-actions-recall-response": {
            /**
             * @description System-assigned unique key for the employee expense.
             * @example 132
             */
            key?: string;
            /**
             * @description Unique ID for the employee expense. This value is the same as the `key` for this object.
             * @example 132
             */
            id?: string;
            /**
             * @description URL endpoint for the employee expense.
             * @example /objects/expenses/employee-expense/132
             */
            href?: string;
            /**
             * @description Current state of the employee expense.
             * @example draft
             * @enum {string}
             */
            state?: "draft";
        };
        /** @description Line items in an employee expense report represent individual expenses to reimburse to the employee. */
        "objects.expenses.employee-expense-line": {
            /**
             * @description System-assigned unique key for the employee expense line.
             * @example 312
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the employee expense line. This value is the same as key for this object.
             * @example 312
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the employee expense line.
             * @example /objects/expenses/employee-expense-line/312
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Date that the expense was incurred.
             * @example 2021-01-23
             */
            entryDate?: string | null;
            /**
             * @description Base currency used for the expense report and determined by company currency used for reporting.
             * @example USD
             */
            readonly baseCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount of the expense in base currency.
             * @example 123.45
             */
            readonly baseAmount?: string;
            /**
             * @description The currency used to pay for the expense. For multi-currency companies.
             * @example CAD
             */
            readonly reimbursementCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description Reimbursement amount in the reimbursement currency.
             * @example 123.45
             */
            readonly reimbursementAmount?: string;
            /**
             * @description Transaction currency. For multi-currency companies.
             * @example INR
             */
            txnCurrency?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Transaction amount. For multi-currency companies.
             * @example 123.45
             */
            txnAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount selected to pay in transaction currency.
             * @example 123.45
             */
            readonly totalSelected?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount paid in transaction currency.
             * @example 123.45
             */
            readonly totalPaid?: string;
            /**
             * Format: decimal-precision-2
             * @description Quantity for a rate-based expense such as mileage.
             * @example 5.75
             */
            quantity?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Monetary amount for a rate-based expense, such as mileage.
             * @example 20.00
             */
            unitRate?: string | null;
            /**
             * @description Notes regarding to whom the amount was paid.
             * @example Hotel Westin
             */
            paidTo?: string | null;
            /**
             * @description Notes regarding what the expense was for.
             * @example 2024 Hawaii Conference
             */
            paidFor?: string | null;
            /** @description General ledger account associated with the line item. Used when no expense type is assigned. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 158
                 */
                key?: string;
                /**
                 * @description Unique identifier for the GL account.
                 * @example 6775.30
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example Travel
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/158
                 */
                readonly href?: string;
            };
            /** @description An expense type defined in the company. */
            expenseType?: {
                /**
                 * @description Unique key for the expense type.
                 * @example 6000
                 */
                key?: string;
                /**
                 * @description Unique identifier for the expense type.
                 * @example Meals
                 */
                id?: string;
                /**
                 * @description URL endpoint for the expense type.
                 * @example /objects/expense-type/6000
                 */
                readonly href?: string;
            };
            /**
             * @description Line number of the employee expense.
             * @example 1
             */
            readonly lineNumber?: number;
            /** @description Details of reimbursement currency to base currency conversion. For multi-currency companies. */
            readonly reimburseToBaseConversion?: {
                /**
                 * Format: date
                 * @description Date the exchange rate conversion was applied.
                 * @example 2021-01-23
                 */
                readonly exchangeRateDate?: string;
                /**
                 * @description Type of the expense line exchange rate.
                 * @example -1
                 */
                readonly exchangeRateTypeId?: string;
                /**
                 * Format: decimal-precision-5
                 * @description Value of the expense line exchange rate.
                 * @example 1.18999
                 */
                readonly exchangeRate?: string;
            };
            /** @description Details of the conversion to base currency. For multi-currency companies. */
            transactionToReimburseConversion?: {
                /**
                 * Format: decimal-precision-5
                 * @description Exchange rate for the transaction.
                 * @example 65.095
                 */
                exchangeRate?: string | null;
                /**
                 * Format: date
                 * @description Date for the exchange rate.
                 * @example 2021-01-23
                 */
                exchangeRateDate?: string | null;
                /**
                 * @deprecated
                 * @description Exchange rate type. This field is deprecated,  please use `exchangeRateType` instead.
                 */
                exchangeRateTypeId?: string | null;
                exchangeRateType?: {
                    /**
                     * @description Unique identifier for the exchange rate type.
                     * @example 124
                     */
                    id?: string;
                    /**
                     * @description Unique key for the exchange rate type.
                     * @example 124
                     */
                    key?: string;
                    /**
                     * @description URL endpoint for the exchange rate type.
                     * @example /objects/company-config/exchange-rate-type/124
                     */
                    readonly href?: string;
                };
            };
            /**
             * @description Status of the employee expense report line.
             * @default submitted
             * @example draft
             * @enum {string|null}
             */
            readonly state?: "draft" | "submitted" | "partiallyApproved" | "partiallyDeclined" | "approved" | "posted" | "declined" | "reversalPending" | "reversed" | "reversal" | "paid" | "confirmed" | "voided" | "partiallyPaid" | "saved" | null;
            /**
             * @description Indicates whether a line item is billable.
             * @default false
             * @example false
             */
            isBillable?: boolean;
            /**
             * @description Indicates whether a line item is billed.
             * @default false
             * @example false
             */
            readonly isBilled?: boolean;
            /** @description Form 1099 information for the line item. */
            form1099?: {
                /**
                 * @description If set to true, the line item amount is added to the form 1099.
                 * @example true
                 */
                isForm1099?: string | null;
                /**
                 * @description Type of form 1099.
                 * @example MISC
                 */
                type?: string | null;
                /**
                 * @description Box value of form 1099.
                 * @example 3
                 */
                box?: string | null;
            };
            /** @description The payment type defined in `employee-expense-payment-type`. */
            paymentType?: {
                /**
                 * @description Unique key for the expense payment type.
                 * @example 23
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the payment type.
                 * @example Non-reimburse
                 */
                id?: string | null;
                /**
                 * @description Non-reimbursable expense as defined in `employee-expense-payment-type.isNonReimbursable`.
                 * @default false
                 * @example false
                 */
                readonly isNonReimbursable?: boolean;
                /**
                 * @description URL endpoint for the payment type.
                 * @example /objects/expenses/employee-expense-payment-type/23
                 */
                readonly href?: string;
            };
            /** @description Credit card transaction associated with the employee expense. Available if "Enable electronic receipt inbounding" is enabled for the company. */
            readonly creditCardTxn?: {
                /**
                 * @description Unique identifier for the credit card transaction.
                 * @example 124
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the credit card transaction.
                 * @example 124
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the credit card transaction.
                 * @example /objects/cash-management/credit-card-txn/124
                 */
                readonly href?: string;
            };
            /** @description Credit card transaction associated with the employee expense line. When linked to an electronic receipt, if the electronic receipt amount differs from the credit card transaction amount, the credit card transaction amount takes precedence. */
            creditCardTxnLine?: {
                /**
                 * @description Unique identifier for the credit card transaction line.
                 * @example 128
                 */
                id?: string;
                /**
                 * @description Unique key for the credit card transaction line.
                 * @example 128
                 */
                key?: string;
                /**
                 * @description URL endpoint for the credit card transaction line.
                 * @example /objects/cash-management/credit-card-txn-line/128
                 */
                readonly href?: string;
            };
            /** @description Electronic receipt associated with the employee expense. Available if "Enable electronic receipt inbounding" is enabled for the company. */
            electronicReceipt?: {
                /**
                 * @description Unique identifier for the electronic receipt.
                 * @example 124
                 */
                id?: string;
                /**
                 * @description Unique key for the electronic receipt.
                 * @example 124
                 */
                key?: string;
                /**
                 * @description URL endpoint for the electronic receipt.
                 * @example /objects/expenses/electronic-receipt/124
                 */
                readonly href?: string;
            };
            /** @description Electronic receipt line associated with the employee expense. When linked to a credit card transaction, if the electronic receipt amount differs from the credit card transaction amount, the credit card transaction amount takes precedence. */
            electronicReceiptLine?: {
                /**
                 * @description Unique identifier for the electronic receipt line.
                 * @example 128
                 */
                id?: string;
                /**
                 * @description Unique key for the electronic receipt line.
                 * @example 128
                 */
                key?: string;
                /**
                 * @description URL endpoint for the electronic receipt.
                 * @example /objects/expenses/electronic-receipt-line/128
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            dimensions?: components["schemas"]["dimension-ref"] & {
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the location.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Location name
                     * @example USA
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/1
                     */
                    readonly href?: string;
                };
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 12
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the department.
                     * @example 12
                     */
                    id?: string | null;
                    /**
                     * @description Department name
                     * @example IT
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/12
                     */
                    readonly href?: string;
                };
            };
            employeeExpense?: {
                /**
                 * @description Unique identifier for the employee expense.
                 * @example 124
                 */
                id?: string;
                /**
                 * @description Unique key for the employee expense.
                 * @example 124
                 */
                key?: string;
                /**
                 * @description URL endpoint for the employee expense.
                 * @example /objects/expenses/employee-expense/124
                 */
                readonly href?: string;
            };
        };
        "expenses-employee-expense-lineRequiredProperties": Record<string, never>;
        /** @description Collection of expense transactions, grouped together for processing. */
        "objects.expenses.employee-expense-summary": {
            /**
             * @description System-assigned unique key for the employee expense summary.
             * @example 13
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the employee expense summary. This value is the same as the key for this object.
             * @example 13
             */
            readonly id?: string;
            /**
             * @description Title of the summary.
             * @example Expenses - Expenses (USD) Q3 Batch
             */
            name?: string;
            /**
             * Format: date
             * @description The GL posting date for the expense summary.
             * @example 2021-01-23
             */
            postingDate?: string;
            /**
             * Format: decimal-precision-2
             * @description Total amount of all employee expenses in the summary.
             * @example 100.00
             */
            readonly totalAmount?: string | null;
            /**
             * @description State of the employee expense summary.
             * @default open
             * @example open
             * @enum {string}
             */
            state?: "open" | "closed";
            /**
             * @description Record type
             * @example expense
             * @enum {string}
             */
            readonly recordType?: "expense" | "adjustment" | "reimbursement";
            /**
             * @description If set to manual, then the summary was created by a user. If set to system, then the summary was created by Sage Intacct based on the summary frequency.
             *
             *     Automatic summaries are created according to time intervals chosen by the expense administrator. Expense reports are grouped within the summary created for the time interval in which they were received.
             * @default manual
             * @example manual
             * @enum {string}
             */
            readonly summaryCreationType?: "system" | "manual";
            /** @description Bank account associated with the summary. */
            readonly bankAccount?: {
                /**
                 * @description Unique key for the bank account.
                 * @example 1
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier of the bank account.
                 * @example BOA
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the bank account.
                 * @example /objects/cash-management/bank-account/1
                 */
                readonly href?: string;
            };
            /**
             * @description If `false`, the summary is posted to the General Ledger.
             * @default false
             * @example false
             */
            readonly preventGLPosting?: boolean;
            /**
             * @description URL endpoint for the employee expense summary.
             * @example /objects/expenses/employee-expense-summary/13
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
        };
        "expenses-employeeExpenseSummaryRequiredProperties": Record<string, never>;
        /** @description Details for an employee expense type. */
        "objects.expenses.employee-expense-type": {
            /**
             * @description System-assigned key for the employee expense type.
             * @example 47
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the employee expense type.
             * @example Travel
             */
            id?: string;
            status?: components["schemas"]["status"];
            /**
             * @description Description of the employee expense type.
             * @example Non-reimbursable expense for travel
             */
            description?: string;
            /**
             * @description URL endpoint for the expense type.
             * @example /objects/expenses/employee-expense-type/47
             */
            readonly href?: string;
            /** @description GL account assigned to the employee expense type. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 5500
                 */
                key?: string;
                /**
                 * @description Unique identifier for the GL account.
                 * @example Travel expenses
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example Automobile expenses
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/5500
                 */
                readonly href?: string;
            };
            /** @description Offset account assigned to the employee expense type or the default GL account for employee liabilities. */
            offsetGLAccount?: {
                /**
                 * @description Unique key for the offset GL account.
                 * @example 6000
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the offset GL account.
                 * @example Offset travel expenses
                 */
                id?: string | null;
                /**
                 * @description Name of the offset GL account.
                 * @example Offset automobile expenses
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the offset GL account.
                 * @example /objects/general-ledger/account/6000
                 */
                readonly href?: string;
            };
            /** @description Defined category of expense, such as software, meals or training. (Projects subscription) */
            item?: {
                /**
                 * @description Unique key for the item.
                 * @example 311
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the item.
                 * @example 10
                 */
                id?: string | null;
                /**
                 * @description Name of the item.
                 * @example Laptop
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/311
                 */
                readonly href?: string;
            };
            /**
             * @description Currency of the transaction amount for multi-currency companies and rate-based expenses.
             * @example USD
             */
            unitCurrency?: string | null;
            /** @description Form 1099 information for the employee expense type. */
            readonly form1099?: {
                /**
                 * @description Type of form 1099.
                 * @example MISC
                 */
                readonly type?: string | null;
                /**
                 * @description Box value of form 1099.
                 * @example 3
                 */
                readonly box?: string | null;
            };
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
            /** @description Line items of the employee expense type. */
            unitRates?: components["schemas"]["objects.expenses.unit-rate"][];
        };
        "expenses-employee-expense-typeRequiredProperties": Record<string, never>;
        /** @description User-defined payment type for a line item of an employee expense report or an expense adjustment. */
        "objects.expenses.employee-expense-payment-type": {
            /**
             * @description System-assigned key for the employee expense payment type.
             * @example 10
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the employee expense payment type.
             * @example Non-reimburse
             */
            id?: string;
            /**
             * @description Description of the employee expense payment type.
             * @example Non-reimbursable payment
             */
            description?: string | null;
            /**
             * @description If set to `true`, the employee expense payment type is not reimbursable.
             * @default false
             * @example true
             */
            isNonReimbursable?: boolean;
            /** @description Offset account assigned to the employee expense payment type. */
            offsetGLAccount?: {
                /**
                 * @description Unique key for the offset GL account.
                 * @example 70
                 */
                key?: string | null;
                /**
                 * @description Unique identifier of the offset GL account.
                 * @example 2420
                 */
                id?: string | null;
                /**
                 * @description Name of the offset GL account.
                 * @example EE-Office Supplies
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the offset GL account.
                 * @example /objects/general-ledger/account/70
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the employee expense payment type.
             * @example /objects/expenses/employee-expense-payment-type/10
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        employeeExpensePaymentTypeRequiredProperties: Record<string, never>;
        /** @description Expense adjustment for an employee. */
        "objects.expenses.employee-expense-adjustment": {
            /**
             * @description System-assigned key for the employee expense adjustment.
             * @example 124
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the employee expense adjustment. This value is the same as the key for this object.
             * @example 124
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the employee expense adjustment.
             * @example /objects/company-config/user-group/124
             */
            readonly href?: string;
            /**
             * @description Adjustment type. Options are credit (increases the amount due to the employee) or debit (decreases the amount due to the employee).
             * @default debit
             * @example debit
             * @enum {string}
             */
            adjustmentType?: "debit" | "credit";
            /** @description The expense report to which the adjustment applies. */
            referenceEmployeeExpense?: {
                /**
                 * @description Unique key for the referenced employee expense.
                 * @example 2534
                 */
                key?: string;
                /**
                 * @description Unique identifier for the referenced employee expense.
                 * @example 124
                 */
                id?: string;
                /**
                 * @description URL endpoint for the employee expense.
                 * @example /objects/expenses/employee-expense/2534
                 */
                readonly href?: string;
            };
            /**
             * @description Description of the employee expense adjustment.
             * @example Corrects underpayment of mileage for conference travel.
             */
            description?: string;
            /**
             * Format: date
             * @description Creation date of the employee expense adjustment.
             * @example 2025-01-23
             */
            createdDate?: string;
            /** @description Employee that incurred the expense adjustment. */
            employee?: {
                /**
                 * @description Unique key for the employee.
                 * @example 482
                 */
                key?: string;
                /**
                 * @description Unique identifier for the employee.
                 * @example EMP-025
                 */
                id?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/482
                 */
                readonly href?: string;
            };
            /** @description The contact for the employee. */
            readonly employeeContact?: {
                /**
                 * @description Unique key for the employee contact.
                 * @example 973
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the employee contact.
                 * @example Thomas, Glenn
                 */
                readonly id?: string;
                /**
                 * @description First name of the employee contact.
                 * @example Glenn
                 */
                readonly firstName?: string;
                /**
                 * @description Last name of the employee contact.
                 * @example Thomas
                 */
                readonly lastName?: string;
                /**
                 * @description URL endpoint for the employee contact.
                 * @example /objects/company-config/contact/973
                 */
                readonly href?: string;
            };
            /**
             * @description Status of the employee expense adjustment. Expense adjustments are posted to the general ledger when approved.
             * @default submitted
             * @example draft
             * @enum {string|null}
             */
            state?: "draft" | "approved" | "partiallyApproved" | "submitted" | "declined" | "partiallyDeclined" | "resubmitted" | "selected" | "paid" | "partiallyPaid" | null;
            /** @description Base payment details for the employee expense adjustment report. */
            basePayment?: {
                /**
                 * @description Base currency used for the employee expense adjustment report. The currency is determined by the company's default currency for reporting.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * Format: date
                 * @description Date when the employee expense adjustment was fully paid.
                 * @example 2025-01-23
                 */
                readonly paidDate?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount entered for the payment.
                 * @example 123.45
                 */
                readonly totalEntered?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount paid for the employee expense adjustment.
                 * @example 123.45
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount due for the employee expense adjustment.
                 * @example 123.45
                 */
                readonly totalDue?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Amount selected for the employee expense adjustment.
                 * @example 110.00
                 */
                readonly totalSelected?: string;
            };
            /** @description Reimbursement details for the employee expense adjustment. */
            reimbursement?: {
                /**
                 * @description For companies that use multiple transaction currencies, the currency used to pay for the reimbursement.
                 * @example EUR
                 */
                reimbursementCurrency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total reimbursable amount.
                 * @example 123.16
                 */
                readonly totalEntered?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount paid for the employee expense adjustment reimbursement.
                 * @example 123.16
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount due for the employee expense adjustment reimbursement; amount can differ from the `totalPaid`.
                 * @example 123.16
                 */
                readonly totalDue?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Amount selected for employee expense adjustment reimbursement.
                 * @example 123.16
                 */
                readonly totalSelected?: string;
            };
            /**
             * @description Adjustment report number associated with the employee expense adjustment. This field is auto-populated if Time & Expense is configured to auto-number credit and debit adjustments using Company Document sequences.
             * @example EXP-00001
             */
            expenseAdjustmentReportNumber?: string;
            /** @description Expense summary that this expense is reported on. */
            expenseSummary?: {
                /**
                 * @description Unique key for the employee expense summary.
                 * @example 334
                 */
                key?: string;
                /**
                 * @description Unique identifier for the expense summary.
                 * @example 334
                 */
                id?: string;
                /**
                 * @description Title of the employee expense summary.
                 * @example Expenses 2024/01/31 batch
                 */
                readonly title?: string;
                /**
                 * Format: date
                 * @description The general ledger posting date for the employee expense summary.
                 * @example 2025-01-23
                 */
                postingDate?: string;
                /**
                 * @description Indicates whether the expense summary is open or closed.
                 * @default open
                 * @example open
                 * @enum {string}
                 */
                readonly state?: "open" | "closed";
                /**
                 * @description Indicates whether the expense summary is posted to the general ledger.
                 * @default false
                 * @example false
                 */
                readonly preventGLPosting?: boolean;
                /**
                 * @description URL endpoint for the employee expense summary.
                 * @example /objects/expenses/employee-expense-summary/334
                 */
                readonly href?: string;
            };
            /** @description Non-reimbursable amount of the employee expense adjustment. */
            nonReimbursable?: {
                /**
                 * Format: decimal-precision-2
                 * @description Total non-reimbursable amount in base currency.
                 * @example 123.45
                 */
                readonly baseTotalEntered?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total reimbursable amount in base currency.
                 * @example 123.45
                 */
                readonly reimbursementTotalEntered?: string;
            };
            /**
             * @description Memo about the employee expense adjustment.
             * @example Paid by employee.
             */
            memo?: string;
            /**
             * @description Reason for the reclassification.
             * @example Classified as supplies, not travel expense adjustment
             */
            reclassificationNotes?: string;
            /** @description An attachment for employee expense adjustment. Can include scanned or digital receipts. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 152
                 */
                key?: string;
                /**
                 * @description Unique identifier of the attachment.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/152
                 */
                readonly href?: string;
            };
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            /** @description Line items of the employee expense adjustment. */
            lines?: components["schemas"]["objects.expenses.employee-expense-adjustment-line"][];
        };
        /** @description Line items in an employee expense adjustment and represent debits or credits payable to an employee. */
        "objects.expenses.employee-expense-adjustment-line": {
            /**
             * @description System-assigned key for the employee expense adjustment line item.
             * @example 312
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the employee expense adjustment line item. This value is the same as the key for this object.
             * @example 312
             */
            readonly id?: string;
            /**
             * Format: date
             * @description Date the adjustment item is filed.
             * @example 2025-01-23
             */
            entryDate?: string;
            /**
             * @description Base currency of the expense adjustment.
             * @example USD
             */
            readonly baseCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount of the expense adjustment in base currency.
             * @example 123.45
             */
            readonly baseAmount?: string;
            /**
             * @description In multi-currency companies, the currency used to pay for the reimbursement.
             * @example CAD
             */
            readonly reimbursementCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description Reimbursement amount.
             * @example 123.45
             */
            readonly reimbursementAmount?: string;
            /**
             * @description In multi-currency companies, the currency used for the transaction.
             * @example INR
             */
            txnCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description Transaction amount.
             * @example 123.45
             */
            txnAmount?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Amount selected to pay in transaction currency.
             * @example 123.45
             */
            readonly totalSelected?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount paid in transaction currency.
             * @example 123.45
             */
            readonly totalPaid?: string;
            /**
             * Format: decimal-precision-2
             * @description Quantity for a rate-based expense adjustment, such as mileage.
             * @example 5.75
             */
            quantity?: string;
            /**
             * Format: decimal-precision-6
             * @description Monetary amount for a rate-based expense adjustment, such as mileage.
             * @example 20.000000
             */
            unitRate?: string;
            /**
             * @description Notes regarding to whom the amount was paid.
             * @example Hotel Westin
             */
            paidTo?: string;
            /** @description General ledger account associated with the line item. Used when no expense adjustment type is assigned. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 158
                 */
                key?: string;
                /**
                 * @description Unique identifier for the GL account.
                 * @example 6775.30
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example Travel
                 */
                readonly name?: string;
                /**
                 * @description Endpoint for the GL account object.
                 * @example /objects/general-ledger/account/23
                 */
                readonly href?: string;
            };
            /** @description An expense type defined in the company. */
            expenseType?: {
                /**
                 * @description Unique key for the expense type.
                 * @example 6000
                 */
                key?: string;
                /**
                 * @description Unique identifier for the expense type.
                 * @example Meals
                 */
                id?: string;
                /**
                 * @description Endpoint for the expense type object.
                 * @example /objects/expense-type/34
                 */
                readonly href?: string;
            };
            /**
             * @description Line number of the employee expense adjustment.
             * @example 1
             */
            readonly lineNumber?: number;
            /** @description Details of reimbursement currency to base currency conversion. */
            reimburseToBaseConversion?: {
                /**
                 * Format: date
                 * @description Date the exchange rate conversion was applied.
                 * @example 2025-01-23
                 */
                readonly exchangeRateDate?: string;
                /**
                 * @description Type of the expense adjustment line exchange rate.
                 * @example -1
                 */
                readonly exchangeRateTypeId?: string;
                /**
                 * Format: decimal-precision-5
                 * @description Value of the expense adjustment line exchange rate.
                 * @example 1.18999
                 */
                readonly exchangeRate?: string;
            };
            /** @description Details of the conversion to base currency. */
            transactionToReimburseConversion?: {
                /**
                 * Format: decimal-precision-5
                 * @description Exchange rate for the transaction.
                 * @example 65
                 */
                exchangeRate?: string;
                /**
                 * Format: date
                 * @description Date for the exchange rate.
                 * @example 2025-01-23
                 */
                exchangeRateDate?: string;
                /**
                 * @description Exchange rate type.
                 * @example -1
                 */
                exchangeRateTypeId?: string;
            };
            /**
             * @description Status of the employee expense adjustment report line.
             * @default submitted
             * @example draft
             * @enum {string|null}
             */
            readonly state?: "draft" | "submitted" | "partiallyApproved" | "partiallyDeclined" | "approved" | "posted" | "declined" | "reversalPending" | "reversed" | "reversal" | "paid" | "confirmed" | "voided" | "partiallyPaid" | "saved" | null;
            /**
             * @description Indicates whether a line item is billable.
             * @default false
             * @example false
             */
            isBillable?: boolean;
            /**
             * @description Indicates whether a line item is billed.
             * @default false
             * @example false
             */
            readonly isBilled?: boolean;
            paymentType?: {
                /**
                 * @description Unique key for the expense payment type.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the expense payment type.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description Name of the expense payment type.
                 * @example Non-reimburse
                 */
                name?: string;
                /**
                 * @description Non-reimbursable expense.
                 * @default false
                 * @example false
                 */
                isNonReimbursable?: boolean;
                /** @example /objects/expenses/employee-expense-payment-type/1 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            dimensions?: components["schemas"]["dimension-ref"] & {
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 1
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the location.
                     * @example 1
                     */
                    id?: string;
                    /**
                     * @description Location name
                     * @example USA
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint of the location.
                     * @example /objects/company-config/location/1
                     */
                    readonly href?: string;
                };
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 12
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the department.
                     * @example 12
                     */
                    id?: string;
                    /**
                     * @description Department name
                     * @example IT
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint of the department.
                     * @example /objects/company-config/department/12
                     */
                    readonly href?: string;
                };
            };
            employeeExpenseAdjustment?: {
                /**
                 * @description Unique identifier for the employee expense adjustment.
                 * @example 138
                 */
                id?: string;
                /**
                 * @description Unique key for the employee expense adjustment.
                 * @example 138
                 */
                key?: string;
                /**
                 * @description URL endpoint for the employee expense adjustment.
                 * @example /objects/expenses/employee-expense-adjustment/138
                 */
                readonly href?: string;
            };
        };
        /** @description Records the history of employee expense approval actions, including expense report details. */
        "objects.expenses.employee-expense-approval-record": {
            /**
             * @description System-assigned unique key for the employee expense approval record.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the employee expense approval record. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the employee expense approval record.
             * @example /objects/expenses/employee-expense-approval-record/23
             */
            readonly href?: string;
            /** @description Employee expense associated with this approval record. */
            readonly employeeExpense?: {
                /**
                 * @description ID for the employee expense.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the employee expense.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the employee expense.
                 * @example /objects/expenses/employee-expense/100
                 */
                readonly href?: string;
            };
            /** @description Employee expense line associated with this approval record. */
            readonly employeeExpenseLine?: {
                /**
                 * @description ID for the employee expense line.
                 * @example 1001
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the employee expense line.
                 * @example 1001
                 */
                readonly key?: string;
                /**
                 * @description Line number of the employee expense line.
                 * @example 1
                 */
                readonly lineNumber?: number;
                /**
                 * @description URL endpoint for the employee expense line.
                 * @example /objects/expenses/employee-expense-line/1001
                 */
                readonly href?: string;
            };
            /**
             * @description Stage number in the expense approval workflow.
             * @example 2
             */
            approvalStage?: number;
            /**
             * @description Type of approval applied to the employee expense.
             * @example User Level
             */
            readonly approvalType?: string;
            /**
             * @description Level within the approval workflow.
             * @example 1
             */
            readonly approvalLevel?: string;
            /**
             * @description Comments entered during the approval or decline action.
             * @example Approved by Admin
             */
            readonly comments?: string | null;
            /**
             * Format: date
             * @description Date when the approval or decline action occurs.
             * @example 2026-01-23
             */
            readonly recordDate?: string;
            /**
             * @description Current state of the employee expense approval record.
             * @example approved
             * @enum {string}
             */
            readonly state?: "submitted" | "pendingApproval" | "approved" | "declined";
            /** @description Value approval data for this employee expense approval record. */
            readonly valueApprovalInformation?: {
                /**
                 * @description Value approval currency.
                 * @example USD
                 */
                readonly currency?: string | null;
                /**
                 * Format: date
                 * @description Value approval exchange rate date.
                 * @example 2026-01-23
                 */
                readonly exchangeRateDate?: string | null;
                /**
                 * @description Value approval exchange rate type.
                 * @example 1
                 */
                readonly exchangeRateTypeId?: string | null;
                /**
                 * @description Value approval exchange rate.
                 * @example 1.23
                 */
                readonly exchangeRate?: string | null;
                /**
                 * @description Value approval amount.
                 * @example 100
                 */
                readonly amount?: string | null;
            };
            /** @description User who approved or declined the employee expense. */
            readonly approvedBy?: {
                /**
                 * @description Unique key for the user.
                 * @example 123
                 */
                readonly key?: string;
                /**
                 * @description ID for the user.
                 * @example EMP-123
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/123
                 */
                readonly href?: string;
            };
            /** @description User designated to approve or decline this employee expense. */
            readonly approver?: {
                /**
                 * @description Unique key for the user.
                 * @example 130
                 */
                readonly key?: string;
                /**
                 * @description ID for the user.
                 * @example EMP-130
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/130
                 */
                readonly href?: string;
            };
            /** @description User who submitted the employee expense for approval. */
            readonly createdBy?: {
                /**
                 * @description Unique key for the user.
                 * @example 1233
                 */
                readonly key?: string;
                /**
                 * @description ID for the user.
                 * @example EMP-1233
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/1233
                 */
                readonly href?: string;
            };
        };
        /** @description unit rate for a specific employee expense type */
        "objects.expenses.unit-rate": {
            /**
             * @description System-assigned unique key for the unit rate.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the unit rate. This value is the same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the unit rate.
             * @example /objects/expenses/unit-rate/23
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-4
             * @description The unit rate to use for an expense reimbursement to produce the reimbursement amount (`unitrate` multiplied by `expenses.employee-expense-line.quantity`).
             * @example 10
             */
            rate?: string;
            /**
             * Format: date
             * @description The employee start date, (`company-config.employee.startDate`) that determines when the unit rate takes effect.
             * @example 2021-01-23
             */
            startDate?: string;
            audit?: components["schemas"]["audit.s1"];
            /** @description A user-defined type that associates a certain type of expense with a GL account. */
            readonly employeeExpenseType?: {
                /**
                 * @description Unique key for the employee expense type.
                 * @example 47
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier of the employee expense type.
                 * @example 47
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the employee expense type.
                 * @example /objects/employee-expense-type/47
                 */
                readonly href?: string;
            };
        };
        /** @description Electronic receipt for an employee. */
        "objects.expenses.electronic-receipt": {
            /**
             * @description System-assigned unique key for the electronic receipt.
             * @example 124
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the electronic receipt. This value is the same as the key for this object.
             * @example 124
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the electronic receipt.
             * @example /objects/expenses/electronic-receipt/124
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Date the electronic receipt was created.
             * @example 2021-01-23
             */
            createdDate?: string;
            /** @description Employee that incurred the expense. */
            employee?: {
                /**
                 * @description Unique key for the employee.
                 * @example 259
                 */
                key?: string;
                /**
                 * @description Unique ID for the employee.
                 * @example 259
                 */
                id?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/259
                 */
                readonly href?: string;
            };
            /** @description The contact for the employee. */
            readonly employeeContact?: {
                /**
                 * @description Unique key for the contact.
                 * @example 977
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the contact.
                 * @example Thomas, Glenn
                 */
                readonly id?: string;
                /**
                 * @description First name of the employee.
                 * @example Glenn
                 */
                readonly firstName?: string;
                /**
                 * @description Last name of the employee.
                 * @example Thomas
                 */
                readonly lastName?: string;
                /**
                 * @description URL endpoint for the contact.
                 * @example /objects/company-config/contact/977
                 */
                readonly href?: string;
            };
            /**
             * @description Status of the electronic receipt in the expense cycle.
             * @default draft
             * @example draft
             * @enum {string}
             */
            state?: "draft" | "used" | "review" | "analyzing";
            /**
             * @description Alpha-numeric string associated with the electronic receipt.
             * @example EXP-00001
             */
            receiptNumber?: string;
            /**
             * @description Reason for and description of the receipt.
             * @example Supplies for customer training.
             */
            description?: string;
            /**
             * @description Transaction currency.
             * @example USD
             */
            readonly currency?: string;
            /**
             * Format: decimal-precision-2
             * @description Total receipt amount.
             * @example 123.16
             */
            readonly totalAmount?: string;
            /**
             * @description Base currency for the electronic receipt.
             * @example USD
             */
            readonly baseCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description Total transaction amount in base currency.
             * @example 123.45
             */
            readonly baseTotal?: string;
            /** @description Attachment for an electronic receipt that is scanned or is a digital receipt. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Unique ID for the attachment.
                 * @example 10
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/10
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            entity?: components["schemas"]["entity-ref"];
            /** @description Line items of the electronic receipt. */
            lines?: components["schemas"]["objects.expenses.electronic-receipt-line"][];
        };
        "electronic-receiptRequiredProperties": Record<string, never>;
        /** @description An individual line on an employee electronic receipt. */
        "objects.expenses.electronic-receipt-line": {
            /**
             * @description System-assigned unique key for the electronic receipt line.
             * @example 312
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the electronic receipt line. This value is the same as the key for this object.
             * @example 312
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the electronic receipt line.
             * @example /objects/expenses/electronic-receipt-line/312
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Date filed.
             * @example 2025-01-23
             */
            entryDate?: string;
            /**
             * @description Transaction currency of the receipt.
             * @example INR
             */
            currency?: string;
            /**
             * Format: decimal-precision-2
             * @description Transaction amount.
             * @example 123.45
             */
            txnAmount?: string | null;
            /**
             * @description Base currency of the receipt.
             * @example USD
             */
            readonly baseCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount of the expense in base currency.
             * @example 123.45
             */
            readonly baseAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Quantity for a rate-based receipt, such as for mileage.
             * @example 5.75
             */
            quantity?: string;
            /**
             * Format: decimal-precision-2
             * @description Monetary amount for a rate-based receipt, such as for mileage.
             * @example 20.00
             */
            unitRate?: string;
            /**
             * @description Notes regarding to whom you paid the amount.
             * @example Hotel Westin
             */
            paidTo?: string;
            /**
             * @description Notes regarding what the receipt was for.
             * @example Attending conference
             */
            paidFor?: string;
            /** @description General ledger account associated with the line item. Used when no expense type is assigned. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 158
                 */
                key?: string;
                /**
                 * @description Unique identifier for the GL account.
                 * @example 158
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example Travel
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/158
                 */
                readonly href?: string;
            };
            /** @description An expense type defined in the company. */
            expenseType?: {
                /**
                 * @description Unique key for the expense type.
                 * @example 6000
                 */
                key?: string;
                /**
                 * @description Unique identifier for the expense type.
                 * @example Meals
                 */
                id?: string;
                /**
                 * @description URL endpoint for the expense type.
                 * @example /objects/expenses/expense-type/6000
                 */
                readonly href?: string;
            };
            /**
             * @description Line number of the electronic receipt.
             * @example 1
             */
            readonly lineNumber?: number;
            /**
             * @description Status of the employee electronic receipt line.
             * @example draft
             * @enum {string}
             */
            readonly state?: "draft" | "used" | "review" | "analyzing";
            audit?: components["schemas"]["audit.s1"];
            dimensions?: components["schemas"]["dimension-ref"] & {
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the location.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Location name
                     * @example USA
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/1
                     */
                    readonly href?: string;
                };
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 12
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the department.
                     * @example 12
                     */
                    id?: string | null;
                    /**
                     * @description Department name
                     * @example IT
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/12
                     */
                    readonly href?: string;
                };
            };
            readonly electronicReceipt?: {
                /**
                 * @description Unique identifier for the electronic receipt.
                 * @example 124
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the electronic receipt.
                 * @example 124
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the electronic receipt.
                 * @example /objects/expenses/electronic-receipt/124
                 */
                readonly href?: string;
            };
        };
        /** @description Details of the employee expense report sent for approval. */
        "objects.expenses.expense-to-approve": {
            /**
             * @description System-assigned unique key for the employee expense submitted for approval.
             * @example 124
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the expense to approve. This value is the same as the key for this object.
             * @example 124
             */
            readonly id?: string;
            /**
             * Format: date
             * @description Date the employee expense is created.
             * @example 2025-01-23
             */
            createdDate?: string;
            /** @description Employee who incurred the expense. */
            employee?: {
                /**
                 * @description Unique key for the employee.
                 * @example 47
                 */
                key?: string;
                /**
                 * @description Unique ID for the employee.
                 * @example EMP-025
                 */
                id?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/47
                 */
                readonly href?: string;
            };
            employeeContact?: {
                /**
                 * @description Unique key for the employee contact.
                 * @example 973
                 */
                key?: string;
                /**
                 * @description Unique ID of the employee contact.
                 * @example Thomas, Glenn
                 */
                readonly id?: string;
                /**
                 * @description First name of the employee.
                 * @example Glenn
                 */
                readonly firstName?: string;
                /**
                 * @description Last name of the employee.
                 * @example Thomas
                 */
                readonly lastName?: string;
                /**
                 * @description The contact's name as it will appear on bills, invoices, AR statements, advances, adjustments, checks, expense reports, expense reimbursements, and 1099s.
                 * @example Reuben Kincaid
                 */
                printAs?: string;
                /**
                 * @description Endpoint for the contact.
                 * @example /objects/company-config/contact/973
                 */
                readonly href?: string;
            };
            /**
             * @description Status of the employee expense. Expenses are posted to the general ledger when approved.
             * @default submitted
             * @example draft
             * @enum {string}
             */
            state?: "draft" | "submitted" | "partiallyApproved" | "partiallyDeclined" | "approved" | "declined" | "reversed" | "reversal" | "reversedOrReversal" | "paid" | "partiallyPaid" | "resubmitted" | "selected";
            /** @description Base payment for the employee expense report. */
            basePayment?: {
                /**
                 * @description Base currency for the employee expense report.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * Format: date
                 * @description Date the employee expense was fully paid.
                 * @example 2021-01-23
                 */
                readonly paidDate?: string;
                /**
                 * @description Total transaction amount.
                 * @example 123.45
                 */
                readonly totalEntered?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount paid.
                 * @example 123.45
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount due.
                 * @example 123.45
                 */
                readonly totalDue?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Amount selected for reimbursement.
                 * @example 110.00
                 */
                readonly totalSelected?: string;
            };
            /** @description Reimbursement */
            reimbursement?: {
                /**
                 * @description Reimbursement currency.
                 * @example EUR
                 */
                reimbursementCurrency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total reimbursable amount.
                 * @example 123.16
                 */
                readonly totalEntered?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount paid.
                 * @example 123.16
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount due.
                 * @example 123.16
                 */
                readonly totalDue?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Amount selected for reimbursement.
                 * @example 123.16
                 */
                readonly totalSelected?: string;
            };
            /**
             * @description Report number associated with the employee expense.
             * @example EXP-00001
             */
            expenseReportNumber?: string;
            /** @description Expense summary that this expense is reported on. */
            readonly expenseSummary?: {
                /**
                 * @description Unique key for the employee expense summary.
                 * @example 334
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the employee expense summary.
                 * @example 334
                 */
                readonly id?: string;
                /**
                 * @description Title of the expense summary.
                 * @example Expenses 2025/01/31 batch
                 */
                readonly title?: string;
                /**
                 * @description Indicates whether the expense summary is open or closed.
                 * @default open
                 * @example open
                 * @enum {string}
                 */
                readonly state?: "open" | "closed";
                /**
                 * @description Not for GL posting.
                 * @default false
                 * @example false
                 */
                readonly preventGLPosting?: boolean;
                /**
                 * Format: date
                 * @description GL posting date.
                 * @example 2025-01-23
                 */
                readonly postingDate?: string;
                /**
                 * @description Endpoint for the employee expense summary.
                 * @example /objects/projects/employee-expense-summary/334
                 */
                readonly href?: string;
            };
            /** @description Non-reimbursable portion of the expense. */
            nonReimbursable?: {
                /**
                 * Format: decimal-precision-2
                 * @description Non-reimbursable amount in base currency.
                 * @example 123.45
                 */
                readonly baseTotalEntered?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total non-reimbursable amount.
                 * @example 123.45
                 */
                readonly reimbursementTotalEntered?: string;
            };
            /**
             * @description Memo.
             * @example Paid to employee
             */
            memo?: string;
            /**
             * @description Reason for the expense.
             * @example Supplies for customer training
             */
            description?: string;
            /**
             * @description Reason for the reclassification.
             * @example Classified as supplies, not travel expense
             */
            reclassificationNotes?: string;
            /** @description An attachment for employee expenses. Can be scanned or digital receipts. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 12
                 */
                key?: string;
                /**
                 * @description Unique ID for the attachment.
                 * @example 12
                 */
                id?: string;
                /**
                 * @description Endpoint for the attachment.
                 * @example /objects/company-config/attachment/12
                 */
                readonly href?: string;
            };
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            /** @description Line items of the employee expense. */
            lines?: components["schemas"]["objects.expenses.expense-to-approve-line"][];
        };
        /** @description An individual expense line sent for approval on an employee expense report. */
        "objects.expenses.expense-to-approve-line": {
            /**
             * @description System assigned unique key for the employee expense line item to approval.
             * @example 312
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the expense to approve line. This value is the same as the key for this object.
             * @example 312
             */
            readonly id?: string;
            /**
             * Format: date
             * @description Date the expense line is filed.
             * @example 2025-01-23
             */
            entryDate?: string;
            /**
             * @description Base currency of the expense.
             * @example USD
             */
            readonly baseCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount of the expense in base currency.
             * @example 123.45
             */
            readonly baseAmount?: string;
            /**
             * @description Reimbursement currency.
             * @example CAD
             */
            readonly reimbursementCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description Reimbursement amount.
             * @example 123.45
             */
            readonly reimbursementAmount?: string;
            /**
             * @description Transaction currency. For multi-currency companies.
             * @example INR
             */
            txnCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description Transaction amount.
             * @example 123.45
             */
            txnAmount?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Amount selected to pay in transaction currency.
             * @example 123.45
             */
            readonly totalSelected?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount paid in transaction currency.
             * @example 123.45
             */
            readonly totalPaid?: string;
            /**
             * Format: decimal-precision-2
             * @description Quantity for a rate-based expense, for example mileage.
             * @example 5.75
             */
            quantity?: string;
            /**
             * Format: decimal-precision-2
             * @description Monetary amount for a rate-based expense, such as mileage.
             * @example 20.00
             */
            unitRate?: string;
            /**
             * @description Notes regarding to whom you paid the amount.
             * @example Hotel Westin
             */
            paidTo?: string;
            /**
             * @description Notes regarding what the expense was for.
             * @example Attending conference
             */
            paidFor?: string;
            /** @description General ledger account associated with the line item. Used when no expense type is assigned. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 158
                 */
                key?: string;
                /**
                 * @description Unique identifier for the GL account.
                 * @example 6775.30
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example Travel
                 */
                readonly name?: string;
                /**
                 * @description Endpoint for the GL account object.
                 * @example /objects/general-ledger/account/23
                 */
                readonly href?: string;
            };
            /** @description An expense type defined in the company. */
            expenseType?: {
                /**
                 * @description Unique key for the expense type.
                 * @example 6000
                 */
                key?: string;
                /**
                 * @description Unique identifier for the expense type.
                 * @example Meals
                 */
                id?: string;
                /**
                 * @description Endpoint for the expense type object.
                 * @example /objects/expense-type/34
                 */
                readonly href?: string;
            };
            /**
             * @description Line number of the employee expense.
             * @example 1
             */
            readonly lineNumber?: number;
            /** @description Details of reimbursement currency to base currency conversion. */
            reimburseToBaseConversion?: {
                /**
                 * Format: date
                 * @description Date the exchange rate conversion was applied.
                 * @example 2021-01-23
                 */
                readonly exchangeRateDate?: string;
                /**
                 * @description Type of the expense line exchange rate.
                 * @example -1
                 */
                readonly exchangeRateTypeId?: string;
                /**
                 * Format: decimal-precision-5
                 * @description Value of the expense line exchange rate.
                 * @example 1.18999
                 */
                readonly exchangeRate?: string;
            };
            /** @description Details of the conversion to base currency. */
            transactionToReimburseConversion?: {
                /**
                 * Format: decimal-precision-5
                 * @description Exchange rate for the transaction.
                 * @example 65
                 */
                exchangeRate?: string;
                /**
                 * Format: date
                 * @description Date for the exchange rate.
                 * @example 2025-01-23
                 */
                exchangeRateDate?: string;
                /**
                 * @description Exchange rate type.
                 * @example -1
                 */
                exchangeRateTypeId?: string;
            };
            /**
             * @description Status of the employee expense report line.
             * @default submitted
             * @example draft
             * @enum {string|null}
             */
            readonly state?: "draft" | "submitted" | "partiallyApproved" | "partiallyDeclined" | "approved" | "posted" | "declined" | "reversalPending" | "reversed" | "reversal" | "paid" | "confirmed" | "voided" | "partiallyPaid" | "saved" | "notApplicable" | "pending" | "readyForApproval" | null;
            /**
             * @description Indicates whether a line item is billable.
             * @default false
             * @example false
             */
            isBillable?: boolean;
            /**
             * @description Indicates whether a line item was billed.
             * @default false
             * @example false
             */
            readonly isBilled?: boolean;
            /** @description Form 1099 information for the line item. */
            form1099?: {
                /**
                 * @description If set to true, the line item amount is added to the form 1099.
                 * @example true
                 */
                isForm1099?: string;
                /**
                 * @description Type of form 1099.
                 * @example MISC
                 */
                type?: string;
                /**
                 * @description Box value of form 1099.
                 * @example 3
                 */
                box?: string;
            };
            paymentType?: {
                /**
                 * @description Unique key for the expense payment type.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the payment type.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description Name of the expense payment type.
                 * @example Non-reimburse
                 */
                name?: string;
                /**
                 * @description Non-reimbursable expense.
                 * @default false
                 * @example false
                 */
                isNonReimbursable?: boolean;
                /** @example /objects/projects/employee-expense-payment-type/1 */
                readonly href?: string;
            };
            readonly creditCardTxn?: {
                /**
                 * @description Unique identifier for the credit card transaction.
                 * @example 124
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the credit card transaction.
                 * @example 124
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the credit card transaction.
                 * @example /objects/cash-management/credit-card-txn/124
                 */
                readonly href?: string;
            };
            creditCardTxnLine?: {
                /**
                 * @description Unique identifier for the credit card transaction line.
                 * @example 128
                 */
                id?: string;
                /**
                 * @description Unique key for the credit card transaction line.
                 * @example 128
                 */
                key?: string;
                /**
                 * @description URL endpoint for the credit card transaction line.
                 * @example /objects/cash-management/credit-card-txn-line/128
                 */
                readonly href?: string;
            };
            electronicReceipt?: {
                /**
                 * @description Unique identifier for the electronic receipt.
                 * @example 124
                 */
                id?: string;
                /**
                 * @description Unique key for the electronic receipt.
                 * @example 124
                 */
                key?: string;
                /**
                 * @description URL endpoint for the electronic receipt.
                 * @example /objects/expenses/electronic-receipt/124
                 */
                readonly href?: string;
            };
            electronicReceiptLine?: {
                /**
                 * @description Unique identifier for the electronic receipt line.
                 * @example 128
                 */
                id?: string;
                /**
                 * @description Unique key for the electronic receipt line.
                 * @example 128
                 */
                key?: string;
                /**
                 * @description URL endpoint for the electronic receipt line.
                 * @example /objects/expenses/electronic-receipt-line/128
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            dimensions?: components["schemas"]["dimension-ref"] & {
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the location.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Location name
                     * @example USA
                     */
                    readonly name?: string | null;
                    /** @example /objects/company-config/location/1 */
                    readonly href?: string;
                };
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 12
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the department.
                     * @example 12
                     */
                    id?: string | null;
                    /**
                     * @description Department name
                     * @example IT
                     */
                    readonly name?: string | null;
                    /** @example /objects/company-config/department/12 */
                    readonly href?: string;
                };
            };
            readonly expenseToApprove?: {
                /**
                 * @description Unique identifier for the expense to approve.
                 * @example 1
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the expense to approve.
                 * @example 1
                 */
                readonly key?: string;
            };
        };
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
    "list-expenses-employee-expense": {
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
    "create-expenses-employee-expense": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates an employee expense. Allowed values for the `state` field are `draft`, `submitted`. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.expenses.employee-expense"] & components["schemas"]["expenses-employee-expenseRequiredProperties"];
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
    "get-expenses-employee-expense-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee-expense.
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
                        "ia::result"?: components["schemas"]["objects.expenses.employee-expense"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-expenses-employee-expense-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee-expense.
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
    "update-expenses-employee-expense-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee-expense.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.expenses.employee-expense"] & {
                    reimbursement?: {
                        readonly reimbursementCurrency?: unknown;
                    };
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
    "reverse-expenses-employee-expense": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["expenses-employee-expense-actions-reverse-request"];
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
                        "ia::result"?: components["schemas"]["expenses-employee-expense-actions-reverse-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "recall-expenses-employee-expense": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["expenses-employee-expense-actions-recall-request"];
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
                        "ia::result"?: components["schemas"]["expenses-employee-expense-actions-recall-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-expenses-employee-expense-line": {
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
    "create-expenses-employee-expense-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates an employee expense line */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.expenses.employee-expense-line"] & components["schemas"]["expenses-employee-expense-lineRequiredProperties"];
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
    "get-expenses-employee-expense-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense line.
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
                        "ia::result"?: components["schemas"]["objects.expenses.employee-expense-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-expenses-employee-expense-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense line.
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
    "update-expenses-employee-expense-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.expenses.employee-expense-line"];
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
    "list-expenses-employee-expense-summary": {
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
    "create-expenses-employee-expense-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Employee expense summary to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.expenses.employee-expense-summary"] & components["schemas"]["expenses-employeeExpenseSummaryRequiredProperties"];
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
    "get-expenses-employee-expense-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense summary.
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
                        "ia::result"?: components["schemas"]["objects.expenses.employee-expense-summary"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-expenses-employee-expense-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense summary.
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
    "update-expenses-employee-expense-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense summary.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.expenses.employee-expense-summary"];
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
    "list-expenses-employee-expense-type": {
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
    "create-expenses-employee-expense-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates an employee expense type. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.expenses.employee-expense-type"] & components["schemas"]["expenses-employee-expense-typeRequiredProperties"];
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
    "get-expenses-employee-expense-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense type.
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
                        "ia::result"?: components["schemas"]["objects.expenses.employee-expense-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-expenses-employee-expense-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense type.
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
    "update-expenses-employee-expense-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense type.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.expenses.employee-expense-type"] & {
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
    "list-expenses-employee-expense-payment-type": {
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
    "create-expenses-employee-expense-payment-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates an employee expense payment type. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.expenses.employee-expense-payment-type"] & components["schemas"]["employeeExpensePaymentTypeRequiredProperties"];
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
    "get-expenses-employee-expense-payment-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense payment type.
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
                        "ia::result"?: components["schemas"]["objects.expenses.employee-expense-payment-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-expenses-employee-expense-payment-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense payment type.
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
    "update-expenses-employee-expense-payment-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense payment type.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.expenses.employee-expense-payment-type"] & {
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
    "list-expenses-employee-expense-adjustment": {
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
    "create-expenses-employee-expense-adjustment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates an employee expense adjustment */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.expenses.employee-expense-adjustment"];
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
    "get-expenses-employee-expense-adjustment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee-expense-adjustment.
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
                        "ia::result"?: components["schemas"]["objects.expenses.employee-expense-adjustment"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-expenses-employee-expense-adjustment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee-expense-adjustment.
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
    "update-expenses-employee-expense-adjustment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee-expense-adjustment.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.expenses.employee-expense-adjustment"] & {
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
    "list-expenses-employee-expense-adjustment-line": {
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
    "create-expenses-employee-expense-adjustment-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.expenses.employee-expense-adjustment-line"];
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
    "get-expenses-employee-expense-adjustment-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense adjustment line.
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
                        "ia::result"?: components["schemas"]["objects.expenses.employee-expense-adjustment-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-expenses-employee-expense-adjustment-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense adjustment line.
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
    "update-expenses-employee-expense-adjustment-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee expense adjustment line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.expenses.employee-expense-adjustment-line"] & {
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
    "list-expenses-employee-expense-approval-record": {
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
    "get-expenses-employee-expense-approval-record-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee expense approval record.
                 * @example 23
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
                        "ia::result"?: components["schemas"]["objects.expenses.employee-expense-approval-record"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-expenses-unit-rate": {
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
    "get-expenses-unit-rate-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the unit rate.
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
                        "ia::result"?: components["schemas"]["objects.expenses.unit-rate"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-expenses-electronic-receipt": {
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
    "post-expenses-electronic-receipt": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates an electronic receipt */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.expenses.electronic-receipt"] & components["schemas"]["electronic-receiptRequiredProperties"];
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
    "get-expenses-electronic-receipt-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the electronic-receipt.
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
                        "ia::result"?: components["schemas"]["objects.expenses.electronic-receipt"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-expenses-electronic-receipt-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the electronic-receipt.
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
    "patch-expenses-electronic-receipt-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the electronic-receipt.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.expenses.electronic-receipt"] & {
                    readonly createdDate?: unknown;
                    readonly currency?: unknown;
                    readonly employee?: unknown;
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
    "list-expenses-electronic-receipt-line": {
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
    "get-expenses-electronic-receipt-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the electronic receipt line.
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
                        "ia::result"?: components["schemas"]["objects.expenses.electronic-receipt-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-expenses-expense-to-approve": {
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
    "get-expenses-expense-to-approve-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the expense-to-approve.
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
                        "ia::result"?: components["schemas"]["objects.expenses.expense-to-approve"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-expenses-expense-to-approve-line": {
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
    "get-expenses-expense-to-approve-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense to approve line.
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
                        "ia::result"?: components["schemas"]["objects.expenses.expense-to-approve-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
}

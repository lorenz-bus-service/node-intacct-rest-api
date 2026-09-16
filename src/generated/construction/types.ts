// Generated from spec/construction.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/construction/project-contract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project contracts
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-construction-project-contract"];
        put?: never;
        /**
         * Create a project contract
         * @description Creates a new project contract. You must specify a unique ID when creating a project contract unless document sequencing is configured, in which case the ID is auto-generated.
         */
        post: operations["create-construction-project-contract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/project-contract/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project contract.
                 * @example 44
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project contract
         * @description Returns detailed information for a specified project contract.
         */
        get: operations["get-construction-project-contract-key"];
        put?: never;
        post?: never;
        /**
         * Delete a project contract
         * @description Deletes a project contract.
         */
        delete: operations["delete-construction-project-contract-key"];
        options?: never;
        head?: never;
        /**
         * Update a project contract
         * @description Updates an existing project contract by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-project-contract-key"];
        trace?: never;
    };
    "/objects/construction/project-contract-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project contract lines
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-construction-project-contract-line"];
        put?: never;
        /**
         * Create a project contract line
         * @description Creates a new project contract line.
         */
        post: operations["create-construction-project-contract-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/project-contract-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project contract line.
                 * @example 4044
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project contract line
         * @description Returns detailed information for a specified project contract line.
         */
        get: operations["get-construction-project-contract-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a project contract line
         * @description Deletes a project contract line.
         */
        delete: operations["delete-construction-project-contract-line-key"];
        options?: never;
        head?: never;
        /**
         * Update a project contract line
         * @description Updates an existing project contract line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-project-contract-line-key"];
        trace?: never;
    };
    "/objects/construction/project-contract-line-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project contract line entries
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-construction-project-contract-line-entry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/project-contract-line-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project contract line entry.
                 * @example 5
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project contract line entry
         * @description Returns detailed information for a specified project contract line entry.
         */
        get: operations["get-construction-project-contract-line-entry-key"];
        put?: never;
        post?: never;
        /**
         * Delete a project contract line entry
         * @description Deletes a project contract line entry.
         */
        delete: operations["delete-construction-project-contract-line-entry-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/project-contract-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project contract types
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-construction-project-contract-type"];
        put?: never;
        /**
         * Create a project contract type
         * @description Creates a new project contract type.
         */
        post: operations["create-construction-project-contract-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/project-contract-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key of the project contract type
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project contract type
         * @description Returns detailed information for a specified project contract type
         */
        get: operations["get-construction-project-contract-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete a project contract type
         * @description Deletes a project contract type
         */
        delete: operations["delete-construction-project-contract-type-key"];
        options?: never;
        head?: never;
        /**
         * Update a project contract type
         * @description Updates an existing project contract type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-project-contract-type-key"];
        trace?: never;
    };
    "/objects/construction/project-contract-line-task-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project contract line task maps
         * @description Returns a collection with a key, ID, and link for each project contract line task map. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-construction-project-contract-line-task-map"];
        put?: never;
        /**
         * Create a project contract line task map
         * @description Creates a new project contract line task map.
         */
        post: operations["create-construction-project-contract-line-task-map"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/project-contract-line-task-map/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project contract line task map.
                 * @example 156
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project contract line task map
         * @description Returns detailed information for a specified project contract line task map.
         */
        get: operations["get-construction-project-contract-line-task-map-key"];
        put?: never;
        post?: never;
        /**
         * Delete a project contract line task map
         * @description Deletes a project contract line task map.
         */
        delete: operations["delete-construction-project-contract-line-task-map-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/cost-type-observed-percent-completed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List observed percent completed
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each cost type observed percent completed. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-cost-type-observed-percent-completed"];
        put?: never;
        /**
         * Create a cost type observed percent completed
         * @description Creates a new cost type observed percent completed.
         */
        post: operations["create-construction-cost-type-observed-percent-completed"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/cost-type-observed-percent-completed/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a cost type observed percent completed.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a cost type observed percent completed
         * @description Returns detailed information for a specified cost type observed percent completed.
         */
        get: operations["get-construction-cost-type-observed-percent-completed-key"];
        put?: never;
        post?: never;
        /**
         * Delete a cost type observed percent completed
         * @description Deletes a cost type observed percent completed.
         */
        delete: operations["delete-construction-cost-type-observed-percent-completed-key"];
        options?: never;
        head?: never;
        /**
         * Update a cost type observed percent completed
         * @description Updates an existing cost type observed percent completed by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-cost-type-observed-percent-completed-key"];
        trace?: never;
    };
    "/objects/construction/project-contract-billing-invoice-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project contract billing invoice details
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each project contract billing invoice detail. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify the properties that are returned.
         */
        get: operations["list-construction-project-contract-billing-invoice-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/project-contract-billing-invoice-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project contract billing invoice detail.
                 * @example 3760
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project contract billing invoice detail
         * @description Returns detailed information for a specified project contract billing invoice detail.
         */
        get: operations["get-construction-project-contract-billing-invoice-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/project-contract-billing-invoice-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Project contract billing invoice summaries
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each project contract billing invoice summary. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify the properties that are returned.
         */
        get: operations["list-construction-project-contract-billing-invoice-summary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/project-contract-billing-invoice-summary/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project contract billing invoice summary.
                 * @example 313
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a Project contract billing invoice Summary
         * @description Returns detailed information for a specified project contract billing invoice summary.
         */
        get: operations["get-construction-project-contract-billing-invoice-summary-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/rate-table": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List construction rate tables
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each construction rate table. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-rate-table"];
        put?: never;
        /**
         * Create a construction rate table
         * @description Creates a new construction rate table.
         */
        post: operations["create-construction-rate-table"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/rate-table/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the construction rate table.
                 * @example 145
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a construction rate table
         * @description Returns detailed information for a specified construction rate table.
         */
        get: operations["get-construction-rate-table-key"];
        put?: never;
        post?: never;
        /**
         * Delete a construction rate table
         * @description Deletes a construction rate table.
         */
        delete: operations["delete-construction-rate-table-key"];
        options?: never;
        head?: never;
        /**
         * Update a construction rate table
         * @description Updates an existing construction rate table by setting field values. Any field values not provided remain unchanged.
         */
        patch: operations["update-construction-rate-table-key"];
        trace?: never;
    };
    "/objects/construction/rate-table-accounts-payable-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List rate table accounts payable lines
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each accounts payable line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-rate-table-accounts-payable-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/rate-table-accounts-payable-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the rate table accounts payable line.
                 * @example 397
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a rate table accounts payable line
         * @description Returns detailed information for a specified rate table accounts payable line.
         */
        get: operations["get-construction-rate-table-accounts-payable-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/rate-table-credit-card-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List rate table credit card lines
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each credit card line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-rate-table-credit-card-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/rate-table-credit-card-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the rate table credit card line.
                 * @example 145
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a rate table credit card line
         * @description Returns detailed information for a specified rate table credit card line.
         */
        get: operations["get-construction-rate-table-credit-card-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/rate-table-employee-expense-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List rate table employee expense lines
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each employee expense line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-rate-table-employee-expense-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/rate-table-employee-expense-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the rate table employee expense line.
                 * @example 30
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a rate table employee expense line
         * @description Returns detailed information for a specified rate table employee expense line.
         */
        get: operations["get-construction-rate-table-employee-expense-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/rate-table-journal-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List rate table journal lines
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each journal line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-rate-table-journal-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/rate-table-journal-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the rate table journal line.
                 * @example 64
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a rate table journal line
         * @description Returns detailed information for a specified rate table journal line.
         */
        get: operations["get-construction-rate-table-journal-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/rate-table-purchasing-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List rate table purchasing lines
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each purchasing line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-rate-table-purchasing-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/rate-table-purchasing-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the rate table purchasing line.
                 * @example 176
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a rate table purchasing line
         * @description Returns detailed information for a specified rate table purchasing line.
         */
        get: operations["get-construction-rate-table-purchasing-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/rate-table-timesheet-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List rate table timesheet lines
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each timesheet line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-rate-table-timesheet-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/rate-table-timesheet-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the rate table timesheet line.
                 * @example 12
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a rate table timesheet line
         * @description Returns detailed information for a specified rate table timesheet line.
         */
        get: operations["get-construction-rate-table-timesheet-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/project-estimate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project estimates
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-construction-project-estimate"];
        put?: never;
        /**
         * Create a project estimate
         * @description Creates a new project estimate. You must specify a unique ID when creating a project estimate unless document sequencing is configured, in which case the ID is auto-generated.
         */
        post: operations["create-construction-project-estimate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/project-estimate/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project estimate.
                 * @example 27
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project estimate
         * @description Returns detailed information for a specified project estimate.
         */
        get: operations["get-construction-project-estimate-key"];
        put?: never;
        post?: never;
        /**
         * Delete a project estimate
         * @description Deletes a project estimate. A primary project estimate cannot be deleted.
         */
        delete: operations["delete-construction-project-estimate-key"];
        options?: never;
        head?: never;
        /**
         * Update a project estimate
         * @description Updates an existing project estimate by setting field values. Any fields not provided remain unchanged.
         *
         *     If the `budget` reference is change when `isPosted` is `true`, the estimate is unposted from the first budget and posted to the new budget.
         */
        patch: operations["update-construction-project-estimate-key"];
        trace?: never;
    };
    "/objects/construction/project-estimate-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project estimate lines
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-construction-project-estimate-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/project-estimate-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project estimate line.
                 * @example 101
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project estimate line
         * @description Returns detailed information for a specified project estimate line.
         */
        get: operations["get-construction-project-estimate-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/project-estimate-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project estimate types
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each project estimate type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-project-estimate-type"];
        put?: never;
        /**
         * Create a project estimate type
         * @description Creates a new project estimate type.
         */
        post: operations["create-construction-project-estimate-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/project-estimate-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project estimate type.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project estimate type
         * @description Returns detailed information for a specified project estimate type.
         */
        get: operations["get-construction-project-estimate-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete a project estimate type
         * @description Deletes a project estimate type.
         */
        delete: operations["delete-construction-project-estimate-type-key"];
        options?: never;
        head?: never;
        /**
         * Update a project estimate type
         * @description Updates an existing project estimate type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-project-estimate-type-key"];
        trace?: never;
    };
    "/objects/construction/project-change-order": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project change orders
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-construction-project-change-order"];
        put?: never;
        /**
         * Create a project change order
         * @description Creates a new project change order. You must specify a unique ID when creating a project change order unless document sequencing is configured, in which case the ID is auto-generated.
         */
        post: operations["create-construction-project-change-order"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/project-change-order/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project change order.
                 * @example 212
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project change order
         * @description Returns detailed information for a specified project change order.
         */
        get: operations["get-construction-project-change-order-key"];
        put?: never;
        post?: never;
        /**
         * Delete a project change order
         * @description Deletes a project change order.
         */
        delete: operations["delete-construction-project-change-order-key"];
        options?: never;
        head?: never;
        /**
         * Update a project change order
         * @description Updates an existing project change order by setting field values. Any fields not provided remain unchanged
         */
        patch: operations["update-construction-project-change-order-key"];
        trace?: never;
    };
    "/objects/construction/change-request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List change requests
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each change request. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-change-request"];
        put?: never;
        /**
         * Create a change request
         * @description Creates a new change request.
         */
        post: operations["create-construction-change-request"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/change-request/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the change request.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a change request
         * @description Returns detailed information for a particular change request.
         */
        get: operations["get-construction-change-request-key"];
        put?: never;
        post?: never;
        /**
         * Delete a change request
         * @description Deletes a change request.
         */
        delete: operations["delete-construction-change-request-key"];
        options?: never;
        head?: never;
        /**
         * Update a change request
         * @description Updates an existing change request by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-change-request-key"];
        trace?: never;
    };
    "/objects/construction/change-request-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List change request lines
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each change request line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-change-request-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/change-request-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the change request line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a change request line
         * @description Returns detailed information for a specified change request line.
         */
        get: operations["get-construction-change-request-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/change-request-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List change request types
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each change request type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-change-request-type"];
        put?: never;
        /**
         * Create a change request type
         * @description Creates a new change request type.
         */
        post: operations["create-construction-change-request-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/change-request-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the change request type.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a change request type
         * @description Returns detailed information for a specified change request type.
         */
        get: operations["get-construction-change-request-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete a change request type
         * @description Deletes a change request type.
         */
        delete: operations["delete-construction-change-request-type-key"];
        options?: never;
        head?: never;
        /**
         * Update a change request type
         * @description Updates an existing change request type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-change-request-type-key"];
        trace?: never;
    };
    "/objects/construction/change-request-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List change request statuses
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each change request status. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-change-request-status"];
        put?: never;
        /**
         * Create a change request status
         * @description Creates a new change request status.
         */
        post: operations["create-construction-change-request-status"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/change-request-status/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the change request status.
                 * @example 12
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a change request status
         * @description Returns detailed information for a specified change request status.
         */
        get: operations["get-construction-change-request-status-key"];
        put?: never;
        post?: never;
        /**
         * Delete a change request status
         * @description Deletes a change request status.
         */
        delete: operations["delete-construction-change-request-status-key"];
        options?: never;
        head?: never;
        /**
         * Update a change request status
         * @description Updates an existing change request status by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-change-request-status-key"];
        trace?: never;
    };
    "/objects/construction/accumulation-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List accumulation types
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each accumulation type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-accumulation-type"];
        put?: never;
        /**
         * Create an accumulation type
         * @description Creates a new accumulation type.
         */
        post: operations["create-construction-accumulation-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/accumulation-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the accumulation type.
                 * @example 3086
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an accumulation type
         * @description Returns detailed information for a specified accumulation type.
         */
        get: operations["get-construction-accumulation-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete an accumulation type
         * @description Deletes an accumulation type.
         */
        delete: operations["delete-construction-accumulation-type-key"];
        options?: never;
        head?: never;
        /**
         * Update an accumulation type
         * @description Updates an existing accumulation type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-accumulation-type-key"];
        trace?: never;
    };
    "/objects/construction/employee-position": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee positions
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each employee position. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find employee positions that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-employee-position"];
        put?: never;
        /**
         * Create an employee position
         * @description Creates a new employee position.
         */
        post: operations["create-construction-employee-position"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/employee-position/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee position.
                 * @example 41
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee position
         * @description Returns detailed information for a specified employee position.
         */
        get: operations["get-construction-employee-position-key"];
        put?: never;
        post?: never;
        /**
         * Delete an employee position
         * @description Deletes an employee position.
         */
        delete: operations["delete-construction-employee-position-key"];
        options?: never;
        head?: never;
        /**
         * Update an employee position
         * @description Updates an existing employee position by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-employee-position-key"];
        trace?: never;
    };
    "/objects/construction/labor-class": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List labor classes
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each labor class. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find labor classes that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-labor-class"];
        put?: never;
        /**
         * Create a labor class
         * @description Creates a new labor class.
         */
        post: operations["create-construction-labor-class"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/labor-class/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the labor class.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a labor class
         * @description Returns detailed information for a specified labor class.
         */
        get: operations["get-construction-labor-class-key"];
        put?: never;
        post?: never;
        /**
         * Delete a labor class
         * @description Deletes a labor class.
         */
        delete: operations["delete-construction-labor-class-key"];
        options?: never;
        head?: never;
        /**
         * Update a labor class
         * @description Updates an existing labor class by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-labor-class-key"];
        trace?: never;
    };
    "/objects/construction/labor-shift": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List labor shifts
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each labor shift. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find labor shifts that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-labor-shift"];
        put?: never;
        /**
         * Create a labor shift
         * @description Creates a new labor shift.
         */
        post: operations["create-construction-labor-shift"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/labor-shift/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the labor shift.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a labor shift
         * @description Returns detailed information for a specified labor shift.
         */
        get: operations["get-construction-labor-shift-key"];
        put?: never;
        post?: never;
        /**
         * Delete a labor shift
         * @description Deletes a labor shift.
         */
        delete: operations["delete-construction-labor-shift-key"];
        options?: never;
        head?: never;
        /**
         * Update a labor shift
         * @description Updates an existing labor shift by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-labor-shift-key"];
        trace?: never;
    };
    "/objects/construction/labor-union": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List labor unions
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each labor union. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find labor unions that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-labor-union"];
        put?: never;
        /**
         * Create a labor union
         * @description Creates a new labor union.
         */
        post: operations["create-construction-labor-union"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/labor-union/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the labor union.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a labor union
         * @description Returns detailed information for a specified labor union.
         */
        get: operations["get-construction-labor-union-key"];
        put?: never;
        post?: never;
        /**
         * Delete a labor union
         * @description Deletes a labor union.
         */
        delete: operations["delete-construction-labor-union-key"];
        options?: never;
        head?: never;
        /**
         * Update a labor union
         * @description Updates an existing labor union by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-labor-union-key"];
        trace?: never;
    };
    "/objects/construction/ap-releasable-retainage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List AP releasable retainage
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each AP releasable retainage object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-ap-releasable-retainage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/ap-releasable-retainage/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the AP releasable retainage.
                 * @example 195
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an AP releasable retainage
         * @description Returns detailed information for a specified AP releasable retainage.
         */
        get: operations["get-construction-ap-releasable-retainage-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/ap-retainage-release": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List AP retainage releases
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each AP retainage release object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-ap-retainage-release"];
        put?: never;
        /**
         * Create an AP retainage release
         * @description Creates a new AP retainage release with lines.
         */
        post: operations["create-construction-ap-retainage-release"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/ap-retainage-release/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an AP retainage release.
                 * @example 195
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an AP retainage release
         * @description Returns detailed information for a specified AP retainage release.
         */
        get: operations["get-construction-ap-retainage-release-key"];
        put?: never;
        post?: never;
        /**
         * Delete an AP retainage release
         * @description Deletes an AP retainage release.
         */
        delete: operations["delete-construction-ap-retainage-release-key"];
        options?: never;
        head?: never;
        /**
         * Update an AP retainage release
         * @description Updates an existing AP retainage release by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-ap-retainage-release-key"];
        trace?: never;
    };
    "/objects/construction/ap-retainage-release-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List AP retainage release lines
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each AP retainage release line object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-ap-retainage-release-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/ap-retainage-release-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the AP retainage release line.
                 * @example 7
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an AP retainage release line
         * @description Returns detailed information for a specified AP retainage release line.
         */
        get: operations["get-construction-ap-retainage-release-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/ar-releasable-retainage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List AR releasable retainage
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each AR releasable retainage object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-ar-releasable-retainage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/ar-releasable-retainage/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the AR releasable retainage.
                 * @example 2902
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an AR releasable retainage
         * @description Returns detailed information for a specified AR releasable retainage.
         */
        get: operations["get-construction-ar-releasable-retainage-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/ar-retainage-release": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List AR retainage releases
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each AR retainage release object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-ar-retainage-release"];
        put?: never;
        /**
         * Create an AR retainage release
         * @description Creates a new AR retainage release with lines.
         */
        post: operations["create-construction-ar-retainage-release"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/ar-retainage-release/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the AR retainage release.
                 * @example 60
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an AR retainage release
         * @description Returns detailed information for a specified AR retainage release.
         */
        get: operations["get-construction-ar-retainage-release-key"];
        put?: never;
        post?: never;
        /**
         * Delete an AR retainage release
         * @description Deletes an AR retainage release.
         */
        delete: operations["delete-construction-ar-retainage-release-key"];
        options?: never;
        head?: never;
        /**
         * Update an AR retainage release
         * @description Updates an existing AR retainage release by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-ar-retainage-release-key"];
        trace?: never;
    };
    "/objects/construction/ar-retainage-release-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List AR retainage release lines
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each AR retainage release line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-ar-retainage-release-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/ar-retainage-release-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the AR retainage release line.
                 * @example 2902
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an AR retainage release line
         * @description Returns detailed information for a specified AR retainage release line.
         */
        get: operations["get-construction-ar-retainage-release-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/primary-document-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List primary document details
         * @description Returns a collection with a key, ID, and link for each primary document detail. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-primary-document-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/primary-document-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the primary document detail.
                 * @example 151-123-123
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a primary document detail
         * @description Returns detailed information for a specified primary document detail.
         */
        get: operations["get-construction-primary-document-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/primary-document-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List primary document summaries
         * @description Returns a collection with a key, ID, and link for each primary document summary. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-primary-document-summary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/primary-document-summary/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the primary document summary.
                 * @example 90
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a primary document summary
         * @description Returns detailed information for a specified primary document summary.
         */
        get: operations["get-construction-primary-document-summary-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/primary-document-accounts-payable-bill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List primary document AP bills
         * @description Returns a collection with a key, ID, and link for each primary document AP bill. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-primary-document-accounts-payable-bill"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/primary-document-accounts-payable-bill/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the primary document AP bill.
                 * @example 151-123-123
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a primary document AP bill
         * @description Returns detailed information for a specified primary document AP bill.
         */
        get: operations["get-construction-primary-document-accounts-payable-bill-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/primary-document-accounts-payable-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List primary document AP payments
         * @description Returns a collection with a key, ID, and link for each primary document AP payment. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-primary-document-accounts-payable-payment"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/primary-document-accounts-payable-payment/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the primary document AP payment.
                 * @example 151-123-123
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a primary document AP payment
         * @description Returns detailed information for a specified primary document AP payment.
         */
        get: operations["get-construction-primary-document-accounts-payable-payment-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/primary-document-retainage-release": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List primary document retainage releases
         * @description Returns a collection with a key, ID, and link for each primary document retainage release. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-primary-document-retainage-release"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/primary-document-retainage-release/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the primary document retainage release.
                 * @example 151-123-123
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a primary document retainage release
         * @description Returns detailed information for a specified primary document retainage release.
         */
        get: operations["get-construction-primary-document-retainage-release-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/compliance-record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List compliance records
         * @description Returns a collection with a key, ID, and link for each compliance record. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-compliance-record"];
        put?: never;
        /**
         * Create a compliance record
         * @description Creates a new compliance record.
         */
        post: operations["create-construction-compliance-record"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/compliance-record/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance record.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a compliance record
         * @description Returns detailed information for a specified compliance record.
         */
        get: operations["get-construction-compliance-record-key"];
        put?: never;
        post?: never;
        /**
         * Delete a compliance record
         * @description Deletes a compliance record.
         */
        delete: operations["delete-construction-compliance-record-key"];
        options?: never;
        head?: never;
        /**
         * Update a compliance record
         * @description Updates an existing compliance record by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-compliance-record-key"];
        trace?: never;
    };
    "/objects/construction/compliance-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List compliance types
         * @description Returns a collection with a key, ID, and link for each compliance type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-compliance-type"];
        put?: never;
        /**
         * Create a compliance type
         * @description Creates a new compliance type.
         */
        post: operations["create-construction-compliance-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/compliance-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the compliance type.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a compliance type
         * @description Returns detailed information for a specified compliance type.
         */
        get: operations["get-construction-compliance-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete a compliance type
         * @description Deletes a compliance type. You can delete a compliance type only when it is not associated with a compliance record.
         */
        delete: operations["delete-construction-compliance-type-key"];
        options?: never;
        head?: never;
        /**
         * Update a compliance type
         * @description Updates an existing compliance type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-compliance-type-key"];
        trace?: never;
    };
    "/objects/construction/compliance-definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List compliance definitions
         * @description Returns a collection with a key, ID, and link for each compliance definition. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-compliance-definition"];
        put?: never;
        /**
         * Create a compliance definition
         * @description Creates a new compliance definition.
         */
        post: operations["create-construction-compliance-definition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/compliance-definition/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance definition.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a compliance definition
         * @description Returns detailed information for a specified compliance definition.
         */
        get: operations["get-construction-compliance-definition-key"];
        put?: never;
        post?: never;
        /**
         * Delete a compliance definition.
         * @description Deletes a compliance definition. You can delete a compliance definition only when it is not associated with a compliance type.
         */
        delete: operations["delete-construction-compliance-definition-key"];
        options?: never;
        head?: never;
        /**
         * Update a compliance definition
         * @description Updates an existing compliance definition by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-compliance-definition-key"];
        trace?: never;
    };
    "/objects/construction/compliance-definition-association": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List compliance definition associations
         * @description Returns a collection with a key, ID, and link for each compliance definition association. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-compliance-definition-association"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/compliance-definition-association/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance definition association.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a compliance definition association
         * @description Returns detailed information for a specified compliance definition association.
         */
        get: operations["get-construction-compliance-definition-association-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/work-order": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List work orders
         * @description Returns a collection with a key, ID, and link for each work order. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-work-order"];
        put?: never;
        /**
         * Create a work order
         * @description Creates a new work order.
         */
        post: operations["create-construction-work-order"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/work-order/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order.
                 * @example 18
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a work order
         * @description Returns detailed information for a specified work order.
         */
        get: operations["get-construction-work-order-key"];
        put?: never;
        post?: never;
        /**
         * Delete a work order
         * @description Deletes a work order.
         */
        delete: operations["delete-construction-work-order-key"];
        options?: never;
        head?: never;
        /**
         * Update a work order
         * @description Updates an existing work order by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-work-order-key"];
        trace?: never;
    };
    "/objects/construction/work-order-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List work order types
         * @description Returns a collection with a key, ID, and link for each work order type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-work-order-type"];
        put?: never;
        /**
         * Create a work order type
         * @description Creates a new work order type.
         */
        post: operations["create-construction-work-order-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/work-order-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order type.
                 * @example 11
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a work order type
         * @description Returns detailed information for a specified work order type.
         */
        get: operations["get-construction-work-order-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete a work order type
         * @description Deletes a work order type.
         */
        delete: operations["delete-construction-work-order-type-key"];
        options?: never;
        head?: never;
        /**
         * Update a work order type
         * @description Updates an existing work order type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-work-order-type-key"];
        trace?: never;
    };
    "/objects/construction/work-order-call-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List work order call types
         * @description Returns a collection with a key, ID, and link for each work order call type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-work-order-call-type"];
        put?: never;
        /**
         * Create a work order call type
         * @description Creates a new work order call type.
         */
        post: operations["create-construction-work-order-call-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/work-order-call-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order call type.
                 * @example 11
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a work order call type
         * @description Returns detailed information for a specified work order call type.
         */
        get: operations["get-construction-work-order-call-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete a work order call type
         * @description Deletes a work order call type.
         */
        delete: operations["delete-construction-work-order-call-type-key"];
        options?: never;
        head?: never;
        /**
         * Update a work order call type
         * @description Updates an existing work order call type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-work-order-call-type-key"];
        trace?: never;
    };
    "/objects/construction/work-order-state": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List work order states
         * @description Returns a collection with a key, ID, and link for each work order state. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-work-order-state"];
        put?: never;
        /**
         * Create a work order state
         * @description Creates a new work order state.
         */
        post: operations["create-construction-work-order-state"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/work-order-state/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order state.
                 * @example 11
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a work order state
         * @description Returns detailed information for a specified work order state.
         */
        get: operations["get-construction-work-order-state-key"];
        put?: never;
        post?: never;
        /**
         * Delete a work order state
         * @description Deletes a work order state.
         */
        delete: operations["delete-construction-work-order-state-key"];
        options?: never;
        head?: never;
        /**
         * Update a work order state
         * @description Updates an existing work order state by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-work-order-state-key"];
        trace?: never;
    };
    "/objects/construction/work-order-problem-code": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List work order problem codes
         * @description Returns a collection with a key, ID, and link for each work order problem code. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-work-order-problem-code"];
        put?: never;
        /**
         * Create a work order problem code
         * @description Creates a new work order problem code.
         */
        post: operations["create-construction-work-order-problem-code"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/work-order-problem-code/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order problem code.
                 * @example 11
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a work order problem code
         * @description Returns detailed information for a specified work order problem code.
         */
        get: operations["get-construction-work-order-problem-code-key"];
        put?: never;
        post?: never;
        /**
         * Delete a work order problem code
         * @description Deletes a work order problem code.
         */
        delete: operations["delete-construction-work-order-problem-code-key"];
        options?: never;
        head?: never;
        /**
         * Update a work order problem code
         * @description Updates an existing work order problem code by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-work-order-problem-code-key"];
        trace?: never;
    };
    "/objects/construction-forecasting/wip-setup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List WIP setups
         * @description Returns a collection with a key, ID, and link for each WIP setup. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-forecasting-wip-setup"];
        put?: never;
        /**
         * Create a WIP setup
         * @description Creates a new WIP setup.
         */
        post: operations["create-construction-forecasting-wip-setup"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction-forecasting/wip-setup/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP setup.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a WIP setup
         * @description Returns detailed information for a specified WIP setup.
         */
        get: operations["get-construction-forecasting-wip-setup-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a WIP setup
         * @description Updates an existing WIP setup object by setting the field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-forecasting-wip-setup-key"];
        trace?: never;
    };
    "/objects/construction-forecasting/wip-setup-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List WIP setup accounts
         * @description Returns a collection with a key, ID, and link for each WIP setup account. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-forecasting-wip-setup-account"];
        put?: never;
        /**
         * Create a WIP setup account
         * @description Creates a new WIP setup account.
         */
        post: operations["create-construction-forecasting-wip-setup-account"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction-forecasting/wip-setup-account/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP setup account.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a WIP setup account
         * @description Returns detailed information for a specified WIP setup account.
         */
        get: operations["get-construction-forecasting-wip-setup-account-key"];
        put?: never;
        post?: never;
        /**
         * Delete a WIP setup account
         * @description Deletes a WIP setup account.
         */
        delete: operations["delete-construction-forecasting-wip-setup-account-key"];
        options?: never;
        head?: never;
        /**
         * Update a WIP setup account
         * @description Updates an existing WIP setup account object by setting the field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-forecasting-wip-setup-account-key"];
        trace?: never;
    };
    "/objects/construction-forecasting/wip-project": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List WIP projects
         * @description Returns a collection with a key, ID, and link for each WIP project. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-forecasting-wip-project"];
        put?: never;
        /**
         * Create a WIP project
         * @description Creates a new WIP project.
         */
        post: operations["create-construction-forecasting-wip-project"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction-forecasting/wip-project/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP project.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a WIP project
         * @description Returns detailed information for a particular WIP project.
         */
        get: operations["get-construction-forecasting-wip-project-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a WIP project
         * @description Updates an existing WIP project by setting the field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-forecasting-wip-project-key"];
        trace?: never;
    };
    "/objects/construction-forecasting/wip-forecast-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List WIP forecast details
         * @description Returns a collection with a key, ID, and link for each WIP forecast detail entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-forecasting-wip-forecast-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction-forecasting/wip-forecast-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP forecast detail.
                 * @example 21
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a WIP forecast detail
         * @description Returns WIP forecast details for a specified combination of project, task, and cost type.
         */
        get: operations["get-construction-forecasting-wip-forecast-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a WIP forecast detail
         * @description Updates an existing WIP forecast detail object by setting the field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-forecasting-wip-forecast-detail-key"];
        trace?: never;
    };
    "/objects/construction-forecasting/wip-project-manager-forecast": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List WIP project manager forecasts
         * @description Returns a collection with a key, ID, and link for each WIP project manager forecast. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-forecasting-wip-project-manager-forecast"];
        put?: never;
        /**
         * Create a WIP project manager forecast
         * @description Creates a new WIP project manager forecast.
         */
        post: operations["create-construction-forecasting-wip-project-manager-forecast"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction-forecasting/wip-project-manager-forecast/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the WIP project manager forecast.
                 * @example 33
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a WIP project manager forecast
         * @description Returns detailed information for a specified WIP project manager forecast.
         */
        get: operations["get-construction-forecasting-wip-project-manager-forecast-key"];
        put?: never;
        post?: never;
        /**
         * Delete a WIP project manager forecast
         * @description Deletes a WIP project manager forecast.
         */
        delete: operations["delete-construction-forecasting-wip-project-manager-forecast-key"];
        options?: never;
        head?: never;
        /**
         * Update a WIP project manager forecast
         * @description Updates an existing WIP project manager forecast by setting the field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-forecasting-wip-project-manager-forecast-key"];
        trace?: never;
    };
    "/objects/construction-forecasting/wip-target-project": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List WIP target projects
         * @description Returns a collection with a key, ID, and link for each WIP target project. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-forecasting-wip-target-project"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction-forecasting/wip-target-project/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the WIP target project.
                 * @example 635
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a WIP target project
         * @description Returns detailed information for a specified WIP target project.
         */
        get: operations["get-construction-forecasting-wip-target-project-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a WIP target project
         * @description Updates an existing WIP target project by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-forecasting-wip-target-project-key"];
        trace?: never;
    };
    "/objects/construction-forecasting/wip-project-setting": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List WIP project settings
         * @description Returns a collection with a key, ID, and link for each WIP project setting. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-forecasting-wip-project-setting"];
        put?: never;
        /**
         * Create a WIP project setting
         * @description Creates a new WIP project setting.
         */
        post: operations["create-construction-forecasting-wip-project-setting"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction-forecasting/wip-project-setting/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the WIP project setting.
                 * @example 10
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a WIP project setting
         * @description Returns detailed information for a specified WIP project setting.
         */
        get: operations["get-construction-forecasting-wip-project-setting-key"];
        put?: never;
        post?: never;
        /**
         * Delete a WIP project setting
         * @description Deletes a WIP project setting.
         */
        delete: operations["delete-construction-forecasting-wip-project-setting-key"];
        options?: never;
        head?: never;
        /**
         * Update a WIP project setting
         * @description Updates an existing WIP project setting by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-forecasting-wip-project-setting-key"];
        trace?: never;
    };
    "/services/construction-forecasting/wip-project/calculate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Calculate a WIP project
         * @description Calculate WIP project fields.
         */
        post: operations["get-construction-forecasting-wip-project-calculate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction-forecasting/wip-period": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List WIP periods
         * @description Returns a collection with a key, ID, and link for each WIP period. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-forecasting-wip-period"];
        put?: never;
        /**
         * Create a WIP period
         * @description Creates a new WIP period. You can only create one WIP period for a specified `assignedEntity` in a given reporting period.
         */
        post: operations["create-construction-forecasting-wip-period"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction-forecasting/wip-period/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP period.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a WIP period
         * @description Returns detailed information for a specified WIP period.
         */
        get: operations["get-construction-forecasting-wip-period-key"];
        put?: never;
        post?: never;
        /**
         * Delete a WIP period
         * @description Deletes a WIP period.
         */
        delete: operations["delete-construction-forecasting-wip-period-key"];
        options?: never;
        head?: never;
        /**
         * Update a WIP period
         * @description Updates an existing WIP period by setting the field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-forecasting-wip-period-key"];
        trace?: never;
    };
    "/services/construction-forecasting/wip-period/can-post": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Preview a WIP period
         * @description Determine whether a preview of a WIP period is ready to be posted to the GL or contains any problems that must be resolved.
         */
        post: operations["get-construction-forecasting-wip-period-can-post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/construction-forecasting/wip-period/generate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate WIP projects
         * @description Generate WIP projects for a WIP schedule period.
         */
        post: operations["generate-construction-forecasting-wip-period"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/construction-forecasting/wip-period/prior-periods": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Prior WIP periods
         * @description Retrieve a list of prior WIP periods.
         */
        post: operations["get-construction-forecasting-wip-period-prior-periods"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/construction-forecasting/wip-period/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Refresh WIP projects
         * @description Refresh WIP projects for a WIP period.
         */
        post: operations["create-construction-forecasting-wip-period-refresh"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/construction-forecasting/wip-period/get-warnings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get warnings
         * @description Get warnings for WIP projects in a specified WIP period.
         */
        post: operations["get-construction-forecasting-wip-period-get-warnings"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/construction-forecasting/wip-reporting-period/get-available": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get available periods
         * @description Retrieve a list of available periods for creating a WIP report.
         */
        post: operations["get-construction-forecasting-wip-reporting-period-get-available"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/construction-forecasting/wip-reporting-period/get-next": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get next period
         * @description Retrieve the next available reporting period.
         */
        post: operations["get-construction-forecasting-wip-reporting-period-get-next"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/construction-forecasting/wip-journal/entry-history": {
        parameters: {
            query: {
                /**
                 * @description The key for the WIP period.
                 * @example 11
                 */
                wipPeriodKey: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List a WIP posting history
         * @description Provide the posting history for a WIP period.
         */
        get: operations["get-construction-forecasting-wip-journal-entry-history-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/construction-forecasting/wip-journal/generate-preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Preview a WIP posting
         * @description Generate a GL journal entry preview for posting a WIP schedule period.
         */
        post: operations["post-construction-forecasting-wip-journal-generate-preview"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/construction-forecasting/wip-journal/post-period": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Post a WIP period
         * @description Post a GL journal entry for a specified WIP period.
         */
        post: operations["create-construction-forecasting-wip-journal-post-period"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/construction-forecasting/wip-journal/revert-post": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Revert a WIP journal posting
         * @description Post a journal entry for a specified WIP schedule period to revert a previously posted journal entry.
         */
        post: operations["create-construction-forecasting-wip-journal-revert-post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/construction-forecasting/wip-rollup-project/find-rollup-projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get rollup projects
         * @description Given a list of subprojects, find the target projects that can aggregate the subprojects' financial actuals in the WIP schedule period.
         */
        post: operations["get-construction-forecasting-wip-rollup-project-find-rollup-projects"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/construction-forecasting/wip-rollup-project/include-as-wip": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Include in a WIP schedule project
         * @description Include projects in a WIP schedule project. Provide totals for itself plus any subprojects that are included as part of this project.
         */
        post: operations["update-construction-forecasting-wip-rollup-project-include-as-wip"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/construction-forecasting/wip-rollup-project/exclude-from-wip": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Exclude projects from WIP schedule
         * @description Exclude projects from a WIP schedule. See [Include projects in work in progress (WIP) schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=include_projects_in_wip) for details.
         */
        post: operations["update-construction-forecasting-wip-rollup-project-exclude-from-wip"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/construction-forecasting/wip-rollup-project/include-in-project": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Include in a WIP project
         * @description Include projects in a specified WIP schedule project.
         */
        post: operations["update-construction-forecasting-wip-rollup-project-include-in-project"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/construction-forecasting/wip-rollup-project/include-in-root": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Include projects with root project
         * @description Include projects with their root project for WIP schedules.
         */
        post: operations["update-construction-forecasting-wip-rollup-project-include-in-root"];
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
        "objects.construction.project-contract": {
            /**
             * @description System-assigned key of the project contract.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the project contract.
             * @example CONTRACT-01
             */
            id?: string;
            /**
             * @description URL endpoint of the project contract.
             * @example /objects/construction/project-contract/12
             */
            readonly href?: string;
            /**
             * @description Project contract name.
             * @example CONTRACT-01 - NW Food Warehouse
             */
            name?: string;
            /** @description Reference to an active project that this contract is associated with. */
            project?: {
                /**
                 * @description Project key.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Project ID.
                 * @example DIM - BTI
                 */
                id?: string;
                /**
                 * @description Project name.
                 * @example Dimensions - Berkeley Technology Inc
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint of the project.
                 * @example /objects/projects/project/1
                 */
                readonly href?: string;
            };
            location?: components["schemas"]["project-location-ref"];
            /** @description Reference to the customer for the project contract. */
            customer?: {
                /**
                 * @description Customer key.
                 * @example 14
                 */
                key?: string;
                /**
                 * @description Customer ID.
                 * @example BTI
                 */
                id?: string;
                /**
                 * @description Customer name.
                 * @example Berkeley Technology Inc
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint of the customer.
                 * @example /objects/accounts-receivable/customer/14
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Contract date.
             * @example 2023-10-15
             */
            contractDate?: string;
            /**
             * @description Description of the project contract.
             * @example NW Food Warehouse - Entry lobby renovation
             */
            description?: string;
            /** @description Project contract type. */
            projectContractType?: {
                /**
                 * @description Project contract type key.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Project contract type ID.
                 * @example COM
                 */
                id?: string;
                /**
                 * @description URL endpoint of the project contract type.
                 * @example /objects/construction/project-contract-type/1
                 */
                readonly href?: string;
            };
            /** @description The architect contact on the project contract. */
            architect?: {
                /**
                 * @description Contact key.
                 * @example 12
                 */
                key?: string;
                /**
                 * @description Contact ID.
                 * @example Eberhardt
                 */
                id?: string;
                /**
                 * @description URL endpoint of the architect contact
                 * @example /objects/company-config/contact/12
                 */
                readonly href?: string;
            };
            /**
             * @description Set to `true` if the project contract is billable.
             * @default false
             * @example true
             */
            isBillable?: boolean;
            attachment?: components["schemas"]["attachment-ref"];
            status?: components["schemas"]["status"];
            /** @description Price fields, calculated from the project contract lines. */
            readonly summary?: {
                /**
                 * Format: decimal-precision-2
                 * @description Total price.
                 * @example 1050.85
                 */
                readonly totalPrice?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Original price.
                 * @example 850.00
                 */
                readonly originalPrice?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Revision price.
                 * @example 1050.85
                 */
                readonly revisionPrice?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Approved change price.
                 * @example 900.00
                 */
                readonly approvedChangePrice?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Pending change price.
                 * @example 150.85
                 */
                readonly pendingChangePrice?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Other price.
                 * @example 0.00
                 */
                readonly otherPrice?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Forecast price.
                 * @example 0.00
                 */
                readonly forecastPrice?: string;
            };
            /** @description Calculated billing amounts. */
            billing?: {
                /**
                 * Format: decimal-precision-2
                 * @description Billed price.
                 * @example 1500.00
                 */
                readonly billedPrice?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total billed net retainage.
                 * @example 1000.00
                 */
                readonly totalBilledNetRetainage?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Percentage billed.
                 * @example 100.00
                 */
                readonly percentBilled?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Percentage billed net retainage.
                 * @example 67.00
                 */
                readonly percentBilledNetRetainage?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total retainage held.
                 * @example 500.00
                 */
                readonly totalRetainageHeld?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total retainage released.
                 * @example 250.00
                 */
                readonly totalRetainageReleased?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Retainage balance.
                 * @example 250.00
                 */
                readonly retainageBalance?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Balance to bill.
                 * @example 500.00
                 */
                readonly balanceToBill?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Balance to bill net retainage.
                 * @example 250.00
                 */
                readonly balanceToBillNetRetainage?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total payments received.
                 * @example 1000.00
                 */
                readonly totalPaymentsReceived?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Net total billed.
                 * @example 1000.00
                 */
                readonly netTotalBilled?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Net total payments received.
                 * @example 1000.00
                 */
                readonly netTotalPaymentsReceived?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Subtotal billed as tax.
                 * @example 150.00
                 */
                readonly subtotalBilledAsTax?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Subtotal billed as discount.
                 * @example 100.00
                 */
                readonly subtotalBilledAsDiscount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Subtotal billed as charge.
                 * @example 0.00
                 */
                readonly subtotalBilledAsCharge?: string;
                /**
                 * @description Last billing application number.
                 * @example A-123
                 */
                lastApplicationNumber?: string;
                /** @description Currency details for the project contract. Used for multi-currency billing. */
                currency?: {
                    /**
                     * @description Currency used for billing on the project contract.
                     * @example USD
                     */
                    billingCurrency?: string;
                    /**
                     * exchangeRate
                     * @description Exchange rate details used to calculate the base amount from the billing currency.
                     */
                    exchangeRate?: {
                        /**
                         * Format: date
                         * @description Exchange rate date for this project contract.
                         * @example 2023-10-15
                         */
                        date?: string;
                        /**
                         * @description Exchange rate type used to calculate the base amount from the transaction amount.
                         * @example Custom
                         */
                        readonly typeId?: string;
                        /**
                         * @description Exchange rate used to calculate the base amount from the transaction amount.
                         * @example 1.0789
                         */
                        rate?: number;
                    };
                };
            };
            /**
             * @description Set to `true to exclude the contract from work-in-progress reports.
             * @default false
             * @example true
             */
            excludeFromWIPReporting?: boolean;
            /**
             * @description Scope.
             * @example Design
             */
            scope?: string;
            /**
             * @description Inclusions.
             * @example Original plan
             */
            inclusions?: string;
            /**
             * @description Exclusions.
             * @example Hardware accessories
             */
            exclusions?: string;
            /**
             * @description Terms
             * @example Standard terms and conditions
             */
            terms?: string;
            /** @description If Advanced Tax or VAT is enabled, the tax schedule used to capture tax details in the project contract transaction. */
            taxSchedule?: {
                /**
                 * @description Unique key for the tax schedule.
                 * @example 19
                 */
                key?: string | null;
                /**
                 * @description Unique ID of the tax schedule.
                 * @example Sale Goods Standard
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the tax schedule.
                 * @example /objects/tax/order-entry-tax-schedule/19
                 */
                readonly href?: string | null;
            };
            /** @description Tax solution used to calculate and capture taxes on the project contract. */
            taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 5
                 */
                key?: string | null;
                /**
                 * @description ID of the tax solution.
                 * @example Australia GST
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/5
                 */
                readonly href?: string | null;
            };
            /** @description General ledger budget posting details for the project contract. */
            glBudgetPosting?: {
                /**
                 * @description Set to `true` to post project contract lines as budget details to general ledger budgets. Requires a value for `postingPeriodBasedOn` and at least one GL to be specified.
                 * @default false
                 * @example false
                 */
                isPosted?: boolean;
                /**
                 * @description Posting period to use when creating GL budget entries from the project contract. Must be a budgetable posting period. Defaults to projectContractDate.
                 *
                 *     * `projectBeginDate` - Post the amounts to the period in which the project contract begin date falls.
                 *     * `projectContractDate` - Post the amounts to the period that corresponds with the project contract `contractDate`. You can change this date, but you can't specify a date before the project contract begin date.
                 *     * `projectContractLineDate` - Post each project contract line to the `contractLineDate` for that line. Each line might post to different periods due to different effective dates. If you choose this option, specify a `contractLineDate` date for each line.
                 *     * `entryEffectiveDate` - Each project contract line entry and change request entry posts to the period containing the entry effective date.
                 * @default projectContractDate
                 * @example projectContractDate
                 * @enum {string}
                 */
                postingPeriodBasedOn?: "projectBeginDate" | "projectContractDate" | "projectContractLineDate" | "entryEffectiveDate";
                /** @description References the General Ledger (GL) budget to post for project contract line entries with `workflowType` as `original`. The budget must have `postProjectContract` set to true. */
                originalGLBudget?: {
                    /**
                     * @description Unique key for the budget.
                     * @example 5
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the budget.
                     * @example KPI Original Budgets
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the budget.
                     * @example /objects/general-ledger/budget/5
                     */
                    readonly href?: string | null;
                };
                /** @description References the General Ledger (GL) budget to post for project contract line entries with `workflowType` as `revision`. The budget must have `postProjectContract` set to true. */
                revisionGLBudget?: {
                    /**
                     * @description Unique key for the budget.
                     * @example 6
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the budget.
                     * @example KPI Revision Budgets
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the budget.
                     * @example /objects/general-ledger/budget/6
                     */
                    readonly href?: string | null;
                };
                /** @description References the General Ledger (GL) budget to post for project contract line entries or change request entries with `workflowType` as `pendingChange`. The budget must have `postProjectContract` set to true. */
                pendingGLBudget?: {
                    /**
                     * @description Unique key for the budget.
                     * @example 7
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the budget.
                     * @example KPI Pending Budgets
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the budget.
                     * @example /objects/general-ledger/budget/7
                     */
                    readonly href?: string | null;
                };
                /** @description References the General Ledger (GL) budget to post for project contract line entries or change request entries with `workflowType` as `approvedChange`. The budget must have `postProjectContract` set to true. */
                approvedGLBudget?: {
                    /**
                     * @description Unique key for the budget.
                     * @example 8
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the budget.
                     * @example KPI Approved Budgets
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the budget.
                     * @example /objects/general-ledger/budget/8
                     */
                    readonly href?: string | null;
                };
                /** @description References the General Ledger (GL) budget to post for project contract line entries with `workflowType` as `forecast`. The budget must have `postProjectContract` set to true. */
                forecastGLBudget?: {
                    /**
                     * @description Unique key for the budget.
                     * @example 9
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the budget.
                     * @example KPI Forecast Budgets
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the budget.
                     * @example /objects/general-ledger/budget/9
                     */
                    readonly href?: string | null;
                };
                /** @description References the General Ledger (GL) budget to post for project contract line entries with `workflowType` as `other`. The budget must have `postProjectContract` set to true. */
                otherGLBudget?: {
                    /**
                     * @description Unique key for the budget.
                     * @example 10
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the budget.
                     * @example KPI Other Budgets
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the budget.
                     * @example /objects/general-ledger/budget/10
                     */
                    readonly href?: string | null;
                };
            };
            schedule?: components["schemas"]["schedule-calendar"];
            internalReference?: components["schemas"]["internal-document-ref"];
            externalReference?: components["schemas"]["external-document-ref"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "construction-project-contractRequiredProperties": Record<string, never>;
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
        /** @description Line entry in a project contract. */
        "objects.construction.project-contract-line": {
            /**
             * @description System-assigned key of the project contract line.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the project contract line .
             * @example 2
             */
            id?: string;
            /**
             * @description URL endpoint of the project contract line.
             * @example /objects/construction/project-contract-line/2
             */
            readonly href?: string;
            /** @description Reference to the project contract that this line belongs to. */
            projectContract?: components["schemas"]["project-contract-ref"];
            /**
             * @description Project contract line name.
             * @example BTI-01: line 2
             */
            name?: string;
            /** @description For nesting lines, the parent project contract line of this project contract line. */
            parent?: {
                /**
                 * @description Parent project contract line key.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Parent project contract line id.
                 * @example PJ-CO-145
                 */
                id?: string;
                /**
                 * @description Parent project contract line name.
                 * @example BTI-01: line 1
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint of the parent project contract line.
                 * @example /objects/construction/project-contract-line/1
                 */
                readonly href?: string;
            };
            /**
             * @description Description of the project contract line.
             * @example Additional services
             */
            description?: string;
            /**
             * Format: date
             * @description Project contract line date.
             * @example 2021-10-06
             */
            contractLineDate?: string;
            glAccount?: components["schemas"]["gl-account-ref"];
            /**
             * Format: decimal-precision-2
             * @description Retainage percentage.
             * @example 10.00
             */
            retainagePercentage?: string;
            /**
             * @description Set to `true if contract line is billable.
             * @default false
             * @example true
             */
            isBillable?: boolean;
            billing?: {
                /**
                 * Format: decimal-precision-2
                 * @description Billed price.
                 * @example 1500.00
                 */
                readonly billedPrice?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Previously applied price, to date.
                 * @example 500.00
                 */
                readonly previouslyAppliedPrice?: string;
                /**
                 * @description External reference number.
                 * @example REF-01
                 */
                externalReferenceNumber?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Billed net retainage.
                 * @example 500.00
                 */
                readonly billedNetRetainage?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Percentage billed.
                 * @example 50.00
                 */
                readonly percentBilled?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Percentage billed net retainage.
                 * @example 5.00
                 */
                readonly percentBilledNetRetainage?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Retainage held.
                 * @example 250.00
                 */
                readonly retainageHeld?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Retainage released.
                 * @example 250.00
                 */
                readonly retainageReleased?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Retainage balance.
                 * @example 250.00
                 */
                readonly retainageBalance?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Payments received.
                 * @example 1250.00
                 */
                readonly paymentsReceived?: string;
            };
            billingSetup?: {
                /**
                 * @description Billing type to use in project contract line.
                 * @default progressBill
                 * @example timeAndMaterial
                 * @enum {string}
                 */
                billingType?: "progressBill" | "timeAndMaterial";
                /**
                 * @description Maximum billing to use in project contract line. If set to `specifiedAmount`, you must provide a value for the `maximumBillingAmount` property. The value can be zero but must not be null.
                 * @default totalPrice
                 * @example specifiedAmount
                 * @enum {string}
                 */
                maximumBilling?: "totalPrice" | "specifiedAmount" | "noMaximum";
                /**
                 * Format: decimal-precision-2
                 * @description Maximum billing amount. If the `maximumBilling` property is set to `specifiedAmount`, you must provide a value for this property. The value can be zero but must not be null.
                 * @example 10000.00
                 */
                maximumBillingAmount?: string;
                /**
                 * @description Summarize to a single entry.
                 * @default false
                 * @example true
                 */
                summarizeBill?: boolean;
            };
            /** @description Pricing for the project contract line. */
            summary?: {
                /**
                 * Format: decimal-precision-2
                 * @description Original price.
                 * @example 500.00
                 */
                originalPrice?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Revision price.
                 * @example 650.00
                 */
                revisionPrice?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Forecast price.
                 * @example 750.00
                 */
                forecastPrice?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Approved change price.
                 * @example 650.00
                 */
                approvedChangePrice?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Pending change price.
                 * @example 100.00
                 */
                pendingChangePrice?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Other price.
                 * @example 90.50
                 */
                otherPrice?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total price.
                 * @example 1048.50
                 */
                totalPrice?: string;
            };
            /** @description Dimensions set for this project contract line. */
            dimensions?: components["schemas"]["dimension-ref"] & {
                location?: components["schemas"]["project-location-ref"];
                customer?: {
                    /**
                     * @description Customer key.
                     * @example 14
                     */
                    key?: string;
                    /**
                     * @description Customer ID.
                     * @example BTI
                     */
                    id?: string;
                    /**
                     * @description Customer name.
                     * @example Berkeley Technology Inc
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint of the customer.
                     * @example /objects/accounts-receivable/customer/14
                     */
                    readonly href?: string;
                };
                department?: {
                    /**
                     * @description Department key.
                     * @example 3
                     */
                    key?: string;
                    /**
                     * @description Department ID.
                     * @example 3
                     */
                    id?: string;
                    /**
                     * @description Department name.
                     * @example Engineering
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint of the department.
                     * @example /objects/company-config/department/3
                     */
                    readonly href?: string;
                };
            };
            /**
             * @description Set to `true` to exclude this line from the from GL budget.
             * @default false
             * @example true
             */
            excludeFromGLBudget?: boolean;
            /**
             * @description Scope.
             * @example Design
             */
            scope?: string;
            /**
             * @description Inclusions.
             * @example Original plan
             */
            inclusions?: string;
            /**
             * @description Exclusions.
             * @example Hardware accessories
             */
            exclusions?: string;
            /**
             * @description Terms
             * @example Standard terms and conditions.
             */
            terms?: string;
            schedule?: components["schemas"]["schedule-calendar"];
            internalReference?: components["schemas"]["internal-document-ref"];
            externalReference?: components["schemas"]["external-document-ref"];
            rateTables?: {
                /** @description Default rate table for billing this project contract line. */
                default?: {
                    /**
                     * @description Rate table key.
                     * @example 1
                     */
                    key?: string;
                    /**
                     * @description Rate table ID.
                     * @example RT-DEFAULT
                     */
                    id?: string;
                    /**
                     * @description URL endpoint of the rate table.
                     * @example /objects/construction/rate-table/1
                     */
                    readonly href?: string;
                };
                /** @description Rate table to use for timesheets recorded on the line. */
                timesheet?: {
                    /**
                     * @description Rate table key.
                     * @example 2
                     */
                    key?: string;
                    /**
                     * @description Rate table ID.
                     * @example RT-TIMESHEET
                     */
                    id?: string;
                    /**
                     * @description URL endpoint of the rate table.
                     * @example /objects/construction/rate-table/2
                     */
                    readonly href?: string;
                };
                /** @description Rate table for contract purchases recorded on this line. */
                purchasing?: {
                    /**
                     * @description Rate table key.
                     * @example 3
                     */
                    key?: string;
                    /**
                     * @description Rate table ID.
                     * @example RT-PURCHASING
                     */
                    id?: string;
                    /**
                     * @description URL endpoint of the rate table.
                     * @example /objects/construction/rate-table/3
                     */
                    readonly href?: string;
                };
                /** @description Rate table for accounts payable transactions on this contract line. */
                ap?: {
                    /**
                     * @description Accounts Payable rate table key.
                     * @example 4
                     */
                    key?: string;
                    /**
                     * @description Rate table ID.
                     * @example RT-AP
                     */
                    id?: string;
                    /**
                     * @description URL endpoint of the rate table.
                     * @example /objects/construction/rate-table/4
                     */
                    readonly href?: string;
                };
                /** @description Rate table for general ledger transactions on this contract line. */
                gl?: {
                    /**
                     * @description Rate table key.
                     * @example 5
                     */
                    key?: string;
                    /**
                     * @description Rate table ID.
                     * @example RT-GL
                     */
                    id?: string;
                    /**
                     * @description URL endpoint of the rate table.
                     * @example /objects/construction/rate-table/5
                     */
                    readonly href?: string;
                };
                /** @description Rate table for credit card transactions on this contract line. */
                creditCard?: {
                    /**
                     * @description Rate table key.
                     * @example 6
                     */
                    key?: string;
                    /**
                     * @description Credit Card rate table ID.
                     * @example RT-CREDITCARD
                     */
                    id?: string;
                    /**
                     * @description URL endpoint of the rate table.
                     * @example /objects/construction/rate-table/6
                     */
                    readonly href?: string;
                };
                /** @description Rate table for employee expenses on this contract line. */
                employeeExpense?: {
                    /**
                     * @description Rate table key.
                     * @example 7
                     */
                    key?: string;
                    /**
                     * @description Rate table ID.
                     * @example RT-EMPEXPENSE
                     */
                    id?: string;
                    /**
                     * @description URL endpoint of the rate table.
                     * @example /objects/construction/rate-table/7
                     */
                    readonly href?: string;
                };
            };
            /** @description If Advanced Tax or VAT is enabled, the tax schedule used to capture tax details in the project contract line. */
            taxSchedule?: {
                /**
                 * @description Unique key for the tax schedule.
                 * @example 19
                 */
                key?: string | null;
                /**
                 * @description Unique ID of the tax schedule.
                 * @example Sale Goods Standard
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the tax schedule.
                 * @example /objects/tax/order-entry-tax-schedule/19
                 */
                readonly href?: string | null;
            };
            /** @description Tax solution used to calculate and capture taxes on the project contract line. This is inherited from the associated project contract and cannot be changed at the project contract line level. */
            readonly taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 5
                 */
                readonly key?: string | null;
                /**
                 * @description ID of the tax solution.
                 * @example Australia GST
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/5
                 */
                readonly href?: string | null;
            };
            /** @description Entries to add pricing to the project contract line at the appropriate workflow type. */
            projectContractLineEntries?: components["schemas"]["objects.construction.project-contract-line-entry"][];
            /** @description Tasks which have been mapped to the project contract line */
            mappedTasks?: components["schemas"]["objects.construction.project-contract-line-task-map"][];
            /** @description Change requests applied to this contract line. */
            changeRequestEntries?: components["schemas"]["objects.construction.change-request-line"][];
            attachment?: components["schemas"]["attachment-ref"];
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "construction-project-contract-lineRequiredProperties": Record<string, never>;
        "objects.construction.project-contract-line-entry": {
            /**
             * @description System-assigned key of the project contract line entry.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the project contract line entry. Same as `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint of the project contract line entry.
             * @example /objects/construction/project-contract-line-entry/1
             */
            readonly href?: string;
            /** @description Reference to the project contract line that owns this entry. */
            projectContractLine?: {
                /**
                 * @description Project contract line key.
                 * @example 4
                 */
                readonly key?: string;
                /**
                 * @description Project contract line ID.
                 * @example 003
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint of the project contract line.
                 * @example /objects/construction/project-contract-line/4
                 */
                readonly href?: string;
            };
            /**
             * @description Workflow type to use.
             * @default original
             * @example revision
             * @enum {string}
             */
            workflowType?: "original" | "revision" | "forecast" | "other";
            dimensions?: components["schemas"]["dimension-ref"] & {
                location?: {
                    /**
                     * @description Location key.
                     * @example 1
                     */
                    key?: string;
                    /**
                     * @description Location ID.
                     * @example 1
                     */
                    id?: string;
                    /**
                     * @description Location name.
                     * @example United States of America
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
                     * @description Department key.
                     * @example 3
                     */
                    key?: string;
                    /**
                     * @description Department ID.
                     * @example 3
                     */
                    id?: string;
                    /**
                     * @description Department name.
                     * @example Engineering
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint of the department.
                     * @example /objects/company-config/department/3
                     */
                    readonly href?: string;
                };
            };
            /**
             * Format: decimal-precision-2
             * @description Quantity.
             * @example 10.00
             */
            quantity?: string;
            /**
             * @description External unit of measure.
             * @example each
             */
            externalUOM?: string;
            /**
             * Format: decimal-precision-2
             * @description Unit price.
             * @example 50.00
             */
            unitPrice?: string;
            /**
             * Format: decimal-precision-2
             * @description Price.
             * @example 250.00
             */
            price?: string;
            /**
             * Format: decimal-precision-2
             * @description Price markup percent.
             * @example 5.00
             */
            priceMarkupPercent?: string;
            /**
             * Format: decimal-precision-2
             * @description Price markup amount.
             * @example 300.00
             */
            priceMarkupAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Line price.
             * @example 750.00
             */
            linePrice?: string;
            /**
             * @description Memo.
             * @example Awaiting approval
             */
            memo?: string;
            /**
             * Format: date
             * @description Price effective date.
             * @example 2023-10-21
             */
            priceEffectiveDate?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "objects.construction.project-contract-type": {
            /**
             * @description System-assigned unique key for the project contract type.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the project contract type.
             * @example COM
             */
            id?: string;
            /**
             * @description Name for the project contract type.
             * @example Commercial
             */
            name?: string;
            /**
             * @description URL endpoint for the project contract type
             * @example /objects/construction/project-contract-type/2
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "construction-project-contract-typeRequiredProperties": Record<string, never>;
        /** @description Project contract line task maps represent the relationship that links a construction project contract line to an associated project task. (Construction subscription) */
        "objects.construction.project-contract-line-task-map": {
            /**
             * @description System-assigned unique key for the project contract line task map.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the project contract line task map. This value is the same as `key` for this object.
             * @example 2
             */
            readonly id?: string;
            /** @description References the project within which the contract line is linked to the task by the map. */
            project?: {
                /**
                 * @description Unique key for the project.
                 * @example 4
                 */
                key?: string;
                /**
                 * @description Identifier for the project.
                 * @example 003
                 */
                id?: string;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/4
                 */
                readonly href?: string;
            };
            /** @description References the project task that is linked to the contract line by the map. */
            task?: {
                /**
                 * @description Unique key for the task.
                 * @example 4
                 */
                key?: string;
                /**
                 * @description Identifier for the task.
                 * @example 003
                 */
                id?: string;
                /**
                 * @description URL endpoint for the task.
                 * @example /objects/projects/task/4
                 */
                readonly href?: string;
            };
            /** @description References the project contract line that is linked to the task by the map. */
            projectContractLine?: {
                /**
                 * @description Unique key for the project contract line.
                 * @example 4
                 */
                key?: string;
                /**
                 * @description Identifier for the project contract line.
                 * @example 003
                 */
                id?: string;
                /**
                 * @description URL endpoint for the project contract line.
                 * @example /objects/construction/project-contract-line/4
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the project contract line task map.
             * @example /objects/construction/project-contract-line-task-map/2
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s2"];
        };
        "construction-project-contract-line-task-mapRequiredProperties": Record<string, never>;
        /** @description cost-type-observed-percent-completed */
        "objects.construction.cost-type-observed-percent-completed": {
            /**
             * @description System-assigned key for the observed-percent-completed object.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Observed percent completed ID. Same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * Format: date
             * @description Observation date.
             * @example 2024-05-05
             */
            asOfDate?: string;
            /**
             * Format: decimal-precision-2
             * @description Percent completed by the `asOfDate`.
             * @example 25
             */
            percentComplete?: string;
            /**
             * @description Note for the completion entry.
             * @example Signed off by J.Manager
             */
            notes?: string;
            audit?: components["schemas"]["audit.s1"];
        } & {
            /** @description Cost type that this observed percent completed entry applies to. */
            costType?: {
                /**
                 * @description Cost type key.
                 * @example 14
                 */
                key?: string;
                /**
                 * @description Cost type ID.
                 * @example EQ-Rental
                 */
                id?: string;
                /**
                 * @description Name of the cost type.
                 * @example EQ-Rental
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the cost type.
                 * @example /objects/construction/cost-type/14
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the cost-type-observed-percent-completed.
             * @example /objects/construction/cost-type-observed-percent-completed/14
             */
            readonly href?: string;
        };
        "construction-cost-type-observed-percent-completedRequiredProperties": Record<string, never>;
        /** @description Project contract billing invoice detail enables a Construction customer to properly report on project contract billing totals and are instrumental in creating Industry-standard invoice templates. The fields in these objects display the detail of the contract value, the amount that has been billed, is left to bill and the retainage held and billed during the contract duration for the lines. */
        "objects.construction.project-contract-billing-invoice-detail": {
            /**
             * @description System-assigned unique key for the project contract billing invoice detail.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description SUnique identifier for the project contract billing invoice detail. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the project contract billing invoice detail.
             * @example /objects/construction/project-contract-billing-invoice-detail/23
             */
            readonly href?: string;
            /**
             * @description External reference number for the associated project contract line.
             * @example HGS-EX-1024
             */
            readonly externalReferenceNumber?: string | null;
            /**
             * @description Internal reference number for the associated project contract line.
             * @example HGS-IN-0645
             */
            readonly internalReferenceNumber?: string | null;
            /** @description Project contract billing line totals. */
            billingTotals?: {
                /**
                 * Format: decimal-precision-10
                 * @description Original contract amount.
                 * @example 1000.00
                 */
                readonly originalContractAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Net approved changes amount.
                 * @example 1000.00
                 */
                readonly netApprovedChangesAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Revised contracts amount.
                 * @example 1000.00
                 */
                readonly revisedContractAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Completed from prior applications amount.
                 * @example 1000.00
                 */
                readonly completedFromPriorApplicationAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Completed this period amount.
                 * @example 1000.00
                 */
                readonly completedThisPeriodAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Stored materials amount.
                 * @example 1000.00
                 */
                readonly storedMaterialsAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Total completed to date amount.
                 * @example 1000.00
                 */
                readonly completedToDateAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Percentage completed to date.
                 * @example 10.00
                 */
                readonly completedToDatePercent?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Current amount due.
                 * @example 1000.00
                 */
                readonly currentDueAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Balance to finish amount.
                 * @example 1000.00
                 */
                readonly balanceToFinishAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Billed amount.
                 * @example 1000.00
                 */
                readonly billedAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Taxes.
                 * @example 1000.00
                 */
                readonly taxAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Discounts.
                 * @example 1000.00
                 */
                readonly discountAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Charges.
                 * @example 1000.00
                 */
                readonly chargeAmount?: string;
                /** @description Project contract line changes approved for the prior month. */
                changesApprovedPriorMonths?: {
                    /**
                     * Format: decimal-precision-10
                     * @description Addition changes approved in prior months.
                     * @example 1000.00
                     */
                    readonly additionsAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Deduction changes approved in prior months.
                     * @example 1000.00
                     */
                    readonly deductionsAmount?: string;
                };
                /** @description Project contract line changes approved for the current month. */
                changesApprovedThisMonth?: {
                    /**
                     * Format: decimal-precision-10
                     * @description Addition changes approved this month.
                     * @example 1000.00
                     */
                    readonly additionsAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Deduction changes approved this month.
                     * @example 1000.00
                     */
                    readonly deductionsAmount?: string;
                };
                /** @description Project contract line retainage totals. */
                retainage?: {
                    /**
                     * Format: decimal-precision-2
                     * @description Retainage percentage.
                     * @example 10.00
                     */
                    percentage?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Invoice amount retained.
                     * @example 1000.00
                     */
                    readonly amountRetained?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Invoice retainage billed.
                     * @example 1000.00
                     */
                    readonly billedAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Net change retainage held.
                     * @example 1000.00
                     */
                    readonly netChangeHeldAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Retainage held to date.
                     * @example 1000.00
                     */
                    readonly heldToDateAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Retainage billed to date.
                     * @example 1000.00
                     */
                    readonly billedToDateAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Retainage balance to date.
                     * @example 1000.00
                     */
                    readonly balanceToDateAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Previous retainage balance.
                     * @example 1000.00
                     */
                    readonly previousBalanceAmount?: string;
                };
            };
            /** @description Project contract associated to the project contract billing invoice detail. */
            projectContract?: components["schemas"]["project-contract-ref"] & {
                /**
                 * @description System-assigned key for the project contract.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the project contract.
                 * @example BTI-01
                 */
                readonly id?: string;
            };
            /** @description Project contract line associated to the project contract billing invoice detail. */
            projectContractLine?: components["schemas"]["project-contract-line-ref"] & {
                /**
                 * @description Project contract line key.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Project contract line ID.
                 * @example BTI-Line-04
                 */
                readonly id?: string;
                /**
                 * @description Project contract line name.
                 * @example Berkeley Technology Inc - Line 04
                 */
                readonly name?: string;
                /**
                 * @description Description for the project contract line.
                 * @example Berkeley Technology Inc - Line 04
                 */
                readonly description?: string | null;
                /**
                 * @description Set to `true` if contract line is billable.
                 * @default false
                 * @example true
                 */
                readonly isBillable?: boolean;
                /**
                 * @description URL endpoint for the project contract line.
                 * @example /objects/construction/project-contract-line/1
                 */
                readonly href?: string;
            };
            /** @description Project associated with the project contract billing invoice detail. */
            project?: {
                /**
                 * @description Project key.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Project ID.
                 * @example DIM-BTI
                 */
                readonly id?: string;
                /**
                 * @description Project name.
                 * @example Dimensions - Berkeley Technology Inc
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/1
                 */
                readonly href?: string;
            };
            /** @description Task associated with the project contract billing invoice detail. */
            task?: {
                /**
                 * @description Task key.
                 * @example 1
                 */
                readonly key?: string | null;
                /**
                 * @description Task ID.
                 * @example DIM-BTI-Design
                 */
                readonly id?: string | null;
                /**
                 * @description Task name.
                 * @example Dimensions - Berkeley Technology Inc - Design
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the task.
                 * @example /objects/projects/task/1
                 */
                readonly href?: string;
            };
            /** @description Project contract billing invoice summary that the project contract billing invoice detail is part of. */
            projectContractBillingInvoiceSummary?: {
                /**
                 * @description Project contract billing invoice summary key.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Project contract billing invoice summary ID.
                 * @example 1
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the project contract billing invoice summary.
                 * @example /objects/construction/project-contract-billing-invoice-summary/1
                 */
                readonly href?: string;
            };
            /** @description Order Entry document associated with the project contract billing invoice detail. */
            orderEntryDocument?: {
                /**
                 * @description Order Entry document key.
                 * @example 44
                 */
                readonly key?: string | null;
                /**
                 * @description Order Entry document ID.
                 * @example SO-AIA-Invoice01-Ord#0011#doc
                 */
                readonly id?: string | null;
                /**
                 * @description Order Entry document number.
                 * @example Ord#0011#doc
                 */
                readonly documentNumber?: string | null;
                /**
                 * @description URL endpoint for the Order Entry document.
                 * @example /objects/order-entry/document::SO-AIA-Invoice01/44
                 */
                readonly href?: string;
            };
            /** @description Accounts Receivable invoice associated with the project contract billing invoice detail. */
            accountsReceivableInvoice?: {
                /**
                 * @description Accounts Receivable invoice detail.
                 * @example 23
                 */
                readonly key?: string | null;
                /**
                 * @description Accounts Receivable invoice ID.
                 * @example 23
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the Accounts Receivable invoice.
                 * @example /objects/accounts-receivable/invoice/23
                 */
                readonly href?: string;
            };
            /** @description The entity that the project contract billing invoice detail is associated with. Objects created at the top level do not have an entity reference so the `key`, `id`, and `name` properties will be `null`. */
            readonly entity?: {
                /**
                 * @description Entity key.
                 * @example 54
                 */
                readonly key?: string | null;
                /**
                 * @description Entity ID.
                 * @example Western Region
                 */
                readonly id?: string | null;
                /**
                 * @description Entity name.
                 * @example Western Region
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/54
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description Project contract billing invoice summary enables a Construction customer to properly report on project contract billing totals and are instrumental in creating Industry-standard invoice templates. The fields in these objects display the detail of the contract value, the amount that has been billed, is left to bill and the retainage held and billed during the contract duration. */
        "objects.construction.project-contract-billing-invoice-summary": {
            /**
             * @description System-assigned unique key for the project contract billing invoice summary.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the project contract billing invoice summary. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the project contract billing invoice summary.
             * @example /objects/construction/project-contract-billing-invoice-summary/23
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Billing through date for the Order Entry document or Account Receivable Invoice.
             * @example 2024-05-08
             */
            readonly billingThroughDate?: string | null;
            /**
             * @description Billing application number for the Order Entry document or Account Receivable Invoice.
             * @example IA-89115
             */
            readonly billingApplicationNumber?: string | null;
            /** @description Project contract billing totals for all the lines on the Order Entry document or Account Receivable Invoice. */
            billingTotals?: {
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the original contract amounts.
                 * @example 1000.00
                 */
                readonly originalContractAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the net approved changes amounts.
                 * @example 1000.00
                 */
                readonly netApprovedChangesAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the revised contracts amounts.
                 * @example 1000.00
                 */
                readonly revisedContractAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the completed from prior applications amounts.
                 * @example 1000.00
                 */
                readonly completedFromPriorApplicationAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the completed to date amounts.
                 * @example 1000.00
                 */
                readonly completedToDateAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the less previous billing amounts.
                 * @example 1000.00
                 */
                readonly lessPreviousBillingAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the current due amounts.
                 * @example 1000.00
                 */
                readonly currentDueAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the balance to finish amounts.
                 * @example 1000.00
                 */
                readonly balanceToFinishAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the taxes.
                 * @example 1000.00
                 */
                readonly taxAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the charges.
                 * @example 1000.00
                 */
                readonly chargeAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the discounts.
                 * @example 1000.00
                 */
                readonly discountAmount?: string | null;
                /** @description Project contract billing changes approved for the prior month on the Order Entry document or Account Receivable Invoice. */
                changesApprovedPriorMonths?: {
                    /**
                     * Format: decimal-precision-10
                     * @description Sum of the additions changes approved in prior months.
                     * @example 1000.00
                     */
                    readonly additionsAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Sum of the deductions changes approved in prior months.
                     * @example 1000.00
                     */
                    readonly deductionsAmount?: string;
                };
                /** @description Project contract billing changes approved for the current month on the Order Entry document or Account Receivable Invoice. */
                changesApprovedThisMonth?: {
                    /**
                     * Format: decimal-precision-10
                     * @description Sum of the addition changes approved this month.
                     * @example 1000.00
                     */
                    readonly additionsAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Sum of the deduction changes approved this month.
                     * @example 1000.00
                     */
                    readonly deductionsAmount?: string;
                };
                /** @description Retainage totals. */
                retainage?: {
                    /**
                     * Format: decimal-precision-10
                     * @description Sum of the invoice amounts retained.
                     * @example 1000.00
                     */
                    readonly amountRetained?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Sum of the invoice retainage billed.
                     * @example 1000.00
                     */
                    readonly billedAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Sum of the net change retainage held.
                     * @example 1000.00
                     */
                    readonly netChangeHeldAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Sum of the retainage held to date.
                     * @example 1000.00
                     */
                    readonly heldToDateAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Sum of the retainage billed to date.
                     * @example 1000.00
                     */
                    readonly billedToDateAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Sum of the retainage balance to date.
                     * @example 1000.00
                     */
                    readonly balanceToDateAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Sum of the previous retainage balance.
                     * @example 1000.00
                     */
                    readonly previousBalanceAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Sum of the total earned less retainage.
                     * @example 1000.00
                     */
                    readonly totalEarnedLessAmount?: string;
                };
            };
            /** @description Project contract associated with the project contract billing invoice summary. */
            readonly projectContract?: components["schemas"]["project-contract-ref"] & {
                /**
                 * @description Project contract key.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Project contract ID.
                 * @example BTI-01
                 */
                readonly id?: string;
                /**
                 * @description Project contract name.
                 * @example Berkeley Technology Inc - Contract 01
                 */
                readonly name?: string;
            };
            /** @description Order Entry document associated with the project contract billing invoice summary. */
            readonly orderEntryDocument?: {
                /**
                 * @description Order Entry document key.
                 * @example 44
                 */
                readonly key?: string | null;
                /**
                 * @description Order Entry document ID.
                 * @example SO-AIA-Invoice01-Ord#0011#doc
                 */
                readonly id?: string | null;
                /**
                 * @description Order Entry document number.
                 * @example Ord#0011#doc
                 */
                readonly documentNumber?: string | null;
                /**
                 * @description URL endpoint for the Order Entry document.
                 * @example /objects/order-entry/document::SO-AIA-Invoice01/44
                 */
                readonly href?: string;
            };
            /** @description Accounts Receivable invoice associated with the project contract billing invoice summary. */
            readonly accountsReceivableInvoice?: {
                /**
                 * @description Accounts Receivable invoice key.
                 * @example 23
                 */
                readonly key?: string | null;
                /**
                 * @description Accounts Receivable invoice ID.
                 * @example 23
                 */
                readonly id?: string | null;
                /**
                 * @description Accounts Receivable invoice number.
                 * @example INV1
                 */
                readonly invoiceNumber?: string | null;
                /**
                 * @description URL endpoint for the Accounts Receivable invoice.
                 * @example /objects/accounts-receivable/invoice/23
                 */
                readonly href?: string;
            };
            /** @description Project associated with the project contract for the project contract billing invoice summary. */
            readonly project?: {
                /**
                 * @description Project key.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Project ID.
                 * @example DIM - HCS
                 */
                readonly id?: string;
                /**
                 * @description Project name.
                 * @example Dimensions - Hands Computer Systems
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/1
                 */
                readonly href?: string;
            };
            /** @description The entity that the project contract billing invoice summary is associated with. Objects created at the top level do not have an entity reference so the `key`, `id`, and `name` properties will be `null`. */
            readonly entity?: {
                /**
                 * @description Entity key.
                 * @example 54
                 */
                readonly key?: string | null;
                /**
                 * @description Entity ID.
                 * @example Western Region
                 */
                readonly id?: string | null;
                /**
                 * @description Entity name.
                 * @example Western Region
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/54
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description A project contract rate table provides markup and pricing information to be used for generating project generated invoices. */
        "objects.construction.rate-table": {
            /**
             * @description System-assigned unique key for the construction rate table.
             * @example 145
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the construction rate table.
             * @example 2024-LV2
             */
            id?: string;
            /**
             * @description Name for the construction rate table.
             * @example 2025 Level 2
             */
            name?: string;
            /**
             * @description Description of the construction rate table.
             * @example 2025 Level 2 Rate Table.
             */
            description?: string;
            location?: components["schemas"]["location-ref"];
            audit?: components["schemas"]["audit.s1"];
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            /** @description References a collection of timesheet lines associated with the construction rate table. */
            timesheetLines?: components["schemas"]["objects.construction.rate-table-timesheet-line"][];
            /** @description References a collection of purchasing lines associated with the construction rate table. */
            purchasingLines?: components["schemas"]["objects.construction.rate-table-purchasing-line"][];
            /** @description References a collection of accounts payable lines associated with the construction rate table. */
            accountsPayableLines?: components["schemas"]["objects.construction.rate-table-accounts-payable-line"][];
            /** @description References a collection of journal lines associated with the construction rate table. */
            journalLines?: components["schemas"]["objects.construction.rate-table-journal-line"][];
            /** @description References a collection of credit card lines associated with the construction rate table. */
            creditCardLines?: components["schemas"]["objects.construction.rate-table-credit-card-line"][];
            /** @description References a collection of employee expense lines associated with the construction rate table. */
            employeeExpenseLines?: components["schemas"]["objects.construction.rate-table-employee-expense-line"][];
        };
        "construction-rate-tableRequiredProperties": Record<string, never>;
        /** @description Construction rate table accounts payable lines contain criteria for applying a default markup percentage to matching accounts payable transactions during invoicing. */
        "objects.construction.rate-table-accounts-payable-line": {
            /**
             * @description System-assigned unique key for the accounts payable line.
             * @example 397
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the accounts payable line. This value is the same as `key` for this object.
             * @example 397
             */
            readonly id?: string;
            rateTable?: components["schemas"]["rate-table-ref"];
            /**
             * @description URL endpoint for the accounts payable line.
             * @example /objects/construction/rate-table-accounts-payable-line/397
             */
            readonly href?: string;
            /**
             * @description Specifies the position of the line in the sequence which determines the order in which rates are applied.
             * @example 1
             */
            lineNumber?: number;
            /**
             * @description Provides a brief description of the accounts payable line in the rate table.
             * @example Subcontractor costs - Standard Markup.
             */
            description?: string;
            /**
             * Format: date
             * @description Indicates the date from which the accounts payable line becomes effective. This is the date when these rates can be applied to accounts payable entries that are included for billing in invoices generated on or after this date.
             * @example 2021-08-01
             */
            startDate?: string;
            /**
             * Format: decimal-precision-3
             * @description Specifies the markup percent for the accounts payable line. The default value is `0%`.
             * @example 25.5
             */
            markupPercent?: string;
            accumulationType?: components["schemas"]["accumulation-type-ref"];
            standardCostType?: components["schemas"]["standard-cost-type-ref"];
            standardTask?: components["schemas"]["standard-task-ref"];
            dimensions?: components["schemas"]["dimension-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Construction rate table credit card lines contain criteria for applying a default markup percentage to matching credit card transactions during invoicing. */
        "objects.construction.rate-table-credit-card-line": {
            /**
             * @description System-assigned unique key for the credit card line.
             * @example 145
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the credit card line. This value is the same as `key` for this object.
             * @example 145
             */
            readonly id?: string;
            rateTable?: components["schemas"]["rate-table-ref"];
            /**
             * @description URL endpoint for the credit card line.
             * @example /objects/construction/rate-table-credit-card-line/145
             */
            readonly href?: string;
            /**
             * @description Specifies the position of the line in the sequence which determines the order in which rates are applied.
             * @example 1
             */
            lineNumber?: number;
            /**
             * @description Provides a brief description of the credit card line in the rate table.
             * @example Corporate Card - Supplies Pricing.
             */
            description?: string;
            /**
             * Format: date
             * @description Indicates the date from which the credit card line becomes effective. This is the date when these rates can be applied to credit card charges that are included for billing in invoices generated on or after this date.
             * @example 2021-08-03
             */
            startDate?: string;
            /**
             * Format: decimal-precision-3
             * @description Specifies the markup percent for the credit card line. The default value is `0%`.
             * @example 15.900
             */
            markupPercent?: string;
            accumulationType?: components["schemas"]["accumulation-type-ref"];
            standardCostType?: components["schemas"]["standard-cost-type-ref"];
            standardTask?: components["schemas"]["standard-task-ref"];
            dimensions?: components["schemas"]["dimension-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Construction rate table employee expense lines contain criteria for applying a default markup percentage to matching employee expense transactions during invoicing. */
        "objects.construction.rate-table-employee-expense-line": {
            /**
             * @description System-assigned unique key for the employee expense line.
             * @example 30
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the employee expense line. This value is the same as `key` for this object.
             * @example 30
             */
            readonly id?: string;
            rateTable?: components["schemas"]["rate-table-ref"];
            /**
             * @description URL endpoint for the employee expense line.
             * @example /objects/construction/rate-table-employee-expense-line/30
             */
            readonly href?: string;
            /**
             * @description Specifies the position of the line in the sequence which determines the order in which rates are applied.
             * @example 1
             */
            lineNumber?: number;
            /**
             * @description Provides a brief description of the employee expense line in the rate table.
             * @example Employee Expenses - Training Costs.
             */
            description?: string;
            /**
             * Format: date
             * @description Indicates the date from which the employee expense line becomes effective. This is the date when these rates can be applied to employee expense entries that are included for billing in invoices generated on or after this date.
             * @example 2024-08-02
             */
            startDate?: string;
            /**
             * Format: decimal-precision-3
             * @description Specifies the markup percent for the employee expense line. The default value is `0%`.
             * @example 14.800
             */
            markupPercent?: string;
            accumulationType?: components["schemas"]["accumulation-type-ref"];
            standardCostType?: components["schemas"]["standard-cost-type-ref"];
            standardTask?: components["schemas"]["standard-task-ref"];
            dimensions?: components["schemas"]["dimension-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Construction rate table journal lines contain criteria for applying a default markup percentage to matching general ledger transactions during invoicing. */
        "objects.construction.rate-table-journal-line": {
            /**
             * @description System-assigned unique key for the journal line.
             * @example 64
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the journal line. This value is the same as `key` for this object.
             * @example 64
             */
            readonly id?: string;
            rateTable?: components["schemas"]["rate-table-ref"];
            /**
             * @description URL endpoint for the journal line.
             * @example /objects/construction/rate-table-journal-line/64
             */
            readonly href?: string;
            /**
             * @description Specifies the position of the line in the sequence which determines the order in which rates are applied.
             * @example 1
             */
            lineNumber?: number;
            /**
             * @description Provides a brief description of the journal line in the rate table.
             * @example Overhead Allocation - Project.
             */
            description?: string;
            /**
             * Format: date
             * @description Indicates the date from which the journal line becomes effective. This is the date when these rates can be applied to general ledger entries that are included for billing in invoices generated on or after this date.
             * @example 2021-08-01
             */
            startDate?: string;
            /**
             * Format: decimal-precision-3
             * @description Specifies the markup percent for the journal line. The default value is `0%`.
             * @example 12.500
             */
            markupPercent?: string;
            accumulationType?: components["schemas"]["accumulation-type-ref"];
            standardCostType?: components["schemas"]["standard-cost-type-ref"];
            standardTask?: components["schemas"]["standard-task-ref"];
            dimensions?: components["schemas"]["dimension-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Construction rate table purchasing lines contain criteria for applying a default markup percentage or unit price to matching purchasing transactions during invoicing. */
        "objects.construction.rate-table-purchasing-line": {
            /**
             * @description System-assigned unique key for the purchasing line.
             * @example 176
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the purchasing line. This value is the same as `key` for this object.
             * @example 176
             */
            readonly id?: string;
            rateTable?: components["schemas"]["rate-table-ref"];
            /**
             * @description URL endpoint for the purchasing line.
             * @example /objects/construction/rate-table-purchasing-line/176
             */
            readonly href?: string;
            /**
             * @description Specifies the position of the line in the sequence which determines the order in which rates are applied.
             * @example 1
             */
            lineNumber?: number;
            /**
             * @description Provides a brief description of the purchasing line in the rate table.
             * @example Purchase Overhead - Markup and Unit Price.
             */
            description?: string;
            /**
             * Format: date
             * @description Indicates the date from which the purchasing line becomes effective. This is the date when these rates can be applied to purchase orders that are included for billing in invoices generated on or after this date.
             * @example 2024-08-03
             */
            startDate?: string;
            /**
             * Format: decimal-precision-3
             * @description Specifies the markup percent for the purchasing line. The default value is `0%`.
             * @example 15.9
             */
            markupPercent?: string;
            /**
             * Format: decimal-precision-3
             * @description Specifies the unit price of a purchased item, for example `dimensions.item` is required with `unitPrice`.
             * @example 112.560
             */
            unitPrice?: string;
            item?: components["schemas"]["item-ref"];
            accumulationType?: components["schemas"]["accumulation-type-ref"];
            standardCostType?: components["schemas"]["standard-cost-type-ref"];
            standardTask?: components["schemas"]["standard-task-ref"];
            dimensions?: components["schemas"]["dimension-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Construction rate table timesheet lines contain criteria for applying a default markup percentage or labor rate to matching timesheet transactions during invoicing. */
        "objects.construction.rate-table-timesheet-line": {
            /**
             * @description System-assigned unique key for the timesheet line.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the timesheet line. This value is the same as `key` for this object.
             * @example 12
             */
            readonly id?: string;
            rateTable?: components["schemas"]["rate-table-ref"];
            /**
             * @description URL endpoint for the timesheet line.
             * @example /objects/construction/rate-table-timesheet-line/12
             */
            readonly href?: string;
            /**
             * @description Specifies the position of the line in the sequence which determines the order in which rates are applied.
             * @example 1
             */
            lineNumber?: number;
            /**
             * @description Provides a brief description of the timesheet line in the rate table.
             * @example Labor Time - Overtime Pricing.
             */
            description?: string;
            /**
             * Format: date
             * @description Indicates the date from which the timesheet line becomes effective. This is the date when these rates can be applied to timesheet entries that are included for billing in invoices generated on or after this date.
             * @example 2021-08-03
             */
            startDate?: string;
            /**
             * Format: decimal-precision-3
             * @description Specifies the markup percent for the timesheet line. The default value is `0%`. Cannot be used with `laborRate`.
             * @example 8.250
             */
            markupPercent?: string;
            /**
             * Format: decimal-precision-3
             * @description Specifies the labor rate for the timesheet line. This field cannot be used with `markupPercent`.
             * @example 115.500
             */
            laborRate?: string;
            accumulationType?: components["schemas"]["accumulation-type-ref"];
            standardCostType?: components["schemas"]["standard-cost-type-ref"];
            standardTask?: components["schemas"]["standard-task-ref"];
            /** @description References the employee position used to apply this rate on timesheets. */
            employeePosition?: {
                /**
                 * @description Unique key for the employee position.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Identifier for the employee position.
                 * @example COO
                 */
                id?: string;
                /**
                 * @description Name for the employee position.
                 * @example Chief Executive Officer
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the employee position.
                 * @example /objects/construction/employee-position/2
                 */
                readonly href?: string;
            };
            /** @description References a labor class used to apply this rate on timesheets. */
            laborClass?: {
                /**
                 * @description Unique key for the labor class.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Identifier for the labor class.
                 * @example CTS-002
                 */
                id?: string;
                /**
                 * @description Name for the labor class.
                 * @example Construction Training Specialist
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the labor class.
                 * @example /objects/construction/labor-class/2
                 */
                readonly href?: string;
            };
            /** @description References a labor shift used to apply this rate on timesheets. */
            laborShift?: {
                /**
                 * @description Unique key for the labor shift.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Identifier for the labor shift.
                 * @example LS-2
                 */
                id?: string;
                /**
                 * @description Name for the labor shift.
                 * @example Day Shift - 10am to 6pm PST
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the labor shift.
                 * @example /objects/construction/labor-shift/2
                 */
                readonly href?: string;
            };
            /** @description References a labor union used to apply this rate on timesheets. */
            laborUnion?: {
                /**
                 * @description Unique key for the labor union.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Identifier for the labor union.
                 * @example IUOE-002
                 */
                id?: string;
                /**
                 * @description Name for the labor union.
                 * @example International Union of Operating Engineers (IUOE)
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the labor union.
                 * @example /objects/construction/labor-union/2
                 */
                readonly href?: string;
            };
            /** @description References a time type used to apply this rate on timesheets. */
            timeType?: {
                /**
                 * @description Unique key for the time type
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the time type
                 * @example Non-Billable
                 */
                id?: string;
                /**
                 * @description URL endpoint for the time type.
                 * @example /objects/time/time-type/1
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description A project estimate lets you compare estimated costs for a project against the actual amounts posted. */
        "objects.construction.project-estimate": {
            /**
             * @description System-assigned unique key for the project estimate. Used to identify the estimate in URLs or JSON bodies for all operations.
             * @example 427
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the project estimate.
             * @example BTI-Estimate-01
             */
            id?: string;
            /**
             * @description URL endpoint URL for the project estimate.
             * @example /objects/construction/project-estimate/1
             */
            readonly href?: string;
            /**
             * @description Description of the project estimate.
             * @example Estimation for BTI
             */
            description?: string;
            /**
             * @description Posting period for the project estimate.
             *
             *     * `firstPeriod` - Post the amounts to the period in which the project begin date falls.
             *     * `estimateDate` - Post estimate entries to the period that corresponds with the project `estimateDate`. You can change this date, but you can't enter a date before the project begin date.
             *     * `effectiveDate` - Post each estimate line entry to the effective date for that line. Each line might post to different periods due to different effective dates. If you choose this option, enter an effective date for each line entry. Multiple estimate line entries for the same GL account, dimension, and budget period are summarized and posted as a single line to the same budget period.
             *     * `allPeriods` - Spread the amounts equally across periods between the project begin and end date.
             * @default firstPeriod
             * @example firstPeriod
             * @enum {string}
             */
            postTo?: "firstPeriod" | "estimateDate" | "effectiveDate" | "allPeriods";
            /**
             * @description Total amount of the estimate.
             * @example 10000.00
             */
            readonly totalEstimateAmount?: string;
            /**
             * @description The project estimate status.
             *
             *     * `active` - For current estimates.
             *     * `inactive` - For historical estimates, such as an original customer bid.
             *     * `finalized` - Lock the estimate from further changes. You can change a finalized estimate to active status at any time.
             * @default active
             * @example active
             * @enum {string}
             */
            status?: "active" | "inactive" | "finalized";
            /**
             * @description Specifies whether the estimate is primary for the project. During create, the first estimate for a project is set to primary. This value can be changed in an update.
             * @default false
             * @example false
             */
            isPrimary?: boolean;
            /**
             * @description Specifies whether the estimate is the primary forecast for the project. This value can be changed in an update. There can be at most one primary forecast for a project. When this value is set to true in a create or an update, then the 'isPrimaryForecast' value for all other estimates is set to false.
             * @default false
             * @example false
             */
            isPrimaryForecast?: boolean;
            /**
             * @description Specifies whether the estimate is posted to GL budgets. In an update, if this is set to false, then any existing GL budgets for that project estimate will be deleted.
             * @default false
             * @example false
             */
            isPosted?: boolean;
            /**
             * Format: date
             * @description Date of the project estimate, which must be in a budgetable period.
             * @example 2022-06-23
             */
            estimateDate?: string;
            /**
             * @description Currency derived from the Project.
             * @example USD
             */
            readonly currency?: string;
            /** @description Reference to the budget that the estimate will be posted to. The budget must have `postProjectEstimates` set to `true`. */
            budget?: {
                /**
                 * @description Key for the budget.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Budget ID.
                 * @example Root PJ Estimates
                 */
                id?: string;
                /**
                 * @description URL endpoint for the budget.
                 * @example /objects/general-ledger/budget/10
                 */
                readonly href?: string;
            };
            /** @description Reference to the project that this estimate is for. */
            project?: {
                /**
                 * @description Project key.
                 * @example 27
                 */
                key?: string;
                /**
                 * @description Project ID.
                 * @example BPN-PRJ-01
                 */
                id?: string;
                /**
                 * @description Name for the project.
                 * @example BPN-PRJ-01
                 */
                readonly name?: string;
                /**
                 * Format: date
                 * @description Date on which the project is scheduled to begin.
                 * @example 2023-06-23
                 */
                readonly startDate?: string;
                /**
                 * Format: date
                 * @description Date on which the project is scheduled to end.
                 * @example 2023-09-23
                 */
                readonly endDate?: string;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/27
                 */
                readonly href?: string;
            };
            /** @description Reference to the project estimate type. */
            projectEstimateType?: {
                /**
                 * @description Key of the project estimate type.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description Project estimate type ID.
                 * @example Original
                 */
                id?: string;
                /**
                 * @description Selected estimate line workflow types for the project estimate type.
                 * @example [
                 *       "original"
                 *     ]
                 */
                readonly workflowTypes?: (null | "original" | "revision" | "forecast" | "approvedChange" | "pendingChange" | "other")[];
                /**
                 * @description URL endpoint for the project estimate type.
                 * @example /objects/construction/project-estimate-type/15
                 */
                readonly href?: string;
            };
            /** @description Reference to the project location. */
            readonly location?: {
                /**
                 * @description Location key.
                 * @example 3
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the location.
                 * @example SEA
                 */
                readonly id?: string;
                /**
                 * @description Name of the location.
                 * @example Seattle
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/3
                 */
                readonly href?: string;
            };
            /** @description Reference to the parent project. */
            readonly parentProject?: {
                /**
                 * @description Parent project key.
                 * @example 105
                 */
                readonly key?: string;
                /**
                 * @description Parent project ID.
                 * @example BPN-PRJ-01
                 */
                readonly id?: string;
                /**
                 * @description Name of the parent project.
                 * @example Gymnasium remodel
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the parent project.
                 * @example /objects/projects/project/105
                 */
                readonly href?: string;
            };
            /** @description Reference to the project customer. */
            readonly customer?: {
                /**
                 * @description Key for the customer.
                 * @example 2
                 */
                readonly key?: string;
                /**
                 * @description Customer ID.
                 * @example BPN-CUST-01
                 */
                readonly id?: string;
                /**
                 * @description Customer name.
                 * @example City Schools
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the Customer.
                 * @example /objects/accounts-receivable/customer/15
                 */
                readonly href?: string;
            };
            /** @description Array of project estimate lines. */
            projectEstimateLines?: components["schemas"]["objects.construction.project-estimate-line"][];
            /** @description Supporting documents for this project estimate. */
            attachment?: {
                /**
                 * @description Key for the attachment.
                 * @example 21
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the attachment.
                 * @example Sales01
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/21
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "construction-project-estimateRequiredProperties": Record<string, never>;
        /** @description Project estimate line is an amount that can be tied to cost types (categories in the work breakdown structure), tasks, items, or other aspects of your project. */
        "objects.construction.project-estimate-line": {
            /**
             * @description System-assigned unique key for the project estimate line.
             * @example 198
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the project estimate line. Same as `key` for this object.
             * @example 198
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the project estimate line.
             * @example /objects/construction/project-estimate-line/1
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount for the project estimate line.
             * @example 2000.00
             */
            amount?: string;
            /**
             * @description Quantity for the project estimate line.
             * @example 10
             */
            quantity?: string;
            /**
             * Format: decimal-precision-2
             * @description Unit rate for the project estimate line.
             * @example 1000.00
             */
            unitCost?: string;
            /**
             * @description Currency for the project estimate line.
             * @example USD
             */
            readonly currency?: string;
            /**
             * @description Memo for the project estimate line. Use 2000 or fewer characters.
             * @example service charges
             */
            memo?: string;
            /**
             * @description System-assigned line number for the line.
             * @example 1
             */
            readonly lineNumber?: number;
            /**
             * @description External unit of measure.
             * @example Piece
             */
            externalUOM?: string;
            /**
             * @description Workflow type for the project estimate line.
             * @default original
             * @example original
             * @enum {string}
             */
            workflowType?: "original" | "revision" | "forecast" | "approvedChange" | "pendingChange" | "other";
            /**
             * @description Set to `true` to post this line to the budget specified in the project estimate. Set to `false` to unpost and deletes any existing GL budget lines for this estimate line.
             * @default false
             * @example false
             */
            isPosted?: boolean;
            /**
             * Format: date
             * @description Date that the transaction line comes into effect from a GL budget or reporting perspective.
             * @example 2023-06-23
             */
            effectiveDate?: string;
            /**
             * @description Number of production units, which are units that track several inputs of cost (such as for material, labor, equipment).
             * @example 200
             */
            numberOfProductionUnits?: number;
            /**
             * @description Description for the production unit derived from the task.
             * @example days
             */
            readonly productionUnitDescription?: string;
            /** @description Reference to the project estimate. */
            readonly projectEstimate?: {
                /**
                 * @description System-assigned unique key for the project estimate.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the project estimate.
                 * @example Original
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the project estimate.
                 * @example /objects/construction/project-estimate/15
                 */
                readonly href?: string;
            };
            glAccount?: components["schemas"]["gl-account-ref"];
            /** @description Reference to the change request that owns the `changeRequestLine`. */
            readonly changeRequest?: {
                /**
                 * @description System-assigned unique key for the change request.
                 * @example 14
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the change request.
                 * @example CR-TM-02
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the change request.
                 * @example /objects/construction/change-request/14
                 */
                readonly href?: string;
            };
            /** @description Reference to the change request line that is reflected in this project estimate line. */
            readonly changeRequestLine?: {
                /**
                 * @description System-assigned unique key for the change request line.
                 * @example 19
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the change request line.
                 * @example 19
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the change request line.
                 * @example /objects/construction/change-request-line/19
                 */
                readonly href?: string;
            };
            /** @description Dimensions active on this project estimate line. */
            dimensions?: components["schemas"]["dimension-ref"] & {
                /** @description Reference to the department. */
                department?: {
                    /**
                     * @description System-assigned unique key for the department.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the department.
                     * @example Dept-11
                     */
                    id?: string | null;
                    /**
                     * @description User-specified name for the department.
                     * @example Engineering
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/1
                     */
                    readonly href?: string;
                };
                location?: components["schemas"]["location-ref"] & {
                    /**
                     * @description Unique identifier for the Location.
                     * @example 1
                     */
                    id?: string;
                };
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Project Estimate Type is a user defined list for categorizing project estimates for reporting purposes and for filtering which project estimate entries post to the general ledger. */
        "objects.construction.project-estimate-type": {
            /**
             * @description System-assigned unique key for the project estimate type.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the project estimate type.
             * @example Original
             */
            id?: string;
            /**
             * @description URL endpoint for the project estimate type.
             * @example /objects/construction/project-estimate-type/1
             */
            readonly href?: string;
            /**
             * @description Workflow types for project estimates. These types control what gets posted to a General Ledger (GL) budget from the project estimate. Use workflow types to group estimates in reports, providing better organization and clarity on how different aspects of project estimates contribute to the overall budget.
             * @example [
             *       "original"
             *     ]
             */
            workflowTypes?: (null | "original" | "revision" | "forecast" | "approvedChange" | "pendingChange" | "other")[] | null;
            /**
             * @description A common estimate category (such as current estimate, original estimate, current forecast, historical forecast), which you can then use to create a report based on that estimate category.
             * @default null
             * @example originalEstimate
             * @enum {string|null}
             */
            estimateCategory?: null | "currentEstimate" | "originalEstimate" | "currentForecastAtCompletion" | "historicalForecastAtCompletion" | "futureForecastAtCompletion" | "currentForecastToCompletion" | "historicalForecastToCompletion" | "futureForecastToCompletion";
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "construction-project-estimate-typeRequiredProperties": Record<string, never>;
        /** @description A project change order consolidates change requests for a project. */
        "objects.construction.project-change-order": {
            /**
             * @description System-assigned key of the project change order
             * @example 5
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the project change order.
             * @example PCO-BTI-1
             */
            id?: string;
            /**
             * @description URL endpoint of the project change order.
             * @example /objects/construction/project-change-order/5
             */
            readonly href?: string;
            /** @description Project that the change order should be applied to. */
            project?: {
                /**
                 * @description Project key.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Project ID.
                 * @example DIM-BTI
                 */
                id?: string;
                /**
                 * @description Project name.
                 * @example Dimensions - Berkeley Technology Inc
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint of the project.
                 * @example /objects/projects/project/1
                 */
                readonly href?: string;
            };
            /** @description Reference to a location specified in the project. */
            readonly location?: {
                /**
                 * @description Location key.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Location ID.
                 * @example SEA
                 */
                readonly id?: string;
                /**
                 * @description Location name.
                 * @example Seattle
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint of the location.
                 * @example /objects/company-config/location/1
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Date of the change order.
             * @example 2023-10-15
             */
            projectChangeOrderDate?: string;
            /**
             * @description Project change order state, draft or posted.
             * @default draft
             * @example draft
             * @enum {string}
             */
            state?: "draft" | "posted";
            /** @description Status of the change request. */
            changeRequestStatus?: {
                /**
                 * @description Change request status key.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Change request status ID.
                 * @example Pending
                 */
                id?: string;
                /**
                 * @description URL endpoint of the change request status.
                 * @example /objects/construction/change-request-status/1
                 */
                readonly href?: string;
            };
            /**
             * @description Description of the project change order.
             * @example Change order 1 for NW Food Warehouse
             */
            description?: string;
            /** @description Project contract that the change order applies to. */
            projectContract?: components["schemas"]["project-contract-ref"];
            /** @description Project contract line that the change order applies to. */
            projectContractLine?: components["schemas"]["project-contract-line-ref"];
            /**
             * Format: date
             * @description Price effective date.
             * @example 2023-09-15
             */
            priceEffectiveDate?: string;
            /**
             * Format: decimal-precision-2
             * @description Total cost of the change order, calculated from the change requests in the order.
             * @example 1575.25
             */
            readonly totalCost?: string;
            /**
             * Format: decimal-precision-2
             * @description Total price, calculated from the change request.
             * @example 2575.25
             */
            readonly totalPrice?: string;
            /** @description Contact that the change order should be sent to. */
            sendToContact?: {
                /**
                 * @description Contact key.
                 * @example 4
                 */
                key?: string;
                /**
                 * @description Contact ID.
                 * @example Chandler
                 */
                id?: string;
                /**
                 * @description URL endpoint of the contact.
                 * @example /objects/company-config/contact/4
                 */
                readonly href?: string;
            };
            /** @description Item applied to the change order. */
            item?: {
                /**
                 * @description Item key.
                 * @example 21
                 */
                key?: string;
                /**
                 * @description Item ID.
                 * @example Maintenance
                 */
                id?: string;
                /**
                 * @description Item name.
                 * @example Maintenance
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint of the item.
                 * @example /object/inventory-control/item/4
                 */
                readonly href?: string;
            };
            /** @description Project customer. */
            readonly customer?: {
                /**
                 * @description Customer key.
                 * @example 14
                 */
                readonly key?: string;
                /**
                 * @description Customer ID.
                 * @example BTI
                 */
                readonly id?: string;
                /**
                 * @description Customer name.
                 * @example Berkeley Technologies Inc
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint of the customer.
                 * @example /objects/accounts-receivable/customer/14
                 */
                readonly href?: string;
            };
            /**
             * @description Scope of the change order.
             * @example Design
             */
            scope?: string;
            /**
             * @description Inclusions.
             * @example Original plan
             */
            inclusions?: string;
            /**
             * @description Exclusions.
             * @example Hardware accessories
             */
            exclusions?: string;
            /**
             * @description Terms of the change order.
             * @example Standard terms and conditions
             */
            terms?: string;
            schedule?: components["schemas"]["schedule-calendar"];
            internalReference?: components["schemas"]["internal-document-ref"];
            externalReference?: components["schemas"]["external-document-ref"];
            attachment?: components["schemas"]["attachment-ref"];
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "construction-project-change-orderRequiredProperties": Record<string, never>;
        /** @description Information about each change request. */
        "objects.construction.change-request": {
            /**
             * @description System-assigned unique key for the change request.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the change request.
             * @example CR-12
             */
            id?: string;
            /**
             * @description URL endpoint for the change request.
             * @example /objects/construction/change-request/12
             */
            readonly href?: string;
            /** @description Reference to the project associated with the change request. */
            project?: {
                /**
                 * @description Unique key for the project.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Unique identifier for the project.
                 * @example NET-XML30-2
                 */
                id?: string;
                /**
                 * @description User-specified name for the project.
                 * @example Talcomp training
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/2
                 */
                readonly href?: string;
            };
            /** @description Reference to the project customer associated with the change request. */
            readonly projectCustomer?: {
                /**
                 * @description Unique key for the project customer.
                 * @example 13
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the project customer.
                 * @example CUST-13
                 */
                readonly id?: string;
                /**
                 * @description Name of the project customer.
                 * @example Jack In the Box
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the project customer.
                 * @example /objects/accounts-receivable/customer/13
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Date of the change request, which is used as the estimate entry effective date if posted to a GL budget.
             * @example 2024-01-24
             */
            changeRequestDate?: string;
            /**
             * @description Description of the change request.
             * @example Change Request 12
             */
            description?: string;
            /** @description Reference to the change request status. */
            changeRequestStatus?: {
                /**
                 * @description Unique key for the change request status.
                 * @example 12
                 */
                key?: string;
                /**
                 * @description Unique identifier for the change request status.
                 * @example CRStatus-12
                 */
                id?: string;
                /**
                 * @description Workflow type associated with the change request status.
                 * @default none
                 * @example revision
                 * @enum {string}
                 */
                readonly workflowType?: "none" | "original" | "revision" | "forecast" | "approvedChange" | "pendingChange" | "other";
                /**
                 * @description URL endpoint for the change request status.
                 * @example /objects/construction/change-request-status/12
                 */
                readonly href?: string;
            };
            /** @description Specifies the type of change request, which may be used for reporting purposes. */
            changeRequestType?: {
                /**
                 * @description Unique key for the change request type.
                 * @example 12
                 */
                key?: string;
                /**
                 * @description Unique identifier for the change request type.
                 * @example CRType-12
                 */
                id?: string;
                /**
                 * @description URL endpoint for the change request type.
                 * @example /objects/construction/change-request-type/12
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates the current state of the change request. Use `draft` to save the request without initiating posting, or `posted` to proceed with posting as configured. Note that the project change order must be in a `posted` state to update the project contract lines.
             * @default draft
             * @example draft
             * @enum {string}
             */
            changeRequestState?: "draft" | "posted";
            /**
             * Format: date
             * @description Cost effective date of the change request. When posting change request lines to a project estimate, the estimate line `effectiveDate` field will be populated from this value. If the `costEffectiveDate` is null, the estimate line `effectiveDate` field will be populated from the `changeRequestDate`.
             * @example 2022-01-24
             */
            costEffectiveDate?: string;
            /**
             * Format: date
             * @description Price effective date of the change request.
             * @example 2022-01-24
             */
            priceEffectiveDate?: string;
            /**
             * Format: decimal-precision-2
             * @description Total cost of the change request.
             * @example 1500.50
             */
            readonly totalCost?: string;
            /**
             * Format: decimal-precision-2
             * @description Total price of the change request.
             * @example 1975.50
             */
            readonly totalPrice?: string;
            /** @description Reference to the project change order to link to. This is only allowed if the `changeRequestState` is `posted`. */
            projectChangeOrder?: {
                /**
                 * @description Unique key for the project change order.
                 * @example 5
                 */
                key?: string;
                /**
                 * @description Unique identifier for the project change order.
                 * @example PCO-BTI-1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the project change order.
                 * @example /objects/construction/project-change-order/5
                 */
                readonly href?: string;
            };
            /**
             * @description Project contract line source - where this change request integrates with project contracts.
             *
             *     * `none` - Project contract (`projectContract`) and project contract line (`projectContractLine`) cannot be used.
             *     * `projectChangeOrder` - Project contract (`projectContract`) and project contract line (`projectContractLine`) are inherited from the project change order (`projectChangeOrder`).
             *     * `changeRequest` - Project contract (`projectContract`) and project contract line (`projectContractLine`) can be used on the change request and will be inherited by the change request lines.
             *     * `changeRequestLine` - Project contract (`projectContract`) and project contract line (`projectContractLine`) can be entered on change request lines.
             * @default projectChangeOrder
             * @example projectChangeOrder
             * @enum {string}
             */
            projectContractLineSource?: "none" | "projectChangeOrder" | "changeRequest" | "changeRequestLine";
            /** @description Reference to the project contract affected by this change request. Requires `projectContractLine`. */
            projectContract?: components["schemas"]["project-contract-ref"];
            /** @description Reference to the specific project contract line that is affected by this change request. Required if `projectContract` is provided. */
            projectContractLine?: components["schemas"]["project-contract-line-ref"];
            /**
             * @description Details about the expected scope of work for the change request.
             * @example Design
             */
            scope?: string | null;
            /**
             * @description Details related to items that are explicitly included in the terms of this change request.
             * @example Original plan
             */
            inclusions?: string | null;
            /**
             * @description Details related to items that are explicitly excluded in the terms of this change request.
             * @example Hardware accessories
             */
            exclusions?: string | null;
            /**
             * @description Additional terms or performance obligations.
             * @example Standard terms and conditions
             */
            terms?: string | null;
            schedule?: components["schemas"]["schedule-calendar"];
            internalReference?: components["schemas"]["internal-document-ref"];
            externalReference?: components["schemas"]["external-document-ref"];
            /** @description Reference to the location of the project on the change request. */
            readonly location?: {
                /**
                 * @description System-assigned unique key for the location.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the location.
                 * @example US
                 */
                readonly id?: string;
                /**
                 * @description Name of the location.
                 * @example United States of America
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/1
                 */
                readonly href?: string;
            };
            /** @description Change request lines. */
            changeRequestLines?: components["schemas"]["objects.construction.change-request-line"][];
            attachment?: components["schemas"]["attachment-ref"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "construction-change-requestRequiredProperties": Record<string, never>;
        /** @description Information about a change request line. */
        "objects.construction.change-request-line": {
            /**
             * @description System-assigned unique key for the change request line.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the change request line. Same as `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the change request line.
             * @example /objects/construction/change-request-line/1
             */
            readonly href?: string;
            /** @description Reference to the change request that this line belongs to. */
            readonly changeRequest?: {
                /**
                 * @description System-assigned unique key for the change request.
                 * @example 4
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the change request.
                 * @example 003
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the change request.
                 * @example /objects/construction/change-request/4
                 */
                readonly href?: string;
            };
            /**
             * @description Workflow type for the change request line.
             * @default none
             * @example revision
             * @enum {string}
             */
            workflowType?: "none" | "original" | "revision" | "forecast" | "approvedChange" | "pendingChange" | "other";
            dimensions?: components["schemas"]["dimension-ref"] & {
                /** @description Reference to the location of the project on the change request line. */
                readonly location?: {
                    /**
                     * @description System-assigned unique key for the location.
                     * @example 1
                     */
                    readonly key?: string;
                    /**
                     * @description Unique identifier for the location.
                     * @example 1
                     */
                    readonly id?: string;
                    /**
                     * @description Name of the location.
                     * @example United States of America
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/1
                     */
                    readonly href?: string;
                };
                /** @description Reference to the department on the change request line. */
                department?: {
                    /**
                     * @description System-assigned unique key for the department.
                     * @example 3
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the department.
                     * @example 3
                     */
                    id?: string;
                    /**
                     * @description Name of the department.
                     * @example Engineering
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/3
                     */
                    readonly href?: string;
                };
            };
            /**
             * @description Number of production units, which are units that track several inputs of cost (such as for material, labor, equipment).
             * @example 1200
             */
            numberOfProductionUnits?: string;
            /**
             * @description Description for the production unit derived from the task.
             * @example linear feet siding
             */
            readonly productionUnitDescription?: string;
            /**
             * Format: decimal-precision-2
             * @description Quantity for the change request line.
             * @example 10.00
             */
            quantity?: string;
            /**
             * @description External unit of measure.
             * @example each
             */
            externalUOM?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Unit cost for the change request line.
             * @example 50.00
             */
            unitCost?: string;
            /**
             * Format: decimal-precision-2
             * @description Total cost for the change request line.
             * @example 250.00
             */
            cost?: string;
            /**
             * Format: decimal-precision-2
             * @description Unit price for the change request line.
             * @example 50.00
             */
            unitPrice?: string;
            /**
             * Format: decimal-precision-2
             * @description Total price for the change request line.
             * @example 250.00
             */
            price?: string;
            /**
             * Format: decimal-precision-2
             * @description Price markup percent for the change request line.
             * @example 5.00
             */
            priceMarkupPercent?: string;
            /**
             * Format: decimal-precision-2
             * @description Price markup amount for the change request line.
             * @example 300.00
             */
            priceMarkupAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Line price for the change request line.
             * @example 750.00
             */
            readonly linePrice?: string;
            /** @description Reference to the project change order. */
            readonly projectChangeOrder?: {
                /**
                 * @description System-assigned unique key for the project change order.
                 * @example 4
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the project change order.
                 * @example 003
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the project change order.
                 * @example /objects/construction/project-change-order/4
                 */
                readonly href?: string;
            };
            /**
             * @description Memo for the change request line.
             * @example Awaiting approval
             */
            memo?: string;
            /** @description Reference to the project estimate associated with the change request line. */
            readonly projectEstimate?: {
                /**
                 * @description System-assigned key unique for the project estimate.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the project estimate.
                 * @example BTI-01
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the project estimate.
                 * @example /objects/construction/project-estimate/1
                 */
                readonly href?: string;
            };
            /** @description Reference to the General Ledger account associated with the change request line. */
            glAccount?: components["schemas"]["gl-account-ref"];
            /** @description Reference to the project contract affected by this change request line. */
            projectContract?: components["schemas"]["project-contract-ref"];
            /** @description Reference to the specific project contract line that is affected by this change request line. */
            projectContractLine?: components["schemas"]["project-contract-line-ref"];
            /**
             * @description System-assigned line number for the change request line.
             * @example 1
             */
            readonly lineNo?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Change request type is a classification used to categorize and organize change request information within a construction project for reporting purposes. */
        "objects.construction.change-request-type": {
            /**
             * @description System-assigned unique key for the change request type.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the change request type.
             * @example CRType-12
             */
            id?: string;
            /**
             * @description URL endpoint of the change request type.
             * @example /objects/construction/change-request-type/12
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "construction-change-request-typeRequiredProperties": Record<string, never>;
        /** @description A user-defined statuses for change requests. */
        "objects.construction.change-request-status": {
            /**
             * @description System-assigned key for the change request status.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique name or ID for the change request status.
             * @example Revised
             */
            id?: string;
            /**
             * @description URL endpoint of the change request status.
             * @example /objects/construction/change-request-status/12
             */
            readonly href?: string;
            /**
             * @description Workflow type associated with the change request status.
             * @default none
             * @example revision
             * @enum {string}
             */
            workflowType?: "none" | "original" | "revision" | "forecast" | "approvedChange" | "pendingChange" | "other";
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "construction-change-request-statusRequiredProperties": Record<string, never>;
        /** @description Accumulation Type */
        "objects.construction.accumulation-type": {
            /**
             * @description System-assigned unique key for the accumulation type.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Accumulation type ID.
             * @example Direct cost
             */
            id?: string;
            /**
             * @description URL endpoint of the accumulation type.
             * @example /objects/construction/accumulation-type/1
             */
            readonly href?: string;
            /**
             * @description Standard construction project cost category to be used for this accumulation type.
             * @default null
             * @example labor
             * @enum {string|null}
             */
            costCategory?: null | "material" | "labor" | "equipment" | "subcontract" | "overhead" | "other";
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description User-defined employee position that can be assigned to employees and used in timesheets. */
        "objects.construction.employee-position": {
            /**
             * @description System-assigned unique key for the employee position.
             * @example 11
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the employee position.
             * @example SV001
             */
            id?: string;
            /**
             * @description URL endpoint for the employee position.
             * @example /objects/construction/employee-position/11
             */
            readonly href?: string;
            /**
             * @description Name for the employee position.
             * @example Supervisor-1
             */
            name?: string;
            /**
             * @description Description for the employee position.
             * @example First-level supervisor
             */
            description?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "construction-employee-positionRequiredProperties": Record<string, never>;
        /** @description User-defined labor class that can be assigned to a timesheet entry. */
        "objects.construction.labor-class": {
            /**
             * @description System-assigned unique key for the labor class.
             * @example 43
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the labor class.
             * @example LC001
             */
            id?: string;
            /**
             * @description URL endpoint for the labor class.
             * @example /objects/construction/labor-class/43
             */
            readonly href?: string;
            /**
             * @description Name for the labor class.
             * @example LC Skilled
             */
            name?: string;
            /**
             * @description Description for the labor class.
             * @example Skilled laborer
             */
            description?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "construction-labor-classRequiredProperties": Record<string, never>;
        /** @description User-defined labor shift that can be used in timesheets. */
        "objects.construction.labor-shift": {
            /**
             * @description System-assigned unique key for the labor shift.
             * @example 31
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the labor shift.
             * @example LS-AM
             */
            id?: string;
            /**
             * @description URL endpoint for the labor shift.
             * @example /objects/construction/labor-shift/31
             */
            readonly href?: string;
            /**
             * @description Name for the labor shift.
             * @example AM shift
             */
            name?: string;
            /**
             * @description Description for the labor shift.
             * @example Morning shift (6am-2pm)
             */
            description?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "construction-labor-shiftRequiredProperties": Record<string, never>;
        /** @description User-defined labor union that can be used in timesheets. */
        "objects.construction.labor-union": {
            /**
             * @description System-assigned key for the labor union.
             * @example 3
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the labor union.
             * @example BAC
             */
            id?: string;
            /**
             * @description Name for the labor union.
             * @example International Union of Bricklayers and Allied Craftworkers
             */
            name?: string;
            /**
             * @description URL endpoint for the labor union.
             * @example /objects/construction/labor-union/3
             */
            readonly href?: string;
            /**
             * @description Description for the labor union.
             * @example BAC represents all skilled trowel trades workers, including bricklayers, tile setters, plasterers, cement masons, marble masons, restoration workers, and terrazzo and mosaic workers.
             */
            description?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "construction-labor-unionRequiredProperties": Record<string, never>;
        /** @description The AP retainage records that can be released. */
        "objects.construction.ap-releasable-retainage": {
            /**
             * @description System-assigned unique key for AP releasable retainage.
             * @example 55
             */
            readonly key?: string;
            /**
             * @description Unique identifier for AP releasable retainage. This value is the same as `key` for this object.
             * @example 55
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AP releasable retainage.
             * @example /objects/construction/ap-releasable-retainage/55
             */
            readonly href?: string;
            /**
             * @description Line number.
             * @example 4
             */
            readonly lineNumber?: number;
            /**
             * Format: decimal-precision-2
             * @description Bill line amount.
             * @example 450.00
             */
            readonly billLineAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Bill line amount in transaction currency.
             * @example 450.00
             */
            readonly txnBillLineAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount retained.
             * @example 45.00
             */
            readonly amountRetained?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount retained in transaction currency.
             * @example 45.00
             */
            readonly txnAmountRetained?: string;
            /**
             * Format: decimal-precision-2
             * @description Total released in transaction currency.
             * @example 5.00
             */
            readonly txnTotalReleased?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount remaining in transaction currency.
             * @example 40.00
             */
            readonly txnAmountRemaining?: string;
            /** @description The accounts payable bill for the retainage. */
            retainageBill?: {
                /**
                 * @description Retainage bill key.
                 * @example 17
                 */
                readonly key?: string;
                /**
                 * @description Retainage bill ID.
                 * @example 17
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the retainage bill.
                 * @example /objects/accounts-payable/ap-bill/17
                 */
                readonly href?: string;
            };
            retainageBillLine?: {
                /**
                 * @description Retainage bill line key.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Retainage bill line ID.
                 * @example 23
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the retainage bill line.
                 * @example /objects/accounts-payable/ap-bill-line/23
                 */
                readonly href?: string;
            };
            department?: {
                /**
                 * @description Department key.
                 * @example 33
                 */
                readonly key?: string;
                /**
                 * @description Department ID.
                 * @example Maintenance
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/33
                 */
                readonly href?: string;
            };
            /**
             * @description The Purchase Order document line that was the origination of the AP bill line holding the retainage. Can be used to determine the Purchase Order invoice that retainage was originally held on.
             * @example 77
             */
            readonly documentLineKey?: string;
            primaryDocument?: {
                /**
                 * @description Primary document key.
                 * @example 45
                 */
                readonly key?: string;
                /**
                 * @description Primary document ID.
                 * @example Race Track
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the primary document.
                 * @example /objects/order-entry/document/45
                 */
                readonly href?: string;
            };
            primaryDocumentLine?: {
                /**
                 * @description Primary document line key.
                 * @example 65
                 */
                readonly key?: string;
                /**
                 * @description Primary document line ID.
                 * @example PCL 02 for Equipment Shed
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the primary document line.
                 * @example /objects/order-entry/document-line/65
                 */
                readonly href?: string;
            };
        };
        /** @description Header information for AP retainage release. */
        "objects.construction.ap-retainage-release": {
            /**
             * @description System-assigned unique key for the AP retainage release.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier of AP retainage release. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint of the AP retainage release.
             * @example /objects/construction/ap-retainage-release/23
             */
            readonly href?: string;
            /**
             * @description Description of AP retainage release.
             * @example October retainage release
             */
            description?: string | null;
            /**
             * Format: date
             * @description Release date.
             * @example 2025-01-23
             */
            releaseDate?: string;
            /**
             * Format: date
             * @description GL posting date.
             * @example 2025-01-23
             */
            glPostingDate?: string;
            /**
             * @description State.
             * @default draft
             * @example draft
             * @enum {string}
             */
            state?: "draft" | "released" | "reversal";
            /** @description Vendor to whom the retainage is being released. */
            vendor?: {
                /**
                 * @description Vendor key.
                 * @example 72
                 */
                key?: string | null;
                /**
                 * @description Vendor ID.
                 * @example Arthur Bates
                 */
                id?: string | null;
                /**
                 * @description URL endpoint of the vendor.
                 * @example /objects/accounts-payable/vendor/72
                 */
                readonly href?: string;
            };
            /** @description Project associated with the AP retainage release. */
            project?: {
                /**
                 * @description Project key.
                 * @example 2
                 */
                key?: string | null;
                /**
                 * @description Project ID.
                 * @example NET-XML30-2
                 */
                id?: string | null;
                /**
                 * @description URL endpoint of the project.
                 * @example /objects/projects/project/2
                 */
                readonly href?: string;
            };
            /** @description Array of AP retainage release lines. */
            apRetainageReleaseLines?: components["schemas"]["objects.construction.ap-retainage-release-line"][];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "construction-ap-retainage-releaseRequiredProperties": Record<string, never>;
        /** @description Detail information for the AP retainage release line. */
        "objects.construction.ap-retainage-release-line": {
            /**
             * @description System-assigned unique key for the AP retainage release line.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the AP retainage release line.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint of the AP retainage release line.
             * @example /objects/construction/ap-retainage-release-line/23
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description The amount to release in transaction currency.
             * @example 123.45
             */
            txnAmountReleased?: string;
            /** @description The AP retainage release that this line belongs to. */
            readonly apRetainageRelease?: {
                /**
                 * @description AP retainage release key.
                 * @example 7
                 */
                readonly key?: string;
                /**
                 * @description AP retainage release ID.
                 * @example 7
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint of the AP retainage release.
                 * @example /objects/construction/ap-retainage-release/7
                 */
                readonly href?: string;
            };
            /** @description The released bill. */
            readonly releasedBill?: {
                /**
                 * @description Released bill key.
                 * @example 56
                 */
                readonly key?: string | null;
                /**
                 * @description Released bill ID.
                 * @example Released Bill 56
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint of the released bill.
                 * @example /objects/accounts-payable/bill/56
                 */
                readonly href?: string;
            };
            /** @description Reference to the released bill line. */
            readonly releasedBillLine?: {
                /**
                 * @description Released bill line key.
                 * @example 67
                 */
                readonly key?: string | null;
                /**
                 * @description Released bill line ID.
                 * @example 67
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint of the released bill line.
                 * @example /objects/accounts-payable/bill-line/67
                 */
                readonly href?: string;
            };
            /** @description Reference to the retainage bill. */
            retainageBill?: {
                /**
                 * @description Retainage bill key.
                 * @example 78
                 */
                key?: string;
                /**
                 * @description Retainage bill ID.
                 * @example Retainage Bill 78
                 */
                id?: string;
                /**
                 * @description URL endpoint of the retainage bill.
                 * @example /objects/accounts-payable/bill/78
                 */
                readonly href?: string;
            };
            /** @description Reference to the retainage bill line. */
            retainageBillLine?: {
                /**
                 * @description Retainage bill line key.
                 * @example 22
                 */
                key?: string;
                /**
                 * @description Retainage bill line ID.
                 * @example 22
                 */
                id?: string;
                /**
                 * @description URL endpoint of the retainage bill line.
                 * @example /objects/accounts-payable/bill-line/22
                 */
                readonly href?: string;
            };
            /** @description Reference to the purchasing document. */
            readonly purchasingDocument?: {
                /**
                 * @description Purchasing document key.
                 * @example 3
                 */
                readonly key?: string | null;
                /**
                 * @description Purchasing document ID.
                 * @example Doc 3
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint of the purchasing document.
                 * @example /objects/purchasing/document/3
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description The AR retainage records that can be released. */
        "objects.construction.ar-releasable-retainage": {
            /**
             * @description System-assigned unique key for AR releasable retainage.
             * @example 55
             */
            readonly key?: string;
            /**
             * @description Unique identifier for AR releasable retainage. This value is the same as `key` for this object.
             * @example 55
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AR releasable retainage.
             * @example /objects/construction/ar-releasable-retainage/55
             */
            readonly href?: string;
            /**
             * @description Line number.
             * @example 4
             */
            readonly lineNumber?: number;
            /**
             * Format: decimal-precision-2
             * @description Invoice line amount.
             * @example 450.00
             */
            readonly invoiceLineAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Invoice line amount in transaction currency.
             * @example 450.00
             */
            readonly txnInvoiceLineAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount retained.
             * @example 45.00
             */
            readonly amountRetained?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount retained in transaction currency.
             * @example 45.00
             */
            readonly txnAmountRetained?: string;
            /**
             * Format: decimal-precision-2
             * @description Total released in transaction currency.
             * @example 5.00
             */
            readonly txnTotalReleased?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount remaining in transaction currency.
             * @example 40.00
             */
            readonly txnAmountRemaining?: string;
            retainageInvoice?: {
                /**
                 * @description System-assigned key for the retainage invoice.
                 * @example 18
                 */
                readonly key?: string;
                /**
                 * @description System-assigned unique identifier for the retainage invoice.
                 * @example 18
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the retainage invoice.
                 * @example /objects/accounts-receivable/ar-invoice/18
                 */
                readonly href?: string;
            };
            retainageInvoiceLine?: {
                /**
                 * @description Retainage invoice line key.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Retainage invoice line ID.
                 * @example 23
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the retainage invoice line.
                 * @example /objects/accounts-receivable/ar-invoice-line/23
                 */
                readonly href?: string;
            };
            department?: {
                /**
                 * @description Department key.
                 * @example 33
                 */
                readonly key?: string;
                /**
                 * @description Department ID.
                 * @example Maintenance
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/33
                 */
                readonly href?: string;
            };
            location?: {
                /**
                 * @description Location key.
                 * @example 38
                 */
                readonly key?: string;
                /**
                 * @description Location ID.
                 * @example Garden City
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/38
                 */
                readonly href?: string;
            };
            /**
             * @description The Order Entry document line that was the origination of the AR invoice line holding the retainage. Can be used to determine the invoice that retainage was originally held on.
             * @example 77
             */
            readonly documentLineKey?: string;
            projectContract?: {
                /**
                 * @description Project contract key.
                 * @example 45
                 */
                readonly key?: string;
                /**
                 * @description Project contract ID.
                 * @example Race Track
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the project contract.
                 * @example /objects/construction/project-contract/45
                 */
                readonly href?: string;
            };
            projectContractLine?: {
                /**
                 * @description Project contract line key.
                 * @example 65
                 */
                readonly key?: string;
                /**
                 * @description Project contract line ID.
                 * @example PCL 02 for Race Track
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the project contract line.
                 * @example /objects/construction/project-contract-line/65
                 */
                readonly href?: string;
            };
        };
        /** @description Header information for AR retainage release. */
        "objects.construction.ar-retainage-release": {
            /**
             * @description System-assigned key for the ar-retainage-release.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier of ar-retainage-release.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint of the ar-retainage-release.
             * @example /objects/construction/ar-retainage-release/23
             */
            readonly href?: string;
            /**
             * @description Description of ar-retainage-release.
             * @example October retainage release
             */
            description?: string | null;
            /**
             * Format: date
             * @description Release date.
             * @example 2023-01-23
             */
            releaseDate?: string;
            /**
             * Format: date
             * @description GL posting date.
             * @example 2023-01-23
             */
            glPostingDate?: string;
            /**
             * @description State.
             * @default draft
             * @example draft
             * @enum {string}
             */
            state?: "draft" | "released" | "reversal";
            customer?: {
                /**
                 * @description The system-assigned key for the customer.
                 * @example 72
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the customer.
                 * @example Arthur Bates
                 */
                id?: string | null;
                /**
                 * @description URL endpoint of the customer.
                 * @example /objects/accounts-receivable/customer/72
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
                 * @description URL endpoint of the project.
                 * @example /objects/projects/project/2
                 */
                readonly href?: string;
            };
            /** @description AR retainage release lines. */
            arRetainageReleaseLines?: components["schemas"]["objects.construction.ar-retainage-release-line"][];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "construction-ar-retainage-releaseRequiredProperties": Record<string, never>;
        /** @description Detail information for the AR retainage release line. */
        "objects.construction.ar-retainage-release-line": {
            /**
             * @description System-assigned key for the AR retainage release line.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the AR retainage release line.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint of the AR retainage release line.
             * @example /objects/construction/ar-retainage-release-line/23
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description The amount to release in transaction currency.
             * @example 123.45
             */
            txnAmountReleased?: string;
            /** @description The AR retainage release that this line belongs to. */
            readonly arRetainageRelease?: {
                /**
                 * @description AR retainage release key.
                 * @example 7
                 */
                readonly key?: string;
                /**
                 * @description AR retainage release ID.
                 * @example 7
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint of the AR retainage release.
                 * @example /objects/construction/ar-retainage-release/7
                 */
                readonly href?: string;
            };
            /** @description Reference to the project contract. */
            readonly projectContract?: {
                /**
                 * @description Project contract key.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Project contract ID.
                 * @example BTI-01
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint of the project contract.
                 * @example /objects/construction/project-contract/1
                 */
                readonly href?: string;
            };
            /** @description Reference to the project contract line. */
            readonly projectContractLine?: {
                /**
                 * @description Project contract line key.
                 * @example 4
                 */
                readonly key?: string;
                /**
                 * @description Project contract line ID.
                 * @example Project-Contract-Line-04
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint of the project contract line.
                 * @example /objects/construction/project-contract-line/4
                 */
                readonly href?: string;
            };
            /** @description Reference to the released invoice. */
            readonly releasedInvoice?: {
                /**
                 * @description Released invoice key
                 * @example 56
                 */
                readonly key?: string | null;
                /**
                 * @description Released invoice ID.
                 * @example Invoice 56
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint of the released invoice.
                 * @example /objects/accounts-receivable/invoice/56
                 */
                readonly href?: string;
            };
            /** @description Reference to the released invoice line. */
            readonly releasedInvoiceLine?: {
                /**
                 * @description Released invoice line key.
                 * @example 67
                 */
                readonly key?: string | null;
                /**
                 * @description Released invoice line ID.
                 * @example 67
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint of the released invoice line.
                 * @example /objects/accounts-receivable/invoice-line/67
                 */
                readonly href?: string;
            };
            /** @description Reference to the retainage invoice. */
            retainageInvoice?: {
                /**
                 * @description Retainage invoice key.
                 * @example 78
                 */
                key?: string;
                /**
                 * @description Retainage invoice ID.
                 * @example Retainage Invoice 78
                 */
                id?: string;
                /**
                 * @description URL endpoint of the retainage invoice.
                 * @example /objects/accounts-receivable/invoice/78
                 */
                readonly href?: string;
            };
            /** @description Reference to the retainage invoice line. */
            retainageInvoiceLine?: {
                /**
                 * @description Retainage invoice line key.
                 * @example 22
                 */
                key?: string;
                /**
                 * @description Retainage invoice line ID.
                 * @example 22
                 */
                id?: string;
                /**
                 * @description URL endpoint of the retainage invoice line.
                 * @example /objects/accounts-receivable/invoice-line/22
                 */
                readonly href?: string;
            };
            /** @description Reference to the sales order document (order entry document). */
            readonly salesOrderDocument?: {
                /**
                 * @description Sales order document key.
                 * @example 3
                 */
                readonly key?: string | null;
                /**
                 * @description Sales order document ID.
                 * @example Doc 3
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint of the order entry document.
                 * @example /objects/order-entry/document/3
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Provides detailed information about calculated totals related to the primary document, including associated transactions, projects, and items. */
        "objects.construction.primary-document-detail": {
            /**
             * @description System-assigned unique key for the primary document detail. Contains only digits, hyphens, or both, for example 123, -45, 1-2-3.
             * @example 151-123-123
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the primary document detail. Contains only digits, hyphens, or both, for example 123, -45, 1-2-3. This value is the same as the key value for this object.
             * @example 151-123-123
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the primary document detail.
             * @example /objects/construction/primary-document-detail/151-123-123
             */
            readonly href?: string;
            /** @description Represents the calculated document totals for the primary document detail. */
            readonly documentTotals?: {
                /** @description Transaction totals for the primary document detail in transaction currency. */
                txnTotals?: {
                    /**
                     * Format: decimal-precision-10
                     * @description The original transaction amount before any changes or adjustments.
                     * @example 30500.0000000000
                     */
                    readonly originalAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of pending changes that have not yet been posted.
                     * @example 1500.0000000000
                     */
                    readonly pendingChangesAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of changes that have been posted to the transaction.
                     * @example 14500.0000000000
                     */
                    readonly postedChangesAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The revised transaction amount after applying all changes.
                     * @example 45000.0000000000
                     */
                    readonly revisedAmount?: string;
                };
                /** @description Transaction totals for the primary document detail in base currency. */
                readonly baseTotals?: {
                    /**
                     * Format: decimal-precision-10
                     * @description The original transaction amount in base currency.
                     * @example 30500.0000000000
                     */
                    readonly originalAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of pending changes in base currency.
                     * @example 1500.0000000000
                     */
                    readonly pendingChangesAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of posted changes in base currency.
                     * @example 14500.0000000000
                     */
                    readonly postedChangesAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The revised transaction amount in base currency.
                     * @example 45000.0000000000
                     */
                    readonly revisedAmount?: string;
                };
            };
            /** @description Represents the calculated invoice totals for the primary document detail. */
            readonly invoiceTotals?: {
                /** @description Invoice totals for the primary document detail in transaction currency. */
                txnTotals?: {
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount invoiced for the transaction.
                     * @example 33000.0000000000
                     */
                    readonly totalAmountInvoiced?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The remaining balance on the invoice after payments have been applied.
                     * @example 33000.0000000000
                     */
                    readonly invoiceBalanceAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The amount remaining to be invoiced for the transaction.
                     * @example 12000.0000000000
                     */
                    readonly remainingToInvoiceAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount paid for the transaction.
                     * @example 100.0000000000
                     */
                    readonly totalAmountPaid?: string;
                };
                /** @description Invoice totals for the primary document detail in base currency. */
                baseTotals?: {
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount invoiced in base currency.
                     * @example 33000.0000000000
                     */
                    readonly totalAmountInvoiced?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount paid in base currency.
                     * @example 100.0000000000
                     */
                    readonly totalAmountPaid?: string;
                };
            };
            /** @description Represents the calculated retainage totals for the primary document detail. */
            readonly retainageTotals?: {
                /** @description Retainage totals for the primary document detail in transaction currency. */
                txnTotals?: {
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of retainage held for the transaction.
                     * @example 100.0000000000
                     */
                    readonly heldAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The net amount invoiced after deducting retainage.
                     * @example 33000.0000000000
                     */
                    readonly netAmountInvoiced?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of retainage that has been released.
                     * @example 100.0000000000
                     */
                    readonly releasedAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The remaining balance of retainage held for the transaction.
                     * @example 100.0000000000
                     */
                    readonly heldBalanceAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of retainage that has been paid.
                     * @example 100.0000000000
                     */
                    readonly amountPaid?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The net amount paid after deducting retainage.
                     * @example 100.0000000000
                     */
                    readonly netAmountPaid?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The balance remaining on the retainage invoice.
                     * @example 33000.0000000000
                     */
                    readonly invoiceBalanceAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The net balance remaining on the invoice after deducting retainage.
                     * @example 100.0000000000
                     */
                    readonly netInvoiceBalanceAmount?: string;
                };
                /** @description Retainage totals for the primary document detail in base currency. */
                baseTotals?: {
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of retainage held in base currency.
                     * @example 100.0000000000
                     */
                    readonly heldAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The net amount invoiced in base currency after deducting retainage.
                     * @example 33000.0000000000
                     */
                    readonly netAmountInvoiced?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of retainage released in base currency.
                     * @example 100.0000000000
                     */
                    readonly releasedAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of retainage paid in base currency.
                     * @example 100.0000000000
                     */
                    readonly amountPaid?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The net amount paid in base currency after deducting retainage.
                     * @example 100.0000000000
                     */
                    readonly netAmountPaid?: string;
                };
            };
            /** @description The source transaction document associated with the primary document detail. */
            readonly primaryDocument?: {
                /**
                 * @description System-assigned key for the primary document.
                 * @example 3669
                 */
                readonly key?: string;
                /**
                 * @description This value is the same as the `key` for this object.
                 * @example 3669
                 */
                readonly id?: string;
                /**
                 * @description Unique number for the primary document.
                 * @example PO-Source01-R2-81
                 */
                readonly documentNumber?: string;
                /**
                 * @description URL endpoint for the primary document.
                 * @example /objects/purchasing/document/3669
                 */
                readonly href?: string;
            };
            /** @description The source transaction document line associated with the primary document detail. */
            readonly primaryDocumentLine?: {
                /**
                 * @description System-assigned key for the primary document line.
                 * @example 9156
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the primary document line. This value is the same as the `key` for this object.
                 * @example 9156
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the primary document line.
                 * @example /objects/purchasing/document-line/9156
                 */
                readonly href?: string;
                /**
                 * @description System-assigned line number for the line.
                 * @example 2
                 */
                readonly lineNumber?: number;
                /**
                 * @description Additional notes or comments about the line.
                 * @example line 2
                 */
                readonly memo?: string | null;
            };
            /** @description The project associated with the primary document detail. */
            readonly project?: {
                /**
                 * @description System-assigned key for the project.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the project.
                 * @example DIM-BTI
                 */
                readonly id?: string;
                /**
                 * @description Name for the project.
                 * @example Dimensions - Berkeley Technology Inc
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/1
                 */
                readonly href?: string;
            };
            /** @description The cost type associated with the primary document detail. */
            readonly costType?: {
                /**
                 * @description System-assigned key for the cost type.
                 * @example 65
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the cost type.
                 * @example LPM
                 */
                readonly id?: string | null;
                /**
                 * @description Name for the cost type.
                 * @example Project Manager Labor DIM-BTI 0002
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the cost type.
                 * @example /objects/construction/cost-type/65
                 */
                readonly href?: string;
            };
            /** @description The department associated with the primary document detail. */
            readonly department?: components["schemas"]["department-ref"] & {
                /**
                 * @description Unique identifier for the department.
                 * @example CS
                 */
                readonly id?: string | null;
                /**
                 * @description Name for the department.
                 * @example CS--Client Services
                 */
                readonly name?: string | null;
            };
            /** @description The task associated with the primary document detail. */
            task?: {
                /**
                 * @description System-assigned key for the task.
                 * @example 1
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the task.
                 * @example TSK-RT-0002
                 */
                readonly id?: string | null;
                /**
                 * @description Name for the task.
                 * @example DIM - BTI07
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the task.
                 * @example /objects/projects/task/1
                 */
                readonly href?: string;
            };
            item?: components["schemas"]["item-ref"];
            /** @description The location associated with the primary document detail. */
            readonly location?: components["schemas"]["location-ref"] & {
                /**
                 * @description Unique identifier for the location.
                 * @example 1
                 */
                readonly id?: string | null;
            };
        };
        /** @description A summary of a primary document in the construction domain, including transaction details, retainage, and associated metadata. */
        "objects.construction.primary-document-summary": {
            /**
             * @description System-assigned unique key for the primary document summary.
             * @example 90
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the primary document summary. This value is the same as the `key` for this object.
             * @example 90
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the primary document summary.
             * @example /objects/construction/primary-document-summary/90
             */
            readonly href?: string;
            /** @description Represents the calculated document totals for the primary document summary. */
            readonly documentTotals?: {
                /** @description Document totals for the primary document summary in transaction currency. */
                txnTotals?: {
                    /**
                     * Format: decimal-precision-10
                     * @description The original transaction amount before any changes or adjustments.
                     * @example 22500.0000000000
                     */
                    readonly originalAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of pending changes that have not yet been posted.
                     * @example 100.0000000000
                     */
                    readonly pendingChangesAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of changes that have been posted to the transaction.
                     * @example 100.0000000000
                     */
                    readonly postedChangesAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The revised transaction amount after applying all changes.
                     * @example 100.0000000000
                     */
                    readonly revisedAmount?: string;
                };
                /** @description Document totals for the primary document summary in base currency. */
                baseTotals?: {
                    /**
                     * Format: decimal-precision-10
                     * @description The original transaction amount in base currency.
                     * @example 22500.0000000000
                     */
                    readonly originalAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of pending changes in base currency.
                     * @example 100.0000000000
                     */
                    readonly pendingChangesAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of posted changes in base currency.
                     * @example 100.0000000000
                     */
                    readonly postedChangesAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The revised transaction amount in base currency.
                     * @example 22500.0000000000
                     */
                    readonly revisedAmount?: string;
                };
            };
            /** @description Represents the calculated invoice totals for the primary document summary. */
            readonly invoiceTotals?: {
                /** @description Invoice totals for the primary document summary in transaction currency. */
                txnTotals?: {
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount invoiced for the transaction.
                     * @example 45000.0000000000
                     */
                    readonly totalAmountInvoiced?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The remaining balance on the invoice after payments have been applied.
                     * @example 25298.0000000000
                     */
                    readonly invoiceBalanceAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The amount still remaining to be invoiced for the transaction.
                     * @example 22500.0000000000
                     */
                    readonly remainingToInvoiceAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount paid for the transaction.
                     * @example 19702.0000000000
                     */
                    readonly totalAmountPaid?: string;
                };
                /** @description Invoice totals for the primary document summary in base currency. */
                baseTotals?: {
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount invoiced in base currency.
                     * @example 45000.0000000000
                     */
                    readonly totalAmountInvoiced?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount paid in base currency.
                     * @example 19702.0000000000
                     */
                    readonly totalAmountPaid?: string;
                };
            };
            /** @description Represents the calculated retainage totals for the primary document summary. */
            readonly retainageTotals?: {
                /** @description Retainage totals for the primary document summary in transaction currency. */
                txnTotals?: {
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of retainage held for the transaction.
                     * @example 3525.0000000000
                     */
                    readonly heldAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The net amount invoiced after deducting retainage.
                     * @example 41475.0000000000
                     */
                    readonly netAmountInvoiced?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of retainage that has been released.
                     * @example 3.0000000000
                     */
                    readonly releasedAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The remaining balance of retainage held for the transaction.
                     * @example 3522.0000000000
                     */
                    readonly heldBalanceAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of retainage that has been paid.
                     * @example 2.0000000000
                     */
                    readonly amountPaid?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The net amount paid after deducting retainage.
                     * @example 19700.0000000000
                     */
                    readonly netAmountPaid?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The balance remaining on the retainage invoice.
                     * @example 1.0000000000
                     */
                    readonly invoiceBalanceAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The net balance remaining on the invoice after deducting retainage.
                     * @example 21775.0000000000
                     */
                    readonly netInvoiceBalanceAmount?: string;
                };
                /** @description Retainage totals for the primary document summary in base currency. */
                baseTotals?: {
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of retainage held in base currency.
                     * @example 3525.0000000000
                     */
                    readonly heldAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The net amount invoiced in base currency after deducting retainage.
                     * @example 41475.0000000000
                     */
                    readonly netAmountInvoiced?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of retainage released in base currency.
                     * @example 3.0000000000
                     */
                    readonly releasedAmount?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The total amount of retainage paid in base currency.
                     * @example 2.0000000000
                     */
                    readonly amountPaid?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description The net amount paid in base currency after deducting retainage.
                     * @example 100.0000000000
                     */
                    readonly netAmountPaid?: string;
                };
            };
            /** @description The source transaction document from which the primary document was created. */
            readonly primaryDocument?: {
                /**
                 * @description System-assigned key for the primary document.
                 * @example 6095
                 */
                readonly key?: string;
                /**
                 * @description This value is the same as the `key` for this object.
                 * @example 6095
                 */
                readonly id?: string;
                /**
                 * @description Unique identifier for the primary document.
                 * @example PO-Source00-PO#1495#doc
                 */
                readonly documentId?: string;
                /**
                 * @description Unique number for the primary document.
                 * @example PO#1495#doc
                 */
                readonly documentNumber?: string;
                /**
                 * @description URL endpoint for the primary document.
                 * @example /objects/purchasing/document/6095
                 */
                readonly href?: string;
                /**
                 * @description The current state of the primary document.
                 * @example draft
                 * @enum {string}
                 */
                readonly state?: "submitted" | "approved" | "partiallyApproved" | "declined" | "draft" | "pending" | "closed" | "inProgress" | "converted" | "partiallyConverted" | "exception" | "analyzing";
                /**
                 * @description The base currency used for the primary document.
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /**
                 * @description The transaction currency used for the primary document.
                 * @example USD
                 */
                readonly txnCurrency?: string;
                /**
                 * Format: date
                 * @description The date the purchasing document was created.
                 * @example 2025-04-21
                 */
                readonly txnDate?: string;
                /**
                 * Format: date
                 * @description The due date for the purchasing document.
                 * @example 2025-07-05
                 */
                readonly dueDate?: string;
                /**
                 * Format: date
                 * @description The date the purchasing document was posted to the General Ledger.
                 * @example 2025-07-04
                 */
                readonly postingDate?: string | null;
            };
            /** @description The transaction definition associated with the primary document. */
            readonly txnDefinition?: {
                /**
                 * @description System-assigned key for the transaction definition.
                 * @example 532
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the transaction definition.
                 * @example PO-Source00
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition::PO-Source00/532
                 */
                readonly href?: string;
            };
            /** @description The project associated with the primary document. */
            readonly project?: {
                /**
                 * @description System-assigned key for the project.
                 * @example 125
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the project.
                 * @example DIM-BTI
                 */
                readonly id?: string;
                /**
                 * @description Name for the project.
                 * @example Dimensions - Berkeley Technology Inc
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/125
                 */
                readonly href?: string;
            };
        };
        /** @description Represents detailed information about Accounts Payable bills, including associated transactions, amounts, and related metadata for financial tracking and reporting. */
        "objects.construction.primary-document-accounts-payable-bill": {
            /**
             * @description System-assigned unique key for the primary document AP bill. Contains only digits, hyphens, or both, for example 123, -45, 1-2-3.
             * @example 151-123-123
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the primary document AP bill. Contains only digits, hyphens, or both, for example 123, -45, 1-2-3. This value is the same as the key for this object.
             * @example 151-123-123
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the primary document accounts payable bill.
             * @example /objects/construction/primary-document-accounts-payable-bill/151-123-123
             */
            readonly href?: string;
            /** @description Indicates the calculated invoice totals for the primary document AP bill in transaction currency. */
            readonly invoiceTotals?: {
                /**
                 * Format: decimal-precision-10
                 * @description Indicates the total amount invoiced for the primary document.
                 * @example 56500.0000000000
                 */
                readonly totalAmountInvoiced?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Indicates the remaining balance on the invoice after payments have been applied.
                 * @example 56500.0000000000
                 */
                readonly invoiceBalanceAmount?: string;
            };
            /** @description Indicates the calculated retainage totals for the primary document AP bill in transaction currency. */
            readonly retainageTotals?: {
                /**
                 * Format: decimal-precision-10
                 * @description Indicates the total amount of retainage held for the transaction.
                 * @example 8475.0000000000
                 */
                readonly heldAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Indicates the net amount invoiced after deducting retainage.
                 * @example 48025.0000000000
                 */
                readonly netAmountInvoiced?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Indicates the total amount of retainage that has been released.
                 * @example 100.0000000000
                 */
                readonly releasedAmount?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Indicates the net amount paid after deducting retainage.
                 * @example 100.0000000000
                 */
                readonly netAmountPaid?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Indicates the net balance remaining on the invoice after deducting retainage.
                 * @example 48025.0000000000
                 */
                readonly netInvoiceBalanceAmount?: string;
            };
            /** @description Reference to the source transaction document associated with the primary document AP bill. */
            readonly primaryDocument?: {
                /**
                 * @description Unique key for the primary document.
                 * @example 4935
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the primary document.
                 * @example 4935
                 */
                readonly id?: string;
                /**
                 * @description Indicates the unique identifier for the primary document.
                 * @example PO-Invoice01-VI#0878#doc
                 */
                readonly documentId?: string;
                /**
                 * @description Indicates the document number for the primary document.
                 * @example PO-Invoice01-VI#0878#doc
                 */
                readonly documentNumber?: string;
                /**
                 * Format: date
                 * @description Indicates the GL posting date for the primary document.
                 * @example 2026-09-12
                 */
                readonly postingDate?: string;
                /**
                 * @description URL endpoint for the primary document.
                 * @example /objects/purchasing/document/4935
                 */
                readonly href?: string;
            };
            /** @description Reference to the source transaction from which the purchasing document associated with the primary document was created. */
            readonly sourceDocument?: {
                /**
                 * @description Unique key for the source document.
                 * @example 3669
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the source document.
                 * @example 3669
                 */
                readonly id?: string;
                /**
                 * @description Indicates the unique identifier for the source document.
                 * @example PO-Source01-R2-81
                 */
                readonly documentId?: string;
                /**
                 * @description URL endpoint for the source document.
                 * @example /objects/purchasing/document/3669
                 */
                readonly href?: string;
            };
            /** @description Reference to the AP bill associated with the primary document. */
            readonly apBill?: {
                /**
                 * @description Unique key for the AP bill.
                 * @example 1692
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the AP bill.
                 * @example 1692
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the accounts payable bill.
                 * @example /objects/accounts-payable/bill/1692
                 */
                readonly href?: string;
                /**
                 * @description Indicates the unique identifier assigned to the accounts payable bill.
                 * @example Bill-001
                 */
                readonly billNumber?: string | null;
                /**
                 * @description Indicates the current state of the accounts payable bill.
                 * @example draft
                 * @enum {string}
                 */
                readonly state?: "reversed" | "reversal" | "analyzing" | "partiallyApproved" | "submitted" | "declined" | "noValue" | "posted" | "paid" | "partiallyPaid" | "selected" | "draft";
                /**
                 * Format: date
                 * @description Indicates the date the bill was created.
                 * @example 2026-09-12
                 */
                readonly createdDate?: string;
            };
        };
        /** @description Represents detailed information about Accounts Payable payments, including associated amounts, and related metadata for financial tracking and reporting. */
        "objects.construction.primary-document-accounts-payable-payment": {
            /**
             * @description System-assigned unique key for the primary document AP payment. Contains only digits, hyphens, or both, for example 123, -45, 1-2-3.
             * @example 151-123-123
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the primary document AP payment. Contains only digits, hyphens, or both, for example 123, -45, 1-2-3. This value is the same as the key value for this object.
             * @example 151-123-123
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the primary document accounts payable payment.
             * @example /objects/construction/primary-document-accounts-payable-payment/151-123-123
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-10
             * @description The total payment amount, calculated based on the associated transactions and payment details.
             * @example 150.0000000000
             */
            readonly paymentAmount?: string;
            /** @description The AP payment associated with the primary document. */
            readonly apPayment?: {
                /**
                 * @description System-assigned unique key for the AP payment.
                 * @example 3265
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the AP payment. This value is the same as the `key` for this object.
                 * @example 3265
                 */
                readonly id?: string;
                /**
                 * @description Reference number for the payment, which can be the check number or the transaction number, depending on the payment method used.
                 * @example BILL-165
                 */
                readonly documentNumber?: string | null;
                /**
                 * @description Payment method for the accounts payable payment.
                 * @example Cash
                 */
                readonly paymentMethod?: string;
                /**
                 * Format: date
                 * @description Payment date for the accounts payable payment.
                 * @example 2025-04-21
                 */
                readonly paymentDate?: string;
                /**
                 * @description URL endpoint for the accounts payable payment.
                 * @example /objects/accounts-payable/payment/3265
                 */
                readonly href?: string;
            };
            /** @description Financial account associated with the primary document AP payment. */
            readonly financialEntity?: {
                /**
                 * @description System-assigned key for the bank account.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the bank account.
                 * @example BOA
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the bank account.
                 * @example /objects/cash-management/bank-account/1
                 */
                readonly href?: string;
            };
            /** @description The source transaction document associated with the primary document AP payment. */
            readonly primaryDocument?: {
                /**
                 * @description System-assigned key for the primary document.
                 * @example 6095
                 */
                readonly key?: string;
                /**
                 * @description This value is the same as the `key` for this object.
                 * @example 6095
                 */
                readonly id?: string;
                /**
                 * @description Unique identifier for the primary document.
                 * @example PO-Source00-PO#1495#doc
                 */
                readonly documentId?: string;
                /**
                 * @description URL endpoint for the primary document.
                 * @example /objects/purchasing/document/6095
                 */
                readonly href?: string;
            };
        };
        /** @description Represents detailed information about retainage release bills, including associated transactions, amounts, and related metadata for financial tracking and reporting. */
        "objects.construction.primary-document-retainage-release": {
            /**
             * @description System-assigned unique key for the primary document retainage release. Contains only digits, hyphens, or both, for example 123, -45, 1-2-3.
             * @example 151-123-123
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the primary document retainage release. Contains only digits, hyphens, or both, for example 123, -45, 1-2-3. This value is the same as the key value for this object.
             * @example 151-123-123
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the primary document retainage release.
             * @example /objects/construction/primary-document-retainage-release/151-123-123
             */
            readonly href?: string;
            /** @description Represents the calculated invoice totals for the primary document retainage release in transaction currency. */
            readonly invoiceTotals?: {
                /**
                 * Format: decimal-precision-10
                 * @description The total amount invoiced for the primary document.
                 * @example 100.0000000000
                 */
                readonly totalAmountInvoiced?: string;
                /**
                 * Format: decimal-precision-10
                 * @description The total amount paid for the primary document.
                 * @example 90.0000000000
                 */
                readonly totalAmountPaid?: string;
                /**
                 * Format: decimal-precision-10
                 * @description The remaining balance on the invoice after payments have been applied.
                 * @example 10.0000000000
                 */
                readonly invoiceBalanceAmount?: string;
            };
            /** @description The source transaction document associated with the primary document retainage release. */
            readonly primaryDocument?: {
                /**
                 * @description System-assigned key for the primary document.
                 * @example 6081
                 */
                readonly key?: string;
                /**
                 * @description This value is the same as the `key` for this object.
                 * @example 6081
                 */
                readonly id?: string;
                /**
                 * @description Unique identifier for the primary document.
                 * @example PO-Source01-R2-287
                 */
                readonly documentId?: string;
                /**
                 * Format: date
                 * @description GL posting date for the primary document.
                 * @example 2025-04-16
                 */
                readonly postingDate?: string;
                /**
                 * @description URL endpoint for the primary document.
                 * @example /objects/purchasing/document/6081
                 */
                readonly href?: string;
            };
            /** @description The Accounts Payable bill associated with the primary document retainage release. */
            readonly apBill?: {
                /**
                 * @description System-assigned key for the AP bill.
                 * @example 3254
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the AP bill. This value is the same as the `key` for this object.
                 * @example 3254
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the AP bill.
                 * @example /objects/accounts-payable/bill/3254
                 */
                readonly href?: string;
                /**
                 * @description Unique number assigned for the AP bill.
                 * @example APReta-62
                 */
                readonly billNumber?: string | null;
                /**
                 * @description The current state of the AP bill.
                 * @example draft
                 * @enum {string}
                 */
                readonly state?: "reversed" | "reversal" | "analyzing" | "partiallyApproved" | "submitted" | "declined" | "noValue" | "posted" | "paid" | "partiallyPaid" | "selected" | "draft";
                /**
                 * Format: date
                 * @description Date that the bill was created.
                 * @example 2025-04-16
                 */
                readonly createdDate?: string;
            };
        };
        /** @description A compliance record applies a compliance type to a specified vendor or primary document so that you can track dates, amounts, and documents that show compliance. */
        "objects.construction.compliance-record": {
            /**
             * @description System-assigned unique key for the compliance record.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the compliance record.
             *     Sage Intacct automatically generates this value based on the sequence numbering specified in the compliance type object.
             * @example Employee-Health-Ins-003
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the compliance record.
             * @example /objects/construction/compliance-record/23
             */
            readonly href?: string;
            /**
             * @description Name for the compliance record.
             * @example Employee Health Insurance
             */
            name?: string;
            /**
             * @description Description of the compliance record.
             * @example Compliance record for Employee Health Insurance
             */
            description?: string | null;
            /**
             * @description The policy or document number for the compliance record.
             * @example 1234567890
             */
            policyNumber?: string | null;
            /**
             * @description Document reference number.
             * @example 1234567890
             */
            referenceNumber?: string | null;
            /**
             * Format: date
             * @description Date when the policy or document becomes effective.
             * @example 2025-01-06
             */
            effectiveDate?: string | null;
            /**
             * Format: date
             * @description Date when the policy or document expires.
             * @example 2025-01-06
             */
            expirationDate?: string | null;
            /**
             * Format: decimal-precision-2
             * @description User defined amount that can specify insurance coverage, lien waiver, etc.
             * @example 100.06
             */
            amount?: string | null;
            /**
             * @description Indicates whether the compliance record is additionally insured.
             * @default false
             * @example true
             */
            isAdditionallyInsured?: boolean;
            /**
             * @description Indicates whether the compliance record includes a subrogation waiver.
             * @default false
             * @example true
             */
            hasSubrogationWaiver?: boolean;
            /**
             * @description Transaction definition for the primary document, for compliance records that are associated with a primary document.
             * @example zPrim-PurchaseOrder
             */
            readonly documentType?: string | null;
            /**
             * @description Indicates whether the lien waiver compliance record is voided.
             * @default false
             * @example true
             */
            readonly isVoided?: boolean;
            /**
             * @description Indicates whether the compliance record is a final compliance of this category for this vendor. Applicable only when `category` is set to `lienWaiver`.
             * @default false
             * @example true
             */
            isFinalCompliance?: boolean;
            /**
             * @description Compliance template.
             * @example Lien waiver unconditional partial
             */
            readonly complianceTemplate?: string | null;
            /**
             * @description Final compliance template.
             * @example Lien waiver unconditional final
             */
            readonly finalComplianceTemplate?: string | null;
            /**
             * @description Secondary vendor compliance template.
             * @example V114 Lien waiver unconditional partial
             */
            readonly secondaryVendorComplianceTemplate?: string | null;
            /**
             * @description Indicates whether the required compliance record document has been received.
             * @default false
             * @example true
             */
            isDocumentReceived?: boolean;
            /**
             * Format: date
             * @description The date when the compliance document was received.
             * @example 2025-01-06
             */
            receivedDate?: string | null;
            /**
             * @description If `true`, override the `paymentNotification` setting in the `construction/compliance-definition` object.
             * @default false
             * @example true
             */
            overrideNotification?: boolean;
            /**
             * @description Indicates whether the compliance record is system-generated.
             * @default false
             * @example true
             */
            readonly isSystemGenerated?: boolean;
            /**
             * @description Notes or comments about the compliance record.
             * @example Contact admin for more information on this compliance record.
             */
            notes?: string | null;
            /** @description The purchasing document associated with the compliance record. */
            readonly purchasingDocument?: {
                /**
                 * @description URL endpoint for the purchasing document.
                 * @example /objects/purchasing/document/108
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the purchasing document.
                 * @example 108
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the purchasing document.
                 * @example PurchaseOrder-PO#0015#doc
                 */
                readonly id?: string | null;
            };
            /** @description The AP bill associated with the purchasing document. */
            readonly bill?: {
                /**
                 * @description URL endpoint for the bill.
                 * @example /objects/accounts-payable/bill/23
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the bill.
                 * @example 207
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the bill.
                 * @example AT - Bill Number 1
                 */
                readonly id?: string | null;
            };
            /** @description The compliance definition object associated with the compliance record. */
            readonly complianceDefinition?: {
                /**
                 * @description URL endpoint for the compliance definition.
                 * @example /objects/construction/compliance-definition/1
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the compliance definition.
                 * @example 48
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the compliance definition.
                 * @example Workman-Comp-Insurance
                 */
                readonly id?: string;
                /**
                 * @description Compliance category.
                 * @example insurance
                 * @enum {string}
                 */
                readonly category?: "insurance" | "miscellaneous" | "lienWaiver";
                /**
                 * @description Specifies the rule for validation.
                 * @example expirationDate
                 * @enum {string}
                 */
                readonly validationRule?: "expirationDate" | "documentReceived";
                /**
                 * @description Indicates how non-compliance is specified in AP payments.
                 * @example warning
                 * @enum {string}
                 */
                readonly paymentNotification?: "error" | "warning" | "ignore";
            };
            /** @description The compliance type associated with the compliance record. */
            complianceType?: {
                /**
                 * @description URL endpoint for the compliance type.
                 * @example /objects/construction/compliance-type/23
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the compliance type.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the compliance type.
                 * @example Vendor_Med_Ins
                 */
                id?: string;
            };
            contacts?: {
                /** @description The primary contact associated with the compliance record. */
                primary?: {
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/23
                     */
                    readonly href?: string;
                    /**
                     * @description System-assigned key for the contact.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the contact.
                     * @example John
                     */
                    id?: string | null;
                };
                /** @description The contact the compliance record is sent to. */
                sendTo?: {
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/23
                     */
                    readonly href?: string;
                    /**
                     * @description System-assigned key for the contact.
                     * @example 12
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the contact.
                     * @example John
                     */
                    id?: string | null;
                };
            };
            /** @description The AP payment associated with the compliance record. */
            readonly payment?: {
                /**
                 * @description URL endpoint for the payment.
                 * @example /objects/accounts-payable/payment/23
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the payment.
                 * @example 171
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the payment.
                 * @example 171
                 */
                readonly id?: string | null;
            };
            /** @description The primary document associated with the compliance record. */
            primaryDocument?: {
                /**
                 * @description URL endpoint for the document.
                 * @example /objects/purchasing/document/23
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the document.
                 * @example 108
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the document.
                 * @example zPrim-PurchaseOrder-PO#0015#doc
                 */
                id?: string | null;
            };
            /** @description The employee who received the compliance record. */
            receivedBy?: {
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/23
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the employee.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the employee.
                 * @example 12
                 */
                id?: string | null;
                /**
                 * @description The name for the employee.
                 * @example John
                 */
                readonly name?: string | null;
            };
            /** @description The attachment associated with the compliance record. */
            attachment?: {
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/23
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the attachment.
                 * @example 23
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the attachment.
                 * @example att-1
                 */
                id?: string | null;
            };
            /** @description The vendor associated with the compliance record. */
            vendor?: {
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/23
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the vendor.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the vendor.
                 * @example 1099 Int
                 */
                id?: string;
            };
            /** @description The project associated with the compliance record. */
            project?: {
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/1
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the project.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the project.
                 * @example DIM - BTI
                 */
                id?: string;
            };
            /**
             * @description Name for the secondary vendor.
             * @example Westside Electric
             */
            secondaryVendorName?: string | null;
            /**
             * @description Indicates if the compliance record is for a secondary vendor.
             * @default false
             * @example true
             */
            isSecondaryVendor?: boolean;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
            entity?: components["schemas"]["entity-ref"];
        };
        "construction-compliance-recordRequiredProperties": Record<string, never>;
        /** @description A specific license, insurance, or other document that you want to track for vendors. */
        "objects.construction.compliance-type": {
            /**
             * @description System-assigned unique key for the compliance type.
             * @example 5
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the compliance type.
             * @example Vendor_Med_Ins
             */
            id?: string;
            /**
             * @description URL endpoint for the compliance type.
             * @example /objects/construction/compliance-type/5
             */
            readonly href?: string;
            /**
             * @description Name for the compliance type.
             * @example Vendor Medical Insurance
             */
            name?: string;
            /**
             * @description Description for the compliance type.
             * @example Compliance type for Vendor Medical Insurance
             */
            description?: string | null;
            /** @description Compliance definition associated with the compliance type. */
            complianceDefinition?: {
                /**
                 * @description System-assigned key for the compliance definition.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the compliance definition.
                 * @example Workman-Comp-Insurance
                 */
                id?: string;
                /**
                 * @description URL endpoint for the compliance definition.
                 * @example /objects/construction/compliance-definition/1
                 */
                readonly href?: string;
            };
            /** @description Determines the automatic numbering and formatting of new compliance record IDs. Requires auto-numbering. */
            complianceRecordIdSequence?: {
                /**
                 * @description System-assigned key for the document sequence.
                 * @example 101
                 */
                key?: string;
                /**
                 * @description Unique identifier for the document sequence.
                 * @example MED_INS_COMPLIANCE_SEQ_NUM
                 */
                id?: string;
                /**
                 * @description URL endpoint for the document sequence.
                 * @example /objects/company-config/document-sequence/101
                 */
                readonly href?: string;
            };
            /**
             * @description The printed document template that Sage Intacct uses to generate documents for lien waiver compliance records.
             * @example Document template
             */
            readonly complianceTemplate?: string;
            /**
             * @description The printed document template that Sage Intacct uses to generate documents for lien waiver compliance records for final compliance.
             * @example Final document template
             */
            readonly finalComplianceTemplate?: string;
            /**
             * @description The compliance template for the secondary vendor.
             * @example Secondary vendor document template
             */
            readonly secondaryVendorComplianceTemplate?: string;
            /**
             * @description Compliance record custom fields associated with the compliance type. These values control which custom fields are available for use on the compliance record associated with the compliance type.
             * @example [
             *       "5",
             *       "3",
             *       "6",
             *       "7"
             *     ]
             */
            complianceRecordCustomFields?: (string | null)[];
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
        };
        "construction-compliance-typeRequiredProperties": Record<string, never>;
        /** @description Compliance definitions provide validation rules and notification settings for tracking vendor compliance. */
        "objects.construction.compliance-definition": {
            /**
             * @description System-assigned unique key for the compliance definition.
             * @example 20
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the compliance definition.
             * @example Workers-Comp-Insurance
             */
            id?: string;
            /**
             * @description URL endpoint for the compliance definition.
             * @example /objects/construction/compliance-definition/20
             */
            readonly href?: string;
            /**
             * @description Name for the compliance definition.
             * @example Workers' Comp Insurance
             */
            name?: string;
            /**
             * @description Description for the compliance definition.
             * @example Compliance Definition used for Workers' Comp Insurance.
             */
            description?: string | null;
            /**
             * @description Determines the options that are available for `generateRule` and `validateRule` field settings. This value cannot be changed after a compliance definition is created.
             * @example insurance
             * @enum {string}
             */
            category?: "insurance" | "miscellaneous" | "lienWaiver";
            /**
             * @description Determines how to generate and track compliance records. If `category` is set to `insurance`, this field must be set to `vendor`.
             *
             *     * `vendor` - The compliance definition is set up to track miscellaneous or insurance compliance records by vendor.
             *     * `primaryDocument` - The compliance definition is set up to track miscellaneous, insurance, or lien waiver compliance records by primary document.
             * @default vendor
             * @example vendor
             * @enum {string}
             */
            trackBy?: "vendor" | "primaryDocument";
            /**
             * @description Determines if compliance records are automatically generated for this compliance definition.
             *
             *     * `doNotGenerate` - Specify this option if you do not want Sage Intacct to generate compliance records. You can create compliance records manually.
             *     * `automaticByType` - Depending on the value of `trackBy`, you can specify vendors or transaction definitions. When this option is specified, Sage Intacct automatically generates a compliance record when creating a new vendor or primary document.
             * @default doNotGenerate
             * @example doNotGenerate
             * @enum {string}
             */
            generateRule?: "doNotGenerate" | "automaticByType";
            /**
             * @description Specify validation rules only when `miscellaneous` is set as the compliance `category`. `documentReceived` is the default validation rule when `insurance` or `lienWaiver` is set as the compliance `category`.
             *
             *     * `expirationDate` - Sage Intacct compares the `expirationDate` field in the `construction.compliance-record` object to the `paymentDate` field in the `accounts-payable.payment` object. The vendor is non-compliant if the expiration date is before or on the payment date.
             *     * `documentReceived` - The compliance definition is set up to validate a compliance record when the document is received.
             * @example expirationDate
             * @enum {string}
             */
            validationRule?: "expirationDate" | "documentReceived";
            /**
             * @description Determines whether payment is allowed if a vendor is not in compliance.
             *
             *     * `error` - Does not allow making a payment to a vendor if their record is out of compliance.
             *     * `warning` - Allows to pay AP bills and returns a warning if a vendor's record is out of compliance.
             *     * `ignore` - Ignores whether a vendor's record is out of compliance.
             * @example error
             * @enum {string}
             */
            paymentNotification?: "error" | "warning" | "ignore";
            /**
             * @description Determines if a lien waiver is automatically generated by AP bill or AP payment.
             * @default null
             * @example apBill
             * @enum {string|null}
             */
            generateForEach?: null | "apBill" | "apPayment";
            /**
             * Format: decimal-precision-2
             * @description The minimum amount required to generate a lien waiver.
             * @example 100.00
             */
            minimumLienWaiverAmount?: string | null;
            /**
             * Format: decimal-precision-2
             * @description The minimum amount of the primary document required to generate a lien waiver.
             * @example 100.00
             */
            minimumPrimaryDocumentAmount?: string | null;
            /**
             * @description Indicates whether lien waivers with negative amounts are allowed.
             * @default true
             * @example true
             */
            allowNegativeLienWaivers?: boolean;
            /** @description List of compliance definition association objects. */
            complianceDefinitionAssociations?: components["schemas"]["objects.construction.compliance-definition-association"][];
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "construction-compliance-definitionRequiredProperties": Record<string, never>;
        /** @description Associate compliance definition objects with vendor, project, or document types used. */
        "objects.construction.compliance-definition-association": {
            /**
             * @description System-assigned unique key for the compliance definition association.
             * @example 10
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the compliance definition association. This value is the same as the `key` for this object.
             * @example 10
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the compliance definition association.
             * @example /objects/construction/compliance-definition-association/10
             */
            readonly href?: string;
            /** @description Compliance definition which the compliance definition association is associated with. */
            readonly complianceDefinition?: {
                /**
                 * @description System-assigned key for the compliance definition.
                 * @example 4
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the compliance definition.
                 * @example Workers-Comp-Insurance
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the compliance definition
                 * @example /objects/construction/compliance-definition/4
                 */
                readonly href?: string;
            };
            /** @description Vendor type associated with the compliance definition. */
            vendorType?: {
                /**
                 * @description System-assigned key for the vendor type.
                 * @example 12
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the vendor type.
                 * @example Wholesaler
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the vendor type.
                 * @example /objects/accounts-payable/vendor-type/12
                 */
                readonly href?: string;
            };
            /** @description Project type associated with the compliance definition. */
            projectType?: {
                /**
                 * @description System-assigned key for the project type.
                 * @example 3
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the project type.
                 * @example Internal
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the project type.
                 * @example /objects/projects/project-type/3
                 */
                readonly href?: string;
            };
            /**
             * @description Document type associated with the compliance definition.
             * @example zPrim-PurchaseOrder
             */
            documentType?: string | null;
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description A work order represents a unit of service work to be performed and tracked independently in a construction project. */
        "objects.construction.work-order": {
            /**
             * @description System-assigned unique key for the work order.
             * @example 18
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the work order.
             * @example WO-0017
             */
            id?: string;
            /**
             * @description URL endpoint for the work order.
             * @example /objects/construction/work-order/18
             */
            readonly href?: string;
            /**
             * @description Name for the work order.
             * @example WO-India
             */
            name?: string | null;
            /**
             * @description Description for the work order.
             * @example WO India Entity
             */
            description?: string | null;
            /** @description Type for the work order. */
            workOrderType?: {
                /**
                 * @description System-assigned key for the work order type.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Unique identifier for the work order type. This value is same as key for this object.
                 * @example 10
                 */
                id?: string;
                /**
                 * @description URL endpoint for the work order type.
                 * @example /objects/construction/work-order-type/10
                 */
                readonly href?: string;
            };
            /** @description Call type for the work order. */
            workOrderCallType?: {
                /**
                 * @description System-assigned key for the work order call type.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description Unique identifier for the work order call type. This value is same as key for this object.
                 * @example 11
                 */
                id?: string;
                /**
                 * @description URL endpoint for the work order call type.
                 * @example /objects/construction/work-order-call-type/11
                 */
                readonly href?: string;
            };
            /** @description Problem code for the work order. */
            workOrderProblemCode?: {
                /**
                 * @description System-assigned key for the work order problem code.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Unique identifier for the work order problem code. This value is same as key for this object.
                 * @example 10
                 */
                id?: string;
                /**
                 * @description URL endpoint for the work order problem code.
                 * @example /objects/construction/work-order-problem-code/10
                 */
                readonly href?: string;
            };
            /** @description State for the work order. */
            workOrderState?: {
                /**
                 * @description System-assigned key for the work order state.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Unique identifier for the work order state. This value is same as key for this object.
                 * @example 10
                 */
                id?: string;
                /**
                 * @description URL endpoint for the work order state.
                 * @example /objects/construction/work-order-state/10
                 */
                readonly href?: string;
            };
            /** @description The customer the work order was received from. */
            customer?: {
                /**
                 * @description System-assigned key for the customer.
                 * @example 14
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the customer.
                 * @example BTI
                 */
                id?: string | null;
                /**
                 * @description Name for the customer.
                 * @example Berkeley Technology Inc
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/14
                 */
                readonly href?: string;
            };
            /** @description Employee assigned to the work order. */
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
                 * @example Thomas Glenn
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/10
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description The date the work order was requested, in yyyy-mm-dd format.
             * @example 2025-01-01
             */
            workOrderDate?: string | null;
            /**
             * Format: date
             * @description The date the work order was closed, in yyyy-mm-dd format.
             * @example 2025-09-01
             */
            closedDate?: string | null;
            /** @description The project associated with the work order. */
            project?: {
                /**
                 * @description System-assigned key for the project.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the project.
                 * @example DIM - BTI
                 */
                id?: string | null;
                /**
                 * @description Name for the project.
                 * @example Dimensions - Berkeley Technology Inc
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/1
                 */
                readonly href?: string;
            };
            /** @description Location associated with the work order. */
            location?: {
                /**
                 * @description System-assigned key for the location.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the location.
                 * @example 1
                 */
                id?: string | null;
                /**
                 * @description Name for the location.
                 * @example United States of America
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/1
                 */
                readonly href?: string;
            };
            /** @description Department associated with the work order. */
            department?: {
                /**
                 * @description System-assigned key for the department.
                 * @example 7
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the department.
                 * @example CS
                 */
                id?: string | null;
                /**
                 * @description Name for the department.
                 * @example Client Services
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/7
                 */
                readonly href?: string;
            };
            /** @description The employee who manages the work order. */
            salesperson?: {
                /**
                 * @description System-assigned key for the employee.
                 * @example 256
                 */
                key?: string;
                /**
                 * @description Unique identifier for the employee.
                 * @example 10000
                 */
                id?: string;
                /**
                 * @description Name for the employee.
                 * @example xktxa
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/256
                 */
                readonly href?: string;
            };
            /** @description Class associated with the work order. */
            class?: {
                /**
                 * @description System-assigned key for the class.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the class.
                 * @example 10
                 */
                id?: string | null;
                /**
                 * @description Name for the class.
                 * @example Construction
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the class.
                 * @example /objects/company-config/class/1
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates whether the work order was complete.
             * @default false
             * @example true
             */
            isComplete?: boolean;
            /** @description External work order details. */
            externalDetails?: {
                /**
                 * @description External work order number.
                 * @example W0-5678
                 */
                workOrderNumber?: string | null;
                /**
                 * @description Alternate work order number 1.
                 * @example A-WO-001
                 */
                workOrderNumber1?: string | null;
                /**
                 * @description Alternate work order number 2.
                 * @example B-WO-002
                 */
                workOrderNumber2?: string | null;
                /**
                 * @description Location where the work order service is performed.
                 * @example Site A
                 */
                serviceSite?: string | null;
                /**
                 * @description Agreement number.
                 * @example AG-1234
                 */
                agreementNumber?: string | null;
                /**
                 * @description Agreement sequence number.
                 * @example WO-1
                 */
                agreementSequence?: string | null;
                /**
                 * @description Indicates whether the work order was auto-generated.
                 * @default false
                 * @example true
                 */
                isAutoGenerated?: boolean;
                /**
                 * @description Purchase order identifier supplied by the customer.
                 * @example PO-7890
                 */
                customerPurchaseOrder?: string | null;
                /**
                 * @description Indicates whether the work order is billable.
                 * @default false
                 * @example true
                 */
                isBillable?: boolean;
                /**
                 * Format: decimal-precision-2
                 * @description External estimated repair hours for the work order.
                 * @example 300.00
                 */
                estimatedHours?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description External actual repair hours for the work order.
                 * @example 250.00
                 */
                actualHours?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description External estimated cost for the work order.
                 * @example 500000.00
                 */
                estimatedCost?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description External actual cost for the work order.
                 * @example 400000.00
                 */
                actualCost?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description External maximum cost for the work order.
                 * @example 500000.00
                 */
                notToExceedCost?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Work order amount.
                 * @example 499999.00
                 */
                workOrderAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Amount billed for the work order.
                 * @example 499999.00
                 */
                billedAmount?: string | null;
            };
            /**
             * @description System-generated record URL for the work order.
             * @example https://example.com/records/1001
             */
            recordURL?: string | null;
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s2"];
        };
        "construction-work-orderRequiredProperties": Record<string, never>;
        /** @description The category for the work order service request. */
        "objects.construction.work-order-type": {
            /**
             * @description System-assigned key for the work order type.
             * @example 10
             */
            readonly key?: string;
            /**
             * @description Unique identifier or name for the work order type.
             * @example Service Call
             */
            id?: string;
            /**
             * @description URL endpoint for the work order type.
             * @example /objects/construction/work-order-type/10
             */
            readonly href?: string;
            /** @description Parent work order type, that allows you to create work order type hierarchies. */
            parent?: {
                /**
                 * @description System-assigned key for the parent work order type.
                 * @example 2
                 */
                key?: string | null;
                /**
                 * @description Unique identifier (name) for the parent work order type.
                 * @example Emergency Repair
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the parent work order type.
                 * @example /objects/construction/work-order-type/2
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s2"];
        };
        "construction-work-order-typeRequiredProperties": Record<string, never>;
        /** @description A subcategory for a work order service request. */
        "objects.construction.work-order-call-type": {
            /**
             * @description System-assigned key for the work order call type.
             * @example 11
             */
            readonly key?: string;
            /**
             * @description Unique identifier or name for the work order call type.
             * @example Warranty Request
             */
            id?: string;
            /**
             * @description URL endpoint for the work order call type.
             * @example /objects/construction/work-order-call-type/11
             */
            readonly href?: string;
            /** @description Parent work order call type, that allows you to create call type hierarchies. */
            parent?: {
                /**
                 * @description System-assigned key for the parent work order call type.
                 * @example 4
                 */
                key?: string | null;
                /**
                 * @description Unique identifier (name) for the parent work order call type.
                 * @example Customer Request
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the parent work order call type.
                 * @example /objects/construction/work-order-call-type/4
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s2"];
        };
        "construction-work-order-call-typeRequiredProperties": Record<string, never>;
        /** @description Identifies the current status for a work order service request. */
        "objects.construction.work-order-state": {
            /**
             * @description System-assigned unique key for the work order state.
             * @example 10
             */
            readonly key?: string;
            /**
             * @description Unique identifier or name for the work order state.
             * @example Active
             */
            id?: string;
            /**
             * @description URL endpoint for the work order state.
             * @example /objects/construction/work-order-state/10
             */
            readonly href?: string;
            /** @description Parent work order state, that allows you to create work order state hierarchies. */
            parent?: {
                /**
                 * @description System-assigned key for the parent work order state.
                 * @example 4
                 */
                key?: string | null;
                /**
                 * @description Unique identifier (name) for the parent work order state.
                 * @example Emergency Repair
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the parent work order state.
                 * @example /objects/construction/work-order-state/4
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s2"];
        };
        "construction-work-order-stateRequiredProperties": Record<string, never>;
        /** @description A subcategory that describes the source of the work order service issue. */
        "objects.construction.work-order-problem-code": {
            /**
             * @description System-assigned unique key for the work order problem code.
             * @example 10
             */
            readonly key?: string;
            /**
             * @description Unique identifier or name for the work order problem code.
             * @example Equipment Not Starting
             */
            id?: string;
            /**
             * @description URL endpoint for the work order problem code.
             * @example /objects/construction/work-order-problem-code/10
             */
            readonly href?: string;
            /** @description Parent work order problem code, that allows you to create work order problem code hierarchies. */
            parent?: {
                /**
                 * @description System-assigned key for the parent work order problem code.
                 * @example 7
                 */
                key?: string | null;
                /**
                 * @description Unique identifier (name) for the parent work order problem code.
                 * @example Damaged Material
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the parent work order problem code.
                 * @example /objects/construction/work-order-problem-code/7
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s2"];
        };
        "construction-work-order-problem-codeRequiredProperties": Record<string, never>;
        /** @description Configuration of accounts used for your WIP schedule periods, and a reconciliation method for overbilling and underbilling amounts. */
        "objects.construction-forecasting.wip-setup": {
            /**
             * @description System-generated unique key for the WIP setup.
             * @example 123
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the WIP setup. This value is the same as the `key` for this object.
             * @example 123
             */
            readonly id?: string;
            /** @description The general ledger journal to use when posting a WIP schedule. */
            postingJournal?: {
                /**
                 * @description System-generated unique key for the general ledger journal.
                 * @example 9
                 */
                key?: string;
                /**
                 * @description The general ledger journal book ID to use when posting a WIP schedule.
                 * @example GJ
                 */
                id?: string;
                /**
                 * @description The general ledger journal name to use when posting a WIP schedule.
                 * @example General Journal
                 */
                readonly name?: string;
                /**
                 * @description Endpoint URL for the posting journal.
                 * @example /objects/general-ledger/journal/9
                 */
                readonly href?: string;
            };
            /**
             * @description Reconciliation method for overbilling and underbilling amounts.
             * @default autoReverse
             * @example autoReverse
             * @enum {string}
             */
            reconciliationMethod?: "autoReverse" | "autoReverseBegin" | "autoReverseEnd" | "netChange";
            /**
             * @description If `true`, automatically create the next WIP period.
             * @default false
             * @example false
             */
            autoCreateNextPeriod?: boolean;
            /**
             * @description The level at which to allow cost and forecast breakdowns.
             * @default wipScheduleProject
             * @example wipScheduleProject
             * @enum {string}
             */
            wipCostBreakdownLevel?: "wipScheduleProject" | "project" | "costCode" | "costCodeAndCostType";
            /**
             * @description List of general ledger accounts used for WIP schedules. You may specify multiple accounts for cost and revenue.
             *     Specify one account for overbilling and underbilling, and either a single `offset` account or
             *     one each of `underbillingOffset` and `overbillingOffset`. You may not use an `offset` account in combination with either an `underbillingOffset` or an `overbillingOffset` account.
             */
            wipSetupAccounts?: components["schemas"]["objects.construction-forecasting.wip-setup-account"][];
            /**
             * @description If `true`, projects with zero job-to-date costs and billings are included in WIP schedules.
             * @default true
             * @example true
             */
            includeZeroJobToDateAmounts?: boolean;
            /**
             * @description If `true`, project manager forecasts are based on primary forecast estimates.
             * @default false
             * @example true
             */
            usePrimaryForecasts?: boolean;
            /**
             * @description Endpoint URL for the WIP setup.
             * @example /objects/construction-forecasting/wip-setup/123
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "wip-setup-required-properties": Record<string, never>;
        /** @description Configuration of accounts used for your WIP schedule periods. */
        "objects.construction-forecasting.wip-setup-account": {
            /**
             * @description System-assigned unique key for the WIP setup account.
             * @example 123
             */
            key?: string;
            /**
             * @description Unique identifier for the WIP setup account. This value is the same as the `key` for this object.
             * @example 123
             */
            id?: string;
            /**
             * @description Category of general ledger account for the WIP setup account:
             *
             *     - `cost` - The account is used to track job costs.
             *     - `revenue` -  The account is used to track job billings.
             *     - `overbilling` -  The account is used to post overbilling amounts.
             *     - `underbilling` -  The account is used to post underbilling amounts.
             *     - `offset` - The account is used to post adjustments for both overbilling and underbilling amounts.
             *     - `underbillingOffset` - The account is used to post adjustments for underbilling amounts.
             *     - `overbillingOffset` - The account is used to post adjustments for overbilling amounts.
             * @default cost
             * @example cost
             * @enum {string}
             */
            wipAccountType?: "cost" | "revenue" | "overbilling" | "underbilling" | "offset" | "underbillingOffset" | "overbillingOffset";
            /** @description General ledger account for the WIP setup account. */
            account?: {
                /**
                 * @description System-assigned key for the GL account.
                 * @example 220
                 */
                key?: string;
                /**
                 * @description Unique identifier for the GL account.
                 * @example 200
                 */
                id?: string;
                /**
                 * @description Name or title of the GL account.
                 * @example Entertainment
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/220
                 */
                readonly href?: string;
            };
            /**
             * @description Endpoint URL for the WIP setup account.
             * @example /objects/construction-forecasting/wip-setup-account/123
             */
            readonly href?: string;
            /** @description The WIP setup this WIP setup account is part of. */
            wipSetup?: {
                /**
                 * @description Unique key for the WIP setup.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description Unique identifier for the WIP setup.
                 * @example 123
                 */
                id?: string;
                /**
                 * @description Endpoint URL for the WIP setup.
                 * @example /objects/construction-forecasting/wip-setup/123
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "construction-forecasting-wip-setup-accountRequiredProperties": Record<string, never>;
        /** @description Ongoing projects that may be included in a WIP schedule period for tracking and forecasting. */
        "objects.construction-forecasting.wip-project": {
            /**
             * @description System-assigned key for the WIP project.
             * @example 1
             */
            key?: string;
            /**
             * @description Unique identifier for the WIP project. This value is the same as the `key` for this object.
             * @example 1
             */
            id?: string;
            /**
             * @description A WIP project is finalized when it is ready to be posted to the general ledger.
             * @default false
             * @example false
             */
            isFinalized?: boolean;
            /**
             * Format: date
             * @description Date this WIP project was posted to the general ledger.
             * @example 2023-05-16
             */
            readonly glPostedDate?: string;
            /**
             * Format: decimal-precision-2
             * @description The project's estimated costs to-date based on estimate entries in the project's primary estimate. Estimate entries are included if they meet the following criteria:
             *     - Have a workflow type of original, revision, or approved change.
             *     - Have an effective date that falls before or on the end date for the WIP schedule.
             * @example 10000.00
             */
            estimatedCostToDateAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description The project's actual costs to-date. This amount comes from journal postings to the selected cost accounts.
             * @example 1000.00
             */
            jobToDateCosts?: string;
            /**
             * Format: decimal-precision-2
             * @description Estimate of the costs remaining for the project. The amount is calculated as `estimatedCostAtCompletion` less `jobToDateCosts`.
             * @example 3000.00
             */
            estimatedCostToComplete?: string;
            /**
             * Format: decimal-precision-2
             * @description Estimated cost at completion of the project based on estimate entries in the project's primary estimate. Estimate entries are included if they have a workflow type of original, revision, or approved change.
             * @example 3000.00
             */
            estimatedCostAtCompletion?: string;
            /**
             * Format: decimal-precision-2
             * @description Estimated pending amount based on pending estimate entries in the project's primary estimate.
             * @example 3000.00
             */
            pendingEstimatesAmount?: string;
            /**
             * Format: percent-precision-2
             * @description Estimated percent complete for the project, calculated as project's `jobToDateCosts` divided by `estimatedCostAtCompletion`.
             * @example 70.5
             */
            estimatedPercentComplete?: string;
            /** @description Project manager's forecast of project costs, profits, and completion percentage. */
            projectManagerForecast?: {
                /**
                 * Format: decimal-precision-2
                 * @description Project manager forecast cost to complete.
                 * @example 3000.00
                 */
                costToComplete?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Project manager forecast cost at completion.
                 * @example 9000.00
                 */
                costAtCompletion?: string;
                /**
                 * Format: percent-precision-2
                 * @description Project manager forecast percent complete.
                 * @example 90
                 */
                percentComplete?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Project manager forecast contract value.
                 * @example 10000.00
                 */
                contractValue?: string;
                /**
                 * Format: date-time
                 * @description The date and time the project manager last updated their forecast.
                 * @example 2023-05-26T10:06:00Z
                 */
                lastUpdatedDate?: string;
            };
            /** @description CFO forecast of project costs, profits, and completion percentage. */
            cfoForecast?: {
                /**
                 * Format: decimal-precision-2
                 * @description CFO forecast cost to complete.
                 * @example 4000.00
                 */
                costToComplete?: string;
                /**
                 * Format: decimal-precision-2
                 * @description CFO forecast cost at completion.
                 * @example 9500.00
                 */
                costAtCompletion?: string;
                /**
                 * Format: percent-precision-2
                 * @description CFO forecast percent complete.
                 * @example 70
                 */
                percentComplete?: string;
                /**
                 * Format: decimal-precision-2
                 * @description CFO forecast contract value.
                 * @example 10000.00
                 */
                contractValue?: string;
                /**
                 * Format: date-time
                 * @description The date and time the CFO last updated their forecast.
                 * @example 2023-05-26T10:06:00Z
                 */
                lastUpdatedDate?: string;
            };
            /**
             * Format: decimal-precision-2
             * @description Cost at completion variance (`cfoForecast.costAtCompletion` less `estimatedCostAtCompletion`).
             * @example 500.00
             */
            costAtCompletionVariance?: string;
            /**
             * Format: decimal-precision-2
             * @description The sum of the price for all project contract lines, including any change request entries linked to the project contract line through a change order.
             *
             *     A project contract line entry is included in the calculation if it meets the following conditions:
             *
             *     - The workflow type is original or revision, or approved change (change request entry).
             *     - The price effective date is earlier than or on the end date of the WIP schedule period.
             * @example 10000.00
             */
            totalContractValue?: string;
            /**
             * Format: decimal-precision-2
             * @description Contract amount variance (`cfoForecast.contractValue` less `totalContractValue`).
             * @example 1000.00
             */
            contractVarianceAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Job-to-date billings amount comes from journal postings to the revenue accounts specified in the [WIP setup](construction-forecasting.wip-setup) object.
             *
             *     Journal entries are included in this amount if they meet the following conditions:
             *
             *     - The account is specified as a revenue account in the list of accounts in the WIP setup object.
             *
             *     - The project dimension assigned to the journal entry matches the WIP project or one of its child projects.
             *
             *     - The entry date for the journal entry falls before the WIP schedule period end date.
             *
             *     A credit amount posted to the account is added to the job-to-date billed amount. A debit is subtracted.
             * @example 5000.00
             */
            jobToDateBillings?: string;
            /**
             * Format: decimal-precision-2
             * @description Earned-to-date amount (`cfoForecast.contractValue` multiplied by `cfoForecast.percentComplete`).
             *
             *     This amount reflects the earnings from the beginning of the project; it is not limited to the current year.
             * @example 5000.00
             */
            earnedToDateAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Remaining backlog amount represents the work left for the project as a currency amount (`cfoForecast.contractValue` less `earnedToDateAmount`).
             * @example 3000.00
             */
            remainingBacklogAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description The overbilling or underbilling amount is the difference between YTD billed and YTD earned amounts.
             * @example -1000.00
             */
            overUnderBillingAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Current earned profit to-date (`earnedToDateAmount` less `jobToDateCosts`).
             * @example 5000.00
             */
            earnedProfitToDateAmount?: string;
            /**
             * Format: percent-precision-2
             * @description Gross profit percent of contract (`cfoForecast.grossProfitAtCompletion` divided by `cfoForecast.contractValue`).
             * @example 20
             */
            grossProfitPercentOfContract?: string;
            /**
             * Format: percent-precision-2
             * @description Gross profit percent of cost (`cfoForecast.grossProfitAtCompletion` divided by `cfoForecast.costsAtCompletion`).
             * @example 30
             */
            grossProfitPercentOfCost?: string;
            /**
             * Format: decimal-precision-2
             * @description Total gross profit estimated at completion (`totalContractValue` less `estimatedCostAtCompletion`).
             * @example 3000.00
             */
            totalGrossProfitEstimatedAtCompletion?: string;
            /**
             * Format: decimal-precision-2
             * @description CFO forecast gross profit at completion (`cfoForecast.contractValue` less `cfoForecast.costsAtCompletion`).
             * @example 3000.00
             */
            cfoForecastGrossProfitAtCompletion?: string;
            /**
             * Format: decimal-precision-2
             * @description Gross profit variance (`cfoForecast.grossProfitAtCompletion` less `totalGrossProfitEstimatedAtCompletion`).
             * @example 1000.00
             */
            grossProfitVarianceAmount?: string;
            /**
             * Format: percent-precision-2
             * @description CFO forecast gross profit margin percent (`cfoForecast.grossProfitAtCompletion` divided by `cfoForecast.contractValue`).
             * @example 30
             */
            cfoForecastGrossProfitMarginPercent?: string;
            /**
             * Format: decimal-precision-2
             * @deprecated
             * @description This field has been deprecated, use `earnedProfitToDateAmount` instead.
             */
            priorYearsProfit?: string;
            /**
             * Format: decimal-precision-2
             * @description Earned to-date amount as of end of prior year (`earnedToDateAmount` less `endOfPriorYearEarnedProfit`).
             * @example 15000.00
             */
            endOfPriorYearEarnedToDateAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Earned profit as of end of prior year. This value comes from the end-of-year WIP schedule from the prior year if one exists. Otherwise, the amount is zero.
             * @example 15000.00
             */
            endOfPriorYearEarnedProfit?: string;
            /**
             * Format: decimal-precision-2
             * @description The amount of the project that remains to be earned (`cfoForecast.grossProfitAtCompletion` less `earnedProfitToDate`).
             * @example 15000.00
             */
            remainingProfit?: string;
            /**
             * Format: decimal-precision-2
             * @description Year-to-date costs.
             * @example 15000.00
             */
            yearToDateCostAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Year-to-date billings.
             * @example 15000.00
             */
            yearToDateBillingAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Year-to-date earned revenue.
             * @example 15000.00
             */
            yearToDateEarnedRevenueAmount?: string;
            /**
             * Format: decimal-precision-2
             * @deprecated
             * @description This field has been deprecated. Use the `jobToDateOverbillingAmount` field instead.
             */
            jobToDateOverBillingAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Job-to-date overbilling.
             * @example 15000.00
             */
            jobToDateOverbillingAmount?: string;
            /**
             * Format: decimal-precision-2
             * @deprecated
             * @description This field has been deprecated. Use the 'jobToDateUnderbillingAmount` field instead.
             */
            jobToDateUnderBillingAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Job-to-date underbilling.
             * @example 15000.00
             */
            jobToDateUnderbillingAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Year-to-date earned profit.
             * @example 15000.00
             */
            yearToDateEarnedProfitAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Current period billings.
             * @example 15000.00
             */
            currentPeriodBillingAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Current period costs.
             * @example 15000.00
             */
            currentPeriodCostAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Current period earned profit.
             * @example 15000.00
             */
            currentPeriodEarnedProfitAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Current period earned revenue.
             * @example 15000.00
             */
            currentPeriodEarnedRevenueAmount?: string;
            /**
             * @description Notes or comments about the WIP project.
             * @example no comments
             */
            notes?: string;
            /**
             * @description This value is set to true when the `wipCostBreakdownLevel` property in the `construction-forecasting.wip-period` object is set to `costCode` or `costType` but some GL entries are missing `costCode` on calculating `JobToDateCosts`.
             * @default false
             * @example false
             */
            readonly hasAnomaly?: boolean;
            /**
             * @description This value is set to true to ensure `cfoForecast.cfoForecastCostAtCompletion` matches with `jobToDateCosts` to keep the job at 100% cost complete.  This can be combined with `isBillingsComplete` for a job that has all revenue recognized (is completed.)
             * @default false
             * @example false
             */
            isCostsComplete?: boolean;
            /**
             * @description This value is set to true to ensure `cfoForecast.cfoForecastContractValue` matches with `jobToDateBillings` to keep the job at 100% billings complete.
             * @default false
             * @example false
             */
            isBillingsComplete?: boolean;
            /** @description WIP forecast details for the WIP project */
            forecastDetails?: components["schemas"]["objects.construction-forecasting.wip-forecast-detail"][];
            /**
             * @description URL endpoint for the WIP project
             * @example /objects/construction-forecasting/wip-project/1
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
            /** @description The project this WIP project is based on. */
            project?: {
                /**
                 * @description Key for the project.
                 * @example 16
                 */
                key?: string;
                /**
                 * @description Identifier for the project.
                 * @example SMIT
                 */
                id?: string;
                /**
                 * @description Name for the project.
                 * @example Staff Meeting - Interworking Technologies
                 */
                readonly name?: string;
                /**
                 * @description Description for the project.
                 * @example Staff Meeting
                 */
                readonly description?: string;
                /**
                 * @description Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
                 * @default active
                 * @example active
                 * @enum {string}
                 */
                readonly status?: "active" | "inactive";
                /**
                 * Format: date
                 * @description Project starting date.
                 * @example 2023-05-01
                 */
                readonly startDate?: string;
                /**
                 * Format: date
                 * @description Project ending date.
                 * @example 2024-05-01
                 */
                readonly endDate?: string;
                /**
                 * @description Specifies the currency used for the project.
                 * @example USD
                 */
                projectCurrency?: string | null;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/10
                 */
                readonly href?: string;
            };
            /** @description The customer associated with the project. */
            customer?: {
                /**
                 * @description Key for the customer.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Identifier for the customer.
                 * @example ITEC
                 */
                id?: string;
                /**
                 * @description Name for the customer.
                 * @example Interworking Technologies
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/10
                 */
                readonly href?: string;
            };
            /** @description Project type, used to categorize and report on projects. */
            readonly projectType?: {
                /**
                 * @description System-assigned key for the project type.
                 * @example 3
                 */
                key?: string | null;
                /**
                 * @description Name or ID of the project type.
                 * @example Internal
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the project type.
                 * @example /objects/projects/project-type/1
                 */
                readonly href?: string;
            };
            /** @description Project status. */
            readonly projectStatus?: {
                /**
                 * @description Key for the project status.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the project status.
                 * @example In Progress
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the project status.
                 * @example /objects/projects/project-status/1
                 */
                readonly href?: string;
            };
            /** @description The location associated with the project. */
            readonly location?: {
                /**
                 * @description Key for the location.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Identifier for the location.
                 * @example UNITEDSTATES
                 */
                id?: string;
                /**
                 * @description Name for the location.
                 * @example United States
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/10
                 */
                readonly href?: string;
            };
            /** @description The class associated with the project. */
            readonly class?: {
                /**
                 * @description Key for the class.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Identifier for the class.
                 * @example Project Class
                 */
                id?: string;
                /**
                 * @description Name for the class.
                 * @example Project Class
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the class.
                 * @example /objects/company-config/class/10
                 */
                readonly href?: string;
            };
            /** @description The department associated with the project. */
            readonly department?: {
                /**
                 * @description Key for the department.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Identifier for the department.
                 * @example OPERATIONS
                 */
                id?: string;
                /**
                 * @description Name for the department.
                 * @example Construction Operations
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/10
                 */
                readonly href?: string;
            };
            /** @description The manager associated with the project. */
            readonly manager?: {
                /**
                 * @description Key for the manager.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Identifier for the project manager.
                 * @example EMP00036
                 */
                id?: string;
                /**
                 * @description Name for the project manager.
                 * @example Johnson, Robert F
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the project manager.
                 * @example /objects/company-config/employee/10
                 */
                readonly href?: string;
            };
            /** @description The entity from which this WIP project's parent WIP schedule was created. */
            createdFromEntity?: {
                /**
                 * @description System-assigned key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example USAE
                 */
                id?: string;
                /**
                 * @description Name for the entity.
                 * @example United States of America - Elimination
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/1
                 */
                readonly href?: string;
            };
            /** @description The entity assigned to the WIP project's parent WIP period. */
            assignedEntity?: {
                /**
                 * @description System-assigned key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example USAE
                 */
                id?: string;
                /**
                 * @description Name for the entity.
                 * @example United States of America - Elimination
                 */
                readonly name?: string;
                /**
                 * @description Endpoint URL for the entity.
                 * @example /objects/company-config/entity/1
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description WIP schedule end date
             * @example 2023-05-31
             */
            periodEndDate?: string | null;
            /**
             * @description If `true`, project manager forecasts are based on primary forecast estimates.
             * @default false
             * @example true
             */
            basedOnPrimaryForecast?: boolean;
            /** @description Base transaction currency for the entity, for multi-currency companies. */
            baseCurrency?: {
                /**
                 * @description URL endpoint for the transaction currency.
                 * @example /objects/company-config/txn-currency/1
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the transaction currency.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique currency code. For ISO currency type, the value must be one of ('USD','AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BRL','BSD','BTN','BWP','BYN','BYR','BZD','CAD','CDF','CHF','CLP','CNY','COP','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','**P','GBP','GEL','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','INR','IQD','IRR','ISK','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','STD','SVC','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','UYU','UZS','VEF','VES','VND','VUV','WST','XAF','XCD','XOF','XPF','YER','ZAR','ZMW','ZWL').
                 * @example USD
                 */
                id?: string;
            };
            projectManagerUpdateSource?: components["schemas"]["update-source"];
            /** @description The WIP period this WIP project is associated with. */
            wipPeriod?: {
                /**
                 * @description The key for the WIP period.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description Unique identifier for the WIP period.
                 * @example 123
                 */
                id?: string;
                /**
                 * @description The name for the WIP period, sourced from GL reporting period name.
                 * @example Month end May 2023
                 */
                readonly periodName?: string;
                /**
                 * @description The level at which to allow cost and forecast breakdowns.
                 *     - When `wipCostBreakdownLevel` is 'wipScheduleProject' then there are no breakdowns (records) in `wip-forecast-detail`.
                 *     - When `wipCostBreakdownLevel` is 'project' then the breakdowns in `wip-forecast-detail` consist only of projects.
                 *     - When `wipCostBreakdownLevel` is 'costCode' then the breakdowns in `wip-forecast-detail` consist of projects and tasks.
                 *     - When `wipCostBreakdownLevel` is 'costCodeAndCostType' then the breakdowns in `wip-forecast-detail` consist of projects, tasks, and cost types.
                 * @default wipScheduleProject
                 * @example wipScheduleProject
                 * @enum {string}
                 */
                readonly wipCostBreakdownLevel?: "wipScheduleProject" | "project" | "costCode" | "costCodeAndCostType";
                /**
                 * @description URL endpoint for the WIP period.
                 * @example /objects/construction-forecasting/wip-period/123
                 */
                readonly href?: string;
            };
        };
        "construction-forecasting-wip-project-required-properties": Record<string, never>;
        /** @description Provides details such as cost, estimate, and project manager forecast for a WIP project. */
        "objects.construction-forecasting.wip-forecast-detail": {
            /**
             * @description System-assigned key for the WIP forecast detail.
             * @example 1
             */
            key?: string;
            /**
             * @description Unique identifier for the WIP forecast detail. This value is the same as the `key` for this object.
             * @example 1
             */
            id?: string;
            /** @description WIP period associated with the forecast detail. */
            wipPeriod?: {
                /**
                 * @description System-assigned key for the WIP period.
                 * @example 16
                 */
                key?: string;
                /**
                 * @description Unique identifier for the WIP period.
                 * @example 16
                 */
                id?: string;
                /**
                 * @description The name for the reporting period on which the WIP schedule is based.
                 * @example Month end May 2023
                 */
                readonly periodName?: string;
                /**
                 * @description URL endpoint for the WIP period.
                 * @example /objects/construction-forecasting/wip-period/16
                 */
                readonly href?: string;
            };
            /** @description The entity assigned to the WIP schedule. */
            assignedEntity?: {
                /**
                 * @description System-assigned key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example USAE
                 */
                id?: string;
                /**
                 * @description Name for the entity.
                 * @example United States of America
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/1
                 */
                readonly href?: string;
            };
            /** @description The WIP project associated with the WIP forecast detail. */
            wipProject?: {
                /**
                 * @description System-assigned key for the WIP project.
                 * @example 322
                 */
                key?: string;
                /**
                 * @description Unique identifier for the WIP project.
                 * @example 322
                 */
                id?: string;
                /**
                 * @description URL endpoint for the WIP project.
                 * @example /objects/construction-forecasting/wip-project/322
                 */
                readonly href?: string;
            };
            /** @description The project associated with the WIP forecast detail. */
            project?: {
                /**
                 * @description System-assigned key for the project.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Unique identifier for the project.
                 * @example 23-010
                 */
                id?: string;
                /**
                 * @description Name for the project.
                 * @example Northside HS
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/10
                 */
                readonly href?: string;
            };
            /**
             * @description Project Composite
             * @example 23-010--Northside HS
             */
            readonly projectComposite?: string;
            /** @description Cost type associated with the WIP forecast detail. */
            costType?: {
                /**
                 * @description System-assigned key for the cost type.
                 * @example 586
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the cost type.
                 * @example SUB
                 */
                id?: string | null;
                /**
                 * @description Name for the cost type.
                 * @example Subcontract
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the cost type.
                 * @example /objects/construction/cost-type/586
                 */
                readonly href?: string;
            };
            /**
             * @description Cost Type Composite
             * @example SUB--Subcontract
             */
            readonly costTypeComposite?: string | null;
            /** @description The task associated with the WIP forecast detail. */
            task?: {
                /**
                 * @description System-assigned key for the task.
                 * @example 150
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the task.
                 * @example 32 16 00
                 */
                id?: string | null;
                /**
                 * @description Name for the task.
                 * @example Curb Gutters Sidewalks and Driveways
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the task.
                 * @example /objects/projects/task/150
                 */
                readonly href?: string;
            };
            /**
             * @description Task Composite
             * @example 32 16 00--Curb Gutters Sidewalks and Driveways
             */
            readonly taskComposite?: string | null;
            /** @description Root (top level) task associated with the WIP forecast detail. */
            rootTask?: {
                /**
                 * @description System-assigned key for the root task.
                 * @example 149
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the root task.
                 * @example 32 00 00
                 */
                id?: string | null;
                /**
                 * @description Name for the root task.
                 * @example EXTERIOR IMPROVEMENTS
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the root task.
                 * @example /objects/projects/task/149
                 */
                readonly href?: string;
            };
            /**
             * @description Root Task Composite
             * @example 32 00 00--EXTERIOR IMPROVEMENTS
             */
            readonly rootTaskComposite?: string | null;
            /** @description WIP cost and estimate detail associated with the WIP forecast detail. */
            readonly costAndEstimateDetail?: {
                /**
                 * @description System-assigned key for the detail.
                 * @example 4303
                 */
                readonly key?: string | null;
                /**
                 * @description WIP Actual Detail ID
                 * @example 4303
                 */
                readonly id?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description The project's actual costs to-date. This amount comes from journal postings to the selected cost accounts.
                 * @example 1250000.00
                 */
                readonly jobToDateCosts?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description The project's estimated costs to-date based on estimate entries in the project's primary estimate.
                 * @example 1000000.00
                 */
                readonly estimatedCostToDateAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Estimated cost at completion of the project based on estimate entries in the project's primary estimate. Estimate entries are included if they have a workflow type of original, revision, or approved change.
                 * @example 1500000.00
                 */
                readonly estimatedCostAtCompletion?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Estimated pending amount based on pending estimate entries in the project's primary estimate.
                 * @example 1010000.00
                 */
                readonly pendingEstimatesAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Estimate of the costs remaining for the project. The amount is calculated as `estimatedCostAtCompletion` less `jobToDateCosts`.
                 * @example 500000.00
                 */
                readonly estimatedCostToComplete?: string | null;
                /**
                 * Format: percent-precision-2
                 * @description Estimated percent complete for the project, calculated as project's `jobToDateCosts` divided by `estimatedCostAtCompletion`.
                 * @example 66.67
                 */
                readonly estimatedPercentComplete?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Total revised estimate vs project manager forecast cost at completion variance.
                 * @example 500.00
                 */
                readonly estimateVsForecastVariance?: string | null;
            };
            /** @description Project manager's forecast of project costs, profits, and completion percentage. */
            projectManagerForecast?: {
                /**
                 * @description System-assigned key for the WIP project manager forecast.
                 * @example 1
                 */
                readonly key?: string | null;
                /**
                 * @description WIP Project Manager Forecast ID
                 * @example 1
                 */
                readonly id?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Project manager forecast cost to complete.
                 * @example 3000.00
                 */
                costToComplete?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Project manager forecast cost at completion.
                 * @example 9000.00
                 */
                costAtCompletion?: string | null;
                /**
                 * Format: percent-precision-2
                 * @description Project manager forecast percent complete
                 * @example 90.00
                 */
                percentComplete?: string | null;
                /**
                 * @description Notes or comments about the project manager forecast.
                 * @example Review weekly
                 */
                notes?: string | null;
                /**
                 * Format: date-time
                 * @deprecated
                 * @description The date and time the PM forecast was last updated.
                 * @example 2023-05-26T10:06:00Z
                 */
                pmUserUpdatedDate?: string | null;
                /**
                 * Format: date-time
                 * @description The date and time the PM forecast was last updated according to the client.
                 * @example 2023-05-26T10:06:00Z
                 */
                updatedDateTime?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Calculated prior period less current cost to complete variance.
                 * @example 500.00
                 */
                readonly costToCompleteVariance?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Calculated prior period less current cost at completion variance.
                 * @example 500.00
                 */
                readonly costAtCompletionVariance?: string | null;
                /**
                 * @description URL endpoint for the WIP project manager forecast.
                 * @example /objects/construction-forecasting/wip-project-manager-forecast/1
                 */
                readonly href?: string;
            };
            /** @description Prior period project manager's forecast of project costs, profits, and completion percentage. */
            readonly priorPeriodProjectManagerForecast?: {
                /**
                 * Format: decimal-precision-2
                 * @description Prior period project manager forecast cost to complete.
                 * @example 3500.00
                 */
                readonly costToComplete?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Prior period project manager forecast cost at completion.
                 * @example 9400.00
                 */
                readonly costAtCompletion?: string | null;
                /**
                 * Format: percent-precision-2
                 * @description Prior period project manager forecast percent complete.
                 * @example 62.77
                 */
                readonly percentComplete?: string | null;
            };
            /**
             * @description The number of anomalies detected for this WIP forecast detail.
             * @example 2
             */
            readonly anomalyCount?: number;
            /**
             * @description URL endpoint for the WIP forecast detail.
             * @example /objects/construction-forecasting/wip-forecast-detail/1
             */
            readonly href?: string;
        };
        /** @description Project manager forecasts of project costs, profits, and completion percentage. */
        "objects.construction-forecasting.wip-project-manager-forecast": {
            /**
             * @description System-assigned key for the WIP project manager forecast.
             * @example 1
             */
            key?: string;
            /**
             * @description Unique identifier for the WIP project manager forecast. This value is the same as the `key` for this object.
             * @example 1
             */
            id?: string;
            /**
             * Format: decimal-precision-2
             * @description Project manager forecast cost to complete.
             * @example 3000.00
             */
            costToComplete?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Project manager forecast cost at completion.
             * @example 9000.00
             */
            costAtCompletion?: string | null;
            /**
             * Format: percent-precision-2
             * @description Project manager forecast percent complete, calculated as project manager forecast's `costToComplete` divided by `costAtCompletion`.
             * @example 90.00
             */
            readonly percentComplete?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Variance between the total revised estimate and the forecast cost at completion.
             * @example 200.11
             */
            readonly estimateVsForecastVariance?: string | null;
            /**
             * @description Notes or comments about the WIP project manager forecast.
             * @example Review weekly
             */
            notes?: string;
            /**
             * Format: date-time
             * @deprecated
             * @description The date and time that the project manager last updated their forecast.  Should be provided as UTC time.  If no value is provided, the current date and time will be used.
             * @example 2023-05-31T00:00:00Z
             */
            userUpdatedDateTime?: string;
            /**
             * Format: date-time
             * @description The date and time that the project manager last updated their forecast.  Should be provided as UTC time.  If no value is provided, the current date and time will be used.
             * @example 2023-05-31T00:00:00Z
             */
            updatedDateTime?: string;
            /**
             * Format: date
             * @description WIP schedule period end date.
             * @example 2023-05-31
             */
            periodEndDate?: string | null;
            /** @description The project the WIP project manager forecast is based on. */
            project?: {
                /**
                 * @description System-assigned key for the project.
                 * @example 16
                 */
                key?: string;
                /**
                 * @description Unique identifier for the project.
                 * @example SMIT
                 */
                id?: string;
                /**
                 * @description Project name.
                 * @example Staff Meeting - Interworking Technologies
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/10
                 */
                readonly href?: string;
            };
            /** @description Cost type associated with the WIP project manager forecast. */
            costType?: {
                /**
                 * @description Unique identifier for the cost type.
                 * @example OTH
                 */
                id?: string;
                /**
                 * @description System-assigned key for the cost type.
                 * @example 97
                 */
                key?: string;
                /**
                 * @description Name for the cost type.
                 * @example Other DIM-BTI 0022
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the cost type.
                 * @example /objects/construction/cost-type/97
                 */
                readonly href?: string;
            } | null;
            /** @description The task associated with the WIP project manager forecast. */
            task?: {
                /**
                 * @description Unique identifier for the task.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description System-assigned key for the task.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Name for the task.
                 * @example Project Task
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the task.
                 * @example /objects/projects/task/1
                 */
                readonly href?: string;
            } | null;
            /** @description WIP schedule period associated with the WIP project manager forecast. */
            wipPeriod?: {
                /**
                 * @description System-assigned key for the WIP period.
                 * @example 16
                 */
                key?: string;
                /**
                 * @description Unique identifier for the WIP period.
                 * @example 16
                 */
                id?: string;
                /**
                 * @description URL endpoint for the WIP period.
                 * @example /objects/construction-forecasting/wip-period/16
                 */
                readonly href?: string;
            };
            /** @description The entity assigned to the WIP schedule period the WIP project manager forecast is based on. */
            assignedEntity?: {
                /**
                 * @description System-assigned key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example USAE
                 */
                id?: string;
                /**
                 * @description Name for the entity.
                 * @example United States of America - Elimination
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/1
                 */
                readonly href?: string;
            };
            projectManagerUpdateSource?: components["schemas"]["update-source"];
            /**
             * @description Number of anomalies detected in the WIP project manager forecast.
             * @example 2
             */
            readonly anomalyCount?: number;
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description URL endpoint for the WIP project manager forecast.
             * @example /objects/construction-forecasting/wip-project-manager-forecast/1
             */
            readonly href?: string;
        };
        "construction-forecasting-wip-project-manager-forecastRequiredProperties": Record<string, never>;
        /** @description This is a rolled-up project that can be included in WIP schedules.  Only `WipProjectSettings` can be updated in this object.  Other fields are from the `Project` object and are read-only. */
        "objects.construction-forecasting.wip-target-project": {
            /**
             * @description System-assigned unique key for the project.
             * @example 83
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the project.
             * @example P-0045
             */
            readonly id?: string;
            /**
             * @description Name for the project.
             * @example Implementation Project
             */
            readonly name?: string;
            /**
             * @description Provides a brief description for the project.
             * @example Software Implementation Project
             */
            readonly description?: string | null;
            /**
             * @description Specifies the currency used for the project.
             * @example USD
             */
            readonly projectCurrency?: string | null;
            /**
             * @description Specifies the project category, used mainly for reporting and filtering purposes. You can use project categories to group and categorize projects.
             * @example contract
             * @enum {string}
             */
            readonly category?: "contract" | "capitalized" | "internalNonBillable" | "internalBillable";
            /** @description References the current project status, used to track the progress of projects through different states. You can also use the project status to restrict transactions in the project. */
            readonly projectStatus?: {
                /**
                 * @description System-assigned key for the project status.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the project status.
                 * @example In Progress
                 */
                id?: string | null;
                /**
                 * @description Indicates whether to generate project invoices for the project in the specified status. Set to `true` to prevent invoice generation.
                 * @example false
                 */
                readonly disableGenerateInvoice?: boolean | null;
                /**
                 * @description Indicates whether to create Accounts Payable (AP) or Purchase Order (PO) entries for the project in the specified status. Set to `true` to prevent AP/PO entries.
                 * @example false
                 */
                readonly disablePurchasingAPEntry?: boolean | null;
                /**
                 * @description Indicates whether to create expense entries for the project in the specified status. Set to `true` to prevent expense entries.
                 * @example false
                 */
                readonly disableExpenseEntry?: boolean | null;
                /**
                 * @description Indicates whether to create timesheet entries for the project in the specified status. Set to `true` to prevent timesheet entries.
                 * @example false
                 */
                readonly disableTimesheetEntry?: boolean | null;
                /**
                 * @description URL endpoint for the project status.
                 * @example /objects/projects/project-status/1
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Specifies the scheduled start date for the project.
             * @example 2023-01-23
             */
            readonly startDate?: string | null;
            /**
             * Format: date
             * @description Specifies the scheduled end date for the project.
             * @example 2023-04-01
             */
            readonly endDate?: string | null;
            /** @description Specifies the budget projections for the project. */
            readonly budget?: {
                /**
                 * Format: decimal-precision-2
                 * @description Budgeted billing amount for the project.
                 * @example 10000.00
                 */
                billingAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Budgeted duration for the project, in hours.
                 * @example 250.00
                 */
                budgetedDuration?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Budgeted cost for the project.
                 * @example 10000.00
                 */
                budgetedCost?: string | null;
            };
            /** @description References the General Ledger (GL) budget used by revenue recognition to calculate the projected cost amount for the project. */
            readonly glBudget?: {
                /**
                 * @description System-assigned key for the budget.
                 * @example 5
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the budget.
                 * @example KPI Budgets
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the budget.
                 * @example /objects/general-ledger/budget/5
                 */
                readonly href?: string | null;
            };
            /**
             * Format: decimal-precision-2
             * @description Specifies the contracted amount for the project for reporting purposes.
             * @example 15000.00
             */
            readonly contractAmount?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Specifies the actual amount for the project for reporting purposes.
             * @example 15000.00
             */
            readonly actualAmount?: string | null;
            /** @description Specifies the calculated progress for the project. */
            readonly progress?: {
                /**
                 * Format: decimal-precision-2
                 * @description Estimated duration for the project, in hours.
                 * @example 200.00
                 */
                readonly estimatedDuration?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Actual duration for the project, in hours.
                 * @example 183.00
                 */
                readonly actualDuration?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Approved duration for the project, in hours.
                 * @example 175.00
                 */
                readonly approvedDuration?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Remaining duration for the project in hours, calculated as the difference between estimated and actual duration.
                 * @example 8.00
                 */
                readonly remainingDuration?: string | null;
                /**
                 * Format: percent-precision-2
                 * @description Calculated percentage of project completion, based on the ratio of actual duration to estimated duration for project tasks.
                 * @example 35.00
                 */
                readonly percentComplete?: string | null;
                /**
                 * Format: percent-precision-2
                 * @description Observed percentage of project completion as of a specific date.
                 * @example 50.00
                 */
                readonly observedPercentComplete?: string | null;
            };
            /**
             * @description Specifies how the project is invoiced.
             * @example timeAndMaterial
             * @enum {string}
             */
            readonly billingType?: "timeAndMaterial" | "fixedFee" | "fixedFeeAndExpenses";
            /**
             * @description Sales order number for the project.
             * @example SO-5478
             */
            readonly salesOrderNumber?: string | null;
            /**
             * @description Purchase order number for the project.
             * @example PO-7829
             */
            readonly purchaseOrderNumber?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Project purchase order amount.
             * @example 4500.00
             */
            readonly purchaseOrderAmount?: string | null;
            /**
             * @description Purchase quote number for the project.
             * @example 1453
             */
            readonly purchaseQuoteNumber?: string | null;
            /**
             * @description Salesforce key for the project.
             * @example 1
             */
            readonly salesforceKey?: string | null;
            /**
             * @description Specifies a document number that can be used for custom project reporting.
             * @example 1453
             */
            readonly documentNumber?: string | null;
            /** @description For a child project, references the immediate parent project in the project hierarchy. */
            readonly parent?: {
                /**
                 * @description System-assigned key for the parent project.
                 * @example 10
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the parent project.
                 * @example P-0040
                 */
                id?: string | null;
                /**
                 * @description Name for the parent project.
                 * @example NET-XML30-2
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the parent project.
                 * @example /objects/projects/project/1
                 */
                readonly href?: string | null;
            };
            /**
             * @description Indicates whether to include project transactions in invoices for the parent project.
             * @default false
             * @example true
             */
            readonly invoiceWithParent?: boolean | null;
            /** @description References the root project at the highest level in the project hierarchy. */
            readonly rootProject?: {
                /**
                 * @description System-assigned key for the root project.
                 * @example 12
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the root project.
                 * @example 12
                 */
                readonly id?: string | null;
                /**
                 * @description Name for the root project.
                 * @example PRJ-RT-0001
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the root project.
                 * @example /objects/projects/project/12
                 */
                readonly href?: string;
            };
            /**
             * @description References the project included in the work in progress (WIP) schedule. This project consolidates values from multiple projects into a single WIP reporting project.
             *
             *     For more information, read [include projects in work in progress (WIP) schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=include_projects_in_wip) in the Sage Intacct Help Center.
             */
            readonly wipScheduleProject?: {
                /**
                 * @description System-assigned key for the WIP reporting project.
                 * @example 12
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the WIP reporting project.
                 * @example 12
                 */
                id?: string | null;
                /**
                 * @description Name for the WIP reporting project.
                 * @example PRJ-RT-0001
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the WIP reporting project.
                 * @example /objects/projects/project/12
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates whether to exclude the project from work in progress schedules.
             * @default true
             * @example true
             */
            readonly excludeFromWIPSchedule?: boolean;
            /** @description References the customer associated with the project. */
            readonly customer?: {
                /**
                 * @description System-assigned key for the customer.
                 * @example 13
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the customer.
                 * @example 113
                 */
                id?: string | null;
                /**
                 * @description Name for the customer.
                 * @example Software company
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/1
                 */
                readonly href?: string;
            };
            /** @description References the sales contact for the project. */
            readonly salesContact?: {
                /**
                 * @description System-assigned key for the sales contact.
                 * @example 10
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the sales contact.
                 * @example 100
                 */
                id?: string | null;
                /**
                 * @description Name for the sales contact.
                 * @example Carlos Jones
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the sales contact.
                 * @example /objects/company-config/employee/1
                 */
                readonly href?: string;
            };
            /** @description References the project type, used to categorize and report on projects. Project types let you group projects into categories for reporting. */
            readonly projectType?: {
                /**
                 * @description System-assigned key for the project type.
                 * @example 3
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the project type.
                 * @example Internal
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the project type.
                 * @example /objects/projects/project-type/1
                 */
                readonly href?: string;
            };
            /** @description References the project manager for the project. Project managers usually approve timesheets and expense reports, they can also run and view project reports. */
            readonly manager?: {
                /**
                 * @description System-assigned key for the project manager.
                 * @example 10
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the project manager.
                 * @example E10
                 */
                id?: string | null;
                /**
                 * @description Name for the project manager.
                 * @example Carl Smith
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the project manager.
                 * @example /objects/company-config/employee/1
                 */
                readonly href?: string;
            };
            /** @description The department associated with the project. The project department overrides any department associated with an employee on a timesheet. If a project department is not set, the employee department is used. */
            readonly department?: {
                /**
                 * @description System-assigned key for the department.
                 * @example 10
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the department.
                 * @example 20
                 */
                id?: string | null;
                /**
                 * @description Name for the department.
                 * @example Sales
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/1
                 */
                readonly href?: string;
            };
            /**
             * @description References the location associated with this project. The project location overrides any location associated with an employee on a timesheet. If a project location is not set, the employee location is used.
             *
             *     If you subscribe to Construction and you use WIP management, changing a project's location can cause the project to be handled incorrectly in WIP schedules. After changing a project's location, [check WIP project settings to ensure that the project is handled correctly in WIP schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=include_projects_in_wip).
             */
            readonly location?: {
                /**
                 * @description System-assigned key for the project location.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the project location.
                 * @example DIA
                 */
                id?: string | null;
                /**
                 * @description Name for the project location.
                 * @example US
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the project location.
                 * @example /objects/company-config/location/1
                 */
                readonly href?: string;
            };
            /** @description References the Sage Intacct user assigned as a customer representative with the ability to approve timesheets for the project. */
            readonly customerUser?: {
                /**
                 * @description System-assigned key for the customer user.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the customer user.
                 * @example Admin
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the customer user.
                 * @example /objects/company-config/user/1
                 */
                readonly href?: string;
            };
            /** @description References the class associated with the project. A class adds a value to the dimension that you can use to tag transactions for reporting. */
            readonly class?: {
                /**
                 * @description System-assigned key for the class.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the class.
                 * @example 10
                 */
                id?: string | null;
                /**
                 * @description Name for the class.
                 * @example Construction
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the class.
                 * @example /objects/company-config/class/1
                 */
                readonly href?: string;
            };
            /**
             * @description User restrictions for entering project time and expenses, overriding default user restrictions for the Projects application:
             *
             *
             *
             *
             *
             *       - `systemDefault` - Use the restrictions set for the Projects application.
             *       - `anyUser` - Allow any user to enter time and expenses for the project.
             *       - `projectUsers` - Allow only users assigned to the project to enter time and expenses.
             *       - `projectTaskUsers` - Allow only users assigned to the project and task to enter time and expenses.
             * @example systemDefault
             * @enum {string}
             */
            readonly userRestrictions?: "systemDefault" | "anyUser" | "projectUsers" | "projectTaskUsers";
            /**
             * @description Indicates whether to bill employee expenses for the project.
             * @default false
             * @example true
             */
            readonly isBillableEmployeeExpense?: boolean;
            /**
             * @description Indicates whether to bill Accounts Payable (AP) and Purchase Order (PO) expenses for the project. Set to `true` to bill AP/PO expenses.
             * @default false
             * @example true
             */
            readonly isBillablePurchasingAPExpense?: boolean;
            /** @description Specifies the methods used to determine project billing rates and pricing. */
            readonly ratesAndPricing?: {
                /**
                 * @description Specifies the method used to determine labor pricing:
                 *
                 *     - `billingRate` - Pricing is based on a predefined billing rate.
                 *     - `costPlusFee` - Pricing is based on actual costs plus a markup percentage.
                 * @default billingRate
                 * @example billingRate
                 * @enum {string}
                 */
                laborPricing?: "billingRate" | "costPlusFee";
                /**
                 * Format: decimal-precision-2
                 * @description Percentage to add to labor costs when `laborPricing` is set to `costPlusFee`.
                 * @example 10.00
                 */
                laborMarkup?: string | null;
                /**
                 * @description Specifies the method used to determine expense pricing.
                 *
                 *     - `billingRate` - Charges are based on the vendor's billing rate.
                 *     - `costPlusFee` - Charges are based on the vendor's standard rate plus a markup percentage, specified in `expenseMarkup`.
                 * @default costPlusFee
                 * @example billingRate
                 * @enum {string}
                 */
                expensePricing?: "billingRate" | "costPlusFee";
                /**
                 * Format: decimal-precision-2
                 * @description Percentage to add to expense costs when `expensePricing` is set to `costPlusFee`.
                 * @example 10.00
                 */
                expenseMarkup?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Default percentage used to calculate pricing for Accounts Payable (AP), and Purchase Order (PO) transactions when generating project invoices.
                 * @example 12.00
                 */
                defaultRate?: string;
                /**
                 * @description Pricing method for Accounts Payable (AP), and Purchase Order (PO) transactions.
                 * @default costPlusFee
                 * @example costPlusFee
                 * @enum {string}
                 */
                readonly purchasingAPPricing?: "costPlusFee";
            };
            /** @description References contact information for the project. */
            readonly contacts?: {
                /** @description References the primary contact for the project, the person or organization responsible for the project. */
                primary?: {
                    /**
                     * @description System-assigned key for the primary contact.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the primary contact.
                     * @example JSmith
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the primary contact.
                     * @example /objects/company-config/contact/1
                     */
                    readonly href?: string;
                };
                /** @description References the bill-to contact associated with the project, the person or organization responsible for paying project invoices. If not set, the customer contact will be used. */
                billTo?: {
                    /**
                     * @description System-assigned key for the bill-to contact.
                     * @example 2
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the bill-to contact.
                     * @example ABrown
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the bill-to contact.
                     * @example /objects/company-config/contact/2
                     */
                    readonly href?: string;
                };
                /** @description References the ship-to contact for the project, the person or organization to whom project invoices are sent. If not set, the customer contact is used for shipping. */
                shipTo?: {
                    /**
                     * @description System-assigned key for the ship-to contact.
                     * @example 2
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the ship-to contact.
                     * @example ABrown
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the ship-to contact.
                     * @example /objects/company-config/contact/2
                     */
                    readonly href?: string;
                };
            };
            /**
             * @description Specifies a custom invoice message that appears on the invoice header when generating invoices for the project.
             * @example Invoice for project
             */
            readonly invoiceMessage?: string | null;
            /**
             * @description Specifies the currency to use when generating invoices for the project.
             * @example USD
             */
            readonly invoiceCurrency?: string | null;
            /**
             * @description Indicates the billing control to prevent or warn of billings that exceed the budgeted billing amount:
             *
             *
             *
             *
             *
             *       - `doNothing` - Take no action if billings exceed the projected billing amount.
             *       - `issueAWarningMessage` - Issue a warning message when billings exceed the budgeted billing amount, but allow the billing to proceed.
             *       - `preventBilling` - If the invoice amount exceeds your projected billing amount, you cannot generate an invoice.
             * @default doNothing
             * @example preventBilling
             * @enum {string}
             */
            readonly billingOverMax?: "doNothing" | "issueAWarningMessage" | "preventBilling";
            /**
             * @description Set to `true` to exclude employee, Accounts Payable (AP), and Purchase Order (PO) expenses from the over-budget calculation.
             * @default false
             * @example false
             */
            readonly excludeExpenses?: boolean | null;
            /** @description References the contract associated with the project. */
            readonly contract?: {
                /**
                 * @description System-assigned key for the contract.
                 * @example 1
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the contract.
                 * @example CON-002
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the contract.
                 * @example /objects/contracts/contract/1
                 */
                readonly href?: string;
            };
            /** @description References documents associated with the project, such as statements of work, specifications, or agreements. */
            readonly attachment?: {
                /**
                 * @description System-assigned key for the attachment.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the attachment.
                 * @example 1
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/1
                 */
                readonly href?: string;
            };
            /** @description Grant funding information for the project. */
            readonly grant?: {
                /**
                 * @description ALN (Assistance Listing Number) found on the Federal award letter, formerly known as CFDA (Catalog of Federal Domestic Assistance). The ALN tracks federal awards and cooperative agreements. Used for reporting and auditing.
                 * @example 10.555
                 */
                aln?: string | null;
                /**
                 * @description Name for the project receiving the grant funding.
                 * @example Undergraduate Programs
                 */
                fundedProjectName?: string | null;
                /**
                 * @description Agency responsible for the grant funding.
                 * @example US government
                 */
                agency?: string | null;
                /**
                 * @description Source of the grant funding.
                 * @example federal
                 * @enum {string}
                 */
                payer?: "federal" | "thirdParty";
                /**
                 * @description Provides an additional identifier for the grant funding.
                 * @example Other
                 */
                otherId?: string | null;
                /**
                 * @description Indicates the type of grant funding.
                 * @example cash
                 * @enum {string}
                 */
                assistanceType?: "cash" | "nonCash";
                /**
                 * @description Specifies the type of restriction on the received grant funding:
                 *
                 *       - `purpose` - Funds are restricted by purpose and mqy be used for a specific program or project, for example on education initiatives.
                 *       - `time` - Funds are restricted by time and may be used in a specific time period, for example within the current fiscal year.
                 *       - `NA` - There are no restrictions on the use of the funds.
                 * @example time
                 * @enum {string}
                 */
                revenueRestriction?: "purpose" | "time" | "NA";
                /**
                 * @description Duration of a time-based restriction (in years).
                 * @example 1
                 */
                restrictionExpiry?: string | null;
                /**
                 * Format: date
                 * @description Date when first restriction expires on time-based restricted funding.
                 * @example 2026-01-23
                 */
                restrictionExpirationDate?: string | null;
                /**
                 * @description Indicates whether the release of a restriction has been scheduled for time-based restrictions.
                 * @default false
                 * @example false
                 */
                isTimeSatisfactionScheduled?: boolean | null;
            };
            /**
             * @description Scope and schedule information for the project, including scope of work, inclusions, exclusions, and terms. (Construction subscription)
             *
             *     For more information, read [add the scope and schedule to a project](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_scope_and_schedule_to_project) in the Sage Intacct Help Center.
             */
            readonly scopeDetails?: {
                /**
                 * @description Scope of the project, for example, the expected scope of work or materials to be delivered. Use 4000 or fewer characters.
                 * @example Subcontractor agrees to provide labor and materials for utility trenching for Five Oaks Storage facilities according to contract.
                 */
                scope?: string | null;
                /**
                 * @description Inclusions for the project, for example, items that are explicitly included in the terms of this project.
                 * @example Includes drive through building and landscaping materials.
                 */
                inclusions?: string | null;
                /**
                 * @description Exclusions for the project, for example, items that are explicitly excluded in the terms of this project.
                 * @example Excludes additional purchases of landscaping materials.
                 */
                exclusions?: string | null;
                /**
                 * @description Terms of the project, which may include additional terms or performance obligations.
                 * @example Follow all safety rules and security procedure that are in force and applicable during execution of work.
                 */
                terms?: string | null;
            };
            /** @description Schedule information for the project. */
            readonly scheduleDetails?: {
                /**
                 * Format: date
                 * @description Date the project is scheduled to start.
                 * @example 2025-10-01
                 */
                scheduledStartDate?: string | null;
                /**
                 * Format: date
                 * @description Date the project is scheduled to be completed.
                 * @example 2025-12-30
                 */
                scheduledCompletionDate?: string | null;
                /**
                 * Format: date
                 * @description Date the project actually started.
                 * @example 2025-10-05
                 */
                actualStartDate?: string | null;
                /**
                 * Format: date
                 * @description Date the project was actually completed.
                 * @example 2025-12-31
                 */
                actualCompletionDate?: string | null;
                /**
                 * Format: date
                 * @description Revised date the project is scheduled to be completed.
                 * @example 2025-12-25
                 */
                revisedCompletionDate?: string | null;
                /**
                 * Format: date
                 * @description Date the work for the project is considered substantially complete.
                 * @example 2025-12-26
                 */
                substantialCompletionDate?: string | null;
                /**
                 * Format: date
                 * @description Date when the project received formal notice to proceed.
                 * @example 2025-11-10
                 */
                noticeToProceedDate?: string | null;
                /**
                 * Format: date
                 * @description Date when a response is expected from an external party for the project.
                 * @example 2025-11-10
                 */
                responseDueDate?: string | null;
                /**
                 * Format: date
                 * @description Date the project was formally executed.
                 * @example 2025-11-15
                 */
                executedOnDate?: string | null;
                /**
                 * @description Provide additional context about any impacts on the current schedule for the project.
                 * @example There are currently no schedule impacts.
                 */
                scheduleImpactNotes?: string | null;
            };
            /** @description WIP project setting for the target project. */
            wipProjectSetting?: {
                /**
                 * @description System-assigned key for the WIP project setting.
                 * @example 10
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the WIP project setting.
                 * @example 10
                 */
                id?: string;
                /**
                 * Format: date
                 * @description Date the project is costs complete in WIP.
                 * @example 2025-01-31
                 */
                costsCompleteDate?: string | null;
                /**
                 * Format: date
                 * @description Specifies the date the project is billings complete in WIP.
                 * @example 2025-04-30
                 */
                billingsCompleteDate?: string | null;
                /**
                 * @description Set to `true` to ensure the estimates in WIP are from the primary forecast.
                 * @default false
                 * @example false
                 */
                usePrimaryForecast?: boolean;
                /**
                 * @description URL endpoint for the WIP project setting.
                 * @example /objects/construction-forecasting/wip-project-setting/10
                 */
                readonly href?: string;
            };
            readonly multiEntityLocation?: {
                /**
                 * @description System-assigned key for the location.
                 * @example 2
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the location.
                 * @example DIA
                 */
                id?: string | null;
                /**
                 * @description Name for the location.
                 * @example Canada
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/2
                 */
                readonly href?: string;
            };
            /**
             * @description Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
             * @default active
             * @example active
             * @enum {string}
             */
            readonly status?: "active" | "inactive";
            /** @description The entity associated with the target project. */
            entity?: {
                /**
                 * @description System-assigned key for the entity.
                 * @example 46
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the entity.
                 * @example CORP
                 */
                id?: string | null;
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
            /**
             * @description URL endpoint for the WIP target project.
             * @example /objects/construction-forecasting/wip-target-project/83
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description WIP project settings for WIP target projects. */
        "objects.construction-forecasting.wip-project-setting": {
            /**
             * @description System-assigned key for the WIP project setting.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the WIP project setting. This value is the same as the `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * Format: date
             * @description Date the project is costs complete in WIP.
             * @example 2025-01-31
             */
            costsCompleteDate?: string | null;
            /**
             * Format: date
             * @description Date the project is billings complete in WIP.
             * @example 2025-04-30
             */
            billingsCompleteDate?: string | null;
            /**
             * @description Set to `true` to indicate the estimates in WIP projects are from the primary forecast.
             * @default false
             * @example false
             */
            usePrimaryForecast?: boolean;
            /** @description References the project included in the work-in-progress (WIP) schedule. This project consolidates values from multiple projects into a single WIP reporting project. */
            wipTargetProject?: {
                /**
                 * @description System-assigned key for the project.
                 * @example 12
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the project.
                 * @example 22-006
                 */
                id?: string | null;
                /**
                 * @description Name for the project.
                 * @example PRJ-RT-0001
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/construction-forecasting/wip-target-project/12
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the WIP project setting.
             * @example /objects/construction-forecasting/wip-project-setting/1
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s2"];
        };
        "construction-forecasting-wip-project-settingRequiredProperties": Record<string, never>;
        "services.construction-forecasting.wip-project-calculate-request": {
            /**
             * @description Requested calculation for a WIP project forecast.
             * @example cfoForecastContractValue
             * @enum {string}
             */
            calculationRequested?: "cfoForecastContractValue" | "cfoForecastCostAtCompletion" | "cfoForecastCostToComplete" | "cfoForecastPercentComplete" | "priorYearsProfit" | "projectManagerForecastContractValue" | "projectManagerForecastCostAtCompletion" | "projectManagerForecastCostToComplete" | "projectManagerForecastPercentComplete";
            /** @description The WIP project the calculation request is based on. */
            wipProject?: components["schemas"]["services.construction-forecasting.wip-project-calculation-project"];
        };
        "services.construction-forecasting.wip-project-calculate-response": {
            wipProject?: components["schemas"]["services.construction-forecasting.wip-project-calculation-project"];
            /** @description A list of warnings and errors encountered during the calculation. */
            warnings?: components["schemas"]["services.construction-forecasting.alert-response"][];
        };
        /** @description Provides information about profitability and revenue recognition for ongoing projects. */
        "objects.construction-forecasting.wip-period": {
            /**
             * @description System-assigned key for the WIP period.
             * @example 123
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the WIP period. This value is the same as the `key` for this object.
             * @example 123
             */
            readonly id?: string;
            /**
             * @description The name for the reporting period on which the WIP schedule is based. This field cannot be modified.
             * @example Month end May 2023
             */
            periodName?: string;
            /**
             * Format: date
             * @description The beginning date of the WIP schedule's reporting period. This field cannot be modified.
             * @example 2023-05-01
             */
            periodStartDate?: string;
            /**
             * Format: date
             * @description The ending date of the WIP schedule's reporting period. This field cannot be modified.
             * @example 2023-05-31
             */
            periodEndDate?: string;
            /**
             * Format: date
             * @description The ending date of the fiscal year this period belongs to.
             * @example 2024-12-31
             */
            readonly fiscalYear?: string;
            /**
             * @description The state is `posted` if the WIP projects are finalized and posted to the general ledger, otherwise, it is `unposted`.  On creating a `wip-period` object, the `state` must be `unposted`.
             *
             *     A period is ready to be posted when:
             *     - The `state` of the WIP period is set to `unposted`
             *     - The WIP period is not a manually imported historical period (`isHistoricalImport` is set to `false`)
             *     - The WIP projects are marked as finalized (`wip-project.isFinalized` is set to `true`)
             *     - All books are open for posting
             * @default unposted
             * @example unposted
             * @enum {string}
             */
            state?: "unposted" | "posted";
            /**
             * @description Notes or comments about the WIP period.
             * @example Review with the team
             */
            notes?: string;
            /**
             * @description Indicates whether this is a manually imported historical WIP period. This field cannot be modified.
             * @default false
             * @example false
             */
            isHistoricalImport?: boolean;
            /**
             * Format: date-time
             * @description The date and time the WIP period was last updated with the latest project data and any changes to the projects included in the WIP schedule.
             * @example 2023-05-26T10:06:00Z
             */
            lastRefreshDateTime?: string;
            /**
             * @description The level at which to allow cost and forecast breakdowns.
             *     - When `wipCostBreakdownLevel` is 'wipScheduleProject' then there are no breakdowns (records) in `wip-forecast-detail`.
             *     - When `wipCostBreakdownLevel` is 'project' then the breakdowns in `wip-forecast-detail` consist only of projects.
             *     - When `wipCostBreakdownLevel` is 'costCode' then the breakdowns in `wip-forecast-detail` consist of projects and tasks.
             *     - When `wipCostBreakdownLevel` is 'costCodeAndCostType' then the breakdowns in `wip-forecast-detail` consist of projects, tasks, and cost types.
             * @default wipScheduleProject
             * @example wipScheduleProject
             * @enum {string}
             */
            readonly wipCostBreakdownLevel?: "wipScheduleProject" | "project" | "costCode" | "costCodeAndCostType";
            /** @description The entity from which this WIP period was created. This field cannot be modified. */
            createdFromEntity?: {
                /**
                 * @description System-assigned key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example USAE
                 */
                id?: string;
                /**
                 * @description Name for the entity.
                 * @example United States of America - Elimination
                 */
                readonly name?: string;
                /**
                 * @description Endpoint URL for the entity.
                 * @example /objects/company-config/entity/1
                 */
                readonly href?: string;
            };
            /** @description The entity assigned to this WIP period. This field cannot be modified. */
            assignedEntity?: {
                /**
                 * @description System-assigned key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example USAE
                 */
                id?: string;
                /**
                 * @description Name for the entity.
                 * @example United States of America - Elimination
                 */
                readonly name?: string;
                /**
                 * @description Endpoint URL for the entity.
                 * @example /objects/company-config/entity/1
                 */
                readonly href?: string;
            };
            /** @description The WIP period at the end of the prior fiscal year, if one exists. */
            readonly endOfPriorYearPeriod?: {
                /**
                 * @description Key for the WIP period.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description Unique identifier for the WIP period.
                 * @example 123
                 */
                readonly id?: string;
                /**
                 * @description The name for the WIP period (from the general ledger reporting period name).
                 * @example Month end May 2023
                 */
                readonly periodName?: string;
                /**
                 * @description Endpoint URL for the WIP period.
                 * @example /objects/construction-forecasting/wip-period/123
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates whether the WIP period is approved for viewing by third parties.
             * @default false
             * @example false
             */
            approveForExternalView?: boolean;
            /** @description Base transaction currency for the entity, for multi-currency companies. */
            baseCurrency?: {
                /**
                 * @description URL endpoint for the transaction currency.
                 * @example /objects/company-config/txn-currency/1
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the transaction currency.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique currency code. For ISO currency type, the value must be one of ('USD','AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BRL','BSD','BTN','BWP','BYN','BYR','BZD','CAD','CDF','CHF','CLP','CNY','COP','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','**P','GBP','GEL','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','INR','IQD','IRR','ISK','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','STD','SVC','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','UYU','UZS','VEF','VES','VND','VUV','WST','XAF','XCD','XOF','XPF','YER','ZAR','ZMW','ZWL').
                 * @example USD
                 */
                id?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            /** @description WIP projects the WIP schedule period is based on. */
            wipProjects?: components["schemas"]["objects.construction-forecasting.wip-project"][];
            /**
             * @description Endpoint URL for the WIP period.
             * @example /objects/construction-forecasting/wip-period/123
             */
            readonly href?: string;
        };
        "wip-period-required-properties": Record<string, never>;
        "services.construction-forecasting.wip-period-request": {
            /**
             * @description System-assigned key for the WIP period.
             * @example 123
             */
            key?: string;
            /**
             * @description Unique identifier for the WIP period. This value is the same as the `key` for this object.
             * @example 123
             */
            readonly id?: string;
            /**
             * @description The name for the reporting period on which the WIP schedule is based.
             * @example Month end May 2023
             */
            periodName?: string;
            /**
             * Format: date
             * @description The beginning date of the WIP schedule's reporting period.
             * @example 2023-05-01
             */
            periodStartDate?: string;
            /**
             * Format: date
             * @description The ending date of the WIP schedule's reporting period.
             * @example 2023-05-31
             */
            periodEndDate?: string;
            /**
             * @description The state is `posted` if the WIP projects are finalized and posted to the general ledger, otherwise, it is `unposted`.
             * @default unposted
             * @example unposted
             * @enum {string}
             */
            state?: "unposted" | "posted";
            /**
             * @description Notes or comments about the WIP period.
             * @example no comments
             */
            notes?: string;
            /**
             * @description Indicates whether this is a manually imported historical WIP period.
             * @default false
             * @example false
             */
            isHistoricalImport?: boolean;
            /**
             * Format: date-time
             * @description The date and time the WIP period was last updated with the latest project data and any changes to the projects included in the WIP schedule.
             * @example 2023-05-26T10:06:00Z
             */
            lastRefreshDateTime?: string;
            /**
             * @description The level at which to allow cost and forecast breakdowns.
             *     - When `wipCostBreakdownLevel` is 'wipScheduleProject' then there are no breakdowns (records) in `wip-forecast-detail`.
             *     - When `wipCostBreakdownLevel` is 'project' then the breakdowns in `wip-forecast-detail` consist only of projects.
             *     - When `wipCostBreakdownLevel` is 'costCode' then the breakdowns in `wip-forecast-detail` consist of projects and tasks.
             *     - When `wipCostBreakdownLevel` is 'costCodeAndCostType' then the breakdowns in `wip-forecast-detail` consist of projects, tasks, and cost types.
             * @default wipScheduleProject
             * @example wipScheduleProject
             * @enum {string}
             */
            wipCostBreakdownLevel?: "wipScheduleProject" | "project" | "costCode" | "costCodeAndCostType" | null;
            /** @description WIP projects the WIP schedule period is based on. */
            wipProjects?: components["schemas"]["objects.construction-forecasting.wip-project"][];
            /** @description The entity assigned to this WIP period. */
            assignedEntity?: {
                /**
                 * @description System-assigned key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example USAE
                 */
                id?: string;
            };
            /**
             * @description Indicates whether the WIP period is approved for viewing by third parties.
             * @default false
             * @example false
             */
            approveForExternalView?: boolean;
        };
        /** @description WIP period preview */
        "services.construction-forecasting.wip-period-can-post-response": {
            /**
             * @description Indicates whether a preview of a WIP period is ready to be posted to the GL or contains any problems that must be resolved.
             * @default true
             * @example true
             */
            readonly canPost?: boolean;
            alerts?: components["schemas"]["services.construction-forecasting.alert-response"][];
        };
        /** @description Create WIP project objects. */
        "services.construction-forecasting.wip-period-generate-request": {
            /**
             * Format: date
             * @description The beginning date of the WIP schedule's reporting period.
             * @example 2023-05-01
             */
            periodStartDate?: string;
            /**
             * Format: date
             * @description The ending date of the WIP schedule's reporting period.
             * @example 2023-05-31
             */
            periodEndDate: string;
            /** @description The entity assigned to this WIP period. */
            assignedEntity: {
                /**
                 * @description Unique key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example USAE
                 */
                id?: string;
            };
        };
        "services.construction-forecasting.wip-period-refresh-response": {
            /**
             * @description System-assigned key for the WIP period.
             * @example 123
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the WIP period. This value is the same as the `key` for this object.
             * @example 123
             */
            readonly id?: string;
            /**
             * @description The name for the reporting period on which the WIP schedule is based.
             * @example Month end May 2023
             */
            periodName?: string;
            /**
             * Format: date
             * @description The beginning date of the WIP schedule's reporting period.
             * @example 2023-05-01
             */
            periodStartDate?: string;
            /**
             * Format: date
             * @description The ending date of the WIP schedule's reporting period.
             * @example 2023-05-31
             */
            periodEndDate?: string;
            /**
             * Format: date
             * @description The ending date of the fiscal year this period belongs to.
             * @example 2024-12-31
             */
            readonly fiscalYear?: string;
            /**
             * @description The state is `posted` if the WIP projects are finalized and posted to the general ledger, otherwise, it is `unposted`.
             * @default unposted
             * @example unposted
             * @enum {string}
             */
            state?: "unposted" | "posted";
            /**
             * @description Notes or comments about the WIP period.
             * @example Review with the team
             */
            notes?: string;
            /**
             * Format: date-time
             * @description The date and time the request was initiated.
             * @example 2023-05-26T10:06:00Z
             */
            readonly lastRefreshDateTime?: string;
            /**
             * @description The level at which cost and forecast breakdowns are performed. When `wipCostBreakdownLevel` is set to:
             *     - 'wipScheduleProject' - there are no breakdowns (records) in `wip-forecast-detail`
             *     - 'project' - the breakdowns in `wip-forecast-detail` consist only of projects
             *     - 'costCode' - the breakdowns in `wip-forecast-detail` consist of projects and tasks
             *     - 'costCodeAndCostType' - the breakdowns in `wip-forecast-detail` consist of projects, tasks, and cost types
             * @default wipScheduleProject
             * @example wipScheduleProject
             * @enum {string}
             */
            wipCostBreakdownLevel?: "wipScheduleProject" | "project" | "costCode" | "costCodeAndCostType";
            /** @description The entity from which this WIP period was created. */
            createdFromEntity?: {
                /**
                 * @description System-assigned key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example USAE
                 */
                id?: string;
                /**
                 * @description Name for the entity.
                 * @example United States of America - Elimination
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/1
                 */
                readonly href?: string;
            };
            /** @description The entity assigned to this WIP period. */
            assignedEntity?: {
                /**
                 * @description System-assigned key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example USAE
                 */
                id?: string;
                /**
                 * @description Name for the entity.
                 * @example United States of America - Elimination
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/1
                 */
                readonly href?: string;
            };
            /** @description The WIP schedule period at the end of the prior fiscal year, if one exists. */
            endOfPriorYearPeriod?: {
                /**
                 * @description Unique key for the WIP period.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description Unique identifier for the WIP period.
                 * @example 123
                 */
                readonly id?: string;
                /**
                 * @description The name for the WIP period (from the general ledger reporting period name).
                 * @example Month end May 2023
                 */
                readonly periodName?: string;
                /**
                 * @description URL endpoint for the WIP period.
                 * @example /objects/construction-forecasting/wip-period/123
                 */
                readonly href?: string;
            };
            /** @description Base transaction currency for the entity, for multi-currency companies. */
            baseCurrency?: {
                /**
                 * @description URL endpoint for the transaction currency.
                 * @example /objects/company-config/txn-currency/1
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the transaction currency.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique currency code. For ISO currency type, the value must be one of ('USD','AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BRL','BSD','BTN','BWP','BYN','BYR','BZD','CAD','CDF','CHF','CLP','CNY','COP','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','**P','GBP','GEL','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','INR','IQD','IRR','ISK','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','STD','SVC','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','UYU','UZS','VEF','VES','VND','VUV','WST','XAF','XCD','XOF','XPF','YER','ZAR','ZMW','ZWL').
                 * @example USD
                 */
                id?: string;
            };
            /** @description List of WIP projects generated by the request. */
            wipProjects?: components["schemas"]["objects.construction-forecasting.wip-project"][];
            /** @description A list of warnings and errors encountered during the calculations. */
            wipProjectWarnings?: components["schemas"]["services.construction-forecasting.alert-response"][];
            /** @description A list of warnings and errors encountered during the calculations for WIP forecast details.  This only applies when the WIP Setup wipCostBreakdownLevel is set for a level other than WIP schedule projects. */
            wipForecastDetailWarnings?: components["schemas"]["services.construction-forecasting.alert-response"][];
        };
        /** @description Prior WIP periods request. */
        "services.construction-forecasting.wip-period-prior-periods-request": {
            /**
             * Format: date
             * @description The date before which all prior WIP periods end.
             * @example 2023-07-31
             */
            priorToPeriodEndDate?: string;
            /**
             * @description The number of prior WIP periods to include.
             * @example 1
             */
            priorPeriodCount: number;
            /** @description The entity assigned to the WIP period. */
            assignedEntity: {
                /**
                 * @description Unique key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example USAE
                 */
                id?: string;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/3
                 */
                readonly href?: string;
            };
        };
        /** @description Prior WIP periods response. */
        "services.construction-forecasting.wip-period-prior-periods-response": {
            /** @description A list of WIP periods matching the specified `priorToPeriodEndDate` and `priorPeriodCount`. */
            wipPeriods?: components["schemas"]["objects.construction-forecasting.wip-period"][];
        };
        "services.construction-forecasting.wip-period-refresh-request": {
            /**
             * @description System-assigned key for the WIP schedule period.  A WIP schedule can be identified by its `key`, and/or `assignedEntity.key` properties.
             * @example 123
             */
            key: string;
            /**
             * Format: date
             * @description The beginning date of the WIP schedule's reporting period.
             * @example 2023-05-01
             */
            periodStartDate?: string;
            /**
             * Format: date
             * @description The ending date of the WIP schedule's reporting period.
             * @example 2023-05-31
             */
            periodEndDate: string;
            /** @description List of WIP projects used to refresh the WIP schedule period. */
            wipProjects?: components["schemas"]["objects.construction-forecasting.wip-project"][];
            /** @description The entity assigned to the WIP period. */
            assignedEntity: {
                /**
                 * @description Unique key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example USAE
                 */
                id?: string;
            };
        };
        "services.construction-forecasting.wip-period-validate-response": {
            wipProjects?: components["schemas"]["objects.construction-forecasting.wip-project"][];
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `wipProjectWarnings` field instead.
             */
            warnings?: components["schemas"]["services.construction-forecasting.alert-response"][];
            /** @description A list of warnings and errors encountered during the validation for WIP projects. */
            wipProjectWarnings?: components["schemas"]["services.construction-forecasting.alert-response"][];
            /** @description A list of warnings and errors encountered during the validation for WIP forecast details.  This only applies when the configuration is set for a level other than WIP shcedule projects. */
            wipForecastDetailWarnings?: components["schemas"]["services.construction-forecasting.alert-response"][];
        };
        "services.construction-forecasting.wip-reporting-period-request": {
            /**
             * Format: date
             * @description WIP period end date or any date within a WIP period. The current date is used if this value is not specified or is `null`.
             * @example 2023-05-31
             */
            periodEndDate?: string;
            /** @description The entity assigned to the WIP period. The top level WIP period may be assigned a different entity. When creating a WIP period from entity level, the entity must match the selected entity. */
            assignedEntity: {
                /**
                 * @description System-assigned key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example USAE
                 */
                id?: string;
            };
        };
        "services.construction-forecasting.wip-reporting-period-get-available-response": {
            /** @description Available GL reporting periods. */
            reportingPeriods?: {
                /**
                 * @description System-assigned key for the reporting period.
                 * @example 421
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the reporting period.
                 * @example Sep 2023
                 */
                readonly id?: string;
                /**
                 * @description The first line to be shown on the report.
                 * @example Month ended
                 */
                readonly columnHeader1?: string;
                /**
                 * @description The second line to be shown on the report.
                 * @example April 2023
                 */
                readonly columnHeader2?: string;
                /**
                 * Format: date
                 * @description The start date of the reporting period.
                 * @example 2023-04-01
                 */
                readonly startDate?: string;
                /**
                 * Format: date
                 * @description The end date of the reporting period.
                 * @example 2023-06-30
                 */
                readonly endDate?: string;
                /**
                 * @description Set to `true` to make this reporting period available for inclusion in budgets.
                 * @default true
                 * @example true
                 */
                readonly isBudgetable?: boolean;
                /**
                 * @description URL endpoint for the reporting period.
                 * @example /objects/general-ledger/reporting-period/1
                 */
                readonly href?: string;
                /**
                 * @description Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
                 * @default active
                 * @example active
                 * @enum {string}
                 */
                readonly status?: "active" | "inactive";
            }[];
            /** @description WIP period validation results. */
            alerts?: components["schemas"]["services.construction-forecasting.alert-response"][];
        };
        "services.construction-forecasting.wip-reporting-period-get-next-response": {
            reportingPeriod?: {
                /**
                 * @description System-assigned key for the reporting period.
                 * @example 421
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the reporting period.
                 * @example Sep 2023
                 */
                readonly id?: string;
                /**
                 * @description The first line to be shown on the report.
                 * @example Month ended
                 */
                readonly columnHeader1?: string;
                /**
                 * @description The second line to be shown on the report.
                 * @example April 2023
                 */
                readonly columnHeader2?: string;
                /**
                 * Format: date
                 * @description The start date of the reporting period.
                 * @example 2023-04-01
                 */
                readonly startDate?: string;
                /**
                 * Format: date
                 * @description The end date of the reporting period.
                 * @example 2023-06-30
                 */
                readonly endDate?: string;
                /**
                 * @description Set to `true` to make this reporting period available for inclusion in budgets.
                 * @default true
                 * @example true
                 */
                readonly isBudgetable?: boolean;
                /**
                 * @description URL endpoint for the reporting period.
                 * @example /objects/general-ledger/reporting-period/1
                 */
                readonly href?: string;
                /**
                 * @description Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
                 * @default active
                 * @example active
                 * @enum {string}
                 */
                readonly status?: "active" | "inactive";
            };
            /** @description WIP period validation results. */
            alerts?: components["schemas"]["services.construction-forecasting.alert-response"][];
        };
        /** @description Journal entry history for a WIP period. */
        "services.construction-forecasting.wip-journal-entry-history-response": {
            entryHistory?: components["schemas"]["services.construction-forecasting.wip-journal-entry-history-detail-response"][];
        };
        "services.construction-forecasting.wip-journal-request": {
            /**
             * @description The description for the GL journal entry posting.
             * @example Journal Post for WIP Sep 2023
             */
            description?: string;
            /**
             * Format: date
             * @description The date the GL journal entry was posted.
             * @example 2023-05-31
             */
            postingDate?: string;
            /**
             * Format: date
             * @description Reversal date if you want to automatically reverse this transaction on a certain date. Must be after the `postingDate`.
             * @example 2023-12-31
             */
            automaticReversalDate?: string;
            /**
             * @description Reference number for this posting.
             * @example WIP_092023
             */
            referenceNumber?: string;
            /**
             * @description Key for the WIP period.
             * @example 123
             */
            key?: string;
            /**
             * @description Unique identifier for the WIP period.
             * @example 123
             */
            readonly id?: string;
            /**
             * @description The state is `posted` if the WIP projects are finalized and posted to the general ledger, otherwise, it is `unposted`.
             * @default unposted
             * @example unposted
             * @enum {string}
             */
            state?: "unposted" | "posted";
            /**
             * @description Indicates whether the WIP period was imported.
             * @default false
             * @example false
             */
            isHistoricalImport?: boolean;
            /**
             * Format: date-time
             * @description The date and time the WIP period was last refreshed.
             * @example 2023-05-26T10:06:00Z
             */
            lastRefreshDateTime?: string;
            /** @description The WIP projects to be posted. */
            wipProjects?: components["schemas"]["objects.construction-forecasting.wip-project"][];
            /** @description The entity assigned to the WIP period. */
            assignedEntity?: {
                /**
                 * @description Key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example USAE
                 */
                id?: string;
            };
        };
        /** @description WIP journal preview/post response. */
        "services.construction-forecasting.wip-journal-generate-preview-response": {
            /**
             * Format: decimal-precision-2
             * @description Cumulative billings in excess of costs (overbilling), as an absolute value.
             * @example 100.45
             */
            cumulativeBillingsInExcessOfCostsCreditAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Cumulative costs in excess of billings (underbilling), as an absolute value.
             * @example 100.45
             */
            cumulativeCostsInExcessOfBillingsDebitAmount?: string;
            /**
             * @description Description for the journal entry posting.
             * @example Journal Post for WIP Sep 2023
             */
            description?: string;
            /**
             * Format: date
             * @description The date the GL journal entry was posted.
             * @example 2023-05-31
             */
            postingDate?: string;
            /**
             * Format: date
             * @description Reversal date if you want to automatically reverse this transaction on a certain date. Must be after the `postingDate`.
             * @example 2023-12-31
             */
            automaticReversalDate?: string;
            /**
             * @description State for the journal entry. When creating a new entry, valid values are `posted` (default) to post to the GL, or `draft`.
             * @default posted
             * @example draft
             * @enum {string}
             */
            state?: "draft" | "submitted" | "partiallyApproved" | "approved" | "posted" | "declined" | "reversalPending" | "reversed";
            /**
             * @description User-provided reference number.
             * @example WIP_092023
             */
            referenceNumber?: string;
            /** @description The journal where postings will be made. */
            glJournal?: {
                /**
                 * @description System-assigned key for the journal.
                 * @example 3
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the journal.
                 * @example WIP
                 */
                id?: string;
                /**
                 * @description Name for the journal.
                 * @example WIP Journal
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the journal.
                 * @example /objects/general-ledger/journal/3
                 */
                readonly href?: string;
            };
            /** @description The account used for billings in excess of costs. */
            overbillingAccount?: {
                /**
                 * @description System-assigned key for the account.
                 * @example 58
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the account.
                 * @example 10030
                 */
                id?: string;
                /**
                 * @description Name for the account.
                 * @example Billings in Excess of Cost
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/58
                 */
                readonly href?: string;
            };
            /** @description The account used for costs in excess of billings. */
            underbillingAccount?: {
                /**
                 * @description System-assigned key for the account.
                 * @example 60
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the account.
                 * @example 10040
                 */
                id?: string;
                /**
                 * @description Name for the account.
                 * @example Cost in Excess of Billings
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/60
                 */
                readonly href?: string;
            };
            /** @description The account used for offsetting the billings in excess of costs. */
            overbillingOffsetAccount?: {
                /**
                 * @description System-assigned key for the account.
                 * @example 62
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the account.
                 * @example 10050
                 */
                id?: string;
                /**
                 * @description Name for the account.
                 * @example Net Over or Under Billings
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/62
                 */
                readonly href?: string;
            };
            /** @description The account used for offsetting the costs in excess of billings. */
            underbillingOffsetAccount?: {
                /**
                 * @description System-assigned key for the account.
                 * @example 62
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the account.
                 * @example 10050
                 */
                id?: string;
                /**
                 * @description Name for the account.
                 * @example Net Over or Under Billings
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/62
                 */
                readonly href?: string;
            };
            /** @description Line items of the journal entry. */
            lines?: {
                /** @description The project associated with the journal entry. */
                project?: {
                    /**
                     * @description System-assigned key for the project.
                     * @example 7
                     */
                    readonly key?: string;
                    /**
                     * @description Unique identifier for the project.
                     * @example DIM - BTI
                     */
                    id?: string;
                    /**
                     * @description Name for the project.
                     * @example Sample Project
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the project.
                     * @example /objects/projects/project/7
                     */
                    readonly href?: string;
                };
                /** @description The department associated with the journal entry. */
                department?: {
                    /**
                     * @description System-assigned key for the department.
                     * @example 10
                     */
                    readonly key?: string;
                    /**
                     * @description Unique identifier for the department.
                     * @example CS
                     */
                    id?: string;
                    /**
                     * @description Name for the department.
                     * @example Client Services
                     */
                    readonly name?: string;
                };
                /** @description The location associated with the journal entry. */
                location?: {
                    /**
                     * @description System-assigned key for the location.
                     * @example 1
                     */
                    readonly key?: string;
                    /**
                     * @description Unique identifier for the location.
                     * @example 1
                     */
                    id?: string;
                    /**
                     * @description Name for the location.
                     * @example United States
                     */
                    readonly name?: string;
                };
                /** @description The class associated with the journal entry. */
                class?: {
                    /**
                     * @description System-assigned key for the class.
                     * @example 13
                     */
                    readonly key?: string;
                    /**
                     * @description Unique identifier for the class.
                     * @example 4
                     */
                    id?: string;
                    /**
                     * @description Name for the class.
                     * @example PlanningPhase
                     */
                    readonly name?: string;
                };
                /** @description The general ledger account associated with the journal entry. */
                glAccount?: {
                    /**
                     * @description System-assigned key for the account.
                     * @example 62
                     */
                    readonly key?: string;
                    /**
                     * @description Unique identifier for the account.
                     * @example 10050
                     */
                    id?: string;
                    /**
                     * @description Name for the account.
                     * @example Net Over or Under Billings
                     */
                    readonly name?: string;
                };
                /**
                 * @description Transaction type.
                 * @default debit
                 * @example credit
                 * @enum {string}
                 */
                transactionType?: "debit" | "credit";
                /**
                 * Format: decimal-precision-2
                 * @description Transaction amount as an absolute value.
                 * @example 100.45
                 */
                transactionAmount?: string;
            }[];
        };
        /** @description Revert WIP journal posting request. */
        "wip-journal-revert-post-request": {
            /**
             * @description Unique key for the WIP period.
             * @example 123
             */
            wipPeriodKey?: string;
        };
        "services.construction-forecasting.wip-rollup-project-wip-rollup-projects-request": {
            /**
             * @description List of subproject keys.
             * @example [
             *       "2224",
             *       "2346",
             *       "2494"
             *     ]
             */
            subprojectKeys?: string[];
        };
        "services.construction-forecasting.wip-rollup-project-wip-rollup-projects-response": {
            /** @description List of target projects. */
            targetProjects?: components["schemas"]["entity-label"][];
        };
        "services.construction-forecasting.wip-rollup-project-bulk-action-request": {
            /** @description List of keys for the projects that are to be modified. */
            projectKeys?: string[];
            /**
             * @description Key for the WIP project in which to include the projects being modified.
             * @example 16
             */
            wipScheduleProjectKey?: string;
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
        "project-location-ref": {
            /**
             * @description Location key
             * @example 1
             */
            key?: string;
            /**
             * @description Project location id
             * @example 1
             */
            id?: string;
            /**
             * @description Project location name
             * @example United States of America
             */
            readonly name?: string;
            /**
             * @description URL of the location
             * @example /objects/company-config/location/1
             */
            readonly href?: string;
        };
        /** @description Supporting document ID. */
        "attachment-ref": {
            /**
             * @description Attachment key
             * @example 6
             */
            key?: string;
            /**
             * @description Attachment id
             * @example att-1
             */
            id?: string;
            /**
             * @description URL of the attachment
             * @example /objects/company-config/attachment/6
             */
            readonly href?: string;
        };
        /**
         * @description Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
         * @default active
         * @example active
         * @enum {string}
         */
        status: "active" | "inactive";
        "schedule-calendar": {
            /**
             * Format: date
             * @description Scheduled start date.
             * @example 2021-06-15
             */
            scheduledStartDate?: string;
            /**
             * Format: date
             * @description Actual start date.
             * @example 2025-06-30
             */
            actualStartDate?: string;
            /**
             * Format: date
             * @description Scheduled completion date.
             * @example 2026-11-15
             */
            scheduledCompletionDate?: string;
            /**
             * Format: date
             * @description Revised completion date.
             * @example 2026-12-15
             */
            revisedCompletionDate?: string;
            /**
             * Format: date
             * @description Substantial completion date.
             * @example 2026-09-30
             */
            substantialCompletionDate?: string;
            /**
             * Format: date
             * @description Actual completion date.
             * @example 2026-12-15
             */
            actualCompletionDate?: string;
            /**
             * Format: date
             * @description Notice to proceed date.
             * @example 2026-05-30
             */
            noticeToProceedDate?: string;
            /**
             * Format: date
             * @description Response due date.
             * @example 2026-06-05
             */
            responseDueDate?: string;
            /**
             * Format: date
             * @description Executed on date.
             * @example 2026-06-01
             */
            executedOnDate?: string;
            /**
             * @description Schedule impact.
             * @example None
             */
            scheduleImpact?: string;
        };
        "internal-document-ref": {
            /**
             * @description Reference number for the internal document.
             * @example INT-01
             */
            referenceNumber?: string;
            /** @description Reference to the employee who initiated the document. */
            initiatedBy?: {
                /**
                 * @description System-assigned key for the employee.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Unique identifier for the employee.
                 * @example dhatchet
                 */
                id?: string;
                /**
                 * @description Name for the employee.
                 * @example David Hatcher
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/2
                 */
                readonly href?: string;
            };
            /** @description Employee who provided verbal approval. */
            verbalApprovalBy?: {
                /**
                 * @description System-assigned key for the employee.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Unique identifier for the employee.
                 * @example sdye
                 */
                id?: string;
                /**
                 * @description Name for the employee.
                 * @example Sara Dye
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/2
                 */
                readonly href?: string;
            };
            /** @description Employee who issued the internal document. */
            issuedBy?: {
                /**
                 * @description System-assigned key for the employee.
                 * @example 25
                 */
                key?: string;
                /**
                 * @description Unique identifier for the employee.
                 * @example amarquess
                 */
                id?: string;
                /**
                 * @description Name for the employee.
                 * @example Adam Marquess
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/25
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Date the document was issued.
             * @example 2025-05-30
             */
            issuedOnDate?: string;
            /** @description Employee who approved the document. */
            approvedBy?: {
                /**
                 * @description System-assigned key for the employee.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the employee.
                 * @example treser
                 */
                id?: string;
                /**
                 * @description Name for the employee.
                 * @example Tim Reser
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/1
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Date the document was approved.
             * @example 2025-10-02
             */
            approvedOnDate?: string;
            /** @description Employee who signed the internal document. */
            signedBy?: {
                /**
                 * @description System-assigned key for the employee.
                 * @example 32
                 */
                key?: string;
                /**
                 * @description Unique identifier for the employee.
                 * @example broberts
                 */
                id?: string;
                /**
                 * @description Name for the employee.
                 * @example Bob Roberts
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/32
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Date the document was signed.
             * @example 2025-05-31
             */
            signedOnDate?: string;
            /**
             * @description Internal source.
             * @example Internal
             */
            source?: string;
            /**
             * @description Internal source reference number.
             * @example REF-INT-01
             */
            sourceReferenceNumber?: string;
        };
        "external-document-ref": {
            /**
             * @description Reference number for the external document.
             * @example A23
             */
            referenceNumber?: string;
            /** @description Reference to the contact who provided verbal approval. */
            verbalApprovalBy?: {
                /**
                 * @description System-assigned key for the contact.
                 * @example 6
                 */
                key?: string;
                /**
                 * @description Unique identifier for the contact.
                 * @example Johnson
                 */
                id?: string;
                /**
                 * @description URL endpoint for the contact.
                 * @example /objects/company-config/contact/6
                 */
                readonly href?: string;
            };
            /** @description Contact who approved the document. */
            approvedBy?: {
                /**
                 * @description System-assigned key for the contact.
                 * @example 51
                 */
                key?: string;
                /**
                 * @description Unique identifier for the contact.
                 * @example Jagadish
                 */
                id?: string;
                /**
                 * @description URL endpoint for the contact.
                 * @example /objects/company-config/contact/51
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Date the document was approved.
             * @example 2025-11-03
             */
            approvedOnDate?: string;
            /** @description Contact who signed the document. */
            signedBy?: {
                /**
                 * @description System-assigned key for the contact.
                 * @example 200
                 */
                key?: string;
                /**
                 * @description Unique identifier for the contact.
                 * @example Modulus Industries
                 */
                id?: string;
                /**
                 * @description URL endpoint for the contact.
                 * @example /objects/company-config/contact/200
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Date the document was signed.
             * @example 2025-12-01
             */
            signedOnDate?: string;
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
        /** @description Reference to a project contract */
        "project-contract-ref": {
            /**
             * @description Project contract key
             * @example 1
             */
            key?: string;
            /**
             * @description Project contract ID
             * @example BTI-01
             */
            id?: string;
            /**
             * @description Project contract name
             * @example Berkeley Technology Inc - Contract 01
             */
            readonly name?: string;
            /**
             * @description URL endpoint for the project contract
             * @example /objects/construction/project-contract/1
             */
            readonly href?: string;
        };
        "gl-account-ref": {
            /**
             * @description System-assigned key for the GL account.
             * @example 144
             */
            key?: string;
            /**
             * @description Unique identifier for the GL account.
             * @example 1112
             */
            id?: string;
            /**
             * @description Name for the GL account.
             * @example Employee Advances
             */
            readonly name?: string;
            /**
             * @description URL endpoint for the GL account.
             * @example /objects/general-ledger/account/144
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
        /** @description Reference to a project contract line */
        "project-contract-line-ref": {
            /**
             * @description Project contract line key
             * @example 4
             */
            key?: string;
            /**
             * @description Project contract line ID
             * @example Project-Contract-Line-04
             */
            id?: string;
            /**
             * @description Project contract line name
             * @example Project contract line 04
             */
            readonly name?: string;
            /**
             * @description URL endpoint for the project contract line
             * @example /objects/construction/project-contract-line/4
             */
            readonly href?: string;
        };
        "audit.s2": {
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
        "location-ref": {
            /**
             * @description System-assigned key for the location.
             * @example 1
             */
            key?: string;
            /**
             * @description Unique identifier for the location.
             * @example US
             */
            id?: string;
            /**
             * @description Name for the location.
             * @example United States of America
             */
            readonly name?: string;
            /**
             * @description URL endpoint for the location.
             * @example /objects/company-config/location/1
             */
            readonly href?: string;
        };
        /** @description Rate table that this object is associated with. */
        "rate-table-ref": {
            /**
             * @description Rate table key.
             * @example 145
             */
            key?: string;
            /**
             * @description Rate table ID.
             * @example 2021-LV2
             */
            id?: string;
            /**
             * @description Rate table name.
             * @example 2021 Level 2
             */
            readonly name?: string;
            /**
             * @description URL endpoint for the rate table.
             * @example /objects/construction/rate-table/145
             */
            readonly href?: string;
        };
        /** @description The accumulation type associated with the object. */
        "accumulation-type-ref": {
            /**
             * @description Accumulation type key.
             * @example 2
             */
            key?: string;
            /**
             * @description Accumulation type ID.
             * @example Direct cost
             */
            id?: string;
            /**
             * @description URL endpoint for the accumulation type.
             * @example /objects/construction/accumulation-type/2
             */
            readonly href?: string;
        };
        /** @description Standard cost type associated with the object. */
        "standard-cost-type-ref": {
            /**
             * @description Standard cost type key.
             * @example 33
             */
            key?: string;
            /**
             * @description Standard cost type ID.
             * @example LAB
             */
            id?: string;
            /**
             * @description Standard cost type name.
             * @example LABOR
             */
            readonly name?: string;
            /**
             * @description URL endpoint of the standard cost type.
             * @example /objects/construction/standard-cost-type/33
             */
            readonly href?: string;
        };
        /** @description Standard task associated with the object. */
        "standard-task-ref": {
            /**
             * @description Standard task key.
             * @example 3
             */
            key?: string;
            /**
             * @description Standard task ID.
             * @example 1-000
             */
            id?: string;
            /**
             * @description Standard task name.
             * @example GENERAL CONDITIONS
             */
            readonly name?: string;
            /**
             * @description URL endpoint of the standard task.
             * @example /objects/construction/standard-task/3
             */
            readonly href?: string;
        };
        /** @description Reference to an item. */
        "item-ref": {
            /**
             * @description System-assigned key for the item.
             * @example 319
             */
            key?: string;
            /**
             * @description Unique identifier for the item.
             * @example Overhead
             */
            id?: string;
            /**
             * @description Name for the item.
             * @example Overhead
             */
            readonly name?: string;
            /**
             * @description URL endpoint for the item.
             * @example /objects/inventory-control/item/319
             */
            readonly href?: string;
        };
        "department-ref": {
            /**
             * @description System-assigned key for the department.
             * @example 322
             */
            key?: string;
            /**
             * @description Unique identifier for the department.
             * @example 100
             */
            id?: string;
            /**
             * @description Name for the department.
             * @example Department-100
             */
            readonly name?: string;
            /**
             * @description URL endpoint for the department.
             * @example /objects/company-config/department/322
             */
            readonly href?: string;
        };
        /**
         * @description The source of the most recent project manager forecast update, if it has been set.
         *     - 'priorPeriod' - The project manager values are copied from the prior WIP schedule period.
         *     - 'projectValues' - The project manager values are copied from the project estimates.
         *     - 'manualEntry' - The project manager values are manually updated in the UI.
         *     - 'projectManagerForecastAPI' - The project manager values submitted via an API call.
         *     - 'clearProjectManagerValuesBulkAction' - The project manager values are cleared with a bulk action from the WIP schedule page.
         *     - 'projectValuesBulkAction' - The project manager values are copied from the project estimates with a bulk action from the WIP schedule page.
         *     - 'priorPeriodBulkAction' - The project manager values are copied from the prior WIP schedule period with a bulk action from the WIP schedule page.
         *     - 'primaryForecastBulkAction' - The project manager values are copied from the primary forecast estimate with a bulk action from the WIP schedule page.
         * @default null
         * @example projectValues
         * @enum {string|null}
         */
        "update-source": null | "priorPeriod" | "projectValues" | "manualEntry" | "projectManagerForecastAPI" | "clearProjectManagerValuesBulkAction" | "projectValuesBulkAction" | "priorPeriodBulkAction" | "primaryForecastBulkAction";
        /** @description Ongoing projects that provide project manager and CFO forecasts of project costs, profits, and completion percentage, actual costs and earned revenue, and overbilling and underbilling amounts. */
        "services.construction-forecasting.wip-project-calculation-project": {
            /**
             * @description Unique key for the WIP project.
             * @example 1
             */
            key?: string;
            /**
             * @description Unique identifier for the WIP project.
             * @example 1
             */
            id?: string;
            /**
             * @description A WIP project is finalized when it is ready to be posted to the general ledger.
             * @default false
             * @example false
             */
            isFinalized?: boolean;
            /**
             * Format: date
             * @description Date this WIP project was posted to the general ledger.
             * @example 2023-05-16
             */
            glPostedDate?: string;
            /**
             * Format: decimal-precision-2
             * @description The project's estimated costs to-date based on estimate entries in the project's primary estimate.
             * @example 10000.00
             */
            estimatedCostToDateAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description The project's actual costs to-date. This amount comes from journal postings to the selected cost accounts.
             * @example 1000.00
             */
            jobToDateCosts?: string;
            /**
             * Format: decimal-precision-2
             * @description Estimate of the costs remaining for the project. The amount is calculated as `estimatedCostAtCompletion` less `jobToDateCosts`.
             * @example 3000.00
             */
            estimatedCostToComplete?: string;
            /**
             * Format: decimal-precision-2
             * @description Estimated cost at completion of the project based on estimate entries in the project's primary estimate. Estimate entries are included if they have a workflow type of original, revision, or approved change.
             * @example 3000.00
             */
            estimatedCostAtCompletion?: string;
            /**
             * Format: decimal-precision-2
             * @description Estimated pending amount based on pending estimate entries in the project's primary estimate.
             * @example 3000.00
             */
            pendingEstimatesAmount?: string;
            /**
             * Format: percent-precision-2
             * @description Estimated percent complete for the project, calculated as project's `jobToDateCosts` divided by `estimatedCostAtCompletion`.
             * @example 70.5
             */
            estimatedPercentComplete?: string;
            /** @description Project manager's forecast of project costs, profits, and completion percentage. */
            projectManagerForecast?: {
                /**
                 * Format: decimal-precision-2
                 * @description Project manager forecast cost to complete.
                 * @example 3000.00
                 */
                costToComplete?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Project manager forecast cost at completion.
                 * @example 9000.00
                 */
                costAtCompletion?: string;
                /**
                 * Format: percent-precision-2
                 * @description Project manager forecast percent complete.
                 * @example 90
                 */
                percentComplete?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Project manager forecast contract value.
                 * @example 10000.00
                 */
                contractValue?: string;
                /**
                 * Format: date-time
                 * @description The date and time the project manager last updated their forecast.
                 * @example 2023-05-26T10:06:00Z
                 */
                lastUpdatedDate?: string;
            };
            /** @description CFO forecast of project costs, profits, and completion percentage. */
            cfoForecast?: {
                /**
                 * Format: decimal-precision-2
                 * @description CFO forecast cost to complete.
                 * @example 4000.00
                 */
                costToComplete?: string;
                /**
                 * Format: decimal-precision-2
                 * @description CFO forecast cost at completion.
                 * @example 9500.00
                 */
                costAtCompletion?: string;
                /**
                 * Format: percent-precision-2
                 * @description CFO forecast percent complete.
                 * @example 70
                 */
                percentComplete?: string;
                /**
                 * Format: decimal-precision-2
                 * @description CFO forecast contract value.
                 * @example 10000.00
                 */
                contractValue?: string;
                /**
                 * Format: date-time
                 * @description The date and time the CFO last updated their forecast.
                 * @example 2023-05-26T10:06:00Z
                 */
                lastUpdatedDate?: string;
            };
            /**
             * Format: decimal-precision-2
             * @description Cost at completion variance (`cfoForecast.costAtCompletion` less `estimatedCostAtCompletion`).
             * @example 500.00
             */
            costAtCompletionVariance?: string;
            /**
             * Format: decimal-precision-2
             * @description The sum of the price for all project contract lines, including any change request entries linked to the project contract line through a change order.
             * @example 10000.00
             */
            totalContractValue?: string;
            /**
             * Format: decimal-precision-2
             * @description Contract amount variance (`cfoForecast.contractValue` less `totalContractValue`).
             * @example 1000.00
             */
            contractVarianceAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Job-to-date billings amount comes from journal postings to the revenue accounts specified in the [WIP setup](construction-forecasting.wip-setup) object.
             * @example 5000.00
             */
            jobToDateBillings?: string;
            /**
             * Format: decimal-precision-2
             * @description Earned-to-date amount (`cfoForecast.contractValue` multiplied by `cfoForecast.percentComplete`).
             * @example 5000.00
             */
            earnedToDateAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Remaining backlog amount represents the work left for the project as a currency amount (`cfoForecast.contractValue` less `earnedToDateAmount`).
             * @example 3000.00
             */
            remainingBacklogAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description The overbilling or underbilling amount is the difference between YTD billed and YTD earned amounts.
             * @example -1000.00
             */
            overUnderBillingAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Current earned profit to-date (`earnedToDateAmount` less `jobToDateCosts`).
             * @example 5000.00
             */
            earnedProfitToDateAmount?: string;
            /**
             * Format: percent-precision-2
             * @description Gross profit percent of contract (`cfoForecast.grossProfitAtCompletion` divided by `cfoForecast.contractValue`).
             * @example 20
             */
            grossProfitPercentOfContract?: string;
            /**
             * Format: percent-precision-2
             * @description Gross profit percent of cost (`cfoForecast.grossProfitAtCompletion` divided by `cfoForecast.costsAtCompletion`).
             * @example 30
             */
            grossProfitPercentOfCost?: string;
            /**
             * Format: decimal-precision-2
             * @description Total gross profit estimated at completion (`totalContractValue` less `estimatedCostAtCompletion`).
             * @example 3000.00
             */
            totalGrossProfitEstimatedAtCompletion?: string;
            /**
             * Format: decimal-precision-2
             * @description CFO forecast gross profit at completion (`cfoForecast.contractValue` less `cfoForecast.costsAtCompletion`).
             * @example 3000.00
             */
            cfoForecastGrossProfitAtCompletion?: string;
            /**
             * Format: decimal-precision-2
             * @description Gross profit variance (`cfoForecast.grossProfitAtCompletion` less `totalGrossProfitEstimatedAtCompletion`).
             * @example 1000.00
             */
            grossProfitVarianceAmount?: string;
            /**
             * Format: percent-precision-2
             * @description CFO forecast gross profit margin percent (`cfoForecast.grossProfitAtCompletion` divided by `cfoForecast.contractValue`).
             * @example 30
             */
            cfoForecastGrossProfitMarginPercent?: string;
            /**
             * Format: decimal-precision-2
             * @deprecated
             * @description This field has been deprecated, use `earnedProfitToDateAmount` instead.
             */
            priorYearsProfit?: string;
            /**
             * Format: decimal-precision-2
             * @description Earned to-date amount as of end of prior year (`earnedToDateAmount` less `endOfPriorYearEarnedProfit`).
             * @example 15000.00
             */
            endOfPriorYearEarnedToDateAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Earned profit as of end of prior year. This value comes from the end-of-year WIP schedule from the prior year if one exists. Otherwise, the amount is zero.
             * @example 15000.00
             */
            endOfPriorYearEarnedProfit?: string;
            /**
             * Format: decimal-precision-2
             * @description The amount of the project that remains to be earned (`cfoForecast.grossProfitAtCompletion` less `earnedProfitToDate`).
             * @example 15000.00
             */
            remainingProfit?: string;
            /**
             * Format: decimal-precision-2
             * @description Year-to-date costs.
             * @example 15000.00
             */
            yearToDateCostAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Year-to-date billings.
             * @example 15000.00
             */
            yearToDateBillingAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Year-to-date earned revenue.
             * @example 15000.00
             */
            yearToDateEarnedRevenueAmount?: string;
            /**
             * Format: decimal-precision-2
             * @deprecated
             * @description This field has been deprecated. Use the `jobToDateOverbillingAmount` field instead.
             */
            jobToDateOverBillingAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Job-to-date overbilling.
             * @example 15000.00
             */
            jobToDateOverbillingAmount?: string;
            /**
             * Format: decimal-precision-2
             * @deprecated
             * @description This field has been deprecated. Use the `jobToDateUnderbillingAmount` field instead.
             */
            jobToDateUnderBillingAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Job-to-date underbilling.
             * @example 15000.00
             */
            jobToDateUnderbillingAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Year-to-date earned profit.
             * @example 15000.00
             */
            yearToDateEarnedProfitAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Current period billings.
             * @example 15000.00
             */
            currentPeriodBillingAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Current period costs.
             * @example 15000.00
             */
            currentPeriodCostAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Current period earned profit.
             * @example 15000.00
             */
            currentPeriodEarnedProfitAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Current period earned revenue.
             * @example 15000.00
             */
            currentPeriodEarnedRevenueAmount?: string;
            /**
             * @description URL endpoint for the WIP project.
             * @example /objects/construction-forecasting/wip-project/1
             */
            href?: string;
            /** @description The project this WIP project is based on. */
            project?: {
                /**
                 * @description Key for the project.
                 * @example 16
                 */
                key?: string;
                /**
                 * @description Identifier for the project.
                 * @example SMIT
                 */
                id?: string;
                /**
                 * @description Name for the project.
                 * @example Staff Meeting - Interworking Technologies
                 */
                name?: string;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/10
                 */
                href?: string;
            };
            /** @description The WIP period this WIP project is associated with. */
            wipPeriod?: {
                /**
                 * @description The key for the WIP period.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description Unique identifier for the WIP period.
                 * @example 123
                 */
                id?: string;
                /**
                 * @description The name for the WIP period, sourced from GL reporting period name.
                 * @example Month end May 2023
                 */
                periodName?: string;
                /**
                 * @description URL endpoint for the WIP period.
                 * @example /objects/construction-forecasting/wip-period/123
                 */
                href?: string;
            };
        };
        /** @description WIP calculation results. */
        "services.construction-forecasting.alert-response": {
            /**
             * @description Description of the problem encountered in the calculation.
             * @example Estimated percent complete must be between 0 and 100
             */
            errorMessage?: string;
            /**
             * @description The names of the fields where the calculation problems occurred.
             * @example [
             *       "estimatedPercentComplete"
             *     ]
             */
            fieldNames?: string[];
            /**
             * @deprecated
             * @description Unique identifier of the target object (when applicable) for which the alert is raised, for example WIP period key, WIP project key, or WIP forecast detail key.  If the source is not an object, this value will be null.
             */
            target?: string;
            /**
             * @description Unique identifier of the target object (when applicable) for which the alert is raised, for example WIP period key, WIP project key, or WIP forecast detail key.  If the source is not an object, this value will be null.
             * @example 1
             */
            key?: string;
            /**
             * @description The source object or service type to which the alert is attributed
             * @example wip-project
             * @enum {string}
             */
            source?: "objects/construction-forecasting/wip-project" | "objects/construction-forecasting/wip-forecast-detail" | "services/construction-forecasting/wip-actual-service/calculate" | "services/construction-forecasting/wip-period/can-post" | "services/construction-forecasting/wip-project/calculate" | "services/construction-forecasting/wip-reporting-period/get-next" | "services/construction-forecasting/wip-reporting-period/get-available" | null;
            /**
             * @description Severity of the problem.
             * @default warning
             * @example warning
             * @enum {string}
             */
            severity?: "warning" | "error" | "critical";
        };
        /** @description Line items for a journal entry history. */
        "services.construction-forecasting.wip-journal-entry-history-detail-response": {
            /** @description The GL journal for the posting. */
            journal?: {
                /**
                 * @description Unique key for the GL journal.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Identifier for the GL journal.
                 * @example EJ
                 */
                id?: string;
                /**
                 * @description URL endpoint for the GL journal.
                 * @example /objects/general-ledger/journal/3
                 */
                href?: string;
            };
            /** @description GL journal entry posted for the WIP period. */
            journalEntry?: {
                /**
                 * @description Unique key for the GL journal entry.
                 * @example 8153
                 */
                key?: string;
                /**
                 * @description Identifier for the GL journal entry.
                 * @example 8153
                 */
                id?: string;
                /**
                 * @description System-assigned number for the journal transaction.
                 * @example 40
                 */
                txnNumber?: number;
                /**
                 * Format: date
                 * @description The date the WIP schedule was posted.
                 * @example 2023-05-31
                 */
                postingDate?: string;
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/general-ledger/journal-entry/8153
                 */
                href?: string;
            };
            /** @description The reverse journal entry that was created automatically for the posted journal entry. */
            reversedByJournalEntry?: {
                /**
                 * @description Unique key for the journal entry.
                 * @example 4765
                 */
                key?: string;
                /**
                 * @description Identifier for the journal entry.
                 * @example 4765
                 */
                id?: string;
                /**
                 * @description System-assigned number for the journal transaction.
                 * @example 40
                 */
                txnNumber?: number;
                /**
                 * Format: date
                 * @description The date the WIP schedule posting was reversed.
                 * @example 2023-12-31
                 */
                postingDate?: string;
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/general-ledger/journal-entry/4765
                 */
                href?: string;
            } | null;
            /** @description The journal entry that reverts the posted journal entry, created manually by the user. */
            revertedByJournalEntry?: {
                /**
                 * @description Unique key for the journal entry.
                 * @example 1243
                 */
                key?: string;
                /**
                 * @description Identifier fro the journal entry.
                 * @example 1243
                 */
                id?: string;
                /**
                 * @description System-assigned number for the journal transaction.
                 * @example 40
                 */
                txnNumber?: number;
                /**
                 * Format: date
                 * @description The date the WIP schedule posting was reverted.
                 * @example 2023-05-31
                 */
                postingDate?: string;
                /**
                 * @description Endpoint URL for the journal entry.
                 * @example /objects/general-ledger/journal-entry/1243
                 */
                href?: string;
            } | null;
            /** @description Overbilling debit and credit amounts. */
            overbilling?: {
                /**
                 * Format: decimal-precision-2
                 * @description The amount that was debited to the overbilling account when the WIP schedule was posted.
                 * @example 100.45
                 */
                debitAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The amount that was credited to the overbilling account when the WIP schedule was posted.
                 * @example 100.45
                 */
                creditAmount?: string;
            };
            /** @description Underbilling debit and credit amounts. */
            underbilling?: {
                /**
                 * Format: decimal-precision-2
                 * @description The amount that was debited to the underbilling account when the WIP schedule was posted.
                 * @example 100.45
                 */
                debitAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The amount that was credited to the underbilling account when the WIP schedule was posted.
                 * @example 100.45
                 */
                creditAmount?: string;
            };
            /** @description Adjustment debit and credit amounts. */
            adjustment?: {
                /**
                 * Format: decimal-precision-2
                 * @description The amount debited to the offset account when posting an overbilling credit or an underbilling credit.
                 * @example 100.45
                 */
                debitAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The amount credited to the offset account when posting an overbilling debit or an underbilling debit.
                 * @example 100.45
                 */
                creditAmount?: string;
            };
            /**
             * @description The description of the GL journal entry posting.
             * @example Journal Entry for WIP for period ending Sep 2023
             */
            description?: string;
        };
        /** @description Entity summary. */
        "entity-label": {
            /**
             * @description Unique key for the entity.
             * @example 3
             */
            readonly key?: string;
            /**
             * @description Identifier for the entity.
             * @example ABC
             */
            id?: string;
            /**
             * @description Name for the entity.
             * @example Engineering
             */
            readonly name?: string;
            /**
             * @description Label for the entity.
             * @example ABC--Engineering
             */
            readonly label?: string;
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
    "list-construction-project-contract": {
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
    "create-construction-project-contract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Project contract to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.project-contract"] & components["schemas"]["construction-project-contractRequiredProperties"];
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
    "get-construction-project-contract-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project contract.
                 * @example 44
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
                        "ia::result"?: components["schemas"]["objects.construction.project-contract"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-project-contract-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project contract.
                 * @example 44
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
    "update-construction-project-contract-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project contract.
                 * @example 44
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.project-contract"] & {
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
    "list-construction-project-contract-line": {
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
    "create-construction-project-contract-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Project contract line to be created */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.project-contract-line"] & components["schemas"]["construction-project-contract-lineRequiredProperties"];
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
    "get-construction-project-contract-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project contract line.
                 * @example 4044
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
                        "ia::result"?: components["schemas"]["objects.construction.project-contract-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-project-contract-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project contract line.
                 * @example 4044
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
    "update-construction-project-contract-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project contract line.
                 * @example 4044
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.project-contract-line"] & {
                    readonly id?: unknown;
                    readonly taxSolution?: unknown;
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
    "list-construction-project-contract-line-entry": {
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
    "get-construction-project-contract-line-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project contract line entry.
                 * @example 5
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
                        "ia::result"?: components["schemas"]["objects.construction.project-contract-line-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-project-contract-line-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project contract line entry.
                 * @example 5
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
    "list-construction-project-contract-type": {
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
    "create-construction-project-contract-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Project contract type to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.project-contract-type"] & components["schemas"]["construction-project-contract-typeRequiredProperties"];
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
    "get-construction-project-contract-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key of the project contract type
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
                        "ia::result"?: components["schemas"]["objects.construction.project-contract-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-project-contract-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key of the project contract type
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
    "update-construction-project-contract-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key of the project contract type
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.project-contract-type"] & {
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
    "list-construction-project-contract-line-task-map": {
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
    "create-construction-project-contract-line-task-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates a new project contract line task map. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.project-contract-line-task-map"] & components["schemas"]["construction-project-contract-line-task-mapRequiredProperties"];
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
    "get-construction-project-contract-line-task-map-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project contract line task map.
                 * @example 156
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
                        "ia::result"?: components["schemas"]["objects.construction.project-contract-line-task-map"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-project-contract-line-task-map-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project contract line task map.
                 * @example 156
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
    "list-construction-cost-type-observed-percent-completed": {
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
    "create-construction-cost-type-observed-percent-completed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Cost type observed percent completed */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.cost-type-observed-percent-completed"] & components["schemas"]["construction-cost-type-observed-percent-completedRequiredProperties"];
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
    "get-construction-cost-type-observed-percent-completed-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a cost type observed percent completed.
                 * @example 1
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
                        "ia::result"?: components["schemas"]["objects.construction.cost-type-observed-percent-completed"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-cost-type-observed-percent-completed-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a cost type observed percent completed.
                 * @example 1
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
    "update-construction-cost-type-observed-percent-completed-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a cost type observed percent completed.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.cost-type-observed-percent-completed"] & {
                    costType?: {
                        readonly key?: unknown;
                        readonly id?: unknown;
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
    "list-construction-project-contract-billing-invoice-detail": {
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
    "get-construction-project-contract-billing-invoice-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project contract billing invoice detail.
                 * @example 3760
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
                        "ia::result"?: components["schemas"]["objects.construction.project-contract-billing-invoice-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-project-contract-billing-invoice-summary": {
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
    "get-construction-project-contract-billing-invoice-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project contract billing invoice summary.
                 * @example 313
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
                        "ia::result"?: components["schemas"]["objects.construction.project-contract-billing-invoice-summary"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-rate-table": {
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
    "create-construction-rate-table": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a construction rate table. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.rate-table"] & components["schemas"]["construction-rate-tableRequiredProperties"];
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
    "get-construction-rate-table-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the construction rate table.
                 * @example 145
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
                        "ia::result"?: components["schemas"]["objects.construction.rate-table"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-rate-table-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the construction rate table.
                 * @example 145
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
    "update-construction-rate-table-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the construction rate table.
                 * @example 145
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.rate-table"] & {
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
    "list-construction-rate-table-accounts-payable-line": {
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
    "get-construction-rate-table-accounts-payable-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the rate table accounts payable line.
                 * @example 397
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
                        "ia::result"?: components["schemas"]["objects.construction.rate-table-accounts-payable-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-rate-table-credit-card-line": {
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
    "get-construction-rate-table-credit-card-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the rate table credit card line.
                 * @example 145
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
                        "ia::result"?: components["schemas"]["objects.construction.rate-table-credit-card-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-rate-table-employee-expense-line": {
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
    "get-construction-rate-table-employee-expense-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the rate table employee expense line.
                 * @example 30
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
                        "ia::result"?: components["schemas"]["objects.construction.rate-table-employee-expense-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-rate-table-journal-line": {
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
    "get-construction-rate-table-journal-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the rate table journal line.
                 * @example 64
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
                        "ia::result"?: components["schemas"]["objects.construction.rate-table-journal-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-rate-table-purchasing-line": {
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
    "get-construction-rate-table-purchasing-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the rate table purchasing line.
                 * @example 176
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
                        "ia::result"?: components["schemas"]["objects.construction.rate-table-purchasing-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-rate-table-timesheet-line": {
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
    "get-construction-rate-table-timesheet-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the rate table timesheet line.
                 * @example 12
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
                        "ia::result"?: components["schemas"]["objects.construction.rate-table-timesheet-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-project-estimate": {
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
    "create-construction-project-estimate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Project estimate to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.project-estimate"] & components["schemas"]["construction-project-estimateRequiredProperties"];
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
    "get-construction-project-estimate-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project estimate.
                 * @example 27
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
                        "ia::result"?: components["schemas"]["objects.construction.project-estimate"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-project-estimate-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project estimate.
                 * @example 27
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
    "update-construction-project-estimate-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project estimate.
                 * @example 27
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.project-estimate"] & {
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
    "list-construction-project-estimate-line": {
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
    "get-construction-project-estimate-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project estimate line.
                 * @example 101
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
                        "ia::result"?: components["schemas"]["objects.construction.project-estimate-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-project-estimate-type": {
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
    "create-construction-project-estimate-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Project estimate type to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.project-estimate-type"] & components["schemas"]["construction-project-estimate-typeRequiredProperties"];
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
    "get-construction-project-estimate-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project estimate type.
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
                        "ia::result"?: components["schemas"]["objects.construction.project-estimate-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-project-estimate-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project estimate type.
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
    "update-construction-project-estimate-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project estimate type.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.project-estimate-type"] & {
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
    "list-construction-project-change-order": {
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
    "create-construction-project-change-order": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Project change order to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.project-change-order"] & components["schemas"]["construction-project-change-orderRequiredProperties"];
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
    "get-construction-project-change-order-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project change order.
                 * @example 212
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
                        "ia::result"?: components["schemas"]["objects.construction.project-change-order"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-project-change-order-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project change order.
                 * @example 212
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
    "update-construction-project-change-order-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the project change order.
                 * @example 212
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.project-change-order"] & {
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
    "list-construction-change-request": {
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
    "create-construction-change-request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Change request to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.change-request"] & components["schemas"]["construction-change-requestRequiredProperties"];
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
    "get-construction-change-request-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the change request.
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
                        "ia::result"?: components["schemas"]["objects.construction.change-request"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-change-request-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the change request.
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
    "update-construction-change-request-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the change request.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.change-request"] & {
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
    "list-construction-change-request-line": {
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
    "get-construction-change-request-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the change request line.
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
                        "ia::result"?: components["schemas"]["objects.construction.change-request-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-change-request-type": {
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
    "create-construction-change-request-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Change request type to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.change-request-type"] & components["schemas"]["construction-change-request-typeRequiredProperties"];
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
    "get-construction-change-request-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the change request type.
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
                        "ia::result"?: components["schemas"]["objects.construction.change-request-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-change-request-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the change request type.
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
    "update-construction-change-request-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the change request type.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.change-request-type"] & {
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
    "list-construction-change-request-status": {
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
    "create-construction-change-request-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Change request status to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.change-request-status"] & components["schemas"]["construction-change-request-statusRequiredProperties"];
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
    "get-construction-change-request-status-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the change request status.
                 * @example 12
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
                        "ia::result"?: components["schemas"]["objects.construction.change-request-status"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-change-request-status-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the change request status.
                 * @example 12
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
    "update-construction-change-request-status-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the change request status.
                 * @example 12
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.change-request-status"] & {
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
    "list-construction-accumulation-type": {
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
    "create-construction-accumulation-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Accumulation type to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.accumulation-type"];
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
    "get-construction-accumulation-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the accumulation type.
                 * @example 3086
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
                        "ia::result"?: components["schemas"]["objects.construction.accumulation-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-accumulation-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the accumulation type.
                 * @example 3086
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
    "update-construction-accumulation-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the accumulation type.
                 * @example 3086
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.accumulation-type"] & {
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
    "list-construction-employee-position": {
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
    "create-construction-employee-position": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Employee position to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.employee-position"] & components["schemas"]["construction-employee-positionRequiredProperties"];
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
    "get-construction-employee-position-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee position.
                 * @example 41
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
                        "ia::result"?: components["schemas"]["objects.construction.employee-position"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-employee-position-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee position.
                 * @example 41
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
    "update-construction-employee-position-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the employee position.
                 * @example 41
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.employee-position"] & {
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
    "list-construction-labor-class": {
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
    "create-construction-labor-class": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Labor class to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.labor-class"] & components["schemas"]["construction-labor-classRequiredProperties"];
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
    "get-construction-labor-class-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the labor class.
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
                        "ia::result"?: components["schemas"]["objects.construction.labor-class"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-labor-class-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the labor class.
                 * @example 23
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
    "update-construction-labor-class-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the labor class.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.labor-class"] & {
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
    "list-construction-labor-shift": {
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
    "create-construction-labor-shift": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Labor shift to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.labor-shift"] & components["schemas"]["construction-labor-shiftRequiredProperties"];
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
    "get-construction-labor-shift-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the labor shift.
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
                        "ia::result"?: components["schemas"]["objects.construction.labor-shift"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-labor-shift-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the labor shift.
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
    "update-construction-labor-shift-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the labor shift.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.labor-shift"] & {
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
    "list-construction-labor-union": {
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
    "create-construction-labor-union": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Labor union to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.labor-union"] & components["schemas"]["construction-labor-unionRequiredProperties"];
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
    "get-construction-labor-union-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the labor union.
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
                        "ia::result"?: components["schemas"]["objects.construction.labor-union"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-labor-union-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the labor union.
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
    "update-construction-labor-union-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the labor union.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.labor-union"] & {
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
    "list-construction-ap-releasable-retainage": {
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
    "get-construction-ap-releasable-retainage-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the AP releasable retainage.
                 * @example 195
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
                        "ia::result"?: components["schemas"]["objects.construction.ap-releasable-retainage"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-ap-retainage-release": {
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
    "create-construction-ap-retainage-release": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description AP retainage release object to create. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.ap-retainage-release"] & components["schemas"]["construction-ap-retainage-releaseRequiredProperties"];
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
    "get-construction-ap-retainage-release-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an AP retainage release.
                 * @example 195
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
                        "ia::result"?: components["schemas"]["objects.construction.ap-retainage-release"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-ap-retainage-release-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an AP retainage release.
                 * @example 195
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
    "update-construction-ap-retainage-release-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an AP retainage release.
                 * @example 195
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.ap-retainage-release"] & Record<string, never>;
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
    "list-construction-ap-retainage-release-line": {
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
    "get-construction-ap-retainage-release-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the AP retainage release line.
                 * @example 7
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
                        "ia::result"?: components["schemas"]["objects.construction.ap-retainage-release-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-ar-releasable-retainage": {
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
    "get-construction-ar-releasable-retainage-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the AR releasable retainage.
                 * @example 2902
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
                        "ia::result"?: components["schemas"]["objects.construction.ar-releasable-retainage"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-ar-retainage-release": {
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
    "create-construction-ar-retainage-release": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Updated */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.ar-retainage-release"] & components["schemas"]["construction-ar-retainage-releaseRequiredProperties"];
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
    "get-construction-ar-retainage-release-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the AR retainage release.
                 * @example 60
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
                        "ia::result"?: components["schemas"]["objects.construction.ar-retainage-release"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-ar-retainage-release-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the AR retainage release.
                 * @example 60
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
    "update-construction-ar-retainage-release-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the AR retainage release.
                 * @example 60
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.ar-retainage-release"] & Record<string, never>;
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
    "list-construction-ar-retainage-release-line": {
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
    "get-construction-ar-retainage-release-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the AR retainage release line.
                 * @example 2902
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
                        "ia::result"?: components["schemas"]["objects.construction.ar-retainage-release-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-primary-document-detail": {
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
    "get-construction-primary-document-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the primary document detail.
                 * @example 151-123-123
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
                        "ia::result"?: components["schemas"]["objects.construction.primary-document-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-primary-document-summary": {
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
    "get-construction-primary-document-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the primary document summary.
                 * @example 90
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
                        "ia::result"?: components["schemas"]["objects.construction.primary-document-summary"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-primary-document-accounts-payable-bill": {
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
    "get-construction-primary-document-accounts-payable-bill-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the primary document AP bill.
                 * @example 151-123-123
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
                        "ia::result"?: components["schemas"]["objects.construction.primary-document-accounts-payable-bill"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-primary-document-accounts-payable-payment": {
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
    "get-construction-primary-document-accounts-payable-payment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the primary document AP payment.
                 * @example 151-123-123
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
                        "ia::result"?: components["schemas"]["objects.construction.primary-document-accounts-payable-payment"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-primary-document-retainage-release": {
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
    "get-construction-primary-document-retainage-release-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the primary document retainage release.
                 * @example 151-123-123
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
                        "ia::result"?: components["schemas"]["objects.construction.primary-document-retainage-release"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-compliance-record": {
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
    "create-construction-compliance-record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.compliance-record"] & components["schemas"]["construction-compliance-recordRequiredProperties"];
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
    "get-construction-compliance-record-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance record.
                 * @example 34
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
                        "ia::result"?: components["schemas"]["objects.construction.compliance-record"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-compliance-record-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance record.
                 * @example 34
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
    "update-construction-compliance-record-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance record.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.compliance-record"] & {
                    readonly documentHeader?: unknown;
                    readonly isVoided?: unknown;
                    readonly overrideNotification?: unknown;
                    readonly isSystemGenerated?: unknown;
                    readonly bill?: unknown;
                    readonly complianceDefinition?: unknown;
                    readonly complianceType?: unknown;
                    readonly documentType?: unknown;
                    readonly primaryDocument?: unknown;
                    readonly vendor?: unknown;
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
    "list-construction-compliance-type": {
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
    "create-construction-compliance-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.compliance-type"] & components["schemas"]["construction-compliance-typeRequiredProperties"];
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
    "get-construction-compliance-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the compliance type.
                 * @example 34
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
                        "ia::result"?: components["schemas"]["objects.construction.compliance-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-compliance-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the compliance type.
                 * @example 34
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
    "update-construction-compliance-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the compliance type.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.compliance-type"] & {
                    readonly id?: unknown;
                    readonly complianceDefinition?: unknown;
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
    "list-construction-compliance-definition": {
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
    "create-construction-compliance-definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.compliance-definition"] & components["schemas"]["construction-compliance-definitionRequiredProperties"];
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
    "get-construction-compliance-definition-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance definition.
                 * @example 34
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
                        "ia::result"?: components["schemas"]["objects.construction.compliance-definition"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-compliance-definition-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance definition.
                 * @example 34
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
    "update-construction-compliance-definition-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance definition.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.compliance-definition"] & {
                    readonly id?: unknown;
                    readonly category?: unknown;
                    readonly trackBy?: unknown;
                    readonly generateForEach?: unknown;
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
    "list-construction-compliance-definition-association": {
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
    "get-construction-compliance-definition-association-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance definition association.
                 * @example 34
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
                        "ia::result"?: components["schemas"]["objects.construction.compliance-definition-association"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-work-order": {
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
    "create-construction-work-order": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.work-order"] & components["schemas"]["construction-work-orderRequiredProperties"];
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
    "get-construction-work-order-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order.
                 * @example 18
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
                        "ia::result"?: components["schemas"]["objects.construction.work-order"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-work-order-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order.
                 * @example 18
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
    "update-construction-work-order-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order.
                 * @example 18
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.work-order"] & {
                    readonly key?: unknown;
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
    "list-construction-work-order-type": {
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
    "create-construction-work-order-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.work-order-type"] & components["schemas"]["construction-work-order-typeRequiredProperties"];
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
    "get-construction-work-order-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order type.
                 * @example 11
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
                        "ia::result"?: components["schemas"]["objects.construction.work-order-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-work-order-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order type.
                 * @example 11
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
    "update-construction-work-order-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order type.
                 * @example 11
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.work-order-type"] & {
                    readonly key?: unknown;
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
    "list-construction-work-order-call-type": {
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
    "create-construction-work-order-call-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.work-order-call-type"] & components["schemas"]["construction-work-order-call-typeRequiredProperties"];
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
    "get-construction-work-order-call-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order call type.
                 * @example 11
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
                        "ia::result"?: components["schemas"]["objects.construction.work-order-call-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-work-order-call-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order call type.
                 * @example 11
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
    "update-construction-work-order-call-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order call type.
                 * @example 11
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.work-order-call-type"] & {
                    readonly key?: unknown;
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
    "list-construction-work-order-state": {
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
    "create-construction-work-order-state": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.work-order-state"] & components["schemas"]["construction-work-order-stateRequiredProperties"];
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
    "get-construction-work-order-state-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order state.
                 * @example 11
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
                        "ia::result"?: components["schemas"]["objects.construction.work-order-state"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-work-order-state-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order state.
                 * @example 11
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
    "update-construction-work-order-state-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order state.
                 * @example 11
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.work-order-state"] & {
                    readonly key?: unknown;
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
    "list-construction-work-order-problem-code": {
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
    "create-construction-work-order-problem-code": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.work-order-problem-code"] & components["schemas"]["construction-work-order-problem-codeRequiredProperties"];
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
    "get-construction-work-order-problem-code-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order problem code.
                 * @example 11
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
                        "ia::result"?: components["schemas"]["objects.construction.work-order-problem-code"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-work-order-problem-code-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order problem code.
                 * @example 11
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
    "update-construction-work-order-problem-code-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the work order problem code.
                 * @example 11
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.work-order-problem-code"] & {
                    readonly key?: unknown;
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
    "list-construction-forecasting-wip-setup": {
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
    "create-construction-forecasting-wip-setup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates a new WIP setup. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction-forecasting.wip-setup"] & components["schemas"]["wip-setup-required-properties"];
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
    "get-construction-forecasting-wip-setup-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP setup.
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
                        "ia::result"?: components["schemas"]["objects.construction-forecasting.wip-setup"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-construction-forecasting-wip-setup-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP setup.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction-forecasting.wip-setup"];
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
    "list-construction-forecasting-wip-setup-account": {
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
    "create-construction-forecasting-wip-setup-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates a new WIP setup account. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction-forecasting.wip-setup-account"] & components["schemas"]["construction-forecasting-wip-setup-accountRequiredProperties"];
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
    "get-construction-forecasting-wip-setup-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP setup account.
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
                        "ia::result"?: components["schemas"]["objects.construction-forecasting.wip-setup-account"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-forecasting-wip-setup-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP setup account.
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
    "update-construction-forecasting-wip-setup-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP setup account.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction-forecasting.wip-setup-account"];
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
    "list-construction-forecasting-wip-project": {
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
    "create-construction-forecasting-wip-project": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction-forecasting.wip-project"] & components["schemas"]["construction-forecasting-wip-project-required-properties"];
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
        };
    };
    "get-construction-forecasting-wip-project-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP project.
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
                        "ia::result"?: components["schemas"]["objects.construction-forecasting.wip-project"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-construction-forecasting-wip-project-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP project.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction-forecasting.wip-project"] & {
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
    "list-construction-forecasting-wip-forecast-detail": {
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
    "get-construction-forecasting-wip-forecast-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP forecast detail.
                 * @example 21
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
                        "ia::result"?: components["schemas"]["objects.construction-forecasting.wip-forecast-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-construction-forecasting-wip-forecast-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP forecast detail.
                 * @example 21
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction-forecasting.wip-forecast-detail"] & {
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
    "list-construction-forecasting-wip-project-manager-forecast": {
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
    "create-construction-forecasting-wip-project-manager-forecast": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction-forecasting.wip-project-manager-forecast"] & components["schemas"]["construction-forecasting-wip-project-manager-forecastRequiredProperties"];
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
        };
    };
    "get-construction-forecasting-wip-project-manager-forecast-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the WIP project manager forecast.
                 * @example 33
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
                        "ia::result"?: components["schemas"]["objects.construction-forecasting.wip-project-manager-forecast"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-forecasting-wip-project-manager-forecast-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the WIP project manager forecast.
                 * @example 33
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
    "update-construction-forecasting-wip-project-manager-forecast-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the WIP project manager forecast.
                 * @example 33
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction-forecasting.wip-project-manager-forecast"];
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
    "list-construction-forecasting-wip-target-project": {
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
    "get-construction-forecasting-wip-target-project-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the WIP target project.
                 * @example 635
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
                        "ia::result"?: components["schemas"]["objects.construction-forecasting.wip-target-project"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-construction-forecasting-wip-target-project-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the WIP target project.
                 * @example 635
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction-forecasting.wip-target-project"] & {
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
    "list-construction-forecasting-wip-project-setting": {
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
    "create-construction-forecasting-wip-project-setting": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates a new WIP project setting. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction-forecasting.wip-project-setting"] & components["schemas"]["construction-forecasting-wip-project-settingRequiredProperties"];
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
    "get-construction-forecasting-wip-project-setting-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the WIP project setting.
                 * @example 10
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
                        "ia::result"?: components["schemas"]["objects.construction-forecasting.wip-project-setting"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-forecasting-wip-project-setting-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the WIP project setting.
                 * @example 10
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
    "update-construction-forecasting-wip-project-setting-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the WIP project setting.
                 * @example 10
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction-forecasting.wip-project-setting"] & {
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
    "get-construction-forecasting-wip-project-calculate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.construction-forecasting.wip-project-calculate-request"];
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
                        "ia::result"?: components["schemas"]["services.construction-forecasting.wip-project-calculate-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-construction-forecasting-wip-period": {
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
    "create-construction-forecasting-wip-period": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new WIP period. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction-forecasting.wip-period"] & components["schemas"]["wip-period-required-properties"];
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
    "get-construction-forecasting-wip-period-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP period.
                 * @example 1
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
                        "ia::result"?: components["schemas"]["objects.construction-forecasting.wip-period"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-forecasting-wip-period-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP period.
                 * @example 1
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
    "update-construction-forecasting-wip-period-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the WIP period.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction-forecasting.wip-period"] & {
                    readonly id?: unknown;
                    readonly periodName?: unknown;
                    readonly periodStartDate?: unknown;
                    readonly periodEndDate?: unknown;
                    readonly createdFromEntity?: unknown;
                    readonly assignedEntity?: unknown;
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
    "get-construction-forecasting-wip-period-can-post": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.construction-forecasting.wip-period-request"];
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
                        "ia::result"?: components["schemas"]["services.construction-forecasting.wip-period-can-post-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "generate-construction-forecasting-wip-period": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.construction-forecasting.wip-period-generate-request"];
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
                        "ia::result"?: components["schemas"]["services.construction-forecasting.wip-period-refresh-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-construction-forecasting-wip-period-prior-periods": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.construction-forecasting.wip-period-prior-periods-request"];
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
                        "ia::result"?: components["schemas"]["services.construction-forecasting.wip-period-prior-periods-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-construction-forecasting-wip-period-refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.construction-forecasting.wip-period-refresh-request"];
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
                        "ia::result"?: components["schemas"]["services.construction-forecasting.wip-period-refresh-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-construction-forecasting-wip-period-get-warnings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get warnings for a WIP period. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.construction-forecasting.wip-period-request"];
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
                        "ia::result"?: components["schemas"]["services.construction-forecasting.wip-period-validate-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-construction-forecasting-wip-reporting-period-get-available": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["services.construction-forecasting.wip-reporting-period-request"];
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
                        "ia::result"?: components["schemas"]["services.construction-forecasting.wip-reporting-period-get-available-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-construction-forecasting-wip-reporting-period-get-next": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["services.construction-forecasting.wip-reporting-period-request"];
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
                        "ia::result"?: components["schemas"]["services.construction-forecasting.wip-reporting-period-get-next-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-construction-forecasting-wip-journal-entry-history-key": {
        parameters: {
            query: {
                /**
                 * @description The key for the WIP period.
                 * @example 11
                 */
                wipPeriodKey: string;
            };
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
                        "ia::result"?: components["schemas"]["services.construction-forecasting.wip-journal-entry-history-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "post-construction-forecasting-wip-journal-generate-preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.construction-forecasting.wip-journal-request"];
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
                        "ia::result"?: components["schemas"]["services.construction-forecasting.wip-journal-generate-preview-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-construction-forecasting-wip-journal-post-period": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.construction-forecasting.wip-journal-request"];
            };
        };
        responses: {
            /** @description Executed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["400error"];
        };
    };
    "create-construction-forecasting-wip-journal-revert-post": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["wip-journal-revert-post-request"];
            };
        };
        responses: {
            /** @description Executed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["400error"];
        };
    };
    "get-construction-forecasting-wip-rollup-project-find-rollup-projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.construction-forecasting.wip-rollup-project-wip-rollup-projects-request"];
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
                        "ia::result"?: components["schemas"]["services.construction-forecasting.wip-rollup-project-wip-rollup-projects-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-construction-forecasting-wip-rollup-project-include-as-wip": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.construction-forecasting.wip-rollup-project-bulk-action-request"];
            };
        };
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
    "update-construction-forecasting-wip-rollup-project-exclude-from-wip": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.construction-forecasting.wip-rollup-project-bulk-action-request"];
            };
        };
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
    "update-construction-forecasting-wip-rollup-project-include-in-project": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.construction-forecasting.wip-rollup-project-bulk-action-request"];
            };
        };
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
    "update-construction-forecasting-wip-rollup-project-include-in-root": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.construction-forecasting.wip-rollup-project-bulk-action-request"];
            };
        };
        responses: {
            /** @description Successfully included projects in their root projects for WIP schedules */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["400error"];
        };
    };
}

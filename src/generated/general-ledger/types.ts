// Generated from spec/general-ledger.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/general-ledger/account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List accounts
         * @description Returns a collection with a key, ID, and link for each account. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find accounts that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-account"];
        put?: never;
        /**
         * Create an account
         * @description Creates a new General Ledger account.
         */
        post: operations["create-general-ledger-account"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account.
                 * @example 411
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account
         * @description Returns detailed information for a specified account.
         */
        get: operations["get-general-ledger-account-key"];
        put?: never;
        post?: never;
        /**
         * Delete an account
         * @description Deletes an account. You cannot delete an account if the account is used in a book transaction. Deleted accounts cannot be recovered.
         */
        delete: operations["delete-general-ledger-account-key"];
        options?: never;
        head?: never;
        /**
         * Update an account
         * @description Updates an existing account by setting field values. Any fields not provided remain unchanged.
         *
         *     An account `id` (account number) can only be changed if the General Ledger is configured to allow changes to account numbers and by users who have permission to change financial account numbers. Changing account numbers affects important aspects of Sage Intacct such as reports, data imports, historical information, and automation.
         */
        patch: operations["update-general-ledger-account-key"];
        trace?: never;
    };
    "/objects/general-ledger/account-category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account categories
         * @description Returns a collection with a key, ID, and link for each account category.
         */
        get: operations["list-general-ledger-account-category"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-category/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account category.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account category
         * @description Returns detailed information for a specified account category.
         */
        get: operations["get-general-ledger-account-category-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-range": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account ranges
         * @description Returns a collection with a key, ID, and link for each account range.
         */
        get: operations["list-general-ledger-account-range"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-range/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account range.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account range
         * @description Returns detailed information for a specified account range.
         */
        get: operations["get-general-ledger-account-range-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-name-entity-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account name entity maps
         * @description Returns a collection with a key, ID, and link for each account name entity map. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-account-title-by-location"];
        put?: never;
        /**
         * Create an account name entity map
         * @description Creates a new account name entity map.
         */
        post: operations["create-account-title-by-location"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-name-entity-map/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account name entity map.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account name entity map
         * @description Returns detailed information for a specified account name entity map.
         */
        get: operations["get-account-title-by-location-key"];
        put?: never;
        post?: never;
        /**
         * Delete an account name entity map
         * @description Deletes an account name entity map.
         */
        delete: operations["delete-account-title-by-location-key"];
        options?: never;
        head?: never;
        /**
         * Update an account name entity map
         * @description Updates an existing account name entity map by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-account-title-by-location-key"];
        trace?: never;
    };
    "/objects/general-ledger/account-allocation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account allocations
         * @description Returns a collection with a key, ID, and link for each account allocation. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-general-ledger-account-allocation"];
        put?: never;
        /**
         * Create an account allocation
         * @description Creates a new account allocation.
         */
        post: operations["create-general-ledger-account-allocation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-allocation/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account allocation.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account allocation
         * @description Returns detailed information for a specified account allocation.
         */
        get: operations["get-general-ledger-account-allocation-key"];
        put?: never;
        post?: never;
        /**
         * Delete an account allocation
         * @description Deletes an account allocation.
         */
        delete: operations["delete-general-ledger-account-allocation-key"];
        options?: never;
        head?: never;
        /**
         * Update an account allocation
         * @description Updates an existing account allocation by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-account-allocation-key"];
        trace?: never;
    };
    "/objects/general-ledger/account-allocation-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account allocation groups
         * @description Returns a collection with a key, ID, and link for each account allocation group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find allocation groups that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-account-allocation-group"];
        put?: never;
        /**
         * Create an account allocation group
         * @description Creates a new account allocation group.
         */
        post: operations["create-general-ledger-account-allocation-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-allocation-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account allocation group.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account allocation group
         * @description Returns detailed information for a specified account allocation group.
         */
        get: operations["get-general-ledger-account-allocation-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete an account allocation group
         * @description Deletes an account allocation group.
         */
        delete: operations["delete-general-ledger-account-allocation-group-key"];
        options?: never;
        head?: never;
        /**
         * Update an account allocation group
         * @description Updates an existing account allocation group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-account-allocation-group-key"];
        trace?: never;
    };
    "/objects/general-ledger/account-allocation-group-member": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account allocation group members
         * @description Returns a collection with a key, ID, and link for each group member. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find allocation group members that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-account-allocation-group-member"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-allocation-group-member/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account allocation group member.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account allocation group member
         * @description Returns detailed information for a specified account allocation group member.
         */
        get: operations["get-general-ledger-account-allocation-group-member-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-allocation-run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account allocation runs
         * @description Returns a collection with a key, ID, and link for each account allocation run. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-general-ledger-account-allocation-run"];
        put?: never;
        /**
         * Create an account allocation run
         * @description Creates a new account allocation run.
         */
        post: operations["create-general-ledger-account-allocation-run"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-allocation-run/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account allocation run.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account allocation run
         * @description Returns detailed information for a specified account allocation run.
         */
        get: operations["get-general-ledger-account-allocation-run-key"];
        put?: never;
        post?: never;
        /**
         * Delete an account allocation run
         * @description Deletes an account allocation run.
         */
        delete: operations["delete-general-ledger-account-allocation-run-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-allocation-source": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account allocation sources
         * @description Returns a collection with a key, ID, and link for each account allocation source.
         */
        get: operations["list-general-ledger-account-allocation-source"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-allocation-source/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account allocation source.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account allocation source
         * @description Returns detailed information for a specified account allocation source.
         */
        get: operations["get-general-ledger-account-allocation-source-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update an account allocation source
         * @description Updates an existing account allocation source by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-account-allocation-source-key"];
        trace?: never;
    };
    "/objects/general-ledger/account-allocation-basis": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account allocation basis objects
         * @description Returns a collection with a key, ID, and link for each account allocation basis.
         */
        get: operations["list-general-ledger-account-allocation-basis"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-allocation-basis/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account allocation basis.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account allocation basis
         * @description Returns detailed information for a specified account allocation basis.
         */
        get: operations["get-general-ledger-account-allocation-basis-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update an account allocation basis
         * @description Updates an existing account allocation basis object by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-account-allocation-basis-key"];
        trace?: never;
    };
    "/objects/general-ledger/account-allocation-target": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account allocation targets
         * @description Returns a collection with a key, ID, and link for each account allocation target.
         */
        get: operations["list-general-ledger-account-allocation-target"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-allocation-target/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account allocation target.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account allocation target
         * @description Returns detailed information for a specified account allocation target.
         */
        get: operations["get-general-ledger-account-allocation-target-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update an account allocation target
         * @description Updates an existing account allocation target by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-account-allocation-target-key"];
        trace?: never;
    };
    "/objects/general-ledger/account-allocation-reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account allocation reversals
         * @description Returns a collection with a key, ID, and link for each account allocation reversal.
         */
        get: operations["list-general-ledger-account-allocation-reverse"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-allocation-reverse/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account allocation reversal.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account allocation reversal
         * @description Returns detailed information for a specified account allocation reversal.
         */
        get: operations["get-general-ledger-account-allocation-reverse-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update an account allocation reversal
         * @description Updates an existing account allocation reversal by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-account-allocation-reverse-key"];
        trace?: never;
    };
    "/workflows/general-ledger/account-allocation-run/restart": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Restart an account allocation run
         * @description Restarts an `inProgress` account allocation run. When restarted, the account allocation run is set to `queued` and the allocation process starts from the beginning.
         */
        post: operations["restart-general-ledger-account-allocation-run"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/recurring-account-allocation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List recurring account allocations
         * @description Returns a collection with a key, ID, and link for each recurring account allocation. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-general-ledger-recurring-account-allocation"];
        put?: never;
        /**
         * Create a recurring account allocation
         * @description Creates a new recurring account allocation.
         */
        post: operations["create-general-ledger-recurring-account-allocation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/recurring-account-allocation/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring account allocation.
                 * @example 2354
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a recurring account allocation
         * @description Returns detailed information for a specified recurring account allocation.
         */
        get: operations["get-general-ledger-recurring-account-allocation-key"];
        put?: never;
        post?: never;
        /**
         * Delete a recurring account allocation
         * @description Deletes a recurring account allocation.
         */
        delete: operations["delete-general-ledger-recurring-account-allocation-key"];
        options?: never;
        head?: never;
        /**
         * Update a recurring account allocation
         * @description Updates an existing recurring account allocation by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-recurring-account-allocation-key"];
        trace?: never;
    };
    "/objects/general-ledger/account-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account groups
         * @description Returns a collection with a key, ID, and link for each account group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find account groups that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-account-group"];
        put?: never;
        /**
         * Create an account group
         * @description Creates a new account group.
         */
        post: operations["create-general-ledger-account-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account group
         * @description Returns detailed information for a specified account group.
         */
        get: operations["get-general-ledger-account-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete an account group
         * @description Deletes an account group.
         */
        delete: operations["delete-general-ledger-account-group-key"];
        options?: never;
        head?: never;
        /**
         * Update an account group
         * @description Updates an existing account group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-account-group-key"];
        trace?: never;
    };
    "/objects/general-ledger/account-group-purpose": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account group purposes
         * @description Returns a collection with a key, ID, and link for each purpose. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find account group purposes that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-account-group-purpose"];
        put?: never;
        /**
         * Create an account group purpose
         * @description Creates a new account group purpose.
         */
        post: operations["create-general-ledger-account-group-purpose"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-group-purpose/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account group purpose.
                 * @example 3906
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account group purpose
         * @description Returns detailed information for a specified account group purpose.
         */
        get: operations["get-general-ledger-account-group-purpose-key"];
        put?: never;
        post?: never;
        /**
         * Delete an account group purpose
         * @description Deletes an account group purpose.
         */
        delete: operations["delete-general-ledger-account-group-purpose-key"];
        options?: never;
        head?: never;
        /**
         * Update an account group purpose
         * @description Updates an existing account group purpose by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-account-group-purpose-key"];
        trace?: never;
    };
    "/objects/general-ledger/account-group-member": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account group members
         * @description Returns a collection with a key, ID, and link for each account group member.
         */
        get: operations["list-general-ledger-account-group-member"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-group-member/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account group member.
                 * @example 201
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account group member
         * @description Returns detailed information for a specified account group member.
         */
        get: operations["get-general-ledger-account-group-member-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-group-category-member": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account group category members
         * @description Returns a collection with a key, ID, and link for each account group category member.
         */
        get: operations["list-general-ledger-account-group-category-member"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-group-category-member/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account group category member.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account group category member
         * @description Returns detailed information for a specified account group category member.
         */
        get: operations["get-general-ledger-account-group-category-member-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-group-computation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List computation account groups
         * @description Returns a collection with a key, ID, and link for each computation account group.
         */
        get: operations["list-general-ledger-account-group-computation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-group-computation/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the computation account group.
                 * @example 201
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a computation account group
         * @description Returns detailed information for a specified computation account group.
         */
        get: operations["get-general-ledger-account-group-computation-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-group-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account group maps
         * @description Returns a collection with a key, ID, and link for each account group map. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find account group maps that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-account-group-map"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/account-group-map/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account group map.
                 * @example 132
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account group map
         * @description Returns detailed information for a specified account group map.
         */
        get: operations["get-general-ledger-account-group-map-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/accounting-sequence": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List accounting sequences
         * @description Returns a collection with a key, ID, and link for each accounting sequence. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-general-ledger-accounting-sequence"];
        put?: never;
        /**
         * Create an accounting sequence
         * @description Creates a new accounting sequence.
         */
        post: operations["create-general-ledger-accounting-sequence"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/accounting-sequence/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the accounting sequence.
                 * @example 132
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an accounting sequence
         * @description Returns detailed information for a specified accounting sequence.
         */
        get: operations["get-general-ledger-accounting-sequence-key"];
        put?: never;
        post?: never;
        /**
         * Delete an accounting sequence
         * @description Deletes an accounting sequence.
         */
        delete: operations["delete-general-ledger-accounting-sequence-key"];
        options?: never;
        head?: never;
        /**
         * Update an accounting sequence
         * @description Updates an existing accounting sequence by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-accounting-sequence-key"];
        trace?: never;
    };
    "/objects/general-ledger/accounting-sequence-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List accounting sequence lines
         * @description Returns a collection with a key, ID, and link for each accounting sequence line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-general-ledger-accounting-sequence-line"];
        put?: never;
        /**
         * Create an accounting sequence line
         * @description Creates a new accounting sequence line.
         */
        post: operations["create-general-ledger-accounting-sequence-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/accounting-sequence-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the accounting sequence line.
                 * @example 132
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an accounting sequence line
         * @description Returns detailed information for a specified accounting sequence line.
         */
        get: operations["get-general-ledger-accounting-sequence-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete an accounting sequence line
         * @description Deletes an accounting sequence line.
         */
        delete: operations["delete-general-ledger-accounting-sequence-line-key"];
        options?: never;
        head?: never;
        /**
         * Update an accounting sequence line
         * @description Updates an existing accounting sequence line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-accounting-sequence-line-key"];
        trace?: never;
    };
    "/objects/general-ledger/budget": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List budgets
         * @description Returns a collection with a key, ID, and link for each budget. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find budgets that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-budget"];
        put?: never;
        /**
         * Create a budget
         * @description Creates a new budget. The API does not compute amounts for calculated budgets, so an `amount` must be provided for each budget detail object.
         */
        post: operations["create-general-ledger-budget"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/budget/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the budget.
                 * @example 291
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a budget
         * @description Returns detailed information for a specified budget.
         */
        get: operations["get-general-ledger-budget-key"];
        put?: never;
        post?: never;
        /**
         * Delete budget
         * @description Deletes a budget. You cannot delete the default budget or any budget that is being used by a financial report.
         *
         *     Carefully consider the implications before you delete a budget. After you delete a budget, you will no longer be able to use its data to create future budgets. Deleted budgets can no longer be used in financial reports.
         */
        delete: operations["delete-general-ledger-budget-key"];
        options?: never;
        head?: never;
        /**
         * Update a budget
         * @description Updates an existing budget and its associated budget details by setting field values. Any fields not provided remain unchanged.
         *
         *     * To update an existing budget detail, provide the `key` value for the object.
         *     * To add new details to a budget, do not include a `key` value for the budget detail object.
         */
        patch: operations["update-general-ledger-budget-key"];
        trace?: never;
    };
    "/objects/general-ledger/budget-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List budget details
         * @description Returns a collection with a key, ID, and link for each budget detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find budget details that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-budget-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/budget-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the budget detail.
                 * @example 153
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get budget details
         * @description Returns detailed information for a specified budget detail.
         */
        get: operations["get-general-ledger-budget-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List journals
         * @description Returns up to 100 journals from the collection with a key, ID, and link for each journal. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find journals that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-journal"];
        put?: never;
        /**
         * Create a journal
         * @description Creates a new journal object. New journals are immediately available for users to enter journal entries through the General Ledger. They are also available to be used in the configuration of other applications. For example, you might create a Labor Cost journal to be used by the Projects application.
         */
        post: operations["create-general-ledger-journal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/journal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the journal.
                 * @example 411
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a journal
         * @description Returns detailed information for a specified journal.
         */
        get: operations["get-general-ledger-journal-key"];
        put?: never;
        post?: never;
        /**
         * Delete a journal
         * @description Deletes a journal. You can only delete a journal if it does not have any transactions in it.  Deleted journals cannot be recovered.
         */
        delete: operations["delete-general-ledger-journal-key"];
        options?: never;
        head?: never;
        /**
         * Update a journal
         * @description Updates an existing journal by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-journal-key"];
        trace?: never;
    };
    "/objects/general-ledger/user-defined-book": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List user-defined books
         * @description Returns a collection with a key, ID, and link for each user-defined book. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find books that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-user-defined-book"];
        put?: never;
        /**
         * Create a user-defined book
         * @description Creates a new user-defined book.
         */
        post: operations["create-general-ledger-user-defined-book"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/user-defined-book/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the user-defined book
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a user-defined book
         * @description Returns complete details for a specified user-defined book.
         */
        get: operations["get-general-ledger-user-defined-book-key"];
        put?: never;
        post?: never;
        /**
         * Delete a user-defined book
         * @description Deletes a user-defined book. You cannot delete a user-defined book if it is in use.
         */
        delete: operations["delete-general-ledger-user-defined-book-key"];
        options?: never;
        head?: never;
        /**
         * Update a user-defined book
         * @description Updates an existing user-defined book by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-user-defined-book-key"];
        trace?: never;
    };
    "/objects/general-ledger/user-defined-journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List user-defined journals
         * @description Returns a collection of user-defined journals with a key, ID, and link for each journal. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find journals that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-user-defined-journal"];
        put?: never;
        /**
         * Create a user-defined journal
         * @description Creates a new user-defined journal
         */
        post: operations["create-general-ledger-user-defined-journal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/user-defined-journal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a user-defined journal.
                 * @example 46
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a user-defined journal
         * @description Returns detailed information for a specified user-defined journal.
         */
        get: operations["get-general-ledger-user-defined-journal-key"];
        put?: never;
        post?: never;
        /**
         * Delete a user-defined journal
         * @description Deletes a user-defined journal. You can only delete a journal if there are no transactions in it.
         */
        delete: operations["delete-general-ledger-user-defined-journal-key"];
        options?: never;
        head?: never;
        /**
         * Update a user-defined journal
         * @description Updates an existing user-defined journal by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-user-defined-journal-key"];
        trace?: never;
    };
    "/objects/general-ledger/journal-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List journal entries
         * @description Returns a collection of journal entries with a key, ID, and link for each entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find journal entries that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-journal-entry"];
        put?: never;
        /**
         * Create a journal entry
         * @description Creates a new journal entry. When creating a journal entry, you can either post it immediately or save it as a draft for review. Draft entries can be updated before posting, but all required information must be provided. To post a journal entry, debits and credits must balance, and all required details must be entered.
         *
         *     Note: The only valid values when creating a new entry are `posted` (default, system-defined state), and `draft`. Only populate the state field when creating a `draft` entry.
         */
        post: operations["create-general-ledger-journal-entry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/journal-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the journal entry.
                 * @example 132
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get journal entry
         * @description Returns detailed information for a specified journal entry.
         */
        get: operations["get-general-ledger-journal-entry-key"];
        put?: never;
        post?: never;
        /**
         * Delete a journal entry
         * @description Deletes a journal entry.
         */
        delete: operations["delete-general-ledger-journal-entry-key"];
        options?: never;
        head?: never;
        /**
         * Update a journal entry
         * @description Updates an existing journal entry by setting field values. Any fields not provided remain unchanged.
         *
         *     Note: When updating an existing journal entry, you cannot use this operation to change the `state` field.
         */
        patch: operations["update-general-ledger-journal-entry-key"];
        trace?: never;
    };
    "/objects/general-ledger/journal-entry-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List journal entry lines
         * @description Returns a collection of journal entry lines with a key, ID, and link for each entry line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find journal entry lines that meet certain criteria and to specify the properties that are returned.
         */
        get: operations["list-general-ledger-journal-entry-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/journal-entry-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the journal entry line.
                 * @example 132
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a journal entry line
         * @description Returns detailed information for a specified journal entry line.
         */
        get: operations["get-general-ledger-journal-entry-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a Journal entry line
         * @description Deletes a journal entry line.
         */
        delete: operations["delete-general-ledger-journal-entry-line-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/journal-entry-tax-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List journal entry tax entries
         * @description Returns a collection of journal entry tax entries with a key, ID, and link for each account.
         */
        get: operations["list-general-ledger-journal-entry-tax-entry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/journal-entry-tax-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the journal entry tax entry.
                 * @example 300
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a journal entry tax entry
         * @description Returns detailed information for a specified journal entry tax entry.
         */
        get: operations["get-general-ledger-journal-entry-tax-entry-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/journal-entry-txn-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List journal entry transaction templates
         * @description Returns a collection with a key, ID, and link for each journal entry transaction template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-general-ledger-journal-entry-txn-template"];
        put?: never;
        /**
         * Create a journal entry transaction template
         * @description Creates a new journal entry transaction template.
         */
        post: operations["create-general-ledger-journal-entry-txn-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/journal-entry-txn-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the GL journal entry transaction template.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a journal entry transaction template
         * @description Returns detailed information for a specified journal entry transaction template.
         */
        get: operations["get-general-ledger-journal-entry-txn-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a journal entry transaction template
         * @description Deletes a journal entry transaction template. A template cannot be deleted if it has been used to create transactions, or if it is a previous version of another template.
         */
        delete: operations["delete-general-ledger-journal-entry-txn-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a journal entry transaction template
         * @description Updates an existing journal entry transaction template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-journal-entry-txn-template-key"];
        trace?: never;
    };
    "/objects/general-ledger/journal-entry-txn-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List journal entry transaction template lines
         * @description Returns a collection with a key, ID, and link for each journal entry transaction template line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-general-ledger-journal-entry-txn-template-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/journal-entry-txn-template-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the GL journal entry transaction template line.
                 * @example 22
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a journal entry transaction template line
         * @description Returns detailed information for a specified journal entry transaction template line. To create, update, or delete lines, use the PATCH operation on the GL journal entry transaction template.
         */
        get: operations["get-general-ledger-journal-entry-txn-template-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a journal entry transaction template line
         * @description Deletes a journal entry transaction template line. A line cannot be deleted if it is the last remaining line on the template. Templates must have at least one line.
         */
        delete: operations["delete-general-ledger-journal-entry-txn-template-line-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/reporting-period": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List reporting periods
         * @description Returns a collection with a key, ID, and link for each period. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find reporting periods that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-reporting-period"];
        put?: never;
        /**
         * Create a reporting period
         * @description Creates a new reporting period.
         */
        post: operations["create-general-ledger-reporting-period"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/reporting-period/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting period.
                 * @example 240
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a reporting period
         * @description Returns detailed information for a specified reporting period.
         */
        get: operations["get-general-ledger-reporting-period-key"];
        put?: never;
        post?: never;
        /**
         * Delete a reporting period
         * @description Deletes a reporting period.
         */
        delete: operations["delete-general-ledger-reporting-period-key"];
        options?: never;
        head?: never;
        /**
         * Update a reporting period
         * @description Updates an existing reporting period by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-reporting-period-key"];
        trace?: never;
    };
    "/objects/general-ledger/adjustment-journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List adjustment journals
         * @description Returns a collection of adjustment journals with a key, ID, and link for each journal. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find journals that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-adjustment-journal"];
        put?: never;
        /**
         * Create an adjustment journal
         * @description Creates a new adjustment journal
         */
        post: operations["create-general-ledger-adjustment-journal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/adjustment-journal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the adjustment journal.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an adjustment journal
         * @description Returns detailed information for a specified adjustment journal.
         */
        get: operations["get-general-ledger-adjustment-journal-key"];
        put?: never;
        post?: never;
        /**
         * Delete an adjustment journal
         * @description Deletes an adjustment journal. You can only delete a journal if there are no transactions in it.
         */
        delete: operations["delete-general-ledger-adjustment-journal-key"];
        options?: never;
        head?: never;
        /**
         * Update an adjustment journal
         * @description Updates an existing adjustment journal by setting field values. Any field values not provided remain unchanged.
         */
        patch: operations["update-general-ledger-adjustment-journal-key"];
        trace?: never;
    };
    "/objects/general-ledger/gaap-adjustment-journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List GAAP adjustment journals
         * @description Returns a collection of GAAP adjustment journals with a key, ID, and link for each journal. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find journals that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-gaap-adjustment-journal"];
        put?: never;
        /**
         * Create a GAAP adjustment journal
         * @description Create a new GAAP adjustment journal.
         */
        post: operations["create-general-ledger-gaap-adjustment-journal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/gaap-adjustment-journal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a specified GAAP adjustment journal.
                 * @example 89
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get GAAP adjustment journal
         * @description Returns detailed information about a GAAP adjustment journal.
         */
        get: operations["get-general-ledger-gaap-adjustment-journal-key"];
        put?: never;
        post?: never;
        /**
         * Delete a GAAP adjustment journal
         * @description Deletes a GAAP adjustment journal. You can only delete a journal if there are no transactions in it.
         */
        delete: operations["delete-general-ledger-gaap-adjustment-journal-key"];
        options?: never;
        head?: never;
        /**
         * Update a GAAP adjustment journal
         * @description Updates an existing GAAP adjustment journal by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-gaap-adjustment-journal-key"];
        trace?: never;
    };
    "/objects/general-ledger/tax-adjustment-journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List tax adjustment journals
         * @description Returns a collection of tax adjustment journals with a key, ID, and link for each journal. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find journals that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-tax-adjustment-journal"];
        put?: never;
        /**
         * Create a tax adjustment journal
         * @description Creates a new tax adjustment journal.
         */
        post: operations["create-general-ledger-tax-adjustment-journal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/tax-adjustment-journal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the tax adjustment journal
                 * @example 44
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a tax adjustment journal
         * @description Returns details for a specified tax adjustment journal.
         */
        get: operations["get-general-ledger-tax-adjustment-journal-key"];
        put?: never;
        post?: never;
        /**
         * Delete a tax adjustment journal
         * @description Deletes a tax adjustment journal. You can only delete a journal if there are no transactions in it.
         */
        delete: operations["delete-general-ledger-tax-adjustment-journal-key"];
        options?: never;
        head?: never;
        /**
         * Update a tax adjustment journal
         * @description Updates an existing tax adjustment journal by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-tax-adjustment-journal-key"];
        trace?: never;
    };
    "/objects/general-ledger/statistical-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List statistical accounts
         * @description Returns a collection with a key, ID, and link for each account. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find statistical GL accounts that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-statistical-account"];
        put?: never;
        /**
         * Create a statistical account
         * @description Creates a new statistical account. You should assign a different account range to statistical accounts so that they are not inadvertently grouped with general ledger accounts. Statistical accounts can be consolidated similarly to general ledger accounts, if you have a consolidated structure of companies with subsidiaries.
         *
         *     Individual statistical accounts are typically rolled up into account groups for use in reports.
         */
        post: operations["create-statistical-account"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/statistical-account/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the statistical account.
                 * @example 439
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a statistical account
         * @description Returns detailed information for a specified statistical account.
         */
        get: operations["get-statistical-account-key"];
        put?: never;
        post?: never;
        /**
         * Delete a statistical account
         * @description Deletes a statistical account. Accounts used in a book transaction cannot be deleted.  Deleted accounts cannot be recovered.
         */
        delete: operations["delete-statistical-account-key"];
        options?: never;
        head?: never;
        /**
         * Update a statistical account
         * @description Updates an existing statistical account by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-statistical-account-key"];
        trace?: never;
    };
    "/objects/general-ledger/statistical-journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List statistical journals
         * @description Returns a collection with a key, ID, and link for each statistical journal. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find journals that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-statistical-journal"];
        put?: never;
        /**
         * Create a statistical journal
         * @description Creates a new statistical journal.
         */
        post: operations["create-general-ledger-statistical-journal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/statistical-journal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the statistical journal.
                 * @example 88
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a statistical Journal
         * @description Returns detailed information for a specified statistical journal.
         */
        get: operations["get-general-ledger-statistical-journal-key"];
        put?: never;
        post?: never;
        /**
         * Delete a statistical journal
         * @description Deletes a statistical journal. You can only delete a journal if there are no transactions in it.
         */
        delete: operations["delete-general-ledger-statistical-journal-key"];
        options?: never;
        head?: never;
        /**
         * Update a statistical journal
         * @description Updates an existing statistical journal by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-statistical-journal-key"];
        trace?: never;
    };
    "/objects/general-ledger/statistical-journal-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List statistical journal entries
         * @description Returns up to 100 statistical journal entries from the collection with a key, ID, and link for each entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find statistical journal entries that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-statistical-journal-entry"];
        put?: never;
        /**
         * Create a statistical journal entry
         * @description Creates a new statistical journal entry, you can either post the entry immediately or save as a draft for review. Draft journal entries can be updated before posting, but all required information must be provided to post.
         */
        post: operations["create-general-ledger-statistical-journal-entry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/statistical-journal-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the statistical journal entry.
                 * @example 132
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a statistical journal entry
         * @description Returns detailed information for a specified statistical journal entry.
         */
        get: operations["get-general-ledger-statistical-journal-entry-key"];
        put?: never;
        post?: never;
        /**
         * Delete a statistical journal entry
         * @description Deletes a statistical journal entry.
         */
        delete: operations["delete-general-ledger-statistical-journal-entry-key"];
        options?: never;
        head?: never;
        /**
         * Update a statistical journal entry
         * @description Updates an existing statistical journal entry by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-statistical-journal-entry-key"];
        trace?: never;
    };
    "/objects/general-ledger/statistical-journal-entry-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List statistical journal entry lines
         * @description Returns up to 100 statistical journal entry lines from the collection with a key, ID, and link for each entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find journal entry lines that meet certain criteria and to specify the properties that are returned.
         */
        get: operations["get-objects-statistical-journal-entry-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/statistical-journal-entry-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the statistical journal entry line item.
                 * @example 2647
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a statistical journal entry line item
         * @description Returns detailed information for a specified statistical journal entry line item.
         */
        get: operations["get-objects-statistical-journal-entry-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/statistical-adjustment-journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List statistical adjustment journals
         * @description Returns a collection with a key, ID, and link for each statistical adjustment journal. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find journals that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-statistical-adjustment-journal"];
        put?: never;
        /**
         * Create a statistical adjustment journal
         * @description Creates a new statistical adjustment journal.
         */
        post: operations["create-general-ledger-statistical-adjustment-journal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/statistical-adjustment-journal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the statistical adjustment journal.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a statistical adjustment journal
         * @description Returns detailed information for a specified statistical adjustment journal.
         */
        get: operations["get-general-ledger-statistical-adjustment-journal-key"];
        put?: never;
        post?: never;
        /**
         * Delete a statistical adjustment journal
         * @description Deletes a statistical adjustment journal.
         */
        delete: operations["delete-general-ledger-statistical-adjustment-journal-key"];
        options?: never;
        head?: never;
        /**
         * Update a statistical adjustment journal
         * @description Updates an existing statistical adjustment journal by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-statistical-adjustment-journal-key"];
        trace?: never;
    };
    "/objects/general-ledger/txn-allocation-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction allocation templates
         * @description Returns up to 100 transaction allocation templates from the collection with a key, ID, and link for each one. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find allocation templates that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-txn-allocation-template"];
        put?: never;
        /**
         * Create a transaction allocation template
         * @description Creates a new transaction allocation template, optionally including allocation template lines.
         */
        post: operations["create-general-ledger-txn-allocation-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/txn-allocation-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transaction allocation template.
                 * @example 2
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction allocation template
         * @description Returns detailed information for a specified transaction allocation template.
         */
        get: operations["get-general-ledger-txn-allocation-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transaction allocation template
         * @description Deletes a transaction allocation template.
         */
        delete: operations["delete-general-ledger-txn-allocation-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction allocation template
         * @description Updates an existing allocation template and template lines by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-txn-allocation-template-key"];
        trace?: never;
    };
    "/objects/general-ledger/txn-allocation-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction allocation template lines
         * @description Returns up to 100 transaction allocation template lines from the collection with a key, ID, and link for each one. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find allocation template lines that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-general-ledger-txn-allocation-template-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/txn-allocation-template-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transaction allocation template line.
                 * @example 209856
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction allocation template line
         * @description Returns detailed information for a specified transaction allocation template line.
         */
        get: operations["get-general-ledger-txn-allocation-template-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/financial-graph": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List financial graphs
         * @description Returns a collection with a key, ID, and link for each financial graph. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-general-ledger-financial-graph"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/financial-graph/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the financial graph.
                 * @example 2354
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a financial graph
         * @description Returns detailed information for a specified financial graph.
         */
        get: operations["get-general-ledger-financial-graph-key"];
        put?: never;
        post?: never;
        /**
         * Delete a financial graph
         * @description Deletes a financial graph.
         */
        delete: operations["delete-general-ledger-financial-graph-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/reporting-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List reporting accounts
         * @description Returns a collection with a key, ID, and link for each reporting account. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-general-ledger-reporting-account"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/reporting-account/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting account.
                 * @example 391
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a reporting account
         * @description Returns detailed information for a specified reporting account.
         */
        get: operations["get-general-ledger-reporting-account-key"];
        put?: never;
        post?: never;
        /**
         * Delete a reporting account
         * @description Deletes a reporting account.
         */
        delete: operations["delete-general-ledger-reporting-account-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/reporting-account-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List reporting account maps
         * @description Returns a collection with a key, ID, and link for each reporting account map. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-general-ledger-reporting-account-map"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/reporting-account-map/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting account map.
                 * @example 3
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a reporting account map
         * @description Returns detailed information for a specified reporting account map.
         */
        get: operations["get-general-ledger-reporting-account-map-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/reporting-account-set": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List reporting account sets
         * @description Returns a collection with a key, ID, and link for each reporting account set. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-general-ledger-reporting-account-set"];
        put?: never;
        /**
         * Create a reporting account set
         * @description Creates a new reporting account set.
         */
        post: operations["create-general-ledger-reporting-account-set"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/reporting-account-set/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting account set.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a reporting account set
         * @description Returns detailed information for a specified reporting account set.
         */
        get: operations["get-general-ledger-reporting-account-set-key"];
        put?: never;
        post?: never;
        /**
         * Delete a reporting account set
         * @description Deletes a reporting account set.
         */
        delete: operations["delete-general-ledger-reporting-account-set-key"];
        options?: never;
        head?: never;
        /**
         * Update a reporting account set
         * @description Updates an existing reporting account set by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-reporting-account-set-key"];
        trace?: never;
    };
    "/objects/general-ledger/reporting-account-set-permission": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List reporting account set permissions
         * @description Returns a collection with a key, ID, and link for each reporting account set permission object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-general-ledger-reporting-account-set-permission"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/reporting-account-set-permission/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting account set permission.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a reporting account set permission
         * @description Returns detailed information for a specified reporting account set permission.
         */
        get: operations["get-general-ledger-reporting-account-set-permission-key"];
        put?: never;
        post?: never;
        /**
         * Delete a reporting account set permission
         * @description Deletes a reporting account set permission.
         */
        delete: operations["delete-general-ledger-reporting-account-set-permission-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/report-audience": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List report audiences
         * @description Returns a collection with a key, ID, and link for each report audience. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-general-ledger-report-audience"];
        put?: never;
        /**
         * Create a report audience
         * @description Creates a new report audience.
         */
        post: operations["create-general-ledger-report-audience"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/report-audience/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the report audience.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a report audience
         * @description Returns detailed information for a specified report audience.
         */
        get: operations["get-general-ledger-report-audience-key"];
        put?: never;
        post?: never;
        /**
         * Delete a report audience
         * @description Deletes a report audience.
         */
        delete: operations["delete-general-ledger-report-audience-key"];
        options?: never;
        head?: never;
        /**
         * Update a report audience
         * @description Updates an existing report audience by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-report-audience-key"];
        trace?: never;
    };
    "/objects/general-ledger/report-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List report types
         * @description Returns a collection with a key, ID, and link for each report type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-general-ledger-report-type"];
        put?: never;
        /**
         * Create a report type
         * @description Creates a new report type.
         */
        post: operations["create-general-ledger-report-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/report-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the report type.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a report type
         * @description Returns detailed information for a specified report type.
         */
        get: operations["get-general-ledger-report-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete a report type
         * @description Deletes a report type.
         */
        delete: operations["delete-general-ledger-report-type-key"];
        options?: never;
        head?: never;
        /**
         * Update a report type
         * @description Updates an existing report type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-general-ledger-report-type-key"];
        trace?: never;
    };
    "/objects/general-ledger/reporting-category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List reporting categories
         * @description Returns a collection with a key, ID, and link for each reporting category.
         */
        get: operations["list-general-ledger-reporting-category"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/general-ledger/reporting-category/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting category.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a reporting category
         * @description Returns detailed information for a specified reporting category.
         */
        get: operations["get-general-ledger-reporting-category-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/reports/general-ledger/account-balance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit the account balance report
         * @description Submits the account balance report for processing. The response includes the `reportId` and `href` to check processing status.
         */
        post: operations["gl-report-account-balance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/reports/general-ledger/account-balance-by-dimension": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit the account balance by dimension report
         * @description Submits the account balance by dimension report for processing. The response includes the `reportId` and `href` to check processing status.
         */
        post: operations["gl-report-account-balance-by-dimension"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/reports/general-ledger/account-group-hierarchy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit the account group hierarchy report
         * @description Submits the account group hierarchy report for processing. The response includes the `reportId` and `href` to check processing status.
         */
        post: operations["gl-report-account-group-hierarchy"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/reports/general-ledger/details": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit the GL details report
         * @description Submits the GL details report for processing. The response includes the `reportId` and `href` to check processing status.
         */
        post: operations["gl-report-details"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/reports/general-ledger/trial-balance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit the trial balance report
         * @description Submits the trial balance report for processing. The response includes the `reportId` and `href` to check processing status.
         */
        post: operations["gl-report-trial-balance"];
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
        /** @description General ledger account */
        "objects.general-ledger.account": {
            /**
             * @description System-assigned key for the account. Used to identify the account in URLs or JSON bodies for all operations on the account.
             * @example 411
             */
            readonly key?: string;
            /**
             * @description The primary account number. This number must be a specific length, which is set on the Accounting tab of the Company Information page.
             * @example 1501.04
             */
            id?: string;
            /**
             * @description Name or title of the account, which appears on report headings. Max length is 80.
             * @example Expense Account
             */
            name?: string;
            /**
             * @description Type of account:
             *     - `balanceSheet` - A snapshot of the current state of a company's assets, liabilities, and equity at a specific time.
             *     - `incomeStatement` - Income statement accounts, sometimes called Profit and Loss statements, are cumulative for the selected period.
             * @default balanceSheet
             * @example balanceSheet
             * @enum {string}
             */
            accountType?: "balanceSheet" | "incomeStatement";
            /**
             * @description Sets whether the normal balance, from an accounting standpoint, is a debit or credit. For example, expense accounts are normally a debit. Sales accounts are normally a credit.
             * @default debit
             * @example debit
             * @enum {string}
             */
            normalBalance?: "debit" | "credit";
            /**
             * @description Sets the account as a closing or non-closing account. Instead of manually closing accounts at year end, you can set them to be closing accounts and then specify the account in which to close that period.
             *
             *     - `nonClosingAccount` - Balance sheet accounts.
             *     - `closingAccount` - Income statement accounts. Also specify a `closeToGLAccount`, which will typically be Retained Earnings. Sage Intacct then zeroes closing-type accounts into retained earnings at year-end.
             *     - `closedToAccount` - An account that other accounts close to, such as Retained Earnings.
             * @default nonClosingAccount
             * @example nonClosingAccount
             * @enum {string}
             */
            closingType?: "nonClosingAccount" | "closingAccount" | "closedToAccount";
            /** @description Account into which this account should close. Required if `closingType` is set to `closingAccount`. */
            closeToGLAccount?: {
                /**
                 * @description System-assigned key for account.
                 * @example 5
                 */
                key?: string;
                /**
                 * @description GL account number.
                 * @example 3500
                 */
                id?: string;
                /**
                 * @description URL endpoint of the account.
                 * @example /objects/general-ledger/account/5
                 */
                readonly href?: string;
            };
            /**
             * @description Sets whether the account can be used as an override of the default AP or AR GL accounts.
             *
             *     - `payablesAccount` - The account can be used as an override account for bill and adjustment transactions, and transactions involving a specific vendor.
             *     - `receivablesAccount` - The account can be used as an override for invoice and adjustment transactions and transactions involving a specific customer.
             *     - `none` - The account cannot be used as an override account.
             *
             *     The same alternative GL account can be used for all line items in a transaction, or different alternative accounts can be set for each line item. For vendors and customers, one alternative GL account can be used for balancing all transactions involving that vendor or customer.
             *
             *     Note: Currently, this field applies to bills, invoices, and adjustments only. It doesn't apply to recurring bills or invoices, manual payments, manual deposits, or advances.
             * @default none
             * @example payablesAccount
             * @enum {string}
             */
            alternativeGLAccount?: "none" | "payablesAccount" | "receivablesAccount";
            /**
             * @description Set to `true` to prevent direct entry of journal entries to the subledger control account (for example Accounts Payable, Accounts Receivable, etc.). Use this control to ensure that the account balance for the subledger account is accurate and has the necessary subledger details supporting the figure, rather than a direct entry which would not be reflected in the subledger application area.
             * @default false
             * @example false
             */
            disallowDirectPosting?: boolean;
            /**
             * @description Set to `true` to enable GL matching for the account.
             * @default false
             * @example false
             */
            enableGLMatching?: boolean;
            /**
             * @description Reconciliation sequence identifier used for GL matching.
             * @example Expense Account
             */
            reconciliationSequence?: string | null;
            /**
             * @description If `true`, DATEV export will include tax.
             * @default false
             * @example false
             */
            isGermanTaxAccount?: boolean;
            status?: components["schemas"]["status"];
            requireDimensions?: components["schemas"]["required-dimensions-ref"];
            /**
             * @description Account categories are pre-defined groupings that arrange accounts into out-of-the-box reports, graphs, and performance cards. This field is available only for companies that were created with a QuickStart template or chose one later. If enabled, set a category for the account. The available values are tied to the particular QuickStart template used for the company. The category chosen will automatically set values for `accountType`, `normalBalance`, and `closingType`.
             * @example Cash and Cash Equivalents
             */
            category?: string;
            /**
             * @description Set to `true` to mark the account as taxable.
             * @default false
             * @example false
             */
            isTaxable?: boolean;
            /**
             * @description Provide the tax return code needed by external tax compliance products to map tax codes to the tax forms that the company uses. Requires tax codes to be enabled in the General Ledger.
             * @example CST
             */
            taxCode?: string;
            /**
             * @description The M-3 return code box to map M-3 return codes to your M-3 form.
             * @example m-3 1065
             */
            mrcCode?: string;
            /**
             * @description Category of general ledger account:
             *
             *     - `cost` - The account is used to track job costs.
             *     - `revenue` -  The account is used to track job billings.
             *     - `overbilling` -  The account is used to post overbilling amounts.
             *     - `underbilling` -  The account is used to post underbilling amounts.
             *     - `offset` - The account is used to post adjustments for both overbilling and underbilling amounts.
             *     - `underbillingOffset` - The account is used to post adjustments for underbilling amounts.
             *     - `overbillingOffset` - The account is used to post adjustments for overbilling amounts.
             * @default null
             * @example cost
             * @enum {string|null}
             */
            readonly constructionCategory?: null | "cost" | "revenue" | "overbilling" | "underbilling" | "offset" | "underbillingOffset" | "overbillingOffset";
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description URL endpoint for the account.
             * @example /objects/general-ledger/account/411
             */
            readonly href?: string;
        };
        "general-ledger-accountRequiredProperties": Record<string, never>;
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
        /** @description Account category */
        "objects.general-ledger.account-category": {
            /**
             * @description System-assigned key for the account category.
             * @example 134
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the account category.
             * @example Cash and Cash Equivalents
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the account category.
             * @example /objects/general-ledger/account-category/23
             */
            readonly href?: string;
            /**
             * @description Indicates whether the account category is used for tracking statistical data such as operational metrics.
             * @example false
             */
            isStatistical?: boolean;
            /**
             * @description Specifies the account type associated with the account category.
             * @example asset
             * @enum {string}
             */
            accountType?: "asset" | "liability" | "equity" | "income" | "costOfRevenue" | "expense" | "other";
            /**
             * @description Normal balance.
             * @example debit
             * @enum {string}
             */
            normalBalance?: "debit" | "credit";
        };
        /** @description Account range */
        "objects.general-ledger.account-range": {
            /**
             * @description System-assigned key for the account range.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the account range.
             * @example 2
             */
            readonly id?: string;
            /**
             * @description Sort order for the account range.
             * @default 0
             * @example 2
             */
            sortOrder?: number;
            /**
             * @description Lowest account number to include in the account range.
             * @example 1000
             */
            rangeFrom?: string;
            /**
             * @description Highest account number to include in the account range.
             * @example 1001
             */
            rangeTo?: string;
            /** @description Account group that includes the account range. */
            readonly glAccountGroup?: {
                /**
                 * @description Unique key for the account group.
                 * @example 21
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the account group.
                 * @example Accounts Payable group
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the account group.
                 * @example /objects/general-ledger/account-group/21
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description URL endpoint for the account range.
             * @example /objects/general-ledger/account-range/2
             */
            readonly href?: string;
        };
        /** @description An account name entity map represents the mapping of an account name to a specific location and general ledger account in a multi-entity company. */
        "objects.general-ledger.account-name-entity-map": {
            /**
             * @description System-assigned unique key for the account name entity map.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the account name entity map.
             * @example 2
             */
            id?: string;
            /**
             * @description Specifies a custom name for the account name entity map.
             * @example Corporate (India)
             */
            name?: string;
            /** @description References the GL account associated with this mapping. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description Identifier for the GL account.
                 * @example 1005
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example First Union Bank A/c.
                 */
                name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/15
                 */
                readonly href?: string;
            };
            /** @description References the location associated with this mapping. */
            location?: {
                /**
                 * @description Unique key for the location.
                 * @example 21
                 */
                key?: string;
                /**
                 * @description Identifier for the location.
                 * @example Corporate
                 */
                id?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/21
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the account name entity map.
             * @example /objects/general-ledger/account-name-entity-map/2
             */
            readonly href?: string;
        };
        "general-ledger-account-name-entity-mapRequiredProperties": Record<string, never>;
        /** @description Account allocations automatically distribute amounts across multiple dimensions such as departments, locations, projects, or classes. */
        "objects.general-ledger.account-allocation": {
            /**
             * @description System-assigned unique key for the account allocation.
             * @example 21
             */
            readonly key?: string;
            /**
             * @description Unique ID for the account allocation. This value is the same as the `key` for this object.
             * @example 21
             */
            readonly id?: string;
            /**
             * @description Name for the account allocation definition (must be 20 characters or less).
             * @example AllocaForAdjBookNew
             */
            name?: string;
            /**
             * @description Description of the account allocation.
             * @example Monthly allocation of expenses
             */
            description?: string;
            /**
             * @description Specifies the methodology used to calculate the account allocation.
             * @example Expense allocation across revenue earning departments
             */
            methodology?: string;
            /** @description References the journal associated with this account allocation. The journal is used to post the generated journal entries from the account allocation. */
            readonly journal?: {
                /**
                 * @description Unique key for the journal.
                 * @example 39
                 */
                readonly key?: string;
                /**
                 * @description ID for the journal.
                 * @example Others
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the journal.
                 * @example /objects/general-ledger/journal/39
                 */
                readonly href?: string;
            };
            /** @description Supporting documents that provide reasoning and methodology for the account allocation. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 21
                 */
                key?: string | null;
                /**
                 * @description ID for the attachment.
                 * @example Sales01
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/attachment/21
                 */
                readonly href?: string;
            };
            /**
             * @description Latest version of the account allocation.
             * @example null
             */
            latestVersion?: number | null;
            /**
             * @description Determines how dimensions are applied in the account allocation calculations, the detail level of created entries, and whether allocation is within one entity or across entities.
             *
             *     * `notConsidered` - Excluded from calculations, but can still be used to filter the source pool or basis. Leave this blank, or set a single override value in `glAccountAllocationTarget`.
             *     * `preserveValues` - Keeps original dimension values and includes them in source and basis calculations to preserve proportional distribution in allocated entries.
             *     * `allocationFocus` - Allocates or reclassifies by this dimension based on the method in `glAccountAllocationBasis`, and includes it in dynamic basis calculations.
             */
            dimensionTreatment?: {
                /**
                 * @description Indicates how location dimension values are applied in the account allocation.
                 * @default notConsidered
                 * @example preserveValues
                 * @enum {string}
                 */
                location?: "notConsidered" | "preserveValues" | "allocationFocus";
                /**
                 * @description Indicates how department dimension values are applied in the account allocation.
                 * @default notConsidered
                 * @example allocationFocus
                 * @enum {string}
                 */
                department?: "notConsidered" | "preserveValues" | "allocationFocus";
                /**
                 * @description Indicates how project dimension values are applied in the account allocation.
                 * @default notConsidered
                 * @example notConsidered
                 * @enum {string}
                 */
                project?: "notConsidered" | "preserveValues" | "allocationFocus" | "perDimensionValue";
                /**
                 * @description Indicates how customer dimension values are applied in the account allocation.
                 * @default notConsidered
                 * @example notConsidered
                 * @enum {string}
                 */
                customer?: "notConsidered" | "preserveValues" | "allocationFocus";
                /**
                 * @description Indicates how vendor dimension values are applied in the account allocation.
                 * @default notConsidered
                 * @example notConsidered
                 * @enum {string}
                 */
                vendor?: "notConsidered" | "preserveValues" | "allocationFocus";
                /**
                 * @description Indicates how employee dimension values are applied in the account allocation.
                 * @default notConsidered
                 * @example notConsidered
                 * @enum {string}
                 */
                employee?: "notConsidered" | "preserveValues" | "allocationFocus" | "perDimensionValue";
                /**
                 * @description Indicates how class dimension values are applied in the account allocation.
                 * @default notConsidered
                 * @example notConsidered
                 * @enum {string}
                 */
                class?: "notConsidered" | "preserveValues" | "allocationFocus";
                /**
                 * @description Indicates how item dimension values are applied in the account allocation.
                 * @default notConsidered
                 * @example notConsidered
                 * @enum {string}
                 */
                item?: "notConsidered" | "preserveValues" | "allocationFocus";
                /**
                 * @description Indicates how warehouse dimension values are applied in the account allocation.
                 * @default notConsidered
                 * @example notConsidered
                 * @enum {string}
                 */
                warehouse?: "notConsidered";
                /**
                 * @description Indicates how contract dimension values are applied in the account allocation.
                 * @default notConsidered
                 * @example notConsidered
                 * @enum {string}
                 */
                contract?: "notConsidered";
            };
            /**
             * @description Indicates whether enhanced allocation validation is applied so each generation clears prior source amounts. This is useful for allocations that run multiple times in a period, such as payroll.
             *
             *     When true, Sage Intacct validates that accounts in the source pool are also used in the reversing source pool. If a different reversal account is used, it must be included in the source pool account group to offset prior allocations.
             *
             *     Allocated entries must be properly recorded in the source books to ensure prior allocations are fully considered.
             *
             *     This option is effective only when the source account is used for pool reversal in the allocation target through `glAccountAllocationTarget` or `glAccountAllocationReverse`.
             * @default false
             * @example true
             */
            activityDelta?: boolean;
            /**
             * @description Indicates whether previously posted journal entries are automatically reversed.
             *
             *     When true, Sage Intacct checks for an existing allocation in the same source period and reverses it before generating a new allocation. The reversal uses the new allocation’s posting date and resets amounts so prior allocations are not double-counted.
             *
             *     This improves accuracy by using the latest basis values for the full period. You cannot set this to true after allocations have already been generated for the definition.
             * @default false
             * @example false
             */
            autoReversePriorPostedJournalEntry?: boolean;
            /** @description References the source pool definition for the account allocation. */
            glAccountAllocationSource?: components["schemas"]["objects.general-ledger.account-allocation-source"][];
            /** @description References the basis definition for the account allocation. The basis determines how the source pool amount is distributed across each allocation-focused dimension. */
            glAccountAllocationBasis?: components["schemas"]["objects.general-ledger.account-allocation-basis"][];
            /** @description References the target definition for the account allocation. The target specifies where the account allocation distributes source pool amounts during calculation. */
            glAccountAllocationTarget?: components["schemas"]["objects.general-ledger.account-allocation-target"][];
            /** @description References the reverse definition for the account allocation. Determines whether to keep the allocated amounts in the allocation book or move them using copy and reverse to another book (such as accrual). */
            glAccountAllocationReverse?: components["schemas"]["objects.general-ledger.account-allocation-reverse"][];
            /**
             * @description Specifies how the account allocation interacts with multiple entities.
             *
             *     * `withinOneEntity` - You can only select source and basis options from the entity in which the allocation originates. Target entries are made in the same entity as the reversing source entries.
             *     * `acrossEntities` - For companies with multiple entities, account allocations can include more than one entity, even if they have different currencies. If using `acrossEntities`, specify an exchange rate type in the `glAccountAllocationTarget`.
             * @default withinOneEntity
             * @example withinOneEntity
             * @enum {string}
             */
            allowAllocation?: "withinOneEntity" | "acrossEntities";
            /**
             * @description Indicates the total number of journal entries that have been posted for a specific account allocation. This field is only available in the Query Service.
             * @example 2
             */
            readonly numberPostedJournalEntries?: number | null;
            /**
             * Format: date
             * @description Specifies the most recent date on which a posted journal entry was recorded for that account allocation. This field is only available in the Query Service.
             * @example 2026-05-23
             */
            readonly maxPostedJournalEntryDate?: string | null;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * @description User who created the account allocation.
                 * @example Admin
                 */
                readonly createdBy?: string | null;
                /**
                 * @description User who last modified the account allocation.
                 * @example Admin
                 */
                readonly modifiedBy?: string | null;
            };
            entity?: components["schemas"]["entity-ref"];
            /**
             * @description URL endpoint for the account allocation.
             * @example /objects/general-ledger/account-allocation/21
             */
            readonly href?: string;
        };
        "general-ledger-account-allocationRequiredProperties": {
            glAccountAllocationSource?: Record<string, never>[];
            glAccountAllocationBasis?: Record<string, never>[];
            glAccountAllocationTarget?: Record<string, never>[];
            glAccountAllocationReverse?: Record<string, never>[];
        };
        /** @description List of processing groups for dynamic allocations. */
        "objects.general-ledger.account-allocation-group": {
            /**
             * @description System-assigned key for the account allocation group.
             * @example 11
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the account allocation group.
             * @example 11
             */
            readonly id?: string;
            /**
             * @description Name of the account allocation group (20 characters max).
             * @example Month End
             */
            name?: string;
            /**
             * @description Description of the account allocation group.
             * @example All month end allocations
             */
            description?: string;
            /**
             * @description How to handle any errors encountered when processing the group allocation members.
             *
             *     - `stop` - The allocation process will stop and not move forward after a member of the allocation group has encountered errors. This is the recommended setting if sequential processing is important for the group.
             *     - `skipAndContinue` - Skips the allocation member if an error is encountered. Processing then continues starting with the next member of the allocation group. This is the setting recommended if there are no dependencies within the allocation group.
             * @example stop
             * @enum {string}
             */
            errorProcessingMethod?: "stop" | "skipAndContinue";
            /** @description Account allocation group members. If one allocation is dependent on the completion of a previous allocation, order the members accordingly. */
            lines?: components["schemas"]["objects.general-ledger.account-allocation-group-member"][];
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description URL endpoint for the allocation group.
             * @example /objects/general-ledger/account-allocation-group/11
             */
            readonly href?: string;
        };
        "general-ledger-account-allocation-groupRequiredProperties": Record<string, never>;
        /** @description General Ledger account allocation group member. */
        "objects.general-ledger.account-allocation-group-member": {
            /**
             * @description System-assigned key for the account allocation group member.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the account allocation group member.
             * @example 12
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the account allocation group member.
             * @example /objects/general-ledger/account-allocation-group-member/12
             */
            readonly href?: string;
            /** @description General Ledger account allocation. */
            glAccountAllocation?: {
                /**
                 * @description System-assigned key for the account allocation.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description Unique identifier for the account allocation.
                 * @example 11
                 */
                id?: string;
                /**
                 * @description Name for the account allocation.
                 * @example Monthly Expenses
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the account allocation.
                 * @example /objects/general-ledger/account-allocation/11
                 */
                readonly href?: string;
            };
            /** @description General Ledger account allocation group. */
            glAccountAllocationGroup?: {
                /**
                 * @description System-assigned key for the account allocation group.
                 * @example 141
                 */
                key?: string;
                /**
                 * @description Unique identifier for the account allocation group.
                 * @example 141
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account allocation group.
                 * @example /objects/general-ledger/account-allocation-group/141
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description An account allocation run represents the execution of an account allocation or account allocation group. */
        "objects.general-ledger.account-allocation-run": {
            /**
             * @description System-assigned unique key for the account allocation run.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the account allocation run. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the account allocation run.
             * @example /objects/account-allocation-run/23
             */
            readonly href?: string;
            /**
             * @description Name of the account allocation or account allocation group.
             * @example Skip and continue
             */
            readonly accountAllocationOrGroupName?: string;
            /**
             * @description Brief description of the account allocation.
             * @example Description skip and continue
             */
            readonly description?: string;
            /**
             * @description Allocation type.
             * @example dynamicAllocation
             * @enum {string|null}
             */
            readonly allocationType?: null | "dynamicAllocation" | "restrictionRelease";
            /**
             * Format: date
             * @description As-of date for the account allocation run.
             * @example 2024-01-01
             */
            asOfDate?: string;
            /**
             * Format: date
             * @description GL posting date for the account allocation run.
             * @example 2024-01-01
             */
            glPostingDate?: string;
            /**
             * @description Email address to notify when the account allocation run completes.
             * @example angie.kuman@mycompany.com
             */
            email?: string;
            /**
             * @description Current status of the account allocation run.
             * @example success
             * @enum {string}
             */
            readonly state?: "success" | "failed" | "inProgress" | "queued" | "partialSuccess";
            /**
             * @description Status details for the account allocation run.
             * @example Account allocation run failed
             */
            readonly message?: string | null;
            /** @description Parent account allocation run associated with this account allocation run. */
            readonly parent?: {
                /**
                 * @description Unique key for the account allocation run.
                 * @example 22
                 */
                readonly key?: string | null;
                /**
                 * @description ID for the account allocation run.
                 * @example 22
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the account allocation run.
                 * @example /objects/general-ledger/account-allocation-run/22
                 */
                readonly href?: string;
            };
            /**
             * @description Type of account allocation run.
             * @example regular
             * @enum {string}
             */
            readonly allocationRunType?: "regular" | "parent" | "child";
            /** @description Account allocation associated with the account allocation run. */
            accountAllocation?: {
                /**
                 * @description ID for the account allocation.
                 * @example Monthly expense allocation
                 */
                id?: string | null;
                /**
                 * @description Unique key for the account allocation.
                 * @example 23
                 */
                key?: string | null;
                /**
                 * @description URL endpoint for the account allocation.
                 * @example /objects/general-ledger/account-allocation/23
                 */
                readonly href?: string;
            };
            /** @description Account allocation group associated with the account allocation run. */
            accountAllocationGroup?: {
                /**
                 * @description URL endpoint for the account allocation group.
                 * @example /objects/general-ledger/account-allocation-group/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the account allocation group.
                 * @example 23
                 */
                key?: string | null;
                /**
                 * @description ID for the account allocation group.
                 * @example 23
                 */
                id?: string | null;
                /**
                 * @description Name of the account allocation group.
                 * @example 23
                 */
                readonly name?: string | null;
            };
            /** @description Dimension overrides for the account allocation run. */
            dimensions?: {
                /**
                 * employee
                 * @description Employee dimension associated with the account allocation run.
                 */
                employee?: {
                    /**
                     * @description Unique key for the employee.
                     * @example 10
                     */
                    key?: string | null;
                    /**
                     * @description ID for the employee.
                     * @example EMP-10
                     */
                    id?: string | null;
                    /**
                     * @description Name of the employee.
                     * @example Thomas, Glenn
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the employee.
                     * @example /objects/company-config/employee/10
                     */
                    readonly href?: string;
                };
                /**
                 * project
                 * @description Project dimension associated with the account allocation run.
                 */
                project?: {
                    /**
                     * @description Unique key for the project.
                     * @example 2
                     */
                    key?: string | null;
                    /**
                     * @description ID for the project.
                     * @example NET-XML30-2
                     */
                    id?: string | null;
                    /**
                     * @description Name of the project.
                     * @example NET XML 30 phase 2
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the project.
                     * @example /objects/projects/project/2
                     */
                    readonly href?: string;
                };
            };
            /** @description Recurring account allocation associated with the account allocation run. */
            recurringAccountAllocation?: {
                /**
                 * @description Unique key for the recurring account allocation.
                 * @example 23
                 */
                readonly key?: string | null;
                /**
                 * @description ID for the recurring account allocation.
                 * @example 23
                 */
                readonly id?: string | null;
            };
            /** @description Source GL account associated with the account allocation run. */
            sourceAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 9
                 */
                key?: string;
                /**
                 * @description ID for the GL account.
                 * @example 1000
                 */
                id?: string;
                /**
                 * @description Name or title of the GL account.
                 * @example Bank of America A/c.
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/9
                 */
                readonly href?: string;
            };
            /** @description Journal entry associated with the account allocation run. */
            readonly journalEntry?: {
                /**
                 * @description Unique key for the journal entry.
                 * @example 1226
                 */
                readonly key?: string;
                /**
                 * @description ID for the journal entry.
                 * @example 1226
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/general-ledger/journal-entry/1226
                 */
                readonly href?: string;
            };
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        "general-ledger-account-allocation-runRequiredProperties": Record<string, never>;
        /** @description Parameters of the account allocation source, used when calculating the allocation. */
        "objects.general-ledger.account-allocation-source": {
            /**
             * @description System-assigned unique key for the account allocation source.
             * @example 21
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the account allocation source.
             * @example 21
             */
            readonly id?: string;
            /**
             * @description Percent of the source pool to be allocated and applied to the source amount during calculation.
             * @example 100
             */
            percentToAllocate?: string;
            /** @description Source pool time period, the default time interval for the allocation. */
            timePeriod?: {
                /** @example 395 */
                key?: string;
                /** @example Current Month */
                id?: string;
                /** @example /objects/general-ledger/reporting-period/395 */
                readonly href?: string;
            };
            /**
             * @description Accounting method used when calculating the allocation.
             * @example accrual
             * @enum {string}
             */
            reportingBook?: "accrual" | "cash";
            /**
             * @description Base currency used in the entity where the allocation is processed.
             * @example USD
             */
            readonly currency?: string;
            /**
             * @description Use amounts from specified reporting book when calculating the allocation.
             * @default mainReportingBookAndAlternateBooks
             * @example mainReportingBookAndAlternateBooks
             * @enum {string}
             */
            useAmountsFrom?: "mainReportingBookAndAlternateBooks" | "alternateBooksOnly";
            /** @description Account allocation. */
            glAccountAllocation?: {
                /**
                 * @description Unique key for the account allocation.
                 * @example 21
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the account allocation.
                 * @example 21
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the account allocation.
                 * @example /objects/general-ledger/account-allocation-source/21
                 */
                readonly href?: string;
            };
            /** @description Account group to base your allocation split on. */
            glAccountGroup?: {
                /**
                 * @description Unique key for the account group.
                 * @example 623
                 */
                key?: string;
                /**
                 * @description Unique identifier for the account group.
                 * @example Basis
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account group.
                 * @example /objects/general-ledger/account-group/623
                 */
                readonly href?: string;
            };
            /** @description Source pool for the allocation. */
            glAccountAllocationSourceAdjustmentBooks?: components["schemas"]["objects.general-ledger.account-allocation-source-adjustment-book"][];
            dimensionGroups?: components["schemas"]["dimension-group-ref"];
            /** @description Account allocation source dimensions. */
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location dimension.
                 */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the location.
                     * @example LOC-1
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
                /**
                 * department
                 * @description Department dimension.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
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
            };
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description URL endpoint for the account allocation source.
             * @example /objects/general-ledger/account-allocation-source/21
             */
            readonly href?: string;
        };
        /** @description Parameters of the account allocation basis used as the blueprint for calculating dynamic allocations. */
        "objects.general-ledger.account-allocation-basis": {
            /**
             * @description System-assigned unique key for the account allocation basis.
             * @example 14
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the account allocation basis.
             * @example 14
             */
            readonly id?: string;
            /** @description Account allocation. */
            readonly glAccountAllocation?: {
                /**
                 * @description Unique key for the account allocation.
                 * @example 21
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the account allocation.
                 * @example 21
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the account allocation.
                 * @example /objects/general-ledger/account-allocation/21
                 */
                readonly href?: string;
            };
            /**
             * @description Determines how the amounts within the basis accounts are interpreted to derive amounts for the allocation split.
             * @default activity
             * @example activity
             * @enum {string}
             */
            accumulation?: "activity" | "endingBalance";
            /** @description Time period used to get the basis information. */
            timePeriod?: {
                /**
                 * @description Unique key for the time period.
                 * @example 395
                 */
                key?: string;
                /**
                 * @description Unique identifier for the time period.
                 * @example Current Month
                 */
                id?: string;
                /**
                 * @description URL endpoint for the time period.
                 * @example /objects/general-ledger/reporting-period/395
                 */
                readonly href?: string;
            };
            /**
             * @description Accounting method used in the basis calculation.
             * @example accrual
             * @enum {string}
             */
            reportingBook?: "accrual" | "cash";
            /**
             * @description Method used to distribute the source pool in the basis calculation.
             * @default dynamicRelativeAccountFinancial
             * @example dynamicRelativeAccountFinancial
             * @enum {string}
             */
            allocationMethod?: "dynamicRelativeAccountFinancial" | "dynamicRelativeAccountStatistical";
            /**
             * @description Excludes negative balances from the basis calculation.
             * @default false
             * @example false
             */
            skipNegative?: boolean;
            /**
             * @description Uses amounts from specified reporting book in the basis calculation.
             * @default mainReportingBookAndAlternateBooks
             * @example mainReportingBookAndAlternateBooks
             * @enum {string}
             */
            useAmountsFrom?: "mainReportingBookAndAlternateBooks" | "alternateBooksOnly";
            /** @description Account group to base your allocation split on. */
            glAccountGroup?: {
                /**
                 * @description Unique key for the account group.
                 * @example 623
                 */
                key?: string;
                /**
                 * @description Unique identifier for the account group.
                 * @example Basis
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account group.
                 * @example /objects/general-ledger/account-group/623
                 */
                readonly href?: string;
            };
            /** @description Basis Adjustment book for the allocation. */
            glAccountAllocationBasisAdjustmentBooks?: components["schemas"]["objects.general-ledger.account-allocation-basis-adjustment-book"][];
            dimensionGroups?: components["schemas"]["dimension-group-ref"];
            /** @description Account allocation basis dimensions. */
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location dimension.
                 */
                location?: {
                    /**
                     * @description Unique key for the location.
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
                /**
                 * department
                 * @description Department dimension.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
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
            };
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description URL endpoint for the account allocation basis.
             * @example /objects/general-ledger/account-allocation-basis/14
             */
            readonly href?: string;
        };
        /** @description Parameters of the account allocation target, used when calculating dynamic allocations. */
        "objects.general-ledger.account-allocation-target": {
            /**
             * @description System-assigned unique key for the account allocation target.
             * @example 14
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the account allocation target.
             * @example 14
             */
            readonly id?: string;
            /** @description Account allocation. */
            readonly glAccountAllocation?: {
                /**
                 * @description Unique key for the account allocation.
                 * @example 21
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the account allocation.
                 * @example 21
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the account allocation.
                 * @example /objects/general-ledger/account-allocation/21
                 */
                readonly href?: string;
            };
            /** @description Account group to base your allocation split on. */
            glAccountGroup?: {
                /**
                 * @description Unique key for the account group.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the account group.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account group.
                 * @example /objects/general-ledger/account-group/1
                 */
                readonly href?: string;
            };
            /**
             * @description Flag lines in the allocation target as billable.
             * @default false
             * @example false
             */
            isBillable?: boolean;
            /** @description General ledger account. */
            glAccount?: {
                /**
                 * @description Unique key for the account.
                 * @example 378
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the account.
                 * @example 1105
                 */
                id?: string | null;
                /**
                 * @description Name for the account.
                 * @example Target
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/378
                 */
                readonly href?: string;
            };
            /**
             * @description Specify if the original source account is included in the target.
             * @default false
             * @example true
             */
            useSourceAccount?: boolean;
            /** @description Journal where the allocation will be recorded when generated. */
            journal?: {
                /**
                 * @description Unique key for the journal.
                 * @example 39
                 */
                key?: string;
                /**
                 * @description Unique identifier for the journal.
                 * @example Others
                 */
                id?: string;
                /**
                 * @description Title for the account.
                 * @example Accommodation Expenses
                 */
                readonly title?: string;
                /**
                 * @description URL endpoint for the journal.
                 * @example /objects/general-ledger/journal/39
                 */
                readonly href?: string;
            };
            /** @description Exchange rate details used to calculate the base amount. */
            exchangeRate?: {
                /**
                 * @description The type of exchange rate used to calculate the base amount from the transaction amount.
                 * @example 1
                 */
                typeId?: string | null;
            };
            /** @description Dimension overrides for the account allocation target. */
            dimensions?: {
                /** @description Dimension override for class, applies only if the dimension treatment for class is set to not considered. */
                class?: {
                    /**
                     * @description Unique key for the class.
                     * @example 6
                     */
                    key?: string | null;
                    /**
                     * @description Name for the class.
                     * @example 4
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the class.
                     * @example Professional Services
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the class.
                     * @example /objects/company-config/class/6
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for customer, applies only if the dimension treatment for customer is set to not considered. */
                customer?: {
                    /**
                     * @description Unique key for the customer.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description Name for the customer.
                     * @example ACME Widgets
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the customer.
                     * @example ACME
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the customer.
                     * @example /objects/accounts-receivable/customer/2
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for employee, applies only if the dimension treatment for employee is set to not considered. */
                employee?: {
                    /**
                     * @description Unique key for the employee.
                     * @example 27
                     */
                    key?: string | null;
                    /**
                     * @description Name for the employee.
                     * @example Eberhardt
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the employee.
                     * @example 12
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the employee.
                     * @example /objects/company-config/employee/27
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for department, applies only if the dimension treatment for department is set to not considered. */
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
                     * @description Name for the department.
                     * @example Sales
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/12
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for location, applies only if the dimension treatment for location is set to not considered. */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 72
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the location.
                     * @example AZ
                     */
                    id?: string | null;
                    /**
                     * @description Name for the location.
                     * @example Arizona
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/72
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for project, applies only if the dimension treatment for project is set to not considered. */
                project?: {
                    /**
                     * @description Unique key for the project.
                     * @example 8
                     */
                    key?: string | null;
                    /**
                     * @description Name for the project.
                     * @example Client Services - Power Aerospace Materials
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the project.
                     * @example 8
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the project.
                     * @example /objects/projects/project/8
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for vendor, applies only if the dimension treatment for vendor is set to not considered. */
                vendor?: {
                    /**
                     * @description Unique key for the vendor.
                     * @example 48
                     */
                    key?: string | null;
                    /**
                     * @description Name for the vendor.
                     * @example Packard Bell
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the vendor.
                     * @example 202
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the vendor.
                     * @example /objects/accounts-payable/vendor/48
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for warehouse, applies only if the dimension treatment for warehouse is set to not considered. */
                warehouse?: {
                    /**
                     * @description Unique key for the warehouse.
                     * @example 2
                     */
                    key?: string | null;
                    /**
                     * @description Name for the warehouse.
                     * @example WH02 Name
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the warehouse.
                     * @example WH02
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the warehouse.
                     * @example /objects/inventory-control/warehouse/2
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for item, applies only if the dimension treatment for item is set to not considered. */
                item?: {
                    /**
                     * @description Unique key for the item.
                     * @example 13
                     */
                    key?: string | null;
                    /**
                     * @description Name for the item.
                     * @example Platform pack
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the item.
                     * @example Case 13
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the item.
                     * @example /objects/inventory-control/item/13
                     */
                    href?: string;
                };
                /** @description Dimension override for contract, applies only if the dimension treatment for contract is set to not considered. */
                contract?: {
                    /**
                     * @description Unique key for the contract.
                     * @example 12
                     */
                    key?: string | null;
                    /**
                     * @description Name for the contract.
                     * @example ACME Widgets - Service
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the contract.
                     * @example CON-0045-1
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the contract.
                     * @example /objects/contracts/contract/12
                     */
                    readonly href?: string;
                };
            };
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description URL endpoint for the account allocation target.
             * @example /objects/general-ledger/account-allocation-target/14
             */
            readonly href?: string;
        };
        /** @description Parameters of the account allocation reversal, used when reversing dynamic account allocations. */
        "objects.general-ledger.account-allocation-reverse": {
            /**
             * @description System-assigned unique key for the account allocation reversal.
             * @example 14
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the account allocation reversal.
             * @example 14
             */
            readonly id?: string;
            /** @description Account allocation being reversed. */
            readonly glAccountAllocation?: {
                /**
                 * @description System-assigned unique key for the account allocation.
                 * @example 1
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the account allocation.
                 * @example 1
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the account allocation.
                 * @example /objects/general-ledger/account-allocation/1
                 */
                readonly href?: string;
            };
            /**
             * @description Specify if the original source account is included in the reversal.
             * @default false
             * @example true
             */
            useSourceAccount?: boolean;
            /** @description General ledger account associated with the reversal. */
            glAccount?: {
                /**
                 * @description System-assigned unique key for the account.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the account.
                 * @example 1000
                 */
                id?: string | null;
                /**
                 * @description Name for the account.
                 * @example Cash
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/1
                 */
                readonly href?: string;
            };
            /** @description Dimension overrides for the account allocation reversal. */
            dimensions?: {
                /** @description Dimension override for class, applies only if the dimension treatment for class is set to not considered. */
                class?: {
                    /**
                     * @description Unique key for the class.
                     * @example 6
                     */
                    key?: string | null;
                    /**
                     * @description Name for the class.
                     * @example Professional Services
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the class.
                     * @example 4
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the class.
                     * @example /objects/company-config/class/6
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for customer, applies only if the dimension treatment for customer is set to not considered. */
                customer?: {
                    /**
                     * @description Unique key for the customer.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description Name for the customer.
                     * @example Power Aerospace Materials
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the customer.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the customer.
                     * @example /objects/accounts-receivable/customer/1
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for employee, applies only if the dimension treatment for employee is set to not considered. */
                employee?: {
                    /**
                     * @description Unique key for the employee.
                     * @example 27
                     */
                    key?: string | null;
                    /**
                     * @description Name for the employee.
                     * @example John Smith
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the employee.
                     * @example 12
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the employee.
                     * @example /objects/company-config/employee/27
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for department, applies only if the dimension treatment for department is set to not considered. */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 6
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the department.
                     * @example 6
                     */
                    id?: string | null;
                    /**
                     * @description Name for the department.
                     * @example Marketing
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/6
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for location, applies only if the dimension treatment for location is set to not considered. */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 72
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the location.
                     * @example AZ
                     */
                    id?: string | null;
                    /**
                     * @description Name for the location.
                     * @example Arizona
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/72
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for project, applies only if the dimension treatment for project is set to not considered. */
                project?: {
                    /**
                     * @description Unique key for the project.
                     * @example 8
                     */
                    key?: string | null;
                    /**
                     * @description Name for the project.
                     * @example Client Services - Power Aerospace Materials
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the project.
                     * @example 8
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the project.
                     * @example /objects/projects/project/8
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for vendor, applies only if the dimension treatment for vendor is set to not considered. */
                vendor?: {
                    /**
                     * @description Unique key for the vendor.
                     * @example 48
                     */
                    key?: string | null;
                    /**
                     * @description Name for the vendor.
                     * @example Packard Bell
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the vendor.
                     * @example 202
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the vendor.
                     * @example /objects/accounts-payable/vendor/48
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for warehouse, applies only if the dimension treatment for warehouse is set to not considered. */
                warehouse?: {
                    /**
                     * @description Unique key for the warehouse.
                     * @example 2
                     */
                    key?: string | null;
                    /**
                     * @description Name for the warehouse.
                     * @example Warehouse 2
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the warehouse.
                     * @example WH02
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the warehouse.
                     * @example /objects/inventory-control/warehouse/2
                     */
                    readonly href?: string;
                };
                /** @description Dimension override for item, applies only if the dimension treatment for item is set to not considered. */
                item?: {
                    /**
                     * @description Unique key for the item.
                     * @example 13
                     */
                    key?: string | null;
                    /**
                     * @description Name for the item.
                     * @example Platform pack
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the item.
                     * @example Case 13
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the item.
                     * @example /objects/inventory-control/item/13
                     */
                    href?: string;
                };
                /** @description Dimension override for contract, applies only if the dimension treatment for contract is set to not considered. */
                contract?: {
                    /**
                     * @description Unique key for the contract.
                     * @example 12
                     */
                    key?: string | null;
                    /**
                     * @description Name for the contract.
                     * @example ACME Widgets - Service
                     */
                    readonly name?: string | null;
                    /**
                     * @description Unique identifier for the contract.
                     * @example CON-0045-1
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the contract.
                     * @example /objects/contracts/contract/12
                     */
                    readonly href?: string;
                };
            };
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description URL endpoint for the account allocation reversal.
             * @example /objects/general-ledger/account-allocation-reverse/14
             */
            readonly href?: string;
        };
        /** @description Restarts an account allocation run that is currently in progress. Only one account allocation run can be restarted at a time. */
        "general-ledger-account-allocation-run-restart-request": {
            /**
             * @description System-assigned unique key for the account allocation run.
             * @example 23
             */
            key: string;
        };
        "general-ledger-account-allocation-run-restart-response": {
            /**
             * @description System-assigned unique key for the account allocation run.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the account allocation run.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the account allocation run.
             * @example /objects/general-ledger/account-allocation-run/23
             */
            readonly href?: string;
            /**
             * @description Indicates the current state of the account allocation run.
             * @example queued
             * @enum {string}
             */
            readonly state?: "queued";
        };
        /** @description Recurring allocations automate the distribution of amounts across multiple accounts on a scheduled basis. */
        "objects.general-ledger.recurring-account-allocation": {
            /**
             * @description System-assigned unique key for the recurring allocation.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the recurring allocation. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the recurring allocation.
             * @example /objects/general-ledger/recurring-account-allocation/23
             */
            readonly href?: string;
            /**
             * @description Name for the recurring allocation plan.
             * @example Monthly Operating Expenses
             */
            name?: string;
            /**
             * @description Indicates whether to allocate through to the date when the recurring allocation ends. When `true`, the recurring allocation will run at the start of the day following the end of selected period, ensuring all entries for the period are considered in the allocation.
             * @default false
             * @example false
             */
            allocateToPeriodEnd?: boolean;
            /**
             * @description Specifies the name of the account allocation or group.
             * @example Corporate Overhead Allocation Group
             */
            readonly accountAllocationOrGroupName?: string;
            /**
             * @description Indicates the most recent execution status.
             * @example success
             * @enum {string|null}
             */
            readonly lastExecutionStatus?: null | "inTransit" | "scheduleError" | "failed" | "success";
            /**
             * @description Specifies the number of times the recurring allocation has been run.
             * @example 2
             */
            readonly runCount?: number;
            /** @description References the account allocation associated with this recurring allocation. */
            accountAllocation?: {
                /**
                 * @description Unique key for the account allocation.
                 * @example 38
                 */
                key?: string | null;
                /**
                 * @description ID for the account allocation.
                 * @example 38
                 */
                id?: string | null;
                /**
                 * @description Name for the account allocation.
                 * @example Monthly Expenses
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the account allocation.
                 * @example /objects/general-ledger/account-allocation/38
                 */
                readonly href?: string;
            };
            /** @description References the account allocation group associated with this recurring allocation. */
            accountAllocationGroup?: {
                /**
                 * @description URL endpoint for the account allocation group.
                 * @example objects/general-ledger/account-allocation-group/23
                 */
                readonly href?: string;
                /**
                 * @description ID for the account allocation group.
                 * @example 23
                 */
                id?: string | null;
                /**
                 * @description Unique key for the account allocation group.
                 * @example 23
                 */
                key?: string | null;
                /**
                 * @description Name of the account allocation group.
                 * @example Month End
                 */
                readonly name?: string | null;
            };
            /** @description Represents an internal operation or task that can be executed by the system. */
            operation?: {
                /**
                 * @description ID for the operation.
                 * @example Recurring Allocation Journal Entry - 2025.2.6-6:20:21-0.0833
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the operation.
                 * @example 68
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the operation.
                 * @example /objects/core/operation/68
                 */
                readonly href?: string;
                /**
                 * @description Contact email to alert when the allocation has been processed.
                 * @example john.smith@mycompany.com
                 */
                contactEmail?: string;
            };
            /**
             * @description Specifies the settings that establish the recurring schedule.
             *
             *     For more information, see [schedule a recurring allocation](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Account_allocations_recurring) in the Sage Intacct Help Center.
             */
            schedule?: {
                /**
                 * Format: date
                 * @description Specifies the journal entry start date for the recurring allocation.
                 * @example 2025-02-06
                 */
                startDate?: string;
                /**
                 * @description Indicates how the `endDate` for the recurring allocation is determined.
                 *
                 *     * `never` - Continues indefinitely until manually stopped.
                 *     * `numberOfOccurrences` - Ends after a specified number of occurrences.
                 *     * `endDate` - Ends on a specific date.
                 * @default never
                 * @example endDate
                 * @enum {string}
                 */
                scheduleEnd?: "never" | "numberOfOccurrences" | "endDate";
                /**
                 * Format: date
                 * @description Specifies the journal entry end date for the recurring allocation.
                 * @example 2025-02-20
                 */
                endDate?: string | null;
                /**
                 * @description Determines how often the recurring allocation repeats, for example, specifying `2` as the interval, with `month` as the value for `repeatBy`, repeats every two months.
                 * @example 2
                 */
                repeatInterval?: number;
                /**
                 * @description Indicates the number of occurrences to `repeatBy` for the recurring allocation.
                 * @example 2
                 */
                repeatCount?: number | null;
                /**
                 * Format: date
                 * @description Specifies the date on which the recurring allocation is scheduled to run next.
                 * @example 2025-02-06
                 */
                readonly nextExecutionDate?: string | null;
                /**
                 * Format: date
                 * @description Specifies the date on which the recurring allocation was last run.
                 * @example 2025-02-02
                 */
                readonly lastExecutionDate?: string | null;
                /**
                 * @description Specifies the number of times the recurring allocation has been run.
                 * @example 2
                 */
                readonly executionCount?: number;
                /**
                 * @description Indicates the time unit that the `repeatInterval` uses for the recurring allocation, for example, specifying `month` as the value to repeat by, with a `repeatInterval` of `3` repeats every three months.
                 * @default none
                 * @example day
                 * @enum {string}
                 */
                repeatBy?: "none" | "day" | "week" | "month" | "year";
            };
            /** @description Represents an internal operation or task configured to run automatically based on a defined schedule. */
            scheduledOperation?: {
                /**
                 * @description Unique key for the scheduled operation.
                 * @example 4
                 */
                readonly key?: string;
                /**
                 * @description ID for the scheduled operation.
                 * @example Recurring Allocation Journal Entry - 2025.2.6-6:20:21-0.0833
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the scheduled operation.
                 * @example /objects/core/scheduled-operation/234
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "general-ledger-recurring-account-allocationRequiredProperties": {
            schedule?: Record<string, never>;
            operation?: Record<string, never>;
        };
        /** @description General ledger account groups. */
        "objects.general-ledger.account-group": {
            /**
             * @description System-assigned key for the account group.
             * @example 33
             */
            readonly key?: string;
            /**
             * @description ID for the account group.
             * @example 85 - Cash
             */
            id?: string;
            /**
             * @description Header row title for the account group on financial reports.
             * @example Cash
             */
            title?: string;
            /**
             * @description Total line title for the account group on financial reports.
             * @example Total Accounts Payable
             */
            displayTotalLineAs?: string;
            /**
             * @description Name of the manager responsible for the account group.
             * @example John Smith
             */
            manager?: string;
            /**
             * @description Calculation method used when calculating amounts on reports for each account group.
             *     Valid calculation methods are:
             *
             *
             *
             *
             *
             *       - `period` - calculates only the amounts in the selected period.
             *       - `startOfPeriod` - calculates the amounts cumulatively up to the start of the selected period.
             *       - `endOfPeriod` - calculates the amounts cumulatively up to the end of the selected period.
             *       - `null` - not supported.
             * @default period
             * @example period
             * @enum {string|null}
             */
            calculationMethod?: null | "period" | "startOfPeriod" | "endOfPeriod";
            /**
             * @description Use this account group as either a debit balance or a credit balance, for example Cash is generally a debit balance, and Sales, a credit balance.
             *
             *     Make sure that the normal balance is the same for all accounts in the account group. The normal balance takes the designation from the top of the group. For example, if the parent is debit normal, all included accounts will be added, regardless of their normal balance setting.
             * @default credit
             * @example credit
             * @enum {string}
             */
            normalBalance?: "debit" | "credit";
            /**
             * @description Indicate the type of account group. Different account group types yield different results in your financial reports.
             *
             *     Valid account group types:
             *     - `accounts` - the simplest and most basic type of account group types, it consists of one or  more accounts from the chart of accounts.
             *     - `statisticalAccounts` - includes accounts that contain specific non-financial data, used for calculating ratios and business metrics such as, headcount or square footage.
             *     - `computation` - consists of other account groups or individual accounts that you use as components in a mathematical equation; results of the equation display in your financial report.
             *     - `category` - contains accounts based on categories (account groups) configured when your Intacct company was first set up.
             *     - `statisticalCategory` - contains statistical accounts, also based on the pre-configured categories.
             *     - `null` - not supported.
             * @default accounts
             * @example groups
             * @enum {string}
             */
            groupType?: "accounts" | "groups" | "statisticalAccounts" | "computation" | "category" | "statisticalCategory";
            /**
             * @description Use `true` to specify the account group is a KPI account group. Key Performance Indicators (KPI) measure how effectively your company is meeting business objectives.  KPI account groups can be used in financial reports just like any other account groups.
             * @default false
             * @example false
             */
            isKPI?: boolean;
            /**
             * @description Use `true` to roll up an entire hierarchy of child transactions into one total.
             * @default false
             * @example true
             */
            includeChildAmount?: boolean;
            /** @description Account group purpose to associate with this account group. */
            accountGroupPurpose?: {
                /**
                 * @description System-assigned key for the account group purpose.
                 * @example 126
                 */
                key?: string | null;
                /**
                 * @description Unique identifier of the account group purpose.
                 * @example P&L
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the account group purpose.
                 * @example /objects/company-config/account-group-purpose/126
                 */
                readonly href?: string;
            };
            /**
             * @description Filtering on the account group restricts the information displayed to certain dimensions. You can also filter for multiple locations and departments at the same time by using a dimension group.
             *
             *     Valid values for all report filters, use in reports where the account group is specified:
             *
             *     - `noFilter` - includes all account group transactions for the dimension and it's sub-dimensions.
             *     - `null` - includes account group transactions where the dimension is not specified.
             *     - `specific` - only includes account group transactions for the specified dimension or dimension group (only for location and department).
             *     - `specificHierarchy` - includes account group transactions for the specified dimension hierarchy, including it's sub-dimensions.
             */
            reportFilters?: {
                /**
                 * @description Include account group transactions for a specific location (including sub-locations) or location group (contains multiple locations) in your reports where the account group is specified.
                 * @default noFilter
                 * @example noFilter
                 * @enum {string|null}
                 */
                location?: null | "noFilter" | "specificHierarchy" | "specific" | "nullValue";
                /**
                 * @description Include debit only or credit only account group transactions in your reports where the account group is specified. Use `both` to include all debit and credit transactions within the account group. This filter has limited options, it works on charts, graphs, performance cards, and financial reports, but is ignored in GL reports.
                 * @default null
                 * @example both
                 * @enum {string|null}
                 */
                debitOrCredit?: null | "both" | "debitOnly" | "creditOnly";
                /**
                 * @description Include account group transactions for a specific department (including sub-departments) or department group (contains multiple departments) in your reports where the account group is specified.
                 * @default null
                 * @example noFilter
                 * @enum {string|null}
                 */
                department?: null | "noFilter" | "specificHierarchy" | "specific" | "nullValue";
                /**
                 * @description Include account group transactions for a specific vendor (including sub-vendors) in your reports where the account group is specified.
                 * @default null
                 * @example noFilter
                 * @enum {string|null}
                 */
                vendor?: null | "noFilter" | "specificHierarchy" | "specific" | "unspecified";
                /**
                 * @description Include account group transactions for a specific customer (including sub-customers) in your reports where the account group is specified.
                 * @default null
                 * @example noFilter
                 * @enum {string|null}
                 */
                customer?: null | "noFilter" | "specificHierarchy" | "specific" | "nullValue";
                /**
                 * @description Include account group transactions for a specific project (including sub-projects) in your reports where the account group is specified.
                 * @default null
                 * @example noFilter
                 * @enum {string|null}
                 */
                project?: null | "noFilter" | "specificHierarchy" | "specific" | "nullValue";
                /**
                 * @description Include account group transactions for a specific employee (including sub-employees) in your reports where the account group is specified.
                 * @default null
                 * @example noFilter
                 * @enum {string|null}
                 */
                employee?: null | "noFilter" | "specificHierarchy" | "specific" | "nullValue";
                /**
                 * @description Include all account group transactions with specific inventory items in your reports where the account group is specified. This filter has limited options, it works on charts, graphs, performance cards, and financial reports, but is ignored in GL reports.
                 * @default null
                 * @example noFilter
                 * @enum {string|null}
                 */
                item?: null | "noFilter" | "specific" | "nullValue";
                /**
                 * @description Include account group transactions for a specific class (including sub-classes) in your reports where the account group is specified.
                 * @default null
                 * @example noFilter
                 * @enum {string|null}
                 */
                class?: null | "noFilter" | "specificHierarchy" | "specific" | "nullValue";
                /**
                 * @description Include account group transactions for a specific contract (including sub-contracts) in your reports where the account group is specified.
                 * @default null
                 * @example noFilter
                 * @enum {string|null}
                 */
                contract?: null | "noFilter" | "specificHierarchy" | "specific" | "nullValue";
                /**
                 * @description Include all account group transactions with tasks in your reports where the account group is specified. This filter has limited options, it works on charts, graphs, performance cards, and financial reports, but is ignored in GL reports.
                 * @default null
                 * @example noFilter
                 * @enum {string|null}
                 */
                task?: null | "noFilter" | "nullValue";
                /**
                 * @description Include account group transactions for a specific warehouse (including sub-warehouses) in your reports where the account group is specified.
                 * @default null
                 * @example noFilter
                 * @enum {string|null}
                 */
                warehouse?: null | "noFilter" | "specificHierarchy" | "specific" | "nullValue";
                /**
                 * @description Include all account group transactions with cost types in your reports where the account group is specified. This filter has limited options, it works on charts, graphs, performance cards, and financial reports, but is ignored in GL reports.
                 * @default null
                 * @example noFilter
                 * @enum {string|null}
                 */
                costType?: null | "noFilter" | "nullValue";
                /**
                 * @description Include account group transactions for a specific asset (including sub-assets) in your reports where the account group is specified.
                 * @default null
                 * @example noFilter
                 * @enum {string|null}
                 */
                asset?: null | "noFilter" | "specificHierarchy" | "specific" | "nullValue";
                /**
                 * @description Include all account group transactions with specific affiliate entities in your reports where the account group is specified. This filter has limited options, it works on charts, graphs, performance cards, and financial reports, but is ignored in GL reports.
                 * @default null
                 * @example noFilter
                 * @enum {string|null}
                 */
                affiliateEntity?: null | "noFilter" | "specific" | "nullValue";
                /**
                 * @description Include account group transactions for a specific loan account in your reports where the account group is specified. This filter has limited scope. It applies to charts, graphs, performance cards, and financial reports, but is ignored in GL reports.
                 * @default null
                 * @example noFilter
                 * @enum {string|null}
                 */
                loanAccount?: null | "noFilter" | "specific" | "nullValue";
            };
            /**
             * @description Filter by the specified dimension values if `reportFilters` is set to `specific` or `specificHierarchy`.
             *
             *     A dimension is a classification system used to organize, sort, and report on your company information in meaningful ways. Each dimension has a set of related values with transactions and entries. Every transaction you enter can be tagged with multiple dimension values for identification and reporting.
             */
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location to filter by if `reportFilters.location` is set to `specific` or `specificHierarchy`.
                 *
                 *     You can filter by a single `location`, or alternatively, you can filter by multiple locations using a `locationGroup`. You cannot filter both `location` and `locationGroup` at the same time.
                 */
                location?: {
                    /** @example 1 */
                    key?: string | null;
                    /** @example 1 */
                    id?: string | null;
                    /** @example New York */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/1
                     */
                    readonly href?: string;
                };
                /**
                 * @deprecated
                 * @description Location group to filter by if `reportFilters.location` is set to `specific` or `specificHierarchy`.
                 *
                 *     You can filter by multiple locations using a `locationGroup`, or alternatively, you can filter by a single `location`. You cannot filter both `locationGroup` and `location` at the same time.
                 */
                locationGroup?: {
                    /** @example 7 */
                    key?: string | null;
                    /** @example USA-GRP */
                    id?: string | null;
                    /** @example USA Locations */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the location group.
                     * @example /objects/company-config/location-group/7
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Department to filter by if `reportFilters.department` is set to `specific` or `specificHierarchy`.
                 *
                 *     You can filter by a single `department`, or alternatively, you can filter by multiple departments using a `departmentGroup`. You cannot filter both `department` and `departmentGroup` at the same time.
                 */
                department?: {
                    /**
                     * @description System-assigned key for the department.
                     * @example 9
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier of the department.
                     * @example PRS
                     */
                    id?: string | null;
                    /**
                     * @description Name of the department.
                     * @example Partner Sales
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
                /**
                 * @deprecated
                 * @description Department group to filter by if `reportFilters.department` is set to `specific` or `specificHierarchy`. If you've defined department groups, these will be available to you in addition to the individual departments.
                 *
                 *     You can filter by multiple departments using a `departmentGroup`, or alternatively, you can filter by a single `department`. You cannot filter both `departmentGroup` and `department` at the same time.
                 */
                departmentGroup?: {
                    /**
                     * @description System-assigned key for the department group.
                     * @example 3086
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier of the department group.
                     * @example SA-GRP
                     */
                    id?: string | null;
                    /**
                     * @description Name of the department group.
                     * @example Sales Group
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department group.
                     * @example /objects/company-config/department-group/3086
                     */
                    readonly href?: string;
                };
            };
            /**
             * @description Filter by the specified dimension group values if `reportFilters` is set to `specific` or `specificHierarchy`.
             *     A dimension group is a classification system used to organize, sort, and report on your company information in meaningful ways. Each dimension group has a set of related values with transactions and entries. Every transaction you enter can be tagged with multiple dimension values for identification and reporting.
             */
            dimensionsGroup?: {
                /**
                 * @description Location group to filter by if `reportFilters.location` is set to `specific` or `specificHierarchy`.
                 *
                 *     You can filter by multiple locations using a `locationGroup`, or alternatively, you can filter by a single `location`. You cannot filter both `locationGroup` and `location` at the same time.
                 */
                locationGroup?: {
                    /** @example 7 */
                    key?: string | null;
                    /** @example USA-GRP */
                    id?: string | null;
                    /** @example USA Locations */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the location group.
                     * @example /objects/company-config/location-group/7
                     */
                    readonly href?: string;
                };
                /**
                 * @description Department group to filter by if `reportFilters.department` is set to `specific` or `specificHierarchy`. If you've defined department groups, these will be available to you in addition to the individual departments.
                 *
                 *     You can filter by multiple departments using a `departmentGroup`, or alternatively, you can filter by a single `department`. You cannot filter both `departmentGroup` and `department` at the same time.
                 */
                departmentGroup?: {
                    /**
                     * @description System-assigned key for the department group.
                     * @example 3086
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier of the department group.
                     * @example SA-GRP
                     */
                    id?: string | null;
                    /**
                     * @description Name of the department group.
                     * @example Sales Group
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department group.
                     * @example /objects/company-config/department-group/3086
                     */
                    readonly href?: string;
                };
            };
            /** @description Array of account ranges for the account group. */
            accountRanges?: components["schemas"]["objects.general-ledger.account-range"][];
            /** @description Array of statistical account ranges for the account group. */
            statisticalAccountRanges?: components["schemas"]["objects.general-ledger.account-range"][];
            /** @description Array of account group members for the account group. */
            accountGroupMembers?: components["schemas"]["objects.general-ledger.account-group-member"][];
            /** @description Array of account group category members for the account group. */
            accountGroupCategoryMembers?: components["schemas"]["objects.general-ledger.account-group-category-member"][];
            /** @description Array of statistical account group category members for the account group. */
            statisticalAccountGroupCategoryMembers?: components["schemas"]["objects.general-ledger.account-group-category-member"][];
            /** @description Array of computation group members for the account group. */
            accountGroupComputation?: components["schemas"]["objects.general-ledger.account-group-computation"][];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
            /**
             * @description URL endpoint for the account group.
             * @example /objects/general-ledger/account-group/33
             */
            readonly href?: string;
        };
        "general-ledger-account-groupRequiredProperties": Record<string, never>;
        /** @description Account group purposes let you filter account groups according to why you might use them, which is particularly useful in financial reporting. You create account group purposes and then assign them to account groups when you create or update the groups. */
        "objects.general-ledger.account-group-purpose": {
            /**
             * @description System-assigned key for the account group purpose.
             * @example 21
             */
            readonly key?: string;
            /**
             * @description Name for the account group purpose.
             * @example P&L
             */
            id?: string;
            /**
             * @description URL endpoint of the account group purpose.
             * @example /objects/general-ledger/account-group-purpose/2
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "general-ledger-account-group-purposeRequiredProperties": Record<string, never>;
        /** @description General ledger account group member. */
        "objects.general-ledger.account-group-member": {
            /**
             * @description System-assigned unique key for the account group member.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the account group member.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the account group member.
             * @example /objects/general-ledger/account-group-member/23
             */
            readonly href?: string;
            /**
             * @description Sort order for the account group members.
             * @example 1
             */
            sortOrder?: number;
            /** @description Account group containing the account group member. */
            accountGroup?: {
                /**
                 * @description Account group key.
                 * @example 22
                 */
                key?: string;
                /**
                 * @description Account group ID.
                 * @example Payroll group
                 */
                id?: string;
                /** @example /objects/general-ledger/account-group/22 */
                readonly href?: string;
            };
            /** @description General ledger account group. */
            readonly glAccountGroup?: {
                /**
                 * @description General ledger account group key.
                 * @example 21
                 */
                readonly key?: string;
                /**
                 * @description General ledger account group ID.
                 * @example 85 - Cash
                 */
                readonly id?: string;
                /** @example /objects/general-ledger/account-group/21 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Account group category member. */
        "objects.general-ledger.account-group-category-member": {
            /**
             * @description System-assigned key for the account group category member.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Account group category member ID.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description Endpoint for the account group category member.
             * @example /objects/general-ledger/account-group-category-member/23
             */
            readonly href?: string;
            /**
             * @description Sort order.
             * @example 1
             */
            sortOrder?: number;
            accountCategory?: {
                /** @example 21 */
                key?: string;
                /** @example Fixed Assets */
                id?: string;
                /** @example /objects/general-ledger/reporting-category/21 */
                readonly href?: string;
            };
            readonly glAccountGroup?: {
                /** @example 21 */
                readonly key?: string;
                /** @example Assets */
                readonly id?: string;
                /** @example /objects/general-ledger/account-group/21 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Computation account groups */
        "objects.general-ledger.account-group-computation": {
            /**
             * @description System-assigned key for the computation account group.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the computation account group.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the computation account group.
             * @example /objects/general-ledger/account-group-computation/23
             */
            readonly href?: string;
            formulaLeft?: {
                glAccountGroup?: {
                    /**
                     * @description Unique identifier for the left-hand account group in the computation formula.
                     * @example Payable account group
                     */
                    id?: string | null;
                    /**
                     * @description Key for the left-hand account group in the computation formula.
                     * @example 21
                     */
                    key?: string | null;
                    /**
                     * @description URL endpoint for the left-hand account group in the computation formula.
                     * @example /objects/general-ledger/account-group/21
                     */
                    readonly href?: string;
                };
                glAccount?: {
                    /**
                     * @description Unique identifier for the left-hand account in the computation formula.
                     * @example 1000
                     */
                    id?: string | null;
                    /**
                     * @description Key for the left-hand account in the computation formula.
                     * @example 402
                     */
                    key?: string | null;
                    /**
                     * @description Name for the left-hand account in the computation formula.
                     * @example Cash account
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the left-hand account in the computation formula.
                     * @example /objects/general-ledger/account/402
                     */
                    readonly href?: string;
                };
                /**
                 * @description As of period for the left-hand account in the computation formula.
                 * @example forPeriod
                 * @enum {string}
                 */
                asOf?: "forPeriod" | "startOfPeriod" | "endOfPeriod";
                /**
                 * @description Constant for the left-hand account in the computation formula, for example, a tax rate or discount.
                 * @example 12
                 */
                constant?: string | null;
            };
            /**
             * @description Operator for the computation formula.
             * @example add
             * @enum {string}
             */
            operator?: "add" | "subtract" | "multiply" | "divide";
            formulaRight?: {
                glAccountGroup?: {
                    /**
                     * @description Unique identifier for the right-hand account group in the computation formula.
                     * @example Payable account group
                     */
                    id?: string | null;
                    /**
                     * @description Key for the right-hand account group in the computation formula.
                     * @example 21
                     */
                    key?: string | null;
                    /**
                     * @description URL endpoint for the right-hand account group in the computation formula.
                     * @example /objects/general-ledger/account-group/21
                     */
                    readonly href?: string;
                };
                glAccount?: {
                    /**
                     * @description Unique identifier for the right-hand account in the computation formula.
                     * @example 1000
                     */
                    id?: string | null;
                    /**
                     * @description Key for the right-hand account in the computation formula.
                     * @example 402
                     */
                    key?: string | null;
                    /**
                     * @description Name for the right-hand account in the computation formula.
                     * @example Cash account
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the right-hand account in the computation formula.
                     * @example /objects/general-ledger/account/402
                     */
                    readonly href?: string;
                };
                /**
                 * @description As of period for the right-hand account in the computation formula.
                 * @example forPeriod
                 * @enum {string}
                 */
                asOf?: "forPeriod" | "startOfPeriod" | "endOfPeriod";
                /**
                 * @description Constant for the right-hand account in the computation formula, for example, a tax rate or discount.
                 * @example 12
                 */
                constant?: string | null;
            };
            /**
             * @description Number of decimal places to display.
             * @example 2
             */
            numberOfDecimalPlaces?: number;
            /**
             * @description Type of number to display.
             * @example number
             * @enum {string}
             */
            displayAs?: "number" | "percent" | "ratioWithDecimals" | "ratioWithoutDecimals" | "dailyAverage" | "weeklyAverage" | "monthlyAverage" | "quarterlyAverage";
            /**
             * @description Unit of measurement.
             * @example $
             */
            unit?: string;
            /**
             * @description Placement of the unit of measurement.
             * @example right
             * @enum {string|null}
             */
            unitPlacement?: null | "left" | "right";
            readonly glAccountGroup?: {
                /** @example 21 */
                readonly key?: string;
                /**
                 * @description Reference to the owning account group for this account group computation.
                 * @example Payable account group
                 */
                readonly id?: string;
                /** @example /objects/general-ledger/account-group/21 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Account group maps provide a view of the relationship between accounts and account groups in your chart of accounts. */
        "objects.general-ledger.account-group-map": {
            /**
             * @description System-assigned unique key for the account group map.
             * @example 132
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the account group map.
             * @example 1000
             */
            readonly id?: string;
            /**
             * @description Specifies the name of the account.
             * @example Bank of America A/c
             */
            accountName?: string;
            /**
             * @description Specifies the name of the account group to which the account is assigned.
             * @example Accounts Receivable
             */
            accountGroupName?: string;
            /**
             * @description URL endpoint for the account group map.
             * @example /objects/general-ledger/account-group-map/132
             */
            readonly href?: string;
        };
        /** @description Unique sequential number called an accounting sequence number for each posted transaction that affects the General Ledger (GL). */
        "objects.general-ledger.accounting-sequence": {
            /**
             * @description System-assigned unique key for the accounting sequence.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the accounting sequence. This value is the same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the accounting sequence.
             * @example /objects/general-ledger/accounting-sequence/23
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Specifies the start date of the accounting sequence.
             * @example 2026-04-01
             */
            startDate?: string;
            /**
             * Format: date
             * @description Specifies the end date of the accounting sequence.
             * @example 2026-06-30
             */
            endDate?: string;
            /** @description Reference to the entity associated with the accounting sequence. */
            entity?: {
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the entity.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the entity.
                 * @example 1
                 */
                id?: string;
            };
            audit?: components["schemas"]["audit.s2"];
            /** @description Reference to a collection of accounting sequence lines associated with the accounting sequence. There must be at least one line. */
            lines?: components["schemas"]["objects.general-ledger.accounting-sequence-line"][];
        };
        "general-ledger-accounting-sequenceRequiredProperties": Record<string, never>;
        /** @description Line item for the unique sequential accounting sequence called an accounting sequence number for each posted transaction that affects the general ledger. */
        "objects.general-ledger.accounting-sequence-line": {
            /**
             * @description System-assigned unique key for the accounting sequence line.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the accounting sequence line. This value is the same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the accounting sequence line.
             * @example /objects/general-ledger/accounting-sequence-line/23
             */
            readonly href?: string;
            /** @description Reference to the GL journal associated with the accounting sequence line. */
            gljournal?: {
                /**
                 * @description Unique key for GL journal.
                 * @example 107
                 */
                key?: string;
                /**
                 * @description Identifier for the GL journal.
                 * @example CRJ
                 */
                id?: string;
                /**
                 * @description URL endpoint for the GL journal.
                 * @example /objects/general-ledger/journal/107
                 */
                readonly href?: string;
            };
            /** @description Reference to the document sequence associated with the accounting sequence line. */
            documentSequence?: {
                /**
                 * @description Unique key for the document sequence.
                 * @example 107
                 */
                key?: string;
                /**
                 * @description Identifier for the document sequence.
                 * @example Vendors
                 */
                id?: string;
                /**
                 * @description URL endpoint for the document sequence.
                 * @example /objects/company-config/document-sequence/107
                 */
                readonly href?: string;
                /**
                 * @description Indicates the next sequence number.
                 * @example 1
                 */
                readonly nextNumber?: string;
            };
            audit?: components["schemas"]["audit.s2"];
            /** @description Reference to the accounting sequence associated with the accounting sequence line. */
            accountingSequence?: {
                /**
                 * @description Identifier for the accounting sequence.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description Unique key for the accounting sequence.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description URL endpoint for the accounting sequence.
                 * @example /objects/general-ledger/accounting-sequence/23
                 */
                readonly href?: string;
            };
        };
        "general-ledger-accounting-sequence-lineRequiredProperties": {
            gljournal: Record<string, never>;
            documentSequence: Record<string, never>;
            accountingSequence: Record<string, never>;
        };
        /** @description Budgets help you to track company performance over time by comparing actual results against forecasted figures across pre-defined reporting periods. */
        "objects.general-ledger.budget": {
            /**
             * @description System-assigned unique key for the budget.
             * @example 5
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the budget. Assign a budget `id` that does not include a specific fiscal year or date to allow new time periods to be added to an existing budget when needed.
             * @example Employee Expense Budget
             */
            id?: string;
            /**
             * @description Description of the budget.
             * @example Budget for project costs
             */
            description?: string;
            /**
             * @description Indicates whether this budget is the company's default budget for financial reporting. Only one top-level budget can be set to `true` to designate it as the default. The system sets this value to `false` for all other budgets.
             * @default false
             * @example false
             */
            isDefault?: boolean;
            /**
             * @description Identifies the user who submitted the budget.
             * @example Admin
             */
            readonly submitterName?: string;
            /** @example active */
            status?: components["schemas"]["status"];
            /**
             * @description Indicates whether the budget includes consolidated amounts. Set to `true` to include in consolidated financial reports. (Consolidation subscription)
             * @default false
             * @example false
             */
            consolidateAmounts?: boolean;
            /**
             * @description Specifies the budget currency in a multi-currency company. Required when `consolidateAmounts` is set to `true`. (Consolidation subscription)
             * @example USD
             */
            currency?: string;
            /**
             * @description Indicates whether project estimates can be posted to the budget. Set to `true` to allow posting. (Construction subscription)
             * @default false
             * @example false
             */
            postProjectEstimate?: boolean;
            /**
             * @description Indicates whether project contracts can be posted to the budget. Set to `true` to allow posting. (Construction subscription)
             * @default false
             * @example false
             */
            postProjectContract?: boolean;
            /**
             * @description Indicates whether the payment is system generated.
             * @default false
             * @example true
             * @enum {string}
             */
            readonly systemGenerated?: "true" | "false";
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * @description Identifies the user who created the budget.
                 * @example Admin
                 */
                readonly createdBy?: string | null;
                /**
                 * @description Identifies the user who most recently modified the budget.
                 * @example Admin
                 */
                readonly modifiedBy?: string | null;
            };
            entity?: components["schemas"]["entity-ref"];
            /**
             * @description URL endpoint for the budget.
             * @example /objects/general-ledger/budget/1
             */
            readonly href?: string;
            /** @description Budget detail line items contained within the budget. */
            lines?: components["schemas"]["objects.general-ledger.budget-detail"][];
        };
        "general-ledger-budgetRequiredProperties": {
            lines?: unknown[];
        };
        /** @description Budget details for a general ledger account, including dimensions for the account, reporting periods for the budget, and the budget amount for each period. Create and maintain budget details from the owning budget object. */
        "objects.general-ledger.budget-detail": {
            /**
             * @description System-assigned unique key for the budget details.
             * @example 291
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the budget details. This value is the same as the key for this object.
             * @example 291
             */
            readonly id?: string;
            /**
             * @description URL for the the budget detail.
             * @example /objects/general-ledger/budget-detail/291
             */
            readonly href?: string;
            /** @description Budget that contains the budget details. */
            readonly budget?: {
                /**
                 * @description Unique key for the budget.
                 * @example 5
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the budget.
                 * @example Employee Expense Budget
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the budget.
                 * @example /objects/general-ledger/budget/5
                 */
                readonly href?: string;
            };
            /** @description General ledger account associated with the budget details. Once the details are saved, the selected account cannot be changed. */
            glAccount?: {
                /**
                 * @description Unique key of the account.
                 * @example 9
                 */
                key?: string;
                /**
                 * @description Identifier of the account.
                 * @example 4000
                 */
                id?: string;
                /**
                 * @description Name of the account.
                 * @example Revenue
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint of the account.
                 * @example /objects/general-ledger/account/9
                 */
                readonly href?: string;
            };
            /** @description Dimensions associated with the budget detail. Any dimension that is available in the General Ledger can be used with budgets, including user-defined dimensions. */
            dimensions?: components["schemas"]["dimension-ref-immutable"];
            /**
             * @description Reporting period for the budget details, limits information to a specific time-period.
             *
             *     A reporting period cannot be used if it has already been assigned to the same combination of account, department and location in another budget detail.
             */
            reportingPeriod?: {
                /**
                 * @description Unique key for the reporting period.
                 * @example 395
                 */
                key?: string;
                /**
                 * @description Identifier for the reporting period.
                 * @example Current Month
                 */
                id?: string;
                /**
                 * Format: date
                 * @description Date the reporting period starts.
                 * @example 2016-01-08
                 */
                readonly startDate?: string;
                /**
                 * Format: date
                 * @description Date the reporting period ends.
                 * @example 2025-01-08
                 */
                readonly endDate?: string;
                /**
                 * @description URL endpoint for the reporting period.
                 * @example /objects/general-ledger/reporting-period/395
                 */
                readonly href?: string;
            };
            /**
             * @description Brief description with any relevant notes for the budget details.
             * @example Projection for 2025
             */
            notes?: string | null;
            /** @description Defines how the budget details are calculated using the specified budget type and planned growth. The calculation is triggered when the budget details object is created or updated. */
            budgetGrowth?: {
                /**
                 * @description Indicates whether the budget is based on the budget type, amount, actual amount, or number of employees. Used by the system to calculate budget growth.
                 * @default null
                 * @example budget
                 * @enum {string|null}
                 */
                basedOn?: null | "budget" | "actual" | "employeeCount";
                /**
                 * Format: decimal-precision-2
                 * @description Amount of planned growth or reduction. Used by the system to calculate budget growth.
                 * @example 10.00
                 */
                growBy?: string;
                /**
                 * @description Indicates whether the planned growth value is a percentage or fixed amount. Used by the system to calculate budget growth.
                 * @default null
                 * @example percentage
                 * @enum {string|null}
                 */
                perPeriod?: null | "actual" | "percentage";
            };
            /**
             * Format: decimal-precision-2
             * @description Budgeted amount for the budget details.
             * @example 100.00
             */
            amount?: string;
            /** @description Currency for the budgeted amount. */
            currency?: {
                /**
                 * @description Transaction currency.
                 * @example GBP
                 */
                txnCurrency?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        /** @description General ledger journal */
        "objects.general-ledger.journal": {
            /**
             * @description System-assigned key for the journal. Used to identify the journal in URLs or JSON bodies for all operations on the journal.
             * @example 3
             */
            readonly key?: string;
            /**
             * @description An abbreviation (symbol) for this journal, for example, AP. In most places in Sage Intacct, the symbol appears along with the `name` of the journal, as in "AP--Accounts Payable."
             * @example EJ
             */
            id?: string;
            /**
             * @description The full name of the journal, as it should appear in reports.
             * @example Expense Journal
             */
            name?: string;
            /**
             * @description Set to `true` to enable journal entry line items for a project to be marked as billable. (Requires Projects subscription and billable General Ledger transactions to be enabled.)
             * @default false
             * @example true
             */
            isBillable?: boolean;
            status?: components["schemas"]["status"];
            /**
             * @description To Check if the journal is an adjustments journal.
             * @default false
             * @example false
             */
            isAdjustment?: boolean;
            /**
             * @description The reporting book for which the journal was created. For most companies, the reporting book is `Accrual`. If the company is set up for dual-method reporting, the choices are Accrual, Cash, or Accrual and cash.
             * @example Accrual
             */
            readonly bookId?: string;
            /**
             * @description A book type could be Accrual, Cash, Cash and Accrual, or Consolidation.  For most companies, the reporting book is accrual. If the company is set up for dual-method reporting, the choices are `accrual`, `cash`, or `cashAndAccrual`.
             * @default accrual
             * @example accrual
             * @enum {string}
             */
            bookType?: "accrual" | "cash" | "cashAndAccrual" | "consolidation";
            /**
             * @description Set to `true` to prevent direct entry of journal entries for this journal .
             * @default false
             * @example false
             */
            disallowDirectPosting?: boolean;
            /**
             * @description Set to `true` to enable e-reporting for this journal; applicable only for France e-invoice enabled entities.
             * @default false
             * @example false
             */
            enableEReporting?: boolean;
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description Set to `true` to enable [journal entry approvals](https://www.intacct.com/ia/docs/en_US/help_action/General_Ledger/Approvals/journal-entry-approval-overview.htm).
             * @default false
             * @example false
             */
            readonly enableApproval?: boolean;
            /**
             * @description URL endpoint for this journal.
             * @example /objects/general-ledger/journal/3
             */
            readonly href?: string;
        };
        "general-ledger-journalRequiredProperties": Record<string, never>;
        /** @description User-defined books give you a way to manage different reporting standards beyond what's available with GAAP and tax books. */
        "objects.general-ledger.user-defined-book": {
            /**
             * @description System-assigned unique key for the user-defined book.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the user-defined book.
             * @example IFRS9
             */
            id?: string;
            /**
             * @description Description of the user-defined book.
             * @example IFRS 9 Adjustments Book
             */
            description?: string;
            /**
             * @description Indicates whether the user-defined book is used for management reporting purposes. Management reporting books do not impact actual books. They bypass closed periods and can stack on top of actual books when reports are run. User-defined journals and the Software Digital Board Book can only post to management reporting books. Subledgers, such as Accounts Payable, cannot post to management reporting books.
             * @default false
             * @example false
             */
            isManagementReporting?: boolean;
            /** @example inactive */
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
            /**
             * @description URL endpoint for the user-defined book.
             * @example /objects/general-ledger/user-defined-book/1
             */
            readonly href?: string;
        };
        "general-ledger-user-defined-bookRequiredProperties": Record<string, never>;
        /** @description User-defined journals are required for creating journal entries in user-defined books. */
        "objects.general-ledger.user-defined-journal": {
            /**
             * @description System-assigned unique key for the user-defined journal.
             * @example 46
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the user-defined journal.
             * @example UDJ-INTERCO
             */
            id?: string;
            /**
             * @description Name of the user-defined journal.
             * @example Intercompany Adjustment Journal
             */
            name?: string;
            /**
             * @description Indicates whether entries in this journal are billable. If true, journal entries are billable, but individual entry lines can still be non-billable. Requires a Projects subscription and billable General Ledger (GL) transactions.
             * @default false
             * @example false
             */
            isBillable?: boolean;
            /** @description References the user-defined book to which this journal belongs. */
            userDefinedBook?: {
                /**
                 * @description Unique key for the user-defined book.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the user-defined book.
                 * @example CE
                 */
                id?: string;
                /**
                 * @description URL endpoint for the user-defined book.
                 * @example /objects/general-ledger/user-defined-book/1
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates the reporting method classification for the user-defined journal, `accrual` for most companies.
             * @default accrual
             * @example accrual
             * @enum {string}
             */
            bookType?: "accrual" | "cash" | "cashAndAccrual" | "consolidation";
            /**
             * @description Indicates whether entries must be posted through sub-ledger journals. If true, direct posting is disabled. Requires dual-method reporting.
             * @default false
             * @example false
             */
            disallowDirectPosting?: boolean;
            /** @example active */
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
            /**
             * @description URL endpoint for this journal.
             * @example /objects/general-ledger/user-defined-journal/46
             */
            readonly href?: string;
        };
        "general-ledger-user-defined-journalRequiredProperties": Record<string, never>;
        /** @description Journal entries are used to create, update, or reverse accounting entries within a journal before they are posted to the general ledger for financial reporting and analysis. */
        "objects.general-ledger.journal-entry": {
            /**
             * @description System-assigned unique key for the journal entry.
             * @example 132
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the journal entry.
             * @example 132
             */
            readonly id?: string;
            /**
             * @description System-assigned transaction number for the journal entry.
             * @example 40
             */
            readonly txnNumber?: number;
            /** @description Specifies the journal associated with this journal entry. */
            glJournal?: {
                /**
                 * @description System-assigned unique key for the journal associated with this journal entry.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Unique identifier for the journal associated with this journal entry.
                 * @example EJ
                 */
                id?: string;
                /**
                 * @description Indicates if the journal is intended for recording adjustments.
                 * @default false
                 * @example false
                 */
                readonly isAdjustment?: boolean;
                /**
                 * @description The full name of the journal, as it should appear in reports.
                 * @example Expense Journal
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/general-ledger/journal/3
                 */
                readonly href?: string;
            };
            /**
             * @description Description of the journal entry.
             * @example Revenue entries
             */
            description?: string;
            /**
             * Format: date
             * @description The date when the journal entry is recorded in the journal and posted to the general ledger for tracking and reporting.
             * @example 2023-04-01
             */
            postingDate?: string;
            /**
             * @description Scheduled operation key for the journal entry.
             * @example 40
             */
            readonly scheduledOperationKey?: string;
            /**
             * Format: date
             * @description The date a journal entry is automatically reversed in the general ledger. `automaticReversalDate` must be later than the `postingDate`.
             * @example 2023-04-04
             */
            automaticReversalDate?: string | null;
            /**
             * Format: date
             * @description The original posting date of the journal entry that is being reversed. Only populated if the journal entry has been reversed.
             * @example 2023-04-05
             */
            readonly reversedFromDate?: string | null;
            /** @description Identifies the journal entry that reversed the original entry. Only populated if the journal entry has been reversed. */
            readonly reversedBy?: {
                /**
                 * @description System-assigned unique key of the reversing entry.
                 * @example 663
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier of the reversing entry.
                 * @example 663
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the reversing entry.
                 * @example /objects/general-ledger/journal-entry/663
                 */
                readonly href?: string;
            };
            /**
             * @description The Sage Intacct module from which the journal entry originates.
             * @example 2.GL
             */
            moduleName?: string;
            /**
             * @description Unique identifier assigned to the journal entry by the user for tracking and reconciliation.
             * @example Recurr_GL_101
             */
            referenceNumber?: string;
            entity?: components["schemas"]["entity-ref"];
            /** @description RecordURL of the journal entry. */
            readonly webURL?: string;
            /** @description Specifies the base location for a multi-entity company. Required if multi-entity is enabled and entries do not balance by entity. */
            baseLocation?: {
                /**
                 * @description System-assigned unique key for the base location.
                 * @example 32
                 */
                key?: string;
                /**
                 * @description Unique identifier for the base location.
                 * @example BC
                 */
                id?: string;
                /**
                 * @description URL endpoint for the base location.
                 * @example /objects/company-config/location/32
                 */
                readonly href?: string;
            };
            /**
             * @description Shows the current state of the journal entry.
             *
             *     Note: The only valid values when creating a new entry are `posted` (default, system-defined state), and `draft`. Only populate the state field when creating a `draft` entry. This field cannot be changed when updating an existing journal entry.
             * @default posted
             * @example draft
             * @enum {string}
             */
            state?: "draft" | "submitted" | "partiallyApproved" | "approved" | "posted" | "declined" | "reversalPending" | "reversed";
            /**
             * @description System-assigned accounting sequence number that uniquely identifies each journal entry within the accounting sequence. For multi-entity companies that use accounting sequences.
             * @example GLJE_001
             */
            readonly sequenceNumber?: string;
            /**
             * @description Source of the transaction. For transactions created automatically from a bank feed, the value is bank, otherwise the value is null.
             * @default null
             * @example bank
             * @enum {string|null}
             */
            readonly txnSource?: null | "bank";
            /**
             * @description Invoice mode for France e-invoicing workflows; applicable only for France e-invoice enabled entities.
             *
             *     Supported values:
             *     - `tlb1` - E-Reporting mode for goods.
             *     - `tps1` - E-Reporting mode for services.
             *
             *     Leave this field blank when e-reporting does not apply.
             * @example tlb1
             * @enum {string|null}
             */
            invoiceMode?: null | "tlb1" | "tps1";
            /**
             * @description Indicates the e-reporting type used for transaction reporting; applicable only for France e-invoice enabled entities.
             * @example sales
             * @enum {string|null}
             */
            eReportingType?: null | "none" | "sales" | "payment";
            /**
             * Format: decimal-precision-2
             * @description Specifies the journal entry balance.
             * @example 1.07
             */
            balance?: string;
            /** @description Tax-related details applied to the journal entry, such as tax codes, rates and exemptions. This field applies only to companies using the Taxes application to track VAT or GST. */
            tax?: {
                /**
                 * @description Specifies the impact of a journal entry on tax calculations. This field applies only to companies using the Taxes application to track VAT or GST.
                 * @default null
                 * @example inbound
                 * @enum {string|null}
                 */
                taxImplication?: null | "none" | "inbound" | "outbound";
                /**
                 * tax-solution
                 * @description Reference to the tax solution. Required only if the company is set up for multiple tax jurisdictions and the journal entry occurs at the top level (GB, AU, and ZA only). See [Tax solutions](tax.tax-solution) for more information.
                 */
                readonly taxSolution?: {
                    /**
                     * @description System-assigned unique key for the tax solution.
                     * @example 5
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the tax solution.
                     * @example Australia - GST
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the tax solution.
                     * @example /objects/tax/tax-solution/5
                     */
                    readonly href?: string;
                };
                /**
                 * vendor
                 * @description Specifies the vendor for tax-related information when `taxImplication` is set to `inbound`.
                 */
                vendor?: {
                    /**
                     * @description System-assigned unique key for the vendor.
                     * @example 15
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the vendor.
                     * @example V-00014
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the vendor.
                     * @example /objects/accounts-payable/vendor/15
                     */
                    readonly href?: string;
                };
                /**
                 * customer
                 * @description Specifies the customer for tax-related information when `taxImplication` is set to `outbound`.
                 */
                customer?: {
                    /**
                     * @description System-assigned unique key for the customer.
                     * @example 14
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the customer.
                     * @example C-00019
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the customer.
                     * @example /objects/accounts-receivable/customer/14
                     */
                    readonly href?: string;
                };
                /**
                 * contact
                 * @description Specifies the associated contact details for the journal entry such as a vendor, customer, or other relevant entity.
                 */
                contact?: {
                    /**
                     * @description System-assigned unique key for the contact.
                     * @example 416
                     */
                    key?: string;
                    /**
                     * @description Unique idetifier for the contact.
                     * @example Klay Vanderbilt
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/416
                     */
                    readonly href?: string;
                };
            };
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description URL endpoint for the journal entry.
             * @example /objects/general-ledger/journal-entry/132
             */
            readonly href?: string;
            /** @description Account allocation run used by this journal entry. */
            readonly accountAllocationRun?: {
                /**
                 * @description System-assigned unique key for the account allocation run.
                 * @example 87
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the account allocation run.
                 * @example 87
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the account allocation run.
                 * @example /objects/general-ledger/account-allocation-run/87
                 */
                readonly href?: string;
            };
            accountAllocation?: {
                /**
                 * @description System-assigned unique key for the account allocation.
                 * @example 23
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the account allocation.
                 * @example Monthly expense allocation
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the account allocation.
                 * @example /objects/general-ledger/account-allocation/23
                 */
                readonly href?: string;
            };
            /** @description Transaction template that this journal entry is based on. */
            txnTemplate?: {
                /**
                 * @description Unique key for the transaction template.
                 * @example 23
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the transaction template.
                 * @example Monthly Payroll
                 */
                readonly id?: string | null;
            };
            /** @description Supporting document for the adjustment. */
            attachment?: {
                /**
                 * @description System-assigned key for the supporting document.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the supporting document.
                 * @example Sales01
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/1
                 */
                readonly href?: string;
            };
            /** @description A collection of line items within the journal entry. At least two line items are required per journal entry, one debit and one credit. */
            lines?: components["schemas"]["objects.general-ledger.journal-entry-line"][];
        };
        "general-ledger-journal-entryRequiredProperties": {
            lines: unknown[];
        };
        /** @description Provides detailed and summary information for each line item within a journal entry. */
        "objects.general-ledger.journal-entry-line": {
            /**
             * @description System assigned unique key for the journal entry line item.
             * @example 1981
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the journal entry line item.
             * @example 1981
             */
            readonly id?: string;
            /**
             * @description Line number of a line item within the journal entry.
             * @example 1
             */
            readonly lineNumber?: number;
            /**
             * @description Specifies whether the line item in the journal entry is a debit or credit.
             * @default debit
             * @example credit
             * @enum {string}
             */
            txnType?: "debit" | "credit";
            /**
             * Format: decimal-precision-2
             * @description Amount of the line item as an absolute value within the journal entry.
             * @example 100.45
             */
            txnAmount?: string;
            /**
             * Format: date
             * @description Date when the line item was added to the journal entry.
             * @example 2024-01-23
             */
            readonly entryDate?: string;
            /**
             * @description Reference for the journal entry line item, this is a user-entered value that can contain numeric or alpha-numeric values.
             * @example CalOil_Credit_01-24
             */
            documentId?: string;
            /**
             * @description Description of the journal entry line.
             * @example CalOil Credit entries January 2024
             */
            description?: string;
            /**
             * @description Quantity of units associated with the journal entry line item, representing a non-monetary measurement, such as hours or other measurable units.
             * @example 5
             */
            readonly numberOfUnits?: number;
            /** @description Reconciliation group that links related journal entry line items. */
            readonly reconciliationGroup?: {
                /**
                 * Format: date
                 * @description Automatically generated date when the line item was reconciled or cleared as part of the reconciliation process.
                 * @example 2024-01-23
                 */
                readonly clearingDate?: string;
                /**
                 * @description Indicates whether the line item has been reconciled or cleared as part of the reconciliation process.
                 * @example false
                 * @enum {string}
                 */
                readonly cleared?: "true" | "false" | "matched";
                /**
                 * Format: date
                 * @description Date when the line item was reconciled as part of the reconciliation process.
                 * @example 2024-01-23
                 */
                readonly reconciliationDate?: string;
            };
            /**
             * @description Financial reporting period in which the line item is recorded. if company uses custom accounting periods.
             * @example 11
             */
            readonly accountingPeriod?: number;
            /**
             * @description Indicates whether the line item is billable. Requires a Projects subscription and the billable option to be enabled for General Ledger transactions.
             * @default false
             * @example false
             */
            isBillable?: boolean;
            /**
             * @description Indicates whether the line item has already been billed.
             * @default false
             * @example false
             */
            readonly isBilled?: boolean;
            /**
             * Format: decimal-precision-2
             * @description Line item amount in the company's base currency.
             * @example 100.45
             */
            readonly baseAmount?: string;
            /**
             * @description Specifies whether the transaction is payable or receivable in inter-entity transactions (IET).
             * @example r
             */
            readonly interEntityTxnType?: string;
            /** @description Represents the parent of the line item, used for nested items within the same journal entry. */
            readonly parent?: {
                /**
                 * @description System-assigned unique key for the immediate parent of the line item.
                 * @example 40
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the immediate parent of the line item.
                 * @example 40
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the immediate parent of the line item.
                 * @example /objects/general-ledger/journal-entry-line/40
                 */
                readonly href?: string;
            };
            state?: components["schemas"]["state"];
            audit?: components["schemas"]["audit.s1"];
            currency?: components["schemas"]["currency"];
            glAccount?: components["schemas"]["gl-account-ref"];
            /** @description Transaction allocation template, a predefined template used to allocate line items across accounts, departments, or entities. */
            allocation?: {
                /**
                 * @description System-assigned unique key for the transaction allocation template.
                 * @example 21
                 */
                key?: string;
                /**
                 * @description Unique identifier (user-defined) for the transaction allocation template.
                 * @example FA_ALLOC
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction allocation template.
                 * @example /objects/general-ledger/txn-allocation-template/21
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"];
            /**
             * @description URL endpoint for journal entry line item.
             * @example /objects/general-ledger/journal-entry-line/1981
             */
            readonly href?: string;
            /** @description Journal entry to which the line item belongs. */
            journalEntry?: {
                /**
                 * @description Unique identifier for the journal entry containing the line item.
                 * @example 132
                 */
                id?: string;
                /**
                 * @description System-assigned unique key for the journal entry containing the line item.
                 * @example 132
                 */
                key?: string;
                /**
                 * @description URL endpoint for the associated journal entry containing the line item.
                 * @example /objects/general-ledger/journal-entry/132
                 */
                readonly href?: string;
            };
            /** @description Tax-related details for the line item. */
            taxEntries?: components["schemas"]["objects.general-ledger.journal-entry-tax-entry"][];
        };
        /** @description journal entry tax entry, owned object of journal entry line. */
        "objects.general-ledger.journal-entry-tax-entry": {
            /**
             * @description System-assigned key for the tax entry.
             * @example 7149
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the tax entry.
             * @example 7149
             */
            readonly id?: string;
            /**
             * Format: decimal-precision-2
             * @description Base tax amount.
             * @example 100.00
             */
            baseTaxAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Transaction tax amount. For a PATCH request, set to `null` if you want Sage Intacct to recalculate the amount, or set to the value you want if you don't want the system to recalculate.
             * @example 100.00
             */
            txnTaxAmount?: string;
            /**
             * @description Tax rate.
             * @example 1.0299
             */
            taxRate?: number;
        } & {
            /** @description Tax details describe a specific type of tax that applies to journal entry lines. */
            taxDetail?: {
                /**
                 * @description System-assigned key for the tax detail.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier of the tax detail.
                 * @example Alaska Tax Detail
                 */
                id?: string;
                /**
                 * @description URL of the tax detail object.
                 * @example /objects/tax/tax-detail/1
                 */
                readonly href?: string;
            };
            /** journalEntryLine */
            readonly journalEntryLine?: {
                /**
                 * @description Identifier for the journal entry line object.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * @description System-assigned key for the journal entry line object.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @description URL for the journal entry line line object.
                 * @example /objects/general-ledger/journal-entry-line/100
                 */
                readonly href?: string;
            };
        };
        /** @description Transaction templates are used to create templates for journal entries. */
        "objects.general-ledger.journal-entry-txn-template": {
            /**
             * @description System-assigned unique key for the GL journal entry transaction template.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the GL journal entry transaction template.
             * @example Monthly payroll
             */
            id?: string;
            /**
             * @description URL endpoint for the GL journal entry transaction template.
             * @example /objects/general-ledger/journal-entry-txn-template/23
             */
            readonly href?: string;
            /**
             * @description Indicates the version key for the transaction template.
             * @example 23
             */
            readonly version?: string;
            /**
             * @description Specifies a description for the transaction template.
             * @example 2026 Monthly payroll
             */
            description?: string;
            /** @description Reference to the offset General Ledger (GL) account associated with the journal entry transaction template. */
            offsetGLAccount?: {
                /**
                 * @description URL endpoint for the offset GL account.
                 * @example /objects/general-ledger/account/10
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the offset GL account.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Identifier for the offset GL account.
                 * @example 2250
                 */
                id?: string;
                /**
                 * @description Name of the offset general ledger account.
                 * @example Payroll payable
                 */
                readonly name?: string;
            };
            /** @description Reference to the GL journal associated with the journal entry transaction template. */
            journal?: {
                /**
                 * @description URL endpoint for the GL journal.
                 * @example /objects/general-ledger/journal/6
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the GL journal.
                 * @example 6
                 */
                key?: string;
                /**
                 * @description Identifier for the GL journal.
                 * @example PYRL
                 */
                id?: string;
                /**
                 * @description Name of the GL journal.
                 * @example Payroll Journal
                 */
                readonly name?: string;
                /**
                 * @description Indicates whether the GL journal associated with the transaction template is billable.
                 * @default false
                 * @example false
                 */
                readonly isBillable?: boolean;
                /**
                 * @description Indicates whether the GL journal associated with the transaction template is an adjustment journal.
                 * @default false
                 * @example false
                 */
                readonly isAdjustment?: boolean;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
            /** @description Reference to a collection of lines associated with the transaction template. There must be at least one line. */
            lines?: components["schemas"]["objects.general-ledger.journal-entry-txn-template-line"][];
        };
        "general-ledger-journal-entry-txn-templateRequiredProperties": {
            lines: unknown[];
        };
        /** @description Lines that define the debit and credit entries for a journal entry transaction template. */
        "objects.general-ledger.journal-entry-txn-template-line": {
            /**
             * @description System-assigned unique key for the GL journal entry transaction template line.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the GL journal entry transaction template line. This value is the same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the GL journal entry transaction template line.
             * @example /objects/general-ledger/journal-entry-txn-template-line/23
             */
            readonly href?: string;
            /**
             * @description Descriptive label for the transaction template line.
             * @example Payroll Salaries
             */
            accountIdentifier?: string;
            /** @description Settings that control how the department field appears when posting a journal entry from this template. Use `isDepartmentEditable` and `hideDepartment` together to set the department to `read-only`, `editable`, or `hidden`. */
            departmentSettings?: {
                /**
                 * @description Indicates whether the department field is editable when posting a journal entry from this template. Set to `T` (true) for editable, or `F` (false) for read-only or hidden. Use with `hideDepartment` to determine the display state.
                 * @default F
                 * @example F
                 * @enum {string}
                 */
                isDepartmentEditable?: "T" | "F";
                /**
                 * @description Indicates whether the department field is hidden when posting a journal entry from this template. Set to `T` (true) to hide the field, or `F` (false) to show it. Use with `isDepartmentEditable` to determine the display state.
                 * @default F
                 * @example F
                 * @enum {string}
                 */
                hideDepartment?: "T" | "F";
            };
            /** @description Settings that control how the location field appears when posting a journal entry from this template. Use `isLocationEditable` and `hideLocation` together to set the location to `read-only`, `editable`, or `hidden`. */
            locationSettings?: {
                /**
                 * @description Indicates whether the location field is editable when posting a journal entry from this template. Set to `T` (true) for editable, or `F` (false) for read-only or hidden. Use with `hideLocation` to determine the display state.
                 * @default F
                 * @example F
                 * @enum {string}
                 */
                isLocationEditable?: "T" | "F";
                /**
                 * @description Indicates whether the location field is hidden when posting a journal entry from this template. Set to `T` (true) to hide the field, or `F` (false) to show it. Use with `isLocationEditable` to determine the display state.
                 * @default F
                 * @example F
                 * @enum {string}
                 */
                hideLocation?: "T" | "F";
            };
            /** @description Settings that control how the dimension field appears when posting a journal entry from this template. Use `isDimensionEditable` and `hideDimension` together to set the dimension to `read-only`, `editable`, or `hidden`. */
            dimensionSettings?: {
                /**
                 * @description Indicates whether the dimension field is editable when posting a journal entry from this template. Set to `T` (true) for editable, or `F` (false) for read-only or hidden. Use with `hideDimension` to determine the display state.
                 * @default F
                 * @example F
                 * @enum {string}
                 */
                isDimensionEditable?: "T" | "F";
                /**
                 * @description Indicates whether the dimension field is hidden when posting a journal entry from this template. Set to `T` (true) to hide the field, or `F` (false) to show it. Use with `isDimensionEditable` to determine the display state.
                 * @default F
                 * @example F
                 * @enum {string}
                 */
                hideDimension?: "T" | "F";
            };
            /**
             * @description Specifies whether the line entry is a debit or credit transaction. By default, the transaction type is set to debit.
             * @default debit
             * @example debit
             * @enum {string}
             */
            transactionType?: "debit" | "credit";
            /**
             * @description Indicates whether the transaction template line is billable.
             * @default false
             * @example false
             */
            isBillable?: boolean;
            dimensions?: components["schemas"]["dimension-ref"] & {
                /** @description Reference to the department associated with the GL journal entry transaction template line. */
                department?: {
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/39
                     */
                    readonly href?: string | null;
                    /**
                     * @description Unique key for the department.
                     * @example 39
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the department.
                     * @example 200
                     */
                    id?: string | null;
                    /**
                     * @description Name of the department.
                     * @example Sales
                     */
                    readonly name?: string | null;
                };
                /** @description Reference to the location associated with the GL journal entry transaction template line. */
                location?: {
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/72
                     */
                    readonly href?: string;
                    /**
                     * @description Unique key for the location.
                     * @example 72
                     */
                    key?: string;
                    /**
                     * @description Identifier for the location.
                     * @example AZ
                     */
                    id?: string;
                    /**
                     * @description Name of the location.
                     * @example Arizona
                     */
                    readonly name?: string;
                };
            };
            /** @description Reference to the GL account associated with the journal entry transaction template line. */
            glAccount?: {
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/16
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the GL account.
                 * @example 16
                 */
                key?: string;
                /**
                 * @description Identifier for the GL account.
                 * @example 6000
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example Salaries
                 */
                readonly name?: string;
            };
            status?: components["schemas"]["status"];
            /** @description Reference to the GL journal entry transaction template that this line belongs to. */
            readonly txnTemplate?: {
                /**
                 * @description Unique key for the GL journal entry transaction template.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the GL journal entry transaction template.
                 * @example Monthly payroll
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the GL journal entry transaction template.
                 * @example /objects/general-ledger/journal-entry-txn-template/23
                 */
                readonly href?: string;
            };
        };
        /** @description Reporting period definition */
        "objects.general-ledger.reporting-period": {
            /**
             * @description System-assigned unique key for the reporting period.
             * @example 421
             */
            readonly key?: string;
            /**
             * @description Name of the reporting period. The name cannot be changed after the reporting period is created.
             * @example Current Month
             */
            id?: string;
            /**
             * @description The first line to be shown on the report, such as "Quarter Ended".
             * @example Quarter Ended
             */
            columnHeader1?: string;
            /**
             * @description The second line to be shown on the report, such as "April 2023".
             * @example April 2023
             */
            columnHeader2?: string | null;
            /**
             * Format: date
             * @description The starting date of the reporting period.
             * @example 2023-04-01
             */
            startDate?: string | null;
            /**
             * Format: date
             * @description The ending date of the reporting period.
             * @example 2023-06-30
             */
            endDate?: string | null;
            /**
             * @description Set to `true` to make this reporting period available for inclusion in budgets.
             * @default false
             * @example true
             */
            isBudgetable?: boolean;
            /**
             * @description Reporting period type rule for GL listing will be custom. System reporting period will be standard.
             * @example custom
             * @enum {string}
             */
            readonly reportingPeriodType?: "standard" | "custom";
            /**
             * @description The date type is the rule.
             * @example 99
             */
            readonly dateType?: number;
            /**
             * @description URL endpoint for the reporting period.
             * @example /objects/general-ledger/reporting-period/1
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "general-ledger-reporting-periodRequiredProperties": Record<string, never>;
        /** @description General ledger adjustment journals represent journal entries that are used to make adjustments to closed accounting periods. Each adjustment journal contains its own line items, and you can create as many adjustment journals as needed. You can also control whether direct posting is allowed for each journal. */
        "objects.general-ledger.adjustment-journal": {
            /**
             * @description System-assigned unique key for the adjustment journal.
             * @example 35
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the adjustment journal.
             * @example PERIOD-END-26Q1
             */
            id?: string;
            /**
             * @description Name of the adjustment journal, as it appears in reports.
             * @example Period End Adjustment Journal - 26Q1
             */
            name?: string;
            /**
             * @description Indicates whether entries in this adjustment journal are billable. If true, journal entries are billable, but individual entry lines can still be non-billable. Requires a Projects subscription and billable General Ledger (GL) transactions.
             * @default false
             * @example false
             */
            isBillable?: boolean;
            /**
             * @description Indicates whether entries must be posted through sub-ledger journals. If true, direct posting is disabled. Requires dual-method reporting.
             * @default false
             * @example false
             */
            disallowDirectPosting?: boolean;
            /**
             * @description Identifies the reporting book associated with the adjustment journal, Accrual for most companies.
             * @example Accrual
             */
            readonly bookId?: string;
            /**
             * @description Indicates the reporting method classification for the adjustment journal, `accrual` for most companies.
             * @default accrual
             * @example accrual
             * @enum {string}
             */
            readonly bookType?: "accrual" | "cash" | "cashAndAccrual" | "consolidation";
            /** @example active */
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
            /**
             * @description URL endpoint for the adjustment journal.
             * @example /objects/general-ledger/adjustment-journal/35
             */
            readonly href?: string;
        };
        "general-ledger-adjustment-journalRequiredProperties": Record<string, never>;
        /** @description GAAP (Generally Accepted Accounting Principles) adjustment journals represent journal entries that are used to post adjustments without changing historical monthly amounts, which maintains the integrity of the operational reporting. */
        "objects.general-ledger.gaap-adjustment-journal": {
            /**
             * @description System-assigned unique key for the GAAP adjustment journal.
             * @example 89
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the GAAP adjustment journal.
             * @example GAJ
             */
            id?: string;
            /**
             * @description Name of the GAAP adjustment journal.
             * @example GAAP Adjustment Journal
             */
            name?: string;
            /**
             * @description Indicates whether entries in this adjustment journal are billable. If true, journal entries are billable, but individual entry lines can still be non-billable. Requires a Projects subscription and billable General Ledger (GL) transactions.
             * @default false
             * @example false
             */
            isBillable?: boolean;
            /**
             * @description Identifies the reporting book associated with the adjustment journal, Accrual for most companies.
             * @example Accrual
             */
            readonly bookId?: string;
            /**
             * @description Indicates the reporting method classification for the adjustment journal, `accrual` for most companies.
             * @default accrual
             * @example accrual
             * @enum {string}
             */
            bookType?: "accrual" | "cash" | "cashAndAccrual" | "consolidation";
            /**
             * @description Indicates whether entries must be posted through sub-ledger journals. If true, direct posting is disabled. Requires dual-method reporting.
             * @default false
             * @example false
             */
            disallowDirectPosting?: boolean;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
            /**
             * @description URL endpoint for the GAAP adjustment journal.
             * @example /objects/general-ledger/gaap-adjustment-journal/89
             */
            readonly href?: string;
        };
        "general-ledger-gaap-adjustment-journalRequiredProperties": Record<string, never>;
        /** @description Tax adjustment journals record tax changes for transactions already posted to the general ledger. */
        "objects.general-ledger.tax-adjustment-journal": {
            /**
             * @description System-assigned unique key for the tax adjustment journal.
             * @example 44
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the tax adjustment journal.
             * @example TAX-ADJ-26Q1
             */
            id?: string;
            /**
             * @description Name of the tax adjustment journal.
             * @example Tax Adjustment Journal - 26Q1
             */
            name?: string;
            /**
             * @description Indicates whether entries in this adjustment journal are billable. If true, journal entries are billable, but individual entry lines can still be non-billable. Requires a Projects subscription and billable General Ledger (GL) transactions.
             * @default false
             * @example true
             */
            isBillable?: boolean;
            /**
             * @description Identifies the reporting book associated with the adjustment journal. This is Accrual for most companies.
             * @example Accrual
             */
            readonly bookId?: string;
            /**
             * @description Indicates the reporting method classification for the adjustment journal. This is `accrual` for most companies.
             * @default accrual
             * @example accrual
             * @enum {string}
             */
            bookType?: "accrual" | "cash" | "cashAndAccrual" | "consolidation";
            /**
             * @description Indicates whether entries must be posted through sub-ledger journals. If true, direct posting is disabled. Requires dual-method reporting.
             * @default false
             * @example false
             */
            disallowDirectPosting?: boolean;
            /** @example active */
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
            /**
             * @description URL for this tax adjustment journal.
             * @example /objects/general-ledger/tax-adjustment-journal/44
             */
            readonly href?: string;
        };
        "general-ledger-tax-adjustment-journalRequiredProperties": Record<string, never>;
        /** @description Statistical account */
        "objects.general-ledger.statistical-account": {
            /**
             * @description System-assigned key for the statistical  account. Used to identify the account in URLs or JSON bodies for all operations on the account.
             * @example 397
             */
            readonly key?: string;
            /**
             * @description The primary account number. This number must be a specific length, which is set on the Accounting tab of the Company Information page.
             * @example 9001
             */
            id?: string;
            /**
             * @description Name or title of this statistical account.
             * @example Customer Account
             */
            name?: string;
            /**
             * @description This is a non-functional field, for information purposes only. It does not affect how amounts are calculated for reporting.
             * @default forPeriod
             * @example forPeriod
             * @enum {string}
             */
            reportType?: "forPeriod" | "cumulative";
            requireDimensions?: components["schemas"]["required-dimensions-ref"];
            /**
             * @description Set to `true` to mark the account as taxable.
             * @default false
             * @example true
             */
            isTaxable?: boolean;
            /**
             * @description Account categories are pre-defined groupings that arrange accounts into out-of-the-box reports, graphs, and performance cards. This field is available only for companies that were created with a QuickStart template or chose one later. If enabled, set a category for the account. The available values are set by the particular QuickStart template used for the company.
             * @example Customers
             */
            category?: string;
            /** @example inactive */
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description URL endpoint for the statistical account.
             * @example /objects/general-ledger/statistical-account/397
             */
            readonly href?: string;
            entity?: components["schemas"]["entity-ref"];
        };
        "general-ledger-statistical-accountRequiredProperties": Record<string, never>;
        /** @description Statistical journals hold all non-monetary journal entries, which do not have a debit or credit as a transaction */
        "objects.general-ledger.statistical-journal": {
            /**
             * @description System-assigned unique key for the statistical journal.
             * @example 36
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the statistical journal.
             * @example TSSJ
             */
            id?: string;
            /**
             * @description Name of the statistical journal, as it should appear in reports.
             * @example Timesheet Statistical Journal
             */
            name?: string;
            /**
             * @description Reporting book for which the statistical journal was created. For most companies, the reporting book is accrual. If the company is set up for dual-method reporting, the choices are accrual, cash, or accrual and cash.
             * @example Accrual
             */
            readonly bookId?: string;
            /**
             * @description Indicates the type of reporting book for which the statistical journal was created, either `accrual`, `cash`, `cash and accrual` or `consolidation`.  For most companies, the reporting book is accrual. If the company uses dual-method reporting, the choices are `accrual`, `cash`, or `cash and accrual`.
             * @default accrual
             * @example accrual
             * @enum {string}
             */
            readonly bookType?: "accrual" | "cash" | "cashAndAccrual" | "consolidation";
            /**
             * @description When `true`, prevents direct entry of journal entries for this journal.
             * @default false
             * @example false
             */
            disallowDirectPosting?: boolean;
            /** @example active */
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description URL endpoint for this journal.
             * @example /objects/general-ledger/statistical-journal/36
             */
            readonly href?: string;
        };
        "general-ledger-statistical-journalRequiredProperties": Record<string, never>;
        /** @description Statistical journal entries allow you to add, edit, or reverse statistical transactions within a journal before posting them to the general ledger for reporting and analysis. */
        "objects.general-ledger.statistical-journal-entry": {
            /**
             * @description System-assigned key for the statistical journal entry.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the statistical journal entry.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description System-assigned transaction number for the statistical journal entry.
             * @example 40
             */
            readonly txnNumber?: number;
            /**
             * @description Description of the statistical journal entry.
             * @example Revenue entries
             */
            description?: string;
            /**
             * Format: date
             * @description The date when the statistical journal entry is recorded in the journal and posted to the general ledger for tracking and reporting.
             * @example 2023-04-01
             */
            postingDate?: string;
            /**
             * @description The Sage Intacct module from which the statistical journal entry originates.
             * @default 2.GL
             * @example 2.GL
             */
            readonly moduleName?: string;
            /**
             * Format: date
             * @description The date a statistical journal entry is automatically reversed in the general ledger. `automaticReversalDate` must be later than the `postingDate`.
             * @example 2023-04-04
             */
            automaticReversalDate?: string | null;
            /**
             * Format: date
             * @description The original posting date of the statistical journal entry that is being reversed. Only populated if the journal entry has been reversed.
             * @example 2023-04-05
             */
            readonly reversedFromDate?: string | null;
            /** @description Identifies the statistical journal entry that reversed the original entry. Only populated if the journal entry has been reversed. */
            readonly reversedBy?: {
                /**
                 * @description System-assigned key of the reversing entry.
                 * @example 663
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier of the reversing entry.
                 * @example 663
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the reversing entry.
                 * @example /objects/general-ledger/statistical-journal-entry/663
                 */
                readonly href?: string;
            };
            /**
             * @description Shows the current state of the statistical journal entry. The only valid values when creating a new entry are `posted` (default, system-defined state), and `draft`. Only populate the state field when creating a `draft` entry. If you leave the state field blank, it will have the default state of `posted`.
             * @default posted
             * @example draft
             * @enum {string}
             */
            state?: "draft" | "submitted" | "partiallyApproved" | "approved" | "posted" | "declined" | "reversalPending" | "reversed";
            /**
             * @description System-assigned number that uniquely identifies the order of statistical transactions within a journal entry.
             * @example STATGLJE_001
             */
            readonly sequenceNumber?: string;
            /** @description Identifies the statistical journal associated to which the statistical journal entry belongs. */
            statisticalJournal?: {
                /**
                 * @description System-assigned key for the statistical journal.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Unique identifier for the statistical journal.
                 * @example EJ
                 */
                id?: string;
                /**
                 * @description URL endpoint for the statistical journal.
                 * @example /objects/general-ledger/statistical-journal/3
                 */
                readonly href?: string;
            };
            /**
             * @description Unique identifier assigned to the statistical journal entry by the user for tracking and reconciliation.
             * @example Recurr_GL_101
             */
            referenceNumber?: string;
            /** @description Supporting documents or files linked to the statistical journal entry. */
            attachment?: {
                /**
                 * @description System-assigned key for the attachment.
                 * @example 6
                 */
                key?: string;
                /**
                 * @description Unique identifier for the attachment.
                 * @example Doc6331
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/6
                 */
                readonly href?: string;
            };
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description URL endpoint for the statistical journal entry.
             * @example /objects/general-ledger/statistical-journal-entry/23
             */
            readonly href?: string;
            /** @description A collection of statistical transaction lines within the journal entry. At least one line in required per statistical journal entry. */
            lines?: components["schemas"]["objects.general-ledger.statistical-journal-entry-line"][];
        };
        "general-ledger-statistical-journal-entryRequiredProperties": {
            lines: unknown[];
        };
        /** @description Detail and header information for the statistical journal line items within the statistical journal entry. */
        "objects.general-ledger.statistical-journal-entry-line": {
            /**
             * @description System assigned unique key for the statistical journal entry line.
             * @example 1981
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the statistical journal entry line.
             * @example 1981
             */
            readonly id?: string;
            /**
             * @description Specifies the specific line number within the statistical journal entry.
             * @example 1
             */
            readonly lineNumber?: number;
            /**
             * @description Indicates the type of line item recorded in the statistical journal entry.
             * @default increase
             * @example increase
             * @enum {string}
             */
            txnType?: "increase" | "decrease";
            /**
             * Format: decimal-precision-2
             * @description Represents the amount of the line item as an absolute value within the statistical journal entry.
             * @example 100.45
             */
            txnAmount?: string;
            /**
             * Format: date
             * @description Specifies the date when the line item was added to the statistical journal entry.
             * @example 2021-01-23
             */
            readonly entryDate?: string;
            /**
             * @description Reference for the statistical journal entry line item, this is a user-entered value that can contain numeric or alpha-numeric values.
             * @example Headcount_Increase-03-24
             */
            documentId?: string;
            /**
             * @description Description of the statistical journal entry line.
             * @example Headcount Increase March 2024
             */
            description?: string;
            /**
             * @description Indicates the quantity associated with the line item, representing a non-monetary measurement, for example, headcount or production units.
             * @example 5
             */
            readonly numberOfUnits?: number;
            readonly reconciliationGroup?: {
                /**
                 * Format: date
                 * @description Represents an automatically generated date when the line item was reconciled or cleared as part of the reconciliation process.
                 * @example 2021-01-23
                 */
                readonly clearingDate?: string;
                /**
                 * @description Indicates whether the line item has been reconciled or cleared as part of the reconciliation process.
                 * @example false
                 * @enum {string}
                 */
                readonly cleared?: "true" | "false" | "matched";
                /**
                 * Format: date
                 * @description The date when the line item was reconciled as part of the reconciliation process.
                 * @example 2021-01-23
                 */
                readonly reconciliationDate?: string;
            };
            /**
             * @description Accounting period if company uses custom accounting periods.
             * @example 11
             */
            readonly accountingPeriod?: number | null;
            state?: components["schemas"]["state"];
            audit?: components["schemas"]["audit.s1"];
            statisticalAccount?: components["schemas"]["gl-statistical-account-ref"];
            /** @description Transaction allocation template, a predefined template used to allocate statistical line items across accounts, departments, or entities. */
            allocation?: {
                /**
                 * @description System-assigned unique key for the transaction allocation template.
                 * @example 21
                 */
                key?: string;
                /**
                 * @description Unique identifier (user-defined) for the transaction allocation template.
                 * @example FA_ALLOC
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction allocation template.
                 * @example /objects/general-ledger/txn-allocation-template/21
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"];
            /**
             * @description URL endpoint for the statistical journal entry line.
             * @example /objects/general-ledger/statistical-journal-entry-line/1981
             */
            readonly href?: string;
            /** @description Statistical journal entry to which this line item belongs. */
            readonly statisticalJournalEntry?: {
                /**
                 * @description Unique identifier for the statistical journal entry.
                 * @example 132
                 */
                readonly id?: string;
                /**
                 * @description System-assigned unique key for the statistical journal entry.
                 * @example 132
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the statistical journal entry.
                 * @example /objects/general-ledger/statistical-journal-entry/132
                 */
                readonly href?: string;
            };
        };
        /** @description Use a statistical adjustment journal to store entries made to closed periods. */
        "objects.general-ledger.statistical-adjustment-journal": {
            /**
             * @description System assigned unique key for the statistical adjustment journal.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the statistical adjustment journal.
             * @example ADJ-2025
             */
            id?: string;
            /**
             * @description Name of the statistical adjustment journal.
             * @example Adjustment entry journal 2025
             */
            name?: string;
            /**
             * @description Set to `true` to allow posts to this journal only through subledgers. This prevents direct entry of journal entries for this journal.
             * @default false
             * @example false
             */
            disallowDirectPosting?: boolean;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
            /**
             * @description URL endpoint for the statistical adjustment journal.
             * @example /objects/general-ledger/statistical-adjustment-journal/36
             */
            readonly href?: string;
        };
        "general-ledger-statistical-adjustment-journalRequiredProperties": Record<string, never>;
        /** @description Header object for standard allocation combinations that are used routinely. */
        "objects.general-ledger.txn-allocation-template": {
            /**
             * @description System-assigned unique key for the transaction allocation template.
             * @example 21
             */
            readonly key?: string;
            /**
             * @description User defined transaction allocation template ID.
             * @example FA_ALLOC
             */
            id?: string;
            /**
             * @description A description of the allocation.
             * @example Fixed Amount Allocation
             */
            description?: string;
            /**
             * @description Determines how transaction allocations are split across the dimensions included in a transaction.
             *
             *     * Use `percentage` to specify entries as percentages (default)
             *     * Use `exactAmount` to specify entries as fixed amounts
             *     * Use `fixedAmount` for a combination of both. Exact amounts are distributed first, based on the `lineNumber` values in each txn-allocation-template-line. Any remaining amount is distributed using the percentage allocations. Entries for exact amounts must have lower line numbers than entries for percentages, and percentages must always total 100%. (You use the `valueType` parameter on each entry to specify amount or percent.)
             * @default percentage
             * @example percentage
             * @enum {string}
             */
            allocateBy?: "percentage" | "exactAmount" | "fixedAmount";
            /**
             * @description A reference number or name to a specific document--such as a contract--used to define the transaction allocation template formula.
             * @example RJEALC
             */
            documentNumber?: string;
            status?: components["schemas"]["status"];
            /** @description Supporting document ID for this attachment. */
            attachment?: {
                /** @example 21 */
                key?: string;
                /** @example Sales01 */
                id?: string;
                /** @example /objects/attachment/21 */
                readonly href?: string;
            };
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description URL endpoint of the allocation template.
             * @example /objects/general-ledger/txn-allocation-template/21
             */
            readonly href?: string;
            /** @description Transaction allocation lines. */
            lines?: components["schemas"]["objects.general-ledger.txn-allocation-template-line"][];
        };
        "general-ledger-txn-allocation-templateRequiredProperties": {
            lines: unknown[];
        };
        /** @description Line level component of a transaction allocation template. */
        "objects.general-ledger.txn-allocation-template-line": {
            /**
             * @description System-assigned unique key for the allocation line.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description This value is the same as the `key` value for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description The exact amount or percentage to allocate for this line.
             * @example 60.56
             */
            value?: string;
            /**
             * @description Specifies whether the current line is an exact amount or percentage. Must be set when creating `fixedAmount` allocations, but is set automatically for `percentage` and `exactAmount` allocations.
             * @default amount
             * @example amount
             * @enum {string}
             */
            valueType?: "amount" | "percent";
            /**
             * @description Line number of the allocation entry. For `fixedAmount` allocations, exact amounts are distributed by line number.
             * @example 1
             */
            lineNumber?: number;
            /** @description Dimensions to use in allocations. */
            dimensions?: components["schemas"]["dimension-ref"] & {
                /** location */
                location?: {
                    /**
                     * @description Location key
                     * @example 1
                     */
                    key?: string;
                    /**
                     * @description Location ID
                     * @example US
                     */
                    id?: string;
                    /**
                     * @description Location name
                     * @example United States of America
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the location
                     * @example /objects/company-config/location/1
                     */
                    href?: string;
                };
                /** department */
                department?: {
                    /**
                     * @description Department key
                     * @example 3
                     */
                    key?: string;
                    /**
                     * @description Department ID
                     * @example ENG
                     */
                    id?: string;
                    /**
                     * @description Department name
                     * @example Engineering
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the department
                     * @example /objects/company-config/department/3
                     */
                    href?: string;
                };
            };
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description URL endpoint for the allocation template line.
             * @example /objects/general-ledger/txn-allocation-template-line/1
             */
            readonly href?: string;
            /** @description Transaction allocation template that this allocation line belongs to. */
            txnAllocationTemplate?: {
                /**
                 * @description Allocation template key
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Allocation template ID
                 * @example RootAllocation
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the allocation template
                 * @example /objects/general-ledger/txn-allocation-template/1
                 */
                readonly href?: string;
            };
        };
        /** @description Financial graphs visualize financial data to help businesses assess performance, spot trends, and make better decisions. */
        "objects.general-ledger.financial-graph": {
            /**
             * @description System-assigned unique key for the financial graph.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the financial graph. This is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the financial graph.
             * @example /objects/general-ledger/financial-graph/23
             */
            readonly href?: string;
            /**
             * @description Specifies the name of the financial graph.
             * @example Monthly Revenue vs Operating Expense
             */
            name?: string;
            /**
             * @description Specifies the title of the graph for display at the top of the graph.
             * @example Revenue and Operating Expense Trend (Last 12 Months)
             */
            graphTitle?: string;
            /**
             * @description Specifies the date that represents the specific point in time for the financial graph data.
             * @example 2026-01-10
             */
            asOfDate?: string;
            /**
             * @description Specifies the graph type for the financial graph, such as line, bar, or column graph.
             * @default col.1
             * @example line.1
             */
            reType?: string;
            /**
             * @description Specifies the primary graph series for the financial graph. This represents the main data points to be visualized in the graph.
             * @default P
             * @example A
             */
            series?: string;
            /**
             * @description Specifies the secondary graph series for the financial graph. This provides additional data points or comparisons to the primary series.
             * @default A
             * @example A
             */
            seconseries?: string;
            /**
             * @description Provides a brief descriptive comment for the financial graph. Use this comment to add additional context or information about the graph.
             * @example Tracks monthly revenue against operating expenses to monitor profitability trends.
             */
            comment?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
            entity?: components["schemas"]["entity-ref"];
        };
        /** @description Reporting accounts provide an optional reporting structure in the General Ledger, organized within reporting account sets. */
        "objects.general-ledger.reporting-account": {
            /**
             * @description System-assigned unique key for the reporting account.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the reporting account. This is the same value as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the reporting account.
             * @example /objects/general-ledger/reporting-account/23
             */
            readonly href?: string;
            /**
             * @description Specifies the account number for the reporting account.
             * @example 1000
             */
            accountNumber?: string;
            /**
             * @description Specifies the name of the reporting account.
             * @example Checking Account
             */
            name?: string;
            /**
             * @description Specifies the account type classification for the reporting account.
             * @default balancesheet
             * @example balancesheet
             * @enum {string}
             */
            accountType?: "balancesheet" | "incomestatement";
            /**
             * @description Specifies the account type classification for a statistical reporting account. Applies when `isStatistical` is true.
             * @default forperiod
             * @example forperiod
             * @enum {string}
             */
            statisticalAccountType?: "forperiod" | "cumulative";
            /**
             * @description Indicates whether this is a statistical account (tracks quantity/units rather than amounts)
             * @example true
             */
            isStatistical?: boolean;
            /** @description References a collection of reporting account maps that link this reporting account to GL accounts (for financial reporting) or statistical accounts (for statistical reporting). */
            reportingAccountMaps?: components["schemas"]["objects.general-ledger.reporting-account-map"][];
            /** @description References the reporting account set associated with the reporting account. */
            reportingAccountSet?: {
                /**
                 * @description Identifier for the reporting account set.
                 * @example 132
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the reporting account set.
                 * @example 132
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the reporting account set.
                 * @example /objects/general-ledger/reporting-account-set/132
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description Reporting account maps represent the mapping of a reporting account to GL accounts (for financial reporting) or statistical accounts (for statistical reporting). */
        "objects.general-ledger.reporting-account-map": {
            /**
             * @description System-assigned key for the reporting account map.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the reporting account map. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the reporting account map.
             * @example /objects/general-ledger/reporting-account-map/23
             */
            readonly href?: string;
            /** @description References the General Ledger (GL) or statistical account linked to the reporting account. A reporting account map can link to either a GL account or a statistical account, but not both. */
            account?: {
                glAccount?: {
                    /**
                     * @description Unique key for the GL account.
                     * @example 23
                     */
                    readonly key?: string;
                    /**
                     * @description Account number for the GL account.
                     * @example 1000
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the GL account.
                     * @example /objects/general-ledger/account/23
                     */
                    readonly href?: string;
                };
            } | {
                statisticalAccount?: {
                    /**
                     * @description Unique key for the statistical account.
                     * @example 33
                     */
                    key?: string;
                    /**
                     * @description Identifier for the statistical account.
                     * @example 3000
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the statistical account.
                     * @example /objects/general-ledger/statistical-account/33
                     */
                    readonly href?: string;
                };
            };
            /** @description References the reporting account linked to the GL or statistical account. Each reporting account map links one reporting account to one GL or statistical account. */
            reportingAccount?: {
                /**
                 * @description URL endpoint for the reporting account.
                 * @example /objects/general-ledger/reporting-account/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the reporting account.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the reporting account.
                 * @example 23
                 */
                readonly id?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description Reporting account sets group reporting accounts for General Ledger financial and statistical reporting. */
        "objects.general-ledger.reporting-account-set": {
            /**
             * @description System-assigned unique key for the reporting account set.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the reporting account set. This is the same value as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the reporting account set.
             * @example /objects/general-ledger/reporting-account-set/23
             */
            readonly href?: string;
            /**
             * @description Name of the reporting account set.
             * @example Consolidated Revenue Accounts
             */
            name?: string;
            /**
             * @description Description of the reporting account set, providing additional details about the set's purpose or contents.
             * @example Revenue accounts across all entities for consolidated reporting.
             */
            description?: string;
            /** @description References the user who is the administrator for the reporting account set, responsible for managing the set, account mappings, and permissions. */
            administrator?: {
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/1
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the user.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the user.
                 * @example Admin
                 */
                id?: string;
            };
            /** @description References a collection of permissions associated with the reporting account set, defining access for users or user groups. */
            permissions?: components["schemas"]["objects.general-ledger.reporting-account-set-permission"][];
            /** @description References a collection of reporting accounts associated with the reporting account set that are used for financial or statistical reporting. */
            reportingAccounts?: components["schemas"]["objects.general-ledger.reporting-account"][];
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
        };
        "general-ledger-reporting-account-setRequiredProperties": Record<string, never>;
        /** @description A reporting account set permission object defines whether access to a reporting account set is allowed or denied for everyone, a specific user group, or an individual user. */
        "objects.general-ledger.reporting-account-set-permission": {
            /**
             * @description System-assigned unique key for the reporting account set permission.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the reporting account set permission.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the reporting account set permission.
             * @example /objects/general-ledger/reporting-account-set-permission/23
             */
            readonly href?: string;
            /**
             * @description Specifies who the permission targets for the reporting account set; access is then controlled by `accessRights`.
             *
             *     * `everyone` - Applies to all users, regardless of group membership or individual user assignment.
             *     * `group` - The permission applies to the specified `userGroup`.
             *     * `user` - Applies to the specified individual `user`.
             * @example everyone
             * @enum {string}
             */
            permissionAppliesTo?: "everyone" | "group" | "user";
            /**
             * @description Indicates whether access to the reporting account set is allowed or denied.
             * @default allow
             * @example allow
             * @enum {string}
             */
            accessRights?: "allow" | "deny";
            audit?: components["schemas"]["audit.s2"];
            /** @description References the user group associated with the reporting account set permission. */
            userGroup?: {
                /**
                 * @description Unique key for the user group.
                 * @example 21
                 */
                key?: string;
                /**
                 * @description Identifier for the user group.
                 * @example 21
                 */
                id?: string;
                /**
                 * @description URL endpoint for the user group.
                 * @example /objects/company-config/user-group/21
                 */
                readonly href?: string;
            };
            /** @description References the user associated with the reporting account set permission. */
            user?: {
                /**
                 * @description Unique key for the user.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Identifier for the user.
                 * @example Admin
                 */
                id?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/2
                 */
                readonly href?: string;
            };
            /** @description References the reporting account set associated with the permission. */
            reportingAccountSet?: {
                /**
                 * @description Identifier for the reporting account set.
                 * @example 132
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the reporting account set.
                 * @example 132
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the reporting account set.
                 * @example /objects/general-ledger/reporting-account-set/132
                 */
                readonly href?: string;
            };
        };
        /** @description Report audiences define who a report is intended for, such as directors, board members, or internal users. */
        "objects.general-ledger.report-audience": {
            /**
             * @description System-assigned unique key for the report audience.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the report audience. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the report audience.
             * @example /objects/general-ledger/report-audience/23
             */
            readonly href?: string;
            /**
             * @description Name of the report audience.
             * @example Executive leadership team
             */
            name?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
            entity?: components["schemas"]["entity-ref"];
        };
        "general-ledger-report-audienceRequiredProperties": Record<string, never>;
        /** @description Report types define the business category of a General Ledger report, such as balance sheet, income statement, cash flow, or trial balance. */
        "objects.general-ledger.report-type": {
            /**
             * @description System-assigned unique key for the report type.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the report type. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the report type.
             * @example /objects/general-ledger/report-type/23
             */
            readonly href?: string;
            /**
             * @description Name of the report type.
             * @example Monthly balance sheet
             */
            name?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
            entity?: components["schemas"]["entity-ref"];
        };
        "general-ledger-report-typeRequiredProperties": Record<string, never>;
        /** @description Reporting category */
        "objects.general-ledger.reporting-category": {
            /**
             * @description System-assigned key for the reporting category.
             * @example 134
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the reporting category.
             * @example Cash and Cash Equivalents
             */
            id?: string;
            /**
             * @description URL endpoint for the reporting category.
             * @example /objects/general-ledger/reporting-category/23
             */
            readonly href?: string;
            /**
             * @description Indicates whether the reporting category is used for tracking statistical data such as operational metrics.
             * @default false
             * @example false
             */
            isStatistical?: boolean;
            /**
             * @description Specifies the category type associated with the reporting category.
             * @default asset
             * @example asset
             * @enum {string}
             */
            categoryType?: "asset" | "liability" | "equity" | "income" | "costOfRevenue" | "expense" | "other";
            /**
             * @description Normal balance.
             * @default debit
             * @example debit
             * @enum {string}
             */
            normalBalance?: "debit" | "credit";
            /**
             * @description To Check if the reporting category is system installed category or custom created.
             * @default false
             * @example false
             */
            readonly isSystemGenerated?: boolean;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description The General Ledger (GL) account balance report provides a snapshot of account balances for a specified period, showing opening balances, period activity, and closing balances across accounts and dimensions. */
        "services.reports.general-ledger-account-balance": {
            /**
             * @description Specifies the primary title to display at the top of the account balance report.
             * @example General Ledger Account Balances - March 2026
             */
            title1?: string;
            /**
             * @description Specifies the secondary title to display below the primary title for the account balance report.
             * @example NexCom Corporation | Reporting Book - Accrual | USD
             */
            title2?: string;
            /**
             * @description Specifies the text to display in the footer of the account balance report.
             * @example Confidential - For internal use only.
             */
            footerText?: string;
            /**
             * Format: date
             * @description Indicates the date the report is scheduled to run. If not provided, the report will run immediately.
             * @example 2026-03-31
             */
            scheduledReportDate?: string;
            /**
             * @description Specifies the name assigned to the account balance report, used for identification and reference purposes within the system.
             * @example GL Account Balance Report - March 2026 (Accrual)
             */
            reportName?: string;
            /**
             * @description Indicates the output format for the account balance report.
             * @default html
             * @example html
             * @enum {string}
             */
            outputType?: "html" | "pdf" | "csv" | "excel" | "text";
            /**
             * @description Indicates where to store the account balance report.
             * @default intacct
             * @example intacct
             * @enum {string}
             */
            outputLocation?: "intacct" | "cloud";
            cloudStoreParameters?: components["schemas"]["report.cloud-store-options"];
            /** @description Defines the input parameters for the account balance report, including time period, reporting book, dimensions, account filters, and output options. */
            parameters?: {
                timePeriod?: components["schemas"]["report-time-period-filter-ref"];
                /** @description Specifies options for including a reporting account label in the account balance report. */
                reportingAccountLabel?: {
                    /**
                     * @description Indicates whether to include the reporting account label in the report.
                     * @default false
                     * @example false
                     */
                    includeReportingAccountLabel?: boolean;
                    /** @description References the associated reporting account set, which determines which reporting accounts to include in the account balance report. */
                    reportingAccountSet?: {
                        /**
                         * @description Unique key for the reporting account set.
                         * @example 23
                         */
                        key?: string;
                        /**
                         * @description Identifier for the reporting account set.
                         * @example Management Reporting Accounts
                         */
                        id?: string;
                        /**
                         * @description URL endpoint for the reporting account set.
                         * @example /objects/general-ledger/reporting-account-set/23
                         */
                        readonly href?: string;
                    };
                };
                /**
                 * @description Specifies the reporting book used for the account balance report, which determines the accounting method applied to the report. Use `ACCRUAL` for accrual basis accounting or `CASH` for cash basis accounting, depending on the company configuration. If Global Consolidations is enabled, you can provide a consolidation book ID instead.
                 * @default ACCRUAL
                 * @example ACCRUAL
                 */
                reportingBook?: string;
                /** @description References the ownership structure associated with the account balance report, which determines the entities to include based on the consolidation configuration. */
                ownershipStructure?: {
                    /**
                     * @description Unique key for the ownership structure.
                     * @example 11
                     */
                    key?: string;
                    /**
                     * @description Identifier for the ownership structure.
                     * @example North America
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the ownership structure.
                     * @example /objects/consolidation/ownership-structure/11
                     */
                    readonly href?: string;
                };
                /**
                 * @description Specifies the adjustment books to include in the account balance report, which allows you to combine entries from specified adjustment books with the reporting book.
                 *
                 *     If specified, the report can include separate columns for each adjustment book. When `includeReportingBook` is `true`, those columns appear alongside the main reporting book; otherwise, the output includes only the specified adjustment books. If using Global Consolidations, you can provide consolidation adjustment books instead.
                 * @example [
                 *       "GAAPADJ",
                 *       "TAXADJ",
                 *       "IFRS"
                 *     ]
                 */
                adjustmentBooks?: string[];
                /**
                 * @description Indicates whether to include the reporting book in the report. Set to `true` to include the reporting book alongside any specified adjustment books. Set to `false` to include only the specified adjustment books. If using Global Consolidations, this includes the consolidation reporting book.
                 * @default true
                 * @example true
                 */
                includeReportingBook?: boolean;
                glAccountRange?: components["schemas"]["account-range-ref"];
                glReportingAccountRange?: components["schemas"]["reporting-account-range-ref"];
                /** @description References a predefined General Ledger (GL) account group (a saved set of multiple accounts) to include in the report. Use this as an alternative to entering account ranges, and when GL account numbers are not used. */
                glAccountGroup?: {
                    /**
                     * @description Unique key for the account group.
                     * @example 21
                     */
                    key?: string;
                    /**
                     * @description Identifier for the account group.
                     * @example Accounts Payable
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the account group.
                     * @example /objects/general-ledger/account-group/21
                     */
                    readonly href?: string;
                };
                dimensions?: components["schemas"]["report-dimensions-ref"];
                dimensionTypes?: components["schemas"]["report-dimension-type-ref"];
                dimensionGroups?: components["schemas"]["report-dimension-groups-ref"];
                subDimensions?: components["schemas"]["report-sub-dimension-ref"];
                /** @description Provides options for generating individual reports based on dimensions. If any of these options are enabled, the system generates separate reports for each unique value within the specified dimensions. */
                individualReport?: {
                    /**
                     * @description Indicates whether to create a separate report for individual locations or location groups. Set to `true` to create a separate report for each location. For location groups, this creates a separate report for the individual locations within the group.
                     * @default false
                     * @example true
                     */
                    includeLocation?: boolean;
                    /**
                     * @description Indicates whether to exclude blank pages from individual location reports. Set to `true` to suppress output pages for locations that have no data for the selected period. Applies only when `includeLocation` is `true`.
                     * @default false
                     * @example true
                     */
                    excludeLocationBlankPages?: boolean;
                    /**
                     * @description Indicates whether to create a separate report for individual departments or department groups. Set to `true` to create a separate report for each department. For department groups, this creates a separate report for the individual departments within the group.
                     * @default false
                     * @example true
                     */
                    includeDepartment?: boolean;
                    /**
                     * @description Indicates whether to exclude blank pages from individual department reports. Set to `true` to suppress output pages for departments that have no data for the selected period. Applies only when `includeDepartment` is `true`.
                     * @default false
                     * @example true
                     */
                    excludeDepartmentBlankPages?: boolean;
                };
                /**
                 * @description Indicates whether to display year-to-date (YTD) balances in the report.
                 * @default false
                 * @example true
                 */
                showYTDBalances?: boolean;
                /**
                 * @description Indicates whether to include the reporting category in the report.
                 * @default false
                 * @example true
                 */
                showReportingCategory?: boolean;
                /**
                 * @description Indicates how zero-balance accounts are displayed in the report:
                 *
                 *     * `all` - Shows all zero-balance accounts, regardless of activity.
                 *     * `onlyWithActivity` - Displays only zero-balance accounts that had activity during the reporting period.
                 *     * `doNotShow` - Excludes all zero-balance accounts from the report.
                 * @default onlyWithActivity
                 * @example onlyWithActivity
                 * @enum {string}
                 */
                showZeroBalanceAccounts?: "all" | "onlyWithActivity" | "doNotShow";
                /**
                 * @description Indicates whether to include statistical accounts in the report. Statistical accounts are used to track non-financial data, such as employee headcount, or number of members.
                 * @default false
                 * @example true
                 */
                includeStatisticalAccounts?: boolean;
                /**
                 * @description Indicates whether to show transaction details in the report. Set to `summary` to show only account balances. Set to `detail` to show transaction details that make up the account balances.
                 * @default summary
                 * @example summary
                 * @enum {string}
                 */
                txnPresentation?: "summary" | "detail";
                /**
                 * @description Indicates the orientation of the account balance report, which can be either portrait or landscape.
                 * @default portrait
                 * @example portrait
                 * @enum {string}
                 */
                reportOrientation?: "portrait" | "landscape";
            };
        };
        "general-ledger-reports.account-balanceRequiredProperties": Record<string, never>;
        /** @description Report status response. */
        "services.report.submitted-status": {
            /**
             * @description Unique identifier for the report.
             * @example 1
             */
            reportId?: string;
            /**
             * @description Status of the report execution.
             * @example submitted
             * @enum {string}
             */
            status?: "submitted" | "failed";
            /**
             * @description Name for the report.
             * @example Trial balance report
             */
            readonly name?: string | null;
            /**
             * @description Format for the report output.
             * @example pdf
             * @enum {string}
             */
            readonly outputType?: "html" | "pdf" | "csv" | "excel" | "text" | "fec" | "zip";
            /**
             * @description Location where the report is stored.
             * @example intacct
             * @enum {string}
             */
            readonly outputLocation?: "intacct" | "cloud";
            /**
             * @description URL endpoint for the report status.
             * @example /services/reports/status?reportId=1&outputType=pdf&outputLocation=intacct
             */
            href?: string | null;
        };
        /** @description The General Ledger (GL) account balance by dimension report provides a detailed view of account balances across specified dimensions, such as location, department, and project, for a given period. */
        "services.reports.general-ledger-account-balance-by-dimension": {
            /**
             * @description Specifies the primary title to display at the top of the account balance by dimension report.
             * @example General Ledger Account Balances by Dimension - March 2026
             */
            title1?: string;
            /**
             * @description Specifies the secondary title to display below the primary title for the account balance by dimension report.
             * @example NexCom Corporation | Location, Department, Project | Reporting Book - Accrual | USD
             */
            title2?: string;
            /**
             * @description Specifies the text to display in the footer of the account balance by dimension report.
             * @example Confidential - For internal use only.
             */
            footerText?: string;
            /**
             * Format: date
             * @description Indicates the date the report is scheduled to run. If not provided, the report will run immediately.
             * @example 2026-03-31
             */
            scheduledReportDate?: string;
            /**
             * @description Specifies the name assigned to the account balance by dimension report, used for identification and reference purposes within the system.
             * @example GL Account Balance by Dimension Report - March 2026 (Accrual)
             */
            reportName?: string;
            /**
             * @description Indicates the output format for the account balance by dimension report.
             * @default html
             * @example html
             * @enum {string}
             */
            outputType?: "html" | "pdf" | "csv" | "excel" | "text";
            /**
             * @description Indicates where to store the account balance by dimension report.
             * @default intacct
             * @example intacct
             * @enum {string}
             */
            outputLocation?: "intacct" | "cloud";
            cloudStoreParameters?: components["schemas"]["report.cloud-store-options"];
            /** @description Defines the input parameters for the account balance by dimension report, including time period, reporting book, account selection, dimensions, and presentation options. */
            parameters?: {
                timePeriod?: components["schemas"]["report-time-period-filter-ref"];
                /**
                 * @description Specifies the main reporting book to be used for this report. For Global Consolidations, you can provide a consolidation reporting book instead.
                 * @default ACCRUAL
                 * @example ACCRUAL
                 */
                reportingBook?: string;
                /** @description References the ownership structure associated with the account balance by dimension report, which determines the entities to include based on the consolidation configuration. */
                ownershipStructure?: {
                    /**
                     * @description Unique key for the ownership structure.
                     * @example 1
                     */
                    key?: string;
                    /**
                     * @description Identifier for the ownership structure.
                     * @example North America
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the ownership-structure.
                     * @example /objects/consolidation/ownership-structure/11
                     */
                    readonly href?: string;
                };
                /**
                 * @description Specifies the adjustment books to include in the report. If specified, the report can include separate columns for each adjustment book. When `includeReportingBook` is `true`, those columns appear alongside the main reporting book; otherwise, the output includes only the specified adjustment books. If using Global Consolidations, you can provide consolidation adjustment books instead.
                 * @example [
                 *       "GAAPADJ",
                 *       "TAXADJ",
                 *       "IFRS"
                 *     ]
                 */
                adjustmentBooks?: string[];
                /**
                 * @description Indicates whether to include the reporting book in the report. Set to `true` to include the reporting book alongside any specified adjustment books. Set to `false` to include only the specified adjustment books. If using Global Consolidations, this includes the consolidation reporting book.
                 * @default true
                 * @example true
                 */
                includeReportingBook?: boolean;
                /**
                 * @description Specifies the type of data for the report, either actual data (Actual), budget data (Budget) , or both (Actual and Budget).
                 * @default actual
                 * @example actual
                 * @enum {string}
                 */
                contentSelection?: "actual" | "budget" | "actualAndBudget";
                /** @description References the budget to use for the report. If configured, this is the default company budget. Applies when reporting budget data (Budget) or both actual-and-budget data (Actual and Budget). */
                budget?: {
                    /**
                     * @description Unique key for the budget.
                     * @example 1
                     */
                    key?: string;
                    /**
                     * @description Identifier for the budget.
                     * @example Std_Budget
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the budget.
                     * @example /objects/general-ledger/budget/1
                     */
                    readonly href?: string;
                };
                /**
                 * @description Specifies how to compare actual data to budget data. Applicable when pulling both actual-and-budget data (Actual and Budget). Use Budget minus Actual or Actual minus Budget.
                 * @default budgetThenActual
                 * @example budgetThenActual
                 * @enum {string}
                 */
                budgetComparison?: "budgetThenActual" | "actualThenBudget";
                /**
                 * @description Indicates whether to include the show difference column in the report. Set to `true` to display the show difference column in output for budget vs actual.
                 * @default false
                 * @example true
                 */
                showDifference?: boolean;
                glAccountRange?: components["schemas"]["account-range-ref"][];
                /**
                 * @description Specifies how GL accounts are selected for the report:
                 *
                 *     * `range` - Selects GL accounts using `glAccountRange` to specify a range starting with a specified account and ending with another.
                 *     * `multiple` - Uses `glAccountGroup` to specify a predefined set of accounts by referencing a saved group of accounts configured in Sage Intacct.
                 *     * `all` - Includes all GL accounts for the report, regardless of any specified ranges or individual accounts.
                 * @default range
                 * @example range
                 * @enum {string}
                 */
                accountSelection?: "range" | "multiple" | "all";
                /**
                 * @description Indicates whether to include statistical accounts in the report. Statistical accounts are used to track non-financial data, such as employee headcount, or number of members.
                 * @default false
                 * @example true
                 */
                includeStatisticalAccounts?: boolean;
                /**
                 * @description Indicates whether to ignore inactive accounts. Set to `true` to exclude inactive accounts from the report. Inactive accounts are those accounts you have set to a status of inactive because you are no longer using this account.
                 * @default false
                 * @example true
                 */
                ignoreInactiveAccounts?: boolean;
                /** @description References a predefined General Ledger (GL) account group (a saved set of multiple accounts) to include in the report. Use this as an alternative to entering account ranges, and when GL account numbers are not used. */
                glAccountGroup?: {
                    /**
                     * @description Unique key for the account group.
                     * @example 21
                     */
                    key?: string;
                    /**
                     * @description Identifier for the account group.
                     * @example Accounts Payable
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the account group.
                     * @example /objects/general-ledger/account-group/21
                     */
                    readonly href?: string;
                };
                dimensions?: components["schemas"]["report-dimensions-ref"];
                dimensionTypes?: components["schemas"]["report-dimension-type-ref"];
                dimensionGroups?: components["schemas"]["report-dimension-groups-ref"];
                subDimensions?: components["schemas"]["report-sub-dimension-ref"];
                /** @description Indicates whether to include dimension values in the report, and at what level of detail. */
                showDimensionValues?: components["schemas"]["report-show-dimensions-ref"] & {
                    account?: {
                        /**
                         * @description Indicates whether to include the identifier for the base account in the report.
                         * @default false
                         * @example true
                         */
                        includeId?: boolean;
                        /**
                         * @description Indicates whether to include the name of the base account in the report.
                         * @default false
                         * @example true
                         */
                        includeName?: boolean;
                        /**
                         * @description Indicates whether to include both the identifier and name for the base account in the report.
                         * @default false
                         * @example true
                         */
                        includeIdName?: boolean;
                    };
                };
                /** @description Provides options for generating individual reports based on dimensions. If any of these options are enabled, the system generates separate reports for each unique value within the specified dimension. */
                individualReport?: {
                    /**
                     * @description Indicates whether to create a separate report for individual locations or location groups. Set to `true` to create a separate report for each location. For location groups, this creates a separate report for the individual locations within the group.
                     * @default false
                     * @example true
                     */
                    includeLocation?: boolean;
                    /**
                     * @description Indicates whether to exclude blank pages from individual location reports. Set to `true` to suppress output pages for locations that have no data for the selected period. Applies only when `includeLocation` is `true`.
                     * @default false
                     * @example true
                     */
                    excludeLocationBlankPages?: boolean;
                    /**
                     * @description Indicates whether to create a separate report for individual departments or department groups. Set to `true` to create a separate report for each department. For department groups, this creates a separate report for the individual departments within the group.
                     * @default false
                     * @example true
                     */
                    includeDepartment?: boolean;
                    /**
                     * @description Indicates whether to exclude blank pages from individual department reports. Set to `true` to suppress output pages for departments that have no data for the selected period. Applies only when `includeDepartment` is `true`.
                     * @default false
                     * @example true
                     */
                    excludeDepartmentBlankPages?: boolean;
                };
                /**
                 * @description Determines how dimension columns are displayed in the report.
                 *
                 *     * `sideBySide` - Displays dimension values in parallel, allowing for each visual comparison. This format shows the most data per page.
                 *     * `cascaded` - Stacks dimension values vertically, presenting each set of dimension values as a distinct unit for clearer grouping.
                 * @default sideBySide
                 * @example sideBySide
                 * @enum {string}
                 */
                dimensionPresentation?: "sideBySide" | "cascaded";
                /**
                 * @description Indicates whether to display subtotals in the report. Set to `true` to include a subtotal for all levels in the report.
                 * @default false
                 * @example true
                 */
                showSubtotals?: boolean;
                /**
                 * @description Indicates whether to display grand totals in the report. Set to `true` to include a grand total for all the subtotals. Subtotals do not need to be enabled to display the grand total. Valid only when the `dimensionPresentation` is set to `sideBySide`.
                 * @default false
                 * @example true
                 */
                showGrandTotals?: boolean;
                /**
                 * @description Indicates whether to display year-to-date (YTD) balances in the report.
                 * @default false
                 * @example true
                 */
                showYTDBalances?: boolean;
                /**
                 * @description Indicates whether to resize columns to fit the report on a single page, ideal for wide, multi-dimension reports.
                 * @default false
                 * @example true
                 */
                fitToOnePage?: boolean;
                /**
                 * @description Indicates how the report pages are printed or displayed. Set to `portrait` to display or print the report pages vertically. Set to `landscape` to display or print the report pages horizontally.
                 * @default portrait
                 * @example portrait
                 * @enum {string}
                 */
                reportOrientation?: "portrait" | "landscape";
            };
        };
        "general-ledger-reports.account-balance-by-dimensionRequiredProperties": Record<string, never>;
        /** @description The General Ledger (GL) account groups hierarchy report provides a structured view of your account groups, their member account groups, and the accounts within those groups. */
        "services.reports.general-ledger-account-group-hierarchy": {
            /**
             * @description Specifies the primary title to display at the top of the account group hierarchy report.
             * @example General Ledger (GL) Account Group Hierarchy Report
             */
            title1?: string;
            /**
             * @description Specifies the secondary title to display below the primary title in the account group hierarchy report.
             * @example Financial statement hierarchy as of March 2026
             */
            title2?: string;
            /**
             * @description Specifies the text to display in the footer of the account group hierarchy report.
             * @example Confidential - For Internal Use Only
             */
            footerText?: string;
            /**
             * Format: date
             * @description Indicates the date to schedule the account group hierarchy report. If not provided, the report runs immediately.
             * @example 2025-01-31
             */
            scheduledReportDate?: string;
            /**
             * @description Specifies the name assigned to the account group hierarchy report, used for identification and reference purposes within the system.
             * @example Account Group Hierarchy Report - March 2026
             */
            reportName?: string;
            /**
             * @description Indicates the output format for the account group hierarchy report.
             * @default html
             * @example html
             * @enum {string}
             */
            outputType?: "html" | "pdf" | "csv" | "excel" | "text";
            /**
             * @description Indicates where to store the account group hierarchy report.
             * @default intacct
             * @example intacct
             * @enum {string}
             */
            outputLocation?: "intacct" | "cloud";
            cloudStoreParameters?: components["schemas"]["report.cloud-store-options"];
            /** @description Defines the input parameters for the account group hierarchy report, including reporting account labels, account group source, account group type, and account ranges. */
            parameters?: {
                /** @description Specifies options for including reporting account labels in the account group hierarchy report. */
                reportingAccountLabel?: {
                    /**
                     * @description Indicates whether to include reporting account labels in the account group hierarchy report.
                     * @default false
                     * @example false
                     */
                    includeReportingAccountLabel?: boolean;
                    /** @description References the reporting account set to use for the report, which determines which reporting accounts to include. */
                    reportingAccountSet?: {
                        /**
                         * @description Unique key for the reporting account set.
                         * @example 23
                         */
                        key?: string;
                        /**
                         * @description Identifier for the reporting account set.
                         * @example 23
                         */
                        id?: string;
                        /**
                         * @description URL endpoint for the reporting account set.
                         * @example /objects/general-ledger/reporting-account-set/23
                         */
                        readonly href?: string;
                    };
                };
                /**
                 * @description Indicates the source of account groups to include in the account group hierarchy report. The source can be either system-defined account groups or user-defined account groups, which affects the structure and content of the report.
                 * @default userDefinedAccountGroups
                 * @example userDefinedAccountGroups
                 * @enum {string}
                 */
                accountGroupSource?: "systemAccountGroups" | "userDefinedAccountGroups";
                /**
                 * @description Indicates the type of account group. Different account group types yield different results in your reports.
                 * @default accounts
                 * @example accounts
                 * @enum {string}
                 */
                accountGroupType?: "allTypes" | "accounts" | "groups" | "statisticalAccounts" | "computation" | "category" | "statisticalCategory";
                glAccountRange?: components["schemas"]["account-range-ref"];
                glAccountGroupRange?: components["schemas"]["account-group-range-ref"];
                glAccountCategoryRange?: components["schemas"]["account-category-range-ref"];
                glReportingAccountRange?: components["schemas"]["reporting-account-range-ref"];
                /**
                 * @description Indicates the orientation of the account group hierarchy report, which can be either portrait or landscape.
                 * @default portrait
                 * @example portrait
                 * @enum {string}
                 */
                reportOrientation?: "portrait" | "landscape";
            };
        };
        "general-ledger-reports.account-group-hierarchyRequiredProperties": Record<string, never>;
        /** @description The General Ledger (GL) details report provides a comprehensive view of all transactions and activities recorded in the general ledger accounts for a specified period. */
        "services.reports.general-ledger-details": {
            /**
             * @description Specifies the primary title to display at the top of the GL details report.
             * @example General Ledger Detail Report - March 2026
             */
            title1?: string;
            /**
             * @description Specifies the secondary title to display at the top of the GL details report.
             * @example March 2026 | North America Region | Reporting Book - Accrual
             */
            title2?: string;
            /**
             * @description Specifies the footer text to display at the bottom of the GL details report.
             * @example Confidential - For Internal Use Only
             */
            footerText?: string;
            /**
             * Format: date
             * @description Indicates the date the report is scheduled to run. If not provided, the report runs immediately.
             * @example 2026-03-31
             */
            scheduledReportDate?: string;
            /**
             * @description A user-defined name assigned to the report execution.
             *     This value is stored with the generated report and is used as a label to help identify and track
             *     the report after submission.
             *     This field does not reference or select a predefined report configuration and is not validated
             *     against existing report definitions.
             * @example General Ledger Detail Report - North America - March 2026
             */
            reportName?: string;
            /**
             * @description Indicates the output format of the GL details report.
             * @default html
             * @example html
             * @enum {string}
             */
            outputType?: "html" | "pdf" | "csv" | "excel" | "text";
            /**
             * @description Indicates where to store the generated GL details report.
             * @default intacct
             * @example intacct
             * @enum {string}
             */
            outputLocation?: "intacct" | "cloud";
            cloudStoreParameters?: components["schemas"]["report.cloud-store-options"];
            /** @description Defines the input parameters for the GL details report, including time period, reporting book, dimensions, account filters, and output options. */
            parameters?: {
                timePeriod?: components["schemas"]["report-time-period-filter-ref"];
                /** @description Specifies options for including a reporting account label in the GL details report. */
                reportingAccountLabel?: {
                    /**
                     * @description Indicates whether to include a reporting account label in the GL details report.
                     * @default false
                     * @example false
                     */
                    includeReportingAccountLabel?: boolean;
                    /** @description References the associated reporting account set, which determines which reporting accounts to include in the GL details report. */
                    reportingAccountSet?: {
                        /**
                         * @description Unique key for the reporting account set.
                         * @example 23
                         */
                        key?: string;
                        /**
                         * @description Identifier for the reporting account set.
                         * @example 23
                         */
                        id?: string;
                        /**
                         * @description URL endpoint for the reporting account set.
                         * @example /objects/general-ledger/reporting-account-set/23
                         */
                        readonly href?: string;
                    };
                };
                /**
                 * @description Specifies the reporting book used for the GL details report, which determines the accounting method applied to the report. Use `ACCRUAL` for accrual basis accounting or `CASH` for cash basis accounting, depending on the company configuration. If Global Consolidations is enabled, you can provide a consolidation book ID instead.
                 * @default ACCRUAL
                 * @example ACCRUAL
                 */
                reportingBook?: string;
                /** @description References the ownership structure associated with the GL details report, which determines the entities to include based on the consolidation configuration. */
                ownershipStructure?: {
                    /**
                     * @description Unique key for the ownership structure.
                     * @example 1
                     */
                    key?: string;
                    /**
                     * @description Identifier for the ownership structure.
                     * @example North America
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the ownership structure.
                     * @example /objects/consolidation/ownership-structure/11
                     */
                    readonly href?: string;
                };
                /**
                 * @description Specifies the adjustment books to include in the GL details report, which allows you to combine entries from specified adjustment books with the reporting book.
                 *
                 *     If specified, the report can include separate columns for each adjustment book. When `includeReportingBook` is `true`, those columns appear alongside the main reporting book; otherwise, the output includes only the specified adjustment books. If using Global Consolidations, you can provide consolidation adjustment books instead.
                 * @example [
                 *       "GAAPADJ",
                 *       "TAXADJ",
                 *       "IFRS"
                 *     ]
                 */
                adjustmentBooks?: string[];
                /**
                 * @description Indicates whether to include the reporting book in the report. Set to `true` to include the reporting book alongside any specified adjustment books. Set to `false` to include only the specified adjustment books. If using Global Consolidations, this includes the consolidation reporting book.
                 * @default true
                 * @example true
                 */
                includeReportingBook?: boolean;
                /**
                 * @description Indicates which transactions to include based on their posting status, either posted transactions, unposted transactions, or both. When selecting unposted transactions or both posted and unposted transactions, you can further filter which unposted transactions to include using the `txnStateFilter` parameter.
                 * @default posted
                 * @example posted
                 * @enum {string}
                 */
                txnStateSelection?: "postedTxnsOnly" | "unpostedTxnsOnly" | "postedAndUnpostedTxns";
                /**
                 * @description Indicates which unposted transactions to include in the report based on their transaction state, either draft, partially approved, submitted, or declined. Applies when `txnStateSelection` is set to include unposted transactions.
                 * @example [
                 *       "draft",
                 *       "partiallyApproved",
                 *       "submitted"
                 *     ]
                 */
                txnStateFilter?: ("draft" | "partiallyApproved" | "submitted" | "declined")[];
                glAccountRange?: components["schemas"]["account-range-ref"][];
                glReportingAccountRange?: components["schemas"]["reporting-account-range-ref"][];
                /**
                 * @description Specifies how to select accounts for the report:
                 *
                 *     * `range`: Select accounts within the specified `glAccountRange` or `glReportingAccountRange`. GL account range takes precedence if both are specified.
                 *     * `multiple`: Select specific GL account or reporting account numbers. GL account numbers take precedence if both are specified.
                 *     * `all`: Include all accounts; all filters are ignored.
                 * @default range
                 * @example range
                 * @enum {string}
                 */
                accountSelection?: "range" | "multiple" | "all";
                /**
                 * @description Indicates whether to include statistical accounts in the report. Statistical accounts are used to track non-financial data, such as employee headcount, or number of members.
                 * @default false
                 * @example true
                 */
                includeStatisticalAccounts?: boolean;
                /** @description References the account group associated with the report. Required if not using the GL account numbers. */
                glAccountGroup?: {
                    /**
                     * @description Unique key for the account group.
                     * @example 21
                     */
                    key?: string;
                    /**
                     * @description Identifier for the account group.
                     * @example Accounts Payable
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the account group.
                     * @example /objects/general-ledger/account-group/21
                     */
                    readonly href?: string;
                };
                /**
                 * @description References the dimension report structure associated with the report, which determines the dimensions and dimension values to include in the report.
                 *
                 *     For more information, read about [dimension structures](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_dimension_structures) in the Sage Intacct Help Center.
                 */
                dimensionReportStructure?: {
                    /**
                     * @description Unique key for the dimension report structure.
                     * @example 21
                     */
                    key?: string;
                    /**
                     * @description Identifier for the dimension report structure.
                     * @example Department-Location
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the dimension report structure.
                     * @example /objects/general-ledger/account-group/21
                     */
                    readonly href?: string;
                };
                /**
                 * @description Specifies which locations to include when filtering report transactions in multi-entity shared companies: all locations, only the selected location, or the selected location and its child locations.
                 * @default ALL
                 * @example ALL
                 * @enum {string}
                 */
                txnFilter?: "allLocation" | "thisLocation" | "childLocation";
                dimensions?: components["schemas"]["report-dimensions-ref"];
                dimensionTypes?: components["schemas"]["report-dimension-type-ref"];
                dimensionGroups?: components["schemas"]["report-dimension-groups-ref"];
                subDimensions?: components["schemas"]["report-sub-dimension-ref"];
                showDimensionValues?: components["schemas"]["report-show-dimensions-ref"];
                /** @description Provides options for generating individual reports based on dimensions. If any of these options are enabled, the system generates separate reports for each unique value within the specified dimensions. */
                individualReport?: {
                    /**
                     * @description Indicates whether to create a separate report for individual locations or location groups. Set to `true` to create a separate report for each location. For location groups, this creates a separate report for the individual locations within the group.
                     * @default false
                     * @example true
                     */
                    includeLocation?: boolean;
                    /**
                     * @description Indicates whether to exclude blank pages from individual location reports. Set to `true` to suppress output pages for locations that have no data for the selected period. Applies only when `includeLocation` is `true`.
                     * @default false
                     * @example true
                     */
                    excludeLocationBlankPages?: boolean;
                    /**
                     * @description Indicates whether to create a separate report for individual departments or department groups. Set to `true` to create a separate report for each department. For department groups, this creates a separate report for the individual departments within the group.
                     * @default false
                     * @example true
                     */
                    includeDepartment?: boolean;
                    /**
                     * @description Indicates whether to exclude blank pages from individual department reports. Set to `true` to suppress output pages for departments that have no data for the selected period. Applies only when `includeDepartment` is `true`.
                     * @default false
                     * @example true
                     */
                    excludeDepartmentBlankPages?: boolean;
                };
                /**
                 * @description Indicates the orientation of the GL details report, which can be either portrait or landscape.
                 * @default portrait
                 * @example portrait
                 * @enum {string}
                 */
                reportOrientation?: "portrait" | "landscape";
                /**
                 * @description Indicates how zero-balance accounts are displayed in the report:
                 *
                 *     * `all` - Shows all zero-balance accounts, regardless of activity.
                 *     * `onlyWithActivity` - Displays only zero-balance accounts that had activity during the reporting period.
                 *     * `doNotShow` - Excludes all zero-balance accounts from the report.
                 * @default onlyWithActivity
                 * @example onlyWithActivity
                 * @enum {string}
                 */
                showZeroBalanceAccounts?: "all" | "onlyWithActivity" | "doNotShow";
                /**
                 * @description Indicates whether to include detailed transaction lines in the GL details report.
                 * @default true
                 * @example true
                 */
                showDetail?: boolean;
                /**
                 * @description Indicates which document number to display in the GL details report, either the reference number or the bill, invoice, or adjustment number.
                 * @default referenceNumber
                 * @example referenceNumber
                 * @enum {string}
                 */
                documentNumberType?: "referenceNumber" | "billInvoiceOrAdjustmentNumber";
                /**
                 * @description Indicates whether to show department and location activity columns in the GL details report.
                 * @default false
                 * @example true
                 */
                showDimensionActivity?: boolean;
                /**
                 * @description Indicates whether to show a net change column in the GL details report, which calculates the net change for each account by subtracting total credits from total debits during the reporting period.
                 * @default false
                 * @example true
                 */
                showNetChange?: boolean;
                /**
                 * @description Indicates whether to show transaction numbers in the GL details report.
                 * @default false
                 * @example true
                 */
                showTxnNumber?: boolean;
                /**
                 * @description Indicates whether to show year-to-date (YTD) balance columns in the GL details report.
                 * @default false
                 * @example true
                 */
                showYTDBalances?: boolean;
                /**
                 * @description Indicates whether to repeat the account number and name on each transaction line in the GL details report.
                 * @default false
                 * @example true
                 */
                showAccountOnLines?: boolean;
                /**
                 * @description Indicates whether to show filter selection in the GL details report.
                 * @default false
                 * @example true
                 */
                showFilters?: boolean;
                /**
                 * @description Indicates whether to show transaction subtotals in the GL details report. Subtotals are based on the grouping selected for the report, such as by location, department, or dimension values.
                 * @default false
                 * @example true
                 */
                showTxnSubtotals?: boolean;
                /**
                 * @description Indicates whether to show offset account totals in the GL details report.
                 * @default false
                 * @example true
                 */
                showOffsetDetails?: boolean;
                /**
                 * @description Indicates whether to show period subtotals in the GL details report, which provide totals for each reporting period included in the report.
                 * @default false
                 * @example true
                 */
                showPeriodTotals?: boolean;
                /**
                 * @description Indicates how to group the GL details report by location, department, or by both with location grouped within department or department grouped within location.
                 * @default none
                 * @example none
                 * @enum {string}
                 */
                groupBy?: "none" | "locationOnly" | "departmentOnly" | "locationAndDepartment" | "departmentAndLocation";
                /**
                 * @description Indicates whether to resize columns to fit them to a single page in the GL details report.
                 * @default false
                 * @example true
                 */
                fitToOnePage?: boolean;
            };
        };
        "general-ledger-reports.detailsRequiredProperties": Record<string, never>;
        /** @description The General Ledger (GL) trial balance report provides a snapshot of account balances for a specified period, showing opening balances, period activity, and closing balances across accounts and dimensions. */
        "services.reports.general-ledger-trial-balance": {
            /**
             * @description Specifies the primary title to display at the top of the trial balance report.
             * @example General Ledger Trial Balance Report - March 2026
             */
            title1?: string;
            /**
             * @description Specifies the secondary title to display below the primary title for the trial balance report.
             * @example NexCom Corporation | Reporting Book - Accrual | USD
             */
            title2?: string;
            /**
             * @description Specifies the text to display in the footer of the trial balance report.
             * @example Confidential - For Internal Use Only
             */
            footerText?: string;
            /**
             * Format: date
             * @description Indicates the date the report is scheduled to run. If not provided, the report will run immediately.
             * @example 2026-03-31
             */
            scheduledReportDate?: string;
            /**
             * @description Specifies the name assigned to the trial balance report, used for identification and reference purposes within the system.
             * @example GL Trial Balance Report - March 2026 (Accrual)
             */
            reportName?: string;
            /**
             * @description Indicates the output format for the trial balance report.
             * @default html
             * @example html
             * @enum {string}
             */
            outputType?: "html" | "pdf" | "csv" | "excel" | "text";
            /**
             * @description Indicates where to store the trial balance report.
             * @default intacct
             * @example intacct
             * @enum {string}
             */
            outputLocation?: "intacct" | "cloud";
            cloudStoreParameters?: components["schemas"]["report.cloud-store-options"];
            /** @description Defines the input parameters for the trial balance report, including time period, dimensions, reporting book, and various filters to customize the report. */
            parameters?: {
                timePeriod?: components["schemas"]["report-time-period-filter-ref"];
                /** @description Specifies options for including a reporting account label in the trial balance report. */
                reportingAccountLabel?: {
                    /**
                     * @description Indicates whether to include the reporting account label in the trial balance report.
                     * @default false
                     * @example false
                     */
                    includeReportingAccountLabel?: boolean;
                    /** @description References the associated reporting account set, which determines which reporting accounts to include in the trial balance report. */
                    reportingAccountSet?: {
                        /**
                         * @description Unique key for the reporting account set.
                         * @example 23
                         */
                        key?: string;
                        /**
                         * @description Identifier for the reporting account set.
                         * @example Management Reporting Accounts
                         */
                        id?: string;
                        /**
                         * @description URL endpoint for the reporting account set.
                         * @example /objects/general-ledger/reporting-account-set/23
                         */
                        readonly href?: string;
                    };
                };
                /**
                 * @description Specifies the reporting book for the trial balance report, which determines the accounting method applied to the report. Use `ACCRUAL` for accrual basis accounting or `CASH` for cash basis accounting, depending on the company configuration. If Global Consolidations is enabled, you can provide a consolidation book ID instead.
                 * @default ACCRUAL
                 * @example ACCRUAL
                 */
                reportingBook?: string;
                /** @description References the ownership structure associated with the trial balance report, which determines the entities to include based on the consolidation configuration. */
                ownershipStructure?: {
                    /**
                     * @description Unique key for the ownership structure.
                     * @example 11
                     */
                    key?: string;
                    /**
                     * @description Identifier for the ownership structure.
                     * @example North America
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the ownership structure.
                     * @example /objects/consolidation/ownership-structure/11
                     */
                    readonly href?: string;
                };
                /**
                 * @description Specifies the adjustment books to include in the trial balance report, which allows you to combine entries from specified adjustment books with the reporting book.
                 *
                 *     If specified, the report can include separate columns for each adjustment book. When `includeReportingBook` is `true`, those columns appear alongside the main reporting book; otherwise, the output includes only the specified adjustment books. If using Global Consolidations, you can provide consolidation adjustment books instead.
                 * @example [
                 *       "GAAPADJ",
                 *       "TAXADJ",
                 *       "IFRS"
                 *     ]
                 */
                adjustmentBooks?: string[];
                /**
                 * @description Indicates whether to include the reporting book in the trial balance report when adjustment books are specified. If `true`, the report includes columns for the reporting book alongside any specified adjustment books; if `false`, the report includes only the specified adjustment books.
                 * @default true
                 * @example true
                 */
                includeReportingBook?: boolean;
                dimensions?: components["schemas"]["report-dimensions-ref"];
                dimensionTypes?: components["schemas"]["report-dimension-type-ref"];
                dimensionGroups?: components["schemas"]["report-dimension-groups-ref"];
                subDimensions?: components["schemas"]["report-sub-dimension-ref"];
                /** @description Provides options for generating individual reports based on dimensions. If any of these options are enabled, the system generates separate reports for each unique value within the specified dimensions. */
                individualReport?: {
                    /**
                     * @description Indicates whether to create a separate report for individual locations or location groups. Set to `true` to create a separate report for each location. For location groups, this creates a separate report for the individual locations within the group.
                     * @default false
                     * @example true
                     */
                    includeLocation?: boolean;
                    /**
                     * @description Indicates whether to exclude blank pages from individual location reports. Set to `true` to suppress output pages for locations that have no data for the selected period. Applies only when `includeLocation` is `true`.
                     * @default false
                     * @example true
                     */
                    excludeLocationBlankPages?: boolean;
                    /**
                     * @description Indicates whether to create a separate report for individual departments or department groups. Set to `true` to create a separate report for each department. For department groups, this creates a separate report for the individual departments within the group.
                     * @default false
                     * @example true
                     */
                    includeDepartment?: boolean;
                    /**
                     * @description Indicates whether to exclude blank pages from individual department reports. Set to `true` to suppress output pages for departments that have no data for the selected period. Applies only when `includeDepartment` is `true`.
                     * @default false
                     * @example true
                     */
                    excludeDepartmentBlankPages?: boolean;
                };
                /**
                 * @description Indicates whether to exclude adjustment journal entry debits and credits from the report. When `true`, only standard (non-adjustment) entries contribute to the reported balances.
                 * @default false
                 * @example false
                 */
                excludeAdjustments?: boolean;
                /**
                 * @description Indicates whether to display year-to-date (YTD) balances in the output for the trial balance report.
                 * @default false
                 * @example true
                 */
                showYTDBalances?: boolean;
                /**
                 * @description Indicates how zero-balance accounts are displayed in the report:
                 *
                 *     * `all` - Shows all zero-balance accounts, regardless of activity.
                 *     * `onlyWithActivity` - Displays only zero-balance accounts that had activity during the reporting period.
                 *     * `doNotShow` - Excludes all zero-balance accounts from the report.
                 * @default onlyWithActivity
                 * @example onlyWithActivity
                 * @enum {string}
                 */
                showZeroBalanceAccounts?: "all" | "onlyWithActivity" | "doNotShow";
                /**
                 * @description Indicates how statistical accounts are displayed in the report:
                 *
                 *     * `showStatisticalAccounts` - Shows all statistical accounts in the report.
                 *     * `onlyShowStatisticalAccounts` - Displays only statistical accounts in the report, excluding all non-statistical accounts.
                 *     * `doNotShowStatisticalAccounts` - Excludes all statistical accounts from the report.
                 * @default showStatisticalAccounts
                 * @example showStatisticalAccounts
                 * @enum {string}
                 */
                showStatisticalAccounts?: "showStatisticalAccounts" | "onlyShowStatisticalAccounts" | "doNotShowStatisticalAccounts";
                /**
                 * @description Indicates whether to show debit and credit balances in separate columns in the report, instead of showing a single net balance column.
                 * @default false
                 * @example true
                 */
                showDebitCreditBalances?: boolean;
                /**
                 * @description Indicates the orientation of the trial balance report, which can be either portrait or landscape.
                 * @default portrait
                 * @example portrait
                 * @enum {string}
                 */
                reportOrientation?: "portrait" | "landscape";
            };
        };
        "general-ledger-reports.trial-balanceRequiredProperties": Record<string, never>;
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
        /**
         * @description Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
         * @default active
         * @example active
         * @enum {string}
         */
        status: "active" | "inactive";
        /** @description The dimensions that must be included on transactions that post to the account. */
        "required-dimensions-ref": {
            /**
             * @description Set to `true` to require a value for class.
             * @default false
             * @example false
             */
            class?: boolean;
            /**
             * @description Set to `true` to require a value for contract.
             * @default false
             * @example false
             */
            contract?: boolean;
            /**
             * @description Set to `true` to require a value for customer.
             * @default false
             * @example false
             */
            customer?: boolean;
            /**
             * @description Set to `true` to require a value for department.
             * @default false
             * @example true
             */
            department?: boolean;
            /**
             * @description Set to `true` to require a value for employee.
             * @default false
             * @example false
             */
            employee?: boolean;
            /**
             * @description Set to `true` to require a value for item.
             * @default false
             * @example false
             */
            item?: boolean;
            /**
             * @description Set to `true` to require a value for location.
             * @default false
             * @example false
             */
            location?: boolean;
            /**
             * @description Set to `true` to require a value for project.
             * @default false
             * @example false
             */
            project?: boolean;
            /**
             * @description Set to `true` to require a value for vendor.
             * @default false
             * @example false
             */
            vendor?: boolean;
            /**
             * @description Set to `true` to require a value for warehouse.
             * @default false
             * @example false
             */
            warehouse?: boolean;
            /**
             * @description Set to `true` to require a value for asset.
             * @default false
             * @example false
             */
            asset?: boolean;
            /**
             * @description Set to `true` to require a value for affiliate entity.
             * @default false
             * @example false
             */
            affiliateEntity?: boolean;
            /**
             * @description Set to `true` to require a value for task.
             * @default false
             * @example false
             */
            task?: boolean;
            /**
             * @description Set to `true` to require a value for cost type.
             * @default false
             * @example false
             */
            costType?: boolean;
            /**
             * @description Set to `true` to require a value for loan account.
             * @default false
             * @example false
             */
            loanAccount?: boolean;
            /**
             * @description Set to `true` to require a value for work order.
             * @default false
             * @example false
             */
            isWorkOrderRequired?: boolean;
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
        /** @description Parameters of the account allocation basis used as the blueprint for calculating dynamic allocations. */
        "objects.general-ledger.account-allocation-basis-adjustment-book": {
            /**
             * @description System-assigned key for the account allocation basis adjustment book.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description GL account allocation basis adjustment book ID.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description Endpoint for the account allocation basis adjustment book.
             * @example /objects/general-ledger/account-allocation-basis-adjustment-book/23
             */
            readonly href?: string;
            /** @description Account allocation basis. */
            glAccountAllocationBasis?: {
                /**
                 * @description Unique key for the account allocation basis.
                 * @example 623
                 */
                key?: string;
                /**
                 * @description Unique identifier for the account allocation basis.
                 * @example 623
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account allocation basis.
                 * @example /objects/general-ledger/account-allocation-basis/623
                 */
                readonly href?: string;
            };
            book?: {
                /**
                 * @description Alternate book.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Alternate book.
                 * @example TAXADJACCRUAL
                 */
                id?: string;
                /**
                 * @description Endpoint for the glbook.
                 * @example /objects/general-ledger/book/23
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description Dimension groups are used to categorize and group various dimensions within the system, such as location groups, department groups, vendor groups, customer groups, project groups, employee groups, class groups, contract groups, warehouse groups, and item groups. */
        "dimension-group-ref": {
            locationGroup?: {
                /**
                 * @description System-assigned key for the location group.
                 * @example 7
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the location group.
                 * @example LG-1
                 */
                id?: string | null;
                /**
                 * @description Name for the location group.
                 * @example Level 1 Locations
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the location group.
                 * @example /objects/company-config/location-group/7
                 */
                readonly href?: string;
            };
            departmentGroup?: {
                /**
                 * @description System-assigned key for the department group.
                 * @example 35
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the department group.
                 * @example DG-35
                 */
                id?: string | null;
                /**
                 * @description Name for the department group.
                 * @example DEPT-GRP-35
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the department group.
                 * @example /objects/company-config/department-group/35
                 */
                readonly href?: string;
            };
            /** @description A vendor group represents a collection of vendors that share common attributes or classifications. */
            vendorGroup?: {
                /**
                 * @description Unique key for the vendor group.
                 * @example 35
                 */
                key?: string | null;
                /**
                 * @description ID for the vendor group.
                 * @example VDN-01
                 */
                id?: string | null;
                /** @description Name for the vendor group. */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the vendor group.
                 * @example /objects/accounts-payable/vendor-group/35
                 */
                readonly href?: string;
            };
            /** @description A customer group represents a collection of customers that share common attributes or classifications. */
            customerGroup?: {
                /**
                 * @description Unique key for the customer group.
                 * @example 32
                 */
                key?: string | null;
                /**
                 * @description ID for the customer group.
                 * @example CUST-32
                 */
                id?: string | null;
                /**
                 * @description Name for the customer group.
                 * @example ABC Company Group
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the customer group.
                 * @example /objects/accounts-receivable/customer-group/32
                 */
                readonly href?: string;
            };
            projectGroup?: {
                /**
                 * @description System-assigned key for the project group.
                 * @example 35
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the project group.
                 * @example PRJ-35
                 */
                id?: string | null;
                /**
                 * @description Name for the project group.
                 * @example Project Group 35
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the project-group.
                 * @example /objects/projects/project-group/35
                 */
                readonly href?: string;
            };
            employeeGroup?: {
                /**
                 * @description System-assigned key for the employee group.
                 * @example 35
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the employee group.
                 * @example EMP-35
                 */
                id?: string | null;
                /**
                 * @description Name for the employee group.
                 * @example Employee Group 35
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the employee group.
                 * @example /objects/company-config/employee-group/35
                 */
                readonly href?: string;
            };
            classGroup?: {
                /**
                 * @description System-assigned key for the class group.
                 * @example 10
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the class group.
                 * @example CLS-10
                 */
                id?: string | null;
                /**
                 * @description Name for the class group.
                 * @example Class Group 10
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the class group.
                 * @example /objects/company-config/class-group/10
                 */
                readonly href?: string;
            };
            contractGroup?: {
                /**
                 * @description System-assigned key for the contract group.
                 * @example 35
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the contract group.
                 * @example SA01
                 */
                id?: string | null;
                /**
                 * @description Name for the contract group.
                 * @example Contract Group 35
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the contract group.
                 * @example /objects/contracts/contract-group/35
                 */
                readonly href?: string;
            };
            warehouseGroup?: {
                /**
                 * @description System-assigned key for the warehouse group.
                 * @example 35
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the warehouse group.
                 * @example WA01
                 */
                id?: string | null;
                /**
                 * @description Name for the warehouse group.
                 * @example Warehouse Group 35
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the warehouse group.
                 * @example /objects/inventory-control/warehouse-group/35
                 */
                readonly href?: string;
            };
            itemGroup?: {
                /**
                 * @description System-assigned key for the item group.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the item group.
                 * @example Mobile-GP-1
                 */
                id?: string | null;
                /**
                 * @description Name for the item group.
                 * @example Mobile Group 1
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the item group.
                 * @example /objects/inventory-control/item-group/1
                 */
                readonly href?: string;
            };
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
        /** @description Parameters of the account allocation source used as the blueprint for calculating dynamic allocations. */
        "objects.general-ledger.account-allocation-source-adjustment-book": {
            /**
             * @description System-assigned key for the account-allocation-source-adjustment-book.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description GL account allocation source adjustment book ID.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description Endpoint for the account-allocation-source-adjustment-book.
             * @example /objects/general-ledger/account-allocation-source-adjustment-book/23
             */
            readonly href?: string;
            /** @description Account allocation source. */
            glAccountAllocationSource?: {
                /**
                 * @description Unique key for the account allocation source.
                 * @example 623
                 */
                key?: string;
                /**
                 * @description Unique identifier for the account allocation source.
                 * @example 623
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account allocation source.
                 * @example /objects/general-ledger/account-allocation-source/623
                 */
                readonly href?: string;
            };
            book?: {
                /**
                 * @description Alternate book key.
                 * @example 4
                 */
                key?: string;
                /**
                 * @description Alternate book.
                 * @example TAXADJACCRUAL
                 */
                id?: string;
                /**
                 * @description Endpoint for the glbook.
                 * @example /objects/general-ledger/book/23
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s2"];
        };
        "dimension-ref-immutable": {
            /** @description Location associated with the budget detail. Required if multi-currency is enabled. */
            location?: {
                /**
                 * @description System-assigned key for the location.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the location.
                 * @example NV
                 */
                id?: string;
                /**
                 * @description Name for the location.
                 * @example Nevada
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/1
                 */
                readonly href?: string;
            };
            /** @description Department associated with the budget detail. */
            department?: {
                /**
                 * @description System-assigned key for the department.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Unique identifier for the department.
                 * @example ENG
                 */
                id?: string;
                /**
                 * @description Name for the department.
                 * @example Engineering
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/3
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
                 * @example Laptop 1
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
            /** @description Work order associated with the budget detail. */
            workOrder?: {
                /**
                 * @description Unique identifier for the work order.
                 * @example WO-0017
                 */
                id?: string | null;
                /**
                 * @description System-assigned key for the work order.
                 * @example 18
                 */
                key?: string | null;
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
         * @description State to update the entry to. Posted to post to the GL
         * @default posted
         * @example draft
         * @enum {string}
         */
        state: "draft" | "submitted" | "partiallyApproved" | "partiallyPaid" | "approved" | "paid" | "posted" | "declined" | "reversalPending" | "reversed" | "reversal";
        currency: {
            /**
             * Format: date
             * @description Exchange rate date.
             * @example 2014-01-08
             */
            exchangeRateDate?: string;
            /**
             * @description Exchange rate type.
             * @example Intacct Daily Rate
             */
            exchangeRateTypeId?: string;
            /**
             * @description Exchange rate.
             * @example 0.78
             */
            exchangeRate?: number;
            /**
             * @description Base currency.
             * @example USD
             */
            baseCurrency?: string;
            /**
             * @description Transaction currency.
             * @example GBP
             */
            txnCurrency?: string;
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
        "gl-statistical-account-ref": {
            /**
             * @description System-assigned key for the GL statistical account.
             * @example 144
             */
            key?: string;
            /**
             * @description Unique identifier for the GL statistical account.
             * @example 1112
             */
            id?: string;
            /**
             * @description Name for the GL statistical account.
             * @example Root - Billable Non-Utilized Statistical Account
             */
            readonly name?: string;
            /**
             * @description URL endpoint for the GL statistical account.
             * @example /objects/general-ledger/statistical-account/144
             */
            readonly href?: string;
        };
        /** @description Report cloud store options */
        "report.cloud-store-options": {
            /**
             * @description Predefined cloud store name. Required when the `outputLocation` is set to `cloud`.
             * @example CloudStore
             */
            cloudStore?: string;
            /** @description Predefined cloud store. Required when the `outputLocation` is set to `cloud`. */
            cloudStorage?: {
                /**
                 * @description Unique key for the cloud storage.
                 * @example 44
                 */
                key?: string;
                /**
                 * @description Unique ID for the cloud storage.
                 * @example Amazon Storage Plan
                 */
                id?: string;
                /**
                 * @description URL endpoint for the cloud storage.
                 * @example /objects/company-config/cloud-storage/44
                 */
                readonly href?: string;
            };
            /**
             * @description Cloud store path. Used when the `outputLocation` is set to `cloud`.
             * @example 2025 Reports
             */
            path?: string;
        };
        "report-time-period-filter-ref": {
            periodToDate?: {
                reportingPeriod?: components["schemas"]["reporting-period-ref"];
                /**
                 * Format: date
                 * @description The "as of" date to use with any relative date comparisons in selected filters. The current date is used if `asOfDate` is not set.
                 * @example 2014-01-08
                 */
                asOfDate?: string;
            };
            /** @description Date range. */
            dateRange?: {
                /**
                 * Format: date
                 * @description Start of the date range.
                 * @example 2025-01-02
                 */
                startDate?: string;
                /**
                 * Format: date
                 * @description End of the date range.
                 * @example 2025-12-31
                 */
                endDate?: string;
            };
        };
        "account-range-ref": {
            startingAccount?: {
                /**
                 * @description System-assigned key for the account.
                 * @example 144
                 */
                key?: string;
                /**
                 * @description Unique identifier for the account.
                 * @example 1112
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/144
                 */
                readonly href?: string;
            };
            endingAccount?: {
                /**
                 * @description System-assigned key for the account.
                 * @example 144
                 */
                key?: string;
                /**
                 * @description Unique identifier for the account.
                 * @example 1112
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/144
                 */
                readonly href?: string;
            };
        };
        "reporting-account-range-ref": {
            startingReportingAccount?: {
                /**
                 * @description System-assigned key for the reporting account.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique identifier for the reporting account.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description URL endpoint for the reporting account.
                 * @example /objects/general-ledger/reporting-account/23
                 */
                readonly href?: string;
            };
            endingReportingAccount?: {
                /**
                 * @description System-assigned key for the reporting account.
                 * @example 25
                 */
                key?: string;
                /**
                 * @description Unique identifier for the reporting account.
                 * @example 25
                 */
                id?: string;
                /**
                 * @description URL endpoint for the reporting account.
                 * @example /objects/general-ledger/reporting-account/25
                 */
                readonly href?: string;
            };
        };
        "report-dimensions-ref": {
            location?: components["schemas"]["location-ref"];
            department?: components["schemas"]["department-ref"];
            employee?: components["schemas"]["employee-ref"];
            project?: components["schemas"]["project-ref"];
            task?: components["schemas"]["task-ref"];
            customer?: components["schemas"]["customer-ref"];
            vendor?: components["schemas"]["vendor-ref"];
            warehouse?: components["schemas"]["warehouse-ref"];
            class?: components["schemas"]["class-ref"];
            costType?: components["schemas"]["cost-type-ref"];
            asset?: components["schemas"]["asset-ref"];
            contract?: components["schemas"]["report-contract-ref"];
            affiliateEntity?: components["schemas"]["affiliate-entity-ref"];
            item?: components["schemas"]["item-ref"];
            productLine?: components["schemas"]["product-line-ref"];
        };
        "report-dimension-type-ref": {
            projectType?: components["schemas"]["project-type-ref"];
            customerType?: components["schemas"]["customer-type-ref"];
            vendorType?: components["schemas"]["vendor-type-ref"];
            employeeType?: components["schemas"]["employee-type-ref"];
        };
        "report-dimension-groups-ref": {
            locationGroup?: {
                /**
                 * @description Location group key
                 * @example 7
                 */
                key?: string;
                /**
                 * @description Location group ID
                 * @example LG-1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the location group
                 * @example /objects/company-config/location-group/7
                 */
                readonly href?: string;
            };
            departmentGroup?: {
                /**
                 * @description Department group key
                 * @example 35
                 */
                key?: string;
                /**
                 * @description Department group ID
                 * @example DG-35
                 */
                id?: string;
                /**
                 * @description URL endpoint for the department-group
                 * @example /objects/company-config/department-group/35
                 */
                readonly href?: string;
            };
            vendorGroup?: {
                /**
                 * @description Vendor group key
                 * @example 35
                 */
                key?: string;
                /**
                 * @description Vendor group ID
                 * @example VDN-01
                 */
                id?: string;
                /**
                 * @description URL endpoint for the vendor-group
                 * @example /objects/accounts-payable/vendor-group/25
                 */
                readonly href?: string;
            };
            customerGroup?: {
                /**
                 * @description Customer group key
                 * @example 32
                 */
                key?: string;
                /**
                 * @description Customer group ID
                 * @example CUST-32
                 */
                id?: string;
                /**
                 * @description URL endpoint for the customer-group
                 * @example /objects/accounts-receivable/customer-group/32
                 */
                readonly href?: string;
            };
            projectGroup?: {
                /**
                 * @description Project group key
                 * @example 35
                 */
                key?: string;
                /**
                 * @description Project group ID
                 * @example PRJ-35
                 */
                id?: string;
                /**
                 * @description URL endpoint for the project-group
                 * @example /objects/projects/project-group/35
                 */
                readonly href?: string;
            };
            employeeGroup?: {
                /**
                 * @description Employee group key
                 * @example 35
                 */
                key?: string;
                /**
                 * @description Employee group ID
                 * @example EMP-35
                 */
                id?: string;
                /**
                 * @description URL endpoint for the employee-group
                 * @example /objects/company-config/employee-group/35
                 */
                readonly href?: string;
            };
            classGroup?: {
                /**
                 * @description Class group key
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Class group ID
                 * @example CLS-10
                 */
                id?: string;
                /**
                 * @description URL endpoint for the class-group
                 * @example /objects/company-config/class-group/10
                 */
                readonly href?: string;
            };
            contractGroup?: {
                /**
                 * @description Contract group key
                 * @example 35
                 */
                key?: string;
                /**
                 * @description Contract group ID
                 * @example SA01
                 */
                id?: string;
                /**
                 * @description URL endpoint for the contract-group
                 * @example /objects/contracts/contract-group/35
                 */
                readonly href?: string;
            };
            warehouseGroup?: {
                /**
                 * @description Warehouse group key
                 * @example 35
                 */
                key?: string;
                /**
                 * @description Warehouse group ID
                 * @example WA01
                 */
                id?: string;
                /**
                 * @description URL endpoint for the warehouse-group
                 * @example /objects/inventory-control/warehouse-group/35
                 */
                readonly href?: string;
            };
            itemGroup?: {
                /**
                 * @description Item group key
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Item group ID
                 * @example Mobile-GP-1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the item-group
                 * @example /objects/inventory-control/item-group/1
                 */
                readonly href?: string;
            };
            taskGroup?: {
                /**
                 * @description Task group key
                 * @example 4
                 */
                key?: string;
                /**
                 * @description Task group ID
                 * @example INDHCS
                 */
                id?: string;
                /**
                 * @description URL endpoint for the task-group
                 * @example /objects/projects/task-group/4
                 */
                readonly href?: string;
            };
            assetGroup?: {
                /**
                 * @description Asset group key
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Asset group ID
                 * @example A2K-10K
                 */
                id?: string;
                /**
                 * @description URL endpoint for the asset-group
                 * @example /objects/fixed-assets/asset-group/1
                 */
                readonly href?: string;
            };
        };
        "report-sub-dimension-ref": {
            /**
             * @description Indicates whether to include location sub-dimensions when filtering. Set to `false` if you don't want to include children of the dimension when filtering.
             * @default true
             * @example true
             */
            includeLocation?: boolean;
            /**
             * @description Indicates whether to include department sub-dimensions when filtering. Set to `false` if you don't want to include children of the dimension when filtering.
             * @default true
             * @example true
             */
            includeDepartment?: boolean;
            /**
             * @description Indicates whether to include vendor sub-dimensions when filtering. Set to `false` if you don't want to include children of the dimension when filtering.
             * @default true
             * @example true
             */
            includeVendor?: boolean;
            /**
             * @description Indicates whether to include customer sub-dimensions when filtering. Set to `false` if you don't want to include children of the dimension when filtering.
             * @default true
             * @example true
             */
            includeCustomer?: boolean;
            /**
             * @description Indicates whether to include project sub-dimensions when filtering. Set to `false` if you don't want to include children of the dimension when filtering.
             * @default true
             * @example true
             */
            includeProject?: boolean;
            /**
             * @description Indicates whether to include employee sub-dimensions when filtering. Set to `false` if you don't want to include children of the dimension when filtering.
             * @default true
             * @example true
             */
            includeEmployee?: boolean;
            /**
             * @description Indicates whether to include class sub-dimensions when filtering. Set to `false` if you don't want to include children of the dimension when filtering.
             * @default true
             * @example true
             */
            includeClass?: boolean;
            /**
             * @description Indicates whether to include contract sub-dimensions when filtering. Set to `false` if you don't want to include children of the dimension when filtering.
             * @default true
             * @example true
             */
            includeContract?: boolean;
            /**
             * @description Indicates whether to include warehouse sub-dimensions when filtering. Set to `false` if you don't want to include children of the dimension when filtering.
             * @default true
             * @example true
             */
            includeWarehouse?: boolean;
            /**
             * @description Indicates whether to include task sub-dimensions when filtering. Set to `false` if you don't want to include children of the dimension when filtering.
             * @default true
             * @example true
             */
            includeTask?: boolean;
            /**
             * @description Indicates whether to include asset sub-dimensions when filtering. Set to `false` if you don't want to include children of the dimension when filtering.
             * @default true
             * @example true
             */
            includeAsset?: boolean;
            /**
             * @description Indicates whether to include cost type sub-dimensions when filtering. Set to `false` if you don't want to include children of the dimension when filtering.
             * @default true
             * @example true
             */
            includeCostType?: boolean;
        };
        "project-type-ref": {
            /**
             * @description System-assigned key for the project type.
             * @example 3
             */
            key?: string;
            /**
             * @description Unique identifier for the project type.
             * @example Internal
             */
            id?: string;
            /**
             * @description URL endpoint for the project type.
             * @example /objects/projects/project-type/3
             */
            readonly href?: string;
        };
        "customer-type-ref": {
            /**
             * @description System-assigned key for the customer type.
             * @example 3
             */
            key?: string;
            /**
             * @description Unique identifier for the customer type.
             * @example Top Level Customer
             */
            id?: string;
            /**
             * @description URL endpoint for the customer type.
             * @example /objects/accounts-receivable/customer-type/3
             */
            readonly href?: string;
        };
        "vendor-type-ref": {
            /**
             * @description System-assigned key for the vendor type.
             * @example 14
             */
            key?: string;
            /**
             * @description Unique identifier for the vendor type.
             * @example Retail
             */
            id?: string;
            /**
             * @description URL endpoint for the vendor type.
             * @example /objects/accounts-payable/vendor-type/14
             */
            readonly href?: string;
        };
        "employee-type-ref": {
            /**
             * @description System-assigned key for the employee type.
             * @example 23
             */
            key?: string;
            /**
             * @description Unique identifier for the employee type.
             * @example Contractor
             */
            id?: string;
            /**
             * @description URL endpoint for the employee type.
             * @example /objects/company-config/employee-type/23
             */
            readonly href?: string;
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
        "employee-ref": {
            /**
             * @description System-assigned key for the employee.
             * @example 10
             */
            key?: string;
            /**
             * @description Unique identifier for the employee.
             * @example E10
             */
            id?: string;
            /**
             * @description URL endpoint for the employee.
             * @example /objects/company-config/employee/10
             */
            readonly href?: string;
        };
        "project-ref": {
            /**
             * @description System-assigned key for the project.
             * @example 2
             */
            key?: string;
            /**
             * @description Unique identifier for the project.
             * @example NET-XML30-2
             */
            id?: string;
            /**
             * @description URL endpoint for the project.
             * @example /objects/projects/project/2
             */
            readonly href?: string;
        };
        "task-ref": {
            /**
             * @description Task key
             * @example 101
             */
            key?: string;
            /**
             * @description Task id
             * @example 01-010
             */
            id?: string;
            /**
             * @description Task name
             * @example Task 1
             */
            readonly name?: string;
            /** @example /objects/projects/task/101 */
            readonly href?: string;
        };
        "customer-ref": {
            /**
             * @description System-assigned key for the customer.
             * @example 123
             */
            key?: string;
            /**
             * @description Unique identifier for the customer.
             * @example BTI
             */
            id?: string;
            /**
             * @description Name for the customer.
             * @example Binary Trust Incorporated
             */
            readonly name?: string;
            /**
             * @description URL endpoint for the customer.
             * @example /objects/accounts-receivable/customer/123
             */
            readonly href?: string;
        };
        "vendor-ref": {
            /**
             * @description System-assigned key for the vendor.
             * @example 357
             */
            key?: string;
            /**
             * @description Unique identifier for the vendor.
             * @example 1605212096809
             */
            id?: string;
            /**
             * @description URL endpoint for the vendor.
             * @example /objects/accounts-payable/vendor/357
             */
            readonly href?: string;
        };
        "warehouse-ref": {
            /**
             * @description System-assigned key for the warehouse.
             * @example 6
             */
            key?: string;
            /**
             * @description Unique identifier for the warehouse.
             * @example WH01
             */
            id?: string;
            /**
             * @description URL endpoint for the warehouse.
             * @example /objects/inventory-control/warehouse/6
             */
            readonly href?: string;
        };
        "class-ref": {
            /**
             * @description Unique identifier for the class.
             * @example 1-Goods
             */
            id?: string;
            /**
             * @description System-assigned key for the class.
             * @example 42
             */
            key?: string;
            /**
             * @description Name for the class.
             * @example Goods
             */
            readonly name?: string;
            /**
             * @description URL endpoint for the class.
             * @example /objects/company-config/class/42
             */
            readonly href?: string;
        };
        "cost-type-ref": {
            /**
             * @description Unique identifier for the cost type.
             * @example 2
             */
            id?: string;
            /**
             * @description System-assigned key for the cost type.
             * @example 2
             */
            key?: string;
            /**
             * @description URL endpoint for the cost type.
             * @example /objects/construction/cost-type/2
             */
            readonly href?: string;
        };
        "asset-ref": {
            /**
             * @description Unique identifier for the asset.
             * @example A001
             */
            id?: string;
            /**
             * @description System-assigned key for the asset.
             * @example 1
             */
            key?: string;
            /**
             * @description URL endpoint for the asset.
             * @example /objects/fixed-assets/asset/1
             */
            readonly href?: string;
        };
        "report-contract-ref": {
            /**
             * @description Unique identifier for the contract.
             * @example CON-0045-1
             */
            id?: string;
            /**
             * @description System-assigned key for the contract.
             * @example 12
             */
            key?: string;
            /**
             * @description URL endpoint for the contract.
             * @example /objects/contracts/contract/12
             */
            readonly href?: string;
        };
        "affiliate-entity-ref": {
            /**
             * @description System-assigned key for the affiliate entity.
             * @example 23
             */
            key?: string;
            /**
             * @description Unique identifier for the affiliate entity.
             * @example AFF-23
             */
            id?: string;
            /**
             * @description URL endpoint for the affiliate entity.
             * @example /objects/affiliate-entity/23
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
        "product-line-ref": {
            /**
             * @description System-assigned key for the product line.
             * @example 319
             */
            key?: string;
            /**
             * @description Unique identifier for the product line.
             * @example Automotive
             */
            id?: string;
            /**
             * @description URL endpoint for the product line.
             * @example /objects/inventory-control/product-line/319
             */
            readonly href?: string;
        };
        "reporting-period-ref": {
            /**
             * @description System-assigned key for the reporting period.
             * @example 79
             */
            key?: string;
            /**
             * @description Unique identifier for the reporting period (case sensitive).
             * @example January 2021
             */
            id?: string;
            /**
             * @description URL endpoint for the reporting period.
             * @example /objects/general-ledger/reporting-period/45
             */
            readonly href?: string;
        };
        "report-show-dimensions-ref": {
            location?: {
                /**
                 * @default false
                 * @example true
                 */
                includeId?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeName?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeIdName?: boolean;
            };
            department?: {
                /**
                 * @default false
                 * @example true
                 */
                includeId?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeName?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeIdName?: boolean;
            };
            employee?: {
                /**
                 * @default false
                 * @example true
                 */
                includeId?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeName?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeIdName?: boolean;
            };
            project?: {
                /**
                 * @default false
                 * @example true
                 */
                includeId?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeName?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeIdName?: boolean;
            };
            task?: {
                /**
                 * @default false
                 * @example true
                 */
                includeId?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeName?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeIdName?: boolean;
            };
            customer?: {
                /**
                 * @default false
                 * @example true
                 */
                includeId?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeName?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeIdName?: boolean;
            };
            vendor?: {
                /**
                 * @default false
                 * @example true
                 */
                includeId?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeName?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeIdName?: boolean;
            };
            warehouse?: {
                /**
                 * @default false
                 * @example true
                 */
                includeId?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeName?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeIdName?: boolean;
            };
            class?: {
                /**
                 * @default false
                 * @example true
                 */
                includeId?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeName?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeIdName?: boolean;
            };
            costType?: {
                /**
                 * @default false
                 * @example true
                 */
                includeId?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeName?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeIdName?: boolean;
            };
            asset?: {
                /**
                 * @default false
                 * @example true
                 */
                includeId?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeName?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeIdName?: boolean;
            };
            contract?: {
                /**
                 * @default false
                 * @example true
                 */
                includeId?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeName?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeIdName?: boolean;
            };
            affiliateEntity?: {
                /**
                 * @default false
                 * @example true
                 */
                includeId?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeName?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeIdName?: boolean;
            };
            item?: {
                /**
                 * @default false
                 * @example true
                 */
                includeId?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeName?: boolean;
                /**
                 * @default false
                 * @example true
                 */
                includeIdName?: boolean;
            };
        };
        "account-group-range-ref": {
            startingAccountGroup?: {
                /**
                 * @description System-assigned key for the account group.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique identifier for the account group.
                 * @example Accounts Payable
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account group.
                 * @example /objects/general-ledger/account-group/23
                 */
                readonly href?: string;
            };
            endingAccountGroup?: {
                /**
                 * @description System-assigned key for the account group.
                 * @example 24
                 */
                key?: string;
                /**
                 * @description Unique identifier for the account group.
                 * @example Account Receivable
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account group.
                 * @example /objects/general-ledger/account-group/24
                 */
                readonly href?: string;
            };
        };
        "account-category-range-ref": {
            startingAccountCategory?: {
                /**
                 * @description System-assigned key for the reporting category.
                 * @example 133
                 */
                key?: string;
                /**
                 * @description Unique identifier for the reporting category.
                 * @example Cash and Cash Equivalents
                 */
                id?: string;
                /**
                 * @description URL endpoint for the reporting category.
                 * @example /objects/general-ledger/reporting-category/133
                 */
                readonly href?: string;
            };
            endingAccountCategory?: {
                /**
                 * @description System-assigned key for the reporting category.
                 * @example 135
                 */
                key?: string;
                /**
                 * @description Unique identifier for the reporting category.
                 * @example Commission Expense
                 */
                id?: string;
                /**
                 * @description URL endpoint for the reporting category.
                 * @example /objects/general-ledger/reporting-category/135
                 */
                readonly href?: string;
            };
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
    "list-general-ledger-account": {
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
    "create-general-ledger-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Account to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account"] & components["schemas"]["general-ledger-accountRequiredProperties"];
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
    "get-general-ledger-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account.
                 * @example 411
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account.
                 * @example 411
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
    "update-general-ledger-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account.
                 * @example 411
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account"];
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
    "list-general-ledger-account-category": {
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
    "get-general-ledger-account-category-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account category.
                 * @example 178
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-category"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-general-ledger-account-range": {
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
    "get-general-ledger-account-range-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account range.
                 * @example 178
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-range"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-account-title-by-location": {
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
    "create-account-title-by-location": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account-name-entity-map"] & {
                    readonly id?: unknown;
                } & components["schemas"]["general-ledger-account-name-entity-mapRequiredProperties"];
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
    "get-account-title-by-location-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account name entity map.
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-name-entity-map"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-account-title-by-location-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account name entity map.
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
    "update-account-title-by-location-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account name entity map.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account-name-entity-map"] & {
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
    "list-general-ledger-account-allocation": {
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
    "create-general-ledger-account-allocation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create an account allocation. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account-allocation"] & components["schemas"]["general-ledger-account-allocationRequiredProperties"];
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
    "get-general-ledger-account-allocation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account allocation.
                 * @example 178
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-allocation"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-account-allocation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account allocation.
                 * @example 178
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
    "update-general-ledger-account-allocation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account allocation.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account-allocation"] & {
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
    "list-general-ledger-account-allocation-group": {
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
    "create-general-ledger-account-allocation-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new account allocation group. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account-allocation-group"] & components["schemas"]["general-ledger-account-allocation-groupRequiredProperties"];
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
    "get-general-ledger-account-allocation-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account allocation group.
                 * @example 178
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-allocation-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-account-allocation-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account allocation group.
                 * @example 178
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
    "update-general-ledger-account-allocation-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account allocation group.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account-allocation-group"] & {
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
    "list-general-ledger-account-allocation-group-member": {
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
    "get-general-ledger-account-allocation-group-member-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account allocation group member.
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-allocation-group-member"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-general-ledger-account-allocation-run": {
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
    "create-general-ledger-account-allocation-run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create an account allocation run */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account-allocation-run"] & components["schemas"]["general-ledger-account-allocation-runRequiredProperties"];
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
    "get-general-ledger-account-allocation-run-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account allocation run.
                 * @example 178
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-allocation-run"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-account-allocation-run-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account allocation run.
                 * @example 178
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
    "list-general-ledger-account-allocation-source": {
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
    "get-general-ledger-account-allocation-source-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account allocation source.
                 * @example 178
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-allocation-source"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-general-ledger-account-allocation-source-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account allocation source.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account-allocation-source"];
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
    "list-general-ledger-account-allocation-basis": {
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
    "get-general-ledger-account-allocation-basis-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account allocation basis.
                 * @example 178
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-allocation-basis"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-general-ledger-account-allocation-basis-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account allocation basis.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account-allocation-basis"];
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
    "list-general-ledger-account-allocation-target": {
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
    "get-general-ledger-account-allocation-target-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account allocation target.
                 * @example 178
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-allocation-target"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-general-ledger-account-allocation-target-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account allocation target.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account-allocation-target"];
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
    "list-general-ledger-account-allocation-reverse": {
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
    "get-general-ledger-account-allocation-reverse-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account allocation reversal.
                 * @example 178
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-allocation-reverse"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-general-ledger-account-allocation-reverse-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account allocation reversal.
                 * @example 178
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account-allocation-reverse"];
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
    "restart-general-ledger-account-allocation-run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["general-ledger-account-allocation-run-restart-request"];
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
                        "ia::result"?: components["schemas"]["general-ledger-account-allocation-run-restart-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-general-ledger-recurring-account-allocation": {
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
    "create-general-ledger-recurring-account-allocation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a recurring account allocation. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.recurring-account-allocation"] & components["schemas"]["general-ledger-recurring-account-allocationRequiredProperties"];
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
    "get-general-ledger-recurring-account-allocation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring account allocation.
                 * @example 2354
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.recurring-account-allocation"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-recurring-account-allocation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring account allocation.
                 * @example 2354
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
    "update-general-ledger-recurring-account-allocation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring account allocation.
                 * @example 2354
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.recurring-account-allocation"] & {
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
    "list-general-ledger-account-group": {
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
    "create-general-ledger-account-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Account group to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account-group"] & components["schemas"]["general-ledger-account-groupRequiredProperties"];
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
    "get-general-ledger-account-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account group.
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-account-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account group.
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
    "update-general-ledger-account-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account-group"] & {
                    readonly id?: unknown;
                    readonly groupType?: unknown;
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
    "list-general-ledger-account-group-purpose": {
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
    "create-general-ledger-account-group-purpose": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Account group purpose to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account-group-purpose"] & components["schemas"]["general-ledger-account-group-purposeRequiredProperties"];
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
    "get-general-ledger-account-group-purpose-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account group purpose.
                 * @example 3906
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-group-purpose"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-account-group-purpose-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account group purpose.
                 * @example 3906
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
    "update-general-ledger-account-group-purpose-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account group purpose.
                 * @example 3906
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.account-group-purpose"];
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
    "list-general-ledger-account-group-member": {
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
    "get-general-ledger-account-group-member-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account group member.
                 * @example 201
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-group-member"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-general-ledger-account-group-category-member": {
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
    "get-general-ledger-account-group-category-member-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account group category member.
                 * @example 178
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-group-category-member"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-general-ledger-account-group-computation": {
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
    "get-general-ledger-account-group-computation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the computation account group.
                 * @example 201
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-group-computation"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-general-ledger-account-group-map": {
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
    "get-general-ledger-account-group-map-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account group map.
                 * @example 132
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.account-group-map"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-general-ledger-accounting-sequence": {
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
    "create-general-ledger-accounting-sequence": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Accounting sequence to create. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.accounting-sequence"] & components["schemas"]["general-ledger-accounting-sequenceRequiredProperties"];
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
    "get-general-ledger-accounting-sequence-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the accounting sequence.
                 * @example 132
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.accounting-sequence"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-accounting-sequence-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the accounting sequence.
                 * @example 132
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
    "update-general-ledger-accounting-sequence-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the accounting sequence.
                 * @example 132
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.accounting-sequence"];
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
    "list-general-ledger-accounting-sequence-line": {
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
    "create-general-ledger-accounting-sequence-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Accounting sequence line to create. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.accounting-sequence-line"] & components["schemas"]["general-ledger-accounting-sequence-lineRequiredProperties"];
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
    "get-general-ledger-accounting-sequence-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the accounting sequence line.
                 * @example 132
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.accounting-sequence-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-accounting-sequence-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the accounting sequence line.
                 * @example 132
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
    "update-general-ledger-accounting-sequence-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the accounting sequence line.
                 * @example 132
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.accounting-sequence-line"];
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
    "list-general-ledger-budget": {
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
    "create-general-ledger-budget": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a budget */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.budget"] & components["schemas"]["general-ledger-budgetRequiredProperties"];
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
    "get-general-ledger-budget-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the budget.
                 * @example 291
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.budget"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-budget-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the budget.
                 * @example 291
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
    "update-general-ledger-budget-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the budget.
                 * @example 291
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.budget"] & {
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
    "list-general-ledger-budget-detail": {
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
    "get-general-ledger-budget-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the budget detail.
                 * @example 153
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.budget-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-general-ledger-journal": {
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
    "create-general-ledger-journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Journal to create */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.journal"] & components["schemas"]["general-ledger-journalRequiredProperties"];
            };
        };
        responses: {
            /** @description New journal reference */
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
    "get-general-ledger-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the journal.
                 * @example 411
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.journal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the journal.
                 * @example 411
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
                content?: never;
            };
            400: components["responses"]["400error"];
        };
    };
    "update-general-ledger-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the journal.
                 * @example 411
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.journal"] & {
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
    "list-general-ledger-user-defined-book": {
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
    "create-general-ledger-user-defined-book": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description User-defined book to create. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.user-defined-book"] & components["schemas"]["general-ledger-user-defined-bookRequiredProperties"];
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
    "get-general-ledger-user-defined-book-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the user-defined book
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.user-defined-book"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-user-defined-book-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the user-defined book
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
    "update-general-ledger-user-defined-book-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the user-defined book
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.user-defined-book"] & {
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
    "list-general-ledger-user-defined-journal": {
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
    "create-general-ledger-user-defined-journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new user-defined journal with the specified properties. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.user-defined-journal"] & components["schemas"]["general-ledger-user-defined-journalRequiredProperties"];
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
    "get-general-ledger-user-defined-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a user-defined journal.
                 * @example 46
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.user-defined-journal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-user-defined-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a user-defined journal.
                 * @example 46
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
    "update-general-ledger-user-defined-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a user-defined journal.
                 * @example 46
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.user-defined-journal"] & {
                    readonly id?: unknown;
                    userDefinedBook?: {
                        readonly id?: unknown;
                        readonly key?: unknown;
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
    "list-general-ledger-journal-entry": {
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
    "create-general-ledger-journal-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new journal entry */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.journal-entry"] & components["schemas"]["general-ledger-journal-entryRequiredProperties"];
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
    "get-general-ledger-journal-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the journal entry.
                 * @example 132
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.journal-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-journal-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the journal entry.
                 * @example 132
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
    "update-general-ledger-journal-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the journal entry.
                 * @example 132
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.journal-entry"] & {
                    readonly id?: unknown;
                    readonly state?: unknown;
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
    "list-general-ledger-journal-entry-line": {
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
    "get-general-ledger-journal-entry-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the journal entry line.
                 * @example 132
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.journal-entry-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-journal-entry-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the journal entry line.
                 * @example 132
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
    "list-general-ledger-journal-entry-tax-entry": {
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
    "get-general-ledger-journal-entry-tax-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the journal entry tax entry.
                 * @example 300
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.journal-entry-tax-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-general-ledger-journal-entry-txn-template": {
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
    "create-general-ledger-journal-entry-txn-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Journal entry transaction template to create. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.journal-entry-txn-template"] & components["schemas"]["general-ledger-journal-entry-txn-templateRequiredProperties"];
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
    "get-general-ledger-journal-entry-txn-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the GL journal entry transaction template.
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.journal-entry-txn-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-journal-entry-txn-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the GL journal entry transaction template.
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
    "update-general-ledger-journal-entry-txn-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the GL journal entry transaction template.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.journal-entry-txn-template"] & {
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
    "list-general-ledger-journal-entry-txn-template-line": {
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
    "get-general-ledger-journal-entry-txn-template-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the GL journal entry transaction template line.
                 * @example 22
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.journal-entry-txn-template-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-journal-entry-txn-template-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the GL journal entry transaction template line.
                 * @example 22
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
    "list-general-ledger-reporting-period": {
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
    "create-general-ledger-reporting-period": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Reporting period to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.reporting-period"] & components["schemas"]["general-ledger-reporting-periodRequiredProperties"];
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
    "get-general-ledger-reporting-period-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting period.
                 * @example 240
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.reporting-period"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-reporting-period-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting period.
                 * @example 240
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
    "update-general-ledger-reporting-period-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting period.
                 * @example 240
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.reporting-period"] & {
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
    "list-general-ledger-adjustment-journal": {
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
    "create-general-ledger-adjustment-journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create an adjustment journal. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.adjustment-journal"] & components["schemas"]["general-ledger-adjustment-journalRequiredProperties"];
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
    "get-general-ledger-adjustment-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the adjustment journal.
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.adjustment-journal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-adjustment-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the adjustment journal.
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
    "update-general-ledger-adjustment-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the adjustment journal.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.adjustment-journal"] & {
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
    "list-general-ledger-gaap-adjustment-journal": {
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
    "create-general-ledger-gaap-adjustment-journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a GAAP adjustment journal */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.gaap-adjustment-journal"] & components["schemas"]["general-ledger-gaap-adjustment-journalRequiredProperties"];
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
    "get-general-ledger-gaap-adjustment-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a specified GAAP adjustment journal.
                 * @example 89
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.gaap-adjustment-journal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-gaap-adjustment-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a specified GAAP adjustment journal.
                 * @example 89
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
    "update-general-ledger-gaap-adjustment-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a specified GAAP adjustment journal.
                 * @example 89
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.gaap-adjustment-journal"] & {
                    /** @example Reclassification GAJ */
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
    "list-general-ledger-tax-adjustment-journal": {
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
    "create-general-ledger-tax-adjustment-journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a tax adjustment journal with the specified properties. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.tax-adjustment-journal"] & components["schemas"]["general-ledger-tax-adjustment-journalRequiredProperties"];
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
    "get-general-ledger-tax-adjustment-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the tax adjustment journal
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.tax-adjustment-journal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-tax-adjustment-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the tax adjustment journal
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
    "update-general-ledger-tax-adjustment-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the tax adjustment journal
                 * @example 44
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.tax-adjustment-journal"] & {
                    /** @example TAX-ADJ-26Q1 */
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
    "list-statistical-account": {
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
    "create-statistical-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.statistical-account"] & components["schemas"]["general-ledger-statistical-accountRequiredProperties"];
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
    "get-statistical-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the statistical account.
                 * @example 439
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.statistical-account"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-statistical-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the statistical account.
                 * @example 439
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
    "update-statistical-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the statistical account.
                 * @example 439
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.statistical-account"];
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
    "list-general-ledger-statistical-journal": {
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
    "create-general-ledger-statistical-journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a statistical journal */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.statistical-journal"] & components["schemas"]["general-ledger-statistical-journalRequiredProperties"];
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
    "get-general-ledger-statistical-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the statistical journal.
                 * @example 88
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.statistical-journal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-statistical-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the statistical journal.
                 * @example 88
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
    "update-general-ledger-statistical-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the statistical journal.
                 * @example 88
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.statistical-journal"] & {
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
    "list-general-ledger-statistical-journal-entry": {
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
    "create-general-ledger-statistical-journal-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new statistical journal entry */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.statistical-journal-entry"] & components["schemas"]["general-ledger-statistical-journal-entryRequiredProperties"];
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
    "get-general-ledger-statistical-journal-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the statistical journal entry.
                 * @example 132
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.statistical-journal-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-statistical-journal-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the statistical journal entry.
                 * @example 132
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
    "update-general-ledger-statistical-journal-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the statistical journal entry.
                 * @example 132
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.statistical-journal-entry"];
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
    "get-objects-statistical-journal-entry-line": {
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
    "get-objects-statistical-journal-entry-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the statistical journal entry line item.
                 * @example 2647
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.statistical-journal-entry-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-general-ledger-statistical-adjustment-journal": {
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
    "create-general-ledger-statistical-adjustment-journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.statistical-adjustment-journal"] & components["schemas"]["general-ledger-statistical-adjustment-journalRequiredProperties"];
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
    "get-general-ledger-statistical-adjustment-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the statistical adjustment journal.
                 * @example 134
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.statistical-adjustment-journal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-statistical-adjustment-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the statistical adjustment journal.
                 * @example 134
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
    "update-general-ledger-statistical-adjustment-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the statistical adjustment journal.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.statistical-adjustment-journal"] & {
                    /** @example STAT-ADJ */
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
    "list-general-ledger-txn-allocation-template": {
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
    "create-general-ledger-txn-allocation-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Transaction allocation template to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.txn-allocation-template"] & components["schemas"]["general-ledger-txn-allocation-templateRequiredProperties"];
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
    "get-general-ledger-txn-allocation-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transaction allocation template.
                 * @example 2
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.txn-allocation-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-txn-allocation-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transaction allocation template.
                 * @example 2
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
    "update-general-ledger-txn-allocation-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transaction allocation template.
                 * @example 2
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.txn-allocation-template"] & {
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
    "list-general-ledger-txn-allocation-template-line": {
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
    "get-general-ledger-txn-allocation-template-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transaction allocation template line.
                 * @example 209856
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.txn-allocation-template-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-general-ledger-financial-graph": {
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
    "get-general-ledger-financial-graph-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the financial graph.
                 * @example 2354
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.financial-graph"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-financial-graph-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the financial graph.
                 * @example 2354
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
    "list-general-ledger-reporting-account": {
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
    "get-general-ledger-reporting-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting account.
                 * @example 391
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.reporting-account"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-reporting-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting account.
                 * @example 391
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
    "list-general-ledger-reporting-account-map": {
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
    "get-general-ledger-reporting-account-map-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting account map.
                 * @example 3
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.reporting-account-map"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-general-ledger-reporting-account-set": {
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
    "create-general-ledger-reporting-account-set": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Fields for the new reporting account set. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.reporting-account-set"] & components["schemas"]["general-ledger-reporting-account-setRequiredProperties"];
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
    "get-general-ledger-reporting-account-set-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting account set.
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.reporting-account-set"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-reporting-account-set-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting account set.
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
    "update-general-ledger-reporting-account-set-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting account set.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.reporting-account-set"];
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
    "list-general-ledger-reporting-account-set-permission": {
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
    "get-general-ledger-reporting-account-set-permission-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting account set permission.
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.reporting-account-set-permission"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-reporting-account-set-permission-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting account set permission.
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
    "list-general-ledger-report-audience": {
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
    "create-general-ledger-report-audience": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.report-audience"] & components["schemas"]["general-ledger-report-audienceRequiredProperties"] & {
                    readonly id?: unknown;
                };
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
    "get-general-ledger-report-audience-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the report audience.
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.report-audience"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-report-audience-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the report audience.
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
    "update-general-ledger-report-audience-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the report audience.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.report-audience"] & {
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
    "list-general-ledger-report-type": {
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
    "create-general-ledger-report-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.report-type"] & components["schemas"]["general-ledger-report-typeRequiredProperties"];
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
    "get-general-ledger-report-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the report type.
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.report-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-general-ledger-report-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the report type.
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
    "update-general-ledger-report-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the report type.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.general-ledger.report-type"] & {
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
    "list-general-ledger-reporting-category": {
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
    "get-general-ledger-reporting-category-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the reporting category.
                 * @example 178
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
                        "ia::result"?: components["schemas"]["objects.general-ledger.reporting-category"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "gl-report-account-balance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Report definition and runtime parameters used to submit the account balance report for processing. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.reports.general-ledger-account-balance"] & components["schemas"]["general-ledger-reports.account-balanceRequiredProperties"];
            };
        };
        responses: {
            /** @description OK */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["services.report.submitted-status"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "gl-report-account-balance-by-dimension": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Report definition and runtime parameters used to submit the account balance by dimension report for processing. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.reports.general-ledger-account-balance-by-dimension"] & components["schemas"]["general-ledger-reports.account-balance-by-dimensionRequiredProperties"];
            };
        };
        responses: {
            /** @description OK */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["services.report.submitted-status"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "gl-report-account-group-hierarchy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Report definition and runtime parameters used to submit the account group hierarchy report for processing. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.reports.general-ledger-account-group-hierarchy"] & components["schemas"]["general-ledger-reports.account-group-hierarchyRequiredProperties"];
            };
        };
        responses: {
            /** @description OK */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["services.report.submitted-status"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "gl-report-details": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Report definition and runtime parameters used to submit the GL details report for processing. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.reports.general-ledger-details"] & components["schemas"]["general-ledger-reports.detailsRequiredProperties"];
            };
        };
        responses: {
            /** @description OK */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["services.report.submitted-status"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "gl-report-trial-balance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Report definition and runtime parameters used to submit the trial balance report for processing. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.reports.general-ledger-trial-balance"] & components["schemas"]["general-ledger-reports.trial-balanceRequiredProperties"];
            };
        };
        responses: {
            /** @description OK */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["services.report.submitted-status"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
}

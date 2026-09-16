// Generated from spec/cash-management.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/cash-management/financial-institution": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List financial institutions
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each financial institution. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-financial-institution"];
        put?: never;
        /**
         * Create a financial institution
         * @description Creates a new financial institution.
         */
        post: operations["create-cash-management-financial-institution"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/financial-institution/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the financial institution.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a financial institution
         * @description Returns detailed information for a specified financial institution.
         */
        get: operations["get-cash-management-financial-institution-key"];
        put?: never;
        post?: never;
        /**
         * Delete a financial institution
         * @description Deletes a financial institution.
         */
        delete: operations["delete-cash-management-financial-institution-key"];
        options?: never;
        head?: never;
        /**
         * Update a financial institution
         * @description Updates an existing financial institution by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-cash-management-financial-institution-key"];
        trace?: never;
    };
    "/objects/cash-management/bank-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank accounts
         * @description Returns a collection with a key, ID, and link for each bank account.
         */
        get: operations["list-cash-management-bank-account"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-account/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bank account.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank account
         * @description Returns detailed information for a specified bank account.
         */
        get: operations["get-cash-management-bank-account-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/checking-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List checking accounts
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each checking account. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-checking-account"];
        put?: never;
        /**
         * Create a checking account
         * @description Creates a new checking account.
         */
        post: operations["post-objects-checking-account"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/checking-account/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the checking account.
                 * @example 539
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a checking account
         * @description Returns detailed information for a specified checking account.
         */
        get: operations["get-cash-management-checking-account-key"];
        put?: never;
        post?: never;
        /**
         * Delete a checking account
         * @description Deletes a checking account.
         */
        delete: operations["delete-objects-checking-account"];
        options?: never;
        head?: never;
        /**
         * Update a checking account
         * @description Updates an existing checking account by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["patch-objects-checking-account"];
        trace?: never;
    };
    "/objects/cash-management/credit-card-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List credit card accounts
         * @description Returns a collection with a key, ID, and link for each credit card account. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-credit-card-account"];
        put?: never;
        /**
         * Create a credit card account
         * @description Creates a new credit card account.
         */
        post: operations["post-objects-credit-card-account"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-account/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the credit card account.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a credit card account
         * @description Returns detailed information for a specified credit card account.
         */
        get: operations["get-cash-management-credit-card-account-key"];
        put?: never;
        post?: never;
        /**
         * Delete a credit card account
         * @description Deletes a credit card account. You cannot delete a credit card account that has subledger transactions associated with it.
         */
        delete: operations["delete-cash-management-credit-card-account-key"];
        options?: never;
        head?: never;
        /**
         * Update a credit card account
         * @description Updates an existing credit card account by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["patch-objects-credit-card-account"];
        trace?: never;
    };
    "/objects/cash-management/savings-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List savings accounts
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each savings account. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-cash-management-savings-account"];
        put?: never;
        /**
         * Create a savings account
         * @description Create a new savings account.
         */
        post: operations["post-objects-savings-account"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/savings-account/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the savings account.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a savings account
         * @description Returns detailed information for a specified savings account.
         */
        get: operations["get-cash-management-savings-account-key"];
        put?: never;
        post?: never;
        /**
         * Delete a savings account
         * @description Deletes a savings account. You can only delete accounts that are not tied to any transactions or payments.
         */
        delete: operations["delete-cash-management-savings-account-key"];
        options?: never;
        head?: never;
        /**
         * Update a savings account
         * @description Updates an existing savings account by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["patch-objects-savings-account"];
        trace?: never;
    };
    "/objects/cash-management/bank-transaction": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank transactions
         * @description Returns a collection with a key, ID, and link for each bank transaction. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-transaction"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-transaction/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction.
                 * @example 281
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank transaction
         * @description Returns detailed information for a specified bank transaction.
         */
        get: operations["get-cash-management-bank-transaction-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/cash-management/bank-transaction/assign-customer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Assign customer to a bank transaction
         * @description Assign a customer to a bank transaction that has been imported from a bank feed or file import. When a bank transaction is assigned to a customer, the bank transaction state changes from `unassigned` to `assigned`.
         *
         *     For more information, read about [about assignment rules for bank transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_assignment_rules) in the Sage Intacct Help Center.
         */
        post: operations["assign-customer-cash-management-bank-transaction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/cash-management/bank-transaction/ignore": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Ignore a bank transaction
         * @description Ignore a bank transaction that has been imported from a bank feed or file import. When a bank transaction is ignored, the bank transaction state changes from `unmatched` to `ignored`.
         *
         *     For more information, read about [ignoring bank transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Ignore-transactions-bank-feeds) in the Sage Intacct Help Center.
         */
        post: operations["ignore-cash-management-bank-transaction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/cash-management/bank-transaction/stop-ignoring": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Stop ignoring a bank transaction
         * @description Stop ignoring a bank transaction that was previously ignored. When a bank transaction is no longer ignored, the bank transaction state changes from `ignored` to `unmatched`.
         *
         *     For more information, read about [stopping ignoring bank transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Stop_ignoring_bank_transactions) in the Sage Intacct Help Center.
         */
        post: operations["stop-ignoring-cash-management-bank-transaction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule-set": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank transaction rule sets
         * @description Returns a collection with a key, ID, and link for each bank transaction rule set. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-txn-rule-set"];
        put?: never;
        /**
         * Create a bank transaction rule set
         * @description Creates a new bank transaction rule set.
         */
        post: operations["create-cash-management-bank-txn-rule-set"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule-set/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction rule set.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank transaction rule set
         * @description Returns detailed information for a specified bank transaction rule set.
         */
        get: operations["get-cash-management-bank-txn-rule-set-key"];
        put?: never;
        post?: never;
        /**
         * Delete a bank transaction rule set
         * @description Deletes a bank transaction rule set.
         */
        delete: operations["delete-cash-management-bank-txn-rule-set-key"];
        options?: never;
        head?: never;
        /**
         * Update a bank transaction rule set
         * @description Updates an existing bank transaction rule set by setting field values. Any fields not provided remain unchanged. Updating a rule set affects matches for incoming transactions going forward for every associated account that uses the rule set. Updating a rule set does not affect transactions that have already been matched.
         */
        patch: operations["update-cash-management-bank-txn-rule-set-key"];
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule-set-run-log": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank transaction rule set run logs
         * @description Returns a collection with a key, ID, and link for each bank transaction rule set run log. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-txn-rule-set-run-log"];
        put?: never;
        /**
         * Create a bank transaction rule set run log
         * @description Creates a new bank transaction rule set run log.
         */
        post: operations["create-cash-management-bank-txn-rule-set-run-log"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule-set-run-log/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction rule set run log.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank transaction rule set run log
         * @description Returns detailed information for a specified bank transaction rule set run log.
         */
        get: operations["get-cash-management-bank-txn-rule-set-run-log-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule-set-run-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank transaction rule set run details
         * @description Returns a collection with a key, ID, and link for each bank transaction rule set run detail record. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-txn-rule-set-run-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule-set-run-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction rule set run details.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank transaction rule set run detail
         * @description Returns detailed information for a specified bank transaction rule set run detail.
         */
        get: operations["get-cash-management-bank-txn-rule-set-run-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank transaction rules
         * @description Returns a collection of bank transaction rules with a key, ID, and link for each rule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-txn-rule"];
        put?: never;
        /**
         * Create a bank transaction rule
         * @description Creates a new bank transaction rule.
         */
        post: operations["create-cash-management-bank-txn-rule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bank transaction rule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank transaction rule
         * @description Returns detailed information for a specified bank transaction rule.
         */
        get: operations["get-cash-management-bank-txn-rule-key"];
        put?: never;
        post?: never;
        /**
         * Delete a bank transaction rule
         * @description Deletes a bank transaction rule.
         */
        delete: operations["delete-cash-management-bank-txn-rule-key"];
        options?: never;
        head?: never;
        /**
         * Update a bank transaction rule
         * @description Updates an existing bank transaction rule by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-cash-management-bank-txn-rule-key"];
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule-filter": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank transaction rule filters
         * @description Returns a collection of bank transaction rule filters with a key, ID, and link for each filter. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-txn-rule-filter"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule-filter/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction rule filter.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank transaction rule filter
         * @description Returns detailed information for a specified bank transaction rule filter.
         */
        get: operations["get-cash-management-bank-txn-rule-filter-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank transaction rule groups
         * @description Returns a collection of bank transaction rule groups with a key, ID, and link for each group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-txn-rule-group"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bank transaction rule group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank transaction rule group
         * @description Returns detailed information for a specified bank transaction rule group.
         */
        get: operations["get-cash-management-bank-txn-rule-group-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank transaction rule maps
         * @description Returns a collection with a key, ID, and link for each bank transaction rule map. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-txn-rule-map"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule-map/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction rule map.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank transaction rule map
         * @description Returns detailed information for a specified bank transaction rule map.
         */
        get: operations["get-cash-management-bank-txn-rule-map-key"];
        put?: never;
        post?: never;
        /**
         * Delete a bank transaction rule map
         * @description Deletes a bank transaction rule map.
         */
        delete: operations["delete-cash-management-bank-txn-rule-map-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule-match": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank transaction rule matches
         * @description Returns a collection of bank transaction rule match entries with a key, ID, and link for each match entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-txn-rule-match"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-rule-match/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction rule match entry.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank transaction rule match entry
         * @description Returns detailed information for a specified bank transaction rule match entry.
         */
        get: operations["get-cash-management-bank-txn-rule-match-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-assignment-rule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank transaction assignment rules
         * @description Returns a collection with a key, ID, and link for each bank transaction assignment rule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-txn-assignment-rule"];
        put?: never;
        /**
         * Create a bank transaction assignment rule
         * @description Creates a new bank transaction assignment rule.
         */
        post: operations["create-cash-management-bank-txn-assignment-rule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-assignment-rule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction assignment rule.
                 * @example 153
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank transaction assignment rule
         * @description Returns detailed information for a specified bank transaction assignment rule.
         */
        get: operations["get-cash-management-bank-txn-assignment-rule-key"];
        put?: never;
        post?: never;
        /**
         * Delete a bank transaction assignment rule
         * @description Deletes a bank transaction assignment rule.
         */
        delete: operations["delete-cash-management-bank-txn-assignment-rule-key"];
        options?: never;
        head?: never;
        /**
         * Update a bank transaction assignment rule
         * @description Updates an existing bank transaction assignment rule by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-cash-management-bank-txn-assignment-rule-key"];
        trace?: never;
    };
    "/objects/cash-management/bank-txn-assignment-rule-filter": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank transaction assignment rule filters
         * @description Returns a collection with a key, ID, and link for each bank transaction assignment rule filter. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-txn-assignment-rule-filter"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-txn-assignment-rule-filter/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction assignment rule filter.
                 * @example 105
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank transaction assignment rule filter
         * @description Returns detailed information for a specified bank transaction assignment rule filter.
         */
        get: operations["get-cash-management-bank-txn-assignment-rule-filter-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-fee": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank fees
         * @description Returns a collection with a key, ID, and link for each bank fee. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-fee"];
        put?: never;
        /**
         * Create a bank fee
         * @description Creates a new bank fee transaction.
         */
        post: operations["create-cash-management-bank-fee"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-fee/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank fee.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank fee
         * @description Returns detailed information for a specified bank fee.
         */
        get: operations["get-cash-management-bank-fee-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a bank fee
         * @description Updates an existing bank fee transaction by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-cash-management-bank-fee-key"];
        trace?: never;
    };
    "/workflows/cash-management/bank-fee/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reverse a bank fee
         * @description When a bank fee has been issued and is in a `posted` state, it can be reversed. Once the transaction is reversed, the original `posted` transaction immediately enters the `reversal` state. It transitions to the `reversed` state once the reversal date is reached. A reversal transaction is also created in the `reversal` state when you reverse a bank fee. The state of the reversal transaction does not change.
         *
         *     For more information, read about [reverse bank interest or charges](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reverse_bank_interest_charges) in the Sage Intacct Help Center.
         */
        post: operations["reverse-cash-management-bank-fee"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-fee-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank fee lines
         * @description Returns a collection with a key, ID, and link for each bank fee line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-fee-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-fee-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank fee line.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank fee line
         * @description Returns detailed information for a specified bank fee line.
         */
        get: operations["get-cash-management-bank-fee-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-fee-tax-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank fee tax entries
         * @description Returns a collection with a key, ID, and link for each bank fee tax entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-fee-tax-entry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-fee-tax-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank fee tax entry.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank fee tax entry
         * @description Returns detailed information for a specified bank fee tax entry.
         */
        get: operations["get-cash-management-bank-fee-tax-entry-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-file": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank files
         * @description Returns a collection with a key, ID, and link for each bank file. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-file"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-file/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank file.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank file
         * @description Returns detailed information for a specified bank file.
         */
        get: operations["get-cash-management-bank-file-key"];
        put?: never;
        post?: never;
        /**
         * Delete a Bank file
         * @description Deletes a Bank file.
         */
        delete: operations["delete-cash-management-bank-file-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-file-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank file details
         * @description Returns a collection with a key, ID, and link for each bank file detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-file-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-file-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank file detail object.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank file detail object
         * @description Returns detailed information for a specified bank file detail object.
         */
        get: operations["get-cash-management-bank-file-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/cash-management/bank-file/generate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate a bank file
         * @description Generate a bank file. A bank file is generated based on the provided payment keys. Each payment key corresponds to a specific payment for which the bank file needs to be generated.
         *
         *     For more information, read about [generating bank files](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_file_generation) in the Sage Intacct Help Center.
         */
        post: operations["generate-bank-file"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-feed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank feeds
         * @description Returns a collection with a key, ID, and link for each bank feed. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-feed"];
        put?: never;
        /**
         * Create a bank feed
         * @description Create a bank feed using one of the following methods, by fetching fetch transactions from a bank account or credit card account subscribed to Sage Cloud Services, or by manually providing XML bank transactions.
         *
         *     For more information read [about managing bank feed connections](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_bank_feed_connections) in the Sage Intacct Help Center.
         */
        post: operations["create-cash-management-bank-feed"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-feed/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the the bank feed.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank feed
         * @description Returns detailed information for a specified bank feed.
         */
        get: operations["get-cash-management-bank-feed-key"];
        put?: never;
        post?: never;
        /**
         * Delete a bank feed
         * @description Deletes a bank feed. You can delete a bank feed created with a `feedType` of `xml` if the transactions have not yet been reconciled. You cannot delete an online bank feed from Sage Cloud Services.
         */
        delete: operations["delete-cash-management-bank-feed-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-reconciliation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank reconciliations
         * @description Returns a collection with a key, ID, and link for each bank reconciliation. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-reconciliation"];
        put?: never;
        /**
         * Create a bank reconciliation
         * @description Creates a new bank reconciliation.
         */
        post: operations["create-cash-management-bank-reconciliation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-reconciliation/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bank reconciliation.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank reconciliation
         * @description Returns detailed information for a specified bank reconciliation.
         */
        get: operations["get-cash-management-bank-reconciliation-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-reconciliation-record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bank reconciliation records
         * @description Returns a collection with a key, ID, and link for each bank reconciliation record. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-bank-reconciliation-record"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/bank-reconciliation-record/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank reconciliation record.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bank reconciliation record
         * @description Returns detailed information for a specified bank reconciliation record.
         */
        get: operations["get-cash-management-bank-reconciliation-record-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/cash-management/bank-reconciliation/reopen": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reopen a bank reconciliation
         * @description Reopens a bank reconciliation that has a state of `reconciled`. When reopened, the bank reconciliation transitions to the `reopened` state so changes can be made.
         *
         *     For more information, read about [reconciliation](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_reconciliations) in the Sage Intacct Help Center.
         */
        post: operations["reopen-cash-management-bank-reconciliation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/reconciliation-source-record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account reconciliation source records
         * @description Returns a collection with a key, ID, and link for each account reconciliation source record. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-reconciliation-source-record"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/reconciliation-source-record/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account reconciliation source record.
                 * @example 137
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account reconciliation source record
         * @description Returns detailed information for a specified account reconciliation source record.
         */
        get: operations["get-cash-management-reconciliation-source-record-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/initial-open-item": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List initial open items
         * @description Returns a collection with a key, ID, and link for each initial open item. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-initial-open-item"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/initial-open-item/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the initial open item.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an initial open item
         * @description Returns detailed information for a specified initial open item.
         */
        get: operations["get-cash-management-initial-open-item-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-txn": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List credit card transactions
         * @description Returns a collection with a key, ID, and link for each credit card transaction. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-credit-card-txn"];
        put?: never;
        /**
         * Create a credit card transaction
         * @description Creates a new credit card transaction.
         */
        post: operations["create-cash-management-credit-card-txn"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-txn/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card transaction.
                 * @example 135
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a credit card transaction
         * @description Returns detailed information for a specified credit card transaction.
         */
        get: operations["get-cash-management-credit-card-txn-key"];
        put?: never;
        post?: never;
        /**
         * Delete a credit card transaction
         * @description Deletes a credit card transaction.
         *
         *     For more information, see [Delete a credit card transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Delete_cc_txn) in the Sage Intacct Help Center.
         */
        delete: operations["delete-cash-management-credit-card-txn-key"];
        options?: never;
        head?: never;
        /**
         * Update a credit card transaction
         * @description Updates an existing credit card transaction by setting field values. Any fields not provided remain unchanged.
         *
         *     For more information, see [Edit a credit card transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Edit_credit_card_transaction) in the Sage Intacct Help Center.
         */
        patch: operations["update-cash-management-credit-card-txn-key"];
        trace?: never;
    };
    "/workflows/cash-management/credit-card-txn/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reverse a credit card transaction
         * @description When a credit card transaction has been issued and is in a `posted` state, it can be reversed. When the transaction is reversed, the original `posted` transaction immediately enters the `reversal` state. It transitions to the `reversed` state once the reversal date is reached. A reversal transaction is also created in the `reversal` state when you reverse a credit card transaction. The state of the reversal transaction does not change.
         *
         *     For more information, see [Reverse a credit card transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Delete_remove_cc_txns) in the Sage Intacct Help Center.
         */
        post: operations["reverse-cash-management-credit-card-txn"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-txn-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List credit card transaction lines
         * @description Returns a collection of credit card transaction lines with a key, ID, and link for each item. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-credit-card-txn-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-txn-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card transaction line item.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a credit card transaction line
         * @description Returns detailed information for a specified credit card transaction line item.
         */
        get: operations["get-cash-management-credit-card-txn-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-txn-tax-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List credit card transaction tax entries
         * @description Returns a collection of credit card transaction tax entries with a key, ID, and link for each tax entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-credit-card-txn-tax-entry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-txn-tax-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card transaction tax entry.
                 * @example 135
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a credit card transaction tax entry
         * @description Returns detailed information for a particular credit card transaction tax entry.
         */
        get: operations["get-cash-management-credit-card-txn-tax-entry-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-txn-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List credit card transaction templates
         * @description Returns a collection of credit card transaction templates with a key, ID, and link for each template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-credit-card-txn-template"];
        put?: never;
        /**
         * Create a credit card transaction template
         * @description Creates a new credit card transaction template.
         */
        post: operations["create-cash-management-credit-card-txn-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-txn-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card transaction template.
                 * @example 3
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a credit card transaction template
         * @description Returns detailed information for a specified credit card transaction template.
         */
        get: operations["get-cash-management-credit-card-txn-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a credit card transaction template
         * @description Deletes a credit card transaction template.
         */
        delete: operations["delete-cash-management-credit-card-txn-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a credit card transaction template
         * @description Updates an existing credit card transaction template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-cash-management-credit-card-txn-template-key"];
        trace?: never;
    };
    "/objects/cash-management/credit-card-txn-line-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List credit card transaction line templates
         * @description Returns a collection of credit card transaction line templates with a key, ID, and link for each template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-credit-card-txn-line-template"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-txn-line-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card transaction line template.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a credit card transaction line template
         * @description Returns detailed information for a specified credit card transaction line template.
         */
        get: operations["get-cash-management-credit-card-txn-line-template-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-fee": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List credit card fees
         * @description Returns a collection with a key, ID, and link for each credit card fee. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-credit-card-fee"];
        put?: never;
        /**
         * Create a credit card fee
         * @description Creates a new credit card fee transaction.
         */
        post: operations["create-cash-management-credit-card-fee"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-fee/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card fee.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a credit card fee
         * @description Returns detailed information for a specified credit card fee transaction.
         */
        get: operations["get-cash-management-credit-card-fee-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a credit card fee
         * @description Updates an existing credit card fee transaction by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-cash-management-credit-card-fee-key"];
        trace?: never;
    };
    "/objects/cash-management/credit-card-fee-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List credit card fee lines
         * @description Returns a collection with a key, ID, and link for each credit card fee line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-credit-card-fee-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-fee-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card fee line.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a credit card fee line
         * @description Returns detailed information for a specified credit card fee line.
         */
        get: operations["get-cash-management-credit-card-fee-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-fee-tax-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List credit card fee tax entries
         * @description Returns a collection with a key, ID, and link for each credit card fee tax entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-credit-card-fee-tax-entry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-fee-tax-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card fee tax entry.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a credit card fee tax entry
         * @description Returns detailed information for a specified credit card fee tax entry.
         */
        get: operations["get-cash-management-credit-card-fee-tax-entry-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/cash-management/credit-card-fee/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reverse a credit card fee
         * @description When a credit card fee has been issued and is in a `posted` state, it can be reversed. Once the transaction is reversed, the original `posted` transaction immediately enters the `reversal` state. It transitions to the `reversed` state once the reversal date is reached.
         *
         *     A reversal transaction is also created in the `reversal` state when you reverse a credit card fee. The state of the reversal transaction does not change.
         *
         *     For more information, see [reverse a credit charge or fee](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reverse_charges_fees) in the Sage Intacct Help Center.
         */
        post: operations["reverse-cash-management-credit-card-fee"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-reconciliation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List credit card reconciliations
         * @description Returns a collection with a key, ID, and link for each credit card reconciliation. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-credit-card-reconciliation"];
        put?: never;
        /**
         * Create a credit card reconciliation
         * @description Creates a new credit card reconciliation.
         */
        post: operations["create-cash-management-credit-card-reconciliation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-reconciliation/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card reconciliation.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a credit card reconciliation
         * @description Returns detailed information for a specified credit card reconciliation.
         */
        get: operations["get-cash-management-credit-card-reconciliation-key"];
        put?: never;
        post?: never;
        /**
         * Delete a credit card reconciliation
         * @description Deletes a credit card reconciliation.
         */
        delete: operations["delete-cash-management-credit-card-reconciliation-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-reconciliation-record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List credit card reconciliation records
         * @description Returns a collection with a key, ID, and link for each credit card reconciliation record. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-credit-card-reconciliation-record"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/credit-card-reconciliation-record/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card reconciliation record.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a credit card reconciliation record
         * @description Returns detailed information for a specified credit card reconciliation record.
         */
        get: operations["get-cash-management-credit-card-reconciliation-record-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/cash-management/credit-card-reconciliation/reopen": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reopen a credit card reconciliation
         * @description Reopens a credit card reconciliation that has a state of `reconciled`. When reopened, the credit card reconciliation transitions to the `reopened` state so changes can be made.
         *
         *     For more information, read about [reconciliation](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_reconciliations) in the Sage Intacct Help Center.
         */
        post: operations["reopen-cash-management-credit-card-reconciliation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/deposit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List deposits
         * @description Returns a collection with a key, ID, and link for each deposit. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-deposit"];
        put?: never;
        /**
         * Create a deposit
         * @description Creates a new deposit.
         */
        post: operations["create-cash-management-deposit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/deposit/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the deposit.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a deposit
         * @description Returns detailed information for a specified deposit.
         */
        get: operations["get-cash-management-deposit-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/deposit-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List deposit lines
         * @description Returns a collection with a key, ID, and link for each deposit line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-deposit-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/deposit-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the deposit line.
                 * @example 145
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a deposit line
         * @description Returns detailed information for a specified deposit line.
         */
        get: operations["get-cash-management-deposit-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/deposit-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List deposit details
         * @description Returns a collection with a key, ID, and link for each deposit detail. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-deposit-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/deposit-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the deposit detail.
                 * @example 145
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a deposit detail
         * @description Returns detailed information for a specified deposit detail.
         */
        get: operations["get-cash-management-deposit-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/undeposited-fund": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List undeposited funds
         * @description Returns a collection with a key, ID, and link for each undeposited fund. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-undeposited-fund"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/undeposited-fund/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the undeposited fund.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an undeposited fund
         * @description Returns detailed information for a specified undeposited fund.
         */
        get: operations["get-cash-management-undeposited-fund-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/cash-management/deposit/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reverse a deposit
         * @description Reverse a deposit. When a deposit has been issued and is in a `posted` state, it can be reversed. Once the transaction is reversed, the original `posted` transaction immediately enters the `reversal` state. It transitions to the `reversed` state once the reversal date is reached.
         *
         *     A reversal transaction is also created in the `reversal` state when you reverse a deposit. The state of the reversal transaction does not change.
         *
         *     For more information, see [reverse a deposit](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reverse_ar_deposit) in the Sage Intacct Help Center.
         */
        post: operations["reverse-cash-management-deposit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/funds-transfer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List funds transfers
         * @description Returns a collection with a key, ID, and link for each funds transfer. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-funds-transfer"];
        put?: never;
        /**
         * Create a funds transfer
         * @description Creates a new funds transfer.
         */
        post: operations["create-cash-management-funds-transfer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/funds-transfer/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the funds transfer.
                 * @example 129
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a funds transfer
         * @description Returns detailed information for a specified funds transfer.
         */
        get: operations["get-cash-management-funds-transfer-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/funds-transfer-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List funds transfer lines
         * @description Returns a collection with a key, ID, and link for each funds transfer line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-funds-transfer-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/funds-transfer-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the funds transfer line.
                 * @example 127
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a funds transfer line
         * @description Get a funds transfer line.
         */
        get: operations["get-cash-management-funds-transfer-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/cash-management/funds-transfer/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reverse a funds transfer
         * @description Reverse a funds transfer. When a funds transfer transaction has been issued and is in a `posted` state, it can be reversed. Once the transaction is reversed, the original `posted` transaction immediately enters the `reversal` state. It transitions to the `reversed` state once the reversal date is reached.
         *
         *     A reversal transaction is also created in the `reversal` state when you reverse a funds transfer transaction. The state of the reversal transaction does not change.
         *
         *     For more information, see [reverse a funds transfer transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reverse_funds_transfer) in the Sage Intacct Help Center.
         */
        post: operations["reverse-cash-management-funds-transfer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/other-receipt": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List other receipts
         * @description Returns a collection with a key, ID, and link for each receipt. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-other-receipt"];
        put?: never;
        /**
         * Create an other receipt
         * @description Creates a new other receipt.
         */
        post: operations["create-cash-management-other-receipt"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/other-receipt/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the other receipt.
                 * @example 103
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an other receipt
         * @description Returns detailed information for a specified other receipt.
         */
        get: operations["get-cash-management-other-receipt-key"];
        put?: never;
        post?: never;
        /**
         * Delete an other receipt
         * @description Deletes an other receipt. Only those receipts that have not yet been deposited or reconciled that are in an open period can be deleted.
         */
        delete: operations["delete-cash-management-other-receipt-key"];
        options?: never;
        head?: never;
        /**
         * Update an other receipt
         * @description Updates an existing other receipt by setting field values. Any fields not provided remain unchanged. Only transactions in an open sub-ledger period, which have not yet been deposited, can be updated.
         */
        patch: operations["update-cash-management-other-receipt-key"];
        trace?: never;
    };
    "/objects/cash-management/other-receipt-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List other receipt lines
         * @description Returns a collection with a key, ID, and link for each other receipt line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-other-receipt-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/other-receipt-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an other receipt line item.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an other receipt line
         * @description Returns detailed information for a specified other receipt line item.
         */
        get: operations["get-cash-management-other-receipt-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/other-receipt-tax-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List other receipts tax entries
         * @description Returns a collection with a key, ID, and link for each other receipt tax entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-other-receipt-tax-entry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/other-receipt-tax-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the other receipt tax entry.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get other receipt tax entries
         * @description Returns detailed information for a specified other receipt tax entry.
         */
        get: operations["get-cash-management-other-receipt-tax-entry-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/cash-management/other-receipt/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reverse an other receipt
         * @description Reverse an other receipt. When an other receipt has been issued and is in an `approved` state, it can be reversed. Once the transaction is reversed, the original `approved` transaction immediately enters the `reversal` state. It transitions to the `reversed` state once the reversal date is reached.
         *
         *     A reversal transaction is also created in the `reversal` state when you reverse an other receipt. The state of the reversal transaction does not change.
         *
         *     For more information, see [reverse other receipts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reverse_other_receipts) in the Sage Intacct Help Center.
         */
        post: operations["reverse-cash-management-other-receipt"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/received-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List received payments
         * @description Returns a collection with a key, ID, and link for each received payment. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-received-payment"];
        put?: never;
        /**
         * Create a new received payment
         * @description Creates a new received payment.
         */
        post: operations["create-cash-management-received-payment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/received-payment/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the received payment.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a received payment
         * @description Returns detailed information for a specified received payment.
         */
        get: operations["get-cash-management-received-payment-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/received-payment-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List received payment lines
         * @description Returns a collection with a key, ID, and link for each received payment line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-received-payment-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/received-payment-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the received payment line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a received payment line
         * @description Returns detailed information for a specified received payment line.
         */
        get: operations["get-cash-management-received-payment-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/ar-advance-txn-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List AR advance transaction templates
         * @description Returns a collection with a key, ID, and link for each AR advance transaction template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-ar-advance-txn-template"];
        put?: never;
        /**
         * Create an AR advance transaction template
         * @description Creates a new AR advance transaction template.
         */
        post: operations["create-cash-management-ar-advance-txn-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/ar-advance-txn-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the AR advance transaction template.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an AR advance transaction template
         * @description Returns detailed information for a specified AR advance transaction template.
         */
        get: operations["get-cash-management-ar-advance-txn-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete an AR advance transaction template
         * @description Deletes an AR advance transaction template.
         */
        delete: operations["delete-cash-management-ar-advance-txn-template-key"];
        options?: never;
        head?: never;
        /**
         * Update an AR advance transaction template
         * @description Updates an existing AR advance transaction template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-cash-management-ar-advance-txn-template-key"];
        trace?: never;
    };
    "/objects/cash-management/ar-advance-txn-line-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List AR advance transaction line templates
         * @description Returns a collection with a key, ID, and link for each AR advance transaction line template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-ar-advance-txn-line-template"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/ar-advance-txn-line-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the AR advance transaction line template.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an AR advance transaction line template
         * @description Returns detailed information for a specified AR advance transaction line template.
         */
        get: operations["get-cash-management-ar-advance-txn-line-template-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/journal-entry-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List journal entry templates
         * @description Returns a collection of journal entry templates with a key, ID, and link for each template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-journal-entry-template"];
        put?: never;
        /**
         * Create a journal entry template
         * @description Creates a new journal entry template.
         */
        post: operations["create-cash-management-journal-entry-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/journal-entry-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the journal entry template.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a journal entry template
         * @description Returns detailed information for a specified journal entry template.
         */
        get: operations["get-cash-management-journal-entry-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a journal entry template
         * @description Deletes a journal entry template.
         */
        delete: operations["delete-cash-management-journal-entry-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a journal entry template
         * @description Updates an existing journal entry template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-cash-management-journal-entry-template-key"];
        trace?: never;
    };
    "/objects/cash-management/journal-entry-line-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List journal entry line templates
         * @description Returns a collection with a key, ID, and link for each journal entry line template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-journal-entry-line-template"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/journal-entry-line-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the journal entry line template.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a journal entry line template
         * @description Returns detailed information for a specified journal entry line template.
         */
        get: operations["get-cash-management-journal-entry-line-template-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/payment-provider": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List payment providers
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each payment provider. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-payment-provider"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/payment-provider/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Payment provider key
                 * @example 3
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a payment provider
         * @description Returns detailed information for a specified payment provider, including name, ID, payment withdrawal type, and payment methods.
         */
        get: operations["get-cash-management-payment-provider-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/payment-provider-bank-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List payment provider bank accounts
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each payment provider bank account. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-cash-management-payment-provider-bank-account"];
        put?: never;
        /**
         * Create a payment provider bank account
         * @description Creates a new payment provider bank account.
         */
        post: operations["create-cash-management-payment-provider-bank-account"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/payment-provider-bank-account/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the payment provider bank account.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a payment provider bank account
         * @description Returns detailed information for a specified payment provider bank account.
         */
        get: operations["get-cash-management-payment-provider-bank-account-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a payment provider bank account
         * @description Updates an existing payment provider bank account by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-cash-management-payment-provider-bank-account-key"];
        trace?: never;
    };
    "/objects/cash-management/provider-payment-method": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List provider payment methods
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each provider payment method. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-cash-management-provider-payment-method"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/cash-management/provider-payment-method/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Payment method key
                 * @example 454
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a provider payment method
         * @description Returns detailed information for a specified provider payment method.
         */
        get: operations["get-cash-management-provider-payment-method-key"];
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
        "objects.cash-management.financial-institution": {
            /**
             * @description System-assigned key for the financial institution.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the financial institution.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description ID for the financial institution.
             * @example USA_FinInst
             */
            financialInstitutionId?: string;
            /**
             * @description Name of the financial institution.
             * @example USA financial institution
             */
            name?: string;
            /** @description Services associated with the financial institution. */
            addOnServices?: {
                /** @example MAL */
                name?: string;
                serviceContract?: {
                    /** @example BOA */
                    key?: string;
                    /**
                     * @example checking
                     * @enum {string}
                     */
                    accountType?: "checking" | "savings" | "creditCard";
                };
            }[];
            /** @description Checking accounts associated with the financial institution. */
            checkingAccounts?: {
                /** @example 2 */
                key?: string;
                externalBankAccount?: {
                    /** @example a421d6c8-ed48-454d-a60e-7b697c67b956 */
                    id?: string;
                    /** @example Plaid Checking */
                    name?: string;
                };
                /**
                 * Format: date
                 * @example 2021-01-23
                 */
                requestedStartDate?: string;
            }[];
            /** @description Savings accounts associated with the financial institution. */
            savingsAccounts?: {
                /** @example 2 */
                key?: string;
                externalBankAccount?: {
                    /** @example a421d6c8-ed48-454d-a60e-7b697c67b956 */
                    id?: string;
                    /** @example Plaid Saving */
                    name?: string;
                };
                /**
                 * Format: date
                 * @example 2021-01-23
                 */
                requestedStartDate?: string;
            }[];
            /** @description Credit card accounts associated with the financial institution. */
            creditCards?: {
                /** @example 2 */
                key?: string;
                externalBankAccount?: {
                    /** @example a421d6c8-ed48-454d-a60e-7b697c67b956 */
                    id?: string;
                    /** @example Plaid CC */
                    name?: string;
                };
                /**
                 * Format: date
                 * @example 2021-01-23
                 */
                requestedStartDate?: string;
            }[];
            /**
             * @description Total number of accounts associated with the financial institution.
             * @example 5
             */
            readonly totalAccounts?: number;
            /** @example /objects/cash-management/financial-institution/1 */
            readonly href?: string;
            readonly audit?: components["schemas"]["audit.s1"] & {
                /**
                 * @description User who modified this.
                 * @example Admin
                 */
                readonly modifiedBy?: string;
            };
            entity?: components["schemas"]["entity-ref"];
        };
        "cash-management-financial-institutionRequiredProperties": Record<string, never>;
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
        /** @description This object provides information about a bank account. */
        "objects.cash-management.bank-account": {
            /**
             * @description System-assigned key for the bank account.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the bank account.
             * @example BOA-Checking
             */
            readonly id?: string;
            /**
             * @description Reference key for the bank account.
             * @example 90
             */
            readonly referenceKey?: string;
            /**
             * @description Name of the bank account.
             * @example BOA checking account
             */
            readonly name?: string;
            /**
             * @description The currency for this account. The default is the base currency for the company or entity. If this account is with a foreign bank, the currency should match the country.
             * @example USD
             */
            currency?: string;
            /**
             * @description Type of bank account.
             * @example checking
             * @enum {string}
             */
            readonly accountType?: "checking" | "savings" | "creditCard";
            /**
             * @description Bank feed connection status of the account.
             * @example connected
             * @enum {string|null}
             */
            readonly connectionStatus?: null | "notConnected" | "connectionRequested" | "inProgress" | "pending" | "pendingConfirmation" | "connected" | "authRequired" | "verifyingAuth" | "inactiveFeed" | "inactiveClient" | "cancelled" | "invalid" | "canceling" | "disconnecting";
            /**
             * @description Indicates whether the account supports multi-account linking.
             * @default true
             * @example true
             */
            readonly supportMultiAccountLinking?: boolean;
            /** @description Financial institution where the account is held. */
            readonly financialInstitution?: {
                /** @example 1 */
                readonly id?: string;
                /** @example 1 */
                readonly key?: string;
                /** @example /objects/cash-management/financial-institution/1 */
                readonly href?: string;
            };
            /**
             * @description URL for the bank account.
             * @example /objects/cash-management/bank-account/1
             */
            readonly href?: string;
        };
        /** @description A checking account represents a specific type of cash account used to manage day-to-day transactions, such as vendor payments, customer deposits, payroll and reconciliations. */
        "objects.cash-management.checking-account": {
            /**
             * @description System-assigned  unique key for the account.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the account.
             * @example BOA
             */
            id?: string;
            /**
             * @description URL endpoint for the checking account
             * @example /objects/cash-management/checking-account/62
             */
            readonly href?: string;
            /** @description Bank account details for the account. */
            bankAccountDetails?: {
                /**
                 * @description Bank account number for the account.
                 * @example 4356789402
                 */
                accountNumber?: string | null;
                /**
                 * @description Bank name for the account.
                 * @example Bank of America
                 */
                bankName?: string;
                /**
                 * @description Account holder name for the account. This is the official name that the bank has on file.
                 * @example ABC Software
                 */
                accountHolderName?: string | null;
                /**
                 * @description Routing number for the account, required for issuing payments from the account, regardless of the payment method.
                 * @example 121000358
                 */
                routingNumber?: string | null;
                /**
                 * @description Identifier for the branch associated with the checking account.
                 * @example 89099
                 */
                branchId?: string | null;
                /**
                 * @description Phone number for the branch associated with the checking account.
                 * @example 5559878978
                 */
                phoneNumber?: string | null;
                /**
                 * @description Currency for the account. The default is the base currency for the company or entity. If the account is with a foreign bank, the currency should match the country.
                 * @example USD
                 */
                currency?: string;
                bankAddress?: {
                    /**
                     * @description City for the branch associated with the checking account.
                     * @example Newark
                     */
                    city?: string | null;
                    /**
                     * @description State for the branch associated with the checking account.
                     * @example CA
                     */
                    state?: string | null;
                    /**
                     * @description Zip or postal code for the branch associated with the checking account.
                     * @example 94560
                     */
                    postCode?: string | null;
                    /**
                     * @description Country for the branch associated with the checking account.
                     * @example United States
                     */
                    country?: string | null;
                    /**
                     * @description First line of the street for the branch associated with the checking account.
                     * @example 36900 Neward Blvd
                     */
                    addressLine1?: string | null;
                    /**
                     * @description Second line of the street for the branch associated with the checking account.
                     * @example Suite 101
                     */
                    addressLine2?: string | null;
                    /**
                     * @description Third line of the street for the branch associated with the checking account.
                     * @example Western Industrial Area
                     */
                    addressLine3?: string | null;
                };
            };
            /** @description Specifies the accounting details for the checking account. */
            accounting?: {
                /** @description General Ledger (GL) account associated with the checking account. */
                glAccount?: {
                    /**
                     * @description Unique key for the GL account.
                     * @example 256
                     */
                    key?: string;
                    /**
                     * @description Identifier for the GL account.
                     * @example 9899 Expense GL Account 33
                     */
                    id?: string;
                    /**
                     * @description Name for the GL account.
                     * @example Expense Account
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the GL account.
                     * @example /objects/general-ledger/account/256
                     */
                    readonly href?: string;
                };
                /** @description Specifies the default General Ledger (GL) journal for Accounts Payable (AP). */
                apJournal?: {
                    /**
                     * @description Unique key for the AP journal.
                     * @example 3
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the AP journal.
                     * @example AP-ADJ AP Adjustment Journal
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the AP journal.
                     * @example /objects/general-ledger/journal/3
                     */
                    readonly href?: string | null;
                };
                /** @description Specifies the default General Ledger (GL) journal for Accounts Receivable (AR). */
                arJournal?: {
                    /**
                     * @description Unique key for the AR journal.
                     * @example 3
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the AR journal.
                     * @example AR-ADJ AR Adjustment Journal
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the AR journal.
                     * @example /objects/general-ledger/journal/3
                     */
                    readonly href?: string | null;
                };
                /**
                 * @description Excludes the checking account from inter-entity transfers (IET) even if IET is globally enabled for the entire multi-entity shared structure of companies.
                 * @default false
                 * @example false
                 */
                disableInterEntityTransfer?: boolean;
                /** @description Specifies the General Ledger (GL) journal for service charges, used for reconciliation. */
                serviceChargeGLAccount?: {
                    /**
                     * @description Unique key for the service charge GL account.
                     * @example 432
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the service charge GL account.
                     * @example 0077  Service Charge GL Account 54
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the service charge GL account.
                     * @example /objects/general-ledger/account/432
                     */
                    readonly href?: string | null;
                };
                /** @description Specifies the account label for the service charge GL account. */
                serviceChargeAccountLabel?: {
                    /**
                     * @description Unique key for the service charge GL account label.
                     * @example 15
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the service charge GL account label.
                     * @example Car Payment
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the service charge GL account label.
                     * @example /objects/accounts-payable/account-label/15
                     */
                    readonly href?: string | null;
                };
                /** @description Specifies the General Ledger (GL) journal for earned interest, used for reconciliation. */
                interestGLAccount?: {
                    /**
                     * @description Unique key for the earned interest GL account.
                     * @example 419
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the earned interest GL account.
                     * @example 0099 Interest Earned GL Account 40
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the earned interest GL account.
                     * @example /objects/general-ledger/account/419
                     */
                    readonly href?: string | null;
                };
                /** @description Specifies the account label for the earned interest GL account. */
                interestAccountLabel?: {
                    /**
                     * @description Unique key for the earned interest GL account label.
                     * @example 35
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the earned interest GL account label.
                     * @example Sales Account
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the earned interest GL account label.
                     * @example /objects/accounts-receivable/account-label/35
                     */
                    readonly href?: string | null;
                };
                /**
                 * @description Determines the time stamp for transactions generated from creation rules and incoming bank feed transactions.
                 * @default null
                 * @example GMT+02:00 Eastern Europe Time
                 */
                bankingTimeZone?: string & components["schemas"]["timezone"];
            };
            /** @description Specifies the reconciliation details for the account. */
            reconciliation?: {
                /**
                 * Format: decimal-precision-2
                 * @description Balance of the last reconciliation.
                 * @example 8970.98
                 */
                readonly lastReconciledBalance?: string | null;
                /**
                 * Format: date
                 * @description Date the last reconciliation occurred.
                 * @example 2019-03-22
                 */
                readonly lastReconciledDate?: string | null;
                /**
                 * Format: date
                 * @description Date after which the initial reconciliation can begin. Applies only to accounts not previously reconciled in Sage Intacct.
                 * @example 2018-01-01
                 */
                readonly cutOffDate?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Balance of the in-progress reconciliation.
                 * @example -221021.61
                 */
                readonly inProgressBalance?: string | null;
                /**
                 * Format: date
                 * @description Date the in-progress reconciliation occurred.
                 * @example 2023-01-05
                 */
                readonly inProgressDate?: string | null;
                /** @description Reconciliation match sequence, a document sequence that tracks matches in reconciliation. */
                matchSequence?: {
                    /**
                     * @description Unique key for the match sequence.
                     * @example 2
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the match sequence.
                     * @example 0022 CHASESQ 0033
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the match sequence.
                     * @example /objects/company-config/document-sequence/2
                     */
                    readonly href?: string | null;
                };
                /**
                 * @description Indicates whether to use sequence number for automatically matched transactions.
                 * @default true
                 * @example false
                 */
                useMatchSequenceForAutoMatch?: boolean;
                /**
                 * @description Indicates whether to use sequence number for manually matched transactions.
                 * @default true
                 * @example false
                 */
                useMatchSequenceForManualMatch?: boolean;
            };
            checkPrinting?: {
                /**
                 * @description Indicates whether to disable check printing for the account.
                 * @default false
                 * @example false
                 */
                disablePrinting?: boolean;
                /** @description Defines the address settings for check printing. */
                addressSettings?: {
                    /**
                     * @description Indicates whether to print an address on checks:
                     *
                     *       - `true` - Prints the address on checks.
                     *       - `false` - Does not print the address on checks. Set to `false` if you don't want to include an address or when using pre-printed check stock that already includes the address.
                     * @default false
                     * @example false
                     */
                    printAddress?: boolean;
                    /**
                     * @description Specifies the address to print on checks:
                     *
                     *       - `company` - Uses the address set for the company.
                     *       - `custom` - Uses the address defined in the `name` and `address` fields.
                     * @default null
                     * @example company
                     * @enum {string|null}
                     */
                    addressToPrint?: null | "company" | "custom";
                    /**
                     * @description Specifies the company name to print on checks from this checking account if `addressToPrint` is set to `custom`.
                     * @example Zine Inc.
                     */
                    name?: string | null;
                    /** @description Specifies the address to print on checks from this checking account if `addressToPrint` is set to `custom`. */
                    address?: {
                        /**
                         * @description First line of the street to print on qualifying checks.
                         * @example 75688 Post st
                         */
                        addressLine1?: string | null;
                        /**
                         * @description Second line of the street to print on qualifying checks.
                         * @example East Gwalopak
                         */
                        addressLine2?: string | null;
                        /**
                         * @description Third line of the street to print on qualifying checks.
                         * @example 456
                         */
                        addressLine3?: string | null;
                        /**
                         * @description City to print on qualifying checks.
                         * @example San Ramon
                         */
                        city?: string | null;
                        /**
                         * @description State to print on qualifying checks.
                         * @example CA
                         */
                        state?: string | null;
                        /**
                         * @description Zip or postal code to print on qualifying checks.
                         * @example 94536
                         */
                        postCode?: string | null;
                        /**
                         * @description Country to print on qualifying checks.
                         * @example United States
                         */
                        country?: string | null;
                        /**
                         * @description ISO country code to print on qualifying checks. When ISO country codes are enabled for a company, both `country` and `countryCode` must be provided.
                         * @example US
                         */
                        countryCode?: string | null;
                        /**
                         * @description Phone number to print on qualifying checks.
                         * @example 6609336532
                         */
                        phone?: string | null;
                    };
                    /**
                     * @description Indicates whether to print the company logo on qualifying checks. Requires a logo image file to be uploaded in Sage Intacct.
                     *
                     *     For more information, read about [adding logos to checks](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Check_logos) in the Sage Intacct Help Center.
                     * @default false
                     * @example false
                     */
                    printLogo?: boolean;
                };
                /**
                 * @description Defines the uploaded signature images to print on qualifying checks for the account. By default, signatures are not included on blank or preprinted check stock.
                 *
                 *     For more information, read about [check signatures](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Uploading_Your_Check_Signature) in the Sage Intacct Help Center.
                 */
                signatures?: {
                    /**
                     * @description Image file name for the first signature.
                     * @example sigimg1_j.jpg
                     */
                    firstSignature?: string | null;
                    /**
                     * Format: decimal-precision-2
                     * @description Specifies the limit as an amount for printing the first signature on qualifying checks. The first signature is printed on checks for less than this amount, while a manual signature line is printed on checks for more than this amount, or when this field is `null`.
                     * @example 50.00
                     */
                    limitForFirstSignatureAmount?: string | null;
                    /**
                     * @description Indicates whether to include second signature on qualifying checks. Set to `false` to always show just one signature.
                     * @default false
                     * @example true
                     */
                    useSecondSignature?: boolean;
                    /**
                     * @description Image file name for the second signature.
                     * @example sigimg2_j.jpg
                     */
                    secondSignature?: string | null;
                    /**
                     * Format: decimal-precision-2
                     * @description Specifies the limit as an amount for printing the second signature on qualifying checks. The second signature is printed on checks for less than this this amount, while a manual signature line is printed on checks for more than this amount, or when this field is `null`. Applies when `useSecondSignature` is set to `true`.
                     * @example 60.00
                     */
                    limitForSecondSignatureAmount?: string | null;
                    /**
                     * Format: decimal-precision-2
                     * @description Specifies the threshold as an amount for printing the second signature on qualifying checks. The second signature is printed on checks for more than this amount.
                     * @example 60.00
                     */
                    thresholdForSecondSignatureAmount?: string | null;
                };
                /** @description Specifies the check printing settings for the account. */
                printSettings?: {
                    /**
                     * @description Indicates the check stock to use for printing checks for the account:
                     *
                     *     - `prePrintedCheckStock` - Uses check paper that is pre-printed with company information.
                     *     - `blankCheckStock` - Uses blank check paper.
                     * @default blankCheckStock
                     * @example blankCheckStock
                     * @enum {string}
                     */
                    printOn?: "prePrintedCheckStock" | "blankCheckStock";
                    /**
                     * @description Specifies the starting check number to use when printing checks for the account, for example 1001. Check numbers increment by one for each succeeding check printed.
                     * @example 1012
                     */
                    nextCheckNumber?: string | null;
                    /**
                     * @description Specifies the format to use when printing checks for the account:
                     *
                     *
                     *
                     *
                     *
                     *       - `standard` - For pre-printed checks that already show the bank account number, routing number, and check numbers. Not available for CAD checking accounts.
                     *       - `business` - Prints amounts in a font that makes alterations difficult (for security).
                     *       - `highSecurity` - Same as `standard`, plus features that reduce fraud related to check washing, forgery, and copying. Not available for CAD checking accounts.
                     *       - `cadCheck` - Prints checks with dates formatted for Canadian companies, can be used with CAD and USD checking accounts.
                     *       - `jpmorganChaseBusiness` - For USD checking accounts with business checks where the Pay to the order of field is not above the Amount field but is next to the Vendor address.
                     *       - `jpmorganChaseStandard` - For USD checking accounts with standard checks where the Pay to the order of field is not above the Amount field but is next to the Vendor address.
                     * @default standard
                     * @example standard
                     * @enum {string}
                     */
                    printingFormat?: "standard" | "business" | "highSecurity" | "cadCheck" | "jpmorganChaseBusiness" | "jpmorganChaseStandard";
                    /**
                     * @description Specifies the location for check printing on three-part forms: top, middle, or bottom panel. Pre-printed check stock is only compatible with the top and middle printing position.
                     *
                     *     Canadian check stock is only compatible with the top printing position.
                     * @default top
                     * @example top
                     * @enum {string}
                     */
                    paperFormat?: "top" | "middle" | "bottom";
                    /**
                     * @description Indicates whether to include additional fields in the non-remittance panel of checks. These fields include columns for the account, department, and location of each line item. A check can include up to 18 line items per page in either summary or detail mode.
                     * @default false
                     * @example true
                     */
                    printLineItems?: boolean;
                    /**
                     * @description Specifies the location information to include on checks:
                     *
                     *       - `id` - Print the location identifier only in the location column.
                     *       - `name` - Print the location name only in the location column.
                     *       - `both`(default) - Print both the location identifier and the location name in the location column.
                     * @default id
                     * @example id
                     * @enum {string}
                     */
                    printLocation?: "id" | "name" | "both";
                    /**
                     * @description Specifies additional text to print under the signatures.
                     * @example Pay to check holder
                     */
                    additionalText?: string | null;
                    /**
                     * @description Specifies the number of checks per page to preview before printing.
                     * @default null
                     * @example one
                     * @enum {string|null}
                     */
                    numberOfChecksInPreview?: null | "one" | "three";
                };
                /**
                 * @description Specifies the Magnetic Ink Character Recognition (MICR) settings. MICR format is a widely adopted bank standard for blank check stock, standardizing the appearance of the routing, account, and other numbers at the bottom of every check. Use these settings if your bank requires specific horizontal alignment of the account number on the MICR line on the printed check.
                 *
                 *     For more information, read the [MICR printing guidelines](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=MICR_information_on_checks) in the Sage Intacct Help Center.
                 */
                micrSettings?: {
                    /**
                     * @description Specifies how the bank account number is aligned on the MICR line.
                     * @default right
                     * @example right
                     * @enum {string}
                     */
                    accountNumberAlignment?: "left" | "right";
                    /**
                     * @description Specifies the positioning of the bank account number on the MICR line, defined by the number of spaces added before or after the account number.
                     * @example 1
                     */
                    accountNumberPositioning?: number | null;
                    /**
                     * @description Specifies the required length for check numbers on the MICR line. Minimum check number length is six digits, shorter check numbers are left-padded with zeros.
                     * @example 6
                     */
                    minCheckNumberLength?: string | null;
                    /** @description Specifies the regional settings for MICR. */
                    regionalSettings?: {
                        /**
                         * @description Indicates whether to print the transaction code 45 on the MICR line.
                         * @default false
                         * @example true
                         */
                        printCode45?: boolean;
                        /**
                         * @description Indicates whether to print US funds under the check amount box for CPA member banks.
                         * @default false
                         * @example true
                         */
                        printUSFundsUnderCheckAmount?: boolean;
                        /**
                         * @description Indicates whether to print the ON-US symbol in front of the account number on the MICR line.
                         * @default false
                         * @example true
                         */
                        printOnUsSymbol?: boolean;
                        /**
                         * @description Specifies the position of the ON-US symbol on the MICR line. To position the symbol before the checking account number, set to `position31` or `position32`.
                         * @default position31
                         * @example position31
                         * @enum {string}
                         */
                        positionOfOnUsSymbol?: "position31" | "position32";
                    };
                };
            };
            /** @description Specifies the department to use for General Ledger (GL) posting (optional). */
            department?: {
                /**
                 * @description Unique key for the department.
                 * @example 9
                 */
                key?: string | null;
                /**
                 * @description Identifier for the department.
                 * @example 11-Accounting
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/9
                 */
                readonly href?: string | null;
            };
            /** @description Specifies the location to use for General Ledger (GL) posting (optional). */
            location?: {
                /**
                 * @description Unique key for the location.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the location.
                 * @example 001-United States of America
                 */
                id?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/1
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            /**
             * @description Specifies the Automated Clearing House (ACH) details.
             *
             *     For more information, read about [setting up a checking account for ACH payments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_file_account_setup) in Sage Intacct Help Center.
             */
            ach?: {
                /**
                 * @description Indicates whether to to enable the account to make standard ACH or American Express ACH Payment Services payments.
                 * @default false
                 * @example true
                 */
                enableACH?: boolean;
                /**
                 * @description Identifier for the bank, as specified in the ACH bank record.
                 * @example BOA_ACH
                 */
                bankId?: string | null;
                /**
                 * @description Name of the company, as specified in the ACH bank record.
                 * @example Ventura
                 */
                companyName?: string | null;
                /**
                 * @description Specifies the 10-digit identifier (including hyphens) for the company, as specified in the ACH bank record.
                 * @example Ventura
                 */
                companyIdentification?: string | null;
                /**
                 * @description References the first eight digits of the routing number for the bank, as specified in the ACH bank record.
                 * @example 89096789
                 */
                originatingFinancialInstitution?: string | null;
                /**
                 * @description Indicates optional text that can be included with ACH payments.
                 * @example Investment
                 */
                companyEntryDescription?: string | null;
                /**
                 * @description Specifies additional information that can be included with ACH payments. Typically this will consist of codes (unique to each bank) that describe any special handling of entries.
                 * @example 89078900
                 */
                companyDiscretionaryData?: string | null;
                /**
                 * @description Indicates whether to automatically generate the ACH payment file, with `serviceClassCode` set to `220` (credits only), and set up numbering sequences for standard ACH payments.
                 * @default false
                 * @example true
                 */
                useRecommendedSetup?: boolean;
                /**
                 * @description Indicates the record type code for ACH payments.
                 * @default 5
                 * @example 5
                 */
                readonly recordTypeCode?: string | null;
                /**
                 * @description Specifies the service class code for ACH payments. Use `220` for payments (credits) only, or `200` for both credits and debits. If using `200`, then `useRecommendedSetup` must be `false`.
                 * @default null
                 * @example 220
                 * @enum {string|null}
                 */
                serviceClassCode?: null | "220" | "200";
                /**
                 * @description Indicates the originator status code for ACH payments.
                 * @default 1
                 * @example 6
                 */
                readonly originatorStatusCode?: string | null;
                /**
                 * @description Identifies the number sequence that automatically numbers payment batches. The batch number must be 7-digits, with no prefixes or suffixes. Required if `useRecommendedSetup` is `false`.
                 * @example BOA_ACH_BatchNo
                 */
                batchId?: string | null;
                /**
                 * @description Identifies the number sequence that generates the trace number for ACH entries. The trace number is formed by concatenating the bank routing number with a 7-digit sequence number, and has no prefixes or suffixes. Required if `useRecommendedSetup` is `false`.
                 * @example BOA_ACH_TraceNo
                 */
                traceNumberSequence?: string | null;
                /**
                 * @description Identifies the number sequence that assigns a unique payment number to confirmed Accounts Payable (AP) payments. You can use the same number sequence specified in `traceNumberSequence`. Required if `useRecommendedSetup` is `false`.
                 * @example BOA_ACH_PayNo
                 */
                paymentNumberSequence?: string | null;
                /**
                 * @description Indicates whether to use the trace number as a payment (`useAsPayment`) or as a numbering sequence (`useNumberSequence`).
                 * @default useAsPayment
                 * @example useAsPayment
                 * @enum {string|null}
                 */
                useTraceNumber?: null | "useAsPayment" | "useNumberingSequence";
            };
            /**
             * @description Specifies the bank file details for companies subscribed to Sage Cloud Services and enabled for bank file payments. A bank file is a standard file used by banks to make multiple payments, they enable your company to pay vendors using international checking accounts.
             *
             *     For more information, read about [setting up a checking account for bank file payments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_file_account_setup) in Sage Intacct Help Center.
             */
            bankFile?: {
                /**
                 * @description Indicates whether to enable bank file payments for checking accounts in supported countries.
                 * @default false
                 * @example true
                 */
                enableBankFile?: boolean;
                /**
                 * @description Specifies the bank file format of the bank associated with the checking account.
                 *
                 *     For more information, read about [bank files](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_file_payment) in the Sage Intacct Help Center.
                 * @example ABA - Westpac
                 */
                bankFileFormat?: string | null;
                /**
                 * @description Specifies the bank code for the bank associated with the checking account.
                 * @example Westpac Banking Corporation
                 */
                bankCode?: string | null;
                /**
                 * @description Six-digit identifier for the company or individual, used by Australian banks to make direct payments.
                 * @example 865551
                 */
                apcaNumber?: string | null;
                /**
                 * @description Six-digit identifier for an individual branch of a financial institution in Australia, expressed as two groups of three separated by a hyphen.
                 * @example 042-457
                 */
                bsbNumber?: string | null;
                /**
                 * @description Unique identifier (optional) for organizations that collect payment with bank files. The service user number, together with the bank file, creates a record of the transaction. For HSBC customers only.
                 * @example 6789
                 */
                sunNumber?: string | null;
                /**
                 * @description Six-digit identifier for the UK bank and branch where the checking account is held, expressed as three groups of two separated by hyphens.
                 * @example 23-44-16
                 */
                sortCode?: string | null;
                /**
                 * @description Specifies the 32-character encryption key (seed value) issued by NedBank, used to generate and validate secure payment files.
                 * @example ABFGHETOUFEH1234IOIADRTO78DD899
                 */
                seedValue?: string | null;
                /**
                 * @description Specifies the 10-character reference supplied by Standard Bank, this reference is used on bank statements.
                 * @example SBXXSHRTNA
                 */
                userReference?: string | null;
                /**
                 * @description User code that identifies the client to Standard Bank.
                 * @example ProLite
                 */
                clientCode?: string | null;
                /**
                 * @description Indicates the type of Bulk Electronic Fund Transfer (BEFT) service to use.
                 * @example PAYMENT
                 */
                serviceType?: string | null;
                /**
                 * @description Identifier for the originator.
                 * @example IE26SCT803015
                 */
                originatorId?: string | null;
                /**
                 * @description Identifier for the business.
                 * @example BOFIIE2DXXX
                 */
                businessIdCode?: string | null;
                /**
                 * @description Specifies the 5-digit identifier for the originating direct clearer.
                 * @example 01674
                 */
                processingDataCenterCode?: string | null;
                /**
                 * @description Identifier for the settlement institutional bank (processing bank).
                 * @example 674
                 */
                debtorBankNumber?: string | null;
                /**
                 * @description Branch transit number for the settlement institutional bank (processing bank).
                 * @example 43876
                 */
                branchTransitNumber?: string | null;
                /**
                 * @description Specifies the return account number for the checking account.
                 * @example IE26SCT80301
                 */
                returnAccountNumber?: string | null;
                /**
                 * @description Specifies a 23-character identifier for each submitted payment file, specific to the Bank of Ireland SEPA bank file format, combining a customer-defined prefix with a system-generated 12-digit date/time stamp.
                 * @example SEPA240212
                 */
                messageIdPrefix?: string | null;
                /**
                 * @description Bank routing number for the institution receiving the payment file.
                 * @example 984569845
                 */
                immediateDestinationId?: string | null;
                /**
                 * @description Bank routing number for the institution sending the payment file.
                 * @example 878767675
                 */
                immediateOriginId?: string | null;
                /**
                 * @description Name of the company sending the payment file.
                 * @example Investment Corporation
                 */
                immediateOriginName?: string | null;
                /**
                 * @description Name of the company receiving the payment file.
                 * @example BOA
                 */
                immediateDestinationName?: string | null;
                /**
                 * @description Indicates optional text used to describe the transaction, for example, Payroll or Payables, to be included with payments.
                 * @example Investment
                 */
                companyEntryDescription?: string | null;
                /**
                 * @description Company name for the checking account.
                 * @example Ventura
                 */
                companyName?: string | null;
                /**
                 * @description Specifies the number sequence that generates a unique payment number for payment files uploaded to the bank. You can use the same number sequence specified in `traceNumberSequence`. Required if `useRecommendedSetup` is `false`.
                 * @example 0000078
                 */
                paymentNumberSequence?: string | null;
                /**
                 * @description Specifies the sequence used to identify payment files generated each calendar day. The first file generated for each calendar day starts with `A`. Each subsequent file increments alphabetically, then numerically, and resets at the start of the next calendar day.
                 * @example B
                 */
                fileIdSequence?: string | null;
                /** @description Postal address for the bank. */
                postalAddress?: {
                    /**
                     * @description First address line for the bank.
                     * @example 36900 Neward Blvd
                     */
                    addressLine1?: string | null;
                    /**
                     * @description Second address line for the bank.
                     * @example Suite 100
                     */
                    addressLine2?: string | null;
                    /**
                     * @description Postal code for the bank.
                     * @example 94536
                     */
                    postCode?: string | null;
                    /**
                     * @description County for the bank.
                     * @example Alameda
                     */
                    county?: string | null;
                    /**
                     * @description ISO country code for the bank.
                     * @example US
                     */
                    readonly countryCode?: string | null;
                };
            };
            readonly audit?: components["schemas"]["audit.s1"];
            bankingCloudConnection?: components["schemas"]["banking-cloud-connection"];
            /** @description financial-institutionref */
            readonly financialInstitution?: {
                /**
                 * @description Identifier for the financial institution.
                 * @example 1
                 */
                readonly id?: string | null;
                /**
                 * @description Unique key for the financial institution.
                 * @example FINTTEC4
                 */
                readonly key?: string | null;
                /**
                 * @description URL endpoint for the financial institution.
                 * @example /objects/cash-management/financial-institution/1
                 */
                readonly href?: string | null;
            };
            entity?: components["schemas"]["entity-ref"];
            /** @description Specifies the rule set this account uses to match incoming transactions for reconciliation from a bank feed or import file. You can't reconcile an account with a bank feed or import file without a rule set. */
            ruleSet?: {
                /**
                 * @description Unique key for the rule set.
                 * @example 36
                 */
                key?: string | null;
                /**
                 * @description Identifier for the rule set.
                 * @example 36-RuleSetToMatch
                 */
                id?: string | null;
                /**
                 * @description Name for the rule set.
                 * @example RULE-SET-CHECKING-ACCOUNTS
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the rule set.
                 * @example /objects/cash-management/bank-txn-rule-set/2
                 */
                readonly href?: string | null;
            };
            /**
             * @description Specifies the restriction type, along with the entities and locations allowed to use the checking account for making payments.
             *
             *     For more information, read about [restricting a bank account](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Restrict_a_bank_account) in the Sage Intacct Help Center.
             */
            restrictions?: {
                /**
                 * @description Specify which entities and/or locations can access and use the checking account.
                 *
                 *     - `unrestricted` (default) - the account is available to the top-level company and all entity-level locations.
                 *     - `rootOnly` - Only the top-level company of a multi-entity structure can access the account.
                 *     - `restricted` - Only specified locations, location groups, departments, or department groups can access the account.
                 * @default unrestricted
                 * @example unrestricted
                 * @enum {string}
                 */
                restrictionType?: "unrestricted" | "rootOnly" | "restricted";
                /**
                 * @description List of locations that can access the checking account when `restrictionType` is set to `restricted`.
                 * @example [
                 *       "001-United States of America",
                 *       "002-United Kingdom"
                 *     ]
                 */
                locations?: string[];
            };
            paymentProviderBankAccounts?: components["schemas"]["objects.cash-management.payment-provider-bank-account"][];
        };
        "cash-management-checking-accountRequiredProperties": {
            bankAccountDetails?: Record<string, never>;
            accounting?: Record<string, never>;
        };
        /** @description Credit card accounts are used to record transactions made outside of Sage Intacct. Credit card accounts include credit and debit payment method accounts. */
        "objects.cash-management.credit-card-account": {
            /**
             * @description System-assigned key for the credit card account.
             * @example 10
             */
            readonly key?: string;
            /**
             * @description Name or other unique identifier for the credit card account. The account ID cannot be modified.
             * @example Card101
             */
            id?: string;
            /**
             * @description URL endpoint for the credit card account.
             * @example /objects/cash-management/credit-card-account/10
             */
            readonly href?: string;
            /** @description Credit/debit card account details. */
            accountDetails?: {
                /**
                 * @description Optional description about how this card is used.
                 * @example Travel Visa card 1
                 */
                description?: string;
                /**
                 * @description Specifies the card type. The card type cannot be changed after the account is created.
                 * @example visa
                 * @enum {string}
                 */
                cardType?: "visa" | "mastercard" | "discover" | "americanExpress" | "dinersClub" | "otherChargeCard";
                /**
                 * @description Required only if the `cardType` is `americanExpress`. This is a 16-digit card number without spaces or hyphens.
                 * @example xxxxxxxxxxxx1111
                 */
                number?: string;
                /**
                 * @description Account type, credit or debit. Credit cards require an associated vendor and offset GL account. Debit cards used to pay bills require an associated checking account and vendor.
                 * @example credit
                 * @enum {string}
                 */
                accountType?: "credit" | "debit";
                /**
                 * @description Month when the credit card expires.
                 * @example 11
                 * @enum {string}
                 */
                expirationMonth?: "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";
                /**
                 * @description Year when the credit card expires.
                 * @example 2032
                 */
                expirationYear?: string;
                /**
                 * @description Card currency
                 * @example USD
                 */
                readonly currency?: string;
                /** @description Billing address for the credit card. */
                billingAddress?: {
                    /**
                     * @description Street address
                     * @example 300 Park Ave
                     */
                    addressLine1?: string;
                    /**
                     * @description Suite or unit number
                     * @example 1400
                     */
                    addressLine2?: string;
                    /**
                     * @description Address line 3
                     * @example Western industrial area
                     */
                    addressLine3?: string;
                    /**
                     * @description City
                     * @example San Jose
                     */
                    city?: string;
                    /**
                     * @description State
                     * @example CA
                     */
                    state?: string;
                    /**
                     * @description Zip or postal code
                     * @example 10001
                     */
                    postCode?: string;
                    /**
                     * @description Country
                     * @example USA
                     */
                    country?: string;
                    /**
                     * @description ISO country code. When ISO country codes are enabled for a company, both `country` and `countryCode` must be provided.
                     * @example US
                     */
                    countryCode?: string;
                };
                /** @description For credit card accounts defined as a debit card, the checking account linked to the debit card. */
                readonly debitCardCheckingAccount?: {
                    /**
                     * @description ID for the checking account.
                     * @example BOA
                     */
                    id?: string;
                    /**
                     * @description System-assigned key for the checking account.
                     * @example 10
                     */
                    readonly key?: string;
                    /**
                     * @description URL endpoint for the checking account.
                     * @example /objects/cash-management/checking-account/10
                     */
                    readonly href?: string;
                };
            };
            /** @description Accounting information for the credit card account. */
            accounting?: {
                /** @description Credit card offset GL account, which is the offset account used to track the credit card liability. */
                offsetGLAccount?: {
                    /**
                     * @description System-assigned key of the offset GL account.
                     * @example 155
                     */
                    key?: string;
                    /**
                     * @description ID for the offset GL account.
                     * @example 11000
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the offset GL account.
                     * @example /objects/general-ledger/account/155
                     */
                    readonly href?: string;
                };
                /** @description GL account to use for finance charges and other fees during reconciliation if those fees are to be tracked separately. */
                financeChargeGLAccount?: {
                    /**
                     * @description System-assigned key for the GL account.
                     * @example 201
                     */
                    key?: string;
                    /**
                     * @description ID for the GL account.
                     * @example 4562.67
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the GL account.
                     * @example /objects/general-ledger/account/201
                     */
                    readonly href?: string;
                };
                /** @description Finance charges AP account label. */
                financeChargeAPAccountLabel?: {
                    /**
                     * @description System-assigned key for the AP account label.
                     * @example 22
                     */
                    key?: string;
                    /**
                     * @description ID for the AP account label.
                     * @example Finance Charges
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the AP account label.
                     * @example /objects/accounts-payable/account-label/22
                     */
                    readonly href?: string;
                };
                /** @description Other fees GL account used only for credit card reconciliation; does not apply to debit cards. */
                otherFeesGLAccount?: {
                    /**
                     * @description System-assigned key for the GL account.
                     * @example 33
                     */
                    key?: string;
                    /**
                     * @description ID for the GL account.
                     * @example 3556.1
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the GL account.
                     * @example /objects/general-ledger/account/33
                     */
                    readonly href?: string;
                };
                /** @description Other fees AP account label. */
                otherFeesAPAccountLabel?: {
                    /**
                     * @description System-assigned key for the AP account label.
                     * @example 5
                     */
                    key?: string;
                    /**
                     * @description ID for the AP account label.
                     * @example Other fees
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the AP account label.
                     * @example /objects/accounts-payable/account-label/5
                     */
                    readonly href?: string;
                };
                /** @description Default accrual basis journal. */
                defaultAccrualBasisGLJournal?: {
                    /**
                     * @description System-assigned key for the GL journal.
                     * @example 13
                     */
                    key?: string;
                    /**
                     * @description ID for the GL journal.
                     * @example GJ
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the GL journal.
                     * @example /objects/general-ledger/journal/13
                     */
                    readonly href?: string;
                };
                /** @description Default cash basis journal. For dual-method reporting, separate accrual and cash journals can be specified. */
                defaultCashBasisGLJournal?: {
                    /**
                     * @description System-assigned key for the GL journal.
                     * @example 33
                     */
                    key?: string;
                    /**
                     * @description ID for the GL journal.
                     * @example IJ
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the GL journal.
                     * @example /objects/general-ledger/journal/33
                     */
                    readonly href?: string;
                };
                /** @description GL account to use for employee expense. */
                employeeExpenseGLAccount?: {
                    /**
                     * @description System-assigned key for the GL account.
                     * @example 201
                     */
                    key?: string;
                    /**
                     * @description ID for the GL account.
                     * @example 4562.67
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the GL account.
                     * @example /objects/general-ledger/account/201
                     */
                    readonly href?: string;
                };
                /** @description Employee expense AP account label. */
                employeeExpenseAccountLabel?: {
                    /**
                     * @description System-assigned key for the AP account label.
                     * @example 22
                     */
                    key?: string;
                    /**
                     * @description ID for the AP account label.
                     * @example Employee Expense
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the AP account label.
                     * @example /objects/accounts-payable/account-label/22
                     */
                    readonly href?: string;
                };
                /**
                 * @description Time zone
                 * @default null
                 * @example GMT+02:00 Eastern Europe Time
                 */
                bankingTimeZone?: string & components["schemas"]["timezone"];
                /**
                 * @description Set to `true` to disable inter-entity transfers.
                 * @default false
                 * @example false
                 */
                disableInterEntityTransfer?: boolean;
                /**
                 * @description Set to `true` to use this credit card account for employee expense.
                 * @default false
                 * @example false
                 */
                useInEmployeeExpense?: boolean;
            };
            /** @description Reconciliation information for the credit card account; does not apply to debit card accounts. */
            reconciliation?: {
                /**
                 * Format: decimal-precision-2
                 * @description If the account was previously reconciled, this is the balance of that reconciliation.
                 * @example 110000.00
                 */
                readonly lastReconciledBalance?: string;
                /**
                 * Format: date
                 * @description If the account was previously reconciled, this is the date of that reconciliation.
                 * @example 2024-04-15
                 */
                readonly lastReconciledDate?: string;
                /**
                 * Format: date
                 * @description The date after which the first reconciliation can begin.
                 * @example 2023-07-31
                 */
                readonly cutOffDate?: string;
                /**
                 * Format: decimal-precision-2
                 * @description For reconciliations in progress, the current reconciliation balance.
                 * @example 160207.75
                 */
                readonly inProgressBalance?: string;
                /**
                 * Format: date
                 * @description For reconciliations in progress, the date of that reconciliation.
                 * @example 2024-04-21
                 */
                readonly inProgressDate?: string;
                /** @description Reconciliation match sequence. This is a document sequence that tracks matches in reconciliation. */
                matchSequence?: {
                    /**
                     * @description System-assigned key for the document sequence number.
                     * @example 2
                     */
                    key?: string | null;
                    /**
                     * @description Document sequence ID
                     * @example 2--Bank sequence Id
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the sequence number.
                     * @example /objects/company-config/document-sequence/2
                     */
                    readonly href?: string | null;
                };
                /**
                 * @description Use sequence number for transactions that were matched automatically with a rule set.
                 * @default true
                 * @example false
                 */
                useMatchSequenceForAutoMatch?: boolean;
                /**
                 * @description Use sequence number for manually matched transactions.
                 * @default true
                 * @example false
                 */
                useMatchSequenceForManualMatch?: boolean;
            };
            /** @description Default department to associate with this card account. */
            department?: {
                /**
                 * @description System-assigned key for the department.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description ID for the department.
                 * @example 8
                 */
                id?: string;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/11
                 */
                readonly href?: string;
            };
            /** @description Default location for transactions that draw on this account. */
            location?: {
                /**
                 * @description System-assigned key for the location.
                 * @example 5
                 */
                key?: string;
                /**
                 * @description ID for the location.
                 * @example CA
                 */
                id?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/6
                 */
                readonly href?: string;
            };
            /** @description The vendor is the credit card provider. Associate the credit card with a vendor to pay off the credit card in accounts payable. All credit card charges and payments go to the ledger for this vendor. Use a unique vendor for each credit card account. The vendor cannot be changed after the credit card account is created. */
            vendor?: {
                /**
                 * @description System-assigned key for the credit card vendor.
                 * @example 122
                 */
                key?: string;
                /**
                 * @description ID for the credit card vendor.
                 * @example Amex 1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the credit card vendor.
                 * @example /objects/accounts-payable/vendor/122
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
            bankingCloudConnection?: components["schemas"]["banking-cloud-connection"];
            /** @description Financial institution in Sage Intacct that the credit card is mapped to. Accounts are mapped to a financial institution record in Sage Intacct to manage multiple account logins for a bank feed. */
            readonly financialInstitution?: {
                /**
                 * @description System-assigned key for the financial institution.
                 * @example 5
                 */
                readonly key?: string;
                /**
                 * @description ID for the financial institution.
                 * @example 5
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the financial institution.
                 * @example /objects/cash-management/financial-institution/5
                 */
                readonly href?: string;
            };
            /** @description Rule set to use during reconciliation. If the credit card will be reconciled using a bank feed, this rule set matches incoming bank transactions to Sage Intacct transactions. */
            ruleSet?: {
                /**
                 * @description System-assigned key for the rule set.
                 * @example 36
                 */
                key?: string;
                /**
                 * @description ID for the rule set.
                 * @example 36--RuleSetToMatch
                 */
                id?: string;
                /**
                 * @description URL endpoint for the rule set.
                 * @example /objects/cash-management/bank-txn-rule-set/36
                 */
                readonly href?: string;
            };
        };
        "cash-management-credit-card-accountRequiredProperties": {
            accountDetails?: Record<string, never>;
            accounting?: Record<string, never>;
        };
        "objects.cash-management.savings-account": {
            /**
             * @description System-assigned key for the savings account.
             * @example 34
             */
            readonly key?: string;
            /**
             * @description Name or other unique identifier for the savings account. The account ID cannot be modified.
             * @example SBI
             */
            id?: string;
            /**
             * @description URL for the savings account.
             * @example /objects/cash-management/savings-account/34
             */
            readonly href?: string;
            /** @description Bank account details */
            bankAccountDetails?: {
                /**
                 * @description Bank account number for this savings account.
                 * @example 4356789400
                 */
                accountNumber?: string;
                /**
                 * @description Name of the bank for this savings account.
                 * @example Bank of the West
                 */
                bankName?: string;
                /**
                 * @description Routing number for this savings account.
                 * @example 123456791
                 */
                routingNumber?: string;
                /**
                 * @description Bank branch ID for this savings account.
                 * @example 123456791
                 */
                branchId?: string;
                /**
                 * @description Phone number of the bank branch.
                 * @example 555-927-6200
                 */
                phoneNumber?: string;
                /**
                 * @description The currency for this account. The default is the base currency for the company or entity. If this account is with a foreign bank, the currency should match the country.
                 * @example USD
                 */
                currency?: string;
                bankAddress?: {
                    /**
                     * @description City where the bank is located.
                     * @example Fremont
                     */
                    city?: string;
                    /**
                     * @description State where the bank is located.
                     * @example CA
                     */
                    state?: string;
                    /**
                     * @description Zip or postal code for the bank.
                     * @example 94536
                     */
                    postCode?: string;
                    /**
                     * @description Country where the bank is located.
                     * @example United States
                     */
                    country?: string;
                    /**
                     * @description Line 1 of the street address for the bank.
                     * @example 39148 Paseo Padre Pkwy
                     */
                    addressLine1?: string;
                    /**
                     * @description Line 2 of the street address for the bank.
                     * @example Suite 104
                     */
                    addressLine2?: string;
                    /**
                     * @description Line 3 of the street address for the bank which provides additional geographical information.
                     * @example Western industrial area
                     */
                    addressLine3?: string;
                };
            };
            /** @description Accounting information */
            accounting?: {
                /** @description General Ledger account that this savings account is associated with. */
                glAccount?: {
                    /** @example 90 */
                    key?: string;
                    /** @example 1047--Savings a/c France */
                    id?: string;
                    /** @example /objects/general-ledger/account/31 */
                    readonly href?: string;
                };
                /** @description Default payables GL journal */
                apJournal?: {
                    /**
                     * @description System-assigned key for the gl-journal.
                     * @example 3
                     */
                    key?: string;
                    /**
                     * @description The id of the journal
                     * @example AP ADJ--AP Adjustment Journal
                     */
                    id?: string;
                    /**
                     * @description URL for this journal.
                     * @example /objects/general-ledger/journal/3
                     */
                    readonly href?: string;
                };
                /** @description Default receivables GL journal */
                arJournal?: {
                    /**
                     * @description System-assigned key for the gl-journal.
                     * @example 3
                     */
                    key?: string;
                    /**
                     * @description The id of the journal
                     * @example AR ADJ--AR Adjustment Journal
                     */
                    id?: string;
                    /**
                     * @description URL for this journal.
                     * @example /objects/general-ledger/journal/3
                     */
                    readonly href?: string;
                };
                /**
                 * @description Time zone
                 * @default null
                 * @example GMT+02:00 Eastern Europe Time
                 */
                bankingTimeZone?: string & components["schemas"]["timezone"];
                /**
                 * @description Exclude this account from inter-entity transfers (IET) even if IET is globally enabled for the entire multi-entity shared structure of companies.
                 * @default false
                 * @example false
                 */
                disableInterEntityTransfer?: boolean;
                /** @description General ledger account for service charges. Used for reconciliation. */
                serviceChargeGLAccount?: {
                    /** @example 13 */
                    key?: string;
                    /** @example 1004--Lloyds bank */
                    id?: string;
                    /** @example /objects/general-ledger/account/13 */
                    readonly href?: string;
                };
                /** @description General ledger account label for service charges. */
                serviceChargeAccountLabel?: {
                    /** @example 8 */
                    key?: string;
                    /** @example Accounting Fees */
                    id?: string;
                    /** @example /objects/accounts-payable/account-label/8 */
                    readonly href?: string;
                };
                /** @description General ledger account for earned interest. Used for reconciliation. */
                interestGLAccount?: {
                    /** @example 15 */
                    key?: string;
                    /** @example 1006--Banorte Bank */
                    id?: string;
                    /** @example /objects/general-ledger/account/15 */
                    readonly href?: string;
                };
                /** @description General ledger account label for earned interest. */
                interestAccountLabel?: {
                    /** @example 35 */
                    key?: string;
                    /** @example Interest Fees */
                    id?: string;
                    /** @example /objects/accounts-receivable/account-label/35 */
                    readonly href?: string;
                };
            };
            /** @description Reconciliation information */
            reconciliation?: {
                /**
                 * Format: decimal-precision-2
                 * @description Last reconciled balance.
                 * @example 600.00
                 */
                readonly lastReconciledBalance?: string;
                /**
                 * Format: date
                 * @description Date of the last reconciliation.
                 * @example 2022-02-28
                 */
                readonly lastReconciledDate?: string;
                /**
                 * Format: date
                 * @description The date after which initial reconciliation can begin.
                 * @example 2022-02-28
                 */
                readonly cutOffDate?: string;
                /**
                 * Format: decimal-precision-2
                 * @description In progress reconciliation balance.
                 * @example 200.00
                 */
                readonly inProgressBalance?: string;
                /**
                 * Format: date
                 * @description In progress reconciliation date.
                 * @example 2022-01-28
                 */
                readonly inProgressDate?: string;
                /** @description Reconciliation match sequence */
                matchSequence?: {
                    /**
                     * @description System-assigned key for the document sequence number.
                     * @example 2
                     */
                    key?: string;
                    /**
                     * @description Document sequence ID
                     * @example 2--Bank sequence Id
                     */
                    id?: string;
                    /**
                     * @description URL for the sequence number.
                     * @example /objects/company-config/document-sequence/2
                     */
                    readonly href?: string;
                };
                /**
                 * @description Use sequence number for automatically matched transactions.
                 * @default true
                 * @example false
                 */
                useMatchSequenceForAutoMatch?: boolean;
                /**
                 * @description Use sequence number for manually matched transactions.
                 * @default true
                 * @example false
                 */
                useMatchSequenceForManualMatch?: boolean;
            };
            /** @description department */
            department?: {
                /** @example 8 */
                key?: string;
                /** @example 8--Finance */
                id?: string;
                /** @example /objects/company-config/department/8 */
                readonly href?: string;
            };
            /** @description location */
            location?: {
                /** @example 4 */
                key?: string;
                /** @example 4--Australia */
                id?: string;
                /** @example /objects/company-config/location/4 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
            bankingCloudConnection?: components["schemas"]["banking-cloud-connection"];
            /** @description Financial institution reference */
            readonly financialInstitution?: {
                /** @example FinOne */
                readonly id?: string;
                /** @example 1 */
                readonly key?: string;
                /** @example /objects/cash-management/financial-institution/1 */
                readonly href?: string;
            };
            /** @description Applied rule set */
            ruleSet?: {
                /** @example 1 */
                key?: string;
                /** @example 36--RuleSetToMatch */
                id?: string;
                /** @example /objects/cash-management/bank-txn-rule-set/1 */
                readonly href?: string;
            };
            /** @description Restrict a bank account to a specific location or restrict one or more entity/locations to a specific account. */
            restrictions?: {
                /**
                 * @description Set which entities/locations within the company can access and use this checking account.
                 *
                 *     **Valid values**
                 *     - `unrestricted` - (default) This account is available to the top-level company and all entity-level locations.
                 *     - `rootOnly` - Only the top-level company of a multi-entity structure can access this account.
                 *     - `restricted` - Only specified locations, location groups, departments, or department groups can access this account.
                 * @default unrestricted
                 * @example unrestricted
                 * @enum {string}
                 */
                restrictionType?: "unrestricted" | "rootOnly" | "restricted";
                /**
                 * @description List of locations that can access this checking account when `restrictionType` is set to `restricted`.
                 * @example [
                 *       "1--United States of America",
                 *       "2--United Kingdom"
                 *     ]
                 */
                locations?: string[];
            };
        };
        "cash-management-savings-accountRequiredProperties": {
            bankAccountDetails?: Record<string, never>;
            accounting?: Record<string, never>;
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
        /** @description Bank transactions represent individual bank or credit card transactions recorded in a bank feed. They can be matched to existing transactions in Sage Intacct or created as new transactions for reconciliation. */
        "objects.cash-management.bank-transaction": {
            /**
             * @description System-assigned unique key for the bank transaction.
             * @example 10
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the bank transaction. This value is the same as `key` for this object.
             * @example 10
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bank transaction.
             * @example /objects/cash-management/bank-transaction/10
             */
            readonly href?: string;
            /** @description References the bank account associated with the owning bank feed, for example, a bank account or credit card account. */
            readonly financialAccount?: {
                /**
                 * @description Identifier for the bank account.
                 * @example BOA
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the bank account.
                 * @example 38
                 */
                readonly key?: string;
                /**
                 * @description Name for the bank account.
                 * @example Bank of America
                 */
                readonly name?: string;
                /**
                 * @description Specifies the type for the bank account.
                 * @example bank
                 * @enum {string}
                 */
                readonly accountType?: "bank" | "creditCard";
                /**
                 * @description Currency associated with the bank account.
                 * @example USD
                 */
                readonly currency?: string;
                /**
                 * @description URL endpoint for the bank account.
                 * @example /objects/cash-management/bank-account/38
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates the bank transaction type, which must correspond to the account type:
             *
             *     * `withdrawal` - Transaction withdraws from a bank account.
             *     * `deposit` - Transaction deposits to a bank account.
             *     * `charge` - Transaction charges a credit card account.
             *     * `payment` - Transaction makes a payment to a credit card account.
             * @example withdrawal
             * @enum {string}
             */
            txnType?: "withdrawal" | "deposit" | "charge" | "payment";
            /**
             * Format: date
             * @description Specifies the posting date for the bank transaction.
             * @example 2025-04-27
             */
            postingDate?: string;
            /**
             * @description Indicates the type of document associated with the bank transaction.
             * @example Check
             */
            documentType?: string;
            /**
             * @description Specifies a document number associated with the bank transaction, for example, a check number.
             * @example Check 12345
             */
            documentNumber?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the amount of the bank transaction, for a withdrawal, use a negative number.
             * @example 101.05
             */
            amount?: string;
            /**
             * @description Provides a brief contextual description of the bank transaction.
             * @example Client payment for TalComp project - Invoice 23435
             */
            description?: string;
            /**
             * @description Provides an initial short description of the bank transaction.
             * @example Client payment for TalComp project.
             */
            shortDescription1?: string;
            /**
             * @description Provides a secondary short description of the bank transaction.
             * @example Training services payment.
             */
            shortDescription2?: string;
            /**
             * @description Specifies the transaction identifier for the bank feed transaction. This is available only for banking cloud transactions.
             * @example TXN-23445679210-23435
             */
            txnId?: string;
            /**
             * @description Specifies the payee of the bank transaction.
             * @example Apex Technical Solutions
             */
            payee?: string;
            /**
             * @description Specifies the payee account identifier for the bank transaction.
             * @example APEX_TECH_00121
             */
            payeeAccountId?: string;
            /** @description Provides details about the reconciliation status of the bank transaction. */
            readonly reconciliationInformation?: {
                /**
                 * @description Indicates the current reconciliation status of the bank transaction.
                 * @example cleared
                 * @enum {string}
                 */
                readonly status?: "unmatched" | "cleared" | "matched" | "partiallyMatched" | "selectedToMatch" | "selectedToUnmatch" | "ignored" | "draftMatched";
                /**
                 * Format: decimal-precision-2
                 * @description Amount to match to reconcile the bank transaction.
                 * @example 0.00
                 */
                readonly amountToMatch?: string;
                /**
                 * @description Specifies the matching sequence is a list of alphanumeric characters separated by user defined separator.
                 * @example aa|aus|bb
                 */
                matchingSequence?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            /** @description References the owning bank feed associated with the transaction. */
            bankFeed?: {
                /**
                 * @description Identifier for the bank feed.
                 * @example 2
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the bank feed.
                 * @example 2
                 */
                readonly key?: string;
                /**
                 * @description Specifies the type of bank feed.
                 * @example xml
                 * @enum {string}
                 */
                readonly feedType?: "xml" | "online" | "csv" | "qif";
                /**
                 * @description URL endpoint for the bank feed.
                 * @example /objects/cash-management/bank-feed/101
                 */
                readonly href?: string;
                /**
                 * @description Name for the imported bank feed file.
                 * @example bank-file-import-3.csv
                 */
                fileName?: string;
                /**
                 * @description Identifier for the imported bank feed.
                 * @example 0e26366f-cc60-4638-a1d3-d96a5282b313
                 */
                readonly importId?: string;
                /**
                 * Format: date
                 * @description Specifies the date of the bank feed.
                 * @example 2025-07-15
                 */
                feedDate?: string;
            };
            /**
             * Format: date
             * @description Specifies the reconciliation date for the bank transaction.
             * @example 2025-06-11
             */
            reconciliationDate?: string;
            /** @description Provides details of the address of the payee as it appears at the bank. */
            readonly payeeAddress?: {
                /**
                 * @description Street for the payee address.
                 * @example 51 New Street
                 */
                street?: string;
                /**
                 * @description City for the payee address.
                 * @example Newcastle
                 */
                city?: string;
                /**
                 * @description State or province for the payee address.
                 * @example Tyne and Wear
                 */
                state?: string;
                /**
                 * @deprecated
                 * @description This field is deprecated. Use `postCode` instead
                 * @example NE13 9AA
                 */
                postalCode?: string;
                /**
                 * @description Postal code for the payee address.
                 * @example NE13 9AA
                 */
                postCode?: string;
            };
            /** @description Provides details about bank transaction category, subCategory, categoryId coming from bank feed transaction. */
            readonly categoryData?: {
                /**
                 * @description Specifies the bank transaction category.
                 * @example Interest
                 */
                readonly category?: string;
                /**
                 * @description Specifies the bank transaction sub category.
                 * @example Interest Earned
                 */
                readonly subCategory?: string;
                /**
                 * @description Identifier for the bank transaction category.
                 * @example 1
                 */
                readonly categoryId?: string;
            };
            /**
             * @description Provides an extended description for the bank transaction.
             * @example Monthly training facility rent payment for TalComp training project.
             */
            extendedDescription?: string;
            /**
             * @description Specifies the bank reference number for the bank transaction.
             * @example 17944
             */
            bankReferenceNumber?: string;
            /** @description References the customer associated with the bank transaction. */
            customer?: {
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/123
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the customer.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description Identifier for the customer.
                 * @example TLC_IND_00121
                 */
                id?: string;
                /**
                 * @description Name for the customer.
                 * @example TalComp Industries Inc
                 */
                readonly name?: string;
            };
            /** @description References the bank reconciliation associated with the bank transaction. This only populates if `financialAccount is set to `bank`. */
            readonly bankReconciliation?: {
                /**
                 * @description Identifier for the bank account reconciliation.
                 * @example 200
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the bank account reconciliation.
                 * @example 200
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the bank reconciliation.
                 * @example /objects/cash-management/bank-reconciliation/200
                 */
                readonly href?: string;
            };
            /** @description References the credit reconciliation associated with the bank transaction. This only populates if `financialAccount is set to `creditCard`. */
            readonly creditReconciliation?: {
                /**
                 * @description Identifier for the credit card account reconciliation.
                 * @example 200
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the credit card account reconciliation.
                 * @example 200
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the credit card reconciliation.
                 * @example /objects/cash-management/credit-card-reconciliation/200
                 */
                readonly href?: string;
            };
        };
        "cash-management-bank-transaction-actions-assign-customer-request": {
            /**
             * @description System-assigned key for the bank transaction.
             * @example 12
             */
            key: string;
            /**
             * @description Unique identifier for the customer.
             * @example US108
             */
            customerId: string;
        };
        "cash-management-bank-transaction-actions-assign-customer-response": {
            /**
             * @description System-assigned key for the bank transaction.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the customer.
             * @example US108
             */
            readonly customerId?: string;
        };
        "cash-management-bank-transaction-actions-ignore-request": {
            /**
             * @description System-assigned key for the bank transaction.
             * @example 12
             */
            key: string;
        };
        "cash-management-bank-transaction-actions-ignore-response": {
            /**
             * @description System-assigned key for the bank transaction.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Bank transaction reconciliation status.
             * @example ignored
             * @enum {string}
             */
            readonly state?: "ignored";
        };
        "cash-management-bank-transaction-actions-stop-ignoring-request": {
            /**
             * @description System-assigned key for the bank transaction.
             * @example 12
             */
            key: string;
        };
        "cash-management-bank-transaction-actions-stop-ignoring-response": {
            /**
             * @description System-assigned key for the bank transaction.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Bank transaction reconciliation status.
             * @example unmatched
             * @enum {string}
             */
            readonly state?: "unmatched";
        };
        /** @description Bank transaction rule sets act as containers for matching and creating rules. The rules determine how to match incoming bank transactions or create new transactions for reconciliation in Sage Intacct. */
        "objects.cash-management.bank-txn-rule-set": {
            /**
             * @description System-assigned unique key for the bank transaction rule set.
             * @example 32
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the bank transaction rule set. This value is the same as `key` for this object.
             * @example 32
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bank transaction rule set.
             * @example /objects/cash-management/bank-txn-rule-set/32
             */
            readonly href?: string;
            /**
             * @description Specifies the bank transaction rule set identifier.
             * @example TalComp_Operating_Rules
             */
            ruleSetId?: string;
            /**
             * @description Name for the bank transaction rule set.
             * @example TalComp Training - Operating Account Rules
             */
            name?: string;
            /**
             * @description Description of the bank transaction rule set.
             * @example Rule set for all training related operating account transactions.
             */
            description?: string;
            /**
             * @description Specifies the type of the associated account.
             * @default bank
             * @example creditcard
             * @enum {string}
             */
            accountType?: "bank" | "creditcard";
            /**
             * @description Specifies the number of accounts linked to this bank transaction rule set.
             * @default 0
             * @example 10
             */
            readonly numberOfAccounts?: number;
            /**
             * @description Specifies the number of rules in the bank transaction rule set.
             * @default 0
             * @example 3
             */
            readonly numberOfRules?: number;
            /** @description References the location where the bank transaction rule set was created. */
            location?: {
                /**
                 * @description Unique key for the location.
                 * @example 122
                 */
                key?: string;
                /**
                 * @description Identifier for the location.
                 * @example 1-Lyon
                 */
                id?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/122
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            /** @description References a collection of rules associated with this rule set. */
            rules?: components["schemas"]["objects.cash-management.bank-txn-rule-map"][];
            readonly audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "cash-management-bank-txn-rule-setRequiredProperties": Record<string, never>;
        /** @description Bank transaction rule set run logs are used to view how well a rule set, or the match and create rules within it, are performing. */
        "objects.cash-management.bank-txn-rule-set-run-log": {
            /**
             * @description System-assigned unique key for the bank transaction rule set run log.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for bank transaction rule set run log. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bank transaction rule set run log.
             * @example /objects/cash-management/bank-txn-rule-set-run-log/23
             */
            readonly href?: string;
            /**
             * @description Bank transaction feed source.
             *
             *     - `online` - Online bank feed through Sage Cloud Services.
             *     - `xml` - Transactions are in XML format.
             *     - `csv` - Transactions are in CSV format.
             *     - `qif` - Transactions are in QIF format.
             * @example xml
             * @enum {string}
             */
            feedType?: "xml" | "online" | "csv" | "qif";
            /**
             * @description Indicates the total number of Intacct transactions the rule set processed.
             * @example 8
             */
            readonly totalProcessedTxns?: string;
            /**
             * @description Specifies the total number of bank transactions the rule set processed.
             * @example 4
             */
            readonly totalProcessedBankTxns?: string;
            /**
             * @description Indicates the total number of bank transactions the rule set matched.
             * @example 1
             */
            readonly totalMatchedTxns?: string;
            /**
             * @description Specifies the total number of Intacct transactions the rule set created.
             * @default 0
             * @example 3
             */
            readonly totalCreatedTxns?: string;
            /**
             * Format: date-time
             * @description Indicates the date and time when the rule set run started against incoming transactions.
             * @example 05/05/2025 05:53:35
             */
            readonly startDateTime?: string;
            /**
             * Format: date-time
             * @description Specifies the date and time when the rule set run ended against incoming transactions.
             * @example 05/05/2025 05:54:00
             */
            readonly endDateTime?: string;
            /**
             * @description Specifies the current status of bank transaction rule set run.
             * @default success
             * @example success
             * @enum {string}
             */
            readonly status?: "success" | "failure";
            /**
             * @description Indicates the error message details if the status of the rule set run is `failure`.
             * @example There are no rules associated with the rule set. Link active rules with the rule set and try again.
             */
            readonly errorMessage?: string;
            /**
             * @description Specifies the total number of rules within the rule set.
             * @default 0
             * @example 2
             */
            readonly ruleCount?: string;
            /** @description References the bank transaction rule set that executed against bank transactions. */
            readonly bankTxnRuleSet?: {
                /**
                 * @description Unique key for the rule set.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the rule set.
                 * @example RuleSetToMatch
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the rule set.
                 * @example /objects/cash-management/bank-txn-rule-set/1
                 */
                readonly href?: string;
            };
            /** @description References the bank account that receives the payment from the customer. */
            bankAccount?: {
                /**
                 * @description Unique key for the bank account.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the bank account.
                 * @example BOA
                 */
                id?: string;
                /**
                 * @description Name for the bank account.
                 * @example Bank of America
                 */
                name?: string;
                /**
                 * @description URL endpoint for the bank account.
                 * @example /objects/cash-management/bank-account/1
                 */
                readonly href?: string;
            };
            /** @description References a collection of bank transaction rule set run details for the run log. */
            bankTxnRuleSetRunDetail?: components["schemas"]["objects.cash-management.bank-txn-rule-set-run-detail"][];
            readonly audit?: components["schemas"]["audit.s1"];
        };
        "cash-management-bank-txn-rule-set-run-logRequiredProperties": {
            bankAccount?: Record<string, never>;
        };
        /** @description Bank transaction rule set run details records contain information about the execution of individual rules within a bank transaction rule set during a specific run. */
        "objects.cash-management.bank-txn-rule-set-run-detail": {
            /**
             * @description System-assigned unique key for the bank transaction rule set run details.
             * @example 28
             */
            readonly key?: string;
            /**
             * @description Unique identifier for bank transaction rule set run details. This value is the same as `key` for this object.
             * @example 28
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bank transaction rule set run details.
             * @example /objects/cash-management/bank-txn-rule-set-run-detail/28
             */
            readonly href?: string;
            /**
             * @description Indicates the current status of bank transaction rule run.
             * @default success
             * @example success
             * @enum {string}
             */
            readonly status?: "success" | "failure";
            /**
             * @description Indicates the details of the error message when the status of the rule run is `failure`.
             * @example The system could not create GLBatch record.
             */
            readonly errorMessage?: string;
            /** @description References the bank transaction match or create rule executed for a bank transaction. */
            readonly bankTxnRule?: {
                /**
                 * @description Unique key for the bank transaction rule.
                 * @example 10
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the bank transaction rule.
                 * @example 10
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the bank transaction rule.
                 * @example /objects/cash-management/bank-txn-rule/10
                 */
                readonly href?: string;
            };
            /** @description References an Intacct or system transaction record which is matched to bank transaction record from the bank feed during rule run. */
            readonly intacctTxnRecord?: {
                /**
                 * @description Unique key for the transaction record.
                 * @example 110
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the transaction record.
                 * @example 110
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the transaction record.
                 * @example /objects/cash-management/reconciliation-source-record/110
                 */
                readonly href?: string;
            };
            /** @description References the bank transaction record from the bank feed which is matched to Intacct or system transaction record during rule run. */
            readonly bankTxnRecord?: {
                /**
                 * @description Unique key for the bank transaction.
                 * @example 201
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the bank transaction.
                 * @example 201
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the bank transaction.
                 * @example /objects/cash-management/bank-transaction/201
                 */
                readonly href?: string;
            };
            /** @description References the bank transaction rule set run log that contains the run details. */
            readonly bankTxnRuleSetRunLog?: {
                /**
                 * @description Unique key for the rule set run log.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Identifier for rule set run log.
                 * @example 23
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the rule set run log.
                 * @example /objects/cash-management/bank-txn-rule-set-run-log/23
                 */
                readonly href?: string;
            };
            readonly audit?: components["schemas"]["audit.s1"];
        };
        /** @description Bank transaction rules determine whether incoming bank transactions are matched to existing Sage Intacct transactions or used to create new transactions. */
        "objects.cash-management.bank-txn-rule": {
            /**
             * @description System-assigned unique key for the bank transaction rule.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the bank transaction rule.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint that links to the bank transaction rule.
             * @example /objects/cash-management/bank-txn-rule/1
             */
            readonly href?: string;
            /**
             * @description User-assigned identifier of the bank transaction rule.
             * @example match-by-amount-1
             */
            ruleId?: string;
            /**
             * @description Name of the bank transaction rule.
             * @example match-by-amount
             */
            name?: string;
            /**
             * @description Description of the bank transaction rule.
             * @example Match bank transactions by amount
             */
            description?: string;
            /**
             * @description Type of bank transaction rule. A `match` rule matches incoming bank transactions to existing Sage Intacct transactions. A `create` rule uses the incoming bank transactions to create new Sage Intacct transactions and automatically match them.
             * @default match
             * @example match
             * @enum {string}
             */
            ruleType?: "match" | "create";
            /** @description Location where the bank transaction rule was created. */
            location?: {
                /**
                 * @description System-assigned unique key for the location.
                 * @example 122
                 */
                key?: string;
                /**
                 * @description Unique identifier of the location.
                 * @example 1-Lyon
                 */
                id?: string;
                /**
                 * @description URL endpoint that links to the location.
                 * @example /objects/location/122
                 */
                readonly href?: string;
            };
            /**
             * @description Number of  rule sets that include the bank transaction rule.
             * @default 0
             * @example 10
             */
            readonly rulesetCount?: number;
            /** @description Specifies a filter used in the bank transaction rule. */
            filterAttributes?: components["schemas"]["objects.cash-management.bank-txn-rule-filter"][];
            /** @description Specifies a group used in the bank transaction rule. */
            groupAttributes?: components["schemas"]["objects.cash-management.bank-txn-rule-group"][];
            status?: components["schemas"]["status"];
            /** @description Specifies the match entry used in a bank transaction `match` rule, required when the rule type is set to `match`. */
            matchRuleAttributes?: components["schemas"]["objects.cash-management.bank-txn-rule-match"][];
            /** @description Create rule object used to create new transactions, required when the rule type is set to `create`. */
            createRuleObject?: {
                /**
                 * @description Sage Intacct object type that the bank transaction `create` rule generates, for example a journal entry.
                 * @default null
                 * @example journalEntry
                 * @enum {string|null}
                 */
                objectType?: null | "cctransaction" | "journalEntry";
                /**
                 * Journal entry template.
                 * @description Reference to the journal entry template to use when the `create` rule is applied.
                 */
                journalEntryTemplate?: {
                    /**
                     * @description Unique identifier of the journal entry template.
                     * @example 12
                     */
                    id?: string;
                    /**
                     * @description Unique key for the journal entry template.
                     * @example 12
                     */
                    key?: string;
                    /**
                     * @description URL endpoint that links to the journal entry template.
                     * @example /objects/cash-management/journal-entry-template/12
                     */
                    readonly href?: string;
                };
                /**
                 * Credit card transaction template.
                 * @description Reference to the credit card transaction template, use when the `create` rule is applied.
                 */
                creditCardTxnTemplate?: {
                    /**
                     * @description Unique identifier of the credit card transaction template.
                     * @example 5
                     */
                    id?: string;
                    /**
                     * @description Unique key for the credit card transaction template.
                     * @example 5
                     */
                    key?: string;
                    /**
                     * @description URL endpoint that links to the credit card transaction template.
                     * @example /objects/cash-management/credit-card-txn-template/5
                     */
                    readonly href?: string;
                };
            };
            readonly audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "cash-management-bank-txn-ruleRequiredProperties": Record<string, never>;
        /** @description Bank transaction rule filter used in a bank transaction rule. */
        "objects.cash-management.bank-txn-rule-filter": {
            /**
             * @description System-assigned unique key for the bank transaction rule filter.
             * @example 3
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the bank transaction rule filter.
             * @example 3
             */
            readonly id?: string;
            /**
             * @description URL endpoint that links to the bank transaction rule filter.
             * @example /objects/cash-management/bank-txn-rule-filter/3
             */
            readonly href?: string;
            /**
             * @description Indicates if the filter should be applied to a bank transaction or an Intacct transaction.
             * @example intacctTransaction
             * @enum {string}
             */
            dataSource?: "intacctTransaction" | "bankTransaction";
            /**
             * @description Specifies which Intacct transaction field to include in the bank transaction rule filter.
             * @default null
             * @example postingDate
             * @enum {string|null}
             */
            intacctTxnAttribute?: null | "transactionType" | "documentNumber" | "documentDate" | "transactionAmount" | "baseAmount" | "transactionCurrency" | "baseCurrency" | "postingDate" | "description";
            /**
             * @description Specifies which bank transaction field to include in the bank transaction rule filter.
             * @default null
             * @example transactionType
             * @enum {string|null}
             */
            bankTxnAttribute?: null | "transactionType" | "documentNumber" | "documentType" | "amount" | "currency" | "feedType" | "postingDate" | "description";
            /**
             * @description Specifies the comparison operator used by the bank transaction rule filter.
             * @example equals
             * @enum {string}
             */
            operator?: "equals" | "contains" | "within" | "notContains" | "beginsWith" | "endsWith" | "greaterThan" | "lessThan";
            /**
             * @description Specifies the value used with the comparison operator in the bank transaction rule filter.
             * @example debit
             */
            value?: string;
            /**
             * @description Indicates the position of this bank transaction rule filter in the processing sequence of the bank transaction rule.
             * @example 2
             */
            order?: number;
            readonly audit?: components["schemas"]["audit.s1"];
            /** @description References the bank transaction rule that uses the bank transaction rule filter. */
            readonly bankTransactionRule?: {
                /**
                 * @description Unique identifier of the bank transaction rule.
                 * @example 1
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the bank transaction rule.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint that links to the bank transaction rule.
                 * @example /objects/cash-management/bank-txn-rule/1
                 */
                readonly href?: string;
            };
        };
        /** @description Bank transaction rule group used in a bank transaction rule. */
        "objects.cash-management.bank-txn-rule-group": {
            /**
             * @description System-assigned unique key for the bank transaction rule group.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the bank transaction rule group.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint that links to the bank transaction rule group.
             * @example /objects/cash-management/bank-txn-rule-group/1
             */
            readonly href?: string;
            /**
             * @description Indicates if the bank transaction rule group should be applied to a bank transaction or Intacct transaction.
             * @example intacctTransaction
             * @enum {string}
             */
            dataSource?: "intacctTransaction" | "bankTransaction";
            /**
             * @description Specifies which Intacct transaction field to group transactions by. This is required if `dataSource` is `intacctTransaction`.
             * @default null
             * @example documentNumber
             * @enum {string|null}
             */
            intacctTxnAttribute?: null | "documentNumber" | "postingDate";
            /**
             * @description Specifies which bank transaction field to group transactions by. This is required if `dataSource` is `bankTransaction`.
             * @default null
             * @example postingDate
             * @enum {string|null}
             */
            bankTxnAttribute?: null | "documentNumber" | "postingDate";
            /**
             * @description Indicates the position of this bank transaction rule group in the processing sequence of the bank transaction rule.
             * @example 1
             */
            order?: number;
            readonly audit?: components["schemas"]["audit.s1"];
            /** @description References the bank transaction rule that uses the bank transaction rule group. */
            readonly bankTransactionRule?: {
                /**
                 * @description Unique identifier of the bank transaction rule.
                 * @example 10
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the bank transaction rule.
                 * @example 10
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint that links to the bank transaction rule.
                 * @example /objects/cash-management/bank-txn-rule/10
                 */
                readonly href?: string;
            };
        };
        /** @description A bank transaction rule map links a bank transaction rule to a rule set. */
        "objects.cash-management.bank-txn-rule-map": {
            /**
             * @description System-assigned unique key for the bank transaction rule map.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the bank transaction rule map.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description Specifies the position of the rule within the rule set order.
             * @example 1
             */
            ruleOrder?: number;
            /** @description Indicates the bank transaction rule to be mapped to the rule set. */
            bankTxnRule?: {
                /**
                 * @description Unique identifier of the bank transaction rule.
                 * @example 10
                 */
                id?: string;
                /**
                 * @description Unique key for the bank transaction rule.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description URL endpoint that links to the bank transaction rule.
                 * @example /objects/cash-management/bank-txn-rule/10
                 */
                readonly href?: string;
                /**
                 * @description User-assigned identifier of the bank transaction rule.
                 * @example MATCH_VENDOR_PAYMENTS_156
                 */
                ruleId?: string;
                /**
                 * @description Name of the bank transaction rule.
                 * @example Match Vendor Payment Transactions (156)
                 */
                name?: string;
                /**
                 * @description Indicates the type of bank transaction rule. Matching rules automatically match incoming transactions from a bank feed to transactions in Sage Intacct. Creation rules automatically create transactions from bank data to match for reconciliation in Sage Intacct.
                 * @default match
                 * @example match
                 * @enum {string}
                 */
                ruleType?: "match" | "create";
            };
            /** @description Specifies the bank transaction rule set to which the rule is mapped. */
            readonly bankTxnRuleSet?: {
                /**
                 * @description Unique identifier of the bank transaction rule set.
                 * @example 2
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the bank transaction rule set.
                 * @example 2
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint that links to the bank transaction rule set.
                 * @example /objects/cash-management/bank-txn-rule-set/2
                 */
                readonly href?: string;
            };
            readonly audit?: components["schemas"]["audit.s1"];
        };
        /** @description Bank transaction rule match entry used in a bank transaction rule. */
        "objects.cash-management.bank-txn-rule-match": {
            /**
             * @description System-assigned unique key for the bank transaction rule match entry.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the bank transaction rule match entry.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description Specifies which Intacct transaction field to include in the bank transaction rule match entry.
             * @example postingDate
             * @enum {string}
             */
            intacctTxnAttribute?: "documentNumber" | "postingDate" | "description" | "amount" | "amountDebitsAndCreditsCombined";
            /**
             * @description Specifies which bank transaction field to include in the bank transaction rule match entry.
             * @example documentNumber
             * @enum {string}
             */
            bankTxnAttribute?: "documentNumber" | "postingDate" | "description" | "amount" | "documentNumberLeadingZerosRemoved" | "amountDebitsAndCreditsCombined";
            /**
             * @description Specifies the comparison operator used by the bank transaction rule match entry.
             * @example equals
             * @enum {string}
             */
            operator?: "equals" | "contains" | "within";
            /**
             * @description Specifies the value used with the comparison operator in the bank transaction rule match entry.
             * @example DOC1000
             */
            value?: string;
            /**
             * @description Indicates the position of this bank transaction match entry in the processing sequence of the bank transaction rule.
             * @example 2
             */
            order?: number;
            audit?: components["schemas"]["audit.s1"];
            /** @description References the associated bank transaction rule that uses the bank transaction rule match entry. */
            readonly bankTransactionRule?: {
                /**
                 * @description Unique identifier of the bank transaction rule.
                 * @example 1
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the bank transaction rule.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint that links to the bank transaction rule.
                 * @example /objects/cash-management/bank-txn-rule/1
                 */
                readonly href?: string;
            };
        };
        /** @description Bank transaction assignment rules automatically assign a customer to an unmatched bank deposit transaction in a checking or savings account based on pre-defined criteria. */
        "objects.cash-management.bank-txn-assignment-rule": {
            /**
             * @description System-assigned unique key for the bank transaction assignment rule.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the bank transaction assignment rule. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bank transaction assignment rule.
             * @example /objects/cash-management/bank-txn-assignment-rule/23
             */
            readonly href?: string;
            /**
             * @description Specifies the user-assigned identifier for the bank transaction assignment rule.
             * @example ASSIGN_CUST_DEP_001
             */
            ruleId?: string;
            /**
             * @description Name for the bank transaction assignment rule.
             * @example Assign customer to unmatched deposit transactions
             */
            name?: string;
            /**
             * @description Description of the bank transaction assignment rule.
             * @example Links unmatched bank deposit transactions to a customer based on keywords in the transaction description.
             */
            description?: string;
            /**
             * @description Specifies the type of record that the unmatched bank transaction is assigned to during processing. This value can only be `customer`.
             * @default customer
             * @example customer
             */
            readonly assignmentType?: string;
            /**
             * @description Indicates the associated account to which the assignment rule applies, either a `bank` account or a `creditCard`.
             * @default bank
             * @example bank
             * @enum {string}
             */
            accountType?: "bank" | "creditCard";
            /** @description References the customer associated with the bank transaction assignment rule. */
            customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description Identifier for the customer.
                 * @example BTI
                 */
                id?: string;
                /**
                 * @description Name of  the customer.
                 * @example Joy Langdon
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/15
                 */
                readonly href?: string;
            };
            /** @description References the bank account that receives the payment from the customer. */
            bankAccount?: {
                /**
                 * @description Unique key for the bank account.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the bank account.
                 * @example Chase - 340293
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the bank account.
                 * @example /objects/cash-management/bank-account/1
                 */
                readonly href?: string;
            };
            /** @description References a collection of filter attributes for the bank transaction assignment rule. */
            filterAttributes?: components["schemas"]["objects.cash-management.bank-txn-assignment-rule-filter"][];
            readonly status?: components["schemas"]["status"];
            readonly audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "cash-management-bank-txn-assignment-ruleRequiredProperties": {
            customer?: Record<string, never>;
        };
        /** @description Bank transaction assignment rule filters are used in bank transaction assignment rules to  define criteria for automatically assigning customers to unmatched bank deposit transactions. */
        "objects.cash-management.bank-txn-assignment-rule-filter": {
            /**
             * @description System-assigned unique key for the bank transaction assignment rule filter.
             * @example 28
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the bank transaction assignment rule filter. This value is the same as `key` for this object.
             * @example 28
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bank transaction assignment rule filter.
             * @example /objects/cash-management/bank-txn-assignment-rule-filter/28
             */
            readonly href?: string;
            /**
             * @description Indicates the `bankTxnAttribute` used for filtering the assignment rule and used along with `operator` and `value`. For example, selecting `txnType`, with an `operator` of `equals` and a `value` of `debit` will apply to all debit transactions.
             * @default null
             * @example txnType
             * @enum {string|null}
             */
            bankTxnAttribute?: null | "txnType" | "documentNumber" | "documentType" | "amount" | "currency" | "feedType" | "postingDate" | "description";
            /**
             * @description Indicates the `operator` used for filtering the assignment rule and used along with `bankTxnAttribute` and `value`.For example, selecting `equals`, with a `bankTxnAttribute` of `txnType` and a `value` of `debit` will apply to all debit transactions.
             * @example equals
             * @enum {string}
             */
            operator?: "equals" | "contains" | "within" | "notContains" | "beginsWith" | "endsWith" | "greaterThan" | "lessThan";
            /**
             * @description Indicates the `value` used for filtering the assignment rule and used along with `bankTxnAttribute` and `operator`. For example, selecting `debit`, with a `bankTxnAttribute` of `txnType` and an `operator` of `equals` will apply to all debit transactions.
             * @example debit
             */
            value?: string;
            /**
             * @description Specifies the order in which this filter attribute is applied to the bank transaction assignment rule.
             * @example 2
             */
            filterOrder?: number;
            /** @description References the bank transaction assignment rule that uses this filter to assign a customer to an unmatched bank deposit transaction. */
            readonly bankTxnAssignmentRule?: {
                /**
                 * @description Unique key for the bank transaction assignment rule.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the bank transaction assignment rule.
                 * @example 23
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the bank transaction assignment rule.
                 * @example /objects/cash-management/bank-txn-assignment-rule/23
                 */
                readonly href?: string;
            };
        };
        /** @description Bank fees are financial transactions that capture charges or incentives incurred in connection with bank account activity. */
        "objects.cash-management.bank-fee": {
            /**
             * @description System-assigned unique key for the bank fee.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the bank fee. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bank fee.
             * @example /objects/cash-management/bank-fee/23
             */
            readonly href?: string;
            /**
             * @description Indicates the reference number for the bank fee, such as the transaction number for the interest or service charge from a bank statement.
             * @example Bank Charges - 01568
             */
            referenceNumber?: string | null;
            /**
             * @description Indicates a document number associated with the bank fee.
             * @example CHK123456
             */
            documentNumber?: string | null;
            /**
             * Format: date
             * @description Specifies the date when the bank fee was created.
             * @example 2024-01-23
             */
            txnDate?: string;
            /**
             * @description Provides a brief contextual description for the bank fee.
             * @example Fee for Bank Charges - 01568
             */
            description?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Indicates the total bank fee amount entered in the company's base currency.
             * @example 100.99
             */
            readonly totalEntered?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the total bank fee amount entered in the transaction currency, for multi-currency companies.
             * @example 100.99
             */
            readonly txnTotalEntered?: string;
            /**
             * @description Current state of the bank fee. When a bank fee has been issued and is in a `posted` state, it can be reversed.
             *
             *     When a bank fee is reversed, the original `posted` transaction immediately enters the `reversal` state and transitions to the `reversed` state once the reversal date is reached. When you reverse a bank fee, a corresponding reversal transaction is also created in the `reversal` state. The state of this reversal transaction remains unchanged after creation.
             * @example posted
             * @enum {string}
             */
            readonly state?: "reversed" | "reversal" | "posted";
            /**
             * @description Indicates whether the bank fee is inclusive of tax. Applies only if the `txnType` is set to `serviceCharge`. (Taxes subscription)
             * @default false
             * @example true
             */
            isInclusiveTax?: boolean;
            /**
             * @description Indicates whether the bank fee is `cleared`, `matched`, or `uncleared` for reconciliation.
             * @default uncleared
             * @example cleared
             * @enum {string}
             */
            reconciliationState?: "cleared" | "uncleared" | "matched";
            /**
             * Format: date
             * @description Date when the transaction was cleared as part of the reconciliation process.
             * @example 2024-01-23
             */
            readonly clearingDate?: string | null;
            /**
             * @description Indicates whether this bank fee is for a `serviceCharge` or `interestEarned`.
             * @default serviceCharge
             * @example serviceCharge
             * @enum {string}
             */
            txnType?: "serviceCharge" | "interestEarned";
            /** @description References the bank account associated with the bank fee. */
            bankAccount?: {
                /**
                 * @description Unique key for the bank account.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the bank account.
                 * @example BOA
                 */
                id?: string;
                /**
                 * @description Name of the bank account.
                 * @example Bank of America
                 */
                readonly name?: string;
                /**
                 * @description Currency of the bank account.
                 * @example USD
                 */
                readonly currency?: string;
                /**
                 * @description URL endpoint for the bank account.
                 * @example /objects/cash-management/bank-account/1
                 */
                readonly href?: string;
            };
            /** @description Provides currency details for the bank fee. */
            currency?: {
                /**
                 * @description Specifies the base currency for the entity or company.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * @description For multi-currency companies, the transaction currency for the bank fee.
                 * @example USD
                 */
                txnCurrency?: string;
                /**
                 * exchangeRate
                 * @description Exchange rate used to calculate the base amount for the bank fee. Required if `txnCurrency` differs from `baseCurrency`.
                 */
                exchangeRate?: {
                    /**
                     * Format: date
                     * @description Date of the exchange rate.
                     * @example 2021-01-23
                     */
                    date?: string;
                    /**
                     * @description Exchange rate used to calculate the base amount.
                     * @example 1.0789
                     */
                    rate?: number;
                    /**
                     * @description Exchange rate type used to calculate the base amount.
                     * @example Intacct Daily Rate
                     */
                    typeId?: string;
                };
            };
            /** @description References the reversing transaction for a bank fee with a `reversed` state. */
            readonly reversedBy?: {
                /**
                 * @description Unique key for the reversing transaction.
                 * @example 221
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the reversing transaction.
                 * @example 221
                 */
                readonly id?: string;
                /**
                 * Format: date
                 * @description Date of the reversing transaction.
                 * @example 2021-01-23
                 */
                readonly reversalDate?: string;
                /**
                 * @description URL endpoint for the reversing transaction.
                 * @example /objects/cash-management/bank-fee/221
                 */
                readonly href?: string;
            };
            /** @description References the reversed transaction for a bank fee with a `reversal` state. */
            readonly reversalOf?: {
                /**
                 * @description Unique key for the reversed transaction.
                 * @example 125
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the reversed transaction.
                 * @example 125
                 */
                readonly id?: string;
                /**
                 * Format: date
                 * @description Date of the reversed transaction.
                 * @example 2024-01-23
                 */
                readonly txnDate?: string;
                /**
                 * @description URL endpoint for the reversed transaction.
                 * @example /objects/cash-management/bank-fee/125
                 */
                readonly href?: string;
            };
            /** @description References the tax solution associated with the bank fee, used to calculate and capture taxes. (Taxes subscription) */
            taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 4
                 */
                key?: string | null;
                /**
                 * @description Identifier for the tax solution.
                 * @example Australia GST
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/4
                 */
                readonly href?: string;
            };
            /** @description References a supporting document attached to the bank fee. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 18
                 */
                key?: string | null;
                /**
                 * @description Identifier for the attachment.
                 * @example 18
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/18
                 */
                readonly href?: string;
            };
            /** @description Represents a collection of lines associated with the bank fee. */
            lines?: components["schemas"]["objects.cash-management.bank-fee-line"][];
            readonly audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Specifies the date and time when the bank fee was created.
                 * @example 2024-01-23T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            entity?: components["schemas"]["entity-ref"];
        };
        "cash-management-bank-feeRequiredProperties": {
            currency?: unknown;
            lines?: unknown[];
        };
        "cash-management-bank-fee-actions-reverse-request": {
            /**
             * @description System-assigned unique key for the original bank fee transaction.
             * @example 518
             */
            key: string;
            /**
             * Format: date
             * @description Specifies the date of the bank fee reversal.
             * @example 2024-01-23
             */
            reversedDate: string;
            /**
             * @description Provides brief descriptive notes about the reason for the reversal.
             * @example Bank fee charged in error.
             */
            notes?: string;
        };
        "cash-management-bank-fee-actions-reverse-response": {
            /**
             * @description System-assigned unique key for the bank fee reversal transaction.
             * @example 519
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the bank fee reversal. This is the same as `key` for this object.
             * @example 519
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bank fee reversal.
             * @example /objects/cash-management/bank-fee/519
             */
            readonly href?: string;
            /**
             * @description Indicates the state of the bank fee transaction after reversal.
             * @example reversed
             */
            readonly state?: string;
        };
        /** @description Bank fee linesrepresent interest and bank charges applied to a bank fee. */
        "objects.cash-management.bank-fee-line": {
            /**
             * @description System-assigned unique key for the bank fee line.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Identifier for the bank fee line. This is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bank fee line.
             * @example /objects/cash-management/bank-fee-line/23
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the bank fee line amount in your company's base currency. This value is calculated based on the `exchangeRate` specified in the `bank-fee`.
             * @example 100.99
             */
            readonly baseAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies the total transaction amount (including tax) for the bank fee line, applies to multi-currency companies. (Taxes subscription)
             * @example 100.99
             */
            totalTxnAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies the transaction amount for the bank fee line, applies to multi-currency companies.
             * @example 100.99
             */
            txnAmount?: string;
            /**
             * @description Provides additional contextual information about the bank fee line.
             * @example Service charge added for cashing a check.
             */
            description?: string | null;
            /** @description Represents the currency details for the bank fee line. */
            currency?: {
                /**
                 * @description Base currency for the associated entity or company.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * @description Transaction currency for the entity or company, applies to multi-currency companies. If this value differs from `baseCurrency`, the `exchangeRate` is also required.
                 * @example USD
                 */
                txnCurrency?: string;
                /**
                 * exchangeRate
                 * @description Determines the exchange rate used to calculate the `baseAmount` for the bank fee line. This value is required if `txnCurrency` differs from `baseCurrency`.
                 */
                exchangeRate?: {
                    /**
                     * Format: date
                     * @description Effective date of the exchange rate used to calculate the base amount.
                     * @example 2021-01-23
                     */
                    date?: string;
                    /**
                     * @description Exchange rate used to calculate the base amount.
                     * @example 1.0789
                     */
                    rate?: number;
                    /**
                     * @description Type of exchange rate used to calculate the base amount.
                     * @example Intacct Daily Rate
                     */
                    typeId?: string;
                };
            };
            /** @description References the base location for the bank fee line in a multi-entity company. */
            baseLocation?: components["schemas"]["location-ref"] & {
                /**
                 * @description Unique key for the base location.
                 * @example 4
                 */
                key?: string;
            };
            /**
             * @deprecated
             * @description This has been deprecated. Label for the Accounts Receivable (AR) account associated with the interest earned on the bank fee line.
             */
            readonly arAccountLabel?: {
                /**
                 * @deprecated
                 * @description Unique key for the AR account label.
                 * @example 10
                 */
                readonly key?: string;
                /**
                 * @deprecated
                 * @description Identifier for the AR account label.
                 * @example SALES
                 */
                readonly id?: string;
                /**
                 * @deprecated
                 * @description URL endpoint for the AR account label.
                 * @example /objects/accounts-receivable/account-label/10
                 */
                readonly href?: string;
            };
            /**
             * @deprecated
             * @description This has been deprecated. Label for the Accounts Payable (AP) account associated with the service charge on the bank fee line.
             */
            apAccountLabel?: {
                /**
                 * @deprecated
                 * @description Unique key for the AP account label.
                 * @example 14
                 */
                key?: string;
                /**
                 * @deprecated
                 * @description Identifier for the AP account label.
                 * @example Accounting Fees
                 */
                id?: string;
                /**
                 * @deprecated
                 * @description URL endpoint for the AP account label.
                 * @example /objects/accounts-payable/ap-account-label/14
                 */
                readonly href?: string;
            };
            /** @description General Ledger (GL) account where the bank fee line is posted. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 9
                 */
                key?: string;
                /**
                 * @description Identifier for the GL account.
                 * @example 9010
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example Service Payments
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/9
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the bank fee line.
                 */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 4
                     */
                    key?: string;
                    /**
                     * @description Identifier of the location.
                     * @example AU
                     */
                    id?: string;
                    /**
                     * @description Name of the location.
                     * @example Australia
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/location/4
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Department associated with the bank fee line.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 9
                     */
                    key?: string;
                    /**
                     * @description Identifier of the department.
                     * @example 01
                     */
                    id?: string;
                    /**
                     * @description Name of the department.
                     * @example Accounting
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
            };
            /** @description References the bank fee associated with the bank fee line. */
            readonly bankFee?: {
                /**
                 * @description Unique key for the bank fee.
                 * @example 10
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the bank fee.
                 * @example 10
                 */
                readonly id?: string;
                /**
                 * @description Type of bank fee transaction, for example, interest earned or a service charge.
                 * @example Service charge
                 */
                readonly txnType?: string;
                /**
                 * @description URL endpoint for the bank fee.
                 * @example /objects/cash-management/bank-fee/10
                 */
                readonly href?: string;
            };
            readonly status?: components["schemas"]["status"];
            readonly audit?: components["schemas"]["audit.s1"];
            /** @description Represents a collection of tax entries for the bank fee line. (Taxes subscription) */
            taxEntries?: components["schemas"]["objects.cash-management.bank-fee-tax-entry"][];
        };
        /** @description Bank fee tax entries contain tax entry details for VAT enabled bank fee lines. */
        "objects.cash-management.bank-fee-tax-entry": {
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
            /** @description References the purchasing tax details for the bank fee line, including entries relating to Accounts Receivable (AR), Accounts Payable (AP) and Purchasing. */
            purchasingTaxDetail?: {
                /**
                 * @description Unique key for the purchasing tax detail.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the purchasing tax detail.
                 * @example Alaska Tax Detail
                 */
                id?: string;
                /**
                 * @description URL endpoint for the purchasing tax detail.
                 * @example /objects/tax/purchasing-tax-detail/1
                 */
                readonly href?: string;
            };
            /**
             * bankFeeLine
             * @description References the bank fee line associated with this tax entry.
             */
            readonly bankFeeLine?: {
                /**
                 * @description Identifier for the bank fee.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the bank fee.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the bank fee.
                 * @example /objects/cash-management/bank-fee-line/100
                 */
                readonly href?: string;
            };
        };
        /** @description Bank files contain payment information for electronic payments. */
        "objects.cash-management.bank-file": {
            /**
             * @description System-assigned unique key for the bank file.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the bank file. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bank file.
             * @example /objects/cash-management/bank-file/23
             */
            readonly href?: string;
            /**
             * @description Indicates the file name and timestamp for the bank file.
             * @example AUAccount-Jul-12-2025 15:58:30919
             */
            fileName?: string;
            /**
             * @description Specifies the total number of payments included in the bank file.
             * @example 1
             */
            totalPayments?: number;
            /**
             * Format: decimal-precision-2
             * @description Indicates the total payment amount included in the bank file.
             * @example 1200.45
             */
            totalAmount?: string;
            /**
             * @description Specifies the file extension of the generated bank file.
             * @example csv
             */
            fileExtension?: string;
            /**
             * @description Indicates the current state of the bank file.
             * @default generating
             * @example confirmed
             * @enum {string}
             */
            state?: "generating" | "failed" | "pending" | "confirmed";
            /**
             * @description Indicates the base currency for the bank file. Applies to multi-currency companies.
             * @example AUD
             */
            currency?: string;
            /** @description References the bank account associated with the bank file. */
            readonly bankAccount?: {
                /**
                 * @description Unique key for the bank account.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the bank account.
                 * @example 23
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the bank account.
                 * @example /objects/cash-management/checking-account/23
                 */
                readonly href?: string;
                /**
                 * @description Name of the bank account.
                 * @example AU Account
                 */
                name?: string;
            };
            /** @description References a collection of bank file details, such as payment details and bank file errors related to the bank file. */
            bankFileDetails?: components["schemas"]["objects.cash-management.bank-file-detail"][];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Bank file details are associated with a bank file and provide detailed information about a bank file payment transaction, such as payment details and bank file errors. */
        "objects.cash-management.bank-file-detail": {
            /**
             * @description System-assigned unique key for the bank file detail object.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the bank file detail object. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bank file detail object.
             * @example /objects/cash-management/bank-file-detail/23
             */
            readonly href?: string;
            /**
             * @description Identifier for the bank file payment transaction.
             * @example 1579
             */
            paymentId?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies the amount for the bank file payment transaction.
             * @example 1200.45
             */
            amount?: string;
            /**
             * @description Provides a brief description of the bank file payment transaction.
             * @example Bank file payment for INVOICE 1356A43.
             */
            description?: string;
            /**
             * @description Indicates any errors encountered when generating the bank file detail object, including validation or processing errors.
             *
             *     For more information, read about [troubleshooting bank files](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_files_troubleshoot) in the Sage Intacct Help Center.
             */
            bankFileErrors?: string[];
            /** @description References the bank file that contains the payment transactions. */
            readonly bankFile?: {
                /**
                 * @description Unique key for the bank file.
                 * @example 89
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the bank file.
                 * @example 89
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the bank file.
                 * @example /objects/cash-management/bank-file/89
                 */
                readonly href?: string;
            };
            /** @description References the payee (vendor) associated with the bank file transaction. */
            readonly payee?: {
                /**
                 * @description Unique key for the payee.
                 * @example 2107
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the payee.
                 * @example VEN016
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the payee.
                 * @example /objects/accounts-payable/vendor/2107
                 */
                readonly href?: string;
                /**
                 * @description Name of the payee.
                 * @example AAA Consulting
                 */
                readonly name?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Generate a bank file request */
        "cash-management-generate-bank-file-generate-request": {
            /** @description References a collection of payment keys to include in the generated bank file. */
            paymentKeys?: string[];
        };
        /**
         * @description Generate a bank file response
         * @example {
         *       "ia::result": [
         *         {
         *           "key": "1221",
         *           "href": "/objects/cash-management/bank-file/1221",
         *           "ia::status": 422,
         *           "ia::error": {
         *             "message": "1221: Please provide a valid value for 'Beneficiary name' to VENDOR 'BankfileTest001' must contain at least 1 character and no more than 18 characters. [Support ID: PMkdcWEB300%7EaLBE_P3a0-z8fYM-QmCD1wAAAAY]"
         *           }
         *         },
         *         {
         *           "key": "977",
         *           "href": "/objects/cash-management/generate-bank-file/977",
         *           "ia::status": 204
         *         }
         *       ],
         *       "ia::meta": {
         *         "totalError": 1,
         *         "totalSuccess": 1,
         *         "totalCount": 2
         *       }
         *     }
         */
        "cash-management-generate-bank-file-generate-response": {
            /** @description Provides a collection of payments included in the generated bank file. */
            "ia::result"?: {
                /** @description Unique key for a payment record in the generated bank file. */
                key?: string;
                href?: string;
                /** @description Specifies the HTTP status code for the operation. */
                "ia::status"?: number;
                /** @description Provides error details if the operation failed for a specific payment record in the generated bank file. */
                "ia::error"?: {
                    message?: string;
                };
            }[];
            /** @description Provides the metadata for the response, including the total count of records processed, total successful records, and total error records. */
            "ia::meta"?: {
                /** @description Total number of failed records. */
                totalError?: number;
                /** @description Total number of successful records. */
                totalSuccess?: number;
                /** @description Total number of records processed. */
                totalCount?: number;
            };
        };
        /** @description Bank feeds allow you to access transaction records for bank reconciliations directly using Sage Cloud Services, or you can provide your own transaction records as XML elements. */
        "objects.cash-management.bank-feed": {
            /**
             * @description System-assigned unique key for the bank feed.
             * @example 101
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the bank feed.
             * @example 101
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bank feed.
             * @example /objects/cash-management/bank-feed/101
             */
            readonly href?: string;
            /** @description References the bank account associated with the bank feed. */
            financialAccount?: {
                /**
                 * @description Identifier for the bank account.
                 * @example BOA
                 */
                id?: string;
                /**
                 * @description Unique key for the bank account.
                 * @example 38
                 */
                key?: string;
                /**
                 * @description Name of the bank account.
                 * @example Bank of America
                 */
                readonly name?: string;
                /**
                 * @description Indicates the type of bank account.
                 * @example bank
                 * @enum {string}
                 */
                readonly accountType?: "bank" | "creditCard";
                /**
                 * @description URL endpoint for the bank account.
                 * @example /objects/cash-management/bank-account/38
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Specifies the date of the bank feed.
             * @example 2025-04-01
             */
            feedDate?: string;
            /**
             * @description Specifies the type of bank feed:
             *
             *       * `online` - Indicates that the bank feed data is retrieved online through a direct connection to the bank through Sage Cloud Services.
             *       * `xml` - Uses XML format to provide bank feed data, allowing you to upload transaction records for bank reconciliations directly using XML files.
             *       * `csv` - Provides bank feed data in CSV format, allowing you to upload transaction records for bank reconciliations directly using CSV files.
             *       * `qif` - Uses files in QIF format to provide bank feed data, allowing you to upload transaction records for bank reconciliations directly using QIF files.
             * @example xml
             * @enum {string}
             */
            feedType?: "xml" | "online" | "csv" | "qif";
            /**
             * @description Indicates the file name for the bank feed.
             * @example bank-feed-import-1000-1100.csv
             */
            readonly fileName?: string;
            /**
             * @description Indicates the current state of the bank feed.
             * @default processed
             * @example processed
             * @enum {string}
             */
            readonly feedState?: "inProgress" | "processed" | "failed";
            /** @description Represents a collection of bank transaction records associated with the bank feed. */
            transactions?: components["schemas"]["objects.cash-management.bank-transaction"][];
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description Identifier for an error associated with the bank feed.
             * @example 1
             */
            readonly errorId?: string | null;
            /**
             * @description Indicates an error message for the bank feed.
             * @example Error - no transactions received.
             */
            readonly errorMessage?: string | null;
            /** @description Specifies the entity associated with the bank feed. */
            readonly entity?: {
                /**
                 * @description Identifier for the entity.
                 * @example 1
                 */
                readonly id?: number;
                /**
                 * @description Unique key for the entity.
                 * @example 1
                 */
                readonly key?: number;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/1
                 */
                readonly href?: string;
            };
            /**
             * @description Identifier for an import associated with the bank feed.
             * @example 0e26366f-cc60-4638-a1d3-d96a5282b313
             */
            readonly importId?: string;
            /**
             * @description Indicates the number of transactions downloaded from the bank feed.
             * @example 5
             */
            readonly downloadedTxnQuantity?: number;
            /**
             * @description Indicates the number of expected transactions from the bank feed.
             * @example 10
             */
            readonly expectedTxnQuantity?: number;
            /**
             * @description Specifies the current file status for the imported bank feed.
             * @default loading
             * @example loading
             * @enum {string|null}
             */
            readonly importedFileStatus?: "initiated" | "loading" | "completed" | "partiallyDeleted" | "deleted" | "canceled" | null;
            /** @description References the user who uploaded the bank feed. */
            readonly addedByUser?: {
                /**
                 * @description Unique key for the user.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the user.
                 * @example 1
                 */
                readonly id?: string;
                /**
                 * @description Name of the user.
                 * @example John Smith
                 */
                readonly userName?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/1
                 */
                readonly href?: string;
            };
        };
        "cash-management-bank-feedRequiredProperties": {
            financialAccount?: Record<string, never>;
        };
        /** @description A bank reconciliation represents a reconciliation run that compares bank statement activity with posted accounting transactions. */
        "objects.cash-management.bank-reconciliation": {
            /**
             * @description System-assigned unique key for the bank reconciliation.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the bank reconciliation. This value is the same as the `key` for this object.
             * @example 2
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bank reconciliation.
             * @example /objects/cash-management/bank-reconciliation/2
             */
            readonly href?: string;
            /** @description Bank account being reconciled against the bank statement. */
            bankAccount?: {
                /**
                 * @description Identifier for the bank account.
                 * @example BOA
                 */
                id?: string;
                /**
                 * @description Unique key for the bank account.
                 * @example 38
                 */
                key?: string;
                /**
                 * @description URL endpoint for the bank account.
                 * @example /objects/cash-management/bank-account/38
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Final date of the bank statement being reconciled.
             * @example 2026-03-31
             */
            reconciliationDate?: string;
            /**
             * Format: date
             * @description Cutoff date used to calculate the beginning balance for reconciliation.
             * @example 2026-01-31
             */
            cutoffDate?: string;
            /**
             * Format: decimal-precision-2
             * @description Final balance reported on the bank statement being reconciled.
             * @example 100003.56
             */
            endingBalance?: string;
            /**
             * @description Matching method used to reconcile the bank statement with accounting transactions:
             *
             *     * `manual` - Manually match and clear transactions.
             *     * `automatch` - Sage Intacct matches and clears transactions based on the applied rule set.
             *     * `automatchWithReview` - Sage Intacct proposes matches to be reviewed and confirmed before clearing.
             * @example automatchWithReview
             * @enum {string}
             */
            reconciliationMode?: "manual" | "automatch" | "automatchWithReview";
            reconciliationStatus?: components["schemas"]["reconciliation-status"];
            /**
             * @description Source format of the bank statement transactions being reconciled:
             *
             *     * `online` - Transactions are imported via a live bank feed through Sage Cloud Services.
             *     * `xml` - Transactions are provided in Extensible Markup Language (XML) format.
             *     * `csv` - Transactions are imported from a Comma-Separated Values (CSV) file.
             *     * `qif` - Transactions are provided in Quicken Interchange Format (QIF).
             * @default null
             * @example online
             * @enum {string|null}
             */
            feedType?: null | "xml" | "online" | "csv" | "qif";
            /**
             * @description Indicates whether this reconciliation has been reopened after it was previously closed.
             * @default false
             * @example false
             */
            readonly isReopened?: boolean;
            /** @description References a collection of bank reconciliation source records associated with this bank reconciliation. */
            readonly reconciliationSourceRecords?: components["schemas"]["objects.cash-management.bank-reconciliation-record"][];
            audit?: components["schemas"]["audit.s1"];
            /** @description Supporting document attached to the bank reconciliation, such as a bank statement or reconciliation report. */
            attachment?: {
                /**
                 * @description Unique key for the supporting document.
                 * @example 19
                 */
                key?: string;
                /**
                 * @description Identifier for the supporting document.
                 * @example Bank_Statement_003
                 */
                id?: string;
                /**
                 * @description URL endpoint for the supporting document.
                 * @example /objects/company-config/attachment/19
                 */
                readonly href?: string;
            };
        };
        "cash-management-bank-reconciliationRequiredProperties": Record<string, never>;
        /** @description A bank reconciliation record represents a single transaction line used in bank reconciliation. */
        "objects.cash-management.bank-reconciliation-record": {
            /**
             * @description System-assigned unique key for the bank reconciliation record.
             * @example 1796
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the bank reconciliation record. This value is the same as the `key` for this object.
             * @example 1796
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bank reconciliation record.
             * @example /objects/cash-management/bank-reconciliation-record/1796
             */
            readonly href?: string;
            /** @description References the bank account to be reconciled. */
            readonly bankAccount?: {
                /**
                 * @description Identifier for the bank account.
                 * @example CITI
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the bank account.
                 * @example 39
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the bank account.
                 * @example /objects/cash-management/bank-account/39
                 */
                readonly href?: string;
            };
            /** @description Transaction details and related references for the bank reconciliation record. */
            readonly txnInformation?: {
                /**
                 * @description Specifies the type of transaction associated with the reconciliation record, for example, a `withdrawal` or a `deposit`.
                 * @example withdrawal
                 * @enum {string}
                 */
                readonly txnType?: "withdrawal" | "deposit";
                /**
                 * @description Provides a document number associated with the reconciliation record, for example, a check number.
                 * @example CHK100
                 */
                documentNumber?: string;
                /**
                 * Format: date
                 * @description Indicates the date of the document associated with the reconciliation record, for example, the issue date of a check.
                 * @example 2026-03-01
                 */
                documentDate?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Specifies the value of the bank transaction in the original transaction currency.
                 * @example 1377.22
                 */
                txnAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Specifies the value of the bank transaction converted into the company base currency.
                 * @example 1000.00
                 */
                baseAmount?: string;
                /**
                 * @description Indicates the currency in which the original bank transaction was recorded.
                 * @example AUD
                 */
                txnCurrency?: string;
                /**
                 * @description Represents the base currency used by the company for accounting and financial reporting.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * Format: date
                 * @description Indicates the date the transaction is recorded in the General Ledger (GL).
                 * @example 2026-03-30
                 */
                postingDate?: string;
                postingState?: components["schemas"]["transaction-state"];
                /**
                 * @description Specifies the identifier of the vendor receiving the payment.
                 * @example Business Software Inc.
                 */
                payee?: string;
                /**
                 * @description Provides a brief description with context about the transaction.
                 * @example Travel reimbursement - client visit - New York.
                 */
                description?: string;
                recordType?: components["schemas"]["record-type"];
                /** @description References the specific line in the associated journal entry. */
                readonly journalEntryLine?: {
                    /**
                     * @description Unique key for the journal entry line.
                     * @example 10
                     */
                    readonly key?: string;
                    /**
                     * @description Identifier for the journal entry line.
                     * @example 10
                     */
                    readonly id?: string;
                    /**
                     * @description URL endpoint for the journal entry line.
                     * @example /objects/general-ledger/journal-entry-line/10
                     */
                    readonly href?: string;
                };
                /** @description References the subledger record associated with the transaction. */
                readonly subledgerRecord?: {
                    /**
                     * @description Unique key of the subledger record.
                     * @example 12
                     */
                    readonly key?: string;
                    /**
                     * @description Identifier of the subledger record.
                     * @example 12
                     */
                    readonly id?: string;
                    /**
                     * @description URL endpoint for the subledger record.
                     * @example /objects/accounts-payable/subledger-record/12
                     */
                    readonly href?: string;
                };
                /** @description References an outstanding transaction that had not cleared the bank as of the last reconciliation, but was included in the opening General Ledger (GL) balance in Sage Intacct. */
                readonly initialOpenItem?: {
                    /**
                     * @description Unique key for the initial open item.
                     * @example 2
                     */
                    readonly key?: string;
                    /**
                     * @description Identifier for the initial open item.
                     * @example 2
                     */
                    readonly id?: string;
                    /**
                     * @description URL endpoint for the initial open item.
                     * @example /objects/cash-management/initial-open-item/2
                     */
                    readonly href?: string;
                };
                /** reconciliationInformation */
                readonly reconciliationInformation?: {
                    /**
                     * @description Indicates the match status of the transaction during the reconciliation process:
                     *
                     *     * `unmatched` - Posted but not yet matched for reconciliation.
                     *     * `matched` - Fully matched for reconciliation.
                     *     * `cleared` - Matched and cleared in reconciliation.
                     *     * `partiallyMatched` - Partially matched for reconciliation.
                     *     * `selectedToMatch` - Selected to match in reconciliation.
                     *     * `selectedToUnmatch` - Selected to un-match in reconciliation.
                     *     * `draftMatched` - Created in draft state and already matched for reconciliation.
                     * @example cleared
                     * @enum {string}
                     */
                    readonly state?: "unmatched" | "cleared" | "matched" | "partiallyMatched" | "selectedToMatch" | "selectedToUnmatch" | "draftMatched";
                    /**
                     * Format: date
                     * @description Specifies the date of the last reconciliation.
                     * @example 2026-03-31
                     */
                    readonly lastReconcileDate?: string;
                };
            };
            audit?: components["schemas"]["audit.s1"];
            /** @description References the bank account reconciliation associated with the reconciliation record. */
            bankReconciliation?: {
                /**
                 * @description Unique key for the bank reconciliation.
                 * @example 143
                 */
                key?: string;
                /**
                 * @description Identifier for the bank reconciliation.
                 * @example 143
                 */
                id?: string;
                /**
                 * @description URL endpoint for the bank reconciliation.
                 * @example /objects/cash-management/bank-reconciliation/143
                 */
                readonly href?: string;
                /**
                 * Format: date
                 * @description Indicates the final date of the bank statement being reconciled.
                 * @example 2026-03-31
                 */
                readonly reconciliationDate?: string;
            };
        };
        /** @description Reopen workflow action for bank reconciliation. */
        "cash-management-bank-reconciliation-actions-reopen-request": {
            /**
             * @description System-assigned unique key for the bank reconciliation.
             * @example 12
             */
            key: string;
            /**
             * @description Unique identifier for the bank account in this reconciliation.
             * @example BOA
             */
            bankAccountId: string;
            /**
             * Format: date
             * @description Specifies the date of the reconciliation.
             * @example 2025-01-23
             */
            reconciliationDate: string;
        };
        "cash-management-bank-reconciliation-actions-reopen-response": {
            /**
             * @description System-assigned unique key for the bank reconciliation.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the bank account in this reconciliation.
             * @example BOA
             */
            readonly bankAccountId?: string;
            /**
             * @description Indicates the current state of the bank reconciliation.
             * @example reopened
             */
            readonly state?: string;
            /**
             * @description Specifies the bank reconciliation reopen message, containing information about number of reconciliations reopened and their duration.
             * @example Number of reconciliations to reopen and reconcile again - 1, from 05/31/2025 to 06/05/2025.
             */
            readonly message?: string;
        };
        /** @description An account reconciliation source record represents a posted transaction that is used during reconciliation. */
        "objects.cash-management.reconciliation-source-record": {
            /**
             * @description System-assigned unique key for the account reconciliation source record.
             * @example 21
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the account reconciliation source record. This value is the same as the `key` for this object.
             * @example 21
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the account reconciliation source record.
             * @example /objects/cash-management/reconciliation-source-record/21
             */
            readonly href?: string;
            /**
             * @description Name of the bank account to be reconciled.
             * @example Bank of America
             */
            bankAccountName?: string;
            /** @description Transaction details and related references for the reconciliation source record. */
            readonly txnInformation?: {
                /**
                 * @description Transaction type, which can be a `withdrawal` or a `deposit`.
                 * @example withdrawal
                 * @enum {string}
                 */
                readonly txnType?: "withdrawal" | "deposit";
                /**
                 * @description Document or check number for the transaction.
                 * @example CHK100
                 */
                documentNumber?: string;
                /**
                 * Format: date
                 * @description Date of the transaction document, such as the issue date of a check or the posting date of a bank entry.
                 * @example 2026-01-12
                 */
                documentDate?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The value of the transaction in its original transaction currency.
                 * @example 1377.22
                 */
                txnAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The value of the transaction converted into the company's base currency.
                 * @example 1000.00
                 */
                baseAmount?: string;
                /**
                 * @description The currency in which the original transaction was recorded.
                 * @example AUD
                 */
                txnCurrency?: string;
                /**
                 * @description The base currency used by the company for accounting and financial reporting.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * Format: date
                 * @description The date the transaction is recorded in the general ledger.
                 * @example 2026-01-23
                 */
                postingDate?: string;
                postingState?: components["schemas"]["transaction-state"];
                /**
                 * @description Payee for the transaction.
                 * @example Business Software Inc.
                 */
                payee?: string;
                /**
                 * @description A brief explanation providing context about the transaction.
                 * @example Travel reimbursement - client visit - New York.
                 */
                description?: string;
                recordType?: components["schemas"]["record-type"];
                /** @description Reference to the specific line item in the associated journal entry. */
                readonly journalEntryLine?: {
                    /**
                     * @description Unique key for the journal entry line.
                     * @example 10
                     */
                    key?: string;
                    /**
                     * @description Identifier for the journal entry line.
                     * @example 10
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the journal entry line.
                     * @example /objects/general-ledger/journal-entry-line/10
                     */
                    readonly href?: string;
                };
                /** @description Reference to the subledger record associated with the transaction. */
                readonly subledgerRecord?: {
                    /**
                     * @description Unique key of the subledger record.
                     * @example 12
                     */
                    key?: string;
                    /**
                     * @description Identifier of the subledger record.
                     * @example 12
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the subledger record.
                     * @example /objects/accounts-payable/subledger-record/12
                     */
                    readonly href?: string;
                };
                /** @description Reference to an outstanding transaction that had not cleared the bank as of the last reconciliation, but was included in the opening general ledger balance in Sage Intacct. */
                readonly initialOpenItem?: {
                    /**
                     * @description Unique key for the initial open item.
                     * @example 2
                     */
                    key?: string;
                    /**
                     * @description Identifier for the initial open item.
                     * @example 2
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the initial open item.
                     * @example /objects/cash-management/initial-open-item/2
                     */
                    readonly href?: string;
                };
                /**
                 * @description Indicates the match status of the transaction during the reconciliation process:
                 *
                 *     * `unmatched` - posted but not yet matched for reconciliation.
                 *     * `matched` - fully matched for reconciliation.
                 *     * `cleared` - matched and cleared in reconciliation.
                 *     * `partiallyMatched` - partially matched for reconciliation.
                 *     * `selectedToMatch` - selected to match in reconciliation.
                 *     * `selectedToUnmatch` - selected to un-match in reconciliation.
                 *     * `draftMatched` - created in draft state and already matched for reconciliation.
                 * @example cleared
                 * @enum {string}
                 */
                readonly reconciliationState?: "unmatched" | "cleared" | "matched" | "partiallyMatched" | "selectedToMatch" | "selectedToUnmatch" | "draftMatched";
                /**
                 * @description Letter-based identifier that groups transactions matched during reconciliation; lowercase values indicate in-progress matches, and uppercase values indicate finalized matches.
                 * @example aa|aus|bb
                 */
                matchingSequence?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Initial open items consist of outstanding checks, deposits, or other transactions that had not cleared the bank when you last reconciled the account but that were included in your opening General Ledger balances in Sage Intacct. */
        "objects.cash-management.initial-open-item": {
            /**
             * @description System-assigned unique key for the initial open item.
             * @example 16
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the initial open item. This value is the same as the `key` for this object.
             * @example 16
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the initial open item.
             * @example /objects/cash-management/initial-open-item/16
             */
            readonly href?: string;
            /**
             * @description Identifier for the bank account being reconciled.
             * @example BOA
             */
            readonly bankAccountId?: string;
            txnInformation?: {
                /**
                 * @description Type of transaction.
                 * @example charge
                 */
                readonly txnType?: string;
                /**
                 * @description Check number or document number.
                 * @example AUTO ENTRY
                 */
                readonly documentNumber?: string;
                /**
                 * Format: date
                 * @description Date of the document.
                 * @example 2025-10-12
                 */
                readonly documentDate?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Base amount of the transaction.
                 * @example 3436.72
                 */
                readonly baseAmount?: string;
                /**
                 * @description Payee associated with the transaction.
                 * @example Opening Balance
                 */
                readonly payee?: string;
                /**
                 * @description Description of the transaction.
                 * @example Balance Forward as of Beginning Balance Cut off Date - 01/01/2026
                 */
                readonly description?: string;
                /**
                 * @description Indicates whether the initial open item is cleared.
                 * @default false
                 * @example false
                 */
                readonly isCleared?: boolean;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Transaction record containing charges made to credit and debit cards. */
        "objects.cash-management.credit-card-txn": {
            /**
             * @description System-assigned unique key for the credit card transaction.
             * @example 1001
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the transaction.
             * @example 1001
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the transaction.
             * @example /objects/cash-management/credit-card-txn/1001
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Date of the transaction.
             * @example 2021-11-30
             */
            txnDate?: string;
            /** @description Credit card account used for this transaction. */
            creditCardAccount?: {
                /**
                 * @description Unique key for the credit card account.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Unique identifier for the credit card account.
                 * @example amex-card-1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the credit card account.
                 * @example /objects/cash-management/credit-card-account/3
                 */
                readonly href?: string;
            };
            /**
             * @description Reference number for the transaction, such as the transaction number from the credit card statement.
             * @example Ref--cc12
             */
            referenceNumber?: string;
            /**
             * @description Name of the payee for the transaction.
             * @example Vend-1
             */
            payee?: string;
            /**
             * @description Brief description of the purpose of the transaction.
             * @example Meals
             */
            description?: string;
            /** @description Supporting document attached to this transaction. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the attachment.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/1
                 */
                readonly href?: string;
            };
            /** @description Currency details for the transaction. */
            currency?: {
                /**
                 * @description The base currency for the entity or company.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * @description For multi-currency companies, the currency in which the transaction was incurred.
                 * @example GBP
                 */
                txnCurrency?: string;
                /**
                 * exchangeRate
                 * @description Exchange rate used to calculate the base amount for this transaction.
                 */
                exchangeRate?: {
                    /**
                     * Format: date
                     * @description Date of the exchange rate used to calculate the base amount from the transaction amount.
                     * @example 2021-01-23
                     */
                    date?: string;
                    /**
                     * @description Exchange rate used to calculate the base amount from the transaction amount.
                     * @example 1.0789
                     */
                    rate?: number;
                    /**
                     * @description Exchange rate type used to calculate the base amount from the transaction amount.
                     * @example Intacct Daily Rate
                     */
                    typeId?: string;
                };
            };
            /**
             * Format: decimal-precision-2
             * @description Total amount entered for the transaction in the company's base currency.
             * @example 1500.01
             */
            readonly totalEntered?: string;
            /**
             * Format: decimal-precision-2
             * @description For multi-currency companies, the total amount entered in the transaction currency.
             * @example 2500.10
             */
            readonly txnTotalEntered?: string;
            /**
             * Format: decimal-precision-2
             * @description Total amount paid for the transaction in the company's base currency.
             * @example 101.00
             */
            readonly totalPaid?: string;
            /**
             * Format: decimal-precision-2
             * @description For multi-currency companies, the total amount paid in the transaction currency.
             * @example 200.10
             */
            readonly txnTotalPaid?: string;
            /**
             * Format: date
             * @description Date the transaction was paid.
             * @example 2021-01-23
             */
            readonly whenPaid?: string;
            /**
             * @description Current state of the credit card transaction.
             *     When a credit card transaction has been issued and is in a `posted` state, it can be reversed. When a credit card transaction is reversed, the original `posted` transaction immediately enters the `reversal` state and transitions to the `reversed` state once the reversal date is reached.
             *     A reversal transaction is also created in the `reversal` state when you reverse a credit card transaction. The state of the reversal transaction does not change.
             * @example posted
             * @enum {string}
             */
            readonly state?: "reversed" | "reversal" | "posted" | "paid" | "partiallyPaid" | "selected" | "noValue";
            /**
             * @description Indicates if this transaction has been cleared or matched for card account reconciliation.
             * @default uncleared
             * @example cleared
             * @enum {string}
             */
            reconciliationState?: "cleared" | "uncleared" | "matched";
            /**
             * Format: date
             * @description Date when the transaction was cleared as part of the reconciliation process.
             * @example 2024-01-23
             */
            readonly clearingDate?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Total amount due for the transaction in the company's base currency.
             * @example 1600.00
             */
            readonly totalDue?: string;
            /**
             * Format: decimal-precision-2
             * @description Total amount due in the transaction currency.
             * @example 1000.45
             */
            readonly txnTotalDue?: string;
            /**
             * Format: decimal-precision-2
             * @description Total amount selected for the transaction in the company's base currency.
             * @example 1234.67
             */
            readonly totalSelected?: string;
            /**
             * Format: decimal-precision-2
             * @description Total amount selected in the transaction currency.
             * @example 1234.56
             */
            readonly txnTotalSelected?: string;
            /**
             * @description Indicates whether the transaction is tax inclusive.
             * @default false
             * @example true
             */
            isInclusiveTax?: boolean;
            /**
             * @description Source of the transaction. For transactions auto-created from a bank feed, this value is `bank`, otherwise the value is null.
             * @default null
             * @example bank
             * @enum {string|null}
             */
            readonly transactionSource?: null | "bank";
            /** @description For transactions with a state of `reversed`, a reference to the transaction that reversed this transaction. */
            readonly reversedBy?: {
                /**
                 * @description Unique key for the reversing transaction.
                 * @example 221
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the reversing transaction.
                 * @example 221
                 */
                readonly id?: string;
                /**
                 * Format: date
                 * @description Date the transaction was reversed.
                 * @example 2021-01-23
                 */
                readonly reversalDate?: string;
                /**
                 * @description URL endpoint for the reversing transaction.
                 * @example /objects/cash-management/credit-card-txn/221
                 */
                readonly href?: string;
            };
            /** @description For transactions with a state of `reversal`, a reference to the transaction that was reversed by this transaction. */
            readonly reversalOf?: {
                /**
                 * @description Unique key for the reversed transaction.
                 * @example 125
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the reversed transaction.
                 * @example 125
                 */
                readonly id?: string;
                /**
                 * Format: date
                 * @description Date of the reversed transaction.
                 * @example 2021-10-22
                 */
                readonly txnDate?: string;
                /**
                 * @description URL endpoint for the reversed transaction.
                 * @example /objects/cash-management/credit-card-txn/125
                 */
                readonly href?: string;
            };
            /** @description Tax solution used to calculate and capture taxes on this transaction. */
            taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 4
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax solution.
                 * @example Australia GST
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/4
                 */
                readonly href?: string;
            };
            /** @description Line items for the credit card transaction. */
            lines?: components["schemas"]["objects.cash-management.credit-card-txn-line"][];
            readonly audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Date and time when the credit card transaction was created.
                 * @example 2025-10-01T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            entity?: components["schemas"]["entity-ref"];
        };
        "cash-management-credit-card-txnRequiredProperties": {
            creditCardAccount?: unknown;
            currency?: unknown;
            lines?: unknown[];
        };
        "cash-management-credit-card-txn-actions-reverse-request": {
            /**
             * @description System-assigned key for the original credit card transaction.
             * @example 49
             */
            key?: string;
            /**
             * Format: date
             * @description Specifies the date of the credit card transaction reversal.
             * @example 2024-04-15
             */
            reversedDate?: string;
            /**
             * @description Provides brief descriptive notes about the reason for the reversal.
             * @example Credit card transaction charged in error.
             */
            memo?: string;
        };
        "cash-management-credit-card-txn-actions-reverse-response": {
            /**
             * @description System-assigned unique record key for the credit card transaction reversal.
             * @example 50
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the credit card transaction reversal. This is the same as `key` for this object.
             * @example 50
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the credit card transaction reversal.
             * @example /objects/cash-management/credit-card-txn/50
             */
            readonly href?: string;
            /**
             * @description Indicates the state of the credit card transaction after reversal.
             * @example reversed
             */
            readonly state?: string;
        };
        /** @description Line items in a credit card transaction represent charges applied to credit and debit cards. */
        "objects.cash-management.credit-card-txn-line": {
            /**
             * @description Unique identifier for the credit card transaction line item.
             * @example 62
             */
            readonly id?: string;
            /**
             * @description System-assigned unique key for the line item.
             * @example 62
             */
            readonly key?: string;
            /**
             * @description URL endpoint for the line item.
             * @example /objects/cash-management/credit-card-txn-line/62
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount for the line item in your company's base currency, which is calculated based on the exchange rate defined in the header.
             * @example 3000.54
             */
            readonly amount?: string;
            /**
             * Format: decimal-precision-2
             * @description For multi-currency companies, amount of the line item.
             * @example 100.99
             */
            totalTxnAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description For multi-currency companies, the amount of the line item in the transaction currency.
             * @example 2003.00
             */
            txnAmount?: string;
            /** @description Currency details for the credit card transaction. */
            readonly currency?: {
                /**
                 * @description Base currency for the entity or company.
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /**
                 * @description For multi-currency companies, the currency for the line item.
                 * @example GBP
                 */
                readonly txnCurrency?: string;
                /**
                 * exchangeRate
                 * @description Exchange rate used to calculate the base amount for this line item.
                 */
                readonly exchangeRate?: {
                    /**
                     * Format: date
                     * @description Date of the exchange rate used to calculate the base amount from the transaction amount.
                     * @example 2021-01-23
                     */
                    readonly date?: string;
                    /**
                     * @description Exchange rate used to calculate the base amount from the transaction amount.
                     * @example 1.0789
                     */
                    readonly rate?: number;
                };
            };
            /**
             * @description Additional information about the line item.
             * @example Entertainment charges
             */
            description?: string;
            /**
             * @description Line number for the line item.
             * @example 1
             */
            readonly lineNumber?: number;
            /**
             * Format: decimal-precision-2
             * @description Total paid for the line item in the company's base currency.
             * @example 777.10
             */
            readonly totalPaid?: string;
            /**
             * Format: decimal-precision-2
             * @description In multi-currency companies, total paid for the line item in the transaction currency.
             * @example 1000.99
             */
            readonly txnTotalPaid?: string;
            /**
             * @description Indicates whether a line item is billable.
             * @default false
             * @example true
             */
            isBillable?: boolean;
            /**
             * @description Indicates whether a line item is already billed.
             * @default false
             * @example false
             */
            isBilled?: boolean;
            /** @description Label for the accounts payable account associated with the line item. */
            accountLabel?: {
                /**
                 * @description Unique key for the account label.
                 * @example 14
                 */
                key?: string;
                /**
                 * @description Unique identifier for the account label.
                 * @example Entertainment
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account label.
                 * @example /objects/accounts-payable/account-label/14
                 */
                readonly href?: string;
            };
            glAccount?: components["schemas"]["gl-account-ref"];
            /** @description Specific tax information that applies to the line item. */
            taxDetail?: {
                /**
                 * @description Unique key for the tax detail.
                 * @example 5
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax detail.
                 * @example CATAXDETAIL
                 */
                id?: string;
                /**
                 * @description Percentage rate of tax used for the line item.
                 * @example 1.0299
                 */
                taxRate?: number;
                /**
                 * @description URL endpoint for the tax detail.
                 * @example /objects/tax/purchasing-tax-detail/5
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Standard Sage Intacct dimension that allows you to create a hierarchy of locations to reflect how your company is organized.
                 */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 4
                     */
                    key?: string;
                    /**
                     * @description Unique identifier of the location.
                     * @example AU
                     */
                    id?: string;
                    /**
                     * @description Name of the location.
                     * @example Australia
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/4
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Standard Sage Intacct dimension that allows you to create a hierarchy of departments to reflect how your company is organized.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 9
                     */
                    key?: string;
                    /**
                     * @description Unique identifier of the department.
                     * @example 01
                     */
                    id?: string;
                    /**
                     * @description Name of the department.
                     * @example Accounting
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
            };
            /** @description Base location for the line item in multi-entity companies. */
            baseLocation?: components["schemas"]["location-ref"] & {
                /**
                 * @description Base location key.
                 * @example 4
                 */
                key?: string;
            };
            /** @description Credit card transaction that contains the line items. */
            readonly creditCardTxn?: {
                /**
                 * @description Unique key for the credit card transaction.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the credit card transaction.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the credit card transaction.
                 * @example /objects/cash-management/credit-card-txn/100
                 */
                readonly href?: string;
            };
            readonly audit?: components["schemas"]["audit.s1"];
            /** @description Tax Entries of the credit card transaction line item. */
            taxEntries?: components["schemas"]["objects.cash-management.credit-card-txn-tax-entry"][];
        };
        /** @description Tax entry details for credit card transaction line items. */
        "objects.cash-management.credit-card-txn-tax-entry": {
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
            /** @description Specifies tax information for individual line items in credit card transactions, including entries relating to accounts receivable, accounts payable and purchasing. */
            purchasingTaxDetail?: {
                /**
                 * @description System-assigned unique key for the purchasing tax detail.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier of the purchasing tax detail.
                 * @example Alaska Tax Detail
                 */
                id?: string;
                /**
                 * @description URL endpoint of the purchasing tax detail.
                 * @example /objects/tax/purchasing-tax-detail/1
                 */
                readonly href?: string;
            };
            /**
             * creditCardTxnLine
             * @description Credit card transaction line item to which this tax information applies.
             */
            readonly creditCardTxnLine?: {
                /**
                 * @description Unique identifier for the credit card transaction line item.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the credit card transaction line item.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the credit card transaction line item.
                 * @example /objects/cash-management/credit-card-txn-line/100
                 */
                readonly href?: string;
            };
        };
        /** @description Credit card transaction templates provide a predefined structure to standardize credit card transactions. */
        "objects.cash-management.credit-card-txn-template": {
            /**
             * @description System-assigned unique key for the credit card transaction template.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the credit card transaction template.
             * @example CC-TXN-001
             */
            id?: string;
            /**
             * @description URL endpoint for the credit card transaction template.
             * @example /objects/cash-management/credit-card-txn-template/23
             */
            readonly href?: string;
            /**
             * @description Name for the credit card transaction template.
             * @example CC-TXN-001 - Business Purchases - Office Supplies
             */
            name?: string;
            /**
             * @description Description for the credit card transaction template.
             * @example Credit card transaction template for purchasing business office supplies
             */
            description?: string;
            /**
             * @description Payee associated with the credit card transactions using this template.
             * @example Office Solutions
             */
            payee?: string;
            /**
             * @description Number of rules associated with this credit card transactions using this template.
             * @default 0
             * @example 1
             */
            readonly numberOfRulesUsingTemplate?: number;
            /**
             * @description Defines how tax-related details are handled for credit card transactions using this template. Only applies to companies using the Taxes application.
             * @default null
             * @example inbound
             * @enum {string|null}
             */
            taxImplication?: null | "none" | "inbound";
            /**
             * @description Specifies whether credit card transactions using this template are inclusive of tax. Only applies to companies using the Taxes application.
             * @default true
             * @example false
             */
            readonly isInclusiveTax?: boolean;
            /** @description Defines the tax structure to be applied to credit card transactions using this template. Only applies to companies using the Taxes application. */
            taxSchedule?: {
                /**
                 * @description Unique key for the tax schedule.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description Unique identifier of the tax schedule.
                 * @example 11
                 */
                id?: string;
                /**
                 * @description Name for the tax schedule.
                 * @example PO-TaxSched-0011
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the tax schedule.
                 * @example /objects/tax/purchasing-tax-schedule/11
                 */
                readonly href?: string;
            };
            /** @description Specifies the tax solution used to calculate or manage taxes for credit card transactions using this template. Only applies to companies using the Taxes application. */
            taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax solution.
                 * @example Australia - GST
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/2
                 */
                readonly href?: string;
            };
            /** @description Line items for the credit card transactions using this template. */
            lines?: components["schemas"]["objects.cash-management.credit-card-txn-line-template"][];
            readonly audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Date and time of the submission.
                 * @example 2024-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
        };
        "cash-management-credit-card-txn-templateRequiredProperties": Record<string, never>;
        /** @description Credit card transaction line templates provide a predefined structure to standardize credit card transaction line items. */
        "objects.cash-management.credit-card-txn-line-template": {
            /**
             * @description System-assigned unique key for the credit card transaction line template.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the credit card transaction line template.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the credit card transaction line template.
             * @example /objects/cash-management/credit-card-txn-line-template/23
             */
            readonly href?: string;
            /**
             * @description Memo
             * @example memo-created-by-rule
             */
            memo?: string;
            /**
             * @description Line number for the line items that use this template.
             * @example 1
             */
            lineNumber?: number;
            /**
             * @description Indicates whether the line item is billable.
             * @default false
             * @example true
             */
            isBillable?: boolean;
            /** @description Exchange rate used to calculate the base amount for line items using this template. */
            exchangeRate?: {
                /**
                 * Format: date
                 * @description Date of the exchange rate used to calculate the base amount from the transaction amount. Can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                 * @example 2021-01-23
                 */
                date?: string;
                /**
                 * @description Exchange rate used to calculate the base amount from the transaction amount.
                 * @example 1.0789
                 */
                rate?: number;
                /**
                 * @description Exchange rate type used to calculate the base amount from the transaction amount.
                 * @example 1
                 */
                typeId?: string;
            };
            /** @description Label for the accounts payable account associated with the line item using this template. */
            accountLabel?: {
                /**
                 * @description Unique key for the account label.
                 * @example 14
                 */
                key?: string;
                /**
                 * @description Unique identifier for the account label.
                 * @example Entertainment
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account label.
                 * @example /objects/accounts-payable/account-label/14
                 */
                readonly href?: string;
            };
            /** @description General ledger account the line item is assigned to. */
            glAccount?: {
                /**
                 * @description Unique key for the general ledger account.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Unique identifier for the general ledger account.
                 * @example 1501.01
                 */
                id?: string;
                /**
                 * @description Name or title of the general ledger account.
                 * @example Entertainment
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the general ledger account.
                 * @example /objects/general-ledger/account/2
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"];
            /** @description Credit card transaction template that contains the line items. */
            creditCardTxnTemplate?: {
                /**
                 * @description Unique identifier for the credit card transaction template.
                 * @example 2
                 */
                id?: string;
                /**
                 * @description Unique key for the credit card transaction template.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description URL endpoint for the credit card transaction template.
                 * @example /objects/cash-management/credit-card-txn-template/2
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            readonly audit?: components["schemas"]["audit.s1"];
        };
        /** @description Credit card fees are financial transactions that capture finance charges and other fees for a credit card, such as late charges or monthly interest fees. */
        "objects.cash-management.credit-card-fee": {
            /**
             * @description System-assigned unique key for the credit card fee.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the credit card fee. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the credit card fee.
             * @example /objects/cash-management/credit-card-fee/23
             */
            readonly href?: string;
            /** @description References the credit card account associated with the credit card fee. */
            creditCardAccount?: {
                /**
                 * @description Unique key for the credit card account.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Identifier for the credit card account.
                 * @example AMEX CARD 08235546
                 */
                id?: string;
                /**
                 * @description URL endpoint for the credit card account.
                 * @example /objects/cash-management/credit-card-account/3
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates the reference number for the credit card fee, such as the transaction number for the fee or charge from a credit card statement.
             * @example Fee Reference 102390
             */
            referenceNumber?: string;
            /**
             * Format: date
             * @description Specifies the date when the credit card fee was created.
             * @example 2024-01-23
             */
            txnDate?: string;
            /**
             * @description Provides a brief contextual description for the credit card fee.
             * @example Fee for credit purchase at Office Supplies Inc
             */
            description?: string | null;
            currency?: components["schemas"]["currency"];
            /**
             * Format: decimal-precision-2
             * @description Indicates the total credit card fee amount entered in the company's base currency.
             * @example 11.99
             */
            readonly totalEntered?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the total credit card fee amount entered in the transaction currency, for multi-currency companies.
             * @example 11.99
             */
            readonly txnTotalEntered?: string;
            /**
             * @description Current state of the credit card fee. When a credit card fee has been issued and is in a `posted` state, it can be reversed.
             *
             *     When a credit card fee is reversed, the original `posted` transaction immediately enters the `reversal` state and transitions to the `reversed` state once the reversal date is reached. When you reverse a credit card fee, a corresponding reversal transaction is also created in the `reversal` state. The state of this reversal transaction remains unchanged after creation.
             * @default null
             * @example void
             * @enum {string|null}
             */
            readonly state?: null | "void";
            /**
             * @description Indicates whether the credit card fee is `cleared`, `matched`, or `uncleared` for reconciliation.
             * @default uncleared
             * @example cleared
             * @enum {string}
             */
            reconciliationState?: "cleared" | "uncleared" | "matched";
            /**
             * Format: date
             * @description Date when the transaction was cleared as part of the reconciliation process.
             * @example 2024-01-23
             */
            readonly clearingDate?: string | null;
            /**
             * @description Indicates whether the credit card fee is inclusive of tax. Applies only if the `txnType` is set to `otherFees`. (Taxes subscription)
             * @default false
             * @example true
             */
            isInclusiveTax?: boolean;
            /** @description References the tax solution associated with the credit card fee, used to calculate and capture taxes. (Taxes subscription) */
            taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 4
                 */
                key?: string;
                /**
                 * @description Identifier for the tax solution.
                 * @example Australia GST
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/4
                 */
                readonly href?: string;
            };
            /** @description References the reversing transaction for a credit card fee with a `reversed` state. */
            readonly reversedBy?: {
                /**
                 * @description Unique key for the reversing transaction.
                 * @example 221
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the reversing transaction.
                 * @example 221
                 */
                readonly id?: string | null;
                /**
                 * Format: date
                 * @description Date of the reversing transaction.
                 * @example 2024-01-23
                 */
                readonly reversalDate?: string | null;
                /**
                 * @description URL endpoint for the reversing transaction.
                 * @example /objects/cash-management/credit-card-fee/221
                 */
                readonly href?: string;
            };
            /** @description References the reversed transaction for a credit card fee with a `reversal` state. */
            readonly reversalOf?: {
                /**
                 * @description Unique key for the reversed transaction.
                 * @example 125
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the reversed transaction.
                 * @example 125
                 */
                readonly id?: string | null;
                /**
                 * Format: date
                 * @description Date of the reversed transaction.
                 * @example 2024-01-23
                 */
                readonly txnDate?: string | null;
                /**
                 * @description URL endpoint for the reversed transaction.
                 * @example /objects/cash-management/credit-card-fee/125
                 */
                readonly href?: string;
            };
            /** @description References a supporting document attached to the credit card fee. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 18
                 */
                key?: string | null;
                /**
                 * @description Identifier for the attachment.
                 * @example 18
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/18
                 */
                readonly href?: string;
            };
            /** @description Represents a collection of lines associated with the credit card fee. */
            lines?: components["schemas"]["objects.cash-management.credit-card-fee-line"][];
            readonly audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Specifies the date and time when the credit card fee transaction was created.
                 * @example 2024-01-23T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            entity?: components["schemas"]["entity-ref"];
        };
        "cash-management-credit-card-feeRequiredProperties": {
            creditCardAccount?: unknown;
            lines?: unknown[];
        };
        /** @description Credit card fee lines represent credit card finance charges and other fees associated with a credit card fee. */
        "objects.cash-management.credit-card-fee-line": {
            /**
             * @description System-assigned unique key for the credit card fee line.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the credit card fee line.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the credit card fee line.
             * @example /objects/cash-management/credit-card-fee-line/23
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the credit card fee line amount in your company's base currency. This value is calculated based on the `exchangeRate` specified in the `credit-card-fee`.
             * @example 11.99
             */
            readonly baseAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies the total transaction amount (including tax) for the credit card fee line, applies to multi-currency companies. (Taxes subscription)
             * @example 100.99
             */
            totalTxnAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies the transaction amount for the credit card fee line, applies to multi-currency companies.
             * @example 11.99
             */
            txnAmount?: string;
            /**
             * @description Provides additional contextual information about the credit card fee line.
             * @example Late payment fees applied to the credit card.
             */
            description?: string | null;
            /** @description Represents the currency details for the credit card fee line. */
            currency?: {
                /**
                 * @description Base currency for the associated entity or company.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * @description Transaction currency for the entity or company, applies to multi-currency companies. If this value differs from `baseCurrency`, the `exchangeRate` is also required.
                 * @example USD
                 */
                txnCurrency?: string;
                /**
                 * exchangeRate
                 * @description Determines the exchange rate used to calculate the `baseAmount` for the credit card fee line. This value is required if `txnCurrency` differs from `baseCurrency`.
                 */
                exchangeRate?: {
                    /**
                     * Format: date
                     * @description Effective date of the exchange rate used to calculate the base amount.
                     * @example 2024-01-23
                     */
                    date?: string;
                    /**
                     * @description Exchange rate used to calculate the base amount.
                     * @example 1.0749
                     */
                    rate?: number;
                    /**
                     * @description Type of exchange rate used to calculate the base amount.
                     * @example 1
                     */
                    typeId?: string;
                };
            };
            /** @description References the base location for the credit card fee line in a multi-entity company. */
            baseLocation?: components["schemas"]["location-ref"] & {
                /**
                 * @description Unique key for the base location.
                 * @example 4
                 */
                key?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the credit card fee line.
                 */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 4
                     */
                    key?: string;
                    /**
                     * @description Identifier for the location.
                     * @example AU
                     */
                    id?: string;
                    /**
                     * @description Name of the location.
                     * @example Australia
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/4
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Department associated with the credit card fee line.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 9
                     */
                    key?: string;
                    /**
                     * @description Identifier for the department.
                     * @example 01
                     */
                    id?: string;
                    /**
                     * @description Name of the department.
                     * @example Accounting
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
            };
            /** @description Label for the Accounts Payable (AP) account associated with the credit card fee line. */
            apAccountLabel?: {
                /**
                 * @description Unique key for the AP account label.
                 * @example 14
                 */
                key?: string | null;
                /**
                 * @description Identifier for the AP account label.
                 * @example Accounting Fees
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the AP account label.
                 * @example /objects/accounts-payable/account-label/14
                 */
                readonly href?: string;
            };
            glAccount?: components["schemas"]["gl-account-ref"];
            /** @description References the credit card fee associated with the credit card fee line. */
            readonly creditCardFee?: {
                /**
                 * @description Unique key for the credit card fee.
                 * @example 10
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the credit card fee.
                 * @example 10
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the credit card fee.
                 * @example /objects/cash-management/credit-card-fee/10
                 */
                readonly href?: string;
            };
            readonly status?: components["schemas"]["status"];
            readonly audit?: components["schemas"]["audit.s1"];
            /** @description Represents a collection of tax entries for the credit card fee line. (Taxes subscription) */
            taxEntries?: components["schemas"]["objects.cash-management.credit-card-fee-tax-entry"][];
        };
        /** @description Credit card fee tax entries contain tax entry details for VAT enabled credit card fee lines. */
        "objects.cash-management.credit-card-fee-tax-entry": {
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
            /** @description References the purchasing tax details for the credit card fee line, including entries relating to Accounts Receivable (AR), Accounts Payable (AP) and Purchasing. */
            purchasingTaxDetail?: {
                /**
                 * @description Unique key for the purchasing tax detail.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the purchasing tax detail.
                 * @example Alaska Tax Detail
                 */
                id?: string;
                /**
                 * @description URL endpoint for the purchasing tax detail.
                 * @example /objects/tax/purchasing-tax-detail/1
                 */
                readonly href?: string;
            };
            /**
             * creditCardFeeLine
             * @description References the credit card fee line associated with this tax entry.
             */
            readonly creditCardFeeLine?: {
                /**
                 * @description Identifier for the credit card fee line.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the credit card fee line.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the credit card fee line.
                 * @example /objects/cash-management/credit-card-fee-line/100
                 */
                readonly href?: string;
            };
        };
        "cash-management-credit-card-fee-actions-reverse-request": {
            /**
             * @description System-assigned unique key for the original credit card fee transaction.
             * @example 518
             */
            key: string;
            /**
             * Format: date
             * @description Specifies the date of the credit card fee reversal.
             * @example 2024-01-23
             */
            reversedDate: string;
            /**
             * @description Provides brief descriptive notes about the reason for the reversal.
             * @example Credit card fee charged in error.
             */
            notes?: string;
        };
        "cash-management-credit-card-fee-actions-reverse-response": {
            /**
             * @description System-assigned unique key for the credit card fee reversal transaction.
             * @example 519
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the credit card fee reversal. This is the same as `key` for this object.
             * @example 519
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the credit card fee reversal.
             * @example /objects/cash-management/credit-card-fee/519
             */
            readonly href?: string;
            /**
             * @description Indicates the state of the credit card fee transaction after reversal.
             * @example reversed
             */
            readonly state?: string;
        };
        /** @description A credit card reconciliation represents a reconciliation run that compares credit card statement activity with posted accounting transactions. */
        "objects.cash-management.credit-card-reconciliation": {
            /**
             * @description System-assigned unique key for the credit card reconciliation.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the credit card reconciliation. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the credit card reconciliation.
             * @example /objects/cash-management/credit-card-reconciliation/23
             */
            readonly href?: string;
            /** @description Credit card account being reconciled against the credit card statement. */
            creditCardAccount?: {
                /**
                 * @description Unique key for the credit card account.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Identifier of the credit card account.
                 * @example amex-card-1534267
                 */
                id?: string;
                /**
                 * @description URL endpoint for the credit card account.
                 * @example /objects/cash-management/credit-card-account/3
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description The final date of the credit card statement being reconciled.
             * @example 2026-01-31
             */
            reconciliationDate?: string;
            /**
             * Format: date
             * @description The cut-off date used to calculate the beginning balance for reconciliation.
             * @example 2026-01-31
             */
            cutoffDate?: string;
            /**
             * Format: decimal-precision-2
             * @description The final balance as reported on the credit card statement being reconciled.
             * @example 100003.56
             */
            endingBalance?: string;
            /**
             * @description Matching method used to reconcile the credit card statement with posted accounting transactions:
             *
             *     * `manual` - Manually match and clear transactions.
             *     * `automatch` - Sage Intacct matches and clears transactions based on the applied rule set.
             *     * `automatchReview` - Sage Intacct proposes matches to be reviewed and confirmed before clearing.
             * @default Manual
             * @example automatchReview
             * @enum {string}
             */
            reconciliationMode?: "manual" | "automatch" | "automatchReview";
            reconciliationStatus?: components["schemas"]["reconciliation-status"];
            /**
             * @description Source format of the credit card statement transactions being reconciled:
             *
             *     * `online` - Transactions are imported via a live bank feed through Sage Cloud Services.
             *     * `xml` - Transactions are provided in Extensible Markup Language (XML) format.
             *     * `csv` - Transactions are imported from a Comma-Separated Values (CSV) file.
             *     * `qif` - Transactions are provided in Quicken Interchange Format (QIF).
             * @example online
             * @enum {string|null}
             */
            feedType?: null | "csv" | "xml" | "online";
            /**
             * @description Indicates whether this reconciliation has been reopened after it was previously closed.
             * @default false
             * @example false
             */
            readonly isReopened?: boolean;
            /** @description References a collection of reconciliation source records associated with this reconciliation. */
            readonly reconciliationSourceRecords?: components["schemas"]["objects.cash-management.credit-card-reconciliation-record"][];
            audit?: components["schemas"]["audit.s1"];
        };
        "cash-management-credit-card-reconciliationRequiredProperties": {
            creditCardAccount?: Record<string, never>;
        };
        /** @description A credit card reconciliation record represents a single transaction line used in credit card reconciliation. */
        "objects.cash-management.credit-card-reconciliation-record": {
            /**
             * @description System-assigned unique key for the credit card reconciliation record.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the credit card reconciliation record. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the credit card reconciliation record.
             * @example /objects/cash-management/credit-card-reconciliation-record/23
             */
            readonly href?: string;
            /** @description Credit card account being reconciled against the credit card statement. */
            creditCardAccount?: {
                /**
                 * @description Identifier for the credit card account.
                 * @example A0000088
                 */
                id?: string;
                /**
                 * @description Unique key for the credit card account.
                 * @example 133
                 */
                key?: string;
                /**
                 * @description URL endpoint for the credit card account.
                 * @example /objects/cash-management/credit-card-account/133
                 */
                readonly href?: string;
            };
            /** @description Transaction details and related references for the credit card reconciliation record. */
            readonly txnInformation?: {
                /**
                 * @description Indicates the type of transaction associated with the reconciliation record, for example, a `withdrawal` or a `deposit`.
                 * @example withdrawal
                 * @enum {string}
                 */
                readonly txnType?: "withdrawal" | "deposit";
                /**
                 * @description Provides a document number associated with the reconciliation record, for example a credit card transaction number.
                 * @example DOC100
                 */
                documentNumber?: string;
                /**
                 * Format: date
                 * @description Indicates the date of the document associated with the reconciliation record, for example, the posting date of a credit card transaction.
                 * @example 2026-01-01
                 */
                documentDate?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Specifies the value of the credit card transaction in the original transaction currency.
                 * @example 1377.22
                 */
                txnAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Specifies the value of the credit card transaction converted into the company base currency.
                 * @example 1000.00
                 */
                baseAmount?: string;
                /**
                 * @description Indicates the currency in which the original credit card transaction was recorded.
                 * @example AUD
                 */
                txnCurrency?: string;
                /**
                 * @description Represents the base currency used by the company for accounting and financial reporting.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * Format: date
                 * @description Indicates the date the credit card transaction is recorded in the General Ledger (GL).
                 * @example 2026-05-27
                 */
                postingDate?: string;
                postingState?: components["schemas"]["transaction-state"];
                /**
                 * @description Specifies the identifier of the vendor receiving the payment.
                 * @example Business Software Inc.
                 */
                payee?: string;
                /**
                 * @description Provides a brief description with context about the transaction.
                 * @example Annual subscription for accounting software.
                 */
                description?: string;
                recordType?: components["schemas"]["record-type"];
                /** @description References the specific line in the associated journal entry. */
                readonly journalEntryLine?: {
                    /**
                     * @description Unique key for the journal entry line.
                     * @example 10
                     */
                    key?: string;
                    /**
                     * @description Identifier for the journal entry line.
                     * @example 10
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the journal entry line.
                     * @example /objects/general-ledger/journal-entry-line/10
                     */
                    readonly href?: string;
                };
                /** @description References the subledger record associated with the transaction. */
                readonly subledgerRecord?: {
                    /**
                     * @description Unique key for the subledger record.
                     * @example 12
                     */
                    readonly key?: string;
                    /**
                     * @description Identifier for the subledger record.
                     * @example 12
                     */
                    readonly id?: string;
                    /**
                     * @description URL endpoint for the subledger record.
                     * @example /objects/accounts-payable/subledger-record/12
                     */
                    readonly href?: string;
                };
                /** @description References an outstanding transaction that had not cleared the bank as of the last reconciliation, but was included in the opening General Ledger (GL) balance in Sage Intacct. */
                readonly initialOpenItem?: {
                    /**
                     * @description Unique key for the initial open item.
                     * @example 2
                     */
                    readonly key?: string;
                    /**
                     * @description Identifier for the initial open item.
                     * @example 2
                     */
                    readonly id?: string;
                    /**
                     * @description URL endpoint for the initial open item.
                     * @example /objects/cash-management/initial-open-item/2
                     */
                    readonly href?: string;
                };
                /** reconciliationInformation */
                readonly reconciliationInformation?: {
                    /**
                     * @description Indicates the reconciliation state of the credit card reconciliation record:
                     *
                     *     * `unmatched` - Posted but not yet matched for reconciliation.
                     *     * `matched` - Fully matched for reconciliation.
                     *     * `cleared` - Matched and cleared in reconciliation.
                     *     * `partiallyMatched` - Partially matched for reconciliation.
                     *     * `selectedToMatch` - Selected to match in reconciliation.
                     *     * `selectedToUnmatch` - Selected to un-match in reconciliation.
                     *     * `draftMatched` - Created in draft state and already matched for reconciliation.
                     * @example cleared
                     * @enum {string}
                     */
                    readonly state?: "unmatched" | "cleared" | "matched" | "partiallyMatched" | "selectedToMatch" | "selectedToUnmatch" | "draftMatched";
                    /**
                     * Format: date
                     * @description Specifies the date of the last reconciliation.
                     * @example 2026-05-24
                     */
                    readonly lastReconcileDate?: string;
                };
            };
            audit?: components["schemas"]["audit.s1"];
            /** @description Header level details for the credit card reconciliation. */
            readonly creditCardReconciliation?: {
                /**
                 * @description Unique key for the credit card reconciliation.
                 * @example 133
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the credit card reconciliation.
                 * @example 133
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the credit card reconciliation.
                 * @example /objects/cash-management/credit-card-reconciliation/133
                 */
                readonly href?: string;
                /**
                 * Format: date
                 * @description Final date of the credit card statement being reconciled.
                 * @example 2026-01-31
                 */
                readonly reconciliationDate?: string;
            };
        };
        /** @description Reopen workflow action for credit card reconciliation. */
        "cash-management-credit-card-reconciliation-actions-reopen-request": {
            /**
             * @description System-assigned unique key for the credit card reconciliation.
             * @example 12
             */
            key: string;
            /**
             * @description Unique identifier for the credit card account in this reconciliation.
             * @example AMEX_CARD
             */
            creditCardAccountId: string;
            /**
             * Format: date
             * @description Specifies the date of the reconciliation.
             * @example 2025-01-23
             */
            reconciliationDate: string;
        };
        "cash-management-credit-card-reconciliation-actions-reopen-response": {
            /**
             * @description System-assigned unique key for the credit card reconciliation.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the credit card account in this reconciliation.
             * @example AMEX_CARD
             */
            readonly creditCardAccountId?: string;
            /**
             * @description Indicates whether the credit card reconciliation has been reopened. When `true`, the credit card reconciliation has been reopened.
             * @example false
             */
            readonly isReopened?: boolean;
            /**
             * @description Specifies the credit card reconciliation reopen message, containing information about the number of reconciliations reopened and their duration.
             * @example Number of reconciliations to reopen and reconcile again - 1, from 05/31/2025 to 06/05/2025.
             */
            readonly message?: string;
        };
        /** @description A deposit captures the transfer of funds from a company's undeposited funds account to a bank account when collected and held payments are moved to a bank. */
        "objects.cash-management.deposit": {
            /**
             * @description System-assigned unique key for the deposit.
             * @example 1234
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the deposit. This value is the same as `key` for this object.
             * @example 1234
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the deposit.
             * @example /objects/cash-management/deposit/23
             */
            readonly href?: string;
            /**
             * @description Identifier to correlate the deposit with the actual deposit slip from the bank.
             * @example Deposit slip 09/21/2023
             */
            depositId?: string;
            /**
             * Format: date
             * @description Date when the deposit occurred.
             * @example 2023-09-21
             */
            txnDate?: string;
            /**
             * @description Provides a brief contextual description for the deposit.
             * @example Cash deposit for online service
             */
            description?: string;
            /**
             * @description Indicates the operating and reporting currency for the company or entity. In a multi-entity company, you can assign a different base currency to each entity.
             * @example USD
             */
            readonly baseCurrency?: string;
            /**
             * @description Specifies the transaction currency for the bank deposit. Applies to multi-currency companies.
             * @example USD
             */
            readonly txnCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the total amount entered for the deposit, in the base currency for the company or entity.
             * @example 100.99
             */
            readonly totalEntered?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the total transaction amount entered for the deposit in the transaction currency.
             * @example 100.99
             */
            readonly txnTotalEntered?: string;
            /**
             * @description Indicates the current state of the deposit.
             *
             *     When a deposit has been issued and is in a `posted` state, it can be reversed. When a deposit is reversed, the original `posted` transaction immediately enters the `reversal` state and transitions to the `reversed` state once the reversal date is reached.
             *
             *     A reversal transaction is also created in the `reversal` state when you reverse a deposit. The state of the reversal transaction does not change.
             * @default null
             * @example void
             * @enum {string|null}
             */
            readonly state?: null | "void" | "approve";
            /**
             * @description Indicates the reconciliation state for the deposit, whether it is `cleared`, `matched` or `uncleared`.
             * @default uncleared
             * @example cleared
             * @enum {string}
             */
            readonly reconciliationState?: "cleared" | "uncleared" | "matched";
            /** @description References the bank account associated with the deposit. */
            bankAccount?: {
                /**
                 * @description Unique key for the bank account.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the bank account.
                 * @example BOA
                 */
                id?: string;
                /**
                 * @description Name of the bank account.
                 * @example Bank of America
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the bank account.
                 * @example /objects/cash-management/bank-account/1
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Indicates the date of the reversal for the deposit.
             * @example 2021-09-23
             */
            readonly reversalDate?: string;
            /**
             * Format: date
             * @description Indicates the date the deposit was reversed.
             * @example 2021-09-23
             */
            readonly reversedDate?: string;
            /**
             * @description Unique key for the reversed deposit.
             * @example 1235
             */
            readonly reversedVoidPaymentKey?: string;
            /**
             * @description Unique key for the reversal deposit.
             * @example 1236
             */
            readonly voidPaymentKey?: string;
            /**
             * Format: date
             * @description Indicates the date the deposit was posted to the General Ledger (GL).
             * @example 2021-09-23
             */
            postingDate?: string;
            /** @description References a supporting document attached to the deposit. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 18
                 */
                key?: string;
                /**
                 * @description Identifier for the attachment.
                 * @example 18
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/18
                 */
                readonly href?: string;
            };
            /** @description Represents a collection of deposit lines associated with the deposit. */
            lines?: components["schemas"]["objects.cash-management.deposit-line"][];
            /** @description Represents a collection of deposit details associated with the deposit. */
            details?: components["schemas"]["objects.cash-management.deposit-detail"][];
            readonly audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Indicates the date and time that the deposit was created.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            entity?: components["schemas"]["entity-ref"];
        };
        "cash-management-depositRequiredProperties": {
            details?: unknown[];
        };
        /** @description Deposit lines represent individual customer payments included in a deposit transaction, including information needed to apply the payment to Accounts Receivable (AR). */
        "objects.cash-management.deposit-line": {
            /**
             * @description System-assigned unique key for the deposit line.
             * @example 101
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the deposit line. This is the same as `key` for this object.
             * @example 101
             */
            readonly id?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the amount of the deposit line.
             * @example 100.99
             */
            readonly amount?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the transaction amount of the deposit line.
             * @example 100.99
             */
            readonly txnAmount?: string;
            /**
             * @description Provides a contextual description for the deposit line.
             * @example Deposit from other receipt 101
             */
            readonly description?: string;
            /** @description Represents the currency details for the deposit line. */
            currency?: {
                /**
                 * @description Indicates the operating and reporting currency for the company or entity. In a multi-entity company, you can assign a different base currency to each entity.
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /**
                 * @description Indicates the transaction currency for the company or entity.
                 * @example GBP
                 */
                readonly txnCurrency?: string;
                /**
                 * exchangeRate
                 * @description Specifies the exchange rate used to calculate the base amount from the transaction amount for the deposit line.
                 */
                exchangeRate?: {
                    /**
                     * Format: date
                     * @description Date of the exchange rate used to calculate the base amount.
                     * @example 2021-01-23
                     */
                    readonly date?: string;
                    /**
                     * @description Exchange rate used to calculate the base amount.
                     * @example 1.0789
                     */
                    readonly rate?: number;
                    /**
                     * @description Type of exchange rate used to calculate the base amount.
                     * @example -1
                     */
                    readonly typeId?: string;
                };
            };
            /** @description References the base location for the deposit. */
            baseLocation?: components["schemas"]["location-ref"] & {
                /**
                 * @description Unique key for the base location.
                 * @example 4
                 */
                key?: string;
            };
            /** @description References the Accounts Receivable (AR) label for the AR account associated with the deposit line. */
            readonly arAccountLabel?: {
                /**
                 * @description Unique key for the AR account label.
                 * @example 10
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the AR account label.
                 * @example 10
                 */
                readonly id?: string;
                /**
                 * @description Specifies the AR account label.
                 * @example SALES
                 */
                readonly label?: string;
                /**
                 * @description URL endpoint for the account label.
                 * @example /objects/accounts-receivable/account-label/102
                 */
                readonly href?: string;
            };
            /** @description References the General Ledger (GL) account associated with the deposit line. */
            readonly glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 9
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the GL account.
                 * @example 9
                 */
                readonly id?: string;
                /**
                 * @description Number of the GL account.
                 * @example 9010
                 */
                readonly accountNumber?: string;
                /**
                 * @description Name of the GL account.
                 * @example Service Payments
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/102
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Standard Sage Intacct dimension that allows you to create a hierarchy of locations to reflect how your company is organized.
                 */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 4
                     */
                    key?: string;
                    /**
                     * @description Identifier of the location.
                     * @example AU
                     */
                    id?: string;
                    /**
                     * @description Name of the location.
                     * @example Australia
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/4
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Standard Sage Intacct dimension that allows you to create a hierarchy of departments to reflect how your company is organized.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 9
                     */
                    key?: string;
                    /**
                     * @description Identifier of the department.
                     * @example 01
                     */
                    id?: string;
                    /**
                     * @description Name of the department.
                     * @example Accounting
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
            };
            /** @description References the deposit associated with the deposit line. */
            readonly deposit?: {
                /**
                 * @description Unique key for the deposit.
                 * @example 10
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the deposit.
                 * @example 10
                 */
                readonly id?: string;
                /**
                 * @description Indicates the type of deposit.
                 * @example cr
                 */
                readonly depositType?: string;
                /**
                 * @description URL endpoint for the deposit.
                 * @example /objects/cash-management/deposit/10
                 */
                readonly href?: string;
            };
            readonly status?: components["schemas"]["status"];
            readonly audit?: components["schemas"]["audit.s1"];
        };
        /** @description Deposit details represent additional deposit information for individual customer payments included in a deposit transaction. */
        "objects.cash-management.deposit-detail": {
            /**
             * @description System-assigned unique key for the deposit detail.
             * @example 23
             */
            key?: string;
            /**
             * @description Unique identifier for the deposit detail. This is the same as `key` for this object.
             * @example 23
             */
            id?: string;
            /**
             * @description URL endpoint for the deposit detail.
             * @example /objects/cash-management/deposit-detail/23
             */
            readonly href?: string;
            /**
             * @description Provide a brief description of the deposit detail, for example, the Accounts Receivable (AR) payment summary into which this payment was placed.
             * @example Cash Management Transactions - 2022/04/08 Batch
             */
            readonly summary?: string;
            /** @description References the customer associated with the deposit detail. */
            readonly customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the customer.
                 * @example Lexicon Corporation
                 */
                readonly id?: string;
                /**
                 * @description Name of the customer.
                 * @example Peter Hansen
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/23
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies the payee for the deposit detail.
             * @example Alter Windows Inc
             */
            readonly payee?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the total amount entered for the deposit detail, in the base currency for the company or entity.
             * @example 100.99
             */
            readonly totalEntered?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the total transaction amount entered for the deposit detail, in the transaction currency.
             * @example 100.99
             */
            readonly txnTotalEntered?: string;
            /**
             * @description Specifies the transaction currency for the deposit detail.
             * @example USD
             */
            readonly currency?: string;
            /**
             * @description Indicates the payment method for the deposit detail.
             * @example cash
             * @enum {string}
             */
            readonly paymentMethod?: "check" | "chargeCard" | "onlineChargeCard" | "recordTransfer" | "cash";
            /**
             * @description Provides a document number for the deposit detail, for example a transaction or check number.
             * @example Check 0019
             */
            readonly documentNumber?: string;
            /**
             * @description Indicates the current state of the deposit detail.
             * @example undeposited
             * @enum {string}
             */
            readonly state?: "undeposited" | "deposited";
            /** @description References the deposit associated with the deposit detail. */
            readonly deposit?: {
                /**
                 * @description Unique key for the deposit.
                 * @example 10
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the deposit.
                 * @example 10
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the deposit.
                 * @example /objects/cash-management/deposit/10
                 */
                readonly href?: string;
            };
            readonly status?: components["schemas"]["status"];
            readonly audit?: components["schemas"]["audit.s1"];
        };
        /** @description An undeposited fund represents an account that temporarily holds customer payments until they are deposited into a bank account. */
        "objects.cash-management.undeposited-fund": {
            /**
             * @description System-assigned unique key for the undeposited fund.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the undeposited fund. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the undeposited fund.
             * @example /objects/cash-management/undeposited-fund/23
             */
            readonly href?: string;
            /** @description Specifies the customer associated with the undeposited fund. */
            readonly customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the customer.
                 * @example 2_Logic_Solutions
                 */
                readonly id?: string;
                /**
                 * @description Name of the customer.
                 * @example Logic Solutions
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/23
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates the name of the payee.
             * @example John Smith
             */
            readonly payee?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies the total transaction amount recorded in the undeposited fund.
             * @example 100.99
             */
            readonly totalEntered?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies the total transaction amount in the transaction currency.
             * @example 100.99
             */
            readonly txnTotalEntered?: string;
            /**
             * @description Indicates the transaction currency.
             * @example USD
             */
            readonly currency?: string;
            /**
             * @description Specifies the payment method for the transaction.
             * @example cash
             * @enum {string}
             */
            readonly paymentMethod?: "check" | "chargeCard" | "onlineChargeCard" | "recordTransfer" | "cash";
            /**
             * @description Specifies the document number for the transaction, such as the receipt number.
             * @example Undeposited funds receipt - check 0019.
             */
            readonly documentNumber?: string;
            readonly audit?: components["schemas"]["audit.s1"];
        };
        /** @description Reverse workflow for deposits. */
        "cash-management-deposit-actions-reverse-request": {
            /**
             * @description System-assigned unique key for the original deposit transaction.
             * @example 49
             */
            key: string;
            /**
             * Format: date
             * @description Specifies the date of the deposit reversal.
             * @example 2025-04-15
             */
            reversedDate: string;
            /**
             * @description Provides brief descriptive notes about the reason for the reversal.
             * @example Deposit reversed due to duplicate entry.
             */
            notes?: string;
        };
        "cash-management-deposit-actions-reverse-response": {
            /**
             * @description System-assigned unique key for the deposit reversal transaction.
             * @example 50
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the deposit reversal. This is the same as `key` for this object.
             * @example 50
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the deposit reversal.
             * @example /objects/cash-management/deposit/50
             */
            readonly href?: string;
            /**
             * @description Indicates the state of the deposit after reversal.
             * @example reversed
             */
            readonly state?: string;
        };
        /** @description A funds transfer is a transaction that records the movement of funds from one cash account to another. Cash accounts include checking accounts and savings accounts. */
        "objects.cash-management.funds-transfer": {
            /**
             * @description System-assigned unique key for the funds transfer.
             * @example 1001
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the funds transfer. This value is the same as the key for this object.
             * @example 1001
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the funds transfer.
             * @example /objects/cash-management/funds-transfer/1001
             */
            readonly href?: string;
            /**
             * @description Indicates whether the funds transfer is `cleared`, `matched`, or `uncleared` for reconciliation.
             * @default uncleared
             * @example cleared
             * @enum {string}
             */
            reconciliationState?: "cleared" | "uncleared" | "matched";
            /**
             * Format: date
             * @description Date when the transaction was cleared as part of the reconciliation process.
             * @example 2024-01-23
             */
            readonly clearingDate?: string | null;
            /**
             * Format: date
             * @description Indicates the date the funds transfer is scheduled or sent for processing.
             * @example 2021-11-30
             */
            sendDate?: string;
            /**
             * @description Provides a reference number assigned to the funds transfer.
             * @example TRANSFER-155 BOA to CHSE
             */
            referenceNumber?: string;
            /**
             * @description Specifies a brief contextual description for the funds transfer.
             * @example Funds transfer from Bank of America to Chase Bank.
             */
            description?: string;
            /** @description References a supporting document attached to the funds transfer. */
            attachment?: {
                /**
                 * @description Unique key for the attachment
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the attachment.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/attachment/1
                 */
                readonly href?: string;
            };
            /** @description References the bank account where the funds transfer originated. */
            transferFromAccount?: {
                bankAccount?: {
                    /**
                     * @description Unique key for the originating bank account.
                     * @example 1004
                     */
                    readonly key?: string;
                    /**
                     * @description Identifier for the originating bank account.
                     * @example CHASE
                     */
                    id?: string;
                    /**
                     * @description Name of the originating bank account.
                     * @example Chase bank
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the originating bank account.
                     * @example /objects/cash-management/bank-account/1004
                     */
                    readonly href?: string;
                    /**
                     * @description Currency associated with the originating bank account.
                     * @example USD
                     */
                    readonly currency?: string;
                    /**
                     * @description Type of bank account from where the funds originated.
                     * @example checking
                     * @enum {string}
                     */
                    readonly accountType?: "checking" | "savings" | "debit" | "credit";
                };
                /**
                 * @description General Ledger (GL) account number associated with the originating bank account.
                 * @example 1010
                 */
                readonly glAccountNumber?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Specifies the amount of the funds transfer in the currency of the originating bank account. Applies to multi-currency companies.
                 * @example 2500.10
                 */
                transferAmount?: string;
            };
            /** @description References the bank account receiving the funds transfer. */
            transferToAccount?: {
                bankAccount?: {
                    /**
                     * @description Unique key for the receiving bank account.
                     * @example 1002
                     */
                    readonly key?: string;
                    /**
                     * @description Identifier for the receiving bank account.
                     * @example BOA
                     */
                    id?: string;
                    /**
                     * @description Name of the receiving bank account.
                     * @example Bank of America
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the receiving bank account.
                     * @example /objects/cash-management/bank-account/10
                     */
                    readonly href?: string;
                    /**
                     * @description Currency associated with the receiving bank account.
                     * @example EUR
                     */
                    readonly currency?: string;
                    /**
                     * @description Type of bank account receiving the funds transfer.
                     * @example checking
                     * @enum {string}
                     */
                    readonly accountType?: "checking" | "savings" | "debit" | "credit";
                };
                /**
                 * @description General Ledger (GL) account number associated with the receiving bank account.
                 * @example 1001
                 */
                readonly glAccountNumber?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Specifies the amount of the funds transfer in the currency of the receiving bank account. Applies to multi-currency companies.
                 * @example 2500.10
                 */
                receivedAmount?: string;
            };
            /** @description Represents exchange rate information used for the base currency conversion in the funds transfer. */
            baseCurrencyConversion?: {
                /** @description Currency of the originating bank account used in the funds transfer. */
                transferFromCurrency?: {
                    /**
                     * @description Base currency of the originating bank account for the company or entity.
                     * @example USD
                     */
                    companyBaseCurrency?: string;
                    /**
                     * Format: date
                     * @description Date of the exchange rate used by the originating bank account.
                     * @example 2014-01-08
                     */
                    exchangeRateDate?: string;
                    /**
                     * @description Type of exchange rate used by the originating bank account.
                     * @example Intacct Daily Rate
                     */
                    exchangeRateTypeId?: string;
                    /**
                     * @description Exchange rate used by the originating bank account.
                     * @example 0.78
                     */
                    exchangeRate?: number;
                    /**
                     * Format: decimal-precision-2
                     * @description Total amount withdrawn from the originating bank account in the base currency.
                     * @example 1500.01
                     */
                    readonly baseCurrencyAmount?: string;
                };
                /** @description Currency of the receiving bank account used in the funds transfer. */
                transferToCurrency?: {
                    /**
                     * @description Base currency of the receiving bank account for the company or entity.
                     * @example USD
                     */
                    companyBaseCurrency?: string;
                    /**
                     * Format: date
                     * @description Date of the exchange rate used by the receiving bank account.
                     * @example 2014-01-08
                     */
                    exchangeRateDate?: string;
                    /**
                     * @description Type of exchange rate used by the receiving bank account.
                     * @example Intacct Daily Rate
                     */
                    exchangeRateTypeId?: string;
                    /**
                     * @description Exchange rate used by the receiving bank account.
                     * @example 0.78
                     */
                    exchangeRate?: number;
                    /**
                     * Format: decimal-precision-2
                     * @description Total amount deposited to the receiving account, recorded in the company's base currency.
                     * @example 1500.01
                     */
                    readonly baseCurrencyAmount?: string;
                };
            };
            /**
             * @description Indicates the current state of the funds transfer.
             *
             *     When a funds transfer has been issued and is in a `posted` state, it can be reversed. When a funds transfer is reversed, the original `posted` transaction immediately enters the `reversal` state and transitions to the `reversed` state once the reversal date is reached.
             *
             *     A reversal transaction is also created in the `reversal` state when you reverse a funds transfer. The state of the reversal transaction does not change.
             * @example posted
             * @enum {string}
             */
            readonly state?: "reversed" | "reversal" | "posted";
            /** @description References the reversing transaction when the funds transfer state is `reversed`. */
            readonly reversedBy?: {
                /**
                 * @description Unique key for the reversing transaction.
                 * @example 221
                 */
                readonly key?: string;
                /**
                 * @description Identifier of the reversing transaction.
                 * @example 221
                 */
                readonly id?: string;
                /**
                 * Format: date
                 * @description Date of the reversing transaction. This is usually the original transaction date or a later date.
                 * @example 2021-01-23
                 */
                readonly reversalDate?: string;
                /**
                 * @description URL endpoint for the reversing transaction.
                 * @example /objects/cash-management/funds-transfer/221
                 */
                readonly href?: string;
            };
            /** @description References the transaction being reversed when the funds transfer state is `reversal`. */
            readonly reversalOf?: {
                /**
                 * @description Unique key for the reversed transaction.
                 * @example 125
                 */
                readonly key?: string;
                /**
                 * @description Identifier of the reversed transaction.
                 * @example 125
                 */
                readonly id?: string;
                /**
                 * Format: date
                 * @description Transaction date of the reversed transaction.
                 * @example 2021-10-22
                 */
                readonly txnDate?: string;
                /**
                 * @description URL endpoint for the reversed transaction.
                 * @example /objects/cash-management/funds-transfer/125
                 */
                readonly href?: string;
            };
            /** @description Represents a collection of lines for the funds transfer. */
            lines?: components["schemas"]["objects.cash-management.funds-transfer-line"][];
            entity?: components["schemas"]["entity-ref"];
            readonly audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Indicates the date and time of the submission.
                 * @example 2024-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
        };
        "funds-transferRequiredProperties": {
            transferFromAccount?: {
                bankAccount?: Record<string, never>;
            };
            transferToAccount?: {
                bankAccount?: Record<string, never>;
            };
        };
        /** @description Funds transfer lines are automatically generated when a funds transfer is created. Each line is posted to the general ledger when the transaction is created. */
        "objects.cash-management.funds-transfer-line": {
            /**
             * @description Unique identifier for the funds transfer line. This value is the same as `key` for this object.
             * @example 62
             */
            readonly id?: string;
            /**
             * @description System-assigned unique key for the funds transfer line.
             * @example 62
             */
            readonly key?: string;
            /**
             * @description URL endpoint for the funds transfer line.
             * @example /objects/cash-management/funds-transfer-line/62
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the funds transfer line amount in the company's base currency, calculated based on the exchange rate defined in the funds transfer.
             * @example 3000.54
             */
            readonly baseAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the funds transfer line amount in the transaction currency, for multi-currency companies.
             * @example 2003.00
             */
            readonly txnAmount?: string;
            currency?: components["schemas"]["currency"];
            /**
             * @description Line number for the funds transfer lines.
             * @example 1
             */
            readonly lineNumber?: number;
            readonly glAccount?: components["schemas"]["gl-account-ref"];
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Standard Sage Intacct dimension that allows you to create a hierarchy of locations to reflect how your company is organized.
                 */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 4
                     */
                    key?: string;
                    /**
                     * @description Identifier of the location.
                     * @example AU
                     */
                    id?: string;
                    /**
                     * @description Name of the location.
                     * @example Australia
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/location/4
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Standard Sage Intacct dimension that allows you to create a hierarchy of departments to reflect how your company is organized.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 9
                     */
                    readonly key?: string;
                    /**
                     * @description Identifier of the department.
                     * @example 01
                     */
                    id?: string;
                    /**
                     * @description Name of the department.
                     * @example Accounting
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/department/9
                     */
                    readonly href?: string;
                };
            };
            /** @description References the funds transfer associated with the funds transfer line. */
            readonly fundsTransfer?: {
                /**
                 * @description Unique key for the funds transfer.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the funds transfer.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the funds transfer.
                 * @example /objects/cash-management/funds-transfer/100
                 */
                readonly href?: string;
            };
            readonly audit?: components["schemas"]["audit.s1"];
        };
        /** @description Reverse workflow for funds transfers. */
        "cash-management-funds-transfer-actions-reverse-request": {
            /**
             * @description System-assigned unique key for the original fund transfer transaction.
             * @example 39
             */
            key?: string;
            /**
             * Format: date
             * @description Specifies the date of the fund transfer reversal.
             * @example 2025-05-07
             */
            reversedDate?: string;
            /**
             * @description Provides brief descriptive notes about the reason for the reversal.
             * @example Reversed the fund transfer transaction to correct a duplicate entry.
             */
            memo?: string;
        };
        "cash-management-funds-transfer-actions-reverse-response": {
            /**
             * @description System-assigned unique key for the fund transfer reversal transaction.
             * @example 305
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the fund transfer reversal. This is the same as `key` for this object.
             * @example 305
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the fund transfer reversal.
             * @example /objects/cash-management/funds-transfer/305
             */
            readonly href?: string;
            /**
             * @description Indicates the state of the fund transfer after reversal.
             * @example reversed
             */
            readonly state?: string;
        };
        /** @description Other receipts represent incoming payments that are not linked to specific customers or invoices. */
        "objects.cash-management.other-receipt": {
            /**
             * @description System-assigned unique key for the other receipt.
             * @example 1299
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the other receipt. This value is the same as `key` for this object.
             * @example 1299
             */
            readonly id?: string;
            /**
             * @description Indicates the type of transaction represented by the other receipt, such as `cr` for a cash receipt.
             * @example cr
             */
            readonly recordType?: string;
            /**
             * @description Specifies the individual or entity from whom the payment was received.
             * @example John Smith
             */
            payer?: string;
            /**
             * Format: date
             * @description Indicates the date the payment was received or initiated for the other receipt. Typically, this is the check date, but it may also reflect the date of a credit card charge, bank transfer, or cash transaction.
             * @example 2021-01-23
             */
            txnDate?: string;
            /**
             * Format: date
             * @description Indicates the actual date the payment was made or funds were received.
             * @example 2021-01-23
             */
            txnPaidDate?: string;
            /**
             * @description Specifies the transaction number for the other receipt. Typically, this is the check number, but may be the transaction number for the credit card, bank transfer, or cash transaction.
             * @example 22365
             */
            txnNumber?: string;
            /**
             * @description Provides a brief contextual description for the other receipt.
             * @example Refund for overpayment
             */
            description?: string;
            /**
             * @deprecated
             * @description References Accounts receivable (AR) summary in which the receipt is included.
             */
            readonly arSummary?: {
                /**
                 * @deprecated
                 * @description System-assigned key for the AR summary.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @deprecated
                 * @description Identifier for the AR summary.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * Format: date
                 * @deprecated
                 * @description Date of the AR summary.
                 * @example 2023-10-10
                 */
                readonly date?: string;
                /**
                 * @deprecated
                 * @description URL endpoint for the AR summary.
                 * @example /objects/accounts-receivable/summary/10
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates the operating and reporting currency for the company or entity. In a multi-entity company, you can assign a different base currency to each entity.
             * @example USD
             */
            baseCurrency?: string;
            /**
             * @deprecated
             * @description This field is deprecated. Use `txnCurrency` instead
             */
            currency?: string;
            /**
             * @description Specifies the transaction currency for the other receipt. Applies to multi-currency companies.
             * @example USD
             */
            txnCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the total amount entered for the other receipt, in the base currency for the company or entity.
             * @example 100.99
             */
            readonly totalEntered?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the total transaction amount entered for the other receipt in the transaction currency.
             * @example 100.99
             */
            readonly txnTotalEntered?: string;
            /**
             * Format: date
             * @deprecated
             * @description This field has been deprecated. Use 'clearingDate' instead.
             * @example 2021-01-23
             */
            reconciliationDate?: string;
            /**
             * @description Indicates whether the other receipt in the transaction is `cleared`, `matched`, or `uncleared` for reconciliation.
             * @default uncleared
             * @example cleared
             * @enum {string}
             */
            reconciliationState?: "cleared" | "uncleared" | "matched";
            /**
             * Format: date
             * @description Date when the transaction was cleared as part of the reconciliation process.
             * @example 2024-01-23
             */
            readonly clearingDate?: string | null;
            /**
             * @description Indicates the current state of the other receipt.
             *
             *     When an other receipt has been issued and is in an `approved` state, it can be reversed. When an other receipt is reversed, the original `approved` transaction immediately enters the `reversal` state and transitions to the `reversed` state once the reversal date is reached.
             *
             *     A reversal transaction is also created in the `reversal` state when you reverse an other receipt. The state of the reversal transaction does not change.
             * @default approved
             * @example approved
             * @enum {string}
             */
            state?: "approved" | "reversed" | "reversal" | "reconciled" | "deposited";
            /** @description References the deposit associated with the other receipt. */
            parentDeposit?: {
                /**
                 * @description URL endpoint for the deposit.
                 * @example /objects/cash-management/deposit/3319
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the deposit.
                 * @example 3319
                 */
                key?: string;
                /**
                 * @description Identifier of the deposit.
                 * @example 3319
                 */
                id?: string;
            };
            /**
             * @description Indicates that other receipt line amounts include tax.
             * @default false
             * @example true
             */
            isInclusiveTax?: boolean;
            /** @description References the bank account associated with the other receipt. Required if `undepositedAccount` is not specified. */
            bankAccount?: {
                /**
                 * @description Unique key for the bank account.
                 * @example 1002
                 */
                key?: string;
                /**
                 * @description Identifier for the bank account.
                 * @example BOA
                 */
                id?: string;
                /**
                 * @description Name of the bank account.
                 * @example Bank of America
                 */
                readonly name?: string;
                /**
                 * @description Currency of the bank account.
                 * @example USD
                 */
                readonly currency?: string;
                /**
                 * @description URL endpoint for the bank account.
                 * @example /objects/cash-management/bank-account/10
                 */
                readonly href?: string;
            };
            /**
             * @deprecated
             * @description This field is deprecated. Use `undepositedGLAccount` instead
             */
            undepositedAccount?: {
                /**
                 * @description Unique key for the undeposited funds account.
                 * @example 19
                 */
                key?: string;
                /**
                 * @description Identifier for the undeposited funds account.
                 * @example 1020 Uncleared Receipts
                 */
                id?: string;
                /**
                 * @description URL endpoint for the undeposited funds account.
                 * @example /objects/general-ledger/account/19
                 */
                readonly href?: string;
            };
            /**
             * @description References the undeposited funds account for the other receipt. This account is used to hold receipts temporarily prior to being deposited into a bank account.
             *
             *     Required if `bankAccount` is not specified.
             */
            undepositedGLAccount?: {
                /**
                 * @description Unique key for the undeposited funds account.
                 * @example 19
                 */
                key?: string;
                /**
                 * @description Identifier for the undeposited funds account.
                 * @example 1020 Uncleared Receipts
                 */
                id?: string;
                /**
                 * @description URL endpoint for the undeposited funds account.
                 * @example /objects/general-ledger/account/19
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Specifies the date payments are deposited into a bank account for the other receipt.
             * @example 2021-01-23
             */
            depositDate?: string;
            /** @description Specifies the exchange rate used to calculate the base amount from the transaction amount for the other receipt. */
            exchangeRate?: {
                /**
                 * Format: date
                 * @description Date of the exchange rate used to calculate the base amount. This can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                 * @example 2021-01-23
                 */
                date?: string;
                /**
                 * @description Exchange rate used to calculate the base amount.
                 * @example 1.0789
                 */
                rate?: number;
                /**
                 * @description Type of exchange rate type used to calculate the base amount.
                 * @example 1
                 */
                typeId?: string | null;
            };
            /**
             * @description Indicates the payment method used to make the payment for the other receipt.
             * @default cash
             * @example creditCard
             * @enum {string}
             */
            paymentMethod?: "printedCheck" | "creditCard" | "eft" | "cash";
            /**
             * Format: date
             * @description Indicates the date of the reversal for the other receipt.
             * @example 2024-01-23
             */
            readonly reversalDate?: string;
            /**
             * Format: date
             * @description Indicates the date the other receipt was reversed.
             * @example 2024-01-23
             */
            readonly reversedDate?: string;
            /**
             * @description Unique key for the reversed other receipt.
             * @example 1400
             */
            readonly reversedVoidPaymentKey?: string;
            /** @description References the tax solution used to calculate and capture taxes for the other receipt. */
            taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description Identifier for the tax solution.
                 * @example CATAXSOLUTIONID
                 */
                id?: string;
                /**
                 * @deprecated
                 * @description This has been deprecated. Indicates whether to allow multiple tax entries for each line in the other receipt. When `true` allows applies multiple tax entries to each line.
                 * @default false
                 * @example false
                 */
                readonly enableMultilineTax?: boolean;
                /**
                 * @deprecated
                 * @description This has been deprecated. Specifies the calculation method used by the tax solution to apply sales tax to the other receipt.
                 * @example Simple
                 */
                readonly taxCalculationMethod?: string;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/123
                 */
                readonly href?: string;
            };
            /**
             * @description Unique key for the reversal other receipt.
             * @example 1923
             */
            readonly voidPaymentKey?: string;
            /**
             * @description Indicates the originating Sage Intacct module where the other receipt was created.
             * @default cashManagement
             * @example cashManagement
             * @enum {string}
             */
            sourceModule?: "cashManagement" | "loanManagement";
            /**
             * @description URL endpoint for the other receipt.
             * @example /objects/cash-management/other-receipt/10
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Indicates the date and time of the submission.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            /** @description Represents a collection of lines associated with the other receipt. */
            lines?: components["schemas"]["objects.cash-management.other-receipt-line"][];
            entity?: components["schemas"]["entity-ref"];
            /** @description RecordURL for the other receipt. */
            readonly webURL?: string;
        };
        "cash-management-other-receiptRequiredProperties": {
            lines?: Record<string, never>[];
        };
        /** @description Other receipt lines represent the individual postings in an other receipt and include details like amount, account, dimensions, and information about the associated General Ledger (GL) posting. */
        "objects.cash-management.other-receipt-line": {
            /**
             * @description System-assigned unique key for the other receipt line.
             * @example 123
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the other receipt line. This value is the same as `key` for this object.
             * @example 123
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the other receipt line.
             * @example /objects/cash-management/other-receipt/10
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the amount of the other receipt line in the base currency of the company. Applies to single-currency companies.
             * @example 100.99
             */
            amount?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the total calculated transaction amount of the other receipt line. Applies to multi-currency companies.
             * @example 100.99
             */
            totalTxnAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Indicates the transaction amount of the other receipt line in the transaction currency. Applies to multi-currency companies.
             * @example 100.99
             */
            txnAmount?: string;
            /**
             * @description Provides a contextual description for the other receipt line.
             * @example Cash receipt for rental of conferencing facilities
             */
            description?: string;
            /** @description Specifies the exchange rate used to calculate the base amount from the transaction amount for the other receipt line. */
            exchangeRate?: {
                /**
                 * Format: date
                 * @description Date of the exchange rate used to calculate the base amount. This can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                 * @example 2021-01-23
                 */
                date?: string;
                /**
                 * @description Exchange rate used to calculate the base amount.
                 * @example 1.0789
                 */
                rate?: number;
                /**
                 * @description Type of exchange rate used to calculate the base amount.
                 * @example 1
                 */
                typeId?: string;
            };
            /**
             * @description Represents the line in the journal entry that corresponds to the posting entry of the transaction.
             * @example 1
             */
            lineNumber?: number;
            /**
             * @description Indicates the operating and reporting currency for the company or entity. Applies to multi-currency companies.
             * @example USD
             */
            readonly baseCurrency?: string;
            /**
             * @description Indicates the transaction currency for the company or entity. Applies to multi-currency companies.
             * @example USD
             */
            readonly currency?: string;
            /**
             * @description Indicates whether the other receipt line amount includes taxes.
             * @default false
             * @example false
             */
            isTax?: boolean;
            /** @description References the Accounts Receivable (AR) label for the AR account associated with the other receipt line. */
            arAccountLabel?: {
                /**
                 * @description Unique key for the AR account label.
                 * @example 102
                 */
                key?: string;
                /**
                 * @description Identifier for the AR account label.
                 * @example SW Sales
                 */
                id?: string;
                /**
                 * @description URL endpoint for the AR account label.
                 * @example /objects/accounts-receivable/account-label/102
                 */
                readonly href?: string;
            };
            /** @description References the General ledger (GL) account associated with the other receipt line. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 55
                 */
                key?: string;
                /**
                 * @description Identifier for the GL account.
                 * @example 1001
                 */
                id?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/55
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /** @description Standard Sage Intacct dimension that allows you to create a hierarchy of locations to reflect how your company is organized. */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 5
                     */
                    key?: string;
                    /**
                     * @description Identifier for the location.
                     * @example CAHO
                     */
                    id?: string;
                    /**
                     * @description Name of the location.
                     * @example California Head Office
                     */
                    name?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/5
                     */
                    readonly href?: string;
                };
                /** @description Standard Sage Intacct dimension that allows you to create a hierarchy of departments to reflect how your company is organized. */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 10
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the department.
                     * @example ENGINEERING
                     */
                    id?: string | null;
                    /**
                     * @deprecated
                     * @description This has been deprecated. Number for the department.
                     * @example 10
                     */
                    number?: string;
                    /**
                     * @description Name of the department.
                     * @example Engineering department
                     */
                    name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/10
                     */
                    readonly href?: string;
                };
            };
            /** @description References the other receipt associated with the other receipt line. */
            otherReceipts?: {
                /**
                 * @description Unique key for the other receipt.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the other receipt.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * @deprecated
                 * @description This has been deprecated. Record type of the other receipt.
                 * @example cr
                 */
                readonly recordType?: string;
                /**
                 * @description URL endpoint for the other receipt.
                 * @example /objects/cash-management/other-receipt/5
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            /** @description Represents a collection of tax entries associated with the other receipt line. */
            taxEntries?: components["schemas"]["objects.cash-management.other-receipt-tax-entry"][];
        };
        /** @description Other receipt tax entries contain tax-related information for the associated other receipt line. */
        "objects.cash-management.other-receipt-tax-entry": {
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
            /** @description References the order entry tax details associated with the other receipt tax entry. */
            taxDetail?: {
                /**
                 * @description Unique key for the order entry tax detail.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the order entry tax detail.
                 * @example UK Sale Goods Exempt Rate
                 */
                id?: string;
                /**
                 * @description URL endpoint of the order entry tax detail.
                 * @example /objects/tax/order-entry-tax-detail/1
                 */
                readonly href?: string;
            };
            /**
             * otherReceiptLine
             * @description References the other receipt line associated with the other receipt tax entry.
             */
            otherReceiptLine?: {
                /**
                 * @description Identifier for the other receipt line.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the other receipt line.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the other receipt line.
                 * @example /objects/cash-management/other-receipt-line/100
                 */
                readonly href?: string;
            };
        };
        /** @description Reverse workflow for other receipts. */
        "cash-management-other-receipt-actions-reverse-request": {
            /**
             * @description System-assigned unique key for the original other receipt transaction.
             * @example 49
             */
            key: string;
            /**
             * Format: date
             * @description Specifies the date of the other receipt reversal.
             * @example 2025-04-15
             */
            reversedDate: string;
            /**
             * @description Provides brief descriptive notes about the reason for the reversal.
             * @example Other receipt reversed due to duplicate entry.
             */
            notes?: string;
        };
        "cash-management-other-receipt-actions-reverse-response": {
            /**
             * @description System-assigned unique key for the other receipt reversal transaction.
             * @example 50
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the other receipt reversal. This is the same as `key` for this object.
             * @example 50
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the other receipt reversal.
             * @example /objects/cash-management/other-receipt/50
             */
            readonly href?: string;
            /**
             * @description Indicates the state of the other receipt after reversal.
             * @example reversed
             */
            readonly state?: string;
        };
        /** @description Received payments provide the ability to receive and record a full or partial payment made by a customer against specific invoices. You can also create advance payments when no invoices match the bank transactions, or save the payment as draft if you are not ready to post the payment. */
        "objects.cash-management.received-payment": {
            /**
             * @description System-assigned unique key for the received payment.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the received payment. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the received payment.
             * @example /objects/received-payment/23
             */
            readonly href?: string;
            /**
             * @description Determines the order in which invoices are matched and applied to a received payment:
             *
             *     * `matchToOpenAmount` - Matches the payment to invoices with an open amount equal to the payment amount.
             *     * `oldestInvoiceFirst` - Applies the payment to the oldest outstanding invoices first.
             *     * `mostRecentInvoiceFirst` - Applies the payment to the most recent outstanding invoices first.
             *     * `largestOpenAmountFirst` - Applies the payment to invoices with the largest open amounts first.
             *     * `smallestOpenAmountFirst` - Applies the payment to invoices with the smallest open amounts first.
             *     * `createAdvance` - Creates an advance payment when no invoices match the bank transactions. Applies when `createAdvances` is set to `true`.
             * @example matchToOpenAmount
             * @enum {string}
             */
            paymentApplicationMethod?: "matchToOpenAmount" | "oldestInvoiceFirst" | "mostRecentInvoiceFirst" | "largestOpenAmountFirst" | "smallestOpenAmountFirst" | "createAdvance";
            /**
             * @description Provides a brief note or comment about the received payment.
             * @example Auto generated
             */
            paymentMemo?: string;
            /**
             * @description Indicates whether advance payments are created when no invoices match the bank transactions.  When `true` an advance is created for each unmatched bank transaction. Applies when `paymentApplicationMethod` is set to `createAdvance`.
             * @default false
             * @example false
             */
            createAdvances?: boolean;
            /**
             * @description Indicates whether the received payment should be recorded as a draft payment.
             * @default false
             * @example false
             */
            isDraft?: boolean;
            /** @description References the AR advance template used to create advances for the received payment.. */
            arAdvanceTemplate?: {
                /**
                 * @description Unique for the AR advance transaction template.
                 * @example 20
                 */
                key?: string;
                /**
                 * @description Identifier for the AR advance transaction template.
                 * @example AR-advance-txn-template-001
                 */
                id?: string;
                /**
                 * @description URL endpoint for the AR advance transaction template.
                 * @example /objects/cash-management/ar-advance-txn-template/20
                 */
                readonly href?: string;
            };
            /** @description References the AR payment associated with the received payment. */
            arPayment?: {
                /**
                 * @description Unique key for the AR payment.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Identifier for the AR payment.
                 * @example 10
                 */
                id?: string;
                /**
                 * @description URL endpoint for the AR payment.
                 * @example /objects/accounts-receivable/payment/10
                 */
                readonly href?: string;
                /**
                 * @description References the payment method for the received payment.
                 * @example printedCheck
                 * @enum {string}
                 */
                paymentMethod?: "" | "printedCheck" | "creditCard" | "eft" | "cash" | "onlineChargeCard" | "onlineAchDebit";
            };
            /** @description References a collection of lines associated with the received payment. */
            receivedPaymentLine?: components["schemas"]["objects.cash-management.received-payment-line"][];
            readonly audit?: components["schemas"]["audit.s1"];
        };
        "cash-management-received-paymentRequiredProperties": {
            arPayment?: Record<string, never>;
            receivedPaymentLine?: {
                bankTxnRecord?: Record<string, never>;
            }[];
        };
        /** @description Line items represent details for each received payment or advance, including the bank transaction record and the Sage Intacct transaction record. */
        "objects.cash-management.received-payment-line": {
            /**
             * @description System-assigned unique key for the received payment line.
             * @example 24
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the received payment line. This value is the same as `key` for this object.
             * @example 24
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the received payment line.
             * @example /objects/received-payment-line/24
             */
            readonly href?: string;
            /** @description References the bank transaction for processing the received payment line. */
            bankTxnRecord?: {
                /**
                 * @description Unique key for the bank transaction.
                 * @example 6213
                 */
                key?: string;
                /**
                 * @description Identifier for the bank transaction.
                 * @example 6213
                 */
                id?: string;
                /**
                 * @description URL endpoint for the bank transaction.
                 * @example /objects/cash-management/bank-transaction/6213
                 */
                readonly href?: string;
            };
            /** @description References the AP subledger record associated with the received payment line. */
            readonly intacctTxnRecord?: {
                /**
                 * @description Unique key for the AP subledger record.
                 * @example 645
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the AP subledger record.
                 * @example 645
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the AP subledger record.
                 * @example /objects/accounts-payable/subledger-record/645
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates the current status for the received payment line.
             * @default success
             * @example success
             * @enum {string}
             */
            readonly status?: "success" | "failure";
            /**
             * @description Provides a brief description of the error message if the `status` is `failure`.
             * @example Payment date cannot be before invoice creation date.
             */
            readonly errorMessage?: string;
            /** @description Reference to the received payment associated with this payment line. */
            readonly receivedPayment?: {
                /**
                 * @description Unique key for the received payment.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the received payment.
                 * @example 23
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the received payment.
                 * @example /objects/cash-management/received-payment/23
                 */
                readonly href?: string;
            };
            readonly audit?: components["schemas"]["audit.s1"];
        };
        /** @description AR advance transaction templates define how to create new advance transactions in Sage Intacct based on data from an import file or bank feed. */
        "objects.cash-management.ar-advance-txn-template": {
            /**
             * @description System-assigned unique key for the AR advance transaction template.
             * @example 20
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the AR advance transaction template.
             * @example AR-CUST-DEPOSIT-TMPL-03
             */
            id?: string;
            /**
             * @description URL endpoint for the AR advance transaction template.
             * @example /objects/cash-management/ar-advance-txn-template/20
             */
            readonly href?: string;
            /**
             * @description Specifies the name of the AR advance transaction template.
             * @example AR Customer Deposit Template 03
             */
            name?: string;
            /**
             * @description Provides a brief description of the AR advance transaction template.
             * @example AR Customer Deposit - Standard
             */
            description?: string;
            /**
             * @description Indicates how the AR transaction was created, for example, manually, or through an import.
             * @example CSV Import
             */
            txnSource?: string;
            readonly audit?: components["schemas"]["audit.s1"];
            /** @description References a collection of transaction lines associated with the AR advance transaction template. */
            lines?: components["schemas"]["objects.cash-management.ar-advance-txn-line-template"][];
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
        };
        "cash-management-ar-advance-txn-templateRequiredProperties": {
            lines?: unknown[];
        };
        /** @description AR advance transaction line templates define the line-level details for AR advance transactions. Each line template specifies how portions of an AR advance transaction are recorded in the General Ledger (GL), including account and dimension assignments. */
        "objects.cash-management.ar-advance-txn-line-template": {
            /**
             * @description System-assigned unique key for the AR advance transaction line template.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the AR advance transaction line template. This value is the same as `key` for this object.
             * @example 12
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AR advance transaction line template.
             * @example /objects/cash-management/ar-advance-txn-line-template/12
             */
            readonly href?: string;
            /**
             * @description Provides a brief description or memo for the AR advance transaction line template.
             * @example Customer prepayment for conference equipment.
             */
            memo?: string;
            /** @description References the General Ledger (GL) account for the AR advance transaction line template. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 9
                 */
                key?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/9
                 */
                readonly href?: string;
                /**
                 * @description Identifier for the GL account.
                 * @example 1000
                 */
                id?: string;
            };
            /**
             * @description Account label for the AR advance transaction line template.
             * @example Customer Deposits
             */
            accountLabel?: string;
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * department
                 * @description Department associated with the AR advance transaction line template.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 11
                     */
                    key?: string;
                    /**
                     * @description Identifier for the department.
                     * @example DEP-11
                     */
                    id?: string;
                    /**
                     * @description Name of the department.
                     * @example Sales and Marketing
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/11
                     */
                    readonly href?: string;
                };
            };
            /** @description Reference to the transaction template associated with the AR advance transaction line template. */
            arAdvanceTxnTemplate?: {
                /**
                 * @description Identifier for the AR advance transaction template.
                 * @example 20
                 */
                id?: string;
                /**
                 * @description Unique key for the AR advance transaction template.
                 * @example 20
                 */
                key?: string;
                /**
                 * @description URL endpoint for the AR advance transaction template.
                 * @example /objects/cash-management/ar-advance-txn-template/20
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            readonly audit?: components["schemas"]["audit.s1"];
        };
        /** @description Journal entry templates store predefined information used to populate journal entries generated from them. */
        "objects.cash-management.journal-entry-template": {
            /**
             * @description System-assigned unique key for the journal entry template.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the journal entry template.
             * @example MONTHLY_ACCRUALS_TMPL_001
             */
            id?: string;
            /**
             * @description URL endpoint for the template.
             * @example /objects/cash-management/journal-entry-template/1
             */
            readonly href?: string;
            /**
             * @description Name for the journal entry template.
             * @example Monthly Accruals Template
             */
            name?: string;
            /**
             * @description Description for the template.
             * @example Template for recording standard monthly accruals.
             */
            description?: string;
            /**
             * @description Specify the state in which to create journal entries based on this template:
             *
             *     `draft` - The journal entry is created in a draft state. A draft match for reconciliation is also created.
             *     `posted` - Posted directly to the general ledger when the journal entry is created.
             * @default draft
             * @example draft
             * @enum {string}
             */
            postingState?: "draft" | "posted";
            /** @description General ledger journal where entries based on this template will be posted. */
            glJournal?: {
                /**
                 * @description Unique key for the journal.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Identifier for the journal.
                 * @example APJ
                 */
                id?: string;
                /**
                 * @description URL endpoint for the journal.
                 * @example /objects/general-ledger/journal/3
                 */
                readonly href?: string;
            };
            /** @description Line items included in this journal entry template. */
            lines?: components["schemas"]["objects.cash-management.journal-entry-line-template"][];
            readonly audit?: components["schemas"]["audit.s1"];
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            /**
             * @description Number of rules that use this template.
             * @default 0
             * @example 1
             */
            readonly numberOfRulesUsingTemplate?: number;
            /**
             * @description Tax implications for journal entries based on this template. Only applies to companies subscribed to the Taxes application.
             *
             *     `none` - journal entries based on this template will not include tax.
             *     `inbound` (purchases inclusive of tax) - journal entries based on this template will record taxes on purchases.
             *     `outbound` (sales inclusive of tax ) - journal entries based on this template will record taxes on sales.
             * @default null
             * @example none
             * @enum {string|null}
             */
            taxImplication?: null | "none" | "inbound" | "outbound";
            /** @description Tax solution to use for journal entries based on this template. Different tax solutions are available for different countries, for example, Australia GST, South Africa VAT, UK VAT. Only applies to companies subscribed to the Taxes application. */
            taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description Identifier for the tax solution.
                 * @example Australia GST
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/11
                 */
                readonly href?: string;
            };
            /** @description Specify the Purchasing tax schedule when the `taxImplication` is set to `inbound`. Only applies to companies subscribed to the Taxes application. */
            purchasingTaxSchedule?: {
                /**
                 * @description Unique key for the purchasing tax schedule.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the tax schedule.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description Name for the purchasing tax schedule.
                 * @example AU-GST Purchases - Standard
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the tax schedule.
                 * @example /objects/tax/purchasing-tax-schedule/1
                 */
                readonly href?: string;
            };
            /** @description Specify the Sales tax schedule when the `taxImplication` is set to `outbound`. Only applies to companies subscribed to the Taxes application. */
            salesTaxSchedule?: {
                /**
                 * @description Unique key for the sales tax schedule.
                 * @example 7
                 */
                key?: string;
                /**
                 * @description Identifier for the tax schedule.
                 * @example 7
                 */
                id?: string;
                /**
                 * @description Name for the sales tax schedule.
                 * @example AU-GST Sales - Standard
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the tax schedule.
                 * @example /objects/tax/order-entry-tax-schedule/7
                 */
                readonly href?: string;
            };
            /** @description Specify the customer when the `taxImplication` is set to `outbound`. Only applies to companies subscribed to the Taxes application. */
            customer?: {
                /**
                 * @description Unique key for customer.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the customer.
                 * @example GLOBALTECH-0023
                 */
                id?: string;
                /**
                 * @description Name for the customer.
                 * @example GlobalTech Solutions Ltd
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/23
                 */
                readonly href?: string;
            };
            /** @description Specify the vendor when the `taxImplication` is set to `inbound`. Only applies to companies subscribed to the Taxes application. */
            vendor?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Identifier for the vendor.
                 * @example PACIFIC-003
                 */
                id?: string;
                /**
                 * @description Name for the vendor.
                 * @example Pacific Office Supplies Ltd
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/3
                 */
                readonly href?: string;
            };
        };
        "cash-management-journal-entry-templateRequiredProperties": Record<string, never>;
        /** @description Journal entry line templates store predefined information to quickly populate the lines of a journal entry generated from a journal entry template. */
        "objects.cash-management.journal-entry-line-template": {
            /**
             * @description System-assigned unique key for the journal entry line template.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the line template. This value is the same as `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the line template.
             * @example /objects/cash-management/journal-entry-line-template/1
             */
            readonly href?: string;
            /**
             * @description Document number of this journal entry line template.
             * @example JE-2025-0345
             */
            documentId?: string;
            /**
             * @description Brief notes providing additional context for the journal entry line template.
             * @example Monthly Accrual - Utilities Expense
             */
            memo?: string;
            /**
             * @description Number of units associated with the journal entry line template.
             * @example 100
             */
            numberOfUnits?: number;
            /** @description Exchange rate details used to calculate the base amount for journal entry lines created from this template. */
            exchangeRate?: {
                /**
                 * Format: date
                 * @description Date for the Exchange rate used to calculate the base amount. This can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                 * @example 2021-01-23
                 */
                date?: string;
                /**
                 * @description Exchange rate used to calculate the base amount.
                 * @example 1.0789
                 */
                rate?: number;
                /**
                 * @description Exchange rate type used to calculate the base amount.
                 * @example 1
                 */
                typeId?: string;
            };
            /**
             * @description Specifies whether the journal entry line created from this template is a debit or a credit.
             * @default null
             * @example debit
             * @enum {string|null}
             */
            txnType?: null | "debit" | "credit";
            /**
             * @description Indicates whether the journal entry line created from this template is billable.
             * @default false
             * @example true
             */
            isBillable?: boolean;
            /** @description Automatically distributes the journal line created from this template across multiple dimensions such as departments, locations, projects, or classes. */
            allocation?: {
                /**
                 * @description Identifier for the allocation.
                 * @example 2
                 */
                id?: string;
                /**
                 * @description Unique key for the allocation.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description URL endpoint for the allocation.
                 * @example /objects/allocation/2
                 */
                readonly href?: string;
            };
            glAccount?: components["schemas"]["gl-account-ref"];
            dimensions?: components["schemas"]["dimension-ref"];
            /** @description Journal entry template that contains this journal entry line template. */
            journalEntryTemplate?: {
                /**
                 * @description Identifier for the journal entry template.
                 * @example 2
                 */
                id?: string;
                /**
                 * @description Unique key for journal entry template.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description URL endpoint for the journal entry template.
                 * @example /objects/cash-management/journal-entry-template/2
                 */
                readonly href?: string;
            };
        };
        /** @description Payment provider object */
        "objects.cash-management.payment-provider": {
            /**
             * @description System-assigned key for the payment provider.
             * @example 3
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the payment provider.
             * @example CSI
             */
            readonly id?: string;
            /** @example /objects/cash-management/payment-provider/3 */
            readonly href?: string;
            /**
             * @description Subscription state of the payment provider.
             * @default inProgress
             * @example requestInitiated
             * @enum {string}
             */
            state?: "requestInitiated" | "inProgress" | "requestReceived" | "requestFailed" | "awaitingAuthorization" | "subscribed" | "canceled" | "suspended" | "pending";
            /**
             * @description Name of the payment provider.
             * @example CSI
             */
            name?: string;
            /**
             * @description Mode of withdrawal of payment funds.
             * @example lumpSum
             * @enum {string}
             */
            readonly paymentWithdrawalType?: "lumpSum" | "perTransaction";
            contactInfo?: {
                /**
                 * @description Email Id of the primary contact person for notifications.
                 * @example pavan@company.com
                 */
                readonly email?: string;
                /**
                 * @description First name of the primary contact person.
                 * @example John
                 */
                readonly firstName?: string;
                /**
                 * @description Last name of the primary contact person.
                 * @example Doe
                 */
                readonly lastName?: string;
            };
            paymentMethods?: components["schemas"]["objects.cash-management.provider-payment-method"][];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Links a bank account with the specified payment provider as part of electronic payments setup. */
        "objects.cash-management.payment-provider-bank-account": {
            /**
             * @description System-assigned key for the provider bank account.
             * @example 19
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the provider bank account.
             * @example 19
             */
            readonly id?: string;
            /**
             * @description Subscription status provided by the payment provider.
             * @example requestInitiated
             * @enum {string}
             */
            readonly state?: "requestInitiated" | "inProgress" | "requestReceived" | "requestFailed" | "awaitingAuthorization" | "subscribed" | "canceled" | "suspended";
            /**
             * @description Reference number specific to the payment provider, which is a combination of cny#, bank account key, and timestamp.
             * @example 44397977-49-1635423682
             */
            readonly providerReferenceNumber?: string;
            /**
             * @description Authentication URL specific to the payment provider. This is sent by the payment provider after successful subscription.
             * @example https://myauthurl.example.com/subscription/authenticate
             */
            readonly authenticationURL?: string;
            /**
             * @description Starting check number specific to the payment provider.
             * @example 111999
             */
            checkStartNumber?: string;
            /**
             * @description Indicates whether this is the account in which virtual card payment rebates are deposited.
             * @default false
             * @example true
             */
            isRebateAccount?: boolean;
            /**
             * @description Email address to receive the bank remittance.
             * @example jsmith@example.com
             */
            remittanceEmail?: string;
            bankAccount?: {
                /**
                 * @description System-assigned key for the bank account.
                 * @example 72
                 */
                key?: string;
                /**
                 * @description Unique identifier for the bank account.
                 * @example BOA
                 */
                id?: string;
                /**
                 * @description Type of currency for the bank account.
                 * @example USD
                 */
                readonly currency?: string;
                /** @example /objects/cash-management/checking-account/72 */
                readonly href?: string;
            };
            paymentProvider?: {
                /**
                 * @description System-assigned key for the payment provider.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the payment provider.
                 * @example CSI
                 */
                id?: string;
                /** @example /objects/cash-management/payment-provider/1 */
                readonly href?: string;
            };
            /** @example /objects/cash-management/payment-provider-bank-account/19 */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
            status?: components["schemas"]["status"];
        };
        /** @description Provider payment methods */
        "objects.cash-management.provider-payment-method": {
            /**
             * @description System-assigned key for the provider payment method.
             * @example 454
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the provider payment method.
             * @example 454
             */
            readonly id?: string;
            /** @example /objects/cash-management/provider-payment-method/454 */
            readonly href?: string;
            /**
             * @description Payment type for the provider payment method.
             * @example CHECK
             */
            paymentType?: string;
            status?: components["schemas"]["status"];
            /**
             * @example {
             *       "id": "CSI",
             *       "name": "CSI",
             *       "key": "3",
             *       "href": "/objects/cash-management/payment-provider/3"
             *     }
             */
            paymentProvider?: {
                /**
                 * @description System-assigned key for the payment provider.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Unique identifier for the payment provider.
                 * @example CSI
                 */
                id?: string;
                /**
                 * @description Name of the payment provider.
                 * @example CSI
                 */
                name?: string;
                /** @example /objects/cash-management/payment-provider/3 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
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
        /**
         * @description Time zone.
         * @example GMT-08:00 Pacific Standard Time
         * @enum {string|null}
         */
        timezone: null | "GMT (Greenwich Mean Time) Dublin, Edinburgh, London" | "GMT+00:00 Western Europe Time" | "GMT+01:00 Western Europe Summer Time" | "GMT+01:00 British Summer Time" | "GMT+01:00 Irish Summer Time" | "GMT+01:00 Central Europe Time" | "GMT+01:00 Berlin, Stockholm, Rome, Bern, Brussels" | "GMT+01:00 Lisbon, Warsaw" | "GMT+01:00 Paris, Madrid" | "GMT+01:00 Prague" | "GMT+02:00 Central Europe Summer Time" | "GMT+02:00 Eastern Europe Time" | "GMT+02:00 Athens, Helsinki, Istanbul" | "GMT+02:00 Cairo" | "GMT+02:00 Harare, Pretoria" | "GMT+02:00 Israel" | "GMT+03:00 Eastern Europe Summer Time" | "GMT+03:00 Baghdad, Kuwait, Nairobi, Riyadh" | "GMT+03:00 Moscow, St. Petersburg, Volgograd" | "GMT+03:30 Tehran" | "GMT+04:00 Moscow Summer Time" | "GMT+04:00 Abu Dhabi, Muscat, Tbilisi, Kazan" | "GMT+04:30 Kabul" | "GMT+05:00 Islamabad, Karachi, Sverdlovsk, Tashkent" | "GMT+05:30 Bombay, Calcutta, Madras, New Delhi" | "GMT+06:00 Almaty, Dhaka" | "GMT+07:00 Bangkok, Jakarta, Hanoi" | "GMT+08:00 Beijing, Chongqing, Urumqi" | "GMT+08:00 Hong Kong SAR, Perth, Singapore, Taipei" | "GMT+08:00 (Australian) Western Standard Time" | "GMT+09:00 Tokyo, Osaka, Sapporo, Seoul, Yakutsk" | "GMT+09:30 (Australian) Central Standard Time" | "GMT+10:30 (Australian) Central Daylight Time" | "GMT+09:30 Adelaide" | "GMT+09:30 Darwin" | "GMT+10:00 Brisbane, Melbourne, Sydney" | "GMT+10:00 Guam, Port Moresby" | "GMT+10:00 Vladivostok" | "GMT+10:00 (Australian) Eastern Standard Time" | "GMT+11:00  (Australian) Eastern Daylight Time" | "GMT+12:00 Fiji Islands, Marshall Islands" | "GMT+12:00 Kamchatka" | "GMT+12:00 Magadan, Solomon Islands, New Caledonia" | "GMT+12:00 Wellington, Auckland" | "GMT+13:00 Nuku`alofa" | "GMT+13:00 Samoa" | "GMT-01:00 Azores, Cape Verde Island" | "GMT-03:00 Brasilia" | "GMT-03:00 Buenos Aires, Georgetown" | "GMT-03:30 Newfoundland Standard Time" | "GMT-02:30 Newfoundland Daylight Time" | "GMT-04:00 Atlantic Standard Time" | "GMT-03:00 Atlantic Daylight Time" | "GMT-04:00 Caracas, La Paz" | "GMT-05:00 Bogota, Lima" | "GMT-05:00 Eastern Standard Time" | "GMT-04:00 Eastern Daylight Saving Time" | "GMT-05:00 Indiana (East)" | "GMT-06:00 Central Standard Time" | "GMT-05:00 Central Daylight Saving Time" | "GMT-06:00 Mexico City, Tegucigalpa" | "GMT-06:00 Saskatchewan" | "GMT-07:00 Arizona" | "GMT-07:00 Mountain Standard Time" | "GMT-06:00 Mountain Daylight Saving Time" | "GMT-08:00 Pacific Standard Time" | "GMT-07:00 Pacific Daylight Saving Time" | "GMT-09:00 Alaska Standard Time" | "GMT-08:00 Alaska Standard Daylight Saving Time" | "GMT-10:00 Hawaii" | "GMT-11:00 Midway Island, Samoa" | "GMT-12:00 Eniwetok, Kwajalein";
        /**
         * @description Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
         * @default active
         * @example active
         * @enum {string}
         */
        status: "active" | "inactive";
        "banking-cloud-connection": {
            /**
             * @description Name of the connected bank account
             * @example Plaid Checking
             */
            readonly name?: string;
            /**
             * @description Name of the connected bank
             * @example Bank of America
             */
            readonly bankName?: string;
            /**
             * @description Connected bank status
             * @example connected
             * @enum {string|null}
             */
            readonly status?: null | "notConnected" | "connectionRequested" | "inProgress" | "pending" | "pendingConfirmation" | "connected" | "authRequired" | "verifyingAuth" | "inactiveFeed" | "inactiveClient" | "canceled" | "invalid" | "canceling" | "disconnecting";
            /**
             * @description Transaction import connection status
             * @example connected
             * @enum {string|null}
             */
            readonly importStatus?: null | "initiated" | "connected";
            /**
             * Format: date-time
             * @description Date of the last bank transaction received
             * @example 2014-01-08T11:28:12Z
             */
            readonly lastBankTxnDateTime?: string;
            /**
             * Format: date-time
             * @description Date of the last attempt of fetching bank transactions
             * @example 2014-01-08T11:28:12Z
             */
            readonly lastRefreshedDateTime?: string;
            /**
             * @description Current status Of fetching bank transaction
             * @default null
             * @example queued
             * @enum {string|null}
             */
            readonly refreshStatus?: null | "queued" | "refreshing" | "success" | "partialSuccess" | "failure";
            /**
             * @description Does account support multi account linking
             * @default true
             * @example true
             */
            readonly supportMultiAccountLinking?: boolean;
            /** @description Available balance information from connected bank */
            readonly availableBalance?: {
                /**
                 * Format: decimal-precision-2
                 * @description Available balance amount
                 * @example 100.00
                 */
                readonly amount?: string | null;
                /**
                 * Format: date
                 * @description Available balance date
                 * @example 2014-01-08
                 */
                readonly date?: string | null;
            };
            /** @description Ledger balance information from connected bank */
            readonly ledgerBalance?: {
                /**
                 * Format: decimal-precision-2
                 * @description Ledger balance amount
                 * @example 100.00
                 */
                readonly amount?: string | null;
                /**
                 * Format: date
                 * @description Ledger balance date
                 * @example 2014-01-08
                 */
                readonly date?: string | null;
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
         * @description Reconciliation status
         * @default initiated
         * @example reconciled
         * @enum {string}
         */
        "reconciliation-status": "initiated" | "draft" | "reconciled";
        /**
         * @description Transaction posting state
         * @example posted
         * @enum {string}
         */
        "transaction-state": null | "draft" | "submitted" | "approved" | "partiallyApproved" | "unapproved" | "printVoided" | "confirmed" | "voided" | "quickDelivery" | "draftState" | "partiallyApproved" | "posted" | "declined" | "reversalPending" | "reversed";
        /**
         * @description Record type
         * @example otherReceipts
         * @enum {string}
         */
        "record-type": "debitCardTransaction" | "creditCardFees" | "depositSlips" | "bankCharge" | "creditCardCharge" | "manualCheck" | "bankInterest" | "creditCardPayment" | "quickInvoice" | "otherReceipts" | "fundsTransfer" | "cashMgmtPrintedQuickCheck" | "chargePayoffPayment" | "employeeExpenses" | "expenseRealizedMultiCurrencyGainLoss" | "appliedEmployeeAdvance" | "employeeReimbursements" | "employeeAdvance" | "apAdjustments" | "apDiscount" | "interEntityPayable" | "apBill" | "apRealizedMultiCurrencyGainLoss" | "apAppliedAdvance" | "apPayment" | "apAdvance" | "arAdjustments" | "arDiscount" | "interEntityReceivable" | "arInvoice" | "arRealizedMultiCurrencyGainLoss" | "arAppliedAdvanceOverpayment" | "arReceipts" | "arAdvance" | "journalEntry" | "arJournalEntry" | "apJournalEntry" | "arInitialOpenItems" | "apInitialOpenItems" | "arInitialOpenItemSummary" | "apInitialOpenItemSummary" | "arCcInitialOpenItems" | "apCcInitialOpenItems" | "arCcInitialOpenItemSummary" | "apCcInitialOpenItemSummary";
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
    "list-cash-management-financial-institution": {
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
    "create-cash-management-financial-institution": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.financial-institution"] & components["schemas"]["cash-management-financial-institutionRequiredProperties"];
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
    "get-cash-management-financial-institution-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the financial institution.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.financial-institution"];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-cash-management-financial-institution-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the financial institution.
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
    "update-cash-management-financial-institution-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the financial institution.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.financial-institution"];
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
    "list-cash-management-bank-account": {
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
    "get-cash-management-bank-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bank account.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-account"];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-checking-account": {
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
    "post-objects-checking-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new checking account */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.checking-account"] & components["schemas"]["cash-management-checking-accountRequiredProperties"];
            };
        };
        responses: {
            /** @description Created checking account */
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
    "get-cash-management-checking-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the checking account.
                 * @example 539
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
                        "ia::result"?: components["schemas"]["objects.cash-management.checking-account"];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-objects-checking-account": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the checking account.
                 * @example 539
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
    "patch-objects-checking-account": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the checking account.
                 * @example 539
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.checking-account"] & {
                    readonly id?: unknown;
                };
            };
        };
        responses: {
            /** @description Updated checking account */
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
    "list-cash-management-credit-card-account": {
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
    "post-objects-credit-card-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.credit-card-account"] & components["schemas"]["cash-management-credit-card-accountRequiredProperties"];
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
    "get-cash-management-credit-card-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the credit card account.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.credit-card-account"];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-cash-management-credit-card-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the credit card account.
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
    "patch-objects-credit-card-account": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the credit card account.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.credit-card-account"] & {
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
        };
    };
    "list-cash-management-savings-account": {
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
    "post-objects-savings-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.savings-account"] & components["schemas"]["cash-management-savings-accountRequiredProperties"];
            };
        };
        responses: {
            /** @description Created savings account */
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
    "get-cash-management-savings-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the savings account.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.savings-account"];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-cash-management-savings-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the savings account.
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
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error-response"];
                };
            };
        };
    };
    "patch-objects-savings-account": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the savings account.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.savings-account"] & {
                    readonly id?: unknown;
                };
            };
        };
        responses: {
            /** @description Updated savings-account */
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
    "list-cash-management-bank-transaction": {
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
    "get-cash-management-bank-transaction-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction.
                 * @example 281
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-transaction"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "assign-customer-cash-management-bank-transaction": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["cash-management-bank-transaction-actions-assign-customer-request"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["cash-management-bank-transaction-actions-assign-customer-response"];
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "ignore-cash-management-bank-transaction": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["cash-management-bank-transaction-actions-ignore-request"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["cash-management-bank-transaction-actions-ignore-response"];
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "stop-ignoring-cash-management-bank-transaction": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["cash-management-bank-transaction-actions-stop-ignoring-request"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["cash-management-bank-transaction-actions-stop-ignoring-response"];
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-bank-txn-rule-set": {
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
    "create-cash-management-bank-txn-rule-set": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.bank-txn-rule-set"] & components["schemas"]["cash-management-bank-txn-rule-setRequiredProperties"];
            };
        };
        responses: {
            /** @description Created rule set */
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
    "get-cash-management-bank-txn-rule-set-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction rule set.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-txn-rule-set"];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-cash-management-bank-txn-rule-set-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction rule set.
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
    "update-cash-management-bank-txn-rule-set-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction rule set.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.bank-txn-rule-set"] & {
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
    "list-cash-management-bank-txn-rule-set-run-log": {
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
    "create-cash-management-bank-txn-rule-set-run-log": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a bank transaction rule set run log. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.bank-txn-rule-set-run-log"] & components["schemas"]["cash-management-bank-txn-rule-set-run-logRequiredProperties"];
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
    "get-cash-management-bank-txn-rule-set-run-log-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction rule set run log.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-txn-rule-set-run-log"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-bank-txn-rule-set-run-detail": {
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
    "get-cash-management-bank-txn-rule-set-run-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction rule set run details.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-txn-rule-set-run-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-bank-txn-rule": {
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
    "create-cash-management-bank-txn-rule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.bank-txn-rule"] & components["schemas"]["cash-management-bank-txn-ruleRequiredProperties"];
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
    "get-cash-management-bank-txn-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bank transaction rule.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-txn-rule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-cash-management-bank-txn-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bank transaction rule.
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
    "update-cash-management-bank-txn-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bank transaction rule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.bank-txn-rule"] & {
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
    "list-cash-management-bank-txn-rule-filter": {
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
    "get-cash-management-bank-txn-rule-filter-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction rule filter.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-txn-rule-filter"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-bank-txn-rule-group": {
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
    "get-cash-management-bank-txn-rule-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bank transaction rule group.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-txn-rule-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-bank-txn-rule-map": {
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
    "get-cash-management-bank-txn-rule-map-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction rule map.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-txn-rule-map"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-cash-management-bank-txn-rule-map-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction rule map.
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
    "list-cash-management-bank-txn-rule-match": {
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
    "get-cash-management-bank-txn-rule-match-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction rule match entry.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-txn-rule-match"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-bank-txn-assignment-rule": {
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
    "create-cash-management-bank-txn-assignment-rule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.bank-txn-assignment-rule"] & components["schemas"]["cash-management-bank-txn-assignment-ruleRequiredProperties"];
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
    "get-cash-management-bank-txn-assignment-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction assignment rule.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-txn-assignment-rule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-cash-management-bank-txn-assignment-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction assignment rule.
                 * @example 153
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
    "update-cash-management-bank-txn-assignment-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction assignment rule.
                 * @example 153
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.bank-txn-assignment-rule"] & {
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
    "list-cash-management-bank-txn-assignment-rule-filter": {
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
    "get-cash-management-bank-txn-assignment-rule-filter-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank transaction assignment rule filter.
                 * @example 105
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-txn-assignment-rule-filter"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-bank-fee": {
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
    "create-cash-management-bank-fee": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.bank-fee"] & components["schemas"]["cash-management-bank-feeRequiredProperties"];
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
    "get-cash-management-bank-fee-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank fee.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-fee"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-cash-management-bank-fee-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank fee.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.bank-fee"] & {
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
    "reverse-cash-management-bank-fee": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["cash-management-bank-fee-actions-reverse-request"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["cash-management-bank-fee-actions-reverse-response"];
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-bank-fee-line": {
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
    "get-cash-management-bank-fee-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank fee line.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-fee-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-bank-fee-tax-entry": {
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
    "get-cash-management-bank-fee-tax-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank fee tax entry.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-fee-tax-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-bank-file": {
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
    "get-cash-management-bank-file-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank file.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-file"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-cash-management-bank-file-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank file.
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
    "list-cash-management-bank-file-detail": {
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
    "get-cash-management-bank-file-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank file detail object.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-file-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "generate-bank-file": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["cash-management-generate-bank-file-generate-request"];
            };
        };
        responses: {
            /** @description Bank file generated successfully. No content to return. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error in processing one or more records. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["cash-management-generate-bank-file-generate-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
        };
    };
    "list-cash-management-bank-feed": {
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
    "create-cash-management-bank-feed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.bank-feed"] & components["schemas"]["cash-management-bank-feedRequiredProperties"];
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-feed"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-cash-management-bank-feed-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the the bank feed.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-feed"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-cash-management-bank-feed-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the the bank feed.
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
    "list-cash-management-bank-reconciliation": {
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
    "create-cash-management-bank-reconciliation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.bank-reconciliation"] & components["schemas"]["cash-management-bank-reconciliationRequiredProperties"];
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
    "get-cash-management-bank-reconciliation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bank reconciliation.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-reconciliation"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-bank-reconciliation-record": {
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
    "get-cash-management-bank-reconciliation-record-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bank reconciliation record.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.bank-reconciliation-record"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "reopen-cash-management-bank-reconciliation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["cash-management-bank-reconciliation-actions-reopen-request"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["cash-management-bank-reconciliation-actions-reopen-response"];
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-reconciliation-source-record": {
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
    "get-cash-management-reconciliation-source-record-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account reconciliation source record.
                 * @example 137
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
                        "ia::result"?: components["schemas"]["objects.cash-management.reconciliation-source-record"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-initial-open-item": {
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
    "get-cash-management-initial-open-item-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the initial open item.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.initial-open-item"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-credit-card-txn": {
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
    "create-cash-management-credit-card-txn": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.credit-card-txn"] & components["schemas"]["cash-management-credit-card-txnRequiredProperties"];
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
    "get-cash-management-credit-card-txn-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card transaction.
                 * @example 135
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
                        "ia::result"?: components["schemas"]["objects.cash-management.credit-card-txn"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-cash-management-credit-card-txn-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card transaction.
                 * @example 135
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
    "update-cash-management-credit-card-txn-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card transaction.
                 * @example 135
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.credit-card-txn"];
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
    "reverse-cash-management-credit-card-txn": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["cash-management-credit-card-txn-actions-reverse-request"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["cash-management-credit-card-txn-actions-reverse-response"];
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-credit-card-txn-line": {
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
    "get-cash-management-credit-card-txn-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card transaction line item.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.credit-card-txn-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-credit-card-txn-tax-entry": {
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
    "get-cash-management-credit-card-txn-tax-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card transaction tax entry.
                 * @example 135
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
                        "ia::result"?: components["schemas"]["objects.cash-management.credit-card-txn-tax-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-credit-card-txn-template": {
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
    "create-cash-management-credit-card-txn-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.credit-card-txn-template"] & components["schemas"]["cash-management-credit-card-txn-templateRequiredProperties"];
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
    "get-cash-management-credit-card-txn-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card transaction template.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.credit-card-txn-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-cash-management-credit-card-txn-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card transaction template.
                 * @example 3
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
    "update-cash-management-credit-card-txn-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card transaction template.
                 * @example 3
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.credit-card-txn-template"] & {
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
    "list-cash-management-credit-card-txn-line-template": {
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
    "get-cash-management-credit-card-txn-line-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card transaction line template.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.credit-card-txn-line-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-credit-card-fee": {
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
    "create-cash-management-credit-card-fee": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.credit-card-fee"] & components["schemas"]["cash-management-credit-card-feeRequiredProperties"];
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
    "get-cash-management-credit-card-fee-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card fee.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.credit-card-fee"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-cash-management-credit-card-fee-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card fee.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.credit-card-fee"] & {
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
    "list-cash-management-credit-card-fee-line": {
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
    "get-cash-management-credit-card-fee-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card fee line.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.credit-card-fee-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-credit-card-fee-tax-entry": {
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
    "get-cash-management-credit-card-fee-tax-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card fee tax entry.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.credit-card-fee-tax-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "reverse-cash-management-credit-card-fee": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["cash-management-credit-card-fee-actions-reverse-request"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["cash-management-credit-card-fee-actions-reverse-response"];
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-credit-card-reconciliation": {
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
    "create-cash-management-credit-card-reconciliation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.credit-card-reconciliation"] & components["schemas"]["cash-management-credit-card-reconciliationRequiredProperties"];
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
    "get-cash-management-credit-card-reconciliation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card reconciliation.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.credit-card-reconciliation"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-cash-management-credit-card-reconciliation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card reconciliation.
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
    "list-cash-management-credit-card-reconciliation-record": {
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
    "get-cash-management-credit-card-reconciliation-record-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the credit card reconciliation record.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.credit-card-reconciliation-record"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "reopen-cash-management-credit-card-reconciliation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["cash-management-credit-card-reconciliation-actions-reopen-request"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["cash-management-credit-card-reconciliation-actions-reopen-response"];
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-deposit": {
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
    "create-cash-management-deposit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new deposit. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.deposit"] & components["schemas"]["cash-management-depositRequiredProperties"];
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
    "get-cash-management-deposit-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the deposit.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.deposit"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-deposit-line": {
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
    "get-cash-management-deposit-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the deposit line.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.deposit-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-deposit-detail": {
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
    "get-cash-management-deposit-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the deposit detail.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.deposit-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-undeposited-fund": {
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
    "get-cash-management-undeposited-fund-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the undeposited fund.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.undeposited-fund"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "reverse-cash-management-deposit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["cash-management-deposit-actions-reverse-request"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["cash-management-deposit-actions-reverse-response"];
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-funds-transfer": {
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
    "create-cash-management-funds-transfer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.funds-transfer"] & components["schemas"]["funds-transferRequiredProperties"];
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
    "get-cash-management-funds-transfer-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the funds transfer.
                 * @example 129
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
                        "ia::result"?: components["schemas"]["objects.cash-management.funds-transfer"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-funds-transfer-line": {
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
    "get-cash-management-funds-transfer-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the funds transfer line.
                 * @example 127
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
                        "ia::result"?: components["schemas"]["objects.cash-management.funds-transfer-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "reverse-cash-management-funds-transfer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["cash-management-funds-transfer-actions-reverse-request"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["cash-management-funds-transfer-actions-reverse-response"];
                };
            };
        };
    };
    "list-cash-management-other-receipt": {
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
    "create-cash-management-other-receipt": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.other-receipt"] & components["schemas"]["cash-management-other-receiptRequiredProperties"];
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
    "get-cash-management-other-receipt-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the other receipt.
                 * @example 103
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
                        "ia::result"?: components["schemas"]["objects.cash-management.other-receipt"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-cash-management-other-receipt-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the other receipt.
                 * @example 103
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
    "update-cash-management-other-receipt-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the other receipt.
                 * @example 103
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.other-receipt"] & {
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
    "list-cash-management-other-receipt-line": {
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
    "get-cash-management-other-receipt-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an other receipt line item.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.other-receipt-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-other-receipt-tax-entry": {
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
    "get-cash-management-other-receipt-tax-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the other receipt tax entry.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.other-receipt-tax-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "reverse-cash-management-other-receipt": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["cash-management-other-receipt-actions-reverse-request"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["cash-management-other-receipt-actions-reverse-response"];
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-received-payment": {
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
    "create-cash-management-received-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.received-payment"] & components["schemas"]["cash-management-received-paymentRequiredProperties"];
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
    "get-cash-management-received-payment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the received payment.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.received-payment"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-received-payment-line": {
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
    "get-cash-management-received-payment-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the received payment line.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.received-payment-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-ar-advance-txn-template": {
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
    "create-cash-management-ar-advance-txn-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.ar-advance-txn-template"] & components["schemas"]["cash-management-ar-advance-txn-templateRequiredProperties"];
            };
        };
        responses: {
            /** @description Created template */
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
    "get-cash-management-ar-advance-txn-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the AR advance transaction template.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.ar-advance-txn-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-cash-management-ar-advance-txn-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the AR advance transaction template.
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
    "update-cash-management-ar-advance-txn-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the AR advance transaction template.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.ar-advance-txn-template"] & {
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
    "list-cash-management-ar-advance-txn-line-template": {
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
    "get-cash-management-ar-advance-txn-line-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the AR advance transaction line template.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.ar-advance-txn-line-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-journal-entry-template": {
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
    "create-cash-management-journal-entry-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.journal-entry-template"] & components["schemas"]["cash-management-journal-entry-templateRequiredProperties"];
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
    "get-cash-management-journal-entry-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the journal entry template.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.journal-entry-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-cash-management-journal-entry-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the journal entry template.
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
    "update-cash-management-journal-entry-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the journal entry template.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.journal-entry-template"] & {
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
    "list-cash-management-journal-entry-line-template": {
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
    "get-cash-management-journal-entry-line-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the journal entry line template.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.journal-entry-line-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-payment-provider": {
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
    "get-cash-management-payment-provider-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Payment provider key
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
                        "ia::result"?: components["schemas"]["objects.cash-management.payment-provider"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-cash-management-payment-provider-bank-account": {
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
    "create-cash-management-payment-provider-bank-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.payment-provider-bank-account"];
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
    "get-cash-management-payment-provider-bank-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the payment provider bank account.
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
                        "ia::result"?: components["schemas"]["objects.cash-management.payment-provider-bank-account"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-cash-management-payment-provider-bank-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the payment provider bank account.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.cash-management.payment-provider-bank-account"] & {
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
    "list-cash-management-provider-payment-method": {
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
    "get-cash-management-provider-payment-method-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Payment method key
                 * @example 454
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
                        "ia::result"?: components["schemas"]["objects.cash-management.provider-payment-method"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
}

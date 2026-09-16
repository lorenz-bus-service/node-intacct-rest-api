// Generated from spec/consolidation.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/consolidation/book": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List consolidation books
         * @description Returns a collection with a key, ID, and link for each consolidation book. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find account groups that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-consolidation-book"];
        put?: never;
        /**
         * Create a consolidation book
         * @description Creates a consolidation book.
         */
        post: operations["create-consolidation-book"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/book/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the consolidation book.
                 * @example 89
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a consolidation book
         * @description Returns detailed information for a specified consolidation book.
         */
        get: operations["get-consolidation-book-key"];
        put?: never;
        post?: never;
        /**
         * Delete a consolidation book
         * @description Deletes a consolidation book.
         */
        delete: operations["delete-consolidation-book-key"];
        options?: never;
        head?: never;
        /**
         * Update a consolidation book
         * @description Updates an existing consolidation book by setting field values. Any field values not provided remain unchanged.
         */
        patch: operations["update-consolidation-book-key"];
        trace?: never;
    };
    "/services/consolidation/book/consolidate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Consolidate a book for a specified period
         * @description Service to consolidate a book for a specified period.
         */
        post: operations["post-consolidation-book-consolidate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/entity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List consolidation entities
         * @description Returns a collection with a key, ID, and link for each consolidation entity. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find account groups that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-consolidation-entity"];
        put?: never;
        /**
         * Create a consolidation entity
         * @description Creates a consolidation entity.
         */
        post: operations["create-consolidation-entity"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/entity/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the consolidation entity.
                 * @example 74
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a consolidation entity
         * @description Returns detailed information for a specified consolidation entity.
         */
        get: operations["get-consolidation-entity-key"];
        put?: never;
        post?: never;
        /**
         * Delete a consolidation entity
         * @description Deletes a consolidation entity.
         */
        delete: operations["delete-consolidation-entity-key"];
        options?: never;
        head?: never;
        /**
         * Update a consolidation entity
         * @description Updates an existing consolidation entity by setting field values. Any field values not provided remain unchanged.
         */
        patch: operations["update-consolidation-entity-key"];
        trace?: never;
    };
    "/objects/consolidation/elimination-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List elimination accounts
         * @description Returns a collection with a key, ID, and link for each elimination account. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find account groups that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-consolidation-elimination-account"];
        put?: never;
        /**
         * Create an elimination account
         * @description Creates an elimination account.
         */
        post: operations["create-consolidation-elimination-account"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/elimination-account/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the elimination account.
                 * @example 22
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an elimination account
         * @description Returns detailed information for a specified elimination account.
         */
        get: operations["get-consolidation-elimination-account-key"];
        put?: never;
        post?: never;
        /**
         * Delete an elimination account
         * @description Deletes an elimination account.
         */
        delete: operations["delete-consolidation-elimination-account-key"];
        options?: never;
        head?: never;
        /**
         * Update an elimination account
         * @description Updates an existing elimination account by setting field values. Any field values not provided remain unchanged.
         */
        patch: operations["update-consolidation-elimination-account-key"];
        trace?: never;
    };
    "/objects/consolidation/override-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List override accounts
         * @description Returns a collection with a key, ID, and link for each override account. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find account groups that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-consolidation-override-account"];
        put?: never;
        /**
         * Create an override account
         * @description Creates an override account.
         */
        post: operations["create-consolidation-override-account"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/override-account/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the override account.
                 * @example 40
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an override account
         * @description Returns detailed information for a specified override account.
         */
        get: operations["get-consolidation-override-account-key"];
        put?: never;
        post?: never;
        /**
         * Delete an override account
         * @description Deletes an override account.
         */
        delete: operations["delete-consolidation-override-account-key"];
        options?: never;
        head?: never;
        /**
         * Update an override account
         * @description Updates an existing override account by setting field values. Any field values not provided remain unchanged.
         */
        patch: operations["update-consolidation-override-account-key"];
        trace?: never;
    };
    "/objects/consolidation/adjustment-journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List adjustment journals
         * @description Returns a collection with a key, ID, and link for each adjustment journal. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find account groups that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-consolidation-adjustment-journal"];
        put?: never;
        /**
         * Create an adjustment journal
         * @description Creates an adjustment journal.
         */
        post: operations["create-consolidation-adjustment-journal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/adjustment-journal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the adjustment journal.
                 * @example 70
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an adjustment journal
         * @description Returns detailed information for a specified adjustment journal.
         */
        get: operations["get-consolidation-adjustment-journal-key"];
        put?: never;
        post?: never;
        /**
         * Delete an adjustment journal
         * @description Deletes an adjustment journal.
         */
        delete: operations["delete-consolidation-adjustment-journal-key"];
        options?: never;
        head?: never;
        /**
         * Update an adjustment journal
         * @description Updates an existing adjustment journal by setting field values. Any field values not provided remain unchanged.
         */
        patch: operations["update-consolidation-adjustment-journal-key"];
        trace?: never;
    };
    "/objects/consolidation/time-period": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List time periods
         * @description Returns a collection with a key, ID, and link for each consolidation time period. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find account groups that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-consolidation-time-period"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/time-period/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the consolidation time period.
                 * @example 43
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a consolidation time period
         * @description Returns detailed information for a specified consolidation time period.
         */
        get: operations["get-consolidation-time-period-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/run-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List consolidation run statuses
         * @description Returns a collection with a key, ID, and link for each consolidation run status. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find account groups that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-consolidation-run-status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/run-status/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the consolidation run-status.
                 * @example 70
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a consolidation run-status
         * @description Returns detailed information for a specified consolidation run-status.
         */
        get: operations["get-consolidation-run-status-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/ownership-structure": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List ownership structures
         * @description Returns a collection with a key, ID, and link for each ownership structure. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find account groups that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-consolidation-ownership-structure"];
        put?: never;
        /**
         * Create an ownership structure
         * @description Creates an ownership structure.
         */
        post: operations["create-consolidation-ownership-structure"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/ownership-structure/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the ownership structure.
                 * @example 43
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an ownership structure
         * @description Returns information for a specified ownership structure.
         */
        get: operations["get-consolidation-ownership-structure-key"];
        put?: never;
        post?: never;
        /**
         * Delete an ownership structure
         * @description Deletes an ownership structure.
         */
        delete: operations["delete-consolidation-ownership-structure-key"];
        options?: never;
        head?: never;
        /**
         * Update an ownership structure
         * @description Updates an existing ownership structure by setting field values. Any field values not provided remain unchanged.
         */
        patch: operations["update-consolidation-ownership-structure-key"];
        trace?: never;
    };
    "/services/consolidation/ownership-structure/consolidate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Consolidate an ownership structure
         * @description Consolidate an ownership structure.
         *
         *     This operation consolidates the ownership structure based on the provided time period and ownership structure.
         *
         *     For more information, read about [consolidating an ownership structure](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Cons_ownership_struct) in the Sage Intacct Help Center.
         */
        post: operations["post-consolidation-ownership-structure-consolidate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/ownership-structure-period/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the ownership structure period.
                 * @example 43
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an ownership structure period
         * @description Returns detailed information for a specified ownership structure period.
         */
        get: operations["get-consolidation-ownership-structure-period-key"];
        put?: never;
        post?: never;
        /**
         * Delete an ownership structure period
         * @description Deletes an ownership structure period.
         */
        delete: operations["delete-consolidation-ownership-structure-period-key"];
        options?: never;
        head?: never;
        /**
         * Update an ownership structure period
         * @description Updates an existing ownership structure period by setting field values. Any field values not provided remain unchanged.
         */
        patch: operations["update-consolidation-ownership-structure-period-key"];
        trace?: never;
    };
    "/objects/consolidation/ownership-structure-period": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List ownership structure periods
         * @description Returns a collection with a key, ID, and link for each ownership structure period. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find account groups that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-consolidation-ownership-structure-period"];
        put?: never;
        /**
         * Create an ownership structure period
         * @description Creates an ownership structure period.
         */
        post: operations["create-consolidation-ownership-structure-period"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/ownership-entity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List ownership entities
         * @description Returns a collection with a key, ID, and link for each ownership entity. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find account groups that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-consolidation-ownership-entity"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/ownership-entity/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the ownership entity.
                 * @example 43
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an ownership entity
         * @description Returns detailed information for a specified ownership entity.
         */
        get: operations["get-consolidation-ownership-entity-key"];
        put?: never;
        post?: never;
        /**
         * Delete an ownership entity
         * @description Deletes an ownership entity.
         */
        delete: operations["delete-consolidation-ownership-entity-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/ownership-subsidiary-entity/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the ownership subsidiary entity.
                 * @example 43
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an ownership subsidiary entity
         * @description Returns detailed information for a specified ownership subsidiary entity.
         */
        get: operations["get-consolidation-ownership-subsidiary-entity-key"];
        put?: never;
        post?: never;
        /**
         * Delete an ownership subsidiary entity
         * @description Deletes an ownership subsidiary entity.
         */
        delete: operations["delete-consolidation-ownership-subsidiary-entity-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/consolidation/ownership-subsidiary-entity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List ownership subsidiary entity
         * @description Returns a collection with a key, ID, and link for each ownership subsidiary entity. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find account groups that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-consolidation-ownership-subsidiary-entity"];
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
        /** @description Consolidation books define how to combine the financial and operational information within multi-entity companies. */
        "objects.consolidation.book": {
            /**
             * @description System-assigned unique key for the consolidation book.
             * @example 89
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the consolidation book.
             * @example consol_book-holdings
             */
            id?: string;
            /**
             * @description URL endpoint for the consolidation book.
             * @example /objects/consolidation/book/21
             */
            readonly href?: string;
            /**
             * @description Provides a brief contextual description for the consolidation book.
             * @example Consolidation book for all US entities.
             */
            description?: string;
            status?: components["schemas"]["status"];
            /** @description References the statistical journal associated with the consolidation book. */
            statisticalJournal?: {
                /**
                 * @description System-assigned key for the statistical journal.
                 * @example 23
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the statistical journal.
                 * @example consol_book_SJ
                 */
                id?: string | null;
                /**
                 * @description Name for the statistical journal.
                 * @example consol_book statistical journal
                 */
                name?: string | null;
                /**
                 * @description URL endpoint for the statistical journal.
                 * @example /objects/general-ledger/statistical-journal/23
                 */
                readonly href?: string;
            };
            /** @description References the budget to use with the consolidation book. */
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
             * @description Indicates whether the accounting method for reporting will be on an `accrual` or `cash` basis.
             * @example accrual
             * @enum {string}
             */
            accountingMethod?: "accrual" | "cash";
            /** @description References the department to be used for the journal entries created during consolidation. */
            department?: {
                /**
                 * @description Unique key for the department.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the department.
                 * @example OP
                 */
                id?: string;
                /**
                 * @description Name for the department.
                 * @example Operations
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/1
                 */
                readonly href?: string;
            };
            /** @description Provides multi-currency details for global consolidations only. Does not include details for domestic consolidations. */
            multiCurrency?: {
                /**
                 * @description Specifies the currency for the consolidation book, used for global consolidations.
                 * @example USD
                 */
                currency?: string;
                /** @description Provides details of the accounts used for cumulative translation adjustment of net assets for the consolidation book. */
                cumulativeTranslationAdjustment?: {
                    /** @description References the General Ledger (GL) account for net assets. */
                    netAssetGLAccount?: {
                        /**
                         * @description Unique key for the GL account.
                         * @example 9
                         */
                        key?: string;
                        /**
                         * @description Identifier for the GL account.
                         * @example 1000
                         */
                        id?: string;
                        /**
                         * @description Name for the GL account.
                         * @example Bank of America A/c.
                         */
                        readonly name?: string;
                        /**
                         * @description URL endpoint for the GL account.
                         * @example /objects/general-ledger/account/9
                         */
                        readonly href?: string;
                    };
                    /** @description References the General Ledger (GL) account for net income. */
                    netIncomeGLAccount?: {
                        /**
                         * @description Unique key for the GL account.
                         * @example 10
                         */
                        key?: string;
                        /**
                         * @description Identifier for the GL account.
                         * @example 1001
                         */
                        id?: string;
                        /**
                         * @description Name for the GL account.
                         * @example CitiBank
                         */
                        readonly name?: string;
                        /**
                         * @description URL endpoint for the GL account.
                         * @example /objects/general-ledger/account/10
                         */
                        readonly href?: string;
                    };
                };
                /**
                 * @description Specifies the exchange rate type used to determine current exchange rates. Exchange rate types are used only to customize your own exchange rates; the default is `intacctDailyRate`.
                 *
                 *     For more information, read [about the Intacct daily rate](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_daily_rate) in the Sage Intacct Help Center.
                 * @default intacctDailyRate
                 * @example intacctDailyRate
                 * @enum {string}
                 */
                exchangeRateType?: "intacctDailyRate";
                /** @description Specifies the exchange rate translation method to be used for balance sheet accounts and income statement accounts. */
                translationMethod?: {
                    /**
                     * @description Indicates the translation method for balance sheet accounts.
                     * @default endingSpotRate
                     * @example endingSpotRate
                     * @enum {string}
                     */
                    balanceSheetTranslationMethod?: "endingSpotRate" | "weightedAverageRate";
                    /**
                     * @description Indicates the translation method for income statement accounts.
                     * @default weightedAverageRate
                     * @example weightedAverageRate
                     * @enum {string}
                     */
                    incomeTranslationMethod?: "endingSpotRate" | "weightedAverageRate";
                };
            };
            elimination?: {
                /**
                 * @description Name for the entity used for elimination in the consolidation book.
                 * @example USDE
                 */
                entity?: string;
                /**
                 * @description Indicates whether to enable inter-entity auto-elimination.
                 * @default false
                 * @example true
                 */
                enableInterEntityAutoElimination?: boolean;
                /** @description Specifies the General Ledger (GL) account for elimination adjustment. */
                adjustmentGLAccount?: {
                    /**
                     * @description Unique key for the GL account.
                     * @example 11
                     */
                    key?: string;
                    /**
                     * @description Identifier for the GL account.
                     * @example 1002
                     */
                    id?: string;
                    /**
                     * @description Name for the GL account.
                     * @example HSBC - GBP
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the GL account.
                     * @example /objects/general-ledger/account/11
                     */
                    readonly href?: string;
                };
                /**
                 * @description Indicates whether to enable elimination by affiliate entity.
                 * @default false
                 * @example false
                 */
                enableEliminationByAffiliateEntity?: boolean;
            };
            /**
             * @description Standard Sage Intacct dimensions to include in the consolidated journal entries.
             * @example [
             *       "location",
             *       "department",
             *       "vendor"
             *     ]
             */
            consolidateDimensions?: string[];
            /** @description Provides details for the consolidation book journal. */
            bookJournal?: {
                /**
                 * @description System-assigned key for the journal.
                 * @example 23
                 */
                key?: string | null;
                /**
                 * @description Identifier for the book journal.
                 * @example consol_book_J
                 */
                id?: string | null;
                /**
                 * @description Name for the book journal.
                 * @example consol_book journal
                 */
                name?: string | null;
                /**
                 * @description URL endpoint for the journal.
                 * @example /objects/general-ledger/journal/23
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies the type of historical rate date for the consolidation book.
             * @default lineLevelExchangeRateDate
             * @example lineLevelExchangeRateDate
             * @enum {string}
             */
            historicalRateDateType?: "lineLevelExchangeRateDate" | "transactionDate";
            /**
             * @description Specifies the type of consolidation book.
             * @default consolidation
             * @example consolidation
             * @enum {string}
             */
            readonly bookType?: "consolidation" | "tierConsolidation";
            /**
             * @description Indicates whether the consolidation book is a legacy book.
             * @default false
             * @example false
             */
            readonly isLegacyBook?: boolean;
            /** @description References the ownership structure associated with the consolidation book. */
            readonly ownershipStructure?: {
                /**
                 * @description Unique key for the ownership structure.
                 * @example 1
                 */
                readonly key?: string | null;
                /**
                 * @description Name for the ownership structure.
                 * @example North America
                 */
                readonly id?: string | null;
                /**
                 * @description Provides a brief contextual description of the ownership structure.
                 * @example All entities in North America
                 */
                readonly description?: string | null;
                /**
                 * @description URL endpoint for the ownership structure.
                 * @example /objects/consolidation/ownership-structure/11
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "consolidation-bookRequiredProperties": {
            elimination: Record<string, never>;
            multiCurrency?: Record<string, never>;
        };
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
        /** @description Consolidate book request */
        "consolidation-book-consolidate-request": {
            /** @description References the consolidation book to consolidate. */
            consolidationBook: {
                /**
                 * @description Unique key for the consolidation book.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description Identifier for the consolidation book.
                 * @example consolBook
                 */
                id?: string;
                /**
                 * @description URL endpoint for the consolidation book.
                 * @example /objects/consolidation/book/21
                 */
                readonly href?: string;
            };
            /** @description References the consolidation time period to consolidate. */
            timePeriod: {
                /**
                 * @description Unique key for the consolidation time period.
                 * @example 624
                 */
                key?: string;
                /**
                 * @description Identifier for the consolidation time period.
                 * @example Jan 2022
                 */
                id?: string;
                /**
                 * @description URL endpoint for the consolidation time period.
                 * @example /objects/consolidation/time-period/23
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates whether to run the consolidation offline:
             *
             *     * `true` - Run the consolidation offline. Use when consolidating a past period with `updateSubsequentPeriods` set to `true` as offline consolidation is required to update subsequent periods.
             *     * `false` - Run the consolidation online.
             * @default true
             * @example false
             */
            runOffline?: boolean;
            /**
             * @description Indicates whether to update all subsequent periods after the specified period when re-consolidating a past period:
             *
             *     * `true` - Update all subsequent periods after the specified period. Use when `runOffline` is `true` as offline consolidation is required to update subsequent periods.
             *     * `false` - Do not update subsequent periods after the specified period. Deletes all subsequent periods after the specified period.
             * @default false
             * @example true
             */
            updateSubsequentPeriods?: boolean;
            /**
             * @description Indicates whether to only consolidate net changes since last consolidation.
             *
             *     * `true` - Consolidate only the net changes since the last consolidation.
             *     * `false` - Delete the existing consolidation and re-consolidate everything. Set to `false` when `updateSubsequentPeriods` is `true` as offline consolidation is required to update subsequent periods.
             * @default true
             * @example false
             */
            updateNetChanges?: boolean;
            /**
             * @description Specifies the email address to receive notifications.
             * @example john.smith@IntechSol.com
             */
            notificationEmail?: string;
            /** @description References a collection of entities to consolidate, required to consolidate with custom rates. If `enableInterEntityAutoElimination` is set to `true` in `consolidation.book`, all entities must be consolidated together. */
            entities?: {
                /** @description References the entity to be consolidated in the book. */
                entity?: {
                    /**
                     * @description Unique key for the entity.
                     * @example 123
                     */
                    key?: string;
                    /**
                     * @description Identifier for the entity.
                     * @example US
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the entity.
                     * @example /objects/company-config/entity/2
                     */
                    readonly href?: string;
                };
                /**
                 * Format: decimal-precision-10
                 * @description Specifies the ending spot rate for the consolidation entity in the book.
                 * @example 1.3303
                 */
                endingSpotRate?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Specifies the weighted average rate for the consolidation entity in the book.
                 * @example 1.3534
                 */
                weightedAverageRate?: string;
            }[];
        };
        /** @description Consolidate book response */
        "consolidation-book-consolidate-response": {
            /**
             * @description Indicates the status of the consolidation request.
             * @example success
             */
            status?: string;
            /**
             * @description Specifies the response message for the consolidation request.
             * @example The consolidation completed successfully.
             */
            message?: string;
        };
        /** @description A consolidation entity represents an entity that is included in a consolidation book. Entities can be added to a consolidation book at any time, whereas they can only be removed before the first consolidation is run. */
        "objects.consolidation.entity": {
            /**
             * @description System-assigned unique key for the consolidation entity.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the consolidation entity. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the consolidation entity.
             * @example /objects/consolidation/entity/23
             */
            readonly href?: string;
            /** @description Specifies the consolidation book associated with the consolidation entity. */
            consolidationBook?: {
                /**
                 * @description Unique key for the consolidation book.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description Identifier for the consolidation book.
                 * @example consol_book_holdings
                 */
                id?: string;
                /**
                 * @description URL endpoint for the consolidation book.
                 * @example /objects/consolidation/book/123
                 */
                readonly href?: string;
            };
            /** @description References the entity to be consolidated in the book. */
            consolidationEntity?: {
                /**
                 * @description Unique key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the entity.
                 * @example US
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
            audit?: components["schemas"]["audit.s1"];
        };
        "consolidation-entityRequiredProperties": Record<string, never>;
        /** @description Elimination accounts reference the General Ledger (GL) accounts that you use for inter-entity auto-elimination in consolidation books. */
        "objects.consolidation.elimination-account": {
            /**
             * @description System-assigned unique key for the consolidation book elimination account.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the consolidation book elimination account. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the consolidation book elimination account.
             * @example /objects/consolidation/elimination-account/23
             */
            readonly href?: string;
            /** @description Specifies the consolidation book, you want to add or remove elimination account. */
            consolidationBook?: {
                /**
                 * @description Unique key for the consolidation book.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description Identifier for the consolidation book.
                 * @example consol_book_holdings
                 */
                id?: string;
                /**
                 * @description URL endpoint for the consolidation book.
                 * @example /objects/consolidation/book/123
                 */
                readonly href?: string;
            };
            /** @description References the General Ledger (GL) account for inter-entity auto-elimination. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 411
                 */
                key?: string;
                /**
                 * @description Identifier for the GL account.
                 * @example 1501.04
                 */
                id?: string;
                /**
                 * @description Name for the GL account.
                 * @example Bank of America A/c.
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/411
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "consolidation-elimination-accountRequiredProperties": Record<string, never>;
        /** @description Override accounts are used to set up specific General Ledger (GL) accounts that require a different currency conversion method than the one defined for the overall consolidation book. */
        "objects.consolidation.override-account": {
            /**
             * @description System-assigned unique key for the consolidation account to override.
             * @example 17
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the consolidation account to override. This value is the same as `key` for this object.
             * @example 17
             */
            readonly id?: string;
            /**
             * @description URL for the consolidation account to override.
             * @example /objects/consolidation/override-account/21
             */
            readonly href?: string;
            /** @description References the consolidation book associated with the override account. */
            consolidationBook?: {
                /**
                 * @description Unique key for the consolidation book.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description Identifier for the consolidation book.
                 * @example consol_book_holdings
                 */
                id?: string;
                /**
                 * @description URL endpoint for the consolidation book.
                 * @example /objects/consolidation/book/123
                 */
                readonly href?: string;
            };
            /** @description References the General Ledger (GL) account to override the exchange rate translation method. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 411
                 */
                key?: string;
                /**
                 * @description Identifier for the GL account.
                 * @example 1000
                 */
                id?: string;
                /**
                 * @description Name for the GL account.
                 * @example Bank of America A/c.
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/411
                 */
                readonly href?: string;
            };
            /** @description Provides details of the exchange rate associated with the override account. */
            exchangeRate?: {
                /**
                 * @description Currency exchange rate to apply to the GL account.
                 * @default endingSpotRate
                 * @example historicalRate
                 * @enum {string}
                 */
                rateType?: "endingSpotRate" | "weightedAverageRate" | "historicalRate";
                /**
                 * @description Exchange rate to apply to the GL account.
                 * @default Intacct daily rate
                 * @example Intacct daily rate
                 */
                rate?: string;
                /**
                 * Format: date
                 * @description Specifies the override expiry date for the last period when the selected rate should be used.
                 * @example 2025-01-31
                 */
                useUntilPeriod?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "consolidation-override-accountRequiredProperties": {
            exchangeRate: Record<string, never>;
        };
        /** @description When you first create a consolidation book, Global or Domestic Consolidation creates the proposed list of journals to be used during consolidation. Consolidation journals are required for compliance, tax, or user-defined books. After you run a consolidation, journals can no longer be modified. */
        "objects.consolidation.adjustment-journal": {
            /**
             * @description System-assigned unique key for the consolidation adjustment journal.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the consolidation adjustment journal. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the consolidation adjustment journal.
             * @example /objects/consolidation/adjustment-journal/23
             */
            readonly href?: string;
            /**
             * @description Name for the consolidation book.
             * @example consol_book_holding
             */
            consolidationBookId?: string;
            /**
             * @description Specifies the book type for the journal to be added to the consolidation book.
             * @example userDefined
             * @enum {string}
             */
            userDefinedBookType?: "gaap" | "tax" | "userDefined";
            /**
             * @description Identifier for the user-defined book whose journal you want to add to the consolidation book. If `userDefinedBookType` is set to `gaap` or `tax`, this value will be `gaap` or `tax`, respectively, by default.
             * @example Global Consolidation Book - Monthly Close
             */
            userDefinedBookId?: string;
            /** @description References the General Ledger (GL) consolidation journals associated with this consolidation book, for example, user-defined books. */
            glJournal?: {
                /**
                 * @description Unique key for the GL journal.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description Identifier for the GL journal.
                 * @example consol_book_userdef
                 */
                id?: string;
                /**
                 * @description Name for the GL journal.
                 * @example GL Consolidation Journal - Monthly Close (Global).
                 */
                name?: string;
                /**
                 * @description URL endpoint for the GL journal.
                 * @example /objects/general-ledger/journal/123
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "consolidation-adjustment-journalRequiredProperties": {
            glJournal: Record<string, never>;
        };
        /** @description Consolidation time periods represent standard months or company-defined accounting periods, including the first and last days of each period. */
        "objects.consolidation.time-period": {
            /**
             * @description System-assigned unique key for the time period.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the time period.
             * @example Jan 2025
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the time period.
             * @example /objects/consolidation/time-period/23
             */
            readonly href?: string;
            /**
             * @description Specifies the name of the time period, such as a standard month or a company-defined accounting period.
             * @example Jan 2025
             */
            periodName?: string;
            /**
             * Format: date
             * @description Specifies the start date for the time period, which is the first day of the period.
             * @example 2025-04-01
             */
            startDate?: string;
            /**
             * Format: date
             * @description Specifies the end date for the time period, which is the last day of the period.
             * @example 2025-06-30
             */
            endDate?: string;
        };
        /** @description The consolidation run status object provides information about the status of a consolidation process for a specific book, entity, and period. */
        "objects.consolidation.run-status": {
            /**
             * @description System-assigned unique key for the consolidation run status.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the consolidation run status. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the consolidation run status.
             * @example /objects/consolidation/run-status/23
             */
            readonly href?: string;
            /** @description References the consolidation book associated with the consolidation run. */
            book?: {
                /**
                 * @description Unique key for the consolidation book.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description Identifier for the consolidation book.
                 * @example MariposaBook
                 */
                id?: string;
                /**
                 * @description URL endpoint for the consolidation book.
                 * @example /objects/consolidation/book/123
                 */
                readonly href?: string;
            };
            /** @description References the entity associated with the consolidation run. */
            entity?: {
                /**
                 * @description Unique key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the entity.
                 * @example US
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
            /** @description References the consolidation period associated with the consolidation run. */
            period?: {
                /**
                 * @description Unique key for the consolidation period.
                 * @example 600
                 */
                key?: string;
                /**
                 * @description Identifier for the consolidation period.
                 * @example Jan 2025
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the consolidation period.
                 * @example /objects/consolidation/time-period/624
                 */
                readonly href?: string;
            };
            /**
             * Format: date-time
             * @description Specifies the date and time the consolidation ran.
             * @example 2025-06-20T16:20:00Z
             */
            consolidationDateTime?: string;
            /** @description References the user who ran the consolidation. */
            runBy?: {
                /**
                 * @description Unique key for the user.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the user.
                 * @example Admin
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/1
                 */
                readonly href?: string;
            };
            /** @description Provides exchange rate details for the consolidation run. */
            exchangeRate?: {
                /**
                 * Format: decimal-precision-10
                 * @description Weighted average rate for the exchange rate conversion.
                 * @example 1.345
                 */
                weightedAverageRate?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Ending spot rate for the exchange rate conversion.
                 * @example 1.345
                 */
                endingSpotRate?: string;
            };
            /**
             * @description Specifies the current state of the consolidation.
             * @example success
             * @enum {string}
             */
            status?: "success" | "inProgress" | "multiRun" | "background" | "failed" | "queued" | "reconsolidationRequired";
            /**
             * @description System generated message describing the state of the consolidation.
             * @example Consolidation in progress
             */
            statusMessage?: string | null;
            /** @description References the ownership structure related to the consolidation run. */
            ownershipStructure?: {
                /**
                 * @description Unique key for the ownership structure.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the ownership structure.
                 * @example MariposaNorth
                 */
                id?: string;
                /**
                 * @description Provides a brief contextual description of the ownership structure.
                 * @example Mariposa North group
                 */
                readonly description?: string;
                /**
                 * @description URL endpoint for the ownership structure.
                 * @example /objects/consolidation/ownership-structure/23
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description An ownership structure defines the hierarchical relationships between parent and child (subsidiary) entities in a consolidation. */
        "objects.consolidation.ownership-structure": {
            /**
             * @description System-assigned unique key for the ownership structure.
             * @example 518
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the ownership structure.
             * @example struct_US_holding_subsidiaries
             */
            id?: string;
            /**
             * @description URL endpoint for the ownership structure.
             * @example /objects/consolidation/ownership-structure/132
             */
            readonly href?: string;
            /**
             * @description Provides a brief contextual description of the ownership structure.
             * @example Holding company represents 100% of US operations and 50% of EMEA operations.
             */
            description?: string;
            status?: components["schemas"]["status"];
            elimination?: {
                /**
                 * @description Indicates whether to enable inter-entity auto-elimination.
                 * @default true
                 * @example true
                 */
                enableInterEntityAutoElimination?: boolean;
                /**
                 * @description Indicates whether to enable elimination by affiliate entity.
                 * @default false
                 * @example false
                 */
                enableEliminationByAffiliateEntity?: boolean;
            };
            /**
             * @description Specifies the accounting method for the ownership structure, which determines how transactions are recorded and reported in the consolidation process.
             * @default accrual
             * @example accrual
             * @enum {string}
             */
            accountingMethod?: "accrual" | "cash";
            /**
             * @description References the user-defined book for the equity consolidation method. An ownership structure that uses the equity consolidation method requires a user-defined book for writing equity entries.
             *
             *     For more information, read about the [equity consolidation method](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=about_udb_for_equity_method) in the Sage Intacct Help Center.
             */
            userDefinedBookForEquityMethod?: {
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
            audit?: components["schemas"]["audit.s1"];
        };
        "consolidation-ownership-structureRequiredProperties": Record<string, never>;
        /** @description Consolidate ownership-structure request */
        "consolidation-ownership-structure-consolidate-request": {
            /** @description References the ownership structure to consolidate. */
            ownershipStructure: {
                /**
                 * @description Unique key for the ownership structure.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the ownership structure.
                 * @example abc
                 */
                id?: string;
            };
            /** @description References the time period for which to consolidate the ownership structure. */
            timePeriod: {
                /**
                 * @description Unique key for the time period.
                 * @example 624
                 */
                key?: string;
                /**
                 * @description Identifier for the time period.
                 * @example Jan 2025
                 */
                id?: string;
            };
            /**
             * @description Specifies the email address to which notifications will be sent.
             * @example user@company.com
             */
            notificationEmail?: string;
            /** @description Provides the exchange rates to override for consolidation. If provided, the override exchange rates will be applied to the specified consolidation book and entities during the consolidation process. */
            overrideExchangeRate?: {
                /** @description References the consolidation book to use for the override exchange rates. */
                consolidationBook?: {
                    /**
                     * @description System-assigned unique key for the consolidation book.
                     * @example 123
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the consolidation book.
                     * @example consol_book
                     */
                    id?: string;
                };
                /** @description References a collection of consolidation entities to use for the override exchange rates. The override exchange rates provided will be applied to these specified consolidation entities during the consolidation process. */
                consolidationEntities?: {
                    /** @description References the entity to be consolidated in the book. */
                    entity?: {
                        /**
                         * @description Unique key for the consolidation-entity.
                         * @example 123
                         */
                        key?: string;
                        /**
                         * @description Identifier for the consolidation-entity.
                         * @example US
                         */
                        id?: string;
                    };
                    /**
                     * Format: decimal-precision-10
                     * @description Indicates the ending spot rate for the consolidation entity in the book.
                     * @example 1.3303
                     */
                    endingSpotRate?: string;
                    /**
                     * Format: decimal-precision-10
                     * @description Specifies the weighted average rate for the consolidation entity in the book.
                     * @example 1.353
                     */
                    weightedAverageRate?: string;
                }[];
            }[];
        };
        /** @description Consolidate ownership-structure response */
        "consolidation-ownership-structure-consolidate-response": {
            /**
             * @description Specifies the status of the consolidation request.
             * @example success
             */
            status?: string;
            /**
             * @description Specifies the response message for the consolidation request.
             * @example A job has been queued to run an offline consolidation. Go to Company > Offline job queue to view the job status.
             */
            message?: string;
        };
        /** @description An ownership structure period represents a time-bound segment within an ownership structure used for consolidation in Sage Intacct. */
        "objects.consolidation.ownership-structure-period": {
            /**
             * @description System-assigned unique key for the ownership structure period.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the ownership structure period. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the ownership structure period.
             * @example /objects/consolidation/ownership-structure-period/23
             */
            readonly href?: string;
            /**
             * @description Specifies the current state of the ownership structure period.
             * @default draft
             * @example draft
             * @enum {string}
             */
            state?: "draft" | "activated" | "review";
            /**
             * @description Provides a brief contextual comment about the ownership structure period.
             * @example Time period for March 2025
             */
            comment?: string;
            /** @description References the starting time period for the ownership structure period. */
            fromPeriod?: {
                /**
                 * @description Unique key for the starting time period.
                 * @example 624
                 */
                key?: string;
                /**
                 * @description Identifier for the starting time period.
                 * @example Jan 2025
                 */
                id?: string;
                /**
                 * @description URL endpoint for the starting time period.
                 * @example /objects/consolidation/time-period/624
                 */
                readonly href?: string;
            };
            /** @description References the ownership structure associated with this ownership structure period. */
            ownershipStructure?: {
                /**
                 * @description Unique key for the ownership structure.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the ownership structure.
                 * @example Holding companies for Global Holdings Inc.
                 */
                id?: string;
                /**
                 * @description URL endpoint for the ownership structure.
                 * @example /objects/consolidation/ownership-structure/23
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            /** @description Specifies a collection of ownership entities associated with the ownership structure period. */
            ownershipEntities?: components["schemas"]["objects.consolidation.ownership-entity"][];
        };
        "consolidation-ownership-structure-periodRequiredProperties": Record<string, never>;
        /** @description An ownership entity represents a parent entity within an ownership structure, detailing its relationships with subsidiary entities and associated consolidation books. */
        "objects.consolidation.ownership-entity": {
            /**
             * @description System-assigned unique key for the ownership entity.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the ownership entity. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the ownership entity.
             * @example /objects/consolidation/ownership-entity/23
             */
            readonly href?: string;
            /** @description References the consolidation book associated with the ownership entity. */
            consolidationBook?: {
                /**
                 * @description Unique key for the consolidation book.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the consolidation book.
                 * @example consol_book_holdings
                 */
                id?: string;
                /**
                 * @description URL endpoint for the consolidation book.
                 * @example /objects/consolidation/book/23
                 */
                readonly href?: string;
                /**
                 * @description Provides a brief contextual description of the consolidation book.
                 * @example Consolidation book for holding companies.
                 */
                description?: string;
                /** @description Provides multi-currency details for the global consolidation. Does not apply to domestic consolidations. */
                multiCurrency?: {
                    /**
                     * @description Provides currency details for the global consolidation.
                     * @example USD
                     */
                    currency?: string;
                    /** @description Provides details of the cumulative translation adjustment (CTA) accounts for multi-currency consolidations. */
                    cumulativeTranslationAdjustment?: {
                        /**
                         * @description Net asset General Ledger (GL) account for currency translation.
                         * @example 7509
                         */
                        netAssetGLAccount?: string;
                        /**
                         * @description Net income General Ledger (GL) account for currency translation.
                         * @example 7509
                         */
                        netIncomeGLAccount?: string;
                    };
                    /** @description Provides details of the currency translation method for multi-currency consolidations. */
                    translationMethod?: {
                        /**
                         * @description Specifies the translation method for balance sheet accounts:
                         *
                         *     * `endingSpotRate` - Translates all balance sheet accounts using the exchange rate at the end of the reporting period.
                         *     * `weightedAverageRate` - Uses a weighted average exchange rate for the reporting period to translate balance sheet accounts.
                         * @default endingSpotRate
                         * @example endingSpotRate
                         * @enum {string}
                         */
                        balanceSheetTranslationMethod?: "endingSpotRate" | "weightedAverageRate";
                        /**
                         * @description Specifies the translation method for income statement accounts:
                         *
                         *     * `endingSpotRate` - Uses the exchange rate at the end of the reporting period to translate all income statement accounts.
                         *     * `weightedAverageRate` - Translates all income statement accounts using a weighted average exchange rate for the reporting period.
                         * @default weightedAverageRate
                         * @example weightedAverageRate
                         * @enum {string}
                         */
                        incomeTranslationMethod?: "endingSpotRate" | "weightedAverageRate";
                    };
                };
                elimination?: {
                    /**
                     * @description Specifies the entity used for elimination in the consolidation process.
                     * @example USDE
                     */
                    entity?: string;
                    /**
                     * @description Specifies the General Ledger (GL) account used for elimination adjustments in the consolidation process.
                     * @example 1000
                     */
                    adjustmentGLAccount?: string;
                };
            };
            /** @description References the parent entity associated with the ownership entity. */
            parentEntity?: {
                /**
                 * @description Unique key for the parent entity.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description URL endpoint for the parent entity.
                 * @example /objects/company-config/entity/23
                 */
                readonly href?: string;
                /**
                 * @description Identifier for the parent entity.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description Name for the parent entity.
                 * @example USA
                 */
                readonly name?: string;
            };
            /** @description References the time period for the ownership structure associated with the ownership entity. */
            ownershipStructurePeriod?: {
                /**
                 * @description Identifier for the ownership structure period.
                 * @example 132
                 */
                id?: string;
                /**
                 * @description Unique key for the ownership structure period.
                 * @example 132
                 */
                key?: string;
                /**
                 * @description URL endpoint for the ownership structure period.
                 * @example /objects/consolidation/ownership-structure-period/132
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            /** @description References a collection of subsidiary (child) entities for the ownership entity. There must be at least one child in an `active` state. */
            ownershipSubsidiaryEntities?: components["schemas"]["objects.consolidation.ownership-subsidiary-entity"][];
        };
        /** @description Ownership subsidiary entities represent the child entities within an ownership structure used for consolidation purposes. They cannot exist without a parent entity and an ownership structure. */
        "objects.consolidation.ownership-subsidiary-entity": {
            /**
             * @description System-assigned unique key for the ownership subsidiary entity.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the ownership subsidiary entity. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the ownership subsidiary entity.
             * @example /objects/consolidation/ownership-subsidiary-entity/23
             */
            readonly href?: string;
            /**
             * @description Specifies the percentage of ownership that the parent entity holds in the subsidiary entity.
             * @example 85
             */
            ownershipPercentage?: number;
            /**
             * @description Specifies the method used to consolidate the data of both the parent and subsidiary entity.
             *
             *     * `consolidation` - Use when the parent entity has controlling interest of the subsidiary with ownership less than 100%.
             *     * `proportional` - Use for management reporting only, distributes the account activity of an entity based on the `ownershipPercentage`.
             *     * `fullConsolidation` - Consolidate all of the account activity for the subsidiary at 100% of the subsidiary's equity.
             *     * `equity` - Automatically record a subsidiary's net income to the parent entity based on ownership percentage.
             *
             *     For more information, read about [consolidation methods](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_Consolidation_methods) in the Sage Intacct Help Center.
             * @default fullConsolidation
             * @example proportional
             * @enum {string}
             */
            consolidationMethod?: "consolidation" | "proportional" | "fullConsolidation" | "equity";
            /**
             * @description Indicates whether to allocate subsidiary income to the parent entity.
             * @default true
             * @example false
             */
            allocateSubsidiaryIncome?: boolean;
            nonControllingInterestGLAccounts?: {
                /** @description Specifies the contributed capital General Ledger (GL) account for the subsidiary entity. */
                contributedCapitalGLAccount?: {
                    /**
                     * @description Unique key for the contributed capital GL account.
                     * @example 9
                     */
                    key?: string;
                    /**
                     * @description Identifier for the contributed capital GL account.
                     * @example 1000
                     */
                    id?: string;
                    /**
                     * @description Name for the contributed capital GL account.
                     * @example Bank of America A/c.
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the contributed capital GL account.
                     * @example /objects/general-ledger/account/9
                     */
                    readonly href?: string;
                };
                /** @description Specifies the investment in subsidiary General Ledger (GL) account for the investment in the subsidiary entity. */
                investmentInSubsidiaryGLAccount?: {
                    /**
                     * @description Unique key for the investment in subsidiary GL account.
                     * @example 9
                     */
                    key?: string;
                    /**
                     * @description Identifier for the investment in subsidiary GL account.
                     * @example 1000
                     */
                    id?: string;
                    /**
                     * @description Name for the investment in subsidiary GL account.
                     * @example Bank of America A/c.
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the investment in subsidiary GL account.
                     * @example /objects/general-ledger/account/9
                     */
                    readonly href?: string;
                };
                /** @description Specifies the net income attributable to the non-controlling interest (NCI) General Ledger (GL) account for the subsidiary entity. */
                netIncomeAttributableToNCIGLAccount?: {
                    /**
                     * @description Unique key for the NCI net income GL account.
                     * @example 9
                     */
                    key?: string;
                    /**
                     * @description Identifier for the NCI net income GL account.
                     * @example 1000
                     */
                    id?: string;
                    /**
                     * @description Name for the NCI net income GL account.
                     * @example Bank of America A/c.
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the NCI net income GL account.
                     * @example /objects/general-ledger/account/9
                     */
                    readonly href?: string;
                };
                /** @description Specifies the General Ledger (GL) account for equity attributable to the non-controlling interest (NCI) for the subsidiary entity. */
                equityAttributableToNCIGLAccount?: {
                    /**
                     * @description Unique key for the NCI equity GL account.
                     * @example 9
                     */
                    key?: string;
                    /**
                     * @description Identifier for the NCI equity GL account.
                     * @example 1000
                     */
                    id?: string;
                    /**
                     * @description Name for the NCI equity GL account.
                     * @example Bank of America A/c.
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the NCI equity GL account.
                     * @example /objects/general-ledger/account/9
                     */
                    readonly href?: string;
                };
                /** @description Specifies the subsidiary revenue General Ledger (GL) account for the subsidiary entity. */
                subsidiaryRevenueGLAccount?: {
                    /**
                     * @description Unique key for the subsidiary revenue GL account.
                     * @example 9
                     */
                    key?: string;
                    /**
                     * @description Identifier for the subsidiary revenue GL account.
                     * @example 1000
                     */
                    id?: string;
                    /**
                     * @description Name for the subsidiary revenue GL account.
                     * @example Bank of America A/c.
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the subsidiary revenue GL account.
                     * @example /objects/general-ledger/account/9
                     */
                    readonly href?: string;
                };
            };
            /** @description References the associated subsidiary entities within the ownership hierarchy. */
            subsidiaryEntity?: {
                /**
                 * @description URL endpoint for the subsidiary entity.
                 * @example /objects/company-config/entity/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the subsidiary entity.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the subsidiary entity.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description Name for the subsidiary entity.
                 * @example USA
                 */
                readonly name?: string;
            };
            /** @description References the parent entity that owns the subsidiary entity. */
            ownershipEntity?: {
                /**
                 * @description Identifier for the parent entity.
                 * @example 132
                 */
                id?: string;
                /**
                 * @description Unique key for the parent entity.
                 * @example 132
                 */
                key?: string;
                /**
                 * @description URL endpoint for the parent entity.
                 * @example /objects/consolidation/ownership-entity/132
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
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
        /**
         * @description Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
         * @default active
         * @example active
         * @enum {string}
         */
        status: "active" | "inactive";
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
    "list-consolidation-book": {
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
    "create-consolidation-book": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a consolidation book. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.consolidation.book"] & components["schemas"]["consolidation-bookRequiredProperties"];
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
    "get-consolidation-book-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the consolidation book.
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
                        "ia::result"?: components["schemas"]["objects.consolidation.book"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-consolidation-book-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the consolidation book.
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
    "update-consolidation-book-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the consolidation book.
                 * @example 89
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.consolidation.book"] & {
                    readonly id?: unknown;
                    readonly accountingMethod?: unknown;
                    multiCurrency?: {
                        readonly exchangeRateType?: unknown;
                    };
                    bookJournal?: {
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
    "post-consolidation-book-consolidate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["consolidation-book-consolidate-request"];
            };
        };
        responses: {
            /** @description Executed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["consolidation-book-consolidate-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-consolidation-entity": {
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
    "create-consolidation-entity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a consolidation entity. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.consolidation.entity"] & components["schemas"]["consolidation-entityRequiredProperties"];
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
    "get-consolidation-entity-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the consolidation entity.
                 * @example 74
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
                        "ia::result"?: components["schemas"]["objects.consolidation.entity"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-consolidation-entity-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the consolidation entity.
                 * @example 74
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
    "update-consolidation-entity-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the consolidation entity.
                 * @example 74
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.consolidation.entity"] & {
                    readonly id?: unknown;
                    readonly consolidationBook?: unknown;
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
    "list-consolidation-elimination-account": {
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
    "create-consolidation-elimination-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create an elimination account. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.consolidation.elimination-account"] & components["schemas"]["consolidation-elimination-accountRequiredProperties"];
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
    "get-consolidation-elimination-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the elimination account.
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
                        "ia::result"?: components["schemas"]["objects.consolidation.elimination-account"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-consolidation-elimination-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the elimination account.
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
    "update-consolidation-elimination-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the elimination account.
                 * @example 22
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.consolidation.elimination-account"] & {
                    readonly id?: unknown;
                    readonly consolidationBook?: unknown;
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
    "list-consolidation-override-account": {
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
    "create-consolidation-override-account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create an override account. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.consolidation.override-account"] & components["schemas"]["consolidation-override-accountRequiredProperties"];
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
    "get-consolidation-override-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the override account.
                 * @example 40
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
                        "ia::result"?: components["schemas"]["objects.consolidation.override-account"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-consolidation-override-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the override account.
                 * @example 40
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
    "update-consolidation-override-account-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the override account.
                 * @example 40
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.consolidation.override-account"] & {
                    readonly id?: unknown;
                    readonly consolidationBook?: unknown;
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
    "list-consolidation-adjustment-journal": {
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
    "create-consolidation-adjustment-journal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create an adjustment journal. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.consolidation.adjustment-journal"] & components["schemas"]["consolidation-adjustment-journalRequiredProperties"];
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
    "get-consolidation-adjustment-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the adjustment journal.
                 * @example 70
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
                        "ia::result"?: components["schemas"]["objects.consolidation.adjustment-journal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-consolidation-adjustment-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the adjustment journal.
                 * @example 70
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
    "update-consolidation-adjustment-journal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the adjustment journal.
                 * @example 70
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.consolidation.adjustment-journal"] & {
                    readonly id?: unknown;
                    readonly consolidationBookId?: unknown;
                    readonly userDefinedBookType?: unknown;
                    readonly userDefinedBookId?: unknown;
                    glJournal?: {
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
    "list-consolidation-time-period": {
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
    "get-consolidation-time-period-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the consolidation time period.
                 * @example 43
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
                        "ia::result"?: components["schemas"]["objects.consolidation.time-period"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-consolidation-run-status": {
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
    "get-consolidation-run-status-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the consolidation run-status.
                 * @example 70
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
                        "ia::result"?: components["schemas"]["objects.consolidation.run-status"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-consolidation-ownership-structure": {
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
    "create-consolidation-ownership-structure": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create an ownership structure. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.consolidation.ownership-structure"] & components["schemas"]["consolidation-ownership-structureRequiredProperties"];
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
    "get-consolidation-ownership-structure-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the ownership structure.
                 * @example 43
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
                        "ia::result"?: components["schemas"]["objects.consolidation.ownership-structure"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-consolidation-ownership-structure-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the ownership structure.
                 * @example 43
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
    "update-consolidation-ownership-structure-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the ownership structure.
                 * @example 43
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.consolidation.ownership-structure"] & {
                    readonly id?: string;
                    elimination?: {
                        /** @default true */
                        readonly enableInterEntityAutoElimination?: boolean;
                    };
                    userDefinedBookForEquityMethod?: {
                        id?: string;
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
    "post-consolidation-ownership-structure-consolidate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["consolidation-ownership-structure-consolidate-request"];
            };
        };
        responses: {
            /** @description Executed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["consolidation-ownership-structure-consolidate-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-consolidation-ownership-structure-period-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the ownership structure period.
                 * @example 43
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
                        "ia::result"?: components["schemas"]["objects.consolidation.ownership-structure-period"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-consolidation-ownership-structure-period-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the ownership structure period.
                 * @example 43
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
    "update-consolidation-ownership-structure-period-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the ownership structure period.
                 * @example 43
                 */
                key: string;
            };
            cookie?: never;
        };
        /** @description Updates an ownership structure period. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.consolidation.ownership-structure-period"];
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
    "list-consolidation-ownership-structure-period": {
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
    "create-consolidation-ownership-structure-period": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create an ownership structure period. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.consolidation.ownership-structure-period"] & components["schemas"]["consolidation-ownership-structure-periodRequiredProperties"];
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
    "list-consolidation-ownership-entity": {
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
    "get-consolidation-ownership-entity-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the ownership entity.
                 * @example 43
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
                        "ia::result"?: components["schemas"]["objects.consolidation.ownership-entity"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-consolidation-ownership-entity-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the ownership entity.
                 * @example 43
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
    "get-consolidation-ownership-subsidiary-entity-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the ownership subsidiary entity.
                 * @example 43
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
                        "ia::result"?: components["schemas"]["objects.consolidation.ownership-subsidiary-entity"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-consolidation-ownership-subsidiary-entity-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the ownership subsidiary entity.
                 * @example 43
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
    "list-consolidation-ownership-subsidiary-entity": {
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
}

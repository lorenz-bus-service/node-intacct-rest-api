// Generated from spec/fixed-assets-management.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/fixed-assets/asset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List assets
         * @description Returns a collection with a key, ID, and link for each asset. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-fixed-assets-asset"];
        put?: never;
        /**
         * Create an asset
         * @description Creates a new asset.
         */
        post: operations["post-fixed-assets-asset"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/asset/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the asset.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an asset
         * @description Returns detailed information for a specified asset.
         */
        get: operations["get-fixed-assets-asset-key"];
        put?: never;
        post?: never;
        /**
         * Delete an asset
         * @description Deletes an asset.
         *
         *     You can delete assets that are in the `readyForReview` state. Assets that are `inService` or `disposed` cannot be deleted. Instead, consider changing their status to `inactive`.
         *
         *     If the asset you want to delete is assigned as a parent asset, edit the children assets to remove the parent association.
         */
        delete: operations["delete-fixed-assets-asset-key"];
        options?: never;
        head?: never;
        /**
         * Update an asset
         * @description Updates an existing asset by setting field values. Any fields not provided remain unchanged.
         *
         *     The asset `state` determines which fields of the asset may be edited. If the `state` is set to `disposed`, you may not edit any fields.
         *     See [Editing assets](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Edit_asset) for more details.
         */
        patch: operations["patch-fixed-assets-asset-key"];
        trace?: never;
    };
    "/objects/fixed-assets/asset-classification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List asset classifications
         * @description Returns a collection with a key, ID, and link for each asset classification. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-fixed-assets-classification"];
        put?: never;
        /**
         * Create an asset classification
         * @description Creates a new asset classification.
         */
        post: operations["post-fixed-assets-classification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/asset-classification/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the asset classification.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an asset classification
         * @description Returns detailed information for a specified asset classification.
         */
        get: operations["get-fixed-assets-classification-key"];
        put?: never;
        post?: never;
        /**
         * Delete an asset classification
         * @description Deletes an asset classification.
         */
        delete: operations["delete-fixed-assets-classification-key"];
        options?: never;
        head?: never;
        /**
         * Update an asset classification
         * @description Updates an existing asset classification by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["patch-fixed-assets-classification-key"];
        trace?: never;
    };
    "/objects/fixed-assets/depreciation-method": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List depreciation methods
         * @description Returns a collection with a key, ID, and link for each depreciation method. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-fixed-assets-depreciation-method"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/depreciation-method/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the depreciation method.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a depreciation method
         * @description Returns detailed information for a specified depreciation method.
         */
        get: operations["list-fixed-assets-depreciation-method-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/asset-depreciation-rule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List asset depreciation rules
         * @description Returns a collection with a key, ID, and link for each asset depreciation rule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-fixed-assets-asset-depreciation-rule"];
        put?: never;
        /**
         * Create an asset depreciation rule
         * @description Creates a new asset depreciation rule.
         */
        post: operations["post-fixed-assets-asset-depreciation-rule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/asset-depreciation-rule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the asset depreciation rule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an asset depreciation rule
         * @description Returns detailed information for a specified asset depreciation rule.
         */
        get: operations["get-fixed-assets-asset-depreciation-rule-key"];
        put?: never;
        post?: never;
        /**
         * Delete an asset depreciation rule
         * @description Deletes an asset depreciation rule.
         */
        delete: operations["delete-fixed-assets-asset-depreciation-rule-key"];
        options?: never;
        head?: never;
        /**
         * Update an asset depreciation rule
         * @description Updates an existing asset depreciation rule by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["patch-fixed-assets-asset-depreciation-rule-key"];
        trace?: never;
    };
    "/objects/fixed-assets/classification-depreciation-rule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List classification depreciation rules
         * @description Returns a collection with a key, ID, and link for each classification depreciation rule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-fixed-assets-classification-depreciation-rule"];
        put?: never;
        /**
         * Create a classification depreciation rule
         * @description Creates a new classification depreciation rule.
         */
        post: operations["post-fixed-assets-classification-depreciation-rule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/classification-depreciation-rule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the classification depreciation rule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a classification depreciation rule
         * @description Returns detailed information for a specified classification depreciation rule.
         */
        get: operations["get-fixed-assets-classification-depreciation-rule-key"];
        put?: never;
        post?: never;
        /**
         * Delete a classification depreciation rule
         * @description Deletes a classification depreciation rule.
         */
        delete: operations["delete-fixed-assets-classification-depreciation-rule-key"];
        options?: never;
        head?: never;
        /**
         * Update a classification depreciation rule
         * @description Updates an existing classification depreciation rule by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["patch-fixed-assets-classification-depreciation-rule-key"];
        trace?: never;
    };
    "/objects/fixed-assets/depreciation-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List depreciation schedules
         * @description Returns a collection with a key, ID, and link for each depreciation schedule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-fixed-assets-depreciation-schedule"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/depreciation-schedule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the depreciation schedule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a depreciation schedule
         * @description Returns detailed information for a specified depreciation schedule.
         */
        get: operations["get-fixed-assets-depreciation-schedule-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/depreciation-schedule-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List depreciation schedule entries
         * @description Returns a collection with a key, ID, and link for each depreciation schedule entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-fixed-assets-depreciation-schedule-entry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/depreciation-schedule-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the depreciation schedule entry.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a depreciation schedule entry
         * @description Returns detailed information for a specified depreciation schedule entry.
         */
        get: operations["get-fixed-assets-depreciation-schedule-entry-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/setup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List setups
         * @description Returns a collection with a key, ID, and link for each setup. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-fixed-assets-setup"];
        put?: never;
        /**
         * Create a setup
         * @description Creates a new setup.
         */
        post: operations["post-fixed-assets-setup"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/setup/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the setup.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a setup
         * @description Returns detailed information for a specified setup.
         */
        get: operations["get-fixed-assets-setup-key"];
        put?: never;
        post?: never;
        /**
         * Delete a setup
         * @description This operation is not supported.
         */
        delete: operations["delete-fixed-assets-setup-key"];
        options?: never;
        head?: never;
        /**
         * Update a setup
         * @description Updates an existing setup by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["patch-fixed-assets-setup-key"];
        trace?: never;
    };
    "/objects/fixed-assets/setup-posting-rule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List setup posting rules
         * @description Returns a collection with a key, ID, and link for each setup posting rule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-fixed-assets-setup-posting-rule"];
        put?: never;
        /**
         * Create a setup posting rule
         * @description Creates a new setup posting rule.
         */
        post: operations["post-fixed-assets-setup-posting-rule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/setup-posting-rule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the setup posting rule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a setup posting rule
         * @description Returns detailed information for a specified setup posting rule.
         */
        get: operations["get-fixed-assets-posting-rule-key"];
        put?: never;
        post?: never;
        /**
         * Delete a setup posting rule
         * @description Deletes a setup posting rule.
         *
         *     Before deleting a setup posting rule, ensure that there are no depreciation rules using that posting rule. Edit the depreciation rule on the classification or asset to remove the setup posting rule first.
         *     For more information, see [classification depreciation rule](fixed-assets.classification-depreciation-rule) or [asset depreciation rule](fixed-assets.asset-depreciation-rule).
         */
        delete: operations["delete-fixed-assets-setup-posting-rule-key"];
        options?: never;
        head?: never;
        /**
         * Update a setup posting rule
         * @description Updates an existing setup posting rule by setting field values. Any fields not provided remain unchanged.
         *
         *     Before editing a setup posting rule, ensure that there are no depreciation rules using that posting rule. Edit the depreciation rule on the classification or asset to temporarily remove the posting rule first.
         *     For more information, see [classification depreciation rule](fixed-assets.classification-depreciation-rule) or [asset depreciation rule](fixed-assets.asset-depreciation-rule).
         */
        patch: operations["patch-fixed-assets-setup-posting-rule-key"];
        trace?: never;
    };
    "/objects/fixed-assets/transfer-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transfer histories
         * @description Returns a collection with a key, ID, and link for each transfer operation. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-fixed-assets-transfer-history"];
        put?: never;
        /**
         * Create a transfer history
         * @description Creates a new transfer history.
         */
        post: operations["post-fixed-assets-transfer-history"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/transfer-history/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transfer history.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transfer history
         * @description Returns detailed information for a specified transfer history.
         */
        get: operations["get-fixed-assets-transfer-history-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transfer history
         * @description Deletes a transfer history.
         *
         *     You can delete latest transfer history of an asset.
         */
        delete: operations["delete-transfer-history-key"];
        options?: never;
        head?: never;
        /**
         * Update a transfer history
         * @description Updates an existing transfer history by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["patch-fixed-assets-transfer-history"];
        trace?: never;
    };
    "/objects/fixed-assets/transfer-journal-entry-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transfer journal entry maps
         * @description Returns a collection with a key, ID, and link for each transfer journal entry map. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-fixed-assets-transfer-journal-entry-map"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/transfer-journal-entry-map/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transfer journal entry map.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transfer journal entry map
         * @description Returns detailed information for a specified transfer journal entry map.
         */
        get: operations["get-fixed-assets-transfer-journal-entry-map-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/disposal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List disposals
         * @description Returns a collection with a key, ID, and link for each disposal. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-fixed-assets-disposal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/disposal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the disposal.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a disposal
         * @description Returns detailed information for a specified disposal.
         */
        get: operations["get-fixed-assets-disposal-key"];
        put?: never;
        post?: never;
        /**
         * Delete a disposal
         * @description Deletes a disposal. You can delete or revert the most recent disposal of an asset, whether it is a partial disposal or a full disposal.
         */
        delete: operations["delete-fixed-assets-disposal-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/disposal-depreciation-schedule-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List disposal depreciation schedule maps */
        get: operations["list-fixed-assets-disposal-depreciation-schedule-map"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/fixed-assets/disposal-depreciation-schedule-map/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the disposal depreciation schedule map.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        /** Get a disposal depreciation schedule map */
        get: operations["get-fixed-assets-disposal-depreciation-schedule-map-key"];
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
        /** @description A resource used in the operations of a business. */
        "objects.fixed-assets.asset": {
            /**
             * @description System-assigned unique key for the asset.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description ID for the asset.
             * @example CE_ASSET-1
             */
            id?: string;
            /**
             * @description URL endpoint for the asset.
             * @example /objects/fixed-assets/asset/2
             */
            readonly href?: string;
            /**
             * @description Name for the asset.
             * @example Laptop
             */
            name?: string;
            /**
             * @description Represents stages in the asset life cycle:
             *
             *     - `constructionInProgress` - the asset is being constructed and is not yet ready for use.
             *     - `readyForReview` - new asset exists in Sage Intacct but it is not yet depreciating.
             *     - `inService` - the asset is currently in use by a business and its value can depreciate on a schedule.
             *     - `disposed` - the asset was removed from service, typically due to a sale.
             *     - `split` - the asset was split into multiple assets.
             *
             *     Assets are moved from `constructionInProgress` to `readyForReview` to `inService` and ultimately to `disposed` state.
             * @default readyForReview
             * @example inService
             * @enum {string}
             */
            state?: "inService" | "readyForReview" | "constructionInProgress" | "disposed" | "split";
            /**
             * Format: decimal-precision-2
             * @description The amount that the asset was purchased for. It must be a positive number.
             *
             *     This property is required for assets in service. It is also required if there is a salvage value.
             * @example 3000.55
             */
            assetCost?: string;
            /**
             * Format: decimal-precision-2
             * @description The estimated value of the asset at the end of its useful life. It must be less than the asset cost.
             * @example 300.55
             */
            salvageValue?: string;
            /**
             * Format: date
             * @description The date when the asset is available for use. This date, along with the convention, determines when the asset starts to depreciate. The in-service date must be on or after the acquisition date.
             * @example 2020-01-01
             */
            inServiceDate?: string;
            /**
             * Format: date
             * @description The date when the CIP asset was capitalized. This date is set when the asset state changes from `constructionInProgress` to `readyForReview`.
             * @example 2020-01-01
             */
            capitalizationDate?: string | null;
            /**
             * @description Product serial number of the asset.
             * @example CE_ASSET-1
             */
            serialNumber?: string;
            /**
             * @description Product asset tag for the asset.
             * @example ASSET_TAG-0001
             */
            assetTag?: string;
            /** @description The location of the entity associated with the asset. */
            multiEntityLocation?: {
                /**
                 * @description System-assigned key for the location.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description ID for the location.
                 * @example 1
                 */
                readonly id?: string;
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
            /** @description Supporting document associated with the asset. */
            attachment?: {
                /**
                 * @description System-assigned key for the attachment.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the attachment.
                 * @example Jan23Xls
                 */
                id?: string;
                /**
                 * @description Name for the attachment.
                 * @example January spreadsheet
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/1
                 */
                readonly href?: string;
            };
            /**
             * @description Number of units of the asset.
             * @default 1
             * @example 1
             */
            quantity?: number;
            /**
             * Format: date
             * @description The date the asset was purchased or obtained by your business.
             * @example 2020-01-01
             */
            acquisitionDate?: string;
            /**
             * @description Description of the asset.
             * @example Lenovo ThinkPad
             */
            description?: string;
            /**
             * @description Notes or comments about the asset.
             * @example Next major service due at 3,000 hours
             */
            notes?: string;
            /**
             * @description Set to `true` if the cost of the asset will be allocated over time. Depreciation schedules are generated when the asset is placed in service.
             *
             *     Set to `false` for tracking non-depreciable assets such as land, art, coins, or collectibles. No depreciation schedules will be generated.
             *
             *     If the asset is not depreciable, do not specify the following properties:
             *
             *     - `salvageValue`
             *     - `accumulatedDepreciationGLAccount`
             *     - `depreciationExpenseGLAccount`
             *     - `depreciationRules`
             * @default true
             * @example true
             */
            isDepreciable?: boolean;
            /**
             * @description The type of the asset.
             *
             *     Tangible assets have physical substance, such as equipment or land.
             *     Intangible assets do not have physical substance, such as patents or copyrights.
             * @default tangible
             * @example tangible
             * @enum {string}
             */
            type?: "tangible" | "intangible";
            /** @description The bill the asset was created from. */
            sourceTxn?: {
                /**
                 * Format: decimal-precision-2
                 * @description Cost amount from the source transaction.
                 * @example 3000.55
                 */
                txnAmount?: string;
                /**
                 * @description Type for the source header.
                 * @example IA.BILL
                 */
                txnType?: string;
                /**
                 * @description Key for the source header.
                 * @example 3874
                 */
                txnKey?: string;
                /**
                 * @description ID for the source header.
                 * @example Bill-00302
                 */
                txnId?: string;
                /**
                 * @description Label for the source header.
                 * @example Bill Bill-00302
                 */
                readonly txnLabel?: string;
                /**
                 * Format: date
                 * @description The date of a source transaction associated with the asset.
                 */
                txnDate?: string;
                /**
                 * @description Key for the source line.
                 * @example 89483
                 */
                lineKey?: string;
                /**
                 * @description Source line number.
                 * @example 3
                 */
                lineNumber?: string;
            };
            /**
             * @description The depreciable cost of the asset.
             * @example 2700
             */
            readonly depreciableCost?: string;
            /** @description Asset disposal details. */
            disposal?: {
                /**
                 * @description System-assigned key for the disposal.
                 * @example 6725
                 */
                key?: string;
                /**
                 * @description Unique identifier for the disposal.
                 * @example 6725
                 */
                id?: string;
                /**
                 * @description The type of dispose type, If it's partial disposal then the value will be true otherwise value will be false. For example if you have a assets with asset cost 3000 and you want to dispose a part of this asset which value is 2000 then you can set this value to true. And if you dispose the whole asset then it will be false
                 * @default false
                 * @example false
                 */
                isPartial?: boolean;
                /**
                 * Format: decimal-precision-2
                 * @description The amount of partial disposal of an asset.
                 * @example 500.89
                 */
                disposalAmount?: string;
                /**
                 * Format: date
                 * @description The date when the asset was fully or partially removed from business operations.
                 * @example 2025-08-08
                 */
                disposalDate?: string;
                /**
                 * @description The reason for disposal of the asset.
                 *
                 *     - `sale` - you receive a payment in exchange for the asset.
                 *     - `casualtyLoss` - the asset is destroyed or damaged due to an unforeseen event or accident. No payment is received.
                 *     - `theft` - the asset is stolen. No payment is received.
                 *     - `other` - the asset is removed from service for any other reason. The asset might still be in your possession, but it reached the end of its useful life or has no resale value. No payment is received.
                 *
                 *     If the reason for disposal is `sale`, then the `salePrice` and `disposalGLAccount` properties must be specified.
                 * @default null
                 * @example sale
                 * @enum {string|null}
                 */
                disposalType?: "sale" | "casualtyLoss" | "theft" | "other" | null;
                /**
                 * Format: decimal-precision-2
                 * @description The amount the asset was fully or partially sold for. Specify for assets with `disposalType` set to `sale`.
                 * @example 1000.58
                 */
                salePrice?: string;
                /**
                 * @description Notes about the disposal of the asset.
                 * @example Sold to Lincoln Avenue Veterinary Clinic
                 */
                comments?: string;
                /**
                 * @description URL endpoint for the disposal.
                 * @example /objects/fixed-assets/disposal/1
                 */
                readonly href?: string;
            };
            /** @description Allocation entry associated with the asset. */
            allocation?: {
                /**
                 * @description System-assigned unique key for the allocation entry.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the allocation entry.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the allocation entry.
                 * @example /objects/general-ledger/txn-allocation-template/1
                 */
                readonly href?: string;
            };
            /**
             * @description Use dimensions to assign the asset to a project, department, or any other dimension value.
             *
             *     The `location` dimension is always required. Other dimensions might be required depending on the configuration of your accumulated depreciation and depreciation expense GL accounts.
             */
            dimensions?: {
                /** @description The class associated with this asset. */
                class?: {
                    /**
                     * @description System-assigned key for the class.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the class.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Name for the class.
                     * @example 1
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the class.
                     * @example /objects/company-config/class/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The contract associated with the asset. */
                contract?: {
                    /**
                     * @description System-assigned key for the contract.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the contract.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Name for the contract.
                     * @example 1
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the contract.
                     * @example /objects/contracts/contract/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The cost type for the asset. */
                costType?: {
                    /**
                     * @description System-assigned key for the cost type.
                     * @example 7
                     */
                    key?: string | null;
                    /**
                     * @description ID for the cost type.
                     * @example LABOR
                     */
                    id?: string | null;
                    /**
                     * @description Name for the cost type.
                     * @example LABOR
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the cost type.
                     * @example /objects/construction/standard-cost-type/7
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The customer associated with the asset. */
                customer?: {
                    /**
                     * @description System-assigned key for the customer.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the customer.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Name for the customer.
                     * @example Power Aerospace Materials
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the customer.
                     * @example /objects/accounts-receivable/customer/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The department associated with the asset. */
                department?: {
                    /**
                     * @description System-assigned key for the department.
                     * @example 3
                     */
                    key?: string | null;
                    /**
                     * @description ID for the department.
                     * @example 3
                     */
                    id?: string | null;
                    /**
                     * @description Name for the department.
                     * @example Engineering
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/3
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The employee associated with the asset. */
                employee?: {
                    /**
                     * @description System-assigned key for the employee.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the employee.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Name for the employee.
                     * @example Amy Nguyen
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the employee.
                     * @example /objects/company-config/employee/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The item associated with the asset. */
                item?: {
                    /**
                     * @description System-assigned key for the item.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the item.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Name for the item.
                     * @example PC Computer
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the item.
                     * @example /objects/inventory-control/item/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The location associated with the asset. */
                location?: {
                    /**
                     * @description System-assigned key for the location.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the location.
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
                    readonly href?: string | null;
                };
                /** @description The project associated with the asset. */
                project?: {
                    /**
                     * @description System-assigned key for the project.
                     * @example 8
                     */
                    key?: string | null;
                    /**
                     * @description ID for the project.
                     * @example 8
                     */
                    id?: string | null;
                    /**
                     * @description Name for the project.
                     * @example Client Services - Power Aerospace Materials
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the project.
                     * @example /objects/projects/project/8
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The task associated with the asset. */
                task?: {
                    /**
                     * @description System-assigned key for the task.
                     * @example 8
                     */
                    key?: string | null;
                    /**
                     * @description ID for the task.
                     * @example 01-041
                     */
                    id?: string | null;
                    /**
                     * @description Name for the task.
                     * @example Project coordination
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the task.
                     * @example /objects/projects/task/8
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The vendor associated with the asset. */
                vendor?: {
                    /**
                     * @description System-assigned key for the vendor.
                     * @example 43
                     */
                    key?: string | null;
                    /**
                     * @description ID for the vendor.
                     * @example 1099 Int
                     */
                    id?: string | null;
                    /**
                     * @description Name for the vendor.
                     * @example 1099 Int
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the vendor.
                     * @example /objects/accounts-payable/vendor/43
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The warehouse associated with the asset. */
                warehouse?: {
                    /**
                     * @description System-assigned key for the warehouse.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the warehouse.
                     * @example WH01
                     */
                    id?: string | null;
                    /**
                     * @description Name for the warehouse.
                     * @example WH01 Lakefront
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the warehouse.
                     * @example /objects/inventory-control/warehouse/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The affiliate-entity associated with the asset. */
                affiliateEntity?: {
                    /**
                     * @description System-assigned key for the affiliate-entity.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the affiliate-entity.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Name for the affiliate-entity.
                     * @example United States of America
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the affiliate-entity.
                     * @example /objects/company-config/affiliate-entity/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The loan account associated with the asset. */
                loanAccount?: {
                    /**
                     * @description System-assigned key for the loan account.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the loan account.
                     * @example 5000
                     */
                    id?: string | null;
                    /**
                     * @description Name for the loan account.
                     * @example Cash Account
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the loan account.
                     * @example /objects/loan-management/loan-account/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The work order associated with the asset. */
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
                    readonly href?: string | null;
                } | null;
            };
            /** @description Required if `state` is set to `inService`. The General Ledger account where transactions involving asset cost and disposal are recorded as debits and credits. */
            assetGLAccount?: {
                /**
                 * @description System-assigned key for the asset GL account.
                 * @example 93
                 */
                key?: string;
                /**
                 * @description ID for the asset GL account.
                 * @example 1500
                 */
                id?: string;
                /**
                 * @description Name for the asset GL account.
                 * @example Computer Equipment
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the asset GL account.
                 * @example /objects/general-ledger/account/93
                 */
                readonly href?: string;
            };
            /** @description Use only if `isDepreciable` is set to `true`. Required if `state` is set to `inService`. The General Ledger account where depreciation transactions are recorded as credits. It offsets the depreciation expense account. */
            accumulatedDepreciationGLAccount?: {
                /**
                 * @description System-assigned key for the accumulated depreciation GL account.
                 * @example 98
                 */
                key?: string;
                /**
                 * @description ID for the accumulated depreciation GL account.
                 * @example 1901
                 */
                id?: string;
                /**
                 * @description Name for the accumulated depreciation GL account.
                 * @example Accumulated Depreciation
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the accumulated depreciation GL account.
                 * @example /objects/general-ledger/account/98
                 */
                readonly href?: string;
            };
            /** @description Use only if `isDepreciable` is set to `true`. Required if `state` is set to `inService`. The General Ledger account where depreciation transactions are recorded as debits. */
            depreciationExpenseGLAccount?: {
                /**
                 * @description System-assigned key for the depreciation expense GL account.
                 * @example 270
                 */
                key?: string;
                /**
                 * @description ID for the depreciation expense GL account.
                 * @example 6350
                 */
                id?: string;
                /**
                 * @description Name for the depreciation expense GL account.
                 * @example Depreciation Expense
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the depreciation expense GL account.
                 * @example /objects/general-ledger/account/270
                 */
                readonly href?: string;
            };
            /**
             * @description The General Ledger account where the sales price is recorded as a debit. Typically, it is a depreciation expense account or a gain and loss account.
             *
             *     Specify this property when the `disposalType` is set to `sale`. Required when the `salesPrice` is greater than zero.
             *
             *     The account must be active and non-statistical. Specify a different account than the `gainLossGLAccount`.
             */
            disposalGLAccount?: {
                /**
                 * @description System-assigned key for the disposal GL account.
                 * @example 101
                 */
                key?: string;
                /**
                 * @description ID for the disposal GL account.
                 * @example 1904
                 */
                id?: string;
                /**
                 * @description Name for the disposal GL account.
                 * @example Computer Equipment
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the disposal GL account.
                 * @example /objects/general-ledger/account/101
                 */
                readonly href?: string;
            };
            /**
             * @description The General Ledger account where the gain or loss on disposal amount is recorded as a debit or credit.
             *
             *     The account must be active and non-statistical. Specify a different account than the `disposalGLAccount`.
             */
            readonly gainLossGLAccount?: {
                /**
                 * @description System-assigned key for the gain loss GL account.
                 * @example 94
                 */
                readonly key?: string;
                /**
                 * @description ID for the gain loss GL account.
                 * @example 1501
                 */
                readonly id?: string;
                /**
                 * @description Name for the gain loss GL account.
                 * @example Gain account
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the gain loss GL account.
                 * @example /objects/general-ledger/account/94
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates whether the asset was created for a Construction in Progress (CIP) GL account.
             *
             *     While CIP assets generally start with a state of `constructionInProgress`,
             *     the asset state can change (for example, to `readyForReview` or `placedInService`)
             *     once the construction is complete and the asset is capitalized.
             *     However, the `isCIPAsset` flag remains `true` to identify its origin as a CIP asset.
             *
             *     Set to `false` for assets that are not associated with a CIP GL account.
             * @default false
             * @example false
             */
            isCIPAsset?: boolean;
            /**
             * @description The General Ledger account for Construction in Progress (CIP) transactions. This account is used to track assets that are under construction or development.
             *
             *     Required when `isCIPAsset` is set to `true`. The account must be active and non-statistical.
             */
            cipGLAccount?: {
                /**
                 * @description System-assigned key for the CIP GL account.
                 * @example 102
                 */
                key?: string;
                /**
                 * @description ID for the CIP GL account.
                 * @example 1550
                 */
                id?: string;
                /**
                 * @description Name for the CIP GL account.
                 * @example Construction in Progress
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the CIP GL account.
                 * @example /objects/general-ledger/account/102
                 */
                readonly href?: string;
            };
            /** @description The journal entry associated with CIP (Construction in Progress) transactions for this asset. */
            readonly cipJournalEntry?: {
                /**
                 * @description System-assigned unique key for the CIP journal entry.
                 * @example 6726
                 */
                readonly key?: string;
                /**
                 * @description ID for the CIP journal entry.
                 * @example 6726
                 */
                readonly id?: string;
                /**
                 * @description System-assigned transaction number for the CIP journal entry.
                 * @example 41
                 */
                readonly txnNumber?: number;
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/general-ledger/journal-entry/6726
                 */
                readonly href?: string;
            };
            /**
             * @description The General Ledger account where the provision price of the derogatory method is recorded as a debit for depreciation transactions.
             *
             *     The account must be active and non-statistical.
             */
            provisionDerogatoryGLAccount?: {
                /**
                 * @description System-assigned key for the provision GL account.
                 * @example 101
                 */
                key?: string;
                /**
                 * @description ID for the provision GL account.
                 * @example 1551
                 */
                id?: string;
                /**
                 * @description Name for the provision GL account.
                 * @example Derogatory depreciation
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the provision GL account.
                 * @example /objects/general-ledger/account/101
                 */
                readonly href?: string;
            };
            /**
             * @description The General Ledger account where the reversal price of the derogatory method is recorded as a debit (when reversal amount is not zero), or credit (when provision amount is not zero), for depreciation transactions.
             *
             *     The account must be active and non-statistical.
             */
            accumulatedProvisionDerogatoryGLAccount?: {
                /**
                 * @description System-assigned key for the accumulated provision GL account.
                 * @example 102
                 */
                key?: string;
                /**
                 * @description ID for the accumulated provision GL account.
                 * @example 1552
                 */
                id?: string;
                /**
                 * @description Name for the accumulated provision GL account.
                 * @example Derogatory accumulated provision
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the accumulated provision GL account.
                 * @example /objects/general-ledger/account/102
                 */
                readonly href?: string;
            };
            /**
             * @description The General Ledger account where the reversal price of the derogatory method is recorded as a credit for depreciation transactions.
             *
             *     The account must be active and non-statistical.
             */
            reversalDerogatoryGLAccount?: {
                /**
                 * @description System-assigned key for the reversal GL account.
                 * @example 108
                 */
                key?: string;
                /**
                 * @description ID for the reversal GL account.
                 * @example 1556
                 */
                id?: string;
                /**
                 * @description Name for the reversal GL account.
                 * @example Derogatory reversal
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the reversal GL account.
                 * @example /objects/general-ledger/account/108
                 */
                readonly href?: string;
            };
            /**
             * @description Required if `state` is set to `inService`. Provides the GL accounts and depreciation rules properties with default values for assets of that category.
             *
             *     You can customize the GL accounts and depreciation rules per asset, after the asset has been created.
             */
            classification?: {
                /**
                 * @description System-assigned key for the classification.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description ID for the classification.
                 * @example Computer Equipment
                 */
                id?: string;
                /**
                 * @description Name for the classification.
                 * @example CE-1
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the classification.
                 * @example /objects/fixed-assets/classification/3
                 */
                readonly href?: string;
            };
            /** @description By linking parent assets, you can create a hierarchy of assets. An asset can only have one parent. An asset cannot reference itself as the parent. */
            parent?: {
                /**
                 * @description System-assigned key for the parent asset.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the parent asset.
                 * @example CE_ASSET-0
                 */
                id?: string;
                /**
                 * @description Name for the parent asset.
                 * @example Lenovo
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the parent asset.
                 * @example /objects/fixed-assets/asset/1
                 */
                readonly href?: string;
            };
            /**
             * @description Depreciation rules contain information about the depreciation method, convention, and useful life for the asset.
             *
             *     If the asset `state` is set to `inService` and `isDepreciable` is set to `true`, it must have at least one depreciation rule.
             *     Assets that are not depreciable cannot have any depreciation rules.
             */
            depreciationRules?: components["schemas"]["objects.fixed-assets.asset-depreciation-rule"][];
            /**
             * Format: date
             * @description The latest date the asset was transferred.
             *
             *     This date also serves as the General Ledger posting date for the transfer journal entry in transfer-history object.
             */
            transferDate?: string;
            /** @description By linking to a parent asset, you can create a hierarchy of split assets. A split asset can only have one parent. This field is null for a parent asset which is being split. */
            readonly splitParent?: {
                /**
                 * @description System-assigned key for the split parent asset.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description ID for the split parent asset.
                 * @example CE_ASSET-0
                 */
                readonly id?: string;
                /**
                 * @description Name for the split parent asset.
                 * @example Lenovo
                 */
                readonly name?: string;
                /**
                 * Format: date
                 * @description The date the parent asset was split.
                 * @example 2020-01-01
                 */
                readonly splitDate?: string;
                /**
                 * @description URL endpoint for the split parent asset.
                 * @example /objects/fixed-assets/asset/1
                 */
                readonly href?: string;
            } | null;
            /**
             * Format: date
             * @description The date the asset was split.
             * @example 2020-01-01
             */
            splitDate?: string | null;
            /** @description List of assets that are split from this asset. Only applicable for a parent asset which is being split. */
            splitAssets?: {
                /**
                 * @description System-assigned unique key for the asset.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description ID for the asset.
                 * @example CE_ASSET-1
                 */
                id?: string;
                /**
                 * @description Name for the asset.
                 * @example Laptop
                 */
                readonly name?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The amount that the asset was purchased for.
                 * @example 3000.55
                 */
                readonly assetCost?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The estimated value of the asset at the end of its useful life.
                 * @example 300.55
                 */
                readonly salvageValue?: string;
                /**
                 * @description URL endpoint for the asset.
                 * @example /objects/fixed-assets/asset/2
                 */
                readonly href?: string;
            }[];
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "fixed-assets-assetRequiredProperties": Record<string, never>;
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
        /** @description Classification of an asset */
        "objects.fixed-assets.asset-classification": {
            /**
             * @description System-assigned unique key for the asset classification.
             * @example 3
             */
            readonly key?: string;
            /**
             * @description Unique ID for the asset classification.
             * @example CE-1
             */
            id?: string;
            /**
             * @description URL endpoint for the asset classification.
             * @example /objects/fixed-assets/asset-classification/3
             */
            readonly href?: string;
            /**
             * @description Name for the asset classification.
             * @example Computer Equipment
             */
            name?: string;
            /** @description Multi-entity location. */
            multiEntityLocation?: {
                /**
                 * @description System-assigned unique key for the multi-entity location.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the multi-entity location.
                 * @example 1
                 */
                readonly id?: string;
                /**
                 * @description Name for the multi-entity location.
                 * @example United States of America
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the multi-entity location.
                 * @example /objects/company-config/location/1
                 */
                readonly href?: string;
            };
            /** @description The General Ledger (GL) account for transactions involving asset cost and disposal. */
            assetGLAccount?: {
                /**
                 * @description System-assigned unique key for the asset GL account.
                 * @example 93
                 */
                key?: string;
                /**
                 * @description Unique ID for the asset GL account.
                 * @example 1500
                 */
                id?: string;
                /**
                 * @description Name for the asset GL account.
                 * @example Computer Equipment
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the asset GL account.
                 * @example /objects/general-ledger/account/93
                 */
                readonly href?: string;
            };
            /** @description The General Ledger (GL) account where depreciation transactions are recorded as credits. */
            accumulatedDepreciationGLAccount?: {
                /**
                 * @description System-assigned key for the accumulated depreciation GL account.
                 * @example 98
                 */
                key?: string;
                /**
                 * @description Unique ID for the accumulated depreciation GL account.
                 * @example 1901
                 */
                id?: string;
                /**
                 * @description Name for the accumulated depreciation GL account.
                 * @example Accumulated Depreciation
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the accumulated depreciation GL account.
                 * @example /objects/general-ledger/account/98
                 */
                readonly href?: string;
            };
            /** @description The General Ledger (GL) account where depreciation transactions are recorded as debits. */
            depreciationExpenseGLAccount?: {
                /**
                 * @description System-assigned unique key for the depreciation expense GL account.
                 * @example 270
                 */
                key?: string;
                /**
                 * @description Unique ID for the depreciation expense GL account.
                 * @example 6350
                 */
                id?: string;
                /**
                 * @description Name for the depreciation expense GL account.
                 * @example Depreciation Expense
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the depreciation expense GL account.
                 * @example /objects/general-ledger/account/270
                 */
                readonly href?: string;
            };
            /**
             * @description The General Ledger account where the sale price is recorded as a debit. Typically, it is a depreciation expense account or a gain and loss account.
             *
             *     Required before disposing any asset.
             *
             *     The account must be active and non-statistical.
             */
            disposalGLAccount?: {
                /**
                 * @description System-assigned key for the disposal GL account.
                 * @example 101
                 */
                key?: string;
                /**
                 * @description ID for the disposal GL account.
                 * @example 1904
                 */
                id?: string;
                /**
                 * @description Name for the disposal GL account.
                 * @example Computer Equipment
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the disposal GL account.
                 * @example /objects/general-ledger/account/101
                 */
                readonly href?: string;
            };
            /**
             * @description The General Ledger account for Construction in Progress (CIP) transactions. This account is used to track assets that are under construction or development.
             *
             *     The account must be active and non-statistical.
             */
            cipGLAccount?: {
                /**
                 * @description System-assigned key for the CIP GL account.
                 * @example 102
                 */
                key?: string;
                /**
                 * @description ID for the CIP GL account.
                 * @example 1550
                 */
                id?: string;
                /**
                 * @description Name for the CIP GL account.
                 * @example Construction in Progress
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the CIP GL account.
                 * @example /objects/general-ledger/account/102
                 */
                readonly href?: string;
            };
            /**
             * @description The General Ledger account where the provision price of the derogatory method is recorded as a debit for depreciation transactions.
             *
             *     The account must be active and non-statistical.
             */
            provisionDerogatoryGLAccount?: {
                /**
                 * @description System-assigned key for the provision GL account.
                 * @example 101
                 */
                key?: string;
                /**
                 * @description ID for the provision GL account.
                 * @example 1551
                 */
                id?: string;
                /**
                 * @description Name for the provision GL account.
                 * @example Derogatory depreciation
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the provision GL account.
                 * @example /objects/general-ledger/account/101
                 */
                readonly href?: string;
            };
            /**
             * @description The General Ledger account where the reversal price of the derogatory method is recorded as a debit (when reversal amount is not zero), or credit (when provision amount is not zero), for depreciation transactions.
             *
             *     The account must be active and non-statistical.
             */
            accumulatedProvisionDerogatoryGLAccount?: {
                /**
                 * @description System-assigned key for the accumulated provision GL account.
                 * @example 102
                 */
                key?: string;
                /**
                 * @description ID for the accumulated provision GL account.
                 * @example 1552
                 */
                id?: string;
                /**
                 * @description Name for the accumulated provision GL account.
                 * @example Derogatory accumulated provision
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the accumulated provision GL account.
                 * @example /objects/general-ledger/account/102
                 */
                readonly href?: string;
            };
            /**
             * @description The General Ledger account where the reversal price of the derogatory method is recorded as a credit for depreciation transactions.
             *
             *     The account must be active and non-statistical.
             */
            reversalDerogatoryGLAccount?: {
                /**
                 * @description System-assigned key for the reversal GL account.
                 * @example 108
                 */
                key?: string;
                /**
                 * @description ID for the reversal GL account.
                 * @example 1556
                 */
                id?: string;
                /**
                 * @description Name for the reversal GL account.
                 * @example Derogatory reversal
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the reversal GL account.
                 * @example /objects/general-ledger/account/108
                 */
                readonly href?: string;
            };
            /** @description Depreciation rules used to calculate depreciation for the asset classification. */
            depreciationRules?: components["schemas"]["objects.fixed-assets.classification-depreciation-rule"][];
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "fixed-assets-asset-classificationRequiredProperties": Record<string, never>;
        /** @description Depreciation methods determine how an asset's depreciation expense is computed into periods over its useful life. */
        "objects.fixed-assets.depreciation-method": {
            /**
             * @description System-assigned unique key for the depreciation method.
             * @example -1
             */
            readonly key?: string;
            /**
             * @description Unique ID for the depreciation method.
             * @example SL
             */
            id?: string;
            /**
             * @description URL endpoint for the depreciation method.
             * @example /objects/fixed-assets/depreciation-method/-1
             */
            readonly href?: string;
            /**
             * @description Name for the depreciation method.
             * @example Straight line
             */
            name?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description List of asset depreciation rules. */
        "objects.fixed-assets.asset-depreciation-rule": {
            /**
             * @description System-assigned unique key for the asset depreciation rule.
             * @example 9
             */
            key?: string;
            /**
             * @description ID for the asset depreciation rule.
             * @example 9
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the asset depreciation rule.
             * @example /objects/fixed-assets/asset-depreciation-rule/9
             */
            readonly href?: string;
            /**
             * @description An estimate of the expected service life of an asset. Specify a useful life in months or years as determined by the posting rule configuration. The value must not exceed 500 if `usefulLifeUnits` is set to `months`, and must not exceed 100 if `usefulLifeUnits` is set to `years`.
             * @example 60
             */
            usefulLife?: number;
            /**
             * @description Tracks the loss in value of an asset over the period of its useful life using a specified [depreciation rule](fixed-assets.setup-posting-rule).
             *     The depreciation schedule also tracks the gain and loss when an asset is disposed.
             */
            readonly depreciationSchedule?: {
                /**
                 * @description System-assigned unique key for the depreciation schedule.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the depreciation schedule.
                 * @example 1
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the depreciation schedule.
                 * @example objects/fixed-assets/depreciation-schedule/1
                 */
                readonly href?: string;
            };
            /** @description Posting rules determines which journals the Fixed Assets Management application can post to and how. */
            postingRule?: {
                /**
                 * @description System-assigned unique key for the posting rule.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Unique ID for the posting rule.
                 * @example ID2
                 */
                id?: string;
                /**
                 * @description Name for the posting rule.
                 * @example NAME 2
                 */
                readonly name?: string;
                /**
                 * @description Denotes if useful life is specified in months or years.
                 * @example months
                 * @enum {string}
                 */
                readonly usefulLifeUnits?: "months" | "years";
                /**
                 * @description Determines when and how depreciation is calculated for the periods an asset is placed in service or disposed of.
                 * @example fullMonth
                 * @enum {string}
                 */
                readonly convention?: "fullMonth" | "halfYear" | "fullYear";
                /**
                 * @description Indicates whether this classification depreciation rule applies for tax purposes.
                 * @default false
                 * @example true
                 */
                readonly isTax?: boolean;
                /**
                 * @description Indicates whether salvage value should be used in calculating depreciation.
                 * @default true
                 * @example false
                 */
                readonly useSalvageValue?: boolean;
                /**
                 * @description URL endpoint for the posting rule.
                 * @example /objects/fixed-assets/setup-posting-rule/2
                 */
                readonly href?: string;
            };
            /** @description General Ledger (GL) journal associated with this depreciation schedule. */
            readonly journal?: {
                /**
                 * @description System-assigned unique key for the GL journal.
                 * @example 46
                 */
                key?: string;
                /**
                 * @description ID for the GL journal.
                 * @example TAX
                 */
                id?: string;
                /**
                 * @description Name for the GL journal.
                 * @example TAX Accrual Book
                 */
                readonly name?: string;
                /**
                 * @description The book to which this journal belongs.
                 * @example TAXADJACCRUAL
                 */
                readonly bookId?: string;
                /**
                 * @description URL endpoint for the GL journal.
                 * @example /objects/general-ledger/journal/46
                 */
                readonly href?: string;
            };
            /** @description Asset corresponding to this depreciation rule. */
            readonly asset?: {
                /**
                 * @description System-assigned unique key for the asset.
                 * @example 2
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the asset.
                 * @example CE_ASSET-1
                 */
                readonly id?: string;
                /**
                 * @description Name for the asset.
                 * @example Laptop
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the asset.
                 * @example /objects/fixed-assets/asset/2
                 */
                readonly href?: string;
            };
            /** @description Depreciation method for the asset depreciation rule. */
            depreciationMethod?: {
                /**
                 * @description System-assigned unique key for the depreciation method.
                 * @example -1
                 */
                key?: string;
                /**
                 * @description Unique ID for the depreciation method.
                 * @example SL
                 */
                id?: string;
                /**
                 * @description Name for the depreciation method.
                 * @example Straight line
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the depreciation method.
                 * @example /objects/fixed-assets/depreciation-method/-1
                 */
                readonly href?: string;
            };
            /**
             * @description Rate used to calculate depreciation amount. For example, a value of 30.00 applies a rate of 30.00%. The value must be between 1.00 and 100.00.
             * @example 30.00
             */
            depreciationRate?: string;
            /**
             * Format: decimal-precision-2
             * @description Use to calculate the additional yearly depreciation amount for the derogatory method.
             * @example 1.25
             */
            coefficient?: string;
            /**
             * Format: decimal-precision-2
             * @description User provided historical accumulated depreciation amount for the asset depreciation rule.
             * @example 1000.00
             */
            historicalAccumulatedDepreciationAmount?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "fixed-assets-asset-depreciation-ruleRequiredProperties": Record<string, never>;
        /** @description List of classification depreciation rules. */
        "objects.fixed-assets.classification-depreciation-rule": {
            /**
             * @description System-assigned unique key for the classification depreciation rule.
             * @example 6
             */
            key?: string;
            /**
             * @description Unique ID for the classification depreciation rule.
             * @example DR006
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the classification depreciation rule.
             * @example objects/fixed-assets/classification-depreciation-rule/6
             */
            readonly href?: string;
            /**
             * @description Specify a value for the useful life, which is either in months or years as established by the `usefulLifeUnits` field in the posting rule. The value must not exceed 500 if `usefulLifeUnits` is set to `months`, and must not exceed 100 if `usefulLifeUnits` is set to `years`.
             * @example 3
             */
            usefulLife?: number;
            /** @description Posting rule determines which journals the Fixed Assets Management application can post to and how. */
            postingRule?: {
                /**
                 * @description System-assigned key for the posting rule.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Unique ID for the posting rule.
                 * @example ID2
                 */
                id?: string;
                /**
                 * @description Name for the posting rule.
                 * @example NAME 2
                 */
                readonly name?: string;
                /**
                 * @description Indicates whether useful life is specified in months or years.
                 * @example months
                 * @enum {string}
                 */
                readonly usefulLifeUnits?: "months" | "years";
                /**
                 * @description Determines when and how depreciation is calculated for the periods an asset is placed in service or disposed of.
                 * @example fullMonth
                 * @enum {string}
                 */
                readonly convention?: "fullMonth" | "halfYear" | "fullYear";
                /**
                 * @description Indicates whether this classification depreciation rule applies for tax purposes.
                 * @default false
                 * @example true
                 */
                readonly isTax?: boolean;
                /**
                 * @description Indicates whether salvage value should be used in calculating depreciation.
                 * @default true
                 * @example false
                 */
                readonly useSalvageValue?: boolean;
                /**
                 * @description URL endpoint for the posting rule.
                 * @example /objects/fixed-assets/setup-posting-rule/2
                 */
                readonly href?: string;
            };
            /** @description General Ledger (GL) journal associated with this depreciation schedule. */
            readonly journal?: {
                /**
                 * @description System-assigned unique key for the GL journal.
                 * @example 46
                 */
                key?: string;
                /**
                 * @description ID for the GL journal.
                 * @example TAX
                 */
                id?: string;
                /**
                 * @description Name for the GL journal.
                 * @example TAX Accrual Book
                 */
                readonly name?: string;
                /**
                 * @description The book to which this journal belongs.
                 * @example TAXADJACCRUAL
                 */
                readonly bookId?: string;
                /**
                 * @description URL endpoint for the GL journal.
                 * @example /objects/general-ledger/journal/46
                 */
                readonly href?: string;
            };
            /** @description Asset classification associated with this depreciation rule. */
            classification?: {
                /**
                 * @description Classification key
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Unique ID for the classification.
                 * @example CE-1
                 */
                id?: string;
                /**
                 * @description Name for the classification.
                 * @example Computer Equipment
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the classification.
                 * @example /objects/fixed-assets/asset-classification/3
                 */
                readonly href?: string;
            };
            /** @description Depreciation method. */
            depreciationMethod?: {
                /**
                 * @description System-assigned key for the depreciation method.
                 * @example -1
                 */
                key?: string;
                /**
                 * @description Unique ID for the depreciation method.
                 * @example SL01
                 */
                id?: string;
                /**
                 * @description Depreciation method name
                 * @example Straight line
                 */
                name?: string;
                /**
                 * @description URL endpoint for the depreciation method.
                 * @example /objects/fixed-assets/depreciation-method/-1
                 */
                readonly href?: string;
            };
            /**
             * @description Rate used to calculate depreciation amount. For example, a value of 30.00 applies a rate of 30.00%. The value must be between 1.00 and 100.00.
             * @example 30.00
             */
            depreciationRate?: string;
            /**
             * Format: decimal-precision-2
             * @description Use to calculate the additional yearly depreciation amount for the derogatory method.
             * @example 1.25
             */
            coefficient?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "fixed-assets-classification-depreciation-ruleRequiredProperties": Record<string, never>;
        /** @description A depreciation schedule tracks the loss in value of an asset over the period of its useful life. */
        "objects.fixed-assets.depreciation-schedule": {
            /**
             * @description System-assigned unique key for the depreciation schedule.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description ID for the depreciation schedule.
             * @example 1
             */
            id?: string;
            /**
             * @description URL endpoint for the depreciation schedule.
             * @example /objects/fixed-assets/depreciation-schedule/1
             */
            readonly href?: string;
            /**
             * @description State for the depreciation schedule.
             * @example inProgress
             * @enum {string}
             */
            state?: "inProgress" | "completed" | "canceled";
            /**
             * @description Accumulated depreciation amount of historically posted periods only for a depreciation schedule for an asset.
             * @example 300
             */
            readonly historicalAccumulatedDepreciationAmount?: string;
            /**
             * Format: date
             * @description Date of the last historically posted period for a depreciation schedule for an asset.
             * @example 2015-01-01
             */
            readonly historicalLastPostedDate?: string;
            /**
             * @description Number of historically posted periods for a depreciation schedule for an asset.
             * @example 2
             */
            readonly historicalPostedPeriods?: number;
            /**
             * @description Depreciable cost of an asset associated with this depreciation schedule.
             * @example 2700
             */
            readonly depreciableCost?: string;
            /**
             * @deprecated
             * @description Accumulated amount being depreciated by this depreciation schedule.
             */
            readonly accumulatedDepreciationAmount?: string;
            /**
             * @description Accumulated amount for both posted and historical entries being depreciated by this depreciation schedule.
             * @example 1275
             */
            readonly totalAccumulatedDepreciationAmount?: string;
            /**
             * @description Remaining amount of depreciation for this depreciation schedule.
             * @example 1425
             */
            readonly remainingDepreciationAmount?: string;
            /** @description The asset being depreciated by this depreciation schedule. */
            asset?: {
                /**
                 * @description System-assigned unique key for the asset.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Unique ID for the asset.
                 * @example CE_ASSET-1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the asset.
                 * @example /objects/fixed-assets/asset/2
                 */
                readonly href?: string;
                /**
                 * @description Name for the asset.
                 * @example Laptop
                 */
                readonly name?: string;
                /**
                 * @description Asset cost.
                 * @example 3000
                 */
                readonly assetCost?: string;
                /**
                 * @description Asset salvage value.
                 * @example 300
                 */
                readonly salvageValue?: string;
            };
            /** @description Depreciation rule corresponding to this depreciation schedule. */
            assetDepreciationRule?: {
                /**
                 * @description System-assigned unique key for the depreciation rule.
                 * @example 9
                 */
                key?: string;
                /**
                 * @description ID for the depreciation rule.
                 * @example 9
                 */
                id?: string;
                /**
                 * @description URL endpoint for the depreciation rule.
                 * @example objects/fixed-assets/asset-depreciation-rule/9
                 */
                readonly href?: string;
                /**
                 * @description Indicates whether the salvage value should be used to calculate the depreciation expense of an asset.
                 * @default false
                 * @example false
                 */
                useSalvageValue?: boolean;
            };
            /** @description Depreciation schedule entries for this schedule. */
            depreciationScheduleEntries?: components["schemas"]["objects.fixed-assets.depreciation-schedule-entry"][];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description List of depreciation schedule entries. */
        "objects.fixed-assets.depreciation-schedule-entry": {
            /**
             * @description System-assigned unique key for the depreciation schedule entry.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description ID for the depreciation schedule entry. Same as key.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the depreciation schedule entry.
             * @example /objects/fixed-assets/depreciation-schedule-entry/1
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Date on which the depreciation schedule entry is originally scheduled to post to the GL.
             * @example 2020-01-31
             */
            scheduledPostingDate?: string;
            /**
             * Format: date
             * @description Date on which the depreciation schedule entry is actually posted to the GL. Users have an option to override GL posting date when this would differ from scheduled posting date.
             * @example 2020-02-02
             */
            actualPostingDate?: string;
            /**
             * @description Period to which the depreciation schedule entry refers.
             * @example 1
             */
            period?: number;
            /** @description Points to the original depreciation schedule entry that has been posted and reversed. */
            parent?: {
                /**
                 * @description System-assigned key for the parent depreciation schedule entry.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the parent depreciation schedule entry.
                 * @example CE_ASSET-0
                 */
                id?: string;
                /**
                 * @description URL endpoint for the parent depreciation schedule entry.
                 * @example /objects/fixed-assets/depreciation-schedule-entry/1
                 */
                readonly href?: string;
            };
            /**
             * @description State of the depreciation schedule entry.
             * @example notPosted
             * @enum {string}
             */
            state?: "notPosted" | "posted" | "canceled" | "historicallyPosted" | "reversedHistory" | "reversed";
            /**
             * @description Amount being depreciated in this period by this depreciation schedule entry.
             * @example 75
             */
            depreciationAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount of depreciation for the current period calculated by applying the declining method on derogatory depreciation.
             * @example 77.13
             */
            decliningAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Difference if declining amount exceeds daily amount for this period on derogatory depreciation.
             * @example 12.44
             */
            derogatoryProvisionAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Difference if daily amount exceeds declining amount for this period on derogatory depreciation.
             * @example 78.41
             */
            derogatoryReversalAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount calculated for this period based on provision and reversal on derogatory depreciation.
             * @example 79.87
             */
            derogatoryBalance?: string;
            /**
             * Format: decimal-precision-2
             * @description Sum of depreciation amounts of all prior depreciation schedule entries from the asset purchase date up to and including the current period.
             * @example 13.01
             */
            cumulativeDepreciationAmount?: string;
            /**
             * @description Journal entries label for the schedule entry.
             * @example Journal entries
             */
            readonly journalEntriesLabel?: string;
            /**
             * @description Journal entries filter for a schedule entry.
             * @example [
             *       {
             *         "$eq": {
             *           "key": "472"
             *         }
             *       },
             *       {
             *         "$eq": {
             *           "key": "473"
             *         }
             *       }
             *     ]
             */
            readonly journalEntriesFilter?: unknown[];
            /**
             * @description Indicates whether depreciation schedule entries in reversed history state are included in the response.
             * @default false
             * @example false
             */
            readonly includeReverseHistoryEntries?: string;
            /** @description GL journal entry for this depreciation schedule entry. */
            journalEntry?: {
                /**
                 * @description System-assigned unique key for the GL journal entry.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the GL journal entry.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description System-assigned transaction number for the disposed journal entry.
                 * @example 13
                 */
                readonly txnNumber?: number;
                /**
                 * @description URL endpoint for the GL journal entry.
                 * @example /objects/general-ledger/journal-entry/1
                 */
                readonly href?: string;
            };
            /** @description Depreciation schedule corresponding to this entry. */
            depreciationSchedule?: {
                /**
                 * @description System-assigned unique key for the depreciation schedule.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the depreciation schedule.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the depreciation schedule.
                 * @example /objects/fixed-assets/depreciation-schedule/1
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Set up configuration details for the Fixed Assets Management application. */
        "objects.fixed-assets.setup": {
            /**
             * @description System-assigned unique key for the setup.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description System-assigned unique ID for the setup.
             * @example 1
             */
            id?: string;
            /**
             * @description URL endpoint for the setup.
             * @example objects/fixed-assets/setup/1
             */
            readonly href?: string;
            /**
             * Format: date
             * @description The date when historical assets begin to depreciate in Sage Intacct.
             *
             *     Historical assets are assets that were partially depreciated in a different accounting system, outside of Sage Intacct.
             *
             *     The go-live must come after all periods that were historically posted outside of Sage Intacct, and on or before all periods that have not yet posted.
             *     You can update the go-live date as long as it falls within the valid range. To avoid conflicts, set up your go-live date before adding assets to Sage Intacct.
             * @example 2020-01-01
             */
            goLiveDate?: string;
            /**
             * @description Indicates whether automatic posting of depreciation schedule entries is enabled.
             * @default false
             * @example true
             */
            enableAutoPosting?: boolean;
            /**
             * @description Indicates whether Accounts Payable integration is enabled.
             * @default false
             * @example true
             */
            enableAccountsPayable?: boolean;
            /**
             * @description Indicates whether Purchasing Transactions integration is enabled.
             * @default false
             * @example false
             */
            enablePurchasingTxns?: boolean;
            /**
             * @description Indicates whether Construction in Progress (CIP) functionality is enabled to support CIP asset types.
             * @default false
             * @example false
             */
            enableCIP?: boolean;
            /**
             * @description Indicates whether depreciation summary is enabled.
             * @default false
             * @example false
             */
            enableDepreciationSummary?: boolean;
            /**
             * @description Represents the options for calculating asset's historical accumulated depreciation amount:
             *     - `system`: the system will calculate the amount automatically.
             *     - `manual`: the user will provide the amount.
             * @default system
             * @example system
             * @enum {string}
             */
            historicalAccumulatedDepreciationType?: "system" | "manual";
            /**
             * @description Specifies how journal entries are corrected for asset transactions:
             *     - `revert` - Delete the original entry.
             *     - `reverse` - Create a reversal entry.
             * @default revert
             * @example reverse
             * @enum {string}
             */
            journalEntryCorrectionOption?: "revert" | "reverse";
            /** @description Determines the automatic numbering and formatting of new asset IDs. */
            assetSequence?: {
                /**
                 * @description Key for the asset sequence.
                 * @example 107
                 */
                key?: string;
                /**
                 * @description ID for the asset sequence.
                 * @example BOA_ACH_BatchNo
                 */
                id?: string;
                /**
                 * @description URL endpoint for the asset sequence.
                 * @example /objects/company-config/document-sequence/107
                 */
                readonly href?: string;
                /**
                 * @description Print title for the asset sequence.
                 * @example BOA_ACH_BatchNo
                 */
                readonly printTitle?: string;
            };
            /**
             * @description The General Ledger account where the gain or loss on disposal amount is recorded as a debit or credit.
             *
             *     The account must be active and non-statistical.
             */
            gainLossGLAccount?: {
                /**
                 * @description System-assigned key for the gain loss GL account.
                 * @example 94
                 */
                key?: string;
                /**
                 * @description ID for the gain loss GL account.
                 * @example 1501
                 */
                id?: string;
                /**
                 * @description Name for the gain loss GL account.
                 * @example Gain account
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the gain loss GL account.
                 * @example /objects/general-ledger/account/94
                 */
                readonly href?: string;
            };
            /**
             * @description The journal where transactions related to Fixed Assets Management are recorded. Use an active and non-statistical journal.
             *     The journal configured in setup is used for non-depreciable assets.
             */
            journal?: {
                /**
                 * @description Unique key for the journal.
                 * @example 46
                 */
                key?: string;
                /**
                 * @description ID for the journal.
                 * @example TAX
                 */
                id?: string;
                /**
                 * @description URL endpoint for the journal.
                 * @example /objects/general-ledger/journal/46
                 */
                readonly href?: string;
                /**
                 * @description Name for the journal.
                 * @example TAX Accrual
                 */
                readonly name?: string;
                /**
                 * @description ID for the book this journal belongs to.
                 * @example TAXADJACCRUAL
                 */
                readonly bookId?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description Setup posting rules identify journal, useful life units, convention, and so forth for fixed asset transactions.
             *
             *     Before updating a setup posting rule, ensure that there are no depreciation rules using that posting rule. Update the depreciation rule on the classification or asset to temporarily remove the posting rule first.
             *     For more information, see [classification depreciation rule](fixed-assets.classification-depreciation-rule) or [asset depreciation rule](fixed-assets.asset-depreciation-rule).
             */
            setupPostingRules?: components["schemas"]["objects.fixed-assets.setup-posting-rule"][];
        };
        /**
         * @description Use posting rules to identify the journal, useful life term, convention, and so forth, for fixed asset transactions.
         *
         *     When creating multiple journal posting rules, each rule must use a different journal, and each journal must belong to a different book.
         */
        "objects.fixed-assets.setup-posting-rule": {
            /**
             * @description System-assigned unique key for the setup posting rule.
             * @example 1
             */
            key?: string;
            /**
             * @description Unique ID for the setup posting rule.
             * @example ID-1
             */
            id?: string;
            /**
             * @description URL endpoint for the setup posting rule.
             * @example objects/fixed-assets/setup-posting-rule/1
             */
            readonly href?: string;
            /**
             * @description Name for the setup posting rule.
             * @example Accrual
             */
            name?: string;
            /**
             * @description Denotes if the useful life is specified in months or years. The units of useful life must match the convention.
             * @default months
             * @example months
             * @enum {string}
             */
            usefulLifeUnits?: "months" | "years";
            /**
             * @description The convention determines how depreciation is calculated in the first and last periods of an asset's life.
             * @default fullMonth
             * @example fullMonth
             * @enum {string}
             */
            convention?: "fullMonth" | "halfYear" | "fullYear";
            /**
             * @description Indicates whether this posting rule applies for tax purposes.
             * @default false
             * @example true
             */
            isTax?: boolean;
            /**
             * @description Indicates whether the salvage value should be used to calculate the depreciation expense of an asset.
             * @default true
             * @example false
             */
            useSalvageValue?: boolean;
            audit?: components["schemas"]["audit.s1"];
            /** @description Provides configuration details for the Fixed Assets Management application. */
            setup?: {
                /**
                 * @description Unique key for the setup.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the setup.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the setup.
                 * @example /object/fixed-assets/setup/1
                 */
                readonly href?: string;
            };
            /**
             * @description The journal where transactions related to Fixed Assets Management are recorded. Use an active and non-statistical journal.
             *
             *     When creating multiple journal posting rules, each rule must use a different journal, and each journal must belong to a different book.
             */
            journal?: {
                /**
                 * @description Unique key for the journal.
                 * @example 46
                 */
                key?: string;
                /**
                 * @description ID for the journal.
                 * @example TAX
                 */
                id?: string;
                /**
                 * @description URL endpoint for the journal.
                 * @example /objects/general-ledger/journal/46
                 */
                readonly href?: string;
                /**
                 * @description Name for the journal.
                 * @example TAX Accrual
                 */
                readonly name?: string;
                /**
                 * @description ID for the book this journal belongs to.
                 * @example TAXADJACCRUAL
                 */
                readonly bookId?: string;
            };
        };
        "fixed-assets-setup-posting-ruleRequiredProperties": Record<string, never>;
        /** @description Asset transfer history details. */
        "objects.fixed-assets.transfer-history": {
            /**
             * @description System-assigned unique key for the transfer history.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description ID for the transfer history. Same as key.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the transfer history.
             * @example /objects/fixed-assets/transfer-history/1
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Date on which asset will be transferred.
             * @example 2020-01-31
             */
            transferDate?: string;
            /**
             * @deprecated
             * @description Transfer journal entry corresponding to this asset transfer. This property is deprecated.
             */
            transferJournalEntry?: {
                /**
                 * @deprecated
                 * @description System-assigned unique key for the disposed journal entry.
                 */
                key?: string;
                /**
                 * @deprecated
                 * @description ID for the disposed journal entry.
                 */
                id?: string;
                /**
                 * @deprecated
                 * @description URL endpoint for the journal entry.
                 */
                readonly href?: string;
            };
            /** @description Journal entries created during asset transfer. */
            journalEntries?: components["schemas"]["objects.fixed-assets.transfer-journal-entry-map"][];
            /** @description The asset being transferred by this operation. */
            asset?: {
                /**
                 * @description System-assigned unique key for the asset.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Unique ID for the asset.
                 * @example CE_ASSET-1
                 */
                id?: string;
                /**
                 * @description Represents stages in the asset life cycle:
                 *
                 *     - `readyForReview` - new asset exists in Sage Intacct but it is not yet depreciating.
                 *     - `inService` - the asset is currently in use by a business and its value can depreciate on a schedule.
                 *     - `disposed` - the asset was removed from service, typically due to a sale.
                 *
                 *     Assets are moved from `readyForReview` to `inService` and ultimately to `disposed` state.
                 * @default readyForReview
                 * @example inService
                 * @enum {string}
                 */
                state?: "inService" | "readyForReview" | "disposed";
                /**
                 * @description URL endpoint for the asset.
                 * @example /objects/fixed-assets/asset/2
                 */
                readonly href?: string;
                /**
                 * @description Name for the asset.
                 * @example Laptop
                 */
                readonly name?: string;
            };
            /** @description Allocation entry associated with the asset that is being transferred. */
            allocation?: {
                /**
                 * @description System-assigned unique key for the allocation entry.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the allocation entry.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the allocation entry.
                 * @example /objects/general-ledger/txn-allocation-template/1
                 */
                readonly href?: string;
            };
            /** @description Dimensions that are assigned to the asset are captured while transferring an asset. */
            dimensions?: {
                /** @description The class associated with this asset. */
                class?: {
                    /**
                     * @description System-assigned key for the class.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the class.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Name for the class.
                     * @example 1
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the class.
                     * @example /objects/company-config/class/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The contract associated with the asset. */
                contract?: {
                    /**
                     * @description System-assigned key for the contract.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the contract.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Name for the contract.
                     * @example 1
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the contract.
                     * @example /objects/contracts/contract/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The cost type for the asset. */
                costType?: {
                    /**
                     * @description System-assigned key for the cost type.
                     * @example 7
                     */
                    key?: string | null;
                    /**
                     * @description ID for the cost type.
                     * @example LABOR
                     */
                    id?: string | null;
                    /**
                     * @description Name for the cost type.
                     * @example LABOR
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the cost type.
                     * @example /objects/construction/standard-cost-type/7
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The customer associated with the asset. */
                customer?: {
                    /**
                     * @description System-assigned key for the customer.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the customer.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Name for the customer.
                     * @example Power Aerospace Materials
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the customer.
                     * @example /objects/accounts-receivable/customer/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The department associated with the asset. */
                department?: {
                    /**
                     * @description System-assigned key for the department.
                     * @example 3
                     */
                    key?: string | null;
                    /**
                     * @description ID for the department.
                     * @example 3
                     */
                    id?: string | null;
                    /**
                     * @description Name for the department.
                     * @example Engineering
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/3
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The employee associated with the asset. */
                employee?: {
                    /**
                     * @description System-assigned key for the employee.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the employee.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Name for the employee.
                     * @example Amy Nguyen
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the employee.
                     * @example /objects/company-config/employee/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The item associated with the asset. */
                item?: {
                    /**
                     * @description System-assigned key for the item.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the item.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Name for the item.
                     * @example PC Computer
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the item.
                     * @example /objects/inventory-control/item/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The location associated with the asset. */
                location?: {
                    /**
                     * @description System-assigned key for the location.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the location.
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
                    readonly href?: string | null;
                };
                /** @description The project associated with the asset. */
                project?: {
                    /**
                     * @description System-assigned key for the project.
                     * @example 8
                     */
                    key?: string | null;
                    /**
                     * @description ID for the project.
                     * @example 8
                     */
                    id?: string | null;
                    /**
                     * @description Name for the project.
                     * @example Client Services - Power Aerospace Materials
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the project.
                     * @example /objects/projects/project/8
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The task associated with the asset. */
                task?: {
                    /**
                     * @description System-assigned key for the task.
                     * @example 8
                     */
                    key?: string | null;
                    /**
                     * @description ID for the task.
                     * @example 01-041
                     */
                    id?: string | null;
                    /**
                     * @description Name for the task.
                     * @example Project coordination
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the task.
                     * @example /objects/projects/task/8
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The vendor associated with the asset. */
                vendor?: {
                    /**
                     * @description System-assigned key for the vendor.
                     * @example 43
                     */
                    key?: string | null;
                    /**
                     * @description ID for the vendor.
                     * @example 1099 Int
                     */
                    id?: string | null;
                    /**
                     * @description Name for the vendor.
                     * @example 1099 Int
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the vendor.
                     * @example /objects/accounts-payable/vendor/43
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The warehouse associated with the asset. */
                warehouse?: {
                    /**
                     * @description System-assigned key for the warehouse.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the warehouse.
                     * @example WH01
                     */
                    id?: string | null;
                    /**
                     * @description Name for the warehouse.
                     * @example WH01 Lakefront
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the warehouse.
                     * @example /objects/inventory-control/warehouse/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The affiliate-entity associated with the asset. */
                affiliateEntity?: {
                    /**
                     * @description System-assigned key for the affiliate-entity.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the affiliate-entity.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Name for the affiliate-entity.
                     * @example United States of America
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the affiliate-entity.
                     * @example /objects/company-config/affiliate-entity/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The loan account associated with the asset. */
                loanAccount?: {
                    /**
                     * @description System-assigned key for the loan account.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the loan account.
                     * @example 5000
                     */
                    id?: string | null;
                    /**
                     * @description Name for the loan account.
                     * @example Cash Account
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the loan account.
                     * @example /objects/loan-management/loan-account/1
                     */
                    readonly href?: string | null;
                } | null;
                /** @description The work order associated with the asset. */
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
                    readonly href?: string | null;
                } | null;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Journal entry created during asset transfer. */
        "objects.fixed-assets.transfer-journal-entry-map": {
            /**
             * @description System-assigned key for the transfer journal entry map.
             * @example 9
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the transfer journal entry map. This value is the same as the key for this object.
             * @example 9
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the transfer journal entry map.
             * @example /objects/fixed-assets/transfer-journal-entry-map/9
             */
            readonly href?: string;
            /** @description Asset transfer history details. */
            transferHistory?: {
                /**
                 * @description System-assigned key for the transfer history.
                 * @example 6725
                 */
                key?: string;
                /**
                 * @description Unique identifier for the transfer history.
                 * @example 6725
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transfer history.
                 * @example /objects/fixed-assets/transfer-history/1
                 */
                readonly href?: string;
            };
            /** @description Depreciation schedule associated with the transferred asset. */
            depreciationSchedule?: {
                /**
                 * @description System assigned unique key for the depreciation schedule.
                 * @example 6725
                 */
                key?: string;
                /**
                 * @description Unique identifier for the depreciation schedule.
                 * @example 6725
                 */
                id?: string;
                /**
                 * @description URL endpoint for the depreciation schedule.
                 * @example /objects/fixed-assets/depreciation-schedule/1
                 */
                readonly href?: string;
            };
            /** @description Journal entry in the transfer journal. */
            journalEntry?: {
                /**
                 * @description System-assigned unique key for the journal entry.
                 * @example 6725
                 */
                key?: string;
                /**
                 * @description Unique identifier for the journal entry.
                 * @example 6725
                 */
                id?: string;
                /**
                 * @description Transaction number for the journal entry.
                 * @example 13
                 */
                readonly txnNumber?: number;
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/general-ledger/journal-entry/6725
                 */
                readonly href?: string;
            };
            /** @description The journal where the asset transfer was recorded. */
            journal?: {
                /**
                 * @description System-generated key for the journal.
                 * @example 46
                 */
                key?: string;
                /**
                 * @description Unique identifier for the journal.
                 * @example TAX
                 */
                id?: string;
                /**
                 * @description URL endpoint for the journal.
                 * @example /objects/general-ledger/journal/46
                 */
                readonly href?: string;
                /**
                 * @description Name for the journal.
                 * @example TAX Accrual
                 */
                readonly name?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Asset disposal details. */
        "objects.fixed-assets.disposal": {
            /**
             * @description System-assigned unique key for the asset disposal.
             * @example 9
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the asset disposal. This value is the same as key for this object.
             * @example 9
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the asset disposal.
             * @example /objects/fixed-assets/disposal/9
             */
            readonly href?: string;
            /**
             * @description Indicates whether the entire asset or a portion of an asset is disposed.
             * @default false
             * @example false
             */
            isPartial?: boolean;
            /**
             * Format: decimal-precision-2
             * @description The amount of full or partial disposal of an asset.
             * @example 500.00
             */
            disposalAmount?: string;
            /**
             * Format: date
             * @description The date when the asset was fully or partially removed from business operations.
             * @example 2025-08-08
             */
            disposalDate?: string;
            /**
             * @description The reason for disposal of the asset.
             *
             *     - `sale` - you receive a payment in exchange for the asset.
             *     - `casualtyLoss` - the asset is destroyed or damaged due to an unforeseen event or accident. No payment is received.
             *     - `theft` - the asset is stolen. No payment is received.
             *     - `other` - the asset is removed from service for any other reason. The asset might still be in your possession, but it reached the end of its useful life or has no resale value. No payment is received.
             *
             *     If the reason for disposal is `sale`, then the `salePrice` and `disposalGLAccount` properties must be specified.
             * @default null
             * @example sale
             * @enum {string|null}
             */
            disposalType?: "sale" | "casualtyLoss" | "theft" | "other" | null;
            /**
             * Format: decimal-precision-2
             * @description The amount an asset is partially or fully sold for. Specify for assets with `disposalType` set to `sale`.
             * @example 1000.00
             */
            salePrice?: string;
            /**
             * @description Notes about asset disposal.
             * @example Sold to Lincoln Avenue Veterinary Clinic
             */
            comments?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount of gain or loss when the asset is fully or partially disposed (for non-depreciable assets).
             * @example 300.13
             */
            gainLossAmount?: string;
            /** @description The asset the disposal is associated with. */
            asset?: {
                /**
                 * @description System-assigned key for the asset.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Unique identifier for the asset.
                 * @example 2
                 */
                id?: string;
                /**
                 * @description URL endpoint for the asset.
                 * @example /objects/fixed-assets/asset/2
                 */
                readonly href?: string;
            };
            /** @description Journal entry for the disposal of a non-depreciable asset. */
            readonly disposalJournalEntry?: {
                /**
                 * @description System-assigned key for the journal entry.
                 * @example 6725
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the journal entry.
                 * @example 6725
                 */
                readonly id?: string;
                /**
                 * @description System-assigned transaction number for the journal entry.
                 * @example 40
                 */
                readonly txnNumber?: number;
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/general-ledger/journal-entry/6725
                 */
                readonly href?: string;
            };
            /** @description The journal where transactions related to non-depreciable assets are recorded. Use an active and non-statistical journal. */
            journal?: {
                /**
                 * @description System-assigned key for the journal.
                 * @example 46
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the journal.
                 * @example 46
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the journal.
                 * @example /objects/general-ledger/journal/46
                 */
                readonly href?: string;
            };
            /** @description Depreciation schedules for the asset disposal. */
            readonly disposalDepreciationSchedules?: components["schemas"]["objects.fixed-assets.disposal-depreciation-schedule-map"][];
            /**
             * @description The state of the disposal.
             *
             *     Historical disposal indicates that this disposal originated from the parent asset when the asset was split.
             *     Reversed disposal means this disposal has been reversed.
             * @example reversed
             * @enum {string}
             */
            state?: "historical" | "reversed";
            /**
             * @description Journal entries label for the disposal.
             * @example Journal entries
             */
            readonly journalEntryLabel?: string;
            /**
             * @description Journal entries filter for a disposal.
             * @example [
             *       {
             *         "$eq": {
             *           "key": "472"
             *         }
             *       },
             *       {
             *         "$eq": {
             *           "key": "473"
             *         }
             *       }
             *     ]
             */
            readonly journalEntryFilter?: unknown[];
            /**
             * Format: date
             * @description The date when the asset's disposal is being reversed.
             * @example 2026-05-08
             */
            reversalDate?: string;
            /**
             * @description Unique identifier for the disposal. For a reversed disposal, the value has a system-assigned postfix Reversed.
             * @example 1 - Reversed
             */
            readonly reversalId?: string;
            /** @description Journal entry for the reversal of disposal of a non-depreciable asset. */
            readonly reversalDisposalJournalEntry?: {
                /**
                 * @description System-assigned key for the journal entry.
                 * @example 6725
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the journal entry.
                 * @example 6725
                 */
                readonly id?: string;
                /**
                 * @description System-assigned transaction number for the journal entry.
                 * @example 41
                 */
                readonly txnNumber?: number;
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/general-ledger/journal-entry/6725
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description Depreciation schedules modified during a full or partial asset disposal. */
        "objects.fixed-assets.disposal-depreciation-schedule-map": {
            /**
             * @description System-assigned key for the disposal depreciation schedule entry map.
             * @example 9
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the disposal depreciation schedule entry map. This value is the same as the key for this object.
             * @example 9
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the disposal depreciation schedule map.
             * @example /objects/fixed-assets/disposal-depreciation-schedule-map/9
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description Accumulated amount being depreciated by the depreciation schedule for a partial disposal.
             * @example 1425.50
             */
            readonly partialAccumulatedDepreciationAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Remaining amount of depreciation for the depreciation schedule.
             * @example 1425.25
             */
            readonly partialRemainingDepreciationAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount of gain or loss when the asset is fully or partially disposed.
             * @example 300.30
             */
            gainLossAmount?: string;
            /** @description Disposal journal entry for the depreciation schedule. */
            disposalJournalEntry?: {
                /**
                 * @description System-assigned key for the journal entry.
                 * @example 6725
                 */
                key?: string;
                /**
                 * @description Unique identifier for the journal entry.
                 * @example 6725
                 */
                id?: string;
                /**
                 * @description System-assigned transaction number for the journal entry.
                 * @example 40
                 */
                readonly txnNumber?: number;
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/general-ledger/journal-entry/6725
                 */
                readonly href?: string;
            };
            /** @description Asset disposal details. */
            disposal?: {
                /**
                 * @description System-assigned key for the disposal.
                 * @example 6725
                 */
                key?: string;
                /**
                 * @description Unique identifier for the disposal.
                 * @example 6725
                 */
                id?: string;
                /**
                 * @description Indicates whether the entire asset or a portion of an asset is disposed.
                 * @default false
                 * @example false
                 */
                isPartial?: boolean;
                /**
                 * Format: decimal-precision-2
                 * @description The amount of partial disposal of an asset.
                 * @example 500
                 */
                disposalAmount?: string;
                /**
                 * Format: date
                 * @description The date when the asset was fully or partially removed from business operations.
                 * @example 2025-08-08
                 */
                disposalDate?: string;
                /**
                 * @description The reason for disposal of the asset.
                 *
                 *     - `sale` - you receive a payment in exchange for the asset.
                 *     - `casualtyLoss` - the asset is destroyed or damaged due to an unforeseen event or accident. No payment is received.
                 *     - `theft` - the asset is stolen. No payment is received.
                 *     - `other` - the asset is removed from service for any other reason. The asset might still be in your possession, but it reached the end of its useful life or has no resale value. No payment is received.
                 *
                 *     If the reason for disposal is `sale`, then the `salePrice` and `disposalGLAccount` properties must be specified.
                 * @default null
                 * @example sale
                 * @enum {string|null}
                 */
                disposalType?: "sale" | "casualtyLoss" | "theft" | "other" | null;
                /**
                 * Format: decimal-precision-2
                 * @description The amount of an asset that is partially or fully sold for. Specify for assets with `disposalType` set to `sale`.
                 * @example 1000
                 */
                salePrice?: string;
                /**
                 * @description Notes about asset disposal.
                 * @example Sold to Lincoln Avenue Veterinary Clinic
                 */
                comments?: string;
                /**
                 * @description URL endpoint for the disposal.
                 * @example /objects/fixed-assets/disposal/1
                 */
                readonly href?: string;
            };
            /** @description The asset the disposal is associated with. */
            readonly asset?: {
                /**
                 * @description System-assigned key for the asset.
                 * @example 2
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the asset.
                 * @example 2
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the asset.
                 * @example /objects/fixed-assets/asset/2
                 */
                readonly href?: string;
            };
            /** @description Depreciation schedule associated with the disposal. */
            depreciationSchedule?: {
                /**
                 * @description System-assigned key for the depreciation schedule.
                 * @example 6725
                 */
                key?: string;
                /**
                 * @description Unique identifier for the depreciation schedule.
                 * @example 6725
                 */
                id?: string;
                /**
                 * @description URL endpoint for the depreciation schedule.
                 * @example /objects/fixed-assets/depreciation-schedule/1
                 */
                readonly href?: string;
            };
            /** @description Journal entry for the reversal of disposal of a depreciable asset. */
            readonly reverseDisposalJournalEntry?: {
                /**
                 * @description System-assigned key for the journal entry.
                 * @example 6725
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the journal entry.
                 * @example 6725
                 */
                readonly id?: string;
                /**
                 * @description System-assigned transaction number for the journal entry.
                 * @example 41
                 */
                readonly txnNumber?: number;
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/general-ledger/journal-entry/6725
                 */
                readonly href?: string;
            };
            /**
             * @description Journal entries label for the disposal depreciation schedule map.
             * @example Journal entries
             */
            readonly journalEntryLabel?: string;
            /**
             * @description Journal entries filter for a disposal depreciation schedule map.
             * @example [
             *       {
             *         "$eq": {
             *           "key": "472"
             *         }
             *       },
             *       {
             *         "$eq": {
             *           "key": "473"
             *         }
             *       }
             *     ]
             */
            readonly journalEntryFilter?: unknown[];
            audit?: components["schemas"]["audit.s2"];
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
    "list-fixed-assets-asset": {
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
    "post-fixed-assets-asset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates an asset */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.fixed-assets.asset"] & components["schemas"]["fixed-assets-assetRequiredProperties"];
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
    "get-fixed-assets-asset-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the asset.
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
                        "ia::result"?: components["schemas"]["objects.fixed-assets.asset"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-fixed-assets-asset-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the asset.
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
    "patch-fixed-assets-asset-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the asset.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.fixed-assets.asset"] & {
                    readonly id?: unknown;
                    readonly "sourceTxn.txnType"?: unknown;
                    readonly "sourceTxn.txnKey"?: unknown;
                    readonly "sourceTxn.txnId"?: unknown;
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
    "list-fixed-assets-classification": {
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
    "post-fixed-assets-classification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates an asset classification */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.fixed-assets.asset-classification"] & components["schemas"]["fixed-assets-asset-classificationRequiredProperties"];
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
    "get-fixed-assets-classification-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the asset classification.
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
                        "ia::result"?: components["schemas"]["objects.fixed-assets.asset-classification"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-fixed-assets-classification-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the asset classification.
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
    "patch-fixed-assets-classification-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the asset classification.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.fixed-assets.asset-classification"] & Record<string, never>;
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
    "list-fixed-assets-depreciation-method": {
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
    "list-fixed-assets-depreciation-method-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the depreciation method.
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
                        "ia::result"?: components["schemas"]["objects.fixed-assets.depreciation-method"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-fixed-assets-asset-depreciation-rule": {
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
    "post-fixed-assets-asset-depreciation-rule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.fixed-assets.asset-depreciation-rule"] & components["schemas"]["fixed-assets-asset-depreciation-ruleRequiredProperties"];
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
    "get-fixed-assets-asset-depreciation-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the asset depreciation rule.
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
                        "ia::result"?: components["schemas"]["objects.fixed-assets.asset-depreciation-rule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-fixed-assets-asset-depreciation-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the asset depreciation rule.
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
    "patch-fixed-assets-asset-depreciation-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the asset depreciation rule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
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
    "list-fixed-assets-classification-depreciation-rule": {
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
    "post-fixed-assets-classification-depreciation-rule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates a classification depreciation rule */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.fixed-assets.classification-depreciation-rule"] & components["schemas"]["fixed-assets-classification-depreciation-ruleRequiredProperties"];
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
    "get-fixed-assets-classification-depreciation-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the classification depreciation rule.
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
                        "ia::result"?: components["schemas"]["objects.fixed-assets.classification-depreciation-rule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-fixed-assets-classification-depreciation-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the classification depreciation rule.
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
    "patch-fixed-assets-classification-depreciation-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the classification depreciation rule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.fixed-assets.classification-depreciation-rule"] & {
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
    "list-fixed-assets-depreciation-schedule": {
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
    "get-fixed-assets-depreciation-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the depreciation schedule.
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
                        "ia::result"?: components["schemas"]["objects.fixed-assets.depreciation-schedule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-fixed-assets-depreciation-schedule-entry": {
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
    "get-fixed-assets-depreciation-schedule-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the depreciation schedule entry.
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
                        "ia::result"?: components["schemas"]["objects.fixed-assets.depreciation-schedule-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-fixed-assets-setup": {
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
                        "ia::result"?: Record<string, never>;
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "post-fixed-assets-setup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.fixed-assets.setup"];
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
    "get-fixed-assets-setup-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the setup.
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
                        "ia::result"?: components["schemas"]["objects.fixed-assets.setup"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-fixed-assets-setup-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the setup.
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
    "patch-fixed-assets-setup-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the setup.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.fixed-assets.setup"] & {
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
    "list-fixed-assets-setup-posting-rule": {
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
    "post-fixed-assets-setup-posting-rule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.fixed-assets.setup-posting-rule"] & components["schemas"]["fixed-assets-setup-posting-ruleRequiredProperties"];
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
    "get-fixed-assets-posting-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the setup posting rule.
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
                        "ia::result"?: components["schemas"]["objects.fixed-assets.setup-posting-rule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-fixed-assets-setup-posting-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the setup posting rule.
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
    "patch-fixed-assets-setup-posting-rule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the setup posting rule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.fixed-assets.setup-posting-rule"] & {
                    readonly key?: unknown;
                    readonly id?: unknown;
                    readonly "setup.key"?: unknown;
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
    "list-fixed-assets-transfer-history": {
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
    "post-fixed-assets-transfer-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.fixed-assets.transfer-history"];
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
    "get-fixed-assets-transfer-history-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transfer history.
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
                        "ia::result"?: components["schemas"]["objects.fixed-assets.transfer-history"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-transfer-history-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transfer history.
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
    "patch-fixed-assets-transfer-history": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transfer history.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.fixed-assets.transfer-history"] & {
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
    "list-fixed-assets-transfer-journal-entry-map": {
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
    "get-fixed-assets-transfer-journal-entry-map-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transfer journal entry map.
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
                        "ia::result"?: components["schemas"]["objects.fixed-assets.transfer-journal-entry-map"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-fixed-assets-disposal": {
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
    "get-fixed-assets-disposal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the disposal.
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
                        "ia::result"?: components["schemas"]["objects.fixed-assets.disposal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-fixed-assets-disposal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the disposal.
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
    "list-fixed-assets-disposal-depreciation-schedule-map": {
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
    "get-fixed-assets-disposal-depreciation-schedule-map-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the disposal depreciation schedule map.
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
                        "ia::result"?: components["schemas"]["objects.fixed-assets.disposal-depreciation-schedule-map"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
}

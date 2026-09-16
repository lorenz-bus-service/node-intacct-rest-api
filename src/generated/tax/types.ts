// Generated from spec/tax.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/tax/order-entry-tax-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Order Entry tax details
         * @description Returns a collection with a key, ID, and link for each Order Entry tax detail. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-tax-order-entry-tax-detail"];
        put?: never;
        /**
         * Create an Order Entry tax detail
         * @description Creates a new Order Entry tax detail.
         */
        post: operations["create-tax-order-entry-tax-detail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/order-entry-tax-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Order Entry tax detail.
                 * @example 308
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an Order Entry tax detail
         * @description Returns detailed information for a specified Order Entry tax detail.
         */
        get: operations["get-tax-order-entry-tax-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete an Order Entry tax detail
         * @description Deletes an Order Entry tax detail. Deleted tax details are removed from the system and can't be recovered.
         */
        delete: operations["delete-tax-order-entry-tax-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update an Order Entry tax detail
         * @description Updates an existing Order Entry tax detail by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-tax-order-entry-tax-detail-key"];
        trace?: never;
    };
    "/objects/tax/order-entry-tax-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Order Entry tax schedules
         * @description Returns a collection with a key, ID, and link for each Order Entry tax schedule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-tax-order-entry-tax-schedule"];
        put?: never;
        /**
         * Create an Order Entry tax schedule
         * @description Creates a new Order Entry tax schedule.
         */
        post: operations["create-tax-order-entry-tax-schedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/order-entry-tax-schedule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Order Entry tax schedule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an Order Entry tax schedule
         * @description Returns detailed information for a specified Order Entry tax schedule.
         */
        get: operations["get-tax-order-entry-tax-schedule-key"];
        put?: never;
        post?: never;
        /**
         * Delete an Order Entry tax schedule
         * @description Deletes an Order Entry tax schedule. Delete a tax schedule if it is no longer needed. Deleting a tax schedule removes it from the system so that it can't be recovered.
         */
        delete: operations["delete-tax-order-entry-tax-schedule-key"];
        options?: never;
        head?: never;
        /**
         * Update an Order Entry tax schedule
         * @description Updates an existing Order Entry tax schedule by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-tax-order-entry-tax-schedule-key"];
        trace?: never;
    };
    "/objects/tax/order-entry-tax-schedule-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Order Entry tax schedule details
         * @description Returns a collection with a key, ID, and link for each Order Entry tax schedule detail. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-tax-order-entry-tax-schedule-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/order-entry-tax-schedule-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the Order Entry tax schedule detail.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an Order Entry tax schedule detail
         * @description Returns detailed information for a specified Order Entry tax schedule detail.
         */
        get: operations["get-tax-order-entry-tax-schedule-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/purchasing-tax-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Purchasing tax details
         * @description Returns a collection with a key, ID, and link for each purchasing tax detail. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-tax-purchasing-tax-detail"];
        put?: never;
        /**
         * Create a Purchasing tax detail
         * @description Creates a new Purchasing tax detail.
         */
        post: operations["create-tax-purchasing-tax-detail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/purchasing-tax-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Purchasing tax detail.
                 * @example 304
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a Purchasing tax detail
         * @description Returns detailed information for a specified Purchasing tax detail.
         */
        get: operations["get-tax-purchasing-tax-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete a Purchasing tax detail
         * @description Deletes a Purchasing tax detail. Deleted tax details are removed from the system and can't be recovered.
         */
        delete: operations["delete-tax-purchasing-tax-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update a Purchasing tax detail
         * @description Updates an existing Purchasing tax detail by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-tax-purchasing-tax-detail-key"];
        trace?: never;
    };
    "/objects/tax/purchasing-tax-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Purchasing tax schedules
         * @description Returns a collection with a key, ID, and link for each Purchasing tax schedule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-tax-purchasing-tax-schedule"];
        put?: never;
        /**
         * Create a Purchasing tax schedule
         * @description Creates a new Purchasing tax schedule.
         */
        post: operations["create-tax-purchasing-tax-schedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/purchasing-tax-schedule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Purchasing tax schedule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a Purchasing tax schedule
         * @description Returns detailed information for a specified Purchasing tax schedule.
         */
        get: operations["get-tax-purchasing-tax-schedule-key"];
        put?: never;
        post?: never;
        /**
         * Delete a Purchasing tax schedule
         * @description Deletes a Purchasing tax schedule. Delete a tax schedule if it is no longer needed. Deleting a tax schedule removes it from the system so that it can't be recovered.
         */
        delete: operations["delete-tax-purchasing-tax-schedule-key"];
        options?: never;
        head?: never;
        /**
         * Update a Purchasing tax schedule
         * @description Updates an existing Purchasing tax schedule by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-tax-purchasing-tax-schedule-key"];
        trace?: never;
    };
    "/objects/tax/purchasing-tax-schedule-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Purchasing tax schedule details
         * @description Returns a collection with a key, ID, and link for each Purchasing tax schedule detail. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-tax-purchasing-tax-schedule-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/purchasing-tax-schedule-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Purchasing tax schedule detail.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a Purchasing tax schedule detail
         * @description Returns detailed information for a specified Purchasing tax schedule detail.
         */
        get: operations["get-tax-purchasing-tax-schedule-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/tax-authority": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List tax authorities
         * @description Returns a collection with a key, ID, and link for each tax authority. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-tax-tax-authority"];
        put?: never;
        /**
         * Create a tax authority
         * @description Creates a new tax authority.
         */
        post: operations["create-tax-tax-authority"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/tax-authority/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the tax authority.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a tax authority
         * @description Returns detailed information for a specified tax authority.
         */
        get: operations["get-tax-tax-authority-key"];
        put?: never;
        post?: never;
        /**
         * Delete a tax authority
         * @description Delete a tax authority that is no longer in use. After a tax authority is deleted, it can't be recovered.
         */
        delete: operations["delete-tax-tax-authority-key"];
        options?: never;
        head?: never;
        /**
         * Update a tax authority
         * @description Updates an existing tax authority by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-tax-tax-authority-key"];
        trace?: never;
    };
    "/objects/tax/contact-tax-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contact tax groups
         * @description Returns a collection with a key, ID, and link for each contact tax group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-tax-contact-tax-group"];
        put?: never;
        /**
         * Create a contact tax group
         * @description Creates a new contact tax group.
         */
        post: operations["create-tax-contact-tax-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/contact-tax-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contact tax group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a contact tax group
         * @description Returns detailed information for a specified contact tax group.
         */
        get: operations["get-tax-contact-tax-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete a contact tax group
         * @description Deletes a contact tax group.
         */
        delete: operations["delete-tax-contact-tax-group-key"];
        options?: never;
        head?: never;
        /**
         * Update a contact tax group
         * @description Updates an existing contact tax group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-tax-contact-tax-group-key"];
        trace?: never;
    };
    "/objects/tax/item-tax-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List item tax groups
         * @description Returns a collection with a key, ID, and link for each item tax group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-tax-item-tax-group"];
        put?: never;
        /**
         * Create an item tax group
         * @description Creates a new item tax group.
         */
        post: operations["create-tax-item-tax-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/item-tax-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item tax group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an item tax group
         * @description Returns detailed information for a specified item tax group.
         */
        get: operations["get-tax-item-tax-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete an item tax group
         * @description Deletes an item tax group.
         */
        delete: operations["delete-tax-item-tax-group-key"];
        options?: never;
        head?: never;
        /**
         * Update an item tax group
         * @description Updates an existing item tax group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-tax-item-tax-group-key"];
        trace?: never;
    };
    "/objects/tax/tax-return": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List tax returns
         * @description Returns a collection with a key, ID, and link for each tax return. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-tax-tax-return"];
        put?: never;
        /**
         * Create a tax return
         * @description Creates a new tax return.
         */
        post: operations["create-tax-tax-return"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/tax-return/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the tax return.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a tax return
         * @description Returns detailed information for a specified tax return.
         */
        get: operations["get-tax-tax-return-key"];
        put?: never;
        post?: never;
        /**
         * Delete a tax return
         * @description Deletes a tax return.
         */
        delete: operations["delete-tax-tax-return-key"];
        options?: never;
        head?: never;
        /**
         * Update a tax return
         * @description Updates an existing tax return by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-tax-tax-return-key"];
        trace?: never;
    };
    "/objects/tax/tax-solution": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List tax solutions
         * @description Returns a collection with a key, ID, and link for each solution. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find tax solutions that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-tax-tax-solution"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/tax-solution/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the tax solution.
                 * @example 43
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a tax solution
         * @description Returns detailed information for a specified tax solution.
         */
        get: operations["get-tax-tax-solution-key"];
        put?: never;
        post?: never;
        /**
         * Delete a tax solution
         * @description Deletes a tax solution. You must first delete any dependent objects such as tax schedules, tax groups, and tax
         *     details.  Deleted tax solutions are removed from the system and can't be recovered.
         */
        delete: operations["delete-tax-tax-solution-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/account-label-tax-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account label tax groups
         * @description Returns a collection with a key, ID, and link for each account label tax group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-tax-account-label-tax-group"];
        put?: never;
        /**
         * Create an account label tax group
         * @description Creates a new account label tax group.
         */
        post: operations["create-tax-account-label-tax-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/account-label-tax-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account label tax group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account label tax group
         * @description Returns detailed information for a specified account label tax group.
         */
        get: operations["get-tax-account-label-tax-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete an account label tax group
         * @description Deletes an account label tax group.
         */
        delete: operations["delete-tax-account-label-tax-group-key"];
        options?: never;
        head?: never;
        /**
         * Update an account label tax group
         * @description Updates an existing account label tax group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-tax-account-label-tax-group-key"];
        trace?: never;
    };
    "/objects/tax/tax-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List tax details
         * @description Returns a collection with a key, ID, and link for each tax detail. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-tax-tax-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/tax-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the tax detail.
                 * @example 304
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a tax detail
         * @description Returns detailed information for a specified tax detail.
         */
        get: operations["get-tax-tax-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/tax-record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List tax records
         * @description Returns a collection with a key, ID, and link for each tax record. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-tax-tax-record"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/tax-record/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the tax record.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a tax record
         * @description Returns detailed information for a specified tax record.
         */
        get: operations["get-tax-tax-record-key"];
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
        "objects.tax.order-entry-tax-detail": {
            /**
             * @description System-assigned key for the Order Entry tax detail.
             * @example 3
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the Order Entry tax detail.
             * @example State Tax Texas
             */
            id?: string;
            /**
             * @description URL endpoint for the Order Entry tax detail.
             * @example /objects/tax/order-entry-tax-detail/3
             */
            readonly href?: string;
            /**
             * @description Indicates whether the tax detail is `active` or `inactive`. An `active` tax detail is used to calculate taxes for an order per the tax schedule map.
             * @default active
             * @example inactive
             */
            status?: components["schemas"]["status"];
            /**
             * @description A valid identifier for Australia GST, South Africa VAT, or United Kingdom VAT compliance. Valid identifiers are predetermined by internal Sage requirements.
             * @example GB.ECOutput_GB.ExemptGB.VAT
             */
            taxUniqueId?: string;
            /**
             * @description The category for the tax detail.
             * @example exempt
             * @enum {string|null}
             */
            taxRate?: null | "standard" | "reduced" | "exempt" | "zero" | "federal" | "provincial" | "reverseChargeVAT" | "intraCommunityDeliveryExemption" | "exportOutsideEUExemption" | "outsideVATScope";
            /**
             * @description Amount to include in taxable amount:
             *
             *       - `fullAmount` - Include the cost from zero up to the maximum taxable amount.
             *       - `amountWithinRange` - Include the amount between the minimum and maximum taxable amount.
             * @example fullAmount
             * @enum {string|null}
             */
            amountToTax?: null | "fullAmount" | "amountWithinRange";
            /**
             * @description The description of the Order Entry tax detail, which appears in the transaction subtotals if configured.
             * @example Standard Rate for AU Import Services
             */
            description?: string;
            /**
             * @description The tax rate. For example, enter 10 to apply a tax of 10%.
             * @example 10
             */
            taxPercent?: number;
            taxLimit?: {
                /**
                 * @description Minimum taxable amount. If the amount of a line item is at or below this value, tax is not applied.
                 * @example 10
                 */
                minTaxable?: number;
                /**
                 * @description Maximum taxable amount. Tax is applied to line item amounts up to this value, but not over.
                 * @example 2000
                 */
                maxTaxable?: number;
                /**
                 * @description The least amount of tax that will be applied. If the calculated tax is below this amount, this amount is applied.
                 * @example 10
                 */
                minTax?: number;
                /**
                 * @description The most amount of tax that will be applied. If the calculated tax exceeds this amount, this amount is applied.
                 * @example 150
                 */
                maxTax?: number;
            };
            /**
             * @description Indicates if the tax detail is used to reclaim tax for a reverse-charge transaction. This field is most commonly used for VAT or GST tax solutions.
             * @default false
             * @example true
             */
            reverseCharge?: boolean;
            /**
             * @description Tax detail key for German entities.
             * @default null
             * @example 7
             */
            germanTaxDetailKey?: number | null;
            /**
             * @description Set to `true` to override the GL account and assign taxes to the expense account.
             * @default false
             * @example true
             */
            useExpenseAccount?: boolean;
            /**
             * @description If `true`, this is a system-generated tax detail.
             * @default false
             * @example true
             */
            readonly isSystemGenerated?: boolean;
            /** @description AR account label. */
            accountLabel?: {
                /**
                 * @description Unique ID for the account label.
                 * @example Accounting Fees
                 */
                id?: string;
                /**
                 * @description System-generated key for the account label.
                 * @example 14
                 */
                key?: string;
                /**
                 * @description URL endpoint for the account label.
                 * @example /objects/accounts-receivable/account-label/14
                 */
                readonly href?: string;
            };
            /** @description The tax authority for whom you are collecting taxes (such as the City of San Jose). */
            taxAuthority?: {
                /**
                 * @description Unique identifier for the tax authority.
                 * @example California
                 */
                id?: string;
                /**
                 * @description System-assigned key for the tax authority.
                 * @example 24
                 */
                key?: string;
                /**
                 * @description URL endpoint for the tax authority.
                 * @example /objects/tax/tax-authority/24
                 */
                readonly href?: string;
            };
            /** @description The general ledger account to which this tax is to be assigned. */
            salesGLAccount?: {
                /**
                 * @description Unique identifier for the GL account.
                 * @example 00.01--Accounts Receivable - a/c label offset
                 */
                id?: string;
                /**
                 * @description System-assigned key for the GL account.
                 * @example 57
                 */
                key?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/57
                 */
                readonly href?: string;
            };
            /** @description Tax solution to which this tax detail belongs. */
            taxSolution?: {
                /**
                 * @description System-assigned key for the tax solution.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax solution.
                 * @example United Kingdom - VAT
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/1
                 */
                readonly href?: string;
            };
        };
        "tax-order-entry-tax-detailRequiredProperties": Record<string, never>;
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
        "objects.tax.order-entry-tax-schedule": {
            /**
             * @description System-assigned key for the Order Entry tax schedule.
             * @example 7129
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the Order Entry tax schedule.
             * @example 7129
             */
            readonly id?: string;
            /**
             * @description Name or other unique identifier for the Order Entry tax schedule.
             * @example TaxSched-00004
             */
            name?: string;
            /**
             * @description Endpoint URL for the Order Entry tax schedule.
             * @example /objects/tax/order-entry-tax-schedule/7129
             */
            readonly href?: string;
            /**
             * @description Indicates whether this tax schedule is `active` or `inactive`.
             * @default active
             * @example inactive
             */
            status?: components["schemas"]["status"];
            /**
             * @description Description of the Order Entry tax schedule or other additional information.
             * @example Description of the Tax Schedule
             */
            description?: string;
            /**
             * @description If `true`, this is a system-generated object.
             * @default false
             * @example true
             */
            readonly isSystemGenerated?: boolean;
            /** @description Order Entry tax schedule details for the tax schedule. */
            lines?: components["schemas"]["objects.tax.order-entry-tax-schedule-detail"][];
            /** @description Different tax solutions are available for different countries. Examples include Australia GST, South  Africa VAT, and UK VAT. */
            taxSolution?: {
                /**
                 * @description System-assigned key for the tax solution.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax solution.
                 * @example United Kingdom - VAT
                 */
                id?: string;
                /**
                 * @description Endpoint URL for the tax solution.
                 * @example /objects/tax/tax-solution/1
                 */
                readonly href?: string;
            };
        };
        "tax-order-entry-tax-scheduleRequiredProperties": Record<string, never>;
        "objects.tax.order-entry-tax-schedule-detail": {
            /**
             * @description System-assigned key for the Order Entry tax schedule detail.
             * @example 7149
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the Order Entry tax schedule detail.
             * @example 7149
             */
            readonly id?: string;
            /**
             * Format: date
             * @description Date when the Order Entry tax schedule detail becomes effective.
             * @example 2022-01-08
             */
            effectiveDate?: string;
            /**
             * @description URL endpoint for the Order Entry tax schedule detail.
             * @example /objects/tax/order-entry-tax-schedule-detail/7149
             */
            readonly href?: string;
            /** @description Tax schedules identify the tax details that are applied when the schedule is referenced by a tax schedule map. */
            readonly taxSchedule?: {
                /**
                 * @description System-assigned key for the tax schedule.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the tax schedule.
                 * @example 1
                 */
                readonly id?: string;
                /**
                 * @description Name or other unique identifier for the tax schedule.
                 * @example TaxSched-00002
                 */
                name?: string;
                /**
                 * @description URL endpoint for the tax schedule.
                 * @example /objects/tax/order-entry-tax-schedule/1
                 */
                readonly href?: string;
            };
            /** @description Order Entry tax details describe a specific type of tax that applies to lines in Accounts Receivable and Order Entry transactions. */
            taxDetail?: {
                /**
                 * @description System-assigned key for the tax detail.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax detail.
                 * @example Alaska Tax Detail
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax detail.
                 * @example /objects/tax/order-entry-tax-detail/1
                 */
                readonly href?: string;
            };
        };
        "objects.tax.purchasing-tax-detail": {
            /**
             * @description System-assigned key for the Purchasing tax detail.
             * @example 4
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the Purchasing tax detail.
             * @example State Tax Arkansas
             */
            id?: string;
            /**
             * @description URL endpoint for the Purchasing tax detail.
             * @example /objects/tax/purchasing-tax-detail/4
             */
            readonly href?: string;
            /**
             * @description Indicates whether the tax detail is `active` or `inactive`. An `active` tax detail is used to calculate taxes for a purchasing transaction per the tax schedule map.
             * @default active
             * @example inactive
             */
            status?: components["schemas"]["status"];
            /**
             * @description A valid identifier for Australia GST, South Africa VAT, or United Kingdom VAT compliance. Valid identifiers are predetermined by internal Sage requirements.
             * @example GB.ECOutput_GB.ExemptGB.VAT
             */
            taxUniqueId?: string;
            /**
             * @description The category for the tax detail.
             * @example exempt
             * @enum {string|null}
             */
            taxRate?: null | "standard" | "reduced" | "exempt" | "zero" | "federal" | "provincial" | "reverseChargeVAT" | "intraCommunityDeliveryExemption" | "exportOutsideEUExemption" | "outsideVATScope";
            /**
             * @description Amount to include in taxable amount:
             *
             *       - `fullAmount` - Include the cost from zero up to the maximum taxable amount.
             *       - `amountWithinRange` - Include the amount between the minimum and maximum taxable amount.
             * @example fullAmount
             * @enum {string|null}
             */
            amountToTax?: null | "fullAmount" | "amountWithinRange";
            /**
             * @description The description of the Purchasing tax detail, which appears in the transaction subtotals if configured.
             * @example Standard Rate for UK Import Services
             */
            description?: string;
            /**
             * @description The tax rate. For example, enter 10 to apply a tax of 10%.
             * @example 10
             */
            taxPercent?: number;
            taxLimit?: {
                /**
                 * @description Minimum taxable amount. If the amount of a line item is at or below this value, tax is not applied.
                 * @example 10
                 */
                minTaxable?: number;
                /**
                 * @description Maximum taxable amount. Tax is applied to line item amounts up to this value, but not over.
                 * @example 2000
                 */
                maxTaxable?: number;
                /**
                 * @description The least amount of tax that will be applied. If the calculated tax is below this amount, this amount is applied.
                 * @example 10
                 */
                minTax?: number;
                /**
                 * @description The most amount of tax that will be applied. If the calculated tax exceeds this amount, this amount is applied.
                 * @example 150
                 */
                maxTax?: number;
            };
            /**
             * @description Indicates if the tax detail is used to reclaim tax for a reverse-charge transaction. This field is most commonly used for VAT or GST tax solutions.
             * @default false
             * @example true
             */
            reverseCharge?: boolean;
            /**
             * @description Tax detail key for German entities.
             * @default null
             * @example 7
             */
            germanTaxDetailKey?: number | null;
            /**
             * @description Set to `true` to override the GL account and assign taxes to the expense account.
             * @default false
             * @example true
             */
            useExpenseAccount?: boolean;
            /**
             * @description If `true`, this is a system-generated tax detail.
             * @default false
             * @example true
             */
            readonly isSystemGenerated?: boolean;
            /** @description The tax authority for whom you are collecting taxes (such as the City of San Jose). */
            taxAuthority?: {
                /**
                 * @description Unique identifier for the legal tax authority. Useful for creating separate tax reports by jurisdictions.
                 * @example California
                 */
                id?: string;
                /**
                 * @description System-assigned key for the tax authority.
                 * @example 24
                 */
                key?: string;
                /**
                 * @description URL endpoint for the tax authority object.
                 * @example /objects/tax/tax-authority/24
                 */
                readonly href?: string;
            };
            /** @description GL account to which this tax is to be assigned. */
            purchaseGLAccount?: {
                /**
                 * @description Unique identifier for the GL account.
                 * @example 1200.01--Accounts Receivable - a/c label offset
                 */
                id?: string;
                /**
                 * @description System-assigned key for the GL account.
                 * @example 57
                 */
                key?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/57
                 */
                readonly href?: string;
            };
            /** @description Tax solution to which this tax detail belongs. */
            taxSolution?: {
                /**
                 * @description System-assigned key for the tax solution.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax solution.
                 * @example United Kingdom - VAT
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/1
                 */
                readonly href?: string;
            };
        };
        "tax-purchasing-tax-detailRequiredProperties": Record<string, never>;
        "objects.tax.purchasing-tax-schedule": {
            /**
             * @description System-assigned key for the Purchasing tax schedule.
             * @example 7155
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the Purchasing tax schedule.
             * @example 7155
             */
            readonly id?: string;
            /**
             * @description Name or other unique identifier for the Purchasing tax schedule.
             * @example TaxSched-00003
             */
            name?: string;
            /**
             * @description URL endpoint for the Purchasing tax schedule.
             * @example /objects/tax/purchasing-tax-schedule/7155
             */
            readonly href?: string;
            /**
             * @description Indicates whether the tax schedule is `active` or `inactive`.
             * @default active
             * @example inactive
             */
            status?: components["schemas"]["status"];
            /**
             * @description Description of the Purchasing tax schedule or other additional information.
             * @example Description of the Tax Schedule
             */
            description?: string;
            /**
             * @description If `true`, this is a system-generated object.
             * @default false
             * @example true
             */
            readonly isSystemGenerated?: boolean;
            /** @description Purchasing tax schedule details for the tax schedule. */
            lines?: components["schemas"]["objects.tax.purchasing-tax-schedule-detail"][];
            /** @description Different tax solutions are available for different countries. Examples include Australia GST, South Africa VAT, and UK VAT. */
            taxSolution?: {
                /**
                 * @description System-assigned key for the tax solution.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax solution.
                 * @example United Kingdom - VAT
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/1
                 */
                readonly href?: string;
            };
        };
        "tax-purchasing-tax-scheduleRequiredProperties": Record<string, never>;
        "objects.tax.purchasing-tax-schedule-detail": {
            /**
             * @description System-assigned key for the Purchasing tax schedule detail.
             * @example 7149
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the Purchasing tax schedule detail.
             * @example 7149
             */
            readonly id?: string;
            /**
             * Format: date
             * @description Date when the Purchasing tax schedule detail becomes effective.
             * @example 2022-01-08
             */
            effectiveDate?: string;
            /**
             * @description URL endpoint for the Purchasing tax schedule detail.
             * @example /objects/tax/purchasing-tax-schedule-detail/7149
             */
            readonly href?: string;
            /** @description Tax schedules identify the tax details that are applied when the schedule is referenced by a tax schedule map. */
            readonly taxSchedule?: {
                /**
                 * @description System-assigned key for the tax schedule.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the tax schedule.
                 * @example 1
                 */
                readonly id?: string;
                /**
                 * @description Name or other unique identifier for the tax schedule.
                 * @example TaxSched-00002
                 */
                name?: string;
                /**
                 * @description URL endpoint for the tax schedule.
                 * @example /objects/tax/purchasing-tax-schedule/1
                 */
                readonly href?: string;
            };
            /** @description Purchasing tax details describe specific types of taxes that apply to lines in Purchasing transactions. */
            taxDetail?: {
                /**
                 * @description System-assigned key for the tax detail.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax detail.
                 * @example Alaska Tax Detail
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax detail.
                 * @example /objects/tax/purchasing-tax-detail/1
                 */
                readonly href?: string;
            };
        };
        /** @description Tax authority */
        "objects.tax.tax-authority": {
            /**
             * @description System-assigned key for the tax authority.
             * @example 105
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the tax authority.
             * @example Texas
             */
            id?: string;
            /**
             * @description Description of the tax authority or other additional information.
             * @example Texas tax authority
             */
            description?: string;
            /**
             * @description URL endpoint for the tax authority.
             * @example /objects/tax/tax-authority/105
             */
            readonly href?: string;
            /**
             * @deprecated
             * @description This field has been deprecated; use vendor.id instead.
             * @example Vendor_Visa_C
             */
            vendorId?: string;
            /** @description The vendor to whom you'll pay the taxes collected for this tax authority. */
            vendor?: {
                /**
                 * @description System-assigned key for the vendor.
                 * @example 518
                 */
                key?: string;
                /**
                 * @description Unique identifier for the vendor.
                 * @example V-00014
                 */
                id?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/518
                 */
                readonly href?: string;
            };
            /** @description Parent tax authority. */
            parent?: {
                /**
                 * @description Unique identified for the parent tax authority.
                 * @example California
                 */
                id?: string;
                /**
                 * @description Key for the parent tax authority.
                 * @example 24
                 */
                key?: string;
                /**
                 * @description URL endpoint for the parent tax authority.
                 * @example /objects/tax/tax-authority/24
                 */
                readonly href?: string;
            };
        };
        "tax-tax-authorityRequiredProperties": Record<string, never>;
        /** @description Contact tax groups enable taxes to be applied to customers, vendors, and their contacts, according to their jurisdictions. Only applicable with Advanced Tax. */
        "objects.tax.contact-tax-group": {
            /**
             * @description System-assigned unique key for the contact tax group.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the contact tax group.
             * @example Australian Export Customers
             */
            id?: string;
            /**
             * @description URL endpoint for the contact tax group.
             * @example /objects/tax/contact-tax-group/23
             */
            readonly href?: string;
            /**
             * @description Unique identifier for the contact tax group. This field is the same as `id` for this object.
             * @example Australian Export Customers
             */
            name?: string;
            /**
             * @description Group type.
             * @default contact
             * @example contact
             */
            readonly groupType?: string;
            /**
             * @description If `true`, this is a system generated object.
             * @default false
             * @example true
             */
            readonly isSystemGenerated?: boolean;
            /**
             * @description If true, transactions for items in this tax group are VAT enabled.
             * @default false
             * @example true
             */
            readonly isVATEnabled?: boolean;
            /** @description Tax solution associated with this contact tax group. Different tax solutions are available for different countries, for example, Australia GST, South Africa VAT, UK Vat. See [tax solutions](tax.tax-solution) for details. */
            taxSolution?: {
                /**
                 * @description System-assigned key for the tax solution.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/23
                 */
                readonly href?: string;
                /**
                 * @description Unique ID for the tax solution.
                 * @example Australia - GST
                 */
                id?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "tax-contact-tax-groupRequiredProperties": Record<string, never>;
        /** @description Item tax groups apply different tax schedules to various items. */
        "objects.tax.item-tax-group": {
            /**
             * @description System-assigned unique key for the item tax group.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the item tax group.
             * @example Acme Company Customers
             */
            id?: string;
            /**
             * @description URL endpoint for the item tax group.
             * @example /objects/tax/item-tax-group/23
             */
            readonly href?: string;
            /**
             * @description Unique identifier for the item tax group. This field is the same as `id` for this object.
             * @example Acme Company Customers
             */
            name?: string;
            /**
             * @description Group type.
             * @default item
             * @example item
             */
            readonly groupType?: string;
            /**
             * @description If `true`, this is a system generated object.
             * @default false
             * @example true
             */
            readonly isSystemGenerated?: boolean;
            /**
             * @description If `true`, transactions for items in this tax group are VAT enabled.
             * @default false
             * @example true
             */
            readonly isVATEnabled?: boolean;
            /** @description Tax solution associated with this item tax group. Different tax solutions are available for different countries, for example, Australia GST, South Africa VAT, UK Vat. See [Tax solutions](tax.tax-solution) for details. */
            taxSolution?: {
                /**
                 * @description System-assigned key for the tax solution.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/23
                 */
                readonly href?: string;
                /**
                 * @description ID for the tax solution.
                 * @example Australia - GST
                 */
                id?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "tax-item-tax-groupRequiredProperties": Record<string, never>;
        /** @description Tax return */
        "objects.tax.tax-return": {
            /**
             * @description System-assigned unique key for the tax return.
             * @example 61
             */
            readonly key?: string;
            /**
             * @description System-assigned identifier for the tax return. The value is the same as the `key` for this object.
             * @example 61
             */
            id?: string;
            /**
             * @description URL endpoint for the tax return.
             * @example /objects/tax/tax-return/61
             */
            readonly href?: string;
            /**
             * @description Name for the tax return.
             * @example VAT Return Q1 2023
             */
            name?: string;
            /**
             * @description Tax ID such as VAT registration number (VRN) or Australian Business Number (ABN) for the tax filing company or entity.
             * @example 4490232727
             */
            taxId?: string;
            /**
             * @description The email address of the recipient for the tax return.
             * @example john.doe@abcompany.com
             */
            recipientEmail?: string;
            /**
             * Format: date
             * @description The beginning date of the tax reporting period as returned by the government agency when filing.
             * @example 2021-01-23
             */
            readonly submissionPeriodStartDate?: string;
            /**
             * Format: date
             * @description The ending date of the tax reporting period as returned by the government agency when filing.
             * @example 2021-01-23
             */
            readonly submissionPeriodEndDate?: string;
            /**
             * Format: date
             * @description The date the tax return was submitted.
             * @example 2021-01-23
             */
            submissionDate?: string;
            /**
             * @description The manner in which the tax return was submitted.
             * @default null
             * @example manual
             * @enum {string|null}
             */
            readonly submissionType?: null | "manual" | "electronic";
            /**
             * @description The email address of the person who submitted the tax return.
             * @example john.doe@abcompany.com
             */
            submittersEmail?: string;
            /**
             * @description Country code for the tax return.
             * @example au
             * @enum {string}
             */
            readonly legalCountryCode?: "au" | "gb" | "za" | "ca";
            /**
             * @description Specifies whether the recipient's email should be used for the next submission for this tax ID.
             * @default true
             * @example true
             */
            setEmailAddressAsDefault?: boolean;
            /**
             * @description Specifies whether the entry in the adjusting journal is completed in Sage Intacct for the tax return.
             * @default false
             * @example true
             */
            isAdjustingCompleted?: boolean;
            /**
             * @description Current step in the Sage Intacct process used to submit the tax return. For details about each step, see [Processing steps section](https://www.intacct.com/ia/docs/en_US/help_action/Taxes/Indirect_Tax/VAT_and_GST/Use/Submit_taxes/submit-taxes.htm?#Fielddescriptions).
             * @example submitToGovernment
             * @enum {string}
             */
            readonly currentStepStage?: null | "prepareTaxData" | "transmitTaxData" | "prepareTaxReturn" | "submitToGovernment" | "transmitRrFilesToSage" | "manualAdjustment";
            /**
             * @description Status of the current processing step, see the [Processing steps section](https://www.intacct.com/ia/docs/en_US/help_action/Taxes/Indirect_Tax/VAT_and_GST/Use/Submit_taxes/submit-taxes.htm?#Fielddescriptions) for details.
             * @example completed
             * @enum {string}
             */
            readonly currentStepStatus?: null | "completed" | "started" | "notStarted" | "failed" | "inTransit" | "transitCompleted" | "transitFailed" | "processingStarted" | "processingCompleted" | "processingFailed" | "notApplicable";
            /**
             * @description Number of the bundle the tax return was part of when submitted (for UK only).
             * @example 891204442498
             */
            readonly bundleNumber?: string;
            /**
             * @description Unique identifier that confirms receipt of the VAT return (for UK only).
             * @example 4c907ee0-a76f-42a7-b582-1a3fb78ae4b8
             */
            readonly receiptId?: string;
            /**
             * @description Notes about an adjustment for the tax return.
             * @example VAT return notes
             */
            adjustmentNotes?: string;
            /** @description Processing steps that have been completed for the tax return. */
            readonly taxProcessingSteps?: {
                /**
                 * @example prepareTaxData
                 * @enum {string}
                 */
                stage?: null | "prepareTaxData" | "transmitTaxData" | "prepareTaxReturn" | "submitToGovernment" | "transmitRrFilesToSage" | "manualAdjustment";
                /**
                 * @example completed
                 * @enum {string}
                 */
                status?: null | "completed" | "started" | "notStarted" | "failed" | "inTransit" | "transitCompleted" | "transitFailed" | "processingStarted" | "processingCompleted" | "processingFailed" | "notApplicable";
                /** @example 11 records eligible for submission */
                description?: string;
                /**
                 * Format: date
                 * @example 03/03/2020
                 */
                recentActivityDate?: string;
            }[];
            /** @description System-generated files related to the tax report. */
            readonly relatedFiles?: {
                /**
                 * @description Name for the file.
                 * @example transactions.json
                 */
                fileName?: string;
                /**
                 * @description The processing step in which the file was generated.
                 * @example Prepare source tax data
                 */
                stage?: string;
                /**
                 * Format: date
                 * @description The date the file was created.
                 * @example 03/03/2020
                 */
                creationDate?: string;
            }[];
            /** @description The entity that the tax return is filed under. */
            reportingEntity?: {
                /**
                 * @description System-assigned unique key for the reporting entity.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Unique identifier for the reporting entity.
                 * @example LOC-USA-0778
                 */
                id?: string;
                /**
                 * @description URL endpoint for the reporting entity.
                 * @example /objects/company-config/entity/3
                 */
                readonly href?: string;
            };
            /** @description The tax solution used for this tax return. */
            taxSolution?: {
                /**
                 * @description System-assigned unique key for the tax solution.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax solution.
                 * @example United Kingdom - VAT
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/1
                 */
                readonly href?: string;
            };
        };
        "tax-tax-returnRequiredProperties": Record<string, never>;
        /** @description Definition for how taxes should be captured and reported. */
        "objects.tax.tax-solution": {
            /**
             * @description System-assigned unique key for the tax solution.
             * @example 200
             */
            readonly key?: string;
            /**
             * @description Name for the tax solution.
             * @example Australia - GST
             */
            id?: string;
            /**
             * @description URL endpoint for the tax solution.
             * @example /objects/tax/tax-solution/200
             */
            readonly href?: string;
            /**
             * @description Description of the tax solution.
             * @example Oregon sales tax
             */
            description?: string;
            /**
             * @description Tax solution status.
             * @default active
             * @example active
             * @enum {string}
             */
            status?: "active" | "inactive" | "notConfigured";
            /**
             * @description Tax solution type.
             * @example standard
             * @enum {string}
             */
            taxSolutionType?: "custom" | "standard";
            /**
             * @description Enable multiple taxes per line. Turning this option on is permanent.
             * @default false
             * @example false
             */
            enableMultilineTax?: boolean;
            /**
             * Format: date
             * @description Start date of the first tax submission period.
             * @example 2023-01-01
             */
            taxSubmissionStartDate?: string;
            /**
             * @description Tax calculation method.
             * @example simpleTax
             * @enum {string}
             */
            taxCalculationMethod?: "noTax" | "simpleTax" | "advancedTax" | "avaTax" | "VAT";
            /**
             * @description Sets where returns to vendors and credits to customers are reported. Only for South Africa VAT. Turning this option on is permanent.
             *
             *     * `false` - reported in the adjustment fields
             *     * `true` - reported as offsets in the input and output VAT fields on the VAT201 Declaration
             * @default false
             * @example false
             */
            alternativeSetup?: boolean;
            /**
             * Format: date
             * @description The date an update was last installed for all tax objects for this tax solution.
             * @example 2023-01-31
             */
            readonly lastUpdatedTaxDate?: string;
            /** @description The general ledger (GL) account to which output tax in Accounts Receivable and Order Entry will be assigned. */
            arAdvanceOffsetGLAccount?: {
                /**
                 * @description System-assigned unique key for the offset GL account.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique ID for the offset GL account.
                 * @example Automobile Repairs
                 */
                id?: string;
                /**
                 * @description URL endpoint for the offset GL account.
                 * @example /objects/general-ledger/account/23
                 */
                readonly href?: string;
            };
            /** @description The general ledger (GL) account to which input tax in Accounts Payable and Purchasing will be assigned. */
            purchaseGLAccount?: {
                /**
                 * @description System-assigned unique key for the purchase GL account.
                 * @example 12
                 */
                key?: string;
                /**
                 * @description Unique ID for the purchase GL account.
                 * @example Automobile Repairs
                 */
                id?: string;
                /**
                 * @description URL endpoint for the purchase GL account.
                 * @example /objects/general-ledger/account/12
                 */
                readonly href?: string;
            };
            /** @description The default general ledger account to which tax in Accounts Receivable and Order Entry will be assigned. */
            salesGLAccount?: {
                /**
                 * @description System-assigned unique key for the sales GL account.
                 * @example 34
                 */
                key?: string;
                /**
                 * @description Unique ID for the sales GL account.
                 * @example Time Type - Coding
                 */
                id?: string;
                /**
                 * @description URL endpoint for the sales GL account.
                 * @example /objects/general-ledger/account/34
                 */
                readonly href?: string;
            };
        };
        /** @description Account label tax groups organize account labels under one tax category. They are part of the glue in tax schedule maps, which associate tax schedules with one or more combinations of contact tax groups and account label tax groups. */
        "objects.tax.account-label-tax-group": {
            /**
             * @description System-assigned key for the account label tax group.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the account label tax group.
             * @example Acme Company Customers
             */
            id?: string;
            /**
             * @description URL endpoint for the account label tax group.
             * @example /objects/tax/account-label-tax-group/23
             */
            readonly href?: string;
            /**
             * @description Name or other unique identifier for the account label tax group.
             * @example Acme Company Customers
             */
            name?: string;
            /**
             * @description Group type.
             * @default accountLabel
             * @example accountLabel
             */
            readonly groupType?: string;
            /**
             * @description If `true`, this is a system generated object.
             * @default false
             * @example true
             */
            readonly isSystemGenerated?: boolean;
            /** @description Tax solution associated with the account label tax group. */
            taxSolution?: {
                /**
                 * @description System-assigned key for the tax solution.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/23
                 */
                readonly href?: string;
                /**
                 * @description ID for the tax solution.
                 * @example Australia - GST
                 */
                id?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "tax-account-label-tax-groupRequiredProperties": Record<string, never>;
        /** @description List of the tax details. */
        "objects.tax.tax-detail": {
            /**
             * @description System-assigned key for the tax detail.
             * @example 4
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the tax detail.
             * @example State Tax Arkansas
             */
            id?: string;
            /**
             * @description URL endpoint for the tax detail.
             * @example /objects/tax/tax-detail/4
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            /**
             * @description A valid identifier for Australia GST, South Africa VAT, or United Kingdom VAT compliance. Valid identifiers are predetermined by internal Sage requirements.
             * @example GB.ECOutput_GB.ExemptGB.VAT
             */
            taxUniqueId?: string;
            /**
             * @description The category for the tax detail.
             * @default null
             * @example exempt
             * @enum {string|null}
             */
            taxRate?: null | "standard" | "reduced" | "exempt" | "zero" | "federal" | "provincial" | "reverseChargeVAT" | "intraCommunityDeliveryExemption" | "exportOutsideEUExemption" | "outsideVATScope";
            /**
             * @description Tax type.
             * @default sale
             * @example sale
             * @enum {string}
             */
            readonly taxType?: "sale" | "purchase";
            /**
             * @description Amount to include in taxable amount.
             *
             *     ** Valid values **
             *       - `fullAmount` - Include the cost from zero up to the maximum taxable amount.
             *       - `amountWithinRange` - Include the amount between the minimum and maximum taxable amount.
             * @default null
             * @example fullAmount
             * @enum {string|null}
             */
            amountToTax?: null | "fullAmount" | "amountWithinRange";
            /**
             * @description The description of the tax detail, which appears in the transaction subtotals if configured.
             * @example Standard Rate for UK Import Services
             */
            description?: string;
            /**
             * Format: percent-precision-8
             * @description The tax rate. For example, enter 10 to apply a tax of 10%.
             * @example 10.00000000
             */
            taxPercent?: string;
            taxLimit?: {
                /**
                 * @description Minimum taxable amount. If the amount of a line item is at or below this value, tax is not applied.
                 * @example 10
                 */
                minTaxable?: number;
                /**
                 * @description Maximum taxable amount. Tax is applied to line item amounts up to this value, but not over.
                 * @example 2000
                 */
                maxTaxable?: number;
                /**
                 * @description The least amount of tax that will be applied. If the calculated tax is below this amount, this amount is applied.
                 * @example 10
                 */
                minTax?: number;
                /**
                 * @description The most amount of tax that will be applied. If the calculated tax exceeds this amount, this amount is applied.
                 * @example 150
                 */
                maxTax?: number;
            };
            /**
             * @description Indicates if the tax detail is used to reclaim tax for a reverse-charge transaction. This field is most commonly used for VAT or GST tax solutions.
             * @default false
             * @example true
             */
            reverseCharge?: boolean;
            /**
             * @description Tax detail key for German entities.
             * @default null
             * @example 7
             */
            germanTaxDetailKey?: number | null;
            /**
             * @description Set to `true` to override the GL account and assign taxes to the expense account.
             * @default false
             * @example true
             */
            useExpenseAccount?: boolean;
            /**
             * @description If `true`, this is a system-generated tax detail.
             * @default false
             * @example true
             */
            readonly isSystemGenerated?: boolean;
            /** @description The tax authority for whom you are collecting taxes (such as the City of San Jose). */
            taxAuthority?: {
                /**
                 * @description Unique identifier for the legal tax authority. Useful for creating separate tax reports by jurisdictions.
                 * @example California
                 */
                id?: string;
                /**
                 * @description System-assigned key for the tax authority.
                 * @example 24
                 */
                key?: string;
                /**
                 * @description URL endpoint for the tax authority.
                 * @example /objects/tax/tax-authority/24
                 */
                readonly href?: string;
            };
            /** @description GL account to which this tax is to be assigned. */
            glAccount?: {
                /**
                 * @description Unique identifier for the GL account.
                 * @example 1200.01--Accounts Receivable - a/c label offset
                 */
                id?: string;
                /**
                 * @description System-assigned key for the GL account.
                 * @example 57
                 */
                key?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/57
                 */
                readonly href?: string;
            };
            /** @description Different tax solutions are available for different countries. Examples include Australia GST, South Africa VAT, and UK VAT. */
            taxSolution?: {
                /**
                 * @description System-assigned key for the tax solution.
                 * @example 200
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax solution.
                 * @example Australia - GST
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/200
                 */
                readonly href?: string;
            };
        };
        /** @description Tax records capture VAT or GST related tax entries for tax compliance and reporting. */
        "objects.tax.tax-record": {
            /**
             * @description System-assigned unique key for the tax record.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the tax record. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the tax record.
             * @example /objects/tax/tax-record/23
             */
            readonly href?: string;
            /** @description Information about the transaction related to the tax record. */
            txnInformation?: {
                /**
                 * @description Identifier for the transaction.
                 * @example DOC_1
                 */
                txnId?: string;
                /**
                 * Format: date
                 * @description Transaction date.
                 * @example 2023-01-01
                 */
                txnDate?: string;
                /**
                 * @description The label for the transaction.
                 * @example VI#0008#doc
                 */
                label?: string;
                /**
                 * @description The type of transaction such as AP bill, sales invoice, or general journal.
                 * @example Vendor Invoice
                 */
                txnType?: string;
                /** @description Currency details for the transaction. */
                currency?: {
                    /**
                     * @description Base currency of the entity for multi-currency companies.
                     * @example AUD
                     */
                    baseCurrency?: string;
                    /**
                     * @description The currency used in the transaction, may be different from the base currency.
                     * @example AUD
                     */
                    txnCurrency?: string;
                    /**
                     * @description Exchange rate.
                     * @example 1.0789
                     */
                    exchangeRate?: number | null;
                    /**
                     * Format: date
                     * @description Date of the exchange rate.
                     * @example 2023-01-01
                     */
                    exchangeRateDate?: string | null;
                    /**
                     * Format: decimal-precision-2
                     * @description Transaction amount of source line.
                     * @example 800.00
                     */
                    sourceAmount?: string | null;
                    /**
                     * Format: decimal-precision-2
                     * @description Transaction amount of the tax line.
                     * @example 80.00
                     */
                    taxAmount?: string | null;
                };
            };
            /**
             * Format: date
             * @description Date used to determine if the tax record should be part of a specified tax reporting period.
             * @example 2024-08-24
             */
            taxPointDate?: string;
            /**
             * @description A description for the tax record.
             * @example G10 Capital Acquisition
             */
            description?: string;
            /**
             * @description Use `inputTax` for purchase tax or `outputTax` for sales tax.
             * @default null
             * @example inputTax
             * @enum {string|null}
             */
            taxType?: null | "inputTax" | "outputTax";
            /**
             * @description Processing state of the tax record.
             * @default null
             * @example submitted
             * @enum {string|null}
             */
            state?: null | "submitted" | "posted" | "locked" | "ignored" | "filed";
            /**
             * Format: decimal-precision-2
             * @description Source amount in the base currency.
             * @example 800.00
             */
            sourceAmount?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Tax amount in the base currency.
             * @example 80.00
             */
            taxAmount?: string | null;
            /**
             * @description The VAT or GST registration number of the entity or company.
             * @example 40071007326
             */
            taxId?: string;
            /**
             * @description True if the tax record is from a sales credit memo or a purchase debit memo.
             * @default false
             * @example false
             */
            isCredit?: boolean;
            /**
             * @description This value is set to `true` if the tax record has been filed and reported to the tax authority.
             * @default false
             * @example false
             */
            isFiled?: boolean;
            /**
             * @description This value is set to `true` if the tax record is from a reversed invoice or bill.
             * @default false
             * @example false
             */
            isFromReverseTxn?: boolean;
            /**
             * @description This value is set to `true` if the tax record is eligible for Icome Tax Credit.
             * @default false
             * @example false
             */
            isReclaimable?: boolean;
            /**
             * Format: date
             * @description The date this tax record was reported to the government.
             * @example 2024-08-24
             */
            filingDate?: string | null;
            /**
             * @description Transaction type.
             * @default null
             * @example debit
             * @enum {string|null}
             */
            creditOrDebitTxn?: null | "debit" | "credit";
            /**
             * @description Name of the customer or vendor associated with the tax record.
             * @example 1099 Int
             */
            customerOrVendorName?: string;
            /**
             * @description This value is set to `true` if the tax record is for a capture payment tax.
             * @default false
             * @example false
             */
            capturePaymentTax?: boolean;
            /** @description Dimensions associated with the tax record. */
            dimensions?: {
                /** @description Department for the tax record. */
                department?: {
                    /**
                     * @description System-assigned key for the department.
                     * @example 28
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the department.
                     * @example SW
                     */
                    id?: string;
                    /**
                     * @description Name for the department.
                     * @example Software Dev
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/23
                     */
                    readonly href?: string;
                };
                /** @description Location for the tax record. */
                location?: {
                    /**
                     * @description System-assigned key for the location.
                     * @example 3345
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the location.
                     * @example 1-Lyon
                     */
                    id?: string;
                    /**
                     * @description Name for the location.
                     * @example Lyon-France
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/23
                     */
                    readonly href?: string;
                };
                /** @description Ship-to or pay-to contact. */
                contact?: {
                    /**
                     * @description System-assigned key for the contact.
                     * @example 21
                     */
                    key?: string;
                    /**
                     * @description Identifier for the contact.
                     * @example rkincaid
                     */
                    id?: string;
                    /**
                     * tax
                     * @description Tax settings needed for Intacct to calculate taxes on transactions for the contact.
                     */
                    tax?: {
                        /**
                         * @description State tax ID or VAT registration number for the contact.
                         * @example US2333
                         */
                        taxId?: string;
                        /**
                         * @description Set to `true` to enable tax calculation.
                         * @default true
                         * @example true
                         */
                        isTaxable?: boolean;
                        /** @description The contact tax group used with this contact. */
                        group?: {
                            /**
                             * @description System-assigned key for the contact tax group.
                             * @example 7
                             */
                            key?: string;
                            /**
                             * @description Identifier for the contact tax group.
                             * @example Taxes-for-residents
                             */
                            id?: string;
                            /**
                             * @description URL endpoint for the contact tax group.
                             * @example /objects/tax/contact-tax-group/7
                             */
                            readonly href?: string;
                        };
                    };
                    /**
                     * mailingAddress
                     * @description The mailing address associated with the contact.
                     */
                    readonly mailingAddress?: {
                        /**
                         * @description Country for the contact.
                         * @example unitedStates
                         */
                        readonly country?: string;
                        /**
                         * @description ISO country code. When ISO country codes are enabled in a company, both COUNTRY and ISOCOUNTRYCODE must be provided.
                         * @example US
                         */
                        readonly isoCountryCode?: string;
                    };
                };
            };
            /** @description Tax return associated with the tax record. */
            taxReturn?: {
                /**
                 * @description System-assigned key for the tax return.
                 * @example 61
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax return.
                 * @example 61
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax return.
                 * @example /objects/tax/tax-return/61
                 */
                readonly href?: string;
            };
            /** @description The journal entry associated with the source transaction. */
            journalEntry?: {
                /**
                 * @description System-assigned key for the journal entry.
                 * @example 132
                 */
                key?: string;
                /**
                 * @description Unique identifier for the journal entry.
                 * @example 132
                 */
                id?: string;
                /**
                 * @description URL endpoint for this journal entry.
                 * @example /objects/general-ledger/journal-entry/132
                 */
                readonly href?: string;
            };
            /** @description The source journal entry for the tax calculation. */
            sourceJournalEntryLine?: {
                /**
                 * @description System assigned key for the journal entry line.
                 * @example 1981
                 */
                key?: string;
                /**
                 * @description Unique identifier for journal entry line.
                 * @example 1981
                 */
                id?: string;
                /**
                 * @description URL endpoint for the journal entry line.
                 * @example /objects/general-ledger/journal-entry-line/1981
                 */
                readonly href?: string;
            };
            /** @description The tax journal entry line associates with the tax record. */
            taxJournalEntryLine?: {
                /**
                 * @description System assigned key for the journal entry line.
                 * @example 1981
                 */
                key?: string;
                /**
                 * @description Unique identifier for journal entry line.
                 * @example 1981
                 */
                id?: string;
                /**
                 * @description URL endpoint for the journal entry line.
                 * @example /objects/general-ledger/journal-entry-line/1981
                 */
                readonly href?: string;
            };
            /** @description A tax detail defines a specific type of tax that can be applied to a line item. */
            taxDetail?: {
                /**
                 * @description System-assigned key for the tax detail.
                 * @example 4
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax detail.
                 * @example State Tax Arkansas
                 */
                id?: string;
                /**
                 * @description A valid identifier for Australia GST, South Africa VAT, or United Kingdom VAT compliance. Valid identifiers are predetermined by internal Sage requirements.
                 * @example GB.ECOutput_GB.ExemptGB.VAT
                 */
                readonly taxUniqueId?: string;
                /**
                 * Format: percent-precision-2
                 * @description Tax rate percentage used to calculate tax. For example, a value of 5.00 applies a tax of 5.00%.
                 * @example 10.00
                 */
                readonly taxRate?: string;
                /**
                 * @description Tax type.
                 * @default sale
                 * @example sale
                 * @enum {string}
                 */
                readonly taxType?: "sale" | "purchase";
                /**
                 * @description Tax filing. `notReporting` tax details will not be included in tax submissions.
                 * @default reporting
                 * @example reporting
                 * @enum {string}
                 */
                readonly taxFiling?: "reporting" | "notReporting";
                /**
                 * @description URL endpoint for the tax detail.
                 * @example /objects/tax/tax-detail/4
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
    "list-tax-order-entry-tax-detail": {
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
    "create-tax-order-entry-tax-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.tax.order-entry-tax-detail"] & components["schemas"]["tax-order-entry-tax-detailRequiredProperties"];
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
    "get-tax-order-entry-tax-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Order Entry tax detail.
                 * @example 308
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
                        "ia::result"?: components["schemas"]["objects.tax.order-entry-tax-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-tax-order-entry-tax-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Order Entry tax detail.
                 * @example 308
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
    "update-tax-order-entry-tax-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Order Entry tax detail.
                 * @example 308
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.tax.order-entry-tax-detail"] & {
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
    "list-tax-order-entry-tax-schedule": {
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
    "create-tax-order-entry-tax-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.tax.order-entry-tax-schedule"] & components["schemas"]["tax-order-entry-tax-scheduleRequiredProperties"];
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
    "get-tax-order-entry-tax-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Order Entry tax schedule.
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
                        "ia::result"?: components["schemas"]["objects.tax.order-entry-tax-schedule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-tax-order-entry-tax-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Order Entry tax schedule.
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
    "update-tax-order-entry-tax-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Order Entry tax schedule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.tax.order-entry-tax-schedule"] & {
                    /** @example 162 */
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
    "list-tax-order-entry-tax-schedule-detail": {
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
    "get-tax-order-entry-tax-schedule-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the Order Entry tax schedule detail.
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
                        "ia::result"?: components["schemas"]["objects.tax.order-entry-tax-schedule-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-tax-purchasing-tax-detail": {
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
    "create-tax-purchasing-tax-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.tax.purchasing-tax-detail"] & components["schemas"]["tax-purchasing-tax-detailRequiredProperties"];
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
    "get-tax-purchasing-tax-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Purchasing tax detail.
                 * @example 304
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
                        "ia::result"?: components["schemas"]["objects.tax.purchasing-tax-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-tax-purchasing-tax-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Purchasing tax detail.
                 * @example 304
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
    "update-tax-purchasing-tax-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Purchasing tax detail.
                 * @example 304
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.tax.purchasing-tax-detail"] & {
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
    "list-tax-purchasing-tax-schedule": {
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
    "create-tax-purchasing-tax-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.tax.purchasing-tax-schedule"] & components["schemas"]["tax-purchasing-tax-scheduleRequiredProperties"];
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
    "get-tax-purchasing-tax-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Purchasing tax schedule.
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
                        "ia::result"?: components["schemas"]["objects.tax.purchasing-tax-schedule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-tax-purchasing-tax-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Purchasing tax schedule.
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
    "update-tax-purchasing-tax-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Purchasing tax schedule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.tax.purchasing-tax-schedule"] & {
                    /** @example 162 */
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
    "list-tax-purchasing-tax-schedule-detail": {
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
    "get-tax-purchasing-tax-schedule-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Purchasing tax schedule detail.
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
                        "ia::result"?: components["schemas"]["objects.tax.purchasing-tax-schedule-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-tax-tax-authority": {
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
    "create-tax-tax-authority": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.tax.tax-authority"] & components["schemas"]["tax-tax-authorityRequiredProperties"];
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
    "get-tax-tax-authority-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the tax authority.
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
                        "ia::result"?: components["schemas"]["objects.tax.tax-authority"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-tax-tax-authority-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the tax authority.
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
    "update-tax-tax-authority-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the tax authority.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.tax.tax-authority"] & {
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
    "list-tax-contact-tax-group": {
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
    "create-tax-contact-tax-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.tax.contact-tax-group"] & components["schemas"]["tax-contact-tax-groupRequiredProperties"];
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
    "get-tax-contact-tax-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contact tax group.
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
                        "ia::result"?: components["schemas"]["objects.tax.contact-tax-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-tax-contact-tax-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contact tax group.
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
    "update-tax-contact-tax-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contact tax group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.tax.contact-tax-group"] & {
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
    "list-tax-item-tax-group": {
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
    "create-tax-item-tax-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.tax.item-tax-group"] & components["schemas"]["tax-item-tax-groupRequiredProperties"];
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
    "get-tax-item-tax-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item tax group.
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
                        "ia::result"?: components["schemas"]["objects.tax.item-tax-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-tax-item-tax-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item tax group.
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
    "update-tax-item-tax-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item tax group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.tax.item-tax-group"] & {
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
    "list-tax-tax-return": {
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
    "create-tax-tax-return": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Tax return to be created */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.tax.tax-return"] & components["schemas"]["tax-tax-returnRequiredProperties"];
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
    "get-tax-tax-return-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the tax return.
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
                        "ia::result"?: components["schemas"]["objects.tax.tax-return"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-tax-tax-return-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the tax return.
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
    "update-tax-tax-return-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the tax return.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.tax.tax-return"] & {
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
    "list-tax-tax-solution": {
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
    "get-tax-tax-solution-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the tax solution.
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
                        "ia::result"?: components["schemas"]["objects.tax.tax-solution"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-tax-tax-solution-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the tax solution.
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
    "list-tax-account-label-tax-group": {
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
    "create-tax-account-label-tax-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.tax.account-label-tax-group"] & components["schemas"]["tax-account-label-tax-groupRequiredProperties"];
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
    "get-tax-account-label-tax-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account label tax group.
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
                        "ia::result"?: components["schemas"]["objects.tax.account-label-tax-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-tax-account-label-tax-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account label tax group.
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
    "update-tax-account-label-tax-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the account label tax group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.tax.account-label-tax-group"] & {
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
    "list-tax-tax-detail": {
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
    "get-tax-tax-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the tax detail.
                 * @example 304
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
                        "ia::result"?: components["schemas"]["objects.tax.tax-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-tax-tax-record": {
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
    "get-tax-tax-record-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the tax record.
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
                        "ia::result"?: components["schemas"]["objects.tax.tax-record"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
}

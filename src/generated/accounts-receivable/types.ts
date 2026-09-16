// Generated from spec/accounts-receivable.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/accounts-receivable/account-label": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List account labels
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each label. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-account-label"];
        put?: never;
        /**
         * Create an account label
         * @description Creates a new AR account label.
         */
        post: operations["create-accounts-receivable-account-label"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/account-label/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account label.
                 * @example 99
                 */
                key: number;
            };
            cookie?: never;
        };
        /**
         * Get an account label
         * @description Returns detailed information for a specified AR account label.
         */
        get: operations["get-accounts-receivable-account-label-key"];
        put?: never;
        post?: never;
        /**
         * Delete an account label
         * @description Deletes an AR account label.
         */
        delete: operations["delete-accounts-receivable-account-label-key"];
        options?: never;
        head?: never;
        /**
         * Update an account label
         * @description Updates an existing AR account label by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-account-label-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/adjustment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List adjustments
         * @description Returns a collection with a key, ID, and link for each adjustment. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-adjustment"];
        put?: never;
        /**
         * Create an adjustment
         * @description Creates a new adjustment.
         */
        post: operations["create-accounts-receivable-adjustment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/adjustment/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the adjustment.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an adjustment
         * @description Returns detailed information for a specified adjustment.
         */
        get: operations["get-accounts-receivable-adjustment-key"];
        put?: never;
        post?: never;
        /**
         * Delete an adjustment
         * @description Deletes an adjustment. An adjustment can be deleted if it has not yet been applied to an invoice.
         */
        delete: operations["delete-accounts-receivable-adjustment-key"];
        options?: never;
        head?: never;
        /**
         * Update an adjustment
         * @description Updates an existing adjustment by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-adjustment-key"];
        trace?: never;
    };
    "/workflows/accounts-receivable/adjustment/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit an adjustment
         * @description You can submit a draft adjustment to post it. Draft adjustments are adjustments that have been created, but were not yet ready to post. For more information, see [Save an adjustment as draft](https://www.intacct.com/ia/docs/en_US/help_action/Accounts_Receivable/Adjustments/How_Do_I/create-an-adjustment-htm?tocpath=Applications%7CAccounts%20Receivable%7CCredits%20and%20refunds%20%7C_____2#Saveanadjustmentasadraft).
         *
         *     When you submit a `draft` adjustment, the state changes to `posted`, indicating that the adjustment has been posted to the General Ledger.
         */
        post: operations["submit-accounts-receivable-adjustment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-receivable/adjustment/reclassify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reclassify an adjustment
         * @description You can reclassify a `posted` adjustment to update it. Only authorized users can reclassify an adjustment and the option to reclassify must be enabled for your company.
         *
         *     When an adjustment reclassification is complete the `posted` state does not change, but the adjustment is updated. Only those fields listed for the reclassify operation can be edited when you reclassify an adjustment.
         */
        post: operations["reclassify-accounts-receivable-adjustment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-receivable/adjustment/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reverse an adjustment
         * @description Reversing an adjustment tracks the changes and maintains an audit trail. You can reverse `posted` or `paid` adjustments.
         *
         *     When an adjustment reversal is complete, the state changes from `posted` or `paid` to `reversed`.
         */
        post: operations["reverse-accounts-receivable-adjustment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/adjustment-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List adjustment lines
         * @description Returns a collection with a key, ID, and link for each adjustment line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-adjustment-line"];
        put?: never;
        /**
         * Create an adjustment line
         * @description Creates a new adjustment line.
         */
        post: operations["create-accounts-receivable-adjustment-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/adjustment-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an adjustment line
         * @description Returns detailed information for a specified adjustment line.
         */
        get: operations["get-accounts-receivable-adjustment-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete an adjustment line.
         * @description Deletes an adjustment line.
         */
        delete: operations["delete-accounts-receivable-adjustment-line"];
        options?: never;
        head?: never;
        /**
         * Update an adjustment line
         * @description Updates an existing adjustment line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-adjustment-line"];
        trace?: never;
    };
    "/objects/accounts-receivable/adjustment-tax-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List adjustment tax entries
         * @description Returns a collection with a key, ID, and link for each adjustment tax entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-adjustment-tax-entry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/adjustment-tax-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the adjustment tax entry.
                 * @example 33
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an adjustment tax entry
         * @description Returns detailed information for a specified adjustment tax entry.
         */
        get: operations["get-accounts-receivable-adjustment-tax-entry-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/advance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List advances
         * @description Returns a collection with a key, ID, and link for each advance. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-advance"];
        put?: never;
        /**
         * Create an advance
         * @description Creates a new advance.
         *     If Accounts Receivable automatic summaries are enabled, you must include either a `financialEntity` in `paymentInformation` or a `glAccount` with an `undepositedGLAccountNumber` to successfully create an advance.
         *     If the Accounts Receivable application is configured to Enable Account Labels, you must include an `accountLabel` in the items array to create an advance.
         */
        post: operations["create-accounts-receivable-advance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/advance/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance.
                 * @example 757
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an advance
         * @description Returns detailed information for a specified advance.
         */
        get: operations["get-accounts-receivable-advance-key"];
        put?: never;
        post?: never;
        /**
         * Delete an advance
         * @description Deletes an advance.
         */
        delete: operations["delete-accounts-receivable-advance-key"];
        options?: never;
        head?: never;
        /**
         * Update an advance
         * @description Updates an existing advance by setting field values. Any fields not provided remain unchanged. Advances that have not yet been applied to an invoice can be updated. The General Ledger account book for the advance must also be open. If an advance was applied to an invoice and later unapplied, it cannot be updated.
         */
        patch: operations["update-accounts-receivable-advance-key"];
        trace?: never;
    };
    "/workflows/accounts-receivable/advance/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit an advance
         * @description Submit a draft AR advance when it is ready to be posted. When an advance is submitted, the state changes from `draft` to `posted`.
         */
        post: operations["submit-accounts-receivable-advance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-receivable/advance/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reverse an advance
         * @description Reversing an advance tracks the changes and maintains an audit trail. You can reverse `posted` or `paid` advances.
         *
         *     When an advance reversal is complete, the state changes from `posted` or `paid` to `reversed`.
         */
        post: operations["reverse-accounts-receivable-advance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/advance-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List advance lines
         * @description Returns a collection with a key, ID, and link for each advance line item. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-advance-line"];
        put?: never;
        /**
         * Create an advance line
         * @description Creates a new advance line.
         */
        post: operations["create-receivable-advance-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/advance-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance line.
                 * @example 41
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an advance line
         * @description Returns detailed information for a specified advance line.
         */
        get: operations["get-accounts-receivable-advance-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update an advance line
         * @description Updates an advance line.
         */
        patch: operations["update-accounts-receivable-advance-line"];
        trace?: never;
    };
    "/objects/accounts-receivable/billback-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bill back templates
         * @description Returns a collection with a key, ID, and link for each bill back template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-billback-template"];
        put?: never;
        /**
         * Create a bill back template
         * @description Creates a new bill back template. Several configuration steps must be completed before creating bill back templates. For more information, see [Set up inter-entity bill back](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_bill_back) in the Sage Intacct Help Center.
         */
        post: operations["create-accounts-receivable-billback-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/billback-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill back template.
                 * @example 17
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bill back template
         * @description Returns detailed information for a specified bill back template.
         */
        get: operations["get-accounts-receivable-billback-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a bill back template
         * @description Deletes a bill back template.
         */
        delete: operations["delete-accounts-receivable-billback-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a bill back template
         * @description Updates an existing bill back template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-billback-template-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/billback-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bill back template lines
         * @description Returns a collection with a key, ID, and link for each bill back template line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-billback-template-line"];
        put?: never;
        /**
         * Create a billback template line
         * @description Creates a new billback template line.
         */
        post: operations["create-accounts-receivable-billback-template-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/billback-template-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill back template line.
                 * @example 9
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bill back template line
         * @description Returns detailed information for a specified bill back template line.
         */
        get: operations["get-accounts-receivable-billback-template-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a billback template line
         * @description Deletes a billback template line.
         */
        delete: operations["delete-accounts-receivable-billback-template-line"];
        options?: never;
        head?: never;
        /**
         * Update a billback template line
         * @description Updates an existing billback template line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-billback-template-line"];
        trace?: never;
    };
    "/objects/accounts-receivable/customer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List customers
         * @description Returns a collection with a key, ID, and link for each customer. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-customer"];
        put?: never;
        /**
         * Create a customer
         * @description Creates a new customer.
         */
        post: operations["create-accounts-receivable-customer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the customer.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a customer
         * @description Returns detailed information for a specified customer.
         */
        get: operations["get-accounts-receivable-customer-key"];
        put?: never;
        post?: never;
        /**
         * Delete a customer
         * @description Deletes a customer. Customers that have already been used in a transaction cannot be deleted. Instead, you can update customers that have already been used to make them inactive.
         */
        delete: operations["delete-accounts-receivable-customer-key"];
        options?: never;
        head?: never;
        /**
         * Update a customer
         * @description Updates an existing customer by setting field values. Any fields not provided remain unchanged. Customers included in posted transactions will not be updated. Only new transactions and records will refer to the updated customer information.
         */
        patch: operations["update-accounts-receivable-customer-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/customer-contact": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List customer contacts
         * @description Returns a collection with a key, ID, and link for each customer contact. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-customer-contact"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-contact/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer contact.
                 * @example 18
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a customer contact
         * @description Returns detailed information for a specified customer contact.
         */
        get: operations["get-accounts-receivable-customer-contact-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-email-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List customer email templates
         * @description Returns a collection with a key, ID, and link for each customer email template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-customer-email-template"];
        put?: never;
        /**
         * Create a customer email template
         * @description Creates a new customer email template.
         */
        post: operations["create-accounts-receivable-customer-email-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-email-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the customer email template.
                 * @example 2
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a customer email template
         * @description Returns detailed information for a specified customer email template.
         */
        get: operations["get-accounts-receivable-customer-email-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a customer email template
         * @description Deletes a customer email template.
         */
        delete: operations["delete-accounts-receivable-customer-email-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a customer email template
         * @description Updates an existing customer email template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-customer-email-template-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/customer-item-cross-reference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List customer item cross references
         * @description Returns a collection with a key, ID, and link for each customer item cross reference.
         */
        get: operations["list-accounts-receivable-customer-item-cross-reference"];
        put?: never;
        /**
         * Create a customer item cross reference
         * @description Creates a new customer item cross reference.
         */
        post: operations["create-accounts-receivable-customer-item-cross-reference"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-item-cross-reference/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer item cross reference.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a customer item cross reference
         * @description Returns detailed information for a specified customer item cross reference.
         */
        get: operations["get-accounts-receivable-customer-item-cross-reference-key"];
        put?: never;
        post?: never;
        /**
         * Delete a customer item cross reference
         * @description Deletes a customer item cross reference.
         */
        delete: operations["delete-accounts-receivable-customer-item-cross-reference-key"];
        options?: never;
        head?: never;
        /**
         * Update a customer item cross reference
         * @description Updates an existing customer item cross reference by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-customer-item-cross-reference-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/customer-restricted-department": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List customer restricted departments
         * @description Returns a collection with a key, ID, and link for each customer restricted department. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-customer-restricted-department"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-restricted-department/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer restricted department.
                 * @example 77
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a customer restricted department
         * @description Returns detailed information for a specified customer restricted department.
         */
        get: operations["get-accounts-receivable-customer-restricted-department-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-restricted-location": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List customer restricted locations
         * @description Returns a collection with a key, ID, and link for each customer restricted location. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-customer-restricted-location"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-restricted-location/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer restricted location.
                 * @example 44
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a customer restricted location
         * @description Returns detailed information for a specified customer restricted location.
         */
        get: operations["get-accounts-receivable-customer-restricted-location-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List customer messages
         * @description Returns a collection with a key, ID, and link for each customer message.
         */
        get: operations["list-accounts-receivable-customer-message"];
        put?: never;
        /**
         * Create a customer message
         * @description Creates a new customer message.
         */
        post: operations["create-accounts-receivable-customer-message"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-message/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer message.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a customer message
         * @description Returns detailed information for a specified customer message.
         */
        get: operations["get-accounts-receivable-customer-message-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a customer message
         * @description Updates an existing customer message by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-customer-message-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/customer-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List customer types
         * @description Returns a collection with a key, ID, and link for each customer type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-customer-type"];
        put?: never;
        /**
         * Create a customer type
         * @description Creates a new customer type.
         */
        post: operations["create-accounts-receivable-customer-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the customer type.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a customer type
         * @description Returns detailed information for a specified customer type.
         */
        get: operations["get-accounts-receivable-customer-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete a customer type
         * @description Deletes a customer type.
         */
        delete: operations["delete-accounts-receivable-customer-type-key"];
        options?: never;
        head?: never;
        /**
         * Update a customer type
         * @description Updates an existing customer type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-customer-type-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/customer-total": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List customer totals
         * @description Returns a collection with a key, ID, and link for each customer total. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-customer-total"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-total/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer total.
                 * @example 42
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a customer total
         * @description Returns detailed information for a specified customer total.
         */
        get: operations["get-accounts-receivable-customer-total-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-electronic-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List customer electronic payments
         * @description Returns a collection with a key, ID, and link for each customer electronic payment. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-customer-electronic-payment"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-electronic-payment/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer electronic payment.
                 * @example 26
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a customer electronic payment
         * @description Returns detailed information for a specified customer electronic payment.
         */
        get: operations["get-accounts-receivable-customer-electronic-payment-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List customer groups
         * @description Returns a collection with a key, ID, and link for each customer group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-customer-group"];
        put?: never;
        /**
         * Create a customer group
         * @description Creates a new customer group.
         */
        post: operations["create-accounts-receivable-customer-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer group.
                 * @example 25
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a customer group
         * @description Returns detailed information for a specified customer group.
         */
        get: operations["get-accounts-receivable-customer-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete a customer group
         * @description Deletes a customer group.
         */
        delete: operations["delete-accounts-receivable-customer-group-key"];
        options?: never;
        head?: never;
        /**
         * Update a customer group
         * @description Updates an existing customer group by setting field values. Any fields not provided remain unchanged. Providing a new value for the `groupMembers` array replaces the entire array.
         */
        patch: operations["update-accounts-receivable-customer-group-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/delivery-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List delivery histories
         * @description Returns a collection with a key, ID, and link for each delivery history. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-delivery-history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/delivery-history/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the delivery history.
                 * @example 3
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a delivery history
         * @description Returns detailed information for a specified delivery history.
         */
        get: operations["get-accounts-receivable-delivery-history-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/invoice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List invoices
         * @description Returns a collection with a key, ID, and link for each invoice. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-invoice"];
        put?: never;
        /**
         * Create an invoice
         * @description Creates a new invoice. For the invoice to be posted, you must specify at least the account and an amount for each line item.
         */
        post: operations["create-accounts-receivable-invoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/invoice/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the invoice.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an invoice
         * @description Returns detailed information for a specified invoice.
         */
        get: operations["get-accounts-receivable-invoice-key"];
        put?: never;
        post?: never;
        /**
         * Delete an invoice
         * @description Deletes an invoice. Only invoices with a `draft` or `posted` state can be deleted.
         */
        delete: operations["delete-accounts-receivable-invoice-key"];
        options?: never;
        head?: never;
        /**
         * Update an invoice
         * @description Updates an existing invoice by setting field values. Any fields not provided remain unchanged. Allowed edits depend on the state an invoice is in. For more information, see [About editing invoices](https://www.intacct.com/ia/docs/en_US/help_action/Accounts_Receivable/Invoices/Tasks/edit-an-invoice-overview.htm).
         */
        patch: operations["update-accounts-receivable-invoice-key"];
        trace?: never;
    };
    "/workflows/accounts-receivable/invoice/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit an invoice
         * @description You can submit a draft invoice to post it. Draft invoices are invoices that have been created, but were not yet ready to post. For more information, see [Save an invoice as draft](https://www.intacct.com/ia/docs/en_US/help_action/Accounts_Receivable/Invoices/Tasks/create-invoice-htm#Saveaninvoiceasadraft) in the Sage Intacct Help Center.
         *
         *     When you submit a `draft` invoice, the invoice state changes to `posted`, indicating that the invoice has been posted to the General Ledger.
         */
        post: operations["submit-accounts-receivable-invoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-receivable/invoice/reclassify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reclassify an invoice
         * @description You can reclassify a `posted` invoice to update it. Only authorized users can reclassify an invoice and the option to reclassify must be enabled for your company.
         *
         *     When an invoice reclassification is complete the `posted` state does not change, but the invoice is updated. Only those fields listed for the reclassify operation can be edited when you reclassify an invoice.
         */
        post: operations["reclassify-accounts-receivable-invoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-receivable/invoice/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reverse an invoice
         * @description Reversing an invoice tracks the changes and maintains an audit trail. You can reverse `posted` or `paid` invoices. To reverse a `paid` invoice, first reverse the payment. For more information, see [Reverse an invoice](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reverse_ar_invoice) in the Sage Intacct Help Center.
         *
         *     When an invoice reversal is complete, the state changes from `posted` or `paid` to `reversed`.
         */
        post: operations["reverse-accounts-receivable-invoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-receivable/invoice/generate-pdf": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate a PDF of an invoice
         * @description This workflow enables you to generate a PDF of an AR invoice. The response includes a download link for the generated PDF.
         */
        post: operations["generate-pdf-accounts-receivable-invoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/invoice-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List invoice lines
         * @description Returns a collection with a key, ID, and link for each invoice line item. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-invoice-line"];
        put?: never;
        /**
         * Create an invoice line
         * @description Creates a new invoice line.
         */
        post: operations["create-accounts-receivable-invoice-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/invoice-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the invoice line item.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an invoice line
         * @description Returns detailed information for a specified invoice line item.
         */
        get: operations["get-accounts-receivable-invoice-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete an invoice line.
         * @description Deletes an invoice line.
         */
        delete: operations["delete-accounts-receivable-invoice-line"];
        options?: never;
        head?: never;
        /**
         * Update an invoice line
         * @description Updates an existing invoice line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-invoice-line"];
        trace?: never;
    };
    "/objects/accounts-receivable/invoice-tax-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List invoice tax entries
         * @description Returns a collection with a key, ID, and link for each invoice tax entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-invoice-tax-entry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/invoice-tax-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the invoice tax entry.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an invoice tax entry
         * @description Returns detailed information for a specified invoice tax entry.
         */
        get: operations["get-accounts-receivable-invoice-tax-entry-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/invoice-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List invoice summaries
         * @description Returns a collection with a key, ID, and link for each AR invoice summary. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-invoice-summary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/invoice-summary/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the invoice summary.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an invoice summary
         * @description Returns detailed information for a specified AR invoice summary.
         */
        get: operations["get-accounts-receivable-invoice-summary-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List payments
         * @description Returns a collection with a key, ID, and link for each payment. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-payment"];
        put?: never;
        /**
         * Create a payment
         * @description Creates a new payment. To successfully create a payment, you must include either the `entityId` for a `financialEntity` or the `id` for an `undepositedGLAccount` in your request.
         */
        post: operations["create-accounts-receivable-payment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/payment/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment.
                 * @example 67
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a payment
         * @description Returns detailed information for a specified payment.
         */
        get: operations["get-accounts-receivable-payment-key"];
        put?: never;
        post?: never;
        /**
         * Delete a draft payment
         * @description Deletes a draft payment.
         */
        delete: operations["delete-accounts-receivable-payment-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-receivable/payment/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit an AR payment
         * @description Submits a `draft` AR payment for completion. After a successful submission, the state of the payment is `completed`.
         *
         *     Completed payments are posted to the General Ledger and are listed on the Posted payments page in Sage Intacct.
         */
        post: operations["submit-accounts-receivable-payment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-receivable/payment/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reverse a payment
         * @description Reversing a payment tracks the changes and maintains an audit trail. You can reverse a `posted` or `paid` AR payment in cases where payments were misapplied. For more information, see [About reversing posted payments - Accounts Receivable](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_reversing_posted_AR_payment).
         *
         *     After a successful reversal, the state of the payment changes from `posted` or `paid` to `reversed`.
         */
        post: operations["reverse-accounts-receivable-payment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/payment-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List payment details
         * @description Returns a collection with a key, ID, and link for each payment detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-payment-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/payment-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment details.
                 * @example 119
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get payment details
         * @description Returns detailed information for a specified payment detail object.
         */
        get: operations["get-accounts-receivable-payment-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/payment-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List payment lines
         * @description Returns a collection with a key, ID, and link for each payment line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-payment-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/payment-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment line.
                 * @example 28
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a payment line
         * @description Returns detailed information for a specified payment line.
         */
        get: operations["get-accounts-receivable-payment-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/payment-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List payment summaries
         * @description Returns a collection with a key, ID, and link for each payment summary. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-payment-summary"];
        put?: never;
        /**
         * Create a payment summary
         * @description Creates a new payment summary. To learn about permissions and other requirements to create a summary, see [Create a summary - Accounts Receivable](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_an_ar_summary) in the Sage Intacct Help Center.
         */
        post: operations["create-accounts-receivable-payment-summary"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/payment-summary/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment summary.
                 * @example 110
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a payment summary
         * @description Returns detailed information for a specified payment summary.
         */
        get: operations["get-accounts-receivable-payment-summary-key"];
        put?: never;
        post?: never;
        /**
         * Delete a payment summary
         * @description Deletes a payment summary. To be deleted, a summary's status must be `open` and it must not contain any transactions.
         */
        delete: operations["delete-accounts-receivable-payment-summary"];
        options?: never;
        head?: never;
        /**
         * Update a payment summary
         * @description Updates an existing payment summary by setting field values. Any fields not provided remain unchanged. Automatic summaries generated by Sage Intacct cannot be updated.
         */
        patch: operations["update-accounts-receivable-payment-summary"];
        trace?: never;
    };
    "/objects/accounts-receivable/recurring-invoice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List recurring invoices
         * @description Returns a collection with a key, ID, and link for each recurring invoice. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-recurring-invoice"];
        put?: never;
        /**
         * Create a recurring invoice
         * @description Creates a new recurring invoice.
         */
        post: operations["create-accounts-receivable-recurring-invoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/recurring-invoice/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the recurring invoice.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a recurring invoice
         * @description Returns detailed information for a specified recurring invoice.
         */
        get: operations["get-accounts-receivable-recurring-invoice-key"];
        put?: never;
        post?: never;
        /**
         * Delete a recurring invoice
         * @description Deletes a recurring invoice. If a recurring invoice is no longer in use, you can delete it instead of ending the recurring schedule. For example, if a contract with a customer is permanently canceled, you can delete the recurring invoice for that customer.
         */
        delete: operations["delete-accounts-receivable-recurring-invoice-key"];
        options?: never;
        head?: never;
        /**
         * Update a recurring invoice
         * @description Updates an existing recurring invoice by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-recurring-invoice-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/recurring-invoice-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List recurring invoice lines
         * @description Returns a collection with a key, ID, and link for each recurring invoice line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-recurring-invoice-line"];
        put?: never;
        /**
         * Create a recurring invoice line
         * @description Creates a new recurring invoice line.
         */
        post: operations["create-accounts-receivable-recurring-invoice-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/recurring-invoice-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the recurring invoice line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a recurring invoice line
         * @description Returns detailed information for a specified line item in a recurring invoice.
         */
        get: operations["get-accounts-receivable-recurring-invoice-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a recurring invoice line.
         * @description Deletes a recurring invoice line.
         */
        delete: operations["delete-accounts-receivable-recurring-invoice-line"];
        options?: never;
        head?: never;
        /**
         * Update a recurring invoice line
         * @description Updates a existing recurring invoice line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-recurring-invoice-line"];
        trace?: never;
    };
    "/objects/accounts-receivable/recurring-invoice-tax-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List recurring invoice tax entries
         * @description Returns a collection with a key, ID, and link for each recurring invoice tax entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-recurring-invoice-tax-entry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/recurring-invoice-tax-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the recurring invoice tax entry.
                 * @example 36
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a recurring invoice tax entry
         * @description Returns detailed information for a specified recurring invoice tax entry.
         */
        get: operations["get-accounts-receivable-recurring-invoice-tax-entry-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/revenue-recognition-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List revenue recognition templates
         * @description Returns a collection with a key, ID, and link for each revenue recognition template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-revenue-recognition-template"];
        put?: never;
        /**
         * Create a revenue recognition template
         * @description Creates a new revenue recognition template. For more information about permissions and other requirements, see [Revenue recognition templates - AR or Order Entry](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Defining_Revenue_Recognition_Templates) in the Sage Intacct Help Center.
         */
        post: operations["create-accounts-receivable-revenue-recognition-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/revenue-recognition-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the revenue recognition template.
                 * @example 19
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a revenue recognition template
         * @description Returns detailed information for a specified revenue recognition template.
         */
        get: operations["get-accounts-receivable-revenue-recognition-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a revenue recognition template
         * @description Deletes a revenue recognition template. Only templates that are not tied to a transaction can be deleted.
         */
        delete: operations["delete-accounts-receivable-revenue-recognition-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a revenue recognition template
         * @description Updates an existing revenue recognition template by setting field values. Any fields not provided remain unchanged.
         *
         *     Changes made to a revenue recognition template will apply to schedules created after the change was made. Template changes will not apply to a schedule that's in progress.
         */
        patch: operations["update-accounts-receivable-revenue-recognition-template-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List summaries
         * @description Returns a collection with a key, ID, and link for each summary. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-summary"];
        put?: never;
        /**
         * Create a summary
         * @description Creates a new summary. To learn about permissions and other requirements to create a summary, see [Create a summary - Accounts Receivable](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_an_ar_summary) in the Sage Intacct Help Center.
         */
        post: operations["create-accounts-receivable-summary"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/summary/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the summary.
                 * @example 15
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a summary
         * @description Returns detailed information for a specified summary.
         */
        get: operations["get-accounts-receivable-summary-key"];
        put?: never;
        post?: never;
        /**
         * Delete a summary
         * @description Deletes a summary. To be deleted, a summary's status must be `open` and it must not contain any transactions.
         */
        delete: operations["delete-accounts-receivable-summary-key"];
        options?: never;
        head?: never;
        /**
         * Update a summary
         * @description Updates an existing summary by setting field values. Any fields not provided remain unchanged. Automatic summaries generated by Sage Intacct cannot be updated.
         */
        patch: operations["update-accounts-receivable-summary-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/term": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List terms
         * @description Returns a collection with a key, ID, and link for each AR term. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-term"];
        put?: never;
        /**
         * Create a term
         * @description Creates a new AR term.
         */
        post: operations["create-accounts-receivable-term"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/term/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the term.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a term
         * @description Returns detailed information for a specified term.
         */
        get: operations["get-accounts-receivable-term-key"];
        put?: never;
        post?: never;
        /**
         * Delete a term
         * @description Deletes a term. Delete terms that are no longer in use to avoid cluttering the list of active terms.
         */
        delete: operations["delete-accounts-receivable-term-key"];
        options?: never;
        head?: never;
        /**
         * Update a term
         * @description Updates an existing AR term by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-term-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/territory": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List territories
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each territory. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-territory"];
        put?: never;
        /**
         * Create a territory
         * @description Creates a new territory.
         */
        post: operations["create-accounts-receivable-territory"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/territory/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the territory.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a territory
         * @description Returns detailed information for a specified territory.
         */
        get: operations["get-accounts-receivable-territory-key"];
        put?: never;
        post?: never;
        /**
         * Delete a territory
         * @description Deletes a territory. A territory can be deleted if it hasn't been associated with a customer, transaction, or other record.
         */
        delete: operations["delete-accounts-receivable-territory-key"];
        options?: never;
        head?: never;
        /**
         * Update a territory
         * @description Updates an existing territory by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-territory-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/territory-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List territory groups
         * @description Returns a collection with a key, ID, and link for each territory group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-territory-group"];
        put?: never;
        /**
         * Create a territory group
         * @description Creates a new territory group.
         */
        post: operations["create-accounts-receivable-territory-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/territory-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the territory group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a territory group
         * @description Returns detailed information for a specified territory group.
         */
        get: operations["get-accounts-receivable-territory-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete a territory group
         * @description Deletes a territory group. Territory groups used in transactions cannot be deleted. For more information, see [Territory groups](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Territory_Group_Information) in the Sage Intacct Help Center.
         */
        delete: operations["delete-accounts-receivable-territory-group-key"];
        options?: never;
        head?: never;
        /**
         * Update a territory group
         * @description Updates an existing territory group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-territory-group-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/shipping-method": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List shipping methods
         * @description Returns a collection with a key, ID, and link for each shipping method. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-shipping-method"];
        put?: never;
        /**
         * Create a shipping method
         * @description Creates a new shipping method object.
         */
        post: operations["create-accounts-receivable-shipping-method"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/shipping-method/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the shipping method.
                 * @example 2
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a shipping method
         * @description Returns detailed information for a specified shipping method.
         */
        get: operations["get-accounts-receivable-shipping-method-key"];
        put?: never;
        post?: never;
        /**
         * Delete a shipping method
         * @description Deletes a shipping method.
         */
        delete: operations["delete-accounts-receivable-shipping-method-key"];
        options?: never;
        head?: never;
        /**
         * Update a shipping method
         * @description Updates an existing shipping method by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-shipping-method-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/manual-deposit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List manual deposits
         * @description Returns a collection with a key, ID, and link for each manual deposit. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-manual-deposit"];
        put?: never;
        /**
         * Create a manual deposit
         * @description Creates a new manual deposit.
         */
        post: operations["create-accounts-receivable-manual-deposit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/manual-deposit/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the manual deposit.
                 * @example 62
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a manual deposit
         * @description Returns detailed information for a specified manual deposit.
         */
        get: operations["get-accounts-receivable-manual-deposit-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/manual-deposit-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List manual deposit lines
         * @description Returns a collection with a key, ID, and link for each manual deposit line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable.manual-deposit-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/manual-deposit-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the manual deposit line.
                 * @example 286
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a manual deposit line
         * @description Returns detailed information for a specified manual deposit line.
         */
        get: operations["get-accounts-receivable.manual-deposit-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/manual-deposit-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List manual deposit summaries
         * @description Returns a collection with a key, ID, and link for each AR manual deposit summary. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-manual-deposit-summary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/manual-deposit-summary/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the manual deposit summary.
                 * @example 25
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a manual deposit summary
         * @description Returns detailed information for a specified manual deposit summary.
         */
        get: operations["get-accounts-receivable-manual-deposit-summary-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/dunning-level": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List dunning levels
         * @description Returns a collection with a key, ID, and link for each dunning level. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-dunning-level"];
        put?: never;
        /**
         * Create a dunning level
         * @description Creates a new dunning level. Use naming conventions to establish levels for different customer types, company entities, and amount owed ranges. To learn more, see [Add dunning levels](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_dunning_levels) in the Sage Intacct Help Center.
         */
        post: operations["create-accounts-receivable-dunning-level"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/dunning-level/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the dunning level.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a dunning level
         * @description Returns detailed information for a specified dunning level.
         */
        get: operations["get-accounts-receivable-dunning-level-key"];
        put?: never;
        post?: never;
        /**
         * Delete a dunning level
         * @description Deletes a dunning level.
         */
        delete: operations["delete-accounts-receivable-dunning-level-key"];
        options?: never;
        head?: never;
        /**
         * Update a dunning level
         * @description Updates an existing dunning level by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-dunning-level-key"];
        trace?: never;
    };
    "/objects/accounts-receivable/dunning-customer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List dunning customers
         * @description Returns a collection with a key, ID, and link for each dunning customer. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-dunning-customer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/dunning-customer/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the dunning customer.
                 * @example 18
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a dunning customer
         * @description Returns detailed information for a specified dunning customer.
         */
        get: operations["get-accounts-receivable-dunning-customer-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/dunning-invoice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List dunning invoices
         * @description Returns a collection with a key, ID, and link for each dunning invoice. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-dunning-invoice"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/dunning-invoice/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the dunning invoice.
                 * @example 43
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a dunning invoice
         * @description Returns detailed information for a specified dunning invoice.
         */
        get: operations["get-accounts-receivable-dunning-invoice-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/dunning-notice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List dunning notices
         * @description Returns a collection with a key, ID, and link for each dunning notice. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-receivable-dunning-notice"];
        put?: never;
        /**
         * Create a dunning notice
         * @description Creates a new dunning notice.
         */
        post: operations["create-accounts-receivable-dunning-notice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/dunning-notice/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the dunning notice.
                 * @example 11
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a dunning notice
         * @description Returns detailed information for a specified dunning notice.
         */
        get: operations["get-accounts-receivable-dunning-notice-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-refund": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List customer refunds
         * @description Returns a collection with a key, ID, and link for each customer refund.
         */
        get: operations["list-accounts-receivable-customer-refund"];
        put?: never;
        /**
         * Create a customer refund
         * @description Creates a new customer refund.
         */
        post: operations["create-accounts-receivable-customer-refund"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-refund/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer refund.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a customer refund
         * @description Returns detailed information for a specified customer refund.
         */
        get: operations["get-accounts-receivable-customer-refund-key"];
        put?: never;
        post?: never;
        /**
         * Delete a customer refund
         * @description Deletes a customer refund.
         */
        delete: operations["delete-accounts-receivable-customer-refund-key"];
        options?: never;
        head?: never;
        /**
         * Update a customer refund
         * @description Updates an existing customer refund by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-receivable-customer-refund-key"];
        trace?: never;
    };
    "/workflows/accounts-receivable/customer-refund/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit a customer refund
         * @description Submit a draft customer refund when it is ready to be posted. When a refund is submitted, the state changes from `draft` to `posted` and the credits in the refund are paid.
         *
         *     For more information, see [Customer refunds overview](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Overview_of_customer_refunds) in the Sage Intacct Help Center.
         */
        post: operations["submit-accounts-receivable-customer-refund"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-receivable/customer-refund/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reverse a customer refund
         * @description If a customer refund was posted by mistake, reverse the refund. When a refund is reversed, the state changes from `posted` to `voided`.
         *
         *     For more information, see [Customer refunds overview](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Overview_of_customer_refunds) in the Sage Intacct Help Center.
         */
        post: operations["reverse-accounts-receivable-customer-refund"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-refund-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List customer refund lines
         * @description Returns a collection with a key, ID, and link for each accounts receivable customer refund line.
         */
        get: operations["list-accounts-receivable-customer-refund-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-refund-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer refund line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a customer refund line
         * @description Returns detailed information for a specified customer refund line.
         */
        get: operations["get-accounts-receivable-customer-refund-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-refund-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List customer refund details
         * @description Returns a collection with a key, ID, and link for each customer refund detail object.
         */
        get: operations["list-accounts-receivable-customer-refund-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-receivable/customer-refund-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer refund detail object.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get customer refund details
         * @description Returns detailed information for a specified customer refund detail object.
         */
        get: operations["get-accounts-receivable-customer-refund-detail-key"];
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
        /** @description AR account labels provide more descriptive names for accounts. */
        "objects.accounts-receivable.account-label": {
            /**
             * @description System-assigned key for the AR account label.
             * @example 8
             */
            readonly key?: string;
            /**
             * @description Name or other unique identifier for the account label. This unique identifier cannot be modified.
             * @example Software
             */
            id?: string;
            /**
             * @description Endpoint for the AR account label.
             * @example /objects/accounts-receivable/account-label/23
             */
            readonly href?: string;
            /**
             * @description A note about the purpose and use of the account label.
             * @example Software sales
             */
            description?: string;
            /**
             * @description Set to true to enable Advanced Tax to calculate the sales tax automatically.
             * @default false
             * @example false
             */
            isTaxable?: boolean;
            /**
             * @description Set to true if the account label is for a subtotal type. This field is applicable only for entities that use the Avalara AvaTax solution. By default, Accounts Receivable is automatically configured to display tax and subtotal fields for invoices.
             * @default false
             * @example false
             */
            isSubtotal?: boolean;
            /**
             * @description Set to true only if the account label is for a subtotal and the subtotal is for a tax, such as sales tax or excise tax. Do not enable for other subtotals, such as discounts, shipping, or handling charges. This field is applicable only for entities that use the Avalara AvaTax.
             * @default false
             * @example true
             */
            isTax?: boolean;
            /** @description Tax group to which the label is assigned. Account label tax groups organize taxable account labels under one tax category. Relevant only for companies configured to use Advanced Tax, and only if this account label is not a subtotal. */
            taxGroup?: {
                /**
                 * @description System-assigned key for the tax group.
                 * @example 23
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the tax group.
                 * @example Goods Exempt Rate - CA
                 */
                id?: string | null;
                /**
                 * @description Endpoint URL for the tax group.
                 * @example /objects/tax/account-label-tax-group/23
                 */
                readonly href?: string;
            };
            /**
             * @description AR account labels Tax Code.
             * @example CST
             */
            taxCode?: string | null;
            /** @description The general ledger account where the system posts offsets to items posted to this label. This is typically a receivables account. */
            offsetGLAccount?: {
                /**
                 * @description System-assigned key for the offset general ledger account.
                 * @example 2
                 */
                key?: string | null;
                /**
                 * @description Account number for the offset general ledger account.
                 * @example 1215--EquipmentOffset
                 */
                id?: string | null;
                /** @example /objects/general-ledger/account/2 */
                readonly href?: string;
            };
            /** @description General ledger account this AR account label is assigned to. */
            glAccount?: {
                /**
                 * @description Endpoint for the glaccount.
                 * @example /objects/general-ledger/account/356
                 */
                readonly href?: string;
                /**
                 * @description General ledger account number.
                 * @example 1501
                 */
                id?: string;
                /**
                 * @description System-assigned key for the general ledger account.
                 * @example 356
                 */
                key?: string;
            };
            revenueRecognitionTemplate?: {
                /**
                 * @description System-assigned key for the revenue recognition template.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the revenue recognition template.
                 * @example Straight Line
                 */
                id?: string | null;
                /**
                 * @description URL for the revenue recognition template.
                 * @example /objects/accounts-receivable/revenue-recognition-template/1
                 */
                readonly href?: string;
            };
            deferredRevenueGLAccount?: {
                /**
                 * @description System-assigned key for the revenue gl account.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the revenue gl account.
                 * @example 1001
                 */
                id?: string | null;
                /**
                 * @description URL for the deffer revenue gl account template.
                 * @example /objects/general-ledger/account/356
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "accounts-receivable-account-labelRequiredProperties": Record<string, never>;
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
        /** @description An AR adjustment is a transaction that applies a credit or debit in order to modify the amount owed by a customer. */
        "objects.accounts-receivable.adjustment": {
            /**
             * @description System-assigned key for the AR adjustment.
             * @example 15
             */
            readonly key?: string;
            /**
             * @description ID for the AR adjustment. This value is the same as key for this object.
             * @example 15
             */
            readonly id?: string;
            /**
             * @description Record type to identify the type of transaction. An AR adjustment has a record type of `ra`.
             * @example ra
             */
            readonly txnType?: string;
            /**
             * @description Number that can be used to track the AR adjustment.
             * @example ADJ001
             */
            adjustmentNumber?: string | null;
            /**
             * @description URL endpoint for the AR adjustment.
             * @example /objects/accounts-receivable/adjustment/15
             */
            readonly href?: string;
            /** @description Associated contacts for the AR adjustment. */
            contacts?: {
                /**
                 * billTo
                 * @description Customer contact to invoice for this sale.
                 */
                billTo?: {
                    /**
                     * @description System-assigned key for the contact.
                     * @example 916
                     */
                    key?: string;
                    /**
                     * @description Name of the contact.
                     * @example Power Aerospace Materials (C1)
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/916
                     */
                    readonly href?: string;
                };
                /**
                 * shipTo
                 * @description Customer contact for shipping.
                 */
                shipTo?: {
                    /**
                     * @description System-assigned key for the contact.
                     * @example 312
                     */
                    key?: string;
                    /**
                     * @description Name of the ship-to contact.
                     * @example Power Aerospace Materials(C1)
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/312
                     */
                    readonly href?: string;
                    /**
                     * tax
                     * @description Tax related information for the ship-to contact.
                     */
                    tax?: {
                        /**
                         * @description Tax identification number.
                         * @example 252-85-7897
                         */
                        taxId?: string | null;
                        /** @description Contact tax group associated with the ship-to contact. */
                        group?: {
                            /**
                             * @description System-assigned key for the group.
                             * @example 288
                             */
                            key?: string | null;
                            /**
                             * @description Unique identifier for the group.
                             * @example Goods Zero Rate - CA
                             */
                            id?: string | null;
                            /**
                             * @description URL endpoint for the group.
                             * @example /objects/tax/contact-tax-group/288
                             */
                            readonly href?: string;
                        };
                    };
                };
            };
            /**
             * @description Processing state of the AR adjustment.
             *     The state can be modified through workflow operations like Submit and Reverse, but cannot be changed using the PATCH operation.
             * @default posted
             * @example paid
             * @enum {string}
             */
            state?: "reversed" | "reversal" | "draft" | "noValue" | "posted" | "paid" | "partiallyPaid" | "selected";
            /**
             * @description Description of the AR adjustment.
             * @example Computer Hardware & Software Expenses 03/01/20 - 08/31/21 Subscription charges.
             */
            description?: string | null;
            /**
             * @description Invoice number selected as a reference for the adjustment.
             * @example INV-1602
             */
            documentNumber?: string;
            /** @description For multi-currency companies, the base currency for the adjustment. */
            baseCurrency?: {
                /**
                 * @description Base currency
                 * @example USD
                 */
                currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total paid amount.
                 * @example 1117.8
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total selected amount.
                 * @example 100.10
                 */
                readonly totalSelected?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount due.
                 * @example 251464.01
                 */
                totalDue?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total entered
                 * @example 100.20
                 */
                readonly totalAmountEntered?: string;
                /**
                 * Format: date
                 * @description Payment date
                 * @example 2022-11-01
                 */
                paidDate?: string | null;
            };
            /** @description For multi-currency companies, the transaction currency for the adjustment. */
            txnCurrency?: {
                /**
                 * @description Transaction currency
                 * @example INR
                 */
                currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount entered.
                 * @example 1000.20
                 */
                readonly totalEntered?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount selected.
                 * @example 1000.05
                 */
                readonly totalSelected?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount paid.
                 * @example 2000.50
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount due.
                 * @example 100.50
                 */
                readonly totalDue?: string;
            };
            /** @description Exchange rate details used to calculate the base amount. */
            exchangeRate?: {
                /**
                 * Format: date
                 * @description Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                 * @example 2021-01-23
                 */
                date?: string;
                /**
                 * @description Exchange rate used to calculate the base amount from the transaction amount.
                 * @example 1.0789
                 */
                rate?: string;
                /**
                 * @description Exchange rate type used to calculate the base amount from the transaction amount.
                 * @example 1
                 */
                typeId?: string;
            };
            /**
             * @description Key for the source module from which the transaction was created.
             * @example 3.AR
             */
            readonly moduleKey?: string;
            /** @description The customer who is the target of the AR adjustment. */
            customer?: {
                /**
                 * @description System-assigned key for the customer.
                 * @example 16
                 */
                key?: string;
                /**
                 * @description ID of the customer.
                 * @example Customer_01
                 */
                id?: string;
                /**
                 * @description Name of the customer.
                 * @example Logic Solutions
                 */
                name?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Transaction total due for the customer.
                 * @example 1125.10
                 */
                readonly totalDue?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/16
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Date the adjustment was created.
             * @example 2021-01-23
             */
            createdDate?: string;
            /**
             * Format: date
             * @description GL posting date.
             * @example 2023-03-24
             */
            glPostingDate?: string;
            /** @description Tax solution details for this adjustment. */
            taxSolution?: {
                /**
                 * @description System-assigned key to uniquely identify the tax solution.
                 * @example 4
                 */
                key?: string | null;
                /**
                 * @description Name or other unique identifier for the tax solution.
                 * @example Australia GST
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/4
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies whether the transaction is a regular invoice (`invoice`) or an electronic invoice (eInvoice).
             * @example invoice
             * @enum {string}
             */
            readonly invoiceType?: null | "invoice" | "eInvoice";
            /**
             * @description Invoice mode for France e-invoicing workflows; applicable only for France e-invoice enabled entities.
             *     Specifies the invoice mode based on invoiceType. For eInvoice, specify b1 or s1.
             *     Supported values:
             *
             *
             *
             *
             *
             *       - `b1` - Submission of an e-invoice for goods.
             *       - `s1` - Submission of an e-invoice for services.
             *
             *     Leave this field blank when `invoiceType` is `invoice`.
             * @example b1
             * @enum {string}
             */
            readonly invoiceMode?: null | "b1" | "s1";
            /**
             * @description Current status of an e-invoice; applicable only when selected invoice type is eInvoice.
             *
             *     Supported statuses:
             *     - `submitted` - The supplier submits its invoice or credit note to the public invoicing portal or its registered private platform.
             *     - `issuedByPlatform` - The invoice has been processed on the supplier’s platform and issued to the buyer.
             *     - `fileUploaded` - The invoice file has been uploaded to the platform.
             *     - `madeAvailable` - The invoice has been made available to the buyer on the public invoicing portal or its registered private platform.
             *     - `inHand` - The invoice is assumed by the buyer for processing.
             *     - `refused` - The invoice has been refused by the recipient for business reasons. A complete list of reasons for refusal is available in the document "Annex 1 - Semantic Format FE e-invoicing - Flows 1 & 2" on the "Reason for refusal" tab.
             *     - `paymentSent` - The bank transfer flow has been sent to the supplier / The reimbursement flow has been sent to the buyer.
             *     - `paymentReceived` - The supplier has received payment of the invoice. This status is mandatory for supply of services (except VAT on debits and excluding reverse charge transactions).
             *     - `disputed` - There is a dispute regarding the invoice. This may ultimately lead to refusal or approval by the buyer.
             *     - `notSent` - The invoice has not been sent to the platform.
             *     - `inTransit` - The invoice has been sent and is in transit between platforms.
             *     - `approved` - The invoice has been approved by the buyer.
             *     - `receivedByPlatform` - The invoice has been received by the public invoicing portal or the buyer’s registered private platform but has not yet been made available to the buyer.
             *     - `rejectedByPlatform` - The invoice can be automatically rejected by the platform on technical grounds (e.g. format, non-compliance with the standard, etc.). When the transmit platform rejects the invoice, the invoice must be corrected by its issuer and resubmitted to the platform.
             *     - `suspended` - Processing of the invoice is temporarily suspended.
             *     - `completed` - The invoice processing lifecycle is completed.
             *     - `partiallyApproved` - The invoice has been partially approved.
             * @example paymentReceived
             * @enum {string}
             */
            readonly eInvoiceStatus?: null | "submitted" | "issuedByPlatform" | "fileUploaded" | "madeAvailable" | "inHand" | "refused" | "paymentSent" | "paymentReceived" | "disputed" | "notSent" | "inTransit" | "approved" | "receivedByPlatform" | "rejectedByPlatform" | "suspended" | "completed" | "partiallyApproved";
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
            /** @description The payment summary details for this adjustment. Summaries are collections of the same types of transactions grouped together for processing. */
            adjustmentSummary?: {
                /**
                 * @description URL endpoint for the summary.
                 * @example /objects/accounts-receivable/summary/280
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key to uniquely identify the summary.
                 * @example 280
                 */
                key?: number;
                /**
                 * @description Name for the AR summary. The system uses this name to identify the summary throughout the Accounts Receivable application.
                 * @example AR Summary: 2022/01/01 Batch
                 */
                id?: string;
            };
            /** @description Line items of the AR adjustment. */
            lines?: components["schemas"]["objects.accounts-receivable.adjustment-line"][];
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Date and time of the submission.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            entity?: components["schemas"]["entity-ref"];
        };
        "accounts-receivable-adjustmentRequiredProperties": {
            /** @example 1 */
            customer?: unknown;
            /** @example USD */
            txnCurrency?: unknown;
            /** @example AR Summary: 2022/01/01 Batch */
            adjustmentSummary?: unknown;
            lines?: {
                /** @example 2995 */
                glAccount?: unknown;
                /** @example 100 */
                txnCurrency?: unknown;
                /**
                 * @example {
                 *       "location": {
                 *         "id": "1"
                 *       }
                 *     }
                 */
                dimensions?: {
                    /** @example 1 */
                    location?: unknown;
                };
            }[];
        };
        "accounts-receivable-adjustment-actions-submit-request": {
            /**
             * @description System-assigned key for the adjustment.
             * @example 11
             */
            key: string;
        };
        "accounts-receivable-adjustment-actions-submit-response": {
            /**
             * @description System-assigned key for the adjustment.
             * @example 11
             */
            key?: string;
            /**
             * @description Unique ID for the adjustment.
             * @example 11
             */
            id?: string;
            /**
             * @description URL endpoint for the adjustment.
             * @example /objects/accounts-receivable/adjustment/11
             */
            href?: string;
            /**
             * @description State of the adjustment.
             * @example posted
             */
            state?: string;
        };
        "accounts-receivable-adjustment-actions-reclassify-request": {
            /**
             * @description System-assigned key for the adjustment.
             * @example 11
             */
            key: string;
            /**
             * @description Unique ID for the adjustment.
             * @example 11
             */
            id?: string;
            /**
             * @description Unique adjustment number specified when creating an adjustment or auto-generated when document sequencing is configured.
             * @example ADJ001
             */
            adjustmentNumber?: string;
            /**
             * @description Invoice number specified as a reference for the adjustment.
             * @example INV-1602
             */
            documentNumber?: string;
            /**
             * @description Description of the adjustment.
             * @example Computer Hardware & Software Expenses 03/01/24 - 08/31/25 Subscription charges.
             */
            description?: string;
            /** @description Supporting document for the adjustment. */
            attachment?: {
                /**
                 * @description System-assigned key for the attachment.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the attachment.
                 * @example Sales01
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/1
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the adjustment.
             * @example /objects/accounts-receivable/adjustment/11
             */
            readonly href?: string;
            /** @description Line items of the adjustment. */
            lines?: components["schemas"]["objects.accounts-receivable.adjustment-line"][];
        };
        "accounts-receivable-adjustment-actions-reclassify-response": {
            /**
             * @description System-assigned key for the adjustment.
             * @example 132
             */
            key?: string;
            /**
             * @description Unique ID for the adjustment.
             * @example 132
             */
            id?: string;
            /**
             * @description URL endpoint for the adjustment.
             * @example /objects/accounts-receivable/adjustment/11
             */
            href?: string;
            /**
             * @description State of the adjustment.
             * @example posted
             */
            state?: string;
        };
        "accounts-receivable-adjustment-actions-reverse-request": {
            /**
             * @description System-assigned key for the adjustment.
             * @example 23
             */
            key: string;
            /**
             * Format: date
             * @description Date the transaction is reversed.
             * @example 2025-04-15
             */
            reversedDate: string;
            /**
             * @description Notes or comments about the reason for the the adjustment reversal.
             * @example Reversed the adjustment due to duplicate entry
             */
            memo?: string;
        };
        "accounts-receivable-adjustment-actions-reverse-response": {
            /**
             * @description System-assigned key for the adjustment.
             * @example 23
             */
            key?: string;
            /**
             * @description Unique ID for the adjustment.
             * @example 23
             */
            id?: string;
            /**
             * @description URL endpoint for the adjustment.
             * @example /objects/accounts-receivable/adjustment/23
             */
            href?: string;
            /**
             * @description State of the adjustment after reversal.
             * @example reversal
             */
            state?: string;
        };
        /** @description Line items in an AR adjustment represent debits or credits to modify the amount owed by a customer. */
        "objects.accounts-receivable.adjustment-line": {
            /**
             * @description ID for the AR adjustment line item.
             * @example 125
             */
            readonly id?: string;
            /**
             * @description System-assigned key for the AR adjustment line item.
             * @example 125
             */
            readonly key?: string;
            /**
             * @description Memo to describe the line item.
             * @example 50 USD credit
             */
            memo?: string;
            /**
             * @description Number of the line item.
             * @example 125
             */
            readonly lineNumber?: string;
            /** @description Base currency for the line item. */
            readonly baseCurrency?: {
                /**
                 * @description Base currency
                 * @example USD
                 */
                readonly currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Base amount
                 * @example 120.20
                 */
                readonly amount?: string;
            };
            /** @description Transaction currency for the line item. */
            txnCurrency?: {
                /**
                 * @description Transaction currency
                 * @example INR
                 */
                currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Transaction amount
                 * @example 145
                 */
                amount?: string;
            };
            /** @description Exchange rate details used to calculate the base amount. */
            exchangeRate?: {
                /**
                 * Format: date
                 * @description Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                 * @example 2021-01-23
                 */
                date?: string;
                /**
                 * @description Exchange rate used to calculate the base amount from the transaction amount.
                 * @example 1.0789
                 */
                rate?: string;
                /**
                 * @description Exchange rate type used to calculate the base amount from the transaction amount.
                 * @example 1
                 */
                typeId?: string;
            };
            /**
             * @description Record type
             * @example ra
             */
            readonly adjustmentType?: string;
            /**
             * @description Indicates whether the line item amount includes taxes.
             * @default false
             * @example false
             */
            readonly isTax?: boolean;
            /** @description Label for the AR account. */
            accountLabel?: {
                /**
                 * @description System-assigned key for the AR account label.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the AR account label.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description Endpoint for the AR account label.
                 * @example /objects/accounts-receivable/account-label/9
                 */
                readonly href?: string;
            };
            /** @description Tax Entries of the AR adjustment */
            taxEntries?: components["schemas"]["objects.accounts-receivable.adjustment-tax-entry"][];
            /** @description Header level details for the AR adjustment's line entries. */
            arAdjustment?: {
                /**
                 * @description System-assigned key for the AR adjustment.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description ID of the AR adjustment.
                 * @example 10
                 */
                id?: string;
                /**
                 * @description Endpoint for the AR adjustment.
                 * @example /objects/accounts-receivable/adjustment/1
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /** @description Department to assign the expense amount to. */
                department?: {
                    /**
                     * @description System-assigned key for the department.
                     * @example 1
                     */
                    key?: string;
                    /**
                     * @description ID of the department.
                     * @example 1
                     */
                    id?: string;
                    /**
                     * @description Name of the department.
                     * @example Accounting
                     */
                    readonly name?: string;
                    /**
                     * @description Endpoint for the department.
                     * @example /objects/company-config/department/1
                     */
                    readonly href?: string;
                };
                /** @description Location to assign the expense amount to. */
                location?: {
                    /**
                     * @description System-assigned key for the location.
                     * @example 1
                     */
                    key?: string;
                    /**
                     * @description ID of the location.
                     * @example 1
                     */
                    id?: string;
                    /**
                     * @description Name of the location.
                     * @example India
                     */
                    readonly name?: string;
                    /**
                     * @description Endpoint of the location.
                     * @example /objects/company-config/location/1
                     */
                    readonly href?: string;
                };
            };
            glAccount?: components["schemas"]["gl-account-ref"];
            /** @description An alternative AR offset account to override the default offset GL account for the adjustment line item. */
            overrideOffsetGLAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 384
                 */
                key?: string;
                /**
                 * @description Unique ID for the GL account.
                 * @example 1200
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example Accounts Receivable
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/384
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "accounts-receivable-adjustment-lineRequiredProperties": {
            txnCurrency?: Record<string, never>;
        };
        /** @description For VAT enabled transactions, adjustment line items will have tax entries. */
        "objects.accounts-receivable.adjustment-tax-entry": {
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
            /** @description Order Entry tax details associated with the adjustment tax entry. */
            orderEntryTaxDetail?: {
                /**
                 * @description Unique key for the tax detail.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax detail.
                 * @example Alaska Tax Detail
                 */
                id?: string;
                /**
                 * @description URL endpoint of the tax detail.
                 * @example /objects/tax/order-entry-tax-detail/1
                 */
                readonly href?: string;
            };
            /**
             * adjustment-line
             * @description Adjustment line item that the adjustment tax entry is associated with.
             */
            readonly adjustmentLine?: {
                /**
                 * @description Unique identifier for the adjustment line. This value is the same as the `key` for this object.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the adjustment line.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the adjustment line.
                 * @example /objects/accounts-receivable/adjustment-line/100
                 */
                readonly href?: string;
            };
        };
        /** @description Advances record an advance payment from a customer. This object provides header information for an Accounts Receivable advance transaction. */
        "objects.accounts-receivable.advance": {
            /**
             * @description System-assigned unique key for the advance.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description AR advance ID. This value is the same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description Record type to identify the type of transaction. AR advances have a record type of `rr`.
             * @example rr
             */
            readonly recordType?: string;
            /**
             * @description URL endpoint for the advance.
             * @example /objects/accounts-receivable/advance/23
             */
            readonly href?: string;
            /**
             * @description This is a number that might be useful in searches or reports, such as a transaction number from the bank, a purchase order number, or an account number. This number is listed in the GL Details report.
             * @example INV-902852
             */
            referenceNumber?: string;
            /**
             * @description Brief description of the advance payment.
             * @example 08/31/21 Subscription charges
             */
            description?: string;
            /**
             * @description If document sequencing is enabled, specifies the auto-generated document sequence number for the advance. If  document sequencing is not enabled, this field is null.
             * @example Advance-001
             */
            readonly advanceNumber?: string | null;
            /**
             * @description Processing state of the AR advance.
             *     The state can be modified through workflow operations like Submit and Reverse, but cannot be changed using the PATCH operation.
             * @example posted
             * @enum {string}
             */
            state?: "reversed" | "reversal" | "draft" | "reconciled" | "fullyApplied" | "partiallyApplied" | "posted" | "selected";
            /**
             * Format: decimal-precision-2
             * @description Total amount of the AR advance.
             * @example 100.00
             */
            totalEntered?: string;
            /**
             * Format: decimal-precision-2
             * @description Total transaction amount of the AR advance.
             * @example 200.20
             */
            txnTotalEntered?: string;
            /** @description Payment information for the AR advance. */
            paymentInformation?: {
                /**
                 * Format: date
                 * @description Date the advance was paid.
                 * @example 2021-01-23
                 */
                paymentDate?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount paid for the advance.
                 * @example 100
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount selected for the advance.
                 * @example 100.10
                 */
                readonly totalSelected?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount selected.
                 * @example 1000.05
                 */
                readonly txnTotalSelected?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount paid.
                 * @example 2000.50
                 */
                readonly txnTotalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount due for the advance.
                 * @example 251464.01
                 */
                readonly totalDue?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount due for the advance.
                 * @example 10
                 */
                readonly totalTxnAmountDue?: string;
                /**
                 * @description Payment method for the advance.
                 * @example printedCheck
                 * @enum {string}
                 */
                paymentMethod?: "printedCheck" | "creditCard" | "eft" | "cash" | "ach";
                /**
                 * Format: date
                 * @description The date on which the check, cash, credit card, or bank transfer for the advance was received.
                 * @example 2024-01-25
                 */
                receiptDate?: string;
                /** @description Financial account from which the reconciliation is done. */
                financialEntity?: {
                    /**
                     * @description Unique key for the bank account.
                     * @example 1002
                     */
                    readonly key?: string;
                    /**
                     * @deprecated
                     * @description This field has been deprecated. Use the `entityId` field instead.
                     * @example BOA
                     */
                    id?: string;
                    /**
                     * @description Account number or other unique identifier for the bank account.
                     * @example BOA
                     */
                    entityId?: string;
                    /**
                     * Format: decimal-precision-2
                     * @description Transaction amount recorded for the transaction by the bank.
                     * @example 10.00
                     */
                    readonly txnAmount?: string;
                    /**
                     * Format: decimal-precision-2
                     * @description Base amount recorded for the transaction by the bank.
                     * @example 10.00
                     */
                    readonly baseAmount?: string;
                    /**
                     * @description The bank's currency.
                     * @example CAD
                     */
                    readonly currency?: string;
                    /**
                     * @description The bank's base currency.
                     * @example USD
                     */
                    readonly baseCurrency?: string;
                    /**
                     * @description URL endpoint for the bank account.
                     * @example /objects/cash-management/bank-account/10
                     */
                    readonly href?: string;
                };
                currency?: components["schemas"]["currency"];
            };
            /** @description Reconciliation information for the advance transaction. */
            readonly reconciliationGroup?: {
                /**
                 * Format: date
                 * @description Automatically added when reconciliation is complete.
                 * @example 2021-01-23
                 */
                readonly clearingDate?: string;
                /**
                 * @description Status to indicate the reconciliation stage of the advance. If `true`, the advance has been reconciled. If `false`, the advance has not been reconciled. If `matched`, the advance has been matched for reconciliation, which is pending.
                 * @default false
                 * @example false
                 * @enum {string}
                 */
                readonly cleared?: "true" | "false" | "matched";
            };
            /**
             * @description Indicates whether the advance is system-generated.
             * @default false
             * @example false
             */
            readonly isSystemGenerated?: boolean;
            /**
             * Format: date
             * @description Date the advance was created.
             * @example 2024-02-06
             */
            readonly createdDate?: string;
            /** @description Deposit associated with the advance. */
            readonly deposit?: {
                /**
                 * @description Unique key for the deposit.
                 * @example 10
                 */
                readonly key?: string;
                /**
                 * @description ID for the deposit.
                 * @example 10
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the deposit.
                 * @example /objects/cash-management/deposit/10
                 */
                readonly href?: string;
            };
            /** @description The payment summary details for this advance. Summaries are collections of the same types of transactions grouped together for processing. */
            advanceSummary?: {
                /**
                 * @description URL endpoint for the summary.
                 * @example /objects/accounts-receivable/summary/280
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the summary.
                 * @example 280
                 */
                key?: string;
                /**
                 * @description ID for the summary.
                 * @example 280
                 */
                id?: string;
            };
            /** @description Customer from whom the advance was received. */
            customer?: {
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/23
                 */
                readonly href?: string;
                /**
                 * @description ID of the customer.
                 * @example Customer_01
                 */
                id?: string;
                /**
                 * @description Unique key for the customer.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Name of the customer.
                 * @example Logic Solutions
                 */
                name?: string;
            };
            /** @description GL account associated with the advance. */
            glAccount?: {
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/356
                 */
                readonly href?: string;
                /**
                 * @description General ledger account number.
                 * @example 1501
                 */
                id?: string;
                /**
                 * @description Unique key for the general ledger account.
                 * @example 356
                 */
                key?: string;
                /**
                 * @description Undeposited funds account number for the general ledger account.
                 * @example 100444
                 */
                undepositedGLAccountNumber?: string;
            };
            /** @description Supporting document for the advance. */
            attachment?: {
                /**
                 * @description System-assigned key for the attachment.
                 * @example 21
                 */
                key?: string;
                /**
                 * @description ID for the attachment.
                 * @example Sales01
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/21
                 */
                readonly href?: string;
            };
            /** @description Line items of the advance. */
            items?: components["schemas"]["objects.accounts-receivable.advance-line"][];
            entity?: components["schemas"]["entity-ref"];
            readonly audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2024-01-23T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
        };
        "accounts-receivable-advanceRequiredProperties": {
            paymentInformation?: Record<string, never>;
            items?: {
                dimensions?: Record<string, never>;
            }[];
        };
        "accounts-receivable-advance-actions-submit-request": {
            /**
             * @description System-assigned key for the advance.
             * @example 11
             */
            key: string;
        };
        "accounts-receivable-advance-actions-submit-response": {
            /**
             * @description System-assigned key for the advance.
             * @example 11
             */
            key?: string;
            /**
             * @description Unique ID for the advance.
             * @example 11
             */
            id?: string;
            /**
             * @description URL endpoint for the advance.
             * @example /objects/accounts-receivable/advance/11
             */
            href?: string;
            /**
             * @description State of the advance.
             * @example posted
             */
            state?: string;
        };
        "accounts-receivable-advance-actions-reverse-request": {
            /**
             * @description System-assigned key for the advance.
             * @example 23
             */
            key: string;
            /**
             * Format: date
             * @description Date the transaction is reversed.
             * @example 2025-04-15
             */
            reversedDate: string;
            /**
             * @description Notes or comments about the reason for the the advance reversal.
             * @example Reversed the advance due to duplicate entry
             */
            memo?: string;
        };
        "accounts-receivable-advance-actions-reverse-response": {
            /**
             * @description System-assigned key for the advance.
             * @example 23
             */
            key?: string;
            /**
             * @description Unique ID for the advance.
             * @example 23
             */
            id?: string;
            /**
             * @description URL endpoint for the advance.
             * @example /objects/accounts-receivable/advance/23
             */
            href?: string;
            /**
             * @description State of the advance after reversal.
             * @example reversal
             */
            state?: string;
        };
        /** @description Detail and header information for AR advance transactions. */
        "objects.accounts-receivable.advance-line": {
            /**
             * @description System-assigned key for the AR advance line.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description ID for the AR advance line. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AR advance line.
             * @example /objects/accounts-receivable/advance-line/23
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount for the line item in the company's base currency.
             * @example 100.00
             */
            readonly baseAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount for the AR advance line item in the transaction currency.
             * @example 100
             */
            txnAmount?: string;
            /**
             * @description Memo about the line item.
             * @example Service charges
             */
            memo?: string;
            /** @description Currency details for the advance line item. */
            currency?: {
                /**
                 * @description Base currency for the company.
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /**
                 * @description Transaction currency for the advance.
                 * @example GBP
                 */
                readonly txnCurrency?: string;
                /**
                 * exchangeRate
                 * @description Exchange rate details used to calculate the base amount.
                 */
                exchangeRate?: {
                    /**
                     * Format: date
                     * @description Exchange rate date used to calculate the base amount from the transaction amount.
                     * @example 2025-01-23
                     */
                    readonly date?: string;
                    /**
                     * @description Exchange rate used to calculate the base amount from the transaction amount.
                     * @example 1.0789
                     */
                    readonly rate?: number;
                    /**
                     * @description Exchange rate type used to calculate the base amount from the transaction amount.
                     * @example -1
                     */
                    readonly typeId?: string;
                };
            };
            /**
             * @description Line number of the AR advance line item.
             * @example 5
             */
            readonly lineNumber?: number;
            /** @description Payment information for the AR advance line item. */
            paymentInformation?: {
                /**
                 * Format: decimal-precision-2
                 * @description Total paid for the line item.
                 * @example 200
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Transaction total paid for the line item.
                 * @example 200
                 */
                readonly txnTotalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total selected for the line item.
                 * @example 100
                 */
                readonly totalSelected?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction selected for the line item.
                 * @example 100
                 */
                readonly txnTotalSelected?: string;
            };
            baseLocation?: components["schemas"]["location-ref"] & {
                /**
                 * @description Base location key.
                 * @example 4
                 */
                key?: string;
                /**
                 * @description Unique ID for the base location.
                 * @example 4
                 */
                id?: string;
                /**
                 * @description URL endpoint for the base location.
                 * @example /objects/company-config/location/4
                 */
                readonly href?: string;
            };
            /**
             * @description Details of the bank through which payment was made.
             *     These properties are populated when a bank is involved in a payment.
             */
            readonly bank?: {
                /**
                 * Format: decimal-precision-2
                 * @description For multi-currency companies, the amount of the line item in the bank's base currency.
                 * @example 10
                 */
                readonly amount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description For payment involving multi-currency, the amount of the item in the currency of the bank.
                 * @example 10
                 */
                readonly txnAmount?: string;
                /**
                 * @description The bank's currency.
                 * @example CAD
                 */
                readonly txnCurrency?: string;
                /**
                 * @description The bank's base currency.
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /** @description For two and three-way currency conversions, Bank exchange rate details used to calculate the base amount for the line item. */
                readonly bankExchangeRate?: {
                    /**
                     * Format: date
                     * @description Exchange rate date used to calculate the bank base amount from the transaction amount.
                     * @example 2025-01-23
                     */
                    readonly date?: string;
                    /**
                     * @description Exchange rate used to calculate the bank base amount from the transaction amount.
                     * @example 1.0789
                     */
                    readonly rate?: number;
                    /**
                     * @description Exchange rate type used to calculate the bank base amount from the transaction amount.
                     * @example -1
                     */
                    readonly typeId?: string;
                };
            };
            accountLabel?: {
                /**
                 * @description Unique key for the account label.
                 * @example 14
                 */
                key?: string;
                /**
                 * @description Name or other unique ID for the account label.
                 * @example Accounting Fees
                 */
                id?: string;
                /**
                 * @description Name of the account label.
                 * @example Accounting Fees
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the account label.
                 * @example /objects/accounts-receivable/account-label/14
                 */
                readonly href?: string;
            };
            glAccount?: components["schemas"]["gl-account-ref"];
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the AR advance line item.
                 */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 4
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the location.
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
                 * @description Department associated with the AR advance line item.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 9
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the department.
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
            /** @description Header level details for the AR advance's line items. */
            readonly arAdvance?: {
                /**
                 * @description Unique ID for the AR advance.
                 * @example 23
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the AR advance.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the AR advance.
                 * @example /objects/accounts-receivable/advance/23
                 */
                readonly href?: string;
                /**
                 * @description Record type.
                 * @example rr
                 */
                readonly recordType?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "accounts-receivable-advance-lineRequiredProperties": Record<string, never>;
        /** @description Bill back templates are used in multi-entity companies to generate an invoice and corresponding bill when one entity provides goods or services to another entity. */
        "objects.accounts-receivable.billback-template": {
            /**
             * @description System-assigned key for the bill back template.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the bill back template.
             * @example Template 1
             */
            id?: string;
            /**
             * @description URL endpoint for the bill back template.
             * @example /objects/accounts-receivable/billback-template/23
             */
            readonly href?: string;
            /**
             * @description Description of the template.
             * @example Bill back template for India sales account
             */
            description?: string;
            /**
             * @description Set to `true` to post directly to the mapped inter-entity offset accounts instead of the Accounts Receivable and Accounts Payable offset accounts.
             * @default false
             * @example true
             */
            enableInterEntityPostings?: boolean;
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            /** @description Line items in the bill back template. */
            lines?: components["schemas"]["objects.accounts-receivable.billback-template-line"][];
        };
        "accounts-receivable-billback-templateRequiredProperties": {
            lines?: {
                invoiceGLAccount?: Record<string, never>;
                billGLAccount?: Record<string, never>;
            }[];
        };
        /** @description Line items in a bill back template provide the GL accounts and department to use for line items in corresponding invoices and bills. */
        "objects.accounts-receivable.billback-template-line": {
            /**
             * @description System-assigned key for the bill back template line.
             * @example 5
             */
            readonly key?: string;
            /**
             * @description Unique ID for the bill back template line. This value is the same as the `key` for this object.
             * @example 5
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bill back template line.
             * @example /objects/accounts-receivable/billback-template-line/5
             */
            readonly href?: string;
            /**
             * @description Number of the line item in the bill back template.
             * @example 2
             */
            readonly lineNumber?: string;
            /**
             * @description Memo about the line item.
             * @example Line number 2
             */
            memo?: string;
            /** @description The GL account to use for associated invoice line items. */
            invoiceGLAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 5
                 */
                key?: string;
                /**
                 * @description Unique ID for the GL account.
                 * @example 4000
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example Sales
                 */
                name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/5
                 */
                readonly href?: string;
            };
            /** @description The GL account to use for associated bill line items. */
            billGLAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 6
                 */
                key?: string;
                /**
                 * @description Unique ID for the GL account.
                 * @example 2000
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example School Fees
                 */
                name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/6
                 */
                readonly href?: string;
            };
            /** @description Department to include on associated invoices. */
            department?: {
                /**
                 * @description Unique key for the department.
                 * @example 9
                 */
                key?: string;
                /**
                 * @description Unique ID for the department.
                 * @example 11
                 */
                id?: string;
                /**
                 * @description Name of the department.
                 * @example Accounting
                 */
                name?: string;
                /**
                 * @description URL endpoint for department.
                 * @example /objects/company-config/department/9
                 */
                readonly href?: string;
            };
            /** @description Header level details for the template line items. */
            billbackTemplate?: {
                /**
                 * @description Unique ID for the bill back template.
                 * @example 5
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the bill back template.
                 * @example 5
                 */
                key?: string;
                /**
                 * @description URL endpoint for the bill back template.
                 * @example /objects/accounts-receivable/billback-template/5
                 */
                readonly href?: string;
            };
        };
        "accounts-receivable-billback-template-lineRequiredProperties": Record<string, never>;
        /** @description A customer is any company to which you sell goods and services. */
        "objects.accounts-receivable.customer": {
            /**
             * @description System-assigned key for the customer.
             * @example 24
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the customer.
             * @example C-00003
             */
            id?: string;
            /**
             * @description Name of the customer, which is usually the company name.
             * @example Gomez Manufacturers
             */
            name?: string;
            /**
             * @description URL for the customer.
             * @example /objects/accounts-receivable/customer/24
             */
            readonly href?: string;
            status?: components["schemas"]["dimension-status"];
            /** @description The category assigned to the customer (for example, Consultants, Subcontractors, or Equipment). */
            customerType?: {
                /**
                 * @description System-assigned key for the customer type.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the customer type.
                 * @example Customer - Direct
                 */
                id?: string;
                /**
                 * @description URL for the customer type.
                 * @example /objects/accounts-receivable/customer-type/1
                 */
                readonly href?: string;
            };
            /** @description Parent customer, which creates a customer hierarchy. */
            parent?: {
                /**
                 * @description System-assigned key for the parent customer.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description ID of the parent customer.
                 * @example C-00014
                 */
                id?: string;
                /**
                 * @description Name of the parent customer.
                 * @example Pan American Global Partners
                 */
                readonly name?: string;
                /**
                 * @description URL for the parent customer.
                 * @example /objects/accounts-receivable/customer/10
                 */
                readonly href?: string;
            };
            /** @description Name of the employee responsible for this customer account. */
            salesRepresentative?: {
                /**
                 * @description System-assigned key for the employee.
                 * @example 39
                 */
                key?: string;
                /**
                 * @description ID of the employee.
                 * @example awong
                 */
                id?: string;
                /**
                 * @description Name of the employee.
                 * @example Anna Wong
                 */
                readonly name?: string;
                /**
                 * @description URL for the employee.
                 * @example /objects/company-config/employee/39
                 */
                readonly href?: string;
            };
            /**
             * @description Tax identification number for the customer.
             * @example 12-3434900
             */
            taxId?: string;
            /**
             * @deprecated
             * @description Electronic address is used for E-invoicing. This field is required for customers in France to comply with local E-invoicing regulations.
             * @example 123456789-Emp_001-Dept_001
             */
            electronicAddress?: string;
            /** @description GL account for customer revenue. */
            defaultRevenueGLAccount?: {
                /**
                 * @description System-assigned key for the GL account.
                 * @example 41
                 */
                key?: string;
                /**
                 * @description ID of the GL account.
                 * @example 1001
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example Sterling Bank Operating
                 */
                readonly name?: string;
                /**
                 * @description URL of the GL account.
                 * @example /objects/general-ledger/account/41
                 */
                readonly href?: string;
            };
            /** @description How goods are shipped to the customer. */
            shippingMethod?: {
                /**
                 * @description System-assigned key for the shipping method.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description ID of the shipping method.
                 * @example Fedex
                 */
                id?: string;
                /**
                 * @description URL of the shipping method.
                 * @example /objects/accounts-receivable/shipping-method/3
                 */
                readonly href?: string;
            };
            /**
             * @description Credit limit extended to the customer.
             * @example 10000
             */
            creditLimit?: number;
            /**
             * @description Indicates whether customer is on credit hold.
             * @default false
             * @example true
             */
            isOnHold?: boolean;
            /** @description Contacts for the customer. */
            contacts?: {
                /**
                 * @description Display contact for this customer.
                 *     Used as the default for other customer contacts, such as `shipTo`, that are not defined.
                 */
                default?: components["schemas"]["contact-ref"] & {
                    /**
                     * @description Set to `true` to display the contact in the contact list.
                     * @default true
                     * @example true
                     */
                    showInContactList?: boolean;
                    /** tax */
                    tax?: {
                        /**
                         * @description Indicates whether the contact is taxable.
                         * @default false
                         * @example true
                         */
                        isTaxable?: boolean;
                        /** @description Tax group the contact belongs to. */
                        group?: {
                            /**
                             * @description System-assigned key for the tax group.
                             * @example 90
                             */
                            key?: string;
                            /**
                             * @description Identifier for the tax group.
                             * @example Los Angeles
                             */
                            id?: string;
                            /**
                             * @description URL for the tax group.
                             * @example /objects/tax/contact-tax-group/90
                             */
                            readonly href?: string;
                        };
                        /** @description Tax solution for this customer. */
                        solution?: {
                            /**
                             * @description System-assigned key for the tax solution.
                             * @example 90
                             */
                            key?: string;
                            /**
                             * @description Identifier for the tax solution.
                             * @example Los Angeles
                             */
                            id?: string;
                            /**
                             * @description URL for the tax solution.
                             * @example /objects/tax/tax-solution/90
                             */
                            readonly href?: string;
                        };
                    };
                    /** @description For businesses operating in France, the following fields are required to comply with local electronic invoicing. */
                    electronicInvoiceDetails?: {
                        /**
                         * @description Identifies the type of organization under French law, encompassing various recognized forms for both private and public entities.
                         * @example 24 Fiduciary
                         */
                        legalCategory?: string;
                        /**
                         * @description Specifies the primary economic activities the business engages in, helping classify the nature of operations.
                         * @example 10.3 Transformation and conservation of fruits and vegetables
                         */
                        mainActivity?: string;
                        /**
                         * @description Classifies the business entity based on legal structure, size, activities, or other key characteristics.
                         * @example 03 Intermediate sized enterprises
                         */
                        typeOfCompany?: string;
                        /**
                         * @description Represents the total capital invested by shareholders upon the company's formation.
                         * @example 37 000
                         */
                        registeredCapital?: number;
                        /**
                         * @description Details the specific VAT rules and regulations applicable to the business, including requirements for VAT collection, application, and reporting within France.
                         * @example Monthly
                         */
                        valueAddedTaxRegime?: string;
                    };
                    /**
                     * @description Business identification number for EU companies.
                     * @example 123
                     */
                    internationalTaxId?: string;
                    /**
                     * @description Electronic address is used for electronic invoicing. This field is required for customers in France to comply with local electronic invoicing regulations.
                     * @example 123456789-Emp_001-Dept_001
                     */
                    electronicAddress?: string;
                };
                /**
                 * primary
                 * @description Primary contact for the customer.
                 */
                primary?: {
                    /**
                     * @description System-assigned key for the contact.
                     * @example 87
                     */
                    key?: string;
                    /**
                     * @description ID of the contact.
                     * @example Ben Jones
                     */
                    id?: string;
                    /**
                     * @description URL for the contact.
                     * @example /objects/company-config/contact/87
                     */
                    readonly href?: string;
                };
                /**
                 * billTo
                 * @description Customer contact for company activity such as sales transactions, invoice creation, and manual deposits.
                 */
                billTo?: {
                    /**
                     * @description System-assigned key for the contact.
                     * @example 63
                     */
                    key?: string;
                    /**
                     * @description ID of the contact.
                     * @example Rose Garcia
                     */
                    id?: string;
                    /**
                     * @description URL for the contact.
                     * @example /objects/company-config/contact/63
                     */
                    readonly href?: string;
                };
                /**
                 * shipTo
                 * @description Customer contact for company activity such as sales transactions, invoice creation, and tax calculations.
                 */
                shipTo?: {
                    /**
                     * @description System-assigned key for the contact.
                     * @example 29
                     */
                    key?: string;
                    /**
                     * @description ID of the contact.
                     * @example Veronica Clark
                     */
                    id?: string;
                    /**
                     * @description URL for the contact.
                     * @example /objects/company-config/contact/29
                     */
                    readonly href?: string;
                };
            };
            /** @description List of contacts for the customer. */
            contactList?: components["schemas"]["objects.accounts-receivable.customer-contact"][];
            audit?: components["schemas"]["audit.s1"];
            restrictions?: {
                /**
                 * @description Restrict customers to only the top-level company or for specific locations and departments.
                 *     These restriction options are valid only for multi-entity companies that are [configured for restrictions](https://www.intacct.com/ia/docs/en_US/help_action/Multi-entity/Setup/configure-multi-entity.htm).
                 *     Learn more about [restricting customers](https://www.intacct.com/ia/docs/en_US/help_action/Accounts_Receivable/Setup/Customers/setup-customers-in-ME.htm).
                 *     The following values specify who can view and post transactions against this customer.
                 *
                 *     **Valid values:**
                 *     - `unrestricted` - The top level and all entities within the multi-entity structure.
                 *     - `rootOnly` - Only the top level of the multi-entity structure.
                 *     - `restricted` - Only the chosen locations, location groups, departments, or department groups within the multi-entity structure.
                 * @default null
                 * @example restricted
                 * @enum {string|null}
                 */
                restrictionType?: null | "unrestricted" | "rootOnly" | "restricted";
            };
            /** @description Email templates for the customer. */
            customerEmailTemplates?: components["schemas"]["objects.accounts-receivable.customer-email-template"][];
            /**
             * @description Discount percentage for the customer.
             * @example 10
             */
            discountPercent?: string;
            /** @description AR term for the customer, which are the rules for extending credit to the customer. */
            term?: {
                /**
                 * @description System-assigned key for the term.
                 * @example 20
                 */
                key?: string;
                /**
                 * @description Name of the term.
                 * @example Net 15
                 */
                id?: string;
                /**
                 * @description URL for the term.
                 * @example /objects/accounts-receivable/term/20
                 */
                readonly href?: string;
            };
            /**
             * @description Bill in advance setting, which instructs Sage Intacct to create billing schedules that automatically start before a contract line starts.
             * @example 7
             */
            advanceBillBy?: string;
            /**
             * @description Bill in advance type to indicate whether the advance value is number of days or months.
             * @example days
             * @enum {string}
             */
            advanceBillByType?: "" | "days" | "months";
            /**
             * Format: decimal-precision-2
             * @description Total amount currently due from the customer.
             * @example 3250.00
             */
            readonly totalDue?: string;
            /**
             * Format: date
             * @description Date the most recent invoice was created.
             * @example 2023-05-15
             */
            readonly lastInvoiceCreatedDate?: string;
            /**
             * Format: date
             * @description Date the most recent statement was generated.
             * @example 2023-01-01
             */
            readonly lastStatementGeneratedDate?: string;
            /**
             * @deprecated
             * @description This field has been deprecated. Use the customerResaleNumber field instead.
             * @example 1534
             */
            resaleNumber?: number;
            /**
             * @description Resale number, which applies to customers who are resellers of your company's products or services.
             * @example 1534
             */
            customerResaleNumber?: string;
            /**
             * @description Delivery option for the customer's statements.
             * @default print
             * @example both
             * @enum {string}
             */
            deliveryOptions?: "print" | "email" | "both";
            /**
             * @description By default, the customer price list is assigned to the entire customer, including the customer contacts. But, you can override the customer price list with the corresponding options for either the billing or shipping contact.
             * @default customer
             * @example billingContact
             * @enum {string}
             */
            overridePriceList?: "customer" | "billingContact" | "shippingContact";
            /** @description Message to include on the customer's invoice. */
            customerMessage?: {
                /**
                 * @description System-assigned key for the customer message.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description ID for the customer message.
                 * @example welcome message
                 */
                id?: string;
                /**
                 * @description Message text for the customer message.
                 * @example welcome to the company
                 */
                message?: string;
                /**
                 * @description URL endpoint for the customer message.
                 * @example /objects/accounts-receivable/customer-message/10
                 */
                readonly href?: string;
            };
            /**
             * @description Currency for the customer.
             * @example CAD
             */
            currency?: string;
            /**
             * @description Indicates whether the customer accepts emailed invoices.
             * @default false
             * @example true
             */
            emailOptIn?: boolean;
            /**
             * Format: date
             * @deprecated
             * @description Monthly recurring revenue activation date.
             * @example 2022-04-03
             */
            readonly activationDate?: string;
            /**
             * Format: date
             * @description Monthly recurring revenue end date.
             * @example 2023-03-31
             */
            readonly subscriptionEndDate?: string;
            /** @description The sales territory to which the customer is assigned. */
            territory?: {
                /**
                 * @description Territory key.
                 * @example 6
                 */
                key?: string;
                /**
                 * @description Territory ID.
                 * @example NE
                 */
                id?: string;
                /**
                 * @description Territory name.
                 * @example Northeast
                 */
                name?: string;
                /**
                 * @description URL for the territory.
                 * @example /objects/accounts-receivable/territory/6
                 */
                readonly href?: string;
            };
            /**
             * @deprecated
             * @description Set to `true` to enable automation of customer payments using ACH.
             * @default true
             * @example true
             */
            enableOnlineACHPayment?: boolean;
            /**
             * @deprecated
             * @description Set to `true` to automate customer payments using a credit card.
             * @default true
             * @example true
             */
            enableOnlineCardPayment?: boolean;
            /**
             * @description Set to `true` to designate the customer as a one-time use customer that should not be included in standard look-up lists.
             * @default false
             * @example false
             */
            isOneTimeUse?: boolean;
            /**
             * @description Set to `true` to disable refunds for the customer.
             * @default false
             * @example false
             */
            disableRefund?: boolean;
            /** @description Vendor associated with the customer. */
            vendor?: {
                /**
                 * @description System-assigned key of the associated vendor.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description ID of the associated vendor.
                 * @example 10
                 */
                id?: string;
                /**
                 * @description Indicates whether the vendor was autogenerated.
                 * @default false
                 * @example false
                 */
                isSystemGenerated?: boolean;
                /**
                 * @description URL for the vendor.
                 * @example /objects/accounts-payable/vendor/10
                 */
                readonly href?: string;
            };
            /** @description Customer GL group to control the GL account that transactions with the customer should post to. */
            accountGroup?: {
                /**
                 * @description System-assigned key for the customer GL group.
                 * @example 41
                 */
                key?: string;
                /**
                 * @description ID for the customer GL group.
                 * @example Direct
                 */
                id?: string;
                /**
                 * @description URL for the customer GL group.
                 * @example /objects/order-entry/customer-gl-group/41
                 */
                readonly href?: string;
            };
            /** @description Label for the AR account associated with the customer. */
            accountLabel?: {
                /**
                 * @description System-assigned key for the AR account label.
                 * @example 38
                 */
                key?: string;
                /**
                 * @description ID for the account label.
                 * @example SW Sales
                 */
                id?: string;
                /**
                 * @description URL for the account label.
                 * @example /objects/accounts-receivable/account-label/38
                 */
                readonly href?: string;
            };
            /** @description Attachment that serves as a supporting document for the customer. */
            attachment?: {
                /**
                 * @description System-assigned key for the attachment.
                 * @example 51
                 */
                key?: string | null;
                /**
                 * @description ID for the attachment.
                 * @example Sales01
                 */
                id?: string | null;
                /**
                 * @description URL for the attachment.
                 * @example /objects/company-config/attachment/51
                 */
                readonly href?: string;
            };
            /**
             * @description Default retainage percentage for the customer. Retainage must be enabled for a customer and a Construction subscription is required to enable this capability.
             * @example 25
             */
            retainagePercentage?: number;
            /**
             * @description Notes or comments about the customer.
             * @example Service tier 1
             */
            notes?: string;
            /** @description Price list associated with the customer. */
            priceList?: {
                /**
                 * @description System-assigned key for the price list.
                 * @example 7
                 */
                key?: string;
                /**
                 * @description ID for the price list.
                 * @example Base Price List
                 */
                id?: string;
                /**
                 * @description URL for the price list.
                 * @example /objects/order-entry/price-list/7
                 */
                readonly href?: string;
            };
            /** @description Price schedule associated with the customer. */
            priceSchedule?: {
                /**
                 * @description System-assigned key for the price schedule.
                 * @example 4
                 */
                key?: string;
                /**
                 * @description ID for the price schedule.
                 * @example PREF
                 */
                id?: string;
                /**
                 * @description URL for the price schedule.
                 * @example /objects/purchasing/price-schedule/4
                 */
                readonly href?: string;
            };
            /** @description Default AR override offset account for this customer. */
            overrideOffsetGLAccount?: {
                /**
                 * @description System-assigned key for the GL account.
                 * @example 12
                 */
                key?: string;
                /**
                 * @description ID for the GL account.
                 * @example 134
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example 1225 - Sales
                 */
                readonly name?: string;
                /**
                 * @description URL for the GL account.
                 * @example /objects/general-ledger/account/12
                 */
                readonly href?: string;
            };
            /**
             * @description Customer visibility type.
             * @default unrestricted
             * @example restricted
             * @enum {string}
             */
            customerRestriction?: "unrestricted" | "rootOnly" | "restricted";
            /** @description Restricted locations for the customer. */
            restrictedLocations?: components["schemas"]["objects.accounts-receivable.customer-restricted-location"][];
            /** @description Restricted departments for the customer. */
            restrictedDepartments?: components["schemas"]["objects.accounts-receivable.customer-restricted-department"][];
            entity?: components["schemas"]["entity-ref"];
            /** @description Customer account health indicators and metrics. */
            customerAccountHealth?: {
                /**
                 * @description Overall health score for the customer account (0-100).
                 * @example 85
                 */
                healthScore?: number;
                /**
                 * @description Current health status of the customer account.
                 * @default healthy
                 * @example healthy
                 * @enum {string}
                 */
                healthStatus?: "healthy" | "atRisk" | "escalated";
                /**
                 * @description Indicates whether the customer is at risk for churn.
                 * @default false
                 * @example false
                 */
                churnRisk?: boolean;
            };
            /**
             * @description Default print templates to use when AR and Order Entry documents are printed for the customer.
             *     Specify any one template, multiple templates, or all templates, depending on the document types
             *     that will be printed for the customer.
             */
            printTemplates?: {
                /**
                 * @description Default template to use when AR invoices are printed for the customer. Obtain the template name
                 *     from the Sage Intacct UI or from an existing customer response.
                 */
                arInvoice?: {
                    /**
                     * @description System-assigned key for the AR invoice print template.
                     * @example 10
                     */
                    key?: string | null;
                    /**
                     * @description Name of the AR invoice print template.
                     * @example Standard AR Invoice
                     */
                    id?: string | null;
                };
                /**
                 * @description Default template to use when Order Entry quotes are printed for the customer. Obtain the
                 *     template name from the Sage Intacct UI or from an existing customer response.
                 */
                orderEntryQuote?: {
                    /**
                     * @description System-assigned key for the Order Entry quote print template.
                     * @example 11
                     */
                    key?: string | null;
                    /**
                     * @description Name of the Order Entry quote print template.
                     * @example Standard Quote
                     */
                    id?: string | null;
                };
                /**
                 * @description Default template to use when Order Entry orders are printed for the customer. Obtain the
                 *     template name from the Sage Intacct UI or from an existing customer response.
                 */
                orderEntryOrder?: {
                    /**
                     * @description System-assigned key for the Order Entry order print template.
                     * @example 12
                     */
                    key?: string | null;
                    /**
                     * @description Name of the Order Entry order print template.
                     * @example Standard Sales Order
                     */
                    id?: string | null;
                };
                /**
                 * @description Default template to use when Order Entry lists are printed for the customer. Obtain the
                 *     template name from the Sage Intacct UI or from an existing customer response.
                 */
                orderEntryList?: {
                    /**
                     * @description System-assigned key for the Order Entry list print template.
                     * @example 13
                     */
                    key?: string | null;
                    /**
                     * @description Name of the Order Entry list print template.
                     * @example Standard List
                     */
                    id?: string | null;
                };
                /**
                 * @description Default template to use when Order Entry invoices are printed for the customer. Obtain the
                 *     template name from the Sage Intacct UI or from an existing customer response.
                 */
                orderEntryInvoice?: {
                    /**
                     * @description System-assigned key for the Order Entry invoice print template.
                     * @example 14
                     */
                    key?: string | null;
                    /**
                     * @description Name of the Order Entry invoice print template.
                     * @example Standard OE Invoice
                     */
                    id?: string | null;
                };
                /**
                 * @description Default template to use when Order Entry adjustments are printed for the customer. Obtain the
                 *     template name from the Sage Intacct UI or from an existing customer response.
                 */
                orderEntryAdjustment?: {
                    /**
                     * @description System-assigned key for the Order Entry adjustment print template.
                     * @example 15
                     */
                    key?: string | null;
                    /**
                     * @description Name of the Order Entry adjustment print template.
                     * @example Standard Adjustment
                     */
                    id?: string | null;
                };
                /**
                 * @description Default template to use when other Order Entry documents are printed for the customer. Obtain
                 *     the template name from the Sage Intacct UI or from an existing customer response.
                 */
                orderEntryOther?: {
                    /**
                     * @description System-assigned key for the Order Entry other print template.
                     * @example 16
                     */
                    key?: string | null;
                    /**
                     * @description Name of the Order Entry other print template.
                     * @example Standard Other
                     */
                    id?: string | null;
                };
            };
            /** @description Record URL for the customer. */
            readonly webURL?: string;
        };
        "accounts-receivable-customerRequiredProperties": Record<string, never>;
        /** @description A customer contact is a contact associated with a customer. */
        "objects.accounts-receivable.customer-contact": {
            /**
             * @description System-assigned unique key for the customer contact.
             * @example 21
             */
            readonly key?: string;
            /**
             * @description ID for the customer contact. This value is the same as the `key` for this object.
             * @example 21
             */
            readonly id?: string;
            /**
             * @description User-defined category to group and sort the customer contact.
             * @example Billing contact
             */
            categoryName?: string;
            /**
             * @description URL endpoint for the customer contact.
             * @example /objects/accounts-receivable/customer-contact/21
             */
            readonly href?: string;
            /** @description Contact to associate with the customer. */
            contact?: {
                /**
                 * @description Unique key for the contact.
                 * @example 197
                 */
                key?: string;
                /**
                 * @description Unique ID for the contact.
                 * @example Jeffrey Palms
                 */
                id?: string;
                /**
                 * @description URL endpoint for the contact.
                 * @example /objects/company-config/contact/197
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            /** @description Customer that the contact is associated with. */
            customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description ID for the customer.
                 * @example 15
                 */
                id?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/15
                 */
                readonly href?: string;
            };
        };
        /** @description Customer email templates can be used to automate standard messages sent to multiple customers. */
        "objects.accounts-receivable.customer-email-template": {
            /**
             * @description System-assigned unique key for the customer email template.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Identifier for the customer email template. This value is the same as `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the customer email template.
             * @example /objects/accounts-receivable/customer-email-template/1
             */
            readonly href?: string;
            /** @description [Customer](accounts-receivable.customer) associated with the email template. */
            customer?: {
                /**
                 * @description System-assigned key for the customer.
                 * @example 127
                 */
                key?: string;
                /**
                 * @description Unique identifier for the customer.
                 * @example 014
                 */
                id?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/127
                 */
                readonly href?: string;
            };
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `txnDefinitionName` field instead.
             */
            txnDefinition?: {
                /**
                 * @description URL for the order-entry-txn-definition.
                 * @example /objects/order-entry/txn-definition/23
                 */
                readonly href?: string;
                /**
                 * @description Document template Key.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Document template ID.
                 * @example Customer Invoice
                 */
                id?: string;
            };
            /**
             * @description Type of transaction that will use the email template.
             * @example Customer Invoice
             */
            txnDefinitionName?: string;
            /** @description Associated email template. */
            emailTemplate?: {
                /**
                 * @description System-assigned key for the email template.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the email template.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description Name of the email template.
                 * @example Customer Trial
                 */
                readonly name?: string;
                /**
                 * @description Specify the type of transaction that will use the email template.
                 * @default arInvoice
                 * @example arInvoice
                 * @enum {string|null}
                 */
                readonly templateType?: null | "arInvoice" | "arStatement" | "contract" | "orderEntryTxn" | "purchasingTxn";
                /**
                 * @description URL of the email template.
                 * @example /objects/company-config/email-template/1
                 */
                readonly href?: string;
            };
        };
        "accounts-receivable-customer-email-templateRequiredProperties": Record<string, never>;
        /** @description list of customer item cross references */
        "objects.accounts-receivable.customer-item-cross-reference": {
            /** @description Customer Item Cross Reference Key */
            readonly key?: string;
            /** @description Customer Item Cross Reference id */
            readonly id?: string;
            /** @description URL of the customer-item-cross-reference. */
            readonly href?: string;
            /** @description Customer. */
            customer?: {
                /** @description Customer key */
                key?: string;
                /** @description Customer ID */
                id?: string;
                name?: string;
                /** @description URL of the customer. */
                readonly href?: string;
            };
            item?: {
                /** @description Item key */
                key?: string;
                /**
                 * @description Item ID
                 * @example null
                 */
                id?: string;
                /** @example null */
                name?: string;
                /** @description URL of the item. */
                readonly href?: string;
            };
            /**
             * @description Reference type
             * @default customer
             * @example customer
             * @enum {string}
             */
            referenceType?: "customer";
            /**
             * @description Cross-reference item ID
             * @example null
             */
            itemAliasId?: string;
            /**
             * @description Cross-reference item description
             * @example null
             */
            itemAliasDescription?: string;
            /**
             * @description Unit
             * @example null
             */
            unit?: string;
            /**
             * @description Reference type Context
             * @example null
             * @enum {string}
             */
            referenceTypeContext?: "internal" | "external";
            audit?: components["schemas"]["audit.s1"];
        };
        "accounts-receivable-customer-item-cross-referenceRequiredProperties": Record<string, never>;
        /** @description In shared multi-entity companies, customers can be restricted to specific departments or department groups to prevent the customer from being used in the wrong entity. */
        "objects.accounts-receivable.customer-restricted-department": {
            /**
             * @description System-assigned key for the customer restricted department.
             * @example 31
             */
            readonly key?: string;
            /**
             * @description Unique ID for the customer restricted department.
             * @example 31
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the customer restricted department.
             * @example /objects/accounts-receivable/customer-restricted-department/31
             */
            readonly href?: string;
            /** @description Department to which the customer is restricted. */
            readonly department?: {
                /**
                 * @description Unique key for the department.
                 * @example 41
                 */
                key?: string;
                /**
                 * @description User-defined ID for the department.
                 * @example Eng
                 */
                id?: string;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/41
                 */
                readonly href?: string;
            };
            /** @description Department group to which the customer is restricted. */
            readonly departmentGroup?: {
                /**
                 * @description Unique key for the department group.
                 * @example 46
                 */
                key?: string;
                /**
                 * @description Unique ID for the department group.
                 * @example SW
                 */
                id?: string;
                /**
                 * @description URL endpoint for the department group.
                 * @example /objects/company-config/department-group/46
                 */
                readonly href?: string;
            };
            /** @description Customer that is restricted. */
            customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the customer.
                 * @example C23
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/23
                 */
                readonly href?: string;
            };
        };
        /** @description In shared multi-entity companies, customers can be restricted to specific locations or location groups to prevent the customer from being used in the wrong entity. */
        "objects.accounts-receivable.customer-restricted-location": {
            /**
             * @description System-assigned key for the customer restricted location.
             * @example 51
             */
            readonly key?: string;
            /**
             * @description ID for the customer restricted location.
             * @example 51
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the customer restricted location.
             * @example /objects/accounts-receivable/customer-restricted-location/51
             */
            readonly href?: string;
            /** @description Location to which the customer is restricted. */
            location?: {
                /**
                 * @description Unique key for the location.
                 * @example 14
                 */
                key?: string;
                /**
                 * @description Unique ID for the location.
                 * @example 14
                 */
                id?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/14
                 */
                readonly href?: string;
            };
            /** @description Location group to which the customer is restricted. */
            locationGroup?: {
                /**
                 * @description System-assigned key for the location group.
                 * @example 66
                 */
                key?: string;
                /**
                 * @description Unique identifier for the location group.
                 * @example 66
                 */
                id?: string;
                /**
                 * @description Endpoint for the location group.
                 * @example /objects/company-config/location-group/66
                 */
                readonly href?: string;
            };
            /** @description Customer that is restricted. */
            customer?: {
                /**
                 * @description System-assigned key for the customer.
                 * @example 89
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the customer.
                 * @example C89
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/89
                 */
                readonly href?: string;
            };
        };
        /** @description This object represents a message associated with a customer. */
        "objects.accounts-receivable.customer-message": {
            /**
             * @description System-assigned key for the customer message.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the customer message.
             * @example Message 1
             */
            id?: string;
            /**
             * @description URL endpoint for the customer message.
             * @example /objects/accounts-receivable/customer-message/23
             */
            readonly href?: string;
            /**
             * @description Message text.
             * @example Express shipping now available!
             */
            message?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "accounts-receivable-customer-messageRequiredProperties": Record<string, never>;
        /** @description Customer types provide a way to group customers into categories, such as reseller and end user. */
        "objects.accounts-receivable.customer-type": {
            /**
             * @description System-assigned key for the customer type.
             * @example 16
             */
            readonly key?: string;
            /**
             * @description Name of the customer type.
             * @example Top Level Customer
             */
            id?: string;
            /**
             * @description URL for the customer type.
             * @example /objects/accounts-receivable/customer-type/16
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            /** @description Parent of a subordinate customer type. */
            parent?: {
                /**
                 * @description System-assigned key for the parent customer type.
                 * @example 5
                 */
                key?: string;
                /**
                 * @description Identifier for the parent customer type.
                 * @example Level 1 Customer
                 */
                id?: string;
                /**
                 * @description URL for the parent customer type.
                 * @example /objects/accounts-receivable/customer-type/5
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "accounts-receivable-customer-typeRequiredProperties": Record<string, never>;
        /** @description Provides information about the total amount due from a customer. */
        "objects.accounts-receivable.customer-total": {
            /**
             * @description System-assigned key for the customer total.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique ID for the customer total.
             * @example 5
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the customer total.
             * @example /objects/accounts-receivable/customer-total/1
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description Total amount due from the customer.
             * @example 500.01
             */
            readonly totalDue?: string;
            /** @description The customer who owes the total amount due. */
            readonly customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 5
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the customer.
                 * @example cust_id_531214
                 */
                readonly id?: string;
                /**
                 * @description Name of the customer.
                 * @example cnxt
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/5
                 */
                readonly href?: string;
            };
            entity?: components["schemas"]["entity-ref"] & {
                /**
                 * @description ID for the entity location.
                 * @example NYC
                 */
                readonly id?: string;
                /**
                 * @description Name of the entity location.
                 * @example New York City
                 */
                name?: string;
            };
        };
        /** @description Customer payments made electronically, including online payments made by credit card or ACH wire transfer. These payments are processed by PayPal or Authorize.Net. */
        "objects.accounts-receivable.customer-electronic-payment": {
            /**
             * @description System-assigned unique key for the customer electronic payment.
             * @example 28
             */
            readonly key?: string;
            /**
             * @description Unique ID for the customer electronic payment. This value is the same as the key for this object.
             * @example 28
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the customer electronic payment.
             * @example /objects/accounts-receivable/customer-electronic-payment/28
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description Payment amount.
             * @example 100.20
             */
            readonly paymentAmount?: string;
            /**
             * @description Payment method.
             * @default onlineChargeCard
             * @example onlineAchDebit
             * @enum {string}
             */
            paymentMethod?: "onlineChargeCard" | "onlineAchDebit";
            /**
             * Format: date
             * @description Payment processing date.
             * @example 2026-03-29
             */
            paymentDate?: string;
            /**
             * @description Payment processor.
             * @default authorizeDotNet
             * @example authorizeDotNet
             * @enum {string}
             */
            paymentProcessor?: "payPalPayflowPro" | "authorizeDotNet";
            /**
             * @description Payment state.
             * @default success
             * @example success
             * @enum {string}
             */
            paymentState?: "success" | "failure";
            /**
             * @description The description of the payment failure.
             * @example Invalid account number
             */
            paymentFailureDescription?: string | null;
            /**
             * @description Transaction ID for the payment received from the payment processor.
             * @example 80016488910
             */
            txnId?: string;
            /**
             * @description Currency in which the payment was made.
             * @example USD
             */
            txnCurrency?: string;
            /**
             * @description This is a combination of `Bank account--account` or `Bank account--card (last 4 digits only)` details.
             * @example SBI--6011000000000010
             */
            accountCardName?: string;
            /** @description Reference to the AR payment associated with the customer electronic payment. */
            arPayment?: {
                /**
                 * @description Unique key for the AR payment.
                 * @example 2709
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the AR payment.
                 * @example 2709
                 */
                readonly id?: string;
                /**
                 * @description Payment reconciliation status.
                 * @default null
                 * @example cleared
                 * @enum {string}
                 */
                readonly bankReconciliationStatus?: null | "cleared" | "inTransit";
                /**
                 * Format: date
                 * @description Reconciliation date for the payment.
                 * @example 2026-04-30
                 */
                readonly bankReconciliationDate?: string | null;
                /**
                 * @description State of the AR payment.
                 * @default completed
                 * @example completed
                 * @enum {string}
                 */
                readonly state?: "completed" | "draft" | "voided" | null;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount paid.
                 * @example 500.00
                 */
                readonly totalPaid?: string;
                /**
                 * @description AR summary the payment is part of. Summaries are collections of transactions grouped together for processing.
                 * @example Receipts (Bank-AccountDiscrepancies) - 2026/03/29 Batch
                 */
                readonly paymentSummary?: string;
                /**
                 * @description URL endpoint for the AR payment.
                 * @example /objects/accounts-receivable/payment/2709
                 */
                readonly href?: string;
            };
            /** @description Reference to the customer associated with the customer electronic payment. */
            customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 21
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the customer.
                 * @example Customer003
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/21
                 */
                readonly href?: string;
                /**
                 * @description Customer name.
                 * @example Gomez Manufacturers
                 */
                readonly name?: string;
            };
            entity?: components["schemas"]["entity-ref"];
        };
        /** @description A customer group categorizes customer dimension records, mainly for the purpose of structuring financial reporting. */
        "objects.accounts-receivable.customer-group": {
            /**
             * @description System-assigned unique key for the customer group.
             * @example 25
             */
            readonly key?: string;
            /**
             * @description Unique ID for the customer group.
             * @example CustomerGrp4
             */
            id?: string;
            /**
             * @description URL endpoint for the customer group.
             * @example /objects/accounts-receivable/customer-group/25
             */
            readonly href?: string;
            /**
             * @description Name of the customer group.
             * @example Active JC Customers
             */
            name?: string;
            /**
             * @description Description of the customer group.
             * @example Charity service customers
             */
            description?: string;
            /**
             * @description Specifies the group membership type. The group type and related fields determine which customers are included in the group.
             *     * `specific` - Specify the customers to include and their order in the `groupMembers` array.
             *     * `all` - All customers that match the `memberFilter` criteria.
             * @default all
             * @example all
             * @enum {string}
             */
            groupType?: "all" | "specific";
            /** @description One or more filters to select the customers to include in the customer group. Can be used in addition to the `groupMembers` array to filter from a selected list of customers. */
            memberFilter?: components["schemas"]["member-filter"] & Record<string, never>;
            /** @description Members of the customer group and their sort order. Only applicable when the `groupType` is set to `specific`. */
            groupMembers?: {
                /**
                 * @description Unique key for the customer.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique ID for the customer.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/23
                 */
                readonly href?: string;
                /**
                 * @description Customer group sort order. Determines the position of the member within the customer group. Lower values indicate earlier placement.
                 * @example 2
                 */
                readonly sortOrder?: string;
            }[];
            /**
             * @description Indicates whether a dimension structure is created from the group. If true, the group can be added to the rows or columns of a financial report.
             * @default false
             * @example false
             */
            isDimensionStructure?: boolean;
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "accounts-receivable-customer-groupRequiredProperties": Record<string, never>;
        /** @description History of invoices delivered by print or email. */
        "objects.accounts-receivable.delivery-history": {
            /**
             * @description System-assigned unique key for the delivery history.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Delivery history ID. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the delivery history.
             * @example /objects/accounts-receivable/delivery-history/23
             */
            readonly href?: string;
            /**
             * @description Object that was delivered.
             * @example invoice
             */
            readonly object?: string;
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `module` field instead.
             */
            description?: string;
            /**
             * @description The Sage Intacct application module the invoice was delivered from.
             * @example AR
             */
            readonly module?: string;
            /**
             * Format: date
             * @description The date of the invoice.
             * @example 2025-02-19
             */
            readonly documentDate?: string;
            /**
             * Format: date
             * @description The date the invoice was delivered.
             * @example 2025-02-20
             */
            readonly deliveryDate?: string;
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `deliveryMethod` field instead.
             * @default print
             * @enum {string}
             */
            deliveryOptions?: "print" | "email" | "onlineDelivery" | "printEmail";
            /**
             * @description Method used to deliver the invoice.
             * @default print
             * @example print
             * @enum {string}
             */
            readonly deliveryMethod?: "print" | "email" | "onlineDelivery" | "printEmail";
            /**
             * @description The data that makes up the invoice.
             * @example Blob data
             */
            readonly data?: string;
            /** @description Supporting document attached to the invoice. */
            readonly attachment?: {
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/21
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the attachment.
                 * @example 21
                 */
                readonly key?: string;
                /**
                 * @description ID for the attachment.
                 * @example 21
                 */
                readonly id?: string;
            };
        };
        /** @description An AR invoice object represents an invoice sent to a customer for goods or services provided. */
        "objects.accounts-receivable.invoice": {
            /**
             * @description System-assigned key for the AR invoice.
             * @example 11
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the AR invoice.
             * @example 11
             */
            readonly id?: string;
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `state` field instead.
             * @default submit
             * @example submit
             * @enum {string}
             */
            action?: "submit" | "draft";
            /**
             * @description The record type for the invoice.
             * @example ri
             */
            readonly recordType?: string;
            /**
             * @description Key of the module from which the invoice was created.
             * @default accountsReceivable
             * @example accountsReceivable
             * @enum {string}
             */
            readonly moduleKey?: "accountsReceivable" | "orderEntry";
            /**
             * @description Specify a unique invoice number while creating an invoice unless document sequencing is configured, in which case the number is auto-generated.
             * @example INV-001
             */
            invoiceNumber?: string;
            /**
             * @description An invoice's state shows the current status of the invoice within the workflow.
             *     The state can be modified through workflow operations like Submit and Reverse, but cannot be changed using the PATCH operation.
             * @default posted
             * @example posted
             * @enum {string}
             */
            state?: "reversed" | "reversal" | "draft" | "noValue" | "posted" | "paid" | "partiallyPaid" | "selected";
            /**
             * @description Number of days until the invoice is due.
             * @example 108
             */
            readonly dueInDays?: number;
            /**
             * @description Customer purchase order number or another reference number.
             * @example PO6917
             */
            referenceNumber?: string;
            /**
             * @description Description of the invoice, which prints on the Customer Ledger report.
             * @example Regular invoice
             */
            description?: string;
            /**
             * @deprecated
             * @description This field is deprecated, please use `salesDocument` field instead.
             */
            documentId?: string;
            readonly salesDocument?: {
                /**
                 * @description Document ID of the sales invoice.
                 * @example Sales Invoice-SI-00188
                 */
                readonly id?: string;
                /**
                 * @description System-assigned key to uniquely identify the order entry document.
                 * @example 511
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the order entry document.
                 * @example /objects/order-entry/document/511
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Date of the discount.
             * @example 2022-12-13
             */
            readonly discountCutOffDate?: string;
            /**
             * Format: date
             * @description Date the invoice was created.
             * @example 2022-12-06
             */
            invoiceDate?: string;
            /**
             * Format: date
             * @description Date the invoice is due.
             * @example 2022-12-31
             */
            dueDate?: string;
            /** @description Currency details for this invoice. */
            currency?: {
                /**
                 * @description Base currency for the invoice.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * @description The transaction currency to use for this invoice. If this currency is different from the base currency, provide an exchange rate.
                 * @example USD
                 */
                txnCurrency?: string;
                /**
                 * exchangeRate
                 * @description Exchange rate details used to calculate the base amount.
                 */
                exchangeRate?: {
                    /**
                     * Format: date
                     * @description Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid.
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
             * @description For multi-currency companies, total entered in the base currency of the company.
             * @example 700000
             */
            readonly totalBaseAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description For multi-currency companies, total due in the base currency of the company.
             * @example 700000
             */
            readonly totalBaseAmountDue?: string;
            /**
             * Format: decimal-precision-2
             * @description Total transaction amount in the currency of the invoice.
             * @example 700000
             */
            readonly totalTxnAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Total transaction amount due in the currency of the invoice.
             * @example 700000
             */
            readonly totalTxnAmountDue?: string;
            /**
             * @description Number of associated dunning notices.
             * @example 1
             */
            readonly dunningCount?: number;
            /** @description Message to include on the customer's invoice. */
            customerMessage?: {
                /**
                 * @description System-assigned key for the customer message.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description ID for the customer message.
                 * @example welcome message
                 */
                id?: string;
                /**
                 * @description Message text for the customer message.
                 * @example welcome to the company
                 */
                message?: string;
                /**
                 * @description URL endpoint for the customer message.
                 * @example /objects/accounts-receivable/customer-message/10
                 */
                readonly href?: string;
            };
            /** @description Recurring schedule used to automate the billing process. */
            readonly recurringSchedule?: {
                /**
                 * @description System-assigned key to uniquely identify the recurring schedule.
                 * @example 20
                 */
                readonly key?: string;
            };
            /** @description Payment information for the invoice. */
            readonly paymentInformation?: {
                /**
                 * Format: date
                 * @description Date the invoice was paid.
                 * @example 2021-01-23
                 */
                readonly fullyPaidDate?: string | null;
                /**
                 * @description Number of days from invoiceDate to fullyPaidDate.
                 * @example 23
                 */
                readonly daysToPay?: number | null;
                /**
                 * @description Number of days from invoice dueDate to fullyPaidDate.
                 * @example 3
                 */
                readonly daysPaidAfterDue?: number | null;
                /**
                 * Format: decimal-precision-2
                 * @description Total paid in the company's base currency.
                 * @example 500
                 */
                readonly totalBaseAmountPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total selected for payment in the company's base currency.
                 * @example 500
                 */
                readonly totalBaseAmountSelectedForPayment?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount selected for payment in the invoice currency.
                 * @example 500
                 */
                readonly totalTxnAmountSelectedForPayment?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount paid in the invoice currency.
                 * @example 500
                 */
                readonly totalTxnAmountPaid?: string;
            };
            /** @description Associated contacts */
            contacts?: {
                /**
                 * payTo
                 * @description Pay to contact information from the customer record.
                 */
                payTo?: {
                    /**
                     * @description System-assigned key to uniquely identify the contact.
                     * @example 176
                     */
                    key?: string;
                    /**
                     * @description Name of the contact.
                     * @example Power Aerospace Materials(C1)
                     */
                    id?: string;
                    /**
                     * @description URL for the contact.
                     * @example /objects/company-config/contact-version/176
                     */
                    readonly href?: string;
                };
                /**
                 * returnTo
                 * @description Return to contact information from the customer record.
                 */
                returnTo?: {
                    /**
                     * @description System-assigned key to uniquely identify the contact.
                     * @example 176
                     */
                    key?: string;
                    /**
                     * @description Name of the contact
                     * @example Power Aerospace Materials(C1)
                     */
                    id?: string;
                    /**
                     * @description URL for the contact.
                     * @example /objects/company-config/contact-version/176
                     */
                    readonly href?: string;
                    /**
                     * tax
                     * @description Tax related information for the ship-to contact.
                     */
                    tax?: {
                        /**
                         * @description Tax identification number.
                         * @example 252-85-7897
                         */
                        taxId?: string | null;
                        /** @description Contact tax group associated with the ship-to contact. */
                        group?: {
                            /**
                             * @description System-assigned key for the group.
                             * @example 288
                             */
                            key?: string | null;
                            /**
                             * @description Unique identifier for the group.
                             * @example Goods Zero Rate - CA
                             */
                            id?: string | null;
                            /**
                             * @description URL endpoint for the group.
                             * @example /objects/tax/contact-tax-group/288
                             */
                            readonly href?: string;
                        };
                    };
                };
            };
            /**
             * @description If `true`, this invoice record is created by the system internally and not created based on user input.
             * @default false
             * @example true
             */
            readonly isSystemGeneratedDocument?: boolean;
            /** @description If AR is configured for inter-entity bill back, the template to use to create a matching bill. */
            billbackTemplate?: {
                /**
                 * @description System-assigned key for the template.
                 * @example 18
                 */
                key?: string;
                /**
                 * @description ID for the template.
                 * @example BBT-error5
                 */
                id?: string;
                /**
                 * @description URL for the template.
                 * @example /objects/accounts-receivable/billback-template/18
                 */
                readonly href?: string;
            };
            /**
             * @deprecated
             * @description **Deprecated.** This field is no longer required and will be ignored.
             *     The matching bill is now created automatically when `billbackTemplate` is provided, if AR is configured for inter-entity bill back.
             * @default false
             * @example true
             */
            createAPBill?: boolean;
            /** @description Supporting document attached to the invoice. */
            attachment?: {
                /**
                 * @description System-assigned key for the supporting document.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description System-assigned ID for the supporting document.
                 * @example 11
                 */
                id?: string;
                /**
                 * @description URL for the attachment.
                 * @example /objects/company-config/attachment/11
                 */
                readonly href?: string;
            };
            /** @description Customer to receive the invoice. */
            customer?: {
                /**
                 * @description System-assigned key for the customer.
                 * @example 14
                 */
                key?: string;
                /**
                 * @description Unique identifier of the customer.
                 * @example C-00019
                 */
                id?: string;
                /**
                 * @description Name of the customer.
                 * @example Haversham Textiles Corp
                 */
                readonly name?: string;
                /**
                 * @description Indicates whether email is a delivery option for the customer.
                 * @default false
                 * @example false
                 */
                readonly emailOption?: boolean;
                /**
                 * Format: decimal-precision-2
                 * @description Amount due from the customer.
                 * @example 124041.29
                 */
                readonly customerDue?: string;
                /**
                 * @description Invoice delivery options for the customer.
                 * @default print
                 * @example both
                 * @enum {string}
                 */
                deliveryOptions?: "print" | "email" | "both";
                /**
                 * @description URL for the customer.
                 * @example /objects/accounts-receivable/customer/14
                 */
                readonly href?: string;
            };
            /** @description Term details for the invoice. */
            term?: {
                /**
                 * @description System-assigned key for the term.
                 * @example 16
                 */
                key?: string;
                /**
                 * @description Name of the term.
                 * @example 30 Days
                 */
                id?: string;
                /**
                 * @description URL for the term.
                 * @example /objects/accounts-receivable/term/16
                 */
                readonly href?: string;
            };
            /** @description Tax solution details for this invoice. */
            taxSolution?: {
                /**
                 * @description System-assigned key to uniquely identify the tax solution.
                 * @example 4
                 */
                key?: string | null;
                /**
                 * @description Name or other unique identifier for the tax solution.
                 * @example Australia GST
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/4
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies whether the transaction is a regular invoice (invoice), an electronic invoice (eInvoice), or an invoice reported to the tax agency because it is not eligible for e-invoicing (eReporting).
             * @example invoice
             * @enum {string}
             */
            invoiceType?: null | "invoice" | "eInvoice" | "eReporting";
            /**
             * @description Invoice mode for France e-invoicing workflows; applicable only for France e-invoice enabled entities.
             *     Specifies the invoice mode based on invoiceType. For eReporting, specify tlb1 (goods) or tps1 (services). For eInvoice, specify b1 or s1.
             *
             *     Supported values:
             *     - `tlb1` - E-Reporting mode for goods.
             *     - `tps1` - E-Reporting mode for services.
             *     - `b1` - Submission of an e-invoice for goods.
             *     - `s1` - Submission of an e-invoice for services.
             *
             *     Leave this field blank when `invoiceType` is `invoice`.
             * @example b1
             * @enum {string}
             */
            invoiceMode?: null | "tlb1" | "tps1" | "b1" | "s1";
            /**
             * @description Current status of an e-invoice; applicable only when selected invoice type is eInvoice.
             *
             *     Supported statuses:
             *     - `submitted` - The supplier submits its invoice or credit note to the public invoicing portal or its registered private platform.
             *     - `issuedByPlatform` - The invoice has been processed on the supplier’s platform and issued to the buyer.
             *     - `fileUploaded` - The invoice file has been uploaded to the platform.
             *     - `madeAvailable` - The invoice has been made available to the buyer on the public invoicing portal or its registered private platform.
             *     - `inHand` - The invoice is assumed by the buyer for processing.
             *     - `refused` - The invoice has been refused by the recipient for business reasons. A complete list of reasons for refusal is available in the document "Annex 1 - Semantic Format FE e-invoicing - Flows 1 & 2" on the "Reason for refusal" tab.
             *     - `paymentSent` - The bank transfer flow has been sent to the supplier / The reimbursement flow has been sent to the buyer.
             *     - `paymentReceived` - The supplier has received payment of the invoice. This status is mandatory for supply of services (except VAT on debits and excluding reverse charge transactions).
             *     - `disputed` - There is a dispute regarding the invoice. This may ultimately lead to refusal or approval by the buyer.
             *     - `notSent` - The invoice has not been sent to the platform.
             *     - `inTransit` - The invoice has been sent and is in transit between platforms.
             *     - `approved` - The invoice has been approved by the buyer.
             *     - `receivedByPlatform` - The invoice has been received by the public invoicing portal or the buyer’s registered private platform but has not yet been made available to the buyer.
             *     - `rejectedByPlatform` - The invoice can be automatically rejected by the platform on technical grounds (e.g. format, non-compliance with the standard, etc.). When the transmit platform rejects the invoice, the invoice must be corrected by its issuer and resubmitted to the platform.
             *     - `suspended` - Processing of the invoice is temporarily suspended.
             *     - `completed` - The invoice processing lifecycle is completed.
             *     - `partiallyApproved` - The invoice has been partially approved.
             * @example paymentReceived
             * @enum {string}
             */
            readonly eInvoiceStatus?: null | "submitted" | "issuedByPlatform" | "fileUploaded" | "madeAvailable" | "inHand" | "refused" | "paymentSent" | "paymentReceived" | "disputed" | "notSent" | "inTransit" | "approved" | "receivedByPlatform" | "rejectedByPlatform" | "suspended" | "completed" | "partiallyApproved";
            /** @description France E-invoicing dispute information. */
            dispute?: {
                /**
                 * @description Dispute reason (France E-invoicing only).
                 * @example recipientNotConnected
                 * @enum {string}
                 */
                readonly reason?: null | "recipientNotConnected" | "other" | "bankDetailsError" | "incorrectVATRate" | "incorrectTotalAmount" | "invoiceCalculationError" | "legalNoticeMissing" | "duplicateInvoice" | "errorInRecipientInformation" | "unknownTransaction" | "issuerUnknown" | "contractCompleted" | "doubleInvoice" | "orderNumberIncorrectOrMissing" | "incorrectEmailBillingAddress" | "incorrectOrMissingSiretNumber" | "routingCodeMissingOrIncorrect" | "contractualReferenceRequired" | "incorrectReference" | "incorrectUnitPrices" | "incorrectDiscount" | "incorrectQuantityBilled" | "itemBilledIncorrectly" | "incorrectPaymentMethod" | "incorrectQualityOfItemDelivered" | "deliveryProblem";
                /**
                 * @description Additional information for disputing the bill which is supported only for France E-invoicing.
                 *     Use this field to provide the detail that explains why the bill was disputed.
                 * @example Does not have an active invoice receiving address
                 */
                readonly notes?: string;
            };
            /** @description France E-invoicing refusal information. */
            refuse?: {
                /**
                 * @description Refusal reason (France E-invoicing only).
                 * @example incorrectVATRate
                 * @enum {string}
                 */
                readonly reason?: null | "incorrectVATRate" | "incorrectTotalAmount" | "invoiceCalculationError" | "legalNoticeMissing" | "duplicateInvoice" | "errorInRecipientInformation" | "unknownTransaction" | "issuerUnknown" | "contractCompleted" | "doubleInvoice" | "orderNumberIncorrectOrMissing" | "incorrectEmailBillingAddress" | "contractualReferenceRequired";
                /**
                 * @description Additional information for refusing the bill which is supported only for France E-invoicing.
                 *     Use this field to provide the detail that explains why the bill was refused.
                 * @example The VAT rate used is not the one that should have been
                 */
                readonly notes?: string;
            };
            /** @description Summary details for this invoice. Summaries are collections of the same types of transactions grouped together for processing. */
            invoiceSummary?: {
                /**
                 * @description System-assigned key to uniquely identify the summary.
                 * @example 33
                 */
                key?: string;
                /**
                 * @description Name of the summary.
                 * @example OE Sales Invoice: 2023 Batch 1
                 */
                id?: string;
                /**
                 * Format: date
                 * @description GL posting date for the summary.
                 * @example 2023-02-06
                 */
                glPostingDate?: string;
                /**
                 * @description A summary can be `open` or `closed`. Items, such as invoices, can be added to open summaries.
                 * @example open
                 * @enum {string}
                 */
                readonly isSummaryOpen?: "open" | "closed";
                /**
                 * @description If `true`, the summary has been posted to the General Ledger.
                 * @example false
                 */
                readonly isSummaryPosted?: string;
                /**
                 * @description URL for the term.
                 * @example /objects/accounts-receivable/summary/33
                 */
                readonly href?: string;
            };
            /**
             * Format: outbound-binary
             * @description Contains download link for an invoice.
             * @example /services/core/content/download?key=106&resource=objects/accounts-receivable/invoice&field=/downloadURL
             */
            readonly downloadURL?: string;
            /**
             * @description Indicates whether online payment through a Payment Acceptance Services (PAS), like Stripe or PayPal, is enabled for this invoice.
             * @default false
             * @example true
             */
            readonly allowOnlinePayment?: boolean;
            /** @description Provider payment details for the invoice. */
            providerPayment?: {
                /**
                 * @description Unique key for the provider payment.
                 * @example 4
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the provider payment.
                 * @example 4
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the provider payment.
                 * @example /objects/accounts-receivable/provider-payment/4
                 */
                readonly href?: string;
                /**
                 * @description Current state of the payment processed by a payment provider.
                 * @default inProgress
                 * @example processingCompleted
                 * @enum {string}
                 */
                readonly state?: null | "inProgress" | "pending" | "unauthorized" | "arrived" | "rejected" | "paidOffline" | "cancelled" | "processing" | "processingCompleted" | "processingFailed" | "refunded" | "partiallyPaid" | "partiallyRefunded" | "paid" | "requestFailed";
            };
            /** @description Retainage information for the invoice. Retainage is a portion of the agreed-upon contract price withheld until the work is substantially complete. (Construction subscription) */
            readonly retainage?: {
                /**
                 * Format: percent-precision-2
                 * @description Default retainage percentage for the customer.
                 * @example 5.00
                 */
                readonly defaultPercentage?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount retained.
                 * @example 200.00
                 */
                readonly totalTxnAmountRetained?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount released.
                 * @example 100.00
                 */
                readonly totalTxnAmountReleased?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount retained.
                 * @example 100.00
                 */
                readonly totalBaseAmountRetained?: string | null;
                /**
                 * @description Indicates whether the retainage is released.
                 * @default false
                 * @example true
                 */
                readonly isReleased?: boolean;
            };
            /** @description Reference to the project contract. (Construction subscription) */
            readonly projectContract?: components["schemas"]["project-contract-ref"] & {
                /**
                 * @description Project contract key
                 * @example 1
                 */
                readonly key?: string | null;
                /**
                 * @description Project contract ID
                 * @example BTI-01
                 */
                readonly id?: string | null;
            };
            /** @description Project contract billing details for the invoice. (Construction subscription) */
            readonly projectContractBilling?: {
                /**
                 * @description External reference number for the project contract.
                 * @example HGS-1024
                 */
                readonly externalReferenceNumber?: string | null;
                /**
                 * @description Description of the project contract.
                 * @example Construction of club house and offices
                 */
                readonly description?: string | null;
                /**
                 * Format: date
                 * @description Date of the project contract in the yyyy-mm-dd format.
                 * @example 2026-01-08
                 */
                readonly contractDate?: string | null;
                /**
                 * Format: date
                 * @description Billing through date for the Account Receivable Invoice in the yyyy-mm-dd format.
                 * @example 2026-01-30
                 */
                readonly billingThroughDate?: string | null;
                /**
                 * @description Billing application number for the Account Receivable Invoice.
                 * @example IA-89115
                 */
                readonly billingApplicationNumber?: string | null;
            };
            /** @description Reference to a project contract architect contact. (Construction subscription) */
            readonly architect?: {
                /**
                 * @description System-assigned key for the contact.
                 * @example 12
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the contact.
                 * @example Eberhardt
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the architect contact.
                 * @example /objects/company-config/contact/12
                 */
                readonly href?: string | null;
            };
            projectContractBillingInvoiceSummary?: components["schemas"]["project-contract-billing-invoice-summary-ref"];
            /** @description Line items of the invoice. */
            lines?: components["schemas"]["objects.accounts-receivable.invoice-line"][];
            entity?: components["schemas"]["entity-ref"];
            /** @description RecordURL of the invoice. */
            readonly webURL?: string;
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
        };
        "accounts-receivable-invoiceRequiredProperties": {
            customer?: Record<string, never>;
            lines?: {
                glAccount?: Record<string, never>;
                dimensions?: {
                    location?: Record<string, never>;
                };
            }[];
        };
        "accounts-receivable-invoice-actions-submit-request": {
            /**
             * @description System-assigned key for the invoice.
             * @example 11
             */
            key: string;
        };
        "accounts-receivable-invoice-actions-submit-response": {
            /**
             * @description System-assigned key for the invoice.
             * @example 11
             */
            key?: string;
            /**
             * @description Unique ID for the invoice.
             * @example 11
             */
            id?: string;
            /**
             * @description URL endpoint for the invoice.
             * @example /objects/accounts-receivable/invoice/11
             */
            href?: string;
            /**
             * @description State of the invoice after the submission.
             * @example posted
             */
            state?: string;
        };
        "accounts-receivable-invoice-actions-reclassify-request": {
            /**
             * @description System-assigned key for the invoice.
             * @example 11
             */
            key: string;
            /**
             * @description Unique ID for the invoice.
             * @example 11
             */
            id?: string;
            /**
             * @description Unique invoice number specified when creating an invoice or auto-generated when document sequencing is configured.
             * @example INV-001
             */
            invoiceNumber?: string;
            /**
             * @description Customer purchase order number or another reference number.
             * @example PO6917
             */
            referenceNumber?: string;
            /**
             * @description Description of the invoice, which prints on the Customer Ledger report.
             * @example Regular invoice
             */
            description?: string;
            /** @description Term details for the invoice. */
            term?: {
                /**
                 * @description System-assigned key for the term.
                 * @example 16
                 */
                key?: string;
                /**
                 * @description Name of the term.
                 * @example 30 Days
                 */
                id?: string;
                /**
                 * @description URL for the term.
                 * @example /objects/accounts-receivable/term/16
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Date the invoice is due.
             * @example 2025-12-31
             */
            dueDate?: string;
            /** @description Supporting document attached to the invoice. */
            attachment?: {
                /**
                 * @description System-assigned key for the supporting document.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description ID for the supporting document.
                 * @example 11
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/11
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the invoice.
             * @example /objects/accounts-receivable/invoice/11
             */
            readonly href?: string;
            /** @description Line items of the invoice. */
            lines?: components["schemas"]["objects.accounts-receivable.invoice-line"][];
        };
        "accounts-receivable-invoice-actions-reclassify-response": {
            /**
             * @description System-assigned key for the invoice.
             * @example 132
             */
            key?: string;
            /**
             * @description Unique ID for the invoice.
             * @example 132
             */
            id?: string;
            /**
             * @description URL endpoint for the invoice.
             * @example /objects/accounts-receivable/invoice/11
             */
            href?: string;
            /**
             * @description State of the invoice after reclassification.
             * @example posted
             */
            state?: string;
        };
        "accounts-receivable-invoice-actions-reverse-request": {
            /**
             * @description System-assigned key for the invoice.
             * @example 22
             */
            key: string;
            /**
             * Format: date
             * @description Date the transactions is reversed.
             * @example 2025-04-15
             */
            reversedDate: string;
            /**
             * @description Notes or comments about the reason for the invoice reversal.
             * @example Reversed the invoice for duplicate entry
             */
            memo?: string;
        };
        "accounts-receivable-invoice-actions-reverse-response": {
            /**
             * @description System-assigned key for the invoice.
             * @example 23
             */
            key?: string;
            /**
             * @description Unique ID for the invoice.
             * @example 23
             */
            id?: string;
            /**
             * @description URL endpoint for the invoice.
             * @example /objects/accounts-receivable/invoice/23
             */
            href?: string;
            /**
             * @description State of the invoice after reversal.
             * @example reversed
             */
            state?: string;
        };
        "accounts-receivable-invoice-actions-generate-pdf-request": {
            /**
             * @description System-assigned key for the invoice.
             * @example 132
             */
            key: string;
        };
        "accounts-receivable-invoice-actions-generate-pdf-response": {
            /**
             * @description System-assigned key for the invoice.
             * @example 132
             */
            key?: string;
            /**
             * @description Unique ID for the invoice.
             * @example 132
             */
            id?: string;
            /**
             * @description URL endpoint for the invoice.
             * @example /objects/accounts-receivable/invoice/132
             */
            href?: string;
            /**
             * @description The download link for the invoice.
             * @example /services/core/content/download?key=106&resource=objects/accounts-receivable/invoice&field=/downloadURL
             */
            downloadURL?: string;
        };
        /** @description Line items in an AR invoice represent transactions captured in that invoice. */
        "objects.accounts-receivable.invoice-line": {
            /**
             * @description System-assigned key for the AR invoice line item.
             * @example 103
             */
            readonly key?: string;
            /**
             * @description Identifier for the AR invoice line item.
             * @example 103
             */
            readonly id?: string;
            /** @description General Ledger (GL) account associated with the line item. */
            glAccount?: {
                /**
                 * @description System-assigned key for the GL account.
                 * @example 163
                 */
                key?: string;
                /**
                 * @description User-assigned number for the GL account.
                 * @example 4010
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example Sales Revenue Licensing
                 */
                readonly name?: string;
                /** @example /objects/general-ledger/account/163 */
                readonly href?: string;
            };
            /** @description An alternative AR account to override the default GL AR account for the invoice line item. */
            overrideOffsetGLAccount?: {
                /**
                 * @description System-assigned key for the GL account.
                 * @example 263
                 */
                key?: string;
                /**
                 * @description GL account number.
                 * @example 1103
                 */
                id?: string;
                /**
                 * @description GL account name.
                 * @example Accounts Receivable - Microcomputer
                 */
                readonly name?: string;
                /**
                 * @description URL for the GL account.
                 * @example /objects/general-ledger/account/263
                 */
                readonly href?: string;
            };
            /**
             * Format: decimal-precision-2
             * @description For multi-currency companies, Sage Intacct calculates the base amount by applying the exchange rate from the header to the transaction amount.
             * @example 24115.65
             */
            readonly baseAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount for the AR invoice line item in the transaction currency.
             * @example 16740.00
             */
            txnAmount?: string;
            /**
             * @description Memo or notes about the AR invoice line item.
             * @example Replaces discontinued part
             */
            memo?: string;
            /** @description Currency details for multi-currency companies. */
            readonly currency?: {
                /**
                 * @description Base currency for the invoice line item.
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /**
                 * @description Transaction currency for the invoice line item.
                 * @example EUR
                 */
                readonly txnCurrency?: string;
                /**
                 * exchangeRate
                 * @description Exchange rate details used to calculate the base amount.
                 */
                exchangeRate?: {
                    /**
                     * Format: date
                     * @description Exchange rate date used to calculate the base amount from the transaction amount.
                     * @example 2021-01-23
                     */
                    readonly date?: string;
                    /**
                     * @description Exchange rate used to calculate the base amount from the transaction amount.
                     * @example 1.0789
                     */
                    readonly rate?: number;
                    /**
                     * @description Exchange rate type used to calculate the base amount from the transaction amount.
                     * @example -1
                     */
                    readonly typeId?: string;
                };
            };
            /** @description Payment information for the line item. */
            readonly paymentInformation?: {
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount that was paid.
                 * @example 100.00
                 */
                readonly totalBaseAmountPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount that was paid.
                 * @example 100.00
                 */
                readonly totalTxnAmountPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount selected for the payment.
                 * @example 100.00
                 */
                readonly totalBaseAmountSelectedForPayment?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount selected for the payment.
                 * @example 100.00
                 */
                readonly totalTxnAmountSelectedForPayment?: string;
            };
            /** @description Transaction allocation template for the line item, which distributes the invoice amount across specified dimensions. */
            allocation?: {
                /**
                 * @description System-assigned key for the allocation.
                 * @example 22
                 */
                key?: string | null;
                /**
                 * @description System-assigned ID for the allocation.
                 * @example Premium Allocation
                 */
                id?: string | null;
                /** @example /objects/general-ledger/txn-allocation-template/21 */
                readonly href?: string;
            };
            /**
             * @description Line number
             * @example 1
             */
            readonly lineNumber?: number;
            /**
             * @description Indicates if the line item is a subtotal, tax item, or neither.
             * @default null
             * @example subtotal
             * @enum {string|null}
             */
            readonly isSubtotal?: null | "subtotal" | "tax";
            readonly baseLocation?: components["schemas"]["location-ref"] & {
                /**
                 * @description Base location key.
                 * @example 4
                 */
                key?: string;
            };
            /**
             * Format: date
             * @description Entry date for the line item.
             * @example 2021-01-23
             */
            readonly createdDate?: string;
            /** @description Meaningful name of AR account. */
            accountLabel?: {
                /**
                 * @description System-assigned key for the account label.
                 * @example 14
                 */
                key?: string;
                /**
                 * @description Meaningful name of the account.
                 * @example Accounts Receivable - Microcomputer
                 */
                id?: string;
                /**
                 * @description Name of the account label.
                 * @example Sales Midwest
                 */
                readonly name?: string;
                /**
                 * @description URL for the account label.
                 * @example /objects/accounts-receivable/account-label/14
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates whether the entry is summarized. (Construction subscription)
             * @default false
             * @example false
             */
            readonly isSummarized?: boolean;
            /** @description Retainage information for the line item. Retainage is a portion of the agreed upon contract price withheld until the work is substantially complete. (Construction subscription) */
            readonly retainage?: {
                /**
                 * @description If `true`, retainage applies to the line item.
                 * @default false
                 * @example true
                 */
                readonly hasRetainage?: boolean;
                /**
                 * Format: percent-precision-2
                 * @description Retainage percentage for the line item.
                 * @example 2.00
                 */
                readonly percentage?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Base amount retained for the line item.
                 * @example 20.00
                 */
                readonly baseAmountRetained?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Transaction amount retained for the line item.
                 * @example 20.00
                 */
                readonly txnAmountRetained?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Transaction amount released for the line item.
                 * @example 10.00
                 */
                readonly txnAmountReleased?: string | null;
                /**
                 * @description Indicates whether retainage is released to pay.
                 * @default false
                 * @example true
                 */
                readonly isReleased?: boolean;
                /**
                 * @description Indicates whether the line item is a retainage release.
                 * @default false
                 * @example true
                 */
                readonly isReleaseLine?: boolean;
                /**
                 * offsetGLAccount
                 * @description The GL account where the system posts retainage offsets to this line item.
                 */
                readonly offsetGLAccount?: {
                    /**
                     * @description System-assigned key for the GL account.
                     * @example 263
                     */
                    readonly key?: string | null;
                    /**
                     * @description GL account number.
                     * @example 1103
                     */
                    readonly id?: string | null;
                    /**
                     * @description GL account name.
                     * @example Accounts Receivable - Microcomputer
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the GL account.
                     * @example /objects/general-ledger/account/263
                     */
                    readonly href?: string | null;
                };
            };
            /** @description Reference to the project contract. (Construction subscription) */
            readonly projectContract?: components["schemas"]["project-contract-ref"] & {
                /**
                 * @description Project contract key
                 * @example 1
                 */
                readonly key?: string | null;
                /**
                 * @description Project contract ID
                 * @example BTI-01
                 */
                readonly id?: string | null;
            };
            /** @description Reference to a specific project contract line. (Construction subscription) */
            readonly projectContractLine?: components["schemas"]["project-contract-line-ref"] & {
                /**
                 * @description Project contract line key
                 * @example 4
                 */
                readonly key?: string | null;
                /**
                 * @description Project contract line ID
                 * @example Project-Contract-Line-04
                 */
                readonly id?: string | null;
            };
            /** @description Tax entries for the AR invoice. */
            taxEntries?: components["schemas"]["objects.accounts-receivable.invoice-tax-entry"][];
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Standard Sage Intacct dimension that allows you to create a hierarchy of locations to reflect how your company is organized.
                 */
                location?: {
                    /**
                     * @description System-assigned key for the location.
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
                    /** @example /objects/company-config/location/4 */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Standard Sage Intacct dimension that allows you to create a hierarchy of departments to reflect how your company is organized.
                 */
                department?: {
                    /**
                     * @description System-assigned key for the department.
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
                     * @example Sales
                     */
                    readonly name?: string;
                    /** @example /objects/company-config/department/9 */
                    readonly href?: string;
                };
            };
            /** @description Header level details for the AR invoice's line items. */
            invoice?: {
                /**
                 * @description Identifier for the AR invoice.
                 * @example 6
                 */
                readonly id?: string;
                /**
                 * @description System-assigned key for the AR invoice.
                 * @example 6
                 */
                key?: string;
                /**
                 * @description URL for the AR invoice.
                 * @example /objects/accounts-receivable/invoice/6
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "accounts-receivable-invoice-lineRequiredProperties": Record<string, never>;
        /** @description For VAT enabled transactions, invoice line items will have tax entries. */
        "objects.accounts-receivable.invoice-tax-entry": {
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
            /** @description Order Entry tax details associated with the invoice tax entry. */
            orderEntryTaxDetail?: {
                /**
                 * @description Unique key for the Order Entry tax detail.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the Order Entry tax detail.
                 * @example Alaska Tax Detail
                 */
                id?: string;
                /**
                 * @description URL endpoint for the Order Entry tax detail.
                 * @example /objects/tax/order-entry-tax-detail/1
                 */
                readonly href?: string;
            };
            /**
             * invoice-line
             * @description Invoice line item that the invoice tax entry is associated with.
             */
            readonly invoiceLine?: {
                /**
                 * @description Unique identifier for the invoice line.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the invoice line. This value is the same as the `key` for this object.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the invoice line.
                 * @example /objects/accounts-receivable/invoice-line/100
                 */
                readonly href?: string;
            };
        };
        /** @description Collection of invoices grouped together for processing. */
        "objects.accounts-receivable.invoice-summary": {
            /**
             * @description System-assigned key for the invoice summary.
             * @example 13
             */
            readonly key?: string;
            /**
             * @description ID for the invoice summary. This value is the same as key for this object.
             * @example 13
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the invoice summary.
             * @example /objects/accounts-receivable/invoice-summary/23
             */
            readonly href?: string;
            /**
             * @description Name of the invoice summary. The system uses this name to identify the summary throughout the Accounts Receivable application.
             * @example Invoices: 2019/12/01 Batch
             */
            name?: string;
            /**
             * @description If set to `manual`, the summary was created by a user and if set to `system`, the summary was created by Sage Intacct based on the summary frequency.
             * @default manual
             * @example manual
             * @enum {string}
             */
            readonly summaryCreationType?: "system" | "manual";
            /**
             * Format: date
             * @description The date that the items included in the summary should post to the general ledger.
             * @example 2023-05-06
             */
            glPostingDate?: string;
            /**
             * @description The record type determines the type of items the summary should contain. Record type ri (invoices)
             * @default invoice
             * @example invoice
             * @enum {string}
             */
            readonly recordType?: "invoice";
            /**
             * Format: decimal-precision-2
             * @description Total amount of all transactions included in the summary.
             * @example 120.12
             */
            readonly totalAmount?: string;
            /**
             * @description State of the summary, which can be `open` or `closed`. An open summary can have items added to it.
             * @default open
             * @example open
             * @enum {string}
             */
            state?: "open" | "closed";
            /** @description Parent of the invoice summary. */
            parent?: {
                /**
                 * @description System-assigned key for the parent summary.
                 * @example 13
                 */
                key?: string;
                /**
                 * @description Identifier for the parent summary.
                 * @example 13
                 */
                id?: string;
                /**
                 * @description URL endpoint for the parent summary.
                 * @example /objects/accounts-receivable/summary/13
                 */
                readonly href?: string;
            };
            /**
             * @description Set to `true` to prevent posting the summary items to the general ledger.
             * @default false
             * @example false
             */
            preventGLPosting?: boolean;
            /**
             * @description This field is set to `true` only for manual and quick payment summaries.
             * @default false
             * @example false
             */
            isQuickPaymentSummary?: boolean;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description An AR payment is a transaction used to record a payment against an AR invoice or an AR adjustment/debit memo. */
        "objects.accounts-receivable.payment": {
            /**
             * @description System-assigned unique key for the AR payment.
             * @example 310
             */
            readonly key?: string;
            /**
             * @description ID for the AR payment. This value is the same as the `key` for this object.
             * @example 310
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AR payment.
             * @example /objects/accounts-receivable/payment/310
             */
            readonly href?: string;
            /**
             * @description Type of payment record.
             * @example rp
             */
            readonly recordType?: string;
            /**
             * @description Name of the payer.
             * @example NF Power and Light
             */
            payerName?: string;
            /** @description Financial account from which the payment will be made. */
            financialEntity?: {
                /**
                 * @description Financial entity ID, such as a checking account ID.
                 * @example CHK002
                 */
                entityId?: string;
                /**
                 * @description Financial entity type.
                 * @example ba
                 */
                readonly entityType?: string;
                /**
                 * @description Bank or other financial institution name.
                 * @example HSBC
                 */
                readonly name?: string;
                /**
                 * @description Bank currency
                 * @example USD
                 */
                readonly currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Transaction amount recorded for the transaction by the bank.
                 * @example 60.00
                 */
                readonly txnAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Base amount recorded for the transaction by the bank.
                 * @example 60.00
                 */
                readonly baseAmount?: string;
                /**
                 * @description The bank's base currency.
                 * @example USD
                 */
                readonly baseCurrency?: string;
            };
            /**
             * @description State of the AR payment.
             *     The state can be modified through workflow operations like Submit and Reverse, but cannot be changed using the PATCH operation.
             * @default complete
             * @example complete
             * @enum {string}
             */
            state?: "complete" | "reconciled" | "draft" | "reversed" | "reversal";
            /** @description Multi-entity payment details. */
            multiEntityPayment?: {
                /**
                 * @description Unique key for the multi-entity payment.
                 * @example 123
                 */
                readonly key?: string | null;
                /**
                 * @description ID for the multi-entity payment.
                 * @example PAY-00136
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the multi-entity payment.
                 * @example /objects/accounts-receivable/payment/123
                 */
                readonly href?: string;
            };
            /**
             * @description Payment Method
             * @example printedCheck
             * @enum {string|null}
             */
            paymentMethod?: null | "printedCheck" | "creditCard" | "eft" | "cash" | "onlineChargeCard" | "onlineAchDebit" | "paymentAcceptanceService";
            /**
             * @description Document number, such as a check number.
             * @example 1567
             */
            documentNumber?: string;
            /**
             * @description Memo or notes about the AR payment.
             * @example Regular payment for services
             */
            description?: string;
            /** @description For multi-currency companies, the company's base currency. */
            baseCurrency?: {
                /**
                 * @description The company's base currency.
                 * @example USD
                 */
                currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Amount to pay in the base currency.
                 * @example 500
                 */
                amountToPay?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount.
                 * @example 500
                 */
                readonly totalAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount paid.
                 * @example 500
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount due.
                 * @example 0
                 */
                readonly totalDue?: string;
            };
            /** @description Transaction currency for the payment. */
            txnCurrency?: {
                /**
                 * @description The currency in which the payment was made.
                 * @example USD
                 */
                currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Amount to pay in the transaction currency.
                 * @example 500
                 */
                amountToPay?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount.
                 * @example 100.00
                 */
                totalAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount paid.
                 * @example 100.00
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount due.
                 * @example 0
                 */
                readonly totalDue?: string;
            };
            /** @description Exchange rate details used to calculate the base amount. */
            readonly exchangeRate?: {
                /**
                 * Format: date
                 * @description Exchange rate date used to calculate the base amount from the transaction amount.
                 * @example 2024-01-23
                 */
                readonly date?: string;
                /**
                 * @description Exchange rate used to calculate the base amount from the transaction amount.
                 * @example 1.0789
                 */
                readonly rate?: number;
                /**
                 * @description Exchange rate type used to calculate the base amount from the transaction amount.
                 * @example -1
                 */
                readonly typeId?: string | null;
            };
            /**
             * @description Indicates whether the payment has been reconciled. If set to cleared, the payment has been reconciled. If set to matched, a matching invoice has been created in the customer entity. If set to uncleared, the payment is pending reconciliation and there is no matching invoice in the customer entity.
             * @default uncleared
             * @example cleared
             * @enum {string}
             */
            readonly bankReconciliationStatus?: "cleared" | "uncleared" | "matched";
            /**
             * Format: date
             * @description Reconciliation date for the payment.
             * @example 2024-04-30
             */
            readonly bankReconciliationDate?: string | null;
            /**
             * @description Reference number, which can be a transaction number from the bank or a document number.
             * @example 1234
             */
            referenceNumber?: string | null;
            /** @description AR summary the payment is part of. Summaries are collections of transactions grouped together for processing. */
            paymentSummary?: {
                /**
                 * @description Unique key for the AR summary.
                 * @example 1259
                 */
                key?: string;
                /**
                 * @description ID for the AR summary.
                 * @example 1259
                 */
                id?: string;
                /**
                 * Format: date
                 * @description Posting date for the AR payment.
                 * @example 2024-01-23
                 */
                receiptDate?: string;
                /**
                 * @description Title of the AR summary.
                 * @example Receipts (Bank-CHK0002): Batch 02-07-2024
                 */
                title?: string;
                /**
                 * @description Name of the AR summary.
                 * @example Feb 2024 batch
                 */
                name?: string;
                /**
                 * @description URL endpoint for the AR summary.
                 * @example /objects/accounts-receivable/summary/1259
                 */
                readonly href?: string;
            };
            /** @description Undeposited funds account associated with this payment. */
            undepositedGLAccount?: {
                /**
                 * @description URL endpoint for the undeposited funds account.
                 * @example /objects/general-ledger/account/356
                 */
                readonly href?: string;
                /**
                 * @description Undeposited funds account number.
                 * @example 1501
                 */
                id?: string | null;
                /**
                 * @description Unique key for the undeposited funds account.
                 * @example 356
                 */
                key?: string | null;
            };
            /** @description Customer associated with the AR payment. */
            customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 45
                 */
                key?: string;
                /**
                 * @deprecated
                 * @description This field has been deprecated.
                 * @example C100
                 */
                readonly entity?: string;
                /**
                 * @description ID for the customer.
                 * @example Cust-00064
                 */
                id?: string;
                /**
                 * @description Name of the customer, which is usually the company name.
                 * @example Gomez Manufacturers
                 */
                name?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/45
                 */
                readonly href?: string;
            };
            /** @description Supporting document for the payment. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description ID for the attachment.
                 * @example 123
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/123
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Date when the invoice was fully paid.
             * @example 2024-01-23
             */
            paidDate?: string;
            /** @description Overpayments can be applied to future invoices and can be tagged to specific dimensions for future use. */
            overPaymentDimensions?: {
                /**
                 * @description Customer who made the payment.
                 * @example C-00013
                 */
                customerId?: string;
                /**
                 * @description ID of the location to assign any overpayment amount to.
                 * @example CA
                 */
                locationId?: string;
                /**
                 * @description ID of the department to assign any overpayment amount to.
                 * @example 04
                 */
                departmentId?: string;
                /**
                 * @description ID of the class to assign any overpayment amount to.
                 * @example Class1
                 */
                classId?: string;
                /**
                 * @description ID of the project to assign any overpayment amount to.
                 * @example 11
                 */
                projectId?: string;
            };
            /**
             * Format: decimal-precision-2
             * @description Amount of the overpayment. When a payment is received that exceeds what the customer owes on all invoices and the amount of the payment is entered, Sage Intacct tracks the excess as an overpayment.
             * @example 100.20
             */
            overPaymentAmount?: string;
            /** @description Contact information for the AR payment. */
            contacts?: {
                /**
                 * payTo
                 * @description Pay-to contact for the AR payment.
                 */
                payTo?: {
                    /**
                     * @description Unique key for the pay-to contact.
                     * @example 8
                     */
                    key?: string;
                    /**
                     * @description ID for the pay-to contact.
                     * @example Klay Vanderbilt
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the pay-to contact.
                     * @example /objects/company-config/contact/8
                     */
                    readonly href?: string;
                };
            };
            /** @description Details for the AR payment. */
            paymentDetails?: components["schemas"]["objects.accounts-receivable.payment-detail"][];
            /** @description Line items of the AR payment. */
            lines?: components["schemas"]["objects.accounts-receivable.payment-line"][];
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            /** @description Record URL for the AR payment. */
            readonly webURL?: string;
            entity?: components["schemas"]["entity-ref"];
        };
        "accounts-receivable-paymentRequiredProperties": {
            paymentDetails?: {
                txnCurrency?: Record<string, never>;
            }[];
            paymentSummary?: Record<string, never>;
            txnCurrency?: Record<string, never>;
        } & ((unknown | unknown) & (unknown | unknown));
        "accounts-receivable-payment-actions-submit-request": {
            /**
             * @description System-assigned key for the payment.
             * @example 12
             */
            key: string;
        };
        "accounts-receivable-payment-actions-submit-response": {
            /**
             * @description System-assigned key for the payment.
             * @example 12
             */
            key?: string;
            /**
             * @description Unique ID for the payment.
             * @example 12
             */
            id?: string;
            /**
             * @description URL endpoint for the payment.
             * @example /objects/accounts-receivable/payment/12
             */
            href?: string;
            /**
             * @description State of the payment after submission.
             * @example completed
             * @enum {string}
             */
            state?: "completed";
        };
        "accounts-receivable-payment-actions-reverse-request": {
            /**
             * @description System-assigned key for the payment.
             * @example 22
             */
            key: string;
            /**
             * Format: date
             * @description Date the transaction is reversed.
             * @example 2025-04-15
             */
            reversedDate: string;
            /**
             * @description Notes or comments about the reason for the payment reversal.
             * @example Reversed the payment for duplicate entry
             */
            memo?: string;
        };
        "accounts-receivable-payment-actions-reverse-response": {
            /**
             * @description System-assigned key for the payment.
             * @example 23
             */
            key?: string;
            /**
             * @description Unique ID for the payment.
             * @example 23
             */
            id?: string;
            /**
             * @description URL endpoint for the payment.
             * @example /objects/accounts-receivable/payment/23
             */
            href?: string;
            /**
             * @description State of the payment after reversal.
             * @example reversal
             */
            state?: string;
        };
        /** @description An AR payment detail object can specify either an object, like an invoice or an adjustment, as a whole (header level), or it can specify a line item. An AR payment detail object also provides the transaction amount that was received. */
        "objects.accounts-receivable.payment-detail": {
            /**
             * @description System-assigned unique key for the AR payment detail object.
             * @example 94
             */
            readonly key?: string;
            /**
             * @description ID for the AR payment detail object. This value is the same as the `key` for this object.
             * @example 94
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AR payment detail object.
             * @example /objects/accounts-receivable/payment-detail/94
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Date the payment was received. For example, for a credit card payment, this date is the date the credit card transaction occurred.
             * @example 2024-04-30
             */
            readonly paymentDate?: string;
            /**
             * Format: date
             * @description Date the discount was applied.
             * @example 2024-04-30
             */
            discountDate?: string;
            /** @description For multi-currency companies, base currency information for the payment detail. */
            baseCurrency?: {
                /**
                 * Format: decimal-precision-2
                 * @description The amount of the payment in the company's base currency.
                 * @example 10
                 */
                paymentAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Inline transaction base amount.
                 * @example 10
                 */
                readonly inlineAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Adjustment transaction base amount.
                 * @example 10
                 */
                readonly adjustmentAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Posted advance base amount.
                 * @example 10
                 */
                readonly postedAdvanceAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Negative invoice transaction base amount.
                 * @example 10
                 */
                readonly negativeInvoiceAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Posted overpayment base amount.
                 * @example 10
                 */
                readonly postedOverPaymentAmount?: string | null;
            };
            /** @description For multi-currency companies, transaction currency information for the payment detail. */
            txnCurrency?: {
                /**
                 * @description Transaction currency.
                 * @example USD
                 */
                readonly currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The amount of the transaction in the payment currency.
                 * @example 243.00
                 */
                paymentAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Inline transaction amount.
                 * @example 100.00
                 */
                inlineAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Adjustment transaction amount.
                 * @example 10
                 */
                adjustmentAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Posted advance transaction amount.
                 * @example 10
                 */
                postedAdvanceAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Posted overpayment transaction amount.
                 * @example 40
                 */
                postedOverPaymentAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Negative invoice transaction amount.
                 * @example 30
                 */
                negativeInvoiceAmount?: string | null;
            };
            /** @description Inline transaction record details. */
            inlineTxn?: {
                /**
                 * @description Unique key for the inline transaction.
                 * @example 89
                 */
                key?: string | null;
                /**
                 * @description Inline transaction ID.
                 * @example 89
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the inline transaction.
                 * @example /objects/accounts-receivable/invoice/89
                 */
                readonly href?: string;
            };
            /** @description Inline transaction line item record. */
            inlineTxnLine?: {
                /**
                 * @description Unique key for the inline transaction line item.
                 * @example 4
                 */
                key?: string | null;
                /**
                 * @description ID for the inline transaction line item.
                 * @example 4
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the inline transaction line item.
                 * @example /objects/accounts-receivable/invoice-line/4
                 */
                readonly href?: string;
            };
            /** @description Posted advance record. */
            readonly postedAdvance?: {
                /**
                 * @description Unique key for the posted advance.
                 * @example 25
                 */
                readonly key?: string | null;
                /**
                 * @description ID for the posted advance.
                 * @example 25
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the posted advance.
                 * @example /objects/accounts-receivable/advance/25
                 */
                readonly href?: string;
            };
            /** @description Posted advance line item record. */
            readonly postedAdvanceLine?: {
                /**
                 * @description Unique key for the posted advance line item.
                 * @example 112
                 */
                readonly key?: string | null;
                /**
                 * @description ID for the posted advance line item.
                 * @example 112
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the posted advance line item.
                 * @example /objects/accounts-receivable/advance-line/112
                 */
                readonly href?: string;
            };
            /** @description Posted overpayment record. */
            readonly postedOverPayment?: {
                /**
                 * @description Unique key for the posted overpayment record.
                 * @example 3328
                 */
                readonly key?: string | null;
                /**
                 * @description ID for the posted overpayment record.
                 * @example 3328
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the posted overpayment record.
                 * @example /objects/accounts-receivable/payment/3328
                 */
                readonly href?: string;
            };
            /** @description Posted overpayment line item record. */
            readonly postedOverPaymentLine?: {
                /**
                 * @description Unique key for the posted overpayment line item.
                 * @example 56
                 */
                readonly key?: string | null;
                /**
                 * @description ID for the posted overpayment line item.
                 * @example 56
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the posted overpayment line item.
                 * @example /objects/accounts-receivable/payment-line/56
                 */
                readonly href?: string;
            };
            /** @description Negative invoice transaction record. */
            negativeInvoice?: {
                /**
                 * @description Unique key for the negative invoice transaction.
                 * @example 33
                 */
                key?: string | null;
                /**
                 * @description ID for the negative invoice transaction.
                 * @example 33
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the negative invoice transaction.
                 * @example /objects/accounts-receivable/invoice/33
                 */
                readonly href?: string;
            };
            /** @description Negative invoice transaction line item record. */
            negativeInvoiceLine?: {
                /**
                 * @description Unique key for the negative invoice transaction line item.
                 * @example 4
                 */
                key?: string | null;
                /**
                 * @description ID for the negative invoice transaction line item.
                 * @example 4
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the negative invoice transaction line item.
                 * @example /objects/accounts-receivable/invoice-line/4
                 */
                readonly href?: string;
            };
            /** @description AR adjustment transaction record. */
            arAdjustment?: {
                /**
                 * @description Unique key for the AR adjustment.
                 * @example 41
                 */
                key?: string | null;
                /**
                 * @description ID for the AR adjustment.
                 * @example 41
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the adjustment.
                 * @example /objects/accounts-receivable/adjustment/41
                 */
                readonly href?: string;
            };
            /** @description AR adjustment transaction line item record. */
            arAdjustmentLine?: {
                /**
                 * @description Unique key for the adjustment line item.
                 * @example 86
                 */
                key?: string | null;
                /**
                 * @description ID for the adjustment line item.
                 * @example 86
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the adjustment line item.
                 * @example /objects/accounts-receivable/adjustment-line/86
                 */
                readonly href?: string;
            };
            /** @description AR invoice record. */
            arInvoice?: {
                /**
                 * @description Unique key for the AR invoice.
                 * @example 1202
                 */
                key?: string;
                /**
                 * @description ID for the AR invoice.
                 * @example 1202
                 */
                id?: string;
                /**
                 * @description URL endpoint for the AR invoice.
                 * @example /objects/accounts-receivable/invoice/1202
                 */
                readonly href?: string;
            };
            /** @description AR invoice line item record. */
            arInvoiceLine?: {
                /**
                 * @description Unique key for the AR invoice line item.
                 * @example 6012
                 */
                key?: string;
                /**
                 * @description ID for the AR invoice line item.
                 * @example 6012
                 */
                id?: string;
                /**
                 * @description URL endpoint for the AR invoice line item.
                 * @example /objects/accounts-receivable/invoice-line/6012
                 */
                readonly href?: string;
            };
            /** @description AR advance record. */
            arAdvance?: {
                /**
                 * @description Unique key for the AR advance.
                 * @example 999
                 */
                key?: string | null;
                /**
                 * @description ID for the AR advance.
                 * @example 999
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the AR advance.
                 * @example /objects/accounts-receivable/advance/999
                 */
                readonly href?: string;
            };
            /** @description AR advance line item record. */
            arAdvanceLine?: {
                /**
                 * @description Unique key for the AR advance line item.
                 * @example 59
                 */
                key?: string | null;
                /**
                 * @description ID for the AR advance line item.
                 * @example 59
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the AR advance line item.
                 * @example /objects/accounts-receivable/advance-line/59
                 */
                readonly href?: string;
            };
            /** @description AR posted overpayment record. */
            arPostedOverPayment?: {
                /**
                 * @description Unique key for the posted overpayment.
                 * @example 4428
                 */
                key?: string | null;
                /**
                 * @description ID for the posted overpayment.
                 * @example 4428
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the posted overpayment.
                 * @example /objects/accounts-receivable/payment/4428
                 */
                readonly href?: string;
            };
            /** @description AR posted overpayment line item record. */
            arPostedOverPaymentLine?: {
                /**
                 * @description Unique key for the posted overpayment line item.
                 * @example 1642
                 */
                key?: string | null;
                /**
                 * @description ID for the posted overpayment line item.
                 * @example 1642
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the posted overpayment line item.
                 * @example /objects/accounts-receivable/payment-line/1642
                 */
                readonly href?: string;
            };
            /** @description AR payment record. */
            readonly arPayment?: {
                /**
                 * @description Unique key for the AR payment.
                 * @example 2527
                 */
                readonly key?: string;
                /**
                 * @description ID for the AR payment.
                 * @example 2527
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the AR payment.
                 * @example /objects/accounts-receivable/payment/2527
                 */
                readonly href?: string;
            };
            /** @description AR payment line item record. */
            readonly arPaymentLine?: {
                /**
                 * @description Unique key for the AR payment line.
                 * @example 6663
                 */
                readonly key?: string;
                /**
                 * @description ID for the AR payment line.
                 * @example 6663
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the AR payment line.
                 * @example /objects/accounts-receivable/payment-line/6663
                 */
                readonly href?: string;
            };
            /** @description Positive adjustment record. */
            positiveAdjustment?: {
                /**
                 * @description Unique key for the positive adjustment.
                 * @example 3379
                 */
                key?: string | null;
                /**
                 * @description ID for the positive adjustment.
                 * @example 3379
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the positive adjustment.
                 * @example /objects/accounts-receivable/adjustment/3379
                 */
                readonly href?: string;
            };
            /** @description Positive adjustment line item record. */
            positiveAdjustmentLine?: {
                /**
                 * @description Unique key for the positive adjustment line item.
                 * @example 5678
                 */
                key?: string | null;
                /**
                 * @description ID for the positive adjustment line item.
                 * @example 5678
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the positive adjustment line item.
                 * @example /objects/accounts-receivable/adjustment-line/5678
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Line items in a payment represent charges for items or services included in an invoice or adjustment. */
        "objects.accounts-receivable.payment-line": {
            /**
             * @description ID for the AR payment line item. This value is the same as the `key` for this object.
             * @example 678
             */
            readonly id?: string;
            /**
             * @description System-assigned unique key for the AR payment line item.
             * @example 678
             */
            readonly key?: string;
            /**
             * @description URL endpoint for the AR payment line item.
             * @example /objects/accounts-receivable/payment-line/678
             */
            readonly href?: string;
            /**
             * @description Memo or brief description of the AR payment line item.
             * @example Annual service charge
             */
            memo?: string;
            /** @description For multi-currency companies, base currency information for the line item. */
            readonly baseCurrency?: {
                /**
                 * @description Base currency of the company.
                 * @example USD
                 */
                readonly currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The amount of the line item in the company's base currency.
                 * @example 10
                 */
                readonly amount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount paid for the line item.
                 * @example 10
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total selected for the line item.
                 * @example 0
                 */
                readonly totalSelected?: string;
            };
            /** @description For payment involving multi-currency, transaction currency information for the line item. */
            readonly txnCurrency?: {
                /**
                 * @description Transaction currency.
                 * @example USD
                 */
                readonly currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The amount of the line item in the currency for the invoice.
                 * @example 10
                 */
                readonly amount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount paid for the line item.
                 * @example 10
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount selected for the line item.
                 * @example 0
                 */
                readonly totalSelected?: string;
            };
            /** @description Exchange rate details used to calculate the base amount for the line item. */
            readonly exchangeRate?: {
                /**
                 * Format: date
                 * @description Exchange rate date.
                 * @example 2024-01-23
                 */
                readonly date?: string;
                /**
                 * @description Exchange rate.
                 * @example 1.0789
                 */
                readonly rate?: number;
                /**
                 * @description Exchange rate type.
                 * @example -1
                 */
                readonly typeId?: string;
            };
            /**
             * @description Details of the bank through which payment was made.
             *     These properties are populated when a bank is involved in a payment.
             */
            readonly bank?: {
                /**
                 * Format: decimal-precision-2
                 * @description For multi-currency companies, the amount of the line item in the bank's base currency.
                 * @example 10
                 */
                readonly amount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description For payment involving multi-currency, the amount of the item in the currency of the bank.
                 * @example 10
                 */
                readonly txnAmount?: string;
                /**
                 * @description The bank's currency.
                 * @example CAD
                 */
                readonly txnCurrency?: string;
                /**
                 * @description The bank's base currency.
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /** @description For two and three-way currency conversions, Bank exchange rate details used to calculate the base amount for the line item. */
                readonly bankExchangeRate?: {
                    /**
                     * Format: date
                     * @description Exchange rate date used to calculate the bank base amount from the transaction amount.
                     * @example 2025-01-23
                     */
                    readonly date?: string;
                    /**
                     * @description Exchange rate used to calculate the bank base amount from the transaction amount.
                     * @example 1.0789
                     */
                    readonly rate?: number;
                    /**
                     * @description Exchange rate type used to calculate the bank base amount from the transaction amount.
                     * @example -1
                     */
                    readonly typeId?: string;
                };
            };
            /**
             * @description Line number of the AR payment line item.
             * @example 1
             */
            readonly lineNumber?: number;
            /**
             * @description Indicates if the line item is overpaid.
             * @example false
             */
            readonly isOverpaid?: boolean;
            /** @description Transaction allocation template for the line item, which distributes the invoice amount across specified dimensions. */
            allocation?: {
                /**
                 * @description Unique key for the allocation template.
                 * @example 22
                 */
                key?: string | null;
                /**
                 * @description ID for the allocation template.
                 * @example Premium Allocation
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the allocation template.
                 * @example /objects/general-ledger/txn-allocation-template/22
                 */
                readonly href?: string;
            };
            /** @description Header level details for the AR payment's line entries. */
            readonly arPayment?: {
                /**
                 * @description Unique key for the AR payment.
                 * @example 310
                 */
                readonly key?: string;
                /**
                 * @description ID for the AR payment.
                 * @example 310
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the AR payment.
                 * @example /objects/accounts-receivable/payment/310
                 */
                readonly href?: string;
            };
            /** @description General Ledger (GL) account associated with the line item. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 87
                 */
                key?: string;
                /**
                 * @description GL account number.
                 * @example 1100
                 */
                id?: string;
                /**
                 * @description GL account title.
                 * @example Sales
                 */
                name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/87
                 */
                readonly href?: string;
            };
            /** @description The GL account where the system posts offsets to this line item. */
            offsetGLAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 83
                 */
                key?: string;
                /**
                 * @description GL account number.
                 * @example 4000
                 */
                id?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/83
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the AR payment line item.
                 */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 4
                     */
                    key?: string;
                    /**
                     * @description ID for the location.
                     * @example US
                     */
                    id?: string;
                    /**
                     * @description Name of the location.
                     * @example United States
                     */
                    name?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/4
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Department associated with the AR payment line item.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 9
                     */
                    key?: string;
                    /**
                     * @description ID for the department.
                     * @example ENG
                     */
                    id?: string;
                    /**
                     * @description Name of the department.
                     * @example Engineering
                     */
                    name?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Collections of payments received from customers, such as invoice payments, grouped together for processing. */
        "objects.accounts-receivable.payment-summary": {
            /**
             * @description System-assigned unique key for the payment summary.
             * @example 110
             */
            readonly key?: string;
            /**
             * @description ID for the payment summary. This value is the same as the `key` for this object.
             * @example 110
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the payment summary.
             * @example /objects/accounts-receivable/payment-summary/110
             */
            readonly href?: string;
            /**
             * @description Name of the payment summary. The system uses this name to identify the summary throughout the Accounts Receivable application.
             * @example Reversed Receipts (Bank-BOA): 2025/04/12 Batch
             */
            name?: string;
            /**
             * @description Specifies how the summary was created. If set to `manual`, the summary was created by a user. If set to `system`, the summary was created by Sage Intacct based on the summary frequency.
             * @default manual
             * @example system
             * @enum {string}
             */
            readonly summaryCreationType?: "system" | "manual";
            /**
             * Format: date
             * @description The date that items within the summary post to the general ledger.
             * @example 2025-04-12
             */
            glPostingDate?: string | null;
            /**
             * @description Specifies the type of transactions that the summary contains.
             * @default payment
             * @example payment
             * @enum {string}
             */
            readonly recordType?: "payment" | "overpayment";
            /**
             * Format: decimal-precision-2
             * @description Total amount of transactions in the summary.
             * @example 200.00
             */
            readonly totalAmount?: string | null;
            /**
             * @description State of the summary, which can be `open` or `closed`. An open summary can have items added to it.
             * @default open
             * @example open
             * @enum {string}
             */
            state?: "open" | "closed";
            /** @description Parent summary. */
            parent?: {
                /**
                 * @description Unique key for the parent summary.
                 * @example 13
                 */
                key?: string | null;
                /**
                 * @description ID for the parent summary.
                 * @example 13
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the parent summary.
                 * @example /objects/accounts-receivable/summary/13
                 */
                readonly href?: string;
            };
            /**
             * @description Set to `true` to prevent posting summary items to the general ledger.
             * @default false
             * @example false
             */
            preventGLPosting?: boolean | null;
            /** @description Bank account to use when accumulating payment summary. */
            bankAccount?: {
                /**
                 * @description Unique key for the bank account.
                 * @example 9
                 */
                readonly key?: string;
                /**
                 * @description ID for the bank account.
                 * @example BOA
                 */
                id?: string;
                /**
                 * @description The currency for this bank account.
                 * @example USD
                 */
                currency?: string;
                /**
                 * @description URL endpoint for the bank account.
                 * @example /objects/cash-management/bank-account/9
                 */
                readonly href?: string;
            };
            /** @description The General Ledger undeposited funds account to use when accumulating payment summary. This account is required if a `bankAccount` is not specified. */
            undepositedGLAccount?: {
                /**
                 * @description Unique key for the undeposited funds account.
                 * @example 33
                 */
                key?: string | null;
                /**
                 * @description Undeposited funds account number.
                 * @example 1070
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the undeposited funds account.
                 * @example /objects/general-ledger/account/33
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies whether the summary includes quick payments. Set to `true` only for manual and quick-payment summaries.
             * @default false
             * @example false
             */
            isQuickPaymentSummary?: boolean;
            entity?: components["schemas"]["entity-ref"];
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "accounts-receivable-payment-summaryRequiredProperties": unknown | unknown;
        /** @description Recurring invoices are invoices that repeat at periods and durations defined in a recurrence schedule. */
        "objects.accounts-receivable.recurring-invoice": {
            /**
             * @description System-assigned key for the recurring invoice.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description ID for the recurring invoice. This value is the same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the recurring invoice.
             * @example /objects/accounts-receivable/recurring-invoice/23
             */
            readonly href?: string;
            /**
             * @description Each occurrence of the invoice is numbered incrementally based on the sequence type defined in Company Setup - Document Sequence.
             * @example AR-INV
             */
            invoiceNumber?: string;
            /**
             * Format: decimal-precision-2
             * @description Total amount entered.
             * @example 100.00
             */
            readonly totalEntered?: string;
            /** @description Tax solution details for this invoice. */
            taxSolution?: {
                /**
                 * @description System-assigned key to uniquely identify the tax solution.
                 * @example 4
                 */
                key?: string | null;
                /**
                 * @description Name or other unique identifier for the tax solution.
                 * @example Australia GST
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/4
                 */
                readonly href?: string;
            };
            /**
             * @description Description of the recurring invoice.
             * @example Monthly premium subscription
             */
            description?: string | null;
            /**
             * @description A number, such as a purchase order or account number, that may be useful in searches for or reports on this invoice.
             * @example PO1223
             */
            referenceNumber?: string;
            /** @description Settings that establish the recurrence schedule. */
            scheduledOperation?: {
                /**
                 * @description System-specified key for scheduled operation
                 * @example 234
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the schedule operation. This value is the same as the `key` for this object
                 * @example 234
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the Scheduled Operation.
                 * @example /objects/core/scheduled-operation/234
                 */
                readonly href?: string;
            };
            /** @description Settings that establish the recurrence schedule. */
            schedule?: {
                /**
                 * Format: date
                 * @description The first date on which the invoice is generated.
                 * @example 2024-01-01
                 */
                startDate?: string;
                /**
                 * Format: date
                 * @description If the `scheduleEnd` is set to `endDate`, this establishes the final date on which the invoice will be generated.
                 * @example 2025-01-01
                 */
                endDate?: string | null;
                /**
                 * @description If `scheduleEnd` is set to `numberOfOccurrences`, this establishes the number of times the invoice is generated.
                 * @example 1
                 */
                repeatCount?: string | null;
                /**
                 * @description Repeat interval for generating the recurring invoice. For example, if `repeatBy` is set to `month` and the `repeatInterval` is set to `2`, an invoice is generated every other month after the start date.
                 * @default 1
                 * @example 2
                 */
                repeatInterval?: string | null;
                /**
                 * @description Indicates the regular interval at which the invoice is generated. To have the invoice occur at regular intervals, set to `day`, `week`, `month` or `year`. Set to `none` to have the invoice occur only once.
                 *
                 *     If set to `day`, `week`, `month` or `year`, the invoice will recur at the next interval on the same date as the start date. To make an invoice with a monthly interval generate at the end of the month, set to `endOfMonth`.
                 * @default day
                 * @example day
                 * @enum {string}
                 */
                repeatBy?: "none" | "day" | "week" | "month" | "year" | "endOfMonth";
                /**
                 * @description Termination point for the recurring invoice schedule.
                 * @example never
                 * @enum {string}
                 */
                scheduleEnd?: "never" | "numberOfOccurrences" | "endDate";
                /**
                 * Format: date
                 * @description The date on which the next invoice will be generated.
                 * @example 2021-01-01
                 */
                readonly nextExecutionDate?: string;
                /**
                 * Format: date
                 * @description The last date on which the invoice was generated.
                 * @example 2021-01-01
                 */
                readonly lastExecutionDate?: string | null;
                /**
                 * @description The number of transactions created from this recurring invoice.
                 * @example 1
                 */
                readonly txnCount?: number;
                /**
                 * @description Comma separated email addresses to which schedule notifications are sent in case of failures. If email address are not provided, schedule failure notifications will be sent to the user who created the schedule.
                 * @example joe.smith@mycompany.com
                 */
                emailNotifications?: string | null;
            };
            /** @description Payment terms, which are used to calculate due date, discounts, and penalties associated with this invoice. */
            term?: {
                /**
                 * @description System-assigned key for the payment term.
                 * @example 16
                 */
                key?: string;
                /**
                 * @description Name or other unique identifier for the payment term.
                 * @example N15
                 */
                id?: string;
                /**
                 * @description URL endpoint for the payment term.
                 * @example /objects/accounts-receivable/term/16
                 */
                readonly href?: string;
            };
            contract?: {
                /**
                 * @description Unique identifier for the contract.
                 * @example CON-2
                 */
                id?: string | null;
                /**
                 * @description Description of the contract.
                 * @example Contract 2
                 */
                description?: string | null;
            };
            currency?: {
                /**
                 * @description For multi-currency companies, the company's base currency.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * @description For multi-currency companies, the currency for the invoice.
                 * @example USD
                 */
                txnCurrency?: string;
                /**
                 * @description Exchange rate
                 * @example 1.0789
                 */
                exchangeRate?: number | null;
                /**
                 * @description Exchange rate type
                 * @example Intacct Daily Rate
                 */
                exchangeRateTypeId?: string | null;
            };
            /** @description Message to include on the customer's invoice. */
            customerMessage?: {
                /**
                 * @description System-assigned key for the customer message.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description ID for the customer message.
                 * @example welcome message
                 */
                id?: string;
                /**
                 * @description Message text for the customer message.
                 * @example welcome to the company
                 */
                message?: string;
                /**
                 * @description URL endpoint for the customer message.
                 * @example /objects/accounts-receivable/customer-message/10
                 */
                readonly href?: string;
            };
            /**
             * Format: decimal-precision-2
             * @description Total transaction amount entered.
             * @example 100
             */
            txnTotalEntered?: string;
            /** @description Contacts for the invoice. */
            contacts?: {
                /**
                 * billTo
                 * @description Customer contact to receive the invoice.
                 */
                billTo?: {
                    /**
                     * @description System-assigned key for the contact.
                     * @example 15
                     */
                    key?: string;
                    /**
                     * @description Name of the contact.
                     * @example Klay Vanderbilt
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/15
                     */
                    readonly href?: string;
                };
                /**
                 * shipTo
                 * @description Ship-to contact for the invoice.
                 */
                shipTo?: {
                    /**
                     * @description System-assigned key for the contact.
                     * @example 15
                     */
                    key?: string;
                    /**
                     * @description Name of the contact.
                     * @example Klay Vanderbilt
                     */
                    id?: string;
                    /**
                     * tax
                     * @description Tax related information for the ship-to contact.
                     */
                    tax?: {
                        /**
                         * @description Tax identification number.
                         * @example 252-85-7897
                         */
                        taxId?: string | null;
                        /** @description Contact tax group associated with the ship-to contact. */
                        group?: {
                            /**
                             * @description System-assigned key for the group.
                             * @example 288
                             */
                            key?: string | null;
                            /**
                             * @description Unique identifier for the group.
                             * @example Goods Zero Rate - CA
                             */
                            id?: string | null;
                            /**
                             * @description URL endpoint for the group.
                             * @example /objects/tax/contact-tax-group/288
                             */
                            readonly href?: string;
                        };
                    };
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/15
                     */
                    readonly href?: string;
                };
            };
            /** @description Customer to receive the invoice. */
            customer?: {
                /**
                 * @description System-assigned key for the customer.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description ID for the customer.
                 * @example 2
                 */
                id?: string;
                /**
                 * @description Name of the customer.
                 * @example Logic Solutions
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/10
                 */
                readonly href?: string;
            };
            /** @description List of payments on the recurring AR invoice. */
            payment?: {
                /**
                 * @description Payment method.
                 * @example creditCard
                 * @enum {string}
                 */
                paymentMethod?: "none" | "printedCheck" | "creditCard" | "eft" | "cash" | "onlineChargeCard" | "onlineAchDebit";
                /**
                 * Format: decimal-precision-2
                 * @description Recurring invoice payment amount.
                 * @example 25.00
                 */
                paymentAmount?: string | null;
                /**
                 * @description Card type.
                 * @example visa
                 * @enum {string|null}
                 */
                creditCardType?: null | "visa" | "mc" | "discover" | "amex" | "diners" | "other";
                /**
                 * @description Type of account to which the payment will be deposited.
                 * @default null
                 * @example bank
                 * @enum {string|null}
                 */
                accountType?: null | "bank" | "undepositedFundsAccount";
                /**
                 * @description Indicates whether to pay the invoice in full.
                 * @default true
                 * @example true
                 */
                payInFull?: boolean;
                /**
                 * @description Bank account record number.
                 * @example SBME
                 */
                bankAccountId?: string | null;
                /**
                 * @deprecated
                 * @description This field is deprecated, please use bankAccountId.
                 * @example SBME
                 */
                bankAccountID?: string | null;
                /**
                 * @description Undeposited funds account number.
                 * @example 1070
                 */
                undepositedFundsAccountId?: string | null;
                customerCreditCard?: {
                    /**
                     * @description Customer credit card key.
                     * @example 10
                     */
                    key?: string | null;
                    /**
                     * @description Customer credit card id.
                     * @example Card101
                     */
                    id?: string | null;
                };
            };
            /** @description Supporting document for the invoice. */
            attachment?: {
                /**
                 * @description System-assigned key for the attachment.
                 * @example 6
                 */
                key?: string | null;
                /**
                 * @description Unique ID of the attachment.
                 * @example Doc6331
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/6
                 */
                readonly href?: string;
            };
            /** @description Line items of the invoice. */
            lines?: components["schemas"]["objects.accounts-receivable.recurring-invoice-line"][];
            readonly audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2024-01-23T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
        };
        "accounts-receivable-recurring-invoiceRequiredProperties": {
            customer?: Record<string, never>;
            term?: Record<string, never>;
            currency?: Record<string, never>;
            schedule?: Record<string, never>;
            lines?: {
                glAccount?: Record<string, never>;
            }[];
        };
        /** @description Line items in a recurring invoice represent transactions captured in that recurring invoice. */
        "objects.accounts-receivable.recurring-invoice-line": {
            /**
             * @description System-assigned key for the line item.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description ID for the line item. This value is the same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the line item.
             * @example /objects/accounts-receivable/recurring-invoice-line/23
             */
            readonly href?: string;
            /**
             * @description Provides information about the line item that may be of use in the future.
             * @example Service charges
             */
            description?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Base amount of the line item.
             * @example 100
             */
            amount?: string;
            /**
             * @description Line number of the line item.
             * @example 1
             */
            readonly lineNumber?: number;
            /**
             * Format: decimal-precision-2
             * @description Transaction amount of the line item.
             * @example 100.00
             */
            txnAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description For tax inclusive recurring invoices, provide a total transaction amount.
             * @example 100.00
             */
            totalTxnAmount?: string;
            /**
             * @description Indicates whether the line item is billable.
             * @default false
             * @example true
             */
            isBillable?: boolean;
            /** @description Currency information for the line item. */
            currency?: {
                /**
                 * @description Base currency
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /**
                 * @description Transaction currency
                 * @example USD
                 */
                readonly txnCurrency?: string;
                /**
                 * Format: date
                 * @description Exchange rate date
                 * @example 2024-01-23
                 */
                readonly exchangeRateDate?: string | null;
                /**
                 * @description Exchange rate
                 * @example 1.0789
                 */
                readonly exchangeRate?: number;
                /**
                 * @description Exchange rate type
                 * @example INR-Rate
                 */
                readonly exchangeRateTypeId?: string | null;
            };
            /**
             * @description Indicates whether the line item is taxable.
             * @default false
             * @example true
             */
            isTax?: boolean;
            /**
             * @description Indicates whether the line item is a subtotal.
             * @default false
             * @example true
             */
            isSubTotal?: boolean;
            /** @description Type of transaction allocation for the line item. */
            allocation?: {
                /**
                 * @description System-assigned key for the allocation.
                 * @example 14
                 */
                key?: string;
                /**
                 * @description ID for the allocation.
                 * @example Alloc1-WBS-US
                 */
                id?: string;
                /**
                 * @description URL endpoint for the allocation.
                 * @example /objects/general-ledger/txn-allocation-template/14
                 */
                readonly href?: string;
            };
            /** @description Account label for the account that the line item is assigned to. */
            accountLabel?: {
                /**
                 * @description Account label key
                 * @example 14
                 */
                key?: string;
                /**
                 * @description Account label ID
                 * @example Accounting Fees
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account label.
                 * @example /objects/accounts-receivable/account-label/14
                 */
                readonly href?: string;
            };
            /** @description For companies subscribed to the Taxes application, the tax category for the line item. */
            taxDetail?: {
                /**
                 * @description Tax detail key
                 * @example 12
                 */
                key?: string | null;
                /**
                 * @description Tax detail ID
                 * @example 12
                 */
                id?: string | null;
                /**
                 * @deprecated
                 * @description This field is deprecated, please use taxPercent.
                 */
                readonly taxRate?: string | null;
                /**
                 * @description The tax rate used to calculate the tax amount. For example, this field contains a value of 10 if the tax rate is 10%.
                 * @example 10
                 */
                readonly taxPercent?: string | null;
                /**
                 * @description URL endpoint for the tax detail.
                 * @example /objects/tax/order-entry-tax-detail/12
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Revenue recognition start date.
             * @example 2024-01-23
             */
            startDate?: string | null;
            /**
             * Format: date
             * @description Revenue recognition end date.
             * @example 2024-01-23
             */
            endDate?: string | null;
            /** @description GL account for deferred revenue for the line item. */
            deferredRevenueGLAccount?: {
                /**
                 * @description Deferred revenue GL account key.
                 * @example 384
                 */
                key?: string;
                /**
                 * @description Deferred revenue GL account number.
                 * @example 384
                 */
                id?: string;
                /**
                 * @description Deferred revenue GL account name.
                 * @example AR ACCOUNT
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the deferred revenue GL account.
                 * @example /objects/general-ledger/account/384
                 */
                readonly href?: string;
            };
            /** @description GL account the line item is assigned to. */
            glAccount?: {
                /**
                 * @description System-assigned key for the GL account.
                 * @example 35
                 */
                key?: string;
                /**
                 * @description ID for the GL account.
                 * @example 1234.36
                 */
                id?: string;
                /**
                 * @description Name or title of the GL account.
                 * @example AR ACCOUNT
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/35
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /** @description Where multiple locations exist, the location to which the system should assign the expense. */
                location?: {
                    /**
                     * @description System-assigned key for the location.
                     * @example 10
                     */
                    key?: string;
                    /**
                     * @description ID for the location.
                     * @example 10
                     */
                    id?: string;
                    /**
                     * @description Name of the location.
                     * @example India
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/10
                     */
                    readonly href?: string;
                };
                /** @description Department the line item is assigned to. */
                department?: {
                    /**
                     * @description Department key
                     * @example 14
                     */
                    key?: string;
                    /**
                     * @description Department ID
                     * @example 14
                     */
                    id?: string;
                    /**
                     * @description Department name
                     * @example Accounting
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/14
                     */
                    readonly href?: string;
                };
            };
            /** @description GL account for discounts and penalties. */
            offsetGLAccount?: {
                /**
                 * @description System-assigned key for the offset GL account.
                 * @example 384
                 */
                key?: string | null;
                /**
                 * @description ID for the offset GL account.
                 * @example 1234.36
                 */
                id?: string;
                /**
                 * @description Name or title of the offset GL account.
                 * @example AR ACCOUNT
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the offset GL account.
                 * @example /objects/general-ledger/account/384
                 */
                readonly href?: string;
            };
            /** @description Tax Entries of the AR recurring invoice */
            taxEntries?: components["schemas"]["objects.accounts-receivable.recurring-invoice-tax-entry"][];
            /** @description Header level details for the AR recurring invoice line entries. */
            recurringInvoice?: {
                /**
                 * @description ID for the AR recurring invoice.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description System-assigned key for the AR recurring invoice.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description URL for the AR recurring invoice.
                 * @example /objects/accounts-receivable/recurring-invoice/23
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "accounts-receivable-recurring-invoice-lineRequiredProperties": Record<string, never>;
        /** @description For VAT enabled transactions, recurring invoice line items will have tax entries. */
        "objects.accounts-receivable.recurring-invoice-tax-entry": {
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
            /** @description Order Entry tax details associated with the recurring invoice tax entry. */
            orderEntryTaxDetail?: {
                /**
                 * @description Unique key for the Order Entry tax detail.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the Order Entry tax detail.
                 * @example Alaska Tax Detail
                 */
                id?: string;
                /**
                 * @description URL endpoint for the Order Entry tax detail.
                 * @example /objects/tax/order-entry-tax-detail/1
                 */
                readonly href?: string;
            };
            /**
             * recurring-invoice-line
             * @description Recurring invoice line item that the recurring invoice tax entry is associated with.
             */
            readonly recurringInvoiceLine?: {
                /**
                 * @description Unique identifier for the recurring invoice line.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the recurring invoice line. This value is the same as the `key` for this object.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the recurring invoice line.
                 * @example /objects/accounts-receivable/recurring-invoice-line/100
                 */
                readonly href?: string;
            };
        };
        /** @description Revenue recognition templates define how to amortize deferred revenue. Each template is associated with an Accounts Receivable label or Order Entry Item GL group. */
        "objects.accounts-receivable.revenue-recognition-template": {
            /**
             * @description System-assigned unique key for the revenue recognition template.
             * @example 61
             */
            readonly key?: string;
            /**
             * @description Unique ID for the revenue recognition template.
             * @example 1001
             */
            id?: string;
            /**
             * @description URL endpoint for the revenue recognition template.
             * @example /objects/accounts-receivable/revenue-recognition-template/61
             */
            readonly href?: string;
            /**
             * @description Description of the revenue recognition template.
             * @example null
             */
            description?: string;
            /**
             * @description Indicates whether to use standard calendar amortization. This field is only applicable if a company is configured to use custom accounting periods. When set to `true`, Sage Intacct follows the standard calendar to allocate revenue for each period.
             * @default false
             * @example false
             */
            useStandard?: boolean;
            /**
             * @description The intervals at which Sage Intacct should schedule the journal entries to post.
             * @default monthly
             * @example daily
             * @enum {string}
             */
            schedulePeriod?: "daily" | "monthly" | "quarterly" | "semiAnnually" | "annually";
            /**
             * @description The day of the month the revenue should post.
             * @default 1
             * @example endOfPeriod
             * @enum {string}
             */
            postingDay?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "endOfPeriod" | "daily";
            /**
             * @description Recognition term. Sage Intacct generates the recognition schedule based on the specified term:
             *     * `fixedPeriod` - Uses the value specified in `totalPeriods` to generate the schedule.
             *     * `contractTerm` - Calculates the number of periods based on the transaction start and end dates.
             *     * `project` - Calculates the number of periods based on the project terms.
             * @default fixedPeriod
             * @example fixedPeriod
             * @enum {string}
             */
            recognitionTerm?: "fixedPeriod" | "contractTerm" | "project";
            /**
             * @description System resume option. Options are:
             *     * `catchUp` - Users are allowed to post revenue recognition journal entries that were scheduled but not posted prior to delivery to catch up to the period of the resume date.
             *     * `walkForward` - Sage Intacct will regenerate the schedule as of the resume date and push the end date out the same number of days as the new begin date was pushed forward. This keeps the overall revenue schedule the same length.
             * @default walkforward
             * @example catchUp
             * @enum {string}
             */
            resumeOption?: "catchUp" | "walkforward";
            /**
             * @description Number of periods. If `recognitionTerm` is set to `fixedPeriod`, Sage Intacct uses this value to generate the schedule.
             * @example 3
             */
            totalPeriods?: string;
            /**
             * @description Specifies the revenue recognition method to use. For details about the available methods, see [Revenue recognition methods - AR or Order Entry](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_revenue_recognition_methods) in the Sage Intacct Help Center.
             * @default straightLine
             * @example straightLine
             * @enum {string}
             */
            recognitionMethod?: "straightLine" | "straightLine,prorateExactDays" | "straightLine,percentAllocation" | "straightLine,percentAllocation,endOfPeriod" | "exactDaysPerPeriod,prorateDays" | "exactDaysPerPeriod,prorateDays,endOfPeriod" | "percentCompleted" | "milestone" | "custom";
            /**
             * @description Specifies whether the recognition start date is based on the transaction date (`transactionDate`) or on a user-defined date (`userSpecified`).
             * @default transactionDate
             * @example transactionDate
             * @enum {string}
             */
            recognitionStartDate?: "transactionDate" | "userSpecified";
            /**
             * @description Specifies the posting method. Options are:
             *     * `automatic` - Sage Intacct will automatically post scheduled revenue recognition journal entries on each scheduled posting date.
             *     * `manual` - The user will manually post the scheduled revenue recognition journal entries when desired.
             * @default manual
             * @example manual
             * @enum {string}
             */
            postingMethod?: "automatic" | "manual";
            /**
             * @description Latest version key.
             * @example 12
             */
            latestVersion?: string;
            /**
             * @description Specifies whether the milestone source is project accounting (`project`) or user-specified (`manual`).
             * @default manual
             * @example manual
             * @enum {string}
             */
            milestoneSource?: "manual" | "project";
            calculation?: {
                /**
                 * @description For a percent completed template, specify whether to calculate at the project or task level.
                 * @default null
                 * @example project
                 * @enum {string|null}
                 */
                source?: null | "project" | "task";
                /**
                 * @description Method to use to calculate the completion percentage.
                 * @default null
                 * @example estimatedHours
                 * @enum {string|null}
                 */
                basedOn?: null | "estimatedHours" | "plannedHours" | "budgetedHours" | "budgetedCostFromGL" | "budgetedCostFromSummary" | "observed%Completed";
            };
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        "accounts-receivable-revenue-recognition-templateRequiredProperties": Record<string, never>;
        /** @description Summaries are collections of the same type of transactions, grouped together for processing. */
        "objects.accounts-receivable.summary": {
            /**
             * @description System-assigned unique key for the summary.
             * @example 14
             */
            readonly key?: string;
            /**
             * @description ID for the AR summary. This value is the same as `key` for this object.
             * @example 14
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the summary.
             * @example /objects/accounts-receivable/summary/14
             */
            readonly href?: string;
            /**
             * @description Name for the summary. The system uses this name to identify the summary throughout the Accounts Receivable application.
             * @example Invoices: 2025/12/01 Batch
             */
            name?: string;
            /**
             * @description Specifies how the summary was created. If set to `manual`, the summary was created by a user. If set to `system`, the summary was created by Sage Intacct based on the summary frequency.
             * @default manual
             * @example manual
             * @enum {string}
             */
            readonly summaryCreationType?: "system" | "manual";
            /**
             * Format: date
             * @description The date that items within the summary post to the general ledger.
             * @example 2025-05-10
             */
            glPostingDate?: string;
            /**
             * @description Specifies the type of transactions that the summary contains.
             * @default invoice
             * @example invoice
             * @enum {string}
             */
            recordType?: "invoice" | "adjustment";
            /**
             * Format: decimal-precision-2
             * @description Total amount of transactions in the summary. Transaction amounts include invoices, adjustments, and quick payments.
             * @example 100.00
             */
            readonly totalAmount?: string;
            /**
             * @description State of the summary, which can be `open` or `closed`. An `open` summary can have items added to it.
             * @default open
             * @example open
             * @enum {string}
             */
            state?: "open" | "closed";
            /** @description Parent summary. */
            parent?: {
                /**
                 * @description Unique key for the parent summary.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description ID for the parent summary.
                 * @example 11
                 */
                id?: string;
                /**
                 * @description URL endpoint for the parent summary.
                 * @example /objects/accounts-receivable/summary/11
                 */
                readonly href?: string;
            };
            /**
             * @description Set to `true` to prevent posting summary items to the general ledger.
             * @default false
             * @example false
             */
            preventGLPosting?: boolean;
            /**
             * @description Specifies whether the summary includes quick payments. Set to `true` only for manual and quick-payment summaries. Set to `false` for invoice and adjustment transactions.
             * @default false
             * @example false
             */
            isQuickPaymentSummary?: boolean;
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s2"];
        };
        "accounts-receivable-summaryRequiredProperties": Record<string, never>;
        /** @description Accounts Receivable (AR) terms are the rules a company establishes for extending credit to customers. */
        "objects.accounts-receivable.term": {
            /**
             * @description System-assigned key for the term.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Name or other unique identifier for the term.
             * @example 2% 10 Net 30
             */
            id?: string;
            /**
             * @description Endpoint for the accounts-receivable-term.
             * @example /objects/accounts-receivable-term/23
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            /**
             * @description Note about the purpose and use of the term.
             * @example 2% discount if paid 10 days from invoice. Due on day 30.
             */
            description?: string;
            audit?: components["schemas"]["audit.s1"];
            /** @description The due date is a combination of a number of days and a reference point. For example, to set terms that reference the number of days from the invoice date, set the number of days in `day`, and set `fromInvoiceDate` in `from`. */
            due?: {
                /**
                 * @description Number of days until the term is due.
                 * @example 10
                 */
                days?: number | null;
                /**
                 * @description The reference point from which to begin counting the number of days until the term is due.
                 * @default null
                 * @example fromInvoiceDate
                 * @enum {string|null}
                 */
                from?: null | "fromInvoiceDate" | "ofTheMonthOfInvoiceDate" | "ofNextMonthFromInvoiceDate" | "of2ndMonthFromInvoiceDate" | "of3rdMonthFromInvoiceDate" | "of4thMonthFromInvoiceDate" | "of5thMonthFromInvoiceDate" | "of6thMonthFromInvoiceDate" | "afterEndOfMonthOfInvoiceDate" | "fromInvoiceDateExtendingToEom";
            };
            /** @description A discount is a combination of the days, what the days reference, the dollar or percent discount, and the number of grace days. */
            discount?: {
                /**
                 * @description Number of days until the discount goes into effect.
                 * @example 2
                 */
                days?: number;
                /**
                 * @description Amount of the discount.
                 * @example 5
                 */
                amount?: number | null;
                /**
                 * @description The reference point from which to begin counting the number of days until the discount goes into effect.
                 * @default null
                 * @example fromInvoiceDate
                 * @enum {string|null}
                 */
                from?: null | "fromInvoiceDate" | "ofTheMonthOfInvoiceDate" | "ofNextMonthFromInvoiceDate" | "of2ndMonthFromInvoiceDate" | "of3rdMonthFromInvoiceDate" | "of4thMonthFromInvoiceDate" | "of5thMonthFromInvoiceDate" | "of6thMonthFromInvoiceDate" | "afterEndOfMonthOfInvoiceDate" | "fromInvoiceDateExtendingToEom";
                /**
                 * @description The type of discount, which can be a dollar amount or a percentage.
                 * @default null
                 * @example percentage
                 * @enum {string|null}
                 */
                unit?: null | "amount" | "percentage";
                /**
                 * @description Number of days before the discount is withdrawn.
                 * @example 10
                 */
                graceDays?: number | null;
                /**
                 * @description Contains encoding of Term Properties.
                 * @example 20:12:3#30#5%:D:2
                 */
                readonly value?: string | null;
                /**
                 * @description How the system calculates discounts in transactions that use this term. The calculation can be based on the line item total, excluding added charges (such as shipping and taxes), or on the invoice total, including all charges.
                 * @default invoiceTotal
                 * @example lineItemsTotal
                 * @enum {string}
                 */
                calculateOn?: "lineItemsTotal" | "invoiceTotal";
            };
            /** @description Penalty for paying after the due date. */
            penalty?: {
                /**
                 * @description Time span in which the penalty accrues.
                 * @default noPenalty
                 * @example weekly
                 * @enum {string}
                 */
                cycle?: null | "noPenalty" | "daily" | "weekly" | "biweekly" | "monthly" | "bimonthly" | "quarterly" | "halfYearly" | "annually";
                /**
                 * @description Amount of the penalty.
                 * @example 5
                 */
                amount?: number | null;
                /**
                 * @description The type of penalty, which can be a dollar amount or a percentage.
                 * @default null
                 * @example percentage
                 * @enum {string|null}
                 */
                unit?: null | "amount" | "percentage";
                /**
                 * @description The number of days after the due date that the penalty takes effect.
                 * @example 15
                 */
                graceDays?: number | null;
            };
        };
        "accounts-receivable-termRequiredProperties": Record<string, never>;
        /** @description Territories are optionally included in customer records and are used with Accounts Receivable reports. */
        "objects.accounts-receivable.territory": {
            /**
             * @description System-assigned key for the territory.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the territory. After an ID is created, it cannot be modified.
             * @example T1
             */
            id?: string;
            /**
             * @description Endpoint of the territory.
             * @example /objects/accounts-receivable/territory/1
             */
            readonly href?: string;
            /**
             * @description Name of the territory.
             * @example Southwest US
             */
            name?: string;
            status?: components["schemas"]["status"];
            /** @description Parent territory if territories are organized in a hierarchy. */
            parent?: {
                /**
                 * @description System-assigned key for the parent territory.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description ID of the parent territory.
                 * @example 1-North
                 */
                id?: string;
                /**
                 * @description Name of the parent territory.
                 * @example 1 - North
                 */
                readonly name?: string;
                /**
                 * @description Endpoint of the parent territory.
                 * @example /objects/accounts-receivable/territory/21
                 */
                readonly href?: string;
            };
            /** @description Employee who manages the territory. Used for informational purposes only. */
            manager?: {
                /**
                 * @description System-assigned key for the employee.
                 * @example 81
                 */
                key?: string;
                /**
                 * @description Unique identifier of the territory manager. When creating a territory, this must be the `id` of an existing employee.
                 * @example dwilson
                 */
                id?: string;
                /**
                 * @description Name of the territory manager.
                 * @example David Wilson
                 */
                readonly name?: string;
                /**
                 * @description Endpoint of the territory manager.
                 * @example /objects/company-config/employee/81
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Territory groups */
        "objects.accounts-receivable.territory-group": {
            /**
             * @description System-assigned key for the territory group.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Territory group ID.
             * @example T1
             */
            id?: string;
            /**
             * @description URL endpoint for the territory group.
             * @example /objects/accounts-receivable/territory-group/23
             */
            readonly href?: string;
            /**
             * @description Name of the territory group.
             * @example Group A
             */
            name?: string;
            /**
             * @description Description of the territory group.
             * @example Group 1
             */
            description?: string;
            /** @description Territories that are members of the group and their sort order. */
            groupMembers?: {
                /**
                 * @description Unique key for the territory.
                 * @example 12
                 */
                readonly key?: string;
                /**
                 * @description Territory ID.
                 * @example T1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the territory.
                 * @example /objects/accounts-receivable/territory/12
                 */
                readonly href?: string;
                /**
                 * @description Territory group sort order. Determines the position of the member within the territory group. Lower values indicate earlier placement.
                 * @example 2
                 */
                readonly sortOrder?: string;
            }[];
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s2"];
        };
        "accounts-receivable-territory-groupRequiredProperties": Record<string, never>;
        /** @description A shipping method is the specific way that you transport goods, such as UPS, FedEx, or hand deliver. */
        "objects.accounts-receivable.shipping-method": {
            /**
             * @description System-assigned key for the shipping method.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Name or other unique ID for the shipping method.
             * @example Air
             */
            id?: string;
            /**
             * @description URL endpoint for the shipping method.
             * @example /objects/accounts-receivable/shipping-method/2
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            /**
             * @description Estimated number of days to ship goods from the warehouse to the customer. The value in this field is used to calculate the ship by date in Order Entry transactions. The ship by date is calculated based on the need by date minus the estimated days in transit.
             * @example 10
             */
            daysInTransit?: number;
        };
        "accounts-receivable-shipping-methodRequiredProperties": Record<string, never>;
        /** @description Manual deposits can be used to record receipt of money that's not related to an invoice (for example, an over-the-counter cash sale). */
        "objects.accounts-receivable.manual-deposit": {
            /**
             * @description System-assigned unique key for the manual deposit.
             * @example 20
             */
            readonly key?: string;
            /**
             * @description ID for the manual deposit. This value is the same as the `key` for this object.
             * @example 20
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the manual deposit.
             * @example /objects/accounts-receivable/manual-deposit/20
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Specifies the date that the manual deposit was created.
             * @example 2025-06-08
             */
            createdDate?: string;
            /**
             * @description Record type of the manual deposit.
             * @example rp
             */
            readonly recordType?: string;
            /** @description Financial institution where the deposit was made. */
            financialEntity?: {
                /**
                 * @deprecated
                 * @description This field has been deprecated. Use the `id` field instead.
                 * @example BOA
                 */
                entityId?: string;
                /**
                 * @description Account number or other unique ID used in creating the manual deposit.
                 * @example BOA
                 */
                id?: string;
                /**
                 * @description Unique key for the bank account.
                 * @example 1002
                 */
                key?: string;
                /**
                 * @description Bank name for the manual deposit.
                 * @example Bank of America
                 */
                name?: string;
                /**
                 * @description URL endpoint for the bank account.
                 * @example /objects/cash-management/bank-account/10
                 */
                readonly href?: string;
            };
            /**
             * @description The deposit ID correlates the manual deposit with the actual deposit slip from the bank. For example, the deposit ID can be the transaction number from the bank or a note such as `Deposit Slip of MM/DD/YYYY`.
             * @example BOA-0001
             */
            depositId?: string | null;
            /**
             * @description Description of the manual deposit.
             * @example Deposit slip of bank BOA
             */
            description?: string | null;
            /** @description Associated contacts for the manual deposit. */
            contacts?: {
                /**
                 * billTo
                 * @description The billing contact associated with the manual deposit.
                 */
                billTo?: {
                    /**
                     * @description Unique key for the contact.
                     * @example 916
                     */
                    key?: string;
                    /**
                     * @description Name or other unique ID for the contact.
                     * @example Power Aerospace Materials (C1)
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/916
                     */
                    readonly href?: string;
                };
                /**
                 * shipTo
                 * @description The shipping contact associated with the manual deposit.
                 */
                shipTo?: {
                    /**
                     * @description Unique key for the contact.
                     * @example 312
                     */
                    key?: string;
                    /**
                     * @description Name or other unique ID for the contact.
                     * @example Power Aerospace Materials (C1)
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/312
                     */
                    readonly href?: string;
                };
            };
            /**
             * @description Invoice number to apply the payment against.
             * @example INV-1602
             */
            documentNumber?: string | null;
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `financialEntity.name` field instead.
             * @example Bank of America
             */
            bankName?: string;
            /**
             * @description State of the manual deposit.
             * @default confirmed
             * @example confirmed
             * @enum {string}
             */
            readonly state?: "confirmed";
            /** @description Specifies the summary the deposit is added to. This field is applicable only if your company has configured AR to use manually created summaries (the summary frequency for manual deposits is set to `user-specified`). */
            manualDepositSummary?: {
                /**
                 * @description Unique key for the summary.
                 * @example 280
                 */
                key?: string;
                /**
                 * @description Name of the summary. The system uses this name to identify the summary throughout the Accounts Receivable application.
                 * @example Manual deposit Summary: 2024/01/01 Batch
                 */
                id?: string;
                /**
                 * @description URL endpoint for the summary.
                 * @example /objects/accounts-receivable/manual-deposit-summary/280
                 */
                readonly href?: string;
            };
            /** @description Payment information for the deposit. */
            readonly paymentInformation?: {
                /**
                 * Format: decimal-precision-2
                 * @description Total amount of the manual deposit.
                 * @example 1117.8
                 */
                readonly totalAmountEntered?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total paid amount of the manual deposit.
                 * @example 100.10
                 */
                readonly totalPaid?: string;
                /**
                 * Format: date
                 * @description Payment date.
                 * @example 2025-06-01
                 */
                readonly paidDate?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount entered for the manual deposit.
                 * @example 1000.20
                 */
                readonly totalEntered?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount paid for the manual deposit.
                 * @example 2000.50
                 */
                readonly txnTotalPaid?: string;
            };
            /** @description Currency details for the deposit. */
            currency?: {
                /**
                 * @description Base currency for the deposit.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * @description Transaction currency for the deposit
                 * @example USD
                 */
                txnCurrency?: string;
            };
            /** @description Customer who made the payment. */
            customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description ID for the customer.
                 * @example 11
                 */
                id?: string;
                /**
                 * @description Name of the customer.
                 * @example CENTEX
                 */
                name?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/11
                 */
                readonly href?: string;
            };
            /** @description Line items included in the manual deposit. */
            lines?: components["schemas"]["objects.accounts-receivable.manual-deposit-line"][];
            readonly audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2025-01-23T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            entity?: components["schemas"]["entity-ref"];
        };
        "accounts-receivable-manual-depositRequiredProperties": {
            lines?: {
                /** @example 2995 */
                glAccount?: unknown;
                /** @example 100 */
                paymentInformation?: unknown;
                /**
                 * @example {
                 *       "location": {
                 *         "id": "1"
                 *       }
                 *     }
                 */
                dimensions?: {
                    /** @example 1 */
                    location?: unknown;
                };
            }[];
        };
        /** @description Detail and header information for manual deposits. */
        "objects.accounts-receivable.manual-deposit-line": {
            /**
             * @description System-assigned unique key for the manual deposit line.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the manual deposit line item. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the manual deposit line.
             * @example /objects/accounts-receivable/manual-deposit-line/23
             */
            readonly href?: string;
            /**
             * @description Memo or notes about the manual deposit line item.
             * @example BOA manual deposit slip 01/08/2025
             */
            memo?: string | null;
            /**
             * @description Line number of the manual deposit line item.
             * @example 10
             */
            readonly lineNumber?: number;
            /** @description Currency details for the deposit line item. */
            currency?: {
                /**
                 * @description Base currency for the deposit line item.
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /**
                 * @description Transaction currency for the deposit line item
                 * @example USD
                 */
                readonly txnCurrency?: string;
            };
            /** @description Payment information for the deposit line item. */
            readonly paymentInformation?: {
                /**
                 * Format: decimal-precision-2
                 * @description The amount of the line item in the company's base currency.
                 * @example 1117.8
                 */
                readonly baseAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The transaction amount for the manual deposit line item in the currency specified for the transaction.
                 * @example 100
                 */
                txnAmount?: string;
            };
            /** @description General Ledger (GL) account associated with the line item. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 163
                 */
                key?: string;
                /**
                 * @description ID for the GL account.
                 * @example 4010
                 */
                id?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/163
                 */
                readonly href?: string;
            };
            /** @description Label for the associated AR account. */
            accountLabel?: {
                /**
                 * @description Unique key for the account label.
                 * @example 9
                 */
                key?: string | null;
                /**
                 * @description ID for the account label.
                 * @example Accounts Receivable - Sale
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the account label.
                 * @example /objects/accounts-receivable/account-label/9
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the deposit.
                 */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the location.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/1
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Department associated with the deposit.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 11
                     */
                    key?: string | null;
                    /**
                     * @description ID for the department.
                     * @example 11
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/11
                     */
                    readonly href?: string;
                };
            };
            /** @description Header level details for the manual deposit line entries. */
            readonly manualDeposit?: {
                /**
                 * @description ID for the manual deposit.
                 * @example 51
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the manual deposit.
                 * @example 51
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the manual deposit.
                 * @example /objects/accounts-receivable/manual-deposit/51
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description A manual deposit summary is a collection of payments received from customers, such as quick or manual deposit payments, grouped together for processing. */
        "objects.accounts-receivable.manual-deposit-summary": {
            /**
             * @description System-assigned unique key for the manual deposit summary.
             * @example 11
             */
            readonly key?: string;
            /**
             * @description ID for the manual deposit summary. This value is the same as the `key` for this object.
             * @example 11
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the manual deposit summary.
             * @example /objects/accounts-receivable/manual-deposit-summary/11
             */
            readonly href?: string;
            /**
             * @description Name of the manual deposit summary. Sage Intacct uses this name to identify the summary throughout the Accounts Receivable application.
             * @example Invoices: 2024/06/01 Batch
             */
            name?: string;
            /**
             * @description Specifies how the summary was created. If set to `manual`, the summary was created by a user. If set to `system`, the summary was created by Sage Intacct based on the specified summary frequency.
             * @default manual
             * @example manual
             * @enum {string}
             */
            readonly summaryCreationType?: "system" | "manual";
            /**
             * Format: date
             * @description The date that summary items post to the general ledger.
             * @example 2025-05-03
             */
            glPostingDate?: string;
            /**
             * @description Specifies the type of transactions included in the manual deposit summary.
             * @default invoice
             * @example invoice
             * @enum {string}
             */
            readonly recordType?: "invoice";
            /**
             * Format: decimal-precision-2
             * @description Total amount of transactions in the summary.
             * @example 110
             */
            readonly totalAmount?: string;
            /**
             * @description State of the summary, which can be `open` or `closed`. An open summary can have items added to it.
             * @default open
             * @example open
             * @enum {string}
             */
            state?: "open" | "closed";
            /** @description Parent summary of the manual deposit summary. */
            parent?: {
                /**
                 * @description Unique key for the parent summary.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the parent summary.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the parent summary.
                 * @example /objects/accounts-receivable/summary/1
                 */
                readonly href?: string;
            };
            /**
             * @description Set to `true` to prevent posting summary items to the general ledger.
             * @default true
             * @example true
             */
            preventGLPosting?: boolean;
            /**
             * @description Specifies whether this is a quick payment summary.
             * @default true
             * @example true
             */
            isQuickPaymentSummary?: boolean;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description Dunning levels define the levels of notices that are sent during the collection process. */
        "objects.accounts-receivable.dunning-level": {
            /**
             * @description System-assigned unique key for the dunning level.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Name or other unique identifier for the dunning level.
             * @example L1 Dunning level
             */
            id?: string;
            /**
             * @description URL endpoint for the dunning level.
             * @example /objects/accounts-receivable/dunning-level/23
             */
            readonly href?: string;
            /**
             * @deprecated
             * @description This field has been deprecated. Use the printTemplateName field instead.
             */
            printTemplate?: {
                /**
                 * @deprecated
                 * @description This field has been deprecated. Use the printTemplateName field instead.
                 * @example 24
                 */
                readonly key?: string;
                /**
                 * @deprecated
                 * @description This field has been deprecated. Use the printTemplateName field instead.
                 * @example Level 1 Document Template
                 */
                id?: string;
            };
            /**
             * @description Unique ID for the printed document template assigned to the dunning level.
             * @example Level 1 Document Template
             */
            printTemplateName?: string;
            dunningThreshold?: {
                /**
                 * @description Minimum days overdue. This is the lower value for the days overdue range of the dunning level.
                 * @default 0
                 * @example 10
                 */
                minDays?: number;
                /**
                 * @description Maximum days overdue. This is the higher value for the days overdue range of the dunning level.
                 * @example 100
                 */
                maxDays?: number;
                /**
                 * Format: decimal-precision-2
                 * @description Minimum invoice amount. This is the lower value for the invoice amount overdue range of the dunning level.
                 * @example 100
                 */
                minAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Maximum invoice amount. This is the higher value for the invoice amount overdue range of the dunning level.
                 * @example 5000
                 */
                maxAmount?: string;
                /**
                 * @description Base currency for the invoice amount.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * @description Transaction currency for the invoice amount.
                 * @example USD
                 */
                txnCurrency?: string;
            };
            /**
             * @deprecated
             * @description This field has been deprecated. Use the noticeSequenceName field instead.
             */
            noticeSequence?: {
                /**
                 * @deprecated
                 * @description This field has been deprecated. Use the noticeSequenceName field instead.
                 * @example 2
                 */
                readonly key?: string;
                /**
                 * @deprecated
                 * @description This field has been deprecated. Use the noticeSequenceName field instead.
                 * @example L1 Dunning Sequence
                 */
                id?: string;
                /**
                 * @deprecated
                 * @description This field has been deprecated. Use the noticeSequenceName field instead.
                 * @example /objects/company-config/document-sequence/2
                 */
                readonly href?: string;
            };
            /**
             * @description Name or other unique ID for the numbering sequence.
             * @example L1 Dunning Sequence
             */
            noticeSequenceName?: string;
            /** @description The email template assigned to the dunning level. */
            emailTemplate?: {
                /**
                 * @description Unique key for the email template.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Name or other unique ID for the email template.
                 * @example L1 Dunning email template
                 */
                id?: string;
                /**
                 * @description URL endpoint for the email template.
                 * @example /objects/company-config/email-template/23
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "accounts-receivable-dunning-levelRequiredProperties": {
            dunningThreshold?: Record<string, never>;
        };
        /** @description Information about customers receiving a dunning notice. */
        "objects.accounts-receivable.dunning-customer": {
            /**
             * @description System-assigned unique key for the dunning customer.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique ID for the dunning customer. This value is the same as the `key` for this object.
             * @example 12
             */
            id?: string;
            /**
             * @description URL endpoint for the dunning customer.
             * @example /objects/accounts-receivable/dunning-customer/12
             */
            readonly href?: string;
            /**
             * @description System generated ID for a dunning notice generated for a customer.
             * @example DUN1
             */
            readonly dunningNoticeCustomerId?: string;
            /** @description Dunning notice email details. */
            noticeEmail?: {
                /**
                 * Format: date-time
                 * @description Date of the email notification.
                 * @example 2025-07-27T19:45:17Z
                 */
                date?: string;
                /**
                 * @description Email addresses of recipients (separated by , or ;).
                 * @example john.doe@mycompany.com
                 */
                to?: string | null;
                /**
                 * @description Email addresses of cc line recipients (separated by , or ;).
                 * @example ganesh@mycompany;bblank@mycompany.com
                 */
                cc?: string | null;
                /**
                 * @description Email addresses of bcc line recipients (separated by , or ;).
                 * @example mogare@mycompany.com
                 */
                bcc?: string | null;
            };
            /**
             * @description Delivery method for the dunning notice.
             * @example both
             * @enum {string}
             */
            deliveryMethod?: "printed" | "emailed" | "both";
            /**
             * Format: decimal-precision-2
             * @description Total overdue amount of customer invoices.
             * @example 1000.00
             */
            readonly totalAmountOverdue?: string;
            /**
             * Format: decimal-precision-2
             * @description Total overdue transaction amount of customer invoices.
             * @example 1000.00
             */
            readonly totalTxnAmountOverdue?: string;
            /**
             * @description Number of due invoices.
             * @example 3
             */
            readonly invoiceCount?: number;
            /** @description Dunning notice associated with the customer. */
            readonly dunningNotice?: {
                /**
                 * @description Unique key for the dunning notice.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the dunning notice.
                 * @example 23
                 */
                readonly id?: string;
                audit?: components["schemas"]["audit.s1"];
                /**
                 * @description URL endpoint for the dunning notice.
                 * @example /objects/accounts-receivable/dunning-notice/23
                 */
                readonly href?: string;
            };
            /** @description Dunning level associated with the dunning notice. */
            readonly dunningLevel?: {
                /**
                 * @description Name or other unique ID for the dunning level.
                 * @example L1
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the dunning level.
                 * @example 5
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the dunning level.
                 * @example /objects/accounts-receivable/dunning-level/5
                 */
                readonly href?: string;
            };
            /** @description Email template for the dunning notice. */
            readonly emailTemplate?: {
                /**
                 * @description URL endpoint for the email template.
                 * @example /objects/company-config/email-template/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the email template.
                 * @example 23
                 */
                readonly key?: string | null;
                /**
                 * @description Name or other unique ID for the email template.
                 * @example L1 DL template
                 */
                readonly id?: string | null;
            };
            /**
             * Format: base64zip
             * @description Generated dunning notice PDF data.
             * @example PDF data
             */
            readonly dunningNoticeAttachment?: string;
            /** @description Customer associated with the dunning notice. */
            customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 19
                 */
                key?: string;
                /**
                 * @description Unique ID for the customer.
                 * @example CUST1
                 */
                id?: string;
                /**
                 * @description Name of the customer.
                 * @example John Bow
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/19
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies whether to print a dunning notice for the customer.
             * @default true
             * @example true
             */
            sendPrintedNotice?: boolean;
            /**
             * @description Specifies whether to send a dunning email notification to the email addresses listed in `noticeEmail`.
             * @default true
             * @example true
             */
            sendEmailNotice?: boolean;
            /** @description List of invoices included in the dunning notice. */
            invoices?: components["schemas"]["objects.accounts-receivable.dunning-invoice"][];
            audit?: components["schemas"]["audit.s2"];
            entity?: components["schemas"]["entity-ref"] & {
                /**
                 * @description Unique key for the location.
                 * @example 1
                 */
                key?: string;
            };
        };
        /** @description Dunning invoices are part of a generated dunning notice when a customer fails to pay an invoice by the due date. */
        "objects.accounts-receivable.dunning-invoice": {
            /**
             * @description System-assigned unique key for the dunning invoice.
             * @example 32
             */
            readonly key?: string;
            /**
             * @description ID for the dunning invoice. This value is the same as the key for this object.
             * @example 32
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the dunning invoice.
             * @example /objects/accounts-receivable/dunning-invoice/32
             */
            readonly href?: string;
            /** @description Customer associated with the dunning invoice. */
            dunningCustomer?: {
                /**
                 * @description Unique key for the dunning customer.
                 * @example 15
                 */
                readonly key?: string;
                /**
                 * @description ID for the dunning customer.
                 * @example 15
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the dunning customer.
                 * @example /objects/accounts-receivable/dunning-customer/15
                 */
                readonly href?: string;
            };
            /** @description AR invoice included in the dunning invoice. */
            readonly arInvoice?: {
                /**
                 * @description Unique key for the invoice.
                 * @example 35
                 */
                readonly key?: string;
                /**
                 * @description ID for the invoice.
                 * @example 35
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the invoice.
                 * @example /objects/accounts-receivable/invoice/35
                 */
                readonly href?: string;
                /**
                 * @description User-defined unique ID for invoice.
                 * @default
                 * @example INV1
                 */
                readonly invoiceNumber?: string | null;
                /**
                 * Format: date
                 * @description Date the invoice was created.
                 * @example 2025-01-01
                 */
                readonly invoiceDate?: string;
                /**
                 * Format: date
                 * @description Date the invoice is due.
                 * @example 2025-01-11
                 */
                readonly dueDate?: string;
                /**
                 * Format: decimal-precision-2
                 * @description For multi-currency companies, total entered in the base currency of the company.
                 * @example 100
                 */
                readonly totalBaseAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description For multi-currency companies, total due in the base currency of the company.
                 * @example 100
                 */
                readonly totalBaseAmountDue?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount in the currency of the invoice.
                 * @example 100
                 */
                readonly totalTxnAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount due in the currency of the invoice.
                 * @example 100
                 */
                readonly totalTxnAmountDue?: string;
                /**
                 * @description Customer purchase order number or another reference number.
                 * @example CHECK-123
                 */
                readonly referenceNumber?: string | null;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Dunning notice. */
        "objects.accounts-receivable.dunning-notice": {
            /**
             * @description System-assigned unique key for the dunning notice.
             * @example 23
             */
            key?: string;
            /**
             * @description ID for the dunning notice. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the dunning notice.
             * @example /objects/accounts-receivable/dunning-notice/23
             */
            readonly href?: string;
            /**
             * @description Specifies how to filter due invoices, either by the invoice date or the due date.
             * @example dueDate
             * @enum {string}
             */
            basedOn?: "invoiceDate" | "dueDate";
            /**
             * Format: date
             * @description Specifies the date to use to determine when invoices are filtered. For example, if you set an `asOfDate` of 2025-06-15 and you set the `basedOnDate` to `dueDate`, notices are sent to customers who have invoices due by 2025-06-15.
             * @example 2025-01-01
             */
            asOfDate?: string;
            /**
             * @description The transaction currency for the dunning notice.
             * @example USD
             */
            readonly currency?: string;
            /**
             * @description The base currency for the dunning notice.
             * @example USD
             */
            readonly baseCurrency?: string;
            /**
             * @description Name of the printed document template to use for the dunning notice.
             * @example L1 DL Doc Template
             */
            printTemplateName?: string;
            /** @description Information about the user who is the sender. */
            sender?: {
                /**
                 * @description Sender email address.
                 * @example john.bow@mycompany.com
                 */
                email?: string;
                /**
                 * @description Sender name.
                 * @example John Bow
                 */
                name?: string;
                /**
                 * @description Sender phone number.
                 * @example 123-456-7890
                 */
                phone?: string;
            };
            /**
             * @description Specifies whether invoices are attached to the dunning notice.
             * @default false
             * @example false
             */
            attachInvoice?: boolean;
            dunningLevel?: {
                /**
                 * @description URL endpoint for the dunning level.
                 * @example /objects/accounts-receivable/dunning-level/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the dunning level.
                 * @example 100
                 */
                key?: string;
                /**
                 * @description Name or other unique ID for the dunning level.
                 * @example L1
                 */
                id?: string;
            };
            /** @description Email template for the dunning notice. */
            emailTemplate?: {
                /**
                 * @description URL endpoint for the email template.
                 * @example /objects/company-config/email-template/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the email template.
                 * @example 23
                 */
                key?: string | null;
                /**
                 * @description Name or other unique ID for the email template.
                 * @example L1 DL template
                 */
                id?: string | null;
            };
            /** @description List of customers included in the dunning notice. */
            dunningCustomers?: components["schemas"]["objects.accounts-receivable.dunning-customer"][];
            audit?: components["schemas"]["audit.s1"];
        };
        "accounts-receivable-dunning-noticeRequiredProperties": {
            sender?: Record<string, never>;
            dunningCustomers?: Record<string, never>[];
        };
        /** @description Accounts receivable customer refund object. */
        "objects.accounts-receivable.customer-refund": {
            /**
             * @description System-assigned key for the customer refund.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Sequence number for the customer refund. Generated based on the sequnce configuration.
             * @example REF23
             */
            readonly id?: string;
            /**
             * @description Endpoint for the customer refund.
             * @example /objects/accounts-receivable/customer-refund/23
             */
            readonly href?: string;
            /**
             * @description State of customer refund.
             * @example draft
             * @enum {string}
             */
            state?: "posted" | "voided" | "draft";
            /**
             * @description Payment method for the customer refund. Specify `eft` or `electronicPayment` to record a paid refund or `processInAP` to pay the customer refund in AP.
             * @example eft
             * @enum {string}
             */
            paymentMethod?: "eft" | "processInAP" | "electronicPayment";
            /** @description Payment servicer for the customer refund when payment method is `electronicPayment`. */
            paymentProvider?: {
                /**
                 * @description Unique key for the payment provider.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique ID for the payment provider.
                 * @example STRIPE
                 */
                id?: string;
                /**
                 * @description URL endpoint for the payment provider.
                 * @example /objects/accounts-receivable/payment-provider/23
                 */
                readonly href?: string;
            };
            /**
             * @description Document number of the original payment transaction when payment method is `electronicPayment`.
             * @example REF23
             */
            providerDocumentNumber?: string | null;
            /**
             * @description Indicates if this is a refund for an electronic payment.
             * @example false
             * @enum {string|null}
             */
            readonly isElectronicPaymentRefund?: null | true | false;
            /**
             * @description Status of the electronic payment refund.
             * @example pending
             * @enum {string|null}
             */
            readonly electronicPaymentRefundStatus?: null | "inProgress" | "pending" | "refunded" | "failed" | "cancelled" | "unknown" | "unauthorised" | "paid" | "arrived" | "paidOffline" | "rejected" | "partialPayment" | "partialRefund";
            /**
             * @description Document number for customer refund.
             * @example REF23
             */
            documentNumber?: string;
            /**
             * @description Description for the customer refund.
             * @example This is a customer-refund for the customer against the invoice.
             */
            description?: string;
            /**
             * Format: date
             * @description Date when customer refund was done.
             * @example 2024-09-30
             */
            paymentDate?: string;
            /**
             * Format: date
             * @description Date when customer refund was created.
             * @example 2024-09-30
             */
            refundDate?: string;
            /** @description For multi-currency companies, the company's base currency. */
            baseCurrency?: {
                /**
                 * @description The company's base currency.
                 * @example USD
                 */
                currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount.
                 * @example 500
                 */
                refundAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount paid.
                 * @example 500
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount due.
                 * @example 0
                 */
                readonly totalDue?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount selected.
                 * @example 500
                 */
                readonly totalSelected?: string;
            };
            /** @description Transaction currency for the refund. */
            txnCurrency?: {
                /**
                 * @description The currency in which the refund was made.
                 * @example USD
                 */
                currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total refund amount
                 * @example 100.00
                 */
                refundAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount paid.
                 * @example 100.00
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount due.
                 * @example 0
                 */
                readonly totalDue?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount selected.
                 * @example 100.00
                 */
                readonly totalSelected?: string;
            };
            /** @description Exchange rate details used to calculate the base refund amount. */
            readonly exchangeRate?: {
                /**
                 * Format: date
                 * @description Exchange rate date used to calculate the base refund amount.
                 * @example 2021-01-23
                 */
                readonly date?: string;
                /**
                 * @description Exchange rate used to calculate the base refund amount.
                 * @example 1.0789
                 */
                readonly rate?: number;
                /**
                 * @description Exchange rate type used to calculate the base refund amount.
                 * @example -1
                 */
                readonly typeId?: string | null;
            };
            /**
             * @description If set to `true`, the customer refund has been reconciled.
             * @default inTransit
             * @example null
             * @enum {string}
             */
            bankReconciliationStatus?: "cleared" | "inTransit" | "";
            /**
             * Format: date
             * @description Reconciliation date for the customer refund.
             * @example 2024-09-30
             */
            bankReconciliationDate?: string;
            /** @description AP bill associated with the customer refund, if any. */
            readonly apBill?: {
                /**
                 * @description System-assigned key for the AP bill.
                 * @example 23
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the AP bill.
                 * @example 23
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the AP bill.
                 * @example /objects/accounts-payable/bill/23
                 */
                readonly href?: string;
            };
            /** @description AR summary the customer refund is part of. Summaries are collections of transactions grouped together for processing. */
            refundSummary?: {
                /**
                 * @description System-assigned key for the AR summary.
                 * @example 1259
                 */
                key?: string;
                /**
                 * @description Identifier for the AR summary.
                 * @example 1259
                 */
                id?: string;
                /**
                 * @description Name of the AR summary.
                 * @example Feb 2023 batch
                 */
                name?: string;
                /**
                 * @description URL endpoint for the AR summary.
                 * @example /objects/accounts-receivable/summary/1259
                 */
                readonly href?: string;
            };
            /** @description Customer associated with the refund. */
            customer?: {
                /**
                 * @description System-assigned key for the customer.
                 * @example 45
                 */
                key?: string;
                /**
                 * @description Identifier for the customer.
                 * @example Cust-00064
                 */
                id?: string;
                /**
                 * @description Name of the customer.
                 * @example NF Power and Light
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/45
                 */
                readonly href?: string;
            };
            /** @description Details of the bank through which refund was made. */
            bankCurrency?: {
                /**
                 * @description Bank currency for the refund.
                 * @example USD
                 */
                readonly currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total bank base amount.
                 * @example 500
                 */
                readonly amount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total bank transaction amount.
                 * @example 100.00
                 */
                txnAmount?: string;
            };
            /** @description Financial account from which the refund payment will be made. */
            financialEntity?: {
                /**
                 * @description Endpoint for the financial account.
                 * @example /objects/cash-management/bank-account/23
                 */
                readonly href?: string;
                /**
                 * @description Financial account key.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Financial account ID.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description The bank currency in which the refund was made.
                 * @example USD
                 */
                readonly currency?: string;
            };
            /** @description Pay to contact details for the AR refund. */
            payTo?: {
                /**
                 * @description System-assigned key for the contact.
                 * @example 45
                 */
                key?: string;
                /**
                 * @description User defined unique identifier for the contact.
                 * @example Cust-00064
                 */
                id?: string;
                /**
                 * @description URL endpoint for the contact.
                 * @example /objects/company-config/contact/45
                 */
                readonly href?: string;
            };
            /** @description Supporting document for the customer refund. */
            attachment?: {
                /**
                 * @description System-assigned key for the attachment.
                 * @example 21
                 */
                key?: string;
                /**
                 * @description ID for the attachment.
                 * @example Sales01
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/21
                 */
                readonly href?: string;
            };
            /** @description Details for the refund. */
            refundDetails?: components["schemas"]["objects.accounts-receivable.customer-refund-detail"][];
            /** @description Line items of the refund. */
            lines?: components["schemas"]["objects.accounts-receivable.customer-refund-line"][];
            audit?: components["schemas"]["audit.s2"] & {
                /**
                 * Format: date-time
                 * @description Time of the customer-refund submission.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            entity?: components["schemas"]["entity-ref"];
        };
        "accounts-receivable-customer-refundRequiredProperties": {
            refundDetails?: unknown[];
        };
        "accounts-receivable-customer-refund-actions-submit-request": {
            /**
             * @description System-assigned key for the customer refund.
             * @example 12
             */
            key: string;
        };
        "accounts-receivable-customer-refund-actions-submit-response": {
            /**
             * @description System-assigned key for the customer refund.
             * @example 12
             */
            key?: string;
            /**
             * @description Unique ID for the customer refund.
             * @example REF-02
             */
            id?: string;
            /**
             * @description URL endpoint for the customer refund.
             * @example /objects/accounts-receivable/customer-refund/12
             */
            href?: string;
            /**
             * @description State of the customer refund.
             * @example posted
             * @enum {string}
             */
            state?: "posted";
        };
        "accounts-receivable-customer-refund-actions-reverse-request": {
            /**
             * @description System-assigned key for customer refund.
             * @example 23
             */
            key: string;
            /**
             * Format: date
             * @description Date the transactions is reversed.
             * @example 2025-04-15
             */
            reversedDate: string;
            /**
             * @description Notes or comments about the reason for the the refund reversal.
             * @example Reversed the refund due to duplicate entry
             */
            description?: string;
        };
        "accounts-receivable-customer-refund-actions-reverse-response": {
            /**
             * @description System-assigned key for the customer refund.
             * @example 23
             */
            key?: string;
            /**
             * @description Unique ID for the refund.
             * @example REF-01
             */
            id?: string;
            /**
             * @description URL endpoint for customer refund.
             * @example /objects/accounts-receivable/customer-refund/23
             */
            href?: string;
            /**
             * @description State of the refund after reversal.
             * @example voided
             */
            state?: string;
        };
        /** @description Accounts receivable customer refund line object. */
        "objects.accounts-receivable.customer-refund-line": {
            /**
             * @description System-assigned key for the customer refund line.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description System-assigned key for the customer refund line.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description Endpoint for the customer refund line.
             * @example /objects/accounts-receivable/customer-refund-line/23
             */
            readonly href?: string;
            /** @description For multi-currency companies, base currency information for the line item. */
            readonly baseCurrency?: {
                /**
                 * @description Base currency of the company.
                 * @example USD
                 */
                readonly currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description For multi-currency companies, the amount of the line item in the company's base currency.
                 * @example 10
                 */
                readonly amount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount paid for the line item.
                 * @example 10
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total selected for the line item.
                 * @example 0
                 */
                readonly totalSelected?: string;
            };
            /** @description Transaction currency information for the line item. */
            readonly txnCurrency?: {
                /**
                 * @description Transaction currency.
                 * @example USD
                 */
                readonly currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description For payment involving multi-currency, the amount of the item in the currency for the invoice.
                 * @example 10
                 */
                readonly amount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Transaction total paid for the line item.
                 * @example 10
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction selected for the line item.
                 * @example 0
                 */
                readonly totalSelected?: string;
            };
            /** @description Exchange rate details used to calculate the base amount for the line item. */
            readonly exchangeRate?: {
                /**
                 * Format: date
                 * @description Exchange rate date used to calculate the base amount from the transaction amount.
                 * @example 2021-01-23
                 */
                readonly date?: string;
                /**
                 * @description Exchange rate used to calculate the base amount from the transaction amount.
                 * @example 1.0789
                 */
                readonly rate?: number;
                /**
                 * @description Exchange rate type used to calculate the base amount from the transaction amount.
                 * @example -1
                 */
                readonly typeId?: string;
            };
            /** @description Details of the bank through which refund was made. */
            readonly bank?: {
                /**
                 * Format: decimal-precision-2
                 * @description For multi-currency companies, the amount of the line item in the bank's base currency.
                 * @example 10
                 */
                readonly amount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description For payment involving multi-currency, the amount of the item in the currency of the bank.
                 * @example 10
                 */
                readonly txnAmount?: string;
                /** @description For two and three-way currency conversions, Bank exchange rate details used to calculate the base amount for the line item. */
                readonly bankExchangeRate?: {
                    /**
                     * Format: date
                     * @description Exchange rate date used to calculate the bank base amount from the transaction amount.
                     * @example 2021-01-23
                     */
                    readonly date?: string;
                    /**
                     * @description Exchange rate used to calculate the bank base amount from the transaction amount.
                     * @example 1.0789
                     */
                    readonly rate?: number;
                    /**
                     * @description Exchange rate type used to calculate the bank base amount from the transaction amount.
                     * @example -1
                     */
                    readonly typeId?: string;
                };
            };
            /**
             * @description Memo or brief description of the AR refund line item.
             * @example Annual service charge
             */
            memo?: string;
            /**
             * @description Line number of the AR refund line item.
             * @example 1
             */
            readonly lineNumber?: number;
            /** @description Customer refund record. */
            readonly customerRefund?: {
                /**
                 * @description Endpoint for the customer refund.
                 * @example /objects/accounts-receivable/customer-refund/23
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the customer refund.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description System-assigned key for the customer refund.
                 * @example 23
                 */
                readonly id?: string;
            };
            /** @description GL account associated with the line item. */
            glAccount?: {
                /**
                 * @description Account key
                 * @example 87
                 */
                key?: string;
                /**
                 * @description Account number
                 * @example 1100
                 */
                id?: string;
                /**
                 * @description GL account title
                 * @example Sales
                 */
                name?: string;
                /**
                 * @description GL account URL
                 * @example /objects/general-ledger/account/87
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s2"];
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the customer refund line.
                 */
                location?: {
                    /**
                     * @description Location key.
                     * @example 4
                     */
                    key?: string;
                    /**
                     * @description Location ID.
                     * @example US
                     */
                    id?: string;
                    /**
                     * @description Location name.
                     * @example United States
                     */
                    name?: string;
                    /**
                     * @description Location URL.
                     * @example /objects/company-config/location/4
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Department associated with the customer refund line.
                 */
                department?: {
                    /**
                     * @description Department key.
                     * @example 9
                     */
                    key?: string;
                    /**
                     * @description Department ID.
                     * @example ENG
                     */
                    id?: string;
                    /**
                     * @description Department name.
                     * @example Engineering
                     */
                    name?: string;
                    /**
                     * @description Department URL.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
            };
        };
        /** @description Customer refund detail object. */
        "objects.accounts-receivable.customer-refund-detail": {
            /**
             * @description System-assigned key for the customer refund detail.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description System-assigned key for the customer refund detail.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description Endpoint for the customer refund detail.
             * @example /objects/accounts-receivable/customer-refund-detail/23
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Date the refund was made.
             * @example 2023-04-30
             */
            readonly paymentDate?: string;
            /**
             * Format: decimal-precision-2
             * @description The amount of the payment in the company's base currency.
             * @example 10
             */
            baseRefundAmount?: string | null;
            /**
             * Format: decimal-precision-2
             * @description The amount of the transaction in the payment currency.
             * @example 243.00
             */
            txnRefundAmount?: string | null;
            /**
             * @description Bank currency of the refund transaction.
             * @example USD
             */
            readonly bankCurrency?: string;
            /** @description Overpayment record. */
            overPayment?: {
                /**
                 * @description System generated key for the overpayment.
                 * @example 56
                 */
                key?: string | null;
                /**
                 * @description Identifier for the overpayment.
                 * @example 56
                 */
                id?: string | null;
                /**
                 * @description URL for the overpayment.
                 * @example /objects/accounts-receivable/payment/56
                 */
                readonly href?: string;
            };
            /** @description Overpayment line item record. */
            overPaymentLine?: {
                /**
                 * @description System generated key for the overpayment line item.
                 * @example 56
                 */
                key?: string | null;
                /**
                 * @description Identifier for the overpayment line item.
                 * @example 56
                 */
                id?: string | null;
                /**
                 * @description URL for the overpayment line item.
                 * @example /objects/accounts-receivable/payment-line/56
                 */
                readonly href?: string;
            };
            /** @description Negative invoice transaction record */
            negativeInvoice?: {
                /**
                 * @description System-generated key for the negative invoice transaction.
                 * @example 33
                 */
                key?: string | null;
                /**
                 * @description Identifier for the negative invoice transaction.
                 * @example 33
                 */
                id?: string | null;
                /**
                 * @description URL for the negative invoice transaction.
                 * @example /objects/accounts-receivable/invoice/33
                 */
                readonly href?: string;
            };
            /** @description Negative invoice transaction line item record. */
            negativeInvoiceLine?: {
                /**
                 * @description System-generated key for the negative invoice transaction line item.
                 * @example 4
                 */
                key?: string | null;
                /**
                 * @description Identifier for the negative invoice transaction line item.
                 * @example 4
                 */
                id?: string | null;
                /**
                 * @description URL for the invoice transaction line item.
                 * @example /objects/accounts-receivable/invoice-line/4
                 */
                readonly href?: string;
            };
            /** @description Parent payment record. */
            arPayment?: {
                /**
                 * @description System-generated key for the parent payment record.
                 * @example 23
                 */
                key?: string | null;
                /**
                 * @description Identifier for the parent payment record.
                 * @example 23
                 */
                id?: string | null;
                /**
                 * @description URL for the parent payment record.
                 * @example /objects/accounts-receivable/payment/23
                 */
                readonly href?: string;
            };
            /**
             * @description State of customer refund.
             * @example complete
             * @enum {string}
             */
            readonly state?: "complete" | "voided" | "draft";
            /** @description AR adjustment transaction record. */
            arAdjustment?: {
                /**
                 * @description System-generated key for the AR adjustment.
                 * @example 41
                 */
                key?: string | null;
                /**
                 * @description Identifier for the AR adjustment.
                 * @example 41
                 */
                id?: string | null;
                /**
                 * @description URL for the AR adjustment.
                 * @example /objects/accounts-receivable/adjustment/41
                 */
                readonly href?: string;
            };
            /** @description AR adjustment transaction line item record. */
            arAdjustmentLine?: {
                /**
                 * @description System-generated key for the adjustment line item.
                 * @example 86
                 */
                key?: string | null;
                /**
                 * @description Identifier for the adjustment line item.
                 * @example 86
                 */
                id?: string | null;
                /**
                 * @description URL for the adjustment line item.
                 * @example /objects/accounts-receivable/adjustment-line/86
                 */
                readonly href?: string;
            };
            /** @description AR advance record. */
            arAdvance?: {
                /**
                 * @description System-generated key for the AR advance.
                 * @example 999
                 */
                key?: string | null;
                /**
                 * @description Identifier for the AR advance.
                 * @example 999
                 */
                id?: string | null;
                /** @example /objects/accounts-receivable/advance/999 */
                readonly href?: string;
            };
            /** @description AR advance line item record. */
            arAdvanceLine?: {
                /**
                 * @description System-generated key for the AR advance line item.
                 * @example 59
                 */
                key?: string | null;
                /**
                 * @description Identifier for the AR advance line item.
                 * @example 59
                 */
                id?: string | null;
                /** @example /objects/accounts-receivable/advance-line/59 */
                readonly href?: string;
            };
            readonly customerRefund?: {
                /**
                 * @description Endpoint for the customer refund.
                 * @example /objects/accounts-receivable/customer-refund/23
                 */
                readonly href?: string;
                /**
                 * @description System generated key for accounts receivalbe customer refund.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the accounts receivable customer refund.
                 * @example 23
                 */
                id?: string;
            };
            customerRefundLine?: {
                /**
                 * @description Endpoint for the customer refund entry.
                 * @example /objects/accounts-receivable/customer-refund-line/23
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the Customer refund line.
                 * @example 6663
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the customer refund line.
                 * @example 6663
                 */
                readonly id?: string;
            };
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
        /**
         * @description Status of the dimension object:
         *
         *     * `active` - Transactions can be posted to this dimension member and it can be used in reports.
         *     * `activeNonPosting` - Transactions cannot be posted to the dimension member but it can be used in reports.
         *     * `inactive` - The dimension member cannot be used for transactions or reports.
         * @default active
         * @example active
         * @enum {string|null}
         */
        "dimension-status": null | "active" | "activeNonPosting" | "inactive";
        "contact-ref": {
            /**
             * @description System-assigned unique key for the contact.
             * @example 21
             */
            key?: string;
            /**
             * @description Contact ID.
             * @example jsmith
             */
            id?: string;
            /**
             * @description URL endpoint for the contact.
             * @example /objects/company-config/contact/21
             */
            readonly href?: string;
            /**
             * @deprecated
             * @description Last name.
             * @example Smith
             */
            lastName?: string | null;
            /**
             * @deprecated
             * @description First name.
             * @example John
             */
            firstName?: string | null;
            /**
             * @deprecated
             * @description Middle name.
             * @example Archibald
             */
            middleName?: string | null;
            /**
             * @deprecated
             * @description Prefix, such as Mr., Mrs., or Ms.
             * @example Mr
             */
            prefix?: string | null;
            /**
             * @deprecated
             * @description The contact's name as it will appear on documents.
             * @example John Smith
             */
            printAs?: string;
            /**
             * @deprecated
             * @description Primary email address.
             * @example jsmith@company.com
             */
            email1?: string | null;
            /**
             * @deprecated
             * @description Secondary email address.
             * @example john@aol.com
             */
            email2?: string | null;
            /**
             * @deprecated
             * @description Primary phone number.
             * @example 14085551212
             */
            phone1?: string | null;
            /**
             * @deprecated
             * @description Secondary phone number.
             * @example 14085559876
             */
            phone2?: string | null;
            /**
             * @deprecated
             * @description Mobile phone number.
             * @example 14085554420
             */
            mobile?: string | null;
            /**
             * @deprecated
             * @description Pager number.
             * @example 14085559987
             */
            pager?: string | null;
            /**
             * @deprecated
             * @description Fax number.
             * @example 14085555309
             */
            fax?: string | null;
            /**
             * @deprecated
             * @description Web page address for this contact.
             * @example https://mycompany.com
             */
            URL1?: string | null;
            /**
             * @deprecated
             * @description Secondary web page address.
             * @example https://anothercompany.com
             */
            URL2?: string | null;
            /**
             * @deprecated
             * @description Name of the company.
             * @example AlcoSoft Inc
             */
            companyName?: string | null;
            /** @description Mailing address. */
            mailingAddress?: {
                /**
                 * @deprecated
                 * @description The first address line for shipping, billing, etc.
                 * @example 300 Park Avenue
                 */
                addressLine1?: string | null;
                /**
                 * @deprecated
                 * @description The second address line for shipping, billing, etc.
                 * @example Suite 1400
                 */
                addressLine2?: string | null;
                /**
                 * @deprecated
                 * @description The third address line for shipping, billing, etc. which provides additional geographical information.
                 * @example Western industrial area
                 */
                addressLine3?: string | null;
                /**
                 * @deprecated
                 * @description City.
                 * @example San Jose
                 */
                city?: string | null;
                /**
                 * @deprecated
                 * @description State.
                 * @example California
                 */
                state?: string | null;
                /**
                 * @deprecated
                 * @description Zip or Postal Code.
                 * @example 95110
                 */
                postCode?: string | null;
                /**
                 * @deprecated
                 * @description Country. This field is deprecated, please use `isoCountryCode`.
                 * @default US
                 * @example United States
                 */
                country?: string | null;
                /**
                 * @deprecated
                 * @description ISO country code. This field takes prevalence over `country` which is now deprecated.
                 * @default US
                 * @example US
                 */
                isoCountryCode?: string | null;
            };
        };
        /** @description Member filter. */
        "member-filter": {
            /**
             * @description Object type to filter on. Must match the type of object contained in the group, such as `company-config/department` or `company-config/employee`.
             * @example accounts-payable/vendor
             */
            object?: string;
            /**
             * @description Filters to select the records to return based on their field values. You use operators and conditions to build your filter, such as `{"$eq":{"status":"active"}}` to select records in which `status` is equal to "active".
             * @example [
             *       {
             *         "$eq": {
             *           "status": "active"
             *         }
             *       },
             *       {
             *         "$gt": {
             *           "totalDue": "1000"
             *         }
             *       },
             *       {
             *         "$contains": {
             *           "name": "Acme"
             *         }
             *       }
             *     ]
             */
            filters?: ({
                /** @description The field name and value to be compared with object values. */
                $eq?: {
                    [key: string]: (string | null) | (number | null) | (number | null) | boolean;
                };
            } | {
                /** @description The field name and value to be compared with object values. */
                $ne?: {
                    [key: string]: (string | null) | (number | null) | (number | null) | boolean;
                };
            } | {
                /** @description The field name and value to be compared with object values. */
                $lt?: {
                    [key: string]: string | number;
                };
            } | {
                /** @description The field name and value to be compared with object values. */
                $lte?: {
                    [key: string]: string | number | boolean;
                };
            } | {
                /** @description The field name and value to be compared with object values. */
                $gt?: {
                    [key: string]: string | number;
                };
            } | {
                /** @description The field name and value to be compared with object values. */
                $gte?: {
                    [key: string]: string | number | boolean;
                };
            } | {
                /** @description The field name and list of values to be compared with object values. */
                $in?: {
                    [key: string]: (string | number | boolean)[];
                };
            } | {
                /** @description The field name and list of values to be compared with object values. */
                $notIn?: {
                    [key: string]: (string | number | boolean)[];
                };
            } | {
                /** @description The field name and value to be compared with object values. */
                $contains?: {
                    [key: string]: string | number;
                };
            } | {
                /** @description The field name and value to be compared with object values. */
                $notContains?: {
                    [key: string]: string | number;
                };
            } | {
                /** @description The field name and value to be compared with object values. */
                $startsWith?: {
                    [key: string]: string | number;
                };
            } | {
                /** @description The field name and value to be compared with object values. */
                $notStartsWith?: {
                    [key: string]: string | number;
                };
            } | {
                /** @description The field name and value to be compared with object values. */
                $endsWith?: {
                    [key: string]: string | number;
                };
            } | {
                /** @description The field name and value to be compared with object values. */
                $notEndsWith?: {
                    [key: string]: string | number;
                };
            })[];
            /**
             * @description Logical operators to apply when there are multiple filter conditions. The conditions in the `filters` array are implicitly numbered starting at 1. Supports `and`, `or`, and grouping with parentheses.
             *
             *     Shortcuts:
             *     + `and` by itself means that all conditions must be true.
             *     + `or` by itself means that at least one condition must be true.
             * @default and
             * @example (1 and 2) or 3
             */
            filterExpression?: string;
            /**
             * @description Sort order for the results that match the `filters` when the group is displayed in reports. The entry consists of a field name to sort by and whether it should be sorted in ascending or descending order.
             * @example [
             *       {
             *         "id": "asc"
             *       }
             *     ]
             */
            orderBy?: {
                [key: string]: "asc" | "desc";
            }[];
            /**
             * @description The maximum number of records that match the `filters` to include in the group when it is displayed in reports.
             * @example 100
             */
            size?: number;
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
        /** @description Project contract billing summary totals on the invoice. (Construction subscription). */
        "project-contract-billing-invoice-summary-ref": {
            /**
             * Format: decimal-precision-10
             * @description Sum of the original contract amounts.
             * @example 1000.0000000000
             */
            readonly originalContractAmount?: string | null;
            /**
             * Format: decimal-precision-10
             * @description Sum of the net approved changes amounts.
             * @example 1000.0000000000
             */
            readonly netApprovedChangesAmount?: string | null;
            /**
             * Format: decimal-precision-10
             * @description Sum of the revised contract amounts.
             * @example 1000.0000000000
             */
            readonly revisedContractAmount?: string | null;
            /**
             * Format: decimal-precision-10
             * @description Sum of the completed from prior applications amounts.
             * @example 1000.0000000000
             */
            readonly completedFromPriorApplicationAmount?: string | null;
            /**
             * Format: decimal-precision-10
             * @description Sum of the completed to date amounts.
             * @example 1000.0000000000
             */
            readonly completedToDateAmount?: string | null;
            /**
             * Format: decimal-precision-10
             * @description Sum of the less previous billing amounts.
             * @example 1000.0000000000
             */
            readonly lessPreviousBillingAmount?: string | null;
            /**
             * Format: decimal-precision-10
             * @description Sum of the current due amounts.
             * @example 1000.0000000000
             */
            readonly currentDueAmount?: string | null;
            /**
             * Format: decimal-precision-10
             * @description Sum of the balance to finish amounts.
             * @example 1000.0000000000
             */
            readonly balanceToFinishAmount?: string | null;
            /**
             * Format: decimal-precision-10
             * @description Sum of the taxes.
             * @example 1000.0000000000
             */
            readonly taxAmount?: string | null;
            /**
             * Format: decimal-precision-10
             * @description Sum of the charges.
             * @example 1000.0000000000
             */
            readonly chargeAmount?: string | null;
            /**
             * Format: decimal-precision-10
             * @description Sum of the discounts.
             * @example 1000.0000000000
             */
            readonly discountAmount?: string | null;
            /** @description Project contract billing changes approved for the prior month on the Order Entry document or Account Receivable Invoice. */
            changesApprovedPriorMonth?: {
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the additional changes approved in prior months.
                 * @example 1000.0000000000
                 */
                readonly additionsAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the deducted changes approved in prior months.
                 * @example 1000.0000000000
                 */
                readonly deductionsAmount?: string | null;
            };
            /** @description Project contract billing changes approved for the current month on the Order Entry document or Account Receivable Invoice. */
            changesApprovedThisMonth?: {
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the additional changes approved this month.
                 * @example 1000.0000000000
                 */
                readonly additionsAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the deducted changes approved this month.
                 * @example 1000.0000000000
                 */
                readonly deductionsAmount?: string | null;
            };
            /** @description Retainage totals. */
            retainage?: {
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the invoice amounts retained.
                 * @example 1000.0000000000
                 */
                readonly amountRetained?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the invoice retainage billed.
                 * @example 1000.0000000000
                 */
                readonly billedAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the net change retainage held.
                 * @example 1000.0000000000
                 */
                readonly netChangeHeldAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the retainage held to date.
                 * @example 1000.0000000000
                 */
                readonly heldToDateAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the retainage billed to date.
                 * @example 1000.0000000000
                 */
                readonly billedToDateAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the retainage balance to date.
                 * @example 1000.0000000000
                 */
                readonly balanceToDateAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the previous retainage balance.
                 * @example 1000.0000000000
                 */
                readonly previousBalanceAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of the total earned less retainage.
                 * @example 1000.0000000000
                 */
                readonly totalEarnedLessAmount?: string | null;
            };
            /**
             * @description Accounts Receivable invoice number.
             * @example INV1
             */
            readonly accountsReceivableInvoiceNumber?: string | null;
            /**
             * @description Order Entry document ID.
             * @example SO-AIA-Invoice01-Ord#0011#doc
             */
            readonly orderEntryDocumentId?: string | null;
            /**
             * @description Project ID.
             * @example DIM - HCS
             */
            readonly projectId?: string | null;
            /**
             * @description Project name.
             * @example Dimensions - Hands Computer Systems
             */
            readonly projectName?: string | null;
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
    "list-accounts-receivable-account-label": {
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
    "create-accounts-receivable-account-label": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.account-label"] & components["schemas"]["accounts-receivable-account-labelRequiredProperties"];
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
    "get-accounts-receivable-account-label-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account label.
                 * @example 99
                 */
                key: number;
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.account-label"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-account-label-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account label.
                 * @example 99
                 */
                key: number;
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
    "update-accounts-receivable-account-label-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account label.
                 * @example 99
                 */
                key: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.account-label"] & {
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
    "list-accounts-receivable-adjustment": {
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
    "create-accounts-receivable-adjustment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.adjustment"] & components["schemas"]["accounts-receivable-adjustmentRequiredProperties"];
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
    "get-accounts-receivable-adjustment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the adjustment.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.adjustment"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-adjustment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the adjustment.
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
    "update-accounts-receivable-adjustment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the adjustment.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.adjustment"] & {
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
    "submit-accounts-receivable-adjustment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-receivable-adjustment-actions-submit-request"];
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
                        "ia::result"?: components["schemas"]["accounts-receivable-adjustment-actions-submit-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "reclassify-accounts-receivable-adjustment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-receivable-adjustment-actions-reclassify-request"];
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
                        "ia::result"?: components["schemas"]["accounts-receivable-adjustment-actions-reclassify-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "reverse-accounts-receivable-adjustment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-receivable-adjustment-actions-reverse-request"];
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
                        "ia::result"?: components["schemas"]["accounts-receivable-adjustment-actions-reverse-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-adjustment-line": {
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
    "create-accounts-receivable-adjustment-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.adjustment-line"] & components["schemas"]["accounts-receivable-adjustment-lineRequiredProperties"];
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
    "get-accounts-receivable-adjustment-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment line.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.adjustment-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-adjustment-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment line.
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
    "update-accounts-receivable-adjustment-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.adjustment-line"];
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
    "list-accounts-receivable-adjustment-tax-entry": {
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
    "get-accounts-receivable-adjustment-tax-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the adjustment tax entry.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.adjustment-tax-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-advance": {
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
    "create-accounts-receivable-advance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.advance"] & components["schemas"]["accounts-receivable-advanceRequiredProperties"];
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
    "get-accounts-receivable-advance-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance.
                 * @example 757
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.advance"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-advance-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance.
                 * @example 757
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
    "update-accounts-receivable-advance-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance.
                 * @example 757
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.advance"] & {
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
    "submit-accounts-receivable-advance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-receivable-advance-actions-submit-request"];
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
                        "ia::result"?: components["schemas"]["accounts-receivable-advance-actions-submit-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
        };
    };
    "reverse-accounts-receivable-advance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-receivable-advance-actions-reverse-request"];
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
                        "ia::result"?: components["schemas"]["accounts-receivable-advance-actions-reverse-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-advance-line": {
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
    "create-receivable-advance-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.advance-line"] & components["schemas"]["accounts-receivable-advance-lineRequiredProperties"];
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
    "get-accounts-receivable-advance-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance line.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.advance-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-accounts-receivable-advance-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance line.
                 * @example 41
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.advance-line"];
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
    "list-accounts-receivable-billback-template": {
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
    "create-accounts-receivable-billback-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.billback-template"] & components["schemas"]["accounts-receivable-billback-templateRequiredProperties"];
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
    "get-accounts-receivable-billback-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill back template.
                 * @example 17
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.billback-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-billback-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill back template.
                 * @example 17
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
    "update-accounts-receivable-billback-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill back template.
                 * @example 17
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.billback-template"] & {
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
    "list-accounts-receivable-billback-template-line": {
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
    "create-accounts-receivable-billback-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.billback-template-line"] & components["schemas"]["accounts-receivable-billback-template-lineRequiredProperties"];
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
    "get-accounts-receivable-billback-template-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill back template line.
                 * @example 9
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.billback-template-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-billback-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill back template line.
                 * @example 9
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
    "update-accounts-receivable-billback-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill back template line.
                 * @example 9
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.billback-template-line"];
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
    "list-accounts-receivable-customer": {
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
    "create-accounts-receivable-customer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.customer"] & components["schemas"]["accounts-receivable-customerRequiredProperties"];
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
    "get-accounts-receivable-customer-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the customer.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.customer"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-customer-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the customer.
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
    "update-accounts-receivable-customer-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the customer.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.customer"] & {
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
    "list-accounts-receivable-customer-contact": {
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
        };
    };
    "get-accounts-receivable-customer-contact-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer contact.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.customer-contact"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
        };
    };
    "list-accounts-receivable-customer-email-template": {
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
    "create-accounts-receivable-customer-email-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.customer-email-template"] & components["schemas"]["accounts-receivable-customer-email-templateRequiredProperties"];
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
    "get-accounts-receivable-customer-email-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the customer email template.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.customer-email-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-customer-email-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the customer email template.
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
    "update-accounts-receivable-customer-email-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the customer email template.
                 * @example 2
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.customer-email-template"];
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
    "list-accounts-receivable-customer-item-cross-reference": {
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
    "create-accounts-receivable-customer-item-cross-reference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.customer-item-cross-reference"] & components["schemas"]["accounts-receivable-customer-item-cross-referenceRequiredProperties"];
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
    "get-accounts-receivable-customer-item-cross-reference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer item cross reference.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.customer-item-cross-reference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-customer-item-cross-reference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer item cross reference.
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
    "update-accounts-receivable-customer-item-cross-reference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer item cross reference.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.customer-item-cross-reference"] & {
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
    "list-accounts-receivable-customer-restricted-department": {
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
    "get-accounts-receivable-customer-restricted-department-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer restricted department.
                 * @example 77
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.customer-restricted-department"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-customer-restricted-location": {
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
    "get-accounts-receivable-customer-restricted-location-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer restricted location.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.customer-restricted-location"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-customer-message": {
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
    "create-accounts-receivable-customer-message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates a new customer message. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.customer-message"] & components["schemas"]["accounts-receivable-customer-messageRequiredProperties"];
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
    "get-accounts-receivable-customer-message-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer message.
                 * @example 4
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.customer-message"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-accounts-receivable-customer-message-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer message.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.customer-message"] & {
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
    "list-accounts-receivable-customer-type": {
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
    "create-accounts-receivable-customer-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.customer-type"] & components["schemas"]["accounts-receivable-customer-typeRequiredProperties"];
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
    "get-accounts-receivable-customer-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the customer type.
                 * @example 4
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.customer-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-customer-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the customer type.
                 * @example 4
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
    "update-accounts-receivable-customer-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the customer type.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.customer-type"] & {
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
    "list-accounts-receivable-customer-total": {
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
    "get-accounts-receivable-customer-total-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer total.
                 * @example 42
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.customer-total"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-customer-electronic-payment": {
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
    "get-accounts-receivable-customer-electronic-payment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer electronic payment.
                 * @example 26
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.customer-electronic-payment"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-customer-group": {
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
    "create-accounts-receivable-customer-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates a new customer group. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.customer-group"] & components["schemas"]["accounts-receivable-customer-groupRequiredProperties"];
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
    "get-accounts-receivable-customer-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer group.
                 * @example 25
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.customer-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-customer-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer group.
                 * @example 25
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
    "update-accounts-receivable-customer-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer group.
                 * @example 25
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.customer-group"] & {
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
    "list-accounts-receivable-delivery-history": {
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
    "get-accounts-receivable-delivery-history-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the delivery history.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.delivery-history"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-invoice": {
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
    "create-accounts-receivable-invoice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.invoice"] & components["schemas"]["accounts-receivable-invoiceRequiredProperties"];
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
    "get-accounts-receivable-invoice-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the invoice.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.invoice"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-invoice-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the invoice.
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
    "update-accounts-receivable-invoice-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the invoice.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.invoice"] & {
                    readonly id?: unknown;
                    readonly retainage?: unknown;
                    readonly projectContract?: unknown;
                    readonly projectContractBilling?: unknown;
                    readonly architect?: unknown;
                    readonly projectContractBillingInvoiceSummary?: unknown;
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
    "submit-accounts-receivable-invoice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-receivable-invoice-actions-submit-request"];
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
                        "ia::result"?: components["schemas"]["accounts-receivable-invoice-actions-submit-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "reclassify-accounts-receivable-invoice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-receivable-invoice-actions-reclassify-request"];
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
                        "ia::result"?: components["schemas"]["accounts-receivable-invoice-actions-reclassify-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "reverse-accounts-receivable-invoice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-receivable-invoice-actions-reverse-request"];
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
                        "ia::result"?: components["schemas"]["accounts-receivable-invoice-actions-reverse-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "generate-pdf-accounts-receivable-invoice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-receivable-invoice-actions-generate-pdf-request"];
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
                        "ia::result"?: components["schemas"]["accounts-receivable-invoice-actions-generate-pdf-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-invoice-line": {
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
    "create-accounts-receivable-invoice-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.invoice-line"] & components["schemas"]["accounts-receivable-invoice-lineRequiredProperties"];
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
    "get-accounts-receivable-invoice-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the invoice line item.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.invoice-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-invoice-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the invoice line item.
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
    "update-accounts-receivable-invoice-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the invoice line item.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.invoice-line"] & {
                    readonly isSummarized?: unknown;
                    readonly retainage?: unknown;
                    readonly projectContract?: unknown;
                    readonly projectContractLine?: unknown;
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
    "list-accounts-receivable-invoice-tax-entry": {
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
    "get-accounts-receivable-invoice-tax-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the invoice tax entry.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.invoice-tax-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-invoice-summary": {
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
    "get-accounts-receivable-invoice-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the invoice summary.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.invoice-summary"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-payment": {
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
    "create-accounts-receivable-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.payment"] & components["schemas"]["accounts-receivable-paymentRequiredProperties"];
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
    "get-accounts-receivable-payment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment.
                 * @example 67
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.payment"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-payment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment.
                 * @example 67
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
    "submit-accounts-receivable-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-receivable-payment-actions-submit-request"];
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
                        "ia::result"?: components["schemas"]["accounts-receivable-payment-actions-submit-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "reverse-accounts-receivable-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-receivable-payment-actions-reverse-request"];
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
                        "ia::result"?: components["schemas"]["accounts-receivable-payment-actions-reverse-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-payment-detail": {
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
    "get-accounts-receivable-payment-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment details.
                 * @example 119
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.payment-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-payment-line": {
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
    "get-accounts-receivable-payment-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment line.
                 * @example 28
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.payment-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-payment-summary": {
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
    "create-accounts-receivable-payment-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.payment-summary"] & components["schemas"]["accounts-receivable-payment-summaryRequiredProperties"];
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
    "get-accounts-receivable-payment-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment summary.
                 * @example 110
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.payment-summary"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-payment-summary": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment summary.
                 * @example 110
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
    "update-accounts-receivable-payment-summary": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment summary.
                 * @example 110
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.payment-summary"] & {
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
    "list-accounts-receivable-recurring-invoice": {
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
    "create-accounts-receivable-recurring-invoice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.recurring-invoice"] & components["schemas"]["accounts-receivable-recurring-invoiceRequiredProperties"];
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
    "get-accounts-receivable-recurring-invoice-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the recurring invoice.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.recurring-invoice"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-recurring-invoice-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the recurring invoice.
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
    "update-accounts-receivable-recurring-invoice-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the recurring invoice.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.recurring-invoice"] & {
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
    "list-accounts-receivable-recurring-invoice-line": {
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
    "create-accounts-receivable-recurring-invoice-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.recurring-invoice-line"] & components["schemas"]["accounts-receivable-recurring-invoice-lineRequiredProperties"];
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
    "get-accounts-receivable-recurring-invoice-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the recurring invoice line.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.recurring-invoice-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-recurring-invoice-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the recurring invoice line.
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
    "update-accounts-receivable-recurring-invoice-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the recurring invoice line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.recurring-invoice-line"];
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
    "list-accounts-receivable-recurring-invoice-tax-entry": {
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
    "get-accounts-receivable-recurring-invoice-tax-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the recurring invoice tax entry.
                 * @example 36
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.recurring-invoice-tax-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-revenue-recognition-template": {
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
    "create-accounts-receivable-revenue-recognition-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Revenue recognition template creation. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.revenue-recognition-template"] & components["schemas"]["accounts-receivable-revenue-recognition-templateRequiredProperties"];
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
    "get-accounts-receivable-revenue-recognition-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the revenue recognition template.
                 * @example 19
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.revenue-recognition-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-revenue-recognition-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the revenue recognition template.
                 * @example 19
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
    "update-accounts-receivable-revenue-recognition-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the revenue recognition template.
                 * @example 19
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.revenue-recognition-template"] & {
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
    "list-accounts-receivable-summary": {
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
    "create-accounts-receivable-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.summary"] & components["schemas"]["accounts-receivable-summaryRequiredProperties"];
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
    "get-accounts-receivable-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the summary.
                 * @example 15
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.summary"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the summary.
                 * @example 15
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
    "update-accounts-receivable-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the summary.
                 * @example 15
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.summary"] & {
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
    "list-accounts-receivable-term": {
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
    "create-accounts-receivable-term": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.term"] & components["schemas"]["accounts-receivable-termRequiredProperties"];
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
    "get-accounts-receivable-term-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the term.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.term"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-term-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the term.
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
    "update-accounts-receivable-term-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the term.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.term"] & {
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
    "list-accounts-receivable-territory": {
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
    "create-accounts-receivable-territory": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.territory"];
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
    "get-accounts-receivable-territory-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the territory.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.territory"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-territory-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the territory.
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
    "update-accounts-receivable-territory-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the territory.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.territory"] & {
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
    "list-accounts-receivable-territory-group": {
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
    "create-accounts-receivable-territory-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.territory-group"] & components["schemas"]["accounts-receivable-territory-groupRequiredProperties"];
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
    "get-accounts-receivable-territory-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the territory group.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.territory-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-territory-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the territory group.
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
    "update-accounts-receivable-territory-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the territory group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.territory-group"] & {
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
    "list-accounts-receivable-shipping-method": {
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
    "create-accounts-receivable-shipping-method": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.shipping-method"] & components["schemas"]["accounts-receivable-shipping-methodRequiredProperties"];
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
    "get-accounts-receivable-shipping-method-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the shipping method.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.shipping-method"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-shipping-method-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the shipping method.
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
    "update-accounts-receivable-shipping-method-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the shipping method.
                 * @example 2
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.shipping-method"] & {
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
    "list-accounts-receivable-manual-deposit": {
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
    "create-accounts-receivable-manual-deposit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.manual-deposit"] & components["schemas"]["accounts-receivable-manual-depositRequiredProperties"];
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
    "get-accounts-receivable-manual-deposit-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the manual deposit.
                 * @example 62
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.manual-deposit"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable.manual-deposit-line": {
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
    "get-accounts-receivable.manual-deposit-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the manual deposit line.
                 * @example 286
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.manual-deposit-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-manual-deposit-summary": {
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
    "get-accounts-receivable-manual-deposit-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the manual deposit summary.
                 * @example 25
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.manual-deposit-summary"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-dunning-level": {
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
    "create-accounts-receivable-dunning-level": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.dunning-level"] & components["schemas"]["accounts-receivable-dunning-levelRequiredProperties"];
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
    "get-accounts-receivable-dunning-level-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the dunning level.
                 * @example 4
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.dunning-level"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-dunning-level-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the dunning level.
                 * @example 4
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
    "update-accounts-receivable-dunning-level-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the dunning level.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.dunning-level"] & {
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
    "list-accounts-receivable-dunning-customer": {
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
    "get-accounts-receivable-dunning-customer-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the dunning customer.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.dunning-customer"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-dunning-invoice": {
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
    "get-accounts-receivable-dunning-invoice-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the dunning invoice.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.dunning-invoice"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-dunning-notice": {
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
    "create-accounts-receivable-dunning-notice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.dunning-notice"] & components["schemas"]["accounts-receivable-dunning-noticeRequiredProperties"];
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
    "get-accounts-receivable-dunning-notice-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the dunning notice.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.dunning-notice"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-customer-refund": {
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
    "create-accounts-receivable-customer-refund": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.customer-refund"] & components["schemas"]["accounts-receivable-customer-refundRequiredProperties"];
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
    "get-accounts-receivable-customer-refund-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer refund.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.customer-refund"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-receivable-customer-refund-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer refund.
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
    "update-accounts-receivable-customer-refund-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer refund.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-receivable.customer-refund"] & {
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
    "submit-accounts-receivable-customer-refund": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-receivable-customer-refund-actions-submit-request"];
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
                        "ia::result"?: components["schemas"]["accounts-receivable-customer-refund-actions-submit-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "reverse-accounts-receivable-customer-refund": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-receivable-customer-refund-actions-reverse-request"];
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
                        "ia::result"?: components["schemas"]["accounts-receivable-customer-refund-actions-reverse-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-customer-refund-line": {
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
    "get-accounts-receivable-customer-refund-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer refund line.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.customer-refund-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-receivable-customer-refund-detail": {
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
    "get-accounts-receivable-customer-refund-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer refund detail object.
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
                        "ia::result"?: components["schemas"]["objects.accounts-receivable.customer-refund-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
}

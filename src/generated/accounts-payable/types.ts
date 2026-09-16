// Generated from spec/accounts-payable.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/accounts-payable/account-label": {
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
        get: operations["list-accounts-payable-account-label"];
        put?: never;
        /**
         * Create an account label
         * @description Creates a new account label.
         */
        post: operations["create-accounts-payable-account-label"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/account-label/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account label.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an account label
         * @description Returns detailed information for a specified account label.
         */
        get: operations["get-accounts-payable-account-label-key"];
        put?: never;
        post?: never;
        /**
         * Delete an account label
         * @description Deletes an account label.
         */
        delete: operations["delete-accounts-payable-account-label-key"];
        options?: never;
        head?: never;
        /**
         * Update an account label
         * @description Updates an existing account label by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-payable-account-label-key"];
        trace?: never;
    };
    "/objects/accounts-payable/adjustment": {
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
        get: operations["list-accounts-payable-adjustment"];
        put?: never;
        /**
         * Create an adjustment
         * @description Creates a new adjustment.
         */
        post: operations["create-accounts-payable-adjustment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/adjustment/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment.
                 * @example 67
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an adjustment
         * @description Returns detailed information for a specified adjustment.
         */
        get: operations["get-accounts-payable-adjustment-key"];
        put?: never;
        post?: never;
        /**
         * Delete an adjustment
         * @description Deletes an adjustment. Adjustments not applied to a bill can be deleted.
         */
        delete: operations["delete-accounts-payable-adjustment-key"];
        options?: never;
        head?: never;
        /**
         * Update an adjustment
         * @description Updates an existing adjustment by setting field values. Any fields not provided remain unchanged.
         *     With appropriate permissions, you can edit an adjustment if it is in the `posted` state and the books are not yet closed. For more information, see [Edit an AP adjustment](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=edit_AP_adjustment) in the Sage Intacct Help Center.
         */
        patch: operations["update-accounts-payable-adjustment-key"];
        trace?: never;
    };
    "/workflows/accounts-payable/adjustment/submit": {
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
         * @description You can submit a draft adjustment to post it. Draft adjustments are adjustments that have been created, but were not yet ready to post.
         *
         *     When you submit a draft adjustment, the state of the adjustment changes from `draft` to `posted`.
         */
        post: operations["submit-accounts-payable-adjustment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-payable/adjustment/reverse": {
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
         * @description To cancel a posted adjustment, reverse it. To cancel a paid adjustment, void the payment and then reverse the adjustment. When you reverse an adjustment, the state changes from `posted` or `paid` to `reversed`.
         *
         *     Reversals are intended to serve as a documented record of the transaction history. For more information, see [Reverse an AP credit memo adjustment](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reverse_AP_credit_memo_adjustment) in the Sage Intacct Help Center.
         */
        post: operations["reverse-accounts-payable-adjustment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/adjustment-line": {
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
        get: operations["list-accounts-payable-adjustment-line"];
        put?: never;
        /**
         * Create an adjustment line
         * @description Creates a new adjustment line.
         */
        post: operations["create-accounts-payable-adjustment-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/adjustment-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment line.
                 * @example 5296
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an adjustment line
         * @description Returns detailed information for a specified adjustment line.
         */
        get: operations["get-accounts-payable-adjustment-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete an adjustment line
         * @description Deletes an adjustment line.
         */
        delete: operations["delete-accounts-payable-adjustment-line"];
        options?: never;
        head?: never;
        /**
         * Update an adjustment line
         * @description Updates an existing adjustment line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-payable-adjustment-line"];
        trace?: never;
    };
    "/objects/accounts-payable/adjustment-tax-entry": {
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
        get: operations["list-accounts-payable-adjustment-tax-entry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/adjustment-tax-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment tax entry.
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
        get: operations["get-accounts-payable-adjustment-tax-entry-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/adjustment-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List adjustment summaries
         * @description Returns a collection with a key, ID, and link for each adjustment summary. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-adjustment-summary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/adjustment-summary/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment summary.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an adjustment summary
         * @description Returns detailed information for a specified adjustment summary.
         */
        get: operations["get-accounts-payable-adjustment-summary-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/advance": {
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
        get: operations["list-accounts-payable-advance"];
        put?: never;
        /**
         * Create an advance
         * @description Creates a new advance.
         */
        post: operations["create-accounts-payable-advance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/advance/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an advance
         * @description Returns detailed information for a specified advance.
         */
        get: operations["get-accounts-payable-advance-key"];
        put?: never;
        post?: never;
        /**
         * Delete an advance
         * @description Deletes an advance. Only draft advances can be deleted.
         */
        delete: operations["delete-accounts-payable-advance-key"];
        options?: never;
        head?: never;
        /**
         * Update an advance
         * @description Updates an existing advance by setting field values. Any fields not provided remain unchanged. You can only update advances in a draft state or advances that were declined during the approval process.
         */
        patch: operations["update-accounts-payable-advance-key"];
        trace?: never;
    };
    "/workflows/accounts-payable/advance/submit": {
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
         * @description You can submit a draft advance to post it. Draft advances are advances that have been created, but were not yet ready to post.
         *
         *     When you submit a draft advance, the state of the advance changes from `draft` to `posted`.
         */
        post: operations["submit-accounts-payable-advance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-payable/advance/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reverse an AP advance
         * @description To cancel a posted advance, reverse it. To cancel a paid advance, void the payment and then reverse the advance. When you reverse an advance, the state changes from `posted` or `paid` to `reversed`.
         *
         *     Reversals are intended to serve as a documented record of the transaction history.
         */
        post: operations["reverse-accounts-payable-advance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/advance-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List advance lines
         * @description Returns a collection with a key, ID, and link for each advance line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-advance-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/advance-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an advance line
         * @description Returns detailed information for a specified advance line.
         */
        get: operations["get-accounts-payable-advance-line-key"];
        put?: never;
        /**
         * Creates advance lines
         * @description Creates new advance lines
         */
        post: operations["create-accounts-payable-advance-line"];
        /**
         * Delete advance lines
         * @description Delete advance lines
         */
        delete: operations["delete-accounts-payable-advance-line"];
        options?: never;
        head?: never;
        /**
         * Update advance lines
         * @description Updates advance lines
         */
        patch: operations["update-accounts-payable-advance-line"];
        trace?: never;
    };
    "/objects/accounts-payable/bill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bills
         * @description Returns a collection with a key, ID, and link for each bill. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-bill"];
        put?: never;
        /**
         * Create a bill
         * @description Creates a new bill. After you create a bill, it can be moved through the normal Accounts Payable workflow.
         */
        post: operations["create-accounts-payable-bill"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/bill/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bill
         * @description Returns detailed information for a specified bill.
         */
        get: operations["get-accounts-payable-bill-key"];
        put?: never;
        post?: never;
        /**
         * Delete a bill
         * @description Deletes a bill. You can only delete unpaid bills that are in a `posted`, `draft`, or `declined` state. For partially paid bills, first cancel the payment request, which changes the bill's state to `posted`. Bills in a `submitted` or `partiallyApproved` state can only be deleted if no payment has been made against them.
         */
        delete: operations["delete-accounts-payable-bill-key"];
        options?: never;
        head?: never;
        /**
         * Update a bill
         * @description Updates an existing bill by setting field values. Any fields not provided remain unchanged. Several factors, such as a bill's workflow state, determine whether a bill can be updated and, if so, which fields can be edited. For more information, see [Edit bills](https://www.intacct.com/ia/docs/en_US/help_action/Accounts_Payable/Bills/Edit_bills/ab-TOC-edit-bills.htm?tocpath=Applications%7CAccounts%20Payable%7CBills%7CEdit%20bills%7C_____0) in the Sage Intacct Help Center.
         */
        patch: operations["update-accounts-payable-bill-key"];
        trace?: never;
    };
    "/workflows/accounts-payable/bill/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit a bill
         * @description Submit a bill to move it to the next stage in the approval process. For example, submit a bill to move it from the `draft` state to the `submitted` state. When in the `submitted` state, the bill can then be approved or declined.
         *
         *     A bill that has a state of `declined` can be edited and then resubmitted, which changes its state to `submitted`. Once submitted, the bill can then be approved or declined.
         */
        post: operations["submit-accounts-payable-bill"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-payable/bill/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Approve a bill
         * @description Users with appropriate permissions can approve a bill. To be approved, a bill must have a state of `submitted` or `partiallyApproved`. Once approved, a `submitted` bill's state transitions to either `posted` or `partiallyApproved`, depending on whether all lines on the bill are released for payment. When a `partiallyApproved` bill is approved, its state transitions to `posted` if all remaining lines are released.
         *
         *     For more information, see [About bill approvals](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=AP_about_bill_approvals) in the Sage Intacct Help Center.
         */
        post: operations["approve-accounts-payable-bill"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-payable/bill/decline": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Decline a bill
         * @description Users with appropriate permissions can decline a bill after it's been submitted for approval. Bills with a state of `submitted` or `partiallyApproved` can be declined. Declining a bill changes the bill's state to `declined`.
         *
         *     Once a bill is declined, it cannot be recalled or approved unless it's resubmitted. For more information, see [Decline a bill](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Decline_bills) in the Sage Intacct Help Center.
         */
        post: operations["decline-accounts-payable-bill"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-payable/bill/recall": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Recall a bill
         * @description To edit a bill previously submitted for approval, recall the bill. A bill can be recalled only when it is in `submitted` state. Once recalled, the bill will be in `draft` state.
         *
         *
         *
         *
         *
         *      For more information, see [Recall a submitted bill](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Recall_a_submitted_bill) in the Sage Intacct Help Center.
         */
        post: operations["recall-accounts-payable-bill"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-payable/bill/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reverse a bill
         * @description Reverses a bill. Reversing a bill creates a record in the system for audit trail purposes. Bills with a state of `posted` or `paid` can be reversed, and the state of the bill will be updated to `reversed` after the reversal. The reversal date must be later than the original bill's posting date.
         *
         *     Bills with a state of `posted` are not yet paid and unpaid bills can only be reversed if Accounts Payable is enabled for reversal of unpaid bills.
         *
         *     For paid bills, the associated payment must first be voided. After the payment is voided, the bill can then be reversed.
         *
         *     For more information, see [Reverse a bill](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=HDI_AP_Reverse_Bill) in the Sage Intacct Help Center.
         */
        post: operations["reverse-accounts-payable-bill"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/bill-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bill lines
         * @description Returns a collection with a key, ID, and link for each bill line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-bill-line"];
        put?: never;
        /**
         * Create a bill line
         * @description Creates a new bill line.
         */
        post: operations["create-accounts-payable-bill-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/bill-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bill line
         * @description Returns detailed information for a specified bill line.
         */
        get: operations["get-accounts-payable-bill-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a bill line
         * @description Deletes a bill line.
         */
        delete: operations["delete-accounts-payable-bill-line-key"];
        options?: never;
        head?: never;
        /**
         * Update a bill line
         * @description Updates an existing bill line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-payable-bill-line-key"];
        trace?: never;
    };
    "/workflows/accounts-payable/bill-line/release": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Release a bill line
         * @description Release a bill line for payment. If your company has enabled Release to pay, bill line items are unavailable for payment until you release them. After you release a line item, it is available for payment as part of the bill pay workflow.
         *
         *     When you release a bill line, the `releaseToPay` property for that line transitions from `false` to `true`. For more information, see [Pay bills](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_ap_workbench) in the Sage Intacct Help Center.
         */
        post: operations["release-accounts-payable-bill-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/bill-tax-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bill tax entries
         * @description Returns a collection with a key, ID, and link for each bill tax entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-bill-tax-entry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/bill-tax-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bill tax entry.
                 * @example 33
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bill tax entry
         * @description Returns detailed information for a specified bill tax entry.
         */
        get: operations["get-accounts-payable-bill-tax-entry-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/bill-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bill summaries
         * @description Returns a collection with a key, ID, and link for each bill summary. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-bill-summary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/bill-summary/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bill summary.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bill summary
         * @description Returns detailed information for a specified bill summary.
         */
        get: operations["get-accounts-payable-bill-summary-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/amortization-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List amortization templates
         * @description Returns a collection with a key, ID, and link for each amortization template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-amortization-template"];
        put?: never;
        /**
         * Create an amortization template
         * @description Creates a new amortization template.
         */
        post: operations["create-accounts-payable-amortization-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/amortization-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the amortization template.
                 * @example 3
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an amortization template
         * @description Returns detailed information for a specified amortization template.
         */
        get: operations["get-accounts-payable-amortization-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete an amortization template
         * @description Deletes an amortization template.
         */
        delete: operations["delete-accounts-payable-amortization-template-key"];
        options?: never;
        head?: never;
        /**
         * Update an amortization template
         * @description Updates an existing amortization template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-payable-amortization-template-key"];
        trace?: never;
    };
    "/objects/accounts-payable/joint-payee": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List joint payees
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each joint payee. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-joint-payee"];
        put?: never;
        /**
         * Create a joint payee
         * @description Creates a new joint payee.
         */
        post: operations["create-accounts-payable-joint-payee"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/acounts-payable/joint-payee/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a joint payee.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a joint payee
         * @description Returns detailed information for a specified joint payee.
         */
        get: operations["get-accounts-payable-joint-payee-key"];
        put?: never;
        post?: never;
        /**
         * Delete a joint payee
         * @description Deletes a joint payee. A joint payee object cannot be deleted if it has been used on an AP payment.
         */
        delete: operations["delete-accounts-payable-joint-payee-key"];
        options?: never;
        head?: never;
        /**
         * Update a joint payee
         * @description Updates an existing joint payee by setting field values. Any fields not provided remain unchanged. The `printAs` value cannot be updated if it has been used on an AP Payment.
         */
        patch: operations["update-accounts-payable-joint-payee"];
        trace?: never;
    };
    "/objects/accounts-payable/payment": {
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
        get: operations["list-accounts-payable-payment"];
        put?: never;
        /**
         * Create a payment
         * @description Creates a new payment.
         */
        post: operations["create-accounts-payable-payment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/payment/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment.
                 * @example 3323
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a payment
         * @description Returns detailed information for a specified payment.
         */
        get: operations["get-accounts-payable-payment-key"];
        put?: never;
        post?: never;
        /**
         * Delete a payment
         * @description Deletes a payment.
         */
        delete: operations["delete-accounts-payable-payment-key"];
        options?: never;
        head?: never;
        /**
         * Update a payment
         * @description Updates an existing payment by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-payable-payment-key"];
        trace?: never;
    };
    "/workflows/accounts-payable/payment/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit a payment
         * @description Submit a payment to move it to the next phase of the payment workflow. For example, submit a payment to move it from the `draft` state to the `submitted` state. When in the `submitted` state, the payment can then be approved or declined.
         *
         *     A payment that has a state of `declined` can be edited and then resubmitted, which changes its state to `submitted`. Once submitted, the payment can then be approved or declined.
         */
        post: operations["submit-accounts-payable-payment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-payable/payment/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Approve a payment
         * @description When payment approval is enabled, approvals are based on the payment amount. Payments of a certain amount must be approved before they can be paid. When approving or declining a payment request, you can add a comment, such as the reason why a payment request is being declined. When a payment is approved, the state for that payment changes from `submitted` to `approved`.
         *
         *     For more information, see [Approve Payments - Accounts Payable](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_payment_approvals) in the Sage Intacct Help Center.
         */
        post: operations["approve-accounts-payable-payment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-payable/payment/decline": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Decline a payment
         * @description When payment approval is enabled, approvals are based on the payment amount. Payments of a certain amount must be approved before they can be paid. When approving or declining a payment request, you can add a comment, such as the reason why a payment request is being declined. When a payment is declined, the state for that payment changes from `submitted` to `declined`.
         *
         *     For more information, see [Approve Payments - Accounts Payable](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_payment_approvals) in the Sage Intacct Help Center.
         */
        post: operations["decline-accounts-payable-payment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-payable/payment/confirm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Confirm a payment
         * @description Payments with a status of `delivered` indicate that the payment process has been started, but the payment has not yet been confirmed and posted. For example, a check has been printed or an ACH/bank file has been generated, but the payment has not yet been confirmed in the system. When the payment is confirmed, the status changes from `delivered` to `confirmed`.
         */
        post: operations["confirm-accounts-payable-payment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-payable/payment/print": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Print a payment
         * @description Print a payment when a payment method requires a physical or generated output to move the payment forward in the workflow. For example, printing a check when the payment method is check. When a payment is printed, the status changes from `approved` to `delivered`.
         */
        post: operations["print-accounts-payable-payment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-payable/payment/reverse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reverse a payment or void a check
         * @description Reverse a payment when a completed or in-progress payment is invalid or canceled. For example, a physical check may be lost or destroyed. In this example, if the payment had not yet been confirmed, reversing it would change the status from `delivered` back to `approved`. If the payment had already been confirmed, reversing it would change the status from `confirmed` to `reversed`.
         *
         *     For more information, see [Void payments in Accounts Payable](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_void_payments) in the Sage Intacct Help Center.
         */
        post: operations["reverse-accounts-payable-payment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/payment-line": {
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
        get: operations["list-accounts-payable-payment-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/payment-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment line.
                 * @example 3936
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a payment line
         * @description Returns detailed information for a specified payment line.
         */
        get: operations["get-accounts-payable-payment-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/payment-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List payment details
         * @description Returns a collection with a key, ID, and link for each payment detail. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-payment-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/payment-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment detail.
                 * @example 367
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a payment detail
         * @description Returns detailed information for a specified payment detail.
         */
        get: operations["get-accounts-payable-payment-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/recurring-bill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List recurring bills
         * @description Returns a collection with a key, ID, and link for each recurring bill. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-recurring-bill"];
        put?: never;
        /**
         * Create a recurring bill
         * @description Creates a new recurring bill. Recurring bills automate the billing process for regularly-recurring, fixed-amount bills, such as monthly rent. Sage Intacct supports non-standard recurring transaction schedules and automatically enters and posts bills based on the defined schedule. The transaction and GL posting date for an automatically generated bill are the same, but you can change either.
         *
         *     If your organization uses multiple base currencies, create recurring bills at the entity level.
         *
         *     Recurring bills do not support custom fields or custom fields defined in a bill. If you need to use a custom field in a recurring bill, configure the custom field as not required.
         */
        post: operations["create-accounts-payable-recurring-bill"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/recurring-bill/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring bill.
                 * @example 13
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a recurring bill
         * @description Returns detailed information for a specified recurring bill.
         */
        get: operations["get-accounts-payable-recurring-bill-key"];
        put?: never;
        post?: never;
        /**
         * Delete a recurring bill
         * @description Deletes a recurring bill specified by the given key.
         */
        delete: operations["delete-accounts-payable-recurring-bill-key"];
        options?: never;
        head?: never;
        /**
         * Update a recurring bill
         * @description Updates an existing recurring bill by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-payable-recurring-bill-key"];
        trace?: never;
    };
    "/objects/accounts-payable/recurring-bill-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List recurring bill lines
         * @description Returns a collection with a key, ID, and link for each recurring bill line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-recurring-bill-line"];
        put?: never;
        /**
         * Create a recurring bill line
         * @description Creates a new recurring bill line.
         */
        post: operations["create-accounts-payable-recurring-bill-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/recurring-bill-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring bill line.
                 * @example 15
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a recurring bill line
         * @description Returns detailed information for a specified recurring bill line.
         */
        get: operations["get-accounts-payable-recurring-bill-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete recurring bill lines
         * @description Deletes a recurring bill line.
         */
        delete: operations["delete-accounts-payable-recurring-bill-line"];
        options?: never;
        head?: never;
        /**
         * Update a recurring bill line
         * @description Updates a recurring bill line.
         */
        patch: operations["update-accounts-payable-recurring-bill-line"];
        trace?: never;
    };
    "/objects/accounts-payable/recurring-bill-tax-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List recurring bill tax entries
         * @description Returns a collection with a key, ID, and link for each recurring bill tax entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find accounts that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-accounts-payable-recurring-bill-tax-entry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/recurring-bill-tax-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring bill tax entry.
                 * @example 21
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a recurring bill tax entry
         * @description Returns detailed information for a specified recurring bill tax entry.
         */
        get: operations["get-accounts-payable-recurring-bill-tax-entry-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/summary": {
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
        get: operations["list-accounts-payable-summary"];
        put?: never;
        /**
         * Create a summary
         * @description Creates a new summary.
         */
        post: operations["create-accounts-payable-summary"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/summary/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the summary.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a summary
         * @description Returns detailed information for a specified summary.
         */
        get: operations["get-accounts-payable-summary-key"];
        put?: never;
        post?: never;
        /**
         * Delete a summary
         * @description Deletes a summary. Only summaries with an open status that do not contain any transactions can be deleted.
         */
        delete: operations["delete-accounts-payable-summary-key"];
        options?: never;
        head?: never;
        /**
         * Update a summary
         * @description Updates an existing summary by setting field values. Any fields not provided remain unchanged.
         *
         *     You can change the name, GL posting date, and status of manual summaries. Summaries that are created by Sage Intacct (system summaries) cannot be edited.
         */
        patch: operations["update-accounts-payable-summary-key"];
        trace?: never;
    };
    "/objects/accounts-payable/term": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List terms
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each term. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-term"];
        put?: never;
        /**
         * Create a term
         * @description Creates a new term.
         */
        post: operations["create-accounts-payable-term"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/term/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the term.
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
        get: operations["get-accounts-payable-term-key"];
        put?: never;
        post?: never;
        /**
         * Delete a term
         * @description Deletes a term.
         */
        delete: operations["delete-accounts-payable-term-key"];
        options?: never;
        head?: never;
        /**
         * Update a term
         * @description Updates an existing term by setting field values. Any fields not provided remain unchanged.
         *     Updating a term already applied to bills may affect payment scheduling for those bills. Existing bills are not updated with edited term information. To update term information for an existing bill, reverse and resubmit the bill.
         */
        patch: operations["update-accounts-payable-term-key"];
        trace?: never;
    };
    "/objects/accounts-payable/check-run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List check runs
         * @description Returns a collection with a key, ID, and link for each check run. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-check-run"];
        put?: never;
        /**
         * Create a check run
         * @description Creates a new check run.
         */
        post: operations["create-accounts-payable-check-run"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/check-run/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the check run.
                 * @example 6
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a check run
         * @description Returns detailed information for a specified check run.
         */
        get: operations["get-accounts-payable-check-run-key"];
        put?: never;
        post?: never;
        /**
         * Delete a check run
         * @description Deletes a check run. For more information about when check runs can be deleted, see [Delete a check run](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Delete_check_run) in the Sage Intacct Help Center.
         */
        delete: operations["delete-accounts-payable-check-run-key"];
        options?: never;
        head?: never;
        /**
         * Update a check run
         * @description Updates an existing check run by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-payable-check-run-key"];
        trace?: never;
    };
    "/objects/accounts-payable/vendor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List vendors
         * @description Returns a collection with a key, ID, and link for each vendor. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-vendor"];
        put?: never;
        /**
         * Create a vendor
         * @description Creates a new vendor. When you add a new vendor, you can provide key descriptive information about that vendor and establish how you want to pay them.
         */
        post: operations["create-accounts-payable-vendor"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/vendor/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the vendor.
                 * @example 111
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a vendor
         * @description Returns detailed information for a specified vendor.
         */
        get: operations["get-accounts-payable-vendor-key"];
        put?: never;
        post?: never;
        /**
         * Delete a vendor
         * @description Deletes a vendor. You can only delete vendors that aren't tied to any transactions or payments.
         */
        delete: operations["delete-accounts-payable-vendor-key"];
        options?: never;
        head?: never;
        /**
         * Update a vendor
         * @description Updates an existing vendor by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-payable-vendor-key"];
        trace?: never;
    };
    "/workflows/accounts-payable/vendor/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Approve a vendor
         * @description When vendor approval is enabled, new and recently edited vendors are automatically submitted to an approval queue. Vendors submitted to the approval queue have a state of `submitted`. Designated approvers review those vendors and either approve or decline them. When a vendor is approved, the state for that vendor changes from `submitted` to `approved`.
         *
         *     For more information, see [About vendor approvals](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_vendor_approvals) in the Sage Intacct Help Center.
         */
        post: operations["approve-accounts-payable-vendor"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/accounts-payable/vendor/decline": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Decline a vendor
         * @description When vendor approval is enabled, new and recently edited vendors are automatically submitted to an approval queue. Vendors submitted to the approval queue have a state of `submitted`. Designated approvers review those vendors and either approve or decline them. When a vendor is declined, the state for that vendor changes from `submitted` to `declined`.
         *
         *     For more information, see [About vendor approvals](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_vendor_approvals) in the Sage Intacct Help Center.
         */
        post: operations["decline-accounts-payable-vendor"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/vendor-account-number": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List vendor account numbers
         * @description Returns a collection with a key, ID, and link for each vendor account number. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-vendor-account-number"];
        put?: never;
        /**
         * Create a vendor account number
         * @description Creates a new vendor account number. Associate an entity's location with a vendor and assign an account number for that vendor and entity location pair.
         */
        post: operations["create-accounts-payable-vendor-account-number"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/vendor-account-number/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor account number.
                 * @example 17
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a vendor account number
         * @description Returns detailed information for a specified vendor account number.
         */
        get: operations["get-accounts-payable-vendor-account-number-key"];
        put?: never;
        post?: never;
        /**
         * Delete a vendor account number
         * @description Deletes a vendor account number.
         */
        delete: operations["delete-accounts-payable-vendor-account-number"];
        options?: never;
        head?: never;
        /**
         * Update a vendor account number
         * @description Updates an existing vendor account number by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-payable-vendor-account-number"];
        trace?: never;
    };
    "/objects/accounts-payable/vendor-bank-file-setup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List vendor bank file setup objects
         * @description Returns a collection with a key, ID, and link for each vendor bank file setup object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-vendor-bank-file-setup"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/vendor-bank-file-setup/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor bank file setup object.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a vendor bank file setup object
         * @description Returns detailed information for a specified vendor bank file setup object.
         */
        get: operations["get-accounts-payable-vendor-bank-file-setup-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/vendor-contact": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List vendor contacts
         * @description Returns a collection with a key, ID, and link for each vendor contact. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-vendor-contact"];
        put?: never;
        /**
         * Create a vendor contact
         * @description Creates a new vendor contact.
         */
        post: operations["create-accounts-payable-vendor-contact-key"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/vendor-contact/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor contact.
                 * @example 17
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a vendor contact
         * @description Returns detailed information for a specified vendor contact.
         */
        get: operations["get-accounts-payable-vendor-contact-key"];
        put?: never;
        post?: never;
        /**
         * Delete a vendor contact
         * @description Deletes a vendor contact.
         */
        delete: operations["delete-accounts-payable-vendor-contact-key"];
        options?: never;
        head?: never;
        /**
         * Update a vendor contact
         * @description Updates an existing vendor contact by setting field values. Any fields not provided remain unchanged. Note that updates to a vendor contact are visible only in transactions that occur after the update.
         */
        patch: operations["update-accounts-payable-vendor-contact-key"];
        trace?: never;
    };
    "/objects/accounts-payable/vendor-email-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List vendor email templates
         * @description Returns a collection with a key, ID, and link for each vendor email template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-vendor-email-template"];
        put?: never;
        /**
         * Create a vendor email template
         * @description Creates a new vendor email template.
         */
        post: operations["create-accounts-payable-vendor-email-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/vendor-email-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor email template.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a vendor email template
         * @description Returns detailed information for a specified vendor email template.
         */
        get: operations["get-accounts-payable-vendor-email-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a vendor email template
         * @description Deletes a vendor email template.
         */
        delete: operations["delete-accounts-payable-vendor-email-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a vendor email template
         * @description Updates an existing vendor email template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-payable-vendor-email-template-key"];
        trace?: never;
    };
    "/objects/accounts-payable/vendor-payment-provider": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List vendor payment providers
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each vendor payment provider. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-vendor-payment-provider"];
        put?: never;
        /**
         * Create a vendor payment provider
         * @description Creates a new vendor payment provider.
         */
        post: operations["create-accounts-payable-vendor-payment-provider"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/vendor-payment-provider/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the vendor payment provider.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a vendor payment provider
         * @description Returns detailed information for a specified vendor payment provider.
         */
        get: operations["get-accounts-payable-vendor-payment-provider-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a vendor payment provider
         * @description Updates an existing vendor payment provider by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-payable-vendor-payment-provider-key"];
        trace?: never;
    };
    "/objects/accounts-payable/vendor-restricted-department": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List vendor restricted departments
         * @description Returns a collection with a key, ID, and link for each vendor restricted department. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-vendor-restricted-department"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/vendor-restricted-department/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor restricted department.
                 * @example 77
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a vendor restricted department
         * @description Returns detailed information for a specified vendor restricted department.
         */
        get: operations["get-accounts-payable-vendor-restricted-department-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/vendor-restricted-location": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List vendor restricted locations
         * @description Returns a collection with a key, ID, and link for each vendor restricted location. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-vendor-restricted-location"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/vendor-restricted-location/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor restricted location.
                 * @example 142
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a vendor restricted location
         * @description Returns detailed information for a specified vendor restricted location.
         */
        get: operations["get-accounts-payable-vendor-restricted-location-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/vendor-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List vendor types
         * @description Returns a collection with a key, ID, and link for each vendor type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-vendor-type"];
        put?: never;
        /**
         * Create a vendor type
         * @description Creates a new vendor type.
         */
        post: operations["create-accounts-payable-vendor-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/vendor-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the vendor type.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a vendor type
         * @description Returns detailed information for a specified vendor type.
         */
        get: operations["get-accounts-payable-vendor-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete a vendor type
         * @description Deletes a vendor type.
         */
        delete: operations["delete-accounts-payable-vendor-type-key"];
        options?: never;
        head?: never;
        /**
         * Update a vendor type
         * @description Updates an existing vendor type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-payable-vendor-type-key"];
        trace?: never;
    };
    "/objects/accounts-payable/vendor-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List vendor groups
         * @description Returns a collection with a key, ID, and link for each vendor group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-vendor-group"];
        put?: never;
        /**
         * Create a vendor group
         * @description Creates a new vendor group.
         */
        post: operations["create-accounts-payable-vendor-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/vendor-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System assigned unique key for the vendor group.
                 * @example 16
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a vendor group
         * @description Returns detailed information for a specified vendor group.
         */
        get: operations["get-accounts-payable-vendor-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete a vendor group
         * @description Deletes a vendor group. Vendor groups that are not being used for reporting can be deleted.
         */
        delete: operations["delete-accounts-payable-vendor-group-key"];
        options?: never;
        head?: never;
        /**
         * Update a vendor group
         * @description Updates an existing vendor group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-accounts-payable-vendor-group-key"];
        trace?: never;
    };
    "/objects/accounts-payable/vendor-total": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List vendor totals
         * @description Returns a collection with a key, ID, and link for each vendor total. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-accounts-payable-vendor-total"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/accounts-payable/vendor-total/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor total.
                 * @example 86
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a vendor total
         * @description Returns detailed information for a specified vendor total.
         */
        get: operations["get-accounts-payable-vendor-total-key"];
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
        /** @description AP account labels provide more descriptive names for accounts. */
        "objects.accounts-payable.account-label": {
            /**
             * @description System-assigned key for the AP account label.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Name or other unique identifier for the account label.
             * @example Benefits: Health
             */
            id?: string;
            /**
             * @description A note about the purpose and use of the account label.
             * @example Account for health benefit costs
             */
            description?: string;
            /**
             * @description URL for the AP account label.
             * @example /objects/accounts-payable/account-label/12
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            /** @description The general ledger account to assign to the label. This is typically a revenue account. */
            glAccount?: {
                /**
                 * @description System-assigned key for the general ledger account.
                 * @example 19
                 */
                key?: string;
                /**
                 * @description General ledger account number.
                 * @example 1210--Equipment
                 */
                id?: string;
                /** @example /objects/general-ledger/account/19 */
                readonly href?: string;
            };
            /** @description The general ledger account where the system posts offsets to items posted to this label. This is typically a receivables account. */
            offsetGLAccount?: {
                /**
                 * @description System-assigned key for the offset general ledger account.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Account number for the offset general ledger account.
                 * @example 1215--EquipmentOffset
                 */
                id?: string;
                /** @example /objects/general-ledger/account/2 */
                readonly href?: string;
            };
            /** @description Form 1099 information. */
            form1099?: {
                /**
                 * @description Form 1099 type.
                 * @example DIV
                 */
                type?: string | null;
                /**
                 * @description Box number for form 1099.
                 * @example 1B
                 */
                box?: string | null;
            };
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "accounts-payable-account-labelRequiredProperties": {
            glAccount?: Record<string, never>;
        };
        /** @description Adjustments are used to increase or decrease the amount you owe a vendor. */
        "objects.accounts-payable.adjustment": {
            /**
             * @description System-assigned unique key for the adjustment.
             * @example 1371
             */
            readonly key?: string;
            /**
             * @description Unique ID for the adjustment. This value is the same as the `key` for this adjustment.
             * @example 1371
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the adjustment.
             * @example /objects/accounts-payable/adjustment/1371
             */
            readonly href?: string;
            /**
             * @description Adjustment number used to identify the adjustment.
             *     You must specify a unique adjustment number unless document sequencing is configured, in which case the ID is auto-generated.
             * @example ADJ124
             */
            adjustmentNumber?: string;
            /**
             * @description Transaction record type.
             * @example pa
             */
            readonly recordType?: string;
            /**
             * @deprecated
             * @description Deprecated. Use the `state` field instead.
             *     Action state of the adjustment:
             *     - `submit` - Default action state.
             *     - `draft` - Draft action state.
             * @default submit
             * @enum {string}
             */
            action?: "draft" | "submit";
            /**
             * @description Processing state of the adjustment:
             *     - `reversed` - Reversed state.
             *     - `reversal` - Reversal state.
             *     - `draft` - Draft state.
             *     - `noValue` - State when multiple lines cancel each other out, such as 10 and -10, resulting in a net zero value for the adjustment.
             *     - `posted` - Posted state.
             *     - `paid` - Paid state.
             *     - `partiallyPaid` - Partially paid state.
             *     - `selected` - Selected state.
             *     The state can be modified through workflow operations like Submit and Reverse, but cannot be changed using the PATCH operation.
             * @default draft
             * @example paid
             * @enum {string}
             */
            state?: "reversed" | "reversal" | "draft" | "noValue" | "posted" | "paid" | "partiallyPaid" | "selected";
            /** @description Vendor associated with the adjustment. */
            vendor?: {
                /**
                 * @description ID for the vendor.
                 * @example Vendor_01
                 */
                id?: string;
                /**
                 * @description Unique key for the vendor.
                 * @example Vendor_01
                 */
                key?: string;
                /**
                 * @description Vendor name.
                 * @example Logic Solutions
                 */
                readonly name?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount due to the vendor for a transaction.
                 * @example 100
                 */
                readonly totalDue?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/1
                 */
                readonly href?: string;
            };
            /**
             * @description Detailed explanation of the adjustment.
             * @example Computer Hardware & Software Expenses 03/01/20 - 08/31/21 Subscription charges.
             */
            description?: string;
            /**
             * Format: date
             * @description Date the adjustment was created.
             * @example 2026-01-23
             */
            createdDate?: string;
            /**
             * @description Indicates whether the adjustment amount already includes taxes.
             * @default false
             * @example false
             */
            isTaxInclusive?: boolean;
            /**
             * Format: decimal-precision-2
             * @description Total amount of the adjustment entered by the user.
             * @example 100.20
             */
            readonly totalEntered?: string;
            /**
             * Format: decimal-precision-2
             * @description Total base amount due after the adjustment is applied.
             * @example 251464.01
             */
            readonly totalBaseAmountDue?: string;
            /**
             * Format: decimal-precision-2
             * @description Entered transaction amount for the adjustment.
             * @example 1000.20
             */
            readonly txnTotalEntered?: string;
            /**
             * Format: decimal-precision-2
             * @description Total transaction amount due after the adjustment.
             * @example 100.50
             */
            readonly txnTotalDue?: string;
            /** @description Tax solution details for this adjustment. */
            taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 4
                 */
                key?: string | null;
                /**
                 * @description ID or name of the tax solution.
                 * @example Australia GST
                 */
                id?: string | null;
                /**
                 * @description Indicates whether multiple taxes per line are enabled.
                 * @default false
                 * @example true
                 */
                readonly enableMultilineTax?: boolean | null;
                /**
                 * @description Tax calculation method for the adjustment.
                 * @example VAT
                 */
                readonly taxCalculationMethod?: string | null;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/4
                 */
                readonly href?: string;
            };
            /**
             * @description For eInvoice transactions, indicates whether the transaction is a regular invoice (`invoice`) or an electronic invoice (`eInvoice`).
             * @example invoice
             * @enum {string|null}
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
             * @enum {string|null}
             */
            readonly invoiceMode?: null | "b1" | "s1";
            /**
             * @description Current status of an e-invoice; applicable only when selected invoice type is `eInvoice`.
             *     - `submitted` - The supplier submits its invoice or credit note to the public invoicing portal or its registered private platform.
             *     - `issuedByPlatform` - The invoice has been processed on the supplier's platform and issued to the buyer.
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
             * @enum {string|null}
             */
            readonly eInvoiceStatus?: null | "submitted" | "issuedByPlatform" | "fileUploaded" | "madeAvailable" | "inHand" | "refused" | "paymentSent" | "paymentReceived" | "disputed" | "notSent" | "inTransit" | "approved" | "receivedByPlatform" | "rejectedByPlatform" | "suspended" | "completed" | "partiallyApproved";
            /** @description Supporting document attached to the adjustment. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the attachment.
                 * @example adj-01
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/1
                 */
                readonly href?: string;
            };
            /** @description Adjustment summary used to group the adjustment for processing and posting. */
            adjustmentSummary?: {
                /**
                 * @description Unique key for the adjustment summary.
                 * @example 280
                 */
                key?: string;
                /**
                 * @description ID for the adjustment summary.
                 * @example 280
                 */
                id?: string;
                /**
                 * @description Adjustment summary name.
                 * @example Adjustments: 2022/01/01 Batch
                 */
                readonly name?: string;
                /**
                 * Format: date
                 * @description Date the adjustment summary was posted to the general ledger.
                 * @example 2026-01-23
                 */
                glPostingDate?: string;
                /**
                 * @description Indicates whether the adjustment summary is open or closed. Open summaries can have items added to them.
                 * @default open
                 * @example open
                 * @enum {string}
                 */
                readonly state?: "open" | "closed";
                /**
                 * @description Indicates whether posting to the general ledger is prevented for the adjustment summary.
                 * @default false
                 * @example false
                 */
                readonly preventGLPosting?: boolean;
                /**
                 * @description URL endpoint for the adjustment summary.
                 * @example /objects/accounts-payable/adjustment-summary/280
                 */
                readonly href?: string;
            };
            /**
             * @description Source module key for the transaction.
             * @example 3.AP
             */
            readonly moduleKey?: string;
            currency?: components["schemas"]["currency"];
            /** @description Contacts for the adjustment. If not specified, vendor contacts are used. */
            contacts?: {
                /**
                 * payTo
                 * @description Pay-to contact for the adjustment.
                 */
                payTo?: {
                    /**
                     * @description Unique key for the contact.
                     * @example 916
                     */
                    key?: string | null;
                    /**
                     * @description ID for the contact.
                     * @example Power Aerospace Materials(C1)
                     */
                    id?: string | null;
                    /**
                     * tax
                     * @description Tax-related information for the pay-to contact.
                     */
                    tax?: {
                        /**
                         * @description Tax ID number for the contact.
                         * @example 252-85-7897
                         */
                        taxId?: string | null;
                        /** @description Tax group associated with the contact. */
                        group?: {
                            /**
                             * @description Unique key for the tax group.
                             * @example 288
                             */
                            key?: string | null;
                            /**
                             * @description ID for the tax group.
                             * @example Goods Zero Rate - CA
                             */
                            id?: string | null;
                            /**
                             * @description URL endpoint for the tax group.
                             * @example /objects/tax/contact-tax-group/288
                             */
                            readonly href?: string;
                        };
                    };
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/1
                     */
                    readonly href?: string;
                };
                /**
                 * returnTo
                 * @description Return-to contact for the adjustment.
                 */
                returnTo?: {
                    /**
                     * @description Unique key for the contact.
                     * @example 916
                     */
                    key?: string;
                    /**
                     * @description ID for the contact.
                     * @example Power Aerospace Materials(C1)
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/1
                     */
                    readonly href?: string;
                };
            };
            /**
             * @description Reference number used to identify the adjustment in searches and reports. This number appears on the GL Details report and is printed on checks and vendor stubs.
             * @example INV-902852
             */
            referenceNumber?: string;
            /** @description Payment details for the adjustment. */
            paymentInformation?: {
                /**
                 * Format: date
                 * @description Date the adjustment was paid.
                 * @example 2026-01-23
                 */
                readonly paidDate?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount paid for the adjustment.
                 * @example 100
                 */
                readonly totalBaseAmountPaid?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount selected for the adjustment.
                 * @example 100.10
                 */
                readonly totalBaseAmountSelected?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Selected transaction amount for the adjustment.
                 * @example 1000.05
                 */
                readonly txnTotalSelected?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Paid transaction amount for the adjustment.
                 * @example 2000.50
                 */
                readonly txnTotalPaid?: string | null;
            };
            readonly audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Date and time the adjustment was created.
                 * @example 2026-01-23T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            entity?: components["schemas"]["entity-ref"];
            lines?: components["schemas"]["objects.accounts-payable.adjustment-line"][];
        };
        "accounts-payable-adjustmentRequiredProperties": {
            currency?: Record<string, never>;
            lines?: {
                dimensions?: Record<string, never>;
            }[];
        };
        "accounts-payable-adjustment-actions-submit-request": {
            /**
             * @description Unique key for the AP adjustment.
             * @example 11
             */
            key: string;
        };
        "accounts-payable-adjustment-actions-submit-response": {
            /**
             * @description Unique key for the AP adjustment.
             * @example 11
             */
            readonly key?: string;
            /**
             * @description Unique ID for the AP adjustment.
             * @example 11
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AP adjustment.
             * @example /objects/accounts-payable/adjustment/11
             */
            readonly href?: string;
            /**
             * @description State of the AP adjustment.
             * @example posted
             */
            readonly state?: string;
        };
        "accounts-payable-adjustment-actions-reverse-request": {
            /**
             * @description System-assigned key for AP adjustment.
             * @example 22
             */
            key: string;
            /**
             * Format: date
             * @description Date the AP adjustment transaction is reversed.
             * @example 2026-03-15
             */
            reverseDate: string;
            /**
             * @description Notes or comments about the reason for the adjustment reversal.
             * @example Reversed the adjustment for duplicate entry
             */
            memo?: string;
        };
        "accounts-payable-adjustment-actions-reverse-response": {
            /**
             * @description Unique key for the AP adjustment.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the AP adjustment.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AP adjustment.
             * @example /objects/accounts-payable/adjustment/23
             */
            readonly href?: string;
            /**
             * @description AP adjustment state after reversal.
             * @example reversed
             */
            readonly state?: string;
        };
        /** @description Line items in an adjustment represent transactions captured in that adjustment. */
        "objects.accounts-payable.adjustment-line": {
            /**
             * @description Unique ID for the adjustment line item. This value is the same as the `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description System-assigned unique key for the adjustment line item.
             * @example 1
             */
            key?: string;
            /**
             * @description URL endpoint for the adjustment line item.
             * @example /objects/accounts-payable/adjustment-line/5296
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description For multi-currency companies, the transaction amount in the base currency.
             * @example 100.00
             */
            baseAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Transaction amount for the adjustment line item in the transaction currency.
             * @example 100.00
             */
            txnAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Total transaction amount, including tax, for tax-inclusive adjustments.
             * @example 100.00
             */
            totalTxnAmount?: string;
            /**
             * @description Additional notes or comments about the adjustment line item for reference.
             * @example Service adjustments
             */
            memo?: string;
            /**
             * @description Line number for the adjustment line item.
             * @example 1
             */
            readonly lineNumber?: string;
            /**
             * @description Includes the line item amount on the vendor 1099 form when set to `true`.
             * @example false
             */
            hasForm1099?: string;
            /** @description 1099 form details for the line item. */
            form1099?: {
                /**
                 * @description 1099 form type for the line item.
                 * @example NEC
                 */
                type?: string | null;
                /**
                 * @description Box number on the 1099 form where the line item amount is reported. Each form type has different box numbers for reporting various types of income.
                 * @example 15A
                 */
                box?: string | null;
            };
            /**
             * @description Adjustment type for the line item.
             * @example pa
             */
            readonly adjustmentType?: string;
            glAccount?: components["schemas"]["gl-account-ref"];
            /** @description The general ledger account where the system posts offsets. */
            overrideOffsetGLAccount?: {
                /**
                 * @description Unique key for the offset GL account.
                 * @example 384
                 */
                key?: string;
                /**
                 * @description ID for the offset GL account.
                 * @example 1234.36
                 */
                id?: string;
                /**
                 * @description The name of the offset account used in the transaction.
                 * @example AP ACCOUNT
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the offset account.
                 * @example /objects/general-ledger/account/384
                 */
                readonly href?: string;
            };
            /** @description Account label for the adjustment line. */
            accountLabel?: {
                /**
                 * @description System-assigned key for the account label.
                 * @example 14
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the account label.
                 * @example Accounting Fees
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the account label.
                 * @example /objects/accounts-payable/account-label/14
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /** @description Department to assign the expense to. */
                department?: {
                    /**
                     * @description System-assigned key for the department.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the department.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Department name.
                     * @example Accounting
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/1
                     */
                    readonly href?: string;
                };
                /** @description Location to assign the expense to. */
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
                     * @description Location name.
                     * @example India
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/1
                     */
                    readonly href?: string;
                };
                /** @description Fixed asset to assign the adjustment to. */
                adjustmentAsset?: {
                    /**
                     * @description System-assigned key for the fixed asset.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description ID for the fixed asset.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description Fixed asset name.
                     * @example Laptop Computer
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the fixed asset.
                     * @example /objects/fixed-assets/asset/1
                     */
                    readonly href?: string;
                };
            };
            /** @description Currency details for multi-currency companies. */
            currency?: {
                /**
                 * @description Base currency for the line item.
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /**
                 * @description Transaction currency for the line item.
                 * @example USD
                 */
                readonly txnCurrency?: string;
                /**
                 * exchangeRate
                 * @description Exchange rate details used to calculate the base amount.
                 */
                exchangeRate?: {
                    /**
                     * Format: date
                     * @description Exchange rate date for the transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                     * @example 2026-01-23
                     */
                    date?: string | null;
                    /**
                     * @description Exchange rate used to calculate the base amount from the transaction amount.
                     * @example 1.0789
                     */
                    rate?: string;
                    /**
                     * @description Exchange rate type used to calculate the base amount from the transaction amount.
                     * @example Intacct Daily Rate
                     */
                    typeId?: string | null;
                };
            };
            /** @description Payment information for the adjustment line item. */
            paymentInformation?: {
                /**
                 * Format: decimal-precision-2
                 * @description Total amount paid in the base currency for the line item.
                 * @example 100.00
                 */
                readonly totalBaseAmountPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount paid in the transaction currency for the line item.
                 * @example 200.00
                 */
                readonly txnTotalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount selected in the base currency for the line item.
                 * @example 100.00
                 */
                readonly totalBaseAmountSelected?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount selected in the transaction currency for the line item.
                 * @example 100.00
                 */
                readonly txnTotalSelected?: string;
            };
            /** @description Tax entries for the adjustment line item. */
            taxEntries?: components["schemas"]["objects.accounts-payable.adjustment-tax-entry"][];
            /** @description Header level details for the adjustment. */
            readonly apAdjustment?: {
                /**
                 * @description ID for the adjustment.
                 * @example 1
                 */
                readonly id?: string;
                /**
                 * @description System-assigned key for the adjustment.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description URL endpoint for the adjustment.
                 * @example /objects/accounts-payable/adjustment/24
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "accounts-payable-adjustment-lineRequiredProperties": {
            dimensions?: Record<string, never>;
        };
        /** @description For VAT enabled transactions, adjustment line items will have tax entries. */
        "objects.accounts-payable.adjustment-tax-entry": {
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
            /** @description Purchasing tax details for the adjustment line item. */
            purchasingTaxDetail?: {
                /**
                 * @description Unique key for the purchasing tax detail.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the purchasing tax detail.
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
             * adjustment-line
             * @description Adjustment line item that the tax entry is associated with.
             */
            readonly adjustmentLine?: {
                /**
                 * @description ID for the adjustment line.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * @description Key for the adjustment line.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the adjustment line.
                 * @example /objects/accounts-payable/adjustment-line/100
                 */
                readonly href?: string;
            };
        };
        /** @description Adjustment summaries are collections of the same type of transactions, grouped together for processing. */
        "objects.accounts-payable.adjustment-summary": {
            /**
             * @description System-assigned key for the adjustment summary.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the adjustment summary. This value is the same as the `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint of the adjustment summary.
             * @example /objects/accounts-payable/adjustment-summary/1
             */
            readonly href?: string;
            /**
             * @description Name of the adjustment summary. This name is used to identify the summary throughout the Accounts Payable application.
             * @example Adjustment Batch Jan 2021
             */
            name?: string;
            /**
             * @description Indicates how the summary was created. If set to `manual`, the summary was created by a user. If set to `system`, the summary was automatically created by Intacct based on the summary frequency.
             * @default manual
             * @example manual
             * @enum {string}
             */
            readonly summaryCreationType?: "system" | "manual";
            status?: components["schemas"]["status"];
            /**
             * @description Record type to identify the type of transaction.
             * @example apAdjustments
             */
            readonly recordType?: components["schemas"]["ap-record-type"];
            /**
             * Format: decimal-precision-2
             * @description The total amount of all adjustments included in the adjustment summary.
             * @example 656.82
             */
            readonly totalAmount?: string;
            /** @description Parent adjustment summary. */
            parent?: {
                /**
                 * @description System-assigned key for the parent adjustment summary.
                 * @example 22
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the parent adjustment summary. This value is the same as the `key` for this object.
                 * @example 22
                 */
                id?: string | null;
                /**
                 * @description URL endpoint of the adjustment summary.
                 * @example /objects/accounts-payable/summary/22
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies whether to allow posting to the general ledger (GL).
             * @default false
             * @example false
             */
            readonly preventGLPosting?: boolean;
            /** @description Bank account ID. */
            bankAccountId?: {
                /**
                 * @description System-assigned key for the bank account.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the bank account. This value is the same as the `key` for this object.
                 * @example 1
                 */
                id?: string | null;
                /**
                 * @description URL endpoint of the bank account.
                 * @example /objects/cash-management/bank-account/23
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description The date that the items in the adjustment summary should post to the general ledger.
             * @example 2022-08-02
             */
            glPostingDate?: string;
            /**
             * @description State of the adjustment summary, which can be `open` or `closed`. An open adjustment summary can have items added to it.
             * @default open
             * @example open
             * @enum {string}
             */
            state?: "open" | "closed";
            /**
             * @description This field is set to `true` only for manual and quick payment summaries. It is set to `false` for transactions of the type `bill/adjustment`.
             * @default false
             * @example false
             */
            isQuickPaymentSummary?: boolean;
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description Header information for AP advance transactions. */
        "objects.accounts-payable.advance": {
            /**
             * @description System-assigned unique key for the AP advance.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the AP advance. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description Record type to identify the type of transaction. AP advances have a record type of `pa`.
             * @example pa
             */
            readonly recordType?: string;
            /**
             * @description URL endpoint for the AP advance.
             * @example /objects/accounts-payable/advance/23
             */
            readonly href?: string;
            /**
             * @description Payment method for the AP advance. A payment method for AP advances defines how funds are transferred to a vendor, which determines the approval process and workflow steps needed to complete the advance payment.
             * @example printedCheck
             * @enum {string}
             */
            paymentMethod?: "printedCheck" | "creditCard" | "eft" | "cash" | "ach";
            /**
             * @description A number, such as a purchase order or account number, useful for searches or reports. This number appears on the GL Details report and is printed on checks and vendor stubs.
             * @example INV-902852
             */
            referenceNumber?: string | null;
            /**
             * @description Description of the AP advance.
             * @example Computer Hardware & Software Expenses 03/01/20 - 08/31/21 Subscription charges.
             */
            description?: string | null;
            /**
             * @description If document sequencing is enabled, specifies the auto-generated document sequence number for the advance. If document sequencing is not enabled, this field is null.
             * @example Advance-001
             */
            readonly advanceNumber?: string | null;
            /** @description Summary details for this advance. Summaries are collections of the same types of transactions grouped together for processing. */
            readonly advanceSummary?: {
                /**
                 * @description System-assigned key for the summary.
                 * @example 399
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the summary.
                 * @example 399
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint of the adjustment summary.
                 * @example /objects/accounts-payable/summary/399
                 */
                readonly href?: string;
            };
            /**
             * @description Processing state of the AP advance.
             *     The state can be modified through workflow operations like Submit and Reverse, but cannot be changed using the PATCH operation.
             * @default draft
             * @example draft
             * @enum {string}
             */
            state?: "draft" | "inProcess" | "pendingApproval" | "partiallyApproved" | "declined" | "fullyApplied" | "partiallyApplied" | "advancePaid" | "void" | "voided";
            /**
             * Format: decimal-precision-2
             * @description Total amount of the AP advance.
             * @example 100.20
             */
            readonly totalEntered?: string;
            /**
             * Format: decimal-precision-2
             * @description Total transaction amount entered.
             * @example 1000.20
             */
            readonly txnTotalEntered?: string;
            /**
             * Format: date
             * @description Date the advance payment was made.
             * @example 2021-01-23
             */
            advanceDate?: string;
            /** @description Payment information for the AP advance. */
            readonly paymentInformation?: {
                /**
                 * Format: date
                 * @description Date the AP advance was paid.
                 * @example 2021-01-23
                 */
                readonly paidDate?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount paid for the AP advance.
                 * @example 100
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount selected for the AP advance.
                 * @example 100.10
                 */
                readonly totalSelected?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The total transaction amount selected for payment.
                 * @example 1000.05
                 */
                readonly txnTotalSelected?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The total transaction amount paid.
                 * @example 2000.50
                 */
                readonly txnTotalPaid?: string;
            };
            /**
             * Format: decimal-precision-2
             * @description For multi-currency companies, the transaction amount in the base currency.
             * @example 251464.01
             */
            readonly totalDue?: string;
            /**
             * Format: decimal-precision-2
             * @description Total transaction amount due for the AP advance.
             * @example 10
             */
            readonly txnTotalDue?: string;
            location?: components["schemas"]["location-ref"];
            /**
             * Format: date
             * @description Due date for the AP advance.
             * @example 2021-01-23
             */
            dueDate?: string;
            /** @description Financial account from which the reconciliation is done. */
            financialEntity?: {
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
            };
            reconciliationGroup?: {
                /**
                 * Format: date
                 * @description The date when reconciliation is completed. This value is automatically populated.
                 * @example 2021-01-23
                 */
                clearingDate?: string | null;
                /**
                 * @description Indicates the reconciliation status.
                 * @default false
                 * @example false
                 * @enum {string}
                 */
                cleared?: "true" | "false" | "matched";
            };
            /**
             * @description Indicates whether the advance record is created by the system. A value of `true` means it is system-generated and not based on user input.
             * @default false
             * @example true
             * @enum {string}
             */
            isSystemGenerated?: "true" | "false";
            /** @description Currency details for this AP advance. */
            currency?: {
                /**
                 * @description Base currency for the AP advance.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * @description The transaction currency to use for this advance. If this currency is different from the base currency, provide an exchange rate.
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
                    date?: string | null;
                    /**
                     * @description Exchange rate used to calculate the base amount from the transaction amount.
                     * @example 1.0789
                     */
                    rate?: number | null;
                    /**
                     * @description The type of exchange rate used to calculate the base amount from the transaction amount.
                     * @example 1
                     */
                    typeId?: string | null;
                };
            };
            /** @description Supporting document ID for this attachment. */
            attachment?: {
                /** @example 21 */
                key?: string | null;
                /** @example Sales01 */
                id?: string | null;
                /** @example /objects/company-config/attachment/21 */
                readonly href?: string;
            };
            /** @description Vendor associated with the AP advance. */
            vendor?: {
                /**
                 * @description Unique identifier for the vendor.
                 * @example Vendor_01
                 */
                id?: string;
                /**
                 * @description System-assigned unique key for the vendor.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description Name of the vendor.
                 * @example Logic Solutions
                 */
                name?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount due to the vendor for the transaction.
                 * @example 100
                 */
                readonly totalDue?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/15
                 */
                readonly href?: string;
            };
            /** @description Line items of the advance. */
            lines?: components["schemas"]["objects.accounts-payable.advance-line"][];
            readonly audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2024-01-23T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            entity?: components["schemas"]["entity-ref"];
        };
        "accounts-payable-advanceRequiredProperties": {
            vendor?: Record<string, never>;
            currency?: Record<string, never>;
            lines?: unknown[];
        };
        "accounts-payable-advance-actions-submit-request": {
            /**
             * @description System-assigned unique key for the AP advance.
             * @example 11
             */
            key: string;
        };
        "accounts-payable-advance-actions-submit-response": {
            /**
             * @description Unique key for the AP advance.
             * @example 11
             */
            readonly key?: string;
            /**
             * @description Unique ID for the AP advance.
             * @example 11
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AP advance.
             * @example /objects/accounts-payable/advance/11
             */
            readonly href?: string;
            /**
             * @description State of the AP advance.
             * @example posted
             */
            readonly state?: string;
        };
        "accounts-payable-advance-actions-reverse-request": {
            /**
             * @description Unique key for the AP advance.
             * @example 22
             */
            key: string;
            /**
             * Format: date
             * @description Date the AP advance transaction is reversed.
             * @example 2026-03-15
             */
            reversedDate: string;
            /**
             * @description Notes or comments about the reason for the AP advance reversal.
             * @example Reversed the advance due to duplicate entry
             */
            memo?: string;
        };
        "accounts-payable-advance-actions-reverse-response": {
            /**
             * @description Unique key for the AP advance.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the AP advance.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AP advance.
             * @example /objects/accounts-payable/advance/23
             */
            readonly href?: string;
            /**
             * @description AP advance state after reversal.
             * @example reversed
             */
            readonly state?: string;
        };
        /** @description Line items in an AP advance represent transactions captured in that advance. */
        "objects.accounts-payable.advance-line": {
            /**
             * @description System-assigned key for the AP advance line.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the AP advance line. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AP advance line.
             * @example /objects/accounts-payable/advance-line/23
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description For multi-currency companies, the transaction amount in the base currency.
             * @example 100.00
             */
            readonly baseAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description The transaction amount for the AP advance line item in the currency specified for the transaction.
             * @example 100
             */
            txnAmount?: string;
            dimensions?: components["schemas"]["dimension-ref"] & {
                /** @description Department to assign the expense to. */
                department?: {
                    /**
                     * @description System-assigned key for the department.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the department. This value is the same as the `key` for this object.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description The name of the department assigned to the transaction.
                     * @example Accounting
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/1
                     */
                    readonly href?: string;
                };
                /** @description Location to assign the expense to. */
                location?: {
                    /**
                     * @description System-assigned key for the location.
                     * @example 10
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the location.
                     * @example 1
                     */
                    id?: string | null;
                    /**
                     * @description The name of the location assigned to the transaction.
                     * @example India
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/1
                     */
                    readonly href?: string;
                };
            };
            /**
             * @description Additional notes or comments about the advance line item for reference.
             * @example Service charges
             */
            memo?: string | null;
            /** @description Currency details for multi-currency companies. */
            readonly currency?: {
                /**
                 * @description Base currency for the AP advance line.
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /**
                 * @description The currency used for the transaction.
                 * @example GBP
                 */
                readonly txnCurrency?: string;
                /**
                 * exchangeRate
                 * @description Exchange rate details used to calculate the base amount.
                 */
                readonly exchangeRate?: {
                    /**
                     * Format: date
                     * @description Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                     * @example 2025-01-23
                     */
                    readonly date?: string | null;
                    /**
                     * @description Exchange rate used to calculate the base amount from the transaction amount.
                     * @example 1.0789
                     */
                    readonly rate?: string | null;
                    /**
                     * @description The type of exchange rate used to calculate the base amount from the transaction amount.
                     * @example -1
                     */
                    readonly typeId?: string | null;
                };
            };
            /**
             * @description Line number
             * @example 1
             */
            readonly lineNumber?: number;
            /** @description Payment information for the AP advance line item. */
            readonly paymentInformation?: {
                /**
                 * Format: decimal-precision-2
                 * @description The total amount paid in the base currency for the line item.
                 * @example 100
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The total amount paid for the line item in the transaction currency.
                 * @example 200
                 */
                readonly txnTotalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The total amount selected in the base currency for the line item.
                 * @example 100
                 */
                readonly totalSelected?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The total amount selected in the transaction currency for the line item.
                 * @example 100
                 */
                readonly txnTotalSelected?: string;
            };
            /** @description Base location for the line item. */
            baseLocation?: components["schemas"]["location-ref"] & {
                /**
                 * @description Base location key.
                 * @example 4
                 */
                readonly key?: string;
                /**
                 * @description Location ID
                 * @example US
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/1
                 */
                readonly href?: string;
            };
            /** @description Meaningful name of the account. */
            accountLabel?: {
                /**
                 * @description System-assigned key for the account label.
                 * @example 14
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the account label.
                 * @example Accounting Fees
                 */
                id?: string | null;
                /** @example /objects/accounts-payable/account-label/14 */
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
            /** @description Header level details for the AP advance's line items. */
            readonly apAdvance?: {
                /**
                 * @description URL endpoint for the AP advance.
                 * @example /objects/apadvance/23
                 */
                readonly href?: string;
                /**
                 * @description Unique identifier for the AP advance.
                 * @example 1
                 */
                readonly id?: string;
                /**
                 * @description System-assigned key for the AP advance. This value is the same as the `key` for this object.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Record type. AP advances have a record type of `pa`.
                 * @example pa
                 */
                readonly recordType?: string;
            };
            glAccount?: components["schemas"]["gl-account-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        "accounts-payable-advance-lineRequiredProperties": {
            dimensions?: Record<string, never>;
        };
        /** @description Statement of charges for money owed to a vendor for goods or services. */
        "objects.accounts-payable.bill": {
            /**
             * @description System-assigned unique key for the bill.
             * @example 986
             */
            readonly key?: string;
            /**
             * @description Unique ID for the bill. This value is the same as the `key` for this object.
             * @example 986
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bill.
             * @example /objects/accounts-payable/bill/986
             */
            readonly href?: string;
            /**
             * @description Vendor-assigned identifier for the bill.
             *     This is the vendor-assigned number provided on the bill. This number is unique and can be used to look up bill details.
             *     You must specify a bill number when creating a bill unless document sequencing is configured, in which case the number is auto-generated.
             * @example Bill-001
             */
            billNumber?: string | null;
            /**
             * @description Key identifying the source module from which the transaction was created.
             * @example accountsPayable
             * @enum {string}
             */
            readonly moduleName?: "accountsPayable" | "purchaseOrder";
            /**
             * @description A bill's state shows the current status of the bill within the workflow. For details about each state, see [Bill state descriptions](https://www.intacct.com/ia/docs/en_US/help_action/Accounts_Payable/Bills/bill-state-descriptions.htm).
             *     The state can be modified through workflow operations like Submit and Reverse, but cannot be changed using the PATCH operation.
             * @default draft
             * @example posted
             * @enum {string}
             */
            state?: "reversed" | "reversal" | "analyzing" | "partiallyApproved" | "submitted" | "declined" | "noValue" | "posted" | "paid" | "partiallyPaid" | "selected" | "draft";
            /**
             * @description The record type for the bill. Accounts Payable bills are record type `pi`.
             * @example pi
             */
            readonly recordType?: string;
            /** @description Vendor associated with the bill. */
            vendor?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description ID for the vendor.
                 * @example V-00014
                 */
                id?: string;
                /**
                 * @description Name of the vendor.
                 * @example Pac bell
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/15
                 */
                readonly href?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount due for the vendor.
                 * @example 100.00
                 */
                readonly vendorDue?: string;
                /**
                 * Form1099
                 * @description Form 1099 information for the vendor.
                 */
                readonly form1099?: {
                    /**
                     * @description Type of 1099 form for the vendor.
                     * @example NEC
                     */
                    readonly type?: string | null;
                    /**
                     * @description Box number for form 1099.
                     * @example 15A
                     */
                    readonly box?: string | null;
                    /**
                     * @description Type of 1099 form for the vendor.
                     * @example MISC
                     */
                    readonly vendorTypeForm1099Type?: string | null;
                };
            };
            /** @description Payment term associated with the bill. */
            term?: {
                /**
                 * @description Unique key for the term.
                 * @example 16
                 */
                key?: string | null;
                /**
                 * @description ID for the term.
                 * @example Net 75
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the term.
                 * @example /objects/accounts-payable/term/16
                 */
                readonly href?: string;
            };
            /**
             * @description This is a number such as a purchase order or account number that might be useful in searches or reports. This number shows on the GL Details report and prints on the check and vendor Stubs.
             * @example INV-902852
             */
            referenceNumber?: string | null;
            /**
             * @description Additional information about the bill.
             * @example Annual maintenance charge
             */
            description?: string | null;
            /**
             * @description Number of days between the current date and the due date. For example, a value of 5 indicates the due date was 5 days ago (overdue), while -5 indicates the due date is 5 days in the future.
             * @example 8
             */
            readonly dueInDays?: string;
            /**
             * Format: date
             * @description Posting date for the bill in the general ledger.
             * @example 2026-01-23
             */
            postingDate?: string;
            /**
             * Format: date
             * @description Date after which the discount for the bill is no longer valid.
             * @example 2026-02-15
             */
            discountCutOffDate?: string | null;
            /**
             * Format: date
             * @description Due date for the bill.
             * @example 2026-02-23
             */
            dueDate?: string;
            /**
             * Format: date
             * @description Recommended payment date for the bill. If a default bill payment date is set on the vendor record, Sage Intacct calculates the recommended payment date.
             *     You can override the calculated date or, if there is no default payment date for the vendor, provide a date when you create a bill.
             * @example 2026-01-23
             */
            recommendedPaymentDate?: string | null;
            /**
             * Format: date
             * @description Date that the bill was created.
             * @example 2026-01-23
             */
            createdDate?: string;
            /**
             * @description Indicates whether the bill is on hold.
             * @default false
             * @example false
             */
            isOnHold?: boolean;
            /**
             * @description Indicates whether bill amounts already include taxes.
             * @default false
             * @example false
             */
            isTaxInclusive?: boolean;
            /**
             * @description The payment priority for this bill, which enables you to easily identify and pay the most urgent bills first.
             * @default normal
             * @example urgent
             * @enum {string}
             */
            paymentPriority?: "urgent" | "high" | "normal" | "low";
            /**
             * Format: decimal-precision-2
             * @description Total base amount calculated for the bill. For multi-currency companies, Intacct calculates this amount in your company's base currency by applying the exchange rate to the total transaction amount.
             * @example 100.00
             */
            readonly totalBaseAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description For multi currency companies, the total amount due for the bill in your company's base currency.
             * @example 10.00
             */
            readonly totalBaseAmountDue?: string;
            /**
             * Format: decimal-precision-2
             * @description Total transaction amount of the bill.
             * @example 100.00
             */
            readonly totalTxnAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Total amount due for the bill.
             * @example 10.00
             */
            readonly totalTxnAmountDue?: string;
            /**
             * @description Indicates whether the bill was created internally by the system rather than from user input.
             * @default false
             * @example false
             */
            readonly isSystemGenerated?: boolean;
            /**
             * @deprecated
             * @description Deprecated. Use the `purchasingDocument` field instead.
             */
            purchasing?: {
                /** @description Document ID for the vendor invoice. */
                id?: string | null;
                /** @description System-assigned key to uniquely identify the purchasing document. */
                readonly key?: string;
                /** @description URL endpoint for the purchasing document. */
                readonly href?: string;
            };
            readonly purchasingDocument?: {
                /**
                 * @description Document ID for the vendor invoice.
                 * @example Vendor Invoice-VI0031-doc
                 */
                readonly id?: string;
                /**
                 * @description System-assigned key to uniquely identify the purchasing document.
                 * @example 416
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the purchasing document.
                 * @example /objects/purchasing/document/416
                 */
                readonly href?: string;
            };
            /** @description Recurring schedule associated with the bill. */
            readonly recurringSchedule?: {
                /**
                 * @description Unique key for the recurring schedule.
                 * @example 20
                 */
                readonly key?: string | null;
                /**
                 * @description ID for the recurring schedule. This value is the same as the `key` for this object.
                 * @example 20
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the recurring schedule.
                 * @example /objects/core/schedule/20
                 */
                readonly href?: string;
            };
            contacts?: {
                /**
                 * payTo
                 * @description Pay-to contact information from the vendor record.
                 */
                payTo?: {
                    /**
                     * @description System-assigned key to uniquely identify the contact.
                     * @example 416
                     */
                    key?: string;
                    /**
                     * @description Name of the contact.
                     * @example Klay Vanderbilt
                     */
                    id?: string;
                    /**
                     * tax
                     * @description Tax related information for the pay-to contact.
                     */
                    readonly tax?: {
                        /**
                         * @description Tax identification number.
                         * @example 252-85-7897
                         */
                        taxId?: string | null;
                        /** @description Contact tax group associated with the pay-to contact. */
                        group?: {
                            /**
                             * @description Unique key for the contact tax group.
                             * @example 288
                             */
                            key?: string | null;
                            /**
                             * @description ID for the contact tax group.
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
                     * @example /objects/company-config/contact/416
                     */
                    readonly href?: string;
                };
                /**
                 * returnTo
                 * @description Return to contact information from the vendor record.
                 */
                returnTo?: {
                    /**
                     * @description System-assigned key to uniquely identify the contact.
                     * @example 416
                     */
                    key?: string;
                    /**
                     * @description Name of the contact.
                     * @example Yusuf Pringle
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/416
                     */
                    readonly href?: string;
                };
            };
            /** @description Currency details for this bill. */
            currency?: {
                /**
                 * @description Base currency for your company.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * @description The transaction currency to use for this bill. If this currency is different from the base currency, provide an exchange rate.
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
                     * @example 2026-01-23
                     */
                    date?: string | null;
                    /**
                     * @description Exchange rate used to calculate the base amount from the transaction amount.
                     * @example 1.0789
                     */
                    rate?: number | null;
                    /**
                     * @description Exchange rate type used to calculate the base amount from the transaction amount.
                     * @example 1
                     */
                    typeId?: string | null;
                };
            };
            /** @description Tax solution details for this bill. */
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
                 * @description Set to `true` to enable multiple taxes per line.
                 * @example true
                 */
                readonly showMultiLineTax?: string | null;
                /**
                 * @description Tax method used in this bill.
                 * @example VAT
                 */
                readonly taxCalculationMethod?: string | null;
                /**
                 * @deprecated
                 * @description Deprecated. Use `taxCalculationMethod` instead.
                 */
                readonly method?: string | null;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/4
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies whether the transaction is a regular invoice (invoice), an electronic invoice (eInvoice), or an invoice reported to the tax agency because it is not eligible for e-invoicing (eReporting).
             * @example invoice
             * @enum {string|null}
             */
            invoiceType?: null | "invoice" | "eInvoice" | "eReporting";
            /**
             * @description Invoice mode for France e-invoicing workflows; applicable only for France e-invoice enabled entities.
             *
             *     Supported values:
             *     - `tlb1` - E-Reporting mode for goods.
             *     - `tps1` - E-Reporting mode for services.
             *
             *     Leave this field blank unless `invoiceType` is `eReporting`.
             * @example tlb1
             * @enum {string|null}
             */
            invoiceMode?: null | "tlb1" | "tps1";
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
             * @enum {string|null}
             */
            readonly eInvoiceStatus?: null | "submitted" | "issuedByPlatform" | "fileUploaded" | "madeAvailable" | "inHand" | "refused" | "paymentSent" | "paymentReceived" | "disputed" | "notSent" | "inTransit" | "approved" | "receivedByPlatform" | "rejectedByPlatform" | "suspended" | "completed" | "partiallyApproved";
            /**
             * @description Upload status for the bill.
             * @example completed
             * @enum {string}
             */
            readonly importStatus?: "resolve" | "completed" | "pending" | "draftReady" | "cancelled" | null;
            /**
             * @description Error message for import issue, if any.
             * @example Failed to upload the file info to STX [Support ID: IGHSzWEB002%7EZusFKP3t0u-8kc5-M9eO1gAAAAM]
             */
            readonly importErrorMessage?: string;
            /**
             * @description Email address of the bill's recipient.
             * @example bbaker@mycompany.com
             */
            readonly recipientEmail?: string;
            /**
             * @description Email address of the bill's sender.
             * @example rrogers@mycompany.com
             */
            readonly senderEmail?: string;
            /**
             * @description Anomaly code for this automated transaction. The value `amount` means the transaction amount is outside the normal range, `email` means the transaction was created from a suspicious email, and `multiple` means both the `email` and `amount` anomalies apply.
             * @example email
             * @enum {string|null}
             */
            readonly anomalyCode?: null | "email" | "amount" | "multiple";
            /**
             * @description Source of the bill document if the bill is imported via automation (billUpload or email). If the bill is generated by Sage Intacct, this value is null.
             * @example email
             * @enum {string|null}
             */
            readonly documentSource?: "billUpload" | "email" | "refund" | null;
            /** @description Summary details for this bill. Summaries are collections of the same types of transactions grouped together for processing. */
            billSummary?: {
                /**
                 * @description Unique key for the bill summary.
                 * @example 280
                 */
                key?: string;
                /**
                 * @description ID for the bill summary.
                 * @example 280
                 */
                id?: string;
                /**
                 * @description Name of the summary.
                 * @example Bills: 2022/01/01 Batch
                 */
                readonly name?: string;
                /**
                 * @description A summary can be open or closed. Items, such as invoices, can be added to open summaries.
                 * @example open
                 * @enum {string}
                 */
                readonly isSummaryOpen?: "open" | "closed";
                /**
                 * @description Posting status of the summary in the general ledger.
                 * @example false
                 */
                readonly isSummaryPosted?: string;
                /**
                 * @description URL endpoint for the bill summary.
                 * @example /objects/accounts-payable/bill-summary/280
                 */
                readonly href?: string;
            };
            /**
             * @description Source module for the bill.
             * @default accountsPayable
             * @example purchasing
             * @enum {string}
             */
            readonly sourceModule?: "accountsPayable" | "purchasing";
            /** @description Payment information for the bill. */
            paymentInformation?: {
                /**
                 * Format: date
                 * @description Date on which the bill was fully paid.
                 * @example 2026-01-23
                 */
                fullyPaidDate?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount that was paid.
                 * @example 100.00
                 */
                readonly totalBaseAmountPaid?: string;
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
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount that was paid.
                 * @example 100.00
                 */
                readonly totalTxnAmountPaid?: string;
            };
            /** @description Retainage information for the bill. (For Construction subscriptions only.) Retainage is a portion of the agreed-upon contract price withheld until the work is substantially complete. */
            retainage?: {
                /**
                 * Format: decimal-precision-2
                 * @description Default retainage percentage for the customer.
                 * @example 5.00
                 */
                readonly defaultPercentage?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount retained.
                 * @example 200.00
                 */
                readonly totalTxnAmountRetained?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount released.
                 * @example 100.00
                 */
                readonly totalTxnAmountReleased?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount retained.
                 * @example 100.00
                 */
                readonly totalBaseAmountRetained?: string;
            };
            /** @description Bill back template for bill back transactions. */
            billBackTemplate?: {
                /**
                 * @description System-assigned key for the bill back template.
                 * @example 121
                 */
                key?: string;
                /**
                 * @description ID for the bill back template.
                 * @example 121
                 */
                id?: string;
                /**
                 * @description Indicates whether inter-entity posting posts directly to the mapped inter-entity offset accounts instead of the AP offset accounts.
                 * @default true
                 * @example true
                 */
                readonly enableInterEntityPostings?: boolean;
                /**
                 * @description URL endpoint for the bill back template.
                 * @example /objects/accounts-payable/billback-template/12
                 */
                readonly href?: string;
            };
            /** @description Supporting document attached to the bill. */
            attachment?: {
                /**
                 * @description System-assigned key for the supporting document.
                 * @example 18
                 */
                key?: string | null;
                /**
                 * @description ID for the supporting document.
                 * @example 18
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/18
                 */
                readonly href?: string;
            };
            /** @description Customer refund details for the bill. */
            readonly customerRefund?: {
                /**
                 * @description System-assigned key for the customer refund.
                 * @example 15
                 */
                readonly key?: string | null;
                /**
                 * @description ID for the customer refund.
                 * @example REF-01
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the customer refund.
                 * @example /objects/accounts-receivable/customer-refund/15
                 */
                readonly href?: string;
            };
            /**
             * @deprecated
             * @description This field is deprecated and no longer in use.
             */
            location?: {
                /**
                 * @deprecated
                 * @description Deprecated. This field is no longer supported.
                 */
                key?: string;
                /**
                 * @deprecated
                 * @description Deprecated. This field is no longer supported.
                 */
                id?: string;
                /**
                 * @deprecated
                 * @description Deprecated. This field is no longer supported.
                 */
                readonly name?: string;
                /**
                 * @deprecated
                 * @description Deprecated. This field is no longer supported.
                 */
                readonly href?: string;
            };
            /** @description Line items for the bill. */
            lines?: components["schemas"]["objects.accounts-payable.bill-line"][];
            entity?: components["schemas"]["entity-ref"];
            /** @description URL for the bill record in Sage Intacct. */
            readonly webURL?: string;
            /** @description France E-invoicing dispute information. */
            dispute?: {
                /**
                 * @description Dispute reason (France E-invoicing only).
                 * @example other
                 * @enum {string}
                 */
                reason?: null | "other" | "bankDetailsError" | "incorrectVATRate" | "incorrectTotalAmount" | "invoiceCalculationError" | "legalNoticeMissing" | "duplicateInvoice" | "errorInRecipientInformation" | "unknownTransaction" | "issuerUnknown" | "contractCompleted" | "doubleInvoice" | "orderNumberIncorrectOrMissing" | "incorrectEmailBillingAddress" | "incorrectOrMissingSiretNumber" | "routingCodeMissingOrIncorrect" | "contractualReferenceRequired" | "incorrectReference" | "incorrectUnitPrices" | "incorrectDiscount" | "incorrectQuantityBilled" | "itemBilledIncorrectly" | "incorrectPaymentMethod" | "incorrectQualityOfItemDelivered" | "deliveryProblem";
                /**
                 * @description Additional information for disputing the bill which is supported only for France E-invoicing.
                 *     Use this field to provide the detail that explains why the bill was disputed.
                 * @example Does not have an active invoice receiving address
                 */
                notes?: string;
            };
            /** @description France E-invoicing refusal information. */
            refuse?: {
                /**
                 * @description Refusal reason (France E-invoicing only).
                 * @example incorrectVATRate
                 * @enum {string}
                 */
                reason?: null | "incorrectVATRate" | "incorrectTotalAmount" | "invoiceCalculationError" | "legalNoticeMissing" | "duplicateInvoice" | "errorInRecipientInformation" | "unknownTransaction" | "issuerUnknown" | "contractCompleted" | "doubleInvoice" | "orderNumberIncorrectOrMissing" | "incorrectEmailBillingAddress" | "contractualReferenceRequired";
                /**
                 * @description Additional information for refusing the bill which is supported only for France E-invoicing.
                 *     Use this field to provide the detail that explains why the bill was refused.
                 * @example The VAT rate used is not the one that should have been
                 */
                notes?: string;
            };
            readonly audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2026-01-23T11:28:12Z
                 */
                readonly createdDateTime?: string;
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
            };
        };
        "accounts-payable-billRequiredProperties": {
            vendor?: Record<string, never>;
            currency?: Record<string, never>;
            lines?: {
                dimensions?: Record<string, never>;
            }[];
        };
        "accounts-payable-bill-actions-submit-request": {
            /**
             * @description System-assigned key for the bill.
             * @example 132
             */
            key: string;
        };
        "accounts-payable-bill-actions-submit-response": {
            /**
             * @description System-assigned key for AP bill.
             * @example 132
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the AP bill.
             * @example 132
             */
            readonly id?: string;
            /**
             * @description URL endpoint for AP bill.
             * @example /objects/accounts-payable/bill/132
             */
            readonly href?: string;
            /**
             * @description State of the AP bill.
             * @example posted
             */
            readonly state?: string;
        };
        "accounts-payable-bill-actions-approve-request": {
            /**
             * @description System-assigned key for the bill.
             * @example 132
             */
            key: string;
            /**
             * @description Notes or comments about the bill.
             * @example Approved, ready for use
             */
            notes?: string;
        };
        "accounts-payable-bill-actions-approve-response": {
            /**
             * @description System-assigned key for the AP bill.
             * @example 132
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the AP bill.
             * @example 132
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AP bill.
             * @example /objects/accounts-payable/bill/132
             */
            readonly href?: string;
            /**
             * @description State of the AP bill.
             * @example approved
             * @enum {string}
             */
            readonly state?: "approved";
        };
        "accounts-payable-bill-actions-decline-request": {
            /**
             * @description System-assigned key for the bill.
             * @example 132
             */
            key: string;
            /**
             * @description Notes or comments about the AP bill.
             * @example Declined, missing information
             */
            notes?: string;
        };
        "accounts-payable-bill-actions-decline-response": {
            /**
             * @description System-assigned key for the AP bill.
             * @example 132
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the AP bill.
             * @example 132
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AP bill.
             * @example /objects/accounts-payable/bill/132
             */
            readonly href?: string;
            /**
             * @description State of the AP bill.
             * @example declined
             * @enum {string}
             */
            readonly state?: "declined";
        };
        "accounts-payable-bill-actions-recall-request": {
            /**
             * @description System-assigned key for the bill.
             * @example 132
             */
            key: string;
        };
        "accounts-payable-bill-actions-recall-response": {
            /**
             * @description System-assigned key for the bill.
             * @example 132
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the AP bill.
             * @example 132
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AP bill.
             * @example /objects/accounts-payable/bill/132
             */
            readonly href?: string;
            /**
             * @description State of the AP bill.
             * @example draft
             * @enum {string}
             */
            readonly state?: "draft";
        };
        "accounts-payable-bill-actions-reverse-request": {
            /**
             * @description System-assigned key for the bill.
             * @example 132
             */
            key: string;
            /**
             * Format: date
             * @description Specifies the reversal date for the bill. This date must be later than the `postingDate` for the bill.
             * @example 2026-03-03
             */
            reverseDate: string;
            /**
             * @description Notes or comments about the AP bill reversal.
             * @example Reversed for re-posting.
             */
            notes?: string;
        };
        "accounts-payable-bill-actions-reverse-response": {
            /**
             * @description System-assigned key for the bill.
             * @example 132
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the AP bill.
             * @example 132
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AP bill.
             * @example /objects/accounts-payable/bill/132
             */
            readonly href?: string;
            /**
             * @description State of the AP bill.
             * @example reversed
             * @enum {string}
             */
            readonly state?: "reversed";
        };
        /** @description Line items for an Accounts Payable (AP) bill. */
        "objects.accounts-payable.bill-line": {
            /**
             * @description Unique ID for the bill line. This value is the same as the `key` for this object.
             * @example 62
             */
            readonly id?: string;
            /**
             * @description System-assigned unique key for the bill line.
             * @example 62
             */
            key?: string;
            /**
             * @description URL endpoint for the AP bill line.
             * @example /objects/accounts-payable/bill-line/1955
             */
            readonly href?: string;
            /**
             * @description Number of the AP bill line.
             * @example 1
             */
            readonly lineNumber?: string;
            /**
             * @description If the vendor is set up for 1099 tracking and enabled for 1099 flag override, you can set this value to `true` to enable individual line items for 1099 treatment.
             *     If `false`, this line item does not have associated 1099 form type and box values.
             * @example true
             * @enum {string|null}
             */
            hasForm1099?: "true" | "false" | null;
            /** @description Form 1099 information for the line item. */
            form1099?: {
                /**
                 * @description Type of form 1099.
                 * @example NEC
                 */
                type?: string | null;
                /**
                 * @description Box value of form 1099.
                 * @example 15A
                 */
                box?: string | null;
            };
            /**
             * Format: date
             * @description Date the line item was created.
             * @example 2026-01-23
             */
            readonly createdDate?: string;
            /**
             * @description Vendor-assigned identifier for the bill.
             *     This is the vendor-assigned number provided on the bill. This number is unique and can be used to look up bill details.
             *     You must specify a bill number when creating a bill unless document sequencing is configured, in which case the number is auto-generated.
             * @example Bill-001
             */
            readonly billNumber?: string | null;
            /** @description Vendor associated with the bill line. */
            vendor?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description ID for the vendor.
                 * @example V-00014
                 */
                id?: string;
                /**
                 * @description Name of the vendor.
                 * @example Pac bell
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/15
                 */
                readonly href?: string;
            };
            /** @description General Ledger (GL) account associated with the line item. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 256
                 */
                key?: string;
                /**
                 * @description ID for the GL account.
                 * @example 6252
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example Entertainment
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/256
                 */
                readonly href?: string;
            };
            /** @description An alternative account to override the default GL AP account for the bill. */
            overrideOffsetGLAccount?: {
                /**
                 * @description Unique key for the account.
                 * @example 384
                 */
                key?: string;
                /**
                 * @description ID for the offset GL account.
                 * @example 1234.36
                 */
                id?: string;
                /**
                 * @description Offset account name.
                 * @example AP ACCOUNT
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/384
                 */
                readonly href?: string;
            };
            /** @description AP account label associated with the line item. */
            accountLabel?: {
                /**
                 * @description Unique key for the account label.
                 * @example 14
                 */
                key?: string | null;
                /**
                 * @description ID for the account label.
                 * @example Accounting Fees
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the account label.
                 * @example /objects/accounts-payable/account-label/14
                 */
                readonly href?: string;
            };
            /**
             * Format: decimal-precision-2
             * @description Amount for the line item in your company's base currency, which is calculated based on the exchange rate defined in the header.
             * @example 100.00
             */
            readonly billAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Amount for the line item in your company's base currency, which is calculated based on the exchange rate defined in the header.
             * @example 100.00
             */
            readonly baseAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description For multi-currency companies, provide a transaction amount, which is the amount in the transaction currency.
             * @example 100.00
             */
            txnAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description For tax inclusive bills, provide a total transaction amount.
             * @example 100.00
             */
            totalTxnAmount?: string;
            /**
             * @description Memo about the line item.
             * @example Service charges
             */
            memo?: string | null;
            /** @description Transaction allocation template associated with the bill line, used to distribute the amount across specified dimensions. */
            allocation?: {
                /**
                 * @description Unique key for the allocation.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description ID for the allocation.
                 * @example Alloc1-WBS-US
                 */
                id?: string | null;
                /** @example /objects/general-ledger/txn-allocation-template/21 */
                readonly href?: string;
            };
            /** @description Currency details for the bill. */
            currency?: {
                /**
                 * @description Base currency for the company.
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /**
                 * @description Transaction currency for the bill.
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
                     * @example 2026-01-23
                     */
                    readonly date?: string | null;
                    /**
                     * @description Exchange rate used to calculate the base amount from the transaction amount.
                     * @example 1.0789
                     */
                    readonly rate?: number | null;
                    /**
                     * @description Exchange rate type used to calculate the base amount from the transaction amount.
                     * @example 1
                     */
                    readonly typeId?: string | null;
                };
            };
            /** @description Payment information for the line item. */
            paymentInformation?: {
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
            /**
             * @description Indicates whether the bill line is available for payment.
             * @default false
             * @example true
             */
            releaseToPay?: boolean | null;
            /**
             * @description Indicates whether the line item represents a subtotal or tax value.
             * @default null
             * @example subtotal
             * @enum {string|null}
             */
            readonly isSubTotal?: "subtotal" | "tax" | null;
            /** @description Base location for the line item. */
            baseLocation?: components["schemas"]["location-ref"] & {
                /**
                 * @description Unique key for the location.
                 * @example 4
                 */
                readonly key?: string;
                /**
                 * @description ID for the location.
                 * @example US
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/1
                 */
                readonly href?: string;
            };
            /** @description Retainage information for the line item. (For Construction subscriptions only.) Retainage is a portion of the agreed upon contract price withheld until the work is substantially complete. */
            readonly retainage?: {
                /**
                 * @description Indicates whether retainage applies to the bill line.
                 * @default false
                 * @example true
                 */
                readonly hasRetainage?: boolean | null;
                /**
                 * Format: decimal-precision-2
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
                readonly release?: boolean | null;
            };
            /** @description Project-related information for the line item. */
            project?: {
                /**
                 * @description Indicates whether the line item is marked as billable.
                 * @default false
                 * @example true
                 */
                isBillable?: boolean;
                /**
                 * @description Indicates whether the line item is billed.
                 * @default false
                 * @example true
                 */
                readonly isBilled?: boolean;
            };
            /** @description Asset information for the line item. */
            fixedAsset?: {
                /**
                 * @description Identifier for the asset.
                 * @example ergonomic chair
                 */
                nameOfAcquiredAsset?: string | null;
                /**
                 * @description Indicates whether tax is included in the asset cost.
                 * @default false
                 * @example true
                 */
                includeTaxInAssetCost?: boolean;
                /**
                 * @description The asset creation mode for the asset. Determines how fixed assets are created from this bill line.
                 *     When set to `addToExistingCIPAsset`, use `cipAsset` to specify the existing CIP asset to add costs to.
                 *     When set to `createFixedAsset`, `createMultipleFixedAssets`, or `createCIPAsset`, use `assetClassification` to assign a classification to the newly created asset.
                 * @default doNotCreateAsset
                 * @example createFixedAsset
                 * @enum {string|null}
                 */
                assetCreationMode?: null | "createFixedAsset" | "createMultipleFixedAssets" | "doNotCreateAsset" | "createCIPAsset" | "addToExistingCIPAsset";
                /**
                 * @description Number of assets created by this bill.
                 * @example 10
                 */
                assetQuantity?: number | null;
                /** @description The existing CIP asset to add costs to. Used when assetCreationMode is set to addToExistingCIPAsset. Applicable only for companies subscribed to Fixed Assets with asset creation from bills enabled. */
                cipAsset?: {
                    /**
                     * @description System-assigned key of the CIP asset.
                     * @example 101
                     */
                    key?: string | null;
                    /**
                     * @description ID of the CIP asset.
                     * @example CIP-001
                     */
                    id?: string | null;
                    /**
                     * @description Name of the CIP asset.
                     * @example New Building CIP
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the CIP asset.
                     * @example /objects/fixed-assets/asset/101
                     */
                    readonly href?: string;
                };
                /** @description The asset classification to assign to the asset created from this bill line. Applicable only for companies subscribed to Fixed Assets with asset creation from bills enabled. */
                assetClassification?: {
                    /**
                     * @description System-assigned key of the asset classification.
                     * @example 5
                     */
                    key?: string | null;
                    /**
                     * @description ID of the asset classification.
                     * @example EQUIP
                     */
                    id?: string | null;
                    /**
                     * @description Name of the asset classification.
                     * @example Equipment
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the asset classification.
                     * @example /objects/fixed-assets/asset-classification/5
                     */
                    readonly href?: string;
                };
            };
            /** @description Amortization template for prepaid expense distribution. */
            amortizationTemplate?: {
                /**
                 * @description Unique key for the amortization template.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description ID for the amortization template.
                 * @example StraightLine_Monthly
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the amortization template.
                 * @example /objects/accounts-payable/amortization-template/1
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Start date for the amortization period.
             * @example 2026-01-01
             */
            amortizationStartDate?: string | null;
            /**
             * Format: date
             * @description End date for the amortization period.
             * @example 2026-12-31
             */
            amortizationEndDate?: string | null;
            /** @description Purchasing document information for the line item. */
            purchasing?: {
                /** purchasingDocument */
                document?: {
                    /**
                     * @description System-assigned key of the primary purchasing document.
                     * @example 2437
                     */
                    key?: string | null;
                    /**
                     * @description User assigned document number.
                     * @example Sales Invoice-INV0110
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the purchasing document.
                     * @example /objects/purchasing/document/2437
                     */
                    readonly href?: string;
                };
                /**
                 * purchasingDocumentLine
                 * @description Line details for the purchasing document.
                 */
                documentLine?: {
                    /**
                     * @description System-assigned key for the line in the primary document.
                     * @example 750
                     */
                    key?: string | null;
                    /**
                     * @description Number of the line in the primary document.
                     * @example 3
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the purchasing document line.
                     * @example /objects/purchasing/document-line/750
                     */
                    readonly href?: string;
                };
            };
            /** @description Tax entries for the bill line. */
            taxEntries?: components["schemas"]["objects.accounts-payable.bill-tax-entry"][];
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
                    key?: string | null;
                    /**
                     * @description ID for the location.
                     * @example AU
                     */
                    id?: string | null;
                    /**
                     * @description Name of the location.
                     * @example Australia
                     */
                    readonly name?: string | null;
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
                    key?: string | null;
                    /**
                     * @description ID for the department.
                     * @example 01
                     */
                    id?: string | null;
                    /**
                     * @description Name of the department.
                     * @example Accounting
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
            };
            /** @description Header level details for the bill. */
            bill?: {
                /**
                 * @description ID for the bill.
                 * @example 19876
                 */
                id?: string;
                /**
                 * @description Unique key for the bill.
                 * @example 19876
                 */
                key?: string;
                /**
                 * @description URL endpoint for the bill.
                 * @example /objects/accounts-payable/bill/19876
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s2"];
        };
        "accounts-payable-bill-lineRequiredProperties": {
            bill: Record<string, never>;
            glAccount: unknown | unknown;
        } & (unknown | {
            dimensions: Record<string, never>;
        });
        "accounts-payable-bill-line-actions-release-request": {
            /**
             * @description System-assigned key for the bill line.
             * @example 132
             */
            key: string;
        };
        "accounts-payable-bill-line-actions-release-response": {
            /**
             * @description System-assigned key for the bill line.
             * @example 132
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the bill line.
             * @example 132
             */
            readonly id?: string;
            /**
             * @description If `true`, then this line item is available for the payment.
             * @default false
             * @example true
             */
            readonly releaseToPay?: boolean | null;
            /**
             * @description URL endpoint for bill line.
             * @example /objects/accounts-payable/bill-line/132
             */
            readonly href?: string;
        };
        /** @description For VAT-enabled transactions, bill lines have tax entries. */
        "objects.accounts-payable.bill-tax-entry": {
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
            /** @description Purchasing tax detail associated with the bill tax entry. */
            purchasingTaxDetail?: {
                /**
                 * @description Unique key for the tax detail.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the tax detail.
                 * @example Alaska Tax Detail
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax detail.
                 * @example /objects/tax/purchasing-tax-detail/1
                 */
                readonly href?: string;
            };
            /**
             * bill-line
             * @description Bill line associated with the bill tax entry.
             */
            readonly billLine?: {
                /**
                 * @description Unique ID for the bill line.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the bill line.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the bill line.
                 * @example /objects/accounts-payable/bill-line/100
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates whether the bill tax entry is eligible for partial exemption, which separates the recoverable and non-recoverable portions of the input value added tax (VAT).
             * @default false
             * @example true
             */
            isPartialExemption?: boolean;
        };
        /** @description Accounts Payable (AP) summaries are collections of the same type of transactions, grouped together for processing. */
        "objects.accounts-payable.bill-summary": {
            /**
             * @description System-assigned key for the bill summary.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the bill summary. This value is the same as the `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bill summary.
             * @example /objects/accounts-payable/bill-summary/1
             */
            readonly href?: string;
            /**
             * @description Name of the bill summary. This name is used to identify the summary throughout the Accounts Payable application.
             * @example Bill Batch Jan 2021
             */
            name?: string;
            /**
             * @description Specifies the creation type of the bill summary. If set to `manual`, the summary was created by a user. If set to `system`, the summary was automatically created by Intacct based on the specified summary frequency.
             * @default manual
             * @example manual
             * @enum {string}
             */
            readonly summaryCreationType?: "system" | "manual";
            status?: components["schemas"]["status"];
            /**
             * @description The bill summary type.
             * @example apBill
             */
            readonly recordType?: components["schemas"]["record-type"];
            /**
             * Format: decimal-precision-2
             * @description The bill summary total amount.
             * @example 656.82
             */
            readonly totalAmount?: string;
            /** @description Parent bill summary. */
            parent?: {
                /**
                 * @description System-assigned key for the parent bill summary.
                 * @example 22
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the parent bill summary. This value is the same as the `key` for this object.
                 * @example 22
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the bill summary.
                 * @example /objects/accounts-payable/summary/22
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies whether to allow posting to the general ledger (GL).
             * @default false
             * @example true
             */
            readonly preventGLPosting?: boolean;
            /** @description Bank account. */
            bankAccount?: {
                /**
                 * @description System-assigned key for the bank account.
                 * @example BOA
                 */
                key?: string | null;
                /**
                 * @description Identifier for the bank account. This value is the same as the `key` for this object.
                 * @example BOA
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the bank account.
                 * @example /objects/cash-management/bank-account/23
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description The date that the items in the bill summary should post to the general ledger.
             * @example 2022-08-02
             */
            readonly glPostingDate?: string;
            /**
             * @description State of the bill summary, which can be `open` or `closed`. An open bill summary can have items added to it.
             * @example open
             * @enum {string}
             */
            state?: "open" | "closed";
            /**
             * @description This field is set to `true` only for manual and quick payment summaries. It is set to `false` for transactions of type bill/adjustment.
             * @default false
             * @example false
             */
            isQuickPaymentSummary?: boolean;
            /**
             * @description A summary can be open or closed. Items, such as invoices, can be added to open summaries.
             * @default open
             * @example open
             * @enum {string}
             */
            readonly isSummaryOpen?: "open" | "closed";
            /**
             * @description If `true`, the summary has been posted to the General Ledger.
             * @example false
             */
            readonly isSummaryPosted?: boolean;
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description Predefined pattern for setting up amortizations. */
        "objects.accounts-payable.amortization-template": {
            /**
             * @description System-assigned unique key for the amortization template.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the amortization template.
             * @example AP Monthly 12
             */
            id?: string;
            /**
             * @description URL endpoint for the amortization template.
             * @example /objects/accounts-payable/amortization-template/23
             */
            readonly href?: string;
            /**
             * @description Description of the amortization template.
             * @example Template for 12 month amortizations
             */
            description?: string;
            /**
             * @description Amortization type for the template.
             * @default straightLine
             * @example straightLine
             * @enum {string}
             */
            templateType?: "cca" | "straightLine";
            /**
             * @description Frequency used to generate amortization schedules from the template.
             * @default monthly
             * @example monthly
             * @enum {string}
             */
            term?: "monthly" | "quarterly" | "annually";
            /**
             * @description Day of the month for posting amortization entries. Use a number (1-31) or "endOfPeriod" to post on the last day of each period.
             * @default endOfPeriod
             * @example endOfPeriod
             * @enum {string}
             */
            postingDay?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "endOfPeriod";
            /**
             * @description Number of periods over which to amortize. Valid only for straight-line templates. Must be between 1 and 1500.
             * @example 12
             */
            periodCount?: number | null;
            /** @description Location to use for the general ledger posting (optional). */
            readonly location?: {
                /**
                 * @description Unique key for the location.
                 * @example 15
                 */
                key?: string | null;
                /**
                 * @description Name or other unique ID for the location.
                 * @example San Jose Office
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/15
                 */
                readonly href?: string;
            };
            /** @description General ledger account associated with the amortization template. */
            glAccount?: {
                /**
                 * @description Unique key for the account.
                 * @example 456
                 */
                key?: string;
                /**
                 * @description ID for the GL account.
                 * @example 1000--Cash in Bank
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/456
                 */
                readonly href?: string;
            };
            /** @description General ledger journal associated with the amortization template. */
            glJournal?: {
                /**
                 * @description Unique key for the journal.
                 * @example 789
                 */
                key?: string;
                /**
                 * @description ID for the journal.
                 * @example POJ
                 */
                id?: string;
                /**
                 * @description URL endpoint for the journal.
                 * @example /objects/general-ledger/journal/789
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "accounts-payable-amortization-templateRequiredProperties": Record<string, never>;
        /** @description Information about each joint payee for AP Bill */
        "objects.accounts-payable.joint-payee": {
            /**
             * @description System-assigned key for the joint payee.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique ID for the joint payee. This value is the same as `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the joint payee.
             * @example /objects/accounts-payable/joint-payee/1
             */
            readonly href?: string;
            /**
             * @description Name of the joint payee. The `name` value cannot be changed after a payment that uses the `printAs` field has been made.
             * @example John Smith
             */
            name?: string;
            /**
             * @description Name that will print on the check. Usually, this value is the vendor's pay-to contact name and the joint payee name.
             *     This value must be unique per bill. This value cannot be changed after a payment has been made.
             * @example Orchard Supply Hardware & John Smith
             */
            printAs?: string;
            /** @description The bill associated with this joint payee. */
            bill?: {
                /**
                 * @description Bill key.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Bill ID.
                 * @example INV-1285
                 */
                id?: string;
                /**
                 * @description URL endpoint for the bill.
                 * @example /objects/accounts-payable/bill/1
                 */
                readonly href?: string;
            };
        };
        "accounts-payable-joint-payeeRequiredProperties": Record<string, never>;
        /** @description An AP payment is a transaction that records a payment against an AP bill or AP adjustment. */
        "objects.accounts-payable.payment": {
            /**
             * @description System-assigned unique key for the AP payment.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID of the AP payment. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AP payment.
             * @example /objects/accounts-payable/payment/23
             */
            readonly href?: string;
            /**
             * @description Record type of the transaction.
             * @example apPayment
             */
            readonly recordType?: components["schemas"]["ap-record-type"];
            /** @description Financial account from which the payment is made. */
            financialEntity?: {
                /**
                 * @deprecated
                 * @description This field has been deprecated. Use the `entityId` field instead.
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
            };
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `state` field instead.
             *     The action to take when the payment is created or updated.
             *     * `submit` - Submit or post the payment, depending on the approval workflow.
             *     * `draft` - Move the payment to the outbox in the system.
             * @default draft
             * @enum {string}
             */
            action?: "draft" | "submit";
            /**
             * @description Indicates whether the payment is system generated.
             * @default false
             * @example true
             * @enum {string}
             */
            readonly systemGenerated?: "true" | "false";
            /**
             * @description Current state of the AP payment.
             *     The state can be modified through workflow operations like Submit and Reverse, but cannot be changed using the PATCH operation.
             * @default draft
             * @example approved
             * @enum {string}
             */
            state?: "partiallyApproved" | "submitted" | "voided" | "confirmed" | "approved" | "draft" | "declined" | "delivered" | "printVoided" | "quickDelivery";
            /**
             * @description Reference number for the payment, which can be the check number or the transaction number, depending on the payment method used.
             * @example 3086
             */
            documentNumber?: string | null;
            /**
             * @description Description of the payment (memo).
             * @example From billing through August 31
             */
            description?: string | null;
            /**
             * @description Document ID for the payment.
             * @example Prim-Vendor-Invoice-VI#0008#doc
             */
            documentId?: string | null;
            /**
             * Format: date
             * @description Date the payment was created.
             * @example 2026-11-03
             */
            readonly txnDate?: string;
            /**
             * Format: date
             * @description Date the payment transaction was paid.
             * @example 2026-11-04
             */
            readonly txnPaidDate?: string;
            /**
             * Format: date
             * @description The date to make the payment.
             * @example 2026-11-23
             */
            paymentDate?: string;
            /** @description Transaction totals in the base currency. */
            baseCurrency?: {
                /**
                 * @description The company's base currency.
                 * @example USD
                 */
                currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Amount to pay in the base currency.
                 * @example 500.00
                 */
                amountToPay?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total payment amount in the base currency.
                 * @example 10.00
                 */
                readonly totalAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount selected for payment in the base currency.
                 * @example 10.00
                 */
                readonly totalSelected?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total amount paid in the base currency.
                 * @example 10.00
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Amount due in the base currency.
                 * @example 10.00
                 */
                readonly totalDue?: string;
            };
            /** @description For companies that use multi-currency transactions, totals in the transaction currency. */
            txnCurrency?: {
                /**
                 * @description The currency in which the payment was made.
                 * @example USD
                 */
                currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Amount to pay in the transaction currency.
                 * @example 500.00
                 */
                amountToPay?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount.
                 * @example 10.00
                 */
                readonly totalAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount selected.
                 * @example 10.00
                 */
                readonly totalSelected?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total transaction amount paid.
                 * @example 10.00
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Transaction amount due.
                 * @example 10.00
                 */
                readonly totalDue?: string;
            };
            /**
             * @description Reconciliation status of the payment.
             * @default uncleared
             * @example matched
             * @enum {string}
             */
            readonly cleared?: "cleared" | "uncleared" | "matched";
            /**
             * Format: date
             * @description Reconciliation date.
             * @example 2026-01-23
             */
            readonly clearedDate?: string | null;
            /**
             * @description Indicates whether the transaction is tax inclusive.
             * @default false
             * @example false
             */
            readonly isInclusiveTax?: boolean;
            /** @description Summary that the payment is part of. Summaries are collections of transactions grouped together for processing. */
            readonly paymentSummary?: {
                /**
                 * @description Unique key for the summary.
                 * @example 399
                 */
                readonly key?: string;
                /**
                 * @description ID of the summary.
                 * @example 399
                 */
                readonly id?: string;
                /**
                 * @description Name of the summary.
                 * @example Hidden AP Batch
                 */
                readonly name?: string;
                /**
                 * Format: date
                 * @description GL posting date.
                 * @example 2026-07-21
                 */
                readonly postingDate?: string;
                /**
                 * @description URL endpoint for the summary.
                 * @example /objects/accounts-payable/summary/399
                 */
                readonly href?: string;
            };
            /** @description Exchange rate details used to calculate the base amount. */
            exchangeRate?: {
                /**
                 * Format: date
                 * @description Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                 * @example 2026-01-23
                 */
                date?: string | null;
                /**
                 * @description Exchange rate used to calculate the base amount from the transaction amount.
                 * @example 1.0789
                 */
                readonly rate?: string | null;
                /**
                 * @description Exchange rate type used to calculate the base amount from the transaction amount.
                 * @example 1
                 */
                typeId?: string | null;
            };
            /** @description Payment provider who processed the payment. */
            readonly paymentProvider?: {
                /**
                 * @description Unique key for the payment provider.
                 * @example 3
                 */
                readonly key?: string;
                /**
                 * @description ID of the payment provider.
                 * @example CSI
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the payment provider.
                 * @example /objects/cash-management/payment-provider/3
                 */
                readonly href?: string;
            };
            /**
             * @description Payment method for the payment.
             * @example Printed Check
             */
            paymentMethod?: string;
            /** @description Contact that the payment will be made to. Leave blank to use the `payTo` contact set for the vendor. */
            readonly payTo?: {
                /**
                 * @description URL endpoint for the contact.
                 * @example /objects/company-config/contact/6886
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the contact.
                 * @example 6886
                 */
                readonly key?: string;
                /**
                 * @description ID of the contact.
                 * @example ksmith
                 */
                readonly id?: string;
            };
            /** @description Tax solution used to calculate and capture taxes on the payment. */
            readonly taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 5
                 */
                readonly key?: string | null;
                /**
                 * @description ID of the tax solution.
                 * @example GST
                 */
                readonly id?: string | null;
                /**
                 * @description Tax calculation method used for the payment.
                 * @example simpleTax
                 */
                readonly taxCalculationMethod?: string | null;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/5
                 */
                readonly href?: string;
            };
            /** @description Vendor to receive the payment. */
            vendor?: {
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/201
                 */
                readonly href?: string;
                /**
                 * @description Vendor entity.
                 * @example V201
                 */
                readonly entity?: string;
                /**
                 * @description Unique key for the vendor.
                 * @example 201
                 */
                key?: string;
                /**
                 * @description ID of the vendor.
                 * @example V-00014
                 */
                id?: string;
                /**
                 * @description Name of the vendor.
                 * @example PG & E
                 */
                readonly name?: string;
            };
            /**
             * @description The submitter of the payment.
             * @example Alex
             */
            readonly paymentSubmitter?: string;
            /**
             * @description Payment service file type.
             * @example bankFile
             * @enum {string}
             */
            readonly paymentFileType?: "ach" | "bankFile" | "none";
            /** @description Joint payee for the payment. */
            readonly jointPayee?: {
                /**
                 * @description URL endpoint for the joint payee.
                 * @example /object/accounts-payable/joint-payee/11
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the joint payee.
                 * @example 11
                 */
                readonly key?: string | null;
                /**
                 * @description ID of the joint payee.
                 * @example 11
                 */
                readonly id?: string | null;
                /**
                 * @description Name of the joint payee.
                 * @example John Smith
                 */
                readonly name?: string | null;
                /**
                 * @description Name that will print on the check.
                 * @example Orchard Supply Hardware & John Smith
                 */
                readonly printAs?: string | null;
            };
            /**
             * @description Method used to determine how payment requests are generated.
             * @default useVendorPreference
             * @example generateOneRequestPerBill
             * @enum {string|null}
             */
            paymentRequestMethod?: null | "useVendorPreference" | "generateOneRequestPerBill" | "mergeRequestsIntoOnePerVendor" | "mergeRequestIntoOnePerVendorPayToContact";
            /** @description Bank file associated with the AP payment. */
            readonly bankFile?: {
                /**
                 * @description URL endpoint for the bank file.
                 * @example /object/cash-management/bank-file/11
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the bank file.
                 * @example 11
                 */
                readonly key?: string;
                /**
                 * @description ID of the bank file.
                 * @example 11
                 */
                readonly id?: string;
            };
            /** @description Payment details, including transaction payment amounts, line items, and discounts. */
            details?: components["schemas"]["objects.accounts-payable.payment-detail"][];
            /** @description Line items in the payment. */
            lines?: components["schemas"]["objects.accounts-payable.payment-line"][];
            /**
             * @description Record URL for the AP payment.
             * @example /objects/accounts-payable/payment/23
             */
            readonly webURL?: string;
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2026-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
        };
        "accounts-payable-paymentRequiredProperties": {
            details?: {
                txnCurrency?: Record<string, never>;
            }[];
            txnCurrency?: Record<string, never>;
        };
        "accounts-payable-payment-actions-submit-request": {
            /**
             * @description System-assigned key for the payment.
             * @example 132
             */
            key: string;
        };
        "accounts-payable-payment-actions-submit-response": {
            /** @example 132 */
            readonly key?: string;
            /** @example 132 */
            readonly id?: string;
            /** @example /objects/accounts-payable/payment/132 */
            readonly href?: string;
            /**
             * @description State of the entry
             * @example submitted
             * @enum {string}
             */
            readonly state?: "submitted" | "confirmed";
        };
        "accounts-payable-payment-actions-approve-request": {
            /**
             * @description System-assigned key for the payment.
             * @example 132
             */
            key: string;
            /**
             * @description Notes or comments about this payment.
             * @example Approved, ready for use
             */
            notes?: string;
        };
        "accounts-payable-payment-actions-approve-response": {
            /** @example 132 */
            readonly key?: string;
            /** @example 132 */
            readonly id?: string;
            /** @example /objects/accounts-payable/payment/132 */
            readonly href?: string;
            /**
             * @description State of the entry
             * @example approved
             * @enum {string}
             */
            readonly state?: "approved";
        };
        "accounts-payable-payment-actions-decline-request": {
            /**
             * @description System-assigned key for the payment.
             * @example 132
             */
            key: string;
            /**
             * @description Notes or comments about this payment.
             * @example Declined, missing information
             */
            notes?: string;
        };
        "accounts-payable-payment-actions-decline-response": {
            /** @example 132 */
            readonly key?: string;
            /** @example 132 */
            readonly id?: string;
            /** @example /objects/accounts-payable/payment/132 */
            readonly href?: string;
            /**
             * @description State of the entry
             * @example declined
             * @enum {string}
             */
            readonly state?: "declined";
        };
        "accounts-payable-payment-actions-confirm-request": {
            /**
             * @description System-assigned key for the payment.
             * @example 132
             */
            key: string;
        };
        "accounts-payable-payment-actions-confirm-response": {
            /** @example 132 */
            readonly key?: string;
            /** @example 132 */
            readonly id?: string;
            /** @example /objects/accounts-payable/payment/132 */
            readonly href?: string;
            /**
             * @description State of the entry
             * @example confirmed
             * @enum {string}
             */
            readonly state?: "confirmed";
        };
        "accounts-payable-payment-actions-print-request": {
            /**
             * @description System-assigned key for the payment.
             * @example 132
             */
            key: string;
        };
        "accounts-payable-payment-actions-print-response": {
            /** @example 132 */
            readonly key?: string;
            /** @example 132 */
            readonly id?: string;
            /** @example /objects/accounts-payable/payment/132 */
            readonly href?: string;
            /**
             * @description State of the entry
             * @example delivered
             * @enum {string}
             */
            readonly state?: "delivered";
        };
        "accounts-payable-payment-actions-reverse-request": {
            /**
             * @description System-assigned key for the payment.
             * @example 132
             */
            key: string;
            /**
             * Format: date
             * @description Specifies the payment date.
             * @example 2026-01-23
             */
            paymentDate?: string;
            /**
             * @description Description of the payment (memo).
             * @example From billing through August 31
             */
            description?: string | null;
        };
        "accounts-payable-payment-actions-reverse-response": {
            /** @example 132 */
            readonly key?: string;
            /** @example 132 */
            readonly id?: string;
            /** @example /objects/accounts-payable/payment/132 */
            readonly href?: string;
            /**
             * @description State of the entry
             * @example reversed
             * @enum {string}
             */
            readonly state?: "reversed" | "approved";
        };
        /** @description AP payment line items represent entries in an AP payment. */
        "objects.accounts-payable.payment-line": {
            /**
             * @description System-assigned unique key for the AP payment line item.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID of the AP payment line item. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AP payment line item.
             * @example /objects/accounts-payable/payment-line/23
             */
            readonly href?: string;
            /**
             * @description Memo or brief description of the AP payment line item.
             * @example Penalty
             */
            description?: string | null;
            /** @description Exchange rate details used to calculate the base amount. */
            readonly exchangeRate?: {
                /**
                 * Format: date
                 * @description Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                 * @example 2026-01-23
                 */
                readonly date?: string;
                /**
                 * @description Exchange rate used to calculate the base amount from the transaction amount.
                 * @example 1.0789
                 */
                readonly rate?: string;
                /**
                 * @description Exchange rate type used to calculate the base amount from the transaction amount.
                 * @example 1
                 */
                readonly typeId?: string | null;
            };
            /**
             * @description Line number of the AP payment line item.
             * @example 1
             */
            readonly lineNumber?: number;
            /** @description Line item amounts in base currency. */
            readonly baseCurrency?: {
                /**
                 * @description Base currency.
                 * @example USD
                 */
                readonly currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Amount of the line item in the base currency.
                 * @example 10.00
                 */
                readonly amount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount paid for the line item.
                 * @example 10.00
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Total base amount selected for the line item.
                 * @example 0.00
                 */
                readonly totalSelected?: string;
            };
            /** @description Line item amounts in transaction currency. */
            readonly txnCurrency?: {
                /**
                 * @description Transaction currency.
                 * @example USD
                 */
                readonly currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Amount of the line item in the transaction currency.
                 * @example 10.00
                 */
                readonly amount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Transaction total paid for the line item.
                 * @example 10.00
                 */
                readonly totalPaid?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Transaction total selected for the line item.
                 * @example 0.00
                 */
                readonly totalSelected?: string;
            };
            /**
             * @description Record type of the line item:
             *     * `pp` - AP payment record
             *     * `po` - applied advance record
             * @example pp
             */
            readonly paymentLineRecord?: string;
            /**
             * @description Key for the base location associated with the payment line.
             * @example 2
             */
            readonly baseLocation?: string;
            /**
             * @description Indicates whether the line item amount includes taxes.
             * @default false
             * @example true
             */
            readonly isTax?: boolean;
            /** @description Purchasing tax detail for the line item. A tax schedule map applies tax details to taxable lines. */
            readonly taxDetail?: {
                /**
                 * @description Unique key for the tax detail.
                 * @example 13
                 */
                readonly key?: string | null;
                /**
                 * @description ID of the tax detail.
                 * @example AUS-TAX
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the tax detail.
                 * @example /objects/tax/purchasing-tax-detail/13
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
                 * @example 10.00
                 */
                readonly amount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description For multi-currency payments, the amount of the line item in the bank's currency.
                 * @example 10.00
                 */
                readonly txnAmount?: string;
                /**
                 * @description The bank's currency.
                 * @example USD
                 */
                readonly txnCurrency?: string;
                /**
                 * @description The bank's base currency.
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /** @description For two and three-way currency conversions, bank exchange rate details used to calculate the base amount for the line item. */
                readonly bankExchangeRate?: {
                    /**
                     * Format: date
                     * @description Exchange rate date used to calculate the bank base amount from the transaction amount.
                     * @example 2026-01-23
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
            /** @description General Ledger (GL) account associated with the payment line. */
            readonly glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description ID of the GL account.
                 * @example 6330
                 */
                readonly id?: string;
                /**
                 * @description Title of the GL account.
                 * @example Compensation- Salary
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/23
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /** @description Department associated with the AP payment line item. */
                readonly department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 12
                     */
                    readonly key?: string | null;
                    /**
                     * @description ID of the department.
                     * @example 12
                     */
                    readonly id?: string | null;
                    /**
                     * @description Name of the department.
                     * @example Accounts
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/12
                     */
                    readonly href?: string;
                };
                /** @description Location associated with the AP payment line item. */
                readonly location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 22
                     */
                    readonly key?: string | null;
                    /**
                     * @description ID of the location.
                     * @example LOC-22
                     */
                    readonly id?: string | null;
                    /**
                     * @description Name of the location.
                     * @example India
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/22
                     */
                    readonly href?: string;
                };
            };
            /** @description Header level details for the AP payment's line entries. */
            readonly apPayment?: {
                /**
                 * @description Unique key for the AP payment.
                 * @example 3220
                 */
                readonly key?: string;
                /**
                 * @description ID of the AP payment.
                 * @example 3220
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the AP payment.
                 * @example /objects/accounts-payable/payment/3220
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description An AP payment detail provides details about a payment, including information about the bill, adjustment, or advance that was paid and the line item information for the bill, adjustment, or advance. */
        "objects.accounts-payable.payment-detail": {
            /**
             * @description System-assigned unique key for the AP payment detail.
             * @example 1083
             */
            readonly key?: string;
            /**
             * @description Unique ID of the AP payment detail. This value is the same as the `key` for this object.
             * @example 1083
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the AP payment detail.
             * @example /objects/accounts-payable/payment-detail/1083
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Date the payment was made.
             * @example 2026-04-04
             */
            readonly paymentDate?: string;
            /** @description Payment amounts in the company's base currency. */
            baseCurrency?: {
                /**
                 * Format: decimal-precision-2
                 * @description The amount of the payment in the company's base currency.
                 * @example 10.00
                 */
                readonly paymentAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Inline transaction amount in the base currency.
                 * @example 10.00
                 */
                readonly inlineAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Discount amount in the base currency.
                 * @example 10.00
                 */
                readonly discountAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Adjustment transaction amount in the base currency.
                 * @example 10.00
                 */
                readonly adjustmentAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Posted advance amount in the base currency.
                 * @example 10.00
                 */
                readonly postedAdvanceAmount?: string | null;
            };
            /** @description Payment amounts in the company's transaction currency. */
            txnCurrency?: {
                /**
                 * @description The company's transaction currency.
                 * @example USD
                 */
                readonly currency?: string;
                /**
                 * Format: decimal-precision-2
                 * @description The amount of the payment in the transaction currency.
                 * @example 10.00
                 */
                paymentAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Inline transaction amount in the transaction currency.
                 * @example 10.00
                 */
                inlineAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Discount transaction amount in the transaction currency.
                 * @example 10.00
                 */
                readonly discountAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Adjustment transaction amount in the transaction currency.
                 * @example 10.00
                 */
                adjustmentAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Posted advance transaction amount in the transaction currency.
                 * @example 10.00
                 */
                postedAdvanceAmount?: string | null;
            };
            /**
             * Format: date
             * @description Date the discount was issued.
             * @example 2026-04-04
             */
            discountDate?: string | null;
            /**
             * @description State of the payment.
             * @default confirmed
             * @example draft
             * @enum {string}
             */
            readonly state?: "confirmed" | "draft";
            /**
             * @description Identifier for the module associated with the payment detail.
             * @example 3.AP
             */
            readonly moduleKey?: string;
            /** @description AP adjustment associated with the payment. */
            apDebitAdjustment?: {
                /**
                 * @description URL endpoint for the AP adjustment.
                 * @example /objects/accounts-payable/adjustment/3319
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the AP adjustment.
                 * @example 3319
                 */
                key?: string | null;
                /**
                 * @description ID of the AP adjustment.
                 * @example 3319
                 */
                id?: string | null;
            };
            /** @description Line item in the associated AP adjustment. */
            apDebitAdjustmentLine?: {
                /**
                 * @description URL endpoint for the AP adjustment line item.
                 * @example /objects/accounts-payable/adjustment-line/30854
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the AP adjustment line item.
                 * @example 30854
                 */
                key?: string | null;
                /**
                 * @description ID of the AP adjustment line item.
                 * @example 30854
                 */
                id?: string | null;
            };
            /** @description AP bill associated with the payment. */
            bill?: {
                /**
                 * @description URL endpoint for the bill.
                 * @example /objects/accounts-payable/bill/3318
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the bill.
                 * @example 3318
                 */
                key?: string;
                /**
                 * @description ID of the bill.
                 * @example 3318
                 */
                id?: string;
            };
            /** @description Line item in the associated AP bill. */
            billLine?: {
                /**
                 * @description URL endpoint for the bill line.
                 * @example /objects/accounts-payable/bill-line/30844
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the bill line.
                 * @example 30844
                 */
                key?: string;
                /**
                 * @description ID of the bill line.
                 * @example 30844
                 */
                id?: string;
            };
            /** @description AP payment object that this payment detail object is part of. */
            apPayment?: {
                /**
                 * @description URL endpoint for the AP payment.
                 * @example /objects/accounts-payable/payment/3325
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the AP payment.
                 * @example 3325
                 */
                key?: string;
                /**
                 * @description ID of the AP payment.
                 * @example 3325
                 */
                id?: string;
            };
            /** @description AP payment line associated with this payment detail. */
            apPaymentLine?: {
                /**
                 * @description URL endpoint for the AP payment line.
                 * @example /objects/accounts-payable/payment-line/30917
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the AP payment line.
                 * @example 30917
                 */
                key?: string;
                /**
                 * @description ID of the AP payment line.
                 * @example 30917
                 */
                id?: string;
            };
            /** @description Inline bill associated with the payment. */
            inlineBill?: {
                /**
                 * @description URL endpoint for the inline bill.
                 * @example /objects/accounts-payable/bill/1331
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the inline bill.
                 * @example 1331
                 */
                key?: string | null;
                /**
                 * @description ID of the inline bill.
                 * @example 1331
                 */
                id?: string | null;
            };
            /** @description Line item in the associated inline bill. */
            inlineBillLine?: {
                /**
                 * @description URL endpoint for the inline bill line.
                 * @example /objects/accounts-payable/bill-line/30866
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the inline bill line.
                 * @example 30866
                 */
                key?: string | null;
                /**
                 * @description ID of the inline bill line.
                 * @example 30866
                 */
                id?: string | null;
            };
            /** @description Credit adjustment associated with the payment. */
            apCreditAdjustment?: {
                /**
                 * @description URL endpoint for the credit adjustment.
                 * @example /objects/accounts-payable/adjustment/2321
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the credit adjustment.
                 * @example 2321
                 */
                key?: string | null;
                /**
                 * @description ID of the credit adjustment.
                 * @example 2321
                 */
                id?: string | null;
            };
            /** @description Line item in the associated credit adjustment. */
            apCreditAdjustmentLine?: {
                /**
                 * @description URL endpoint for the credit adjustment line.
                 * @example /objects/accounts-payable/adjustment/33213
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the credit adjustment line.
                 * @example 33213
                 */
                key?: string | null;
                /**
                 * @description ID of the credit adjustment line.
                 * @example 33213
                 */
                id?: string | null;
            };
            /** @description AP advance associated with the payment. */
            apAdvance?: {
                /**
                 * @description Unique key for the advance.
                 * @example 999
                 */
                key?: string | null;
                /**
                 * @description ID of the advance.
                 * @example 999
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the advance.
                 * @example /objects/accounts-payable/advance/999
                 */
                readonly href?: string;
            };
            /** @description Line item in the associated AP advance. */
            apAdvanceLine?: {
                /**
                 * @description Unique key for the advance line.
                 * @example 59
                 */
                key?: string | null;
                /**
                 * @description ID of the advance line.
                 * @example 59
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the advance line.
                 * @example /objects/accounts-payable/advance-line/59
                 */
                readonly href?: string;
            };
            /** @description Posted AP advance associated with the payment. */
            readonly apPostedAdvance?: {
                /**
                 * @description Unique key for the posted advance.
                 * @example 25
                 */
                readonly key?: string | null;
                /**
                 * @description ID of the posted advance.
                 * @example 25
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the posted advance.
                 * @example /objects/accounts-payable/advance/25
                 */
                readonly href?: string;
            };
            /** @description Line item in the associated posted advance. */
            readonly apPostedAdvanceLine?: {
                /**
                 * @description Unique key for the posted advance line item.
                 * @example 112
                 */
                readonly key?: string | null;
                /**
                 * @description ID of the posted advance line item.
                 * @example 112
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the posted advance line item.
                 * @example /objects/accounts-payable/advance-line/112
                 */
                readonly href?: string;
            };
            /** @description Joint payee associated with the payment. */
            readonly jointPayee?: {
                /**
                 * @description URL endpoint for the joint payee.
                 * @example /object/accounts-payable/joint-payee/11
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the joint payee.
                 * @example 11
                 */
                readonly key?: string | null;
                /**
                 * @description ID of the joint payee.
                 * @example 11
                 */
                readonly id?: string | null;
                /**
                 * @description Name that will print on the check. Usually, this value is the vendor's pay-to contact name and the joint payee name.
                 * @example Orchard Wholesale Co. & Bob's Best Produce
                 */
                printAs?: string | null;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Header information for recurring bills. */
        "objects.accounts-payable.recurring-bill": {
            /**
             * @description System-assigned key for the recurring bill.
             * @example 56
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the recurring bill. This value is the same as the `key` for this object.
             * @example 56
             */
            readonly id?: string | null;
            /**
             * @description URL endpoint for the recurring bill.
             * @example /objects/accounts-payable/recurring-bill/56
             */
            readonly href?: string;
            /**
             * @description Additional information about the recurring bill.
             * @example Recurring Bill for 2025-01-23 services
             */
            description?: string | null;
            /**
             * @description A reference number, such as a purchase order or account number, used for searches and reports. This number appears on the General Ledger Details report and prints on checks and vendor stubs.
             * @example RecurBill-100
             */
            referenceNumber?: string | null;
            /**
             * @description Internal identifier for the module.
             * @example 3.AP
             */
            readonly moduleKey?: string;
            /** @description Represents a contract associated with the recurring bill. */
            contract?: {
                /**
                 * @description Unique key for the contract.
                 * @example 2
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the contract.
                 * @example CON-2
                 */
                id?: string | null;
                /**
                 * @description Description of the contract.
                 * @example CON-2 for trade
                 */
                readonly description?: string | null;
                /**
                 * @description URL endpoint for the contract.
                 * @example /objects/contracts/contract/2
                 */
                readonly href?: string;
            };
            /**
             * @deprecated
             * @description Each occurrence of the bill is numbered incrementally based on the sequence type defined in Company Setup - Document Sequence.
             * @example AP-ADJ
             */
            billNumber?: string;
            /**
             * @description Specify the initial value for the bill number, which will be incremented for each bill based on the sequence type defined in Company Setup - Document Sequence. For example, if you specify AP-ADJ in this field, the number for each recurring bill will start with AP-ADJ and will be incremented based on the sequence type. For example, AP-ADJ001, APAP-ADJ002, APAP-ADJ003, etc.
             * @example AP-ADJ
             */
            billSequenceNumber?: string;
            /**
             * Format: decimal-precision-2
             * @description Total amount of the recurring bill.
             * @example 100
             */
            readonly totalEntered?: string;
            /**
             * Format: decimal-precision-2
             * @description Total transaction amount.
             * @example 100
             */
            readonly txnTotalEntered?: string;
            /** @description Currency details for this recurring bill. */
            currency?: {
                /**
                 * @description Base currency for the company.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * @description The transaction currency to use for the recurring bill. If this currency is different from the base currency, provide an exchange rate.
                 * @example USD
                 */
                txnCurrency?: string;
                /**
                 * exchangeRate
                 * @description Exchange rate information for the recurring bill.
                 */
                exchangeRate?: {
                    /**
                     * Format: date
                     * @description Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                     * @example 2025-01-23
                     */
                    date?: string | null;
                    /**
                     * @description Exchange rate used to calculate the base amount from the transaction amount.
                     * @example 1.0789
                     */
                    rate?: number | null;
                    /**
                     * @description Exchange rate type used to calculate the base amount from the transaction amount.
                     * @example 1
                     */
                    typeId?: string | null;
                };
            };
            /**
             * @description Set to `true` if bill amounts already include taxes.
             * @default false
             * @example false
             */
            isTaxInclusive?: boolean;
            /** @description Supporting document attached to the bill. */
            attachment?: {
                /**
                 * @description System-assigned key for the supporting document.
                 * @example 18
                 */
                key?: string | null;
                /**
                 * @description System-assigned ID for the supporting document.
                 * @example 18
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/18
                 */
                readonly href?: string;
            };
            /** @description Tax solution details for the bill. */
            taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 4
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the tax solution.
                 * @example Australia GST
                 */
                id?: string | null;
                /**
                 * @description If set to `true`, enables multiple taxes per line to be shown.
                 * @example true
                 */
                readonly showMultiLineTax?: string | null;
                /**
                 * @description Tax method used for the bill.
                 * @example VAT
                 */
                readonly method?: string | null;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/4
                 */
                readonly href?: string;
            };
            /** @description Contacts for the recurring bill. */
            contacts?: {
                /**
                 * payTo
                 * @description The vendor contact to be paid.
                 */
                payTo?: {
                    /**
                     * @description Unique key for the contact.
                     * @example 916
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the contact.
                     * @example Power Aerospace Materials(C1)
                     */
                    id?: string;
                    /**
                     * tax
                     * @description Tax related information for the pay-to contact.
                     */
                    readonly tax?: {
                        /**
                         * @description Tax identification number.
                         * @example 252-85-7897
                         */
                        taxId?: string | null;
                        /** @description Contact tax group associated with the pay-to contact. */
                        group?: {
                            /**
                             * @description Unique key for the group.
                             * @example 288
                             */
                            key?: string | null;
                            /**
                             * @description Unique ID for the group.
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
                     * @example /objects/company-config/contact/916
                     */
                    readonly href?: string;
                };
                /**
                 * returnTo
                 * @description The vendor contact for return of the purchase.
                 */
                returnTo?: {
                    /**
                     * @description Unique key for the contact.
                     * @example 341
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the contact.
                     * @example Power Aerospace Materials(C1)
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/341
                     */
                    readonly href?: string;
                };
            };
            /** @description Defines the scheduling details for the recurring bill, including start date, frequency, next execution date, and end conditions. The schedule provides a comprehensive view of when and how often the recurring bill will be generated. */
            schedule?: {
                /**
                 * Format: date
                 * @description Specifies the initial date for generating the recurring bill. This date remains editable until the first bill is processed.
                 * @example 2025-01-01
                 */
                startDate?: string;
                /**
                 * Format: date
                 * @description Specify the end date for generating the recurring bill. A repeatCount can be specified instead of an endDate, but not both.
                 * @example 2026-01-01
                 */
                endDate?: string;
                /**
                 * Format: date
                 * @description Shows the next date for the scheduled execution of the recurring bill.
                 * @example 2025-02-01
                 */
                readonly nextExecutionDate?: string;
                /**
                 * Format: date
                 * @description Shows the last date for the scheduled execution of the recurring bill.
                 * @example 2025-12-01
                 */
                readonly lastExecutionDate?: string;
                /**
                 * @description Shows the result of the last execution attempt for the recurring bill, such as Success or Failed.
                 * @example success
                 * @enum {string|null}
                 */
                readonly lastExecutionStatus?: null | "inTransit" | "scheduleError" | "failed" | "success";
                /**
                 * Format: date
                 * @description Shows the recurring due date for the scheduled execution of the recurring bill.
                 * @example 2025-06-01
                 */
                readonly recurringDueDate?: string;
                /**
                 * @description Shows the number of attempts to generate the recurring bill. This value reflects the number of times the system has tried to create the bill, which may differ from the number of successful transactions due to potential errors during execution.
                 * @example 100
                 */
                readonly executionCount?: string;
                /**
                 * @description Specifies the number of times the recurring bill should be generated. Either this field or the `endDate` field must be specified to define the end condition for the recurring bill, not both.
                 * @example 50
                 */
                repeatCount?: string;
                /**
                 * @description Specifies the regular interval at which the recurring bill should repeat. This field works in conjunction with the `repeatInterval` field, where you specify the number of intervals. For example, if you set `repeatBy` to `months` and set the `repeatInterval` to `3`, the schedule will run every 3 months.
                 * @default days
                 * @example days
                 * @enum {string}
                 */
                repeatBy?: "none" | "days" | "weeks" | "months" | "years" | "endOfMonth";
                /**
                 * @description Specifies the interval at which the bill repeats. This field works in conjunction with the `repeatBy` field, where you specify the regular interval at which the recurring bill should repeat. For example, if you set `repeatBy` to `months` and set the `repeatInterval` to `3`, the schedule will run every 3 months.
                 * @default 1
                 * @example 1
                 */
                repeatInterval?: string;
                /**
                 * @description Comma separated email addresses to which schedule notifications are sent in case of failures.
                 * @example joe.smith@mycompany.com
                 */
                emailNotifications?: string | null;
            };
            /** @description Recurring schedule used to automate the billing process. */
            readonly recurringSchedule?: {
                /**
                 * @description Unique key for the recurring schedule.
                 * @example 20
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the recurring schedule.
                 * @example 20
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the recurring schedule.
                 * @example /objects/core/schedule/20
                 */
                readonly href?: string;
            };
            /** @description Payment terms, which are used to calculate due date, discounts, and penalties associated with this bill. */
            term?: {
                /**
                 * @description Unique key for the payment term.
                 * @example 3
                 */
                key?: string | null;
                /**
                 * @description Name or other unique identifier for the payment term.
                 * @example N15
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the payment term.
                 * @example /objects/accounts-payable/term/3
                 */
                readonly href?: string;
            };
            /** @description Vendor associated with the recurring bill. */
            vendor?: {
                /**
                 * @description Unique ID for the vendor.
                 * @example Vendor_01
                 */
                id?: string;
                /**
                 * @description Unique key for the vendor.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description Name of the vendor.
                 * @example Logic Solutions
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/15
                 */
                readonly href?: string;
            };
            /** @description Line items of the recurring bill. */
            lines?: components["schemas"]["objects.accounts-payable.recurring-bill-line"][];
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
        "accounts-payable-recurring-billRequiredProperties": {
            vendor?: Record<string, never>;
            schedule?: Record<string, never>;
            currency?: Record<string, never>;
            term?: Record<string, never>;
            lines?: unknown[];
        };
        /** @description Line items in a recurring bill represent transactions captured in that recurring bill. */
        "objects.accounts-payable.recurring-bill-line": {
            /**
             * @description System-assigned key for the line item.
             * @example 34
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the line item. This value is the same as the `key` for this object.
             * @example 34
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the line item.
             * @example /objects/accounts-payable/recurring-bill-line/34
             */
            readonly href?: string;
            /**
             * @description Memo that appears on the check stub and provides information about the line item.
             * @example Service charges
             */
            memo?: string | null;
            /**
             * Format: decimal-precision-2
             * @description For multi-currency companies, the transaction amount in the base currency.
             * @example 100
             */
            readonly baseAmount?: string;
            /**
             * @description Line number of the line item.
             * @example 15
             */
            readonly lineNumber?: number;
            /**
             * @description Set to `true` to add the line item amount to the vendor 1099 form.
             * @example false
             */
            hasForm1099?: string;
            /** @description Details related to the 1099 form for the line item. */
            form1099?: {
                /**
                 * @description Type of 1099 form.
                 * @example NEC
                 */
                type?: string | null;
                /**
                 * @description Box number for form 1099.
                 * @example 15A
                 */
                box?: string | null;
            };
            /**
             * Format: decimal-precision-2
             * @description Amount of the line item in the transaction currency.
             * @example 100
             */
            txnAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description For tax inclusive recurring bills, total transaction amount.
             * @example 112.00
             */
            totalTxnAmount?: string;
            /**
             * @description Set to `true` if the line item will be billed to the customer.
             * @default false
             * @example true
             */
            isBillable?: boolean;
            /** @description GL account associated with the line item. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 220
                 */
                key?: string;
                /**
                 * @description Unique ID for the GL account.
                 * @example 1501.04
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
            /** @description Currency details for the recurring bill line. */
            currency?: {
                /**
                 * @description Base currency for the company.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * @description Transaction currency for the recurring bill.
                 * @example USD
                 */
                txnCurrency?: string;
                /**
                 * exchangeRate
                 * @description For multi-currency companies, the exchange rate for this line item.
                 */
                exchangeRate?: {
                    /**
                     * Format: date
                     * @description Exchange rate date for the transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                     * @example 2024-01-23
                     */
                    date?: string;
                    /**
                     * @description Exchange rate to use.
                     * @example 1.0789
                     */
                    rate?: number;
                    /**
                     * @description Exchange rate type to use, such as the Intacct Daily Rate.
                     * @example INR-Rate
                     */
                    typeId?: string;
                };
            };
            /** @description Transaction allocation template for the line item, which distributes the bill amount across specified dimensions. When creating a recurring bill line, you must include either an `allocation` in the request, or `dimensions`. */
            allocation?: {
                /**
                 * @description Unique key for the allocation template.
                 * @example 16
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the allocation template.
                 * @example 16
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the allocation template.
                 * @example /objects/general-ledger/txn-allocation-template/16
                 */
                readonly href?: string;
                /**
                 * @description Name of the allocation.
                 * @example Alloc1-WBS-US
                 */
                readonly name?: string | null;
            };
            /** @description Label of the AP account to assign the expense to. */
            accountLabel?: {
                /**
                 * @description Unique key for the account label.
                 * @example 14
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the account label.
                 * @example Accounting Fees
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the account label.
                 * @example /objects/accounts-payable/account-label/14
                 */
                readonly href?: string;
            };
            /** @description Dimensions associated with the line item. When creating a recurring bill line, you must include either an `allocation` in the request, or `dimensions`. A `location` is required if you include dimensions in the request. */
            dimensions?: components["schemas"]["dimension-ref"] & {
                /** @description Department to assign the expense to. */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 21
                     */
                    key?: string | null;
                    /**
                     * @description Unique ID for the department.
                     * @example 21
                     */
                    id?: string | null;
                    /**
                     * @description The name of the department.
                     * @example Accounting
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/21
                     */
                    readonly href?: string;
                };
                /** @description Location to assign the expense to. */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 9
                     */
                    key?: string | null;
                    /**
                     * @description Unique ID for the location.
                     * @example 9
                     */
                    id?: string | null;
                    /**
                     * @description Name of the location.
                     * @example India
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint of the location.
                     * @example /objects/company-config/location/9
                     */
                    readonly href?: string;
                };
            };
            /** @description An alternative account to override the default GL account for the bill. */
            overrideOffsetGLAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 384
                 */
                key?: string;
                /**
                 * @description Unique ID for the GL account.
                 * @example 1234.36
                 */
                id?: string;
                /**
                 * @description Name of the GL account.
                 * @example AP ACCOUNT
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/384
                 */
                readonly href?: string;
            };
            /** @description For companies subscribed to the Taxes application, tax entries for the recurring bill line. */
            taxEntries?: components["schemas"]["objects.accounts-payable.recurring-bill-tax-entry"][];
            /** @description Header level details for the recurring bill's line entries. */
            readonly recurringBill?: {
                /**
                 * @description Unique ID for the recurring bill.
                 * @example 199
                 */
                id?: string;
                /**
                 * @description Unique key for the recurring bill.
                 * @example 199
                 */
                key?: string;
                /**
                 * @description URL endpoint for the recurring bill.
                 * @example /objects/accounts-payable/recurring-bill/199
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "accounts-payable-recurring-bill-lineRequiredProperties": Record<string, never> | {
            dimensions: Record<string, never>;
        };
        /** @description Tax entries for an AP recurring bill line. */
        "objects.accounts-payable.recurring-bill-tax-entry": {
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
            /** @description Purchasing entry tax details describe a specific type of tax that applies to lines in Accounts Payable transactions. */
            purchasingTaxDetail?: {
                /**
                 * @description System-assigned key for the tax detail object.
                 * @example 19
                 */
                key?: string;
                /**
                 * @description Unique ID for the tax detail object.
                 * @example Alaska Tax Detail
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax detail object.
                 * @example /objects/tax/purchasing-tax-detail/19
                 */
                readonly href?: string;
            };
            /**
             * recurring-bill-line
             * @description The recurring bill line associated with the tax entries.
             */
            readonly recurringBillLine?: {
                /**
                 * @description Unique ID for the recurring bill line.
                 * @example 100
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the recurring bill line.
                 * @example 100
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the recurring bill line.
                 * @example /objects/accounts-payable/recurring-bill-line/100
                 */
                readonly href?: string;
            };
        };
        /** @description Summaries are collections of the same types of transactions grouped together for processing. */
        "objects.accounts-payable.summary": {
            /**
             * @description System-assigned key for the summary.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the summary.
             * @example 12
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the summary.
             * @example /objects/accounts-payable/summary/12
             */
            readonly href?: string;
            /**
             * @description Name for the AP summary. The system uses this name to identify the summary throughout the Accounts Payable application.
             * @example Jan 2024 Bill Summary
             */
            name?: string;
            /**
             * @description If set to 'manual', then the summary was created by a user and if set to 'system', then the summary was created by Sage Intacct based on the summary frequency.
             * @default manual
             * @example manual
             * @enum {string}
             */
            readonly summaryCreationType?: "system" | "manual";
            /**
             * Format: date
             * @description The date that items in the summary should post to the general ledger.
             * @example 2024-06-02
             */
            glPostingDate?: string;
            /**
             * @description Record type for AP summary
             * @default apBill
             * @example apBill
             * @enum {string}
             */
            summaryType?: "apAdjustment" | "apBill" | "apManualPayment";
            /**
             * Format: decimal-precision-2
             * @description Total amount of all transactions contained in the summary.
             * @example 7000.22
             */
            readonly totalAmount?: string;
            /**
             * @description State of the summary, which can be `open` or `closed`. An open summary can have items added to it.
             * @default open
             * @example open
             * @enum {string}
             */
            readonly state?: "open" | "closed";
            /** @description Parent summary */
            parent?: {
                /**
                 * @description System-assigned key for the parent summary.
                 * @example 23
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the parent summary.
                 * @example 23
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the parent summary.
                 * @example /objects/accounts-payable/summary/23
                 */
                readonly href?: string;
            };
            /**
             * @description Set to 'true' to prevent summary items from posting to the general ledger.
             * @example false
             */
            readonly preventGLPosting?: boolean;
            /**
             * @description Set to 'true' for manual and quick payment summary types. Set to 'false' for bill and adjustment summary types.
             * @default false
             * @example false
             */
            isQuickPaymentSummary?: boolean;
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        "accounts-payable-summaryRequiredProperties": Record<string, never>;
        /** @description An Accounts Payable (AP) term is a rule that a vendor establishes for extending credit to your company. */
        "objects.accounts-payable.term": {
            /**
             * @description System-assigned key for the AP term.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the AP term.
             * @example Net 60
             */
            id?: string;
            /**
             * @description Endpoint for the AP term.
             * @example /objects/accounts-payable/term/6
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            /**
             * @description A note about the purpose and use of the AP term.
             * @example 60 Days term
             */
            description?: string;
            audit?: components["schemas"]["audit.s1"];
            /** @description Define the calculation for the due date by specifying the number of days and either the date or month to reference. */
            due?: {
                /**
                 * @description The number of days used to calculate the due date.
                 * @example 60
                 */
                days?: number;
                /**
                 * @description The date or month to reference to calculate the due date.
                 * @default null
                 * @example fromBillDate
                 * @enum {string|null}
                 */
                from?: null | "fromBillDate" | "ofTheMonthOfBillDate" | "ofNextMonthFromBillDate" | "of2ndMonthFromBillDate" | "of3rdMonthFromBillDate" | "of4thMonthFromBillDate" | "of5thMonthFromBillDate" | "of6thMonthFromBillDate" | "afterEndOfMonthOfBillDate" | "fromBillDateExtendingToEom";
            };
            /** @description Terms of the discount extended by the vendor. */
            discount?: {
                /**
                 * @description Number of days from the specified date that the discount is valid.
                 * @example 30
                 */
                days?: number;
                /**
                 * Format: decimal-precision-2
                 * @description Amount of the discount.
                 * @example 4
                 */
                amount?: string;
                /**
                 * @description Date used to determine if the discount is valid.
                 * @default null
                 * @example fromBillDate
                 * @enum {string|null}
                 */
                from?: null | "fromBillDate" | "ofTheMonthOfBillDate" | "ofNextMonthFromBillDate" | "of2ndMonthFromBillDate" | "of3rdMonthFromBillDate" | "of4thMonthFromBillDate" | "of5thMonthFromBillDate" | "of6thMonthFromBillDate" | "afterEndOfMonthOfBillDate" | "fromBillDateExtendingToEom";
                /**
                 * @description Type of discount.
                 * @default null
                 * @example amount
                 * @enum {string|null}
                 */
                unit?: null | "amount" | "percentage";
                /**
                 * @description Number of days before the vendor withdraws the discount.
                 * @example 6
                 */
                graceDays?: number;
                /**
                 * @description The total to use when calculating the discount.
                 * @default null
                 * @example billTotal
                 * @enum {string|null}
                 */
                calculateOn?: null | "lineItemsTotal" | "billTotal";
            };
            /** @description Penalty for paying after the due date. */
            penalty?: {
                /**
                 * @description The time span in which the penalty accrues.
                 * @default null
                 * @example daily
                 * @enum {string|null}
                 */
                cycle?: null | "noPenalty" | "daily" | "weekly" | "biweekly" | "monthly" | "bimonthly" | "quarterly" | "halfYearly" | "annually";
                /**
                 * Format: decimal-precision-2
                 * @description The penalty amount.
                 * @example 10
                 */
                amount?: string;
                /**
                 * @description Type of penalty.
                 * @default null
                 * @example amount
                 * @enum {string|null}
                 */
                unit?: null | "amount" | "percentage";
                /**
                 * @description The number of days after the due date that the vendor applies the penalty.
                 * @example 1
                 */
                graceDays?: number;
            };
        };
        "accounts-payable-termRequiredProperties": Record<string, never>;
        /** @description Use a check run to process up to 1,000 checks at a time in an offline process. */
        "objects.accounts-payable.check-run": {
            /**
             * @description System-assigned unique key for the check run.
             * @example 28
             */
            readonly key?: string;
            /**
             * @description Unique ID for the check run. This value is the same as the `key` for this object.
             * @example 28
             */
            readonly id?: string;
            /**
             * @description Name of the check run.
             * @example All Checks For Mar 2025
             */
            title?: string;
            /**
             * @description URL endpoint for the check run.
             * @example /objects/accounts-payable/check-run/28
             */
            readonly href?: string;
            /**
             * @description Sort order for the list of checks included in the check run.
             * @default [
             *       "Check",
             *       "Vendor",
             *       "Entity"
             *     ]
             * @example [
             *       "Check",
             *       "Vendor",
             *       "Entity"
             *     ]
             */
            sortOrder?: string[];
            /**
             * @description Number of checks to be printed per page.
             * @default 1
             * @example 1
             * @enum {string}
             */
            checksPerPage?: "1" | "3";
            /**
             * @description Indicates whether to add transaction details, such as bills or expenses paid with the check, to the check stub for your records.
             * @default false
             * @example true
             */
            printCheckStubDetail?: boolean;
            /**
             * @description Indicates whether to add transaction details, such as bills or expenses paid with the check, to the check stub for the vendor records.
             * @default false
             * @example true
             */
            printVendorStubDetail?: boolean;
            /**
             * @description Check stock used for printing. With the `blankCheckStockMicr` (blank check stock with MICR) option, checks can be printed from more that one checking account. With the `prePrintedCheckStock` (preprinted check stock) option, checks are printed from a single checking account.
             * @default blankCheckStockMicr
             * @example blankCheckStockMicr
             * @enum {string}
             */
            checkStock?: "blankCheckStockMicr" | "prePrintedCheckStock";
            /** @description Checking account associated with the check run, which is required when the `blankCheckStockMicr` option is set for the `checkStock` field. */
            checkingAccount?: {
                /**
                 * @description URL endpoint for the checking account.
                 * @example /objects/cash-management/bank-account/12
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the checking account.
                 * @example 12
                 */
                readonly key?: string;
                /**
                 * @description Checking account ID.
                 * @example CITI
                 */
                id?: string;
            };
            /**
             * Format: date
             * @description Date that the check run was created.
             * @example 2025-01-04
             */
            readonly whenCreated?: string;
            status?: components["schemas"]["status"];
        };
        "accounts-payable-check-runRequiredProperties": Record<string, never>;
        /** @description Vendors */
        "objects.accounts-payable.vendor": {
            /**
             * @description System-assigned unique key for the vendor.
             * @example 518
             */
            readonly key?: string;
            /**
             * @description Unique ID for the vendor. You must specify a unique vendor ID when creating a vendor unless document sequencing is configured, in which case the ID is auto-generated.
             * @example V-00014
             */
            id?: string;
            /**
             * @description Name of the vendor as it will appear on lists and menus across your company.
             * @example NCS, Inc.
             */
            name?: string;
            /**
             * @description Set to `true` if this is a one-time or occasional use vendor that you do not want to include in standard vendor lists.
             * @default false
             * @example true
             */
            isOneTimeUse?: boolean;
            /**
             * @description URL endpoint for the vendor.
             * @example /objects/accounts-payable/vendor/518
             */
            readonly href?: string;
            status?: components["schemas"]["dimension-status"];
            /**
             * @description Approval state when vendor approval is enabled.
             *     * `s` - submitted - The vendor record is new or was updated and is now awaiting approval. Accounts Payable and Purchasing transactions for the vendor can be saved as drafts but cannot be posted.
             *     * `a` - approved - The vendor has been approved. You can post Accounts Payable and Purchasing transactions for the vendor.
             *     * `r` - declined - The vendor was declined during the approval process. Until the vendor is approved, you cannot post Accounts Payable or Purchasing transactions for the vendor.
             * @default a
             * @example s
             * @enum {string}
             */
            state?: "s" | "a" | "r";
            /**
             * @description Indicates whether the vendor is autogenerated.
             * @default false
             * @example true
             */
            readonly isSystemGenerated?: boolean;
            /** @description The customer associated with the vendor, if any. Used to link the vendor to a customer record in the Accounts Receivable module. */
            readonly customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 12345
                 */
                readonly key?: string | null;
                /**
                 * @description Unique ID for the customer.
                 * @example C-00014
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/12345
                 */
                readonly href?: string;
            };
            /** @description The employee associated with the vendor, if any. */
            readonly employee?: {
                /**
                 * @description Unique key for the employee.
                 * @example 12
                 */
                readonly key?: string | null;
                /**
                 * @description Unique ID for the employee.
                 * @example E-00014
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/12
                 */
                readonly href?: string;
            };
            /** @description Optional vendor type, which is a category of vendors used for reporting purposes. Valid values include any vendor type ID defined by the company. */
            vendorType?: {
                /**
                 * @description Unique key for the vendor type.
                 * @example 12
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the vendor type.
                 * @example Wholesaler
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the vendor type.
                 * @example /objects/accounts-payable/vendor-type/12
                 */
                readonly href?: string;
            };
            /** @description If the vendor is a subsidiary of another vendor, parent vendor of the subsidiary vendor. */
            parent?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 500
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the vendor.
                 * @example 202
                 */
                id?: string | null;
                /**
                 * @description Name of the vendor.
                 * @example Pac Bell
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/500
                 */
                readonly href?: string;
            };
            /** @description General Ledger (GL) account group that the vendor is part of. */
            accountGroup?: {
                /**
                 * @description Unique key for the vendor account group.
                 * @example 8
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the vendor account group.
                 * @example OR151
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the vendor account group.
                 * @example /objects/purchasing/vendor-gl-group/8
                 */
                readonly href?: string;
            };
            /**
             * @deprecated
             * @description This field has been deprecated; use accountLabel instead.
             */
            accountlabel?: {
                /**
                 * @deprecated
                 * @description Unique key for the account label.
                 * @example 10
                 */
                key?: string | null;
                /**
                 * @deprecated
                 * @description Name or other unique ID for the account label.
                 * @example Equipment
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the account label.
                 * @example /objects/accounts-payable/account-label/10
                 */
                readonly href?: string;
            };
            /** @description AP account label associated with the vendor. */
            accountLabel?: {
                /**
                 * @description Unique key for the account label.
                 * @example 10
                 */
                key?: string | null;
                /**
                 * @description Name or other unique ID for the account label.
                 * @example Equipment
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the account label.
                 * @example /objects/accounts-payable/account-label/10
                 */
                readonly href?: string;
            };
            /**
             * @description Lead time default (days) for inventory replenishment. This field applies only if replenishment is enabled on the Configure Inventory Control page in Sage Intacct.
             * @example 5
             */
            defaultLeadTime?: number | null;
            /**
             * @description File payment service type.
             * @default none
             * @example bankFile
             * @enum {string}
             */
            filePaymentService?: "ach" | "bankFile" | "none";
            /** @description Required when `filePaymentService` is set to `bankFile`. */
            bankFiles?: {
                /**
                 * @description Bank file payment country code.
                 * @example gb
                 */
                paymentCountryCode?: (string & components["schemas"]["country-code"]) | null;
                /**
                 * @description Bank file payment currency.
                 * @example EUR
                 */
                paymentCurrency?: string;
            };
            /**
             * @description The tax identification number for the vendor.
             * @example 192354308
             */
            taxId?: string | null;
            /** @description Tax payments annual report settings for Australian companies and entities. */
            tpar?: {
                /**
                 * @description Set to `true` to include vendor payments in the Taxable payments annual report (TPAR).
                 * @default false
                 * @example false
                 */
                isTparEnabled?: boolean;
                /**
                 * @description To report vendor payments using a name other than the print as name, specify that name in this field.
                 * @example TPAR 1
                 */
                name?: string;
            };
            /** @description T5018 report settings for Canadian companies and entities. */
            t5018?: {
                /**
                 * @description Set to `true` to include vendor payments in the T5018 report.
                 * @default false
                 * @example false
                 */
                isT5018Enabled?: boolean;
                /**
                 * @description T5018 Business/SIN number.
                 * @example 123456789
                 */
                t5018Number?: string;
            };
            form1099?: {
                /**
                 * @description Set to `true` if the vendor is 1099 eligible.
                 * @default false
                 * @example true
                 */
                is1099Eligible?: boolean;
                /**
                 * @description Vendor name as it should appear on 1099 forms.
                 * @example NCS
                 */
                nameOn1099?: string | null;
                /**
                 * @description Type of 1099 form for the vendor.
                 * @example MISC
                 */
                type?: string | null;
                /**
                 * @description Box number for form 1099.
                 * @example 3
                 */
                box?: string | null;
            };
            /** @description Supporting document for the vendor. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 21
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the attachment.
                 * @example Sales01
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/21
                 */
                readonly href?: string;
            };
            /**
             * @description Set to `true` to prevent anyone from entering transactions against the vendor.
             * @default false
             * @example true
             */
            isOnHold?: boolean;
            /**
             * @description Set to `true` to prevent anyone from paying bills from the vendor.
             * @default false
             * @example true
             */
            doNotPay?: boolean;
            /**
             * @description If automated transaction matching for Purchasing workflows is enabled, set this field to `true` to have Sage Intacct create all future transactions for a vendor as AP bills.
             * @default false
             * @example true
             */
            alwaysCreateBill?: boolean;
            /**
             * @description Amount of credit extended by the vendor.
             * @example 10000
             */
            creditLimit?: number;
            /**
             * @description The percentage of retainage to withhold for the vendor. (For Construction subscriptions only.)
             * @example 20
             */
            retainagePercentage?: number | null;
            /**
             * @description Specifies whether the vendor is an individual person. If set to true, personal identifying information (PII) is masked for security purposes when using Vendor Payments powered by CSI.
             * @default false
             * @example false
             */
            isIndividualPerson?: boolean;
            /**
             * @description Notes or comments about the vendor.
             * @example Make sure to include on form 1099.
             */
            notes?: string | null;
            /** @description Price list for the vendor. */
            priceList?: {
                /**
                 * @description Unique key for the price list.
                 * @example 13
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the price list.
                 * @example Acme Price List
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the price list.
                 * @example /objects/purchasing/price-list/13
                 */
                readonly href?: string;
            };
            /** @description Price schedule for the vendor. */
            priceSchedule?: {
                /**
                 * @description Unique key for the price schedule.
                 * @example 5
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the price schedule.
                 * @example PREF
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the price schedule.
                 * @example /objects/purchasing/price-schedule/5
                 */
                readonly href?: string;
            };
            /** @description Default override offset GL account for the vendor. */
            overrideOffsetGLAccount?: {
                /**
                 * @description Unique key for the account.
                 * @example 12
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the account.
                 * @example 1
                 */
                id?: string | null;
                /**
                 * @description Name of the account.
                 * @example Rent
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/12
                 */
                readonly href?: string;
            };
            /** @description Default GL expense account for bills for the vendor. */
            defaultExpenseGLAccount?: {
                /**
                 * @description Unique key for the account.
                 * @example 6
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the account.
                 * @example 1210
                 */
                id?: string | null;
                /**
                 * @description Name of the account.
                 * @example Equipment
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/6
                 */
                readonly href?: string;
            };
            /**
             * @description Discount percentage for the vendor. Specify the percentage as a whole number, for example, specify 10 for 10%.
             * @example 10
             */
            discountPercent?: number | null;
            contacts?: {
                /** @description Default contact for the vendor. Used as the default vendor in the vendor's contact list. */
                default?: components["schemas"]["contact-ref"] & {
                    /**
                     * @description Set to `true` to exclude the contact from the company contact list.
                     * @default false
                     * @example false
                     */
                    hideContactList?: boolean;
                    /**
                     * tax
                     * @description Tax information for the contact.
                     */
                    tax?: {
                        /**
                         * @description Defines whether the contact is taxable.
                         * @default false
                         * @example false
                         */
                        isTaxable?: boolean;
                        /** @description Tax group for the contact. */
                        group?: {
                            /**
                             * @description Unique key for the tax group.
                             * @example 6
                             */
                            key?: string;
                            /**
                             * @description Unique ID for the tax group.
                             * @example New York
                             */
                            id?: string;
                            /**
                             * @description URL endpoint for the tax group.
                             * @example /objects/tax/contact-tax-group/6
                             */
                            readonly href?: string;
                        };
                    };
                    /** @description For businesses operating in France, the following fields are required to comply with local electronic invoicing regulations. */
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
                };
                /**
                 * @description Primary contact for the vendor.
                 *     The primary contact is the default contact for all transactions if no other contacts are defined.
                 */
                primary?: {
                    /**
                     * @description Unique key for the contact.
                     * @example 7
                     */
                    key?: string | null;
                    /**
                     * @description Name of the contact.
                     * @example Jeff Pinkerton
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/7
                     */
                    readonly href?: string;
                };
                /** @description Default contact when paying by check or creating bills. This contact is required for calculating tax for purchasing. */
                payTo?: {
                    /**
                     * @description Unique key for the contact.
                     * @example 2
                     */
                    key?: string | null;
                    /**
                     * @description Name of the contact.
                     * @example Klay Vanderbilt
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/2
                     */
                    readonly href?: string;
                };
                /** @description Default contact for purchasing transactions and for the return of purchases from purchasing transactions. */
                returnTo?: {
                    /**
                     * @description Unique key for the contact.
                     * @example 5
                     */
                    key?: string | null;
                    /**
                     * @description Name of the contact.
                     * @example Yusuf Pringle
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/5
                     */
                    readonly href?: string;
                };
                /** @description Default contact for all 1099 tax transactions and documents. */
                recipient1099?: {
                    /**
                     * @description Unique key for the contact.
                     * @example 9
                     */
                    key?: string | null;
                    /**
                     * @description Name of the contact.
                     * @example Herb Culver
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/9
                     */
                    readonly href?: string;
                };
            };
            /** @description Contact list for the vendor. */
            contactList?: components["schemas"]["objects.accounts-payable.vendor-contact"][];
            /** @description Templates used to automate standard messages sent to multiple vendors. */
            vendorEmailTemplates?: components["schemas"]["objects.accounts-payable.vendor-email-template"][] | null;
            /** @description Payment providers for the vendor. */
            vendorPaymentProviders?: components["schemas"]["objects.accounts-payable.vendor-payment-provider"][];
            /** @description Enable electronic payments to be made to vendors using a local bank file format. */
            vendorBankFileSetup?: components["schemas"]["objects.accounts-payable.vendor-bank-file-setup"][];
            /** @description In a multi-entity company, the vendor account number associated with entity locations. */
            vendorAccountNumberList?: components["schemas"]["objects.accounts-payable.vendor-account-number"][];
            /**
             * @description Preferred payment method when you select a bill to pay for the vendor.
             * @default null
             * @example EFT
             * @enum {string|null}
             */
            preferredPaymentMethod?: "printedCheck" | "chargeCard" | "EFT" | "cash" | "ACH" | "wellsFargoCheck" | "wellsFargoUSDWire" | "wellsFargoDomesticACH" | null;
            /**
             * @description If `true`, merge multiple selected bills into one payment request for the vendor. If `false`, have one payment request created for each bill.
             * @default true
             * @example true
             */
            mergePaymentRequests?: boolean;
            /**
             * @description If `true`, automatically send payment notifications to the email address for the `payTo` contact.
             * @default false
             * @example true
             */
            sendPaymentNotification?: boolean;
            /**
             * @description Billing type to use on vendor statements.
             *     - `openItem` - Shows all bills, adjustments, and payments as line items on a statements.
             *     - `balanceForward` - Consolidates previous months bills, adjustments, and payments to a single line item.
             * @default null
             * @example openItem
             * @enum {string|null}
             */
            billingType?: null | "openItem" | "balanceForward";
            /**
             * @description Optional default payment priority to assign new bills from the vendor.
             * @default null
             * @example low
             * @enum {string|null}
             */
            paymentPriority?: null | "urgent" | "high" | "normal" | "low";
            /**
             * @description Default currency.
             * @example USD
             */
            currency?: string | null;
            /**
             * @description If `true`, include any associated term discount on check stubs.
             * @default true
             * @example true
             */
            displayTermDiscountOnCheckStub?: boolean;
            /** @description AP term or rules the vendor has established for extending credit to you. */
            term?: {
                /**
                 * @description Unique key for the AP term.
                 * @example 7
                 */
                key?: string | null;
                /**
                 * @description Name of the AP term.
                 * @example Net 30
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the AP term.
                 * @example /objects/accounts-payable/term/7
                 */
                readonly href?: string;
            };
            billPayment?: {
                /**
                 * @description The Default bill payment date defines how the Recommended to pay on date is calculated for vendor bills. * `none`- Leaves the default unset, which allows you to choose the value from a different date field. * `dueDate` - Calculates the due date based on the selected `term`, then adjusts based on the number of days specified as an offset. * `billDate` - Uses the date entered for the bill, adjusted for the number of days specified as an offset. Does not require that a `term` be defined. * `discountDate` - Uses the discount details in the specified `term` to calculate the discount date. No offset is used.
                 * @default null
                 * @example none
                 * @enum {string|null}
                 */
                defaultDateOptions?: "none" | "dueDate" | "billDate" | "discountDate" | null;
                /**
                 * @description Specify whether to add (`+`) or subtract (`-`) days for the offset.
                 * @example +
                 * @enum {string|null}
                 */
                offsetTypePlusMinus?: "+" | "-" | null;
                /**
                 * @description The number of days to use as an offset from the default payment due date.
                 * @example 5
                 */
                dueNumberOfDays?: number | null;
                /**
                 * @description The number of days to use as an offset from the default payment bill date.
                 * @example 10
                 */
                billNumberOfDays?: number | null;
            };
            /**
             * @description The account number that the vendor has assigned to the company or the top level of a multi-entity company. Account numbers help match payment information to bills being paid.
             * @example 203
             */
            vendorAccountNumber?: string | null;
            /**
             * @description Set to `true` to display the vendor-assigned account number, per entity, on check stubs.
             * @default false
             * @example false
             */
            displayVendorAccountOnCheckStub?: boolean;
            /**
             * Format: decimal-precision-2
             * @description Total amount due.
             * @example 100.00
             */
            readonly totalDue?: string;
            /**
             * Format: date
             * @description Date the last bill was created.
             * @example 2022-07-31
             */
            readonly lastBillCreatedDate?: string | null;
            /**
             * Format: date
             * @description Date the last payment was made.
             * @example 2002-08-31
             */
            readonly lastPaymentMadeDate?: string | null;
            ach?: {
                /**
                 * @description Set to `true` to enable ACH payments for the vendor.
                 * @default false
                 * @example false
                 */
                enablePayments?: boolean;
                /**
                 * @description ACH routing number for the vendor.
                 * @example 061080227
                 */
                routingNumber?: string | null;
                /**
                 * @description ACH account number for the vendor.
                 * @example 7624832485
                 */
                accountNumber?: string | null;
                /**
                 * @description ACH account type for the vendor.
                 * @default null
                 * @example checkingAccount
                 * @enum {string|null}
                 */
                accountType?: null | "checkingAccount" | "savingsAccount";
                /**
                 * @description ACH account classification for the vendor. Specify the classification code that the related bank uses for ACH payments:
                 *     - `businessCTX` - Business account that is a Corporate Trade Exchange (CTX) account.
                 *     - `personalPPD` - An individual contractor's personal account.
                 *     - `businessCCD` - Business account that is a Cash Concentration or Disbursement (CCD) corporate account.
                 * @default null
                 * @example businessCTX
                 * @enum {string|null}
                 */
                remittanceType?: null | "businessCTX" | "personalPPD" | "businessCCD";
            };
            /**
             * @description Vendor visibility type.
             * @default unrestricted
             * @example restricted
             * @enum {string}
             */
            vendorRestriction?: "unrestricted" | "rootOnly" | "restricted";
            /** @description Restricted locations for the vendor. */
            restrictedLocations?: components["schemas"]["objects.accounts-payable.vendor-restricted-location"][];
            /** @description Restricted departments for the vendor. */
            restrictedDepartments?: components["schemas"]["objects.accounts-payable.vendor-restricted-department"][];
            audit?: components["schemas"]["audit.s1"];
            /** @description Record URL for the vendor. */
            readonly webURL?: string;
            entity?: components["schemas"]["entity-ref"];
        };
        "accounts-payable-vendorRequiredProperties": Record<string, never>;
        "accounts-payable-vendor-actions-approve-request": {
            /**
             * @description System-assigned key for the vendor.
             * @example 518
             */
            key?: string;
            /**
             * @description Notes or comments about this vendor.
             * @example Approved, ready for use
             */
            notes?: string;
        };
        "accounts-payable-vendor-actions-approve-response": {
            /** @example 518 */
            readonly key?: string;
            /** @example V-00014 */
            readonly id?: string;
            /** @example /objects/accounts-payable/vendor/518 */
            readonly href?: string;
            /**
             * @description Vendor state
             * @example approved
             * @enum {string}
             */
            readonly state?: "approved";
        };
        "accounts-payable-vendor-actions-decline-request": {
            /**
             * @description System-assigned key for the vendor.
             * @example 518
             */
            key?: string;
            /**
             * @description Notes or comments about this vendor.
             * @example Declined, missing information
             */
            notes?: string;
        };
        "accounts-payable-vendor-actions-decline-response": {
            /** @example 518 */
            readonly key?: string;
            /** @example V-00014 */
            readonly id?: string;
            /** @example /objects/accounts-payable/vendor/518 */
            readonly href?: string;
            /**
             * @description Vendor state
             * @example declined
             * @enum {string}
             */
            readonly state?: "declined";
        };
        /** @description In a multi-entity company, the vendor account number associated with each entity location, which helps match payments with bills being paid. */
        "objects.accounts-payable.vendor-account-number": {
            /**
             * @description System-assigned unique key for the vendor account number.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the vendor account number. This value is the same as the `key` value for this object.
             * @example 12
             */
            id?: string;
            /** @description Location associated with the entity. */
            location?: {
                /**
                 * @description Unique key for the location.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique ID for the location.
                 * @example 1
                 */
                id?: string;
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
            /**
             * @description Vendor account number for the associated entity.
             * @example VAN-5134986722
             */
            vendorAccountNumber?: string;
            /**
             * @description URL endpoint for the vendor account number.
             * @example /objects/accounts-payable/vendor-account-number/12
             */
            readonly href?: string;
            /** @description Vendor the account number is associated with. */
            vendor?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 9
                 */
                key?: string;
                /**
                 * @description Unique ID for the vendor.
                 * @example 9
                 */
                id?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/9
                 */
                readonly href?: string;
            };
        };
        "accounts-payable-vendor-account-numberRequiredProperties": Record<string, never>;
        /** @description A bank file enables electronic payments to be made to vendors using a local bank file format. Bank files are standard files used by banks to make multiple payments. */
        "objects.accounts-payable.vendor-bank-file-setup": {
            /**
             * @description System-assigned key for the vendor bank file setup.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description ID for the vendor bank file setup. This value is the same as the `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description Bank account number for the bank file payment.
             * @example IE26SCT666666
             */
            bankAccountNumber?: string;
            /**
             * @description Bank account name for the bank file payment.
             * @example Jane Blogs Corp.
             */
            bankAccountName?: string;
            /**
             * @description Six-digit number that identifies a particular branch of a bank. Supported countries - Australia (AU).
             * @example 047-359
             */
            bsbNumber?: string;
            /**
             * @description Six-digit sort code for the bank and branch where the account is held. Supported countries - United Kingdom (GB).
             * @example 204718
             */
            sortCode?: string;
            /**
             * @description Payment reference number to connect the bank file and the bills to be paid. Supported countries - Australia (AU) and South Africa (ZA).
             * @example EB32131016
             */
            paymentReference?: string;
            /**
             * @description Branch code for the vendor bank account to which payments are made. Supported countries - South Africa (ZA).
             * @example 213456
             */
            branchCode?: string;
            /**
             * @description Account type for the vendor bank account to which payments are made. Value must be 1, 2, 3, or 4. Supported countries - South Africa (ZA).
             * @example 4
             */
            bankAccountType?: string;
            /**
             * @description Account code for the vendor bank account to which payments are made.
             * @example 345624
             */
            bankAccountCode?: string;
            /**
             * @description Specify whether to print the proof of payment when the bank file payment batch is authorized. Supported countries - South Africa (ZA).
             * @example true
             */
            printPaymentProof?: string | null;
            /**
             * @description Creditor bank identifier code for the bank account. Supported countries - All European countries where Generic-SEPA file format is supported.
             * @example AIBKIE2D491
             */
            businessIdCode?: string;
            /**
             * @description Creditor code for the bank account. Supported countries - Canada (CA).
             * @example 1234567891234567
             */
            creditorCode?: string;
            /**
             * @description Bank number, as assigned by the account CAD financial institution.  Supported countries - Canada (CA).
             * @example 00710423598
             */
            secondaryIdentifier?: string;
            /**
             * @description (This field applies only to companies in the United States.) Specifies the account classification for ACH transactions.
             *     Use PPD (Prearranged Payment and Deposit) for transactions with individual or consumer accounts.
             *     Use CCD (Corporate Credit or Debit) for transactions with business or corporate accounts.
             * @default ccd
             * @example ccd
             * @enum {string|null}
             */
            accountClassification?: null | "ppd" | "ccd";
            /** @description The mailing address of the creditor bank. */
            creditorBankAddress?: {
                /**
                 * @description First address line for the bank.
                 * @example 36900 Neward Blvd
                 */
                addressLine1?: string;
                /**
                 * @description Second address line for the bank.
                 * @example Suite 100
                 */
                addressLine2?: string;
                /**
                 * @description Postal code for the bank.
                 * @example 94536
                 */
                postCode?: string;
                /**
                 * @description County for the bank.
                 * @example Alameda
                 */
                county?: string;
                /**
                 * @description Bank file payment country code.
                 * @example gb
                 */
                countryCode?: (string & components["schemas"]["country-code"]) | null;
            };
            /** @description Vendor associated with the bank file. */
            vendor?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 518
                 */
                key?: string;
                /**
                 * @description Unique ID for the vendor.
                 * @example V-00014
                 */
                id?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/518
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the vendor bank file setup.
             * @example /objects/accounts-payable/vendor-bank-file-setup/25
             */
            readonly href?: string;
        };
        /** @description Contact information for a vendor. */
        "objects.accounts-payable.vendor-contact": {
            /**
             * @description System-assigned unique key for the vendor contact.
             * @example 17
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the vendor contact. This value is the same as the `key` for this object.
             * @example 17
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the vendor contact.
             * @example /objects/accounts-payable/vendor-contact/17
             */
            readonly href?: string;
            /**
             * @description Category name for the vendor contact information, such as office, home, and so forth. Providing a category makes it easier to group, sort, and keep track of contacts.
             * @example Main Office
             */
            categoryName?: string;
            /** @description Contact to associate with the vendor. */
            contact?: {
                /**
                 * @description Unique key for the contact.
                 * @example 197
                 */
                key?: string;
                /**
                 * @description Name or other unique ID for the contact.
                 * @example Jeffrey Post
                 */
                id?: string;
                /**
                 * @description URL endpoint for the contact.
                 * @example /objects/company-config/contact/197
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            /** @description Vendor the contact is associated with. */
            vendor?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description Unique ID for the vendor.
                 * @example 15
                 */
                id?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/15
                 */
                readonly href?: string;
            };
        };
        "accounts-payable-vendor-contactRequiredProperties": {
            contact?: Record<string, never>;
            vendor?: Record<string, never>;
        };
        /** @description Vendor email templates can be used to automate standard messages sent to multiple vendors. */
        "objects.accounts-payable.vendor-email-template": {
            /**
             * @description System-assigned unique key for the vendor email template.
             * @example 10
             */
            readonly key?: string;
            /**
             * @description ID for the vendor email template. This value is the same as the `key` for this object.
             * @example 10
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the vendor email template.
             * @example /objects/accounts-payable/vendor-email-template/10
             */
            readonly href?: string;
            /** @description Vendor associated with this email template. */
            vendor?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 127
                 */
                key?: string;
                /**
                 * @description Unique ID for the vendor.
                 * @example 014
                 */
                id?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/127
                 */
                readonly href?: string;
            };
            /**
             * @description Type of transaction that will use the email template.
             * @example Vendor Invoice
             */
            txnDefinitionName?: string;
            /** @description Email template associated with the vendor. */
            emailTemplate?: {
                /**
                 * @description Unique key for the email template.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description Unique ID for the email template.
                 * @example 15
                 */
                id?: string;
                /**
                 * @description Name of the email template.
                 * @example Vendor Trial
                 */
                name?: string;
                /**
                 * @description URL endpoint for the email template.
                 * @example /objects/company-config/email-template/15
                 */
                readonly href?: string;
            };
        };
        "accounts-payable-vendor-email-templateRequiredProperties": Record<string, never>;
        /** @description Object that links a payment provider to a vendor. */
        "objects.accounts-payable.vendor-payment-provider": {
            /**
             * @description System-assigned key for the vendor payment provider.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the vendor payment provider.
             * @example 1
             */
            id?: string;
            /** @example /objects/accounts-payable/vendor-payment-provider/1 */
            readonly href?: string;
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
            vendor?: {
                /**
                 * @description System-assigned key for the vendor.
                 * @example 351
                 */
                key?: string;
                /**
                 * @description Unique identifier for the vendor.
                 * @example VEN016
                 */
                id?: string;
                /**
                 * @description Name of the vendor.
                 * @example AAA Consulting
                 */
                name?: string;
                /**
                 * @description URL of the vendor
                 * @example /objects/accounts-payable/vendor/351
                 */
                readonly href?: string;
            };
            /**
             * @description Subscription status provided by the payment provider.
             * @example requestInitiated
             * @enum {string}
             */
            readonly state?: "requestInitiated" | "inProgress" | "requestReceived" | "requestFailed" | "awaitingAuthorization" | "subscribed" | "canceled" | "suspended";
            preferredPaymentMethod?: {
                /**
                 * @description System-assigned key for the preferred payment method.
                 * @example 454
                 */
                key?: string;
                /**
                 * @description Unique ID for the preferred payment method.
                 * @example 454
                 */
                id?: string;
                /**
                 * @description Name of the preferred payment method.
                 * @example Check
                 */
                name?: string;
                /** @example /objects/cash-management/provider-payment-method/454 */
                readonly href?: string;
            };
            /**
             * @description Subscription status of the vendor payment provider.
             * @example active
             * @enum {string}
             */
            status?: "active" | "inactive";
            audit?: components["schemas"]["audit.s1"];
        };
        "accounts-payable-vendor-payment-providerRequiredProperties": Record<string, never>;
        /** @description In shared multi-entity companies, vendors can be restricted to specific departments or department groups to prevent the vendor from being used in the wrong entity. */
        "objects.accounts-payable.vendor-restricted-department": {
            /**
             * @description System-assigned key for the vendor restricted department.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description ID for the vendor restricted department. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the vendor restricted department.
             * @example /objects/accounts-payable/vendor-restricted-department/23
             */
            readonly href?: string;
            /** @description Department to which the vendor is restricted. */
            readonly department?: {
                /**
                 * @description Unique key for the department.
                 * @example 52
                 */
                key?: string;
                /**
                 * @description User-defined ID for the department.
                 * @example Eng
                 */
                id?: string;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/52
                 */
                readonly href?: string;
            };
            /** @description Department group to which the vendor is restricted. */
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
                 * @example /objects/company-config/department-group/23
                 */
                readonly href?: string;
            };
            /** @description Vendor that is restricted. */
            vendor?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 13
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the vendor.
                 * @example V23
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/13
                 */
                readonly href?: string;
            };
        };
        /** @description In shared multi-entity companies, vendors can be restricted to specific locations or location groups to prevent the vendor from being used in the wrong entity. */
        "objects.accounts-payable.vendor-restricted-location": {
            /**
             * @description System-assigned key for the vendor restricted location.
             * @example 32
             */
            readonly key?: string;
            /**
             * @description Unique ID for the vendor restricted location. This value is the same as the `key` for this object.
             * @example 32
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the vendor restricted location.
             * @example /objects/accounts-payable/vendor-restricted-location/32
             */
            readonly href?: string;
            /** @description Location to which the vendor is restricted. */
            readonly location?: {
                /**
                 * @description Unique key for the location.
                 * @example 41
                 */
                key?: string;
                /**
                 * @description Unique ID for the location.
                 * @example NW
                 */
                id?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/41
                 */
                readonly href?: string;
            };
            /** @description Location group to which the vendor is restricted. */
            readonly locationGroup?: {
                /**
                 * @description Unique key for the location group.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description Unique ID for the location group.
                 * @example USA
                 */
                id?: string;
                /**
                 * @description URL endpoint for the location group.
                 * @example /objects/company-config/location-group/15
                 */
                readonly href?: string;
            };
            /** @description Vendor that is restricted. */
            vendor?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 15
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the vendor.
                 * @example V32
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/15
                 */
                readonly href?: string;
            };
        };
        /** @description Vendor types organize vendors into categories that are used for reporting. */
        "objects.accounts-payable.vendor-type": {
            /**
             * @description System-assigned key for the vendor type.
             * @example 14
             */
            readonly key?: string;
            /**
             * @description Name or other unique identifier for the vendor type.
             * @example Retail
             */
            id?: string;
            /**
             * @description URL for the vendor type.
             * @example /objects/accounts-payable/vendor-type/14
             */
            readonly href?: string;
            /** @description To assign vendors to a vendor type, the vendor type must be `active`. */
            status?: components["schemas"]["status"];
            /** @description Form 1099 information for the vendor type. If vendors require 1099 forms, save time by creating a vendor type for 1099 contractors and assigning a default 1099 form and box to that vendor type. */
            form1099?: {
                /**
                 * @description Type of 1099 form.
                 * @example DIV
                 */
                type?: string;
                /**
                 * @description Box number for form 1099.
                 * @example 1B
                 */
                box?: string;
            };
            /** @description Assign a parent to make this vendor type subordinate to another vendor type. */
            parent?: {
                /**
                 * @description System-assigned key for the parent vendor type.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Name or other unique identifier for the parent vendor type.
                 * @example Wholesaler
                 */
                id?: string;
                /**
                 * @description URL for the parent vendor type.
                 * @example /objects/accounts-payable/vendor-type/1
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "accounts-payable-vendor-typeRequiredProperties": Record<string, never>;
        /** @description A vendor group categorizes vendor dimension records, mainly for the purpose of structuring financial reports. */
        "objects.accounts-payable.vendor-group": {
            /**
             * @description System assigned unique key for the vendor group.
             * @example 25
             */
            readonly key?: string;
            /**
             * @description Vendor group ID.
             * @example 1
             */
            id?: string;
            /**
             * @description URL endpoint for the vendor group.
             * @example /objects/accounts-payable/vendor-group/25
             */
            readonly href?: string;
            /**
             * @description Name of the vendor group.
             * @example Top level vendors
             */
            name?: string;
            /**
             * @description Description of the vendor group.
             * @example Top-level vendor group
             */
            description?: string;
            /**
             * @description Group membership type. The group type and related fields determine which vendors are included in the group. When creating reports that use vendors in rows or columns, these fields also determine the column headings and row headings that display, and the order in which they will be listed.
             *
             *     * `specificMembers` - Specify the vendors to include and their order in the `groupMembers` array. You can optionally filter the array with the `memberFilter` settings.
             *     * `allMembers` - All vendors that match the `memberFilter` criteria.
             * @default allMembers
             * @example allMembers
             * @enum {string}
             */
            groupType?: "allMembers" | "specificMembers";
            /** @description One or more filters to select the vendors to include in the vendor group. */
            memberFilter?: components["schemas"]["member-filter"] & Record<string, never>;
            /** @description List of vendors to include in the group when `groupType` is set to `specificMembers`. */
            groupMembers?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 12
                 */
                key?: string;
                /**
                 * @description Unique ID for the vendor.
                 * @example 12
                 */
                id?: string;
                /**
                 * @description Vendor name.
                 * @example NCS, Inc.
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/12
                 */
                readonly href?: string;
                /**
                 * @description Vendor status.
                 * @example active
                 * @enum {string}
                 */
                readonly status?: "active" | "activeNonPosting" | "inactive";
                /**
                 * @description Sort order.
                 * @example 0
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
        "accounts-payable-vendor-groupRequiredProperties": Record<string, never>;
        /** @description A vendor total object provides information about how much is owed to a vendor. */
        "objects.accounts-payable.vendor-total": {
            /**
             * @description System-assigned unique key for the vendor total.
             * @example 85
             */
            readonly key?: string;
            /**
             * @description Unique ID for the vendor total.
             * @example 111
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the vendor total.
             * @example /objects/accounts-payable/vendor-total/85
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description Vendor total due.
             * @example 1353.01
             */
            totalDue?: string;
            /** @description The vendor who owes the amount due. */
            vendor?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 48
                 */
                key?: string;
                /**
                 * @description Name or other unique ID for the vendor.
                 * @example Pac Bell
                 */
                id?: string;
                /**
                 * @description Name of the vendor.
                 * @example Pac Bell
                 */
                name?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/48
                 */
                readonly href?: string;
            };
            /** @description Location of the entity associated with the vendor total. */
            entity?: components["schemas"]["entity-ref"] & {
                /**
                 * @description ID for the entity.
                 * @example NYC
                 */
                readonly id?: string;
                /**
                 * @description Name of the entity.
                 * @example New York City
                 */
                name?: string;
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
         * @description Record type
         * @example apBill
         * @enum {string}
         */
        "ap-record-type": "apAdjustments" | "apBill" | "apDiscount" | "apAppliedAdvance" | "apPayment" | "apAdvance" | "arAdjustments" | "arDiscount" | "interEntityReceivable" | "arInvoice" | "arRealizedMultiCurrencyGainLoss" | "arAppliedAdvanceOverpayment" | "arReceipts" | "arAdvance" | "employeeExpenses" | "employeeReimbursements" | "expenseAdjustment" | "manualCheck" | "cmPrintedQuickCheck";
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
        /**
         * @description Record type
         * @example otherReceipts
         * @enum {string}
         */
        "record-type": "debitCardTransaction" | "creditCardFees" | "depositSlips" | "bankCharge" | "creditCardCharge" | "manualCheck" | "bankInterest" | "creditCardPayment" | "quickInvoice" | "otherReceipts" | "fundsTransfer" | "cashMgmtPrintedQuickCheck" | "chargePayoffPayment" | "employeeExpenses" | "expenseRealizedMultiCurrencyGainLoss" | "appliedEmployeeAdvance" | "employeeReimbursements" | "employeeAdvance" | "apAdjustments" | "apDiscount" | "interEntityPayable" | "apBill" | "apRealizedMultiCurrencyGainLoss" | "apAppliedAdvance" | "apPayment" | "apAdvance" | "arAdjustments" | "arDiscount" | "interEntityReceivable" | "arInvoice" | "arRealizedMultiCurrencyGainLoss" | "arAppliedAdvanceOverpayment" | "arReceipts" | "arAdvance" | "journalEntry" | "arJournalEntry" | "apJournalEntry" | "arInitialOpenItems" | "apInitialOpenItems" | "arInitialOpenItemSummary" | "apInitialOpenItemSummary" | "arCcInitialOpenItems" | "apCcInitialOpenItems" | "arCcInitialOpenItemSummary" | "apCcInitialOpenItemSummary";
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
        /**
         * @example us
         * @enum {string|null}
         */
        "country-code": null | "us" | "af" | "ax" | "al" | "dz" | "as" | "ad" | "ao" | "ai" | "aq" | "ag" | "ar" | "am" | "aw" | "au" | "at" | "az" | "bs" | "bh" | "bd" | "bb" | "by" | "be" | "bz" | "bj" | "bm" | "bt" | "bo" | "bq" | "ba" | "bw" | "bv" | "br" | "io" | "bn" | "bg" | "bf" | "bi" | "kh" | "cm" | "ca" | "ic" | "cv" | "ky" | "cf" | "td" | "cl" | "cn" | "cx" | "cc" | "co" | "km" | "cg" | "cd" | "ck" | "cr" | "ci" | "hr" | "cu" | "cw" | "cy" | "cz" | "dk" | "dj" | "dm" | "do" | "ec" | "eg" | "sv" | "gq" | "er" | "ee" | "sz" | "et" | "fk" | "fo" | "fj" | "fi" | "fr" | "gf" | "pf" | "tf" | "ga" | "gm" | "ge" | "de" | "gh" | "gi" | "gr" | "gl" | "gd" | "gp" | "gu" | "gt" | "gg" | "gn" | "gw" | "gy" | "ht" | "hm" | "hn" | "hk" | "hu" | "is" | "in" | "id" | "ir" | "iq" | "ie" | "im" | "il" | "it" | "jm" | "jp" | "je" | "jo" | "kz" | "ke" | "ki" | "kr" | "kp" | "xk" | "kw" | "kg" | "la" | "lv" | "lb" | "ls" | "lr" | "ly" | "li" | "lt" | "lu" | "mo" | "mk" | "mg" | "mw" | "my" | "mv" | "ml" | "mt" | "mh" | "mq" | "mr" | "mu" | "yt" | "mx" | "fm" | "md" | "mc" | "mn" | "me" | "ms" | "ma" | "mz" | "mm" | "na" | "nr" | "np" | "nl" | "an" | "nc" | "nz" | "ni" | "ne" | "ng" | "nu" | "nf" | "mp" | "no" | "om" | "pk" | "pw" | "ps" | "pa" | "pg" | "py" | "pe" | "ph" | "pn" | "pl" | "pt" | "pr" | "qa" | "re" | "ro" | "ru" | "rw" | "bl" | "sh" | "kn" | "lc" | "mf" | "pm" | "vc" | "ws" | "sm" | "st" | "sa" | "sn" | "rs" | "sc" | "sl" | "sg" | "sx" | "sk" | "si" | "sb" | "so" | "za" | "gs" | "es" | "lk" | "sd" | "ss" | "sr" | "sj" | "se" | "ch" | "sy" | "tw" | "tj" | "tz" | "th" | "tl" | "tg" | "tk" | "to" | "tt" | "tn" | "tr" | "tm" | "tc" | "tv" | "ug" | "ua" | "ae" | "gb" | "um" | "uy" | "uz" | "vu" | "va" | "ve" | "vn" | "vg" | "vi" | "wf" | "eh" | "ye" | "zm" | "zw";
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
    "list-accounts-payable-account-label": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-account-label": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.account-label"] & components["schemas"]["accounts-payable-account-labelRequiredProperties"];
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
    "get-accounts-payable-account-label-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account label.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.account-label"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-account-label-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account label.
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
    "update-accounts-payable-account-label-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the account label.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.account-label"] & {
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
    "list-accounts-payable-adjustment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-adjustment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.adjustment"] & components["schemas"]["accounts-payable-adjustmentRequiredProperties"];
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
    "get-accounts-payable-adjustment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.adjustment"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-adjustment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment.
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
    "update-accounts-payable-adjustment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment.
                 * @example 67
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.adjustment"] & {
                    readonly id?: unknown;
                    readonly adjustmentType?: unknown;
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
    "submit-accounts-payable-adjustment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-adjustment-actions-submit-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-adjustment-actions-submit-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
        };
    };
    "reverse-accounts-payable-adjustment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-adjustment-actions-reverse-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-adjustment-actions-reverse-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-adjustment-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-adjustment-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.adjustment-line"] & components["schemas"]["accounts-payable-adjustment-lineRequiredProperties"];
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
    "get-accounts-payable-adjustment-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment line.
                 * @example 5296
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.accounts-payable.adjustment-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-adjustment-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment line.
                 * @example 5296
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
    "update-accounts-payable-adjustment-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment line.
                 * @example 5296
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.adjustment-line"];
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
    "list-accounts-payable-adjustment-tax-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-accounts-payable-adjustment-tax-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment tax entry.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.adjustment-tax-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-adjustment-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-accounts-payable-adjustment-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the adjustment summary.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.adjustment-summary"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-advance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-advance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.advance"] & components["schemas"]["accounts-payable-advanceRequiredProperties"];
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
    "get-accounts-payable-advance-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.advance"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-advance-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance.
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
    "update-accounts-payable-advance-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.advance"] & {
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
    "submit-accounts-payable-advance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-advance-actions-submit-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-advance-actions-submit-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
        };
    };
    "reverse-accounts-payable-advance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-advance-actions-reverse-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-advance-actions-reverse-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-advance-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-accounts-payable-advance-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance line.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.advance-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-advance-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.advance-line"] & components["schemas"]["accounts-payable-advance-lineRequiredProperties"];
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
    "delete-accounts-payable-advance-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance line.
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
    "update-accounts-payable-advance-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advance line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.advance-line"];
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
    "list-accounts-payable-bill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-bill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.bill"] & components["schemas"]["accounts-payable-billRequiredProperties"];
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
    "get-accounts-payable-bill-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.bill"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-bill-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill.
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
    "update-accounts-payable-bill-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.bill"] & {
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
    "submit-accounts-payable-bill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-bill-actions-submit-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-bill-actions-submit-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
        };
    };
    "approve-accounts-payable-bill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-bill-actions-approve-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-bill-actions-approve-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "decline-accounts-payable-bill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-bill-actions-decline-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-bill-actions-decline-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "recall-accounts-payable-bill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-bill-actions-recall-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-bill-actions-recall-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "reverse-accounts-payable-bill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-bill-actions-reverse-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-bill-actions-reverse-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-bill-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-bill-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.bill-line"] & components["schemas"]["accounts-payable-bill-lineRequiredProperties"];
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
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-accounts-payable-bill-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill line.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.bill-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-bill-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill line.
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
    "update-accounts-payable-bill-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bill line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.bill-line"] & {
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
    "release-accounts-payable-bill-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-bill-line-actions-release-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-bill-line-actions-release-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-bill-tax-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-accounts-payable-bill-tax-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bill tax entry.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.bill-tax-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-bill-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-accounts-payable-bill-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bill summary.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.bill-summary"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-amortization-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-amortization-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description A JSON representation of the fields used to create the Accounts Payable amortization template instance. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.amortization-template"] & components["schemas"]["accounts-payable-amortization-templateRequiredProperties"];
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
    "get-accounts-payable-amortization-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the amortization template.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.amortization-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-amortization-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the amortization template.
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
    "update-accounts-payable-amortization-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the amortization template.
                 * @example 3
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.amortization-template"] & {
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
    "list-accounts-payable-joint-payee": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-joint-payee": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.joint-payee"] & components["schemas"]["accounts-payable-joint-payeeRequiredProperties"];
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
    "get-accounts-payable-joint-payee-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a joint payee.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.joint-payee"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-joint-payee-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a joint payee.
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
    "update-accounts-payable-joint-payee": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a joint payee.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.joint-payee"] & {
                    bill?: {
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
    "list-accounts-payable-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.payment"] & components["schemas"]["accounts-payable-paymentRequiredProperties"];
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
    "get-accounts-payable-payment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment.
                 * @example 3323
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.accounts-payable.payment"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-payment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment.
                 * @example 3323
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
    "update-accounts-payable-payment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment.
                 * @example 3323
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.payment"] & {
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
    "submit-accounts-payable-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-payment-actions-submit-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-payment-actions-submit-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "approve-accounts-payable-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-payment-actions-approve-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-payment-actions-approve-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "decline-accounts-payable-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-payment-actions-decline-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-payment-actions-decline-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "confirm-accounts-payable-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-payment-actions-confirm-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-payment-actions-confirm-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "print-accounts-payable-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-payment-actions-print-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-payment-actions-print-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "reverse-accounts-payable-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-payment-actions-reverse-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-payment-actions-reverse-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-payment-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-accounts-payable-payment-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment line.
                 * @example 3936
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.accounts-payable.payment-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-payment-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["400error"];
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "get-accounts-payable-payment-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment detail.
                 * @example 367
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.accounts-payable.payment-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-recurring-bill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-recurring-bill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.recurring-bill"] & components["schemas"]["accounts-payable-recurring-billRequiredProperties"];
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
    "get-accounts-payable-recurring-bill-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring bill.
                 * @example 13
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Get a recurring bill */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.accounts-payable.recurring-bill"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-recurring-bill-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring bill.
                 * @example 13
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
    "update-accounts-payable-recurring-bill-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring bill.
                 * @example 13
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.recurring-bill"] & {
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
    "list-accounts-payable-recurring-bill-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-recurring-bill-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.recurring-bill-line"] & components["schemas"]["accounts-payable-recurring-bill-lineRequiredProperties"];
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
    "get-accounts-payable-recurring-bill-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring bill line.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.recurring-bill-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-recurring-bill-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring bill line.
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
    "update-accounts-payable-recurring-bill-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring bill line.
                 * @example 15
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.recurring-bill-line"];
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
    "list-accounts-payable-recurring-bill-tax-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-accounts-payable-recurring-bill-tax-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring bill tax entry.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.recurring-bill-tax-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.summary"] & components["schemas"]["accounts-payable-summaryRequiredProperties"];
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
    "get-accounts-payable-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the summary.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.summary"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the summary.
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
    "update-accounts-payable-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the summary.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.summary"] & {
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
    "list-accounts-payable-term": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-term": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.term"] & components["schemas"]["accounts-payable-termRequiredProperties"];
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
    "get-accounts-payable-term-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the term.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.term"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-term-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the term.
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
    "update-accounts-payable-term-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the term.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.term"] & {
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
    "list-accounts-payable-check-run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-check-run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.check-run"] & components["schemas"]["accounts-payable-check-runRequiredProperties"];
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
    "get-accounts-payable-check-run-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the check run.
                 * @example 6
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.accounts-payable.check-run"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-check-run-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the check run.
                 * @example 6
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
    "update-accounts-payable-check-run-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the check run.
                 * @example 6
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.check-run"] & {
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
    "list-accounts-payable-vendor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-vendor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.vendor"] & components["schemas"]["accounts-payable-vendorRequiredProperties"];
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
    "get-accounts-payable-vendor-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the vendor.
                 * @example 111
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-vendor-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the vendor.
                 * @example 111
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
    "update-accounts-payable-vendor-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the vendor.
                 * @example 111
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.vendor"] & {
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
    "approve-accounts-payable-vendor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-vendor-actions-approve-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-vendor-actions-approve-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "decline-accounts-payable-vendor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["accounts-payable-vendor-actions-decline-request"];
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
                        "ia::result"?: components["schemas"]["accounts-payable-vendor-actions-decline-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-vendor-account-number": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-account-number"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-vendor-account-number": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.vendor-account-number"] & components["schemas"]["accounts-payable-vendor-account-numberRequiredProperties"];
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-account-number"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-accounts-payable-vendor-account-number-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor account number.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-account-number"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-vendor-account-number": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor account number.
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
    "update-accounts-payable-vendor-account-number": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor account number.
                 * @example 17
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.vendor-account-number"] & {
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-account-number"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-vendor-bank-file-setup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-accounts-payable-vendor-bank-file-setup-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor bank file setup object.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-bank-file-setup"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-vendor-contact": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-contact"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-vendor-contact-key": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.vendor-contact"] & components["schemas"]["accounts-payable-vendor-contactRequiredProperties"];
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-contact"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-accounts-payable-vendor-contact-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor contact.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-contact"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-vendor-contact-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor contact.
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
    "update-accounts-payable-vendor-contact-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor contact.
                 * @example 17
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.vendor-contact"] & {
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-contact"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-vendor-email-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-email-template"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-vendor-email-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.vendor-email-template"] & components["schemas"]["accounts-payable-vendor-email-templateRequiredProperties"];
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-email-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-accounts-payable-vendor-email-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor email template.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-email-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-vendor-email-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor email template.
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
    "update-accounts-payable-vendor-email-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor email template.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.vendor-email-template"];
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-email-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-vendor-payment-provider": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-vendor-payment-provider": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a vendor payment provider */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.vendor-payment-provider"] & components["schemas"]["accounts-payable-vendor-payment-providerRequiredProperties"];
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
    "get-accounts-payable-vendor-payment-provider-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the vendor payment provider.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-payment-provider"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-accounts-payable-vendor-payment-provider-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the vendor payment provider.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.vendor-payment-provider"] & {
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
    "list-accounts-payable-vendor-restricted-department": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-accounts-payable-vendor-restricted-department-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor restricted department.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-restricted-department"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-vendor-restricted-location": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-accounts-payable-vendor-restricted-location-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor restricted location.
                 * @example 142
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-restricted-location"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-accounts-payable-vendor-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-vendor-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.vendor-type"] & components["schemas"]["accounts-payable-vendor-typeRequiredProperties"];
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
    "get-accounts-payable-vendor-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the vendor type.
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
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-vendor-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the vendor type.
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
    "update-accounts-payable-vendor-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the vendor type.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.vendor-type"] & {
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
    "list-accounts-payable-vendor-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-accounts-payable-vendor-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates a new Vendor group. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.vendor-group"] & components["schemas"]["accounts-payable-vendor-groupRequiredProperties"];
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
    "get-accounts-payable-vendor-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System assigned unique key for the vendor group.
                 * @example 16
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-accounts-payable-vendor-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System assigned unique key for the vendor group.
                 * @example 16
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
    "update-accounts-payable-vendor-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System assigned unique key for the vendor group.
                 * @example 16
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.accounts-payable.vendor-group"] & {
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
    "list-accounts-payable-vendor-total": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-accounts-payable-vendor-total-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor total.
                 * @example 86
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.accounts-payable.vendor-total"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
}

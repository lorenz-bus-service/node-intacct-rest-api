// Generated from spec/purchasing.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/purchasing/document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List purchasing documents
         * @description Returns a collection with a key, ID, and link for each purchasing document. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-document"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 99 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a purchasing document
         * @description Returns detailed information for a specified purchasing document.
         */
        get: operations["get-purchasing-document-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document::{documentName}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Document Name */
                documentName: string;
            };
            cookie?: never;
        };
        /**
         * List named purchasing documents
         * @description Returns a collection with a key, ID, and link for each purchasing document with the specified name.
         *     For example, to list all documents that are based on the Purchase Order transaction definition, specify `Purchase Order` as the `documentName` in the request URL.
         *
         *     This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-named-document"];
        put?: never;
        /**
         * Create a purchasing document
         * @description Creates a new purchasing document. To create a new purchasing document, specify the transaction definition that is the template for the new document as `documentName` in the request URL.
         *
         *     When creating a new document, the field `state` must be set to one of these values: pending, draft, or submitted.
         *     If no value is specified for the `state` field, it defaults to pending.
         *
         *     To access a list of available transaction definitions, use the list operation of the [transaction definition](purchasing.txn-definition) object. For example, to create a new purchasing document that uses the Purchase Requisition transaction definition as a template, specify `Purchase Requisition` for the `documentName` in the request URL.
         */
        post: operations["create-purchasing-named-document"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document::{documentName}/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Document Name */
                documentName: string;
                /**
                 * @description System-assigned unique key for the document.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a named purchasing document
         * @description Returns detailed information for a specified purchasing document. For example, to return details about a purchasing document that uses the PO Receiver Invoice transaction definition as a template, specify `PO Receiver Invoice` for the `documentName` in the request URL.
         */
        get: operations["get-purchasing-named-document-key"];
        put?: never;
        post?: never;
        /**
         * Delete a purchasing document
         * @description Deletes a purchasing document. Several factors determine whether a purchasing transaction can be deleted. See [Purchasing transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_po_transactions) in the Sage Intacct Help Center for more information.
         */
        delete: operations["delete-purchasing-named-document-key"];
        options?: never;
        head?: never;
        /**
         * Update a purchasing document
         * @description Updates an existing purchasing document by setting field values. Any fields not provided remain unchanged. With Edit permissions to Purchasing transactions, most details for a transaction that has a state of Draft or Pending can be edited.
         */
        patch: operations["update-purchasing-named-document-key"];
        trace?: never;
    };
    "/workflows/purchasing/document/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit a purchasing document
         * @description Submit a `draft` or `declined` purchasing document for approval to ensure that spending is authorized and correct. When a document is submitted for approval, the state changes to `submitted`.
         *
         *     For more information, see [Approve Purchasing transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Approving_Purchasing_Transactions) in the Sage Intacct Help Center.
         */
        post: operations["submit-purchasing-document"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/purchasing/document/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Approve a purchasing document
         * @description Designated approvers can approve a `submitted` or `partiallyApproved` purchasing document after ensuring that the transactions within are correct. When a document is approved, the state changes from `submitted` or `partiallyApproved` to `approved`.
         *
         *     For more information, see [Approve Purchasing transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Approving_Purchasing_Transactions) in the Sage Intacct Help Center.
         */
        post: operations["approve-purchasing-document"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/purchasing/document/decline": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Decline a purchasing document
         * @description Designated approvers can decline a `submitted` or `partiallyApproved` purchasing document if the transactions within are not correct. When a document is declined, the state changes from `submitted` or `partiallyApproved` to `declined`.
         *
         *     For more information, see [Approve Purchasing transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Approving_Purchasing_Transactions) in the Sage Intacct Help Center.
         */
        post: operations["decline-purchasing-document"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List document lines
         * @description Returns a collection with a key, ID, and link for each document line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-document-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the purchasing document line.
                 * @example 52
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a document line
         * @description Returns detailed information for a specified purchasing document line.
         */
        get: operations["get-purchasing-document-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document-line::{documentName}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Purchase Order
                 */
                documentName: string;
            };
            cookie?: never;
        };
        /**
         * List lines for named documents
         * @description Returns a collection with a key, ID, and link for each line that exists in purchasing documents with the specified name. For example, to list all lines within documents that are based on the Purchase Order transaction definition, specify `Purchase Order` as the `documentName` in the request URL.
         *
         *     This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-named-document-line"];
        put?: never;
        /**
         * Create a document line
         * @description Creates a new purchasing document line.
         */
        post: operations["create-purchasing-named-document-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document-line::{documentName}/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document name
                 * @example Purchase Order
                 */
                documentName: string;
                /**
                 * @description System-assigned unique key for the document line.
                 * @example 52
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a line in a named document
         * @description Returns detailed information for a specified purchasing document line. For example, to get a line within a document that is based on the PO Receiver Invoice transaction definition, specify `PO Receiver Invoice` for the `documentName` in the request URL.
         */
        get: operations["get-purchasing-named-document-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a document line
         * @description Deletes a purchasing document line.
         */
        delete: operations["delete-purchasing-named-document-line-key"];
        options?: never;
        head?: never;
        /**
         * Update a document line
         * @description Updates an existing purchasing document line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-named-document-line-key"];
        trace?: never;
    };
    "/objects/purchasing/document-line-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List document line detail objects
         * @description Returns a collection with a key, ID, and link for each Purchasing document line detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-purchasing-document-line-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document-line-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document line detail object.
                 * @example 12
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a document line detail object
         * @description Returns detailed information for a specified purchasing document line detail object.
         */
        get: operations["get-purchasing-document-line-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document-line-subtotal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List document line subtotals
         * @description Returns a collection with a key, ID, and link for each document line subtotal object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-purchasing-document-line-subtotal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document-line-subtotal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document line subtotal object.
                 * @example 15
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a document line subtotal
         * @description Returns detailed information for a specified document line subtotal object.
         */
        get: operations["get-purchasing-document-line-subtotal-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List document histories
         * @description Returns a collection with a key, ID, and link for each Purchasing document history. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-document-history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document-history/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document history.
                 * @example 17
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a document history
         * @description Returns detailed information for a specified Purchasing document history.
         */
        get: operations["get-purchasing-document-history-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document-subtotal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List document subtotals
         * @description Returns a collection with a key, ID, and link for each purchasing document subtotal. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-document-subtotal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document-subtotal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document subtotal.
                 * @example 14
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a document subtotal
         * @description Returns detailed information for a specified purchasing document subtotal.
         */
        get: operations["get-purchasing-document-subtotal-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document-configuration-preference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List document configuration preferences
         * @description Returns a collection with a key, ID, and link for each document configuration preference. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-document-configuration-preference"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/document-configuration-preference/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document configuration preference.
                 * @example 382
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a document configuration preference
         * @description Returns detailed information for a specified document configuration preference.
         */
        get: operations["get-purchasing-document-configuration-preference-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a document configuration preference
         * @description Updates an existing document configuration preference by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-document-configuration-preference-key"];
        trace?: never;
    };
    "/objects/purchasing/txn-match-tolerance-preference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction match tolerance preferences
         * @description Returns a collection with a key, ID, and link for each transaction match tolerance preference. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-txn-match-tolerance-preference"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/txn-match-tolerance-preference/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction match tolerance preference.
                 * @example 33
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction match tolerance preference
         * @description Returns detailed information for a specified transaction match tolerance preference.
         */
        get: operations["get-purchasing-txn-match-tolerance-preference-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a transaction match tolerance preference
         * @description Updates an existing transaction match tolerance preference by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-txn-match-tolerance-preference-key"];
        trace?: never;
    };
    "/objects/purchasing/txn-automation-preference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction automation preferences
         * @description Returns a collection with a key, ID, and link for each transaction automation preference. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-txn-automation-preference"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/txn-automation-preference/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction automation preference.
                 * @example 49
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction automation preference
         * @description Returns detailed information for a specified transaction automation preference.
         */
        get: operations["get-purchasing-txn-automation-preference-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a transaction automation preference
         * @description Updates an existing transaction automation preference by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-txn-automation-preference-key"];
        trace?: never;
    };
    "/objects/purchasing/txn-automation-without-match-preference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction automation without match preferences
         * @description Returns a collection with a key, ID, and link for each transaction automation without match preference. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-txn-automation-without-match-preference"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/txn-automation-without-match-preference/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction automation without match preference.
                 * @example 50
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction automation without match preference
         * @description Returns detailed information for a specified transaction automation without match preference.
         */
        get: operations["get-purchasing-txn-automation-without-match-preference-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a transaction automation without match preference
         * @description Updates an existing transaction automation without match preference by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-txn-automation-without-match-preference-key"];
        trace?: never;
    };
    "/objects/purchasing/price-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List price lists
         * @description Returns a collection with a key, ID, and link for each purchasing price list. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-purchasing-price-list"];
        put?: never;
        /**
         * Create a price list
         * @description Creates a new purchasing price list.
         */
        post: operations["create-purchasing-price-list"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/price-list/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the purchasing price list.
                 * @example 6
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a price list
         * @description Returns detailed information for a specified purchasing price list.
         */
        get: operations["get-purchasing-price-list-key"];
        put?: never;
        post?: never;
        /**
         * Delete a price list
         * @description Deletes a purchasing price list. A price list can be deleted if it has not been assigned to any objects. This removes the price list and all of its associated price list entries from the system.
         */
        delete: operations["delete-purchasing-price-list-key"];
        options?: never;
        head?: never;
        /**
         * Update a price list
         * @description Updates an existing purchasing price list by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-price-list-key"];
        trace?: never;
    };
    "/objects/purchasing/price-list-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List price list entries
         * @description Returns a collection with a key, ID, and link for each price list entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-price-list-entry"];
        put?: never;
        /**
         * Create a price list entry
         * @description Creates a new price list entry. See [About price list entries](https://www.intacct.com/ia/docs/en_US/help_action/Purchasing/Setting_up_Purchasing/Price_lists/price-list-entries-PO.htm#Aboutpricelistentries) in the Sage Intacct Help Center for more information.
         */
        post: operations["create-purchasing-price-list-entry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/price-list-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the price list entry.
                 * @example 421
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a price list entry
         * @description Returns detailed information for a specified price list entry.
         */
        get: operations["get-purchasing-price-list-entry-key"];
        put?: never;
        post?: never;
        /**
         * Delete a price list entry
         * @description Deletes a price list entry. A price list entry can be deleted if it has not been used by any transactions. This removes the price list entry from the system.
         *
         *     Alternatively, a price list entry can be deactivated by changing the status to `inactive`, which prevents it from displaying in any selection lists but retains the price for historical purposes.
         */
        delete: operations["delete-purchasing-price-list-entry-key"];
        options?: never;
        head?: never;
        /**
         * Update a price list entry
         * @description Updates an existing price list entry by setting field values. Any fields not provided remain unchanged. If there are changes to an item's price, it will be immediately available to all new or modified transactions that occur after the price revision. Changing a price will not affect existing transactions.
         *
         *     Alternatively, to keep a history of price changes, add a new price list entry that has a new price, new start date, and new end date, and then update the end date of the existing price list entry to end one day before the new price list entry starts. For more information, see [Edit a price list entry](https://www.intacct.com/ia/docs/en_US/help_action/Purchasing/Setting_up_Purchasing/Price_lists/price-list-entries-PO.htm#Editapricelistentry) in the Sage Intacct Help Center.
         */
        patch: operations["update-purchasing-price-list-entry-key"];
        trace?: never;
    };
    "/objects/purchasing/price-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List price schedules
         * @description Returns a collection with a key, ID, and link for each purchasing price schedule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-purchasing-price-schedule"];
        put?: never;
        /**
         * Create a price schedule
         * @description Creates a new purchasing price schedule.
         */
        post: operations["create-purchasing-price-schedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/price-schedule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the price schedule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a price schedule
         * @description Returns detailed information for a specified purchasing price schedule.
         */
        get: operations["get-purchasing-price-schedule-key"];
        put?: never;
        post?: never;
        /**
         * Delete a price schedule
         * @description Deletes a purchasing price schedule. A price schedule can be deleted if it is no longer in use and it needs to be removed from the system.
         */
        delete: operations["delete-purchasing-price-schedule-key"];
        options?: never;
        head?: never;
        /**
         * Update a price schedule
         * @description Updates an existing purchasing price schedule by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-price-schedule-key"];
        trace?: never;
    };
    "/objects/purchasing/subtotal-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List subtotal templates
         * @description Returns a collection with a key, ID, and link for each subtotal template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-subtotal-template"];
        put?: never;
        /**
         * Create a subtotal template
         * @description Creates a new subtotal template. If Purchasing is configured for subtotal templates, you can add a subtotal template. For more information, see [About subtotal templates](https://www.intacct.com/ia/docs/en_US/help_action/Purchasing/Setting_up_Purchasing/Transaction_definitions/purchasing-subtotal-templates.htm#Aboutsubtotaltemplates) in the Sage Intacct Help Center.
         */
        post: operations["create-purchasing-subtotal-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/subtotal-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the subtotal template.
                 * @example 30
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a subtotal template
         * @description Returns detailed information for a specified subtotal template.
         */
        get: operations["get-purchasing-subtotal-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a subtotal template
         * @description Deletes a subtotal template. You can delete a subtotal template if no transactions have been created with a transaction definition that refers to the template.
         */
        delete: operations["delete-purchasing-subtotal-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a subtotal template
         * @description Updates an existing subtotal template by setting field values. Any fields not provided remain unchanged. Changes that are made to a subtotal template that affect the amount or percent of a subtotal line will not apply to existing transaction definitions. The previous subtotal details will be used instead. Any changes will always apply to new transaction definitions.
         */
        patch: operations["update-purchasing-subtotal-template-key"];
        trace?: never;
    };
    "/objects/purchasing/subtotal-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List subtotal template line objects
         * @description Returns a collection with a key, ID, and link for each subtotal template line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-subtotal-template-line"];
        put?: never;
        /**
         * Create a subtotal template line
         * @description Creates a new subtotal template line object.
         */
        post: operations["create-purchasing-subtotal-template-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/subtotal-template-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the subtotal template line.
                 * @example 28
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a subtotal template line
         * @description Returns detailed information for a specified subtotal template line.
         */
        get: operations["get-objects-purchasing-subtotal-template-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a subtotal template line
         * @description Deletes a subtotal template line.
         */
        delete: operations["delete-purchasing-subtotal-template-line-key"];
        options?: never;
        head?: never;
        /**
         * Update a subtotal template line
         * @description Updates an existing subtotal template line object by setting field values. Any fields not provided remain unchanged. Changes that are made to a subtotal template that affect the amount or percent of a subtotal line will not apply to existing transaction definitions. The previous subtotal details will be used instead. Any changes will always apply to new transaction definitions.
         */
        patch: operations["update-purchasing-subtotal-template-line-key"];
        trace?: never;
    };
    "/objects/purchasing/secondary-vendor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List secondary vendors
         * @description Returns a collection with a key, ID, and link for each secondary vendor.
         */
        get: operations["list-purchasing-secondary-vendor"];
        put?: never;
        /**
         * Create a secondary vendor
         * @description Creates a new secondary vendor.
         */
        post: operations["create-purchasing-secondary-vendor"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/secondary-vendor/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the secondary vendor.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a secondary vendor
         * @description Returns detailed information for a specified secondary vendor.
         */
        get: operations["get-purchasing-secondary-vendor-key"];
        put?: never;
        post?: never;
        /**
         * Delete a secondary vendor
         * @description Deletes a secondary vendor.
         */
        delete: operations["delete-purchasing-secondary-vendor-key"];
        options?: never;
        head?: never;
        /**
         * Update a secondary vendor
         * @description Updates an existing secondary vendor by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-secondary-vendor-key"];
        trace?: never;
    };
    "/objects/purchasing/vendor-gl-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List vendor GL groups
         * @description Returns a collection with a key, ID, and link for each vendor GL group.
         */
        get: operations["list-purchasing-vendor-gl-group"];
        put?: never;
        /**
         * Create a vendor GL group
         * @description Creates a new vendor GL group.
         */
        post: operations["create-purchasing-vendor-gl-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/vendor-gl-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor GL group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a vendor GL group
         * @description Returns detailed information for a specified vendor GL group.
         */
        get: operations["get-purchasing-vendor-gl-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete a vendor GL group
         * @description Deletes a vendor GL group. Vendor GL groups can be deleted if they are not used by any transaction or are not assigned to any vendors. Deleting a vendor GL group removes it from the system.
         */
        delete: operations["delete-purchasing-vendor-gl-group-key"];
        options?: never;
        head?: never;
        /**
         * Update a vendor GL group.
         * @description Updates an existing vendor GL group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-vendor-gl-group-key"];
        trace?: never;
    };
    "/objects/purchasing/txn-definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction definitions
         * @description Returns a collection with a key, ID, and link for each purchasing transaction definition. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-txn-definition"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/txn-definition/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction definition
         * @description Returns detailed information for a specified purchasing transaction definition.
         */
        get: operations["get-purchasing-txn-definition-key"];
        put?: never;
        /**
         * Create a transaction definition
         * @description Creates a new purchasing transaction definition.
         */
        post: operations["post-purchasing-txn-definition"];
        /**
         * Delete a transaction definition
         * @description Deletes a purchasing transaction definition. You can delete a transaction definition when it is no longer needed or relevant. Deleting a transaction definition is irreversible.
         */
        delete: operations["delete-purchasing-txn-definition-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction definition
         * @description Updates an existing purchasing transaction definition by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-txn-definition-key"];
        trace?: never;
    };
    "/objects/purchasing/txn-definition-additional-gl-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List additional GL detail objects
         * @description Returns a collection with a key, ID, and link for each transaction definition additional GL detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-txn-definition-additional-gl-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/txn-definition-additional-gl-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the additional GL detail object.
                 * @example 208
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an additional GL detail object
         * @description Returns detailed information for a specified transaction definition additional GL detail object.
         */
        get: operations["get-purchasing-txn-definition-additional-gl-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete an additional GL detail object
         * @description Deletes a transaction definition additional GL detail object.
         */
        delete: operations["delete-purchasing-txn-definition-additional-gl-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update an additional GL detail object
         * @description Updates an existing transaction definition additional GL detail object by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-txn-definition-additional-gl-detail-key"];
        trace?: never;
    };
    "/objects/purchasing/txn-definition-ap-direct-gl-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Accounts Payable or direct GL account detail objects
         * @description Returns a collection with a key, ID, and link for each transaction definition Accounts Payable or direct GL account detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-txn-definition-ap-direct-gl-detail"];
        put?: never;
        /**
         * Create an Accounts Payable or direct GL account detail object
         * @description Creates a new transaction definition Accounts Payable or direct GL account detail object.
         */
        post: operations["create-purchasing-txn-definition-ap-direct-gl-detail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/txn-definition-ap-direct-gl-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition account detail object.
                 * @example 208
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an Accounts Payable or direct GL account detail object
         * @description Returns detailed information for a specified transaction definition Accounts Payable or direct GL account detail object.
         */
        get: operations["get-purchasing-txn-definition-ap-direct-gl-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete an Accounts Payable or direct GL account detail object
         * @description Delete a transaction definition Accounts Payable or direct GL account detail object.
         */
        delete: operations["delete-purchasing-txn-definition-ap-direct-gl-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update an Accounts Payable or direct GL account detail object
         * @description Updates an existing transaction definition Accounts Payable or direct GL account detail object. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-txn-definition-ap-direct-gl-detail-key"];
        trace?: never;
    };
    "/objects/purchasing/txn-definition-inventory-total-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction definition inventory total detail objects
         * @description Returns a collection with a key, ID, and link for each transaction definition inventory total detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-txn-definition-inventory-total-detail"];
        put?: never;
        /**
         * Create a transaction definition inventory total detail object
         * @description Creates a new transaction definition inventory total detail object.
         */
        post: operations["create-purchasing-txn-definition-inventory-total-detail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/txn-definition-inventory-total-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition inventory total detail object.
                 * @example 191
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction definition inventory total detail object
         * @description Returns detailed information for a specified transaction definition inventory total detail object.
         */
        get: operations["get-purchasing-txn-definition-inventory-total-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transaction definition inventory total detail object
         * @description Deletes a transaction definition inventory total detail object.
         */
        delete: operations["delete-purchasing-txn-definition-inventory-total-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction definition inventory total detail object
         * @description Updates an existing transaction definition inventory total detail object by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-txn-definition-inventory-total-detail-key"];
        trace?: never;
    };
    "/objects/purchasing/txn-definition-subtotal-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction definition subtotal detail objects
         * @description Returns a collection with a key, ID, and link for each transaction definition subtotal detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-txn-definition-subtotal-detail"];
        put?: never;
        /**
         * Create a transaction definition subtotal detail object
         * @description Creates a new transaction definition subtotal detail object.
         */
        post: operations["create-purchasing-txn-definition-subtotal-detail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/txn-definition-subtotal-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition subtotal detail object.
                 * @example 180
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction definition subtotal detail object
         * @description Returns detailed information for a specified transaction definition subtotal detail object.
         */
        get: operations["get-purchasing-txn-definition-subtotal-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transaction definition subtotal detail object
         * @description Deletes a transaction definition subtotal detail object
         */
        delete: operations["delete-purchasing-txn-definition-subtotal-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction definition subtotal detail object
         * @description Updates an existing transaction definition subtotal detail object by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-txn-definition-subtotal-detail-key"];
        trace?: never;
    };
    "/objects/purchasing/txn-definition-source-document-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction source document detail objects
         * @description Returns a collection with a key, ID, and link for each transaction definition source document detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-txn-definition-source-document-detail"];
        put?: never;
        /**
         * Create a transaction definition source document detail object
         * @description Creates a new transaction definition source document detail object.
         */
        post: operations["create-purchasing-txn-definition-source-document-detail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/txn-definition-source-document-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition source document detail object.
                 * @example 78
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction definition source document detail object
         * @description Returns detailed information for a specified transaction definition source document detail object.
         */
        get: operations["get-purchasing-txn-definition-source-document-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transaction definition source document detail object
         * @description Deletes a transaction definition source document detail object.
         */
        delete: operations["delete-purchasing-txn-definition-source-document-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction definition source document detail object
         * @description Updates an existing transaction definition source document detail object by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-txn-definition-source-document-detail-key"];
        trace?: never;
    };
    "/objects/purchasing/txn-definition-entity-setting-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction definition entity details
         * @description Returns a collection with a key, ID, and link for each transaction definition entity detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-txn-definition-entity-setting-detail"];
        put?: never;
        /**
         * Create a transaction definition entity detail object
         * @description Creates a new transaction definition entity detail object.
         */
        post: operations["create-purchasing-txn-definition-entity-setting-detail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/txn-definition-entity-setting-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition entity detail object.
                 * @example 54
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction definition entity detail object
         * @description Returns detailed information for a specified transaction definition entity detail object.
         */
        get: operations["get-purchasing-txn-definition-entity-setting-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transaction definition entity detail object
         * @description Deletes a transaction definition entity detail object.
         */
        delete: operations["delete-purchasing-txn-definition-entity-setting-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction definition entity detail object
         * @description Updates an existing transaction definition entity detail object. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-txn-definition-entity-setting-detail-key"];
        trace?: never;
    };
    "/objects/purchasing/recurring-document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List recurring documents
         * @description Returns a collection with a key, ID, and link for each recurring document. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-recurring-document"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/recurring-document/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring document.
                 * @example 14
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a recurring document
         * @description Returns detailed information for a specified recurring document.
         */
        get: operations["get-purchasing-recurring-document-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/recurring-document::{documentName}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Purchase Order
                 */
                documentName: string;
            };
            cookie?: never;
        };
        /**
         * List named recurring documents
         * @description Returns a collection with a key, ID, and link for each recurring document with the specified name. For example, to list all recurring documents that are based on the Purchase Order transaction definition, specify `Purchase Order` as the `documentName` in the request URL.
         *
         *     This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-named-recurring-document"];
        put?: never;
        /**
         * Create a recurring document
         * @description Creates a new recurring document. To create a new recurring document, specify the transaction definition that is the template for the new document as `documentName` in the request URL.
         *
         *     To access a list of available transaction definitions, use the list operation of the [transaction definition](purchasing.txn-definition) object. For example, to create a new recurring document that uses the Purchase Requisition transaction definition as a template, specify `Purchase Requisition` for the `documentName` in the request URL.
         */
        post: operations["create-purchasing-named-recurring-document"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/recurring-document::{documentName}/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Purchase Requisition
                 */
                documentName: string;
                /**
                 * @description System-assigned unique key for the recurring document.
                 * @example 55
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a named recurring document
         * @description Returns detailed information for a specified recurring document. For example, to return details about a purchasing document that uses the Purchase Invoice transaction definition as a template, specify `Purchase Invoice` for the `documentName` in the request URL.
         */
        get: operations["get-purchasing-named-recurring-document-key"];
        put?: never;
        post?: never;
        /**
         * Delete a recurring document
         * @description Deletes a recurring document.
         */
        delete: operations["delete-purchasing-recurring-document-key"];
        options?: never;
        head?: never;
        /**
         * Update a recurring document
         * @description Updates an existing recurring document by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-purchasing-recurring-document-key"];
        trace?: never;
    };
    "/objects/purchasing/recurring-document-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List recurring document lines
         * @description Returns a collection with a key, ID, and link for each recurring document line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-recurring-document-line"];
        put?: never;
        /**
         * Create a recurring document line
         * @description Creates a new recurring document line.
         */
        post: operations["create-purchasing-recurring-document-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/recurring-document-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring document line.
                 * @example 19
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a recurring document line
         * @description Returns detailed information for a specified recurring document line.
         */
        get: operations["get-purchasing-recurring-document-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a recurring document line
         * @description Deletes a recurring document line.
         */
        delete: operations["delete-purchasing-recurring-document-line-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/recurring-document-subtotal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List recurring document subtotals
         * @description Returns a collection with a key, ID, and link for each recurring document subtotal. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-purchasing-recurring-document-subtotal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/purchasing/recurring-document-subtotal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring document subtotal.
                 * @example 64
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a recurring document subtotal
         * @description Returns detailed information for a specified recurring document subtotal.
         */
        get: operations["get-purchasing-recurring-document-subtotal-key"];
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
        /** @description A purchasing document contains information about purchasing transactions. */
        "objects.purchasing.document": {
            /**
             * @description System-assigned key for the purchasing document.
             * @example 66
             */
            readonly key?: string;
            /**
             * @description System-assigned key for the purchasing document.
             * @example 66
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the purchasing document.
             * @example /objects/purchasing/document::Purchase%20Invoice/66
             */
            readonly href?: string;
            /**
             * @description Name or other unique ID for the purchasing document.
             * @example Purchase Invoice-PO-O122
             */
            readonly documentId?: string;
            /**
             * @description Document number for the purchasing document. If the transaction definition does not have a numbering sequence configured, provide a number to identify the transaction.
             * @example PO-O122
             */
            documentNumber?: string;
            /**
             * @description Type of the associated transaction.
             * @example Purchase Invoice
             */
            readonly documentType?: string;
            /**
             * @description State of the purchasing document.
             * @default pending
             * @example draft
             * @enum {string}
             */
            state?: "submitted" | "approved" | "partiallyApproved" | "declined" | "draft" | "pending" | "closed" | "inProgress" | "converted" | "partiallyConverted" | "exception" | "analyzing";
            /**
             * @description Indicates whether the document has been printed.
             * @default false
             * @example true
             */
            readonly isPrinted?: boolean;
            /**
             * @description Indicates whether the transaction is a back order.
             * @default false
             * @example false
             */
            readonly isBackordered?: boolean;
            /**
             * Format: decimal-precision-2
             * @description Subtotal of the document in base currency.
             * @example 50.10
             */
            readonly subtotal?: string;
            /**
             * Format: decimal-precision-2
             * @description Subtotal of the document in transaction currency.
             * @example 51.10
             */
            readonly subtotalInTxnCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description The sum of values across all lines in the document.
             * @example 100.10
             */
            readonly total?: string;
            /**
             * Format: decimal-precision-2
             * @description Total in the transaction currency.
             * @example 100.11
             */
            readonly totalInTxnCurrency?: string;
            /**
             * @description Base currency for the transaction.
             * @example USD
             */
            baseCurrency?: string;
            /**
             * @description Currency used for the transaction.
             * @example USD
             */
            txnCurrency?: string;
            /** @description Exchange rate details used to calculate the base amount. */
            exchangeRate?: {
                /**
                 * Format: date
                 * @description Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                 * @example 2024-01-23
                 */
                date?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Exchange rate used to calculate the base amount from the transaction amount.
                 * @example 1.0789
                 */
                rate?: string;
                /**
                 * @description Exchange rate type used to calculate the base amount from the transaction amount.
                 * @example 1
                 */
                typeId?: string;
                /**
                 * @description The name of exchange rate type.
                 * @example Intacct Daily Rate
                 */
                typeName?: string;
            };
            /**
             * Format: date
             * @description Date on the purchasing document.
             * @example 2024-04-04
             */
            txnDate?: string;
            /**
             * Format: date
             * @description Due date for the purchasing document.
             * @example 2024-04-04
             */
            dueDate?: string;
            /**
             * @description Indicates whether the purchasing document is system generated.
             * @default false
             * @example true
             */
            readonly isSystemGeneratedDocument?: boolean;
            /**
             * Format: date
             * @description The date on which purchasing document posts to the General Ledger.
             * @example 2024-04-04
             */
            postingDate?: string;
            /**
             * @description Reference to another document, as needed.
             * @example PURCHASE-100
             */
            referenceNumber?: string;
            /**
             * @description The number by which to reference a bill or other vendor document. A number is required only if Accounts Payable is configured to require numbers on bills, adjustments, and recurring bills.
             * @example A2330-12
             */
            vendorDocumentNumber?: string;
            /**
             * @description Notes about the purchasing document.
             * @example Fast order
             */
            notes?: string;
            /**
             * @description Text to appear on the printed document.
             * @example Lowry solutions
             */
            memo?: string;
            /**
             * @description Payment status for the transaction.
             * @default open
             * @example paid
             * @enum {string}
             */
            readonly paymentStatus?: "paid" | "partiallyPaid" | "selected" | "open";
            /**
             * Format: date
             * @description Indicates the date after which the transaction should be be canceled.
             * @example 2024-05-04
             */
            cancelAfterDate?: string;
            /**
             * Format: date
             * @description The date before which goods cannot be shipped.
             * @example 2024-04-04
             */
            doNotShipBeforeDate?: string;
            /**
             * Format: date
             * @description The date after which goods cannot be shipped.
             * @example 2024-05-04
             */
            doNotShipAfterDate?: string;
            /**
             * Format: date
             * @description The date the customer requests the goods to arrive on their premises. The default is the due date.
             * @example 2024-04-12
             */
            requestedShippingDate?: string;
            /**
             * Format: date
             * @description The date the vendor promised to deliver the goods.
             * @example 2024-04-08
             */
            promisedDate?: string;
            /**
             * Format: date
             * @description Valid start date of a purchase order or purchase contract.
             * @example 2024-04-04
             */
            contractStartDate?: string;
            /**
             * Format: date
             * @description Valid end date of a purchase order or purchase contract.
             * @example 2024-05-04
             */
            contractEndDate?: string;
            /**
             * Format: decimal-precision-2
             * @description Default retainage percentage.
             * @example 50.10
             */
            retainagePercent?: string;
            /** @description Contacts associated with the purchasing document. */
            contacts?: {
                /** @description Primary contact for the purchasing document. */
                primary?: {
                    /**
                     * @description Unique key for the primary contact.
                     * @example 13
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the primary contact.
                     * @example Main contact
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact-version/13
                     */
                    readonly href?: string;
                };
                /** @description Contact to ship to. */
                shipTo?: {
                    /**
                     * @description Unique key for the contact to ship to.
                     * @example 43
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the contact to ship to.
                     * @example shipping contact
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact to ship to.
                     * @example /objects/company-config/contact-version/43
                     */
                    readonly href?: string;
                };
                /** @description Contact to bill to. */
                billTo?: {
                    /**
                     * @description Unique key for the contact to bill to.
                     * @example 44
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the contact to bill to.
                     * @example Main billing contact
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact to bill to.
                     * @example /objects/company-config/contact-version/44
                     */
                    readonly href?: string;
                };
                /** @description Contact to deliver to. */
                deliverTo?: {
                    /**
                     * @description Unique key for the contact to deliver to.
                     * @example 66
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the contact to deliver to.
                     * @example Main deliver-to contact
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact to deliver to.
                     * @example /objects/company-config/contact-version/66
                     */
                    readonly href?: string;
                };
            };
            /** @description Shipping method for the order. */
            shippingMethod?: {
                /**
                 * @description Unique key for the shipping method.
                 * @example 77
                 */
                key?: string;
                /**
                 * @description Unique ID for the shipping method.
                 * @example Air
                 */
                id?: string;
                /**
                 * @description URL endpoint for the shipping method.
                 * @example /objects/accounts-receivable/shipping-method/77
                 */
                readonly href?: string;
            };
            /** @description Accounts Payable (AP) term, which determines the expiration date for quotes and the due date for invoices. */
            paymentTerm?: {
                /**
                 * @description URL endpoint for the AP term.
                 * @example /objects/accounts-payable/term/75
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the AP term.
                 * @example 75
                 */
                key?: string;
                /**
                 * @description Unique ID for the AP term.
                 * @example 10 Days
                 */
                id?: string;
            };
            /** @description Transaction definition that is associated with this transaction. */
            txnDefinition?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description Name of the transaction definition.
                 * @example Purchase Invoice
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition/11
                 */
                readonly href?: string;
            };
            /** @description The source transaction from which the purchasing document was created. */
            sourceDocument?: {
                /**
                 * @description Unique key for the source document.
                 * @example 44
                 */
                key?: string;
                /**
                 * @description Unique ID for the source document.
                 * @example Purchase Order-PO0022
                 */
                id?: string;
                /**
                 * @description Document type of the source document.
                 * @example Purchase Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the source document.
                 * @example /objects/purchasing/document::Purchase%20Order/44
                 */
                readonly href?: string;
            };
            /** @description The associated tax solution for the transaction. Tax solutions are available for different countries, for example Australia GST or South Africa VAT. */
            taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 44
                 */
                key?: string;
                /**
                 * @description Unique ID for the tax solution.
                 * @example simpleTax
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/taxsolution/44
                 */
                readonly href?: string;
                /**
                 * @description Calculation method used for the tax solution.
                 * @default null
                 * @example noTax
                 * @enum {string|null}
                 */
                readonly taxCalculationMethod?: null | "noTax" | "simpleTax" | "advancedTax" | "avaTax" | "VAT";
                /**
                 * @description Indicates whether to show multiple taxes per line.
                 * @default true
                 * @example true
                 */
                readonly showMultilineTax?: boolean;
            };
            /** @description Vendor associated with the purchasing document. */
            vendor?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description Unique ID for the vendor.
                 * @example ALPHA001
                 */
                id?: string;
                /**
                 * @description IA.VENDOR_NAME
                 * @example ALPH Apartments
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/15
                 */
                readonly href?: string;
            };
            /** @description The bill associated with this purchasing document. */
            bill?: {
                /**
                 * @description Unique key for the AP bill.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the AP bill.
                 * @example 1
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the AP bill.
                 * @example /objects/accounts-payable/bill/1
                 */
                readonly href?: string;
            };
            /** @description Supporting document for this transaction. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 41
                 */
                key?: string;
                /**
                 * @description Unique ID for the attachment.
                 * @example Balance attachment
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/41
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
            /** @description Record URL for the Purchasing document. */
            readonly webURL?: string;
            entity?: components["schemas"]["entity-ref"];
            status?: components["schemas"]["status"];
            /**
             * @description Specifies whether the transaction is a regular invoice (invoice) or an electronic invoice (eInvoice).
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
             * @description Details about the expected scope of work to be performed or materials to be delivered. Use 4000 or fewer characters. (Construction subscription)
             * @example Subcontractor agrees to provide labor and materials for utility trenching for Five Oaks Storage facilities according to contract.
             */
            scope?: string | null;
            /**
             * @description Details related to items that are explicitly included in the terms of this document. Use 4000 or fewer characters. (Construction subscription)
             * @example Includes drive through building
             */
            inclusions?: string | null;
            /**
             * @description Details related to items that are explicitly excluded in the terms of this document. Use 4000 or fewer characters. (Construction subscription)
             * @example Excludes additional purchase
             */
            exclusions?: string | null;
            /**
             * @description Additional terms or performance obligations. Use 4000 or fewer characters. (Construction subscription)
             * @example Follow all safety rules and security procedure that are in force and applicable during execution of work.
             */
            terms?: string | null;
            /** @description Additional details for Quote or Requisition and Order type documents. (Construction subscription) */
            schedule?: {
                /**
                 * Format: date
                 * @description Scheduled start date in the yyyy-mm-dd format.
                 * @example 2024-05-07
                 */
                scheduledStartDate?: string | null;
                /**
                 * Format: date
                 * @description Original scheduled date for completion of the work in the yyyy-mm-dd format.
                 * @example 2024-10-07
                 */
                scheduledCompletionDate?: string | null;
                /**
                 * Format: date
                 * @description Actual start date in the yyyy-mm-dd format.
                 * @example 2024-05-07
                 */
                actualStartDate?: string | null;
                /**
                 * Format: date
                 * @description Date the work is actually complete in the yyyy-mm-dd format.
                 * @example 2024-10-10
                 */
                actualCompletionDate?: string | null;
                /**
                 * Format: date
                 * @description Revised completion date in yyyy-mm-dd format for the work (caused by changes).
                 * @example 2024-11-01
                 */
                revisedCompletionDate?: string | null;
                /**
                 * Format: date
                 * @description Date the work is considered substantially complete in the yyyy-mm-dd format. Typically used as a milestone to identify when payment obligations are due.
                 * @example 2024-10-10
                 */
                substantialCompletionDate?: string | null;
                /**
                 * Format: date
                 * @description Date when a formal notice to proceed was given in the yyyy-mm-dd format.
                 * @example 2024-10-10
                 */
                noticeToProceedDate?: string | null;
                /**
                 * Format: date
                 * @description Date when a response is expected from an external party in the yyyy-mm-dd format.
                 * @example 2024-10-10
                 */
                responseDueDate?: string | null;
                /**
                 * Format: date
                 * @description Date the related contract document was formally executed in the yyyy-mm-dd format.
                 * @example 2024-10-10
                 */
                executedOnDate?: string | null;
                /**
                 * @description Details about any impacts on the current schedule. Use 100 or fewer characters.
                 * @example None
                 */
                scheduleImpactNotes?: string | null;
            };
            internalReference?: components["schemas"]["internal-document-ref"];
            externalReference?: components["schemas"]["external-document-ref"];
            /** @description Performance bond details from the vendor or a company for an order. (Construction subscription) */
            performanceBond?: {
                /**
                 * @description Set to `true` if a performance bond is required.
                 * @default false
                 * @example false
                 */
                isRequired?: boolean;
                /**
                 * @description Set to `true` if a performance bond was received.
                 * @default false
                 * @example false
                 */
                isReceived?: boolean;
                /**
                 * Format: decimal-precision-2
                 * @description Amount of the performance bond.
                 * @example 1000.00
                 */
                amount?: string | null;
                /** @description Vendor for the related surety company providing the performance bond. (Construction subscription) */
                vendor?: {
                    /**
                     * @description Unique key for the vendor.
                     * @example 11
                     */
                    key?: string | null;
                    /**
                     * @description Unique ID for the vendor.
                     * @example VND-IND-0081
                     */
                    id?: string | null;
                    /**
                     * @description User-specified name for the vendor.
                     * @example Vendor-India-0081
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the vendor.
                     * @example /objects/accounts-payable/vendor/11
                     */
                    readonly href?: string | null;
                };
            };
            /** @description Payment bond details from the vendor or a company for an order. (Construction subscription) */
            paymentBond?: {
                /**
                 * @description Set to `true` if a payment bond is required.
                 * @default false
                 * @example false
                 */
                isRequired?: boolean;
                /**
                 * @description Set to `true` if a payment bond was received.
                 * @default false
                 * @example false
                 */
                isReceived?: boolean;
                /**
                 * Format: decimal-precision-2
                 * @description Amount of the payment bond.
                 * @example 1000.00
                 */
                amount?: string | null;
                /** @description Vendor for the related surety company providing the payment bond. (Construction subscription) */
                vendor?: {
                    /**
                     * @description System-assigned key for the vendor.
                     * @example 21
                     */
                    key?: string | null;
                    /**
                     * @description Unique ID for the vendor.
                     * @example VND-IND-0081
                     */
                    id?: string | null;
                    /**
                     * @description User-specified name for the vendor.
                     * @example Vendor-India-0081
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the vendor.
                     * @example /objects/accounts-payable/vendor/21
                     */
                    readonly href?: string | null;
                };
            };
            /** @description Primary document related details. Calculated when the transaction is a change order. (Construction subscription) */
            readonly primaryDocumentDetails?: {
                /**
                 * Format: decimal-precision-10
                 * @description Total quantity converted to a downstream document from the original quantity entered. Calculated when the transaction is a change order. (Construction subscription)
                 * @example 5.0000000000
                 */
                readonly totalQuantityConverted?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Total price converted to a downstream document from the original price entered. Calculated when the transaction is a change order. (Construction subscription)
                 * @example 5.0000000000
                 */
                readonly totalPriceConverted?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Total amount converted to a downstream document from the original amount entered. Calculated when the transaction is a change order. (Construction subscription)
                 * @example 5.0000000000
                 */
                readonly totalAmountConverted?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Total amount remaining after a partial conversion of this transaction. Calculated when the transaction is a change order. (Construction subscription)
                 * @example 5.0000000000
                 */
                readonly totalAmountRemaining?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Total quantity remaining after a partial conversion of this transaction. Calculated when the transaction is a change order. (Construction subscription)
                 * @example 5.0000000000
                 */
                readonly totalQuantityRemaining?: string | null;
                /**
                 * Format: date
                 * @description Scheduled start date of the downstream document in the yyyy-mm-dd format. Set when the transaction is a change order. (Construction subscription)
                 * @example 2024-05-07
                 */
                readonly scheduledStartDate?: string | null;
                /**
                 * Format: date
                 * @description Actual start date of the downstream document in the yyyy-mm-dd format. Set when the transaction is a change order. (Construction subscription)
                 * @example 2024-05-07
                 */
                readonly actualStartDate?: string | null;
                /**
                 * Format: date
                 * @description Revised completion date of the downstream document in the yyyy-mm-dd format for the work (caused by changes). Set when the transaction is a change order. (Construction subscription)
                 * @example 2024-11-01
                 */
                readonly revisedCompletionDate?: string | null;
                /**
                 * @description Internal reference number of the downstream document. Set when the transaction is a change order. (Construction subscription)
                 * @example INT-01
                 */
                readonly internalReferenceNumber?: string | null;
                /**
                 * Format: date
                 * @description Internal approved on date of the downstream document. Set when the transaction is a change order. (Construction subscription)
                 * @example 2021-10-02
                 */
                readonly internalApprovedOnDate?: string | null;
                /** @description Internal employee who approved the downstream document. Set when the transaction is a change order. (Construction subscription) */
                readonly internalApprovedBy?: {
                    /**
                     * @description System-assigned key for the employee.
                     * @example 1
                     */
                    readonly key?: string | null;
                    /**
                     * @description Unique identifier for the employee.
                     * @example timreser
                     */
                    readonly id?: string | null;
                    /**
                     * @description Name for the employee.
                     * @example Tim Reser
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the employee.
                     * @example /objects/company-config/employee/1
                     */
                    readonly href?: string | null;
                };
                /**
                 * @description External reference number of the downstream document. Set when the transaction is a change order. (Construction subscription)
                 * @example EXT-01
                 */
                readonly externalReferenceNumber?: string | null;
                /**
                 * Format: date
                 * @description External approved on date of the downstream document. Set when the transaction is a change order. (Construction subscription)
                 * @example 2021-10-02
                 */
                readonly externalApprovedOnDate?: string | null;
                /** @description External contact who approved the downstream document. Set when the transaction is a change order. (Construction subscription) */
                readonly externalApprovedBy?: {
                    /**
                     * @description System-assigned key for the contact.
                     * @example 1
                     */
                    readonly key?: string | null;
                    /**
                     * @description Unique identifier for the contact.
                     * @example Johnson
                     */
                    readonly id?: string | null;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact/1
                     */
                    readonly href?: string | null;
                };
            };
            /** @description Revision details post change order. (Construction subscription) */
            revision?: {
                /**
                 * @description Whether the document has changes applied. (Construction subscription)
                 * @default false
                 * @example false
                 */
                readonly isDocumentChanged?: boolean;
                /**
                 * Format: decimal-precision-2
                 * @description Revised total. (Construction subscription)
                 * @example 1000.00
                 */
                readonly revisedTotal?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Revised subtotal. (Construction subscription)
                 * @example 1000.00
                 */
                readonly revisedSubTotal?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Revised total in transaction currency. (Construction subscription)
                 * @example 1000.00
                 */
                readonly revisedTotalInTxnCurrency?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Revised subtotal in transaction currency. (Construction subscription)
                 * @example 1000.00
                 */
                readonly revisedSubTotalInTxnCurrency?: string | null;
                /**
                 * @description Log number for tracking the number of changes applied to a source transaction. Default 0 for a source transaction, 1 for a change transaction. (Construction subscription)
                 * @example 1
                 */
                changeLogNumber?: number;
            };
            /**
             * @description Document ID of the source transaction when updating a change order. Set when the transaction is a change order. (Construction subscription)
             * @example Invoice-PO#0140#inv
             */
            readonly relatedDocumentNumber?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Draft changes total. Calculated when the transaction is a change order. (Construction subscription)
             * @example 1000.00
             */
            readonly draftChangesTotal?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Posted changes total. Calculated when the transaction is a change order. (Construction subscription)
             * @example 1000.00
             */
            readonly postedChangesTotal?: string | null;
            /**
             * Format: decimal-precision-10
             * @description The original transaction amount before any changes or adjustments. Calculated when the transaction is a change order. (Construction subscription)
             * @example 100.0000000000
             */
            readonly originalAmount?: string | null;
            /** @description Project associated with the purchasing document. */
            project?: {
                /**
                 * @description System-assigned unique key for the project.
                 * @example 2
                 */
                key?: string | null;
                /**
                 * @description Unique identifier of the project.
                 * @example NET-XML30-2
                 */
                id?: string | null;
                /**
                 * @description Name of the project.
                 * @example Talcomp training
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/2
                 */
                readonly href?: string | null;
            };
            /** @description Lines of the purchasing document. */
            lines?: components["schemas"]["objects.purchasing.document-line"][];
            /** @description Lines of the purchasing document subtotal. */
            subtotals?: components["schemas"]["objects.purchasing.document-subtotal"][];
            /** @description Lines of the purchasing document history. */
            history?: components["schemas"]["objects.purchasing.document-history"][];
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
        "purchasing-documentRequiredProperties": {
            /** @example AXN */
            vendor?: unknown;
            lines?: {
                /** @example { "item": { "id": "1" }, "warehouse": { "id": "1" }, "location": { "id": "1" }} */
                dimensions?: unknown;
            }[];
        };
        "purchasing-document-actions-submit-request": {
            /**
             * @description System-assigned key for the purchasing document.
             * @example 66
             */
            key: string;
        };
        "purchasing-document-actions-submit-response": {
            /**
             * @description System-assigned key for the purchasing document.
             * @example 66
             */
            key?: string;
            /**
             * @description Unique identifier for the purchasing document.
             * @example Purchase Invoice-PO-O122
             */
            id?: string;
            /**
             * @description URL for the purchasing document.
             * @example /objects/purchasing/document::Purchase%20Invoice/66
             */
            href?: string;
            /**
             * @description State of the purchasing document
             * @example submitted
             * @enum {string}
             */
            readonly state?: "submitted";
        };
        "purchasing-document-actions-approve-request": {
            /**
             * @description System-assigned key for the purchasing document.
             * @example 66
             */
            key: string;
            /**
             * @description Notes or comments about this purchasing document.
             * @example Approved, ready for use
             */
            notes?: string;
            /**
             * @description System-assigned key for the purchasing document line.
             * @example [
             *       "101",
             *       "102"
             *     ]
             */
            lineKeys?: string[];
        };
        "purchasing-document-actions-approve-response": {
            /**
             * @description System-assigned key for the purchasing document.
             * @example 66
             */
            key?: string;
            /**
             * @description Unique identifier for the purchasing document.
             * @example Purchase Invoice-PO-O122
             */
            id?: string;
            /**
             * @description URL for the purchasing document.
             * @example /objects/purchasing/document::Purchase%20Invoice/66
             */
            href?: string;
            /**
             * @description State of the purchasing document
             * @example approved
             * @enum {string}
             */
            readonly state?: "approved";
        };
        "purchasing-document-actions-decline-request": {
            /**
             * @description System-assigned key for the purchasing document.
             * @example 132
             */
            key: string;
            /**
             * @description Notes or comments about this purchasing document.
             * @example Declined, missing information
             */
            notes?: string;
            /**
             * @description System-assigned key for the purchasing document line.
             * @example [
             *       "101",
             *       "102"
             *     ]
             */
            lineKeys?: unknown[][];
        };
        "purchasing-document-actions-decline-response": {
            /**
             * @description System-assigned key for the purchasing document.
             * @example 66
             */
            key?: string;
            /**
             * @description Unique identifier for the purchasing document.
             * @example Purchase Invoice-PO-O122
             */
            id?: string;
            /**
             * @description URL for the purchasing document.
             * @example /objects/purchasing/document::Purchase%20Invoice/66
             */
            href?: string;
            /**
             * @description State of the purchasing document
             * @example declined
             * @enum {string}
             */
            state?: "declined";
        };
        /** @description Line items in a purchasing document represent purchasing transactions. */
        "objects.purchasing.document-line": {
            /**
             * @description System-assigned unique key for the purchasing document line item.
             * @example 44
             */
            readonly key?: string;
            /**
             * @description ID for the purchasing document line item. This value is the same as key for this object.
             * @example 44
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the purchasing document line item.
             * @example /objects/purchasing/document-line::Purchase%20Invoice/44
             */
            readonly href?: string;
            /**
             * @description The type of transaction document.
             * @example Purchase Invoice
             */
            readonly documentType?: string;
            /**
             * @description Line number for the document line.
             * @example 1
             */
            readonly lineNumber?: number;
            /** @description Item associated with the document line. */
            item?: {
                /**
                 * @description Unique key for the item.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description ID for the item.
                 * @example MX001
                 */
                id?: string;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/10
                 */
                readonly href?: string;
            };
            /**
             * @description Description of the line item.
             * @example Computer
             */
            lineDescription?: string;
            /**
             * @description Memo about the document line item.
             * @example Payment ACH
             */
            memo?: string;
            /**
             * @description Unit associated with this document line item.
             * @example Each
             */
            unit?: string;
            /**
             * Format: decimal-precision-10
             * @description Quantity associated with this document line item.
             * @example 40.10
             */
            readonly quantity?: string;
            /**
             * Format: decimal-precision-10
             * @description Unit quantity associated with this document line item.
             * @example 10.10
             */
            unitQuantity?: string;
            /**
             * Format: decimal-precision-10
             * @description Unit price associated with this line item.
             * @example 10.50
             */
            unitPrice?: string;
            /**
             * Format: decimal-precision-10
             * @description The price is computed based on unit factor.
             * @example 33.66
             */
            readonly price?: string;
            /**
             * Format: decimal-precision-10
             * @description Quantity of items converted to a downstream document from the original quantity entered.
             * @example 5.10
             */
            readonly quantityConverted?: string;
            /**
             * Format: decimal-precision-10
             * @description Suggested retail price for the item.
             * @example 10.44
             */
            readonly retailPrice?: string;
            /**
             * Format: decimal-precision-10
             * @description Price of converted document.
             * @example 200
             */
            readonly priceConverted?: string;
            /**
             * Format: decimal-precision-14
             * @description Tolerance limit allowed for the quantity to vary from the parent document.
             * @example 10.55
             */
            readonly quantityToleranceVariance?: string;
            /**
             * Format: decimal-precision-14
             * @description Tolerance limit allowed for the price to vary from the parent document.
             * @example 22.10
             */
            readonly priceToleranceVariance?: string;
            audit?: components["schemas"]["audit.s1"];
            status?: components["schemas"]["status"];
            /**
             * @description Cost method associated with the document line item.
             * @default null
             * @example average
             * @enum {string|null}
             */
            readonly costMethod?: null | "standard" | "average" | "FIFO" | "LIFO";
            /** @description Source purchasing document. */
            sourceDocument?: {
                /**
                 * @description Unique key for the purchasing document.
                 * @example 77
                 */
                key?: string;
                /**
                 * @description The source transaction from which the purchasing document was created.
                 * @example Purchase Order-PO0022
                 */
                id?: string;
                /**
                 * @description Type of the purchasing document.
                 * @example Purchase Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the purchasing document.
                 * @example /objects/purchasing/document::Purchase%20Order/77
                 */
                readonly href?: string;
            };
            /** @description Source document line that needs to be converted. */
            sourceDocumentLine?: {
                /**
                 * @description Unique key for the purchasing document line item.
                 * @example 2234
                 */
                key?: string;
                /**
                 * @description ID for the purchasing document line item.
                 * @example 2234
                 */
                id?: string;
                /**
                 * @description Type of purchasing document.
                 * @example Purchase Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the purchasing document line item.
                 * @example /objects/purchasing/document-line::Purchase%20Order/2234
                 */
                readonly href?: string;
            };
            /**
             * @description Base currency for the transaction.
             * @example USD
             */
            readonly baseCurrency?: string;
            /**
             * @description Currency used for the transaction.
             * @example CAD
             */
            readonly txnCurrency?: string;
            /**
             * Format: decimal-precision-10
             * @description Transaction price.
             * @example 10.00
             */
            priceInTxnCurrency?: string;
            /**
             * @description Indicates whether the line is billable.
             * @default true
             * @example true
             */
            isBillable?: boolean;
            /**
             * @description Indicates whether the line has been billed.
             * @default true
             * @example true
             */
            readonly isBilled?: boolean;
            /**
             * Format: decimal-precision-3
             * @description Tax rate for the document line item.
             * @example 10.050
             */
            taxRate?: string;
            /**
             * Format: decimal-precision-2
             * @description The line-level tax amount in base currency.
             * @example 10.50
             */
            readonly taxInBaseCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description The line-level tax amount in transaction currency.
             * @example 40.50
             */
            readonly taxInTxnCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description Discount applied to the line item.
             * @example 10.25
             */
            discount?: string;
            /**
             * @description Indicates whether the line item is taxable.
             * @default false
             * @example false
             */
            enableTax?: boolean;
            /**
             * Format: decimal-precision-10
             * @description Quantity of the item remaining.
             * @example 10.10
             */
            readonly quantityRemaining?: string;
            /**
             * @description Conversion type used for the transaction.
             * @default quantity
             * @example quantity
             * @enum {string}
             */
            conversionType?: "quantity" | "price";
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the document line.
                 */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 22
                     */
                    key?: string;
                    /**
                     * @description ID for the location.
                     * @example Arizona
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/22
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Department associated with the document line.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 9
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the department.
                     * @example Sales
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
                /**
                 * warehouse
                 * @description Warehouse associated with the document line.
                 */
                warehouse?: {
                    /**
                     * @description Unique key for the warehouse.
                     * @example 6
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the warehouse.
                     * @example WH01
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the warehouse.
                     * @example /objects/inventory-control/warehouse/6
                     */
                    readonly href?: string;
                };
                /**
                 * project
                 * @description Project associated with the document line.
                 */
                project?: {
                    /**
                     * @description Unique key for the associated project.
                     * @example 2
                     */
                    key?: string;
                    /**
                     * @description ID for the associated project.
                     * @example NET-XML30-2
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the project.
                     * @example /objects/projects/project/2
                     */
                    readonly href?: string;
                };
                /**
                 * task
                 * @description Task associated with the document line.
                 */
                task?: {
                    /**
                     * @description ID for the associated task.
                     * @example TSK01
                     */
                    id?: string;
                    /**
                     * @description Unique key for the associated task.
                     * @example 1
                     */
                    key?: string;
                    /**
                     * @description URL endpoint for the task.
                     * @example /objects/projects/task/1
                     */
                    readonly href?: string;
                };
            };
            /**
             * Format: date
             * @description The date the customer requests the goods to arrive on their premises. The default is the due date.
             * @example 2023-04-04
             */
            requestedShippingDate?: string;
            /**
             * Format: date
             * @description The date the goods should be shipped so they arrive when the customer needs them.
             * @example 2023-04-04
             */
            shipByDate?: string;
            /**
             * Format: date
             * @description Indicates the date after which the order can be canceled.
             * @example 2023-04-04
             */
            cancelAfterDate?: string;
            /**
             * Format: date
             * @description Do not ship before this date.
             * @example 2023-04-04
             */
            doNotShipBeforeDate?: string;
            /**
             * Format: date
             * @description Do not ship after this date.
             * @example 2023-04-04
             */
            doNotShipAfterDate?: string;
            /**
             * Format: date
             * @description Promised by date
             * @example 2023-04-04
             */
            deliveryDueDate?: string;
            /** @description Delivery method applies only to transaction documents that are configured as supplies purchase transactions. The delivery method is not populated for transaction documents that are not used for supplies purchase transactions. For more information, see [Supplies Inventory](https://www.intacct.com/ia/docs/en_US/help_action/Inventory_Control/Setting_up_Inventory_Control/configure-inventory-control-FbF.htm#SuppliesInventory) */
            deliveryMethod?: {
                /**
                 * @description Unique key for the delivery method.
                 * @example 77
                 */
                key?: string;
                /**
                 * @description Unique ID for the delivery method.
                 * @example Air
                 */
                id?: string;
                /**
                 * @description URL endpoint for the delivery method.
                 * @example /objects/accounts-receivable/shipping-method/77
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Date the order was confirmed.
             * @example 2023-04-04
             */
            orderConfirmationDate?: string;
            /**
             * @description The state of the document line in the approval process.
             * @example approved
             * @enum {string}
             */
            readonly approvalState?: null | "submitted" | "pendingApproval" | "approved" | "declined";
            /** @description Transaction allocation template for the line item, which distributes the amount across specified dimensions. */
            allocation?: {
                /**
                 * @description Unique key for the allocation.
                 * @example 14
                 */
                key?: string | null;
                /**
                 * @description ID for the allocation.
                 * @example Alloc1-WBS-US
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the allocation.
                 * @example /objects/general-ledger/txn-allocation-template/14
                 */
                readonly href?: string;
            };
            /** @description If Advanced Tax or VAT is enabled, the tax schedule used to capture tax details in the purchasing transaction. */
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
                 * @example /objects/tax/purchasing-tax-schedule/19
                 */
                readonly href?: string | null;
            };
            /** @description List of warehouse inventory details including serial number, aisle, bin, and row per item. */
            trackingDetail?: components["schemas"]["objects.purchasing.document-line-detail"][];
            /** @description Header lever details for the document line item. */
            documentHeader?: {
                /**
                 * @description Unique key for the purchasing document.
                 * @example 55
                 */
                key?: string;
                /**
                 * @description ID for the purchasing document.
                 * @example Purchase Invoice-PO0066
                 */
                id?: string;
                /**
                 * @description Type of the purchasing document.
                 * @example Purchase Invoice
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the purchasing document.
                 * @example /objects/purchasing/document::Purchase%20Invoice/55
                 */
                readonly href?: string;
            };
            /** @description Line-level retainage details. (Construction subscription) */
            retainage?: {
                /**
                 * Format: percent-precision-2
                 * @description Retainage percentage.
                 * @example 10.00
                 */
                percentage?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Base amount retained.
                 * @example 10.00
                 */
                baseAmountRetained?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Transaction amount retained.
                 * @example 10.00
                 */
                txnAmountRetained?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Extended price net retainage amount.
                 * @example 1000.0000000000
                 */
                readonly extendedPriceNetAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Extended base price net retainage amount.
                 * @example 1000.0000000000
                 */
                readonly extendedBasePriceNetAmount?: string | null;
            };
            /** @description Reference to the source transaction when creating a change order. (Construction subscription) */
            relatedDocument?: {
                /**
                 * @description System-assigned unique key for the purchasing document.
                 * @example 5151
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the purchasing document. This value is the same as the key for this object.
                 * @example 5151
                 */
                id?: string | null;
                /**
                 * @description Document number for the purchasing document.
                 * @example PO0550
                 */
                readonly documentNumber?: string | null;
                /**
                 * @description URL endpoint for the purchasing document.
                 * @example /objects/purchasing/document/5151
                 */
                readonly href?: string | null;
            };
            /** @description Reference to the source transaction line when creating a change order. (Construction subscription) */
            relatedDocumentLine?: {
                /**
                 * @description System-assigned unique key for the document line.
                 * @example 13965
                 */
                key?: string | null;
                /**
                 * @description Name or other unique ID for the document line.
                 * @example 13965
                 */
                id?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Unit quantity for the document line.
                 * @example 10.0000000000
                 */
                readonly unitQuantity?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Extended price in transaction currency for the document line.
                 * @example 1294.3200000000
                 */
                readonly extendedPriceInTxnCurrency?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Extended total cost for the document line.
                 * @example 1560.0000000000
                 */
                readonly extendedCost?: string | null;
                /**
                 * @description URL endpoint for the document line.
                 * @example /objects/purchasing/document-line/13965
                 */
                readonly href?: string | null;
            };
            /**
             * Format: decimal-precision-10
             * @description Extended price in transaction currency.
             * @example 1294.3200000000
             */
            extendedPriceInTxnCurrency?: string;
            /**
             * Format: decimal-precision-10
             * @description Extended total cost.
             * @example 1560.0000000000
             */
            extendedCost?: string;
            /** @description Line-level revised details post change order. (Construction subscription) */
            revision?: {
                /**
                 * @description Revised unit quantity.
                 * @example 10
                 */
                unitQuantity?: number | null;
                /**
                 * @description Revised quantity.
                 * @example 10
                 */
                quantity?: number | null;
                /**
                 * Format: decimal-precision-2
                 * @description Revised unit value.
                 * @example 80.00
                 */
                readonly unitValue?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Revised value.
                 * @example 80.00
                 */
                readonly value?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Revised transaction currency.
                 * @example 100.00
                 */
                readonly valueInTxnCurrency?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Revised price.
                 * @example 100.0000000000
                 */
                readonly price?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Revised unit price.
                 * @example 100.0000000000
                 */
                readonly unitPrice?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Revised transaction price.
                 * @example 100.0000000000
                 */
                readonly priceInTxnCurrency?: string | null;
            };
            /** @description Line-level draft details post change order. (Construction subscription) */
            draft?: {
                /**
                 * @description Draft unit quantity change.
                 * @example 10
                 */
                unitQuantity?: number | null;
                /**
                 * @description Draft quantity change.
                 * @example 10
                 */
                quantity?: number | null;
                /**
                 * Format: decimal-precision-10
                 * @description Draft price change.
                 * @example 20.0000000000
                 */
                price?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Draft base price change.
                 * @example 20.0000000000
                 */
                readonly basePrice?: string | null;
            };
            /** @description Line-level posted details post change order. (Construction subscription) */
            readonly posted?: {
                /**
                 * Format: decimal-precision-10
                 * @description Posted quantity change.
                 * @example 20.0000000000
                 */
                readonly quantity?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Posted extended price change.
                 * @example 10.0000000000
                 */
                readonly price?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Posted extended base price change.
                 * @example 10.0000000000
                 */
                readonly basePrice?: string | null;
            };
            /**
             * @description Indicates whether the line has been added by change document. (Construction subscription)
             * @default false
             * @example false
             */
            readonly addedByChangeDocument?: boolean;
            /**
             * @description Indicates whether the document line is reverse converted. (Construction subscription)
             * @default false
             * @example false
             */
            isReverseConversion?: boolean;
            /** @description Line-level reverse conversion details. (Construction subscription) */
            readonly reverseConversion?: {
                /**
                 * Format: decimal-precision-10
                 * @description Reverse converted price.
                 * @example 100.0000000000
                 */
                readonly price?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Reverse quantity converted.
                 * @example 10.0000000000
                 */
                readonly quantity?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Standard price converted.
                 * @example 100.0000000000
                 */
                readonly standardPrice?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Standard quantity converted.
                 * @example 10.0000000000
                 */
                readonly standardQuantity?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Total amount converted.
                 * @example 1000.0000000000
                 */
                readonly totalConvertedAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Total amount remaining.
                 * @example 500.0000000000
                 */
                readonly totalRemainingAmount?: string | null;
            };
            /** @description Reference to the source transaction for primary document order. (Construction subscription) */
            readonly primaryDocument?: {
                /**
                 * @description System-assigned unique key for the purchasing document.
                 * @example 3669
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the purchasing document. This value is the same as the `key` value for this object.
                 * @example 3669
                 */
                readonly id?: string | null;
                /**
                 * @description Unique number for the purchasing document.
                 * @example PO-Source01-R2-81
                 */
                readonly documentNumber?: string | null;
                /**
                 * @description URL endpoint for the purchasing document.
                 * @example /objects/purchasing/document/3669
                 */
                readonly href?: string | null;
            };
            /** @description Reference to the source transaction line item for primary document order. (Construction subscription) */
            readonly primaryDocumentLine?: {
                /**
                 * @description System-assigned unique key for the primary document line.
                 * @example 9156
                 */
                readonly key?: string | null;
                /**
                 * @description Name or other unique ID for the primary document line.
                 * @example 9156
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the primary document line.
                 * @example /objects/purchasing/document-line/9156
                 */
                readonly href?: string | null;
            };
            /** @description Amortization template for prepaid expense distribution. */
            amortizationTemplate?: {
                /**
                 * @description System-assigned key for the amortization template.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the amortization template.
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
             * @example 2024-01-01
             */
            amortizationStartDate?: string | null;
            /**
             * Format: date
             * @description End date for the amortization period.
             * @example 2024-12-31
             */
            amortizationEndDate?: string | null;
            /** @description Lines of the purchasing document line subtotal. */
            lineSubtotals?: components["schemas"]["objects.purchasing.document-line-subtotal"][];
        };
        "purchasing-document-lineRequiredProperties": {
            /** @example { "item": { "id": "1" }, "warehouse": { "id": "1" }, "location": { "id": "1" }} */
            dimensions?: unknown;
            /** @example 22 */
            documentHeader?: unknown;
        };
        /** @description List of warehouse inventory details including serial number, aisle, bin, and row per document line item. */
        "objects.purchasing.document-line-detail": {
            /**
             * @description System-assigned key for the document line detail object.
             * @example 55
             */
            readonly key?: string;
            /**
             * @description Unique ID for the document line detail object. This value is the same as the `key` for this object.
             * @example 55
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the document line detail object.
             * @example /objects/purchasing/document-line-detail/55
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-10
             * @description The quantity of the units being built for the combination of the tracking attributes specified for the line.
             * @example 10
             */
            quantity?: string;
            /**
             * @description Serial number of the line item.
             * @example S1001
             */
            serialNumber?: string;
            /**
             * @description The lot numbers for the units being built and the quantity being built for each lot.
             * @example L1001
             */
            lotNumber?: string;
            /**
             * Format: date
             * @description The expiration date for the units being built and the quantity being built.
             * @example 2023-04-04
             */
            expirationDate?: string;
            /** @description Aisle associated with the line details. */
            aisle?: {
                /**
                 * @description URL endpoint for the aisle.
                 * @example /objects/inventory-control/aisle/10
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the aisle.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Unique ID for the aisle.
                 * @example AISLE1
                 */
                id?: string;
            };
            /** @description The bin associated with the line details. */
            bin?: {
                /**
                 * @description URL endpoint for the bin.
                 * @example /objects/inventory-control/bin/20
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the bin.
                 * @example 20
                 */
                key?: string;
                /**
                 * @description Unique ID for the bin.
                 * @example BIN1
                 */
                id?: string;
            };
            /** @description The row associated with the line details. */
            row?: {
                /**
                 * @description URL endpoint for the row.
                 * @example /objects/inventory-control/row/15
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the row.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description Unique ID for the row.
                 * @example ROW1
                 */
                id?: string;
            };
            /** @description Item associated with the line details. */
            item?: {
                /**
                 * @description Unique key for the item.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Unique ID for the item.
                 * @example Battery
                 */
                id?: string;
                /**
                 * @description Name of the item.
                 * @example Battery
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/10
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            /** @description The Purchasing document line associated with the detail. */
            readonly purchasingDocumentLine?: {
                /**
                 * @description Unique key for the Purchasing document line.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the document line.
                 * @example 23
                 */
                readonly id?: string;
                /**
                 * @description Type of the Purchasing document in which the line resides.
                 * @example Purchase Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the Purchasing document line.
                 * @example /objects/purchasing/document-line::Purchase%20Order/23
                 */
                readonly href?: string;
            };
        };
        /** @description Details of the subtotals, taxes, discounts, charges, and more for the document line. */
        "objects.purchasing.document-line-subtotal": {
            /**
             * @description System-assigned key for the document line subtotal.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the document line subtotal. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the document line subtotal.
             * @example /objects/purchasing/document-line-subtotal/23
             */
            readonly href?: string;
            /**
             * @description Description of the document line subtotal.
             * @example VAT Tax
             */
            readonly description?: string;
            /**
             * Format: decimal-precision-8
             * @description A non-negative base amount for the document subtotal line.
             * @example 100.00
             */
            absoluteValue?: string;
            /**
             * Format: decimal-precision-8
             * @description Percentage value that is calculated for the subtotal line.
             * @example 5.00
             */
            readonly percentValue?: string;
            /**
             * Format: decimal-precision-8
             * @description The base total amount for the line item subtotal.
             * @example 105.00
             */
            readonly total?: string;
            /**
             * Format: decimal-precision-8
             * @description A non-negative amount for the subtotal line.
             * @example 100.00
             */
            txnAbsoluteValue?: string;
            /**
             * Format: decimal-precision-8
             * @description A non-negative total for the subtotal amount.
             * @example 105.00
             */
            readonly txnTotal?: string;
            /**
             * @description Set this field to `true` to allow users to override both tax detail (`taxDetail`) and the tax value (`txnAbsoluteValue`).
             * @default false
             * @example false
             */
            enableOverrideTax?: boolean;
            /** @description Tax details describe a specific type of tax that applies to document lines. */
            taxDetail?: {
                /**
                 * @description Unique key for the tax detail.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description ID for the tax detail.
                 * @example VAT Tax Detail
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax detail.
                 * @example /objects/tax/tax-detail/15
                 */
                readonly href?: string;
            };
            /**
             * @description When the `enableOverrideTax` field is set to `true`, users can provide `taxDetail`.
             *     The originally allotted `taxDetail` will then be assigned to `systemTaxDetail`.
             */
            readonly systemTaxDetail?: {
                /**
                 * @description Unique key for the tax detail.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description ID for the tax detail.
                 * @example VAT Tax Detail
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax detail object.
                 * @example /objects/tax/tax-detail/10
                 */
                readonly href?: string;
            };
            readonly dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the subtotal line.
                 */
                readonly location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 22
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the location.
                     * @example Arizona
                     */
                    id?: string;
                    /**
                     * @description Name of the location.
                     * @example Arizona
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/22
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Department associated with the subtotal line.
                 */
                readonly department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 9
                     */
                    readonly key?: string;
                    /**
                     * @description ID for the department.
                     * @example Accounting
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
            /** @description The Purchasing document line associated with the subtotal. */
            readonly documentLine?: {
                /**
                 * @description Unique key for the Purchasing document line.
                 * @example 6
                 */
                readonly key?: string;
                /**
                 * @description ID for the Purchasing document line.
                 * @example 6
                 */
                readonly id?: string;
                /**
                 * @description Type of the Purchasing document.
                 * @example Purchase Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the Purchasing document line.
                 * @example /objects/purchasing/document-line::Purchase%20Order/6
                 */
                readonly href?: string;
            };
            /** @description The Purchasing document in which the associated line resides. */
            readonly document?: {
                /**
                 * @description Unique key for the Purchasing document.
                 * @example 14
                 */
                key?: string;
                /**
                 * @description ID for the Purchasing document.
                 * @example 14
                 */
                id?: string;
                /**
                 * @description Type of the Purchasing document.
                 * @example Purchase Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the Purchasing document.
                 * @example /objects/purchasing/document::Purchase%20Order/14
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
        };
        /** @description History of workflow conversions associated with the purchasing transaction. */
        "objects.purchasing.document-history": {
            /**
             * @description System-assigned key for the purchasing document history.
             * @example 11
             */
            readonly key?: string;
            /**
             * @description Unique ID for the purchasing document history. This value is the same as the `key` for this object.
             * @example 11
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the purchasing document history.
             * @example /objects/purchasing/document-history/11
             */
            readonly href?: string;
            /** @description The transaction from which the corresponding purchasing transaction was converted. */
            readonly convertedFrom?: {
                /**
                 * @description Unique key for the purchasing document.
                 * @example 22
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the purchasing document.
                 * @example Purchase Order-ORINV#0182#doc
                 */
                readonly id?: string;
                /**
                 * @description Type of the purchasing document.
                 * @example Purchase Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the purchasing document.
                 * @example /objects/purchasing/document::Purchase%20Order/22
                 */
                readonly href?: string;
            };
            /** @description The transaction to which the corresponding purchasing transaction was converted. */
            readonly convertedTo?: {
                /**
                 * @description Unique key for the purchasing document.
                 * @example 14
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the purchasing document.
                 * @example Purchase Invoice-SUBINV#0182#doc
                 */
                readonly id?: string;
                /**
                 * @description Type of the purchasing document.
                 * @example Purchase Invoice
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the purchasing document.
                 * @example /objects/purchasing/document::Purchase%20Invoice/14
                 */
                readonly href?: string;
            };
            /** @description The purchasing document with which the history information is associated. */
            readonly purchasingDocument?: {
                /**
                 * @description Unique key for the purchasing document.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Name or other unique identifier for the purchasing document.
                 * @example Purchase Order-ORINV#0182#doc
                 */
                readonly id?: string;
                /**
                 * @description Type of the purchasing document.
                 * @example Purchase Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the document.
                 * @example /objects/purchasing/document::Purchase%20Order/22
                 */
                readonly href?: string;
            };
        };
        /** @description Details of subtotals, taxes, discounts, charges, and more for a purchasing transaction. */
        "objects.purchasing.document-subtotal": {
            /**
             * @description System-assigned unique key for the purchasing document subtotal.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description ID for the purchasing document subtotal. This value is the same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the purchasing document subtotal.
             * @example /objects/purchasing/document-subtotal/23
             */
            readonly href?: string;
            /**
             * @description Description of the document subtotal.
             * @example Tax
             */
            description?: string;
            /**
             * Format: decimal-precision-2
             * @description Non-negative base amount for the subtotal. API clients can set this value; when provided, it is used by the system when calculating any derived subtotal totals.
             * @example 40.50
             */
            absoluteValue?: string;
            /**
             * Format: decimal-precision-10
             * @description Percentage value that is calculated on the total of all line items of the document.
             * @example 10.50
             */
            percentValue?: string;
            /**
             * Format: decimal-precision-2
             * @description Non-negative transaction amount calculated across all other lines of the document.
             * @example 44.78
             */
            txnAbsoluteValue?: string;
            /**
             * Format: decimal-precision-2
             * @description The computed base amount for the subtotal.
             * @example 500.10
             */
            readonly total?: string;
            /**
             * Format: decimal-precision-2
             * @description The computed transaction amount for the subtotal.
             * @example 400.10
             */
            readonly txnTotal?: string;
            /** @description The purchasing document line associated with the subtotal. */
            readonly documentLine?: {
                /**
                 * @description Unique key for the purchasing document line.
                 * @example 10
                 */
                readonly key?: string;
                /**
                 * @description Type of the purchasing document.
                 * @example Purchase Order
                 */
                readonly documentType?: string;
                /**
                 * @description ID for the purchasing document line.
                 * @example 10
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the purchasing document line.
                 * @example /objects/purchasing/document-line::Purchase%20Order/10
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the document subtotal.
                 */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 22
                     */
                    key?: string;
                    /**
                     * @description ID for the location.
                     * @example Arizona
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/22
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Department associated with the document subtotal.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 9
                     */
                    readonly key?: string;
                    /**
                     * @description Unique ID of the department.
                     * @example Accounting
                     */
                    readonly id?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
            };
            /** @description Header lever details for the purchasing document subtotal. */
            readonly documentHeader?: {
                /**
                 * @description Unique key for the purchasing document.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description ID for the purchasing document.
                 * @example 23
                 */
                readonly id?: string;
                /**
                 * @description Type of the purchasing document.
                 * @example Purchase Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the purchasing document.
                 * @example /objects/purchasing/document::Purchase%20Order/23
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Use this object to provide additional configuration information about transaction definitions. */
        "objects.purchasing.document-configuration-preference": {
            /**
             * @description System-assigned key for the document configuration preference.
             * @example 33
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the document configuration preference.
             * @example 33
             */
            readonly id?: string;
            /**
             * @description Purchasing module name.
             * @default purchasing
             * @example purchasing
             * @enum {string}
             */
            readonly moduleName?: "purchasing";
            /** @description The transaction definition to which the configuration settings apply. */
            documentType?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 11
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the transaction definition.
                 * @example 11
                 */
                readonly id?: string;
                /**
                 * @description Unique name for the transaction definition.
                 * @example Purchase Invoice
                 */
                readonly name?: string;
                /**
                 * @description Status for the transaction definition.
                 * @example true
                 */
                readonly status?: boolean;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition::Purchase%20Invoice/11
                 */
                readonly href?: string;
            };
            /**
             * @description Set the frequency at which you want to post summaries of this document type.
             *     - eachDocument - Do not summarize multiple transactions, and instead process each transaction separately as it is saved.
             *     - daily - Summarize transactions by day. All transactions for the same day are summarized into a single journal entry.
             *     - monthly - Summarize transactions by month. All transactions for the same month are summarized into a single journal entry.
             * @default null
             * @example daily
             * @enum {string}
             */
            summaryFrequency?: null | "eachDocument" | "daily" | "monthly";
            /**
             * @description For transaction definitions that are configured for additional posting to the GL, specifies the journal to which to post the additional GL journal entries.
             *     Posting additional GL entries is typically used when a previous transaction in the workflow posted to the GL in a user-defined book.
             */
            additionalPostingJournal?: {
                /**
                 * @description Unique key for the journal.
                 * @example 240
                 */
                key?: string;
                /**
                 * @description Unique ID for the journal.
                 * @example POJ
                 */
                id?: string;
                /**
                 * @description Name or title of the journal.
                 * @example Purchasing Journal
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the journal.
                 * @example /objects/general-ledger/journal/240
                 */
                readonly href?: string;
            };
            /** @description For transaction definitions that are configured to post directly to the GL, specifies the journal to which to post journal entries related to purchasing. You can assign a user-defined journal if the corresponding transaction definition has the `postToGL` field set to `true`. */
            purchasingJournal?: {
                /**
                 * @description Unique key for the journal.
                 * @example 220
                 */
                key?: string;
                /**
                 * @description Unique ID for the journal.
                 * @example UNB
                 */
                id?: string;
                /**
                 * @description Name or title of the journal.
                 * @example Unbilled Journal
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the journal.
                 * @example /objects/general-ledger/journal/220
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies the custom email template that will be the default template when a user chooses to send an email from this transaction type.
             *
             *     Note that email templates associated with a vendor will override this email template setting for transactions for that vendor.
             */
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
                 * @example PO approval
                 */
                name?: string;
                /**
                 * @description URL endpoint for the email template.
                 * @example /objects/company-config/email-template/15
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the document configuration preference.
             * @example /objects/purchasing/document-configuration-preference/33
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description With match tolerances, Sage Intacct automatically compares the quantities and unit prices when you convert from one Purchasing transaction to the next. If the quantity or unit price in any line item is not within the tolerance range you set, Sage Intacct flags the draft or converted transaction with an exception. */
        "objects.purchasing.txn-match-tolerance-preference": {
            /**
             * @description System-assigned key for the transaction match tolerance preference.
             * @example 33
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the transaction match tolerance preference.
             * @example 33
             */
            readonly id?: string;
            /**
             * @description Purchasing module name.
             * @default purchasing
             * @example purchasing
             * @enum {string}
             */
            readonly moduleName?: "purchasing";
            /**
             * @description Specifies a transaction definition to validate. When a source transaction is converted to a new transaction with this transaction definition, the new transaction is flagged as an exception if either, or both, of the following are true:
             *     - The quantity for a line varies from the quantity in the converted-from transaction by more than the percent specified in the `quantityTolerance` field - if either under or over.
             *     - The unit price for a line varies from the unit price in the converted-from transaction by more than the percent specified in the `priceTolerance` field - if either under or over.
             */
            txnDefinitionToValidate?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description Unique ID for the transaction definition.
                 * @example 11
                 */
                id?: string;
                /**
                 * @description Unique name for the transaction definition.
                 * @example Purchase Invoice
                 */
                name?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition::Purchase%20Invoice/11
                 */
                readonly href?: string;
            };
            /**
             * Format: percent-precision-2
             * @description The percent variance in quantity (over or under) that triggers the converted-to transaction to be flagged with an exception. The variance is calculated based on the difference in quantity in the source transaction and the transaction being converted to.
             * @example 5.0
             */
            quantityTolerance?: string | null;
            /**
             * Format: percent-precision-2
             * @description The percent variance in unit price (over or under) that triggers the converted-to transaction to be flagged with an exception. The variance is calculated based on the difference in unit price in the source transaction and the transaction being converted to.
             * @example 10.0
             */
            priceTolerance?: string | null;
            /**
             * @description URL endpoint for the transaction match tolerance preference.
             * @example /objects/purchasing/txn-match-tolerance-preference/33
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s2"];
        };
        /**
         * @description AP automation with Purchasing allows you to define the purchasing transactions to automate. With automation, purchasing documents no longer need to be manually added and converted.
         *     Instead, Sage Intacct creates incoming transactions from uploaded or emailed vendor invoice documents.
         */
        "objects.purchasing.txn-automation-preference": {
            /**
             * @description System-assigned key for the transaction automation preference.
             * @example 51
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the transaction automation preference.
             * @example 51
             */
            readonly id?: string;
            /**
             * @description Purchasing module name.
             * @default purchasing
             * @example purchasing
             * @enum {string}
             */
            readonly moduleName?: "purchasing";
            /**
             * @description Entity where the transaction automation is used. Transaction automation set up at the top level applies to all entities.
             *     Transaction automation set up for a specific entity overrides any top-level transaction automation.
             */
            entity?: {
                /**
                 * @description Unique key for the entity.
                 * @example 7
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the entity.
                 * @example 7
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/7
                 */
                readonly href?: string;
            };
            /**
             * @description When automating transactions with document matching, the type of transaction definition that you want Sage Intacct to match the draft transaction to.
             *     An example of a source transaction definition is a purchase order.
             */
            sourceDocumentType?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description Unique ID for the transaction definition.
                 * @example 11
                 */
                id?: string;
                /**
                 * @description Unique name for the transaction definition.
                 * @example Purchase order
                 */
                name?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition::Purchase%20order/11
                 */
                readonly href?: string;
            };
            /**
             * @description The transaction definition that you want Sage Intacct to use when creating a draft transaction from an uploaded or emailed document.
             *     An example of a target transaction definition is a vendor invoice.
             */
            targetDocumentType?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 41
                 */
                key?: string;
                /**
                 * @description Unique ID for the transaction definition.
                 * @example 41
                 */
                id?: string;
                /**
                 * @description Unique name for the transaction definition.
                 * @example Purchase invoice
                 */
                name?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition::Purchase%20invoice/41
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the transaction automation preference.
             * @example /objects/purchasing/txn-automation-preference/51
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s2"];
        };
        /**
         * @description AP automation with Purchasing allows you to define the purchasing transactions to automate. With transaction automation, purchasing documents no longer need to be manually added and converted.
         *     Instead, Sage Intacct creates incoming transactions from uploaded or emailed vendor invoice documents.
         */
        "objects.purchasing.txn-automation-without-match-preference": {
            /**
             * @description System-assigned key for the transaction automation without match preference.
             * @example 30
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the transaction automation without match preference.
             * @example 30
             */
            readonly id?: string;
            /**
             * @description Purchasing module name.
             * @default purchasing
             * @example purchasing
             * @enum {string}
             */
            readonly moduleName?: "purchasing";
            /**
             * @description Entity where the transaction automation is used. Transaction automation set up at the top level applies to all entities.
             *     Transaction automation set up for a specific entity overrides any top-level transaction automation.
             */
            entity?: {
                /**
                 * @description Unique key for the entity.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the entity.
                 * @example 1
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/1
                 */
                readonly href?: string;
            };
            /**
             * @description The transaction definition that you want Intacct to use when creating a draft transaction from an uploaded or emailed document.
             *     An example of a target transaction definition is a vendor invoice.
             */
            targetDocumentType?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 12
                 */
                key?: string;
                /**
                 * @description Unique ID for the transaction definition.
                 * @example 12
                 */
                id?: string;
                /**
                 * @description Unique name for the transaction definition.
                 * @example Purchase invoice
                 */
                name?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition::Purchase%20invoice/12
                 */
                readonly href?: string;
            };
            /**
             * @description Endpoint for the transaction automation without match preference.
             * @example /objects/purchasing/txn-automation-without-match-preference/30
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description Purchasing price lists contain the prices for products or services that you purchase from vendors. */
        "objects.purchasing.price-list": {
            /**
             * @description System-assigned unique key for the purchasing price list.
             * @example 6
             */
            readonly key?: string;
            /**
             * @description Name or other unique identifier for the purchasing price list.
             * @example Base Price List Purchase
             */
            id?: string;
            /**
             * @description URL endpoint for the purchasing price list.
             * @example /objects/purchasing/price-list/6
             */
            readonly href?: string;
            /**
             * @description Specify the application that the price list applies to.
             * @enum {string}
             */
            readonly appliesTo?: "purchasing" | "orderEntry";
            /**
             * Format: date
             * @description Start date for the time frame in which the price list is effective.
             * @example 2021-01-01
             */
            startDate?: string;
            /**
             * Format: date
             * @description End date for the time frame in which the price list is effective.
             * @example 2100-12-31
             */
            endDate?: string;
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
        };
        "purchasing-price-listRequiredProperties": Record<string, never>;
        /** @description A purchasing price list entry contains the pricing for a selected item within a selected price list. You can create price list entries for items whose prices are determined based on an amount, a discount or mark up percentage, the quantity sold, and more. */
        "objects.purchasing.price-list-entry": {
            /**
             * @description System assigned unique key for the price list entry.
             * @example 38
             */
            readonly key?: string;
            /**
             * @description Unique ID for the price list entry.
             * @example 38
             */
            id?: string;
            /**
             * @description URL endpoint for the price list entry.
             * @example /objects/purchasing/price-list-entry/38
             */
            readonly href?: string;
            /** @description The product line to which the item belongs. */
            productLine?: {
                /**
                 * @description Unique key for the product line.
                 * @example 25
                 */
                key?: string;
                /**
                 * @description Unique name or other ID for the product line.
                 * @example Office_Supplies
                 */
                id?: string;
                /**
                 * @description URL endpoint for the product line.
                 * @example /objects/inventory-control/product-line/25
                 */
                readonly href?: string;
            };
            /**
             * @description Provide the currency in which the price will be evaluated. This field is only applicable to multi-currency companies.
             * @example USD
             */
            currency?: string;
            /**
             * Format: date
             * @description Provide the date on which the price becomes effective. You can enter past or future dates.
             * @example 2024-01-01
             */
            startDate?: string;
            /**
             * Format: date
             * @description Provide the date on which the price ends. You can enter past or future dates.
             * @example 2024-01-01
             */
            endDate?: string;
            /**
             * Format: decimal-precision-8
             * @description Specify a minimum quantity if you want to give or get price breaks according to the quantity ordered. With this type of pricing, the system multiplies the transaction quantity by the rate mapped to the quantity range in which the transaction quantity falls. Quantities cannot be negative.
             * @example 1
             */
            minimumQuantity?: string;
            /**
             * Format: decimal-precision-8
             * @description Specify a maximum quantity if you want to give or get price breaks according to the quantity ordered. With this type of pricing, the system multiplies the transaction quantity by the rate mapped to the quantity range in which the transaction quantity falls. Quantities cannot be negative.
             * @example 100
             */
            maximumQuantity?: string;
            /**
             * Format: decimal-precision-10
             * @description The value to provide for this field depends on the type set in the `valueType` field:
             *     * `actual`: Provide the price.  For example, if the item is $500.00, specify 500.00
             *     * `dollarMarkup`: Provide the amount by which to mark up the price. For example, to mark up the price by $25.00, specify 25.00.
             *     * `dollarDiscount`: Provide the amount to subtract from the price. For example, to give a $10.00 discount, specify 10.00.
             *     * `markupPercent`: Provide the percentage by which to mark up the price. For example, to mark up the price by 20%, specify 20.
             *     * `discountPercent`: Provide the percentage by which to discount the price. For example, to give a 5% discount, specify 5.
             * @example 60.56
             */
            value?: string;
            /**
             * @description The value type for the purchasing price list entry.
             * @default actual
             * @example actual
             * @enum {string}
             */
            valueType?: "actual" | "dollarMarkup" | "dollarDiscount" | "markupPercent" | "discountPercent";
            /**
             * @description Indicates whether the price is a fixed price. In a cascading (or layered) price list structure, the first time Sage Intacct finds `isFixedPrice` set to `true` for an item, it presents that price as the suggested price on the transaction regardless of any other price defined for that item in other price lists.
             * @default true
             * @example false
             */
            isFixedPrice?: boolean;
            /** @description This field is only applicable to companies subscribed to Projects and Time and Expenses.To define a project billing rate, use a combination of employee and item. Sage Intacct uses the price associated with this item-employee combination for applicable timesheets when invoices are generated for time and materials projects. */
            employee?: {
                /**
                 * @description Unique key for the employee.
                 * @example 25
                 */
                key?: string;
                /**
                 * @description Unique ID for the employee.
                 * @example 123
                 */
                id?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/25
                 */
                readonly href?: string;
            };
            /** @description Item to which the price list entry applies. */
            item?: {
                /**
                 * @description Unique key for item.
                 * @example 89
                 */
                key?: string;
                /**
                 * @description Unique ID for the item.
                 * @example Battery
                 */
                id?: string;
                /**
                 * @description Name of the item.
                 * @example Battery for Car
                 */
                name?: string;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/89
                 */
                readonly href?: string;
            };
            /** @description Price list associated with the price list entry. */
            priceList?: {
                /**
                 * @description Unique key for the purchasing price list.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique ID for the purchasing price list.
                 * @example Base Price List
                 */
                id?: string;
                /**
                 * @description URL endpoint for the price list.
                 * @example /objects/purchasing/price-list/1
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * @description Created by.
                 * @example Admin
                 */
                readonly createdBy?: string | null;
                /**
                 * @description Modified by.
                 * @example Admin
                 */
                readonly modifiedBy?: string | null;
            };
            status?: components["schemas"]["status"];
        };
        "purchasing-price-list-entryRequiredProperties": unknown | unknown;
        /** @description Purchasing price schedules are pricing groups that you can assign to one or more customers. */
        "objects.purchasing.price-schedule": {
            /**
             * @description System-assigned key for the purchasing price schedule.
             * @example 3
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the purchasing price schedule.
             * @example ColtSched21
             */
            id?: string;
            /**
             * @description URL for the purchasing price schedule.
             * @example /objects/purchasing/price-schedule/3
             */
            readonly href?: string;
            /**
             * @description Description of the purchasing price schedule.
             * @example Colt Price Schedule 2021
             */
            description?: string;
            /** @description Associated purchasing price list. */
            priceList?: {
                /**
                 * @description System-assigned key for the purchasing price list.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique identifier for the purchasing price list.
                 * @example Purchasing Price list
                 */
                id?: string;
                /**
                 * @description URL for the purchasing price list.
                 * @example /objects/purchasing/price-list/23
                 */
                readonly href?: string;
            };
            /**
             * Format: decimal-precision-2
             * @description Discount percentage for all items in the associated price list. A positive value decreases prices; a negative value increases prices.
             * @example 10
             */
            discountPercent?: string;
            audit?: components["schemas"]["audit.s1"];
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
        };
        "purchasing-price-scheduleRequiredProperties": Record<string, never>;
        /** @description When advanced workflows are enabled in a multi-entity company, subtotal templates allow you to create different sets of subtotals and then refer to them by name within a transaction definition. Subtotal templates simplify setting up and managing transactions definitions. */
        "objects.purchasing.subtotal-template": {
            /**
             * @description System-assigned unique key for the subtotal template.
             * @example 30
             */
            readonly key?: string;
            /**
             * @description Name or other unique ID for the subtotal template.
             * @example Invoice Charges
             */
            id?: string;
            /**
             * @description Key for the application module associated with this template.
             * @default 9.PO
             * @example 9.PO
             */
            readonly moduleKey?: string;
            /**
             * @description URL endpoint for the subtotal template.
             * @example /objects/purchasing/subtotal-template/30
             */
            readonly href?: string;
            /** @description Line item details for the subtotal template. */
            lines?: components["schemas"]["objects.purchasing.subtotal-template-line"][];
            audit?: components["schemas"]["audit.s1"];
        };
        "purchasing-subtotal-templateRequiredProperties": {
            lines?: unknown[];
        };
        /** @description This object provides details for individual purchasing subtotal template lines. */
        "objects.purchasing.subtotal-template-line": {
            /**
             * @description System-assigned unique key for the subtotal template line.
             * @example 28
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the subtotal template line. This value is the same as the `key` for this object.
             * @example 28
             */
            readonly id?: string;
            /**
             * @description Provide a description of the subtotal template line. Each description must be unique.
             * @example HandlingCharge
             */
            description?: string;
            /**
             * @description Specifies whether the subtotal line item is a `discount` or `charge`.
             * @example charge
             * @enum {string}
             */
            subtotalType?: "discount" | "charge";
            /**
             * @description Line number for the template line.
             * @example 1
             */
            lineNumber?: number;
            /**
             * @description The subtotal line item can be either an `amount` or a `percent`.
             * @example amount
             * @enum {string}
             */
            valueType?: "amount" | "percent";
            /**
             * Format: decimal-precision-10
             * @description Default value for the subtotal.
             *     * If `valueType` is `amount`, specify the amount of the subtotal. For example. specify `250`.
             *     * If `valueType` is `percent`, specify a percentage as a whole number. For example, specify `10` for 10%.
             *     End users can override the default subtotal value in a transaction. The default value can have up to 10 decimals and should be a positive numeric value.
             * @example 10
             */
            defaultValue?: string;
            /**
             * @description Indicates whether the discount subtotal will be apportioned across all line items in the transaction. Cannot be enabled if `isTax` is set to `true`.
             * @default false
             * @example false
             */
            isApportioned?: boolean;
            /**
             * @description When this field is set to true, the system treats the apportioned amount as a separate subtotal exclusively for subledger posting, while still distributing the amount across all transaction line items.
             * @default false
             * @example true
             */
            apportionedAsSubtotal?: boolean;
            /**
             * @description Indicates whether the subtotal will `debit` or `credit` the corresponding GL account and GL offset account.
             * @example debit
             * @enum {string|null}
             */
            txnType?: null | "debit" | "credit";
            /**
             * @description Specify the subtotal line number to which the subtotal will apply. Sage Intacct treats the initial subtotal line as line number 0. The first defined subtotal from the transaction definition is line number 1, the second defined subtotal is line number 2, and so on.
             * @example 1
             */
            applyToLineNumber?: number | null;
            /**
             * @description Set to `true` if the subtotal line is for tax. If set to `true`, when the transaction posts, the tax will post separately based on the items in the transaction.
             * @default false
             * @example false
             */
            isTax?: boolean;
            /**
             * @description Set to `true` if the subtotal line item applies to AvaTax. This field only applies if a company is configured to use the Avalara AvaTax integration.
             * @default false
             * @example false
             */
            isAvalaraTax?: boolean | null;
            /** @description Specify the GL account to which the subtotal will post. Transactions posted to a cash/bank GL account do not appear during reconciliation. */
            glAccount?: {
                /**
                 * @description Unique key for the account.
                 * @example 36
                 */
                key?: string;
                /**
                 * @description Unique ID for the account.
                 * @example 1200
                 */
                id?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/36
                 */
                readonly href?: string;
            };
            /** @description Specify the offset GL account to which the subtotal will post. */
            offsetGLAccount?: {
                /**
                 * @description Unique key for the account.
                 * @example 37
                 */
                key?: string;
                /**
                 * @description Unique ID for the account.
                 * @example 1200.01
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/37
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the subtotal template line.
             * @example /objects/purchasing/subtotal-template-line/23
             */
            readonly href?: string;
            /** @description The purchasing subtotal template that includes this line item detail. */
            subtotalTemplate?: {
                /**
                 * @description Unique key for the parent subtotal template.
                 * @example 30
                 */
                key?: string;
                /**
                 * @description Unique ID for the parent subtotal template.
                 * @example 30
                 */
                id?: string;
                /**
                 * @description URL endpoint for the parent subtotal template.
                 * @example /objects/purchasing/subtotal-template/30
                 */
                readonly href?: string;
            };
        };
        "purchasing-subtotal-template-lineRequiredProperties": Record<string, never>;
        /** @description Information about each secondary vendor. */
        "objects.purchasing.secondary-vendor": {
            /**
             * @description System-assigned key for the secondary vendor.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the secondary vendor. This value is the same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the secondary vendor.
             * @example /objects/purchasing/secondaryvendor/23
             */
            readonly href?: string;
            /**
             * @description Name of the secondary vendor.
             * @example Westside Electric
             */
            name?: string;
            /**
             * @description Name that will print on the check. Usually, this value is the vendor's pay-to contact name and the secondary vendor name.
             * @example Westside Electric
             */
            printAs?: string;
            /** @description The primary document associated with this secondary vendor. */
            primaryDocument?: {
                /**
                 * @description URL endpoint for the primary document.
                 * @example /objects/purchasing/document/23
                 */
                readonly href?: string;
                /**
                 * @description Primary document key.
                 * @example 19
                 */
                key?: string;
                /**
                 * @description Primary document ID.
                 * @example Purchase order 19
                 */
                id?: string;
            };
            /**
             * @description Indicates if an invoice lien waiver should be generated for this secondary vendor.
             * @example true
             */
            generateInvoiceLienWaiver?: boolean;
            /**
             * @description Indicates if a payemt lien waiver should be generated for this secondary vendor and under what conditions.
             * @default doNotGenerate
             * @example doNotGenerate
             * @enum {string}
             */
            generatePaymentLienWaiver?: "doNotGenerate" | "generateForAllPayments" | "generateForJointCheckPaymentsOnly";
            audit?: components["schemas"]["audit.s1"];
        };
        "purchasing-secondary-vendorRequiredProperties": Record<string, never>;
        /** @description Vendor GL groups are categories of vendors grouped together so that transactions can be posted to specific GL accounts. */
        "objects.purchasing.vendor-gl-group": {
            /**
             * @description System-assigned key for the vendor GL group.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Name of the vendor GL group.
             * @example GL Group
             */
            id?: string;
            /**
             * @description URL endpoint for the vendor GL group.
             * @example /objects/purchasing/vendor-gl-group/23
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "vendor-gl-groupRequiredProperties": Record<string, never>;
        /** @description A purchasing transaction definition includes the accounting rules, workflow settings, security settings, and other characteristics for a transaction. */
        "objects.purchasing.txn-definition": {
            /**
             * @description System-assigned unique key for the purchasing transaction definition.
             * @example 250
             */
            readonly key?: string;
            /**
             * @description ID for the purchasing transaction definition.
             * @example Purchase Order
             */
            id?: string;
            /**
             * @description URL endpoint for the purchasing transaction definition.
             * @example /objects/purchasing/txn-definition/250
             */
            readonly href?: string;
            /**
             * @description Purchasing transaction template type. Template type determines whether certain fields appear on the transaction.
             * @default quote
             * @example invoice
             * @enum {string}
             */
            docClass?: "quote" | "order" | "list" | "invoice" | "adjustment" | "other";
            /**
             * @description Workflow category associated with a purchasing transaction.
             * @default quote
             * @example return
             * @enum {string}
             */
            workflowCategory?: "quote" | "order" | "shipping" | "invoice" | "return";
            /**
             * @description Set to `true` to disable tax capture for the transaction.
             * @default false
             * @example false
             */
            disableTax?: boolean;
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `enableUserOrGroupPermission` field instead.
             * @default false
             */
            readonly enableUserOrGroupPermmission?: boolean;
            /**
             * @description By default, all users with the appropriate application permissions have access to transactions that use this transaction definition. To restrict access to certain users or groups, set this field to `true`.
             * @default false
             * @example true
             */
            readonly enableUserOrGroupPermission?: boolean;
            /**
             * @description Set to `true` to enable users to override whether a line item is taxable.
             * @default false
             * @example false
             */
            enableOverrideTax?: boolean;
            /**
             * @description Set to `true` to enable numbering sequence for the transaction.
             * @default false
             * @example false
             */
            enableNumberingSequence?: boolean;
            /**
             * @description Set to `true` to preserve sequence numbers.
             * @default false
             * @example false
             */
            preserveNumberingSequence?: boolean;
            /**
             * @description Set to `true` if transactions should inherit source document numbers. For example, a transaction could inherit a purchase order number.
             * @default false
             * @example false
             */
            inheritDocumentNumber?: boolean;
            /**
             * @description Document template to use for printed output (PDFs).
             * @example Purchasing
             */
            xslTemplate?: string;
            /**
             * @description Description about the purchasing transaction definition.
             * @example Document used for Purchase Return
             */
            description?: string;
            /**
             * @description Specify if inventory will be affected by the transaction and, if so, whether to track the quantity, value, or both.
             * @default no
             * @example no
             * @enum {string}
             */
            inventoryUpdateType?: "no" | "quantity" | "value" | "quantityAndValue";
            /**
             * @description Specify whether the transaction post process creates a GL entry and, if so, whether it will post directly to the GL or to the AP sub-ledger.
             * @default noPosting
             * @example toGL
             * @enum {string}
             */
            txnPostingMethod?: "toAP" | "toGL" | "noPosting";
            /**
             * @description Specify how the system processes transactions that are partially complete.
             * @default closeTransaction
             * @example closeTransaction
             * @enum {string}
             */
            partialConvertMethod?: "leaveTransactionOpen" | "closeOriginalAndCreateBackOrder" | "closeTransaction";
            /**
             * @description If `true` the transaction will affect the cost of items (Average, FIFO) in purchasing documents. This value is evaluated based on Inventory totals (On hand, Quantity, Quantity & Value).
             * @default false
             * @example false
             */
            readonly affectsCost?: boolean;
            exchangeRateType?: {
                /**
                 * @description Unique key for the exchange rate type.
                 * @example -1
                 */
                key?: string;
                /**
                 * @description The name of exchange rate type.
                 * @example Intacct Daily Rate
                 */
                id?: string;
                /**
                 * @description URL endpoint for the exchange rate type.
                 * @example /objects/company-config/exchange-rate-type/-1
                 */
                readonly href?: string;
            };
            /**
             * @description If set to `true`, users can edit both the exchange rate and the exchange rate type in transactions created from this definition.
             * @default true
             * @example false
             */
            overrideExchangeRateType?: boolean;
            /**
             * @description Specifies whether the transaction amounts are displayed in both base currency and transaction currency.
             * @default false
             * @example false
             */
            showBaseCurrency?: boolean;
            /**
             * @description Specifies whether to enforce customer credit limit restrictions in transactions created from this definition.
             * @default false
             * @example false
             */
            enableCreditLimitCheck?: boolean;
            /**
             * @description Set to `true` to freeze recalled values.
             * @default false
             * @example false
             */
            freezeRecallValue?: boolean;
            /**
             * @description Set to `true` to allow users to override line item prices in transactions created from this definition.
             * @default true
             * @example false
             */
            overridePrice?: boolean;
            /**
             * @description This field is applicable only if overridePrice is false. Set to `true` to allow users to hide line item prices in transactions created from this definition.
             * @default false
             * @example false
             */
            hidePrice?: boolean;
            /**
             * @description Set to `true` to specify standard subtotals, such as tax or a discount, for resulting transactions. If set to true, you must add at least one subtotal detail.
             * @default false
             * @example false
             */
            enableSubtotals?: boolean;
            /**
             * @description Set to `true` to show expanded tax details in the transaction user interface and in printed output. This field applies only to companies that use Avalara AvaTax or Sage Intacct Advanced Tax.
             * @default false
             * @example false
             */
            showExpandedTaxDetails?: boolean;
            /**
             * @description Set to `true` to allow users to override the department set for resulting transactions.
             * @default false
             * @example false
             */
            allowDepartmentOverride?: boolean;
            /**
             * @description Set to 'true' to allow users to override the location set for resulting transactions.
             * @default false
             * @example false
             */
            allowLocationOverride?: boolean;
            /**
             * @description Set to `true` if prices must be supplied.
             * @default false
             * @example false
             */
            requireSupplyOfPrices?: boolean;
            /**
             * @description Message displayed in the Print/Email document.
             * @example For any inquiries or assistance, please contact our customer service.
             */
            fixedMessage?: string;
            /**
             * @description Sets the edit permissions for this transaction type. By default, users cannot edit transactions after they are created.
             * @default all
             * @example noEdit
             * @enum {string}
             */
            editPolicy?: "noEdit" | "beforePrinting" | "editInDraftOnly" | "all";
            /**
             * @description Sets the delete permission for this transaction type. By default, users cannot delete transactions after they are created.
             * @default all
             * @example all
             * @enum {string}
             */
            deletePolicy?: "noDelete" | "beforePrinting" | "all";
            /**
             * @description Allow users to change the customer in Draft or Pending transactions if the transaction has not been converted to another transaction, the transaction date is in an open period, and the transaction's payment status is not `Paid` or `Partially paid`. By default, users cannot change the customer.
             * @default null
             * @example always
             * @enum {string|null}
             */
            customerVendorEditRule?: null | "always" | "exceptConvertedDocuments" | "never";
            /**
             * @description Set to `true` to show the Pay to contact on printed purchasing transactions.
             * @default false
             * @example false
             */
            printPayToContact?: boolean;
            /**
             * @description Set to `true` to show the Return to contact on printed purchasing transactions.
             * @default false
             * @example false
             */
            printReturnToContact?: boolean;
            /**
             * @description Set to `true` to show the Deliver to contact on printed purchasing transactions.
             * @default false
             * @example false
             */
            printDeliverToContact?: boolean;
            /**
             * @description Set to `true` to allow users to change the Pay-to contact during transaction entry.
             * @default false
             * @example false
             */
            allowEditingPayToContact?: boolean;
            /**
             * @description Set to `true` to allow users to change the Return-to contact during transaction entry.
             * @default false
             * @example false
             */
            allowEditingReturnToContact?: boolean;
            /**
             * @description Set to `true` to allow users to change the Deliver-to contact during transaction entry.
             * @default false
             * @example false
             */
            allowEditingDeliverToContact?: boolean;
            /**
             * @description Use this field to change the Pay-to labels on the transaction and on the printed document.
             * @default Pay to
             * @example Pay to
             */
            contactOneTitle?: string;
            /**
             * @description Use this field to change the Return-to labels on the transaction and on the printed document.
             * @default Return to
             * @example Return to
             */
            contactTwoTitle?: string;
            /**
             * @description Use this field to change the Deliver-to labels on the transaction and on the printed document.
             * @default Deliver to
             * @example Deliver to
             */
            contactThreeTitle?: string;
            /**
             * @description Indicates whether to alert the user if the quantity needed is greater than the ONHAND total in the selected warehouse. The warning also shows the ONORDER and ONHOLD totals.
             * @default true
             * @example false
             */
            enableWarnOnLowQuantity?: boolean;
            /**
             * @description Determines how warehouses are presented to the user in the warehouse list in the transaction.
             * @default sortByID
             * @example sortByID
             * @enum {string}
             */
            warehouseSelectionMethod?: "sortByID" | "sortByName" | "warehouseWithAvailableInventory" | "useTheDefaultWarehouse";
            /**
             * @description If `true` then the Additional GL posting account mapping can be set up for this transaction definition.
             * @default false
             * @example false
             */
            postToGL?: boolean;
            /**
             * @description Set to `true` to enable Allocations in the transaction.
             * @default false
             * @example false
             */
            enableAllocations?: boolean;
            /**
             * @description Specify whether transactions can be converted and added as new, standalone documents, or converted only from previous transactions in the workflow.
             * @default null
             * @example convertOnly
             * @enum {string|null}
             */
            documentConversionPolicy?: null | "newDocumentOnly" | "newDocumentOrConvert" | "convertOnly";
            /**
             * @description Sets the context for where users can create transactions from this transaction definition within a multi-entity, shared environment.
             * @default topLevelOrEntity
             * @example topLevelOrEntity
             * @enum {string}
             */
            multiEntityRuleForTransaction?: "topLevelOrEntity" | "topLevelOnly" | "entityOnly";
            /** @description Specifies the template for populating the transaction subtotals table. */
            subtotalTemplate?: {
                /**
                 * @description Unique key for the subtotal template.
                 * @example 120
                 */
                key?: string;
                /**
                 * @description ID for the subtotal template.
                 * @example Subtotal template
                 */
                id?: string;
                /**
                 * @description URL endpoint for the subtotal template.
                 * @example /objects/purchasing/subtotal-template/120
                 */
                readonly href?: string;
            };
            /**
             * @description Set to `true` to enable line-level Simple Tax.
             * @default false
             * @example false
             */
            lineLevelSimpleTax?: boolean;
            /**
             * @description For companies subscribed to Construction, set to 'true' to enable retainage.
             * @default false
             * @example false
             */
            enableRetainage?: boolean;
            /**
             * @description For companies subscribed to Construction, set to `true` to enable retainage transaction postings.
             * @default false
             * @example false
             */
            enableRetainageTransactionPosting?: boolean;
            /**
             * @description For companies subscribed to Construction, set to `true` to enable retainage additional postings.
             * @default false
             * @example false
             */
            enableRetainageAdditionalPosting?: boolean;
            /**
             * @description For companies subscribed to Construction, set to `true` to enable scoping included and excluded work.
             * @default false
             * @example false
             */
            enableAdditionalInformationScope?: boolean;
            /**
             * @description For companies subscribed to Construction, set to `true` to enable scheduling of work milestones.
             * @default false
             * @example false
             */
            enableAdditionalInformationSchedule?: boolean;
            /**
             * @description For companies subscribed to Construction, set to `true` to enable identification of the internal resource who authorized the work.
             * @default false
             * @example false
             */
            enableInternalReference?: boolean;
            /**
             * @description For companies subscribed to Construction, set to `true` to enable identification of the external resource who authorized the work.
             * @default false
             * @example false
             */
            enableExternalReference?: boolean;
            /**
             * @description For companies subscribed to Construction, set to `true` to enable addition of information about performance and payment bonds.
             * @default false
             * @example false
             */
            enableBond?: boolean;
            /**
             * @description For companies subscribed to Construction, establish whether document values can be changed and how.
             * @default null
             * @example enableChange
             * @enum {string|null}
             */
            documentChangeType?: null | "noChange" | "enableChange" | "changeOrder";
            /**
             * @description Set to 'true' to enable primary document workflow.
             * @default false
             * @example false
             */
            enablePrimaryDocumentWorkflow?: boolean;
            /**
             * @description Increases or decreases inventory. Sage Intacct auto assigns this value depending on Inventory totals selected.
             * @default increase
             * @example increase
             * @enum {string}
             */
            increaseOrDecreaseInventory?: "increase" | "decrease";
            /**
             * @description Establishes a reporting category that best reflects the purpose of the transaction definition so that similar documents can be grouped when building reports. This field is applicable for use with Interactive Custom Report Writer or Interactive Visual Explorer subscriptions only.
             * @default null
             * @example bidsAndQuotes
             * @enum {string|null}
             */
            reportingCategory?: null | "bidsAndQuotes" | "purchaseOrders" | "purchaseOrderChangeOrders" | "purchaseReceivers" | "purchaseOrderInvoices" | "purchaseReturns" | "purchaseCredits" | "purchaseDebits" | "purchaseClearingReceivers" | "subcontractBids" | "subcontracts" | "subcontractChangeOrders" | "subcontractInvoices" | "internalSupplyRequisitions" | "purchaseRequisitions" | "blanketPurchaseOrdersOrVendorContracts" | "grantRequests" | "grantAwards";
            /** @description The first price list the system will evaluate when determining a suggested transaction price. */
            initialPriceList?: {
                /**
                 * @description Unique key for the initial price list.
                 * @example 200
                 */
                key?: string;
                /**
                 * @description ID for the initial price list.
                 * @example Initial Price List
                 */
                id?: string;
                /**
                 * @description URL endpoint for the initial price list.
                 * @example /objects/purchasing/price-list/200
                 */
                readonly href?: string;
            };
            /** @description The numbering sequence used to automatically number transactions. */
            documentSequence?: {
                /**
                 * @description Unique key for the document numbering sequence.
                 * @example 55
                 */
                key?: string;
                /**
                 * @description The ID of the document numbering sequence.
                 * @example Adjustment Decrease
                 */
                id?: string;
                /**
                 * @description URL endpoint for the document numbering sequence.
                 * @example /objects/company-config/document-sequence/55
                 */
                readonly href?: string;
            };
            /** @description When the layered price list feature is active, the special price list has higher priority over the initial price list. */
            specialPriceList?: {
                /**
                 * @description Unique key for the special price list.
                 * @example 121
                 */
                key?: string;
                /**
                 * @description Special price list ID.
                 * @example Special price list
                 */
                id?: string;
                /**
                 * @description URL endpoint for the special price list.
                 * @example /objects/purchasing/price-list/121
                 */
                readonly href?: string;
            };
            /** @description The price list that is updated when a user saves a transaction. */
            updatePriceList?: {
                /**
                 * @description Unique key for the purchasing price list.
                 * @example 423
                 */
                key?: string;
                /**
                 * @description The name of purchase order price list.
                 * @example PO Price List
                 */
                id?: string;
                /**
                 * @description URL endpoint for the purchasing price list.
                 * @example /objects/purchasing/price-list/423
                 */
                readonly href?: string;
            };
            /** @description Accounts Payable (AP) term, which determines the expiration date for quotes and the due date for invoices. */
            apTerm?: {
                /**
                 * @description Unique key for the AP term.
                 * @example 223
                 */
                key?: string;
                /**
                 * @description The name of AP term.
                 * @example 10 Days
                 */
                id?: string;
                /**
                 * @description URL endpoint for the term.
                 * @example /objects/accounts-payable/term/223
                 */
                readonly href?: string;
            };
            /** @description Default warehouse for resulting transactions. */
            warehouse?: {
                /**
                 * @description Unique key for the warehouse.
                 * @example 323
                 */
                key?: string;
                /**
                 * @description Unique ID for the warehouse.
                 * @example Warehouse-001
                 */
                id?: string;
                /**
                 * @description URL endpoint for the warehouse.
                 * @example /objects/inventory-control/warehouse/323
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"];
            /** @description When `txnPostingMethod` is set to `toAP` and `postToGL` is set to `true`, specify the GL account details for additional GL account posting. These accounts are used to reverse the previous transaction in the workflow. */
            additionalGLDetail?: components["schemas"]["objects.purchasing.txn-definition-additional-gl-detail"][];
            /** @description When `txnPostingMethod` is set to `toAP` or `toGL`, specify the AP or GL accounts to debit and credit. */
            accountPayableOrDirectGLDetail?: components["schemas"]["objects.purchasing.txn-definition-ap-direct-gl-detail"][];
            /** @description Specifies the inventory running total that will be affected by resulting transactions and how the total will be affected. */
            inventoryTotalDetail?: components["schemas"]["objects.purchasing.txn-definition-inventory-total-detail"][];
            /** @description Provides details about the type of subtotals that are supported. */
            subtotalDetail?: components["schemas"]["objects.purchasing.txn-definition-subtotal-detail"][];
            /** @description Provides document conversion details for resulting transactions. */
            sourceDocumentDetail?: components["schemas"]["objects.purchasing.txn-definition-source-document-detail"][];
            /**
             * @description For companies subscribed to Construction, set to `true` to enable the subcontractor invoice workflow.
             * @default false
             * @example false
             */
            enablePaymentApplicationCertification?: boolean;
            /**
             * @description Application document category for the purchasing transaction definition.
             * @default null
             * @example application
             * @enum {string|null}
             */
            applicationDocumentCategory?: null | "application" | "valuation" | "invoice";
            /** @description Provides details about the entities that can create transactions, and also includes settings for each entity, such as numbering sequences and document templates. */
            entitySettingDetail?: components["schemas"]["objects.purchasing.txn-definition-entity-setting-detail"][];
        };
        "purchasing-txn-definitionRequiredProperties": Record<string, never>;
        /** @description Additional GL entry account mapping for an Order Entry transaction definition. */
        "objects.purchasing.txn-definition-additional-gl-detail": {
            /**
             * @description System-assigned key for the additional GL detail object.
             * @example 47
             */
            readonly key?: string;
            /**
             * @description Unique ID for the additional GL detail object. This value is the same as the key for this object.
             * @example 47
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the additional GL detail object.
             * @example /objects/purchasing/txn-definition-additional-gl-detail/47
             */
            readonly href?: string;
            /**
             * @description Set to `true` if the GL account specified in the `glAccount` field is an offset account. Each `itemGLGroup` and `warehouse` set must have one offset account.
             * @default false
             * @example true
             */
            isOffset?: boolean;
            /**
             * @description Set to `true` to indicate this is a retainage account line.
             * @default false
             * @example false
             */
            isRetainage?: boolean;
            /**
             * @description Specifies whether to debit or credit the corresponding GL account.
             * @example debit
             * @enum {string}
             */
            txnType?: "debit" | "credit";
            /**
             * @description Module type.
             * @example subledger
             * @enum {string}
             */
            readonly moduleType?: "subledger" | "inventory" | "additional";
            /**
             * @description Line number of the COGs GL detail on the transaction definition. If not provided, the system automatically assigns a unique line number. If you specify a `lineNumber` already used, the application sets other lines to unique numbers. The application uses this line number to post to the GL in the order provided.
             * @example 1
             */
            lineNumber?: number;
            /** @description The GL account to which the transaction posts for the mapped criteria set. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 384
                 */
                key?: string;
                /**
                 * @description ID for the GL account.
                 * @example 1501.04
                 */
                id?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/384
                 */
                readonly href?: string;
            };
            /** @description Location associated with the transaction definition. */
            location?: {
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/56
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the location.
                 * @example 56
                 */
                key?: string;
                /**
                 * @description Unique ID for the location.
                 * @example AZ
                 */
                id?: string;
            };
            /** @description Set the default department against which the line item will be recorded. */
            department?: {
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/29
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the department.
                 * @example 29
                 */
                key?: string;
                /**
                 * @description Unique ID for the department.
                 * @example Sales
                 */
                id?: string;
            };
            /** @description The `itemGLgroup` and `warehouse` together form the criteria set for the account mapping. */
            itemGLGroup?: {
                /**
                 * @description Unique key for the item GL group.
                 * @example 88
                 */
                key?: string;
                /**
                 * @description Name or other unique ID for the item GL group.
                 * @example Computers and parts
                 */
                id?: string;
                /**
                 * @description URL endpoint for the item GL group.
                 * @example /objects/inventory-control/item-group/88
                 */
                readonly href?: string;
            };
            /** @description The `itemGLgroup` and `warehouse` together form the criteria set for the account mapping. */
            warehouse?: {
                /**
                 * @description Unique key for the warehouse.
                 * @example 77
                 */
                key?: string;
                /**
                 * @description Unique ID for the warehouse.
                 * @example ARZ
                 */
                id?: string;
                /**
                 * @description URL endpoint for the warehouse.
                 * @example /objects/inventory-control/warehouse/77
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            /** @description Header level details for the owning transaction definition object. */
            purchasingTxnDefinition?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 77
                 */
                key?: string;
                /**
                 * @description Unique ID for the transaction definition.
                 * @example Purchase Quote
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition/77
                 */
                readonly href?: string;
            };
        };
        /** @description Account Payable or direct GL account detail for purchasing transactions. You can post entries either to Accounts Payable or directly to the General Ledger for purchasing transactions. */
        "objects.purchasing.txn-definition-ap-direct-gl-detail": {
            /**
             * @description System-assigned unique key for the Accounts Payable or direct GL account detail object.
             * @example 67
             */
            readonly key?: string;
            /**
             * @description ID for the Accounts Payable or direct GL account detail object. This value is the same as the `key` for this object.
             * @example 67
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the Accounts Payable or direct GL account detail object.
             * @example /objects/purchasing/txn-definition-ap-direct-gl-detail/67
             */
            readonly href?: string;
            /**
             * @description Set to `true` if the GL account specified in the `glAccount` field is an offset account. Each `itemGLGroup` and `warehouse` criteria set must have one offset account.
             * @default false
             * @example true
             */
            isOffset?: boolean;
            /**
             * @description Set to `true` to indicate this is a retainage account line.
             * @default false
             * @example false
             */
            isRetainage?: boolean;
            /**
             * @description Indicates whether to debit or credit the corresponding GL account.
             * @example debit
             * @enum {string}
             */
            txnType?: "debit" | "credit";
            /**
             * @description Module type.
             * @example subledger
             * @enum {string}
             */
            readonly moduleType?: "subledger" | "inventory" | "additional";
            /**
             * @description Line number of AP account detail on the transaction definition. If not provided, the system automatically assigns a unique line number. If you specify a `lineNumber` that is already used, the application sets other lines to unique numbers. The application uses this line number to post to the GL in the order provided.
             * @example 1
             */
            lineNumber?: number;
            /** @description The General Ledger account to which the transaction posts. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 384
                 */
                key?: string;
                /**
                 * @description User-assigned ID for the account.
                 * @example 1501.04
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/384
                 */
                readonly href?: string;
            };
            /** @description Location associated with the transaction definition. */
            location?: {
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/3345
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the location.
                 * @example 3345
                 */
                key?: string;
                /**
                 * @description Unique ID for the location.
                 * @example AZ
                 */
                id?: string;
            };
            /** @description Department associated with the transaction definition. */
            department?: {
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/28
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the department.
                 * @example 28
                 */
                key?: string;
                /**
                 * @description Unique ID for the department.
                 * @example Sales
                 */
                id?: string;
            };
            /** @description The `itemGLgroup` and `warehouse` form the criteria set for the account mapping. */
            itemGLGroup?: {
                /**
                 * @description URL endpoint for the item GL group.
                 * @example /objects/inventory-control/item-group/13
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the item GL group.
                 * @example 13
                 */
                key?: string;
                /**
                 * @description Name or other unique ID for the item GL group.
                 * @example Stockable Kit
                 */
                id?: string;
            };
            /** @description The `itemGLgroup` and `warehouse` together form the criteria set for the account mapping. */
            warehouse?: {
                /**
                 * @description URL endpoint for the warehouse.
                 * @example /objects/inventory-control/warehouse/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the warehouse.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique ID for the warehouse.
                 * @example ARZ
                 */
                id?: string;
            };
            status?: components["schemas"]["status"];
            /** @description Header level details for the owning transaction definition object. */
            purchasingTxnDefinition?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 77
                 */
                key?: string;
                /**
                 * @description Unique ID for the transaction definition.
                 * @example Purchase Quote
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition/77
                 */
                readonly href?: string;
            };
        };
        "purchasing-txn-definition-ap-direct-gl-detailRequiredProperties": {
            purchasingTxnDefinition?: Record<string, never>;
            glAccount?: Record<string, never>;
        };
        /** @description Specifies the inventory running total that will be affected by the transaction, whether to track the quantity, value, or both, and whether that amount will increase or decrease when the user saves the transaction. */
        "objects.purchasing.txn-definition-inventory-total-detail": {
            /**
             * @description System-assigned unique key for the inventory total detail object.
             * @example 88
             */
            readonly key?: string;
            /**
             * @description ID for the inventory total detail object. This value is the same as the `key` for this object.
             * @example 88
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the inventory total detail object.
             * @example /objects/purchasing/txn-definition-inventory-total-detail/88
             */
            readonly href?: string;
            /**
             * @description Specify whether to track the quantity, value, or both for the specified `inventoryTotal`.
             * @example value
             * @enum {string}
             */
            maintainType?: "quantity" | "value" | "quantityAndValue";
            /**
             * @description Specifies whether the inventory running total will increase or decrease when the user saves the transaction.
             * @example add
             * @enum {string}
             */
            operation?: "add" | "subtract";
            /** @description Specifies the inventory running total that will be affected by the transaction. */
            inventoryTotal?: {
                /**
                 * @description Unique key for the inventory total.
                 * @example 45
                 */
                key?: string;
                /**
                 * @description ID for the inventory total.
                 * @example ONHAND
                 */
                id?: string;
                /**
                 * @description URL endpoint for the inventory total.
                 * @example /objects/inventory-control/total/45
                 */
                readonly href?: string;
            };
            /** @description Header level details for the owning transaction definition object. */
            purchasingTxnDefinition?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 77
                 */
                key?: string;
                /**
                 * @description ID for the transaction definition.
                 * @example Purchase Quote
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition/77
                 */
                readonly href?: string;
            };
        };
        "purchasing-txn-definition-inventory-total-detailRequiredProperties": Record<string, never>;
        /** @description Provides details about the type of subtotals that are supported for the transaction. */
        "objects.purchasing.txn-definition-subtotal-detail": {
            /**
             * @description System-assigned unique key for the subtotal detail object.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the subtotal detail object. This value is the same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the subtotal detail object.
             * @example /objects/purchasing/txn-definition-subtotal-detail/23
             */
            readonly href?: string;
            /**
             * @description Specifies whether the subtotal type is `discount` or `charge`.
             * @default null
             * @example discount
             * @enum {string|null}
             */
            subtotalType?: null | "discount" | "charge";
            /**
             * @description Line number to which the subtotal applies.
             * @example 1
             */
            lineNumber?: number;
            /**
             * @description Description of the subtotal.
             * @example Discount
             */
            description?: string;
            /**
             * @description Specifies the value type for the subtotal.
             * @default null
             * @example amount
             * @enum {string|null}
             */
            valueType?: null | "amount" | "percent";
            /**
             * Format: decimal-precision-2
             * @description Provide a default value for the subtotal. If `valueType` is `amount`, specify the amount of the subtotal. For example, 250. If `valueType` is `percent`, provide a percentage as a whole number. For example, specify 10 for 10%. End users can override the default subtotal value in the transaction.
             * @example 10
             */
            subtotalValue?: string;
            /**
             * @description If set to `true`, the subtotal will be apportioned across all line items in the transaction.
             * @default false
             * @example true
             */
            isApportioned?: boolean;
            /**
             * @description When this field is set to true, the system treats the apportioned amount as a separate subtotal exclusively for subledger posting, while still distributing the amount across all transaction line items.
             * @default false
             * @example true
             */
            apportionedAsSubtotal?: boolean;
            /** @description Specifies the GL account to which the subtotal will post. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 5
                 */
                key?: string;
                /**
                 * @description User-assigned number for the GL account.
                 * @example 1501.04
                 */
                id?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/5
                 */
                readonly href?: string;
            };
            /** @description Specifies the offset GL account to which the subtotal will post. */
            offsetGLAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 6
                 */
                key?: string;
                /**
                 * @description Unique ID for the GL account.
                 * @example 1501.04
                 */
                id?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/6
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies whether to debit or credit the account.
             * @default null
             * @example credit
             * @enum {string|null}
             */
            txnType?: null | "debit" | "credit";
            /**
             * @description Specifies the subtotal line number to which the subtotal will apply. Sage Intacct treats the initial subtotal line as line number 0.
             *     The first defined subtotal from the transaction definition is line number 1, the second defined subtotal is line number 2, and so on.
             *
             *     The value of `appliedToLineNumber` is implicitly assumed to be 0. Taxes, all other charges, and discounts are computed at the line level.
             *     This field does not apply if `enableLineLevelSimpleTax` is set to true in the owning transaction definition.
             * @example 1
             */
            appliedToLineNumber?: number;
            /**
             * @description Flags the subtotal as a tax. When the transaction posts, the tax will post separately based on the items in the transaction. Set this field to `true` for tax subtotal lines if your organization uses Simple Tax, Advanced Tax, or Avalara AvaTax.
             * @default false
             * @example true
             */
            isTax?: boolean;
            /** @description Specifies a default department for the subtotal. */
            department?: {
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/28
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the department.
                 * @example 28
                 */
                key?: string;
                /**
                 * @description Unique ID for the department.
                 * @example SL
                 */
                id?: string;
            };
            /** @description Specifies a default location for the subtotal. */
            readonly location?: {
                /**
                 * @description Unique key for the location.
                 * @example 22
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the location.
                 * @example LOC-22
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/22
                 */
                readonly href?: string;
            };
            /**
             * @description If set to `true`, the subtotal line item applies to AvaTax. This field applies only if your company uses Avalara AvaTax integration.
             * @default false
             * @example true
             */
            enableAvalaraTax?: boolean;
            /** @description Sets the context where the transaction definition is created. */
            readonly entity?: {
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/3345
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the entity.
                 * @example 3345
                 */
                readonly key?: string;
                /**
                 * @description Name of the entity.
                 * @example Australia
                 */
                readonly id?: string;
            };
            /** @description Header level details for the owning transaction definition object. */
            purchasingTxnDefinition?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 77
                 */
                key?: string;
                /**
                 * @description Unique ID for the transaction definition.
                 * @example Purchase Quote
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition/77
                 */
                readonly href?: string;
            };
        };
        "purchasing-txn-definition-subtotal-detailRequiredProperties": Record<string, never>;
        /** @description Specifies the transaction definition from which the transaction can be converted. */
        "objects.purchasing.txn-definition-source-document-detail": {
            /**
             * @description System-assigned unique key for the source document detail object.
             * @example 18
             */
            readonly key?: string;
            /**
             * @description ID for the source document detail object. This value is the same as the key for this object.
             * @example 18
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the source document detail object.
             * @example /objects/purchasing/txn-definition-source-document-detail/18
             */
            readonly href?: string;
            /** @description Specifies the transaction definition from which this transaction can be converted. For example, a purchasing invoice can be converted from a purchase order. */
            sourceDocument?: {
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition/44
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the transaction definition.
                 * @example 44
                 */
                key?: string;
                /**
                 * @description ID for the transaction definition.
                 * @example Purchase order
                 */
                id?: string;
            };
            /** @description Header level details for the owning transaction definition object. */
            purchasingTxnDefinition?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 77
                 */
                key?: string;
                /**
                 * @description ID for the transaction definition.
                 * @example Purchase Quote
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition/77
                 */
                readonly href?: string;
            };
        };
        "purchasing-txn-definition-source-document-detailRequiredProperties": Record<string, never>;
        /** @description This object provides details about the entities that can create transactions, and also includes settings for each entity, such as numbering sequences and document templates. */
        "objects.purchasing.txn-definition-entity-setting-detail": {
            /**
             * @description System-assigned unique key for the entity setting detail object.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description System-assigned unique ID for the entity setting detail object. This value is the same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the entity setting detail object.
             * @example /objects/purchasing/txn-definition-entity-setting-detail/23
             */
            readonly href?: string;
            /**
             * @description Set to `true` to enable numbering sequences to be set for transactions.
             * @default false
             * @example false
             */
            enableNumberingSequence?: boolean;
            /**
             * @description Set to `true` to ensure that numbers in a sequence are never skipped. Enabling this option can affect performance when a large volume of transactions is entered at the same time.
             * @default false
             * @example false
             */
            preserveNumberingSequence?: boolean;
            /**
             * @description Set to `true` if transactions should inherit source document numbers. For example, a transaction could inherit a sales invoice number.
             * @default false
             * @example false
             */
            canInheritSourceDocumentNumber?: boolean;
            /** @description Specifies a printed document template to use as the default for printed output (PDFs) for the corresponding entity. The template for the transaction definition document is used if a template is not specified in this field. */
            documentTemplate?: {
                /**
                 * @description Unique key for the document template.
                 * @example 65
                 */
                key?: string;
                /**
                 * @description The name or other ID for the document template.
                 * @example Purchasing transfer
                 */
                id?: string;
            };
            /** @description If `enableSubtotals` is set to `true` in the owning transaction definition, you can specify the subtotal template to use to calculate subtotals. */
            subtotalTemplate?: {
                /**
                 * @description URL endpoint for the subtotal template.
                 * @example /objects/purchasing/subtotal-template/22
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the subtotal template.
                 * @example 22
                 */
                key?: string;
                /**
                 * @description Name or other ID of the subtotal template.
                 * @example PS2 Subtotal template
                 */
                id?: string;
            };
            /**
             * @description Set to `true` to show expanded tax details in the transaction user interface and in printed output. This field applies only to companies that use Avalara AvaTax or Sage Intacct Advanced Tax.
             * @default false
             * @example false
             */
            showExpandedTaxDetail?: boolean;
            /**
             * @description Set to `true` to enable users to override whether a line item is taxable. This field is only applicable if subtotals are enabled.
             * @default false
             * @example false
             */
            enableOverrideTax?: boolean;
            /**
             * @description Set to `true` to allow the tax rate to be overridden at the line level when using Simple Tax. This field is only applicable if subtotals are enabled.
             * @default false
             * @example false
             */
            enableLineLevelSimpleTax?: boolean;
            /** @description Entity associated with the transaction definition. */
            entity?: {
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/48
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the entity.
                 * @example 48
                 */
                key?: string;
                /**
                 * @description Unique ID for the entity. The ID cannot be changed after the entity has been created.
                 * @example Lyon
                 */
                id?: string;
            };
            /** @description Specifies the numbering sequence to use to automatically number transactions for the corresponding entity. Omit a numbering sequence here if you want to use the numbering sequence defined for the owning transaction definition, or if you want converted transactions to inherit the source document number. */
            documentSequence?: {
                /**
                 * @description Unique key for the document numbering sequence.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description URL endpoint for the document numbering sequence.
                 * @example /objects/company-config/document-sequence/11
                 */
                readonly href?: string;
                /**
                 * @description ID of the document numbering sequence.
                 * @example Adjustment Decrease
                 */
                id?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            /** @description Header level details for the owning transaction definition object. */
            purchasingTxnDefinition?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 77
                 */
                key?: string;
                /**
                 * @description Unique ID for the transaction definition.
                 * @example Purchase Quote
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition/77
                 */
                readonly href?: string;
            };
        };
        "purchasing-txn-definition-entity-setting-detailRequiredProperties": Record<string, never>;
        /** @description A recurring document contains information about a recurring purchasing transaction, including the transaction definition, line item details, and schedule for a recurring transaction. */
        "objects.purchasing.recurring-document": {
            /**
             * @description System-assigned unique key for the recurring document.
             * @example 78
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the recurring document. This value is the same as the key for this object.
             * @example 78
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the recurring document.
             * @example /objects/purchasing/recurring-document::Purchase%20Order/78
             */
            readonly href?: string;
            /**
             * @description Document template ID for the associated transaction.
             * @example Purchase Order
             */
            readonly documentType?: string;
            /**
             * @description State of the recurring document.
             * @default active
             * @example active
             * @enum {string}
             */
            state?: "active" | "inactive" | "ended";
            /** @description Contacts associated with the recurring document. */
            contacts?: {
                /** @description Primary contact for the recurring document. */
                primary?: {
                    /**
                     * @description Unique key for the primary contact.
                     * @example 13
                     */
                    readonly key?: string;
                    /**
                     * @description Unique ID for the primary contact.
                     * @example Power Aerospace Materials(C1)
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact.
                     * @example /objects/company-config/contact-version/13
                     */
                    readonly href?: string;
                };
                /** @description Contact to ship to. */
                shipTo?: {
                    /**
                     * @description Unique key for the contact to ship to.
                     * @example 33
                     */
                    readonly key?: string;
                    /**
                     * @description Unique ID for the contact to ship to.
                     * @example Power Aerospace Materials(C2)
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact to ship to.
                     * @example /objects/company-config/contact-version/33
                     */
                    readonly href?: string;
                };
                /** @description Contact to bill to. */
                billTo?: {
                    /**
                     * @description Unique key for the contact to bill to.
                     * @example 44
                     */
                    readonly key?: string;
                    /**
                     * @description Unique ID for the contact to bill to.
                     * @example Power Aerospace Materials(C3)
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the contact to ship to.
                     * @example /objects/company-config/contact-version/44
                     */
                    readonly href?: string;
                };
            };
            /** @description Shipping method for the document. */
            shippingMethod?: {
                /**
                 * @description Unique key for the shipping method.
                 * @example 77
                 */
                key?: string;
                /**
                 * @description Unique ID for the shipping method.
                 * @example Air
                 */
                id?: string;
                /**
                 * @description URL endpoint for the shipping method.
                 * @example /objects/accounts-receivable/shipping-method/77
                 */
                readonly href?: string;
            };
            /**
             * @description Reference to another document, as needed.
             * @example PURCHASE-100
             */
            referenceNumber?: string;
            /**
             * Format: decimal-precision-14
             * @deprecated
             * @description This field has been deprecated. Use the `subtotal` field instead.
             */
            readonly subTotal?: string;
            /**
             * Format: decimal-precision-14
             * @description Subtotal of the document in base currency.
             * @example 40.10
             */
            readonly subtotal?: string;
            /**
             * Format: decimal-precision-14
             * @description Subtotal of the document in transaction currency.
             * @example 51.10
             */
            readonly subtotalInTxnCurrency?: string;
            /**
             * Format: decimal-precision-14
             * @description The sum of values across all lines in the document.
             * @example 100.10
             */
            readonly total?: string;
            /**
             * Format: decimal-precision-14
             * @description The sum of values across all lines in the document in the transaction currency.
             * @example 100.11
             */
            readonly totalInTxnCurrency?: string;
            /**
             * @description Base currency for the transaction.
             * @example USD
             */
            baseCurrency?: string;
            /**
             * @description Currency used for the transaction.
             * @example USD
             */
            txnCurrency?: string;
            /** @description Exchange rate details used to calculate the base amount. */
            exchangeRate?: {
                /**
                 * Format: date
                 * @description Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                 * @example 2024-01-23
                 */
                date?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Exchange rate used to calculate the base amount from the transaction amount.
                 * @example 1.0789
                 */
                rate?: string;
                /**
                 * @description Exchange rate type used to calculate the base amount from the transaction amount.
                 * @example 1
                 */
                typeId?: string;
                /**
                 * @description The name of the exchange rate type.
                 * @example Intacct Daily Rate
                 */
                typeName?: string;
            };
            /** @description Accounts Payable (AP) term, which determines the expiration date for quotes and the due date for invoices. */
            paymentTerm?: {
                /**
                 * @description URL endpoint for the AP term.
                 * @example /objects/accounts-payable/term/75
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the AP term.
                 * @example 75
                 */
                key?: string;
                /**
                 * @description Name or other unique ID for the AP term.
                 * @example 10 Days
                 */
                id?: string;
            };
            /**
             * @description Notes about the recurring document.
             * @example Subscription order
             */
            notes?: string;
            /**
             * @description Text to appear on the printed document.
             * @example Lowry solutions
             */
            memo?: string;
            /**
             * @description The number by which to reference a bill or other vendor document. A number is required only if Accounts Payable is configured to require numbers on bills, adjustments, and recurring bills.
             * @example A2330-12
             */
            vendorDocumentNumber?: string;
            /** @description Vendor associated with the recurring document. */
            vendor?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description Unique ID for the vendor.
                 * @example RCB
                 */
                id?: string;
                /**
                 * @description Name of the vendor.
                 * @example Quick and Easy Payroll
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/15
                 */
                readonly href?: string;
            };
            /** @description Define the scheduling details for the recurring document. */
            schedule?: {
                /**
                 * Format: date
                 * @description Specify the initial date for generating the recurring document. This field remains editable until the first document is processed.
                 * @example 2025-01-01
                 */
                startDate?: string;
                /**
                 * Format: date
                 * @description Specify the end date for generating the recurring document. A repeatCount can be specified instead of an endDate, but if both are specified, the endDate takes precedence.
                 * @example 2026-01-01
                 */
                endDate?: string;
                /**
                 * Format: date
                 * @description Shows the upcoming date for the next attempt to generate the document.
                 * @example 2025-02-01
                 */
                nextExecutionDate?: string;
                /**
                 * Format: date
                 * @description Shows the final date for the scheduled execution of the recurring document.
                 * @example 2026-12-01
                 */
                readonly lastExecutionDate?: string;
                /**
                 * Format: date
                 * @description Shows the recurring due date for the scheduled execution of the recurring bill.
                 * @example 2025-06-01
                 */
                recurringDueDate?: string;
                /**
                 * @deprecated
                 * @description This field has been deprecated. Use the `repeatBy` field instead.
                 * @default null
                 * @enum {string|null}
                 */
                frequency?: null | "none" | "days" | "weeks" | "months" | "endOfMonth" | "years";
                /**
                 * @description Shows the number of attempts to generate the recurring document. This value reflects the number of times the system has tried to create the document, which may differ from the number of successful transactions due to potential errors during execution.
                 * @example 50
                 */
                readonly executionCount?: string;
                /**
                 * @description Specifies the number of times the recurring document should be generated. If an endDate is provided for the schedule, it takes precedence over the repeatCount.
                 * @example 10
                 */
                repeatCount?: string;
                /**
                 * @description Specifies the regular interval at which the recurring document should repeat. This field works in conjunction with the `repeatInterval` field, where you specify the number of intervals. For example, if you set `repeatBy` to `months` and set the `repeatInterval` to `3`, the schedule will run every 3 months.
                 * @default null
                 * @example days
                 * @enum {string|null}
                 */
                repeatBy?: null | "none" | "days" | "weeks" | "months" | "endOfMonth" | "years";
                /**
                 * @description Specifies the interval at which the bill repeats. This field works in conjunction with the `repeatBy` field, where you specify the regular interval at which the recurring bill should repeat. For example, if you set `repeatBy` to `months` and set the `repeatInterval` to `3`, the schedule will run every 3 months.
                 * @default 1
                 * @example 3
                 */
                repeatInterval?: string;
            };
            /** @description System-generated recurring schedule template, which is used to automate the transaction creation process. */
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
            /** @description Transaction definition that is associated with this recurring document. */
            txnDefinition?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description Name of the transaction definition.
                 * @example Purchase Order
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition/11
                 */
                readonly href?: string;
            };
            /** @description Lines of the recurring document. */
            lines?: components["schemas"]["objects.purchasing.recurring-document-line"][];
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `subtotals` field instead.
             */
            subTotals?: components["schemas"]["objects.purchasing.recurring-document-subtotal"][];
            /** @description Lines of the recurring document subtotal. */
            subtotals?: components["schemas"]["objects.purchasing.recurring-document-subtotal"][];
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2024-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
        };
        "purchasing-recurring-documentRequiredProperties": {
            /** @example { "startDate": "2024-07-01", "repeatBy": "weeks", "repeatInterval": "1" } */
            schedule?: unknown;
            lines?: {
                /** @example { "item": { "id": "1" }, "warehouse": { "id": "1" }, "location": { "id": "1" }} */
                dimensions?: unknown;
            }[];
        };
        /** @description Line items in a recurring document represent recurring transactions. */
        "objects.purchasing.recurring-document-line": {
            /**
             * @description System-assigned unique key for the recurring document line item.
             * @example 88
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the recurring document line item. This value is the same as the key for this object.
             * @example 88
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the recurring document line.
             * @example /objects/purchasing/recurring-document-line/88
             */
            readonly href?: string;
            /**
             * @description Line number for the document line.
             * @example 1
             */
            readonly lineNumber?: number;
            /** @description Item associated with the recurring document line. */
            item?: {
                /**
                 * @description Unique key for the item.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description ID for the item.
                 * @example MX001
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/10
                 */
                readonly href?: string;
            };
            /**
             * @description Memo about the recurring document line item.
             * @example Payment ACH
             */
            memo?: string;
            /**
             * @description Unit of measure associated with the recurring document line item.
             * @example Each
             */
            unit?: string;
            /**
             * Format: decimal-precision-10
             * @description Unit quantity associated with the document line item.
             * @example 10.10
             */
            unitQuantity?: string;
            /**
             * Format: decimal-precision-10
             * @description Unit price associated with the line item.
             * @example 10.50
             */
            unitPrice?: string;
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the recurring document line.
                 */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 22
                     */
                    key?: string;
                    /**
                     * @description ID for the location.
                     * @example India
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/22
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Department associated with the recurring document line.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 9
                     */
                    key?: string;
                    /**
                     * @description ID for the department.
                     * @example Accounting
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
                /**
                 * warehouse
                 * @description Warehouse associated with the recurring document line.
                 */
                warehouse?: {
                    /**
                     * @description Unique key for the warehouse.
                     * @example 19'
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the warehouse.
                     * @example WareHouse10004
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the warehouse.
                     * @example /objects/inventory-control/warehouse/19
                     */
                    readonly href?: string;
                };
            };
            /**
             * Format: decimal-precision-10
             * @description Discount percentage to apply to the document line item.
             * @example 10.50
             */
            discountPercent?: string;
            /**
             * Format: decimal-precision-10
             * @description Suggested retail price for the line item.
             * @example 10.44
             */
            readonly retailPrice?: string;
            /**
             * @description Memo about any discounts taken.
             * @example Festival discount
             */
            discountMemo?: string;
            /**
             * @description Indicates whether the line item price is prorated.
             * @default true
             * @example true
             */
            isPriceProrated?: boolean;
            /**
             * Format: decimal-precision-10
             * @description Transaction price.
             * @example 10.00
             */
            priceInTxnCurrency?: string;
            /**
             * @description Defaults to the transaction currency associated with the selected vendor. This field applies only to multi-currency companies.
             * @example CAD
             */
            readonly currency?: string;
            /**
             * @description Indicates whether the line item is billable.
             * @default true
             * @example true
             */
            isBillable?: boolean;
            /**
             * @description Indicates whether the line item is taxable.
             * @default false
             * @example false
             */
            enableTax?: boolean;
            /**
             * @description Conversion type used for the transaction.
             * @default quantity
             * @example quantity
             * @enum {string}
             */
            conversionType?: "quantity" | "price";
            /** @description Alternative name for the item for a specific vendor. */
            itemAlias?: {
                /**
                 * @description Unique key for the item alias.
                 * @example 18
                 */
                key?: string;
                /**
                 * @description ID for the item alias.
                 * @example IXN
                 */
                id?: string;
                /**
                 * @description URL endpoint for the item alias.
                 * @example /objects/inventory-control/item-cross-reference/18
                 */
                readonly href?: string;
            };
            /**
             * @description Recurrence status for the line item.
             * @default active
             * @example active
             * @enum {string}
             */
            recurringStatus?: "active" | "inactive" | "ended";
            status?: components["schemas"]["status"];
            /** @description Header lever details for the document line item. */
            recurringDocumentHeader?: {
                /**
                 * @description Unique key for the recurring document.
                 * @example 55
                 */
                key?: string;
                /**
                 * @description ID for the recurring document.
                 * @example 55
                 */
                id?: string;
                /**
                 * @description Type of the recurring document.
                 * @example Purchase Invoice
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the recurring document.
                 * @example /objects/purchasing-document::Purchase%20Invoice/55
                 */
                readonly href?: string;
            };
        };
        "purchasing-recurring-document-lineRequiredProperties": {
            /** @example { "item": { "id": "1" }, "warehouse": { "id": "1" }, "location": { "id": "1" }} */
            dimensions?: unknown;
            /** @example 44 */
            recurringDocumentHeader?: unknown;
        };
        /** @description Details of subtotals, taxes, discounts, charges, and more for recurring transactions. */
        "objects.purchasing.recurring-document-subtotal": {
            /**
             * @description System-assigned key for the recurring document subtotal.
             * @example 69
             */
            readonly key?: string;
            /**
             * @description ID for the recurring document subtotal. This value is the same as the key for this object.
             * @example 69
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the recurring document subtotal.
             * @example /objects/purchasing/recurring-document-subtotal/69
             */
            readonly href?: string;
            /**
             * @description Description of the recurring document subtotal.
             * @example Taxes
             */
            description?: string;
            /**
             * Format: decimal-precision-2
             * @description Non-negative base amount calculated across all other lines of the document.
             * @example 40.50
             */
            absoluteValue?: string;
            /**
             * Format: decimal-precision-10
             * @description Percentage value that is calculated on the total of all line items of the recurring document.
             * @example 10.50
             */
            percentValue?: string;
            /**
             * Format: decimal-precision-2
             * @description Non-negative transaction amount calculated across all other lines of the recurring document.
             * @example 44.78
             */
            txnAbsoluteValue?: string;
            /**
             * Format: decimal-precision-14
             * @description The computed base amount for the subtotal.
             * @example 500.10
             */
            readonly total?: string;
            /**
             * Format: decimal-precision-14
             * @description The computed transaction amount for the subtotal.
             * @example 400.10
             */
            readonly txnTotal?: string;
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the subtotal line.
                 */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 22
                     */
                    key?: string;
                    /**
                     * @description Name or other ID for the location.
                     * @example Arizona
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/22
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Department associated with the subtotal line.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 9
                     */
                    readonly key?: string;
                    /**
                     * @description Name or other ID for the department.
                     * @example Accounting
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
            };
            /** @description Header level details for the owning recurring document object. */
            readonly recurringDocumentHeader?: {
                /**
                 * @description Unique key for the recurring document.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description ID for the recurring document.
                 * @example 23
                 */
                readonly id?: string;
                /**
                 * @description Type of the recurring document.
                 * @example Purchase Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the recurring document.
                 * @example /objects/purchasing/recurring-document::Purchase%20Order/23
                 */
                readonly href?: string;
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
        /**
         * @description Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
         * @default active
         * @example active
         * @enum {string}
         */
        status: "active" | "inactive";
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
    "list-purchasing-document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-purchasing-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @example 99 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.document"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-purchasing-named-document": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Document Name */
                documentName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-named-document": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Document Name */
                documentName: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.document"] & components["schemas"]["purchasing-documentRequiredProperties"];
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
    "get-purchasing-named-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Document Name */
                documentName: string;
                /**
                 * @description System-assigned unique key for the document.
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
                        "ia::result"?: components["schemas"]["objects.purchasing.document"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-named-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Document Name */
                documentName: string;
                /**
                 * @description System-assigned unique key for the document.
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
    "update-purchasing-named-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Document Name */
                documentName: string;
                /**
                 * @description System-assigned unique key for the document.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.document"] & {
                    readonly id?: unknown;
                    readonly primaryDocumentDetails?: unknown;
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
    "submit-purchasing-document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["purchasing-document-actions-submit-request"];
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
                        "ia::result"?: components["schemas"]["purchasing-document-actions-submit-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "approve-purchasing-document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["purchasing-document-actions-approve-request"];
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
                        "ia::result"?: components["schemas"]["purchasing-document-actions-approve-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "decline-purchasing-document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["purchasing-document-actions-decline-request"];
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
                        "ia::result"?: components["schemas"]["purchasing-document-actions-decline-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-purchasing-document-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-purchasing-document-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the purchasing document line.
                 * @example 52
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.document-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-purchasing-named-document-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Purchase Order
                 */
                documentName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-named-document-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Purchase Order
                 */
                documentName: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.document-line"] & components["schemas"]["purchasing-document-lineRequiredProperties"];
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
    "get-purchasing-named-document-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document name
                 * @example Purchase Order
                 */
                documentName: string;
                /**
                 * @description System-assigned unique key for the document line.
                 * @example 52
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.document-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-named-document-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document name
                 * @example Purchase Order
                 */
                documentName: string;
                /**
                 * @description System-assigned unique key for the document line.
                 * @example 52
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
    "update-purchasing-named-document-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document name
                 * @example Purchase Order
                 */
                documentName: string;
                /**
                 * @description System-assigned unique key for the document line.
                 * @example 52
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.document-line"] & {
                    readonly id?: unknown;
                    readonly posted?: unknown;
                    readonly reverseConversion?: unknown;
                    readonly primaryDocument?: unknown;
                    readonly primaryDocumentLine?: unknown;
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
    "list-purchasing-document-line-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-purchasing-document-line-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document line detail object.
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
                        "ia::result"?: components["schemas"]["objects.purchasing.document-line-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-purchasing-document-line-subtotal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-purchasing-document-line-subtotal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document line subtotal object.
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
                        "ia::result"?: components["schemas"]["objects.purchasing.document-line-subtotal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-purchasing-document-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-purchasing-document-history-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document history.
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
                        "ia::result"?: components["schemas"]["objects.purchasing.document-history"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-purchasing-document-subtotal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-purchasing-document-subtotal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document subtotal.
                 * @example 14
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.document-subtotal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-purchasing-document-configuration-preference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-purchasing-document-configuration-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document configuration preference.
                 * @example 382
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.document-configuration-preference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-purchasing-document-configuration-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document configuration preference.
                 * @example 382
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.document-configuration-preference"] & Record<string, never>;
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
    "list-purchasing-txn-match-tolerance-preference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-purchasing-txn-match-tolerance-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction match tolerance preference.
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
                        "ia::result"?: components["schemas"]["objects.purchasing.txn-match-tolerance-preference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-purchasing-txn-match-tolerance-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction match tolerance preference.
                 * @example 33
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-match-tolerance-preference"] & Record<string, never>;
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
    "list-purchasing-txn-automation-preference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-purchasing-txn-automation-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction automation preference.
                 * @example 49
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.txn-automation-preference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-purchasing-txn-automation-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction automation preference.
                 * @example 49
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-automation-preference"] & Record<string, never>;
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
    "list-purchasing-txn-automation-without-match-preference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-purchasing-txn-automation-without-match-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction automation without match preference.
                 * @example 50
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.txn-automation-without-match-preference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-purchasing-txn-automation-without-match-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction automation without match preference.
                 * @example 50
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-automation-without-match-preference"] & Record<string, never>;
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
    "list-purchasing-price-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-price-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.price-list"] & components["schemas"]["purchasing-price-listRequiredProperties"];
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
    "get-purchasing-price-list-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the purchasing price list.
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
                        "ia::result"?: components["schemas"]["objects.purchasing.price-list"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-price-list-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the purchasing price list.
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
    "update-purchasing-price-list-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the purchasing price list.
                 * @example 6
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.price-list"] & {
                    /** @example Base Price List Purchase */
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
    "list-purchasing-price-list-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-price-list-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.price-list-entry"] & components["schemas"]["purchasing-price-list-entryRequiredProperties"];
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
    "get-purchasing-price-list-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the price list entry.
                 * @example 421
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.price-list-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-price-list-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the price list entry.
                 * @example 421
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
    "update-purchasing-price-list-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the price list entry.
                 * @example 421
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.price-list-entry"] & {
                    /** @example 435 */
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
    "list-purchasing-price-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-price-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.price-schedule"] & components["schemas"]["purchasing-price-scheduleRequiredProperties"];
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
    "get-purchasing-price-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the price schedule.
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
                        "ia::result"?: components["schemas"]["objects.purchasing.price-schedule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-price-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the price schedule.
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
    "update-purchasing-price-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the price schedule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.price-schedule"] & {
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
    "list-purchasing-subtotal-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-subtotal-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.subtotal-template"] & components["schemas"]["purchasing-subtotal-templateRequiredProperties"];
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
    "get-purchasing-subtotal-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the subtotal template.
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
                        "ia::result"?: components["schemas"]["objects.purchasing.subtotal-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-subtotal-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the subtotal template.
                 * @example 30
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
    "update-purchasing-subtotal-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the subtotal template.
                 * @example 30
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.subtotal-template"] & {
                    /** @example Invoice Charges */
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
    "list-purchasing-subtotal-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-subtotal-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.subtotal-template-line"] & components["schemas"]["purchasing-subtotal-template-lineRequiredProperties"];
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
    "get-objects-purchasing-subtotal-template-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the subtotal template line.
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
                        "ia::result"?: components["schemas"]["objects.purchasing.subtotal-template-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "delete-purchasing-subtotal-template-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the subtotal template line.
                 * @example 28
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
    "update-purchasing-subtotal-template-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the subtotal template line.
                 * @example 28
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.subtotal-template-line"] & Record<string, never>;
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
    "list-purchasing-secondary-vendor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-secondary-vendor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.secondary-vendor"] & components["schemas"]["purchasing-secondary-vendorRequiredProperties"];
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
    "get-purchasing-secondary-vendor-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the secondary vendor.
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
                        "ia::result"?: components["schemas"]["objects.purchasing.secondary-vendor"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-secondary-vendor-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the secondary vendor.
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
    "update-purchasing-secondary-vendor-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the secondary vendor.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.secondary-vendor"] & {
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
    "list-purchasing-vendor-gl-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-vendor-gl-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.vendor-gl-group"] & components["schemas"]["vendor-gl-groupRequiredProperties"];
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
    "get-purchasing-vendor-gl-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor GL group.
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
                        "ia::result"?: components["schemas"]["objects.purchasing.vendor-gl-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-vendor-gl-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor GL group.
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
    "update-purchasing-vendor-gl-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the vendor GL group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.vendor-gl-group"] & {
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
    "list-purchasing-txn-definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-purchasing-txn-definition-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition.
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
                        "ia::result"?: components["schemas"]["objects.purchasing.txn-definition"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "post-purchasing-txn-definition": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-definition"] & components["schemas"]["purchasing-txn-definitionRequiredProperties"];
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
    "delete-purchasing-txn-definition-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition.
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
    "update-purchasing-txn-definition-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-definition"] & {
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
    "list-purchasing-txn-definition-additional-gl-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-purchasing-txn-definition-additional-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the additional GL detail object.
                 * @example 208
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.txn-definition-additional-gl-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-txn-definition-additional-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the additional GL detail object.
                 * @example 208
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
    "update-purchasing-txn-definition-additional-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the additional GL detail object.
                 * @example 208
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-definition-additional-gl-detail"] & {
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
    "list-purchasing-txn-definition-ap-direct-gl-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-txn-definition-ap-direct-gl-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-definition-ap-direct-gl-detail"] & components["schemas"]["purchasing-txn-definition-ap-direct-gl-detailRequiredProperties"];
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
    "get-purchasing-txn-definition-ap-direct-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition account detail object.
                 * @example 208
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.txn-definition-ap-direct-gl-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-txn-definition-ap-direct-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition account detail object.
                 * @example 208
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
    "update-purchasing-txn-definition-ap-direct-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition account detail object.
                 * @example 208
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-definition-ap-direct-gl-detail"] & {
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
    "list-purchasing-txn-definition-inventory-total-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-txn-definition-inventory-total-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-definition-inventory-total-detail"] & components["schemas"]["purchasing-txn-definition-inventory-total-detailRequiredProperties"];
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
    "get-purchasing-txn-definition-inventory-total-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition inventory total detail object.
                 * @example 191
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.txn-definition-inventory-total-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-txn-definition-inventory-total-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition inventory total detail object.
                 * @example 191
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
    "update-purchasing-txn-definition-inventory-total-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition inventory total detail object.
                 * @example 191
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-definition-inventory-total-detail"] & {
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
    "list-purchasing-txn-definition-subtotal-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-txn-definition-subtotal-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-definition-subtotal-detail"] & components["schemas"]["purchasing-txn-definition-subtotal-detailRequiredProperties"];
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
    "get-purchasing-txn-definition-subtotal-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition subtotal detail object.
                 * @example 180
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.txn-definition-subtotal-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-txn-definition-subtotal-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition subtotal detail object.
                 * @example 180
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
    "update-purchasing-txn-definition-subtotal-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition subtotal detail object.
                 * @example 180
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-definition-subtotal-detail"] & {
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
    "list-purchasing-txn-definition-source-document-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-txn-definition-source-document-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-definition-source-document-detail"] & components["schemas"]["purchasing-txn-definition-source-document-detailRequiredProperties"];
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
    "get-purchasing-txn-definition-source-document-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition source document detail object.
                 * @example 78
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.txn-definition-source-document-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-txn-definition-source-document-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition source document detail object.
                 * @example 78
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
    "update-purchasing-txn-definition-source-document-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition source document detail object.
                 * @example 78
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-definition-source-document-detail"] & {
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
    "list-purchasing-txn-definition-entity-setting-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-txn-definition-entity-setting-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-definition-entity-setting-detail"] & components["schemas"]["purchasing-txn-definition-entity-setting-detailRequiredProperties"];
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
    "get-purchasing-txn-definition-entity-setting-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition entity detail object.
                 * @example 54
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.txn-definition-entity-setting-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-txn-definition-entity-setting-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition entity detail object.
                 * @example 54
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
    "update-purchasing-txn-definition-entity-setting-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition entity detail object.
                 * @example 54
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.txn-definition-entity-setting-detail"] & {
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
    "list-purchasing-recurring-document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-purchasing-recurring-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring document.
                 * @example 14
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.recurring-document"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-purchasing-named-recurring-document": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Purchase Order
                 */
                documentName: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-named-recurring-document": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Purchase Order
                 */
                documentName: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.recurring-document"] & components["schemas"]["purchasing-recurring-documentRequiredProperties"];
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
    "get-purchasing-named-recurring-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Purchase Requisition
                 */
                documentName: string;
                /**
                 * @description System-assigned unique key for the recurring document.
                 * @example 55
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.purchasing.recurring-document"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-recurring-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Purchase Requisition
                 */
                documentName: string;
                /**
                 * @description System-assigned unique key for the recurring document.
                 * @example 55
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
    "update-purchasing-recurring-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Purchase Requisition
                 */
                documentName: string;
                /**
                 * @description System-assigned unique key for the recurring document.
                 * @example 55
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.recurring-document"] & {
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
    "list-purchasing-recurring-document-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-purchasing-recurring-document-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.purchasing.recurring-document-line"] & components["schemas"]["purchasing-recurring-document-lineRequiredProperties"];
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
    "get-purchasing-recurring-document-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring document line.
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
                        "ia::result"?: components["schemas"]["objects.purchasing.recurring-document-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-purchasing-recurring-document-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring document line.
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
    "list-purchasing-recurring-document-subtotal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-purchasing-recurring-document-subtotal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring document subtotal.
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
                        "ia::result"?: components["schemas"]["objects.purchasing.recurring-document-subtotal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
}

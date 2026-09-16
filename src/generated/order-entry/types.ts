// Generated from spec/order-entry.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/order-entry/document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Order Entry documents
         * @description Returns a collection with a key, ID, and link for each order entry document. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-document"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the order entry document.
                 * @example 446
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an Order Entry document
         * @description Returns detailed information for a specified Order Entry document.
         */
        get: operations["get-order-entry-document-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document::{documentName}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Document name */
                documentName: string;
            };
            cookie?: never;
        };
        /**
         * List named Order Entry documents
         * @description Returns a collection with a key, ID, and link for each Order Entry document with the specified name. For example, to list all documents that are based on the Sales Invoice transaction definition, specify `Sales Invoice` as the `documentName` in the request URL.
         *
         *     This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-named-document"];
        put?: never;
        /**
         * Create an Order Entry document
         * @description Creates a new Order Entry document. To create a new document, specify the transaction definition that is the template for the new document as `documentName` in the request URL.
         *
         *     When creating a new document, the field `state` must be set to one of these values: `pending`, `draft`, or `submitted`. If no value is specified for the `state` field, it defaults to `pending`.
         *
         *     To access a list of available transaction definitions, use the [list transaction definitions](order-entry.txn-definition:list-order-entry-txn-definition) operation. For example, to create a new order entry document that uses the Sales Invoice transaction definition as a template, specify `Sales Invoice` for the `documentName` in the request URL.
         */
        post: operations["create-order-entry-named-document"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document::{documentName}/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document name
                 * @example Sales Invoice
                 */
                documentName: string;
                /**
                 * @description System-assigned key for the document.
                 * @example 41
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a named Order Entry document
         * @description Returns detailed information for a specified Order Entry document. For example, to return details about an order entry document that uses the Sales Invoice transaction definition as a template, specify `Sales Invoice` for the `documentName` in the request URL.
         */
        get: operations["get-order-entry-named-document-key"];
        put?: never;
        post?: never;
        /**
         * Delete an Order Entry document
         * @description Deletes an Order Entry document. Several factors determine whether an Order Entry document can be deleted. See [Order Entry transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_oe_transactions) in the Sage Intacct Help Center for more information.
         */
        delete: operations["delete-order-entry-named-document-key"];
        options?: never;
        head?: never;
        /**
         * Update an Order Entry document
         * @description Updates an existing Order Entry document by setting field values. Any fields not provided remain unchanged. With Edit permissions to Order Entry transactions, most details for a transaction that has a state of Draft or Pending can be edited.
         */
        patch: operations["update-order-entry-document-key"];
        trace?: never;
    };
    "/workflows/order-entry/document/generate-pdf": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate a PDF of a document
         * @description This workflow enables you to generate a PDF of an Order Entry document. The response includes a download link for the generated PDF.
         */
        post: operations["generate-pdf-order-entry-document"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List document lines
         * @description Returns a collection with a key, ID, and link for each Order Entry document line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-document-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the Order Entry document line.
                 * @example 19
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a document line
         * @description Returns detailed information for a specified Order Entry document line.
         */
        get: operations["get-order-entry-document-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document-line::{documentName}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document name
                 * @example Sales Invoice
                 */
                documentName: string;
            };
            cookie?: never;
        };
        /**
         * List lines for named documents
         * @description Returns a collection with a key, ID, and link for each line that exists in documents with the specified name. For example, to list all lines within documents that are based on the Sales Invoice transaction definition, specify `Sales Invoice` as the `documentName` in the request URL.
         *
         *     This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-named-document-line"];
        put?: never;
        /**
         * Create a document line
         * @description Creates a new Order Entry document line.
         */
        post: operations["create-order-entry-named-document-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document-line::{documentName}/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document name
                 * @example Sales Invoice
                 */
                documentName: string;
                /**
                 * @description System-assigned key for the Order Entry document line.
                 * @example 63
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a line in a named document
         * @description Returns detailed information for a specified document line. For example, to get a line within a document that is based on the Sales Invoice transaction definition, specify `Sales Invoice` for the `documentName` in the request URL.
         */
        get: operations["get-order-entry-named-document-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a document line
         * @description Deletes a document line.
         */
        delete: operations["delete-order-entry-named-document-line-key"];
        options?: never;
        head?: never;
        /**
         * Update a document line
         * @description Updates an existing document line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-order-entry-named-document-line-key"];
        trace?: never;
    };
    "/objects/order-entry/document-line-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List document line detail objects
         * @description Returns a collection with a key, ID, and link for each Order Entry document line detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-order-entry-document-line-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document-line-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document line detail object.
                 * @example 17
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a document line detail object
         * @description Returns detailed information for a specified Order Entry document line detail object.
         */
        get: operations["get-order-entry-document-line-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document-line-subtotal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List document line subtotals
         * @description Returns a collection with a key, ID, and link for each document line subtotal. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-document-line-subtotal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document-line-subtotal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document line subtotal.
                 * @example 21
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a document line subtotal
         * @description Returns detailed information for a specified document line subtotal.
         */
        get: operations["get-order-entry-document-line-subtotal-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List document histories
         * @description Returns a collection with a key, ID, and link for each Order Entry document history. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-document-history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document-history/{key}": {
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
         * @description Returns detailed information for a specified Order Entry document history.
         */
        get: operations["get-order-entry-document-history-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document-subtotal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List document subtotals
         * @description Returns a collection with a key, ID, and link for each Order Entry document subtotal. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-document-subtotal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document-subtotal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document subtotal.
                 * @example 15
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a document subtotal
         * @description Returns detailed information for a specified Order Entry document subtotal.
         */
        get: operations["get-order-entry-document-subtotal-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document-configuration-preference": {
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
        get: operations["list-order-entry-document-configuration-preference"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/document-configuration-preference/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document configuration preference.
                 * @example 530
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a document configuration preference
         * @description Returns detailed information for a specified document configuration preference.
         */
        get: operations["get-order-entry-document-configuration-preference-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a document configuration preference
         * @description Updates an existing document configuration preference by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-order-entry-document-configuration-preference-key"];
        trace?: never;
    };
    "/objects/order-entry/price-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List price lists
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each order entry price list. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-price-list"];
        put?: never;
        /**
         * Create a price list
         * @description Creates a new order entry price list.
         */
        post: operations["create-order-entry-price-list"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/price-list/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the order entry price list.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a price list
         * @description Returns detailed information for a specified order entry price list.
         */
        get: operations["get-order-entry-price-list-key"];
        put?: never;
        post?: never;
        /**
         * Delete a price list
         * @description Deletes an order entry price list. A price list can be deleted if it has not been assigned to any objects. This removes the price list and all of its associated price list entries from the system.
         */
        delete: operations["delete-order-entry-price-list-key"];
        options?: never;
        head?: never;
        /**
         * Update a price list
         * @description Updates an existing order entry price list by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-order-entry-price-list-key"];
        trace?: never;
    };
    "/objects/order-entry/price-list-entry": {
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
        get: operations["list-order-entry-price-list-entry"];
        put?: never;
        /**
         * Create a price list entry
         * @description Creates a new price list entry. When creating a price list entry, include an `item` or a `productLine`, but not both.
         *
         *     Specify an `employee` only when defining a billing rate for a company subscribed to Projects and Time and Expenses. To define a project billing rate, use a combination of `employee` and `item`.
         *
         *     See [About price list entries]https://www.intacct.com/ia/docs/en_US/help_action/Order_Entry/Setting_up_Order_Entry/Price_lists/price-list-entries-OE.htm#Aboutpricelistentries) in the Sage Intacct Help Center for more information.
         */
        post: operations["create-order-entry-price-list-entry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/price-list-entry/{key}": {
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
        get: operations["get-order-entry-price-list-entry-key"];
        put?: never;
        post?: never;
        /**
         * Delete a price list entry
         * @description Deletes a price list entry. A price list entry can be deleted if it has not been used by any transactions. This removes the price list entry from the system.
         *
         *     Alternatively, a price list entry can be deactivated by changing the status to `inactive`, which prevents it from displaying in any selection lists but retains the price for historical purposes.
         */
        delete: operations["delete-order-entry-price-list-entry-key"];
        options?: never;
        head?: never;
        /**
         * Update a price list entry
         * @description Updates an existing price list entry by setting field values. Any fields not provided remain unchanged. If there are changes to an item's price, it will be immediately available to all new or modified transactions that occur after the price revision. Changing a price will not affect existing transactions.
         *
         *     Alternatively, to keep a history of price changes, add a new price list entry that has a new price, new start date, and new end date, and then update the end date of the existing price list entry to end one day before the new price list entry starts. For more information, see [Edit a price list entry](https://www.intacct.com/ia/docs/en_US/help_action/Order_Entry/Setting_up_Order_Entry/Price_lists/price-list-entries-OE.htm#Editapricelistentry) in the Sage Intacct Help Center.
         */
        patch: operations["update-order-entry-price-list-entry-key"];
        trace?: never;
    };
    "/objects/order-entry/price-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List price schedules
         * @description Returns a collection with a key, ID, and link for each order entry price schedule.
         */
        get: operations["list-order-entry-price-schedule"];
        put?: never;
        /**
         * Create a price schedule
         * @description Creates a new order entry price schedule.
         */
        post: operations["create-order-entry-price-schedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/price-schedule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the price schedule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a price schedule
         * @description Returns detailed information for a specified order entry price schedule.
         */
        get: operations["get-order-entry-price-schedule-key"];
        put?: never;
        post?: never;
        /**
         * Delete a price schedule
         * @description Deletes an order entry price schedule.
         */
        delete: operations["delete-order-entry-price-schedule-key"];
        options?: never;
        head?: never;
        /**
         * Update a price schedule
         * @description Updates an existing order entry price schedule by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-order-entry-price-schedule-key"];
        trace?: never;
    };
    "/objects/order-entry/renewal-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List renewal templates
         * @description Returns a collection with a key, ID, and link for each renewal template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-renewal-template"];
        put?: never;
        /**
         * Create a renewal template
         * @description Creates a new renewal template.
         */
        post: operations["create-order-entry-renewal-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/renewal-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the renewal template.
                 * @example 30
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a renewal template
         * @description Returns detailed information for a specified renewal template.
         */
        get: operations["get-order-entry-renewal-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a renewal template
         * @description Deletes a renewal template. You can delete a renewal template if it has not been used by any sales transactions. This removes the template from Sage Intacct.
         *
         *     Alternatively, you can deactivate a template (change the status to Inactive), which prevents it from displaying in any template selection lists but retains the template for historical purposes.
         */
        delete: operations["delete-order-entry-renewal-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a renewal template
         * @description Updates an existing renewal template by setting field values. Any fields not provided remain unchanged.
         *
         *     Changes made to a renewal template will apply the next time the renewal template is associated with a transaction line item. Renewal template changes will not apply to existing sales transaction line items that are associated with the renewal template before the changes.
         */
        patch: operations["update-order-entry-renewal-template-key"];
        trace?: never;
    };
    "/objects/order-entry/subtotal-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List subtotal templates
         * @description Returns a collection with a key, ID, and link for each order entry subtotal template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-subtotal-template"];
        put?: never;
        /**
         * Create a subtotal template
         * @description Creates a new order entry subtotal template.
         */
        post: operations["create-order-entry-subtotal-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/subtotal-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the subtotal template.
                 * @example 3
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a subtotal template
         * @description Returns detailed information for a specified order entry subtotal template.
         */
        get: operations["get-order-entry-subtotal-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a subtotal template
         * @description Deletes an order entry subtotal template.
         */
        delete: operations["delete-order-entry-subtotal-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a subtotal template
         * @description Updates an existing order entry subtotal template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-order-entry-subtotal-template-key"];
        trace?: never;
    };
    "/objects/order-entry/subtotal-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List subtotal template lines
         * @description Returns a collection with a key, ID, and link for each subtotal template line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-subtotal-template-line"];
        put?: never;
        /**
         * Create a subtotal template line
         * @description Creates a new subtotal template line.
         */
        post: operations["create-order-entry-subtotal-template-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/subtotal-template-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the subtotal template line.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a subtotal template line
         * @description Returns detailed information for a specified subtotal template line.
         */
        get: operations["get-objects-order-entry-subtotal-template-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a subtotal template line
         * @description Deletes a subtotal template line.
         */
        delete: operations["delete-order-entry-subtotal-template-line-key"];
        options?: never;
        head?: never;
        /**
         * Update a subtotal template line
         * @description Updates an existing subtotal template line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-order-entry-subtotal-template-line-key"];
        trace?: never;
    };
    "/objects/order-entry/customer-gl-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List customer GL groups
         * @description Returns a collection with a key, ID, and link for each customer GL group.
         */
        get: operations["list-order-entry-customer-gl-group"];
        put?: never;
        /**
         * Create a customer GL group
         * @description Creates a new customer GL group.
         */
        post: operations["create-order-entry-customer-gl-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/customer-gl-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer GL group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a customer GL group
         * @description Returns detailed information for a specified customer GL group.
         */
        get: operations["get-order-entry-customer-gl-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete a customer GL group
         * @description Deletes a customer GL group. Customer GL groups can be deleted if they are not used by any transaction or are not assigned to any customers. Deleting a customer GL group removes it from the system.
         */
        delete: operations["delete-order-entry-customer-gl-group-key"];
        options?: never;
        head?: never;
        /**
         * Update a customer GL group
         * @description Updates an existing customer GL group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-order-entry-customer-gl-group-key"];
        trace?: never;
    };
    "/objects/order-entry/recurring-document": {
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
        get: operations["list-order-entry-recurring-document"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/recurring-document/{key}": {
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
        get: operations["get-order-entry-recurring-document-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/recurring-document::{documentName}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Sales Invoice
                 */
                documentName: string;
            };
            cookie?: never;
        };
        /**
         * List named recurring documents
         * @description Returns a collection with a key, ID, and link for each recurring document with the specified name. For example, to list all recurring documents that are based on the Sales Invoice transaction definition, specify `Sales Invoice` as the `documentName` in the request URL.
         *
         *     This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-named-recurring-document"];
        put?: never;
        /**
         * Create a recurring document
         * @description Creates a new recurring document. To create a new recurring document, specify the transaction definition that is the template for the new document as `documentName` in the request URL.
         *
         *     To access a list of available transaction definitions, use the list operation of the [transaction definition](order-entry.txn-definition) object. For example, to create a new recurring document that uses the Sales Invoice transaction definition as a template, specify `Sales Invoice` for the `documentName` in the request URL.
         */
        post: operations["create-order-entry-named-recurring-document"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/recurring-document::{documentName}/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Sales Invoice
                 */
                documentName: string;
                /**
                 * @description System-assigned key for the order entry recurring document.
                 * @example 41
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a named recurring document
         * @description Returns detailed information for a specified recurring document. For example, to return details about an order entry document that uses the Sales Invoice transaction definition as a template, specify `Sales Invoice` for the `documentName` in the request URL.
         */
        get: operations["get-order-entry-named-recurring-document-key"];
        put?: never;
        post?: never;
        /**
         * Delete a recurring document
         * @description Deletes a recurring document.
         */
        delete: operations["delete-order-entry-recurring-document-key"];
        options?: never;
        head?: never;
        /**
         * Update a recurring document
         * @description Updates an existing recurring document by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-order-entry-recurring-document-key"];
        trace?: never;
    };
    "/objects/order-entry/recurring-document-line": {
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
        get: operations["list-order-entry-recurring-document-line"];
        put?: never;
        /**
         * Create a recurring document line
         * @description Creates a new recurring document line.
         */
        post: operations["create-order-entry-recurring-document-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/recurring-document-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring document line.
                 * @example 807
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a recurring document line
         * @description Returns detailed information for a specified recurring document line.
         */
        get: operations["get-order-entry-recurring-document-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a recurring document line
         * @description Deletes a recurring document line.
         */
        delete: operations["delete-order-entry-recurring-document-line-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/recurring-document-subtotal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List recurring document subtotals
         * @description Returns a collection with a key, ID, and link for each recurring document subtotal.
         */
        get: operations["list-order-entry-recurring-document-subtotal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/recurring-document-subtotal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring document subtotal.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a recurring document subtotal
         * @description Returns detailed information for a specified recurring document subtotal.
         */
        get: operations["get-order-entry-recurring-document-subtotal-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/recurring-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List recurring schedule
         * @description Returns a collection with a key, ID, and link for each recurring schedule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-recurring-schedule"];
        put?: never;
        /**
         * Create a recurring schedule
         * @description Creates a new recurring schedule.
         */
        post: operations["create-order-entry-recurring-schedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/recurring-schedule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring schedule.
                 * @example 17
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a recurring schedule
         * @description Returns detailed information for a specified recurring schedule.
         */
        get: operations["get-order-entry-recurring-schedule-key"];
        put?: never;
        post?: never;
        /**
         * Delete a recurring schedule
         * @description Deletes a recurring schedule. If your company is in a multi-entity organization, you can only delete a recurring schedule if you are in the level of the multi-entity structure where the recurring schedule was created.
         */
        delete: operations["delete-order-entry-recurring-schedule-key"];
        options?: never;
        head?: never;
        /**
         * Update a recurring schedule
         * @description Updates an existing recurring schedule by setting field values. Any fields not provided remain unchanged. Changes made to a recurring schedule will apply to transaction lines converted after the changes were made and not to any recurring templates that are in progress.
         */
        patch: operations["update-order-entry-recurring-schedule-key"];
        trace?: never;
    };
    "/objects/order-entry/txn-definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction definitions
         * @description Returns a collection with a key, ID, and link for each order entry transaction definition. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-txn-definition"];
        put?: never;
        /**
         * Create a transaction definition
         * @description Creates a new order entry transaction definition. Advanced workflows must be enabled to add new transaction definitions. See [Transaction definitions - Order Entry](https://www.intacct.com/ia/docs/en_US/help_action/Order_Entry/Setting_up_Order_Entry/Transaction_definitions/order-entry-transaction-definitions.htm) in the Sage Intacct Help Center for more information.
         */
        post: operations["create-order-entry-txn-definition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/txn-definition/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition.
                 * @example 37
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction definition
         * @description Returns detailed information for a specified transaction definition.
         */
        get: operations["get-order-entry-txn-definition-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transaction definition
         * @description Deletes a transaction definition. You can delete a transaction definition when it is no longer needed or relevant. Deleting a transaction definition is irreversible.
         */
        delete: operations["delete-order-entry-txn-definition-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction definition
         * @description Updates an existing transaction definition by setting field values. Any fields not provided remain unchanged.
         *
         *     The changes you make to a transaction definition apply to transactions that are created after the changes are made. The changes do not apply to existing transactions unless you edit and save the transactions after changes are made to the transaction definition.
         */
        patch: operations["update-order-entry-txn-definition-key"];
        trace?: never;
    };
    "/objects/order-entry/txn-definition-additional-gl-detail": {
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
        get: operations["list-order-entry-txn-definition-additional-gl-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/txn-definition-additional-gl-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition additional GL detail object.
                 * @example 196
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an additional GL detail object
         * @description Returns detailed information for a specified transaction definition additional GL detail object.
         */
        get: operations["get-order-entry-txn-definition-additional-gl-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete an additional GL detail object
         * @description Deletes an additional GL detail object.
         */
        delete: operations["delete-order-entry-txn-definition-additional-gl-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update an additional GL detail object
         * @description Updates an existing transaction definition additional GL detail object by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-order-entry-txn-definition-additional-gl-detail-key"];
        trace?: never;
    };
    "/objects/order-entry/txn-definition-ar-direct-gl-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Accounts Receivable or direct GL account detail objects
         * @description Returns a collection with a key, ID, and link for each transaction definition Accounts Receivable or direct GL account detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-txn-definition-ar-direct-gl-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/txn-definition-ar-direct-gl-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Accounts Receivable or direct GL account detail object.
                 * @example 164
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an Accounts Receivable or direct GL account detail object
         * @description Returns detailed information for a specified transaction definition Accounts Receivable or direct GL account detail object.
         */
        get: operations["get-order-entry-txn-definition-ar-direct-gl-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete an Accounts Receivable or direct GL account detail object
         * @description Delete a transaction definition Accounts Receivable or direct GL account detail object.
         */
        delete: operations["delete-order-entry-txn-definition-ar-direct-gl-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update an Accounts Receivable or direct GL account detail object
         * @description Updates an existing transaction definition Accounts Receivable or direct GL account detail object by setting field values. Any fields not provided remain unchanged.
         *
         *     When the update is successful, the original object is replaced by the updated object, which has a new key value. Therefore, use the returned key value to reference the object in subsequent operations.
         */
        patch: operations["update-order-entry-txn-definition-ar-direct-gl-detail-key"];
        trace?: never;
    };
    "/objects/order-entry/txn-definition-cogs-gl-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction definition COGS detail objects
         * @description Returns a collection with a key, ID, and link for each transaction definition COGS detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-txn-definition-cogs-gl-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/txn-definition-cogs-gl-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition COGS detail object.
                 * @example 160
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction definition COGS detail object
         * @description Returns detailed information for a specified transaction definition COGS detail object.
         */
        get: operations["get-order-entry-txn-definition-cogs-gl-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transaction definition COGS detail object
         * @description Deletes a transaction definition COGS detail object.
         */
        delete: operations["delete-order-entry-txn-definition-cogs-gl-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction definition COGS detail object
         * @description Updates an existing transaction definition COGS detail object by setting field values. Any fields not provided remain unchanged.
         *
         *     When the update is successful, the original object is replaced by the updated object, which has a new key value. Therefore, use the returned key value to reference the object in subsequent operations.
         */
        patch: operations["update-order-entry-txn-definition-cogs-gl-detail-key"];
        trace?: never;
    };
    "/objects/order-entry/txn-definition-entity-setting-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction definition entity detail objects
         * @description Returns a collection with a key, ID, and link for each transaction definition entity detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-txn-definition-entity-setting-detail"];
        put?: never;
        /**
         * Create a transaction definition entity detail object
         * @description Creates a new transaction definition entity detail object.
         */
        post: operations["create-order-entry-txn-definition-entity-setting-detail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/txn-definition-entity-setting-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition entity detail object.
                 * @example 170
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction definition entity detail object
         * @description Returns detailed information for a specified transaction definition entity detail object.
         */
        get: operations["get-order-entry-txn-definition-entity-setting-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transaction definition entity detail object
         * @description Deletes a transaction definition entity detail object.
         */
        delete: operations["delete-order-entry-txn-definition-entity-setting-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction definition entity detail object
         * @description Updates an existing transaction definition entity detail object. Any fields not provided remain unchanged.
         *
         *     When the update is successful, the original object is replaced by the updated object, which has a new key value. Therefore, use the returned key value to reference the object in subsequent operations.
         */
        patch: operations["update-order-entry-txn-definition-entity-setting-detail-key"];
        trace?: never;
    };
    "/objects/order-entry/txn-definition-inventory-total-detail": {
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
        get: operations["list-order-entry-txn-definition-inventory-total-detail"];
        put?: never;
        /**
         * Create a transaction definition inventory total detail object
         * @description Creates a new transaction definition inventory total detail object.
         */
        post: operations["create-order-entry-txn-definition-inventory-total-detail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/txn-definition-inventory-total-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition inventory total detail object.
                 * @example 96
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction definition inventory total detail object
         * @description Returns detailed information for a specified transaction definition inventory total detail object.
         */
        get: operations["get-order-entry-txn-definition-inventory-total-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transaction definition inventory total detail object
         * @description Deletes a transaction definition inventory total detail object.
         */
        delete: operations["delete-order-entry-txn-definition-inventory-total-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction definition inventory total detail object
         * @description Updates an existing transaction definition inventory total detail object by setting field values. Any fields not provided remain unchanged.
         *
         *     When the update is successful, the original object is replaced by the updated object, which has a new key value. Therefore, use the returned key value to reference the object in subsequent operations.
         */
        patch: operations["update-order-entry-txn-definition-inventory-total-detail-key"];
        trace?: never;
    };
    "/objects/order-entry/txn-definition-source-document-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction definition source document detail objects
         * @description Returns a collection with a key, ID, and link for each transaction definition source document detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-txn-definition-source-document-detail"];
        put?: never;
        /**
         * Create a transaction definition source document detail object
         * @description Creates a new transaction definition source document detail object.
         */
        post: operations["create-order-entry-txn-definition-source-document-detail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/txn-definition-source-document-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition source document detail object.
                 * @example 70
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction definition source document detail object
         * @description Returns detailed information for a specified transaction definition source document detail object.
         */
        get: operations["get-order-entry-txn-definition-source-document-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transaction definition source document detail object
         * @description Deletes a transaction definition source document detail object.
         */
        delete: operations["delete-order-entry-txn-definition-source-document-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction definition source document detail object
         * @description Updates an existing transaction definition source document detail object by setting field values. Any fields not provided remain unchanged.
         *
         *     When the update is successful, the original object is replaced by the updated object, which has a new key value. Therefore, use the returned key value to reference the object in subsequent operations.
         */
        patch: operations["update-order-entry-txn-definition-source-document-detail-key"];
        trace?: never;
    };
    "/objects/order-entry/txn-definition-subtotal-detail": {
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
        get: operations["list-order-entry-txn-definition-subtotal-detail"];
        put?: never;
        /**
         * Create a transaction definition subtotal detail object
         * @description Creates a new transaction definition subtotal detail object.
         */
        post: operations["create-order-entry-txn-definition-subtotal-detail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/txn-definition-subtotal-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition subtotal detail object.
                 * @example 113
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction definition subtotal detail object
         * @description Returns detailed information for a specified transaction definition subtotal detail object.
         */
        get: operations["get-order-entry-txn-definition-subtotal-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transaction definition subtotal detail object
         * @description Deletes a transaction definition subtotal detail object.
         */
        delete: operations["delete-order-entry-txn-definition-subtotal-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction definition subtotal detail object
         * @description Updates an existing transaction definition subtotal detail object by setting field values. Any fields not provided remain unchanged.
         *
         *     When the update is successful, the original object is replaced by the updated object, which has a new key value. Therefore, use the returned key value to reference the object in subsequent operations.
         */
        patch: operations["update-order-entry-txn-definition-subtotal-detail-key"];
        trace?: never;
    };
    "/objects/order-entry/txn-buy-to-order-preference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction buy to order preferences
         * @description Returns a collection with a key, ID, and link for each transaction buy to order preference. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-txn-buy-to-order-preference"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/txn-buy-to-order-preference/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction buy to order preference.
                 * @example 5
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction buy to order preference
         * @description Returns detailed information for a specified transaction buy to order preference.
         */
        get: operations["get-order-entry-txn-buy-to-order-preference-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transaction buy to order preference
         * @description Deletes a transaction buy to order preference.
         */
        delete: operations["delete-order-entry-txn-buy-to-order-preference-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction buy to order preference
         * @description Updates an existing transaction buy to order preference by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-order-entry-txn-buy-to-order-preference-key"];
        trace?: never;
    };
    "/objects/order-entry/txn-drop-ship-preference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction drop ship preferences
         * @description Returns a collection with a key, ID, and link for each transaction drop ship preference. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-order-entry-txn-drop-ship-preference"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/order-entry/txn-drop-ship-preference/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction drop ship preference.
                 * @example 8
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction drop ship preference
         * @description Returns detailed information for a specified transaction drop ship preference.
         */
        get: operations["get-order-entry-txn-drop-ship-preference-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transaction drop ship preference
         * @description Deletes a transaction drop ship preference.
         */
        delete: operations["delete-order-entry-txn-drop-ship-preference-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction drop ship preference
         * @description Updates an existing transaction drop ship preference by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-order-entry-txn-drop-ship-preference-key"];
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
        /** @description An Order Entry document contains information about sales transactions. */
        "objects.order-entry.document": {
            /**
             * @description System-assigned unique key for the document.
             * @example 55
             */
            readonly key?: string;
            /**
             * @description Unique ID for the document. This value is the same as the key for this object.
             * @example 55
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the document.
             * @example /objects/order-entry/document::Sales%20Invoice/55
             */
            readonly href?: string;
            /**
             * @description Name or other unique identifier for the document.
             * @example Sales Invoice-SI-O122
             */
            readonly documentId?: string;
            /**
             * @description Document number for the Order Entry document. If the transaction definition does not have a numbering sequence configured, provide a number to identify the transaction.
             * @example SI-O122
             */
            documentNumber?: string;
            /**
             * @description The type of transaction.
             * @example Sales Invoice
             */
            readonly documentType?: string;
            /** @description The invoice associated with this order entry document. */
            invoice?: {
                /**
                 * @description Unique key for the AR invoice.
                 * @example 2789
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the AR invoice.
                 * @example 2789
                 */
                readonly id?: string;
                /**
                 * @description Endpoint for the AR invoice.
                 * @example /objects/accounts-receivable/invoice/2789
                 */
                readonly href?: string;
            };
            /**
             * @description State of the Order Entry document.
             * @default pending
             * @example draft
             * @enum {string}
             */
            state?: "submitted" | "approved" | "partiallyApproved" | "declined" | "draft" | "pending" | "closed" | "inProgress" | "converted" | "partiallyConverted" | "convertedByLine" | "partiallyConvertedByLine" | "exception";
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
                 * @example 2023-01-23
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
             * @description Date on the Order Entry document.
             * @example 2024-04-04
             */
            txnDate?: string;
            /**
             * Format: date
             * @description Due date for the Order Entry document.
             * @example 2024-04-04
             */
            dueDate?: string;
            /**
             * @description Indicates whether the document is system generated.
             * @default false
             * @example true
             */
            readonly isSystemGeneratedDocument?: boolean;
            /**
             * Format: date
             * @description The date on which the Order Entry document posts to the General Ledger.
             * @example 2024-04-04
             */
            postingDate?: string;
            /**
             * @description Reference number for the document.
             * @example SALES-100
             */
            referenceNumber?: string;
            /**
             * @description Notes about the document.
             * @example Fast order
             */
            notes?: string;
            /**
             * @description Text to appear on the printed document.
             * @example Lowry solutions
             */
            memo?: string;
            /**
             * @deprecated
             * @description This field is deprecated. Use `contractId` instead.
             */
            contractID?: string;
            /**
             * @description Sales contract ID associated with the transaction.
             * @example CN100123
             */
            contractId?: string;
            /**
             * @description Sales contract description.
             * @example Sales & Service
             */
            contractDescription?: string;
            /**
             * @description Payment status for the transaction.
             * @default open
             * @example paid
             * @enum {string}
             */
            readonly paymentStatus?: "paid" | "partiallyPaid" | "open";
            /**
             * Format: date
             * @description Original invoice date.
             * @example 2024-04-04
             */
            invoiceDate?: string;
            /**
             * @description Customer PO number associated with the transaction.
             * @example ABOTT-1001
             */
            customerPONumber?: string;
            /**
             * @description User-provided tracking reference number.
             * @example TK-1002
             */
            trackingNumber?: string;
            /**
             * Format: date
             * @description The ship-by date for the order.
             * @example 2024-04-04
             */
            shipByDate?: string;
            /**
             * Format: date
             * @description The date that the order was shipped.
             * @example 2024-04-04
             */
            shippedDate?: string;
            /**
             * Format: date
             * @description The date on which the service is delivered.
             * @example 2024-04-04
             */
            serviceDeliveryDate?: string;
            /**
             * Format: date
             * @description Indicates the date after which the order can be canceled.
             * @example 2024-04-04
             */
            cancelAfterDate?: string;
            /**
             * Format: date
             * @description Do not ship before this date.
             * @example 2024-04-04
             */
            doNotShipBeforeDate?: string;
            /**
             * Format: date
             * @description Do not ship after this date.
             * @example 2024-04-04
             */
            doNotShipAfterDate?: string;
            /**
             * Format: date
             * @description The date the customer requests the goods to arrive on their premises. The default is the due date.
             * @example 2024-04-04
             */
            requestedShippingDate?: string;
            /**
             * @description Default retainage percent on the line item for a transaction (Construction subscription).
             * @example 10
             */
            retainagePercent?: number;
            /**
             * @description Details about the expected scope of work to be performed or materials to be delivered. Use 4000 or fewer characters. (Construction subscription).
             * @example Subcontractor agrees to provide labor and materials for utility trenching for Five Oaks Storage facilities according to contract.
             */
            scope?: string | null;
            /**
             * @description Details related to items that are explicitly included in the terms of this document. Use 4000 or fewer characters. (Construction subscription).
             * @example Includes drive through building
             */
            inclusions?: string | null;
            /**
             * @description Details related to items that are explicitly excluded in the terms of this document. Use 4000 or fewer characters. (Construction subscription).
             * @example Excludes additional purchase
             */
            exclusions?: string | null;
            /**
             * @description Additional terms or performance obligations. Use 4000 or fewer characters. (Construction subscription).
             * @example Follow all safety rules and security procedure that are in force and applicable during execution of work.
             */
            terms?: string | null;
            /** @description Additional details for Quote or Requisition and Order type documents (Construction Subscription). */
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
            /** @description Performance bond details from the vendor or a company for an Order. (Construction subscription) */
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
            /** @description Revision details post change order. (Construction subscription) */
            revision?: {
                /**
                 * @description Whether the document has changes applied.
                 * @default false
                 * @example false
                 */
                readonly isDocumentChanged?: boolean;
                /**
                 * Format: decimal-precision-2
                 * @description Revised total.
                 * @example 1000.00
                 */
                readonly revisedTotal?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Revised subtotal.
                 * @example 1000.00
                 */
                readonly revisedSubTotal?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Revised total in transaction currency.
                 * @example 1000.00
                 */
                readonly revisedTotalInTxnCurrency?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Revised subtotal in transaction currency.
                 * @example 1000.00
                 */
                readonly revisedSubTotalInTxnCurrency?: string | null;
                /**
                 * @description Log number for tracking the number of changes applied to a source transaction. Default 0 for a source transaction, 1 for a change transaction.
                 * @example 1
                 */
                changeLogNumber?: number;
            };
            /**
             * @description Document ID of the source transaction when updating a change order. Calculated when the transaction is a change order. (Construction subscription)
             * @example Sales Invoice-Sal#0140#inv
             */
            readonly relatedDocumentNumber?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Posted changes total. (Construction subscription)
             * @example 1000.00
             */
            postedChangesTotal?: string | null;
            /** @description Project contract billing details for the order or invoice. (Construction subscription) */
            projectContractBilling?: {
                /**
                 * @description Project contract external reference.
                 * @example HGS-1024
                 */
                externalReferenceNumber?: string | null;
                /**
                 * @description Project contract description.
                 * @example Construction of club house and offices
                 */
                description?: string | null;
                /**
                 * Format: date
                 * @description Project contract date.
                 * @example 2024-05-08
                 */
                contractDate?: string | null;
                /**
                 * Format: date
                 * @description Billing through date.
                 * @example 2024-05-08
                 */
                billingThroughDate?: string | null;
                /**
                 * @description Billing application number.
                 * @example IA-89115
                 */
                billingApplicationNumber?: string | null;
            };
            /** @description Project contract billing summary details for the order or invoice. (Construction subscription) */
            billingSummary?: {
                /**
                 * Format: decimal-precision-10
                 * @description Original contract amount.
                 * @example 1000.00
                 */
                originalContractAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Net changes amount.
                 * @example 1000.00
                 */
                readonly netChangesAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Revised contract amount.
                 * @example 1000.00
                 */
                readonly revisedContractAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Balance to finish amount.
                 * @example 1000.00
                 */
                readonly balanceToFinishAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Less previous billings amount.
                 * @example 1000.00
                 */
                lessPriorApplicationAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Current amount due.
                 * @example 1000.00
                 */
                readonly currentDueAmount?: string | null;
                /** @description Retainage details for the invoice. (Construction subscription) */
                retainage?: {
                    /**
                     * Format: decimal-precision-10
                     * @description Previous retainage balance amount.
                     * @example 1000.00
                     */
                    previousBalanceAmount?: string | null;
                    /**
                     * Format: decimal-precision-10
                     * @description Retainage balance amount.
                     * @example 1000.00
                     */
                    readonly balanceAmount?: string | null;
                    /**
                     * Format: decimal-precision-10
                     * @description Retainage billed amount.
                     * @example 1000.00
                     */
                    readonly billedAmount?: string | null;
                    /**
                     * Format: decimal-precision-10
                     * @description Retainage held amount.
                     * @example 1000.00
                     */
                    readonly heldAmount?: string | null;
                    /**
                     * Format: decimal-precision-10
                     * @description Retainage amount from completed work.
                     * @example 1000.00
                     */
                    completedAmount?: string | null;
                    /**
                     * Format: decimal-precision-10
                     * @description Retainage amount from stored materials.
                     * @example 1000.00
                     */
                    storedMaterialsAmount?: string | null;
                };
                /** @description Project contract billing summary totals on the invoice. (Construction subscription) */
                billingTotals?: {
                    /**
                     * Format: decimal-precision-10
                     * @description Total completed to date amount.
                     * @example 1000.00
                     */
                    readonly completedToDateAmount?: string | null;
                    /**
                     * Format: decimal-precision-10
                     * @description Total stored materials amount.
                     * @example 1000.00
                     */
                    readonly storedMaterialsAmount?: string | null;
                    /**
                     * Format: decimal-precision-2
                     * @description Total retainage held amount.
                     * @example 1000.00
                     */
                    readonly heldAmount?: string | null;
                    /**
                     * Format: decimal-precision-10
                     * @description Total retainage held to date amount.
                     * @example 1000.00
                     */
                    readonly heldToDateAmount?: string | null;
                    /**
                     * Format: decimal-precision-2
                     * @description Total retainage amount on this invoice.
                     * @example 1000.00
                     */
                    readonly retainageOnThisInvoiceAmount?: string | null;
                    /**
                     * Format: decimal-precision-10
                     * @description Total earned less retainage amount.
                     * @example 1000.00
                     */
                    readonly earnedLessRetainageAmount?: string | null;
                    /**
                     * Format: decimal-precision-10
                     * @description Total less retainage held amount.
                     * @example 1000.00
                     */
                    readonly lessRetainageHeldAmount?: string | null;
                    /**
                     * Format: decimal-precision-10
                     * @description Total net change amount.
                     * @example 1000.00
                     */
                    readonly netChangesAmount?: string | null;
                    /**
                     * Format: decimal-precision-10
                     * @description Total net change addition amount.
                     * @example 1000.00
                     */
                    readonly netChangesAdditionAmount?: string | null;
                    /**
                     * Format: decimal-precision-10
                     * @description Total net change deduction amount.
                     * @example 1000.00
                     */
                    readonly netChangesDeductionAmount?: string | null;
                };
                /** @description Project contract billing totals approved for the prior month on the invoice. (Construction subscription) */
                totalChangesApprovedPriorMonth?: {
                    /**
                     * Format: decimal-precision-10
                     * @description Total additions amount approved in prior months.
                     * @example 1000.00
                     */
                    additionsAmount?: string | null;
                    /**
                     * Format: decimal-precision-10
                     * @description Total deductions amount approved in prior months.
                     * @example 1000.00
                     */
                    deductionsAmount?: string | null;
                };
                /** @description Project contract billing totals approved for the current month on the invoice. (Construction subscription) */
                totalChangesApprovedThisMonth?: {
                    /**
                     * Format: decimal-precision-10
                     * @description Total additions amount approved this month.
                     * @example 1000.00
                     */
                    additionsAmount?: string | null;
                    /**
                     * Format: decimal-precision-10
                     * @description Total deductions amount approved this month.
                     * @example 1000.00
                     */
                    deductionsAmount?: string | null;
                };
            };
            /** @description Reference to a project contract architect contact. (Construction subscription) */
            architect?: {
                /**
                 * @description Unique key for the contact.
                 * @example 12
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the contact.
                 * @example Eberhardt
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the architect contact.
                 * @example /objects/company-config/contact/12
                 */
                readonly href?: string | null;
            };
            /** @description Reference to the project contract. (Construction subscription) */
            projectContract?: components["schemas"]["project-contract-ref"] & {
                /**
                 * @description Unique key for the project contract.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the project contract.
                 * @example BTI-01
                 */
                id?: string | null;
                /**
                 * @description User-specified name of the project contract.
                 * @example Berkeley Technology Inc - Contract 01
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint of the project contract.
                 * @example /objects/construction/project-contract/1
                 */
                readonly href?: string | null;
            };
            /** @description Contacts associated with the Order Entry document. */
            contacts?: {
                /** @description Primary contact */
                primary?: {
                    /**
                     * @description Unique key for the primary contact.
                     * @example 13
                     */
                    readonly key?: string;
                    /**
                     * @description ID for the primary contact.
                     * @example main contact
                     */
                    id?: string;
                };
                /** @description Ship-to contact for the document. */
                shipTo?: {
                    /**
                     * @description Unique key key for the ship-to contact.
                     * @example 33
                     */
                    readonly key?: string;
                    /**
                     * @description ID for the ship-to contact.
                     * @example shipping contact
                     */
                    id?: string;
                };
                /** @description Bill-to contact. */
                billTo?: {
                    /**
                     * @description Unique key for the bill-to contact.
                     * @example 44
                     */
                    readonly key?: string;
                    /**
                     * @description ID for the bill-to contact.
                     * @example billing contact
                     */
                    id?: string;
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
                 * @description ID for the shipping method.
                 * @example Air
                 */
                id?: string;
                /**
                 * @description URL endpoint for the shipping method.
                 * @example /objects/accounts-receivable/shipping-method/77
                 */
                readonly href?: string;
            };
            /** @description User who printed the document. */
            readonly printedByUser?: {
                /**
                 * @description Unique key for the user.
                 * @example 21
                 */
                readonly key?: string;
                /**
                 * @description Name or other ID for the user.
                 * @example John
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/21
                 */
                readonly href?: string;
            };
            /** @description Transaction definition that is associated with the document. */
            txnDefinition?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description Name or other unique ID for the transaction definition.
                 * @example Sales Invoice
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/order-entry/txn-definition/11
                 */
                readonly href?: string;
            };
            /** @description The source transaction from which the Order Entry document was created. */
            sourceDocument?: {
                /**
                 * @description Unique key for the source document.
                 * @example 44
                 */
                key?: string;
                /**
                 * @description Unique ID for the source document.
                 * @example Sales Order-SO0022
                 */
                id?: string;
                /**
                 * @description Document type of the source document.
                 * @example Sales Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the source document.
                 * @example /objects/order-entry/document::Sales%20Order/44
                 */
                readonly href?: string;
            };
            /** @description Customer associated with the Order Entry document. */
            customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description Unique ID for the customer.
                 * @example maev co housing
                 */
                id?: string;
                /**
                 * @description Name of the customer.
                 * @example Grove Apartments
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/15
                 */
                readonly href?: string;
            };
            /** @description Supporting document for this transaction. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 42
                 */
                key?: string;
                /**
                 * @description Unique ID for the attachment.
                 * @example Supporting doc
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/42
                 */
                readonly href?: string;
            };
            /** @description Contract associated with the Order Entry document. */
            contract?: {
                /**
                 * @description Unique key for the contract.
                 * @example 46
                 */
                key?: string;
                /**
                 * @description ID of the contract.
                 * @example CNRT1001
                 */
                id?: string;
                /**
                 * @description URL endpoint for the contract.
                 * @example /objects/contracts/contract/46
                 */
                readonly href?: string;
            };
            /** @description Accounts Receivable (AR) term, which determines the expiration date for quotes and the due date for invoices. */
            paymentTerm?: {
                /**
                 * @description URL endpoint for the term.
                 * @example /objects/term/75
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the term.
                 * @example 75
                 */
                key?: string;
                /**
                 * @description Name or other unique ID for the term.
                 * @example 10 Days
                 */
                id?: string;
            };
            /** @description Project associated with the Order Entry document. */
            project?: {
                /**
                 * @description System assigned unique key for the project.
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
                readonly href?: string;
            };
            projectContractBillingInvoiceSummary?: components["schemas"]["project-contract-billing-invoice-summary-ref"];
            /** @description Invoice run associated with the Order Entry document. */
            invoiceRun?: {
                /**
                 * @description Unique key for the invoice run.
                 * @example 88
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the invoice run.
                 * @example 88
                 */
                readonly id?: string;
            };
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Date and time of the submission.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            /** @description Record URL for the Order Entry document. */
            readonly webURL?: string;
            entity?: components["schemas"]["entity-ref"];
            status?: components["schemas"]["status"];
            /** @description The associated tax solution for the transaction. Tax solutions are available for different countries, for example Australia GST or South Africa VAT. */
            taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 44
                 */
                key?: string;
                /**
                 * @description ID for the tax solution.
                 * @example Avalara
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
            /**
             * @description Specifies whether the transaction is a regular invoice (invoice), an electronic invoice (eInvoice), or an invoice reported to the tax agency because it is not eligible for e-invoicing (eReporting).
             * @example invoice
             * @enum {string}
             */
            invoiceType?: null | "invoice" | "eInvoice" | "eReporting";
            /**
             * @description Invoice mode for France e-invoicing workflows; applicable only for France e-invoice enabled entities.
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
            /**
             * Format: outbound-binary
             * @description Contains download link for a document.
             * @example /services/core/content/download?key=50&resource=objects/order-entry/document&field=/downloadURL
             */
            readonly downloadURL?: string;
            /** @description Lines of the Order Entry document. */
            lines?: components["schemas"]["objects.order-entry.document-line"][];
            /** @description Lines of the Order Entry document subtotal. */
            subtotals?: components["schemas"]["objects.order-entry.document-subtotal"][];
            /** @description Lines of the Order Entry document history. */
            history?: components["schemas"]["objects.order-entry.document-history"][];
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
        "order-entry-documentRequiredProperties": {
            /** @example IBN */
            customer?: unknown;
            lines?: {
                /** @example { "item": { "id": "1" }, "warehouse": { "id": "1" }, "location": { "id": "1" }} */
                dimensions?: unknown;
            }[];
        };
        "order-entry-document-actions-generate-pdf-request": {
            /**
             * @description System-assigned key for the document.
             * @example 50
             */
            key: string;
        };
        "order-entry-document-actions-generate-pdf-response": {
            /**
             * @description System-assigned key for the document.
             * @example 50
             */
            key?: string;
            /**
             * @description Unique ID for the document.
             * @example 50
             */
            id?: string;
            /**
             * @description URL endpoint for the document.
             * @example /objects/order-entry/document/50
             */
            href?: string;
            /**
             * @description The download link for the document.
             * @example /services/core/content/download?key=50&resource=objects/order-entry/document&field=/downloadURL
             */
            downloadURL?: string;
        };
        /** @description Line items in an Order Entry document represent Order Entry transactions. */
        "objects.order-entry.document-line": {
            /**
             * @description System-assigned unique key for the Order Entry document line item.
             * @example 44
             */
            key?: string;
            /**
             * @description ID for the Order Entry document line item. This value is the same as key for this object.
             * @example 44
             */
            id?: string;
            /**
             * @description URL endpoint for the Order Entry document line item.
             * @example /objects/order-entry/document-line::Sales%20Invoice/44
             */
            readonly href?: string;
            /**
             * @description The type of transaction document.
             * @example Sales Invoice
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
                readonly id?: string;
                /**
                 * @description Name of the item.
                 * @example PC Computer
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/10
                 */
                readonly href?: string;
            };
            /** @description Alternative name for the item for a specific customer. */
            itemAlias?: {
                /**
                 * @description Unique key for the item alias.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description ID for the item alias.
                 * @example IXN
                 */
                id?: string;
                /**
                 * @description URL endpoint for the item alias.
                 * @example /objects/accounts-receivable/customer-item-cross-reference/10
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
             * @description Memo about price calculation used for the document line item.
             * @example Fair value price list
             */
            priceCalculationMemo?: string;
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
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Date and time when the document line was created.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            status?: components["schemas"]["status"];
            /**
             * @description Cost method associated with the document line item.
             * @default null
             * @example average
             * @enum {string|null}
             */
            readonly costMethod?: null | "standard" | "average" | "FIFO" | "LIFO";
            /**
             * Format: decimal-precision-10
             * @description Discount percentage for the document line item.
             * @example 10.50
             */
            discountPercent?: string;
            /**
             * @description This field is only applicable for companies subscribed to Contracts. This field displays the Multiplier value from the contract line. Defaults to 1 if no Multiplier was used on the contract line.
             * @example 1
             */
            multiplier?: number;
            /** @description Source Order Entry document. */
            sourceDocument?: {
                /**
                 * @description Unique key for the Order Entry document.
                 * @example 77
                 */
                key?: string;
                /**
                 * @description The source transaction from which the Order Entry document was created.
                 * @example Sales Order-SO0022
                 */
                id?: string;
                /**
                 * @description Type of the Order Entry document.
                 * @example Sales Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the Order Entry document.
                 * @example /objects/order-entry-document::Sales%20Order/77
                 */
                readonly href?: string;
            };
            /** @description Source document line that needs to be converted. */
            sourceDocumentLine?: {
                /**
                 * @description Unique key for the Order Entry document line item.
                 * @example 2234
                 */
                key?: string;
                /**
                 * @description ID for the Order Entry document line item.
                 * @example 2234
                 */
                id?: string;
                /**
                 * @description Type of the Order Entry document.
                 * @example Sales Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the Order Entry document line item.
                 * @example /objects/order-entry/document-line::Sales%20Order/2234
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates whether the price is prorated.
             * @default true
             * @example true
             */
            isPriceProrated?: boolean;
            /**
             * @description Discount memo for any discounts taken.
             * @example Festival discount
             */
            discountMemo?: string;
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
             * @description The line-level tax amount in the base currency.
             * @example 10.50
             */
            readonly taxInBaseCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description The line level tax amount in the transaction currency.
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
                     * @example LOC-22
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
                     * @description ID for the department.
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
            /** @description The template used for renewal schedules. */
            itemRenewalTemplate?: {
                /**
                 * @description The key of renewal template.
                 * @example 45
                 */
                key?: string;
                /**
                 * @description The ID of renewal template.
                 * @example Sales Renewal Template
                 */
                id?: string;
                /**
                 * @description URL endpoint for the renewal template.
                 * @example /objects/order-entry/renewal-template/45
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description The date on which the revenue recognition schedule and/or renewal schedule starts.
             * @example 2025-04-04
             */
            revenueRecognitionStartDate?: string;
            /**
             * Format: date
             * @description The date on which the revenue recognition schedule and/or renewal schedule ends.
             * @example 2025-04-04
             */
            revenueRecognitionEndDate?: string;
            /** @description The revenue recognition template used for the document line payment. */
            revenueRecognitionTemplate?: {
                /**
                 * @description Unique key for the revenue recognition template.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique ID for the revenue recognition template.
                 * @example 1001
                 */
                id?: string;
                /**
                 * @description URL endpoint for the revenue recognition template.
                 * @example /objects/accounts-receivable/revenue-recognition-template/1
                 */
                readonly href?: string;
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
             * @description The date on which the pick ticket is printed.
             * @example 2023-04-04
             */
            pickTicketPrintedDate?: string;
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
             * @description The date that the order was shipped.
             * @example 2023-04-04
             */
            shippedDate?: string;
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `allowDropShip` field instead.
             * @default false
             */
            allowDropship?: boolean;
            /**
             * @description Indicates whether drop-ship is allowed for the line.
             * @default false
             * @example true
             */
            allowDropShip?: boolean;
            /**
             * @description Indicates whether buy-to-order is allowed for the line.
             * @default false
             * @example true
             */
            allowBuyToOrder?: boolean;
            /** @description Line-level revised details post change order. (Construction subscription) */
            revision?: {
                /**
                 * @description Revised unit quantity.
                 * @example 10
                 */
                unitQuantity?: string | null;
                /**
                 * @description Revised quantity.
                 * @example 10
                 */
                quantity?: string | null;
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
                 * @example 100.00
                 */
                readonly price?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Revised unit price.
                 * @example 100.00
                 */
                readonly unitPrice?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Revised transaction price.
                 * @example 100.00
                 */
                readonly priceInTxnCurrency?: string | null;
            };
            /** @description Line-level draft details post change order. (Construction subscription) */
            draft?: {
                /**
                 * @description Draft unit quantity change.
                 * @example 10
                 */
                unitQuantity?: string | null;
                /**
                 * @description Draft quantity change.
                 * @example 10
                 */
                quantity?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Draft price change.
                 * @example 20.00
                 */
                price?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Draft base price change.
                 * @example 20.00
                 */
                readonly basePrice?: string | null;
            };
            /** @description Line-level posted details post change order. (Construction subscription) */
            posted?: {
                /**
                 * Format: decimal-precision-10
                 * @description Posted quantity change.
                 * @example 20
                 */
                readonly quantity?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Posted extended price change.
                 * @example 10.00
                 */
                readonly price?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Posted extended base price change.
                 * @example 10.00
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
             * Format: date
             * @description Service period start date.
             * @example 2024-04-01
             */
            servicePeriodStartDate?: string | null;
            /**
             * Format: date
             * @description Service period end date.
             * @example 2026-04-30
             */
            servicePeriodEndDate?: string | null;
            /** @description Line-level project contract billing details. (Construction subscription) */
            projectContractBilling?: {
                /**
                 * @description Project contract line external reference number.
                 * @example HGS-1024
                 */
                externalReferenceNumber?: string | null;
                /**
                 * @description Project contract line description.
                 * @example Construction of clubhouse and offices
                 */
                description?: string | null;
                /**
                 * @description Billing type used in project contract line.
                 * @default progressBill
                 * @example timeAndMaterial
                 * @enum {string|null}
                 */
                readonly billingType?: null | "progressBill" | "timeAndMaterial";
                /**
                 * Format: decimal-precision-10
                 * @description Contract line value.
                 * @example 1000.00
                 */
                contractLineValue?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Amount from prior application.
                 * @example 1000.00
                 */
                priorApplicationAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Completed this period amount.
                 * @example 500.00
                 */
                completedThisPeriodAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Stored materials amount.
                 * @example 300.00
                 */
                storedMaterialsAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Amount for total work completed to date.
                 * @example 500.00
                 */
                readonly completedToDateAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Percentage of work completed to date.
                 * @example 10.00
                 */
                readonly completedToDatePercent?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Balance remaining.
                 * @example 500.00
                 */
                readonly balanceRemaining?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Total amount converted.
                 * @example 1000.00
                 */
                readonly totalConvertedAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Total amount remaining.
                 * @example 500.00
                 */
                readonly totalRemainingAmount?: string | null;
                /**
                 * @description Indicates whether the entry is summarized.
                 * @default false
                 * @example false
                 */
                readonly isSummarized?: boolean;
            };
            /** @description Line-level retainage details. (Construction subscription) */
            retainage?: {
                /**
                 * Format: decimal-precision-2
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
                 * @description Indicates whether the entry is a retainage release.
                 * @default false
                 * @example true
                 */
                readonly isReleaseLine?: boolean;
                /**
                 * Format: decimal-precision-10
                 * @description Sum of all the pending retainage amounts from the project contract lines matching the previous invoices for the project contract.
                 * @example 1000.00
                 */
                previousBalanceAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Retainage to bill amount.
                 * @example 1000.00
                 */
                readonly billAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Retainage balance amount.
                 * @example 1000.00
                 */
                readonly balanceAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Extended price net retainage amount.
                 * @example 1000.00
                 */
                readonly extendedPriceNetAmount?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Extended base price net retainage amount.
                 * @example 1000.00
                 */
                readonly extendedBasePriceNetAmount?: string | null;
            };
            /**
             * @description Indicates whether the document line is reverse converted.
             * @default false
             * @example false
             */
            isReverseConversion?: boolean;
            /** @description Line-level reverse conversion details. (Construction subscription) */
            reverseConversion?: {
                /**
                 * Format: decimal-precision-10
                 * @description Reverse converted price.
                 * @example 100.00
                 */
                readonly price?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Reverse quantity converted.
                 * @example 10
                 */
                readonly quantity?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Standard price converted.
                 * @example 100.00
                 */
                readonly standardPrice?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Standard quantity converted.
                 * @example 10
                 */
                readonly standardQuantity?: string | null;
            };
            /** @description Reference to the source transaction when creating a change order. (Construction subscription) */
            relatedDocument?: {
                /**
                 * @description Unique key for the Order Entry document.
                 * @example 5151
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the Order Entry document. This value is the same as the key for this object.
                 * @example 5151
                 */
                id?: string | null;
                /**
                 * @description Document number for the Order Entry document.
                 * @example Sales Order-SD-SO0550
                 */
                readonly documentNumber?: string | null;
                /**
                 * @description URL endpoint for the Order Entry document.
                 * @example /objects/order-entry/document/5151
                 */
                readonly href?: string | null;
            };
            /** @description Reference to the source transaction line when creating a change order. (Construction subscription) */
            relatedDocumentLine?: {
                /**
                 * @description Unique key for the document line.
                 * @example 13965
                 */
                key?: string | null;
                /**
                 * @description Name or other unique ID for the document line.
                 * @example 13965
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the document line.
                 * @example /objects/order-entry/document-line/13965
                 */
                readonly href?: string | null;
            };
            /** @description Reference to the project contract. (Construction subscription) */
            projectContract?: components["schemas"]["project-contract-ref"] & {
                /**
                 * @description Unique key for the project contract.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the project contract.
                 * @example BTI-01
                 */
                id?: string | null;
                /**
                 * @description User-specified name of the project contract.
                 * @example Berkeley Technology Inc - Contract 01
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the project contract.
                 * @example /objects/construction/project-contract/1
                 */
                readonly href?: string | null;
            };
            /** @description Reference to a specific project contract line. (Construction subscription) */
            projectContractLine?: components["schemas"]["project-contract-line-ref"] & {
                /**
                 * @description Unique key for the project contract line.
                 * @example 4
                 */
                key?: string | null;
                /**
                 * @description Unique ID for the project contract line.
                 * @example Project-Contract-Line-04
                 */
                id?: string | null;
                /**
                 * @description User-specified name of the project contract line.
                 * @example Project contract line 04
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the project contract line.
                 * @example /objects/construction/project-contract-line/4
                 */
                readonly href?: string | null;
            };
            /** @description If Advanced Tax or VAT is enabled, the tax schedule used to capture tax details in the sales transaction. */
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
            /** @description Contacts for delivering the buy-to-order. */
            buyToOrderContact?: {
                /**
                 * @description Unique key for the contact.
                 * @example 13
                 */
                readonly key?: string;
                /**
                 * @description ID for the contact.
                 * @example contact
                 */
                id?: string;
            };
            /** @description List of warehouse inventory details including serial number, aisle, bin, and row per item. */
            trackingDetail?: components["schemas"]["objects.order-entry.document-line-detail"][];
            /** @description Header lever details for the document line items. */
            documentHeader?: {
                /**
                 * @description Unique key for the document.
                 * @example 55
                 */
                key?: string;
                /**
                 * @description ID for the document.
                 * @example Sales Invoice-SO0066
                 */
                id?: string;
                /**
                 * @description The type of transaction document.
                 * @example Sales Invoice
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the document.
                 * @example /objects/order-entry-document::Sales%20Invoice/55
                 */
                readonly href?: string;
            };
            /**
             * @description Notes about time and material billing.
             * @example Worked extra hours on project
             */
            timesheetNotes?: string;
            /** @description Category of time used with the document line item. */
            readonly timeType?: {
                /**
                 * @description Unique key for the time type.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the time type.
                 * @example Salaries At Root
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the time type.
                 * @example /objects/time/time-type/1
                 */
                readonly href?: string;
            };
            /** @description Employee expense type associated with the document line item. */
            readonly employeeExpenseType?: {
                /**
                 * @description Unique key for the employee expense type.
                 * @example 47
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the employee expense type.
                 * @example Travel
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the expense type.
                 * @example /objects/expenses/employee-expense-type/47
                 */
                readonly href?: string;
            };
            /** @description Lines of the Order Entry document line subtotal. */
            lineSubtotals?: components["schemas"]["objects.order-entry.document-line-subtotal"][];
        };
        "order-entry-document-lineRequiredProperties": {
            /** @example { "item": { "id": "1" }, "warehouse": { "id": "1" }, "location": { "id": "1" }} */
            dimensions?: unknown;
            /** @example 22 */
            documentHeader?: unknown;
        };
        /** @description List of warehouse inventory details including serial number, aisle, bin, and row per line item. */
        "objects.order-entry.document-line-detail": {
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
             * @example /objects/order-entry/document-line-detail/55
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
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/10
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            /** @description The Order Entry document line associated with the detail. */
            readonly orderEntryDocumentLine?: {
                /**
                 * @description Unique key for the Order Entry document line.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the document line.
                 * @example 23
                 */
                readonly id?: string;
                /**
                 * @description Type of the Order Entry document.
                 * @example Sales Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the Order Entry document.
                 * @example /objects/order-entry-document-line::Sales%20Order/23
                 */
                readonly href?: string;
            };
        };
        /** @description Details of the subtotals, taxes, discounts, charges, and more for the document line. */
        "objects.order-entry.document-line-subtotal": {
            /**
             * @description System-assigned unique key for the document line subtotal.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the document line subtotal. This value is the same as the key for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the document line subtotal.
             * @example /objects/order-entry/document-line-subtotal/23
             */
            readonly href?: string;
            /**
             * @description Description of the document line subtotal.
             * @example VAT Tax
             */
            readonly description?: string;
            /**
             * Format: decimal-precision-8
             * @description Non-negative base amount calculated across all other lines of the document.
             * @example 100.00
             */
            absoluteValue?: string;
            /**
             * Format: decimal-precision-8
             * @description Percentage value that is calculated on the total of all line items of the document.
             * @example 5.00
             */
            readonly percentValue?: string;
            /**
             * Format: decimal-precision-8
             * @description The computed base amount for the subtotal.
             * @example 105.00
             */
            readonly total?: string;
            /**
             * Format: decimal-precision-8
             * @description Non-negative transaction amount calculated across all other lines of the document.
             * @example 100.00
             */
            txnAbsoluteValue?: string;
            /**
             * Format: decimal-precision-8
             * @description The computed transaction amount for the subtotal.
             * @example 105.00
             */
            readonly txnTotal?: string;
            /**
             * @description Specifies whether the user can override both the tax detail (`taxDetail`) and the tax value (`txnAbsoluteValue`).
             * @default false
             * @example false
             */
            enableOverrideTax?: boolean;
            /** @description Tax details describe a specific type of tax that applies to the document line. */
            taxDetail?: {
                /**
                 * @description Unique key for the tax detail.
                 * @example 12
                 */
                key?: string;
                /**
                 * @description Unique ID for the tax detail.
                 * @example VAT Tax Detail
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax detail.
                 * @example /objects/tax/tax-detail/12
                 */
                readonly href?: string;
            };
            /** @description When `enableOverrideTax` is set to `true`, users can provide `taxDetail` and then the originally allotted `taxDetail` is assigned to `systemTaxDetail`. */
            readonly systemTaxDetail?: {
                /**
                 * @description Unique key for the tax detail.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Unique ID for the tax detail.
                 * @example VAT Tax Detail
                 */
                id?: string;
                /**
                 * @description URL endpoint for the tax detail.
                 * @example /objects/tax/tax-detail/10
                 */
                readonly href?: string;
            };
            readonly dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the document line subtotal.
                 */
                readonly location?: {
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
                 * @description Department associated with the document line subtotal.
                 */
                readonly department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 9
                     */
                    readonly key?: string;
                    /**
                     * @description Unique ID for the department.
                     * @example Accounting
                     */
                    id?: string;
                    /**
                     * @description Name or title of the department.
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
            /** @description The order entry document line associated with the subtotal. */
            readonly documentLine?: {
                /**
                 * @description Unique key for the document line.
                 * @example 10
                 */
                readonly key?: string;
                /**
                 * @description ID for the document line.
                 * @example 10
                 */
                readonly id?: string;
                /**
                 * @description Document type for the line item.
                 * @example Sales Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the document line.
                 * @example /objects/order-entry/document-line::Sales%20Order/10
                 */
                readonly href?: string;
            };
            /** @description Header lever details for the document that the associated document line resides in. */
            readonly document?: {
                /**
                 * @description Unique key for the document.
                 * @example 24
                 */
                key?: string;
                /**
                 * @description ID for the document.
                 * @example 24
                 */
                id?: string;
                /**
                 * @description Type of document.
                 * @example Sales Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the document.
                 * @example /objects/order-entry/document::Sales%20Order/24
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
        };
        /** @description History of workflow conversions associated with the Order Entry transaction. */
        "objects.order-entry.document-history": {
            /**
             * @description System-assigned key for the document history.
             * @example 11
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the document history. This value is the same as the `key` for this object.
             * @example 11
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the document history.
             * @example /objects/order-entry/document-history/11
             */
            readonly href?: string;
            /** @description The transaction from which the corresponding Order Entry transaction was converted. */
            readonly convertedFrom?: {
                /**
                 * @description Unique key for the Order Entry document.
                 * @example 22
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the Order Entry document.
                 * @example Sales Order-ORINV#0182#doc
                 */
                readonly id?: string;
                /**
                 * @description Type of the Order Entry document.
                 * @example Sales Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the Order Entry document.
                 * @example /objects/order-entry-document::Sales%20Order/22
                 */
                readonly href?: string;
            };
            /** @description The transaction to which the corresponding Order Entry transaction was converted. */
            readonly convertedTo?: {
                /**
                 * @description Unique key for the Order Entry document.
                 * @example 14
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the Order Entry document.
                 * @example Sales Invoice-SUBINV#0182#doc
                 */
                readonly id?: string;
                /**
                 * @description Type of the Order Entry document.
                 * @example Sales Invoice
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the Order Entry document.
                 * @example /objects/order-entry-document::Sales%20Invoice/14
                 */
                readonly href?: string;
            };
            /** @description The Order Entry document with which the history information is associated. */
            readonly orderEntryDocument?: {
                /**
                 * @description Unique key for the Order Entry document.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Name or other unique ID for the Order Entry document.
                 * @example Sales Order-ORINV#0182#doc
                 */
                readonly id?: string;
                /**
                 * @description Type of the Order Entry document.
                 * @example Sales Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the document.
                 * @example /objects/order-entry-document::Sales%20Order/22
                 */
                readonly href?: string;
            };
        };
        /** @description Details of subtotals, taxes, discounts, charges, and more for a transaction. */
        "objects.order-entry.document-subtotal": {
            /**
             * @description System-assigned unique key for the Order Entry document subtotal.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description ID for the Order Entry document subtotal. This value is the same as the key for this object.
             * @example 12
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the Order Entry document subtotal.
             * @example /objects/order-entry/document-subtotal/12
             */
            readonly href?: string;
            /**
             * @description Description of the document subtotal.
             * @example Tax
             */
            description?: string;
            /**
             * Format: decimal-precision-10
             * @description Specify a percentage that will be applied to the transaction total. For example, for a restocking fee that's 3 percent of the total transaction, specify 3 in this field.
             * @example 10.50
             */
            percentValue?: string;
            /**
             * Format: decimal-precision-2
             * @description Non-negative base amount for the subtotal. Clients may provide this value to override the computed subtotal; if omitted, the system calculates it across all other lines of the document.
             * @example 40.50
             */
            absoluteValue?: string;
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
            /** @description The Order Entry document line associated with the subtotal. */
            readonly documentLine?: {
                /**
                 * @description Unique key for the Order Entry document line.
                 * @example 10
                 */
                readonly key?: string;
                /**
                 * @description Type of the Order Entry document.
                 * @example Sales Order
                 */
                readonly documentType?: string;
                /**
                 * @description ID for the Order Entry document line.
                 * @example 10
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the Order Entry document line.
                 * @example /objects/order-entry-document-line::Sales%20Order/10
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            /** @description Dimensions associated with the document subtotal. */
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
                     * @example LOC-22
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
                     * @description Unique ID for the department.
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
            /** @description Header level details for the document subtotal. */
            readonly documentHeader?: {
                /**
                 * @description Unique key for the Order Entry document.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description ID for the Order Entry document.
                 * @example 23
                 */
                readonly id?: string;
                /**
                 * @description Type of Order Entry document.
                 * @example Sales Order
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the Order Entry document.
                 * @example /objects/order-entry-document::Sales%20Order/23
                 */
                readonly href?: string;
            };
        };
        /** @description This object specifies configuration preferences for transaction definitions. */
        "objects.order-entry.document-configuration-preference": {
            /**
             * @description System-assigned unique key for the document configuration preference.
             * @example 33
             */
            readonly key?: string;
            /**
             * @description Unique ID for the document configuration preference. This value is the same as the key for this object.
             * @example 33
             */
            readonly id?: string;
            /**
             * @description Order Entry module name.
             * @default orderEntry
             * @example orderEntry
             * @enum {string}
             */
            readonly moduleName?: "orderEntry";
            /** @description The transaction definition to which the configuration preference settings apply. */
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
                 * @description Name of the transaction definition.
                 * @example Sales Invoice
                 */
                readonly name?: string;
                /**
                 * @description Status of the transaction definition.
                 * @default active
                 * @example active
                 * @enum {string}
                 */
                readonly status?: "active" | "inactive";
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/order-entry/txn-definition::Sales%20Invoice/11
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies the frequency at which to post summaries of this document type.
             *     * `eachDocument` - Process each transaction separately as it is saved. Each transaction results in a separate journal entry.
             *     * `daily` - Summarize transactions by day. All transactions for the same day are summarized into a single journal entry.
             *     * `monthly` - Summarize transactions by month. All transactions for the same month are summarized into a single journal entry.
             * @default null
             * @example daily
             * @enum {string}
             */
            summaryFrequency?: null | "eachDocument" | "daily" | "monthly";
            /** @description Specifies the journal to which to post journal entries related to inventory. This field is only applicable to transaction definitions that affect `ONHAND` inventory. */
            inventoryJournal?: {
                /**
                 * @description Unique key for the journal.
                 * @example 245
                 */
                key?: string;
                /**
                 * @description Unique ID for the journal.
                 * @example IJ
                 */
                id?: string;
                /**
                 * @description Name or title of the journal.
                 * @example Inventory Journal
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the journal.
                 * @example /objects/general-ledger/journal/244
                 */
                readonly href?: string;
            };
            /**
             * @description Applies to transaction definitions that are configured for additional posting to the GL. Specifies the journal to which the additional GL journal entries are posted.
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
                 * @example SOJ
                 */
                id?: string;
                /**
                 * @description Name or title of the journal.
                 * @example Sales Journal
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the journal.
                 * @example /objects/general-ledger/journal/240
                 */
                readonly href?: string;
            };
            /** @description Specifies the journal to which to post journal entries that are related to revenue recognition. */
            revenueRecognitionJournal?: {
                /**
                 * @description Unique key for the journal.
                 * @example 241
                 */
                key?: string;
                /**
                 * @description Unique ID for the journal.
                 * @example RRJ
                 */
                id?: string;
                /**
                 * @description Name or title of the journal.
                 * @example Sales Journal
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the journal.
                 * @example /objects/general-ledger/journal/241
                 */
                readonly href?: string;
            };
            /** @description For transaction definitions that are configured to post directly to the GL, specifies the journal to which to post journal entries related to order entry. */
            salesJournal?: {
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
            /** @description Specifies the default account that the system posts deferred revenue to in the event an item on the sales transaction does not have a deferred revenue account associated with its item GL group. */
            defaultDeferredRevenueGLAccount?: {
                /**
                 * @description Unique key for the account.
                 * @example 102
                 */
                key?: string;
                /**
                 * @description Unique ID for the account.
                 * @example 2300.05
                 */
                id?: string;
                /**
                 * @description Name or title of the account.
                 * @example Deferred Revenue Account- Other
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/102
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies the custom email template that is the default template when a user chooses to send an email from this transaction type.
             *     Email templates associated with a vendor will override this `emailTemplate` setting for transactions for that vendor.
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
                 * @example Sales order template
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
             * @example /objects/order-entry/document-configuration-preference/33
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description Order entry price lists contain the sales prices for products or services used in sales transactions. */
        "objects.order-entry.price-list": {
            /**
             * @description System-assigned key for the order entry price list.
             * @example 5
             */
            readonly key?: string;
            /**
             * @description Unique name for the price list. If the list is exclusive to a specific customer, include the customer's name in the price list name to easily identify the price list.
             * @example Base Price List Sales
             */
            id?: string;
            /**
             * @description URL for the order entry price list.
             * @example /objects/order-entry/price-list/2
             */
            readonly href?: string;
            /**
             * @description Application
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
        "order-entry-price-listRequiredProperties": Record<string, never>;
        /** @description Contains the pricing for a selected item within a selected price list. You can create price list entries for items whose prices are determined based on an amount, a discount or mark-up percentage, the quantity sold, and more. */
        "objects.order-entry.price-list-entry": {
            /**
             * @description System assigned unique key for the price list entry.
             * @example 38
             */
            readonly key?: string;
            /**
             * @description ID for the price list entry. This value is the same as the key for this object.
             * @example 38
             */
            id?: string;
            /**
             * @description URL endpoint for the price list entry.
             * @example /objects/order-entry/price-list-entry/38
             */
            readonly href?: string;
            /** @description Specifies the product line to which the price list entry applies. If you specify a `productLine`, do not specify an `item` or `employee`. */
            productLine?: {
                /**
                 * @description Unique key for the product line.
                 * @example 25
                 */
                key?: string;
                /**
                 * @description Unique ID for the product line.
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
             * @description Specifies the currency in which the price will be evaluated. This field is only applicable to multi-currency companies.
             * @example USD
             */
            currency?: string;
            /**
             * Format: date
             * @description Specifies the date on which the price becomes effective. Past or future dates are valid. Sage Intacct considers a price to be effective as of its start date. When suggesting a price for a selected item, Sage Intacct uses the price list entry that's effective as of the transaction date.
             *
             *     The best practice is to ensure that each price list entry for an item or product line spans a unique start and end date range with no overlapping dates.
             * @example 2025-01-01
             */
            startDate?: string;
            /**
             * Format: date
             * @description Specifies the date on which the price ends. Past or future dates are valid. When suggesting a price for a selected item, Sage Intacct uses the price list entry that's effective as of the transaction date.
             *
             *     The best practice is to ensure that each price list entry for an item or product line spans a unique start and end date range with no overlapping dates.
             * @example 2025-05-01
             */
            endDate?: string;
            /**
             * Format: decimal-precision-8
             * @description Specify a `minimumQuantity` and `maximumQuantity` if you want to give or get price breaks according to the quantity ordered.  With this type of pricing, Sage Intacct  multiplies the transaction quantity by the rate mapped to the quantity range in which the transaction quantity falls.
             * @example 1
             */
            minimumQuantity?: string;
            /**
             * Format: decimal-precision-8
             * @description Specify a `minimumQuantity` and `maximumQuantity` if you want to give or get price breaks according to the quantity ordered. With this type of pricing, Sage Intacct multiplies the transaction quantity by the rate mapped to the quantity range in which the transaction quantity falls.
             * @example 100
             */
            maximumQuantity?: string;
            /**
             * Format: decimal-precision-10
             * @description The value specified in this field depends on the type that you set in the `valueType` field.
             *     * `actual` - Specify the price of the item. For example, specify `500.00` if the item price is $500.00.
             *     * `dollarMarkup` - Specify the amount to mark up the price. For example, specify `10.00` to mark up the price by $10.00.
             *     * `dollarDiscount`- Specify the amount to subtract from the price. For example, specify `10.00` to discount the price by $10.00.
             *     * `markupPercent` - Specify the percentage by which to mark up the price. For example, specify `20` to mark up the price by 20%.
             *     * `discountPercent` - Specify the percentage that you want to subtract from the price. For example, specify `5` to discount the price by 5%.
             * @example 60.56
             */
            value?: string;
            /**
             * @description Value type for the price list entry.
             *     * `actual` - The straight-forward price for the item, item and employee combination, or product line.
             *     * `dollarMarkup` - Adds the amount provided in the `value` field to the last price list entry found for the same item.
             *     * `dollarDiscount`- Subtracts the amount entered in the `value` field from the last price list entry found for the same item.
             *     * `markupPercent` - Multiplies the amount of the last price list entry found by the percentage entered in the `value` field and then adds the result to the last price list entry found.
             *     * `discountPercent` - Multiplies the amount of the last price list entry found by the percentage entered in the `value` field and then subtracts the result from the last price list entry found.
             * @default actual
             * @example actual
             * @enum {string}
             */
            valueType?: "actual" | "dollarMarkup" | "dollarDiscount" | "markupPercent" | "discountPercent";
            /**
             * @description Indicates whether the price is the fixed or final price. In a cascading (or layered) price list structure, the first time Sage Intacct encounters `isFixedPrice` = `true` for an item, it presents that price as the suggested price on the transaction regardless of any other price defined for that item in other price lists.
             * @default true
             * @example false
             */
            isFixedPrice?: boolean;
            /**
             * @description This field is only applicable if a company is subscribed to Projects and Time and Expenses. Do not specify an `employee` if you are not defining a billing rate.
             *
             *     To define a project billing rate, use a combination of `employee` and `item`. Sage Intacct uses the price associated with the `item`/`employee` combination for applicable time sheets when generating invoices for time and materials projects.
             */
            employee?: {
                /**
                 * @description Unique key for the employee.
                 * @example 25
                 */
                key?: string;
                /**
                 * @description Unique ID of the employee.
                 * @example 123
                 */
                id?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/25
                 */
                readonly href?: string;
            };
            /** @description Specifies the item to which the price list entry applies. If you specify an `item`, do not specify a `productLine`. */
            item?: {
                /**
                 * @description Unique key for the item.
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
                 * @description Unique key for the price list.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique ID for the price list.
                 * @example Base Price List
                 */
                id?: string;
                /**
                 * @description URL endpoint for the price list.
                 * @example /objects/order-entry/price-list/1
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            status?: components["schemas"]["status"];
        };
        "order-entry-price-list-entryRequiredProperties": unknown | unknown;
        /** @description Price schedules are pricing groups that you can assign to one or more customers. */
        "objects.order-entry.price-schedule": {
            /**
             * @description System-assigned key for the price schedule.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the price schedule.
             * @example Price23
             */
            id?: string;
            /**
             * @description URL for the price schedule.
             * @example /objects/order-entry/price-schedule/23
             */
            readonly href?: string;
            /**
             * @description Description of the price schedule.
             * @example Price schedule code description
             */
            description?: string;
            /** @description Associated price list. */
            priceList?: {
                /**
                 * @description System-assigned key for the order entry price list.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique identifier for the price list.
                 * @example Sales Price List
                 */
                id?: string;
                /**
                 * @description URL for the price list.
                 * @example /objects/order-entry/price-list/23
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
        "order-entry-price-scheduleRequiredProperties": Record<string, never>;
        /** @description Order Entry renewal templates define the structure and rules for automating sales transaction renewals. */
        "objects.order-entry.renewal-template": {
            /**
             * @description System-assigned key for the renewal template.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the renewal template. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description Name of the renewal template.
             * @example Sales Subscription Renewal Template 2025
             */
            name?: string;
            /**
             * @description URL endpoint for the renewal template.
             * @example /objects/order-entry/renewal-template/23
             */
            readonly href?: string;
            /**
             * @description Description of the renewal template.
             * @example Template for 2025 subscription renewals
             */
            description?: string;
            salesTxnCreation?: {
                /**
                 * @description Indicates whether Sage Intacct should create a new sales transaction as part of the renewal.
                 * @default false
                 * @example false
                 */
                enableTxnCreation?: boolean;
                /** @description Transaction definition associated with the renewal template. */
                transactionDefinition?: {
                    /**
                     * @description Unique key for the transaction definition.
                     * @example 13
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the transaction definition.
                     * @example Sales Invoice
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the transaction definition.
                     * @example /objects/order-entry/txn-definition/13
                     */
                    readonly href?: string;
                };
                /**
                 * @description The number of days before or after the source contract end date that Sage Intacct should create the sales transaction.
                 * @default 10
                 * @example 10
                 */
                daysBeforeAfter?: number;
                /**
                 * @description Indicates whether Sage Intacct should create the transaction before or after the source renewal date.
                 * @default before
                 * @example before
                 * @enum {string}
                 */
                beforeOrAfterDateOfRenewal?: "before" | "after";
                /**
                 * @description Establishes how the date on the sales transaction created by the renewal is determined.
                 *     * `calculatedDate` - Sage Intacct uses the transaction line item end date and adds or subtracts days based on the values of the `beforeOrAfterDateOfRenewal` and `daysBeforeAfter` fields.
                 *     * `contractEndDatePlusOneDay` - The system adds one day to the transaction line item end date.
                 * @default contractEndDatePlusOneDay
                 * @example calculatedDate
                 * @enum {string}
                 */
                txnDateOnRenewedDocument?: "calculatedDate" | "contractEndDatePlusOneDay";
                /**
                 * @description Establishes how the line item start date on the sales transaction created by the renewal is determined.
                 *
                 *
                 *
                 *
                 *
                 *      - `sameAsDocumentDate` - Sage Intacct uses the transaction date on the new sales transaction as the line item start date.
                 *      - `inheritOffsetFromParent` - Sage Intacct keeps the number of days between the transaction date and the line item start date the same as exists in the source sales transaction.
                 * @default sameAsDocumentDate
                 * @example sameAsDocumentDate
                 * @enum {string}
                 */
                txnLineItemStartDate?: "sameAsDocumentDate" | "withInheritedOffsetFromParent";
            };
            /** @description Specifies the pricing option for contract renewal. */
            contractPricing?: {
                /**
                 * @description Contract pricing for the sales transaction type line item.
                 *      - `sameAsOriginal` - the renewed contract will use the same price for the line item as in the original sales transaction.
                 *      - `defaultPricing` - Sage Intacct will use the suggested price for the renewed lines, if applicable.
                 *      - `custom` - (Contracts renewal template only) Requires the user to manually set a specific price on the contract line for the next renewal or series of renewals.
                 *      - `markupOrMarkdown` - Sage Intacct will either discount or mark up the line item by the indicated percentage or actual amount.
                 * @default sameAsOriginal
                 * @example sameAsOriginal
                 * @enum {string}
                 */
                pricingType?: "sameAsOriginal" | "defaultPricing" | "custom" | "markupOrMarkdown";
                /**
                 * @description Pricing markup. Sage Intacct will either discount or mark up the line item by the indicated percentage or actual amount. Specify the percentage or actual amount in the `markupValue` field.
                 * @default percentageMarkup
                 * @example percentageMarkup
                 * @enum {string}
                 */
                markup?: "percentageMarkup" | "percentageDiscount" | "actualMarkup" | "actualDiscount";
                /**
                 * @description Pricing markup value. For percentages, indicate the percentage as a whole number (for example, 5). For amounts, indicate the amount value (for example, 500.00).
                 * @example 50.00
                 */
                markupValue?: string;
            };
            /** @description Specifies details for customer and internal email notifications. */
            renewalNotifications?: {
                /** @description Customer email notification properties. */
                customerEmail?: {
                    /**
                     * @description Indicates whether to send an email to the customer as part of the renewal process.
                     * @default false
                     * @example false
                     */
                    enableNotification?: boolean;
                    /**
                     * @description Specifies the email address you want the recipient to reply to.
                     * @example jjones@mycompany.com
                     */
                    from?: string;
                    /**
                     * @description Specifies the customer contact email ID to use for notifications.
                     *     - `customerContact` - The email ID from the customer contact.
                     *     - `customerBillToContact` - The bill-to contact for the customer.
                     *     - `customerShipToContact` - The ship-to contact for the customer.
                     * @default customerContact
                     * @example customerContact
                     * @enum {string}
                     */
                    to?: "customerContact" | "customerBillToContact" | "customerShipToContact";
                    /**
                     * @deprecated
                     * @description This field has been deprecated for order entry renewal templates and is no longer used.
                     * @default 0
                     */
                    daysBeforeAfter?: number;
                    /**
                     * @deprecated
                     * @description This field has been deprecated for order entry renewal templates and is no longer used.
                     * @default before
                     * @enum {string|null}
                     */
                    beforeOrAfterContractRenewal?: "before" | "after" | null;
                    /**
                     * @description Specifies the email template to use for the customer notification email. The email template can contain the appropriate From/To email address parameters and customized text.
                     *
                     *     Sage Intacct recommends that you use an email template for renewal templates. If a pertinent email address is updated in Sage Intacct, the email template can automatically pick up the new email address.
                     */
                    emailTemplate?: {
                        /**
                         * @description Unique key for the email template.
                         * @example 10
                         */
                        key?: string;
                        /**
                         * @description Unique ID for the email template.
                         * @example 10
                         */
                        id?: string;
                        /**
                         * @description URL endpoint for the email template.
                         * @example /objects/company-config/email-template/10
                         */
                        readonly href?: string;
                    };
                };
                /** @description Internal email notification properties. */
                internalEmail?: {
                    /**
                     * @description Indicates whether to send an internal email as part of the renewal process.
                     * @default false
                     * @example false
                     */
                    enableNotification?: boolean;
                    /**
                     * @description Email address from which the notification is sent.
                     * @example bsmith@mycompany.com
                     */
                    from?: string;
                    /**
                     * @description Email address to send the internal notification to.
                     * @example jjones@mycompany.com
                     */
                    to?: string;
                    /**
                     * @description Indicates whether Sage Intacct should send the internal email notification before or after the source contract end date.
                     * @default before
                     * @example before
                     * @enum {string}
                     */
                    beforeOrAfterContractRenewal?: "before" | "after";
                    /**
                     * @description The number of days before or after the source contract end date that Sage Intacct should send the internal email notification.
                     * @default 10
                     * @example 10
                     */
                    daysBeforeAfter?: number;
                    /**
                     * @description Specifies the email template to use for the internal email notification. The email template can contain the appropriate From/To email address parameters and customized text.
                     *
                     *     Sage Intacct recommends that you use an email template for renewal templates. If a pertinent email address is updated in Sage Intacct, the email template can automatically pick up the new email address.
                     */
                    emailTemplate?: {
                        /**
                         * @description Unique key for the email template.
                         * @example 12
                         */
                        key?: string;
                        /**
                         * @description Unique ID for the email template.
                         * @example 12
                         */
                        id?: string;
                        /**
                         * @description URL endpoint for the email template.
                         * @example /objects/company-config/email-template/12
                         */
                        readonly href?: string;
                    };
                };
            };
            /** @description Salesforce opportunity properties. These properties apply on to companies subscribed to Sage Intacct Advanced CRM Integration. */
            salesforceOpportunity?: {
                /**
                 * @description Indicates whether a new opportunity will be created in Salesforce when the renewal occurs.
                 * @default false
                 * @example false
                 */
                enableSalesforceOpportunity?: boolean;
                /**
                 * @description Indicates whether Sage Intacct should create the Salesforce opportunity before or after the source contract end date.
                 * @default before
                 * @example before
                 * @enum {string}
                 */
                beforeOrAfterContractRenewal?: "before" | "after";
                /**
                 * @description The number of days before or after the source contract end date that the opportunity should be created in Salesforce.
                 * @default 10
                 * @example 10
                 */
                daysBeforeAfter?: string;
                /**
                 * @description Specifies the name of the Salesforce opportunity.
                 * @example SOrderRevRecActAlertSalesTeam
                 */
                renewalName?: string;
                /**
                 * @description Indicates whether Sage Intacct should populate the new opportunity with the same products (items) that existed in the original opportunity.
                 * @default false
                 * @example false
                 */
                inheritProductsFromParent?: boolean;
                /**
                 * @description Specifies the stage for the new Salesforce opportunity.
                 * @default prospecting
                 * @example prospecting
                 * @enum {string}
                 */
                stage?: "prospecting" | "qualification" | "needsAnalysis" | "valueProposition" | "idDecisionMakers" | "perceptionAnalysis" | "proposalPriceQuote" | "negotiationReview" | "closedWon" | "closedLost" | null;
            };
            /**
             * @description Latest version key of the template.
             * @example 1
             */
            readonly latestVersion?: string;
            /**
             * @description Specifies the module for which the renewal template transaction can be created. The contract and evergreen enum values are accepted for backward compatibility and internally route to contracts/contract-renewal-template or contracts/evergreen-template. Use those endpoints directly for contract and evergreen templates.
             * @default salesTransaction
             * @example salesTransaction
             * @enum {string}
             */
            transactionType?: "salesTransaction" | "contract" | "evergreen";
            /**
             * @deprecated
             * @description State of the renewal template.
             * @default inProgress
             * @example inProgress
             * @enum {string|null}
             */
            renewalState?: "inProgress" | "draft" | null;
            /**
             * @deprecated
             * @description This field has been deprecated for order entry renewal templates and is no longer used.
             */
            defaultTerm?: {
                /**
                 * @deprecated
                 * @description This field has been deprecated for order entry renewal templates and is no longer used.
                 * @default months
                 * @enum {string}
                 */
                period?: "years" | "months" | "days";
                /**
                 * @deprecated
                 * @description This field has been deprecated for order entry renewal templates and is no longer used.
                 */
                length?: string;
            };
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
        };
        "order-entry-renewal-templateRequiredProperties": Record<string, never>;
        /**
         * @description In a multi-entity organization, subtotal templates enable you to create different sets of subtotals
         *     and then refer to them by name within a transaction definition. They simplify setting up and managing transaction
         *     definitions.
         */
        "objects.order-entry.subtotal-template": {
            /**
             * @description System-assigned unique key for the order entry subtotal template.
             * @example 3
             */
            readonly key?: string;
            /**
             * @description Name or other unique ID of the order entry subtotal template.
             * @example SalesInvoiceCharges
             */
            id?: string;
            /**
             * @description Key for the module associated with the subtotal template.
             * @default 8.SO
             * @example 8.SO
             */
            readonly moduleKey?: string;
            /**
             * @description URL endpoint for the order entry subtotal template.
             * @example /objects/order-entry/subtotal-template/3
             */
            readonly href?: string;
            /** @description Lines for the order entry subtotal template. */
            lines?: components["schemas"]["objects.order-entry.subtotal-template-line"][];
            audit?: components["schemas"]["audit.s1"];
        };
        "order-entry-subtotal-templateRequiredProperties": {
            lines?: unknown[];
        };
        /** @description Line details for an order entry subtotal template. */
        "objects.order-entry.subtotal-template-line": {
            /**
             * @description System-assigned unique key for the subtotal template line.
             * @example 4
             */
            readonly key?: string;
            /**
             * @description Unique ID of the subtotal template line. This value is the same as the `key` for this object.
             * @example 4
             */
            readonly id?: string;
            /**
             * @description Description of the subtotal. Each subtotal description must be unique.
             * @example FreightCharge
             */
            description?: string;
            /**
             * @description Indicates whether the subtotal is a discount or charge.
             * @example discount
             * @enum {string}
             */
            subtotalType?: "discount" | "charge";
            /**
             * @description Line number for the subtotal template line.
             * @example 1
             */
            lineNumber?: number;
            /**
             * @description Value type for the subtotal, either `amount` or `percent`.
             * @example amount
             * @enum {string}
             */
            valueType?: "amount" | "percent";
            /**
             * Format: decimal-precision-10
             * @description Default value for the subtotal. If `valueType` is `amount`, specify the amount of the subtotal.
             *     For example, enter 250. If `valueType` is `percent`, specify a percentage as a whole number. For example, 10 for 10%.
             *     End users can override the default subtotal value in the transaction. It can have up to 10 decimals and should be a positive numeric field.
             * @example 10.00
             */
            defaultValue?: string;
            /**
             * @description Indicates whether the discount subtotal will be apportioned across all line items in the transaction. Cannot be enabled if `isTax` is set to `true`.
             * @default false
             * @example false
             */
            isApportioned?: boolean;
            /** @description GL account to which the subtotal posts. */
            glAccount?: {
                /**
                 * @description Unique key for the account.
                 * @example 297
                 */
                key?: string;
                /**
                 * @description ID of the GL account.
                 * @example 6850.03
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/297
                 */
                readonly href?: string;
            };
            /** @description Offset GL account to which the subtotal posts. */
            offsetGLAccount?: {
                /**
                 * @description Unique key for the account.
                 * @example 36
                 */
                key?: string;
                /**
                 * @description ID of the offset GL account.
                 * @example 1200
                 */
                id?: string;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/36
                 */
                readonly href?: string;
            };
            /**
             * @description Transaction type that determines whether the subtotal debits or credits the corresponding GL account and offset GL account.
             * @example debit
             * @enum {string|null}
             */
            txnType?: null | "debit" | "credit";
            /**
             * @description Line number of the subtotal to which this subtotal applies. Sage Intacct treats the initial subtotal line as line number 0. The first defined subtotal from the transaction definition is line number 1, the second defined subtotal is line number 2, and so on.
             * @example 1
             */
            applyToLineNumber?: number;
            /**
             * @description Indicates whether the subtotal line is for tax. When the transaction posts, the tax posts separately based on the items in the transaction.
             * @default false
             * @example false
             */
            isTax?: boolean;
            /**
             * @description For companies using the Avalara AvaTax integration, indicates whether the subtotal line applies to AvaTax.
             * @default false
             * @example false
             */
            isAvalaraTax?: boolean;
            /**
             * @description URL endpoint for the subtotal template line.
             * @example /objects/order-entry/subtotal-template-line/4
             */
            readonly href?: string;
            /** @description Order entry subtotal template that includes this line detail. */
            readonly subtotalTemplate?: {
                /**
                 * @description Unique key for the order entry subtotal template.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description ID of the order entry subtotal template.
                 * @example 3
                 */
                id?: string;
                /**
                 * @description URL endpoint for the subtotal template.
                 * @example /objects/order-entry/subtotal-template/3
                 */
                readonly href?: string;
            };
        };
        "order-entry-subtotal-template-lineRequiredProperties": Record<string, never>;
        /** @description Customer GL groups are categories of customers grouped together so that transactions can be posted to specific GL accounts. */
        "objects.order-entry.customer-gl-group": {
            /**
             * @description System-assigned key for the customer GL group.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Name of the customer GL group.
             * @example GL Group
             */
            id?: string;
            /**
             * @description URL endpoint for the customer GL group.
             * @example /objects/order-entry/customer-gl-group/23
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "customer-gl-groupRequiredProperties": Record<string, never>;
        /** @description A recurring document contains information about a recurring purchasing transaction, including the transaction definition, line item details, and schedule for a recurring transaction. */
        "objects.order-entry.recurring-document": {
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
             * @example /objects/order-entry/recurring-document::Sales%20Invoice/78
             */
            readonly href?: string;
            /**
             * @description Document template ID for the associated transaction.
             * @example Sales Invoice
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
                href?: string;
            };
            /**
             * @description Reference to another document, as needed.
             * @example SALES-100
             */
            referenceNumber?: string;
            /**
             * @description Sales contract ID associated with the transaction.
             * @example CN100123
             */
            contractId?: string;
            /**
             * @description Sales contract description.
             * @example Sales & Service
             */
            contractDescription?: string;
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
            /** @description Accounts Receivable (AR) term, which determines the expiration date for quotes and the due date for invoices. */
            paymentTerm?: {
                /**
                 * @description URL endpoint for the term.
                 * @example /objects/accounts-receivable/term/75
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the AR term.
                 * @example 75
                 */
                key?: string;
                /**
                 * @description Name or other unique ID for the AR term.
                 * @example 10 Days
                 */
                id?: string;
            };
            /**
             * @description Notes about the recurring document.
             * @example Fast order
             */
            notes?: string;
            /**
             * @description Text to appear on the printed document.
             * @example Lowry solutions
             */
            memo?: string;
            /**
             * @description Customer PO number associated with the transaction.
             * @example ABOTT-1001
             */
            customerPONumber?: string;
            /** @description Customer associated with the recurring document. */
            customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description Unique ID for the customer.
                 * @example CR1001
                 */
                id?: string;
                /**
                 * @description Name of the customer.
                 * @example Berkeley Technology Inc
                 */
                name?: string;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/15
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
                 * @example Sales Invoice
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/order-entry/txn-definition/11
                 */
                readonly href?: string;
            };
            /** @description Lines of the recurring document. */
            lines?: components["schemas"]["objects.order-entry.recurring-document-line"][];
            /** @description Lines of the recurring document subtotal. */
            subtotals?: components["schemas"]["objects.order-entry.recurring-document-subtotal"][];
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
        "order-entry-recurring-documentRequiredProperties": {
            /** @example { "startDate": "2024-07-01", "repeatBy": "weeks", "repeatInterval": "1" } */
            schedule?: unknown;
            lines?: {
                /** @example { "item": { "id": "1" }, "warehouse": { "id": "1" }, "location": { "id": "1" }} */
                dimensions?: unknown;
            }[];
        };
        /** @description Line items in a recurring document represent recurring transactions. */
        "objects.order-entry.recurring-document-line": {
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
             * @example /objects/order-entry/recurring-document-line/88
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
                     * @example LOC-22
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
                 * @description Warehouse associated with the recurring document line.
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
             * Format: date
             * @description The date on which either the revenue recognition schedule and/or the renewal schedule are started.
             * @example 2023-04-04
             */
            revenueRecognitionStartDate?: string;
            /**
             * Format: date
             * @description The date on which either the revenue recognition schedule and/or the renewal schedule are ended.
             * @example 2023-04-04
             */
            revenueRecognitionEndDate?: string;
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
             * @description Defaults to the transaction currency associated with the selected vendor. This field is only applicable to multi-currency companies.
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
            /** @description Alternative name for the item for a specific customer. */
            itemAlias?: {
                /**
                 * @description Unique key for the item alias.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description ID for the item alias.
                 * @example IXN
                 */
                id?: string;
                /**
                 * @description URL endpoint for the item alias.
                 * @example /objects/accounts-receivable/customer-item-cross-reference/10
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
                 * @description ID for recurring document.
                 * @example 55
                 */
                id?: string;
                /**
                 * @description Type of the recurring document.
                 * @example Sales Invoice
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the recurring document.
                 * @example /objects/order-entry-document::Sales%20Invoice/55
                 */
                readonly href?: string;
            };
        };
        "order-entry-recurring-document-lineRequiredProperties": {
            /** @example { "item": { "id": "1" }, "warehouse": { "id": "1" }, "location": { "id": "1" }} */
            dimensions?: unknown;
            /** @example 22 */
            recurringDocumentHeader?: unknown;
        };
        /** @description Details of Subtotals, taxes, discounts, charges etc for the recurring transaction. */
        "objects.order-entry.recurring-document-subtotal": {
            /**
             * @description System-assigned key for the Order Entry recurring document subtotal.
             * @example 69
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the Order Entry recurring document subtotal.
             * @example 69
             */
            readonly id?: string;
            /**
             * @description Endpoint for the Order Entry recurring document subtotal.
             * @example /objects/order-entry/recurring-document-subtotal/69
             */
            readonly href?: string;
            /**
             * @description Description about the subtotal.
             * @example Tax
             */
            description?: string;
            /**
             * Format: decimal-precision-2
             * @description Non negative base amount calculated across all other lines of the document.
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
             * @description Non negative transaction amount calculated across all other lines of the recurring document.
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
                     * @description System-assigned key for the location.
                     * @example 22
                     */
                    key?: string;
                    /**
                     * @description Identifier for the location.
                     * @example Arizona
                     */
                    id?: string;
                    /**
                     * @description URL for the location.
                     * @example /objects/company-config/location/22
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description A dimension that allows you to create a hierarchy of departments to reflect how your company is organized.
                 */
                department?: {
                    /**
                     * @description System-assigned key for the department.
                     * @example 9
                     */
                    readonly key?: string;
                    /**
                     * @description Unique identifier of the department.
                     * @example Accounting
                     */
                    id?: string;
                    /**
                     * @description URL for the department.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
            };
            /** @description order entry recurring document header */
            readonly recurringDocumentHeader?: {
                /**
                 * @description System-assigned key for the purchasing document.
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
                 * @description Endpoint for the purchasing document.
                 * @example /objects/purchasing/recurring-document::Purchase%20Order/23
                 */
                readonly href?: string;
            };
        };
        /** @description Recurring schedules specify the frequency and duration of recurring Order Entry transactions. Recurring schedules are only used when a user converts an Order Entry transaction by line item. */
        "objects.order-entry.recurring-schedule": {
            /**
             * @description System-assigned key for the recurring schedule.
             * @example 17
             */
            readonly key?: string;
            /**
             * @description Name or another unique ID for the recurring schedule.
             * @example Daily
             */
            id?: string;
            /**
             * @description Description of the recurring schedule to help users differentiate between similar schedules.
             * @example Daily schedule
             */
            description?: string;
            /**
             * @description Specifies whether to divide the line item sales price by the number of times the transaction will repeat and create each transaction in the schedule with an installment price.
             *
             *     For example, if the line item price is $1,200 and the transaction will repeat 12 times, the system will create 12 transactions of $100 each.
             * @default false
             * @example false
             */
            enableInstallmentPricing?: boolean;
            /**
             * Format: date
             * @description Date on which the recurring schedule is to stop running.
             * @example 2025-12-31
             */
            endDate?: string;
            /**
             * @description Specifies the time period at which the transaction should recur. For example, to establish a weekly schedule, set `repeatBy` to `weekly` and the `repeatInterval` to `1`. Set `repeatBy` to `none` if the schedule should occur only once on a specific date.
             * @default days
             * @example none
             * @enum {string}
             */
            repeatBy?: "none" | "days" | "weeks" | "months" | "endOfMonth" | "years";
            /**
             * @description Specifies the number of intervals for the selected time period. For example, to have the schedule repeat every other week, set 'repeatBy' to `weeks` and specify `2` for this field.
             * @example 1
             */
            repeatInterval?: number;
            /**
             * @description The maximum number of times the scheduler should be executed.
             * @example 1
             */
            repeatCount?: number;
            /**
             * @description Specifies how the date to start the recurring schedule is determined. The start date drives both the start of the recurring schedule and when the schedule is repeated, unless you set `repeatBy` to `endOfMonth`.
             *
             *     For example, if the start date is on the 15th, the schedule repeats on the 15th day of the month if the recurring schedule is set to repeat every month. If the recurring schedule is set to repeat every week, the schedule repeats every 7 days, starting on the 15th day of the month.
             *
             *      - `transactionDate` - The date in the Transaction date field on the transaction from which the line item is being converted is the start date.
             *
             *      - `userSpecified` - The date the user enters in the Schedule Start Date field in the transaction's Line Item Entries Details section (in the Sage Intacct UI) is the start date.
             * @default transactionDate
             * @example transactionDate
             * @enum {string}
             */
            startDateType?: "transactionDate" | "userSpecified";
            /** @description The user who created the schedule. */
            createdByUser?: {
                /**
                 * @description System-assigned key for the userinfo.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique login ID for the user.
                 * @example Admin
                 */
                id?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/1
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            /**
             * @description URL endpoint for the recurring schedule.
             * @example /objects/order-entry/recurring-schedule/23
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "order-entry-recurring-scheduleRequiredProperties": Record<string, never>;
        /** @description An Order Entry transaction definition is the template for a sales transaction. It contains the accounting rules, workflow settings, and other configuration settings that determine a transaction's behavior. */
        "objects.order-entry.txn-definition": {
            /**
             * @description System-assigned unique key for the transaction definition.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description The name for the transaction definition.
             * @example Sales Quote
             */
            id?: string;
            /**
             * @description URL endpoint for the transaction definition.
             * @example /objects/order-entry/txn-definition/23
             */
            readonly href?: string;
            /**
             * @description Order Entry transaction template type, which determines whether certain fields appear on a transaction.
             * @default quote
             * @example quote
             * @enum {string}
             */
            docClass?: "quote" | "order" | "list" | "invoice" | "adjustment" | "other";
            /**
             * @description The workflow category associates the transaction with the applicable transaction menu grouping in the Order Entry menu.
             * @default quote
             * @example quote
             * @enum {string}
             */
            workflowCategory?: "quote" | "order" | "shipping" | "invoice" | "return" | "loan";
            /**
             * @description A meaningful description of the transaction definition.
             * @example Sales Return RevRec Document
             */
            description?: string;
            /**
             * @description By default, all users with the appropriate application permissions have access to transactions that use this transaction definition. To restrict access to certain users or groups, set this field to `true`.
             * @default false
             * @example true
             */
            readonly enableUserOrGroupPermission?: boolean;
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `enableUserOrGroupPermission` field instead.
             * @default false
             */
            readonly enableUserOrGroupPermmission?: boolean;
            /**
             * @description Sets the edit permission for this transaction type.
             *     * `noEdit` - The user cannot edit the transaction after it is created.
             *     * `beforePrinting` - The user can edit the transaction until it has been printed to PDF. After it has been printed, the transaction cannot be edited.
             *     * `editInDraftOnly`- The user can edit the transaction until it has been posted. After it has been posted, the transaction cannot be edited.
             *     `all` - The user can edit the transaction as allowed by the transaction's condition. See [Editing a sales transaction](https://www.intacct.com/ia/docs/en_US/help_action/Order_Entry/Using_Order_Entry/Transactions/OE-transaction-lists.htm) for editing restrictions.
             * @default all
             * @example noEdit
             * @enum {string}
             */
            editPolicy?: "noEdit" | "beforePrinting" | "editInDraftOnly" | "all";
            /**
             * @description Sets the delete permission for this transaction type. By default, a user cannot delete a transaction after it is created.
             *     * `noDelete` - The user cannot delete the transaction after it is created.
             *     * `beforePrinting` - The user can delete the transaction until it has been printed to PDF. After it has been printed, the transaction cannot be deleted.
             *     * `all` - The user can delete the transaction as allowed by the transaction's condition. See [Editing a sales transaction](https://www.intacct.com/ia/docs/en_US/help_action/Order_Entry/Using_Order_Entry/Transactions/OE-transaction-lists.htm) for editing restrictions.
             * @default noDelete
             * @example all
             * @enum {string}
             */
            deletePolicy?: "noDelete" | "beforePrinting" | "all";
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
            inheritDocumentNumber?: boolean;
            /**
             * @description Specify if inventory will be affected by the transaction and, if so, whether to track the quantity, value, or both.
             * @default no
             * @example no
             * @enum {string}
             */
            inventoryUpdateType?: "no" | "quantity" | "value" | "quantityAndValue";
            /**
             * @description Specify whether the inventory running total is increased or decreased by the transaction.
             * @default increase
             * @example increase
             * @enum {string}
             */
            increaseOrDecreaseInventory?: "increase" | "decrease";
            /**
             * @description Specify whether the transaction post process creates a GL entry and, if so, whether it will post directly to the GL or to the AR subledger.
             * @default noPosting
             * @example toGL
             * @enum {string}
             */
            txnPostingMethod?: "toAR" | "toGL" | "noPosting";
            /**
             * @description Set to `true` to disable tax capture for the transaction.
             * @default false
             * @example false
             */
            disableTax?: boolean;
            /**
             * @description Set to `true` to enable the transaction definition for fulfillment.
             * @default false
             * @example false
             */
            enableFulfillment?: boolean;
            /**
             * @description Set to `true` to enable inventory items for reserving and picking.
             * @default false
             * @example false
             */
            enableReservingAndPicking?: boolean;
            /**
             * @description Specify how the system processes transactions that are partially complete.
             *     * `leaveTransactionOpen` - When the user converts the transaction to another transaction type, the system leaves the original transaction open until all items are completed.
             *     * `closeOriginalAndCreateBackOrder` - When the user converts the transaction to another transaction type and enters an item quantity that's less than the original transaction quantity, the system closes the original transaction and creates a new transaction for the remaining item quantity.
             *     * `closeTransaction` - When the user converts the transaction to another transaction type, the system closes the original transaction regardless of whether the transaction is complete.
             *     See [Convert part of a transaction](https://www.intacct.com/ia/docs/en_US/help_action/Order_Entry/Using_Order_Entry/Transactions/Convert_transactions/convert-part-of-a-sales-transaction.htm) in the Sage Intacct Help Center for more information.
             * @default closeTransaction
             * @example closeTransaction
             * @enum {string}
             */
            partialConvertMethod?: "leaveTransactionOpen" | "closeOriginalAndCreateBackOrder" | "closeTransaction";
            /**
             * @description If true the transaction will affect the costing of order entry.
             * @default false
             * @example false
             */
            affectsCost?: boolean;
            /**
             * @description Indicates whether users can edit the Exchange rate and/or Exchange rate type fields of the transaction.
             * @default true
             * @example false
             */
            overrideExchangeRateType?: boolean;
            /**
             * @description Specifies whether the transaction amounts are displayed in both base currency and transaction currency. The following fields display amounts in the currency selected as the transaction currency on a transaction: Price, Extended price, Transaction value, and Transaction total.
             *     If `showBaseCurrency` is set to `true`, the transaction currency amount fields appear and the following fields also appear: Base price, Extended base price, Base value, and Base total. These additional fields display the amounts in the company's base currency.
             * @default false
             * @example false
             */
            showBaseCurrency?: boolean;
            /**
             * @description Set to `true` to allow users to override line item prices on the transaction.
             * @default true
             * @example false
             */
            overridePrice?: boolean;
            /**
             * @description Indicates whether users can discount transaction line items.
             * @default false
             * @example false
             */
            trackDiscountAndSurcharge?: boolean;
            /**
             * @description Indicates whether the transaction definition can be used for contract invoices. This field is only applicable if the company is subscribed to Contracts.
             * @default false
             * @example false
             */
            allowDiscountOnExtendedPrice?: boolean;
            /**
             * @description Indicates whether users must provide notes for line items being discounted before saving a transaction.
             * @default false
             * @example false
             */
            requireMemoForDiscount?: boolean;
            /**
             * @description Indicates whether the transaction can be displayed on the Revenue transaction entries page when in a draft state.
             * @default false
             * @example false
             */
            displayDraftsOnRevenueTxnEntriesPage?: boolean;
            /**
             * @description Set to `true` to freeze recalled values.
             * @default false
             * @example false
             */
            freezeRecallValue?: boolean;
            /**
             * @description Set to `true` to specify standard subtotals, such as tax or a discount, for the transaction.
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
             * @description Indicates whether users can override whether a line item is taxable.
             * @default false
             * @example false
             */
            enableOverrideTax?: boolean;
            /**
             * @description Specifies whether revenue recognition applies to transactions created from this definition and, if so, whether to post the revenue recognition or only display it. This field applies only to companies subscribed to Revenue Management and is applicable only to Order Entry revenue recognition.
             * @default none
             * @example post
             * @enum {string}
             */
            revenueRecognitionType?: "post" | "displayOnly" | "none";
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `revenueRecognitionType` field instead.
             * @default none
             * @example post
             * @enum {string}
             */
            revrecEnablementType?: "post" | "displayOnly" | "none";
            /**
             * @description Specifies whether contract renewals apply to the transaction type and, if so, whether the renewal is set up to generate when the transaction posts or the renewal fields are displayed in the transaction so users can select a renewal transaction set.
             * @default none
             * @example displayOnly
             * @enum {string}
             */
            renewalEnablementType?: "generate" | "displayOnly" | "none";
            /**
             * @description Set to `true` to allow users to convert a sales transaction by line item into a scheduled recurring transaction.
             * @default false
             * @example false
             */
            enableLineItemConversion?: boolean;
            /**
             * @description This field is only applicable if `renewalEnablementType` is set to `generate`. Set this field to `true` if the system should only renew line items that were converted in the original sales transaction. Set to `false` if all indicated line items should be renewed, regardless of conversion status.
             * @default false
             * @example false
             */
            allowRenewConvertedLineOnly?: boolean;
            /**
             * @description Set to 'true' to allow users to override the location set for the transaction.
             * @default false
             * @example false
             */
            allowLocationOverride?: boolean;
            /**
             * @description Set to `true` to allow users to override the department set for the transaction.
             * @default false
             * @example false
             */
            allowDepartmentOverride?: boolean;
            /**
             * @description Document template to use for printed output (PDFs).
             * @example sales
             */
            xslTemplate?: string;
            /**
             * @description This message is displayed in the Print/Email document.
             * @example For any inquiries or assistance, please contact our customer service.
             */
            fixedMessage?: string;
            /**
             * @description Use this field to change the Bill-to labels on the transaction and on the printed document.
             * @default Bill to
             * @example Bill to
             */
            contactOneTitle?: string;
            /**
             * @description Use this field to change the Ship-to labels on the transaction and on the printed document.
             * @default Ship to
             * @example Ship to
             */
            contactTwoTitle?: string;
            /**
             * @description Set to `true` to show the Bill-to contact in the printed document.
             * @default false
             * @example false
             */
            printBillToContact?: boolean;
            /**
             * @description Set to `true` to show the Ship-to contact in the printed document.
             * @default false
             * @example false
             */
            printShipToContact?: boolean;
            /**
             * @description Set to `true` to allow users to change the Bill-to contact during transaction entry.
             * @default false
             * @example false
             */
            allowEditingBillToContact?: boolean;
            /**
             * @description Set to `true` to allow users to change the Ship-to contact during transaction entry.
             * @default false
             * @example false
             */
            allowEditingShipToContact?: boolean;
            /**
             * @description Set to `true` to alert the user when the quantity needed is greater than the `ONHAND` total in the selected warehouse. The warning also shows the `ONORDER` and `ONHOLD` totals.
             * @default true
             * @example false
             */
            enableWarnOnLowQuantity?: boolean;
            /**
             * @description Specifies whether to enforce customer credit limit restrictions in transactions created from this definition.
             * @default false
             * @example false
             */
            enableCreditLimitCheck?: boolean;
            /**
             * @description Specifies how warehouses are presented to the user in the warehouse list in the transaction.
             * @default sortByID
             * @example sortByID
             * @enum {string}
             */
            warehouseSelectionMethod?: "sortByID" | "sortByName" | "warehouseWithAvailableInventory" | "useTheDefaultWarehouse";
            /**
             * @description Set to `true` to enable users to apply payments to an invoice in Order Entry and to set a recurring template to automatically charge a credit card when an invoice is generated (if the company is subscribed to Payment Services).
             * @default false
             * @example false
             */
            enablePayments?: boolean;
            /**
             * @description System-assigned version key for the order entry transaction definition.
             * @example 23
             */
            readonly latestVersionKey?: string;
            /**
             * @description Set to `true` to enable additional posting to the General Ledger.
             * @default false
             * @example false
             */
            postToGL?: boolean;
            /**
             * @description Set to `true` if a price must be supplied.
             * @default false
             * @example false
             */
            requireSupplyOfPrices?: boolean;
            /**
             * @description Set to `true` to enable costing for non-inventoried items.
             * @default false
             * @example false
             */
            enableCosting?: boolean;
            /**
             * @description Document conversion policy.
             *     * `newDocumentOnly` - The user can create the transaction as a standalone transaction (by selecting Add from a transaction list, or the plus icon next to the transaction definition in the Sage Intacct menu, or by copying an existing transaction, and so on).
             *     * `newDocumentOrConvert` - The user can create the transaction as a standalone transaction or the user can create the transaction by converting the previous transaction in the workflow.
             *     * `convertOnly` - The user can only create the transaction by converting the previous transaction in the workflow. For example, the user can only create a sales invoice by converting an existing sales order.
             * @default null
             * @example convertOnly
             * @enum {string|null}
             */
            documentConversionPolicy?: null | "newDocumentOnly" | "newDocumentOrConvert" | "convertOnly";
            /**
             * @description Sets the context for where users can create transactions from this transaction definition within a multi-entity, shared environment.
             * @default topLevelOrEntity
             * @example topLevelOnly
             * @enum {string}
             */
            multiEntityRuleForTransaction?: "topLevelOrEntity" | "topLevelOnly" | "entityOnly";
            /**
             * @description Set to `true` to enable display of actual billings on printed or emailed invoices.
             * @default false
             * @example false
             */
            enableProjectActualBillings?: boolean;
            /**
             * @description Set to `true` to allow the tax rate to be overridden at the line level when using Simple Tax. This option appears only if `enableSubtotals` is set to `true`.
             * @default false
             * @example false
             */
            lineLevelSimpleTax?: boolean;
            /**
             * @description Allow users to change the customer in Draft or Pending transactions if the transaction has not been converted to another transaction, the transaction date is in an open period, and the transaction's payment status is not `Paid` or `Partially paid`.
             *     This field follows any editing restrictions imposed by the `editPolicy` field and is only applicable if the edit policy is set to `all` or `beforePrinting`.
             *     * `always` - The user can edit the customer in all applicable scenarios.
             *     * `exceptConvertedDocuments` - The user can edit the customer in the first transaction in a workflow but not in transactions created by conversion.
             *     * `never` - The user cannot edit the customer.
             * @default null
             * @example always
             * @enum {string|null}
             */
            customerVendorEditRule?: null | "always" | "exceptConvertedDocuments" | "never";
            /**
             * @description For companies subscribed to Construction, set to 'true' to enable retainage.
             * @default false
             * @example false
             */
            enableRetainage?: boolean;
            /**
             * @description For companies subscribed to Construction, set to 'true' to enable identification of work that is included and excluded, the reason why, and the terms.
             * @default false
             * @example false
             */
            enableAdditionalInformationScope?: boolean;
            /**
             * @description For companies subscribed to Construction, set to 'true' to enable identification of dates for work milestones.
             * @default false
             * @example false
             */
            enableAdditionalInformationSchedule?: boolean;
            /**
             * @description For companies subscribed to Construction, set to 'true' to enable identification of who authorized work internally and when they authorized the work.
             * @default false
             * @example false
             */
            enableInternalReference?: boolean;
            /**
             * @description For companies subscribed to Construction, set to 'true' to enable identification of who authorized work externally and when they authorized the work.
             * @default false
             * @example false
             */
            enableExternalReference?: boolean;
            /**
             * @description For companies subscribed to Construction, set to 'true' to identify information about performance and payment bonds.
             * @default false
             * @example false
             */
            enableBond?: boolean;
            /**
             * @description Indicates whether to enable changes to the transaction definition and, if so, how to handle changes.
             * @default noChange
             * @example enableChange
             * @enum {string}
             */
            documentChangeType?: "noChange" | "enableChange" | "changeOrder";
            /**
             * @description Establishes a reporting category that best reflects the purpose of the transaction definition so that similar documents can be grouped when building reports. This field is applicable for use with Interactive Custom Report Writer or Interactive Visual Explorer subscriptions only.
             * @default null
             * @example salesQuotes
             * @enum {string|null}
             */
            reportingCategory?: null | "salesQuotes" | "salesOrders" | "salesOrderChangeOrders" | "salesOrderInvoices" | "salesReturns" | "salesShippers" | "salesCredits" | "salesDebits" | "salesClearingShippers" | "contractBids" | "contracts" | "contractChangeOrders" | "contractInvoicePreview" | "contractInvoices" | "projectInvoices" | "revRecActivation" | "forecastRevenue" | "pledges" | "giftsAndDonations" | "pledgeAndGiftInvoices" | "grantApplications" | "grantAwardInvoices" | "eventReservations" | "eventConfirmations" | "conferencesAndGatherings" | "eventInvoices" | "membershipRegistrations" | "membershipInvoices" | "invoicePreview" | "invoices" | "tuitionRegistrations" | "tuitionInvoices" | "sponsorships" | "sponsorshipInvoices" | "subscriptions" | "subscriptionInvoices" | "reservations" | "pointOfSale";
            /**
             * @description Set to `true` to display the project contract billing for transactions. This option also displays project contract billing details on Order Entry Contract invoices.
             * @default false
             * @example false
             */
            enableContractBilling?: boolean;
            /**
             * @description Update method for project contract totals.
             * @default null
             * @example addition
             * @enum {string|null}
             */
            arPostingMethod?: null | "none" | "addition";
            /** @description Specify the document numbering sequence to use to automatically number transactions. Omit a numbering sequence if transactions are to be numbered manually or if they will inherit the source document number (`inheritDocumentNumber` is set to `true`). */
            documentSequence?: {
                /**
                 * @description Unique key for the document numbering sequence.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description URL endpoint for the document numbering sequence.
                 * @example /objects/company-config/document-sequence/10
                 */
                readonly href?: string;
                /**
                 * @description ID of the document numbering sequence.
                 * @example Adjustment Decrease
                 */
                id?: string;
            };
            /** @description The first price list the system will evaluate when determining a suggested transaction price. */
            initialPriceList?: {
                /**
                 * @description URL endpoint for the price list.
                 * @example /objects/order-entry/price-list/6
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the price list.
                 * @example 6
                 */
                key?: string;
                /**
                 * @description ID for the price list.
                 * @example Initial Price List
                 */
                id?: string;
            };
            /** @description The price list that will be updated when a user saves a transaction. */
            updatePriceList?: {
                /**
                 * @description URL endpoint for the price list.
                 * @example /objects/order-entry/price-list/35
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the price list.
                 * @example 35
                 */
                key?: string;
                /**
                 * @description The name of the price list.
                 * @example OE Price List
                 */
                id?: string;
            };
            /** @description If using layered price lists, this indicates a special price list (for example, a discounted price list or seasonal price list). The special price list takes precedence over the initial price list. */
            specialPriceList?: {
                /**
                 * @description URL endpoint for the price list.
                 * @example /objects/order-entry/price-list/15
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the price list.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description ID for the price list.
                 * @example Special price list
                 */
                id?: string;
            };
            /** @description Specify the default warehouse. Applies only if the `warehouseSelectionMethod` is set to `useTheDefaultWarehouse`. */
            warehouse?: {
                /**
                 * @description Unique key for the warehouse.
                 * @example 21
                 */
                key?: string;
                /**
                 * @description URL endpoint for the warehouse.
                 * @example /objects/inventory-control/warehouse/21
                 */
                readonly href?: string;
                /**
                 * @description Unique name or other ID for the warehouse.
                 * @example Warehouse-001
                 */
                id?: string;
            };
            /** @description The default for how goods in the transaction are shipped to the customer. If a shipping method is specified for a customer, the customer shipping method takes precedence as the default in the transaction. */
            shippingMethod?: {
                /**
                 * @description URL endpoint for the shipping method.
                 * @example /objects/accounts-receivable/shipping-method/11
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the shipping method.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description Name of the shipping method.
                 * @example FedEx
                 */
                id?: string;
            };
            /** @description Specifies the template for populating the transaction subtotals table. */
            subtotalTemplate?: {
                /**
                 * @description URL endpoint for subtotal template.
                 * @example /objects/order-entry/subtotal-template/22
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the subtotal template.
                 * @example 22
                 */
                key?: string;
                /**
                 * @description Name of the subtotal template.
                 * @example Subtotal template
                 */
                id?: string;
            };
            /** @description Accounts Receivable (AR) term, which determines the expiration date for quotes and the due date for invoices. */
            arTerm?: {
                /**
                 * @description URL endpoint for the AR term.
                 * @example /objects/accounts-receivable/term/41
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the AR term.
                 * @example 41
                 */
                key?: string;
                /**
                 * @description The name of AR term.
                 * @example 10 Days
                 */
                id?: string;
            };
            /** @description Specify a custom exchange rate type if transactions should not default to the Sage Intacct Daily Rate. */
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
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"];
            /** @description Specify the COGS GL accounts to debit and credit. For companies that do not use Inventory Control, these accounts are required when the `enableCosting` field is set to `true`. */
            cogsGLDetail?: components["schemas"]["objects.order-entry.txn-definition-cogs-gl-detail"][];
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `cogsGLDetail` field instead.
             */
            COGSGLDetail?: components["schemas"]["objects.order-entry.txn-definition-cogs-gl-detail"][];
            /** @description When the `txnPostingMethod` field is set to `toAR` or `toGL`, specify the AR or GL accounts to debit and credit. */
            accountReceivableOrDirectGLDetail?: components["schemas"]["objects.order-entry.txn-definition-ar-direct-gl-detail"][];
            /** @description When the `txnPostingMethod` field is set to `toAR` and the `postToGL` field is set to `true`, specify the GL account details for additional GL account posting. These accounts are used to reverse the previous transaction in the workflow. */
            additionalGLDetail?: components["schemas"]["objects.order-entry.txn-definition-additional-gl-detail"][];
            /** @description Specifies the inventory running total that will be affected by the transaction and how the total will be affected. */
            inventoryTotalDetail?: components["schemas"]["objects.order-entry.txn-definition-inventory-total-detail"][];
            /** @description Provides details about the type of subtotals that are supported for the transaction. */
            subtotalDetail?: components["schemas"]["objects.order-entry.txn-definition-subtotal-detail"][];
            /** @description Provides document conversion details for the transaction. */
            sourceDocumentDetail?: components["schemas"]["objects.order-entry.txn-definition-source-document-detail"][];
            /** @description Provides details about the entities that can create transactions, and also includes settings for each entity, such as numbering sequences and document templates. */
            entitySettingDetail?: components["schemas"]["objects.order-entry.txn-definition-entity-setting-detail"][];
        };
        "order-entry-txn-definitionRequiredProperties": Record<string, never>;
        /** @description Additional GL entry account mapping for an Order Entry transaction definition. */
        "objects.order-entry.txn-definition-additional-gl-detail": {
            /**
             * @description System-assigned unique key for the additional GL detail object.
             * @example 25
             */
            readonly key?: string;
            /**
             * @description Unique ID for the additional GL detail object. This value is the same as the key for this object.
             * @example 25
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the additional GL detail object.
             * @example /objects/order-entry/txn-definition-additional-gl-detail/25
             */
            readonly href?: string;
            /**
             * @description Set to `true` if the GL account specified in the `glAccount` field is an offset account. Each `itemGLGroup` and `warehouse` set must have one offset account.
             * @default false
             * @example true
             */
            isOffset?: boolean;
            /**
             * @description Specify whether to debit or credit the account.
             * @example debit
             * @enum {string}
             */
            txnType?: "debit" | "credit";
            /**
             * @description Module type.
             * @example additional
             * @enum {string}
             */
            readonly moduleType?: "additional";
            /**
             * @description Line number of the transaction.
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
                 * @example Arizona
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
            /** @description The `itemGLgroup` and `warehouse` together form the criteria set for the account mapping. */
            itemGLGroup?: {
                /**
                 * @description URL endpoint for the item GL group.
                 * @example /objects/inventory-control/item-gl-group/13
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
                 * @example Warehouse-001
                 */
                id?: string;
            };
            /** @description Customer GL groups are categories of customers grouped together so that transactions can be posted to specific GL accounts. */
            customerGLGroup?: {
                /**
                 * @description Customer GL group name.
                 * @example Group 1
                 */
                id?: string;
            };
            status?: components["schemas"]["status"];
            /** @description Header level details for the owning transaction definition object. */
            "order-entry-txn-definition"?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique ID for the transaction definition.
                 * @example Sales Quote
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/order-entry/txn-definition/23
                 */
                readonly href?: string;
            };
        };
        /** @description Accounts Receivable or direct GL account mapping for an Order Entry transaction definition. The item GL group, warehouse, and customer GL group together form the criteria set for the account mapping. */
        "objects.order-entry.txn-definition-ar-direct-gl-detail": {
            /**
             * @description System-assigned unique key for the Accounts Receivable or direct GL account detail object.
             * @example 29
             */
            readonly key?: string;
            /**
             * @description Unique ID for the Accounts Receivable or direct GL account detail object. This value is the same as the key for this object.
             * @example 29
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the Accounts Receivable or direct GL account detail object.
             * @example /objects/order-entry/txn-definition-ar-direct-gl-detail/29
             */
            readonly href?: string;
            /**
             * @description Set to `true` if the GL account specified in the `glAccount` field is an offset account. Each `itemGLGroup`, `warehouse`, and `customerGLGroup` criteria set must have one offset account.
             * @default false
             * @example true
             */
            isOffset?: boolean;
            /**
             * @description Specify whether to debit or credit the account.
             * @example debit
             * @enum {string}
             */
            txnType?: "debit" | "credit";
            /**
             * @description Module type.
             * @example subledger
             * @enum {string}
             */
            moduleType?: "subledger" | "inventory" | "additional";
            /**
             * @description Line number of the transaction.
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
                 * @example Arizona
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
            /** @description The `itemGLgroup`, `warehouse`, and `customerGLGroup` together form the criteria set for the account mapping. */
            itemGLGroup?: {
                /**
                 * @description URL endpoint for the item GL group.
                 * @example /objects/inventory-control/item-gl-group/13
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
            /** @description The `itemGLgroup`, `warehouse`, and `customerGLGroup` together form the criteria set for the account mapping. */
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
                 * @example Warehouse-001
                 */
                id?: string;
            };
            /** @description The `itemGLgroup`, `warehouse`, and `customerGLGroup` together form the criteria set for the account mapping. */
            customerGLGroup?: {
                /**
                 * @description Customer GL group name.
                 * @example Group 1
                 */
                id?: string;
            };
            status?: components["schemas"]["status"];
            /** @description Header level details for the owning transaction definition object. */
            readonly "order-entry-txn-definition"?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for for the transaction definition.
                 * @example Sales Quote
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/order-entry/txn-definition/23
                 */
                readonly href?: string;
            };
        };
        /** @description GL account mappings for Cost of Goods Sold (COGS) for Order Entry transaction definitions. The item GL group, warehouse, and customer GL group together form the criteria set for the account mapping. */
        "objects.order-entry.txn-definition-cogs-gl-detail": {
            /**
             * @description System-assigned unique key for the COGS GL account detail object.
             * @example 14
             */
            readonly key?: string;
            /**
             * @description Unique ID for the COGS GL account detail object. This value is the same as the key for this object.
             * @example 14
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the COGS GL account detail object.
             * @example /objects/order-entry/txn-definition-cogs-gl-detail/14
             */
            readonly href?: string;
            /**
             * @description Set to `true` if the GL account specified in the `glAccount` field is an offset account. Each `itemGLGroup`, `warehouse`, and `customerGLGroup` criteria set must have one offset account.
             * @default false
             * @example true
             */
            isOffset?: boolean;
            /**
             * @description Specify whether to debit or credit the account.
             * @example debit
             * @enum {string}
             */
            txnType?: "debit" | "credit";
            /**
             * @description Module type.
             * @example subledger
             * @enum {string}
             */
            moduleType?: "subledger" | "inventory" | "additional";
            /**
             * @description Line number of the transaction.
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
                 * @example Arizona
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
            /** @description The `itemGLgroup`, `warehouse`, and `customerGLGroup` together form the criteria set for the account mapping. */
            itemGLGroup?: {
                /**
                 * @description URL endpoint for the item GL group.
                 * @example /objects/inventory-control/item-gl-group/13
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
            /** @description The `itemGLgroup`, `warehouse`, and `customerGLGroup` together form the criteria set for the account mapping. */
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
                 * @example Warehouse-001
                 */
                id?: string;
            };
            /** @description The `itemGLgroup`, `warehouse`, and `customerGLGroup` together form the criteria set for the account mapping. */
            customerGLGroup?: {
                /**
                 * @description Customer GL group name.
                 * @example Group 1
                 */
                id?: string;
            };
            status?: components["schemas"]["status"];
            /** @description Header level details for the owning transaction definition object. */
            readonly "order-entry-txn-definition"?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 41
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for for the transaction definition.
                 * @example Sales Quote
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the order entry transaction definition.
                 * @example /objects/order-entry/txn-definition/41
                 */
                readonly href?: string;
            };
        };
        /** @description Entity settings for Order Entry transaction definitions. */
        "objects.order-entry.txn-definition-entity-setting-detail": {
            /**
             * @description System-assigned unique key for the entity setting detail object.
             * @example 52
             */
            readonly key?: string;
            /**
             * @description System-assigned unique ID for the entity setting detail object. This value is the same as the key for this object.
             * @example 52
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the entity setting detail object.
             * @example /objects/order-entry/txn-definition-entity-setting-detail/52
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
            /** @description Specify a printed document template to use as the default for printed output (PDFs) for the corresponding entity. If you do not specify a value for this field, the Order Entry transaction definition document template is used. */
            documentTemplate?: {
                /**
                 * @description Unique key for the document template.
                 * @example 65
                 */
                key?: string;
                /**
                 * @description The name or other ID for the document template.
                 * @example Sales Order
                 */
                id?: string;
            };
            /**
             * @description The value for this field is set by Sage Intacct and is derived from the value specified for the `multiEntityRuleForTransaction` field in the owning transaction definition.
             * @default false
             * @example false
             */
            enableCreateTransactionRule?: boolean;
            /** @description If `enableSubtotals` is set to `true`in the owning transaction definition, you can specify the subtotal template to use to calculate subtotals. */
            subtotalTemplate?: {
                /**
                 * @description URL endpoint for the subtotal template.
                 * @example /objects/order-entry/subtotal-template/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the subtotal template.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Name or other ID for the subtotal template.
                 * @example Subtotal template
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
             * @description Indicates whether users can override whether a line item is taxable.
             * @default false
             * @example false
             */
            enableOverrideTax?: boolean;
            /**
             * @description Set to `true` to allow the tax rate to be overridden at the line level when using Simple Tax.
             * @default false
             * @example false
             */
            enableLineLevelSimpleTax?: boolean;
            entity?: {
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/41
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the entity.
                 * @example 41
                 */
                key?: string;
                /**
                 * @description Unique ID for the entity. The ID cannot be changed after the entity has been created and the maximum number of characters for the ID is 20.
                 * @example Lyon
                 */
                id?: string;
            };
            /** @description Specify the document numbering sequence to use to automatically number transactions for the corresponding entity. Omit a numbering sequence here if you want to use the numbering sequence defined for the owning transaction definition, or if you want converted transactions to inherit the source document number. */
            documentSequence?: {
                /**
                 * @description Unique key for the document numbering sequence.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description URL endpoint for the document numbering sequence.
                 * @example /objects/company-config/document-sequence/10
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
            "order-entry-txn-definition"?: {
                /**
                 * @description System-assigned key for the order-entry-txn-definition.
                 * @example 55
                 */
                key?: string;
                /**
                 * @description System-assigned ID for the order-entry-txn-definition.
                 * @example Sales Quote
                 */
                id?: string;
                /**
                 * @description URL for the order entry transaction definition.
                 * @example /objects/order-entry/txn-definition/55
                 */
                readonly href?: string;
            };
        };
        "order-entry-txn-definition-entity-setting-detailRequiredProperties": unknown;
        /** @description Provides details about the inventory running total that will be affected by the transaction and how the total will be affected. */
        "objects.order-entry.txn-definition-inventory-total-detail": {
            /**
             * @description System-assigned unique key for the inventory total detail object.
             * @example 29
             */
            readonly key?: string;
            /**
             * @description ID for the inventory total detail object. This value is the same as the key for this object.
             * @example 29
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the inventory total detail object.
             * @example /objects/order-entry/txn-definition-inventory-total-detail/29
             */
            readonly href?: string;
            /**
             * @description Specify whether to track the quantity, value, or both quantity and value, for the inventory running total that will be affected by the transaction.
             * @example value
             * @enum {string}
             */
            maintainType?: "quantity" | "value" | "quantityAndValue";
            /**
             * @description Specify whether the inventory running total will increase or decrease when the user saves the transaction.
             * @example add
             * @enum {string}
             */
            operation?: "add" | "subtract";
            /** @description Specify the inventory running total that will be affected by the transaction. */
            inventoryTotal?: {
                /**
                 * @description ID for the inventory total.
                 * @example ONHAND
                 */
                id?: string;
            };
            /** @description Header level details for the owning transaction definition object. */
            "order-entry-txn-definition"?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description Unique ID for the transaction definition.
                 * @example Sales Quote
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/order-entry/txn-definition/11
                 */
                readonly href?: string;
            };
        };
        "order-entry-txn-definition-inventory-total-detailRequiredProperties": unknown;
        /** @description Specifies the transaction definition from which the transaction can be converted. */
        "objects.order-entry.txn-definition-source-document-detail": {
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
             * @example /objects/order-entry/txn-definition-source-document-detail/18
             */
            readonly href?: string;
            /**
             * @description Specify the transaction definition from which this transaction can be converted.
             *     For example, a sales invoice can be converted from a sales order.
             */
            sourceDocument?: {
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/order-entry/txn-definition/44
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the transaction definition.
                 * @example 44
                 */
                key?: string;
                /**
                 * @description Name or other unique ID for the transaction definition.
                 * @example Sales order
                 */
                id?: string;
            };
            /**
             * @description Specify whether the `sourceDocument` is the default for bulk conversion.
             * @default false
             * @example true
             */
            isDefault?: boolean;
            /** @description Header level details for the owning transaction definition object. */
            readonly "order-entry-txn-definition"?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 11
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the transaction definition.
                 * @example Sales Quote
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/order-entry/txn-definition/11
                 */
                readonly href?: string;
            };
        };
        "order-entry-txn-definition-source-document-detailRequiredProperties": unknown;
        /** @description Provides details about the type of subtotals that are supported for the transaction. */
        "objects.order-entry.txn-definition-subtotal-detail": {
            /**
             * @description System-assigned unique key for the subtotal detail object.
             * @example 41
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the subtotal detail object. This value is the same as the key for this object.
             * @example 41
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the subtotal detail object.
             * @example /objects/order-entry/txn-definition-subtotal-detail/41
             */
            readonly href?: string;
            /**
             * @description Specify the subtotal type.
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
             * @description Specify the value type for the subtotal.
             * @default null
             * @example amount
             * @enum {string|null}
             */
            valueType?: null | "amount" | "percent";
            /**
             * Format: decimal-precision-2
             * @description Provide a default value for the subtotal. If `valueType` is `amount`, provide the amount of the subtotal. For example, enter 250. If `valueType` is `percent`, specify a percentage as a whole number. For example, specify 10 for 10%. Users can override the default subtotal value in the transaction.
             * @example 10
             */
            subtotalValue?: string;
            /**
             * @description Set to `true` to distribute the discount subtotal proportionally across all line items in the transaction. Set this field to `true` if you are enabling MEA allocations in Order Entry. Leave this field `false` if you are enabling MEA allocations in Contracts.
             * @default false
             * @example true
             */
            isApportioned?: boolean;
            /** @description Specify the GL account to which the subtotal will post. */
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
            /** @description Specify the offset GL account to which the subtotal will post. */
            offsetGLAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 16
                 */
                key?: string;
                /**
                 * @description Unique ID for the account.
                 * @example 1501.04
                 */
                id?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/16
                 */
                readonly href?: string;
            };
            /**
             * @description Specify whether to debit or credit the account.
             * @default null
             * @example debit
             * @enum {string|null}
             */
            txnType?: null | "debit" | "credit";
            /**
             * @description Specify the subtotal line number to which the subtotal will apply. Sage Intacct treats the initial subtotal line as line number 0. The first defined subtotal from the transaction definition is line number 1, the second defined subtotal is line number 2, and so on.
             *
             *     The value of `appliedToLineNumber` is implicitly assumed to be 0. Taxes, all other charges, and discounts are computed at the line level. This fields does not apply if `lineLevelSimpleTax` is set to `true` in the owning transaction definition.
             * @example 1
             */
            appliedToLineNumber?: number;
            /**
             * @description Flags the subtotal as a tax. When the transaction posts, the tax will post separately based on the items in the transaction. Set this field to `true` for tax subtotal lines if your organization uses Simple Tax, Advanced Tax, or Avalara AvaTax.
             * @default false
             * @example true
             */
            isTax?: boolean;
            /** @description Specify a default department for the subtotal. */
            department?: {
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/19
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the department.
                 * @example 19
                 */
                key?: string;
                /**
                 * @description Name or other unique ID for the department.
                 * @example Sales
                 */
                id?: string;
            };
            /** @description Specify a default location for the subtotal. */
            readonly location?: {
                /**
                 * @description System-assigned unique key for the location.
                 * @example 22
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the location.
                 * @example Arizona
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/22
                 */
                readonly href?: string;
            };
            /**
             * @description Set to `true` if the subtotal line item applies to AvaTax. This field applies only if your company uses Avalara AvaTax integration.
             * @default false
             * @example true
             */
            enableAvalaraTax?: boolean;
            /** @description Sets the context where the transaction is created. */
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
            "order-entry-txn-definition"?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 29
                 */
                key?: string;
                /**
                 * @description Unique ID for the transaction definition.
                 * @example Sales Quote
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/order-entry/txn-definition/29
                 */
                readonly href?: string;
            };
        };
        "order-entry-txn-definition-subtotal-detailRequiredProperties": unknown;
        /**
         * @description This object is used if you are subscribed to Order Entry and Purchasing modules and buy to order is enabled. With buy to order enabled, Sage Intacct allows the system to automatically create purchasing transactions for sales transaction line items that are selected for buy to order.
         *     The buy to order items are shipped to you or a third party for final finishing and shipping.
         */
        "objects.order-entry.txn-buy-to-order-preference": {
            /**
             * @description System-assigned unique key for the buy to order preference.
             * @example 33
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the buy to order preference. This value is the same as the key for this object.
             * @example 33
             */
            readonly id?: string;
            /**
             * @description Order Entry module name.
             * @default orderEntry
             * @example orderEntry
             * @enum {string}
             */
            readonly moduleName?: "orderEntry";
            /** @description Reference to the sales transaction definition associated with the buy to order preference. */
            salesTxnDefinition?: {
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
                 * @example Sales Invoice
                 */
                name?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/order-entry/txn-definition::Sales%20Invoice/11
                 */
                readonly href?: string;
            };
            /** @description Reference to the purchasing transaction definition associated with the buy to order preference. */
            purchasingTxnDefinition?: {
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
                 * @example Purchase Invoice
                 */
                name?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition::Purchase%20Invoice/12
                 */
                readonly href?: string;
            };
            /**
             * @description Status of the buy to order preference.
             * @default active
             * @example active
             * @enum {string}
             */
            status?: "active" | "inactive";
            entity?: components["schemas"]["entity-ref"];
            /**
             * @description URL endpoint for the buy to order preference.
             * @example /objects/order-entry/txn-buy-to-order-preference/33
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description Drop ship is a workflow that lets you ship orders directly from a vendor to your customer, potentially saving you inventory costs. With drop ship enabled, Sage Intacct allows the system to automatically create purchasing transactions for sales transaction line items that are selected for drop ship. */
        "objects.order-entry.txn-drop-ship-preference": {
            /**
             * @description System-assigned unique key for the drop ship preference.
             * @example 13
             */
            readonly key?: string;
            /**
             * @description Unique ID for the drop ship preference. This value is the same as the key for this object.
             * @example 13
             */
            readonly id?: string;
            /**
             * @description Order Entry module name.
             * @default orderEntry
             * @example orderEntry
             * @enum {string}
             */
            readonly moduleName?: "orderEntry";
            /** @description Reference to the sales transaction definition associated with the drop ship preference. */
            salesTxnDefinition?: {
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
                 * @example /objects/order-entry/txn-definition::Sales%20Invoice/11
                 */
                readonly href?: string;
            };
            /** @description Reference to the purchasing transaction definition associated with the drop ship preference. */
            purchasingTxnDefinition?: {
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
                 * @example Purchase Invoice
                 */
                name?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition::Purchase%20Invoice/12
                 */
                readonly href?: string;
            };
            /**
             * @description Status of the drop ship preference.
             * @default active
             * @example active
             * @enum {string}
             */
            status?: "active" | "inactive";
            entity?: components["schemas"]["entity-ref"];
            /**
             * @description URL endpoint for the drop ship preference.
             * @example /objects/order-entry/txn-drop-ship-preference/13
             */
            readonly href?: string;
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
    "list-order-entry-document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-order-entry-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the order entry document.
                 * @example 446
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.order-entry.document"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-order-entry-named-document": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Document name */
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
    "create-order-entry-named-document": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Document name */
                documentName: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.document"] & components["schemas"]["order-entry-documentRequiredProperties"];
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
    "get-order-entry-named-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document name
                 * @example Sales Invoice
                 */
                documentName: string;
                /**
                 * @description System-assigned key for the document.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.document"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-named-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document name
                 * @example Sales Invoice
                 */
                documentName: string;
                /**
                 * @description System-assigned key for the document.
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
    "update-order-entry-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document name
                 * @example Sales Invoice
                 */
                documentName: string;
                /**
                 * @description System-assigned key for the document.
                 * @example 41
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.document"] & {
                    readonly id?: unknown;
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
    "generate-pdf-order-entry-document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["order-entry-document-actions-generate-pdf-request"];
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
                        "ia::result"?: components["schemas"]["order-entry-document-actions-generate-pdf-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-order-entry-document-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-order-entry-document-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the Order Entry document line.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.document-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-order-entry-named-document-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document name
                 * @example Sales Invoice
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
    "create-order-entry-named-document-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document name
                 * @example Sales Invoice
                 */
                documentName: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.document-line"] & components["schemas"]["order-entry-document-lineRequiredProperties"];
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
    "get-order-entry-named-document-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document name
                 * @example Sales Invoice
                 */
                documentName: string;
                /**
                 * @description System-assigned key for the Order Entry document line.
                 * @example 63
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.order-entry.document-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-named-document-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document name
                 * @example Sales Invoice
                 */
                documentName: string;
                /**
                 * @description System-assigned key for the Order Entry document line.
                 * @example 63
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
    "update-order-entry-named-document-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document name
                 * @example Sales Invoice
                 */
                documentName: string;
                /**
                 * @description System-assigned key for the Order Entry document line.
                 * @example 63
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.document-line"] & Record<string, never>;
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
    "list-order-entry-document-line-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-order-entry-document-line-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document line detail object.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.document-line-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-order-entry-document-line-subtotal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-order-entry-document-line-subtotal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document line subtotal.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.document-line-subtotal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-order-entry-document-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-order-entry-document-history-key": {
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
                        "ia::result"?: components["schemas"]["objects.order-entry.document-history"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-order-entry-document-subtotal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-order-entry-document-subtotal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document subtotal.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.document-subtotal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-order-entry-document-configuration-preference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-order-entry-document-configuration-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document configuration preference.
                 * @example 530
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.order-entry.document-configuration-preference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-order-entry-document-configuration-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document configuration preference.
                 * @example 530
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.document-configuration-preference"] & Record<string, never>;
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
    "list-order-entry-price-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-order-entry-price-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.price-list"] & components["schemas"]["order-entry-price-listRequiredProperties"];
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
    "get-order-entry-price-list-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the order entry price list.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.price-list"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-price-list-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the order entry price list.
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
    "update-order-entry-price-list-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the order entry price list.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.price-list"] & {
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
    "list-order-entry-price-list-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-order-entry-price-list-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.price-list-entry"] & components["schemas"]["order-entry-price-list-entryRequiredProperties"];
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
    "get-order-entry-price-list-entry-key": {
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
                        "ia::result"?: components["schemas"]["objects.order-entry.price-list-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-price-list-entry-key": {
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
    "update-order-entry-price-list-entry-key": {
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
                "application/json": components["schemas"]["objects.order-entry.price-list-entry"] & {
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
    "list-order-entry-price-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-order-entry-price-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.price-schedule"] & components["schemas"]["order-entry-price-scheduleRequiredProperties"];
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
    "get-order-entry-price-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the price schedule.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.price-schedule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-price-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the price schedule.
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
    "update-order-entry-price-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the price schedule.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.price-schedule"] & {
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
    "list-order-entry-renewal-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-order-entry-renewal-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.renewal-template"] & components["schemas"]["order-entry-renewal-templateRequiredProperties"];
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
    "get-order-entry-renewal-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the renewal template.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.renewal-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-renewal-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the renewal template.
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
    "update-order-entry-renewal-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the renewal template.
                 * @example 30
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.renewal-template"] & {
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
    "list-order-entry-subtotal-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-order-entry-subtotal-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.subtotal-template"] & components["schemas"]["order-entry-subtotal-templateRequiredProperties"];
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
    "get-order-entry-subtotal-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the subtotal template.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.subtotal-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-subtotal-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the subtotal template.
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
    "update-order-entry-subtotal-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the subtotal template.
                 * @example 3
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.subtotal-template"] & {
                    /** @example SalesInvoiceCharges */
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
    "list-order-entry-subtotal-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-order-entry-subtotal-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.subtotal-template-line"] & components["schemas"]["order-entry-subtotal-template-lineRequiredProperties"];
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
    "get-objects-order-entry-subtotal-template-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the subtotal template line.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.subtotal-template-line"];
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
    "delete-order-entry-subtotal-template-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the subtotal template line.
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
    "update-order-entry-subtotal-template-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the subtotal template line.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.subtotal-template-line"] & Record<string, never>;
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
    "list-order-entry-customer-gl-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-order-entry-customer-gl-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.customer-gl-group"] & components["schemas"]["customer-gl-groupRequiredProperties"];
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
    "get-order-entry-customer-gl-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer GL group.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.customer-gl-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-customer-gl-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer GL group.
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
    "update-order-entry-customer-gl-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the customer GL group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.customer-gl-group"] & {
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
    "list-order-entry-recurring-document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-order-entry-recurring-document-key": {
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
                        "ia::result"?: components["schemas"]["objects.order-entry.recurring-document"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-order-entry-named-recurring-document": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Sales Invoice
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
    "create-order-entry-named-recurring-document": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Sales Invoice
                 */
                documentName: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.recurring-document"] & components["schemas"]["order-entry-recurring-documentRequiredProperties"];
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
    "get-order-entry-named-recurring-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Sales Invoice
                 */
                documentName: string;
                /**
                 * @description System-assigned key for the order entry recurring document.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.recurring-document"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-recurring-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Sales Invoice
                 */
                documentName: string;
                /**
                 * @description System-assigned key for the order entry recurring document.
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
    "update-order-entry-recurring-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description Document Name
                 * @example Sales Invoice
                 */
                documentName: string;
                /**
                 * @description System-assigned key for the order entry recurring document.
                 * @example 41
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.recurring-document"] & {
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
    "list-order-entry-recurring-document-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-order-entry-recurring-document-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.recurring-document-line"] & components["schemas"]["order-entry-recurring-document-lineRequiredProperties"];
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
    "get-order-entry-recurring-document-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring document line.
                 * @example 807
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.order-entry.recurring-document-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-recurring-document-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring document line.
                 * @example 807
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
    "list-order-entry-recurring-document-subtotal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-order-entry-recurring-document-subtotal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring document subtotal.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.recurring-document-subtotal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-order-entry-recurring-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-order-entry-recurring-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.recurring-schedule"] & components["schemas"]["order-entry-recurring-scheduleRequiredProperties"];
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
    "get-order-entry-recurring-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring schedule.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.recurring-schedule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-recurring-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring schedule.
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
    "update-order-entry-recurring-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the recurring schedule.
                 * @example 17
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.recurring-schedule"] & {
                    /** @example 17 */
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
    "list-order-entry-txn-definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-order-entry-txn-definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.txn-definition"] & components["schemas"]["order-entry-txn-definitionRequiredProperties"];
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
    "get-order-entry-txn-definition-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition.
                 * @example 37
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.order-entry.txn-definition"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-txn-definition-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition.
                 * @example 37
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
    "update-order-entry-txn-definition-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition.
                 * @example 37
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.txn-definition"] & {
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
    "list-order-entry-txn-definition-additional-gl-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-order-entry-txn-definition-additional-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition additional GL detail object.
                 * @example 196
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.order-entry.txn-definition-additional-gl-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-txn-definition-additional-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition additional GL detail object.
                 * @example 196
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
    "update-order-entry-txn-definition-additional-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition additional GL detail object.
                 * @example 196
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.txn-definition-additional-gl-detail"] & {
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
    "list-order-entry-txn-definition-ar-direct-gl-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-order-entry-txn-definition-ar-direct-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Accounts Receivable or direct GL account detail object.
                 * @example 164
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.order-entry.txn-definition-ar-direct-gl-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-txn-definition-ar-direct-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Accounts Receivable or direct GL account detail object.
                 * @example 164
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
    "update-order-entry-txn-definition-ar-direct-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the Accounts Receivable or direct GL account detail object.
                 * @example 164
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.txn-definition-ar-direct-gl-detail"] & {
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
    "list-order-entry-txn-definition-cogs-gl-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-order-entry-txn-definition-cogs-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition COGS detail object.
                 * @example 160
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.order-entry.txn-definition-cogs-gl-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-txn-definition-cogs-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition COGS detail object.
                 * @example 160
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
    "update-order-entry-txn-definition-cogs-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition COGS detail object.
                 * @example 160
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.txn-definition-cogs-gl-detail"] & {
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
    "list-order-entry-txn-definition-entity-setting-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-order-entry-txn-definition-entity-setting-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.txn-definition-entity-setting-detail"] & components["schemas"]["order-entry-txn-definition-entity-setting-detailRequiredProperties"];
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
    "get-order-entry-txn-definition-entity-setting-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition entity detail object.
                 * @example 170
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.order-entry.txn-definition-entity-setting-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-txn-definition-entity-setting-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition entity detail object.
                 * @example 170
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
    "update-order-entry-txn-definition-entity-setting-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition entity detail object.
                 * @example 170
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.txn-definition-entity-setting-detail"] & {
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
    "list-order-entry-txn-definition-inventory-total-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-order-entry-txn-definition-inventory-total-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.txn-definition-inventory-total-detail"] & components["schemas"]["order-entry-txn-definition-inventory-total-detailRequiredProperties"];
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
    "get-order-entry-txn-definition-inventory-total-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition inventory total detail object.
                 * @example 96
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.order-entry.txn-definition-inventory-total-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-txn-definition-inventory-total-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition inventory total detail object.
                 * @example 96
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
    "update-order-entry-txn-definition-inventory-total-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition inventory total detail object.
                 * @example 96
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.txn-definition-inventory-total-detail"] & {
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
    "list-order-entry-txn-definition-source-document-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-order-entry-txn-definition-source-document-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.txn-definition-source-document-detail"] & components["schemas"]["order-entry-txn-definition-source-document-detailRequiredProperties"];
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
    "get-order-entry-txn-definition-source-document-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition source document detail object.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.txn-definition-source-document-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-txn-definition-source-document-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition source document detail object.
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
    "update-order-entry-txn-definition-source-document-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition source document detail object.
                 * @example 70
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.txn-definition-source-document-detail"] & {
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
    "list-order-entry-txn-definition-subtotal-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-order-entry-txn-definition-subtotal-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.txn-definition-subtotal-detail"] & components["schemas"]["order-entry-txn-definition-subtotal-detailRequiredProperties"];
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
    "get-order-entry-txn-definition-subtotal-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition subtotal detail object.
                 * @example 113
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.order-entry.txn-definition-subtotal-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-txn-definition-subtotal-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition subtotal detail object.
                 * @example 113
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
    "update-order-entry-txn-definition-subtotal-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition subtotal detail object.
                 * @example 113
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.txn-definition-subtotal-detail"] & {
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
    "list-order-entry-txn-buy-to-order-preference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-order-entry-txn-buy-to-order-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction buy to order preference.
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
                        "ia::result"?: components["schemas"]["objects.order-entry.txn-buy-to-order-preference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-txn-buy-to-order-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction buy to order preference.
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
    "update-order-entry-txn-buy-to-order-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction buy to order preference.
                 * @example 5
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.txn-buy-to-order-preference"] & Record<string, never>;
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
    "list-order-entry-txn-drop-ship-preference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-order-entry-txn-drop-ship-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction drop ship preference.
                 * @example 8
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.order-entry.txn-drop-ship-preference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-order-entry-txn-drop-ship-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction drop ship preference.
                 * @example 8
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
    "update-order-entry-txn-drop-ship-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction drop ship preference.
                 * @example 8
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.order-entry.txn-drop-ship-preference"] & Record<string, never>;
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
}

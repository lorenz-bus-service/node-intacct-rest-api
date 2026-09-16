// Generated from spec/inventory-control.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/inventory-control/aisle": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List aisles
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each aisle. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-aisle"];
        put?: never;
        /**
         * Create an aisle
         * @description Creates a new aisle.
         */
        post: operations["create-inventory-control-aisle"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/aisle/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the aisle.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an aisle
         * @description Returns detailed information for a specified aisle.
         */
        get: operations["get-inventory-control-aisle-key"];
        put?: never;
        post?: never;
        /**
         * Delete an aisle
         * @description Deletes an aisle. You can delete an aisle if it is not being used and you no longer need it. Deleted aisles cannot be recovered.
         */
        delete: operations["delete-inventory-control-aisle-key"];
        options?: never;
        head?: never;
        /**
         * Update an aisle
         * @description Updates an existing aisle by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-aisle-key"];
        trace?: never;
    };
    "/objects/inventory-control/bin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bins
         * @description Returns up to 100 objects from the collection with a key, ID, and link for each bin. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-bin"];
        put?: never;
        /**
         * Create a bin
         * @description Creates a new bin.
         */
        post: operations["create-inventory-control-bin"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/bin/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bin.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bin
         * @description Returns detailed information for a specified bin.
         */
        get: operations["get-inventory-control-bin-key"];
        put?: never;
        post?: never;
        /**
         * Delete a bin
         * @description Deletes a bin. You can delete a bin if it is not being used and you no longer need it.
         */
        delete: operations["delete-inventory-control-bin-key"];
        options?: never;
        head?: never;
        /**
         * Update a bin
         * @description Updates an existing bin by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-bin-key"];
        trace?: never;
    };
    "/objects/inventory-control/bin-face": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bin faces
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each bin face. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-bin-face"];
        put?: never;
        /**
         * Create a bin face
         * @description Creates a new bin face.
         */
        post: operations["create-inventory-control-bin-face"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/bin-face/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bin-face.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bin face
         * @description Returns detailed information for a specified bin face.
         */
        get: operations["get-inventory-control-bin-face-key"];
        put?: never;
        post?: never;
        /**
         * Delete a bin face
         * @description Deletes a bin face.
         */
        delete: operations["delete-inventory-control-bin-face-key"];
        options?: never;
        head?: never;
        /**
         * Update a bin face
         * @description Updates an existing bin face by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-bin-face-key"];
        trace?: never;
    };
    "/objects/inventory-control/bin-size": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all bin sizes
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each bin size. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-bin-size"];
        put?: never;
        /**
         * Create a bin size
         * @description Creates a new bin size.
         */
        post: operations["create-inventory-control-bin-size"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/bin-size/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bin size.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bin size
         * @description Returns detailed information for a specified bin size.
         */
        get: operations["get-inventory-control-bin-size-key"];
        put?: never;
        post?: never;
        /**
         * Delete a bin size
         * @description Deletes a bin size. You can delete a bin size if it is not being used and you no longer need it.
         */
        delete: operations["delete-inventory-control-bin-size-key"];
        options?: never;
        head?: never;
        /**
         * Update a bin size
         * @description Updates an existing bin size by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-bin-size-key"];
        trace?: never;
    };
    "/objects/inventory-control/cycle": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory cycles
         * @description Returns a collection with a key, ID, and link for each inventory cycle.
         */
        get: operations["list-inventory-control-cycle"];
        put?: never;
        /**
         * Create an inventory cycle
         * @description Creates a new inventory cycle.
         */
        post: operations["create-inventory-control-cycle"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/cycle/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory cycle.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inventory cycle
         * @description Returns detailed information for a specified inventory cycle.
         */
        get: operations["get-inventory-control-cycle-key"];
        put?: never;
        post?: never;
        /**
         * Delete an inventory cycle
         * @description Deletes an inventory cycle.
         */
        delete: operations["delete-inventory-control-inventory-cycle-key"];
        options?: never;
        head?: never;
        /**
         * Update an inventory cycle
         * @description Updates an existing inventory cycle by setting field values. Any fields not provided remain unchanged. The cycle ID cannot be modified.
         */
        patch: operations["update-inventory-control-cycle-key"];
        trace?: never;
    };
    "/objects/inventory-control/cycle-count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory control cycle counts
         * @description Returns a collection with a key, ID, and link for each inventory control cycle count. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-cycle-count"];
        put?: never;
        /**
         * Create an inventory control cycle count
         * @description Creates a new inventory control cycle count.
         */
        post: operations["create-inventory-control-cycle-count"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/cycle-count/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory control cycle count.
                 * @example 207
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inventory control cycle count
         * @description Returns detailed information for a specified inventory control cycle count.
         */
        get: operations["get-inventory-control-cycle-count-key"];
        put?: never;
        post?: never;
        /**
         * Delete an inventory control cycle count
         * @description Deletes an inventory control cycle count.
         */
        delete: operations["delete-inventory-control-cycle-count-key"];
        options?: never;
        head?: never;
        /**
         * Update an inventory control cycle count
         * @description Updates an existing inventory control cycle count by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-cycle-count-key"];
        trace?: never;
    };
    "/objects/inventory-control/cycle-count-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory control cycle count lines
         * @description Returns a collection with a key, ID, and link for each inventory control cycle count line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-cycle-count-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/cycle-count-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory control cycle count line.
                 * @example 21
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inventory control cycle count line
         * @description Returns detailed information for a specified inventory control cycle count line.
         */
        get: operations["get-inventory-control-cycle-count-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete an inventory control cycle count line
         * @description Deletes an inventory control cycle count line.
         */
        delete: operations["delete-inventory-control-cycle-count-line-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory documents
         * @description Returns a collection with a key, ID, and link for each inventory document. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-document"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/document::{documentName}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Document Name */
                documentName: components["parameters"]["documentName"];
            };
            cookie?: never;
        };
        /**
         * List named inventory documents
         * @description Returns a collection with a key, ID, and link for each inventory document with the specified name. For example, to list all documents that are based on the Inventory Receipt transaction definition, specify `Inventory Receipt` as the `documentName` in the request URL.
         *
         *     This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-named-document"];
        put?: never;
        /**
         * Create an inventory document
         * @description Creates a new Inventory Control document. To create a new inventory document, specify the transaction definition that is the template for the new document as `documentName` in the request URL. To access a list of available transaction definitions, use the list operation of the [transaction definition](inventory-control.txn-definition) object. For example, to create a new inventory document that uses the Beginning Balance transaction definition as a template, specify `Beginning Balance` for the `documentName` in the request URL.
         *
         *     You can create a document if the **Create policy** for the associated transaction definition is not set to "Convert only".  If the transaction type that you want to create has a **Create policy** that's set to "Convert only", you have to convert an existing transaction into the desired transaction.
         */
        post: operations["create-inventory-control-document"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/document/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inventory document
         * @description Returns detailed information for a specified Inventory Control document.
         */
        get: operations["get-inventory-control-document-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/document::{documentName}/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document.
                 * @example 99
                 */
                key: string;
                /** @description Document Name */
                documentName: components["parameters"]["documentName"];
            };
            cookie?: never;
        };
        /**
         * Get a named inventory document
         * @description Returns detailed information for a specified Inventory Control document. For example, to return details about an inventory document that uses the Inventory Transfer In transaction definition as a template, specify `Inventory Transfer In` for the `documentName` in the request URL.
         */
        get: operations["get-inventory-control-named-document-key"];
        put?: never;
        post?: never;
        /**
         * Delete an inventory document
         * @description Deletes an Inventory Control document. In most cases draft documents can be deleted, but several factors determine whether an inventory document can be deleted.
         *
         *     See [Edit a transaction](https://www.intacct.com/ia/docs/en_US/help_action/Inventory_Control/Using_Inventory_Control/Transactions/inventory-txns.htm?cshid=Create_Inventory_Transaction_Redirect#Editatransaction) in the Sage Intacct Help Center for more information.
         */
        delete: operations["delete-inventory-control-document-key"];
        options?: never;
        head?: never;
        /**
         * Update an inventory document
         * @description Updates an existing Inventory Control document by setting field values. Any fields not provided remain unchanged.
         *
         *     With Edit permissions to Inventory Control transactions, most details for a transaction that has a state of Draft or Pending can be edited. See [Edit a transaction](https://www.intacct.com/ia/docs/en_US/help_action/Inventory_Control/Using_Inventory_Control/Transactions/inventory-txns.htm?cshid=Create_Inventory_Transaction_Redirect#Editatransaction) in the Sage Intacct Help Center for more information.
         */
        patch: operations["update-inventory-control-document-key"];
        trace?: never;
    };
    "/objects/inventory-control/document-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory document lines
         * @description Returns a collection with a key, ID, and link for each Inventory Control document line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-document-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/document-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inventory document line
         * @description Returns detailed information for a specified Inventory Control document line.
         */
        get: operations["get-inventory-control-document-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/document-line::{documentName}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Document Name */
                documentName: components["parameters"]["documentName"];
            };
            cookie?: never;
        };
        /**
         * List lines for named inventory documents
         * @description Returns a collection with a key, ID, and link for each Inventory Control document line that exists in inventory documents with the specified name. For example, to list all lines within documents that are based on the Inventory Receipt transaction definition, specify `Inventory Receipt` as the `documentName` in the request URL.
         *
         *     This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-named-document-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/document-line::{documentName}/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document line.
                 * @example 99
                 */
                key: string;
                /** @description Document Name */
                documentName: components["parameters"]["documentName"];
            };
            cookie?: never;
        };
        /**
         * Get a line in a named inventory document
         * @description Returns detailed information for a specified Inventory Control document line. For example, to get a line within a document that is based on the Inventory Transfer In transaction definition, specify `Inventory Transfer In` as the `documentName` in the request URL.
         */
        get: operations["get-inventory-control-named-document-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/document-line-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory document line details
         * @description Returns a collection with a key, ID, and link for each inventory document line detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-document-line-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/document-line-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document line detail object.
                 * @example 115
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inventory document line detail object
         * @description Returns detailed information for a specified inventory document line detail object.
         */
        get: operations["get-inventory-control-document-line-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/document-line-supplies-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List document line supplies details
         * @description Returns a collection with a key, ID, and link for each document line supplies detail object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-document-line-supplies-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/document-line-supplies-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document line supplies detail.
                 * @example 101
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a document line supplies detail
         * @description Returns detailed information for a specified document line supplies detail object.
         */
        get: operations["get-inventory-control-document-line-supplies-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/document-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory document histories
         * @description Returns a collection with a key, ID, and link for each inventory document history object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-document-history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/document-history/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document history.
                 * @example 339
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inventory document history
         * @description Returns detailed information for a specified inventory document history object.
         */
        get: operations["get-inventory-control-document-history-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/document-subtotal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory document subtotals
         * @description Returns a collection with a key, ID, and link for each inventory document subtotal. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-document-subtotal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/document-subtotal/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document subtotal.
                 * @example 15
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inventory document subtotal
         * @description Returns detailed information for a specified inventory document subtotal.
         */
        get: operations["get-inventory-control-document-subtotal-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/supplies-document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List supplies documents
         * @description Returns a collection with a key, ID, and link for each supplies document. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-supplies-document"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/supplies-document/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the supplies Document.
                 * @example 1475
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a supplies document
         * @description Returns detailed information for a specified supplies document.
         */
        get: operations["get-inventory-control-supplies-document-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/supplies-document-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List supplies document details
         * @description Returns a collection with a key, ID, and link for each supplies document detail. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-supplies-document-detail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/supplies-document-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the supplies document detail.
                 * @example 101
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a supplies document detail
         * @description Returns detailed information for a specified supplies document detail object.
         */
        get: operations["get-inventory-control-supplies-document-detail-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/item": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List items
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each item. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-item"];
        put?: never;
        /**
         * Create an item
         * @description Creates a new item.
         */
        post: operations["create-inventory-control-item"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/item/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an item
         * @description Returns detailed information for a specified item.
         */
        get: operations["get-inventory-control-item-key"];
        put?: never;
        post?: never;
        /**
         * Delete an item
         * @description Deletes an item.
         */
        delete: operations["delete-inventory-control-item-key"];
        options?: never;
        head?: never;
        /**
         * Update an item
         * @description Updates an existing item by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-item-key"];
        trace?: never;
    };
    "/objects/inventory-control/item-cross-reference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List item cross references
         * @description Returns a collection with a key, ID, and link for each item cross reference.
         */
        get: operations["list-inventory-control-item-cross-reference"];
        put?: never;
        /**
         * Create an item cross reference
         * @description Creates a new item cross reference.
         */
        post: operations["create-inventory-control-item-cross-reference"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/item-cross-reference/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item cross reference.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an item cross reference
         * @description Returns detailed information for a specified item cross reference.
         */
        get: operations["get-inventory-control-item-cross-reference-key"];
        put?: never;
        post?: never;
        /**
         * Delete an item cross reference
         * @description Deletes an item cross reference. An item cross reference can be deleted if it hasn't been used in a transaction. Deleting an item cross reference removes it from the system so that it cannot be recovered.
         */
        delete: operations["delete-inventory-control-item-cross-reference-key"];
        options?: never;
        head?: never;
        /**
         * Update an item cross reference
         * @description Updates an existing item cross reference by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-item-cross-reference-key"];
        trace?: never;
    };
    "/objects/inventory-control/item-landed-cost": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List item landed costs
         * @description Returns a collection with a key, ID, and link for each item landed cost.
         */
        get: operations["list-inventory-control-item-landed-cost"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/item-landed-cost/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item landed cost.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an item landed cost
         * @description Returns detailed information for a specified item landed cost.
         */
        get: operations["get-inventory-control-item-landed-cost-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/item-vendor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List item vendors
         * @description Returns a collection with a key, ID, and link for each item vendor.
         */
        get: operations["list-inventory-control-item-vendor"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/item-vendor/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item vendor.
                 * @example 5
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an item vendor
         * @description Returns detailed information for a specified item vendor.
         */
        get: operations["get-inventory-control-item-vendor-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/item-warehouse-inventory": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List item warehouse inventory information objects
         * @description Returns a collection with a key, ID, and link for each item warehouse inventory information object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-item-warehouse-inventory"];
        put?: never;
        /**
         * Create an item warehouse inventory information object
         * @description Creates a new item warehouse inventory information object.
         */
        post: operations["create-inventory-control-item-warehouse-inventory"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/item-warehouse-inventory/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item warehouse inventory information.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get item warehouse inventory information
         * @description Returns detailed information for a specified item warehouse inventory object.
         */
        get: operations["get-inventory-control-item-warehouse-inventory-key"];
        put?: never;
        post?: never;
        /**
         * Delete item warehouse inventory information
         * @description Deletes an item warehouse inventory information object.
         */
        delete: operations["delete-inventory-control-item-warehouse-inventory-key"];
        options?: never;
        head?: never;
        /**
         * Update item warehouse inventory information
         * @description Updates an existing item warehouse inventory information object by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-item-warehouse-inventory-key"];
        trace?: never;
    };
    "/objects/inventory-control/item-warehouse-standard-cost": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List item warehouse standard cost objects
         * @description Returns a collection with a key, ID, and link for each item warehouse standard cost. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-item-warehouse-standard-cost"];
        put?: never;
        /**
         * Create an item warehouse standard cost object
         * @description Creates a new item warehouse standard cost object.
         */
        post: operations["create-inventory-control-item-warehouse-standard-cost"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/item-warehouse-standard-cost/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item warehouse standard cost object.
                 * @example 12
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an item warehouse standard cost object
         * @description Returns detailed information for a specified item warehouse standard cost object.
         */
        get: operations["get-inventory-control-item-warehouse-standard-cost-key"];
        put?: never;
        post?: never;
        /**
         * Delete an item warehouse standard cost object
         * @description Deletes an item warehouse standard cost object.
         */
        delete: operations["delete-inventory-control-item-warehouse-standard-cost-key"];
        options?: never;
        head?: never;
        /**
         * Update an item warehouse standard cost object
         * @description Updates an existing item warehouse standard cost object by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-item-warehouse-standard-cost-key"];
        trace?: never;
    };
    "/objects/inventory-control/item-warehouse-vendor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List item warehouse vendors
         * @description Returns a collection with a key, ID, and link for each item warehouse vendor. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find item warehouse vendors that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-inventory-control-item-warehouse-vendor"];
        put?: never;
        /**
         * Create an item warehouse vendor
         * @description Creates a new item warehouse vendor.
         */
        post: operations["create-inventory-control-item-warehouse-vendor"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/item-warehouse-vendor/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item warehouse vendor.
                 * @example 66
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an item warehouse vendor
         * @description Returns detailed information for a specified item warehouse vendor.
         */
        get: operations["get-inventory-control-item-warehouse-vendor-key"];
        put?: never;
        post?: never;
        /**
         * Delete an item warehouse vendor
         * @description Deletes an item warehouse vendor.
         */
        delete: operations["delete-inventory-control-item-warehouse-vendor-key"];
        options?: never;
        head?: never;
        /**
         * Update an item warehouse vendor
         * @description Updates an existing item warehouse vendor by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-item-warehouse-vendor-key"];
        trace?: never;
    };
    "/objects/inventory-control/item-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List item group objects
         * @description Returns up to 100 item group references from the collection with a key, ID, and link for each item group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-item-group"];
        put?: never;
        /**
         * Create an item group
         * @description Creates a new item group.
         */
        post: operations["create-inventory-control-item-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/item-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an item group
         * @description Returns detailed information for a specified item group.
         */
        get: operations["get-inventory-control-item-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete an item group
         * @description Deletes an item group. An item group can be deleted if it is not being used for reporting.
         */
        delete: operations["delete-inventory-control-item-group-key"];
        options?: never;
        head?: never;
        /**
         * Update an item group
         * @description Updates an existing item group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-item-group-key"];
        trace?: never;
    };
    "/objects/inventory-control/item-gl-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List item GL groups
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each item GL group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-item-gl-group"];
        put?: never;
        /**
         * Create an item GL group
         * @description Creates a new item GL group.
         */
        post: operations["create-inventory-control-item-gl-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/item-gl-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the item GL group.
                 * @example 13
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an item GL group
         * @description Returns detailed information for a specified item GL group.
         */
        get: operations["get-inventory-control-item-gl-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete an item GL group
         * @description Deletes a item GL group. An item GL group can be deleted if it has not been used by any transactions or assigned to any items.
         */
        delete: operations["delete-inventory-control-item-gl-group-key"];
        options?: never;
        head?: never;
        /**
         * Update an item GL group
         * @description Updates an existing item GL group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-item-gl-group-key"];
        trace?: never;
    };
    "/objects/inventory-control/item-warehouse-available-inventory": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List item warehouse available inventories
         * @description Returns a collection with a key, ID, and link for each item warehouse available inventory object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-item-warehouse-available-inventory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/item-warehouse-available-inventory/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item warehouse available inventory object.
                 * @example 46865
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an item warehouse available inventory object
         * @description Returns detailed information for a specified item warehouse available inventory object.
         */
        get: operations["get-objects-inventory-control-item-warehouse-available-inventory-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/item-tax-group-item-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List item tax group item maps
         * @description Returns a collection with a key, ID, and link for each item tax group item map.  This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-tax-item-tax-group-item-map"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/tax/item-tax-group-item-map/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item tax group item map.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a item tax group item map
         * @description Returns detailed information for a specified item tax group item map.
         */
        get: operations["get-item-tax-group-item-map-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/kit-component": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List kit components
         * @description Returns a collection with a key, ID, and link for each kit component. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find kit components that meet certain criteria and to specify the properties that you want in the response.
         */
        get: operations["list-inventory-control-kit-component"];
        put?: never;
        /**
         * Create a kit component
         * @description Creates a new kit component.
         */
        post: operations["create-inventory-control-kit-component"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/kit-component/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the kit component.
                 * @example 12
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a kit component
         * @description Returns detailed information for a specified kit component.
         */
        get: operations["get-inventory-control-kit-component-key"];
        put?: never;
        post?: never;
        /**
         * Delete a kit component
         * @description Deletes a kit component.
         */
        delete: operations["delete-inventory-control-kit-component-key"];
        options?: never;
        head?: never;
        /**
         * Update a kit component
         * @description Updates an existing kit component by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-kit-component-key"];
        trace?: never;
    };
    "/objects/inventory-control/price-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List price lists
         * @description Returns a collection with a key, ID, and link for each price list. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-price-list"];
        put?: never;
        /**
         * Create a price list
         * @description Creates a new price list.
         */
        post: operations["create-inventory-control-price-list"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/price-list/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the inventory price list.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a price list
         * @description Returns detailed information for a specified price list.
         */
        get: operations["get-inventory-control-price-list-key"];
        put?: never;
        post?: never;
        /**
         * Delete a price list
         * @description Deletes an inventory price list.
         */
        delete: operations["delete-inventory-control-price-list-key"];
        options?: never;
        head?: never;
        /**
         * Update a price list
         * @description Updates an existing price list by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-price-list-key"];
        trace?: never;
    };
    "/objects/inventory-control/price-list-entry": {
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
        get: operations["list-inventory-control-price-list-entry"];
        put?: never;
        /**
         * Create a price list entry
         * @description Creates a new price list entry.
         */
        post: operations["create-inventory-control-price-list-entry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/price-list-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the price list entry.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a price list entry
         * @description Returns detailed information for a specified price list entry.
         */
        get: operations["get-inventory-control-price-list-entry-key"];
        put?: never;
        post?: never;
        /**
         * Delete a price list entry
         * @description Deletes a price list entry.
         */
        delete: operations["delete-inventory-control-price-list-entry-key"];
        options?: never;
        head?: never;
        /**
         * Update a price list entry
         * @description Updates an existing price list entry by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-price-list-entry-key"];
        trace?: never;
    };
    "/objects/inventory-control/product-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List product lines
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each product line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-product-line"];
        put?: never;
        /**
         * Create a product line
         * @description Creates a new product line.
         */
        post: operations["create-inventory-control-product-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/product-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the product line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a product line
         * @description Returns detailed information for a specified product line.
         */
        get: operations["get-inventory-control-product-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a Product line
         * @description Deletes a product line.
         */
        delete: operations["delete-inventory-control-product-line-key"];
        options?: never;
        head?: never;
        /**
         * Update a product line
         * @description Updates an existing product line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-product-line-key"];
        trace?: never;
    };
    "/objects/inventory-control/row": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List rows
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each row. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-row"];
        put?: never;
        /**
         * Create a row
         * @description Creates a new row.
         */
        post: operations["create-inventory-control-row"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/row/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the row.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a row
         * @description Returns detailed information for a specified row.
         */
        get: operations["get-inventory-control-row-key"];
        put?: never;
        post?: never;
        /**
         * Delete a row
         * @description Deletes a row. You can delete a row if it is not being used and you no longer need it. Deleted rows cannot be recovered.
         */
        delete: operations["delete-inventory-control-row-key"];
        options?: never;
        head?: never;
        /**
         * Update a row
         * @description Updates an existing row by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-row-key"];
        trace?: never;
    };
    "/objects/inventory-control/stockable-kit-document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List stockable kit documents
         * @description Returns a collection with a key, ID, and link for each stockable kit document. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-stockable-kit-document"];
        put?: never;
        /**
         * Create a stockable kit document
         * @description Creates a new stockable kit document.
         */
        post: operations["create-inventory-control-stockable-kit-document"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/stockable-kit-document/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the stockable kit document.
                 * @example 118
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a stockable kit document
         * @description Returns detailed information for a specified stockable kit document.
         */
        get: operations["get-inventory-control-stockable-kit-document-key"];
        put?: never;
        post?: never;
        /**
         * Delete a stockable kit document
         * @description Deletes a stockable kit document.
         */
        delete: operations["delete-inventory-control-stockable-kit-document-key"];
        options?: never;
        head?: never;
        /**
         * Update a stockable kit document
         * @description Updates an existing stockable kit document by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-stockable-kit-document-key"];
        trace?: never;
    };
    "/objects/inventory-control/stockable-kit-document-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List stockable kit document lines
         * @description Returns a collection with a key, ID, and link for each stockable kit document line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-inventory-control-stockable-kit-document-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/stockable-kit-document-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the stockable kit document line.
                 * @example 112
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a stockable kit document line
         * @description Returns detailed information for a specified stockable kit document line.
         */
        get: operations["get-inventory-control-stockable-kit-document-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/posting-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List posting summaries
         * @description Returns a collection with a key, ID, and link for each posting summary. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-posting-summary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/posting-summary/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the posting summary.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a posting summary
         * @description Returns detailed information for a specified posting summary.
         */
        get: operations["get-inventory-control-posting-summary-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/total": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory totals
         * @description Returns a collection with a key, ID, and link for each inventory total. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-total"];
        put?: never;
        /**
         * Create an inventory total
         * @description Creates a new inventory total.
         */
        post: operations["create-inventory-control-total"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/total/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory total.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inventory total
         * @description Returns detailed information for a specified inventory total.
         */
        get: operations["get-inventory-control-total-key"];
        put?: never;
        post?: never;
        /**
         * Delete an inventory total
         * @description Deletes an inventory total. Only user-defined inventory totals can be deleted.
         */
        delete: operations["delete-inventory-control-total-key"];
        options?: never;
        head?: never;
        /**
         * Update an inventory total
         * @description Updates an existing inventory total by setting field values. Any fields not provided remain unchanged.
         *     User-defined totals can be edited, but only the status of preset inventory totals can be edited. To prevent a preset inventory total from being selected in a transaction definition, change its status to `inactive`.
         */
        patch: operations["update-inventory-control-total-key"];
        trace?: never;
    };
    "/objects/inventory-control/landed-cost-category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List landed cost categories
         * @description Returns a collection with a key, ID, and link for each landed cost category. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-landed-cost-category"];
        put?: never;
        /**
         * Create a landed cost category
         * @description Creates a new landed cost category.
         */
        post: operations["create-inventory-control-landed-cost-category"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/landed-cost-category/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the landed cost category.
                 * @example 101
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a landed cost category
         * @description Returns detailed information for a specified landed cost category.
         */
        get: operations["get-inventory-control-landed-cost-category-key"];
        put?: never;
        post?: never;
        /**
         * Delete a landed cost category
         * @description Deletes a landed cost category. You can delete a landed cost category only if it has not been used in a transaction.
         *
         *     If you no longer want to use a landed cost category and cannot delete it because it has been used in a transaction, you can deactivate it by changing its `status` to `inactive` using the PATCH operation.
         */
        delete: operations["delete-inventory-control-landed-cost-category-key"];
        options?: never;
        head?: never;
        /**
         * Update a landed cost category
         * @description Updates an existing landed cost category by setting field values. Any fields not provided remain unchanged.
         *
         *     After a landed cost category has been used in a transaction, its distribution method cannot be changed. However, you can always change the name or status of a landed cost category.
         */
        patch: operations["update-inventory-control-landed-cost-category-key"];
        trace?: never;
    };
    "/objects/inventory-control/lot-category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List lot categories
         * @description Returns a collection with a key, ID, and link for each lot category. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-lot-category"];
        put?: never;
        /**
         * Create a lot category
         * @description Creates a new lot category.
         */
        post: operations["create-inventory-control-lot-category"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/lot-category/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the lot category.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a lot category
         * @description Returns detailed information for a specified lot category.
         */
        get: operations["get-inventory-control-lot-category-key"];
        put?: never;
        post?: never;
        /**
         * Delete a lot category
         * @description Deletes a lot category.
         */
        delete: operations["delete-inventory-control-lot-category-key"];
        options?: never;
        head?: never;
        /**
         * Update a lot category
         * @description Updates an existing lot category by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-lot-category-key"];
        trace?: never;
    };
    "/objects/inventory-control/replenishment-forecast": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List replenishment forecasts
         * @description Returns a collection with a key, ID, and link for each replenishment forecast. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-replenishment-forecast"];
        put?: never;
        /**
         * Create a replenishment forecast
         * @description Creates a new replenishment forecast. Each item can have one active replenishment forecast.
         */
        post: operations["create-inventory-control-replenishment-forecast"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/replenishment-forecast/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the replenishment forecast.
                 * @example 47
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a replenishment forecast
         * @description Returns detailed information for a specified replenishment forecast.
         */
        get: operations["get-inventory-control-replenishment-forecast-key"];
        put?: never;
        post?: never;
        /**
         * Delete a replenishment forecast
         * @description Deletes a replenishment forecast. You can delete a forecast if its `forecastStatus` is `inactive`.
         */
        delete: operations["delete-inventory-control-replenishment-forecast-key"];
        options?: never;
        head?: never;
        /**
         * Update a replenishment forecast
         * @description Updates an existing replenishment forecast by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-replenishment-forecast-key"];
        trace?: never;
    };
    "/objects/inventory-control/replenishment-forecast-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List replenishment forecast lines
         * @description Returns a collection with a key, ID, and link for each replenishment forecast line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-replenishment-forecast-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/replenishment-forecast-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the replenishment forecast line.
                 * @example 66
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a replenishment forecast line
         * @description Returns detailed information for a specified replenishment forecast line.
         */
        get: operations["get-inventory-control-replenishment-forecast-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a replenishment forecast line
         * @description Deletes a replenishment forecast line.
         */
        delete: operations["delete-inventory-control-replenishment-forecast-line-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/replenishment-run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List replenishment runs
         * @description Returns a collection with a key, ID, and link for each replenishment run. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-replenishment-run"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/replenishment-run/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the replenishment run.
                 * @example 10
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a replenishment run
         * @description Returns detailed information for a specified replenishment run.
         */
        get: operations["get-inventory-control-replenishment-run-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/replenishment-run-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List replenishment run lines
         * @description Returns a collection with a key, ID, and link for each replenishment run line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-replenishment-run-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/replenishment-run-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the replenishment run line.
                 * @example 15
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a replenishment run line
         * @description Returns detailed information for a specified replenishment run line.
         */
        get: operations["get-inventory-control-replenishment-run-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/serial-mask": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List serial masks
         * @description Returns a collection with a key, ID, and link for each inventory control serial mask. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-serial-mask"];
        put?: never;
        /**
         * Create a serial mask
         * @description Creates a new inventory control serial mask.
         */
        post: operations["create-inventory-control-serial-mask"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/serial-mask/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the serial mask.
                 * @example 5
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a serial mask
         * @description Returns detailed information for a specified inventory control serial mask.
         */
        get: operations["get-inventory-control-serial-mask-key"];
        put?: never;
        post?: never;
        /**
         * Delete a serial mask
         * @description Deletes an inventory control serial mask.
         */
        delete: operations["delete-inventory-control-serial-mask-key"];
        options?: never;
        head?: never;
        /**
         * Update a serial mask
         * @description Updates an existing inventory control serial mask by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-serial-mask-key"];
        trace?: never;
    };
    "/objects/inventory-control/valuation-maintenance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List valuation maintenance objects
         * @description Returns a collection with a key, ID, and link for each valuation maintenance object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-valuation-maintenance"];
        put?: never;
        /**
         * Create a valuation maintenance object
         * @description Creates a new valuation maintenance object.
         *
         *     If not specified, the valuation maintenance `action` will default to `analyze`, and the `valuationFilters` will default to all items in all warehouses for all cost methods.
         */
        post: operations["create-inventory-control-valuation-maintenance"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/valuation-maintenance/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the valuation maintenance object.
                 * @example 406
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a valuation maintenance object
         * @description Returns detailed information for a specified valuation maintenance object.
         */
        get: operations["get-inventory-control-valuation-maintenance"];
        put?: never;
        post?: never;
        /**
         * Delete a valuation maintenance object
         * @description Deletes a valuation maintenance object.
         */
        delete: operations["delete-inventory-control-valuation-maintenance"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/txn-definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory transaction definitions
         * @description Returns a collection with a key, ID, and link for each inventory transaction definition. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-txn-definition"];
        put?: never;
        /**
         * Create an inventory transaction definition
         * @description Creates a new inventory transaction definition. Advanced workflows must be enabled to add new transaction definitions.
         */
        post: operations["create-inventory-control-txn-definition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/txn-definition/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition.
                 * @example 82
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inventory transaction definition
         * @description Returns detailed information for a specified inventory transaction definition.
         */
        get: operations["get-inventory-control-txn-definition-key"];
        put?: never;
        post?: never;
        /**
         * Delete an inventory transaction definition
         * @description Deletes an inventory transaction definition.
         */
        delete: operations["delete-inventory-control-txn-definition-key"];
        options?: never;
        head?: never;
        /**
         * Update an inventory transaction definition
         * @description Updates an existing inventory transaction definition by setting field values. Any fields not provided remain unchanged. Advanced workflows must be enabled to edit transaction definitions. When you edit a transaction definition, the changes apply only to transactions that are created after the edits are made. Existing transactions are not affected.
         */
        patch: operations["update-inventory-control-txn-definition-key"];
        trace?: never;
    };
    "/objects/inventory-control/txn-definition-cogs-gl-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory transaction definition COGS GL details
         * @description Returns a collection with a key, ID, and link for each inventory transaction definition COGS GL detail. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-txn-definition-cogs-gl-detail"];
        put?: never;
        /**
         * Create an inventory transaction definition COGS GL detail
         * @description Creates a new inventory transaction definition COGS GL detail.
         */
        post: operations["create-inventory-control-txn-definition-cogs-gl-detail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/txn-definition-cogs-gl-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition COGS GL detail.
                 * @example 208
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inventory transaction definition COGS GL detail
         * @description Returns detailed information for a specified inventory transaction definition COGS GL detail.
         */
        get: operations["get-inventory-control-txn-definition-cogs-gl-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete an inventory transaction definition COGS GL detail
         * @description Deletes an inventory transaction definition COGS GL detail.
         */
        delete: operations["delete-inventory-control-txn-definition-cogs-gl-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update an inventory transaction definition COGS GL detail
         * @description Updates an existing inventory transaction definition COGS GL detail by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-txn-definition-cogs-gl-detail-key"];
        trace?: never;
    };
    "/objects/inventory-control/txn-definition-entity-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory transaction definition entity details
         * @description Returns a collection with a key, ID, and link for each inventory transaction definition entity detail. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-txn-definition-entity-detail"];
        put?: never;
        /**
         * Create an inventory transaction definition entity detail
         * @description Creates a new inventory transaction definition entity detail.
         */
        post: operations["create-inventory-control-txn-definition-entity-detail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/txn-definition-entity-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition entity detail.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inventory transaction definition entity detail
         * @description Returns detailed information for a specified inventory transaction definition entity detail.
         */
        get: operations["get-inventory-control-txn-definition-entity-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete an inventory transaction definition entity detail
         * @description Deletes an inventory transaction definition entity detail.
         */
        delete: operations["delete-inventory-control-txn-definition-entity-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update an inventory transaction definition entity detail
         * @description Updates an existing inventory transaction definition entity detail by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-txn-definition-entity-detail-key"];
        trace?: never;
    };
    "/objects/inventory-control/txn-definition-source": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory transaction definition sources
         * @description Returns a collection with a key, ID, and link for each inventory transaction definition source. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-txn-definition-source"];
        put?: never;
        /**
         * Create an inventory transaction definition source
         * @description Creates a new inventory transaction definition source.
         */
        post: operations["create-inventory-control-txn-definition-source"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/txn-definition-source/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition source.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inventory transaction definition source
         * @description Returns detailed information for a specified inventory transaction definition source.
         */
        get: operations["get-inventory-control-txn-definition-source-key"];
        put?: never;
        post?: never;
        /**
         * Delete an inventory transaction definition source
         * @description Deletes an inventory transaction definition source.
         */
        delete: operations["delete-inventory-control-txn-definition-source-key"];
        options?: never;
        head?: never;
        /**
         * Update an inventory transaction definition source
         * @description Updates an existing inventory transaction definition source by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-txn-definition-source-key"];
        trace?: never;
    };
    "/objects/inventory-control/txn-definition-subtotal-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory transaction definition subtotal details
         * @description Returns a collection with a key, ID, and link for each inventory transaction definition subtotal detail. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-txn-definition-subtotal-detail"];
        put?: never;
        /**
         * Create an inventory transaction definition subtotal detail
         * @description Creates a new inventory transaction definition subtotal detail.
         */
        post: operations["create-inventory-control-txn-definition-subtotal-detail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/txn-definition-subtotal-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition subtotal detail.
                 * @example 98
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inventory transaction definition subtotal detail
         * @description Returns detailed information for a specified inventory transaction definition subtotal detail.
         */
        get: operations["get-inventory-control-txn-definition-subtotal-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete an inventory transaction definition subtotal detail
         * @description Deletes an inventory transaction definition subtotal detail.
         */
        delete: operations["delete-inventory-control-txn-definition-subtotal-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update an inventory transaction definition subtotal detail
         * @description Updates an existing inventory transaction definition subtotal detail by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-txn-definition-subtotal-detail-key"];
        trace?: never;
    };
    "/objects/inventory-control/txn-definition-total-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory transaction definition total details
         * @description Returns a collection with a key, ID, and link for each inventory transaction definition total detail. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-txn-definition-total-detail"];
        put?: never;
        /**
         * Create an inventory transaction definition total detail
         * @description Creates a new inventory transaction definition total detail.
         */
        post: operations["create-inventory-control-txn-definition-total-detail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/txn-definition-total-detail/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition total detail.
                 * @example 208
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inventory transaction definition total detail
         * @description Returns detailed information for a specified inventory transaction definition total detail.
         */
        get: operations["get-inventory-control-txn-definition-total-detail-key"];
        put?: never;
        post?: never;
        /**
         * Delete an inventory transaction definition total detail
         * @description Deletes an inventory transaction definition total detail.
         */
        delete: operations["delete-inventory-control-txn-definition-total-detail-key"];
        options?: never;
        head?: never;
        /**
         * Update an inventory transaction definition total detail
         * @description Updates an existing inventory transaction definition total detail by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-txn-definition-total-detail-key"];
        trace?: never;
    };
    "/objects/inventory-control/unit-of-measure": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List unit of measure objects
         * @description Returns a collection with a key, ID, and link for each unit of measure. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-unit-of-measure"];
        put?: never;
        /**
         * Create a unit of measure
         * @description Create one or more custom units of measure within an existing unit of measure group.
         */
        post: operations["create-inventory-control-unit-of-measure"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/unit-of-measure/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the unit of measure.
                 * @example 135
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a unit of measure
         * @description Returns detailed information for a specified unit of measure.
         */
        get: operations["get-inventory-control-unit-of-measure-key"];
        put?: never;
        post?: never;
        /**
         * Delete a unit of measure
         * @description Deletes a unit of measure. Units of measure that are provided with Sage Intacct and included in default unit of measure groups such as Time, Area, and Count cannot be deleted. Only custom units of measure that are not in use can be deleted.
         */
        delete: operations["delete-inventory-control-unit-of-measure-key"];
        options?: never;
        head?: never;
        /**
         * Update a unit of measure
         * @description Updates an existing custom unit of measure by setting field values. Any fields not provided remain unchanged. Units of measure already in use cannot be modified.
         */
        patch: operations["update-inventory-control-unit-of-measure-key"];
        trace?: never;
    };
    "/objects/inventory-control/unit-of-measure-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List  all unit of measure groups
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each unit of measure group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-unit-of-measure-group"];
        put?: never;
        /**
         * Create a unit of measure group
         * @description Creates a new custom unit of measure group.
         */
        post: operations["create-inventory-control-unit-of-measure-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/unit-of-measure-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the unit of measure group.
                 * @example 11
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a unit of measure group
         * @description Returns detailed information for a specified unit of measure group.
         */
        get: operations["get-inventory-control-unit-of-measure-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete a unit of measure group
         * @description Deletes a unit of measure group. Unit of measure groups that come with Sage Intacct such as Length,Time, Area, and Count cannot be deleted. Only custom unit of measure groups that are not in use can be deleted.
         */
        delete: operations["delete-inventory-control-unit-of-measure-group-key"];
        options?: never;
        head?: never;
        /**
         * Update a unit of measure group
         * @description Updates an existing unit of measure group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-unit-of-measure-group-key"];
        trace?: never;
    };
    "/objects/inventory-control/warehouse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List warehouses
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each warehouse. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-warehouse"];
        put?: never;
        /**
         * Create a warehouse
         * @description Creates a new warehouse. For a warehouse hierarchy, create the parent warehouses before adding child warehouses.
         */
        post: operations["create-inventory-control-warehouse"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/warehouse/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the warehouse.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a warehouse
         * @description Returns detailed information for a specified warehouse.
         */
        get: operations["get-inventory-control-warehouse-key"];
        put?: never;
        post?: never;
        /**
         * Delete a warehouse
         * @description Deletes a warehouse.
         */
        delete: operations["delete-inventory-control-warehouse-key"];
        options?: never;
        head?: never;
        /**
         * Update a warehouse
         * @description Updates an existing warehouse by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-warehouse-key"];
        trace?: never;
    };
    "/objects/inventory-control/warehouse-transfer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List warehouse transfers
         * @description Returns a collection with a key, ID, and link for each warehouse transfer. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-inventory-control-warehouse-transfer"];
        put?: never;
        /**
         * Create a warehouse transfer
         * @description Creates a new warehouse transfer. Fields required to create a warehouse transfer depend on the type of transfer, `immediate` or `inTransit`. And lines within the transfer must include one or more matched pair with one outgoing and one incoming line.
         *
         *     Read field descriptions carefully to ensure all requirements are met.
         */
        post: operations["create-inventory-control-warehouse-transfer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/warehouse-transfer/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the warehouse transfer.
                 * @example 19
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a warehouse transfer
         * @description Returns detailed information for a specified warehouse transfer.
         */
        get: operations["get-inventory-control-warehouse-transfer-key"];
        put?: never;
        post?: never;
        /**
         * Delete a warehouse transfer
         * @description Deletes a warehouse transfer. Warehouse transfers that are in `draft` or `inTransit` state can be deleted.
         *
         *     And, warehouse transfers that are in `posted` state can be deleted if the inventory that was transferred still exists at the destination warehouse.
         */
        delete: operations["delete-inventory-control-warehouse-transfer-key"];
        options?: never;
        head?: never;
        /**
         * Update a warehouse transfer
         * @description Updates an existing warehouse transfer by setting field values. Any field not provided remains unchanged.
         *
         *     For `inTransit` transfers, edit the transfer when the inventory arrives at the destination warehouse to increase ONHAND quantities and value.
         *
         *     Any warehouse transfer can be edited if the changes only affect inventory that still exists at the destination warehouse.
         */
        patch: operations["update-inventory-control-warehouse-transfer-key"];
        trace?: never;
    };
    "/objects/inventory-control/warehouse-transfer-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List warehouse transfer lines
         * @description Returns a collection with a key, ID, and link for each warehouse transfer line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-warehouse-transfer-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/warehouse-transfer-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the warehouse transfer line.
                 * @example 78
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a warehouse transfer line
         * @description Returns detailed information for a specified warehouse transfer line.
         */
        get: operations["get-inventory-control-warehouse-transfer-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/warehouse-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List warehouse groups
         * @description Returns a collection with a key, ID, and link for each warehouse group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-warehouse-group"];
        put?: never;
        /**
         * Create a warehouse group
         * @description Creates a new warehouse group.
         */
        post: operations["create-inventory-control-warehouse-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/warehouse-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the warehouse group.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a warehouse group
         * @description Returns detailed information for a specified warehouse group.
         */
        get: operations["get-inventory-control-warehouse-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete a warehouse group
         * @description Deletes a warehouse group. A warehouse group can be deleted if it is not being used for reporting.
         */
        delete: operations["delete-inventory-control-warehouse-group-key"];
        options?: never;
        head?: never;
        /**
         * Update a warehouse group
         * @description Updates an existing warehouse group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-warehouse-group-key"];
        trace?: never;
    };
    "/objects/inventory-control/zone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List zones
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each zone. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-inventory-control-zone"];
        put?: never;
        /**
         * Create a zone
         * @description Creates a new zone.
         */
        post: operations["create-inventory-control-zone"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/inventory-control/zone/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the zone.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a zone
         * @description Returns detailed information for a specified zone.
         */
        get: operations["get-inventory-control-zone-key"];
        put?: never;
        post?: never;
        /**
         * Delete a zone
         * @description Deletes a zone. You can delete a zone if it is not being used and you no longer need it. Deleted zones cannot be recovered.
         */
        delete: operations["delete-inventory-control-zone-key"];
        options?: never;
        head?: never;
        /**
         * Update a zone
         * @description Updates an existing zone by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-inventory-control-zone-key"];
        trace?: never;
    };
    "/services/reports/inventory-control/item-activity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Run an item activity report
         * @description Runs an item activity report
         */
        post: operations["inventory-control-item-activity"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/reports/inventory-control/inventory-valuation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Run an inventory valuation report
         * @description Runs an inventory valuation report
         */
        post: operations["inventory-control-inventory-valuation"];
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
        /** @description An aisle is one of four optional attributes (zone, aisle, row, and bin face) you can assign to a bin to make it easier to find in the warehouse. */
        "objects.inventory-control.aisle": {
            /**
             * @description System-assigned key for the aisle.
             * @example 13
             */
            readonly key?: string;
            /**
             * @description Name or other unique identifier for the aisle. The aisle ID cannot be modified.
             * @example A2
             */
            id?: string;
            /**
             * @description Description for the aisle.
             * @example Aisle 2 Dishwashers
             */
            description?: string;
            /**
             * @description URL for the aisle.
             * @example /objects/inventory-control/aisle/13
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "inventory-control-aisleRequiredProperties": Record<string, never>;
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
        /** @description A bin identifies a specific location within a warehouse where items are or can be stored. Bins make it easier to find items during transaction processing. */
        "objects.inventory-control.bin": {
            /**
             * @description System-assigned key for the bin.
             * @example 10
             */
            readonly key?: string;
            /**
             * @description Name or other unique identifier for the bin. The identifier should make it easy to find the bin. For example, if bin 10 is in zone 4, aisle 2, row 3a, and bin face 2, Z4-A2-R3a-BF2-B10 would be a good ID.
             * @example Z4-A2-R3a-BF2-B10
             */
            id?: string;
            /**
             * @description Description of the bin.
             * @example Bin of wrenches 02
             */
            description?: string;
            /**
             * @description URL for this bin.
             * @example /objects/inventory-control/bin/10
             */
            readonly href?: string;
            warehouse?: {
                /**
                 * @description System-assigned key for the warehouse.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Name or other unique identifier for the warehouse.
                 * @example WA2
                 */
                id?: string;
                /**
                 * @description URL for the warehouse.
                 * @example /objects/inventory-control/warehouse/2
                 */
                readonly href?: string;
            };
            aisle?: {
                /**
                 * @description System-assigned key for the aisle.
                 * @example 13
                 */
                key?: string;
                /**
                 * @description Name or other unique identifier for the aisle.
                 * @example A2
                 */
                id?: string;
                /**
                 * @description URL for the aisle.
                 * @example /objects/inventory-control/aisle/13
                 */
                readonly href?: string;
            };
            row?: {
                /**
                 * @description System-assigned key for the row.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Name or other unique identifier for the row.
                 * @example R3a
                 */
                id?: string;
                /**
                 * @description URL for the row.
                 * @example /objects/inventory-control/row/23
                 */
                readonly href?: string;
            };
            zone?: {
                /**
                 * @description System-assigned key for the zone.
                 * @example 12
                 */
                key?: string;
                /**
                 * @description Name or other unique identifier for the zone.
                 * @example Z4
                 */
                id?: string;
                /**
                 * @description URL for the zone.
                 * @example /objects/inventory-control/zone/12
                 */
                readonly href?: string;
            };
            binFace?: {
                /**
                 * @description System-assigned key for the bin face.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Name or other unique identifier for the bin face.
                 * @example BF2
                 */
                id?: string;
                /**
                 * @description URL for the bin face.
                 * @example /objects/inventory-control/bin-face/3
                 */
                readonly href?: string;
            };
            binSize?: {
                /**
                 * @description System-assigned key for the Bin Size
                 * @example 5
                 */
                key?: string;
                /**
                 * @description Name or other unique identifier for the bin size.
                 * @example B10
                 */
                id?: string;
                /**
                 * @description URL for the bin size.
                 * @example /objects/inventory-control/bin-size/5
                 */
                readonly href?: string;
            };
            /**
             * @description Sequence number for the bin. Sequence numbering supports more efficient picking, packing, and cycle counts.
             * @example 1233
             */
            sequenceNumber?: string;
            /**
             * @description Set to true if the bin can be moved to another location, otherwise set to false.
             * @default false
             * @example true
             */
            isPortable?: boolean;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "inventory-control-binRequiredProperties": Record<string, never>;
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
        /** @description A bin face is one of four optional attributes (zone, aisle, row, and bin face) you can assign to a bin to make it easier to find the bin within the warehouse. */
        "objects.inventory-control.bin-face": {
            /**
             * @description System-assigned key for the bin face.
             * @example 3
             */
            readonly key?: string;
            /**
             * @description Unique identifier or name for the bin face. The bin face ID cannot be modified.
             * @example BF232
             */
            id?: string;
            /**
             * @description Description for the bin face.
             * @example Bin Face 232
             */
            description?: string;
            /**
             * @description URL for the bin face.
             * @example /objects/inventory-control/bin-face/3
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "inventory-control-bin-faceRequiredProperties": Record<string, never>;
        /** @description A bin size in an attribute you can assign to a bin to help determine whether the bin is suitable for storing certain items. */
        "objects.inventory-control.bin-size": {
            /**
             * @description System-assigned key for the bin size.
             * @example 5
             */
            readonly key?: string;
            /**
             * @description Unique identifier or name for the bin size. This ID should make it easy to understand the bin size. This ID cannot be modified.
             * @example 2x2
             */
            id?: string;
            /**
             * @description Description for the bin size.
             * @example Bin Size 10 Wrenches
             */
            description?: string;
            /**
             * @description URL for the bin size.
             * @example /objects/inventory-control/bin-size/5
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "inventory-control-bin-sizeRequiredProperties": Record<string, never>;
        /** @description Inventory cycle information. */
        "objects.inventory-control.cycle": {
            /**
             * @description System generated Key
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the inventory cycle. The face ID cannot be modified.
             * @example Monthly Cycle
             */
            id?: string;
            /**
             * @description Description for the inventory cycle
             * @example Monthwise inventory cycle
             */
            description?: string;
            /**
             * @description inventory-cycle url
             * @example /objects/inventory-control/cycle/3
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "inventory-control-cycleRequiredProperties": Record<string, never>;
        /** @description Cycle counting is an inventory auditing procedure in which a small amount of inventory is regularly counted in the warehouse. The general goal is to count the entire inventory over a period of time and update the inventory at the end of each count. */
        "objects.inventory-control.cycle-count": {
            /**
             * @description System-assigned unique key for the cycle count.
             * @example 51
             */
            readonly key?: string;
            /**
             * @description ID for the cycle count. This value is the same as the key for this object.
             * @example 51
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the cycle count.
             * @example /objects/inventory-control/cycle-count/51
             */
            readonly href?: string;
            /**
             * @description If the inventory cycle count configuration does not have a numbering sequence configured, provide a document number to identify the transaction.
             * @example IC-0000002
             */
            documentNumber?: string;
            /**
             * @description Information about the cycle count that can be used for searching and sorting.
             * @example 2025 May damaged units Counting
             */
            description?: string;
            /**
             * @description Status of the cycle count. When a cycle count object is created, the initial state is set to `notStarted`. The state is then updated by the system as users work with cycle counts:
             *     * `inProgress` - The items in the count are in the process of being counted.
             *     * `counted` - The results of counting the items have been entered, and the count has been marked as complete.
             *     * `reconciled` - The count results have been analyzed to evaluate the differences between the actual quantities that were counted and the system-recorded quantities, and Inventory Control transaction adjustments have been made for any count variances, if accepted.
             *     * `voided` - The results of the count are not to be used, and the count has been marked as voided.
             * @default notStarted
             * @example inProgress
             * @enum {string}
             */
            readonly state?: "notStarted" | "inProgress" | "counted" | "reconciled" | "voided";
            /**
             * Format: date
             * @description Specifies the date that the count was started.
             * @example 2026-01-23
             */
            readonly startDate?: string;
            /**
             * Format: date
             * @description Specifies the date that the count was completed.
             * @example 2026-02-23
             */
            readonly endDate?: string;
            /**
             * Format: date
             * @description The date that automatically generated Inventory Control adjustment transactions were posted due to count variances during reconciliation.
             * @example 2026-02-23
             */
            readonly adjustmentDate?: string;
            /**
             * Format: date
             * @description The GL posting date to use for automatically generated Inventory Control adjustment transactions that are needed due to count variances during reconciliation.
             * @example 2026-02-23
             */
            readonly adjustmentPostDate?: string;
            /**
             * Format: date
             * @description A read-only field that specifies the date and time when the quantity on hand was last updated. This field is refreshed when:
             *     * A user clicks the Update quantity on hand button in the Sage Intacct UI
             *     * Sage Intacct automatically updates the quantity on hand when a count is started
             * @example 2026-02-23
             */
            readonly quantityOnHandLastUpdateDate?: string | null;
            quantity?: {
                /**
                 * @description Specifies whether to continue to display the quantity on hand on the Cycle Count Information page after the count is started. This option cannot be changed after the count is saved.
                 * @default false
                 * @example false
                 */
                showQuantityOnHand?: boolean;
                /**
                 * @description Specifies whether the quantity on hand is reduced by the allocated (picked) quantity and, for tracked items, also by the reserved quantities in sales orders.
                 *     Allocated quantity is considered to be picked and no longer on the warehouse shelves.
                 *     Reserved quantity is considered to be on the warehouse shelves but set aside to fill sales orders and not available to be used anywhere else.
                 * @default false
                 * @example false
                 */
                excludedAllocatedQuantity?: boolean;
                /**
                 * @description The number of adjustments needed to update the inventory valuation for differences in quantity on hand.
                 * @example 2
                 */
                readonly adjustmentCount?: number;
                /**
                 * @description The number of adjustments needed to move damaged quantity from ONHAND to DAMAGED.
                 * @example 2
                 */
                readonly damageAdjustmentCount?: number;
                /**
                 * @description Total cycle count line items that have a line status of `count`.
                 * @default 0
                 * @example 1
                 */
                readonly linesInCount?: number;
                /**
                 * @description Total cycle count line items that have a line status of `skipped`.
                 * @example 1
                 */
                readonly linesSkipped?: number;
            };
            /** @description Specifies the employee who will perform the manual count. The assigned employee cannot be changed after the count is created. */
            assignedTo?: {
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/23
                 */
                readonly href?: string;
                /**
                 * @description Employee ID.
                 * @example EA00202
                 */
                id?: string;
                /**
                 * @description Unique key for the employee.
                 * @example 23
                 */
                key?: string;
            };
            /** @description The warehouse in which items will be manually counted. The warehouse cannot be changed after the count is created. */
            warehouse?: {
                /**
                 * @description URL endpoint for the warehouse.
                 * @example /objects/inventory-control/warehouse/23
                 */
                readonly href?: string;
                /**
                 * @description ID for the warehouse.
                 * @example US001
                 */
                id?: string;
                /**
                 * @description Unique key for the warehouse.
                 * @example 23
                 */
                key?: string;
            };
            /** @description Lines of the cycle count document. */
            lines?: components["schemas"]["objects.inventory-control.cycle-count-line"][];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "inventory-control-cycle-countRequiredProperties": Record<string, never>;
        /** @description Each item in a cycle count is represented by a cycle count line object, which is used to record the quantity and location of each item. */
        "objects.inventory-control.cycle-count-line": {
            /**
             * @description System-assigned unique key for the cycle count line.
             * @example 41
             */
            readonly key?: string;
            /**
             * @description ID for the cycle count line. This value is the same as the key for this object.
             * @example 41
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the cycle count line.
             * @example /objects/inventory-control/cycle-count-line/41
             */
            readonly href?: string;
            /** @description Header level details for the cycle count's line items. */
            cycleCount?: {
                /**
                 * @description URL endpoint for the cycle count.
                 * @example /objects/inventory-control/cycle-count/23
                 */
                readonly href?: string;
                /**
                 * @description ID for the cycle count.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description Unique key for the cycle count.
                 * @example 23
                 */
                key?: string;
            };
            /** @description Item quantities for the cycle count line. */
            quantity?: {
                /**
                 * Format: decimal-precision-2
                 * @description Actual quantity that was counted for the item and found to be undamaged.
                 * @example 10.00
                 */
                counted?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Actual quantity that was counted for the item but found to be damaged.
                 * @example 1.00
                 */
                damaged?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description The quantity that was on hand when the count was started.
                 * @example 10.00
                 */
                readonly onHand?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Actual quantity to adjust the `onHand` quantity by.
                 * @example 1.00
                 */
                readonly actualAdjustment?: string | null;
                /**
                 * @description Actual quantity to move from being `onHand` to `DAMAGED`.
                 * @example 1
                 */
                readonly actualDamagedQuantityAdjustment?: number | null;
                /**
                 * Format: decimal-precision-2
                 * @description The quantity on hand when the count was marked as complete.
                 * @example 10.00
                 */
                readonly onHandAtEnd?: string | null;
            };
            /**
             * @description The description of why the quantity on hand might need to be adjusted when the counted quantity was entered.
             * @example Damaged on the floor
             */
            adjustmentReason?: string | null;
            /**
             * @description Line count status.
             * @default notCounted
             * @example inProgress
             * @enum {string}
             */
            readonly lineCountStatus?: "notCounted" | "inProgress" | "skipped" | "counted";
            /** @description Product line to which this item belongs. */
            readonly productLine?: {
                /**
                 * @description Unique key for the product line.
                 * @example 59
                 */
                key?: string | null;
                /**
                 * @description ID of the product line.
                 * @example 1233
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the product line.
                 * @example /objects/product-line/59
                 */
                readonly href?: string;
            };
            /** @description Cycle to which this item belongs. */
            readonly cycle?: {
                /**
                 * @description Unique key for the cycle.
                 * @example 52
                 */
                key?: string | null;
                /**
                 * @description ID of the cycle.
                 * @example 1233
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the cycle.
                 * @example /objects/inventory-control/cycle/52
                 */
                readonly href?: string;
            };
            /**
             * Format: decimal-precision-2
             * @description Unit cost of the item.
             * @example 1456.45
             */
            readonly unitCost?: string | null;
            /**
             * @description For tracking purposes, explanation of why adjustment quantities were accepted or changed.
             * @example Sitting on shelf but was damaged
             */
            readonly reviewComment?: string | null;
            /** @description Employee responsible for counting the inventory for this line item. */
            countedBy?: {
                /**
                 * @description Unique key for the employee.
                 * @example 21
                 */
                key?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/21
                 */
                readonly href?: string;
                /**
                 * @description ID of the employee.
                 * @example EA00202
                 */
                id?: string;
            };
            /** @description Inventory adjustment document line automatically created by the system when the cycle count is reconciled. */
            readonly inventoryDocumentLine?: {
                /**
                 * @description URL endpoint for the inventory document line.
                 * @example /objects/inventory-control/document-line/32
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the document line.
                 * @example 32
                 */
                key?: string | null;
                /**
                 * @description ID of the document line.
                 * @example 32
                 */
                id?: string | null;
            };
            /** @description Inventory adjustment document automatically created by the system when the cycle count is reconciled. */
            readonly inventoryDocument?: {
                /**
                 * @description URL endpoint for the inventory document.
                 * @example /objects/inventory-control/document/24
                 */
                readonly href?: string;
                /**
                 * @description ID of the inventory document.
                 * @example SYS-CC Adjustment Increase-ADJ-ICCC-0000002
                 */
                readonly id?: string | null;
                /**
                 * @description Unique key for the inventory document.
                 * @example 24
                 */
                readonly key?: string | null;
            };
            item?: {
                /**
                 * @description Unique key for the item.
                 * @example 33
                 */
                key?: string;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/33
                 */
                readonly href?: string;
                /**
                 * @description ID of the item.
                 * @example IT0034
                 */
                id?: string;
                /**
                 * @description Name of the item.
                 * @example LAPTOP SET 14INC
                 */
                readonly name?: string;
                /**
                 * @description Cost method for the item. The method is assigned by the system when the item is provided.
                 * @example FIFO
                 * @enum {string|null}
                 */
                readonly costMethod?: null | "standard" | "average" | "FIFO" | "LIFO";
            };
            /** @description Unit of measure for the item. The unit of measure is assigned by the system when the item is provided. */
            readonly unitOfMeasure?: {
                /**
                 * @description ID for the unit of measure.
                 * @example Each
                 */
                id?: string;
                /**
                 * @description Unique key for the unit of measure.
                 * @example 25
                 */
                key?: string;
                /**
                 * @description URL endpoint for the unit of measure.
                 * @example /objects/inventory-control/unit-of-measure/25
                 */
                readonly href?: string;
            };
            /** @description If the item is tracked, provide the tracking (bin, aisle, zone, row) information. */
            tracking?: {
                /** @description Aisle where the item is located. */
                aisle?: {
                    /**
                     * @description URL endpoint for the aisle.
                     * @example /objects/inventory-control/aisle/33
                     */
                    readonly href?: string;
                    /**
                     * @description ID of the aisle.
                     * @example AI32
                     */
                    id?: string | null;
                    /**
                     * @description Unique key for the aisle.
                     * @example 33
                     */
                    key?: string | null;
                };
                /** @description Bin where the item is located. */
                bin?: {
                    /**
                     * @description URL endpoint for the bin.
                     * @example /objects/inventory-control/bin/24
                     */
                    readonly href?: string;
                    /**
                     * @description ID of the bin.
                     * @example BIN002
                     */
                    id?: string | null;
                    /**
                     * @description Unique key for the bin.
                     * @example 24
                     */
                    key?: string | null;
                };
                /** @description Row where the item is located. */
                row?: {
                    /**
                     * @description Unique key for the row.
                     * @example 22
                     */
                    key?: string | null;
                    /**
                     * @description URL endpoint for the row.
                     * @example /objects/inventory-control/row/22
                     */
                    readonly href?: string;
                    /**
                     * @description ID of the row.
                     * @example R032
                     */
                    id?: string | null;
                };
                /** @description Zone where the item is located. */
                zone?: {
                    /**
                     * @description URL endpoint for the zone.
                     * @example /objects/inventory-control/zone/12
                     */
                    readonly href?: string;
                    /**
                     * @description ID of the zone.
                     * @example ZOO12
                     */
                    id?: string | null;
                    /**
                     * @description Unique key for the zone.
                     * @example 12
                     */
                    key?: string | null;
                };
                /**
                 * @description Serial number of the item.
                 * @example AAA2302
                 */
                serialNumber?: string | null;
                /**
                 * @description Lot number of the item.
                 * @example L0012
                 */
                lotNumber?: string | null;
                /**
                 * Format: date
                 * @description Expiration date of the item.
                 * @example 2027-08-29
                 */
                expirationDate?: string | null;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Header information for Inventory Control transactions, including opening balances and adjustments. */
        "objects.inventory-control.document": {
            /**
             * @description System-assigned unique key for the inventory document.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the inventory document. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description Unique ID for the inventory document.
             * @example Beginning Balance-ADJINC0001
             */
            readonly documentId?: string;
            /**
             * @description Document number; if the associated transaction definition does not have a numbering sequence configured, provide a number to identify the transaction.
             * @example ADJINC0001
             */
            documentNumber?: string;
            /**
             * @description The type of transaction document.
             * @example Beginning Balance
             */
            documentType?: string;
            /**
             * @description Indicates whether the document has been printed.
             * @default false
             * @example false
             */
            readonly isPrinted?: boolean;
            /**
             * Format: decimal-precision-2
             * @description Subtotal of the document in the base currency.
             * @example 51.00
             */
            readonly subTotal?: string;
            /**
             * Format: decimal-precision-2
             * @description The sum of values across all lines in the document.
             * @example 1.00
             */
            readonly total?: string;
            /**
             * Format: decimal-precision-2
             * @description Subtotal of the document in the transaction currency.
             * @example 51.00
             */
            readonly subtotalInTxnCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description Total in the transaction currency.
             * @example 1.00
             */
            readonly totalInTxnCurrency?: string;
            /**
             * @description Workflow status of the transaction.
             * @default draft
             * @example pending
             * @enum {string}
             */
            state?: "draft" | "pending" | "closed" | "inProgress" | "converted" | "partiallyConverted" | "convertedByLine" | "partiallyConvertedByLine" | "exception";
            /**
             * @description Reference number for the Inventory Control document.
             * @example INV-1002
             */
            referenceNumber?: string;
            /**
             * @description Text to appear on the printed document.
             * @example Transfer CA to AZ
             */
            memo?: string;
            /** @description Exchange rate details used to calculate the base amount. */
            exchangeRate?: {
                /**
                 * Format: date
                 * @description Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                 * @example 2021-01-23
                 */
                date?: string;
                /**
                 * Format: decimal-precision-4
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
            /**
             * Format: date
             * @description Date that the transaction occurred.
             * @example 2023-01-01
             */
            transactionDate?: string;
            /**
             * Format: date
             * @description Date that the document was last printed.
             * @example 2023-01-01
             */
            lastPrintedDate?: string | null;
            /**
             * @description Indicates whether the inventory document is an adjustment document.
             * @default false
             * @example false
             */
            isAdjustmentDocument?: boolean;
            /**
             * @description Indicates whether the system should automatically create an inventory adjustment increase for lines where the quantity on hand is insufficient to fulfill the issue. Requires the Adjust and Issue feature to be enabled and negative inventory to be permitted at the company or warehouse level. Only applicable to non-tracked (non-serial, non-lot, non-bin) supply items.
             *
             *     This field is write-only; to find documents created via Adjust and Issue, query for documents with `documentType` equal to `SYS-Supplies adj increase`.
             * @default false
             * @example false
             */
            adjustAndIssue?: boolean;
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
            /** @description Transaction definition for the inventory document. */
            txnDefinition?: {
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/inventory-control/txn-definition/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the transaction definition.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Name of the transaction definition.
                 * @example Beginning Balance
                 */
                id?: string;
                /**
                 * @description Document type of the transaction definition.
                 * @example Beginning Balance
                 */
                documentType?: string;
                /**
                 * @description Transaction definition template class.
                 * @example INVOICE
                 */
                readonly txnDefinitionTemplateClass?: string;
                /**
                 * @description For transactions that update inventory, indicates whether quantity, value, or both are updated.
                 * @example quantityAndValue
                 * @enum {string}
                 */
                updatesInventory?: "no" | "quantity" | "value" | "quantityAndValue";
                /**
                 * @description For transactions that update inventory, indicates whether it increases or decreases inventory.
                 * @example increase
                 * @enum {string}
                 */
                increaseOrDecreaseInventory?: "increase" | "decrease";
            };
            /** @description The source transaction from which the inventory document was created. */
            sourceDocument?: {
                /**
                 * @description Unique key for the source document.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description ID for the source document.
                 * @example Beginning Balance-Doc0001
                 */
                id?: string;
                /**
                 * @description URL endpoint for the source document.
                 * @example /objects/inventory-control/document/23
                 */
                readonly href?: string;
            };
            /** @description Supporting document for this inventory transaction. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description ID for the attachment.
                 * @example Beginning Balance attachment
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/23
                 */
                readonly href?: string;
            };
            /** @description The last user who printed this document. */
            printedBy?: {
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the user.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Name of the user.
                 * @example John Smith
                 */
                id?: string;
            };
            /** @description Warehouse associated with the inventory document. */
            warehouse?: {
                /**
                 * @description Unique key for the warehouse.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description ID for the warehouse.
                 * @example WH-0001
                 */
                id?: string;
                /**
                 * @description Geographical location of the warehouse.
                 * @example DF-WH-0001
                 */
                defaultWarehouse?: string;
                /**
                 * @description URL endpoint for the warehouse.
                 * @example /objects/inventory-control/warehouse/23
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the inventory document.
             * @example /objects/inventory-control/document/23
             */
            readonly href?: string;
            /** @description Record URL for the inventory document. */
            readonly webURL?: string;
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Date and time the inventory document was created.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            /** @description Lines of the inventory document. */
            lines?: components["schemas"]["objects.inventory-control.document-line"][];
            /** @description History lines for the inventory document. */
            history?: components["schemas"]["objects.inventory-control.document-history"][];
            /** @description Subtotal lines for the inventory document. */
            subtotals?: components["schemas"]["objects.inventory-control.document-subtotal"][];
            /** @description Information about the journal entries associated with this document. */
            readonly postingSummary?: {
                /**
                 * @description Unique key for the posting summary.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description ID for the posting summary.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description URL endpoint for the posting summary.
                 * @example /objects/inventory-control/posting-summary/23
                 */
                href?: string;
            };
            /** @description Journal entry associated with this inventory document. */
            readonly journalEntry?: {
                /**
                 * @description Unique key for the journal entry.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description ID for the journal entry.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/journal-entry/23
                 */
                href?: string;
            };
            status?: components["schemas"]["status"];
        };
        "inventory-control-documentRequiredProperties": {
            lines?: {
                /** @example { "item": { "id": "1" }, "warehouse": { "id": "1" }, "location" : { "id": "1" }} */
                dimensions?: unknown;
            }[];
        };
        /** @description Line information for Inventory transactions, including opening balances and adjustments. */
        "objects.inventory-control.document-line": {
            /**
             * @description System-assigned key for the line item.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the line item.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the  line item
             * @example /objects/inventory-control/document-line::Beginning%20Balance/23
             */
            readonly href?: string;
            /**
             * @description The type of transaction document.
             * @example Beginning Balance
             */
            readonly documentType?: string;
            /**
             * @description Text to appear on the printed document for the line item.
             * @example Starting quantity of fuel pumps
             */
            memo?: string;
            /**
             * @description Description of the line item.
             * @example High efficiency pump
             */
            lineDescription?: string;
            /** @description The unit of measure for the line item. */
            unitOfMeasure?: {
                /**
                 * @description System-assigned key for the unit of measure.
                 * @example 38
                 */
                key?: string;
                /**
                 * @description Unique identifier for the unit of measure.
                 * @example Each
                 */
                id?: string;
                /**
                 * @description Endpoint URL for the unit of measure.
                 * @example /objects/inventory-control/unit-of-measure/38
                 */
                readonly href?: string;
            };
            /**
             * Format: decimal-precision-10
             * @description Unit quantity associated with the line item.
             * @example 100
             */
            unitQuantity?: string;
            /**
             * Format: decimal-precision-10
             * @description Base unit quantity associated with the line item.
             * @example 100
             */
            readonly quantity?: string;
            /**
             * Format: decimal-precision-10
             * @description Quantity of the item converted to a downstream document from the original quantity entered.
             * @example 5
             */
            readonly quantityConverted?: string;
            /**
             * Format: decimal-precision-10
             * @description Quantity remaining after a partial conversion of this transaction.
             * @example 5
             */
            readonly quantityRemaining?: string;
            /**
             * Format: decimal-precision-10
             * @description The cost per base unit for the line item.
             * @example 1.00
             */
            readonly cost?: string;
            /**
             * Format: decimal-precision-10
             * @description Unit cost associated with the line item.
             * @example 1.00
             */
            unitCost?: string;
            /**
             * Format: decimal-precision-10
             * @description Extended total cost for the line item.
             * @example 1.00
             */
            extendedCost?: string;
            /**
             * Format: decimal-precision-10
             * @description Total cost for the line item.
             * @example 1.0000000000
             */
            readonly totalCost?: string;
            /**
             * @description Line number of the document line.
             * @example 15
             */
            readonly lineNumber?: number;
            /**
             * @description Cost method associated with the line item.
             * @default null
             * @example standard
             * @enum {string|null}
             */
            readonly costMethod?: null | "average" | "standard" | "FIFO" | "LIFO";
            /**
             * @description Currency used for the line item transaction.
             * @example USD
             */
            txnCurrency?: string;
            /**
             * @description Base currency for the line item transaction.
             * @example USD
             */
            baseCurrency?: string;
            /**
             * @description Transaction conversion type for the line item.
             * @default quantity
             * @example quantity
             * @enum {string}
             */
            conversionType?: "quantity" | "price";
            /**
             * Format: decimal-precision-10
             * @description Sum of the price conversions for this line item.
             * @example 100.00
             */
            readonly convertedPrice?: string;
            /** @description List of warehouse inventory details including serial number, aisle, bin, and row for the line item. */
            trackingDetail?: components["schemas"]["objects.inventory-control.document-line-detail"][];
            /** @description List of supplies requisition details for the document line. */
            suppliesDetail?: components["schemas"]["objects.inventory-control.document-line-supplies-detail"][];
            /** @description Header level details for the document's line items. */
            documentHeader?: {
                /**
                 * @description URL endpoint for the inventory document.
                 * @example /objects/inventory-control/document::Beginning%20Balance/23
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the inventory document
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique ID for the inventory document.
                 * @example Beginning Balance-ADJINC0001
                 */
                id?: string;
                /**
                 * @description Document number of the inventory document.
                 * @example ADJINC0001
                 */
                documentNumber?: string;
                /**
                 * @description Type of transaction document.
                 * @example Beginning Balance
                 */
                readonly documentType?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the line item.
                 */
                location?: {
                    /**
                     * @description System-assigned key for the location.
                     * @example 22
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the location.
                     * @example LOC-22
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/23
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Department associated with the line item.
                 */
                department?: {
                    /**
                     * @description System-assigned key for the department.
                     * @example 9
                     */
                    readonly key?: string;
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
                 * @description Warehouse associated with the line item.
                 */
                warehouse?: {
                    /**
                     * @description System-assigned key for the warehouse.
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
                 * @description Project associated with the line item.
                 */
                project?: {
                    /**
                     * @description System-assigned key for the project.
                     * @example 2
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the project.
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
                 * @description Task associated with the document line item.
                 */
                task?: {
                    /**
                     * @description Unique ID for the task.
                     * @example TSK01
                     */
                    id?: string;
                    /**
                     * @description System-assigned key for the task.
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
            /** @description Source document from which the document line item was created. */
            sourceDocument?: {
                /**
                 * @description URL endpoint for the source document.
                 * @example /objects/inventory-control/document::Beginning%20Balance/23
                 */
                readonly href?: string;
                /**
                 * @description Unique ID for the source document.
                 * @example BB-193
                 */
                id?: string;
                /**
                 * @description Transaction type of the source document.
                 * @example Beginning Balance
                 */
                readonly documentType?: string;
                /**
                 * @description System assigned key for the source document.
                 * @example 23
                 */
                key?: string;
            };
            /** @description Source document line */
            sourceDocumentLine?: {
                /**
                 * @description URL endpoint for the source document line.
                 * @example /objects/inventory-control/document-line::Beginning%20Balance/23
                 */
                readonly href?: string;
                /**
                 * @description Unique ID for the source document line.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description System assigned key for the source document line.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Transaction type of the source document line.
                 * @example Beginning Balance
                 */
                readonly documentType?: string;
            };
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            status?: components["schemas"]["status"];
        };
        /** @description Warehouse inventory tracking detail for a document line, including serial number, lot number, aisle, bin, and row information for the item. */
        "objects.inventory-control.document-line-detail": {
            /**
             * @description System-assigned unique key for the document line detail.
             * @example 55
             */
            readonly key?: string;
            /**
             * @description Unique ID for the document line detail. This value is the same as the `key` for this object.
             * @example 55
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the document line detail.
             * @example /objects/inventory-control/document-line-detail/55
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-10
             * @description Quantity in base units for the combination of tracking attributes specified in the line detail.
             * @example 10.0000000000
             */
            quantity?: string;
            /**
             * @description Serial number of the item.
             * @example S1001
             */
            serialNumber?: string;
            /**
             * @description Lot number of the item.
             * @example L1001
             */
            lotNumber?: string;
            /**
             * Format: date
             * @description Expiration date of the item.
             * @example 2025-04-04
             */
            expirationDate?: string | null;
            /** @description Aisle associated with the line detail. */
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
                 * @description ID for the aisle.
                 * @example AISLE1
                 */
                id?: string;
            };
            /** @description Bin associated with the line detail. */
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
                 * @description ID for the bin.
                 * @example BIN1
                 */
                id?: string;
            };
            /** @description Row associated with the line detail. */
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
                 * @description ID for the row.
                 * @example ROW1
                 */
                id?: string;
            };
            /** @description Item associated with the line detail. */
            item?: {
                /**
                 * @description Unique key for the item.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description ID for the item.
                 * @example Battery
                 */
                id?: string;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/10
                 */
                readonly href?: string;
            };
            /** @description Component item associated with the line detail. */
            componentItem?: {
                /**
                 * @description Unique key for the component item.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description ID for the component item.
                 * @example Battery
                 */
                id?: string;
                /**
                 * @description URL endpoint for the component item.
                 * @example /objects/inventory-control/item/10
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
            /** @description Inventory document line that the detail is associated with. */
            readonly inventoryDocumentLine?: {
                /**
                 * @description Unique key for the inventory document line.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description ID for the inventory document line.
                 * @example 23
                 */
                readonly id?: string;
                /**
                 * @description Inventory document line type.
                 * @example Beginning Balance
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the inventory document line.
                 * @example /objects/inventory-control/document-line::Beginning%20Balance/23
                 */
                readonly href?: string;
            };
        };
        /** @description Supplies detail for an inventory document line, recording the action type, quantity, and links to the associated supplies requisition document. */
        "objects.inventory-control.document-line-supplies-detail": {
            /**
             * @description System-assigned unique key for the document line supplies detail.
             * @example 101
             */
            readonly key?: string;
            /**
             * @description Unique ID for the document line supplies detail. This value is the same as the `key` for this object.
             * @example 101
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the document line supplies detail.
             * @example /objects/inventory-control/document-line-supplies-detail/101
             */
            readonly href?: string;
            /**
             * @description State of the supplies action for the inventory document line. For `issue` state, the `quantity` specified is issued from inventory against the supplies requisition. For `adjustment` state, an inventory adjustment increase was created to cover a quantity shortfall during an Adjust and Issue operation.
             * @example issue
             * @enum {string}
             */
            state?: "issue" | "issuePrinted" | "transfer" | "inTransit" | "return" | "acknowledged" | "poLinked" | "directShip" | "poReserved" | "adjustment";
            /**
             * Format: decimal-precision-10
             * @description Quantity processed for the supplies requisition.
             * @example 10.0000000000
             */
            quantity?: string;
            /**
             * Format: date
             * @description Date the supplies action was taken.
             * @example 2026-06-01
             */
            readonly date?: string;
            audit?: components["schemas"]["audit.s1"];
            /** @description Inventory document line associated with the supplies detail. */
            inventoryDocumentLine?: {
                /**
                 * @description Unique key for the inventory document line.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description ID for the inventory document line.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description URL endpoint for the inventory document line.
                 * @example /objects/inventory-control/document-line/23
                 */
                readonly href?: string;
            };
            /** @description Supplies requisition document associated with the supplies detail. */
            suppliesRequisitionDocument?: {
                /**
                 * @description Unique key for the supplies document.
                 * @example 88
                 */
                key?: string;
                /**
                 * @description ID for the supplies document.
                 * @example 88
                 */
                id?: string;
                /**
                 * @description URL endpoint for the supplies document.
                 * @example /objects/inventory-control/supplies-document/88
                 */
                readonly href?: string;
            };
        };
        /** @description History of workflow conversions associated with the inventory transaction. */
        "objects.inventory-control.document-history": {
            /**
             * @description System-assigned unique key for the inventory document history.
             * @example 11
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the inventory document history. This value is the same as the key for this object.
             * @example 11
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the inventory document history.
             * @example /objects/inventory-control/document-history/11
             */
            readonly href?: string;
            /** @description When an inventory document is the result of a conversion, specifies the transaction from which the document was converted. */
            readonly convertedFrom?: {
                /**
                 * @description Unique key for the document.
                 * @example 22
                 */
                readonly key?: string;
                /**
                 * @description ID for the document.
                 * @example SYS-Warehouse Transfer Out-WHXFER-000028-doc-Out
                 */
                readonly id?: string;
                /**
                 * @description Document type.
                 * @example SYS-Warehouse Transfer Out
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the document.
                 * @example /objects/inventory-control/document::SYS-Warehouse%20Transfer%20Out/22
                 */
                readonly href?: string;
            };
            /** @description When an inventory document is the result of a conversion, specifies the transaction to which the document was converted. */
            readonly convertedTo?: {
                /**
                 * @description Unique key for the document.
                 * @example 14
                 */
                readonly key?: string;
                /**
                 * @description ID for the document.
                 * @example SYS-Warehouse Transfer In-WHXFER-000028-doc-In
                 */
                readonly id?: string;
                /**
                 * @description Document type.
                 * @example SYS-Warehouse Transfer In
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the document.
                 * @example /objects/inventory-control/document::SYS-Warehouse%20Transfer%20In/14
                 */
                readonly href?: string;
            };
            /** @description The inventory document with which the history information is associated. */
            readonly inventoryDocument?: {
                /**
                 * @description Unique key for the document.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the document.
                 * @example 23
                 */
                readonly id?: string;
                /**
                 * @description Document type.
                 * @example SYS-Warehouse Transfer Out
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the document.
                 * @example /objects/inventory-control/document::SYS-Warehouse%20Transfer%20Out/23
                 */
                readonly href?: string;
            };
        };
        /** @description Details of subtotals, taxes, discounts, charges and more for an inventory transaction. */
        "objects.inventory-control.document-subtotal": {
            /**
             * @description System-assigned key for the inventory document subtotal.
             * @example 31
             */
            readonly key?: string;
            /**
             * @description ID for the inventory document subtotal. This value is the same as the key for this object.
             * @example 31
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the inventory document subtotal.
             * @example /objects/inventory-control/document-subtotal/31
             */
            readonly href?: string;
            /**
             * @description Description of the document subtotal.
             * @example Freight
             */
            description?: string;
            /**
             * Format: decimal-precision-10
             * @description Percentage value that is calculated on the total of all line items of the document.
             * @example 5.0000000000
             */
            percentValue?: string;
            /**
             * Format: decimal-precision-2
             * @description Non-negative base amount calculated across all other lines of the document.
             * @example 1.20
             */
            absoluteValue?: string;
            /**
             * Format: decimal-precision-2
             * @description Non-negative transaction amount calculated across all other lines of the document.
             * @example 1.20
             */
            readonly txnAbsoluteValue?: string;
            /**
             * @description Specifies whether the `absoluteValue` is editable.
             * @default false
             * @example false
             */
            readonly isValueEditable?: boolean;
            /**
             * @description Specifies whether the `percentValue` is editable.
             * @default false
             * @example false
             */
            readonly isPercentEditable?: boolean;
            /**
             * Format: decimal-precision-14
             * @description The computed base amount for the subtotal.
             * @example 1.20000000000000
             */
            readonly total?: string;
            /**
             * Format: decimal-precision-14
             * @description The computed transaction amount for the subtotal.
             * @example 1.20000000000000
             */
            readonly txnTotal?: string;
            /** @description The inventory document line associated with the subtotal. */
            readonly documentLine?: {
                /**
                 * @description URL endpoint for the document line.
                 * @example /objects/inventory-control/document-line::Inventory%20Receipt/62991
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the document line.
                 * @example 62991
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the document line.
                 * @example 62991
                 */
                readonly id?: string;
                /**
                 * @description Specifies the type of the inventory document line.
                 * @example Inventory Receipt
                 */
                readonly documentType?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the subtotal.
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
                 * @description Department associated with the subtotal.
                 */
                department?: {
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
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
            };
            /** @description Header lever details for the inventory document subtotal. */
            readonly documentHeader?: {
                /**
                 * @description URL endpoint for the inventory document.
                 * @example /objects/inventory-control/document::Inventory%20Receipt/7808
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the inventory document.
                 * @example 7808
                 */
                readonly key?: string;
                /**
                 * @description Type of the inventory document.
                 * @example Inventory Receipt
                 */
                readonly documentType?: string;
                /**
                 * @description ID for inventory document.
                 * @example Inventory Receipt-IR-000253
                 */
                readonly id?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description A supplies document contains purchasing requisition line items that are enabled for the supplies workbench. */
        "objects.inventory-control.supplies-document": {
            /**
             * @description System-assigned unique key for the supplies document.
             * @example 88
             */
            readonly key?: string;
            /**
             * @description Unique ID for the supplies document. This value is the same as the `key` for this object.
             * @example 88
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the supplies document.
             * @example /objects/inventory-control/supplies-document/88
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Date the supplies document line was created.
             * @example 2026-01-23
             */
            readonly requestDate?: string;
            /**
             * Format: decimal-precision-10
             * @description Unit price associated with the supplies document line item.
             * @example 10.5000000000
             */
            unitPrice?: string;
            /** @description Header level details for the purchasing requisition document. */
            documentHeader?: {
                /**
                 * @description Unique key for the purchasing requisition document.
                 * @example 55
                 */
                key?: string;
                /**
                 * @description ID for the purchasing requisition document.
                 * @example SYS-Supplies requisition-supplies_monitor
                 */
                id?: string;
                /**
                 * @description Type of the purchasing requisition document.
                 * @example SYS-Supplies requisition
                 */
                readonly documentType?: string;
                /**
                 * @description URL endpoint for the purchasing requisition document.
                 * @example /objects/purchasing/document::SYS-Supplies%20requisition/55
                 */
                readonly href?: string;
            };
            /**
             * @description Line number of the item within the purchasing requisition document.
             * @example 1
             */
            readonly lineNumber?: number;
            /**
             * @description Memo about the purchasing requisition document line item.
             * @example Payment ACH
             */
            memo?: string;
            /**
             * @description Unit of measure for the purchasing requisition document line item.
             * @example Each
             */
            unit?: string;
            /**
             * Format: decimal-precision-10
             * @description Quantity requested for the purchasing requisition document line item.
             * @example 10.0000000000
             */
            readonly quantityRequested?: string;
            /**
             * Format: decimal-precision-10
             * @description Unit quantity for the purchasing requisition document line item.
             * @example 10.0000000000
             */
            unitQuantity?: string;
            /**
             * @description For processed line items, indicates how the item was sourced. Blank if the item has not yet been sourced.
             * @example issued
             * @enum {string|null}
             */
            source?: null | "receiptAcknowledged" | "issued" | "printedPicklist" | "inTransit" | "purchase" | "directShip" | "returned" | "warehouseTransfer" | "adjustedAndIssued";
            /**
             * Format: decimal-precision-10
             * @description Quantity associated with the supplies purchasing requisition that is sourced.
             * @example 10.0000000000
             */
            sourcedQuantity?: string | null;
            /**
             * Format: decimal-precision-10
             * @description Price computed based on the unit factor.
             * @example 33.6600000000
             */
            readonly price?: string;
            /**
             * @description Status of the supplies requisition line item.
             * @example needsAcknowledgement
             * @enum {string}
             */
            lineStatus?: "needVendor" | "needShipVia" | "needDeliverTo" | "needAnItem" | "needPrice" | "needAnEmployee" | "needWarehouse" | "issued" | "needsAcknowledgement" | "waitingForPO" | "newRequest" | "notReady" | "approved" | "converted" | "inTransit" | "multiple" | "available" | "printed" | "completed" | "canceled";
            /**
             * Format: decimal-precision-10
             * @description Quantity of items converted to a downstream supplies purchasing requisition document from the original quantity entered.
             * @example 5.1000000000
             */
            readonly quantityConverted?: string;
            /**
             * Format: decimal-precision-10
             * @description Suggested price for the item.
             * @example 10.4400000000
             */
            readonly retailPrice?: string;
            /**
             * Format: decimal-precision-10
             * @description For purchasing requisitions converted from another purchasing document, the price from the originating document.
             * @example 200.0000000000
             */
            readonly priceConverted?: string;
            /**
             * Format: decimal-precision-14
             * @description Tolerance limit allowed for the quantity to vary from the parent purchasing requisition document.
             * @example 10.00000000000000
             */
            readonly quantityToleranceVariance?: string;
            /**
             * Format: decimal-precision-14
             * @description Tolerance limit allowed for the price to vary from the parent purchasing requisition document.
             * @example 22.10000000000000
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
            /**
             * @description Base currency for the purchasing requisition document.
             * @example USD
             */
            readonly baseCurrency?: string;
            /**
             * @description Transaction currency used for the purchasing requisition document.
             * @example CAD
             */
            readonly txnCurrency?: string;
            /**
             * Format: decimal-precision-10
             * @description Price of the line item in the transaction currency.
             * @example 10.0000000000
             */
            readonly priceInTxnCurrency?: string;
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
             * Format: decimal-precision-2
             * @description Tax rate for the document line item.
             * @example 10.05
             */
            taxRate?: string;
            /**
             * Format: decimal-precision-2
             * @description Tax amount for the line in the base currency.
             * @example 10.50
             */
            readonly taxInBaseCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description Tax amount for the line in the transaction currency.
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
             * @example 10.1000000000
             */
            readonly quantityRemaining?: string;
            /**
             * Format: decimal-precision-10
             * @description Quantity of the item issued for the supplies requisition.
             * @example 10.1000000000
             */
            readonly quantityIssued?: string;
            /**
             * @description Conversion type used for the converted purchasing document.
             * @default quantity
             * @example quantity
             * @enum {string}
             */
            conversionType?: "quantity" | "price";
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the purchasing requisition line item.
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
                     * @description Location name.
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
                 * @description Department associated with the purchasing requisition line item.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 9
                     */
                    readonly key?: string;
                    /**
                     * @description ID for the department.
                     * @example Sales
                     */
                    id?: string;
                    /**
                     * @description Department name.
                     * @example Sales and Marketing
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
                /**
                 * warehouse
                 * @description Warehouse associated with the purchasing requisition line item.
                 */
                warehouse?: {
                    /**
                     * @description Unique key for the warehouse.
                     * @example 6
                     */
                    key?: string;
                    /**
                     * @description ID for the warehouse.
                     * @example WH01
                     */
                    id?: string;
                    /**
                     * @description Warehouse name.
                     * @example WH01
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the warehouse.
                     * @example /objects/inventory-control/warehouse/6
                     */
                    readonly href?: string;
                };
                /**
                 * project
                 * @description Project associated with the purchasing requisition line item.
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
                     * @description Project name.
                     * @example Talcomp training
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the project.
                     * @example /objects/projects/project/2
                     */
                    readonly href?: string;
                };
                /**
                 * task
                 * @description Task associated with the purchasing requisition line item.
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
                     * @description Task name.
                     * @example Project Task
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the task.
                     * @example /objects/projects/task/1
                     */
                    readonly href?: string;
                };
                /**
                 * vendor
                 * @description Vendor associated with the purchasing requisition line item.
                 */
                vendor?: {
                    /**
                     * @description Unique key for the vendor.
                     * @example 357
                     */
                    key?: string | null;
                    /**
                     * @description ID for the vendor.
                     * @example 1605212096809
                     */
                    id?: string | null;
                    /**
                     * @description Vendor name.
                     * @example GenLab
                     */
                    readonly name?: string | null;
                    /**
                     * @description URL endpoint for the vendor.
                     * @example /objects/accounts-payable/vendor/357
                     */
                    readonly href?: string;
                };
            };
            /**
             * Format: date
             * @description Date the employee requests the goods to arrive. Defaults to the due date on the purchasing requisition.
             * @example 2026-04-04
             */
            requestedDeliveryDate?: string;
            /** @description Deliver-to contact for the purchasing requisition. */
            deliverToContact?: {
                /**
                 * @description Unique key for the contact.
                 * @example 708
                 */
                key?: string;
                /**
                 * @description Name of the deliver-to contact.
                 * @example John Smith
                 */
                id?: string;
                /**
                 * @description URL endpoint for the deliver-to contact.
                 * @example /objects/company-config/contact/708
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Date by which the goods should be shipped to arrive when the employee needs them.
             * @example 2026-04-04
             */
            deliverByDate?: string;
            /**
             * Format: date
             * @description Date after which the purchasing requisition can be canceled.
             * @example 2026-04-04
             */
            cancelAfterDate?: string;
            /**
             * Format: date
             * @description Date before which the goods must not be shipped.
             * @example 2026-04-04
             */
            doNotShipBeforeDate?: string;
            /**
             * Format: date
             * @description Date after which the goods must not be shipped.
             * @example 2026-04-04
             */
            doNotShipAfterDate?: string;
            /**
             * Format: date
             * @description Date the vendor has promised to deliver the goods.
             * @example 2026-04-04
             */
            deliveryDueDate?: string;
            /**
             * Format: date
             * @description Confirmation date for the order.
             * @example 2026-04-04
             */
            orderConfirmationDate?: string;
            /** @description Transaction allocation template that distributes the line amount across specified dimensions. */
            allocation?: {
                /**
                 * @description Unique key for the allocation template.
                 * @example 14
                 */
                key?: string | null;
                /**
                 * @description ID for the allocation template.
                 * @example Alloc1-WBS-US
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the allocation template.
                 * @example /objects/general-ledger/txn-allocation-template/14
                 */
                readonly href?: string;
            };
            /** @description Shipping method for delivery from the purchasing requisition line. */
            deliveryMethod?: {
                /**
                 * @description URL endpoint for the shipping method.
                 * @example /objects/shipmethod/11
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
            /** @description Supplies requisition details for the supplies document. */
            suppliesDetail?: components["schemas"]["objects.inventory-control.supplies-document-detail"][];
        };
        /** @description Link record connecting a supplies requisition document to inventory document lines, recording the quantity and state for each supply action. */
        "objects.inventory-control.supplies-document-detail": {
            /**
             * @description System-assigned unique key for the supplies document detail.
             * @example 101
             */
            readonly key?: string;
            /**
             * @description Unique ID for the supplies document detail. This value is the same as the `key` for this object.
             * @example 101
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the supplies document detail.
             * @example /objects/inventory-control/supplies-document-detail/101
             */
            readonly href?: string;
            /**
             * @description State of the supplies action for the inventory document line. For `issue` state, the `quantity` specified is issued from inventory against the supplies requisition. For `adjustment` state, an inventory adjustment increase was created to cover a quantity shortfall during an Adjust and Issue operation.
             * @example issue
             * @enum {string}
             */
            state?: "issue" | "issuePrinted" | "transfer" | "inTransit" | "return" | "acknowledged" | "poLinked" | "directShip" | "poReserved" | "adjustment";
            /**
             * Format: decimal-precision-10
             * @description Quantity processed for the supplies document.
             * @example 10.0000000000
             */
            quantity?: string;
            /**
             * Format: date
             * @description Date of the supplies action taken.
             * @example 2025-06-01
             */
            readonly date?: string;
            audit?: components["schemas"]["audit.s1"];
            /** @description Inventory document line associated with this supplies document detail. */
            inventoryDocumentLine?: {
                /**
                 * @description Unique key for the inventory document line.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description ID for the inventory document line.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description URL endpoint for the inventory document line.
                 * @example /objects/inventory-control/document::SYS-Supplies%20issue/23
                 */
                readonly href?: string;
            };
            /** @description Supplies requisition document associated with this supplies document detail. */
            suppliesRequisitionDocument?: {
                /**
                 * @description Unique key for the supplies document.
                 * @example 88
                 */
                key?: string;
                /**
                 * @description ID for the supplies document.
                 * @example 88
                 */
                id?: string;
                /**
                 * @description URL endpoint for the supplies document.
                 * @example /objects/inventory-control/supplies-document/88
                 */
                readonly href?: string;
            };
        };
        /** @description Items are goods, services, or kits that you purchase from vendors or sell to customers. */
        "objects.inventory-control.item": {
            /**
             * @description System-assigned key for the item.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the item.
             * @example 23
             */
            id?: string;
            /**
             * @description Unique name for the item.
             * @example Dell Laptop 13inch
             */
            name?: string;
            status?: components["schemas"]["status"];
            /**
             * @description The type for the item. Item type determines where the item will be available.
             * @default inventory
             * @example inventory
             * @enum {string}
             */
            itemType?: "inventory" | "nonInventory" | "purchaseOnlyNonInventory" | "salesOnlyNonInventory" | "kit" | "stockableKit";
            /**
             * @description Set this field to true if you want to enable fulfillment for non inventory item.
             * @default false
             * @example true
             */
            enableFulfillment?: boolean;
            /**
             * @description Whether to include the item in the Software Digital Board Book calculations of monthly recurring revenue.
             *     Changing an item's MRR field only affects new transactions or contract lines going forward. It will not affect existing transactions or contract lines.
             *     The best practice is to not change an item's MRR setting once the item has been used in a transaction.
             *     If you need to change your item's MRR configuration after implementing Digital Board Book (DBB), contact your Sage Intacct account manager for more information.
             *     This field is only applicable if your company subscribes to the Software Digital Board Book.
             * @default false
             * @example true
             */
            isItemEnabledForMRR?: boolean;
            /** @description Provide product line to which this item belongs. */
            productLine?: {
                /**
                 * @description Record number of product line
                 * @example 59
                 */
                key?: string;
                /**
                 * @description ID of the product line to which the item belongs.
                 * @example 1233
                 */
                id?: string;
                /**
                 * @description URL for this product line.
                 * @example /objects/product-linel/59
                 */
                readonly href?: string;
            };
            /**
             * @description Set the accounting method to use to determine the cost of inventory.
             *     This field applies only if Inventory Control is configured to enable multiple cost methods and the item type is Inventory.
             *     After you create an item, you cannot change its cost method.
             * @default standard
             * @example standard
             * @enum {string|null}
             */
            costMethod?: null | "standard" | "average" | "FIFO" | "LIFO";
            /**
             * @description Provide a detailed description of the item. This is most useful if you have many items that have only slight variations.
             *     The description is used as the default Item description when the item is entered in Order Entry, Purchasing, and Inventory Control transactions.
             * @example 13 inch dell laptop
             */
            extendedDescription?: string;
            /**
             * @description Use this field to provide a purchase transaction description that was used in a legacy accounting system during implementation or to provide additional item details for internal reporting.
             *     This description does not appear in any transactions and does not print on any documents.
             * @example 13 inch dell laptop
             */
            poDescription?: string;
            /**
             * @description Use this field to provide a sales transaction description that was used in a legacy accounting system during implementation or to provide additional item details for internal reporting.
             *     This description does not appear in any transactions and does not print on any documents.
             * @example 13 inch dell laptop
             */
            soDescription?: string;
            /** @description Unit of measure group for the item. */
            unitOfMeasureGroup?: {
                /**
                 * @description System-assigned key for the unit of measure group.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Unique identifier for the unit of measure group.
                 * @example 10
                 */
                id?: string;
                /**
                 * @description URL for the unit of measure group.
                 * @example /objects/inventory-control/unit-of-measure-group/10
                 */
                readonly href?: string;
            };
            /**
             * @description Notes or detailed information not captured elsewhere.
             * @example Dell 13 inch laptop
             */
            notes?: string;
            /**
             * Format: date
             * @description Date last sold
             * @example 2014-01-08
             */
            readonly dateLastSold?: string;
            /**
             * Format: date
             * @description Date last received
             * @example 2014-01-08
             */
            readonly dateLastReceived?: string;
            /**
             * @description Set it to true to make the item available for supply requests and supplies inventory. Null is considered false.
             * @default false
             * @example true
             */
            isSuppliesItem?: boolean | null;
            /**
             * @description The item total for the quantity on order. Item totals are combined for all warehouses and automatically displayed based on transaction entries.
             * @example 10
             */
            readonly quantityOnOrder?: string;
            /**
             * @description The item total in warehouse transfers that are in transit. Item totals are combined for all warehouses and automatically displayed based on transaction entries. In addition, you can view totals per warehouse. This field applies only if in-transit warehouse transfers is enabled.
             * @example 2
             */
            readonly quantityInTransit?: string;
            /**
             * @description The item total for quantity on hand. Item totals are combined for all warehouses and automatically displayed based on transaction entries. In addition, you can view totals per warehouse.
             * @example 3
             */
            readonly quantityOnHand?: string;
            /**
             * @description The item total for the quantity on hold. Item totals are combined for all warehouses and automatically displayed based on transaction entries. In addition, you can view totals per warehouse.
             * @example 3
             */
            readonly quantityOnHold?: string;
            /**
             * @description The item total for the quantity reserved. Item totals are combined for all warehouses and automatically displayed based on transaction entries. In addition, you can view totals per warehouse.
             * @example 3
             */
            readonly quantityReserved?: string;
            /**
             * @description The item total for the quantity allocated. Item totals are combined for all warehouses and automatically displayed based on transaction entries. In addition, you can view totals per warehouse.
             * @example 3
             */
            readonly quantityAllocated?: string;
            /**
             * @description The item total for the quantity uncommitted. Item totals are combined for all warehouses and automatically displayed based on transaction entries. In addition, you can view totals per warehouse.
             * @example 3
             */
            readonly quantityUncommitted?: string;
            inventory?: {
                /**
                 * @description Total shipping weight for the item.
                 * @example 1233
                 */
                shippingWeight?: number;
                /**
                 * @description Set to true if using a third-party label scanner to print barcode labels when processing the item in purchasing transactions.
                 *     When set to true, this field triggers label printing for the received quantity. This field is used with scanner integrations and has no functionality within Sage Intacct.
                 *     This field applies to inventory items and stockable kits only if the Integrated scanner product in use option is enabled during inventory control configuration.
                 * @default false
                 * @example false
                 */
                autoPrintLabel?: boolean;
                /**
                 * glGroup
                 * @description The GL group to which the item belongs.
                 */
                glGroup?: {
                    /**
                     * @description Unique identifier for the GL group.
                     * @example 1501.0
                     */
                    id?: string;
                    /**
                     * @description System-assigned key for the GL group.
                     * @example 10
                     */
                    key?: string;
                    /**
                     * @description Default revenue recognition template ID.
                     * @example 1232
                     */
                    defaultRevenueRecognitionTemplate?: string;
                    /**
                     * @description Revenue GL account number.
                     * @example 12322
                     */
                    incomeGLAccount?: string;
                    /**
                     * @description Inventory GL account number
                     * @example 12322
                     */
                    inventoryGLAccount?: string;
                    /**
                     * @description Expense GL account number
                     * @example 12322
                     */
                    expenseGLAccount?: string;
                    /**
                     * @description COGS GL account number
                     * @example 12322
                     */
                    cogsGLAccount?: string;
                    /**
                     * @description AR GL account number
                     * @example 12322
                     */
                    arGLAccountNumber?: string;
                    /**
                     * @description AP GL account number
                     * @example 12322
                     */
                    apGLAccountNumber?: string;
                    /**
                     * @description Deferred revenue GL account number
                     * @example 12322
                     */
                    deferredRevenueGLAccountNumber?: string;
                    /**
                     * @description URL for this item GL Group.
                     * @example /objects/inventory-control/item-gl-group/10
                     */
                    readonly href?: string;
                };
            };
            /**
             * @description Fair value category.
             * @default null
             * @example software
             * @enum {string|null}
             */
            vsoeCategory?: null | "productSpecified" | "software" | "productUnspecified" | "upgradeUnspecified" | "upgradeSpecified" | "services" | "postContractSupport";
            /**
             * @description VSOE default delivery status.
             * @default delivered
             * @example delivered
             * @enum {string|null}
             */
            vsoeDefaultDeliveryStatus?: null | "delivered" | "undelivered";
            /**
             * @description VSOE default deferral status.
             * @default deferUntilItemIsDelivered
             * @example deferUntilItemIsDelivered
             * @enum {string|null}
             */
            vsoeDefaultDeferralStatus?: null | "deferUntilItemIsDelivered" | "deferBundleUntilItemIsDelivered";
            /**
             * @description Substitute item ID
             * @example Dell Laptop 14inch
             */
            substituteItemId?: string;
            /** @description Provide information about if item is tracked by serial, lot, bin, expiration date, or any combination of those. */
            tracking?: {
                /**
                 * @description Serial tracking enabled. Applicable to inventory or stockable kit item types.
                 * @default false
                 * @example false
                 */
                enableSerialNo?: boolean;
                /**
                 * @description Serial number mask to enforce a specific format. Applicable to inventory or stockable kit item types.
                 * @example XXAS
                 */
                serialMask?: string;
                /**
                 * @description Lot tracking enabled. Applicable to inventory or stockable kit item types.
                 * @default false
                 * @example false
                 */
                enableLotCategory?: boolean;
                /**
                 * @description Lot category. Applicable to inventory or stockable kit item types.
                 * @example Kitchen
                 */
                lotCategory?: string;
                /**
                 * @description Bin tracking enabled. Applicable to inventory or stockable kit item types.
                 * @default false
                 * @example false
                 */
                enableBins?: boolean;
                /**
                 * @description Expiration tracking enabled. Applicable to inventory or stockable kit item types.
                 * @default false
                 * @example false
                 */
                enableExpiration?: boolean;
            };
            /**
             * @description These numbers override the default precision, or number of decimal places, for this item in the Inventory Control, Order Entry, and Purchasing applications.
             *     For example, an item with a cost of $0.00456 requires five decimal places. Depending on your needs, you can assign the item a different precision in each application.
             *     For example, you can enter 4 in Purchasing and Inventory and 2 in Sales. The default precision as shipped from Intacct is two decimal places for each application. However, for Order Entry and Purchasing, you can change this default to a precision of up to 10 decimal places in the application's configuration.
             *     While Sage Intacct uses the number of decimal places specified here for the item in transactions, it rounds values to 10 decimal places for costing calculations, to 2 decimal places for the General Ledger, and to 2 decimal places for reports.
             *     If your company is subscribed to Contracts, the value of Unit cost precision. Sales must either be blank or 10. In this scenario, the best practice is to leave this field blank.
             */
            precision?: {
                /**
                 * @description Universal Product Code (UPC) for the item.
                 * @example 23342
                 */
                upc?: string;
                /**
                 * @description Inventory unit cost precision
                 * @example 2
                 */
                inventoryPrecision?: number;
                /**
                 * @description Sales unit cost precision
                 * @example 2
                 */
                salesPrecision?: number;
                /**
                 * @description Sales unit cost precision
                 * @example 2
                 */
                purchasingPrecision?: number;
            };
            landedCost?: {
                /**
                 * @description For inventory items set true to have Sage Intacct distribute landed costs to this item.
                 *     For Non-inventory and Non-inventory (purchase only) set this field to to identify the item as a landed cost. These items are used to enter the actual landed cost amounts (such as for shipping, insurance, and customs) for which you’re invoiced after purchasing inventory items.
                 * @default false
                 * @example false
                 */
                enableLandedCost?: boolean;
            };
            /** @description Only for Inventory items. Provide the count, volume, and weight of the item expressed in the base unit of the unit of measure (UOM) so a landed cost is distributed proportionately to the item when a landed cost is distributed across multiple items. */
            itemLandedCost?: components["schemas"]["objects.inventory-control.item-landed-cost"][];
            /**
             * @description When replenishment is enabled on the Configure Inventory Control, use this section of fields to include the item in replenishment, which automates the process of identifying when to reorder items and generating purchase orders.
             *     The values you enter are used in the replenishment calculations and drive the reorder information displayed for the item on the Replenish Inventory.
             */
            replenishment?: {
                /**
                 * @description Enable replenishment for this item in the Vendor history.
                 * @default false
                 * @example false
                 */
                enableReplenishment?: boolean;
                /**
                 * @description Units of measure default for base units for inventory replenishment for this item in the Vendor history. For example, with the Count unit of measure group, you can specify each, dozen, or pair. See the information about unit of measure groups in the Sage Intacct product help.
                 * @example Each
                 */
                unitOfMeasureDefault?: string;
                /**
                 * @description Safety stock for this item in the Vendor history. Extra quantity held in inventory to reduce the risk of stock outs due to uncertainty in supply and demand.
                 * @default 0
                 * @example 2
                 */
                safetyStock?: number;
                /**
                 * @description Maximum order quantity for this item in the Vendor history. Largest amount you can order in any one order. The provided may be affected by the economic order quantity and/or unit of measure set on the vendor.
                 * @default 0
                 * @example 10
                 */
                maximumOrderQuantity?: number;
                /**
                 * @description Replenishment method for this item in the Vendor history.
                 *     Provide how the amount to reorder is calculated.
                 *     Reorder point - base calculation on a specific reorder quantity and optional safety stock quantity Demand forecast by single value - base calculation on lead time for the vendor Demand forecast by statistical
                 *     account - base calculation on statistical journal entries for a statistical account (statistical account must be configured for inventory) See the information about replenishment methods and calculations in the Sage Intacct product help.
                 * @default
                 * @example reorderPoint
                 * @enum {string}
                 */
                replenishmentMethod?: "" | "demandForecastBySingleValue" | "reorderPoint" | "demandForecastByFluctuatingValues";
                /**
                 * @description Reorder point specifying the quantity of inventory that you don’t want to fall below. When the current net inventory falls to the reorder point plus the safety stock, the item is triggered for reorder. Use blank or positive integers. Applies when the replenishmentMethod is Reorder point
                 * @example 1
                 */
                reorderPoint?: number;
                /**
                 * @description Reorder quantity for this item in the Vendor history. As an example, if 12 units are needed according to other replenishment calculations, a reorder quantity of 50 would cause the generated purchase order to be for 50. Applies when the replenishmentMethod is Reorder point
                 * @default 0
                 * @example 1
                 */
                reorderQuantity?: number;
                /**
                 * @deprecated
                 * @description This field has been deprecated.
                 * @default 1
                 */
                forecastDemandInLeadTime?: number;
            };
            /** @description The Item details gives wholesale distribution companies the ability to define an item with many more attributes that are unique for their operations. */
            itemDetails?: {
                /**
                 * @description Primary country of origin.
                 * @example China 75%
                 */
                primaryCountryOfOrigin?: string;
                /**
                 * @description Condition name or descriptor.
                 * @example good
                 */
                condition?: string;
                /**
                 * @description Engineering Alert name or descriptor.
                 * @example Software Setup
                 */
                engineeringAlert?: string;
                /**
                 * @description Specification name/descriptor 1.
                 * @example length 12 cm
                 */
                specification1?: string;
                /**
                 * @description Specification name/descriptor 2.
                 * @example width 12 cm
                 */
                specification2?: string;
                /**
                 * @description Specification name/descriptor 3.
                 * @example height 13 cm
                 */
                specification3?: string;
                /**
                 * @description UPC-12, the 12-digit Universal Product Code of the item.
                 * @example 123456789123
                 */
                universalProductCode?: number;
                /**
                 * @description EAN-13, the 13-digit International Article Number of the item.
                 * @example 1234567891234
                 */
                internationalArticleNumber?: number;
                /**
                 * @description Use true if item is classified as a Safety Item.
                 * @default false
                 * @example true
                 */
                isSafetyItem?: boolean;
                /**
                 * @description Use true if item is classified as a Restricted Item.
                 * @default false
                 * @example true
                 */
                isRestrictedItem?: boolean;
                /**
                 * @description Use true if item is classified as a Compliant Item.
                 * @default false
                 * @example true
                 */
                isCompliantItem?: boolean;
                /**
                 * @description Use true if item is approved by engineering.
                 * @default false
                 * @example true
                 */
                isApprovedByEngineering?: boolean;
                /**
                 * @description Use true if item is approved by quality control.
                 * @default false
                 * @example true
                 */
                isApprovedByQualityControl?: boolean;
                /**
                 * @description Use true if item is approved by sales.
                 * @default false
                 * @example true
                 */
                isApprovedBySales?: boolean;
            };
            measurements?: {
                /** @description Provide shipWeight without weightUnitOfMeasure or netWeight, but if you provide netWeight you must also specify the other two. weightUnitOfMeasure must be set to one of the values defined for the Weight unit of measure. */
                weightUnitOfMeasure?: {
                    /**
                     * @description Id of unit of measure
                     * @example Grams
                     */
                    id?: string;
                    /**
                     * @description system generated key of unit of measure
                     * @example 25
                     */
                    key?: string;
                    /**
                     * @description URL for the unit of measure.
                     * @example /objects/inventory-control/unit-of-measure/25
                     */
                    readonly href?: string;
                };
                /**
                 * @description Net weight of item.
                 * @example 1.67
                 */
                netWeight?: number;
                /** @description The size of the item, useful for calculating storage bin and shipping box size requirements. Specify the unit of measure and the length, width, and height. You must specify all four values or none. lengthWidthHeightUnitOfMeasure must be set to one of the values defined for the length unit of measure. */
                lengthWidthHeightUnitOfMeasure?: {
                    /**
                     * @description Id of unit of measure
                     * @example inches
                     */
                    id?: string;
                    /**
                     * @description system generated key of unit of measure
                     * @example 21
                     */
                    key?: string;
                    /**
                     * @description URL for the unit of measure.
                     * @example /objects/inventory-control/unit-of-measure/21
                     */
                    readonly href?: string;
                };
                /**
                 * @description Length of item.
                 * @example 10
                 */
                length?: number;
                /**
                 * @description Width of item.
                 * @example 23
                 */
                width?: number;
                /**
                 * @description Height of item.
                 * @example 11.23
                 */
                height?: number;
                /** @description The thickness of the item, useful for calculating storage bin or shipping box size requirements. Specify the unit of measure, actual thickness, and minimum and maximum thickness. You must specify all four values or none. If the item thickness does not vary, set all three thickness fields to the same value. thicknessUnitOfMeasure must be set to one of the values defined for the length unit of measure. */
                thicknessUnitOfMeasure?: {
                    /**
                     * @description Id of unit of measure
                     * @example inches
                     */
                    id?: string;
                    /**
                     * @description system generated key of unit of measure
                     * @example 21
                     */
                    key?: string;
                    /**
                     * @description URL for the unit of measure.
                     * @example /objects/inventory-control/unit-of-measure/21
                     */
                    readonly href?: string;
                };
                /**
                 * @description Thickness of Item
                 * @example 10
                 */
                thickness?: number;
                /**
                 * @description Minimum thickness of Item
                 * @example 23
                 */
                minimumThickness?: number;
                /**
                 * @description Maximum thickness of Item
                 * @example 11.23
                 */
                maximumThickness?: number;
                /** @description The area of the item. You must specify both or neither. areaUnitOfMeasure must be set to one of the values defined for the Area unit of measure. */
                areaUnitOfMeasure?: {
                    /**
                     * @description Id of unit of measure
                     * @example Square Feet
                     */
                    id?: string;
                    /**
                     * @description system generated key of unit of measure
                     * @example 22
                     */
                    key?: string;
                    /**
                     * @description URL for the unit of measure.
                     * @example /objects/inventory-control/unit-of-measure/22
                     */
                    readonly href?: string;
                };
                /**
                 * @description Area of Item
                 * @example 0.567
                 */
                area?: number;
                /** @description The item unit of measure and total volume. You must specify both or neither. volumeUnitOfMeasure must be set to one of the values defined for the Volume unit of measure. */
                volumeUnitOfMeasure?: {
                    /**
                     * @description Id of unit of measure
                     * @example Cubic Meter
                     */
                    id?: string;
                    /**
                     * @description system generated key of unit of measure
                     * @example 24
                     */
                    key?: string;
                    /**
                     * @description URL for the unit of measure.
                     * @example /objects/inventory-control/unit-of-measure/24
                     */
                    readonly href?: string;
                };
                /**
                 * @description Volume of Item
                 * @example 0.789
                 */
                volume?: number;
                /**
                 * @description The density of the item unit of measure and density value.
                 * @example Cubic Meter
                 */
                densityUnitOfMeasure?: string;
                /**
                 * @description Density of Item
                 * @example 0.789
                 */
                density?: number;
                /**
                 * @description Durometer (hardness) measurement of the item.
                 * @example 10
                 */
                durometerUnitOfMeasure?: string;
                /** @description The diameter of the item Unit of measure, and inner and outer diameter. You must specify all three or none. DIAMETERUOM must be set to one of the values defined for the length unit of measure. */
                diameterUnitOfMeasure?: {
                    /**
                     * @description Id of unit of measure
                     * @example inches
                     */
                    id?: string;
                    /**
                     * @description system generated key of unit of measure
                     * @example 21
                     */
                    key?: string;
                    /**
                     * @description URL for the unit of measure.
                     * @example /objects/inventory-control/unit-of-measure/21
                     */
                    readonly href?: string;
                };
                /**
                 * @description Inner Diameter of Item
                 * @example 12
                 */
                innerDiameter?: number;
                /**
                 * @description Outer Diameter of Item
                 * @example 13.5
                 */
                outerDiameter?: number;
            };
            commercial?: {
                /**
                 * @description Brand of the item.
                 * @example Touch Screen
                 */
                brand?: string;
                /**
                 * @description Sub brand of the item.
                 * @example Touch Screen with LED
                 */
                subBrand?: string;
                /**
                 * @description Category of the item.
                 * @example Touch Screen with LED
                 */
                category?: string;
                /**
                 * @description Sub category of the item.
                 * @example Touch Screen with LED
                 */
                subCategory?: string;
                /**
                 * @description Catalog reference for the item.
                 * @example Touch Screen with LED laptops
                 */
                catalogReference?: string;
                /**
                 * @description Catalog reference for the item.
                 * @example black
                 */
                color?: string;
                /**
                 * @description Size 1 of the item.
                 * @example 13
                 */
                size1?: string;
                /**
                 * @description Size 2 of the item.
                 * @example 12
                 */
                size2?: string;
                /**
                 * @description Style of the item.
                 * @example 12
                 */
                style?: string;
                /**
                 * @description Name of the item to appear on the web.
                 * @example Dell Inspiration
                 */
                webName?: string;
                /**
                 * @description Short description for the web.
                 * @example Dell Inspiration 13 inch LED
                 */
                webShortDiscription?: string;
                /**
                 * @description Long description for the web.
                 * @example Dell Inspiration 13 inch LED touchscreen
                 */
                webLongDescription?: string;
                /**
                 * @description Set to true if item is gift card. Null is considered false.
                 * @default false
                 * @example true
                 */
                isGiftCard?: boolean | null;
                /**
                 * @description Set to true if item is web enabled.
                 * @default false
                 * @example true
                 */
                isWebEnabled?: boolean;
            };
            /**
             * @description Option to select default conversion type either Quantity or Price
             * @default quantity
             * @example quantity
             * @enum {string}
             */
            defaultConversionType?: "quantity" | "price";
            purchasing?: {
                /**
                 * Format: decimal-precision-10
                 * @description Standard cost value for the item.
                 * @example 1501.04
                 */
                standardCost?: string;
            };
            sales?: {
                /**
                 * @description Set to `true` if the sale of the item is taxable.
                 * @default false
                 * @example true
                 */
                isTaxable?: boolean;
                /**
                 * Format: decimal-precision-10
                 * @description Base price for the item.
                 * @example 1000
                 */
                basePrice?: string;
                /**
                 * @description Available for drop ship
                 * @default false
                 * @example false
                 */
                isAvailableForDropShip?: boolean;
                /**
                 * @description Available for buy to order
                 * @default false
                 * @example false
                 */
                isAvailableForBuyToOrder?: boolean;
                /**
                 * @description Tax code for external tax engines such as Avalara, when configured.
                 * @example CST
                 */
                taxCode?: string;
                /**
                 * taxGroup
                 * @description The tax group to assign the item to.
                 */
                taxGroup?: {
                    /**
                     * @description System-assigned key for the tax group.
                     * @example 1000
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the tax group.
                     * @example Acme Company Customers
                     */
                    id?: string;
                    /**
                     * @description URL for the tax group.
                     * @example /objects/tax/item-tax-group/23
                     */
                    readonly href?: string;
                };
                /**
                 * taxSolution
                 * @description The tax solution to assign the item to.
                 */
                taxSolution?: {
                    /**
                     * @description System-assigned key for the tax solution.
                     * @example 1000
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the tax solution.
                     * @example Acme Company Customers
                     */
                    id?: string;
                    /**
                     * @description URL for the tax solution.
                     * @example /objects/tax/tax-solution/23
                     */
                    readonly href?: string;
                };
                /**
                 * @description Allow multiple item tax groups per item, which is needed when an item is taxed at different rates in different tax jurisdictions.
                 *     Allow multiple item tax groups. When you set this to true and provide an itemTaxMap, the tax group at the header level is ignored and the mapping is used instead.
                 * @default false
                 * @example false
                 */
                allowMultipleTaxGroups?: boolean;
            };
            itemTaxMap?: components["schemas"]["objects.tax.item-tax-group-item-map"][];
            warehouseInfo?: components["schemas"]["objects.inventory-control.item-warehouse-inventory"][];
            itemVendor?: components["schemas"]["objects.inventory-control.item-vendor"][];
            /**
             * @description Set this to true if you want to enable the item for contracts.
             * @default false
             * @example false
             */
            isEnabledForContracts?: boolean;
            /**
             * @description Kit revenue posting.
             * @default componentLevel
             * @example componentLevel
             * @enum {string|null}
             */
            kitRevenuePosting?: null | "componentLevel" | "kitLevel";
            /**
             * @description Kit revenue posting.
             * @default individualComponents
             * @example individualComponents
             * @enum {string|null}
             */
            kitRevenuePrinting?: null | "individualComponents" | "kit";
            kitComponents?: components["schemas"]["objects.inventory-control.kit-component"][];
            /** @description Contract Term section is enabled only if contracts is subscribed for item. */
            contractTerm?: {
                /**
                 * @description Set this field to identify this item as having a default term. In Order Entry transactions, this also makes this item eligible for renewals and price proration.
                 *     For Contracts, Set this to true if you want to set up automatic price proration for this item.
                 * @default false
                 * @example false
                 */
                isStartDateAndEndDateEnabled?: boolean;
                /**
                 * @description Provide the period of duration to use to measure the item's term.
                 * @default days
                 * @example days
                 * @enum {string|null}
                 */
                periodsMeasuredIn?: null | "days" | "weeks" | "months" | "years";
                /**
                 * @description Enter the default number of periods to include in the item's term. For example, if Periods measured in is Months and Number of periods is 6, then the item's default term is 6 months. Required if you set isStartDateAndEndDateEnabled to true.
                 * @example 2
                 */
                numberOfPeriods?: number;
                /**
                 * @description Set this field to true if you want the system to automatically prorate the price when the sales transaction line or contract line term is less than the item's default term.
                 *     For Order Entry, this field prorates the fair value in a multiple-element arrangement (when also subscribed to Advanced Revenue Management). For Order Entry only, leave this checkbox cleared if you want the option to manually prorate the price using the prorate button in a sales transaction.
                 * @default false
                 * @example false
                 */
                isProratedPricingAllowed?: boolean;
                /**
                 * Default Renewal Template
                 * @description Provide the default renewal instruction set for this item in sales transactions. Only displays if your company is subscribed to Revenue Recognition for Order Entry. This field is not applicable to the Contracts application.
                 */
                defaultRenewalTemplate?: {
                    /**
                     * @description System-assigned key for the renewal template.
                     * @example 22
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the renewal template.
                     * @example Sales Renewal Template US
                     */
                    id?: string;
                    /**
                     * @description URL for the tax group.
                     * @example /objects/order-entry/renewal-template/22
                     */
                    readonly href?: string;
                };
            };
            /**
             * @description The fields in this section allow you to set default templates to use for this item when the item is selected in a contract line or as an expense. The user can override these defaults on the contract line or expense.
             *     For Non-Inventory (Purchase only) items, only the Expense template fields are applicable.
             *     This section is not applicable to Kit and Stockable kit items;
             */
            contractDefault?: {
                /**
                 * Billing Template
                 * @description Provide billing template that would most often be associated with this item.
                 */
                billingTemplate?: {
                    /**
                     * @description System-assigned key for the billing template
                     * @example 31
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the billing template
                     * @example Monthly Billing
                     */
                    id?: string;
                    /**
                     * @description URL for the tax group.
                     * @example /objects/contracts/billing-template/31
                     */
                    readonly href?: string;
                };
                /**
                 * Rev Rec Template 1
                 * @description Provide the default revenue template for the applicable journals. Your Contracts configuration may use one or two sets of revenue journals.
                 */
                revRecTemplate1?: {
                    /**
                     * @description System-assigned key for the Rev Rec template
                     * @example 32
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the Rev Rec template
                     * @example Monthly Billing
                     */
                    id?: string;
                    /**
                     * @description URL for the Rev Rec template
                     * @example /objects/contracts/revenue-template/32
                     */
                    readonly href?: string;
                };
                /**
                 * Rev Rec Template 2
                 * @description Provide the default revenue template for the applicable journals. Your Contracts configuration may use one or two sets of revenue journals. Different from RevRecTemplate1 and RevRecTemplate2 is used for ASC606 standards.
                 */
                revRecTemplate2?: {
                    /**
                     * @description System-assigned key for the Rev Rec template
                     * @example 33
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the Rev Rec template
                     * @example Half Cycle
                     */
                    id?: string;
                    /**
                     * @description URL for the Rev Rec template
                     * @example /objects/contracts/revenue-template/33
                     */
                    readonly href?: string;
                };
                /**
                 * Rev Rec Template 2
                 * @description Provide the default expense template for the applicable journals. Your Contracts configuration may use one or two expense journals.
                 */
                expenseTemplate1?: {
                    /**
                     * @description System-assigned key for the contract expense template
                     * @example 33
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the contract expense template
                     * @example Full Cycle Month Expense 2
                     */
                    id?: string;
                    /**
                     * @description URL for the contract expense template
                     * @example /objects/contracts/expense-template/33
                     */
                    readonly href?: string;
                };
                /**
                 * Rev Rec Template 2
                 * @description Provide the default expense template for the applicable journals. Your Contracts configuration may use one or two expense journals. Different from expenseTemplate1 and expenseTemplate2 is used for ASC606 standards.
                 */
                expenseTemplate2?: {
                    /**
                     * @description System-assigned key for the contract expense template
                     * @example 34
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the contract expense template
                     * @example Half Cycle Month Expense 2
                     */
                    id?: string;
                    /**
                     * @description URL for the contract expense template
                     * @example /objects/contracts/expense-template/34
                     */
                    readonly href?: string;
                };
                /**
                 * Contract Fair Value Category
                 * @description Sage Intacct uses fair value categories to distinguish products or services included in an MEA that will be used in the algorithm that determines another item's estimated standalone selling price.
                 *     If the item can be sold as part of a multiple-element arrangement, Provide the category that identifies the performance obligation. Learn more about fair value categories in contracts.
                 *     This field is only applicable if your company is subscribed to Contract Advanced Revenue Recognition.
                 */
                contractFairValueCategory?: {
                    /**
                     * @description System-assigned key for Contract Fair Value Category
                     * @example 37
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the Contract Fair Value Category
                     * @example Half Cycle Month Expense 2
                     */
                    id?: string;
                    /**
                     * @description URL for the Contract Fair Value Category.
                     * @example /objects/contracts/mea-price-list-entry/37
                     */
                    readonly href?: string;
                };
                /**
                 * @description Options are Delivered the contract line's recognition event has occurred Undelivered the contract line's recognition event has not occurred
                 * @default delivered
                 * @example delivered
                 * @enum {string|null}
                 */
                defaultContractDeliveryStatus?: null | "delivered" | "undelivered";
                /**
                 * @description Defer revenue until item is delivered the revenue schedule for this item will not start until this item has Delivery status = 'Delivered'.
                 *     Defer revenue until all items are delivered the revenue schedule for this item will not start until all contract lines in the contract have Delivery status = 'Delivered'.
                 * @default deferRevenueUntilItemIsDelivered
                 * @example deferRevenueUntilItemIsDelivered
                 * @enum {string|null}
                 */
                defaultContractDeferralStatus?: null | "deferRevenueUntilItemIsDelivered" | "deferRevenueUntilAllItemsAreDelivered";
                /**
                 * @description Set this to true if item is to be included in the default bundle when an MEA allocation that includes this item is created. Users can choose to exclude the item when they create the MEA allocation.
                 *     This field is only applicable if your company is subscribed to Contract Advanced Revenue Recognition.
                 * @default false
                 * @example true
                 */
                isDefaultBundle?: boolean;
            };
            itemCrossReference?: components["schemas"]["objects.inventory-control.item-cross-reference"][];
            /** @description Supporting document attached to this item. */
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
            /**
             * @description Endpoint for the item.
             * @example /objects/inventory-control/item/23
             */
            readonly href?: string;
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        "inventory-control-itemRequiredProperties": Record<string, never>;
        /** @description An item cross reference associates an inventory item with a specific customer or vendor, or with another inventory item. */
        "objects.inventory-control.item-cross-reference": {
            /**
             * @description System-assigned key for the item cross reference.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description ID for the item cross reference. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description Endpoint URL for the item cross reference.
             * @example /objects/inventory-control/item-cross-reference/23
             */
            readonly href?: string;
            /**
             * @description Reference type. Use `vendor` or `customer` for an external cross reference. Use `substitute`, `upgrade`, `downgrade`, or `complement` for an internal cross reference.
             * @example substitute
             * @enum {string}
             */
            referenceType?: "customer" | "vendor" | "substitute" | "upgrade" | "downgrade" | "complement";
            /**
             * @description Required for an external cross reference. Identifier for the item as understood by the given vendor or customer. Must be unique for the combination of vendor/item or customer/item.
             * @default null
             * @example Logitech - MK825
             */
            itemAliasId?: string | null;
            /**
             * @description Description of the item alias for the cross reference.
             * @default null
             * @example Logitech - MK825 Wireless Keyboard and Mouse
             */
            itemAliasDescription?: string | null;
            /** @description Valid unit of measure for the item. */
            unitOfMeasure?: {
                /**
                 * @description System-assigned key for the unit of measure.
                 * @example 21
                 */
                key?: string | null;
                /**
                 * @description Valid unit of measure ID for the item.
                 * @example EACH
                 */
                id?: string | null;
                /**
                 * @description Endpoint URL for the unit of measure.
                 * @example /objects/inventory-control/unit-of-measure/21
                 */
                readonly href?: string;
            };
            /**
             * @description The system assigns `external` when the `referenceType` is `customer` or `vendor`. For all other `referenceType` values, the system assigns `internal`.
             * @example internal
             * @enum {string}
             */
            readonly referenceTypeContext?: "internal" | "external";
            /** @description An alternate item. This field is required when using an internal `referenceType`, such as `substitute` or `upgrade`. */
            alternateItem?: {
                /**
                 * @description System-assigned key for the alternate item.
                 * @example 22
                 */
                key?: string | null;
                /**
                 * @description ID for the alternate item.
                 * @example Logitech-MK850
                 */
                id?: string | null;
                /**
                 * @description Name of alternate item.
                 * @example MK850 Wireless Keyboard and Mouse
                 */
                readonly name?: string | null;
                /**
                 * @description Endpoint URL for the alternate item.
                 * @example /objects/inventory-control/item/22
                 */
                readonly href?: string;
            };
            /** @description The customer ID is required if `referenceType` is `customer`. */
            customer?: {
                /**
                 * @description System-assigned key for the customer.
                 * @example 11
                 */
                key?: string | null;
                /**
                 * @description Customer ID, which is required if `referenceType` is `customer`.
                 * @example C00023
                 */
                id?: string | null;
                /**
                 * @description Name of the customer.
                 * @example EDCO Financial
                 */
                readonly name?: string | null;
                /**
                 * @description Endpoint URL for the customer.
                 * @example /objects/accounts-receivable/customer/11
                 */
                readonly href?: string;
            };
            /** @description Inventory item to create the cross reference for. */
            item?: {
                /**
                 * @description System-assigned key for the item.
                 * @example 13
                 */
                key?: string;
                /**
                 * @description ID for the item.
                 * @example Logitech-MK825
                 */
                id?: string;
                /**
                 * @description Name of the item.
                 * @example MK825 Wireless Keyboard and Mouse
                 */
                readonly name?: string;
                /**
                 * @description Endpoint URL for the item.
                 * @example /objects/inventory-control/item/13
                 */
                readonly href?: string;
            };
            /** @description The vendor ID is required if `referenceType` is `vendor`. */
            vendor?: {
                /**
                 * @description System-assigned key for the vendor.
                 * @example 22
                 */
                key?: string | null;
                /**
                 * @description Vendor ID, which is required if `referenceType` is `vendor`.
                 * @example V0001
                 */
                id?: string | null;
                /**
                 * @description Name of the vendor.
                 * @example Ez Tech Solutions
                 */
                readonly name?: string | null;
                /**
                 * @description Endpoint URL for the vendor.
                 * @example /objects/accounts-payable/vendor/22
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /**
         * @example {
         *       "item": {
         *         "key": "649"
         *       },
         *       "referenceType": "substitute"
         *     }
         */
        "inventory-control-item-cross-referenceRequiredProperties": Record<string, never>;
        /**
         * @description A landed cost item is a non-inventory item that represents a landed cost expense, such as freight, insurance, customs duties, or handling fees.
         *     This object is valid when Inventory Control is configured to enable landed costs.
         */
        "objects.inventory-control.item-landed-cost": {
            /**
             * @description System-assigned key for the item landed cost.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the item landed cost.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description Endpoint URL for the item landed cost.
             * @example /objects/inventory-control/item-landed-cost/23
             */
            readonly href?: string;
            /**
             * @description The distribution method for the item landed cost. The distribution method provides a fair distribution of landed costs across multiple items.
             * @example count
             * @enum {string}
             */
            distributionMethod?: "volume" | "weight" | "count";
            /**
             * @description A read-only field that provides the base unit for the distribution method.
             * @example Each
             */
            readonly distributionMethodBaseUnit?: string;
            /**
             * Format: decimal-precision-9
             * @description This field establishes how the landed cost is distributed for the associated item.
             *     This value should be appropriate for the unit of measure (UOM) for the item.
             *     For example, if the distribution method is weight and the base unit for the item is
             *     ounce, and the item weighs 1 pound, a value of 16 to represent 1 pound in ounces is appropriate.
             * @example 16
             */
            landedCostValue?: string;
            /**
             * @description If set to `true`, the landed cost value provided will be distributed for the item.
             * @default false
             * @example true
             */
            active?: boolean;
            /** @description Item associated with the landed cost. */
            item?: {
                /**
                 * @description System-assigned key for the item.
                 * @example 1000
                 */
                key?: string;
                /**
                 * @description Unique identifier for the item.
                 * @example Dell Laptop
                 */
                id?: string;
                /**
                 * @description Endpoint URL for the item.
                 * @example /objects/inventory-control/item/1000
                 */
                readonly href?: string;
            };
        };
        /** @description This object provides details about an item that can be purchased from a particular vendor. */
        "objects.inventory-control.item-vendor": {
            /**
             * @description System-assigned key for the item vendor.
             * @example 5
             */
            readonly key?: string;
            /**
             * @description Unique ID for the item vendor.
             * @example 5
             */
            readonly id?: string;
            /** @description The item that can be ordered from the vendor. */
            item?: {
                /**
                 * @description System-assigned key for the item.
                 * @example 13
                 */
                key?: string;
                /**
                 * @description Unique ID for the item.
                 * @example Phones
                 */
                id?: string;
                /**
                 * @description Endpoint URL for the item.
                 * @example /objects/inventory-control/item/9
                 */
                readonly href?: string;
            };
            /** @description The vendor the item can be ordered from. */
            vendor?: {
                /**
                 * @description System-assigned key for the vendor.
                 * @example 38
                 */
                key?: string;
                /**
                 * @description Unique ID for the vendor.
                 * @example Office_Supplies
                 */
                id?: string;
                /**
                 * @description Endpoint URL for the vendor.
                 * @example /objects/accounts-payable/vendor/38
                 */
                readonly href?: string;
            };
            /**
             * @description The stock number that vendor uses for this item.
             * @example #5678901234
             */
            stockNumber?: string;
            /**
             * @description The number of days it takes the vendor to deliver this item to you after receiving the order.
             * @example 15
             */
            leadTime?: number;
            /**
             * @description The quantity of this item that's expected to be sold during the lead time.
             * @example 5
             */
            demandForecastDuringLeadTime?: number;
            /**
             * @description The quantity that makes the cost of reordering this item the most economical.
             * @example 10
             */
            economicalOrderQuantity?: number;
            /**
             * @description The minimum quantity of this item the vendor is willing to sell.
             * @example 10
             */
            vendorMinimumOrderQuantity?: number;
            /**
             * Format: decimal-precision-10
             * @description The lowest price paid for the item.
             * @example 100.0000000000
             */
            readonly bestPrice?: string;
            /**
             * Format: decimal-precision-10
             * @description The latest price paid for the item.
             * @example 110.0000000000
             */
            readonly latestPrice?: string;
            /** @description The unit of measure the vendor sells this item in. */
            unitOfMeasure?: {
                /**
                 * @description System-assigned key for the unit of measure.
                 * @example 38
                 */
                key?: string;
                /**
                 * @description Unique ID for the unit of measure.
                 * @example Each
                 */
                id?: string;
                /**
                 * @description Endpoint URL for the unit of measure.
                 * @example /objects/inventory-control/unit-of-measure/38
                 */
                readonly href?: string;
            };
            /**
             * @description The number of base units required to equal the measure of the corresponding related unit.
             * @example 1
             */
            readonly conversionFactor?: string;
            /**
             * @description Identifies a preferred vendor for replenishing this item for warehouses that do not have a vendor specified.
             * @default false
             * @example false
             */
            isPreferredVendor?: boolean;
            /**
             * @description Endpoint URL for the item vendor.
             * @example /objects/inventory-control/item-vendor/5
             */
            readonly href?: string;
        };
        /** @description Warehouse inventory information is used with Inventory and Stockable Kit items. */
        "objects.inventory-control.item-warehouse-inventory": {
            /**
             * @description System-assigned key for the item warehouse inventory information.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the item warehouse inventory information.
             * @example 1
             */
            readonly id?: string;
            /** @description Details for the good, service, or kit that is purchased or sold. */
            item?: {
                /**
                 * @description System-assigned key for the item.
                 * @example 9
                 */
                key?: string;
                /**
                 * @description Unique identifier for the item.
                 * @example Prnt_Paper
                 */
                id?: string;
                /**
                 * @description URL for the item.
                 * @example /objects/inventory-control/item/9
                 */
                readonly href?: string;
            };
            /** @description Details for the warehouse or stocking location for the item. */
            warehouse?: {
                /**
                 * @description System-assigned key for the warehouse.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the warehouse.
                 * @example WH10001
                 */
                id?: string;
                /**
                 * @description URL for the warehouse.
                 * @example /objects/inventory-control/warehouse/1
                 */
                readonly href?: string;
            };
            /**
             * @description Location within the warehouse where the item is normally stored, such as Aisle 23, Row 12, Shelf 3, Bin 5.
             * @example Bin 5
             */
            storageArea?: string;
            /** @description Inventory cycles are used to keep track of when to take physical inventory. */
            inventoryCycle?: {
                /**
                 * @description System-assigned key for the inventory cycle.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Unique identifier for the inventory cycle.
                 * @example Daily Cycle
                 */
                id?: string;
                /**
                 * @description URL for the inventory cycle.
                 * @example /objects/inventory-control/cycle/2
                 */
                readonly href?: string;
            };
            /**
             * @description The quantity that makes the cost of reordering this item the most economical by minimizing total holding costs and total ordering costs.
             * @example 10
             */
            economicOrderQuantity?: number;
            /**
             * @description The planned or expected costs. Used in situations where purchase costs remain relatively stable over time.
             * @example 110
             */
            standardCost?: string;
            /**
             * @description The most recent cost information for the item.
             * @example 100
             */
            readonly lastCost?: string;
            /**
             * @description The weighted average of all units.
             * @example 100
             */
            readonly averageCost?: string;
            /**
             * @description Available methods to reorder items when the inventory stock is low.
             * @default null
             * @example economicQuantity
             * @enum {string|null}
             */
            readonly reorderMethod?: null | "economicQuantity" | "maxStockLevel" | "reorderPoint";
            /**
             * @description Value used as the starting point to determine when the item needs to be replenished.
             * @example 121
             */
            reorderPoint?: number;
            /**
             * @description When current net inventory falls to the reorder point plus the safety stock, the item is triggered for reorder with reorder quantity.
             * @example 10
             */
            reorderQuantity?: number;
            /**
             * @description The minimum quantity to be reordered at one time.
             * @example 10
             */
            minOrderQuantity?: number;
            /**
             * @description The maximum quantity to be reordered at one time.
             * @example 100
             */
            maxOrderQuantity?: number;
            /**
             * @description The quantity of the item you do not want to exceed in the inventory.
             * @example 300
             */
            maximumStock?: number;
            /**
             * @description The quantity of the item you do not want to fall below in the inventory.
             * @example 50
             */
            minimumStock?: number;
            /**
             * Format: date
             * @description Last date the item was sold.
             * @example 2022-04-08
             */
            readonly lastSoldDate?: string;
            /**
             * Format: date
             * @description Last date the item was received.
             * @example 2022-04-10
             */
            readonly lastReceivedDate?: string;
            /** @description Default bin details for the item. */
            defaultBin?: {
                /**
                 * @description System-assigned key for the default bin.
                 * @example 45
                 */
                key?: string;
                /**
                 * @description Unique identifier for the default bin.
                 * @example 45
                 */
                id?: string;
                /**
                 * @description URL for the default bin.
                 * @example /objects/inventory-control/bin/45
                 */
                readonly href?: string;
            };
            /** @description Warehouse location and currency details for the item. */
            readonly warehouseLocation?: {
                /**
                 * @description System-assigned key for the warehouse location.
                 * @example 3
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the warehouse location.
                 * @example LOC-USA-0778
                 */
                readonly id?: string;
                /**
                 * @description Currency for the warehouse location.
                 * @example USD
                 */
                readonly currency?: string;
                /**
                 * @description URL for the warehouse location.
                 * @example /objects/company-config/entity/3
                 */
                readonly href?: string;
            };
            /**
             * @description The extra quantity to have in inventory to avoid running out of stock.
             * @example 20
             */
            safetyStock?: number;
            /**
             * @description Replenishment method to use to automatically identify and reorder items when inventory is low.
             * @default null
             * @example reorderPoint
             * @enum {string|null}
             */
            replenishmentMethod?: null | "demandForecastBySingleValue" | "reorderPoint" | "demandForecastByFluctuatingValues";
            /**
             * @description Set replenishment to `true` to replenish the items.
             * @default true
             * @example true
             */
            enableReplenishment?: boolean;
            /**
             * @description Quantities that are expected to arrive in the warehouse from purchase orders.
             * @example 100
             */
            readonly onOrder?: number;
            /**
             * @description Total number of warehouse transfer items that are in transit.
             * @example 50
             */
            readonly inTransit?: number;
            /**
             * @description The item total received into the warehouse less the total that have been shipped from the warehouse.
             * @example 200
             */
            readonly onHand?: number;
            /**
             * @description The quantity of the item that is on hold for the transaction.
             * @example 10
             */
            readonly onHold?: number;
            /**
             * @description The reserved quantity for a warehouse is subtracted from available items to keep that amount from being sold.
             * @example 50
             */
            readonly reserved?: number;
            /**
             * @description The allocated inventory quantity is the count of items present in the warehouse, which are reserved to open sale orders.
             * @example 20
             */
            readonly allocated?: number;
            /**
             * @description Uncommitted inventory is excess inventory, the difference between the forecast and the inventory.
             * @example 500
             */
            readonly unCommitted?: number;
            /**
             * @description URL for the item warehouse inventory.
             * @example /objects/inventory-control/item-warehouse-inventory/1
             */
            readonly href?: string;
            /** @description Only required when override replenishment values on the enableReplenishment is set to true. Provide vendor information you want to use in the replenishment calculations for the item in this warehouse. */
            itemWarehouseVendor?: components["schemas"]["objects.inventory-control.item-warehouse-vendor"][];
            /** @description You can provide the standard cost of the item for the warehouse. You can use different standard costs for different date ranges. */
            standardCostEntries?: components["schemas"]["objects.inventory-control.item-warehouse-standard-cost"][];
            audit?: components["schemas"]["audit.s1"];
        };
        /**
         * @example {
         *       "item": {
         *         "key": "9",
         *         "id": "Prnt_Paper"
         *       },
         *       "warehouse": {
         *         "key": "1",
         *         "id": "WH10001"
         *       }
         *     }
         */
        "inventory-control-item-warehouse-inventoryRequiredProperties": Record<string, never>;
        /** @description Standard cost for Item for warehouse. You can record different standard costs for different date ranges for item and warehouse combinations. */
        "objects.inventory-control.item-warehouse-standard-cost": {
            /**
             * @description System-assigned unique key for item warehouse standard cost.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for item warehouse standard cost. This value is the same as the key for this object.
             * @example 12
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the item warehouse standard cost.
             * @example /objects/inventory-control/item-warehouse-standard-cost/12
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Specifies the date at which the cost will be effective. The cost is used in the journal entries to debit Costs of Goods Sold and credit Inventory.
             *     Any postings before the specified effective start date will use a cost of zero. The cost for the most recently provided effective start date is used for any postings after that date until a subsequent effective start date is specified.
             * @example 2026-01-23
             */
            effectiveStartDate?: string;
            /**
             * Format: decimal-precision-10
             * @description Provide the standard cost that takes effect on the specified effective start date.
             * @example 122
             */
            standardCost?: string;
            /** @description Details for the item warehouse inventory associated with the price list. */
            itemWarehouse?: {
                /**
                 * @description Unique key for the item warehouse inventory.
                 * @example 13
                 */
                key?: string;
                /**
                 * @description ID for the item warehouse inventory.
                 * @example 13
                 */
                id?: string;
                /**
                 * @description URL endpoint for the item warehouse inventory.
                 * @example /objects/inventory-control/item-warehouse-inventory/13
                 */
                readonly href?: string;
                /**
                 * @description ID for the good, service, or kit that is purchased or sold.
                 * @example LapTop Kit 1
                 */
                readonly itemId?: string;
                /**
                 * @description ID for the warehouse or stocking location for the item.
                 * @example WS001
                 */
                readonly warehouseId?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "inventory-control-item-warehouse-standard-costRequiredProperties": {
            /**
             * @example {
             *       "itemWarehouse": {
             *         "key": "649"
             *       }
             *     }
             */
            itemWarehouse?: unknown;
        };
        /** @description This object specifies the vendor information to use in replenishment calculations for the item in the associated warehouse. */
        "objects.inventory-control.item-warehouse-vendor": {
            /**
             * @description System-assigned unique key for the item warehouse vendor.
             * @example 5
             */
            readonly key?: string;
            /**
             * @description Item warehouse vendor ID. This value is the same as the key for this object.
             * @example 5
             */
            readonly id?: string;
            /** @description The item-warehouse combination that can be ordered from the associated vendor. */
            itemWarehouse?: {
                /**
                 * @description Unique key for the item warehouse inventory.
                 * @example 13
                 */
                key?: string;
                /**
                 * @description Unique ID for the item warehouse inventory.
                 * @example 13
                 */
                id?: string;
                /**
                 * @description URL endpoint for the item warehouse inventory.
                 * @example /objects/inventory-control/item-warehouse-inventory/13
                 */
                readonly href?: string;
            };
            /** @description The vendor to use in the replenishment calculations for the item in this warehouse. */
            vendor?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 38
                 */
                key?: string;
                /**
                 * @description Unique ID for the vendor.
                 * @example Office_Supplies
                 */
                id?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/38
                 */
                readonly href?: string;
            };
            /**
             * @description The stock number the vendor uses for this item.
             * @example #5678901234
             */
            stockNumber?: string;
            /**
             * @description The number of days it takes the vendor to deliver this item after receiving an order.
             * @example 15
             */
            leadTime?: number;
            /**
             * @description The quantity of this item that's expected to be sold during the lead time.
             * @example 5
             */
            demandForecastDuringLeadTime?: number;
            /**
             * @description The quantity that makes the cost of reordering this item the most economical.
             * @example 10
             */
            economicalOrderQuantity?: number;
            /**
             * @description The minimum quantity of this item the vendor is willing to sell.
             * @example 10
             */
            vendorMinimumOrderQuantity?: number;
            /**
             * Format: decimal-precision-10
             * @description The lowest price paid for the item.
             * @example 100.0000000000
             */
            readonly bestPrice?: string;
            /**
             * Format: decimal-precision-10
             * @description The latest price paid for the item.
             * @example 110.0000000000
             */
            readonly latestPrice?: string;
            /** @description The unit of measure the vendor sells this item in. */
            unitOfMeasure?: {
                /**
                 * @description Unique key for the unit of measure.
                 * @example 38
                 */
                key?: string;
                /**
                 * @description Unique ID for the unit of measure.
                 * @example Each
                 */
                id?: string;
                /**
                 * @description URL endpoint for the unit of measure.
                 * @example /objects/inventory-control/unit-of-measure/38
                 */
                readonly href?: string;
            };
            /**
             * @description The number of base units required to equal the measure of the corresponding related units.
             * @example 1
             */
            readonly conversionFactor?: string;
            /**
             * @description Indicates whether the vendor is the preferred vendor for replenishing this item for the warehouse.
             * @default false
             * @example false
             */
            isPreferredVendor?: boolean;
            /**
             * @description URL endpoint for the item warehouse vendor.
             * @example /objects/inventory-control/item-warehouse-vendor/5
             */
            readonly href?: string;
        };
        "inventory-control-item-warehouse-vendorRequiredProperties": {
            /**
             * @example {
             *       "itemWarehouse": {
             *         "key": "649"
             *       }
             *     }
             */
            itemWarehouse?: unknown;
        };
        /** @description An item group categorizes item dimension records, mainly for the purpose of structuring financial reporting. */
        "objects.inventory-control.item-group": {
            /**
             * @description System-assigned key for the item-group.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the Item group.
             * @example 1st Level Items
             */
            id?: string;
            /**
             * @description item group URL.
             * @example /objects/inventory-control/item-group/23
             */
            readonly href?: string;
            /**
             * @description Name of the item group.
             * @example Level 1 Items
             */
            name?: string;
            /**
             * @description Description about the item group.
             * @example Level 1 Items
             */
            description?: string;
            /**
             * @description Group membership type. The group type and related fields determine which items are included in the group. If you are creating reports that use items in rows or columns, these fields also determine the column headings and row headings that will appear, and the order in which they will be listed.
             *
             *     * `specific` - Specify the items to include and their order in the `groupMembers` array. You can optionally filter the array with the `memberFilter` settings.
             *     * `all` - All items that match the `memberFilter` criteria.
             * @example all
             * @enum {string}
             */
            groupType?: "all" | "specific";
            /** @description One or more filters to select the items to include in the item group. Can be used in addition to the `groupMembers` array to filter from a selected list of items. */
            memberFilter?: components["schemas"]["member-filter"] & Record<string, never>;
            /** @description Members of the item group and their sort order. Only applicable when `groupType` = `specific`. */
            groupMembers?: {
                /**
                 * @description Unique key for the item.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique ID for the item.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/23
                 */
                readonly href?: string;
                /**
                 * @description Item group sort order. Determines the position of the member within the item group. Lower values indicate earlier placement.
                 * @example 2
                 */
                readonly sortOrder?: string;
            }[];
            /** @description General ledger (GL) account group associated with the item group. */
            glAccountGroup?: {
                /** @example 23 */
                key?: string;
                /**
                 * @description ID for the gl-account-group.
                 * @example 1st Level Items
                 */
                id?: string;
                /**
                 * @description URL for the gl-account-group.
                 * @example /objects/inventory-control/gl-account-group/23
                 */
                readonly href?: string;
            };
            /**
             * @description Set to 'true' to create a dimension structure that enables the group to be used on the rows and columns of financial reports. If this field is set to false, the group can only be used for filtering.
             * @default false
             * @example true
             */
            createDimensionComponents?: boolean;
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "inventory-control-item-groupRequiredProperties": Record<string, never>;
        /** @description Item GL groups are used to organize transaction definitions for posting to the general ledger. */
        "objects.inventory-control.item-gl-group": {
            /**
             * @description System-assigned key for the item GL group.
             * @example 13
             */
            readonly key?: string;
            /**
             * @description Name or other unique identifier for the item GL group.
             * @example Stockable Kit
             */
            id?: string;
            /** @description GL account to which to defer revenue for items belonging to this GL group. */
            deferredRevenueGLAccount?: {
                /**
                 * @description System-assigned key for the deferred revenue GL account.
                 * @example 411
                 */
                key?: string;
                /**
                 * @description Account number for the deferred revenue GL account.
                 * @example 1501.04
                 */
                id?: string;
                /**
                 * @description Name of the deferred revenue GL account.
                 * @example Expense Account
                 */
                readonly name?: string;
                /**
                 * @description URL for the deferred revenue GL account.
                 * @example /objects/general-ledger/account/411
                 */
                readonly href?: string;
            };
            /** @description Default revenue recognition template to use for deferred revenue for items belonging to this GL group. */
            defaultRevenueRecognitionTemplate?: {
                /**
                 * @description System-assigned key for the revenue recognition template.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the revenue recognition template.
                 * @example 100
                 */
                id?: string;
                /**
                 * @description URL for the revenue recognition template.
                 * @example /objects/accounts-receivable/revenue-recognition-template/1
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates whether this is a system-generated GL group.
             * @default false
             * @example false
             */
            readonly isSystemGenerated?: boolean;
            /**
             * @description item gl group URL
             * @example /objects/inventory-control/item-gl-group/13
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        /**
         * @example {
         *       "id": "Stockable Kit"
         *     }
         */
        "inventory-control-item-gl-groupRequiredProperties": Record<string, never>;
        /** @description Information about available quantities for items in warehouse with tracking information. */
        "objects.inventory-control.item-warehouse-available-inventory": {
            /**
             * @description System-assigned unique key for the item warehouse available inventory object.
             * @example 19
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the item warehouse available inventory object. This value is the same as the key for this object.
             * @example 19
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the item warehouse available inventory object.
             * @example /objects/inventory-control/item-warehouse-available-inventory/19
             */
            readonly href?: string;
            /**
             * @description ID of the inventory item.
             * @example Dell_15_6_XPS_15_Multi_Touch
             */
            readonly item?: string;
            /**
             * @description Extended description of the inventory item.
             * @example 12th Gen Core i3-1215U (10 MB cache, 6 cores, 8 threads, up to 4.40 GHz Turbo)
             */
            readonly itemDescription?: string | null;
            /**
             * @description Name of the warehouse where the item is located.
             * @example US AZ Warehouse 10001
             */
            readonly warehouseName?: string | null;
            /**
             * @description ID of the warehouse associated with the item.
             * @example WH10001
             */
            readonly warehouse?: string | null;
            /**
             * @description ID of the bin in which the item is located if bin tracking has been defined and used.
             * @example Z4-A5-R3a-B10
             */
            readonly bin?: string | null;
            /**
             * @description ID of the aisle in which the bin for the item is located if bin tracking is used.
             * @example A5
             */
            readonly aisle?: string | null;
            /**
             * @description ID of the row in which the bin for the item is located if bin tracking is used.
             * @example R3a
             */
            readonly row?: string | null;
            /**
             * @description ID of the zone in which the bin for the item is located if bin tracking is used.
             * @example Z4
             */
            readonly zone?: string | null;
            /**
             * @description The serial number assigned to the individual item.
             * @example 224353
             */
            readonly serialNumber?: string | null;
            /**
             * @description The lot number associated with the item in the warehouse.
             * @example Lot 32
             */
            readonly lotNumber?: string | null;
            /**
             * Format: date
             * @description Date the item was received in the associated warehouse.
             * @example 2026-01-08
             */
            readonly dateReceived?: string | null;
            /**
             * Format: date
             * @description Expiration date of item in the associated warehouse.
             * @example 2026-08-08
             */
            readonly expirationDate?: string | null;
            quantity?: {
                /**
                 * Format: decimal-precision-10
                 * @description The quantity of the item in your warehouses. The quantity left is the quantity that has been received in your warehouses minus the quantity that has been shipped from your warehouses.
                 * @example 10.0000000000
                 */
                readonly quantityLeft?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Allocated quantity is considered to be picked from the warehouse shelves, dedicated to specific orders, and not available to be used anywhere else.
                 * @example 1.0000000000
                 */
                readonly quantityAllocated?: string | null;
                /**
                 * Format: decimal-precision-10
                 * @description Reserved quantity is considered to still be on the warehouse shelves but not available to be used anywhere else.
                 * @example 2.0000000000
                 */
                readonly quantityReserved?: string | null;
            };
            /**
             * @description Unit of measure associated with the inventory item.
             * @example Each
             */
            readonly unitOfMeasure?: string | null;
        };
        /** @description This object maps items to a corresponding item tax group which includes a standard tax solution. */
        "objects.tax.item-tax-group-item-map": {
            /**
             * @description System-assigned unique key for the item tax group item map.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Unique identified for the tem tax group item map. This value is the same as `key` for this object.
             * @example 2
             */
            readonly id?: string;
            /**
             * @description Endpoint URL for the item tax group item map.
             * @example /objects/tax/item-tax-group-item-map/2
             */
            readonly href?: string;
            /** @description Inventory item associated with this item tax group item map. */
            item?: {
                /**
                 * @description System-assigned key for the item.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the item.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description Endpoint URL for the item.
                 * @example /objects/inventory-control/item/1
                 */
                readonly href?: string;
            };
            /** @description Tax solution associated with the tax group. */
            taxSolution?: {
                /**
                 * @description System-assigned key for the tax solution.
                 * @example 4
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax solution.
                 * @example Canadian Sales Tax - SYS
                 */
                id?: string;
                /**
                 * @description Endpoint URL for the tax solution.
                 * @example /objects/tax/tax-solution/4
                 */
                readonly href?: string;
            };
            /** @description Tax group to which the item tax group item map allies. */
            taxGroup?: {
                /**
                 * @description System-assigned key for the tax group.
                 * @example 4
                 */
                key?: string;
                /**
                 * @description Unique identifier for the tax group.
                 * @example Goods Exempt Rate - CA
                 */
                id?: string;
                /**
                 * @description Endpoint URL for the tax group.
                 * @example /objects/tax/item-tax-group/4
                 */
                readonly href?: string;
            };
        };
        /** @description Kit components are common combinations of items to be ordered and invoiced as a single item for simplifying data entry. */
        "objects.inventory-control.kit-component": {
            /**
             * @description System-assigned unique key for the kit component.
             * @example 15
             */
            readonly key?: string;
            /**
             * @description Kit component ID. This value is the same as the key for this object.
             * @example 15
             */
            readonly id?: string;
            /** @description A kit is a type of item that enables a combination of items to be ordered and invoiced as a single item. */
            kit?: {
                /**
                 * @description Unique key for the kit.
                 * @example 27
                 */
                key?: string;
                /**
                 * @description Unique ID for the kit.
                 * @example Kit_1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the kit.
                 * @example /objects/inventory-control/item/27
                 */
                readonly href?: string;
            };
            /** @description Components are items to be ordered and invoiced as a single item (kit or stockable kit). */
            component?: {
                /**
                 * @description Unique key for the component.
                 * @example 10
                 */
                key?: string;
                /**
                 * @description Unique ID for the component.
                 * @example Print_Paper
                 */
                id?: string;
                /**
                 * @description URL endpoint for the component.
                 * @example /objects/inventory-control/item/10
                 */
                readonly href?: string;
                /**
                 * @description The unique name of the component item.
                 * @example Paper for Printer
                 */
                readonly name?: string;
                /**
                 * @description The cost method affects how the inventory cost layers are used, the total valuation is determined, and the unit cost is derived for an inventory item.
                 * @example standard
                 * @enum {string}
                 */
                readonly costMethod?: "standard" | "average" | "FIFO" | "LIFO";
                /**
                 * @description The type for the item. Item type determines where the item will be available.
                 * @example inventory
                 * @enum {string}
                 */
                readonly itemType?: "inventory" | "nonInventory" | "purchaseOnlyNonInventory" | "salesOnlyNonInventory" | "kit" | "stockableKit";
                /**
                 * Format: decimal-precision-9
                 * @description The planned or expected costs. This method is used in situations where purchase costs remain relatively stable over time.
                 * @example 100.00
                 */
                readonly standardCost?: string;
                /**
                 * @description The standard unit of measure of the component item.
                 * @example each
                 */
                readonly unitOfMeasure?: string;
            };
            /**
             * @description Number of component units required in this kit.
             * @example 12
             */
            numberOfUnits?: number;
            /**
             * @description When the item is sold as part of a kit, the revenue part of each item will be calculated based on the specified percentage.
             * @example 10
             */
            revenuePercentage?: number;
            /**
             * @description Specifies the most common delivery status of this item when it's sold.
             * @default delivered
             * @example delivered
             * @enum {string}
             */
            defaultDeliveryStatus?: "delivered" | "undelivered";
            /**
             * @description Specifies whether to defer until this item is delivered or until the entire bundle is delivered.
             * @default deferUntilItemIsDelivered
             * @example deferUntilItemIsDelivered
             * @enum {string}
             */
            defaultDeferralStatus?: "deferUntilItemIsDelivered" | "deferBundleUntilItemIsDelivered";
            /**
             * @description Line number of the kit component. If not provided, the system automatically assigns a unique line number. If the number specified is already used, the application sets other lines to unique numbers.
             * @example 1
             */
            lineNumber?: number;
            /**
             * @description URL endpoint for the kit component.
             * @example /objects/inventory-control/kit-component/15
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "inventory-control-kit-componentRequiredProperties": {
            kit: Record<string, never>;
            component: Record<string, never>;
        };
        /** @description An inventory price list is a container for price list entries. */
        "objects.inventory-control.price-list": {
            /**
             * @description System-assigned unique key for the inventory price list.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Name or other unique identifier for the inventory price list.
             * @example Base Price List
             */
            id?: string;
            /**
             * @description URL endpoint for the inventory price list.
             * @example /objects/inventory-control/price-list/1
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Specifies the start date of the time period during which the price list will be effective.
             * @example 2026-01-01
             */
            startDate?: string;
            /**
             * Format: date
             * @description Specifies the end date of the time period during which the price list will be effective.
             * @example 2026-12-31
             */
            endDate?: string;
            /**
             * @description Specifies the application that this price list applies to, which can be Purchasing or Order Entry.
             * @example orderEntry
             * @enum {string}
             */
            appliesTo?: "purchasing" | "orderEntry";
            status?: components["schemas"]["status"];
        };
        /**
         * @example {
         *       "id": "Base Price List",
         *       "appliesTo": "orderEntry"
         *     }
         */
        "inventory-control-price-listRequiredProperties": Record<string, never>;
        /** @description An inventory price list entry contains the pricing for a selected item within a selected price list. You can create price list entries for items whose prices are determined based on an amount, a discount or mark up percentage, the quantity sold, and more. */
        "objects.inventory-control.price-list-entry": {
            /**
             * @description System-assigned unique key for the price list entry.
             * @example 18
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the price list entry. This value is the same as the key for this object.
             * @example 18
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the price list entry.
             * @example /objects/inventory-control/price-list-entry/18
             */
            readonly href?: string;
            /** @description Specifies the product line to which the inventory item belongs. */
            productLine?: {
                /**
                 * @description Unique key for the product line.
                 * @example 25
                 */
                key?: string;
                /**
                 * @description Name or other unique ID for the product line.
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
             * @description Specifies the date on which the price becomes effective. You can enter past or future dates.
             * @example 2025-12-01
             */
            startDate?: string;
            /**
             * Format: date
             * @description Specifies the date on which the price ends. You can enter past or future dates.
             * @example 2026-12-01
             */
            endDate?: string;
            /**
             * Format: decimal-precision-8
             * @description Specifies a minimum quantity to give or get price breaks according to the quantity ordered. With this type of pricing, the system multiplies the transaction quantity by the rate mapped to the quantity range in which the transaction quantity falls. Quantities cannot be negative.
             * @example 1
             */
            minimumQuantity?: string;
            /**
             * Format: decimal-precision-8
             * @description Specifies a maximum quantity to give or get price breaks according to the quantity ordered. With this type of pricing, the system multiplies the transaction quantity by the rate mapped to the quantity range in which the transaction quantity falls. Quantities cannot be negative.
             * @example 100
             */
            maximumQuantity?: string;
            /**
             * Format: decimal-precision-10
             * @description Specifies a value for the price list entry. The value should be appropriate for the type specified in the `valueType` field:
             *     * `actual`: Provide the price. For example, if the item is $500.00, specify 500.00
             *     * `dollarMarkup`: Provide the amount by which to mark up the price. For example, to mark up the price by $25.00, specify 25.00.
             *     * `dollarDiscount`: Provide the amount to subtract from the price. For example, to give a $10.00 discount, specify 10.00.
             *     * `markupPercent`: Provide the percentage by which to mark up the price. For example, to mark up the price by 20%, specify 20.
             *     * `discountPercent`: Provide the percentage by which to discount the price. For example, to give a 5% discount, specify 5.
             * @example 60.56
             */
            value?: string;
            /**
             * @description The value type for the price list entry.
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
            /** @description This field is only applicable to companies subscribed to Projects and Time and Expenses. To define a project billing rate, use a combination of `employee` and `item`. Sage Intacct uses the price associated with this item-employee combination for applicable timesheets when invoices are generated for time and materials projects. */
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
                 * @example /objects/inventory-control/price-list/1
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
        "inventory-control-price-list-entryRequiredProperties": Record<string, never>;
        /** @description Product lines are groups of related products. Using product lines makes it easier to update prices and track inventory movement. */
        "objects.inventory-control.product-line": {
            /**
             * @description System-assigned key for the product line.
             * @example 25
             */
            readonly key?: string;
            /**
             * @description Name or other unique identifier for the product line.
             * @example Telephones
             */
            id?: string;
            /**
             * @description Description of the product line.
             * @example Product line for all phones
             */
            description?: string;
            /** @description If this product line is part of a hierarchy, the parent product line of this product line. */
            parent?: {
                /**
                 * @description System-assigned key for the parent product line.
                 * @example 28
                 */
                key?: string;
                /**
                 * @description Unique identifier for the parent product line.
                 * @example Electronics
                 */
                id?: string;
                /** @example /objects/inventory-control/product-line/28 */
                readonly href?: string;
            };
            /**
             * @description product line URL
             * @example /objects/inventory-control/product-line/25
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        "inventory-control-product-lineRequiredProperties": Record<string, never>;
        /** @description A row is one of four optional attributes (zone, aisle, row, and bin face) you can assign to a bin to make it easier to find in the warehouse. */
        "objects.inventory-control.row": {
            /**
             * @description System-assigned key for the row.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Name or other unique identifier for the row. The row ID cannot be modified.
             * @example R3ADW
             */
            id?: string;
            /**
             * @description Description for the row.
             * @example Row 3A Dishwashers
             */
            description?: string;
            /**
             * @description URL for the row.
             * @example /objects/inventory-control/row/2
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "inventory-control-rowRequiredProperties": Record<string, never>;
        /** @description Component items in a stockable kit are assembled together to make it an inventoried item. Stockable kit documents provide a record of stockable kit build and disassembly transactions. */
        "objects.inventory-control.stockable-kit-document": {
            /**
             * @description System-assigned key for the stockable kit document.
             * @example 29
             */
            readonly key?: string;
            /**
             * @description Unique ID for the stockable kit document.
             * @example Build Kits-BldKit-000906-doc
             */
            readonly id?: string;
            /**
             * @description If a numbering sequence is not configured for Inventory Control documents, you must specify a document number.
             * @example BldKit-000906-doc
             */
            documentNumber?: string;
            /**
             * @description The type of transaction `Build Kits` or `Disassemble Kits`.
             * @example Disassemble Kits
             */
            readonly documentType?: string;
            /**
             * @description URL endpoint for the stockable kit document.
             * @example /objects/inventory-control/stockable-kit-document/29
             */
            readonly href?: string;
            /**
             * @description Indicates whether the document has been printed.
             * @default false
             * @example false
             */
            readonly isPrinted?: boolean;
            /**
             * Format: decimal-precision-2
             * @description Subtotal of the document in the base currency.
             * @example 100.00
             */
            readonly subTotal?: string;
            /**
             * Format: decimal-precision-2
             * @description The sum of values across all lines in the document in the base currency.
             * @example 150.00
             */
            readonly total?: string;
            /**
             * Format: decimal-precision-2
             * @description Subtotal of the document in the transaction currency.
             * @example 1.00
             */
            readonly subtotalInTxnCurrency?: string;
            /**
             * Format: decimal-precision-2
             * @description The sum of values across all lines in the document in the transaction currency.
             * @example 1.00
             */
            readonly totalInTxnCurrency?: string;
            /**
             * @description Status of the transaction.
             * @default draft
             * @example pending
             * @enum {string}
             */
            state?: "draft" | "pending" | "inProgress" | "converted";
            /**
             * @description Build state of the stockable kit.
             * @example built
             * @enum {string}
             */
            readonly buildState?: "built" | "disassembled" | "draft" | "inProgress";
            status?: components["schemas"]["status"];
            /**
             * @description User-assigned reference number for the stockable kit document.
             * @example BUILD-1002
             */
            referenceNumber?: string;
            /**
             * @description Stockable kit document notes.
             * @example 2024-01-10 assembly
             */
            memo?: string;
            /** @description Exchange rate details used to calculate the base amount. */
            exchangeRate?: {
                /**
                 * Format: date
                 * @description Exchange rate date for this transaction. Can be the current date, the date the transaction was issued, or the date the transaction will be paid.
                 * @example 2024-01-23
                 */
                date?: string;
                /**
                 * Format: decimal-precision-4
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
             * @description Date that the transaction occurred.
             * @example 2024-01-01
             */
            transactionDate?: string;
            /**
             * Format: date
             * @description Date that the document was last printed.
             * @example 24-01-15
             */
            lastPrintedDate?: string | null;
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
            /** @description Transaction definition associated with this transaction. */
            txnDefinition?: {
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/inventory-control/txn-definition/41
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the transaction definition.
                 * @example 41
                 */
                readonly key?: string;
                /**
                 * @description Name of the transaction definition, which can be either buildKits or disassembleKits for stockable kit documents.
                 * @example buildKits
                 * @enum {string}
                 */
                id?: "buildKits" | "disassembleKits";
                /**
                 * @description Document type of the transaction definition.
                 * @example Build Kits
                 */
                readonly documentType?: string;
                /**
                 * @description Transaction definition template class.
                 * @example INVOICE
                 */
                readonly txnDefinitionTemplateClass?: string;
                /**
                 * @description If the transaction updates inventory, indicates whether quantity, value, or both are updated.
                 * @example quantityAndValue
                 * @enum {string}
                 */
                updatesInventory?: "no" | "quantity" | "value" | "quantityAndValue";
                /**
                 * @description If the transaction updates inventory, indicates whether it increases or decreases inventory.
                 * @example increase
                 * @enum {string}
                 */
                increaseOrDecreaseInventory?: "increase" | "decrease";
            };
            /** @description The source transaction from which the inventory document was created. */
            sourceDocument?: {
                /**
                 * @description Unique key for the source document.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique ID for the source document.
                 * @example Build Kits-BldKit-000906-doc
                 */
                id?: string;
                /**
                 * @description URL endpoint for the source document.
                 * @example /objects/inventory-control/stockable-kit-document/23
                 */
                readonly href?: string;
            };
            /** @description Supporting document for this inventory transaction. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique ID for the attachment.
                 * @example Build Kits attachment
                 */
                id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/23
                 */
                readonly href?: string;
            };
            /** @description The last user who printed this document */
            printedBy?: {
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the user.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Unique name of the user.
                 * @example John Smith
                 */
                id?: string;
            };
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            /** @description Lines of the stockable kit document. */
            lines?: components["schemas"]["objects.inventory-control.stockable-kit-document-line"][];
            /** @description Lines of the stockable kit document history. */
            history?: components["schemas"]["objects.inventory-control.document-history"][];
            /** @description Information about the posting summary associated with this document. */
            readonly postingSummary?: {
                /**
                 * @description Unique key for the posting summary.
                 * @example 16
                 */
                key?: string;
                /**
                 * @description Unique ID for the posting summary.
                 * @example 16
                 */
                id?: string;
                /**
                 * @description URL endpoint for the posting summary.
                 * @example /objects/posting-summary/16
                 */
                href?: string;
            };
            /** @description The journal entry associated with this document. */
            readonly journalEntry?: {
                /**
                 * @description Unique key for the journal entry.
                 * @example 30
                 */
                key?: string;
                /**
                 * @description Unique ID for the journal entry.
                 * @example 30
                 */
                id?: string;
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/journal-entry/30
                 */
                href?: string;
            };
        };
        "inventory-control-stockable-kit-documentRequiredProperties": {
            lines?: {
                dimensions?: unknown;
            }[];
        };
        /** @description Each stockable kit document line object lists the stockable kits that were built and the component items that were used to build the kits. */
        "objects.inventory-control.stockable-kit-document-line": {
            /**
             * @description System-assigned key for the stockable kit document line item.
             * @example 17
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the stockable kit document line item. This value is the same as the key for this object.
             * @example 17
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the stockable kit document line item.
             * @example /objects/inventory-control/stockable-kit-document-line/17
             */
            readonly href?: string;
            /**
             * @description The type of transaction document.
             * @example Disassemble Kits
             */
            readonly documentType?: string;
            /**
             * @description Text to appear on the printed document for the line item.
             * @example Bicycle wheels
             */
            memo?: string;
            /**
             * @description Description of the line item.
             * @example Bicycle wheels 0112
             */
            lineDescription?: string;
            /** @description The unit of measure for the line item. */
            unitOfMeasure?: {
                /**
                 * @description Unique key for the unit of measure.
                 * @example 38
                 */
                key?: string;
                /**
                 * @description Unique ID for the unit of measure.
                 * @example Each
                 */
                id?: string;
                /**
                 * @description Endpoint URL for the unit of measure.
                 * @example /objects/inventory-control/unit-of-measure/38
                 */
                readonly href?: string;
            };
            /**
             * Format: decimal-precision-10
             * @description Unit quantity associated with the line item.
             * @example 100
             */
            unitQuantity?: string;
            /**
             * Format: decimal-precision-10
             * @description Base unit quantity associated with the line item.
             * @example 100
             */
            quantity?: string;
            /**
             * Format: decimal-precision-10
             * @description Quantity of the item converted to a downstream document from the original quantity entered.
             * @example 5
             */
            readonly quantityConverted?: string;
            /**
             * Format: decimal-precision-10
             * @description Quantity remaining after a partial conversion of this transaction.
             * @example 5
             */
            readonly quantityRemaining?: string;
            /**
             * Format: decimal-precision-10
             * @description The cost per base unit for the line item.
             * @example 1.00
             */
            readonly cost?: string;
            /**
             * Format: decimal-precision-10
             * @description Unit cost associated with the line item.
             * @example 1.00
             */
            readonly unitCost?: string;
            /**
             * Format: decimal-precision-10
             * @description Extended total cost for the line item.
             * @example 1.00
             */
            readonly extendedCost?: string;
            /**
             * @description Line number of the document line.
             * @example 15
             */
            readonly lineNumber?: number;
            /**
             * @description Cost method associated with the line item.
             * @default null
             * @example standard
             * @enum {string|null}
             */
            readonly costMethod?: null | "average" | "standard" | "FIFO" | "LIFO";
            /**
             * @description Currency used for the line item transaction.
             * @example USD
             */
            txnCurrency?: string;
            /**
             * @description Base currency for the line item transaction.
             * @example USD
             */
            baseCurrency?: string;
            /** @description List of warehouse inventory details including serial number, aisle, bin, and row for the line item. */
            trackingDetail?: components["schemas"]["objects.inventory-control.document-line-detail"][];
            /** @description The stockable kit document that contains the line item. */
            documentHeader?: {
                /**
                 * @description URL endpoint for the stockable kit document.
                 * @example /objects/inventory-control/stockable-kit-document/44
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the stockable kit document.
                 * @example 44
                 */
                key?: string;
                /**
                 * @description Unique ID for the stockable kit document.
                 * @example Build Kits-BLD0001
                 */
                id?: string;
                /**
                 * @description Document number of the stockable kit document.
                 * @example BLD0001
                 */
                documentNumber?: string;
                /**
                 * @description Type of inventory document.
                 * @example Build Kits
                 */
                readonly documentType?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * location
                 * @description Location associated with the stockable kit document line item.
                 */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 11
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the location.
                     * @example LOC-22
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/11
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Department associated with the stockable kit document line item.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 9
                     */
                    readonly key?: string | null;
                    /**
                     * @description Unique ID for the department.
                     * @example Sales
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/9
                     */
                    readonly href?: string;
                };
                /**
                 * warehouse
                 * @description Warehouse associated with the stockable kit document line item.
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
                 * @description Project associated with the stockable kit document line item.
                 */
                project?: {
                    /**
                     * @description Unique key for the project.
                     * @example 2
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the project.
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
                 * @description Task associated with the stockable kit document line item.
                 */
                task?: {
                    /**
                     * @description Unique ID for the task.
                     * @example TSK01
                     */
                    id?: string;
                    /**
                     * @description Unique key for the task.
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
            /** @description The Build Kits document that has been disassembled. (Applies only to Disassemble Kits documents.) */
            sourceDocument?: {
                /**
                 * @description URL endpoint for the stockable kit document.
                 * @example /objects/inventory-control/stockable-kit-document/53
                 */
                readonly href?: string;
                /**
                 * @description Unique ID for the stockable kit document.
                 * @example BB-193
                 */
                id?: string;
                /**
                 * @description Document type of the stockable kit document.
                 * @example Beginning Balance
                 */
                readonly documentType?: string;
                /**
                 * @description Unique key for the stockable kit document.
                 * @example 53
                 */
                key?: string;
            };
            /** @description Document line in the source Build Kits document that has been disassembled. (Applies only to Disassemble Kits documents.) */
            sourceDocumentLine?: {
                /**
                 * @description URL endpoint for the stockable kit document line.
                 * @example /objects/inventory-control/stockable-kit-document-line/60
                 */
                readonly href?: string;
                /**
                 * @description Unique ID for the stockable kit document line.
                 * @example 60
                 */
                id?: string;
                /**
                 * @description Unique key for the stockable kit document line.
                 * @example 60
                 */
                key?: string;
                /**
                 * @description Document type of the stockable kit document line.
                 * @example Disassemble Kits
                 */
                readonly documentType?: string;
            };
            audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Time of the submission.
                 * @example 2014-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
            };
            status?: components["schemas"]["status"];
        };
        /** @description This object provides information about a transaction definition after it posts to the general ledger, including the journal entry record number. */
        "objects.inventory-control.posting-summary": {
            /**
             * @description System-assigned unique key for the posting summary.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID of the posting summary. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the posting summary.
             * @example /objects/inventory-control/posting-summary/23
             */
            readonly href?: string;
            /** @description General ledger journal entry for the associated transaction definition. */
            readonly journalEntry?: {
                /**
                 * @description Unique key for the journal entry.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description ID of the journal entry.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/general-ledger/journal-entry/23
                 */
                href?: string;
            };
            /**
             * @description Title of the posting summary.
             * @example Adjustment Increase: 2021/01/21 Batch
             */
            readonly title?: string;
            /**
             * @description Document type of the transaction definition.
             * @example Adjustment Increase
             */
            readonly documentType?: string;
        };
        /** @description Use inventory totals to keep track of the items on hand that are available for sale. Sage Intacct is preconfigured with nine inventory totals for tracking inventory that's damaged, in transit, on hand, on hold, on order, requisitioned, or scrap and spoilage. You can also create your own inventory totals as needed. */
        "objects.inventory-control.total": {
            /**
             * @description System-assigned key for the inventory total.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description ID of inventory total. This should be a unique value.
             * @example SHIPPED
             */
            id?: string;
            /**
             * @description Endpoint for the inventory total.
             * @example /objects/inventory-control/total/23
             */
            readonly href?: string;
            /**
             * @description Inventory total type, which is assigned when the total is created. All custom totals that are created are accumulative type.
             * @example accumulative
             * @enum {string}
             */
            readonly updateType?: "accumulative" | "perPeriod" | "continuous";
            status?: components["schemas"]["status"];
        };
        "inventory-control-totalRequiredProperties": Record<string, never>;
        /** @description Landed cost categories are labels that identify the distribution method for proportionately applying the amount of a landed cost, either estimated costs or actual costs, to the applicable inventory items in the original purchase transactions. */
        "objects.inventory-control.landed-cost-category": {
            /**
             * @description System-assigned unique key for the landed cost category.
             * @example 51
             */
            readonly key?: string;
            /**
             * @description ID for the landed cost category.
             * @example FRBYCOUNT
             */
            id?: string;
            /**
             * @description URL endpoint for the landed cost category.
             * @example /objects/inventory-control/landed-cost-category/51
             */
            readonly href?: string;
            /**
             * @description Name of the landed cost category.
             * @example Freight by count
             */
            name?: string;
            /**
             * @description Specify how the amount of a landed cost is proportionately distributed to the applicable inventory items in the original purchase or inventory control transaction.
             * @example count
             * @enum {string}
             */
            distributionMethod?: "count" | "value" | "volume" | "weight";
            status?: components["schemas"]["status"];
        };
        "inventory-control-landed-cost-categoryRequiredProperties": Record<string, never>;
        /** @description Lot categories let you group a specific set of items that have something in common. */
        "objects.inventory-control.lot-category": {
            /**
             * @description System-assigned unique key for the lot category.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description ID for the lot category.
             * @example Medi-Lot
             */
            id?: string;
            /**
             * @description A meaningful descriptive name for the lot category.
             * @example Medical Item Lot
             */
            name?: string;
            /**
             * @description URL endpoint for the lot category.
             * @example /objects/inventory-control/lot-category/12
             */
            readonly href?: string;
        };
        "inventory-control-lot-categoryRequiredProperties": Record<string, never>;
        /** @description Replenishment demand forecast information for an item. */
        "objects.inventory-control.replenishment-forecast": {
            /**
             * @description System-assigned key for the replenishment forecast.
             * @example 47
             */
            readonly key?: string;
            /**
             * @description Unique ID for the replenishment forecast.
             * @example 47
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the replenishment forecast.
             * @example /objects/inventory-control/replenishment-forecast/47
             */
            readonly href?: string;
            /**
             * @description Note to help identify the characteristics of the item forecast.
             * @example forecast for Monitor-HP.
             */
            description?: string;
            /** @description Item to be replenished. */
            item?: {
                /**
                 * @description Unique key for the item.
                 * @example 34
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the item.
                 * @example B001
                 */
                id?: string;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/34
                 */
                readonly href?: string;
                /**
                 * @description Name of the item.
                 * @example Monitor-HP
                 */
                readonly name?: string;
            };
            /** @description Replenishment unit of measure. This is a read-only field. This is same as the default unit of measure for the item. */
            readonly replenishmentUnit?: {
                /**
                 * @description Unique key for the unit.
                 * @example 79
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the unit.
                 * @example Each
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the unit.
                 * @example /objects/inventory-control/unit-of-measure/79
                 */
                readonly href?: string;
            };
            /**
             * @description Forecast status of the item:
             *      * `active` - the forecast is for an item where the replenishment method for the item or any warehouses in the item record is `Demand forecast by fluctuating values`.
             *      * `inactive` - the forecast is for an item where the replenishment method for the item and all warehouses in the item record is not `Demand forecast by fluctuating values`.
             *      * `null` - is considered as inactive for the forecast.
             *
             *      This is a read-only field.
             *
             *      If the replenishment method of an item or any item-warehouse combination gets changed to `Demand forecast by fluctuating values`, the forecast becomes active.
             *      Inactive forecasts can be edited and deleted.
             * @default active
             * @example active
             * @enum {string}
             */
            readonly forecastStatus?: "active" | "inactive" | null;
            /** @description Line items of the replenishment forecast. */
            lines?: components["schemas"]["objects.inventory-control.replenishment-forecast-line"][];
            audit?: components["schemas"]["audit.s1"];
        };
        "inventory-control-replenishment-forecastRequiredProperties": {
            lines?: unknown[];
        };
        /** @description Line items of the replenishment forecast. */
        "objects.inventory-control.replenishment-forecast-line": {
            /**
             * @description System-assigned unique key for the replenishment forecast line.
             * @example 115
             */
            readonly key?: string;
            /**
             * @description ID for the replenishment forecast line. This value is the same as the key for this object.
             * @example 115
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the replenishment forecast line.
             * @example /objects/inventory-control/replenishment-forecast-line/115
             */
            readonly href?: string;
            /**
             * Format: date
             * @description The date on which the forecasted quantity is needed.
             * @example 2026-11-01
             */
            effectiveDate?: string;
            /**
             * @description The expected demand for the item on the effective date. Express the quantity in the same units of measure (UOM) that's specified in the `replenishmentUnit` field in the owning replenishment forecast.
             *
             *     For example, if the `replenishmentUnit` for the item is `each`, express the quantity in each. Or, if it's `dozens`, express the quantity in dozens.
             * @example 250
             */
            demandQuantity?: string;
            /** @description Item to be replenished. */
            item?: {
                /**
                 * @description Unique key for the replenishment item.
                 * @example 34
                 */
                readonly key?: string;
                /**
                 * @description ID for the replenishment item.
                 * @example B001
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the replenishment item.
                 * @example /objects/inventory-control/item/34
                 */
                readonly href?: string;
                /**
                 * @description Name of the replenishment item.
                 * @example Monitor-HP
                 */
                readonly name?: string;
            };
            /** @description Header level details for the replenishment forecast to which the line belongs. */
            replenishmentForecast?: {
                /**
                 * @description Unique key for the replenishment forecast.
                 * @example 47
                 */
                readonly key?: string;
                /**
                 * @description ID for the replenishment forecast.
                 * @example 47
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the parent replenishment forecast.
                 * @example /objects/inventory-control/replenishment-forecast/47
                 */
                readonly href?: string;
                /**
                 * @description Name of the parent replenishment forecast.
                 * @example forecast for Monitor-HP.
                 */
                readonly name?: string;
            };
            /** @description Warehouse for which the demand for the item is forecasted. If there is no warehouse specified, the line applies to all warehouses that do not have an explicit entry in the forecast. */
            warehouse?: {
                /**
                 * @description Unique key for the warehouse.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description ID for the warehouse.
                 * @example WH10001
                 */
                id?: string;
                /**
                 * @description URL endpoint for the warehouse.
                 * @example /objects/inventory-control/warehouse/3
                 */
                readonly href?: string;
                /**
                 * @description Name of the warehouse.
                 * @example US AZ Warehouse 10001
                 */
                readonly name?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description This object provides information about the purchase orders generated from an inventory replenishment run. A replenishment run record is generated each time you create purchase orders using the replenishment process to reorder items. */
        "objects.inventory-control.replenishment-run": {
            /**
             * @description System-assigned unique key for the replenishment run.
             * @example 10
             */
            readonly key?: string;
            /**
             * @description ID for the replenishment run. This value is the same as the key for this object.
             * @example 10
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the replenishment run.
             * @example /objects/inventory-control/replenishment-run/10
             */
            readonly href?: string;
            /**
             * Format: date
             * @description The date of the replenishment run.
             * @example 2026-10-12
             */
            runDate?: string;
            /** @description The ID of the user who created the purchase orders using the replenishment process. */
            readonly runByUser?: {
                /**
                 * @description Unique key for the user.
                 * @example 2
                 */
                readonly key?: string;
                /**
                 * @description Login ID for the user.
                 * @example john.doe
                 */
                readonly id?: string;
                /**
                 * @description Name of the user.
                 * @example John Doe
                 */
                userName?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/21
                 */
                readonly href?: string;
            };
            /** @description The purchasing associated transaction definition for the purchase orders in the replenishment run. */
            txnDefinition?: {
                /**
                 * @description Unique key for the transaction definition.
                 * @example 504
                 */
                key?: string;
                /**
                 * @description Name of the transaction definition.
                 * @example Purchase Order
                 */
                id?: string;
                /**
                 * @description URL endpoint for the transaction definition.
                 * @example /objects/purchasing/txn-definition/504
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description The transaction date of the purchase orders in the replenishment run.
             * @example 2026-10-12
             */
            txnDate?: string;
            /**
             * @description State of the replenishment run:
             *      * `success`- The system was able to create all of the purchase orders requested in the replenishment run.
             *      * `partialSuccess`- The system was able to create some of the purchase orders requested in the replenishment run but some failed. See the error message in the replenishment run lines for information about why the process failed.
             *      * `inQueue`- The replenishment run is waiting for the system scheduler to start the purchase order generation process.
             *      * `warnings`- The system was able to create all of the purchase orders requested in the replenishment run but there were warnings during the process. See the warning message in the replenishment run lines for information about the warnings.
             *      * `posted`- The purchase orders in the replenishment run have been posted.
             *      * `created`- The replenishment run has been created but the system has not started
             *      * `failed`- The system was not able to create any purchase orders requested in the replenishment run. See the error message in the replenishment run lines for information about why the process failed.
             * @example partialSuccess
             * @enum {string}
             */
            runState?: "success" | "partialSuccess" | "inQueue" | "warnings" | "posted" | "created" | "failed";
            /**
             * @description Execution mode of the replenishment run.
             *      * `online`- The replenishment run was created in the foreground. The system creates an online replenishment run when 10 or fewer purchase orders are to be created.
             *      * `offline`- The replenishment run was created in the background. The system creates an offline replenishment run when more than 10 purchase orders are to be created.
             * @example online
             * @enum {string}
             */
            executionMode?: "online" | "offline";
            /**
             * @description The number of purchase orders in the replenishment run.
             * @example 3
             */
            txnCount?: number;
            /**
             * @description The number of items requested to be reordered in the replenishment run.
             * @example 8
             */
            itemCount?: number;
            /**
             * Format: decimal-precision-10
             * @description The total purchase amount for all the items requested to be reordered in the replenishment run in the base currency.
             * @example 6111.0000000000
             */
            purchaseAmountBase?: string;
            /** @description Lines of the replenishment run. */
            lines?: components["schemas"]["objects.inventory-control.replenishment-run-line"][];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Detailed information for the purchase order generated from the replenishment run. */
        "objects.inventory-control.replenishment-run-line": {
            /**
             * @description System-assigned key for the replenishment run line.
             * @example 15
             */
            readonly key?: string;
            /**
             * @description ID for the replenishment run line. This value is the same as the key for this object.
             * @example 15
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the replenishment run line.
             * @example /objects/inventory-control/replenishment-run-line/15
             */
            readonly href?: string;
            /** @description Replenishment run which the current line is part of. */
            readonly replenishmentRun?: {
                /**
                 * @description Unique key for the replenishment run.
                 * @example 10
                 */
                readonly key?: string;
                /**
                 * @description Replenishment run ID.
                 * @example 10
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the replenishment run.
                 * @example /objects/inventory-control/replenishment-run/10
                 */
                readonly href?: string;
            };
            /**
             * @description The vendor ID with the vendor's name for the purchase order.
             * @example MARREL--Marrel Toys
             */
            readonly vendorIdAndName?: string;
            /** @description Purchase order generated from the replenishment run. */
            readonly purchaseOrder?: {
                /**
                 * @description Unique key for the purchasing document.
                 * @example 9574
                 */
                readonly key?: string;
                /**
                 * @description ID for the purchasing document.
                 * @example Purchase Order-PO#0347#doc
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the purchasing document.
                 * @example /objects/purchasing/document/9574
                 */
                readonly href?: string;
            };
            /**
             * @description Number of line items in the purchase order.
             * @example 5
             */
            numberOfItems?: number;
            /**
             * Format: decimal-precision-10
             * @description The amount of the purchase order transaction in the currency of the vendor.
             * @example 4670.0000000000
             */
            txnAmount?: string;
            /**
             * Format: decimal-precision-10
             * @description The amount of the purchase order transaction in the base currency.
             * @example 4670.0000000000
             */
            txnAmountBase?: string;
            /**
             * @description Purchase order transaction currency with the vendor.
             * @example USD
             */
            txnCurrency?: string;
            /**
             * @description State of the purchase order transaction creation.
             *      * created - The system successfully created the purchase order. All line items were processed and the transaction is ready for use.
             *      * warnings - The system created the purchase order, but there are warnings. See the `errorMessage` text for a description of the warnings.
             *      * failed - The system could not create the purchase order due to one or more errors, such as a closed GL period, an incompatible location or department, or a data validation failure. The transaction was rolled back and no purchase order exists in the system; see the error message for the specific reason.
             * @example created
             * @enum {string}
             */
            poCreateState?: "created" | "warnings" | "failed";
            /**
             * @description If the `poCreateState` is 'failed', this error message explains why the purchase order wasn't created. If the `poCreateState` is 'warnings', this error message provides more information about the warnings encountered during the creation process.
             * @example The warehouse Location's currency has to be the same as document's currency in line 2; Base Currency has to be the same as Location's Base Currency in line 2; Error preparing values!; Could not create Document record!
             */
            errorMessage?: string;
        };
        /** @description Serial masks define the format for product serial numbers. Serial numbers are strings of alphanumeric characters used to identify particular inventory items. */
        "objects.inventory-control.serial-mask": {
            /**
             * @description System-assigned unique key for the serial mask.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description ID for the serial mask. Specify one or more of the following characters:
             *
             *     * a - any lowercase alphabetic character
             *     * A - any uppercase alphabetic character
             *     * N - any number
             *     * ? - any character
             *     * space - space
             *     * ' - quotation mark
             *
             *     Use quotes to define separators, such as hyphens or colons, or to define a fixed string of alphanumeric characters.
             *
             *     Any characters between quotes are handled as a fixed part of the sequence number. Two consecutive quotes represent a single quote.
             * @example AAAANNNNNNN
             */
            id?: string;
            /**
             * @description The number of characters in the serial mask. The number must match the total length of all the characters in the serial mask, including spaces.
             *
             *     For example, a serial mask of AANNN is 5 and of AA NNN is 6.
             * @example 10
             */
            length?: number;
            /**
             * @description URL endpoint for the serial mask.
             * @example /objects/inventory-control/serial-mask/23
             */
            readonly href?: string;
        };
        "inventory-control-serial-maskRequiredProperties": Record<string, never>;
        /** @description Inventory Control valuation maintenance operations allow you to detect any issues that may exist for your inventory valuation, including current unit costs and cost of goods sold (COGS), and update these costs. */
        "objects.inventory-control.valuation-maintenance": {
            /**
             * @description System-assigned unique key for the valuation maintenance object.
             * @example 36
             */
            readonly key?: string;
            /**
             * @description System-assigned ID for the valuation maintenance object. This value is the same as the key for this object.
             * @example 36
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the valuation maintenance object.
             * @example /objects/inventory-control/valuation-maintenance/36
             */
            readonly href?: string;
            /**
             * @description Summary of the valuation maintenance operation and resulting cost changes.
             * @example Costing issues: 1; Negative inventory warnings: 0
             */
            readonly summaryResults?: string;
            /**
             * @description User-specified name for this valuation maintenance object.
             * @example 4/25/2026 run 08:34:31 PM
             */
            name?: string;
            /**
             * @description User-specified description for this valuation maintenance object.
             * @example Run on 4/25/2026 08:34:31 PM
             */
            description?: string;
            /**
             * @description Outcome of the valuation maintenance operation associated with this object.
             * @example Updated
             */
            readonly state?: string;
            /**
             * @description Email address for receiving notifications related to this valuation maintenance object.
             * @example joe.james@mycompany.com
             */
            emailAddress?: string;
            /**
             * @description Filters that limit the scope of the associated valuation maintenance operation. The operation will be carried out for transactions whose entries include the items determined by applying the filters.
             *
             *     When there are no transactions that include items that satisfy
             *     the filter conditions (for example none in the specified item range belonging to the specified item group, or none identified by the specified item group, warehouse, and cost method combination), then
             *     the valuation maintenance operation will still be recorded, but will take no action.
             */
            valuationFilters?: {
                /** @description The start of the item range for which to perform the valuation maintenance operation. If the `toItem` filter is not specified, then this filter identifies the only item for which to perform the valuation maintenance; otherwise, the valuation maintenance will be performed for all items in the range from `fromItem` to `toItem`, inclusive. */
                fromItem?: {
                    /**
                     * @description Unique key for the item.
                     * @example 38
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the item.
                     * @example Car Battery
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the item.
                     * @example /objects/inventory-control/item/38
                     */
                    readonly href?: string;
                };
                /** @description The end of the item range for which to perform the valuation maintenance operation. If the `fromItem` filter is not specified, then this filter identifies the only item for which to perform the valuation maintenance; otherwise, the valuation maintenance will be performed for all items in the range from `fromItem` to `toItem`, inclusive. */
                toItem?: {
                    /**
                     * @description Unique key for the item.
                     * @example 72
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the item.
                     * @example Car Tire
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the item.
                     * @example /objects/inventory-control/item/72
                     */
                    readonly href?: string;
                };
                /** @description The warehouse for which to perform the valuation maintenance operation. If this filter is not specified, then the valuation maintenance operation will be performed for all warehouses for items that satisfy the other specified filters. */
                warehouse?: {
                    /**
                     * @description Unique key for the warehouse.
                     * @example 38
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the warehouse.
                     * @example CA Warehouse
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the warehouse.
                     * @example /objects/inventory-control/warehouse/38
                     */
                    readonly href?: string;
                };
                /** @description The item group for which to perform the valuation maintenance operation. If specified, then the valuation maintenance operation will be performed for all items in the specified warehouse (or in all warehouses if the warehouse filter is not specified) that belong to this item group. If this filter is not specified, then the valuation maintenance operation will be performed for all items in the specified warehouse (or in all warehouses if the warehouse filter is not specified) that satisfy the other specified filters, regardless of item group membership. */
                itemGroup?: {
                    /**
                     * @description Unique key for the item group.
                     * @example 42
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the item group.
                     * @example Automotive accessories
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the item group.
                     * @example /objects/inventory-control/item-group/38
                     */
                    readonly href?: string;
                };
                /**
                 * @description Cost methods to perform valuation maintenance; any or all of Average, Standard, FIFO, or LIFO
                 * @example [
                 *       "Average",
                 *       "Standard",
                 *       "FIFO",
                 *       "LIFO"
                 *     ]
                 */
                costMethods?: string[];
            };
            /** @description Schedule information for the associated maintenance valuation operation. If the `isScheduledOperation` property is false, then this schedule information will be ignored. */
            maintenanceSchedule?: {
                /**
                 * @description Repeat period or frequency of the schedule. For example, a repeat period of `weekly` with a repeat interval of `2` means the schedule will execute every 2 weeks. A repeat period of `monthly` with a repeat interval of `1` and a monthly repeat day of `dayOfTheWeek` means the schedule will execute on the same day of the week every month.
                 * @example daily
                 * @enum {string}
                 */
                repeatPeriod?: null | "daily" | "weekly" | "monthly" | "yearly";
                /**
                 * @description Repeat interval (number of periods) between successive executions. For example, if `repeatPeriod` is `weekly`, a `repeatInterval` of `1` means the operation will run every 1 week; a `repeatInterval` of `2` means the operation will run every 2 weeks.
                 * @example 2
                 */
                repeatInterval?: number;
                /**
                 * Format: date
                 * @description When to start the schedule. This date drives not only the start of the schedule but also the repeat by entries for daily, monthly, and yearly.
                 * @example 2026-04-25
                 */
                startDate?: string;
                /**
                 * Format: date
                 * @description When to end the schedule, if the `repeatEndType` is set to `endOnDate`. This value will be ignored if the `repeatEndType` is not `endOnDate`.
                 * @example 2026-04-25
                 */
                endDate?: string;
                /**
                 * @description For a monthly `repeatPeriod`, specifies the day of the month when the schedule executes:
                 *
                 *     * `dayOfTheMonth` - Use the day of the month from the `startDate` field. For example, if the start date is the 15th, then repeat on the 15th of subsequent months.
                 *     * `dayOfTheWeek` - Use the day and week of the month from the `startDate` field. For example, if the start day is a Monday, then repeat on the Monday after a month elapses.
                 *     * `endOfTheMonth` - Use the last day of each month.
                 *
                 *     This value will be ignored if the `repeatPeriod` is not set to `monthly`.
                 * @example dayOfTheMonth
                 * @enum {string}
                 */
                monthlyRepeatDay?: null | "dayOfTheMonth" | "dayOfTheWeek" | "endOfTheMonth";
                /**
                 * @description The number of times the schedule is executed when `occurrences` is specified for the `repeatEndType`. This value will be ignored if `repeatEndType` is not set to `occurrences`.
                 * @example 1
                 */
                numberOfOccurrences?: number;
                /**
                 * @description For a weekly `repeatPeriod`, this specifies the day of the week when the schedule executes. This value will be ignored if the `repeatPeriod` is not set to `weekly`.
                 * @example sunday
                 * @enum {string}
                 */
                weeklyRepeatDay?: null | "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
                /**
                 * @description Specifies whether the schedule ends, and if it should end on a specified date, or after a specified number of occurrences. If `never` is specified, then the schedule will have no end date; if `occurrences` is specified, then the schedule will end after the number of occurrences specified in the `numberOfOccurrences` field; if `endOnDate` is specified, then the schedule will end on the date specified in the `endDate` field. This value will be ignored if the `repeatPeriod` field is not specified.
                 * @example occurrences
                 * @enum {string}
                 */
                repeatEndType?: null | "never" | "occurrences" | "endOnDate";
            };
            /**
             * @description Specifies whether the associated valuation maintenance operation is a scheduled operation that executes according to the specified `maintenanceSchedule`.
             * @default false
             * @example true
             */
            isScheduledOperation?: boolean;
            /** @description Specifies additional settings for the associated valuation maintenance operation. */
            maintenanceOptions?: {
                /**
                 * Format: date
                 * @description The valuation maintenance operation considers only transactions on or after the specified date. This allows you to limit the scope of the valuation maintenance operation to transactions that have occurred since a certain date, for example since the last time you ran valuation maintenance.
                 * @example 2026-04-25
                 */
                asOfDate?: string;
                /**
                 * @description Specifies the valuation maintenance action:
                 *     * `analyze` - Analyze costs only: Recalculates the inventory costs for transactions that occurred on or after the `asOfDate`. Identifies where the recalculated costs differ from the originally recorded costs, and generates reports with the results, without updating any costs.
                 *     * `update` - Analyze and update: Recalculates the inventory costs for transactions that occurred on or after the `asOfDate`, identifies where the recalculated costs differ from the originally recorded costs, updates the costs, and generates reports with the results.
                 * @default analyze
                 * @example analyze
                 * @enum {string}
                 */
                action?: "analyze" | "update";
                /**
                 * @description Specifies which transactions to report on:
                 *     * `all` - Include all transactions.
                 *     * `costChanges` - Only transactions that have costing errors.
                 * @default costChanges
                 * @example all
                 * @enum {string}
                 */
                transactionsToReport?: "all" | "costChanges";
                /**
                 * @description Periods in which to update costs in the inventory subledger and internal cost tables.
                 *
                 *     When the `action` is `update`, this setting specifies whether the valuation maintenance operation is allowed to act on transactions in `closed` periods; otherwise it is ignored.
                 * @default open
                 * @example open
                 * @enum {string}
                 */
                costUpdatePeriods?: "open" | "closed";
                /**
                 * @description Specifies whether to update the general ledger with recalculated COGS in open periods (occurring after the `asOfDate`) when the `action` is `update`. This setting is ignored when the `action` is `analyze`, since costs are not updated in that case, or for transactions in closed periods, since costs for those transactions will not be updated regardless of the value of this setting.
                 * @default true
                 * @example true
                 */
                updateGL?: boolean;
            };
            /** @description Audit information for the valuation maintenance object. */
            readonly audit?: components["schemas"]["audit.s1"] & {
                /**
                 * Format: date-time
                 * @description Creation timestamp.
                 * @example 2026-01-08T11:28:12Z
                 */
                readonly createdDateTime?: string;
                /**
                 * Format: date-time
                 * @description Last modification timestamp.
                 * @example 2026-01-08T11:28:12Z
                 */
                readonly modifiedDateTime?: string;
                /**
                 * @description User who created this object.
                 * @example luser
                 */
                readonly createdBy?: string;
            };
        };
        "inventory-control-valuation-maintenanceRequiredProperties": Record<string, never>;
        /** @description An inventory transaction definition includes the accounting rules, workflow settings, security settings, and other characteristics for a transaction. */
        "objects.inventory-control.txn-definition": {
            /**
             * @description System-assigned key for the transaction definition.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique name for the transaction definition. The name cannot be changed after the transaction definition is created.
             * @example Adjustment Decrease
             */
            id?: string;
            /**
             * @description URL endpoint for the transaction definition.
             * @example /objects/inventory-control/txn-definition/23
             */
            readonly href?: string;
            /**
             * @description Specify the template type that is appropriate for the transactions that will be based on this transaction definition. Template type determines whether certain fields are included in a transaction.
             * @default quote
             * @example adjustment
             * @enum {string}
             */
            templateType?: "quote" | "order" | "list" | "invoice" | "adjustment" | "other";
            /**
             * @description A meaningful description of the transaction definition.
             * @example Adjustment Decrease (Quantity Only)
             */
            description?: string;
            /**
             * @description Workflow category for the transaction definition. Certain template types (`templateType`) should be associated with certain workflow categories as follows:
             *     * `order` template type can be associated with these workflow categories: `receipt`, `transfer`, `shipping`
             *     * `adjustment` template type can be associated with the `adjustment` workflow
             *     * `list` template type can be associated with the `shipping` workflow
             *     * `other` template type can be associated with the `adjustment` workflow
             *
             *     In the Sage Intacct user interface, the workflow category associates the transaction with the appropriate icon on the Overview page and with the applicable transaction menu grouping in the Inventory Control menu.
             * @default adjustment
             * @example receipt
             * @enum {string}
             */
            workflowCategory?: "receipt" | "transfer" | "adjustment" | "shipping";
            /**
             * @description Specify a reporting category that best reflects the purpose of the transaction definition so that similar documents can be grouped when building reports. (This field is applicable for use with Interactive Custom Report Writer or Interactive Visual Explorer subscriptions only.)
             * @default null
             * @example inventoryAdjustment
             * @enum {string|null}
             */
            reportingCategory?: null | "inventoryAdjustment" | "buildKits" | "disassembleKits" | "inventoryDamagedGoods" | "inventoryReceipt" | "inventoryScrapOrSpoilage" | "inventoryShipper" | "warehouseTransfer";
            status?: components["schemas"]["status"];
            /** @description Transaction numbering settings for the transaction definition. */
            txnNumbering?: {
                /**
                 * @description Set to `true` if you want to specify a numbering sequence for the transaction definition.
                 * @default false
                 * @example false
                 */
                readonly enableSequenceNumbering?: boolean;
                /** @description If `enableSequenceNumbering` is set to `true`, specify the numbering sequence to use to automatically number transactions. Leave this field blank to number transactions manually. */
                numberingSequence?: {
                    /**
                     * @description Unique key for the numbering sequence.
                     * @example 16
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the numbering sequence.
                     * @example Adjustment Decrease
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the numbering sequence.
                     * @example /objects/company-config/document-sequence/16
                     */
                    readonly href?: string;
                };
                /**
                 * @description Set to `true` to ensure that numbers are never skipped. Enabling this option can affect performance when a large volume of transactions is entered at the same time.
                 * @default false
                 * @example false
                 */
                preserveSequenceNumbers?: boolean;
                /**
                 * @description Set to `true` if transactions should inherit source document numbers. If set to `true`, documents converted from this document will have the same document number.
                 * @default false
                 * @example false
                 */
                inheritSourceDocumentNumber?: boolean;
            };
            /** @description Inventory control fields apply only to companies subscribed to Inventory Control. */
            inventoryControl?: {
                /**
                 * @description Set to `true` to alert users if the quantity needed is greater than the ONHAND total in the selected warehouse. The alert also shows the ONORDER and ONHOLD totals. In the Sage Intacct user interface, the alert displays when the user tabs out of the Quantity field in a transaction.
                 * @default true
                 * @example true
                 */
                enableWarnOnLowQty?: boolean;
                /**
                 * @description The system assigns a value based on the inventory total details provided. If the inventory total details affect both quantity and value, this field is set to `quantityAndValue`.
                 * @default no
                 * @example value
                 * @enum {string}
                 */
                readonly updatesInventory?: "no" | "quantity" | "value" | "quantityAndValue";
                /**
                 * @description The system assigns a value based on the inventory total details (`inventoryTotalDetail`) provided. This field is set to `true` if the transaction will update cost.
                 * @default false
                 * @example false
                 */
                readonly updatesCost?: boolean;
                /**
                 * @description The system assigns a value based on the inventory total details provided and whether those totals are adding quantity/value or decreasing the quantity/value.
                 * @default increase
                 * @example increase
                 * @enum {string}
                 */
                readonly increaseOrDecreaseInventory?: "increase" | "decrease";
                /**
                 * @description Determines how warehouses are presented to the user in the warehouse dropdown list in the transaction.
                 * @default sortByID
                 * @example sortByID
                 * @enum {string}
                 */
                warehouseSelectionMethod?: "sortByID" | "sortByName" | "warehouseWithAvailableInventory" | "useTheDefaultWarehouse";
                /** @description Provide warehouse information only when the `warehouseSelectionMethod` is `useTheDefaultWarehouse`. Note that a user's default warehouse setting in their user preferences overrides this setting. */
                defaultWarehouse?: {
                    /**
                     * @description Unique key for the warehouse.
                     * @example 20
                     */
                    key?: string;
                    /**
                     * @description ID for the warehouse.
                     * @example Warehouse-001
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the warehouse.
                     * @example /objects/inventory-control/warehouse/20
                     */
                    readonly href?: string;
                };
            };
            /** @description Accounting settings for the transaction definition. */
            accounting?: {
                /**
                 * @description Specify whether the transaction post process creates a GL entry.
                 *     `postToGeneralLedger`- The transaction posts directly to the General Ledger.
                 *     `doNotPost`- Transaction post process will not create a GL entry.
                 *
                 *     If you set to `postToGeneralLedger`, at least one debit and credit `inventoryAccountMapping` should be specified. A null value is processed as `doNotPost` for transaction definitions.
                 * @default postToGeneralLedger
                 * @example postToGeneralLedger
                 * @enum {string|null}
                 */
                txnPosting?: "postToGeneralLedger" | "doNotPost" | null;
                /**
                 * @description Set to `true` to allow users to specify standard subtotals for the transaction, such as tax or a discount. If this field is set to `true`, you must add at least one `subtotalDetail`.
                 * @default false
                 * @example false
                 */
                isSubTotalsEnabled?: boolean;
            };
            /**
             * @description Indicates how the system processes transactions that are partially completed.
             *     `leaveTxnOpen` - converts the transaction to another transaction type, and the system leaves the original transaction open until the all items are completed.
             *     `closeTxn` - converts the transaction to another transaction type, and the system closes the transaction regardless of whether the transaction is complete.
             *     A null value is processed as `closeTxn`.
             * @default closeTxn
             * @example closeTxn
             * @enum {string|null}
             */
            conversionType?: "leaveTxnOpen" | "closeTxn" | null;
            /** @description Pricing and terms for the transaction definition. */
            pricingAndTerms?: {
                /** @description If layered price lists are in use, specify the first price list that the system will evaluate when determining a suggested transaction price. */
                initialPriceList?: {
                    /**
                     * @description Unique key for the price list.
                     * @example 12
                     */
                    key?: string;
                    /**
                     * @description ID for the price list.
                     * @example Base Price List
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the price list.
                     * @example /objects/inventory-control/price-list/12
                     */
                    readonly href?: string;
                };
                /** @description If layered price lists are in use, you can specify a special price list (for example, a discounted price list or seasonal price list). The special price list takes precedence over the `initialPriceList`. */
                specialPriceList?: {
                    /**
                     * @description Unique key for the price list.
                     * @example 13
                     */
                    key?: string;
                    /**
                     * @description ID for the price list.
                     * @example Discount Price List
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the price list.
                     * @example /objects/inventory-control/price-list/13
                     */
                    readonly href?: string;
                };
            };
            /** @description Print settings for the transaction definition. */
            print?: {
                /**
                 * @description Specify the printed document template to use for printed output (PDFs).
                 * @example Adjustment_US_Template
                 */
                documentTemplate?: string;
                /**
                 * @description If you do not provide a `documentTemplate`, specify any text that you want to appear on every document printed from this transaction.
                 * @example Thank you for your business.
                 */
                defaultText?: string;
            };
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `enableUserOrGroupPermission` field instead.
             * @default false
             */
            enableUserOrGroupPermmission?: boolean;
            /**
             * @description By default, all users with the appropriate application permissions have access to transactions that use this transaction definition. To restrict access to certain users or groups, set this field to `true`.
             * @default false
             * @example false
             */
            enableUserOrGroupPermission?: boolean;
            /** @description User override settings for the transaction definition. */
            userOverrides?: {
                /**
                 * @description Set to `true` to allow users to override the department set for the transaction.
                 * @default false
                 * @example false
                 */
                allowDepartmentOverride?: boolean;
                /**
                 * @description Set to `true` to allow users to override the location set for the transaction.
                 * @default false
                 * @example false
                 */
                allowLocationOverride?: boolean;
            };
            /** @description Document permission settings. Settings that restrict editing, deletion, or require convert only, those settings only apply to posting. These settings do not impact a user's ability to save or edit draft transactions. */
            documentPermissions?: {
                /**
                 * @description Sets the edit permission for this transaction type.
                 *     * `noEdit` - The user cannot edit the transaction after it is created, unless it is in draft state.
                 *     * `beforePrinting` - The user can edit the transaction until it has been printed to PDF. After it has been printed, the transaction cannot be edited.
                 *     * `editInDraftOnly` - The user can edit the transaction until it has been posted. After it has been posted, the transaction cannot be edited.
                 *     * `all` - The user can edit the transaction as allowed by the transaction's condition. For editing restrictions, see [Edit a transaction](https://www.intacct.com/ia/docs/en_US/help_action/Inventory_Control/Using_Inventory_Control/Transactions/inventory-txn-lists.htm?cshid=Inventory_txn_lists#Editatransaction) in the Sage Intacct Help Center.
                 * @default all
                 * @example all
                 * @enum {string}
                 */
                editPolicy?: "noEdit" | "beforePrinting" | "editInDraftOnly" | "all";
                /**
                 * @description Sets the delete permission for this transaction type.
                 *     * `noDelete` - The user cannot delete the transaction after it is created.
                 *     * `beforePrinting` The user can delete the transaction until it has been printed to PDF. After it has been printed, the transaction cannot be deleted.
                 *     * `deleteInDraftOnly` - The user can delete the transaction only when it is in draft state.
                 *     * `all` - The user can delete this transaction as allowed by the transaction's condition. For deletion restrictions, see (Delete a transaction](https://www.intacct.com/ia/docs/en_US/help_action/Inventory_Control/Using_Inventory_Control/Transactions/inventory-txn-lists.htm?cshid=Inventory_txn_lists#Deleteatransaction) in the Sage Intacct Help Center.
                 * @default all
                 * @example all
                 * @enum {string}
                 */
                deletePolicy?: "noDelete" | "beforePrinting" | "deleteInDraftOnly" | "all";
                /**
                 * @description Sets the create permissions for this transaction type.
                 *     * `newDocumentOrConvert` - The user can create the transaction as a standalone transaction or the user can create the transaction by converting the previous transaction in the workflow.
                 *     * `convertOnly` - The user can can only create this document by converting the previous transaction in the workflow.
                 * @default newDocumentOrConvert
                 * @example newDocumentOrConvert
                 * @enum {string}
                 */
                createPolicy?: "newDocumentOrConvert" | "convertOnly";
                /**
                 * @description Sets the context for where users can create transactions from this transaction definition within a multi-entity, shared environment.
                 * @default topLevelOrEntity
                 * @example topLevelOrEntity
                 * @enum {string}
                 */
                multiEntityRuleForTxn?: "topLevelOrEntity" | "topLevelOnly" | "entityOnly";
            };
            /** @description Specifies the inventory running total that will be affected by resulting transactions and how the total will be affected. */
            inventoryTotalDetail?: components["schemas"]["objects.inventory-control.txn-definition-total-detail"][];
            /** @description Related inventory transaction subtotals. If `isSubTotalsEnabled` is set to `true`, you must add at least one subtotal detail. */
            subtotalDetail?: components["schemas"]["objects.inventory-control.txn-definition-subtotal-detail"][];
            /** @description Document conversion details for transactions. */
            sourceDocumentDetail?: components["schemas"]["objects.inventory-control.txn-definition-source"][];
            /** @description Related inventory transaction definition GL account mappings by item GL group. If `txnPosting` is set to `postToGeneralLedger`, enter applicable inventory account mappings. For example, if the transaction definition is for an adjustment that accounts for spoilage, you might debit the spoilage account and credit the Inventory account. */
            inventoryAccountMapping?: components["schemas"]["objects.inventory-control.txn-definition-cogs-gl-detail"][];
            /** @description Provides details about the entities that can create transactions, and also includes settings for each entity, such as numbering sequences and document templates. These details and settings are applicable to transaction definitions that are configured to create transactions at the `topLevelOrEntity` or `entityOnly` level. */
            entitySettingDetail?: components["schemas"]["objects.inventory-control.txn-definition-entity-detail"][];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "inventory-control-txn-definitionRequiredProperties": Record<string, never>;
        /**
         * @description Inventory account mapping details for inventory transaction definitions that post cost of goods (COGS) adjustments to the General Ledger.
         *     For example, a transaction definition for a cost of goods adjustment related to spoilage can debit the spoilage account and credit the inventory account.
         */
        "objects.inventory-control.txn-definition-cogs-gl-detail": {
            /**
             * @description System-assigned unique key for the inventory transaction definition COGS GL detail.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID of the inventory transaction definition COGS GL detail. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the inventory transaction definition COGS GL detail.
             * @example /objects/inventory-control/txn-definition-cogs-gl-detail/23
             */
            readonly href?: string;
            /**
             * @description Specifies whether to debit or credit the corresponding GL account.
             * @example debit
             * @enum {string}
             */
            txnType?: "debit" | "credit";
            /**
             * @description Module type for this mapping. This value is always `inventory` because the COGS account is linked to an inventory transaction definition.
             * @example inventory
             * @enum {string}
             */
            readonly moduleType?: "subledger" | "inventory";
            /**
             * @description Line number of the COGS GL detail on the inventory transaction definition.
             *     If this value is not provided, the system automatically assigns a unique line number.
             *     If a line number that is already in use is provided, the application adjusts other lines to keep line numbers unique.
             *     When the transaction is posted, the system uses line numbers to post to the GL in the specified order.
             * @example 1
             */
            lineNumber?: number;
            /** @description GL account to which this transaction posts for the specified account mapping. */
            glAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 384
                 */
                key?: string;
                /**
                 * @description ID of the GL account.
                 * @example 1501.04
                 */
                id?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/384
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["dimension-ref"] & {
                /** @description Default location for the line item. This value applies only when user override for location is not enabled. This setting is not applicable at the top level. */
                location?: {
                    /**
                     * @description Unique key for the location.
                     * @example 22
                     */
                    key?: string;
                    /**
                     * @description ID of location.
                     * @example CA
                     */
                    id?: string;
                    /**
                     * @description Name of the location.
                     * @example California
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/22
                     */
                    readonly href?: string;
                };
                /** @description Default department for the line item. This value applies only when user override for department is not enabled. This setting is not applicable at the top level. */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 28
                     */
                    key?: string;
                    /**
                     * @description ID of department.
                     * @example Finance
                     */
                    id?: string;
                    /**
                     * @description Name of the department.
                     * @example Finance
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/28
                     */
                    readonly href?: string;
                };
                /**
                 * @description The item GL group and warehouse together define the account mapping criteria.
                 *     For example, you could have the Maintenance item GL group, Warehouse 13, and Hardware Customer GL group mapped to a COGS account
                 *     and Inventory account, and the Maintenance item GL group, Warehouse 13, and Software Customer GL group mapped to a different COGS account and Inventory account.
                 */
                warehouse?: {
                    /**
                     * @description Unique key for the warehouse.
                     * @example 21
                     */
                    key?: string;
                    /**
                     * @description ID of the warehouse.
                     * @example ARZ
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the warehouse.
                     * @example /objects/inventory-control/warehouse/21
                     */
                    readonly href?: string;
                };
            };
            /**
             * @description The item GL group and warehouse together define the account mapping criteria.
             *     For example, you could have the Maintenance item GL group, Warehouse 13, and Hardware Customer GL group mapped to a COGS account and Inventory account, and the Maintenance item GL group, Warehouse 13, and Software Customer GL group mapped to a different COGS account and Inventory account.
             */
            itemGLGroup?: {
                /**
                 * @description Unique key for the item GL group.
                 * @example 13
                 */
                key?: string;
                /**
                 * @description Name of the item GL group.
                 * @example Inventory- Computers and parts
                 */
                id?: string;
                /**
                 * @description URL endpoint for the item GL group.
                 * @example /objects/inventory-control/item-gl-group/13
                 */
                readonly href?: string;
            };
            /** @description Inventory transaction definition associated with the COGS GL account mapping. */
            inventoryTxnDefinition?: {
                /**
                 * @description Unique key for the inventory transaction definition.
                 * @example 12
                 */
                key?: string;
                /**
                 * @description ID of the inventory transaction definition.
                 * @example Inventory Shipper
                 */
                id?: string;
                /**
                 * @description URL for the inventory transaction definition.
                 * @example /objects/inventory-control/txn-definition/23
                 */
                readonly href?: string;
            };
        };
        "inventory-control-txn-definition-cogs-gl-detailRequiredProperties": Record<string, never>;
        /** @description This object contains details about which entities can create transactions and also includes settings for each entity, such as numbering sequences and document templates. These details and settings are applicable to transaction definitions that are configured to create transactions at the "Top level or entity" or "Entity only" level. */
        "objects.inventory-control.txn-definition-entity-detail": {
            /**
             * @description System-assigned unique key for the inventory transaction definition entity detail.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID of the inventory transaction definition entity detail. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the inventory transaction definition entity detail.
             * @example /objects/inventory-control/txn-definition-entity-detail/23
             */
            readonly href?: string;
            txnNumbering?: {
                /**
                 * @description Indicates whether sequence numbering is preserved, ensuring that numbers are never skipped. Enabling this option can affect performance when a large volume of transactions is entered at the same time.
                 * @default false
                 * @example false
                 */
                preserveSequenceNumbering?: boolean;
                /**
                 * @description Indicates whether the transaction number is inherited from the source document. For example, if you convert transfer out TO-001 into a transfer in, the resulting transfer in will also be numbered TO-001.
                 * @default false
                 * @example false
                 */
                inheritSourceDocumentNumber?: boolean;
                /** @description Numbering sequence used to automatically number transactions for this entity. */
                sequenceNumber?: {
                    /**
                     * @description Unique key for the document sequence.
                     * @example 13
                     */
                    key?: string;
                    /**
                     * @description URL endpoint for the document sequence.
                     * @example /objects/company-config/document-sequence/13
                     */
                    href?: string;
                    /**
                     * @description ID of the document sequence.
                     * @example Adjustment Decrease
                     */
                    id?: string;
                };
            };
            /** @description Printed document template to use as the default for printed output (PDFs) for this entity. If not specified, the transaction definition document template is used. */
            documentTemplate?: {
                /**
                 * @description Unique key for the document template.
                 * @example 65
                 */
                key?: string;
                /**
                 * @description ID of the document template.
                 * @example Intacct Inventory transfer sample
                 */
                id?: string;
            };
            /** @description Entity associated with the transaction definition. */
            entity?: {
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/1
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID of the entity.
                 * @example 1-us
                 */
                id?: string;
            };
            /** @description Header level details for the inventory transaction definition. */
            inventoryTxnDefinition?: {
                /**
                 * @description Unique key for the inventory transaction definition.
                 * @example 233
                 */
                key?: string;
                /**
                 * @description ID of the inventory transaction definition.
                 * @example Adjustment Decrease
                 */
                id?: string;
                /**
                 * @description URL endpoint for the inventory transaction definition.
                 * @example /objects/inventory-control/txn-definition/233
                 */
                readonly href?: string;
            };
        };
        "inventory-control-txn-definition-entity-detailRequiredProperties": Record<string, never>;
        /** @description Document conversion details for an inventory transaction. */
        "objects.inventory-control.txn-definition-source": {
            /**
             * @description System-assigned unique key for the inventory transaction definition source document.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID of the inventory transaction definition source document. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the inventory transaction definition source document.
             * @example /objects/inventory-control/txn-definition-source/23
             */
            readonly href?: string;
            /** @description Inventory transaction definition associated with the source document. */
            inventoryTxnDefinition?: {
                /**
                 * @description Unique key for the inventory transaction definition.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description ID of the inventory transaction definition.
                 * @example Adjustment Decrease
                 */
                id?: string;
                /**
                 * @description URL for the inventory transaction definition.
                 * @example /objects/inventory-control/txn-definition/23
                 */
                readonly href?: string;
            };
            /** @description Inventory transaction definition from which conversion is allowed. */
            convertedFrom?: {
                /**
                 * @description Unique key for the inventory transaction definition.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description ID of the inventory transaction definition.
                 * @example Adjustment Increase
                 */
                id?: string;
                /**
                 * @description URL for the inventory transaction definition.
                 * @example /objects/inventory-control/txn-definition/23
                 */
                readonly href?: string;
            };
        };
        /**
         * @example {
         *       "inventoryTxnDefinition": {
         *         "key": "173"
         *       },
         *       "convertedFrom": {
         *         "key": "172"
         *       }
         *     }
         */
        "inventory-control-txn-definition-sourceRequiredProperties": Record<string, never>;
        /** @description Subtotal detail for an inventory transaction definition, including the supported subtotal type for the transaction definition. */
        "objects.inventory-control.txn-definition-subtotal-detail": {
            /**
             * @description System-assigned unique key for the inventory transaction definition subtotal detail.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID of the inventory transaction definition subtotal detail. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the inventory transaction definition subtotal detail.
             * @example /objects/inventory-control/txn-definition-subtotal-detail/23
             */
            readonly href?: string;
            /** @description Inventory transaction definition associated with the subtotal detail. */
            inventoryTxnDefinition?: {
                /**
                 * @description Unique key for the inventory transaction definition.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description ID of the inventory transaction definition.
                 * @example Adjustment Decrease
                 */
                id?: string;
                /**
                 * @description URL for the inventory transaction definition.
                 * @example /objects/inventory-control/txn-definition/23
                 */
                readonly href?: string;
            };
            /**
             * @description Line number for the subtotal on the inventory transaction definition.
             *     If this value is not provided, the system automatically assigns a unique line number.
             *     If a line number that is already in use is provided, the application adjusts other lines to keep line numbers unique.
             *     The transaction definition uses line numbers to determine the display order of subtotals.
             * @example 1
             */
            lineNumber?: number;
            /**
             * @description Description of the subtotal. A unique description is required to create an inventory transaction definition subtotal detail.
             * @example Discount
             */
            description?: string;
            /**
             * @description Type of subtotal to use for the inventory transaction definition subtotal detail.
             * @example discount
             * @enum {string}
             */
            subtotalType?: "discount" | "charge";
            /**
             * @description Subtotal line number to which the subtotal is applied.
             *     Sage Intacct treats the initial subtotal line as line number 0.
             *     The first defined subtotal in the transaction definition is line number 1, the second defined subtotal is line number 2, and so on.
             *     If no value is provided, the applied-to line is assumed to be 0.
             *     Taxes, other charges, and discounts are computed at the line level.
             *     This field does not apply when line-level Simple Tax is used.
             * @example 1
             */
            appliedToLineNumber?: number;
            /**
             * @description Value type used for the subtotal detail.
             * @example amount
             * @enum {string}
             */
            valueType?: "amount" | "percent";
            /**
             * @description Default value for the subtotal. If the value type is `amount`, enter the subtotal amount. If the value type is `percent`, enter the percentage as a whole number. For example, enter `10` for 10%. Users can override the default subtotal value in the transaction.
             * @example 10.23
             */
            subtotalValue?: string;
            /**
             * @description Specifies whether the subtotal will debit or credit the corresponding GL account and GL offset account.
             * @example credit
             * @enum {string}
             */
            txnType?: "" | "debit" | "credit";
            /** @description GL account to which the subtotal posts. */
            glAccount?: {
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/10
                 */
                readonly href?: string;
                /**
                 * @description ID of the GL account.
                 * @example 7501
                 */
                id?: string;
                /**
                 * @description Unique key for the GL account.
                 * @example 10
                 */
                key?: string;
            };
            /** @description Offset GL account to which the subtotal posts. This field is only applicable when advanced workflows are used. */
            offsetGlAccount?: {
                /**
                 * @description URL endpoint for the offset GL account.
                 * @example /objects/general-ledger/account/22
                 */
                readonly href?: string;
                /**
                 * @description ID of the offset GL account.
                 * @example 4001.04
                 */
                id?: string;
                /**
                 * @description Unique key for the offset GL account.
                 * @example 22
                 */
                key?: string;
            };
            /**
             * @description Indicates whether the subtotal is a tax subtotal. When the transaction posts, the tax posts separately based on the items in the transaction. Set this field to `true` for tax subtotal lines when your organization uses Simple Tax, Advanced Tax, or Avalara AvaTax.
             * @default false
             * @example false
             */
            isTax?: boolean;
            /**
             * @description Indicates whether the subtotal line applies to AvaTax when the company is subscribed to Avalara AvaTax integration.
             * @default false
             * @example false
             */
            enableAvaTax?: boolean;
            dimensions?: components["schemas"]["dimension-ref"] & {
                /**
                 * department
                 * @description Optional. Provide a default department for the subtotal. This setting does not apply at the top level.
                 */
                department?: {
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/13
                     */
                    readonly href?: string;
                    /**
                     * @description ID of department.
                     * @example 13
                     */
                    id?: string;
                    /**
                     * @description Unique key for the department.
                     * @example 8
                     */
                    key?: string;
                    /**
                     * @description Name of department.
                     * @example Finance
                     */
                    readonly name?: string;
                };
                /** @description Optional. Provide a default location for the subtotal. This setting does not apply at the top level. */
                location?: {
                    /**
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/12
                     */
                    readonly href?: string;
                    /**
                     * @description ID of the location.
                     * @example CA
                     */
                    id?: string;
                    /**
                     * @description Unique key for the location.
                     * @example 12
                     */
                    key?: string;
                    /**
                     * @description Name of the location.
                     * @example California
                     */
                    readonly name?: string;
                };
            };
        };
        "inventory-control-txn-definition-subtotal-detailRequiredProperties": Record<string, never>;
        /**
         * @description Inventory running total details affected by the transaction.
         *     Includes whether to track quantity, value, or both, and whether the amount increases or decreases when the transaction is saved.
         */
        "objects.inventory-control.txn-definition-total-detail": {
            /**
             * @description System-assigned unique key for the inventory transaction definition total detail.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID of the inventory transaction definition total detail. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the inventory transaction definition total detail.
             * @example /objects/inventory-control/txn-definition-total-detail/23
             */
            readonly href?: string;
            /**
             * @description Specifies the inventory running total that will be affected by the transaction, whether the transaction affects the quantity, value, or both.
             * @example value
             * @enum {string}
             */
            maintainType?: "quantity" | "value" | "quantityAndValue";
            /**
             * @description Specifies if the inventory running total will increase or decrease when the user saves the transaction.
             * @example add
             * @enum {string}
             */
            operation?: "add" | "subtract";
            /** @description Inventory total associated with the transaction definition total detail. */
            inventoryTotal?: {
                /**
                 * @description Unique key for the inventory total.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description ID of the inventory total.
                 * @example ONHAND
                 */
                id?: string;
                /**
                 * @description URL endpoint for the inventory total.
                 * @example /objects/inventory-control/total/23
                 */
                readonly href?: string;
            };
            /** @description Inventory transaction definition associated with the total detail. */
            inventoryTxnDefinition?: {
                /**
                 * @description Unique key for the inventory transaction definition.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description ID of the inventory transaction definition.
                 * @example Adjustment Decrease
                 */
                id?: string;
                /**
                 * @description URL endpoint for the inventory transaction definition.
                 * @example /objects/inventory-control/txn-definition/23
                 */
                readonly href?: string;
            };
        };
        /**
         * @example {
         *       "inventoryTxnDefinition": {
         *         "key": "172"
         *       },
         *       "inventoryTotal": {
         *         "key": "51"
         *       },
         *       "maintainType": "quantity",
         *       "operation": "subtract"
         *     }
         */
        "inventory-control-txn-definition-total-detailRequiredProperties": Record<string, never>;
        /** @description Unit of measure included in a unit of measure group. */
        "objects.inventory-control.unit-of-measure": {
            /**
             * @description System-assigned key for this unit of measure.
             * @example 59
             */
            readonly key?: string;
            /**
             * @description Unique identifier for this unit of measure.
             * @example Hours
             */
            id?: string;
            /**
             * @description Unique abbreviation for this unit of measure.
             * @example HR
             */
            abbreviation?: string;
            /**
             * @description Allowed number of decimal places for this unit of measure. should be integer less than 4
             * @example 2
             */
            numberOfDecimalPlaces?: number;
            /**
             * @description Indicates whether this unit of measure is the base unit of measure for its group.
             * @default false
             * @example false
             */
            readonly isBase?: boolean;
            /** @description Name of the unit of measure group that includes this unit. */
            parent?: {
                /**
                 * @description System-assigned key for the parent unit of measure group.
                 * @example 17
                 */
                readonly key?: string;
                /**
                 * @description Name of the parent unit of measure group.
                 * @example ComputerStorage
                 */
                id?: string;
                /**
                 * @description URL for the unit of measure group in which current unit of measure will be part of.
                 * @example /objects/inventory-control/unit-of-measure-group/17
                 */
                readonly href?: string;
            };
            /**
             * @description Number of base units for this unit of measure.
             * @example 2.5
             */
            conversionFactor?: number;
            /**
             * @description URL for this unit of measure.
             * @example /objects/inventory-control/unit-of-measure/59
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "inventory-control-unit-of-measureRequiredProperties": Record<string, never>;
        /** @description Unit of measure group, like Count,Area or Length, provided for items handled under Inventory Control, Order Entry, and Purchasing. */
        "objects.inventory-control.unit-of-measure-group": {
            /**
             * @description System-assigned key for the unit of measure group. Used to identify the unit of measure group in URLs or JSON bodies for all operations on the group.
             * @example 16
             */
            readonly key?: string;
            /**
             * @description Name of the unit of measure group.
             * @example Time
             */
            id?: string;
            /**
             * @description Base unit for the group. The base unit is the smallest reasonable unit for pricing within the unit of measure group.
             * @example Seconds
             */
            baseUnit?: string;
            /**
             * @description Abbreviation for the base unit.
             * @example SEC
             */
            abbreviation?: string;
            /**
             * @description Indicates whether this is a system-generated unit of measure group.
             * @default false
             * @example false
             */
            readonly isSystemGenerated?: boolean;
            /**
             * @description Default unit of measure for Inventory, Order Entry, and Purchasing transactions. This is the default unit within a unit of measure group for transactions that contain items associated with the group.
             *     For example, Count is a standard unit of measure group with Each, Pair, and Dozen defined as related units. The Each unit can be set to be the default unit for inventory transactions.
             *     For more information, see [Unit of measure groups](https://www.intacct.com/ia/docs/en_US/help_action/Order_Entry/Setting_up_Order_Entry/UOM_groups/UOM-groups-OE.htm).
             */
            defaults?: {
                /** @description Default unit of measure for Inventory transactions. */
                inventory?: {
                    /**
                     * @description System-assigned key for the default unit of measure for Inventory transactions.
                     * @example 3
                     */
                    key?: string;
                    /**
                     * @description Id for the default unit of measure for Inventory transactions.
                     * @example Each
                     */
                    id?: string;
                    /**
                     * @description URL for the default unit of measure for Inventory transactions.
                     * @example /objects/inventory-control/unit-of-measure/3
                     */
                    readonly href?: string;
                };
                /** @description Default unit of measure for Purchasing transactions. */
                purchaseOrder?: {
                    /**
                     * @description System-assigned key for the default unit of measure for Purchasing transactions.
                     * @example 3
                     */
                    key?: string;
                    /**
                     * @description Id for the default unit of measure for Purchasing transactions.
                     * @example Each
                     */
                    id?: string;
                    /**
                     * @description URL for the default unit of measure for Purchasing transactions.
                     * @example /objects/inventory-control/unit-of-measure/3
                     */
                    readonly href?: string;
                };
                /** @description Default unit of measure for Order Entry (Sales) transactions. */
                orderEntry?: {
                    /**
                     * @description System-assigned key for the default unit of measure for Order Entry (Sales) transactions.
                     * @example 3
                     */
                    key?: string;
                    /**
                     * @description Id for the default unit of measure for Order Entry (Sales) transactions.
                     * @example Each
                     */
                    id?: string;
                    /**
                     * @description URL for the default unit of measure for Order Entry (Sales) transactions.
                     * @example /objects/inventory-control/unit-of-measure/3
                     */
                    readonly href?: string;
                };
            };
            /** @description Related units of measure included in the group. */
            unitsOfMeasure?: components["schemas"]["objects.inventory-control.unit-of-measure"][];
            /**
             * @description Unit of measure group URL.
             * @example /objects/inventory-control/unit-of-measure-group/41
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "inventory-control-unit-of-measure-groupRequiredProperties": Record<string, never>;
        /** @description A warehouse can be an actual warehouse, a store, or any type of stocking location or site that requires inventory tracking and management. Warehouse also serves as a dimension that can be set on transactions to expand report functionality and insight. */
        "objects.inventory-control.warehouse": {
            /**
             * @description System-assigned key for the warehouse.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the warehouse.
             * @example USNA1
             */
            id?: string;
            /**
             * @description Name of the warehouse.
             * @example US NA Warehouse-1
             */
            name?: string;
            /**
             * @description URL for the warehouse.
             * @example /objects/inventory-control/warehouse/2
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            /**
             * @description This property is set to `true` by default if Inventory Control is configured for replenishment. If the warehouse should not be replenished, set to `false`.
             * @default true
             * @example true
             */
            isReplenishmentEnabled?: boolean;
            /**
             * @description Set to `true` to save transactions that cause the inventory for items in this warehouse to be negative.
             * @default false
             * @example true
             */
            enableNegativeInv?: boolean;
            /** @description The geographical location of the warehouse. */
            location?: {
                /** @example PHO--Phoenix */
                id?: string;
                /**
                 * @description System-assigned key for the location.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description URL for the location.
                 * @example /objects/company-config/location/2
                 */
                readonly href?: string;
            };
            /** @description If this warehouse is part of a hierarchy, the parent warehouse of this warehouse. */
            parent?: {
                /**
                 * @description Unique identifier for the parent warehouse.
                 * @example WH10001--US AZ Warehouse 10001
                 */
                id?: string;
                /**
                 * @description System-assigned key for the parent warehouse.
                 * @example 32
                 */
                key?: string;
                /**
                 * @description URL for the parent warehouse.
                 * @example /objects/inventory-control/warehouse/32
                 */
                readonly href?: string;
            };
            /** @description Employee who is responsible for the warehouse. */
            manager?: {
                /**
                 * @description Unique identifier of the employee who is the warehouse manager.
                 * @example EM 1--Aman
                 */
                id?: string;
                /**
                 * @description System-assigned key for the warehouse manager.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description URL for the warehouse manager.
                 * @example /objects/company-config/employee/23
                 */
                readonly href?: string;
            };
            /** @description The contact for the warehouse. */
            contacts?: {
                /** primary */
                primary?: {
                    /**
                     * @description Name for the warehouse contact.
                     * @example Sam Smith
                     */
                    id?: string;
                    /**
                     * @description System-assigned key for the warehouse contact.
                     * @example 210
                     */
                    key?: string;
                    /**
                     * @description URL for the warehouse contact.
                     * @example /objects/company-config/contact/210
                     */
                    readonly href?: string;
                };
                /**
                 * shipTo
                 * @description Ship to contact for the warehouse.
                 */
                shipTo?: {
                    /**
                     * @description Name for the Ship to contact.
                     * @example Bill North
                     */
                    id?: string;
                    /**
                     * @description System-assigned key for the Ship to contact.
                     * @example 223
                     */
                    key?: string;
                    /**
                     * @description URL for the Ship to contact.
                     * @example /objects/company-config/contact/223
                     */
                    readonly href?: string;
                };
            };
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "inventory-control-warehouseRequiredProperties": Record<string, never>;
        /** @description Use warehouse transfers to move items between warehouses or to transfer items between bins in the same warehouse. */
        "objects.inventory-control.warehouse-transfer": {
            /**
             * @description System-assigned key for the warehouse transfer.
             * @example 19
             */
            readonly key?: string;
            /**
             * @description Document number for the warehouse transfer.
             * @example IC:0360:doc
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the warehouse transfer.
             * @example /objects/inventory-control/warehouse-transfer/19
             */
            readonly href?: string;
            /**
             * Format: date
             * @description The date of the transaction. For immediate transfers, the date is used as the transaction date for the system-generated transfer-out and transfer-in transactions.
             * @example 2024-03-01
             */
            transactionDate?: string;
            /**
             * @description Information about the warehouse transfer. The description is displayed in the Warehouse Transfer list.
             * @example transfer to  10001-F per SO-0007
             */
            description?: string;
            /**
             * @description Reference number for the transfer that might be useful in searches or reports. The number is displayed in system-generated transfer-out and transfer-in transactions.
             * @example SO-0007
             */
            referenceNumber?: string;
            /** @description Exchange rate information for the transfer transaction. */
            exchangeRate?: {
                /**
                 * @description Base currency of the warehouse from which items are to be transferred.
                 * @example GBP
                 */
                outCurrency?: string;
                /**
                 * @description Base currency of the warehouse to which items are to be transferred.
                 * @example USD
                 */
                inCurrency?: string;
                /**
                 * Format: date
                 * @description Exchange rate date for the receiving warehouse. Should be the same date as the `transactionDate`.
                 * @example 2024-03-01
                 */
                date?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Exchange rate to use for the transaction. Do not provide a value in this field if the exchange rate `typeID` and `typeName` are set.
                 * @example 1.0000000000
                 */
                rate?: string;
                /**
                 * @description Unique ID for the exchange rate type. Do not provide a value in this field if `rate` is set. If there are no custom exchange rates for the company, you can specify the ID for the Intacct Daily Rate.
                 * @example -1
                 */
                readonly typeId?: string;
                /**
                 * @description Name of the exchange rate type. If there are no custom exchange rates for the company, you can specify the Intacct Daily Rate. Do not provide a value in this field if `rate` is set.
                 * @example Intacct Daily Rate
                 */
                typeName?: string;
            };
            /**
             * @description Specify whether this is an immediate or in-transit transfer.
             *     * An `immediate` transfer does not accommodate for the time it takes to move inventory from one warehouse to another. With an immediate transfer, ONHAND quantities are decreased at the source warehouse (the from warehouse) and increased at the destination warehouse (the to warehouse) at the same time.
             *     * An `inTransit` transfer allows you to accommodate for the time it takes to move inventory between warehouses For example, warehouses may be across the city, across the country, or in different countries. While inventory is being moved, it's not in the ONHAND quantities at either the source warehouse (the from warehouse) or the destination warehouse (the to warehouse). Instead it's counted in the INTRANSIT quantity for the destination warehouse.
             *     For more information, see [Warehouse transfers overview](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Warehouse_transfer_overview) in the Sage Intacct Help Center.
             * @example immediate
             * @enum {string}
             */
            transferType?: "immediate" | "inTransit";
            /**
             * @description Sets the state that the transaction is in. If `transferType` is set to:
             *     * `immediate`, valid values are `draft` or `post`.
             *     * `inTransit` and you are using a POST operation to create a warehouse transfer, valid values are `draft` or `transferOut`.
             *     * `inTransit` and you are using a PATCH operation to update a warehouse transfer with a `transferState` of `draft`, valid values for the `action` field are `draft` or `transferOut`.
             *     * `inTransit` and you are using a PATCH operation to update a warehouse transfer with a `transferState` of `inTransit`, the only valid value for the `action` field is `transferOut`.
             *
             *     Note that you cannot use the `action` field to change the `transferState` of a transfer that is `posted`, and you cannot set an `inTransit` transfer back to `draft`.
             * @example draft
             * @enum {string}
             */
            action?: "draft" | "post" | "transferIn" | "transferOut";
            /**
             * @description Shows the current state of the warehouse transfer.
             * @default draft
             * @example draft
             * @enum {string}
             */
            readonly transferState?: "draft" | "inTransit" | "posted";
            /**
             * Format: date
             * @description Estimated date that the shipment will leave the originating warehouse. This date is required when `transferType` is set to `inTransit`. This date cannot be earlier than the `transactionDate`.
             * @example 2024-03-01
             */
            outDate?: string;
            /**
             * Format: date
             * @description Estimated date that the shipment arrives at the receiving warehouse. This date is required when `transferType` is set to `inTransit`. This date cannot be earlier than the `outDate`.
             * @example 2024-03-01
             */
            inDate?: string;
            /** @description Reference to the transfer-in inventory transfer document. */
            inDocument?: {
                /**
                 * @description Unique key for the transfer-in document.
                 * @example 351
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the transfer-in document.
                 * @example SYS-Warehouse Transfer In-IC:0360:doc-In
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the transfer-in document.
                 * @example /objects/inventory-control/document/351
                 */
                readonly href?: string;
            };
            /** @description Reference to the in-transit inventory transfer document. */
            inTransitDocument?: {
                /**
                 * @description Unique key for the in-transit document.
                 * @example 346
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the in-transit document.
                 * @example SYS-Warehouse In Transit-IC:0358:doc-Intransit
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the in-transit document.
                 * @example /objects/inventory-control/document/346
                 */
                readonly href?: string;
            };
            /** @description Reference to the transfer-out inventory transfer document. */
            outDocument?: {
                /**
                 * @description Unique key for the transfer-out document.
                 * @example 350
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the transfer-out document.
                 * @example SYS-Warehouse Transfer Out-IC:0360:doc-Out
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the transfer-out document.
                 * @example /objects/inventory-control/document/350
                 */
                readonly href?: string;
            };
            /** @description Lines of the warehouse transfer document. Must be one or more matched pair with one outgoing and one incoming line. A combination of item, unit, and quantity are used to match each pair. */
            lines?: components["schemas"]["objects.inventory-control.warehouse-transfer-line"][];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "inventory-control-warehouse-transferRequiredProperties": {
            lines?: {
                dimensions?: Record<string, never>;
            }[];
        };
        /** @description Lines in a warehouse transfer represent items included in the transfer and details about those items. */
        "objects.inventory-control.warehouse-transfer-line": {
            /**
             * @description System-assigned key for the warehouse transfer line.
             * @example 65
             */
            readonly key?: string;
            /**
             * @description Unique ID for the warehouse transfer line. This value is the same as the key for this object.
             * @example 65
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the warehouse transfer line.
             * @example /objects/inventory-control/warehouse-transfer-line/65
             */
            readonly href?: string;
            /**
             * @description Line number of the line item.
             * @example 1
             */
            readonly lineNumber?: string;
            /**
             * @description Specifies whether the transfer in this line object represents the warehouse sending the inventory (outgoing) or the warehouse receiving the inventory (incoming).
             * @example out
             * @enum {string}
             */
            transferDirection?: "in" | "out";
            /** @description Warehouse involved in the transfer. */
            warehouse?: {
                /**
                 * @description Unique key for the warehouse.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description Unique ID for the warehouse.
                 * @example 15
                 */
                id?: string;
                /**
                 * @description Warehouse name.
                 * @example US TX Warehouse 10004
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the warehouse.
                 * @example /objects/inventory-control/warehouse/15
                 */
                readonly href?: string;
            };
            /** @description Item included in the transfer. */
            item?: {
                /**
                 * @description Unique key for the item.
                 * @example 249
                 */
                key?: string;
                /**
                 * @description Unique ID for the item.
                 * @example 0 Lot
                 */
                id?: string;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/249
                 */
                readonly href?: string;
            };
            /** @description Unit of measure for the item. */
            unit?: {
                /**
                 * @description Unique key for the unit of measure.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Unique ID for the unit of measure.
                 * @example Each
                 */
                id?: string;
                /**
                 * @description URL endpoint for the unit of measure.
                 * @example /objects/inventory-control/unit-of-measure/3
                 */
                readonly href?: string;
            };
            /**
             * @description Information about the line that might be useful in the future.
             * @example transfer of item-0 Lot per SO-0007
             */
            memo?: string;
            /** @description List of tracking details including serial number, aisle, bin, and row for the item. */
            trackingDetail?: components["schemas"]["objects.inventory-control.document-line-detail"][];
            /**
             * Format: decimal-precision-10
             * @description The quantity of the item to be transferred in the line `unit`.
             * @example 1.0000
             */
            quantity?: string;
            /**
             * Format: decimal-precision-10
             * @description The cost of the item in the transaction currency.
             * @example 4.0000000000
             */
            readonly cost?: string;
            /**
             * Format: decimal-precision-2
             * @description The `cost` multiplied by the `quantity` in the transaction currency.
             * @example 4.00
             */
            readonly extendedCost?: string;
            /**
             * Format: decimal-precision-10
             * @description The cost of the item in the company's base currency.
             * @example 4.0000000000
             */
            readonly standardCost?: string;
            /**
             * Format: decimal-precision-2
             * @description The item `standardCost` multiplied by the `quantity` in the company's base currency.
             * @example 4.00
             */
            readonly extendedStandardCost?: string;
            dimensions?: {
                /**
                 * location
                 * @description Location associated with the line item.
                 */
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
                     * @description URL endpoint for the location.
                     * @example /objects/company-config/location/1
                     */
                    readonly href?: string;
                };
                /**
                 * department
                 * @description Department associated with the line item.
                 */
                department?: {
                    /**
                     * @description Unique key for the department.
                     * @example 6
                     */
                    key?: string;
                    /**
                     * @description Unique ID of the department.
                     * @example Accounting
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the department.
                     * @example /objects/company-config/department/6
                     */
                    readonly href?: string;
                };
                /**
                 * project
                 * @description Project associated with the line item.
                 */
                project?: {
                    /**
                     * @description Unique key for the project.
                     * @example 29
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the project.
                     * @example 9
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the project.
                     * @example /objects/projects/project/9
                     */
                    readonly href?: string;
                };
                /**
                 * customer
                 * @description Customer associated with the line item.
                 */
                customer?: {
                    /**
                     * @description Unique key for the customer.
                     * @example 2
                     */
                    key?: string | null;
                    /**
                     * @description Unique ID for the customer.
                     * @example 2
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the customer.
                     * @example /objects/accounts-receivable/customer/2
                     */
                    readonly href?: string;
                };
                /**
                 * vendor
                 * @description Vendor associated with the line item.
                 */
                vendor?: {
                    /**
                     * @description Unique key for the vendor.
                     * @example 47
                     */
                    key?: string | null;
                    /**
                     * @description Unique ID for the vendor.
                     * @example 201
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the vendor.
                     * @example /objects/accounts-payable/vendor/47
                     */
                    readonly href?: string;
                };
                /** @description Class dimension used to track the line item. */
                class?: {
                    /**
                     * @description Unique key for the class.
                     * @example 6
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the class.
                     * @example 4
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the class.
                     * @example /objects/company-config/class/6
                     */
                    readonly href?: string;
                };
                /**
                 * employee
                 * @description Employee associated with the line item.
                 */
                employee?: {
                    /**
                     * @description Unique key for the employee.
                     * @example 27
                     */
                    key?: string;
                    /**
                     * @description Unique ID for the employee.
                     * @example EM 1--Aman
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the employee.
                     * @example /objects/company-config/employee/27
                     */
                    readonly href?: string;
                };
            };
            /** @description The warehouse transfer that the line is included in. */
            warehouseTransfer?: {
                /**
                 * @description Unique key for the warehouse transfer.
                 * @example 19
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the warehouse transfer.
                 * @example IC:0360:doc
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the warehouse transfer.
                 * @example /objects/inventory-control/warehouse-transfer/19
                 */
                readonly href?: string;
            };
            /** @description Associated internal system transfer document. */
            inventoryDocument?: {
                /**
                 * @description Unique key for the inventory document.
                 * @example 350
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the inventory document.
                 * @example IC:0360:doc-Out
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the inventory document.
                 * @example /objects/inventory-control/document/350
                 */
                readonly href?: string;
            };
            /** @description Associated internal system document line. */
            inventoryDocumentLine?: {
                /**
                 * @description Unique key for the inventory document line.
                 * @example 397
                 */
                readonly key?: string;
                /**
                 * @description Unique ID for the inventory document line.
                 * @example 397
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the inventory document line.
                 * @example /objects/inventory-control/document-line/397
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description A warehouse group categorizes warehouse dimension records, mainly for the purpose of structuring financial reporting. */
        "objects.inventory-control.warehouse-group": {
            /**
             * @description System-assigned unique key for the warehouse group.
             * @example 4
             */
            readonly key?: string;
            /**
             * @description Unique ID for the warehouse group.
             * @example EastCoastWarehouses
             */
            id?: string;
            /**
             * @description URL endpoint for the warehouse group.
             * @example /objects/inventory-control/warehouse-group/4
             */
            readonly href?: string;
            /**
             * @description Name of the warehouse group.
             * @example East Coast Warehouses
             */
            name?: string;
            /**
             * @description Description of the warehouse group.
             * @example Warehouses on the east coast
             */
            description?: string;
            /**
             * @description Group membership type. The group type and related fields determine which warehouses are included in the group. If creating reports that use warehouses in rows or columns, these fields also determine the column headings and row headings that will appear, and the order in which they will be listed.
             *
             *     * `specific` - Specify the warehouses to include and their order in the `groupMembers` array. You can optionally filter the array with the `memberFilter` settings.
             *     * `all` - All warehouses that match the `memberFilter` criteria.
             * @example all
             * @enum {string}
             */
            groupType?: "all" | "specific";
            /** @description One or more filters to select the warehouses to include in the group. These filters can be used in addition to the `groupMembers` array to filter from a selected list of warehouses. */
            memberFilter?: components["schemas"]["member-filter"] & Record<string, never>;
            /** @description Members of the warehouse group and their sort order. Only applicable when `groupType` is set to `specific`. */
            groupMembers?: {
                /**
                 * @description Unique key for the warehouse.
                 * @example 9
                 */
                key?: string;
                /**
                 * @description Unique ID for the warehouse.
                 * @example MCOM
                 */
                id?: string;
                /**
                 * @description URL endpoint for the warehouse.
                 * @example /objects/inventory-control/warehouse/9
                 */
                readonly href?: string;
                /**
                 * @description Warehouse group sort order. Determines the position of the member within the warehouse group. Lower values indicate earlier placement.
                 * @example 2
                 */
                readonly sortOrder?: string;
            }[];
            /** @description General Ledger (GL) account group associated with the warehouse group. */
            glAccountGroup?: {
                /**
                 * @description Unique key for the GL account group.
                 * @example 12
                 */
                readonly key?: string;
                /**
                 * @description ID for the GL account group.
                 * @example EastCoastWarehouses
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the GL account group.
                 * @example /objects/general-ledger/gl-account-group/12
                 */
                readonly href?: string;
            };
            /**
             * @description Set to `true` to create a dimension structure that enables the group to be used on the rows and columns of financial reports. If this field is set to `false`, the group can only be used for filtering.
             * @default false
             * @example true
             */
            createDimensionComponents?: boolean;
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "inventory-control-warehouse-groupRequiredProperties": Record<string, never>;
        /** @description A zone is one of four optional attributes (zone, aisle, row, and bin face) you can assign to a bin to make it easier to find in the warehouse. */
        "objects.inventory-control.zone": {
            /**
             * @description System-assigned key for the zone.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier or name for the zone. The zone ID cannot be modified.
             * @example Z4REF
             */
            id?: string;
            /**
             * @description Description for the zone.
             * @example Refrigeration Zone Four
             */
            description?: string;
            /**
             * @description URL for the zone.
             * @example /objects/inventory-control/zone/12
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "inventory-control-zoneRequiredProperties": Record<string, never>;
        /** @description report-params */
        "services.reports.inventory-control-item-activity": {
            /**
             * @description Primary title for the report.
             * @example Item activity June 2025
             */
            title1?: string;
            /**
             * @description Secondary title for the report.
             * @example Monthly report
             */
            title2?: string;
            /**
             * @description Text of the footer included in the report.
             * @example June 2025 Item Report
             */
            footerText?: string;
            /**
             * Format: date
             * @description Specifies the date on which the report is scheduled to run.
             * @example 2025-06-30
             */
            scheduledReportDate?: string;
            /**
             * @description Output format for the report.
             * @example html
             * @enum {string}
             */
            outputType?: "html" | "pdf" | "csv" | "excel" | "text";
            /**
             * @description Specifies where the report is stored and can be accessed.
             * @example intacct
             * @enum {string}
             */
            outputLocation?: "intacct" | "cloud";
            /**
             * @description Specifies the name used in report lists.
             * @example June 2025 Item Report
             */
            reportName?: string;
            cloudStoreParameters?: components["schemas"]["report.cloud-store-options"];
            /** @description parameters */
            parameters?: {
                timePeriod?: components["schemas"]["inventory-control-time-period-filter"];
                /**
                 * @description Specifies whether to report on `itemId` or `UPC`.
                 * @enum {string}
                 */
                reportOn?: "itemId" | "UPC";
                itemUPCFilter?: components["schemas"]["inventory-control-item-filter"] | components["schemas"]["inventory-control-item-operator"] | components["schemas"]["inventory-control-upc-filter"] | components["schemas"]["inventory-control-upc-operator"];
                warehouseFilter?: components["schemas"]["inventory-control-warehouse-filter"];
                productLine?: components["schemas"]["product-line-ref"];
                /**
                 * @description Indicates whether to include value-only transactions that weren't converted from any other transaction.
                 * @default false
                 * @example false
                 */
                includeStandaloneValueDocuments?: boolean;
                /**
                 * @description Indicates whether to exclude inactive items.
                 * @default false
                 * @example false
                 */
                excludeInactiveItems?: boolean;
                /**
                 * @description Indicates whether to exclude inactive warehouses.
                 * @default false
                 * @example false
                 */
                excludeInactiveWarehouses?: boolean;
                /**
                 * @description Indicates whether to exclude items without activity.
                 * @default false
                 * @example false
                 */
                excludeItemsWithoutActivity?: boolean;
                /**
                 * @description Indicates whether to include the INTRANSIT total, which is the number of items that are being moved between warehouses with an in-transit warehouse transfer.
                 * @default false
                 * @example false
                 */
                includeInTransitTotal?: boolean;
                /**
                 * @description Indicates whether to include the RESERVED total, which is the number of items that are moved into the fulfillment process.
                 * @default false
                 * @example false
                 */
                includeReservedTotal?: boolean;
                /**
                 * @description Indicates whether to include the ALLOCATED total, which is the number of items in the fulfillment process that have been assigned to an order.
                 * @default false
                 * @example false
                 */
                includeAllocatedTotal?: boolean;
                locationFilter?: components["schemas"]["inventory-control-location-filter"];
                departmentFilter?: components["schemas"]["inventory-control-department-filter"];
                /**
                 * @description For multi-entity companies, specify the transaction locations for which to show results.
                 *     * `allLocations` - show results for the top level and all entity locations.
                 *     * `thisLocation` - show results for the current entity's location.
                 *     * `childLocations` - show results for entities only (omit the top level).
                 * @example allLocations
                 * @enum {string}
                 */
                txnFilter?: "allLocations" | "thisLocation" | "childLocations";
            };
        };
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
        /** @description report-params */
        "services.reports.inventory-control-inventory-valuation": {
            /**
             * @description Primary title for the report.
             * @example Inventory valuation June 2025
             */
            title1?: string;
            /**
             * @description Secondary title for the report.
             * @example Monthly report
             */
            title2?: string;
            /**
             * @description Text of the footer included in the report.
             * @example June 2025 Valuation Report
             */
            footerText?: string;
            /**
             * Format: date
             * @description Specifies the date on which the report is scheduled to run.
             * @example 2025-06-30
             */
            scheduledReportDate?: string;
            /**
             * @description Output format for the report.
             * @example html
             * @enum {string}
             */
            outputType?: "html" | "pdf" | "csv" | "excel" | "text";
            /**
             * @description Specifies where the report is stored and can be accessed.
             * @example intacct
             * @enum {string}
             */
            outputLocation?: "intacct" | "cloud";
            /**
             * @description Specifies the name used in report lists.
             * @example Inventory valuation June 2025
             */
            reportName?: string;
            cloudStoreParameters?: components["schemas"]["report.cloud-store-options"];
            /** @description parameters */
            parameters?: {
                /**
                 * Format: date
                 * @description The date to use with any relative date comparisons in selected filters. The current date is used if `asOfDate` is not set.
                 * @example 2025-01-08
                 */
                asOfDate?: string;
                /**
                 * @description Specifies whether to report on `itemId` or `UPC`.
                 * @enum {string}
                 */
                reportOn?: "itemId" | "UPC";
                itemUPCFilter?: components["schemas"]["inventory-control-item-filter"] | components["schemas"]["inventory-control-item-operator"] | components["schemas"]["inventory-control-upc-filter"] | components["schemas"]["inventory-control-upc-operator"];
                warehouseFilter?: components["schemas"]["inventory-control-warehouse-filter"];
                productLine?: components["schemas"]["product-line-ref"];
                /**
                 * Format: decimal-precision-10
                 * @description Specifies the minimum value to include in the report. Specify what the minimum value represents in the `valueAppliesTo` field.
                 * @example 100
                 */
                minValue?: string;
                /**
                 * Format: decimal-precision-10
                 * @description Specifies the maximum value to include in the report. Specify what the maximum value represents in the `valueAppliesTo` field.
                 * @example 1000
                 */
                maxValue?: string;
                /**
                 * @description Specifies the value to which `minValue` and `maxValue` apply.
                 * @default itemValue
                 * @example itemValue
                 * @enum {string}
                 */
                valueAppliesTo?: "itemValue" | "itemUnitCost" | "itemQuantity" | "itemLastCost" | "dateOfLastActivityDays";
                /**
                 * @description Specifies the type of activity shown in the date of last activity column of the report.
                 * @default dateLastSoldOrReceived
                 * @example dateLastSoldOrReceived
                 * @enum {string}
                 */
                dateOfLastActivity?: "dateLastSoldOrReceived" | "dateLastSold" | "dateLastReceived" | "daysSinceLastSoldOrReceived" | "daysSinceLastSold" | "daysSinceLastReceived";
                /**
                 * @description Indicates whether to include items with zero quantity on hand (QOH) in the report.
                 * @default false
                 * @example false
                 */
                showItemsWithZeroQuantity?: boolean;
                /**
                 * @description Indicates whether to exclude inactive items in the report.
                 * @default false
                 * @example false
                 */
                excludeInactiveItems?: boolean;
                /**
                 * @description Indicates whether to exclude inactive warehouses from the report.
                 * @default false
                 * @example false
                 */
                excludeInactiveWarehouses?: boolean;
                /**
                 * @description Indicates whether to show actual cost instead of zero for negative balances in the report.
                 * @default false
                 * @example false
                 */
                showActualCostForNegativeBalances?: boolean;
                /**
                 * @description Indicates whether to include transactions that affect only the value of the item in the summary section of the report.
                 * @default false
                 * @example false
                 */
                showQuantitiesWithSummaryValue?: boolean;
                /**
                 * @description Indicates whether to include transaction totals in the report.
                 * @default false
                 * @example false
                 */
                includeTransactionTotals?: boolean;
                /**
                 * @description Specifies the sort mode for the report results.
                 * @default item
                 * @example item
                 * @enum {string}
                 */
                sortBy?: "item" | "value" | "valueDescending" | "unitCost" | "unitCostDescending" | "quantity" | "quantityDescending" | "lastCost" | "lastCostDescending" | "dateOfLastActivity" | "dateOfLastActivityDescending";
                /**
                 * @description The level of detail to include in the report.
                 *     * `detail` - group results by customer, then by order, then by warehouse, and finally by the items associated with each customer order.
                 *     * `itemSummary` -  analyze the activity and other details of inventory items. Display statistics such as the number of items in stock, the number of items required to fill open orders, an item's minimum, maximum, and average price, and an item's total value as a percentage of all open orders.
                 *     * `warehouseSummary` - identical to `itemSummary`, except this option correlates items to the warehouses that store them. This level also displays aisle and bin locations.
                 * @default detail
                 * @example detail
                 * @enum {string}
                 */
                summaryLevel?: "detail" | "itemSummary" | "warehouseSummary";
                locationFilter?: components["schemas"]["inventory-control-location-filter"];
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
        /**
         * @description Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
         * @default active
         * @example active
         * @enum {string}
         */
        status: "active" | "inactive";
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
        "inventory-control-time-period-filter": {
            periodToDate?: {
                reportingPeriod?: components["schemas"]["reporting-period-ref"];
                /**
                 * Format: date
                 * @description The "as of" date to use with any relative date comparisons in selected filters. The current date is used if `asOfDate` is not set.
                 * @example 2014-01-08
                 */
                asOfDate?: string;
            };
            /** @description Date range */
            dateRange?: {
                /**
                 * Format: date
                 * @description Start of date range
                 * @example 2020-01-02
                 */
                startDate?: string;
                /**
                 * Format: date
                 * @description End of date range
                 * @example 2024-12-31
                 */
                endDate?: string;
            };
        };
        "inventory-control-item-filter": {
            itemFilter?: {
                /**
                 * Starting value of item Id to filter by
                 * @example Hammer
                 */
                fromItemId?: string;
                /**
                 * Ending value of item Id to filter by
                 * @example Nail
                 */
                toItemId?: string;
            };
        };
        "inventory-control-item-operator": {
            itemOperator?: {
                /**
                 * @description Item operator
                 * @example equals
                 * @enum {string}
                 */
                operator?: "equals" | "notEqualTo" | "lessThan" | "lessThanOrEqual" | "greaterThan" | "greaterThanOrEqual" | "contains" | "doesNotContain" | "startsWith" | "endsWith" | "includes" | "excludes";
                /**
                 * @description Item operator values
                 * @example Hammer
                 */
                value?: string;
            };
        };
        "inventory-control-upc-filter": {
            upcFilter?: {
                /**
                 * Starting value of Universal Product Code to filter by
                 * @description From UPC
                 * @example 72527273070
                 */
                fromUPC?: string;
                /**
                 * Ending value of Universal Product Code to filter by
                 * @description UPC
                 * @example 72527273070
                 */
                toUPC?: string;
            };
        };
        "inventory-control-upc-operator": {
            upcOperator?: {
                /**
                 * @description UPC operator
                 * @example equals
                 * @enum {string}
                 */
                operator?: "equals" | "notEqualTo" | "lessThan" | "lessThanOrEqual" | "greaterThan" | "greaterThanOrEqual" | "contains" | "doesNotContain" | "startsWith" | "endsWith" | "includes" | "excludes";
                /**
                 * @description UPC operator values
                 * @example 72527273070
                 */
                value?: string;
            };
        };
        "inventory-control-warehouse-filter": {
            /** @example AZ Warehouse */
            fromWarehouseId?: string;
            /** @example CA Warehouse */
            toWarehouseId?: string;
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
        "inventory-control-location-filter": {
            location?: components["schemas"]["location-ref"];
            /**
             * @description Set to true to run an individual report
             * @default false
             * @example false
             */
            runIndividualReport?: boolean;
        };
        "inventory-control-department-filter": {
            department?: components["schemas"]["department-ref"];
            /**
             * @description Set to true to run an individual report
             * @default false
             * @example false
             */
            runIndividualReport?: boolean;
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
    parameters: {
        /** @description Document Name */
        documentName: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "list-inventory-control-aisle": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-aisle": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.aisle"] & components["schemas"]["inventory-control-aisleRequiredProperties"];
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
    "get-inventory-control-aisle-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the aisle.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.aisle"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-aisle-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the aisle.
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
    "update-inventory-control-aisle-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the aisle.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.aisle"] & {
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
    "list-inventory-control-bin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-bin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.bin"] & components["schemas"]["inventory-control-binRequiredProperties"];
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
    "get-inventory-control-bin-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bin.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.bin"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-bin-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bin.
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
    "update-inventory-control-bin-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bin.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.bin"];
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
    "list-inventory-control-bin-face": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-bin-face": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.bin-face"] & components["schemas"]["inventory-control-bin-faceRequiredProperties"];
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
    "get-inventory-control-bin-face-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bin-face.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.bin-face"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-bin-face-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bin-face.
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
    "update-inventory-control-bin-face-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bin-face.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.bin-face"] & {
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
    "list-inventory-control-bin-size": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-bin-size": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.bin-size"] & components["schemas"]["inventory-control-bin-sizeRequiredProperties"];
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
    "get-inventory-control-bin-size-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bin size.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.bin-size"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-bin-size-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bin size.
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
    "update-inventory-control-bin-size-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the bin size.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.bin-size"] & {
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
    "list-inventory-control-cycle": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-cycle": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.cycle"] & components["schemas"]["inventory-control-cycleRequiredProperties"];
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
    "get-inventory-control-cycle-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory cycle.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.cycle"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-inventory-cycle-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory cycle.
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
    "update-inventory-control-cycle-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory cycle.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.cycle"] & {
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
    "list-inventory-control-cycle-count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-cycle-count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.cycle-count"] & components["schemas"]["inventory-control-cycle-countRequiredProperties"];
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
    "get-inventory-control-cycle-count-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory control cycle count.
                 * @example 207
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.cycle-count"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-cycle-count-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory control cycle count.
                 * @example 207
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
    "update-inventory-control-cycle-count-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory control cycle count.
                 * @example 207
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.cycle-count"] & {
                    readonly documentNumber?: unknown;
                    readonly warehouse?: unknown;
                    readonly assignedTo?: unknown;
                    readonly description?: unknown;
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
    "list-inventory-control-cycle-count-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-cycle-count-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory control cycle count line.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.cycle-count-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-cycle-count-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory control cycle count line.
                 * @example 21
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
    "list-inventory-control-document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-named-document": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Document Name */
                documentName: components["parameters"]["documentName"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-document": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Document Name */
                documentName: components["parameters"]["documentName"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.document"] & components["schemas"]["inventory-control-documentRequiredProperties"];
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
    "get-inventory-control-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.document"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-named-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document.
                 * @example 99
                 */
                key: string;
                /** @description Document Name */
                documentName: components["parameters"]["documentName"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.document"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document.
                 * @example 99
                 */
                key: string;
                /** @description Document Name */
                documentName: components["parameters"]["documentName"];
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
    "update-inventory-control-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document.
                 * @example 99
                 */
                key: string;
                /** @description Document Name */
                documentName: components["parameters"]["documentName"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.document"] & {
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
    "list-inventory-control-document-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-document-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document line.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.document-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-named-document-line": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Document Name */
                documentName: components["parameters"]["documentName"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-named-document-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document line.
                 * @example 99
                 */
                key: string;
                /** @description Document Name */
                documentName: components["parameters"]["documentName"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.document-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-document-line-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-document-line-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document line detail object.
                 * @example 115
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.document-line-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-document-line-supplies-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.document-line-supplies-detail"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-document-line-supplies-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document line supplies detail.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.document-line-supplies-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-document-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-document-history-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document history.
                 * @example 339
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.document-history"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-document-subtotal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-document-subtotal-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory document subtotal.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.document-subtotal"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-supplies-document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-supplies-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the supplies Document.
                 * @example 1475
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.supplies-document"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-supplies-document-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.supplies-document-detail"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-supplies-document-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the supplies document detail.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.supplies-document-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-item": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-item": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.item"] & components["schemas"]["inventory-control-itemRequiredProperties"];
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
    "get-inventory-control-item-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.item"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-item-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item.
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
    "update-inventory-control-item-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.item"] & {
                    readonly id?: unknown;
                    readonly costMethod?: unknown;
                    readonly itemType?: unknown;
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
    "list-inventory-control-item-cross-reference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-item-cross-reference": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.item-cross-reference"] & components["schemas"]["inventory-control-item-cross-referenceRequiredProperties"];
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
    "get-inventory-control-item-cross-reference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item cross reference.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.item-cross-reference"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-item-cross-reference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item cross reference.
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
    "update-inventory-control-item-cross-reference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item cross reference.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.item-cross-reference"] & {
                    readonly referenceType?: unknown;
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
    "list-inventory-control-item-landed-cost": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-item-landed-cost-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item landed cost.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.item-landed-cost"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-item-vendor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-item-vendor-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item vendor.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.item-vendor"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-item-warehouse-inventory": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-item-warehouse-inventory": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.item-warehouse-inventory"] & components["schemas"]["inventory-control-item-warehouse-inventoryRequiredProperties"];
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
    "get-inventory-control-item-warehouse-inventory-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item warehouse inventory information.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.item-warehouse-inventory"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-item-warehouse-inventory-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item warehouse inventory information.
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
    "update-inventory-control-item-warehouse-inventory-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item warehouse inventory information.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.item-warehouse-inventory"] & {
                    /** @example 41 */
                    readonly id?: unknown;
                    readonly item?: unknown;
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
                    "application/xml": Record<string, never>;
                    "multipart/form-data": Record<string, never>;
                };
            };
        };
    };
    "list-inventory-control-item-warehouse-standard-cost": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-item-warehouse-standard-cost": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.item-warehouse-standard-cost"] & components["schemas"]["inventory-control-item-warehouse-standard-costRequiredProperties"];
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
    "get-inventory-control-item-warehouse-standard-cost-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item warehouse standard cost object.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.item-warehouse-standard-cost"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-item-warehouse-standard-cost-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item warehouse standard cost object.
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
    "update-inventory-control-item-warehouse-standard-cost-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item warehouse standard cost object.
                 * @example 12
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.item-warehouse-standard-cost"] & Record<string, never>;
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
    "list-inventory-control-item-warehouse-vendor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-item-warehouse-vendor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.item-warehouse-vendor"] & components["schemas"]["inventory-control-item-warehouse-vendorRequiredProperties"];
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
    "get-inventory-control-item-warehouse-vendor-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item warehouse vendor.
                 * @example 66
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.item-warehouse-vendor"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-item-warehouse-vendor-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item warehouse vendor.
                 * @example 66
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
    "update-inventory-control-item-warehouse-vendor-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item warehouse vendor.
                 * @example 66
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.item-warehouse-vendor"] & Record<string, never>;
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
    "list-inventory-control-item-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-item-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new item group */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.item-group"] & components["schemas"]["inventory-control-item-groupRequiredProperties"];
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
    "get-inventory-control-item-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item group.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.item-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-item-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item group.
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
    "update-inventory-control-item-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.item-group"] & {
                    /** @example 12 */
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
    "list-inventory-control-item-gl-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-item-gl-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.item-gl-group"] & components["schemas"]["inventory-control-item-gl-groupRequiredProperties"];
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
    "get-inventory-control-item-gl-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the item GL group.
                 * @example 13
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.item-gl-group"];
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
    "delete-inventory-control-item-gl-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the item GL group.
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
    "update-inventory-control-item-gl-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the item GL group.
                 * @example 13
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.item-gl-group"] & components["schemas"]["inventory-control-item-gl-groupRequiredProperties"] & {
                    /** @example Stockable Kit */
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
    "list-inventory-control-item-warehouse-available-inventory": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-objects-inventory-control-item-warehouse-available-inventory-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item warehouse available inventory object.
                 * @example 46865
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.item-warehouse-available-inventory"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-tax-item-tax-group-item-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-item-tax-group-item-map-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the item tax group item map.
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
                        "ia::result"?: components["schemas"]["objects.tax.item-tax-group-item-map"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-kit-component": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-kit-component": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.kit-component"] & components["schemas"]["inventory-control-kit-componentRequiredProperties"];
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
    "get-inventory-control-kit-component-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the kit component.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.kit-component"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-kit-component-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the kit component.
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
    "update-inventory-control-kit-component-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the kit component.
                 * @example 12
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.kit-component"] & {
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
    "list-inventory-control-price-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-price-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.price-list"] & components["schemas"]["inventory-control-price-listRequiredProperties"];
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
    "get-inventory-control-price-list-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the inventory price list.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.price-list"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-price-list-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the inventory price list.
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
    "update-inventory-control-price-list-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the inventory price list.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.price-list"] & {
                    /** @example 1 */
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
    "list-inventory-control-price-list-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-price-list-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.price-list-entry"] & components["schemas"]["inventory-control-price-list-entryRequiredProperties"];
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
    "get-inventory-control-price-list-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the price list entry.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.price-list-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-price-list-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the price list entry.
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
    "update-inventory-control-price-list-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the price list entry.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.price-list-entry"] & {
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
    "list-inventory-control-product-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-product-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.product-line"] & components["schemas"]["inventory-control-product-lineRequiredProperties"];
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
    "get-inventory-control-product-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the product line.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.product-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-product-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the product line.
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
    "update-inventory-control-product-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the product line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.product-line"] & {
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
    "list-inventory-control-row": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-row": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.row"] & components["schemas"]["inventory-control-rowRequiredProperties"];
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
    "get-inventory-control-row-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the row.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.row"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-row-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the row.
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
    "update-inventory-control-row-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the row.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.row"] & {
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
    "list-inventory-control-stockable-kit-document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-stockable-kit-document": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.stockable-kit-document"] & components["schemas"]["inventory-control-stockable-kit-documentRequiredProperties"];
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
    "get-inventory-control-stockable-kit-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the stockable kit document.
                 * @example 118
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.stockable-kit-document"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-stockable-kit-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the stockable kit document.
                 * @example 118
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
    "update-inventory-control-stockable-kit-document-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the stockable kit document.
                 * @example 118
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.stockable-kit-document"] & {
                    readonly documentNumber?: unknown;
                    txnDefinition?: {
                        readonly id?: unknown;
                    };
                    readonly sourceDocument?: unknown;
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
    "list-inventory-control-stockable-kit-document-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-stockable-kit-document-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the stockable kit document line.
                 * @example 112
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.stockable-kit-document-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-posting-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-posting-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the posting summary.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.posting-summary"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-total": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-total": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.total"] & components["schemas"]["inventory-control-totalRequiredProperties"];
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
    "get-inventory-control-total-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory total.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.total"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-total-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory total.
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
    "update-inventory-control-total-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory total.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.total"] & {
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
    "list-inventory-control-landed-cost-category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-landed-cost-category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.landed-cost-category"] & components["schemas"]["inventory-control-landed-cost-categoryRequiredProperties"];
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
    "get-inventory-control-landed-cost-category-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the landed cost category.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.landed-cost-category"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-landed-cost-category-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the landed cost category.
                 * @example 101
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
    "update-inventory-control-landed-cost-category-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the landed cost category.
                 * @example 101
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.landed-cost-category"] & {
                    readonly id?: unknown;
                    readonly distributionMethod?: unknown;
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
    "list-inventory-control-lot-category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-lot-category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.lot-category"] & components["schemas"]["inventory-control-lot-categoryRequiredProperties"];
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
    "get-inventory-control-lot-category-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the lot category.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.lot-category"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-lot-category-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the lot category.
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
    "update-inventory-control-lot-category-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the lot category.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.lot-category"] & {
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
    "list-inventory-control-replenishment-forecast": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-replenishment-forecast": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.replenishment-forecast"] & components["schemas"]["inventory-control-replenishment-forecastRequiredProperties"];
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
    "get-inventory-control-replenishment-forecast-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the replenishment forecast.
                 * @example 47
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.replenishment-forecast"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-replenishment-forecast-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the replenishment forecast.
                 * @example 47
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
    "update-inventory-control-replenishment-forecast-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the replenishment forecast.
                 * @example 47
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.replenishment-forecast"] & {
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
    "list-inventory-control-replenishment-forecast-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-replenishment-forecast-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the replenishment forecast line.
                 * @example 66
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.replenishment-forecast-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-replenishment-forecast-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the replenishment forecast line.
                 * @example 66
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
    "list-inventory-control-replenishment-run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-replenishment-run-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the replenishment run.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.replenishment-run"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-replenishment-run-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-replenishment-run-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the replenishment run line.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.replenishment-run-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-serial-mask": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-serial-mask": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.serial-mask"] & components["schemas"]["inventory-control-serial-maskRequiredProperties"];
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
    "get-inventory-control-serial-mask-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the serial mask.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.serial-mask"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-serial-mask-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the serial mask.
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
    "update-inventory-control-serial-mask-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the serial mask.
                 * @example 5
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.serial-mask"] & {
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
    "list-inventory-control-valuation-maintenance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-valuation-maintenance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.valuation-maintenance"] & components["schemas"]["inventory-control-valuation-maintenanceRequiredProperties"];
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
    "get-inventory-control-valuation-maintenance": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the valuation maintenance object.
                 * @example 406
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.valuation-maintenance"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-valuation-maintenance": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the valuation maintenance object.
                 * @example 406
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
    "list-inventory-control-txn-definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-txn-definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.txn-definition"] & components["schemas"]["inventory-control-txn-definitionRequiredProperties"];
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
    "get-inventory-control-txn-definition-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition.
                 * @example 82
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.txn-definition"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-txn-definition-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition.
                 * @example 82
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
    "update-inventory-control-txn-definition-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction definition.
                 * @example 82
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.txn-definition"] & {
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
    "list-inventory-control-txn-definition-cogs-gl-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-txn-definition-cogs-gl-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.txn-definition-cogs-gl-detail"] & components["schemas"]["inventory-control-txn-definition-cogs-gl-detailRequiredProperties"];
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
    "get-inventory-control-txn-definition-cogs-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition COGS GL detail.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.txn-definition-cogs-gl-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-txn-definition-cogs-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition COGS GL detail.
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
    "update-inventory-control-txn-definition-cogs-gl-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition COGS GL detail.
                 * @example 208
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.txn-definition-cogs-gl-detail"] & Record<string, never>;
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
    "list-inventory-control-txn-definition-entity-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-txn-definition-entity-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.txn-definition-entity-detail"] & components["schemas"]["inventory-control-txn-definition-entity-detailRequiredProperties"];
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
    "get-inventory-control-txn-definition-entity-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition entity detail.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.txn-definition-entity-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-txn-definition-entity-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition entity detail.
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
    "update-inventory-control-txn-definition-entity-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition entity detail.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.txn-definition-entity-detail"] & Record<string, never>;
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
    "list-inventory-control-txn-definition-source": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-txn-definition-source": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.txn-definition-source"] & components["schemas"]["inventory-control-txn-definition-sourceRequiredProperties"];
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
    "get-inventory-control-txn-definition-source-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition source.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.txn-definition-source"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-txn-definition-source-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition source.
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
    "update-inventory-control-txn-definition-source-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition source.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.txn-definition-source"] & Record<string, never>;
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
    "list-inventory-control-txn-definition-subtotal-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-txn-definition-subtotal-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.txn-definition-subtotal-detail"] & components["schemas"]["inventory-control-txn-definition-subtotal-detailRequiredProperties"];
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
    "get-inventory-control-txn-definition-subtotal-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition subtotal detail.
                 * @example 98
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.inventory-control.txn-definition-subtotal-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-txn-definition-subtotal-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition subtotal detail.
                 * @example 98
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
    "update-inventory-control-txn-definition-subtotal-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition subtotal detail.
                 * @example 98
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.txn-definition-subtotal-detail"] & Record<string, never>;
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
    "list-inventory-control-txn-definition-total-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-txn-definition-total-detail": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.txn-definition-total-detail"] & components["schemas"]["inventory-control-txn-definition-total-detailRequiredProperties"];
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
    "get-inventory-control-txn-definition-total-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition total detail.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.txn-definition-total-detail"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-txn-definition-total-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition total detail.
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
    "update-inventory-control-txn-definition-total-detail-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inventory transaction definition total detail.
                 * @example 208
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.txn-definition-total-detail"] & Record<string, never>;
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
    "list-inventory-control-unit-of-measure": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-unit-of-measure": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.unit-of-measure"] & components["schemas"]["inventory-control-unit-of-measureRequiredProperties"] & {
                    /** @example {} */
                    readonly defaults?: unknown;
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
    "get-inventory-control-unit-of-measure-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the unit of measure.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.unit-of-measure"];
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
    "delete-inventory-control-unit-of-measure-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the unit of measure.
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
    "update-inventory-control-unit-of-measure-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the unit of measure.
                 * @example 135
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.unit-of-measure"] & {
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
    "list-inventory-control-unit-of-measure-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-unit-of-measure-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.unit-of-measure-group"] & components["schemas"]["inventory-control-unit-of-measure-groupRequiredProperties"] & {
                    /** @example {} */
                    readonly defaults?: unknown;
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
    "get-inventory-control-unit-of-measure-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the unit of measure group.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.unit-of-measure-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-unit-of-measure-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the unit of measure group.
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
    "update-inventory-control-unit-of-measure-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the unit of measure group.
                 * @example 11
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.unit-of-measure-group"] & {
                    /** @example Each */
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
    "list-inventory-control-warehouse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-warehouse": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.warehouse"] & components["schemas"]["inventory-control-warehouseRequiredProperties"];
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
    "get-inventory-control-warehouse-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the warehouse.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.warehouse"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-warehouse-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the warehouse.
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
    "update-inventory-control-warehouse-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the warehouse.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.warehouse"] & {
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
    "list-inventory-control-warehouse-transfer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-warehouse-transfer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a warehouse transfer */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.warehouse-transfer"] & components["schemas"]["inventory-control-warehouse-transferRequiredProperties"];
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
    "get-inventory-control-warehouse-transfer-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the warehouse transfer.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.warehouse-transfer"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-warehouse-transfer-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the warehouse transfer.
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
    "update-inventory-control-warehouse-transfer-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the warehouse transfer.
                 * @example 19
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.warehouse-transfer"] & {
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
    "list-inventory-control-warehouse-transfer-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-inventory-control-warehouse-transfer-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the warehouse transfer line.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.warehouse-transfer-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-inventory-control-warehouse-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-warehouse-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new warehouse group */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.warehouse-group"] & components["schemas"]["inventory-control-warehouse-groupRequiredProperties"];
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
    "get-inventory-control-warehouse-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the warehouse group.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.warehouse-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-warehouse-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the warehouse group.
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
    "update-inventory-control-warehouse-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the warehouse group.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.warehouse-group"] & {
                    /** @example 4 */
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
    "list-inventory-control-zone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-inventory-control-zone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.zone"] & components["schemas"]["inventory-control-zoneRequiredProperties"];
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
    "get-inventory-control-zone-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the zone.
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
                        "ia::result"?: components["schemas"]["objects.inventory-control.zone"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-inventory-control-zone-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the zone.
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
    "update-inventory-control-zone-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the zone.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.inventory-control.zone"] & {
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
    "inventory-control-item-activity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Report parameters */
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.reports.inventory-control-item-activity"];
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
                        "ia::result"?: components["schemas"]["services.report.submitted-status"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "inventory-control-inventory-valuation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Report parameters */
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.reports.inventory-control-inventory-valuation"];
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
                        "ia::result"?: components["schemas"]["services.report.submitted-status"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
}

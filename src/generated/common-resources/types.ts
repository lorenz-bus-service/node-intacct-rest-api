// Generated from spec/common-resources.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/services/core/model": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get an object model definition
         * @description List all the fields and relationships for an object, service, or other resource. Example requests:
         *
         *     - Short definition of all resources in the current version: `/services/core/model`
         *     - Full model of a specified resource: `/services/core/model?name=company-config/department`
         *     - Full model or a resource in a specific API version: `/services/core/model?name=projects/task&version=v1`
         *     - Full model for all resources of a specified type in a version: `/services/core/model?version=v1&schema=true&type=workflow`
         */
        get: operations["get-services-model"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/core/query": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Query an object
         * @description Queries an object for filtered data.
         */
        post: operations["post-services-query"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/core/allowed-operations/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get allowed operations
         * @description Returns allowed operations for specified objects.
         */
        post: operations["list-allowed-operations"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/bulk/job/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send a bulk request
         * @description Send a bulk request for asynchronous processing.
         */
        post: operations["post-bulk-job-create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/bulk/job/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a bulk request status
         * @description Monitor the status of a bulk request.
         */
        get: operations["get-bulk-job-status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/core/composite": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send a composite request
         * @description Sends multiple requests within a single POST request.
         */
        post: operations["post-services-composite"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/core/session/id": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get an XML API session ID
         * @description Get an XML API session ID for a REST API access token.
         */
        get: operations["get-core-session-id"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/core/txn-definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction definitions
         * @description Returns a collection with a key, ID, and link for each transaction definition. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find users that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-common-core-txn-definition"];
        put?: never;
        /**
         * Create a transaction definition
         * @description Creates a new transaction definition.
         */
        post: operations["create-common-core-txn-definition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/core/txn-definition/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transaction definition.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction definition
         * @description Returns detailed information for a specified transaction definition.
         */
        get: operations["get-common-core-txn-definition-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transaction definition
         * @description Deletes a transaction definition.
         */
        delete: operations["delete-common-core-txn-definition-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction definition
         * @description Updates an existing transaction definition by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-common-core-txn-definition-key"];
        trace?: never;
    };
    "/services/core/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Export objects
         * @description Export a collection of objects. Use the `query` property to filter data.
         */
        post: operations["post-core-export"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/core/operation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List operations
         * @description Returns a collection with a key, ID, and link for each operation. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-core-operation"];
        put?: never;
        /**
         * Create an operation
         * @description Creates a new operation.
         */
        post: operations["create-core-operation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/core/operation/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the operation.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an operation
         * @description Returns detailed information for a specified operation.
         */
        get: operations["get-core-operation-key"];
        put?: never;
        post?: never;
        /**
         * Delete an operation
         * @description Deletes an operation.
         */
        delete: operations["delete-core-operation-key"];
        options?: never;
        head?: never;
        /**
         * Update an operation
         * @description Updates an existing operation by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-core-operation-key"];
        trace?: never;
    };
    "/objects/core/schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List schedules
         * @description Returns a collection with a key, ID, and link for each schedule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-core-schedule"];
        put?: never;
        /**
         * Create a schedule
         * @description Creates a new schedule.
         */
        post: operations["create-core-schedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/core/schedule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the schedule.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a schedule
         * @description Returns detailed information for a specified schedule.
         */
        get: operations["get-core-schedule-key"];
        put?: never;
        post?: never;
        /**
         * Delete a schedule
         * @description Deletes a schedule.
         */
        delete: operations["delete-core-schedule-key"];
        options?: never;
        head?: never;
        /**
         * Update a schedule
         * @description Updates an existing schedule by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-core-schedule-key"];
        trace?: never;
    };
    "/objects/core/scheduled-operation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List scheduled operations
         * @description Returns a collection with a key, ID, and link for each scheduled operation. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-core-scheduled-operation"];
        put?: never;
        /**
         * Create a scheduled operation
         * @description Creates a new scheduled operation.
         */
        post: operations["create-core-scheduled-operation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/core/scheduled-operation/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the scheduled operation.
                 * @example 54
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a scheduled operation
         * @description Returns detailed information for a specified scheduled operation.
         */
        get: operations["get-core-scheduled-operation-key"];
        put?: never;
        post?: never;
        /**
         * Delete a scheduled operation
         * @description Deletes a scheduled operation.
         */
        delete: operations["delete-core-scheduled-operation-key"];
        options?: never;
        head?: never;
        /**
         * Update a scheduled operation
         * @description Updates an existing scheduled operation by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-core-scheduled-operation-key"];
        trace?: never;
    };
    "/services/core/view": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Execute a view
         * @description Requests current data that matches the filter and sort options defined in a system view or user view, modified by any parameters in the request body.
         */
        post: operations["post-services-view"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/core/system-view": {
        parameters: {
            query: {
                /**
                 * @description The name of an object or system view.
                 *
                 *     * Use the form `<application-name>/<object name>` to get all views defined for an object, such as `expenses/employee-expense`.
                 *     * Use the form `<application-name>/<object name>::<view ID>` to get a specific system view, such as `expenses/employee-expense::systemfw1`.
                 * @example accounts-payable/vendor::systemVendorFW1
                 */
                name: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a system view
         * @description Returns all system views for an object or a specified system view.
         */
        get: operations["get-core-system-view-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/core/user-view": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List user views
         * @description Returns a collection with a key, ID, and link for each user view. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find user views that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-core-user-view"];
        put?: never;
        /**
         * Create a user view
         * @description Creates a new  user view.
         */
        post: operations["create-core-user-view"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/core/user-view/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for a user view.
                 * @example 262
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a user view
         * @description Returns detailed information for a specified user view.
         */
        get: operations["get-core-user-view-key"];
        put?: never;
        post?: never;
        /**
         * Delete a user view
         * @description Deletes a user view.
         */
        delete: operations["delete-core-user-view-key"];
        options?: never;
        head?: never;
        /**
         * Update a user view
         * @description Updates an existing user view by setting field values.
         *
         *     To change one or more `metadata` values and preserve the rest, you must provide the entire `metadata` object, not just the fields you want to change. Any `metadata` fields that you do not include in the request will be reset to their default values.
         */
        patch: operations["update-core-user-view-key"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "object-model": {
            /**
             * @description Full name for the REST API resource, which consist of the resource type, application name, and the resource name.
             * @example objects/company-config/department
             */
            apiObject?: string;
            /**
             * @description The type for the resource, for example: `rootObject`, `ownedObject`, `service`, or `workflow`.
             * @example rootObject
             */
            type?: string;
            /**
             * @description HTTP methods supported by the resource.
             * @example OPTIONS,GET,DELETE,PATCH,POST
             */
            httpMethods?: string;
            /**
             * @description URL endpoint (full description) for the resource.
             * @example /services/core/model?version=v1&name=objects/company-config/department
             */
            href?: string;
        }[] | {
            request?: {
                /** @description Fields for the service or workflow. */
                fields?: Record<string, never>;
                /** @description Groups of logically related fields or objects for the service or workflow. */
                groups?: unknown[];
                /** @description References to related objects for the service or workflow. */
                refs?: unknown[];
                /** @description Lists (arrays) of repeatable groups or owned objects for the service or workflow. */
                lists?: unknown[];
                /**
                 * @description HTTP methods supported by the service or workflow.
                 * @example OPTIONS,GET,DELETE,PATCH,POST
                 */
                httpMethods?: string;
            };
            response?: {
                /** @description Fields for the service or workflow. */
                fields?: Record<string, never>;
                /** @description Groups of logically related fields or objects for the service or workflow. */
                groups?: unknown[];
                /** @description References to related objects for the service or workflow. */
                refs?: unknown[];
                /** @description Lists (arrays) of repeatable groups or owned objects for the service or workflow. */
                lists?: unknown[];
                /**
                 * @description HTTP methods supported by the service or workflow.
                 * @example OPTIONS,GET,DELETE,PATCH,POST
                 */
                httpMethods?: string;
            };
            /**
             * @description Set to `true` if the service or workflow is idempotent.
             * @default true
             * @example true
             */
            idempotenceSupported?: boolean;
            /**
             * @description Full name for the REST API resource, which consist of the resource type, application name, and the resource name.
             * @example objects/company-config/department
             */
            apiObject?: string;
            /**
             * @description The type for the resource, for example: `rootObject`, `ownedObject`, `service`, or `workflow`.
             * @example rootObject
             */
            type?: string;
            /**
             * @description HTTP methods supported by the service or workflow.
             * @example OPTIONS,GET,DELETE,PATCH,POST
             */
            httpMethods?: string;
            /**
             * @description URL endpoint for the model request.
             * @example /services/core/model?version=v1&name=objects/company-config/department
             */
            href?: string;
        } | {
            /**
             * @description Fields for the object resource.
             *
             *     Note: The `required` field is always set to `false`. To determine if a field is required for a POST or a PATCH operation, check the reference documentation for the specified `object`.
             */
            fields?: Record<string, never>;
            /** @description Groups of logically related fields or objects for the object resource. */
            groups?: Record<string, never>;
            /** @description References to related objects for the object resource. */
            refs?: Record<string, never>;
            /** @description Lists (arrays) of repeatable groups or owned objects for the object resource. */
            lists?: Record<string, never>;
            /**
             * @description Set to `true` if the operations supported for the object are idempotent.
             * @example true
             */
            idempotenceSupported?: boolean;
            /**
             * @description Full name for the REST API resource, which consist of the resource type, application name, and the resource name.
             * @example objects/company-config/department
             */
            apiObject?: string;
            /**
             * @description The type for the resource, for example: `rootObject` or `ownedObject`.
             * @example rootObject
             */
            type?: string;
            /**
             * @description HTTP methods supported by the object.
             * @example OPTIONS,GET,DELETE,PATCH,POST
             */
            httpMethods?: string;
            /**
             * @description URL endpoint for the model request.
             * @example /services/core/model?version=v1&name=objects/company-config/department
             */
            href?: string;
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
        /** @description Query request */
        "core-query": {
            /**
             * @description Object type to query, in the form `<application-name>/<object name>`. For custom objects use `platform-apps/nsp::<object-name>`.
             * @example accounts-payable/vendor
             */
            object?: string;
            /**
             * @description List of fields to include in the response. Can be any combination of these:
             *     * The name of a field in the object that you are querying, such as `id`.
             *     * The name of a field in a related object, using the form `relatedObjectName.fieldName`, such as `vendor.id`.
             *     * The result of an aggregate function run against the values in the returned objects. Use the form `function:fieldName`, such as `min:startDate` to return the earliest starting date. Valid function names are:
             *
             *
             *
             *
             *
             *         * `count`
             *         * `avg`
             *         * `sum`
             *         * `min`
             *         * `max`
             *
             *     * The result of an aggregate function run against the values in related objects, using the form `function:relatedObjectName.fieldName`, such as `max:vendor.creditLimit`. The same functions are supported as for object fields.
             * @example [
             *       "key",
             *       "id",
             *       "max:vendor.creditLimit"
             *     ]
             */
            fields?: string[];
            /**
             * @description Filter conditions to select the objects to return based on their field values. You use operators and conditions to build your filter, such as `{"$eq":{"status":"active"}}` to select objects in which `status` is equal to "active".
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
                    [key: string]: (string | null) | number | boolean;
                };
            } | {
                /** @description The field name and value to be compared with object values. */
                $ne?: {
                    [key: string]: (string | null) | number | boolean;
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
                /** @description The field name and the beginning and ending values to be compared with object values. */
                $between?: {
                    [key: string]: (string | number)[];
                };
            } | {
                /** @description The field name and the beginning and ending values to be compared with object values. */
                $notBetween?: {
                    [key: string]: (string | number)[];
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
                /** @description The array field name and the value to be compared with array values. */
                $has?: {
                    [key: string]: string;
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
             * @description <a name="filterParameters"></a>
             *     Pre-defined filter options.
             */
            filterParameters?: {
                /**
                 * Format: date
                 * @description The "as of" date to use with any relative date comparisons in `filters`. For example, if `asOfDate` is set to "2022-04-01" then `priorMonth` will be "03".
                 *
                 *     The current date is used if `asOfDate` is not set.
                 * @example 2022-04-01
                 */
                asOfDate?: string;
                /**
                 * @description Set to `true` to include hierarchical structure information with each object in the response.
                 * @default false
                 * @example false
                 */
                includeHierarchyFields?: boolean;
                /**
                 * @description Queries are case-sensitive by default. Set to `false` to ignore case in a query.
                 * @default true
                 * @example true
                 */
                caseSensitiveComparison?: boolean;
                /**
                 * @description By default, in a multi-entity company queries from the top-level entity do not access data in private entities. Set `includePrivate` to true if you want to query data in private entities.
                 * @default false
                 * @example false
                 */
                includePrivate?: boolean;
            };
            /**
             * @description Set the order of the results by specifying field names to sort by and whether they should be in ascending or descending order.
             * @example [
             *       {
             *         "totalDue": "asc"
             *       },
             *       {
             *         "lastPaymentMadeDate": "desc"
             *       }
             *     ]
             */
            orderBy?: {
                [key: string]: "asc" | "desc";
            }[];
            /**
             * @description First record of the result set to include in the response.
             * @example 1
             */
            start?: number;
            /**
             * @description Number of records to include in the result set, 4000 maximum.
             * @example 100
             */
            size?: number;
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
        /** @description allowed-operations */
        "services.core.allowed-operations-request": {
            /**
             * @description Object name to query, in the form `<application-name>/<object-name>`.
             * @example vendor
             */
            object: string;
            /** @description Array of up to 1000 object keys for which you want to get allowed operations. */
            keys: string[];
            /** @description List of operations that you want to query specifically. If not provided, the response will include all supported operations. */
            operations?: string[];
            /** @description Options for the request. */
            options?: {
                /** @description By default, in a multi-entity company queries from the top-level entity do not access data in private entities. Set `includePrivate` to true if you want to query data in private entities. */
                includePrivate?: boolean;
                moduleKey?: string;
            };
            /** @description Optional key-value pairs providing additional configuration details for the request. */
            additionalData?: Record<string, never>;
        };
        /** @description Array of objects and allowed operations. */
        "services.core.allowed-operations-response": {
            /** @description Unique key of the object. */
            key?: string;
            /** @description List of operations supported by the object. If an `operations` list was included in the request, the response only includes supported operations from that list. */
            operations?: string[];
            /** @description Optional key-value pairs providing additional configuration details. */
            additionalData?: Record<string, never>;
        }[];
        /** @description Bulk request. */
        "bulk-job-create-request": {
            /**
             * @description The name of the REST object targeted by the request.
             * @example vendor
             */
            objectName: string;
            /**
             * @description The HTTP operation for the request.
             * @example create
             * @enum {string}
             */
            operation: "create" | "update" | "delete";
            /**
             * Format: inbound-binary
             * @description The name for the input file.
             * @example vendor.json
             */
            jobFile: string;
            /**
             * @description The format for the input file.
             * @example json
             * @enum {string}
             */
            fileContentType: "json";
            /**
             * @description Callback URL for receiving the asynchronous response.
             * @example https://example.com/callback
             */
            callbackURL?: string | null;
        };
        /** @description Bulk response. */
        "bulk-job-create-response": {
            /**
             * @description Unique identifier for the request used to monitor the status of the bulk request.
             * @example 950bf10d-f119-41c9-a352-1b68b34498c3
             */
            jobId?: string;
            /**
             * @description URL endpoint for the job status.
             * @example /services/bulk/job/status?jobId=950bf10d-f119-41c9-a352-1b68b34498c3
             */
            statusURL?: string;
            /**
             * Format: date-time
             * @description The date and time the request was created.
             * @example 2023-08-01T01:20:30
             */
            createdDateTime?: string;
        };
        /** @description Bulk status response. */
        "bulk-job-status-response": {
            /**
             * @description Unique identifier for the bulk request.
             * @example 950bf10d-f119-41c9-a352-1b68b34498c3
             */
            jobId?: string;
            /**
             * @description Status of the bulk request. Possible values are
             *     * 'queued' - The bulk request has been received and is waiting to be processed.
             *     * 'preprocessing' - The bulk request is being prepared for processing.
             *     * 'processing' - The bulk request is being processed.
             *     * 'postprocessing' - The bulk request has been processed and is being prepared for download.
             *     * 'completed' - The bulk request has been processed and is ready for download.
             *     * 'failed' - The bulk request has failed.
             * @example completed
             * @enum {string}
             */
            status?: "queued" | "preprocessing" | "processing" | "postprocessing" | "completed" | "failed";
            /**
             * @description Percentage of the bulk request that has been processed. This field will show progress only when the `status` field is set to `processing`.
             * @default 0
             * @example 100
             */
            percentComplete?: number;
            /**
             * @description URL endpoint for the bulk status request. This field will be present only when the `status` field is set to `completed`.
             * @example /services/bulk/job/status?jobId=950bf10d-f119-41c9-a352-1b68b34498c3&download=true
             */
            downloadURL?: string | null;
            /**
             * Format: outbound-binary
             * @description File which contains the results of all the operations in the bulk request, in JSON format.
             * @example 950bf10d-f119-41c9-a352-1b68b34498c3-response.json
             */
            jobStatusFile?: string;
        };
        "core-composite-request": components["schemas"]["services.core.composite"][];
        error: {
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
                placeholders?: string;
                /** @example {} */
                propertySet?: string;
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
                    /**
                     * @example {
                     *       "FIELD": "/newDate"
                     *     }
                     */
                    placeholders?: string;
                    /** @example {} */
                    propertySet?: string;
                };
            }[];
        };
        /** @description Session IDs response. */
        "core-session-id-response": {
            /**
             * @description Session ID for the XML API.
             * @example Tz1Bh8NxmR4JkF0Ld3Xh9pA7G5uC6YQ8mW2ZqR1FqP9jC8FvDg5sTzHw
             */
            sessionId?: string;
            /**
             * @description Length of time after which the session expires, in seconds.
             * @example 3600
             */
            expiresIn?: number;
        };
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
        /** @description Transaction definition */
        "objects.core.txn-definition": {
            /**
             * @description System-assigned key for the transaction definition.
             * @example 154
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the transaction definition.
             * @example Sales Invoice
             */
            id?: string;
            /**
             * @description URL endpoint for the transaction definition.
             * @example /objects/core/txn-definition/154
             */
            readonly href?: string;
        };
        "common-core-txn-definitionRequiredProperties": Record<string, never>;
        /** @description Export */
        "services.core.export": {
            /**
             * @description File format for the export.
             * @example csv
             * @enum {string}
             */
            fileType?: "pdf" | "csv" | "word" | "xml" | "xlsx";
            /** @description Query parameters for filtered data. */
            query?: components["schemas"]["core-query"] & Record<string, never>;
        };
        /** @description Details of scheduled action that automates execution of recurring jobs. */
        "objects.core.operation": {
            /**
             * @description System-assigned unique key for the operation.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the operation. This value cannot be modified.
             * @example Monthly inventory check
             */
            id?: string;
            /**
             * @description Description for the action.
             * @example Monthly inventory check for organic produce
             */
            description?: string;
            /**
             * @description System-generated key for the user that created the operation.
             * @example 23
             */
            userKey?: number;
            /** @description Entity associated with the operation. */
            entity?: string;
            /**
             * @description Action to be performed when the operation is executed.
             * @example checkInventory
             */
            action?: string;
            /**
             * @description Data to be used when the operation is executed.
             * @example Check inventory
             */
            bodyData?: string;
            /**
             * @description System-generated key for the module associated with the operation.
             * @example orderEntry
             */
            moduleKey?: string;
            /** @description System-generated key for the location associated with the operation. */
            locationKey?: string;
            /**
             * @description Email address to send notifications to when the operation is executed.
             * @example admin@company.org
             */
            contactEmail?: string;
            /**
             * @description Login ID for the user who created the operation.
             * @example adminUser
             */
            userInfo?: string;
            /**
             * @description URL endpoint for the operation.
             * @example /objects/core/operation/23
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
        };
        "core-operationRequiredProperties": Record<string, never>;
        /** @description Defines the scheduling details for recurring transactions, including start date, frequency, next execution date, and end conditions. */
        "objects.core.schedule": {
            /**
             * @description System-assigned unique key for the schedule.
             * @example 34
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the schedule. This value cannot be changed using the PATCH operation.
             * @example Monthly installment billing
             */
            id?: string;
            /**
             * @description Description for the schedule.
             * @example Monthly installment billing for organic produce
             */
            description?: string;
            /**
             * @description Indicates whether the scheduled jobs will be executed automatically, manually, or immediately.
             * @example automatic
             * @enum {string}
             */
            executionType?: "automatic" | "manual" | "immediate";
            /**
             * Format: date
             * @description The date the schedule begins.
             * @example 2024-06-01
             */
            startDate?: string;
            /**
             * Format: date
             * @description The date the schedule expires. A `repeatCount` can be specified instead of an `endDate`, but not both.
             * @example 2025-06-01
             */
            endDate?: string;
            /**
             * @description Specifies the regular interval at which the schedule should repeat. This field works in conjunction with the `repeatInterval` field, where you specify the number of intervals. For example, if you set `repeatBy` to `months` and set the `repeatInterval` to `3`, the schedule will run every 3 months.
             * @example month
             * @enum {string}
             */
            repeatBy?: "none" | "day" | "week" | "month" | "year" | "endOfMonth";
            /**
             * @description The day of the week or month on which the schedule runs. This field works in conjunction with the `repeatBy` field.
             * @example 3
             */
            repeatDate?: number;
            /**
             * @description Specifies the interval at which the schedule repeats. This field works in conjunction with the `repeatBy` field, where you specify the regular interval at which the schedule should repeat. For example, if you set `repeatBy` to `months` and set the `repeatInterval` to `3`, the schedule will run every 3 months.
             * @example 2
             */
            repeatInterval?: number;
            /**
             * @description Specifies the number of times the transaction should be executed. Either this field or the `endDate` field must be specified to define the end condition, not both.
             * @example 5
             */
            repeatCount?: number;
            /**
             * Format: date
             * @description Next execution date for the schedule.
             * @example 2025-04-01
             */
            nextExecutionDate?: string;
            /**
             * Format: date
             * @description Last execution date for the schedule.
             * @example 2025-06-01
             */
            lastExecutionDate?: string;
            /**
             * Format: date
             * @description The due date for the scheduled execution of the transaction.
             * @example 2025-06-01
             */
            dueDate?: string;
            /**
             * @description The number of attempts to execute the scheduled transaction.
             * @example 12
             */
            executionCount?: number;
            /**
             * @description Process ID, if the schedule is for a Cron job.
             * @example 234
             */
            cronID?: string;
            /**
             * @description Used for consolidation. Specify when you want the first consolidation of each month to be performed, by specifying the number of days (between 1 and 31). For example, if you enter 6, consolidation will automatically occur 6 days after the month end.
             * @example 15
             */
            startOn?: number;
            /**
             * @description Used for consolidation. Specify the day of the month to stop running the consolidation. The schedule will start again on the first day of the next month.
             * @example 7
             */
            endOn?: number;
            /**
             * @description Login ID for the user who created the schedule.
             * @example Admin
             */
            userinfo?: string;
            /**
             * @description URL endpoint for the schedule.
             * @example /objects/core/schedule/234
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
        };
        "core-scheduleRequiredProperties": Record<string, never>;
        /** @description Scheduling details and the operation for recurring transactions. */
        "objects.core.scheduled-operation": {
            /** @description System-assigned unique key for the scheduled operation. */
            readonly key?: string;
            /** @description Unique identifier for the scheduled operation. This value cannot be modified. */
            id?: string;
            /**
             * @description System-assigned key for the associated schedule.
             * @example 83
             */
            scheduleKey?: number;
            /**
             * @description System-assigned key for the associated operation.
             * @example 234
             */
            operationKey?: number;
            /** @description Description for the scheduled operation. */
            description?: string;
            /** @description Reference to the operation that will be executed according to the schedule. */
            operation?: {
                /**
                 * @description System-assigned key for the operation.
                 * @example 234
                 */
                key?: string;
                /**
                 * @description Unique identifier for the operation.
                 * @example Generate monthly invoice
                 */
                id?: string;
                /**
                 * @description URL endpoint for the operation.
                 * @example /objects/core/operation/234
                 */
                readonly href?: string;
            };
            /** @description Reference to the schedule that defines when the operation will be executed. */
            schedule?: {
                /**
                 * @description System-generated key for the schedule.
                 * @example 83
                 */
                key?: string;
                /**
                 * @description Unique identifier for the schedule.
                 * @example Monthly invoice generation
                 */
                id?: string;
                /**
                 * Format: date
                 * @description Next scheduled execution date for the operation based on the schedule's configuration.
                 * @example 2025-07-01
                 */
                nextScheduledDate?: string;
                /**
                 * @description URL endpoint for the schedule.
                 * @example /objects/core/schedule/83
                 */
                readonly href?: string;
            };
            /**
             * @description User who created the scheduled operation.
             * @example admin
             */
            userinfo?: string;
            /**
             * @description URL endpoint for the scheduled operation.
             * @example /objects/core/scheduled-operation/234
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
        };
        "core-scheduled-operationRequiredProperties": Record<string, never>;
        /** @description View */
        "services.core.view": {
            /**
             * @description Key to identify the view. For system views the key is in the form of `<application-name>/<object name>::<view ID>`, such as `expenses/employee-expense::systemfw1`. For user views the key is numeric, such as `540`.
             * @example 12
             */
            key: string;
            /**
             * @description The type of view to execute, either system or user.
             * @example user
             * @enum {string}
             */
            viewType: "user" | "system";
            /** @description Any filter parameters supported by the query service to narrow the search */
            filterParameters?: {
                /**
                 * Format: date
                 * @description The "as of" date to use with any relative date comparisons in `filters` defined in the view. For example, if `asOfDate` is set to "2025-04-01" then `priorMonth` will be "03".
                 *
                 *     The current date is used if `asOfDate` is not set.
                 * @example 2025-04-01
                 */
                asOfDate?: string;
                /**
                 * @description Queries are case-sensitive by default. Set to `false` to ignore case in a query.
                 * @default true
                 * @example true
                 */
                caseSensitiveComparison?: boolean;
                /**
                 * @description Set to `true` to include hierarchical structure information with each object in the response.
                 * @default false
                 * @example false
                 */
                includeHierarchyFields?: boolean;
                /**
                 * @description By default, in a multi-entity company queries from the top-level entity do not access data in private entities. Set `includePrivate` to `true` if you want to query data in private entities.
                 * @default false
                 * @example false
                 */
                includePrivate?: boolean;
            };
            /**
             * @description First record of the result set to include in the response. Use with `size` to paginate the result set. The first record is 1.
             * @example 1
             */
            start?: number;
            /**
             * @description Number of records per page, 4000 maximum.
             * @example 100
             */
            size?: number;
        };
        /** @description Filter View. */
        "objects.core.system-view": {
            /**
             * @description System-assigned key for the system view.
             * @example expenses/employee-expense::systemfw1
             */
            readonly key?: string;
            /**
             * @description ID for the system view. IDs are unique within a context.
             * @example systemfw1
             */
            readonly id?: string;
            /**
             * @description View name.
             * @example IA.RECENTLY_MODIFIED
             */
            name?: string;
            /**
             * @description Description of the system view.
             * @example Specifies all active electronic-receipts
             */
            description?: string;
            /**
             * @description Object that is queried to create the system view.
             * @example expenses/employee-expense
             */
            object?: string;
            /**
             * @description Query parameters that define the object being queried, the filters that select the records to return based on field values, the fields (columns) returned in the view, and the ordering of the returned records.
             * @example {
             *       "fields": [
             *         "id",
             *         "employeeContact.lastName",
             *         "employeeContact.firstName",
             *         "createdDate",
             *         "expenseReportNumber",
             *         "reimbursement.totalEntered",
             *         "nonReimbursable.reimbursementTotalEntered",
             *         "reimbursement.reimbursementCurrency",
             *         "basePayment.totalEntered",
             *         "state"
             *       ],
             *       "object": "expenses/employee-expense",
             *       "orderBy": [
             *         {
             *           "createdDate": "desc"
             *         }
             *       ]
             *     }
             */
            query?: components["schemas"]["core-query"] & Record<string, never>;
            /**
             * @description Contexts where the system view is available. A value of `__default` means that the system view is available in all contexts.
             * @example [
             *       "__default"
             *     ]
             */
            readonly contexts?: string[];
            /**
             * @description URL endpoint of the system view.
             * @example /objects/core/system-view?name=expenses/employee-expense::systemfw1
             */
            readonly href?: string;
        };
        /** @description Filter View. */
        "objects.core.user-view": {
            /**
             * @description System-assigned unique key for the user view.
             * @example 42
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the user view. This value is the same as `key` for this object.
             * @example 42
             */
            readonly id?: string;
            /**
             * @description Unique name for the user view.
             * @example Vendors with overdue balances
             */
            name?: string;
            /**
             * @description URL endpoint for the user view.
             * @example /objects/core/user-view/42
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            /**
             * @description A brief description of the user view.
             * @example Shows vendors with overdue balances greater than $200
             */
            description?: string;
            /**
             * @description Object that is queried to create the user view. Must match the `object` property in the `query` object.
             * @example accounts-payable/bill
             */
            object?: string;
            /**
             * @description View category. Can be used to group user view.
             * @example Vendor views
             */
            category?: string | null;
            /**
             * @description The API version at which the user view object was created or last updated. The system will try to adjust the output as needed if a view created in an older version of the API is executed in a newer version.
             * @example 1
             */
            viewVersion?: string;
            /**
             * @description Indicates whether this user view is only usable by the user who created it (`false`) or is usable by others (`true`).
             * @default false
             * @example true
             */
            isPublic?: boolean;
            /**
             * @description UI context where the user view is available. A value of `__default` means that the user view is available in all contexts. This field can be used to group views that are stored queries that aren't intended for use in the UI.
             * @example __default
             */
            context?: string;
            /**
             * @description Query parameters that define the object being queried, the filters that select the records to return based on field values, the fields (columns) returned in the view, and the ordering of the returned records.
             * @example {
             *       "object": "accounts-receivable/customer",
             *       "fields": [
             *         "name",
             *         "contacts.default.mailingAddress.city",
             *         "customerType.id",
             *         "totalDue"
             *       ],
             *       "filters": [
             *         {
             *           "$gte": {
             *             "totalDue": "200"
             *           }
             *         }
             *       ],
             *       "orderBy": [
             *         {
             *           "totalDue": "asc"
             *         }
             *       ],
             *       "filterExpression": "and",
             *       "filterParameters": {
             *         "includePrivate": true
             *       }
             *     }
             */
            query?: components["schemas"]["core-query"] & Record<string, never>;
            /** @description Settings for displaying the view in the UI. */
            metadata?: {
                /**
                 * @description Number of frozen columns in the view.
                 * @example 2
                 */
                frozenColumnCount?: number;
                /**
                 * @deprecated
                 * @description This property is deprecated and replaced by `frozenColumnCount`.
                 */
                frozenColumnsCount?: number;
                /** @description Ordered list of columns in the view. */
                columns?: {
                    /**
                     * @description Field displayed in the column.
                     * @example customerType.id
                     */
                    id?: string;
                    /**
                     * @description Column format, either `clip` or `wrap`.
                     * @example clip
                     */
                    textFormat?: string;
                    /**
                     * @deprecated
                     * @description This property is deprecated and replaced by `textFormat`.
                     */
                    format?: string;
                }[];
            };
            /** @description The user who created and owns the user view. */
            owner?: {
                /**
                 * @description System-assigned key for the user.
                 * @example 512
                 */
                key?: string;
                /**
                 * @description Unique identifier for the user.
                 * @example rmccamy
                 */
                id?: string;
                /**
                 * @description URL endpoint for this user.
                 * @example /objects/company-config/user/512
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "core-user-viewRequiredProperties": Record<string, never>;
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
        /** @description Schema for describing a single request that will be included as part of a POST body sent to the composite request service. */
        "services.core.composite": {
            /**
             * @description Operation for request.
             * @example POST
             * @enum {string}
             */
            method: "GET" | "POST" | "PATCH" | "DELETE";
            /**
             * @description Path to the request endpoint in the Intacct REST API.
             * @example /objects/accounts-payable/vendor
             */
            path: string;
            /**
             * @description Headers needed for this request.
             * @example {
             *       "Idempotency-Key": "e9606bb2-6be1-4c9e-a2a7-134cd644a5ee"
             *     }
             */
            headers?: Record<string, never>;
            /**
             * @description Request body for POST or PATCH operations.
             * @example {
             *       "lastName": "Doe",
             *       "firstName": "John",
             *       "id": "Doe, John"
             *     }
             */
            body?: Record<string, never>;
            /**
             * @description Reference identifier for success results, used by other requests as input data.
             * @example contactRef
             */
            resultReference?: string;
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
    "get-services-model": {
        parameters: {
            query?: {
                /**
                 * @description Resource name, in the form `<application-name>/<resource name>`. Note that some services have 3-part names, such as `company-config/document-sequence/get-next-sequence`. For custom objects use `platform-apps/nsp::<object-name>`.
                 * @example accounts-payable/vendor
                 */
                name?: string;
                /**
                 * @description A resource type to get a list of all resources of that type.
                 *
                 *     - `object`
                 *     - `service`
                 *     - `workflow`
                 *     - A specific resource type, such as `ownedObject`. The resource type is one of the fields returned in the resource model.
                 *     - A comma-separated list of resource types. `object` and `service` cannot be included in the list.
                 * @example object
                 */
                type?: string;
                /**
                 * @description The API version for which you want a list of resources or a resource model. Use with the `name` parameter to ger a resource model as defined in a specific version of the API. Use `version=all` to get a list of versions. The default is the version used in the URL path of the `model` request.
                 * @example v1
                 */
                version?: string;
                /**
                 * @description Set to `true` to return the full model of the resource. Set to `false` to return the short definition. The default is `true` when requesting a single resource and `false` when requesting a list of resources.
                 * @example true
                 */
                schema?: string;
                /**
                 * @description Set to `true` to return in addition of the model the descriptions, examples and tags. Set to `false` to return only the model definition. The default is `false`.
                 * @example true
                 */
                description?: string;
                /**
                 * @description The RegExp filter to apply to the resource names. The default is `.*`, which returns all resources.
                 * @example .*company-config\/cla.*
                 */
                filter?: string;
                /**
                 * @description The RegExp filter to apply to the descriptions. The default is `.*`, which returns all resources.
                 * @example .*company config.*
                 */
                descriptionFilter?: string;
                /**
                 * @deprecated
                 * @description Use `true` (default) to return the resource schema formatted as-is. Use `false` to return the schema without the wrapping objects for groups, refs, and lists.
                 * @example false
                 */
                tags?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-model"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "post-services-query": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["core-query"];
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
                        /** @description Fields requested in query */
                        "ia::result"?: {
                            [key: string]: (string | null) | number | Record<string, never> | boolean;
                        }[];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-allowed-operations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["services.core.allowed-operations-request"];
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
                        "ia::result"?: components["schemas"]["services.core.allowed-operations-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "post-bulk-job-create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["bulk-job-create-request"];
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
                        "ia::result"?: components["schemas"]["bulk-job-create-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-bulk-job-status": {
        parameters: {
            query: {
                /**
                 * @description Unique identifier for the bulk request.
                 * @example 950bf10d-f119-41c9-a352-1b68b34498c3
                 */
                jobId: string;
                /**
                 * @description After the bulk request has completed (`status` field is set to `completed`), set to `true`to download the response file which contains the results of all the operations in JSON format.
                 * @example true
                 */
                download?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["bulk-job-status-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "post-services-composite": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Array of subrequests */
        requestBody: {
            content: {
                "application/json": components["schemas"]["core-composite-request"];
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
                        /** @description Composite response */
                        "ia::result"?: {
                            /** @description HTTP status code */
                            "ia::status"?: number;
                            "ia::result"?: Record<string, never> | Record<string, never>[];
                            "ia::meta"?: components["schemas"]["metadata"] | components["schemas"]["metadata-pages"];
                        }[];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            /** @description Multi-Status */
            207: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Composite response */
                        "ia::result"?: {
                            /** @description HTTP status code */
                            "ia::status"?: number;
                            "ia::result"?: Record<string, never> | Record<string, never>[] | {
                                "ia::error"?: components["schemas"]["error"];
                            };
                            "ia::error"?: components["schemas"]["error"];
                            "ia::meta"?: components["schemas"]["metadata"] | components["schemas"]["metadata-pages"];
                        }[];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-core-session-id": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Executed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["core-session-id-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-common-core-txn-definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-common-core-txn-definition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.core.txn-definition"] & components["schemas"]["common-core-txn-definitionRequiredProperties"];
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
    "get-common-core-txn-definition-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transaction definition.
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
                        "ia::result"?: components["schemas"]["objects.core.txn-definition"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-common-core-txn-definition-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transaction definition.
                 * @example 34
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
    "update-common-core-txn-definition-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the transaction definition.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.core.txn-definition"] & {
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
    "post-core-export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["services.core.export"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.ms-word": unknown;
                    "application/vnd.ms-excel": unknown;
                    "application/pdf": unknown;
                    "text/xml": unknown;
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-core-operation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-core-operation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.core.operation"] & components["schemas"]["core-operationRequiredProperties"];
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
    "get-core-operation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the operation.
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
                        "ia::result"?: components["schemas"]["objects.core.operation"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-core-operation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the operation.
                 * @example 34
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
    "update-core-operation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the operation.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.core.operation"] & {
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
    "list-core-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-core-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.core.schedule"] & components["schemas"]["core-scheduleRequiredProperties"];
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
    "get-core-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the schedule.
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
                        "ia::result"?: components["schemas"]["objects.core.schedule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-core-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the schedule.
                 * @example 34
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
    "update-core-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the schedule.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.core.schedule"] & {
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
    "list-core-scheduled-operation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-core-scheduled-operation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.core.scheduled-operation"] & components["schemas"]["core-scheduled-operationRequiredProperties"];
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
    "get-core-scheduled-operation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the scheduled operation.
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
                        "ia::result"?: components["schemas"]["objects.core.scheduled-operation"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-core-scheduled-operation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the scheduled operation.
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
    "update-core-scheduled-operation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the scheduled operation.
                 * @example 54
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.core.scheduled-operation"] & {
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
    "post-services-view": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["services.core.view"];
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
                        /** @description Data requested in query */
                        "ia::result"?: Record<string, never>[];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-core-system-view-key": {
        parameters: {
            query: {
                /**
                 * @description The name of an object or system view.
                 *
                 *     * Use the form `<application-name>/<object name>` to get all views defined for an object, such as `expenses/employee-expense`.
                 *     * Use the form `<application-name>/<object name>::<view ID>` to get a specific system view, such as `expenses/employee-expense::systemfw1`.
                 * @example accounts-payable/vendor::systemVendorFW1
                 */
                name: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.core.system-view"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    } | {
                        "ia::result"?: components["schemas"]["objects.core.system-view"][];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-core-user-view": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-core-user-view": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description User view to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.core.user-view"] & components["schemas"]["core-user-viewRequiredProperties"];
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
    "get-core-user-view-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for a user view.
                 * @example 262
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.core.user-view"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-core-user-view-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for a user view.
                 * @example 262
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
    "update-core-user-view-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for a user view.
                 * @example 262
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.core.user-view"];
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

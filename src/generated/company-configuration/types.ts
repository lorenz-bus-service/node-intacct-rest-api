// Generated from spec/company-configuration.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/services/company-config/dimensions/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List dimensions
         * @description Lists all standard and user-defined dimensions in a company along with integration information about each one.
         */
        get: operations["get-company-config-dimensions-list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/class": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List classes
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-class"];
        put?: never;
        /**
         * Create a class
         * @description Creates a new class. You can think of this as adding a new value to the dimension that you can use to tag transactions for reporting.
         */
        post: operations["create-company-config-class"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/class/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the class.
                 * @example 43
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a class
         * @description Returns detailed information for a specified class.
         */
        get: operations["get-company-config-class-key"];
        put?: never;
        post?: never;
        /**
         * Delete a class
         * @description Deletes a class. You can delete a class if it is not being used or referenced. Deleted classes cannot be recovered.
         */
        delete: operations["delete-company-config-class-key"];
        options?: never;
        head?: never;
        /**
         * Update a class
         * @description Updates an existing class by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-class-key"];
        trace?: never;
    };
    "/objects/company-config/class-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List class groups
         * @description Returns a collection with a key, ID, and link for each class group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-class-group"];
        put?: never;
        /**
         * Create a class group
         * @description Creates a new class group. You can create a class group of type `all` or `specific`. If you create a class group of type `all`, you must provide a `memberFilter` to select the classes to include in the group. If you create a class group of type `specific`, you must provide a list of classes in the `groupMembers` array. You can optionally filter the array with the `memberFilter` settings.
         */
        post: operations["create-company-config-class-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/class-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the class group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get the details of a class group
         * @description Returns detailed information for a specified class group.
         */
        get: operations["get-company-config-class-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete a class group
         * @description Deletes a class group.
         */
        delete: operations["delete-company-config-class-group-key"];
        options?: never;
        head?: never;
        /**
         * Update a class group
         * @description Updates an existing class group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-class-group-key"];
        trace?: never;
    };
    "/objects/company-config/department": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List departments
         * @description Returns up to 100 department references from the collection with a key, ID, and link for each department. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find departments that meet certain criteria and to specify the properties that are returned.
         */
        get: operations["list-company-config-department"];
        put?: never;
        /**
         * Create a department
         * @description Creates a new department.
         */
        post: operations["create-company-config-department"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/department/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the department.
                 * @example 28
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a department
         * @description Returns detailed information for a specified department.
         */
        get: operations["get-company-config-department-key"];
        put?: never;
        post?: never;
        /**
         * Delete a department
         * @description Deletes a department. You can delete a department if it is not being used or referenced. Deleted departments cannot be recovered.
         */
        delete: operations["delete-company-config-department-key"];
        options?: never;
        head?: never;
        /**
         * Update a department
         * @description Updates an existing department by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-department-key"];
        trace?: never;
    };
    "/objects/company-config/department-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List department groups
         * @description Returns up to 100 department groups from the collection with a key, ID, and link for each group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find department groups that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-department-group"];
        put?: never;
        /**
         * Create a department group
         * @description Creates a new department group.
         */
        post: operations["create-company-config-department-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/department-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the department group.
                 * @example 18
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a department group
         * @description Returns detailed information for a specified department group.
         */
        get: operations["get-company-config-department-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete a department group
         * @description Deletes a department group.
         */
        delete: operations["delete-company-config-department-group-key"];
        options?: never;
        head?: never;
        /**
         * Update a department group
         * @description Updates an existing department group by setting field values. Any fields not provided remain unchanged. New values for any arrays will replace the existing array.
         */
        patch: operations["update-company-config-department-group-key"];
        trace?: never;
    };
    "/objects/company-config/department-group-member": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List department group members
         * @deprecated
         * @description Returns a collection with a key, ID, and link for each department group member.
         */
        get: operations["list-company-config-department-group-member"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/department-group-member/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the department group member.
                 * @example 42
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a department group member
         * @description Returns detailed information for a specified department group member.
         */
        get: operations["get-company-config-department-group-member-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/employee": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employees
         * @description Returns a collection with a key, ID, and link for each employee. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find employees that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-employee"];
        put?: never;
        /**
         * Create an employee
         * @description Creates a new employee. If the employee is also a user in Sage Intacct (which is required if they will be entering time or expenses), set the `primaryContact` to the same contact that is associated with the user.
         */
        post: operations["create-company-config-employee"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/employee/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee.
                 * @example 63
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee
         * @description Returns detailed information for a specified employee.
         */
        get: operations["get-company-config-employee-key"];
        put?: never;
        post?: never;
        /**
         * Delete an employee
         * @description Deletes an employee.
         */
        delete: operations["delete-company-config-employee-key"];
        options?: never;
        head?: never;
        /**
         * Update an employee
         * @description Updates an existing employee by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-employee-key"];
        trace?: never;
    };
    "/objects/company-config/employee-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee types
         * @description Returns a collection with a key, ID, and link for each employee type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-employee-type"];
        put?: never;
        /**
         * Create an employee type
         * @description Creates a new employee type.
         */
        post: operations["create-company-config-employee-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/employee-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee type.
                 * @example 256
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee type
         * @description Returns detailed information for a specified employee type.
         */
        get: operations["get-company-config-employee-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete an employee type
         * @description Deletes an employee type.
         */
        delete: operations["delete-company-config-employee-type-key"];
        options?: never;
        head?: never;
        /**
         * Update an employee type
         * @description Updates an existing employee type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-employee-type-key"];
        trace?: never;
    };
    "/objects/company-config/employee-rate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee rates
         * @description Returns a collection with a key, ID, and link for each employee rate. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-projects-employee-rate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/employee-rate/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee rate.
                 * @example 236
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee rate
         * @description Returns detailed information for a specified employee rate.
         */
        get: operations["get-projects-employee-rate-key"];
        put?: never;
        post?: never;
        /**
         * Delete an employee rate
         * @description Deletes an employee rate.
         */
        delete: operations["delete-company-config-employee-rate-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/employee-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee groups
         * @description Returns up to 100 employee groups from the collection with a key, ID, and link for each group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find employee groups that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-employee-group"];
        put?: never;
        /**
         * Create an employee group
         * @description Creates a new employee group.
         */
        post: operations["create-company-config-employee-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/employee-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee group.
                 * @example 33
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee group
         * @description Returns detailed information for a specified employee group.
         */
        get: operations["get-company-config-employee-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete an employee group
         * @description Deletes an employee group.
         */
        delete: operations["delete-company-config-employee-group-key"];
        options?: never;
        head?: never;
        /**
         * Update an employee group
         * @description Updates an existing employee group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-employee-group-key"];
        trace?: never;
    };
    "/objects/company-config/employee-bank-file-setup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee bank file setups
         * @description Returns a collection with a key, ID, and link for each bank file setup. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find employee bank file setups that meet certain criteria and to specify the properties that are returned.
         */
        get: operations["list-company-config-employee-bank-file-setup"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/employee-bank-file-setup/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee bank file setup.
                 * @example 25
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee bank file setup
         * @description Returns detailed information for a specified employee bank file setup.
         */
        get: operations["get-company-config-employee-bank-file-setup-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/earning-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List earning types
         * @description Returns a collection with a key, ID, and link for each earning type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["get-objects-company-config-earning-type"];
        put?: never;
        /**
         * Create an earning type
         * @description Creates a new earning type.
         */
        post: operations["create-objects-company-config-earning-type-key"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/earning-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for an earning type.
                 * @example 24
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an earning type
         * @description Returns detailed information for a specified earning type.
         */
        get: operations["get-company-config-earning-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete an earning type
         * @description Deletes an earning type.
         */
        delete: operations["delete-objects-company-config-earning-type-key"];
        options?: never;
        head?: never;
        /**
         * Update an earning type
         * @description Updates an existing earning type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["patch-objects-company-config-earning-type-key"];
        trace?: never;
    };
    "/objects/company-config/location": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List locations
         * @description Returns up to 100 locations from the collection with a key, ID, and link for each location. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find locations that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-location"];
        put?: never;
        /**
         * Create a location
         * @description Creates a new location. You can think of this as adding a new value to the dimension that you can use to tag transactions for reporting.
         */
        post: operations["create-company-config-location"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/location/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the location.
                 * @example 92
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a location
         * @description Returns detailed information for a specified location.
         */
        get: operations["get-company-config-location-key"];
        put?: never;
        post?: never;
        /**
         * Delete a location
         * @description Deletes a location. You can delete a location if it is not being used
         *     or referenced. Deleted locations cannot be recovered.
         *
         *     Use this endpoint to delete locations with a `locationType` of
         *     `location`, which is a standard company geographic or divisional
         *     location. To delete locations that are entities or elimination
         *     entities, use the `entity` endpoint instead.
         *
         *     If you cannot delete a location because it is being used, use the
         *     `PATCH` operation instead to set the status field to `inactive`.
         *     Inactive locations cannot be used on transactions, but they are still
         *     available for reporting and historical reference.
         */
        delete: operations["delete-company-config-location-key"];
        options?: never;
        head?: never;
        /**
         * Update a location
         * @description Updates an existing location by setting field values. Any fields not provided remain unchanged. Use this endpoint to update locations with a `locationType` of `location`, which is a standard company geographic or divisional location. To update locations that are entities or elimination entities, use the `entity` endpoint instead. You can also use this endpoint to make a location inactive, as long as it does not have active child locations, by setting its `status` to `inactive`.
         */
        patch: operations["update-company-config-location-key"];
        trace?: never;
    };
    "/objects/company-config/location-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List location groups
         * @description Returns a collection with a key, ID, and link for each location group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-location-group"];
        put?: never;
        /**
         * Create a location group
         * @description Creates a new location group.
         */
        post: operations["create-company-config-location-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/location-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the location group.
                 * @example 49
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a location group
         * @description Returns detailed information for a specified location group.
         */
        get: operations["get-company-config-location-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete a location group
         * @description Deletes a location group.
         */
        delete: operations["delete-company-config-location-group-key"];
        options?: never;
        head?: never;
        /**
         * Update a location group
         * @description Updates an existing location group by setting field values. Any fields not provided remain unchanged. New values for any arrays will replace the existing array.
         */
        patch: operations["update-company-config-location-group-key"];
        trace?: never;
    };
    "/objects/company-config/location-group-member": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List location group members
         * @description Returns a collection with a key, ID, and link for each location group member. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-location-group-member"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/location-group-member/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the location group member.
                 * @example 13
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a location group member
         * @description Returns detailed information for a specified location group member.
         */
        get: operations["get-company-config-location-group-member-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/attachment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List attachments
         * @description Returns a collection with a key, ID, and link for each attachment. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find attachments that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-attachment"];
        put?: never;
        /**
         * Create an attachment
         * @description Creates a new attachment in a specified folder. The folder must exist before you create the attachment. You can add files when you create an attachment, or use a PATCH request to add files later.
         */
        post: operations["create-company-config-attachment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/attachment/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the attachment.
                 * @example 43
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an attachment
         * @description Returns detailed information for a specified attachment, including Base64-encoded versions of all files in the attachment.
         */
        get: operations["get-company-config-attachment-key"];
        put?: never;
        post?: never;
        /**
         * Delete an attachment
         * @description Deletes an attachment and all files that it contains. You must first remove the attachment from any objects or transactions.
         */
        delete: operations["delete-company-config-attachment-key"];
        options?: never;
        head?: never;
        /**
         * Update an attachment
         * @description Updates an existing attachment by setting field values. Any fields not provided remain unchanged. Use this operation to add, update, and delete files in attachments.
         */
        patch: operations["update-company-config-attachment-key"];
        trace?: never;
    };
    "/objects/company-config/file": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List files
         * @description Returns a collection with a key, ID, and link for each file. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-file"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/file/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the file.
                 * @example 15
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a file
         * @description Returns detailed information for a specified file.
         */
        get: operations["get-company-config-file-key"];
        put?: never;
        post?: never;
        /**
         * Delete a file
         * @description Deletes a file from an attachment.
         */
        delete: operations["delete-company-config-file-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/folder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List folders
         * @description Returns a collection with a key, ID, and link for each folder. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find folders that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-folder"];
        put?: never;
        /**
         * Create a folder
         * @description Creates a new folder for attachments.
         */
        post: operations["create-company-config-folder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/folder/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the folder.
                 * @example 28
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a folder
         * @description Returns detailed information for a specified folder.
         */
        get: operations["get-company-config-folder-key"];
        put?: never;
        post?: never;
        /**
         * Delete a folder
         * @description Deletes a folder and all of its sub-folders and attachments. You must first remove the attachments from any objects or transactions.
         */
        delete: operations["delete-company-config-folder-key"];
        options?: never;
        head?: never;
        /**
         * Update a folder
         * @description Updates an existing folder by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-folder-key"];
        trace?: never;
    };
    "/objects/company-config/contact": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contacts
         * @description Returns up to 100 contacts from the collection with a key, ID, and link for each contact. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find contacts that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-contact"];
        put?: never;
        /**
         * Create a contact
         * @description Creates a new contact. The contact's `entity` fields will be set to the entity that the OAuth access token is associated with when the contact is created.
         */
        post: operations["create-company-config-contact"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/contact/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for a contact.
                 * @example 65
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a contact
         * @description Returns detailed information for a specified contact.
         */
        get: operations["get-company-config-contact-key"];
        put?: never;
        post?: never;
        /**
         * Delete a contact
         * @description Deletes a contact. You can delete a contact if it is not being used or referenced. Deleted contacts cannot be recovered.
         */
        delete: operations["delete-company-config-contact-key"];
        options?: never;
        head?: never;
        /**
         * Update a contact
         * @description Updates an existing contact by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-contact-key"];
        trace?: never;
    };
    "/objects/company-config/contact-version": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contact versions
         * @description Returns a collection with a key, ID, and link for each contact version. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-contact-version"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/contact-version/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contact version.
                 * @example 2354
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a contact version
         * @description Returns detailed information for a specified contact version.
         */
        get: operations["get-company-config-contact-version-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/document-sequence": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List document sequences
         * @description Returns up to 100 document sequences from the collection with a key, ID, and link for each sequence. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find document sequences that meet certain criteria and to specify the properties that are returned.
         */
        get: operations["list-company-config-document-sequence"];
        put?: never;
        /**
         * Create a document sequence
         * @description Creates a new document sequence.
         */
        post: operations["create-company-config-document-sequence"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/document-sequence/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the document sequence.
                 * @example 107
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a document sequence
         * @description Returns detailed information for a particular document sequence.
         */
        get: operations["get-company-config-document-sequence-key"];
        put?: never;
        post?: never;
        /**
         * Delete a document sequence
         * @description Deletes a document sequence.
         */
        delete: operations["delete-company-config-document-sequence-key"];
        options?: never;
        head?: never;
        /**
         * Update a document sequence
         * @description Updates an existing document sequence by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-document-sequence-key"];
        trace?: never;
    };
    "/services/company-config/document-sequence/generate-next-value": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate next value
         * @description Increments the value for a specified document sequence.
         */
        post: operations["company-config-document-sequence-generate-next-value"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/document-sequence-rollover": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List document sequence rollovers
         * @description Returns a collection with a key, ID, and link for each document sequence rollover object.
         */
        get: operations["list-company-config-document-sequence-rollover"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/document-sequence-rollover/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document sequence rollover object.
                 * @example 651
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a document sequence rollover
         * @description Returns detailed information for a specified document sequence rollover object.
         */
        get: operations["get-company-config-document-sequence-rollover-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/email-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List email templates
         * @description Returns a collection with a key, ID, and link for each email template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-email-template"];
        put?: never;
        /**
         * Create an email template
         * @description Creates a new email template.
         */
        post: operations["create-company-config-email-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/email-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the email-template.
                 * @example 12
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an email template
         * @description Returns detailed information for a specified email template.
         */
        get: operations["get-company-config-email-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete an email template
         * @description Deletes an email template.
         */
        delete: operations["delete-company-config-email-template-key"];
        options?: never;
        head?: never;
        /**
         * Update an email template
         * @description Updates an existing email template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-email-template-key"];
        trace?: never;
    };
    "/objects/company-config/entity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List entities
         * @description Returns a collection with a key, ID, and link for each entity. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find entities that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-entity"];
        put?: never;
        /**
         * Create an entity
         * @description Creates a new entity.
         */
        post: operations["create-company-config-entity"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/entity/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the entity.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an entity
         * @description Returns detailed information for a specified entity.
         */
        get: operations["get-company-config-entity-key"];
        put?: never;
        post?: never;
        /**
         * Delete an entity
         * @description Deletes an entity. Consider deactivating the entity instead. For additional information see [Inactivate or delete an entity](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Inactivate_an_entity) in the Sage Intacct Help Center.
         */
        delete: operations["delete-company-config-entity-key"];
        options?: never;
        head?: never;
        /**
         * Update an entity
         * @description Updates an existing entity by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-entity-key"];
        trace?: never;
    };
    "/objects/company-config/affiliate-entity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List affiliate entities
         * @description Returns a collection with a key, ID, and link for each affiliate entity. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-affiliate-entity"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/affiliate-entity/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the affiliate entity.
                 * @example 25
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an affiliate entity
         * @description Returns detailed information for a specified affiliate entity.
         */
        get: operations["get-company-config-affiliate-entity-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/affiliate-entity-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List affiliate entity groups
         * @description Returns a collection with a key, ID, and link for each affiliate entity group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-affiliate-entity-group"];
        put?: never;
        /**
         * Create an affiliate entity group
         * @description Creates a new affiliate entity group.
         */
        post: operations["create-company-config-affiliate-entity-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/affiliate-entity-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the affiliate entity group.
                 * @example 9
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an affiliate entity group
         * @description Returns detailed information for a specified affiliate entity group.
         */
        get: operations["get-company-config-affiliate-entity-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete an affiliate entity group
         * @description Deletes an affiliate entity group.
         */
        delete: operations["delete-company-config-affiliate-entity-group-key"];
        options?: never;
        head?: never;
        /**
         * Update an affiliate entity group
         * @description Updates an existing affiliate entity group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-affiliate-entity-group-key"];
        trace?: never;
    };
    "/objects/company-config/inter-entity-account-mapping": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inter-entity account mappings
         * @description Returns a reference with a key, ID, and link for the inter-entity account mapping. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find folders that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-inter-entity-account-mapping"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/inter-entity-account-mapping/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inter-entity account mapping. This value is always '1' for this object.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inter-entity account mapping
         * @description Returns detailed information for a specified inter-entity account mapping. There is only one inter entity account mapping object for a company, and the `key` is always 1.
         */
        get: operations["get-company-config-inter-entity-account-mapping-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update an inter-entity account mapping
         * @description Updates an existing inter-entity account mapping by setting field values. Any field values not provided remain unchanged.
         */
        patch: operations["update-company-config-inter-entity-account-mapping-key"];
        trace?: never;
    };
    "/objects/company-config/inter-entity-basic-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inter-entity basic maps
         * @description Returns a collection with a key, ID, and link for each inter-entity basic map. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find folders that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-inter-entity-basic-map"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/inter-entity-basic-map/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inter-entity basic map.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inter-entity basic map
         * @description Returns detailed information for a specified inter-entity basic map.
         */
        get: operations["get-company-config-inter-entity-basic-map-key"];
        put?: never;
        post?: never;
        /**
         * Delete an inter-entity basic map
         * @description Deletes an inter-entity basic map.
         */
        delete: operations["delete-company-config-inter-entity-basic-map-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/inter-entity-advanced-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inter-entity advanced maps
         * @description Returns a collection with a key, ID, and link for each inter-entity advanced map. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find folders that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-inter-entity-advanced-map"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/inter-entity-advanced-map/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inter-entity advanced map.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an inter-entity advanced map.
         * @description Returns detailed information for a specified inter-entity advanced map.
         */
        get: operations["get-company-config-inter-entity-advanced-map-key"];
        put?: never;
        post?: never;
        /**
         * Delete an inter-entity advanced map
         * @description Deletes an inter-entity advanced map.
         */
        delete: operations["delete-company-config-inter-entity-advanced-map-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/exchange-rate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List exchange rates
         * @description Returns a collection with a key, ID, and link for each exchange rate. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-exchange-rate"];
        put?: never;
        /**
         * Create an exchange rate
         * @description Creates a new exchange rate.
         */
        post: operations["create-company-config-exchange-rate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/exchange-rate/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the exchange rate.
                 * @example 40
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an exchange rate
         * @description Returns detailed information for a specified exchange rate.
         */
        get: operations["get-company-config-exchange-rate-key"];
        put?: never;
        post?: never;
        /**
         * Delete an exchange rate
         * @description Deletes an exchange rate.
         */
        delete: operations["delete-company-config-exchange-rate-key"];
        options?: never;
        head?: never;
        /**
         * Update an exchange rate
         * @description Updates an existing exchange rate by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-exchange-rate-key"];
        trace?: never;
    };
    "/objects/company-config/exchange-rate-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List exchange rate lines
         * @description Returns a collection with a key, ID, and link for each exchange rate line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-exchange-rate-line"];
        put?: never;
        /**
         * Create an exchange rate line
         * @description Creates a new exchange rate line.
         */
        post: operations["create-company-config-exchange-rate-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/exchange-rate-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the exchange rate line.
                 * @example 87
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an exchange rate line
         * @description Returns detailed information for a specified exchange rate line.
         */
        get: operations["get-company-config-exchange-rate-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete an exchange rate line
         * @description Deletes an exchange rate line.
         */
        delete: operations["delete-company-config-exchange-rate-line-key"];
        options?: never;
        head?: never;
        /**
         * Update an exchange rate line
         * @description Updates an existing exchange rate line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-exchange-rate-line-key"];
        trace?: never;
    };
    "/objects/company-config/exchange-rate-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List exchange rate types
         * @description Returns a collection with a key, ID, and link for each exchange rate type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-exchange-rate-type"];
        put?: never;
        /**
         * Create an exchange rate type
         * @description Creates a new exchange rate type.
         */
        post: operations["create-company-config-exchange-rate-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/exchange-rate-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the exchange rate type.
                 * @example 5
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an exchange rate type
         * @description Returns detailed information for a specified exchange rate type.
         */
        get: operations["get-company-config-exchange-rate-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete an exchange rate type
         * @description Deletes an exchange rate type.
         */
        delete: operations["delete-company-config-exchange-rate-type-key"];
        options?: never;
        head?: never;
        /**
         * Update an exchange rate type
         * @description Updates an existing exchange rate type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-exchange-rate-type-key"];
        trace?: never;
    };
    "/objects/company-config/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List users
         * @description Returns a collection with a key, ID, and link for each user. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find users that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-user"];
        put?: never;
        /**
         * Create a user
         * @description Creates a new user. The user must be associated with a new or existing contact.
         */
        post: operations["create-company-config-user"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/user/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for a user.
                 * @example 65
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a user
         * @description Returns detailed information for a specified user.
         */
        get: operations["get-company-config-user-key"];
        put?: never;
        post?: never;
        /**
         * Delete a user
         * @description After a user logs in to Sage Intacct, they cannot be deleted. Users are preserved to maintain the audit trail throughout Intacct.
         */
        delete: operations["delete-company-config-user-key"];
        options?: never;
        head?: never;
        /**
         * Update a user
         * @description Updates an existing user by setting field values. Any fields not provided remain unchanged. External users cannot be updated using this operation. To update external users, use the Manage External Users feature on the Sage Intacct website or contact Sage Intacct support.
         */
        patch: operations["update-company-config-user-key"];
        trace?: never;
    };
    "/objects/company-config/user-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List user groups
         * @description Returns a collection with a key, ID, and link for each user group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find user groups that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-user-group"];
        put?: never;
        /**
         * Create a user group
         * @description Creates a new user group.
         */
        post: operations["create-company-config-user-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/user-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the user group.
                 * @example 41
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get the details of a user group
         * @description Returns detailed information for a specified user group, which includes the role-based permissions assigned to the group.
         */
        get: operations["get-company-config-user-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete a user group
         * @description Deletes a user group. If you no longer need a user group, you can delete the group. After you delete a user group, members automatically lose all permissions assigned to that group. Additionally, you cannot restore the user group after it's deleted. For more information see [Delete a user group](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Delete_a_user_group) in the Sage Intacct Help Center.
         */
        delete: operations["delete-company-config-user-group-key"];
        options?: never;
        head?: never;
        /**
         * Update a user group
         * @description Updates an existing user group by setting field values. Any fields not provided remain unchanged. You can update the role-based permissions assigned to the group. Using a new value for the `roles` array will replace the existing array.
         */
        patch: operations["update-company-config-user-group-key"];
        trace?: never;
    };
    "/objects/company-config/user-group-member": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List user group members
         * @description Returns a collection with a key, ID, and link for each user group member. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-user-group-member"];
        put?: never;
        /**
         * Create a user group member
         * @description Creates a new user group member.
         */
        post: operations["create-company-config-user-group-member"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/user-group-member/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the user group member.
                 * @example 2354
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a user group member
         * @description Returns detailed information for a specified user group member.
         */
        get: operations["get-company-config-user-group-member-key"];
        put?: never;
        post?: never;
        /**
         * Delete a user group member
         * @description Deletes a user group member.
         */
        delete: operations["delete-company-config-user-group-member-key"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/role": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List roles
         * @description Returns a collection with a key, ID, and link for each role. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find roles that meet certain criteria and specify the properties that are returned.
         *
         *     System-generated roles are denoted by "::SYS::" in the ID.
         */
        get: operations["list-company-config-role"];
        put?: never;
        /**
         * Create a role
         * @description Creates a new role.
         */
        post: operations["create-company-config-role"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/role/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the role.
                 * @example 470
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a role
         * @description Returns detailed information for a specified role.
         */
        get: operations["get-company-config-role-key"];
        put?: never;
        post?: never;
        /**
         * Delete a role
         * @description Deletes a role.
         */
        delete: operations["delete-company-config-role-key"];
        options?: never;
        head?: never;
        /**
         * Update a role
         * @description Updates an existing role by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-role-key"];
        trace?: never;
    };
    "/objects/company-config/role-user-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List role user maps
         * @description Returns a collection with a key, ID, and link for each role user map. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find role user map that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-role-user-map"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/role-user-map/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the role user map.
                 * @example 618
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a role user map
         * @description Returns detailed information for a specified role user map.
         */
        get: operations["get-company-config-role-user-map-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/role-user-group-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List role user group maps
         * @description Returns a collection with a key, ID, and link for each role user group map. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find role user group maps that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-role-user-group-map"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/role-user-group-map/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the role user group map.
                 * @example 761
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a role user group map
         * @description Returns detailed information for a specified role user group map.
         */
        get: operations["get-company-config-role-user-group-map-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/permission": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List permissions
         * @description Returns a collection with a key, ID, and link for each permission. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find permissions that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-permission"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/permission/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the permission.
                 * @example 102
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a permission
         * @description Returns detailed information for a specified permission.
         */
        get: operations["get-company-config-permission-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/role-permission-assignment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List role permission assignments
         * @description Returns a collection with a key, ID, and link for each role permission assignment. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find role permission assignments that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-role-permission-assignment"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/role-permission-assignment/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the role permission assignment.
                 * @example 1748
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a role permission assignment
         * @description Returns detailed information for a specified role permission assignment.
         */
        get: operations["get-company-config-role-permission-assignment-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a role permission assignment
         * @description Updates an existing role-permission-assignment by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-role-permission-assignment-key"];
        trace?: never;
    };
    "/objects/company-config/audit-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List audit histories
         * @description Returns a collection with a key, ID, and link for each audit history. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-audit-history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/audit-history/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the audit history.
                 * @example OTA6MjgwOTU4
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an audit history
         * @description Returns detailed information for a specified audit history.
         */
        get: operations["get-company-config-audit-history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/advanced-audit-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List advanced audit histories
         * @description Returns a collection with a key, ID, and link for each advanced audit history. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-advanced-audit-history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/advanced-audit-history/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advanced audit history.
                 * @example OTA6MjgwOTU4
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an advanced audit history
         * @description Returns a collection with a key, ID, and link for each advanced audit history.
         */
        get: operations["get-company-config-advanced-audit-history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/cloud-storage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List cloud storage
         * @description Returns a collection with a key, ID, and link for each cloud storage. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find employee groups that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-company-config-cloud-storage"];
        put?: never;
        /**
         * Create a cloud storage
         * @description Creates a new cloud storage object.
         */
        post: operations["create-company-config-cloud-storage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/cloud-storage/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the cloud storage.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a cloud storage
         * @description Returns detailed information for a specified cloud storage.
         */
        get: operations["get-company-config-cloud-storage-key"];
        put?: never;
        post?: never;
        /**
         * Delete a cloud storage
         * @description Delete a cloud storage object.
         */
        delete: operations["delete-company-config-cloud-storage-key"];
        options?: never;
        head?: never;
        /**
         * Update a cloud storage
         * @description Updates an existing cloud storage by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-cloud-storage-key"];
        trace?: never;
    };
    "/objects/company-config/company-message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List company messages
         * @description Returns a collection with a key, ID, and link for each company message. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-company-message"];
        put?: never;
        /**
         * Create a company message
         * @description Creates a new company message.
         */
        post: operations["create-company-config-company-message"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/company-message/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the company message.
                 * @example 42
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a company message
         * @description Returns detailed information for a specified company message.
         */
        get: operations["get-company-config-company-message-key"];
        put?: never;
        post?: never;
        /**
         * Delete a company message
         * @description Deletes a company message.
         */
        delete: operations["delete-company-config-company-message-key"];
        options?: never;
        head?: never;
        /**
         * Update a company message
         * @description Updates an existing company message by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-company-message-key"];
        trace?: never;
    };
    "/objects/company-config/cover-letter-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List cover letter templates
         * @description Returns a collection with a key, ID, and link for each cover letter template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-cover-letter-template"];
        put?: never;
        /**
         * Create a cover letter template
         * @description Creates a new cover letter template.
         */
        post: operations["create-company-config-cover-letter-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/cover-letter-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the cover letter template.
                 * @example 9
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a cover letter template
         * @description Returns detailed information for a specified cover letter template.
         */
        get: operations["get-company-config-cover-letter-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a cover letter template
         * @description Deletes a cover letter template.
         */
        delete: operations["delete-company-config-cover-letter-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a cover letter template
         * @description Updates an existing cover letter template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-cover-letter-template-key"];
        trace?: never;
    };
    "/objects/company-config/email-delivery-record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List email delivery records
         * @description Returns a collection with a key, ID, and link for each email delivery record. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and specify the properties that are returned.
         */
        get: operations["get-company-config-email-delivery-record"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/email-delivery-record/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the email delivery record.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an email delivery record
         * @description Returns detailed information for a specified email delivery record.
         */
        get: operations["get-company-config-email-delivery-record-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/external-authorization": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List external authorizations
         * @description Returns a collection with a key, ID, and link for each external authorization. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-external-authorization"];
        put?: never;
        /**
         * Create an external authorization
         * @description Creates a new external authorization.
         */
        post: operations["create-company-config-external-authorization"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/external-authorization/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the external authorization.
                 * @example 2
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an external authorization
         * @description Returns detailed information for a specified external authorization.
         */
        get: operations["get-company-config-external-authorization-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update an external authorization
         * @description Updates an existing external authorization by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-external-authorization-key"];
        trace?: never;
    };
    "/objects/company-config/holiday": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List holidays
         * @description Returns a collection with a key, ID, and link for each holiday. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-holiday"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/holiday/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the holiday.
                 * @example 3
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a holiday
         * @description Returns detailed information for a specified holiday.
         */
        get: operations["get-company-config-holiday-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/holiday-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List holiday schedules
         * @description Returns a collection with a key, ID, and link for each holiday schedule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-holiday-schedule"];
        put?: never;
        /**
         * Create a holiday schedule
         * @description Creates a new holiday schedule.
         */
        post: operations["create-company-config-holiday-schedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/holiday-schedule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the holiday schedule.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a holiday schedule
         * @description Returns detailed information for a specified holiday schedule.
         */
        get: operations["get-company-config-holiday-schedule-key"];
        put?: never;
        post?: never;
        /**
         * Delete a holiday schedule
         * @description Deletes a holiday schedule.
         */
        delete: operations["delete-company-config-holiday-schedule-key"];
        options?: never;
        head?: never;
        /**
         * Update a holiday schedule
         * @description Updates an existing holiday schedule by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-holiday-schedule-key"];
        trace?: never;
    };
    "/objects/company-config/payment-provider-notification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List payment provider notifications
         * @description Returns a collection with a key, ID, and link for each payment provider notification.
         */
        get: operations["list-company-config-payment-provider-notification"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/payment-provider-notification/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment-provider-notification.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a payment provider notification
         * @description Returns detailed information for a specified payment provider notification.
         */
        get: operations["get-company-config-payment-provider-notification-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/sandbox": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List sandboxes
         * @description Returns a collection with a key, ID, and link for each sandbox. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-company-config-sandbox"];
        put?: never;
        /**
         * Create a sandbox
         * @description Creates a new sandbox. When the sandbox creation begins, the state of the sandbox is `inProgress`. After the sandbox is created, its state changes to `ready`. A newly created sandbox is valid until the end of the billing cycle.
         */
        post: operations["create-company-config-sandbox"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/sandbox/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the sandbox.
                 * @example 10
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a sandbox
         * @description Returns detailed information for a specified sandbox.
         */
        get: operations["get-company-config-sandbox-key"];
        put?: never;
        post?: never;
        /**
         * Delete a sandbox
         * @description Deletes a sandbox. A sandbox is a separate copy of your production environment, and deleting it has no impact on your production environment. Deleting a sandbox is permanent and cannot be undone. The deletion of a sandbox and creating a new one counts as one of the four sandbox refreshes allowed per year. For more information, see [Delete Sandboxes](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Delete_sandbox) in the Sage Intacct Help Center.
         */
        delete: operations["delete-company-config-sandbox-key"];
        options?: never;
        head?: never;
        /**
         * Update a sandbox
         * @description Updates an existing sandbox by setting field values. Any fields not provided remain unchanged. Depending on the sandbox state, you may be able to update the sandbox name or description. For more information, see [Edit Sandboxes](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Edit_view_sandbox) in the Sage Intacct Help Center.
         */
        patch: operations["update-company-config-sandbox-key"];
        trace?: never;
    };
    "/workflows/company-config/sandbox/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Refresh a sandbox
         * @description As work continues in your production environment, your sandbox can become out of date. Refreshing the sandbox updates it to reflect your production environment changes. Sandboxes can be created and refreshed up to 4 times annually. If 5 or more sandbox refreshes are required in 1 year, open a support case. If you have multiple companies and sandbox licenses, the total number of refreshes can be shared among all company sandboxes. Deleting a sandbox and creating it again counts as 1 refresh. For more information, see [About Sandboxes](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_sandboxes) in the Sage Intacct Help Center.
         */
        post: operations["refresh-company-config-sandbox"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/txn-currency": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List transaction currencies
         * @description Returns a collection with a key, ID, and link for each transaction currency. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find currencies that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-company-config-txn-currency"];
        put?: never;
        /**
         * Create a transaction currency
         * @description Creates a new transaction currency.
         */
        post: operations["create-company-config-txn-currency"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/company-config/txn-currency/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction currency.
                 * @example 74
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a transaction currency
         * @description Returns detailed information for a specified transaction currency.
         */
        get: operations["get-company-config-txn-currency-key"];
        put?: never;
        post?: never;
        /**
         * Delete a transaction currency
         * @description Deletes a transaction currency.
         */
        delete: operations["delete-company-config-txn-currency-key"];
        options?: never;
        head?: never;
        /**
         * Update a transaction currency
         * @description Updates an existing transaction currency by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-txn-currency-key"];
        trace?: never;
    };
    "/objects/company-config/company-preference/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the company preference. This value must be set to `setup` for this object.
                 * @example setup
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get company preferences
         * @description Returns detailed information for company preferences.
         */
        get: operations["get-company-config-company-preference"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update company preferences
         * @description Updates company preferences by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-company-preference"];
        trace?: never;
    };
    "/objects/company-config/multi-entity-preference/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the multi-entity preference. This value must be set to `setup` for this object.
                 * @example setup
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get multi-entity preferences
         * @description Returns detailed preferences information for a specified multi entity.
         */
        get: operations["get-company-config-multi-entity-preference-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update multi-entity preferences
         * @description Update the multi-entity preferences for a company. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-multi-entity-preference-key"];
        trace?: never;
    };
    "/objects/company-config/consolidation-preference/setup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get consolidation preferences
         * @description Returns detailed information for the consolidation preferences.
         */
        get: operations["get-services-preferences.consolidation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update consolidation preferences
         * @description Updates existing consolidation preferences by setting field values. Any field values not provided remain unchanged.
         */
        patch: operations["update-services-preferences.consolidation"];
        trace?: never;
    };
    "/objects/company-config/advanced-consolidation-preference/setup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get advanced consolidation preferences
         * @description Returns detailed information for the advanced consolidation preferences.
         */
        get: operations["get-services-preferences.advanced-consolidation"];
        put?: never;
        /**
         * Create advanced consolidation preferences
         * @description Creates advanced consolidation preferences for a company. You only define the consolidation preferences once for a company.
         */
        post: operations["create-services-preferences.advanced-consolidation"];
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update advanced consolidation preferences
         * @description Updates existing advanced consolidation preferences by setting field values. Any field values not provided remain unchanged.
         */
        patch: operations["update-services-preferences.advanced-consolidation"];
        trace?: never;
    };
    "/objects/company-config/order-entry-preference/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the Order Entry preference. This value must be set to `setup` for this object.
                 * @example setup
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an Order Entry preference
         * @description Returns detailed information for the Order Entry preference.
         */
        get: operations["get-company-config-order-entry-preference-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update an Order Entry preference
         * @description Updates an existing Order Entry preference by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-order-entry-preference-key"];
        trace?: never;
    };
    "/objects/company-config/purchasing-preference/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the Purchasing preference. This value must be set to `setup` for this object.
                 * @example setup
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a Purchasing preference
         * @description Returns detailed information for the Purchasing preferences.
         */
        get: operations["get-company-config-purchasing-preference"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a Purchasing preference
         * @description Updates an existing Purchasing preference by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-company-config-purchasing-preference-key"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Dimension information */
        "company-config-dimensions-list-response": {
            /**
             * @description Dimension name used for integrations.
             * @example DEPARTMENT
             */
            dimensionName?: string;
            /**
             * @description Default dimension label as it appears in the UI.
             * @example Department
             */
            dimensionLabel?: string;
            /**
             * @description Dimension label as defined in company terminology.
             * @example Department
             */
            termName?: string;
            /**
             * @description This is `true` for user-defined dimensions.
             * @example true
             */
            isUserDefinedDimension?: boolean;
            /**
             * @description This is `true` if the dimension is enabled in the General Ledger module for this company.
             * @example true
             */
            isEnabledInGL?: boolean;
            /**
             * @description URL endpoint of the dimension.
             * @example /objects/company-config/department
             */
            dimensionEndpoint?: string;
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
        /** @description Class is a customizable dimension that can be defined in a company and set on transactions to expand report functionality and insight. */
        "objects.company-config.class": {
            /**
             * @description System-assigned unique key for the class. Used to identify the class in URLs or JSON bodies for all operations on the class.
             * @example 42
             */
            readonly key?: string;
            /**
             * @description Unique ID for the class.
             * @example 1-Goods
             */
            id?: string;
            /**
             * @description URL endpoint for the class.
             * @example /objects/company-config/class/21
             */
            readonly href?: string;
            /**
             * @description Name of the class.
             * @example Goods
             */
            name?: string;
            /**
             * @description Description of the class.
             * @example Goods available for donations
             */
            description?: string;
            status?: components["schemas"]["dimension-status"];
            /**
             * @deprecated
             * @description System-assigned unique key for the entity. Used to identify the entity in URLs or JSON bodies for all operations involving the entity. This field is deprecated, please use entity object reference
             * @example 3345
             */
            readonly locationKey?: string | null;
            entity?: components["schemas"]["entity-ref"];
            /** @description Parent class, for class hierarchies. */
            parent?: {
                /**
                 * @description Parent class ID.
                 * @example 23-Donations
                 */
                id?: string;
                /**
                 * @description Parent class key.
                 * @example 4
                 */
                key?: string;
                /**
                 * @description URL endpoint for the parent class.
                 * @example /objects/company-config/class/3
                 */
                readonly href?: string;
                /**
                 * @description Name of parent class.
                 * @example Donations
                 */
                readonly name?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "company-config-classRequiredProperties": Record<string, never>;
        /** @description A class group is a named set of classes used to filter or aggregate class data in financial reports. */
        "objects.company-config.class-group": {
            /**
             * @description System-assigned unique key for the class group.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Class group ID. Displayed together with the group name in Sage Intacct (_ID_--_Name_). Class group IDs cannot be changed.
             * @example Top Classes
             */
            id?: string;
            /**
             * @description URL endpoint for the class group.
             * @example /objects/company-config/class-group/23
             */
            readonly href?: string;
            /**
             * @description Class group name. Displayed together with the group ID in Sage Intacct (_ID_--_Name_).
             * @example Top Level Classes
             */
            name?: string;
            /**
             * @description Description of the class group.
             * @example Top Level Classes
             */
            description?: string;
            /**
             * @description Group membership type. The group type and related fields determine which classes are included in the group. If you are creating reports that use classes in rows or columns, these fields also determine the column headings and row headings that will appear, and the order in which they will be listed.
             *
             *     * `specific` - Specify the classes to include and their order in the `groupMembers` array. You can optionally filter the array with the `memberFilter` settings.
             *     * `all` - All classes that match the `memberFilter` criteria.
             * @default all
             * @example specific
             * @enum {string}
             */
            groupType?: "all" | "specific";
            /**
             * @description Indicates whether a dimension structure is created from the group. If true, the group can be added to the rows or columns of a financial report.
             * @default false
             * @example false
             */
            isDimensionStructure?: boolean;
            /** @description One or more filters to select the classes to include in the class group. Can be used in addition to the `groupMembers` array to filter from a selected list of classes. */
            memberFilter?: components["schemas"]["member-filter"] & Record<string, never>;
            /** @description Members of the class group and their sort order. Only applicable when `groupType` = `specific`. */
            groupMembers?: {
                /**
                 * @description Unique key for the class.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description ID for the class.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description Name of the class.
                 * @example Wholesale Distribution
                 */
                readonly name?: string;
                /**
                 * @description Current status of the class.
                 * @default active
                 * @example active
                 * @enum {string}
                 */
                readonly status?: "active" | "inactive";
                /**
                 * @description Sort order.
                 * @example 2
                 */
                sortOrder?: number;
            }[];
            audit?: components["schemas"]["audit.s2"];
            entity?: components["schemas"]["entity-ref"];
        };
        "company-config-class-groupRequiredProperties": Record<string, never>;
        /** @description Information about a department. */
        "objects.company-config.department": {
            /**
             * @description System-assigned unique key for the department.
             * @example 28
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the department.
             * @example SW
             */
            id?: string;
            /**
             * @description Department name.
             * @example Software Dev
             */
            name?: string;
            /**
             * @deprecated
             * @description Department number.
             * @example 10
             */
            number?: string;
            /**
             * @description Department title displayed in reports.
             * @default null
             * @example Software Engineering
             */
            reportTitle?: string | null;
            /** @description Parent department, for department hierarchies. */
            parent?: {
                /**
                 * @description Parent department key.
                 * @default null
                 * @example 7
                 */
                key?: string | null;
                /**
                 * @description Parent department ID.
                 * @example Dev
                 */
                id?: string;
                /**
                 * @description Parent department name.
                 * @example Development
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint of the parent department.
                 * @example /objects/company-config/department/7
                 */
                readonly href?: string;
            };
            /** @description A reference to the employee object of the supervisor for the department. Used for routing purchase approvals. */
            supervisor?: {
                /**
                 * @description Supervisor key.
                 * @default null
                 * @example 5
                 */
                key?: string | null;
                /**
                 * @description Supervisor ID.
                 * @example EMP-0192
                 */
                id?: string;
                /**
                 * @description Supervisor name.
                 * @example rjmiller
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint of the supervisor employee.
                 * @example /objects/company-config/employee/5
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["dimension-status"];
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description URL endpoint for the department.
             * @example /objects/company-config/department/28
             */
            readonly href?: string;
        };
        "company-config-departmentRequiredProperties": Record<string, never>;
        /** @description A specified set of departments, or a set of departments that meet certain criteria. */
        "objects.company-config.department-group": {
            /**
             * @description System-assigned unique key for the department group.
             * @example 46
             */
            readonly key?: string;
            /**
             * @description Department group ID. Displayed together with the group name in Sage Intacct (_ID_--_Name_). Department group IDs cannot be changed after the group has been created.
             * @example SA01
             */
            id?: string;
            /**
             * @description URL endpoint for the department group.
             * @example /objects/company-config/department-group/46
             */
            readonly href?: string;
            /**
             * @description Department group name. Displayed together with the group ID in Sage Intacct (_ID_--_Name_).
             * @example Sales
             */
            name?: string;
            /**
             * @description Description of the department group.
             * @example All sales groups
             */
            description?: string;
            /**
             * @description Group membership type. The group type and related fields determine which departments are included in the group. If you are creating reports that use departments in rows or columns, these fields also determine the column headings and row headings that will appear, and the order in which they will be listed.
             *
             *     * `specific` - Specify the departments to include and their order in the `groupMembers` array. You can optionally filter the array with the `memberFilter` settings.
             *     * `all` - All departments that match the `memberFilter` criteria.
             * @default all
             * @example specific
             * @enum {string}
             */
            groupType?: "all" | "specific";
            /** @description One or more filters to select the departments to include in the department group. Can be used in addition to the `groupMembers` array to filter from a selected list of departments. */
            memberFilter?: components["schemas"]["member-filter"] & Record<string, never>;
            /** @description Members of the department group and their sort order. Only applicable when `groupType` = `specific`. */
            groupMembers?: {
                /**
                 * @description System-assigned key for the department-group-member.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Department group members ID.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description Department name.
                 * @example Name of department group.
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/10
                 */
                readonly href?: string;
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
        "company-config-department-groupRequiredProperties": Record<string, never>;
        /** @description A department group member represents a member in a department group. */
        "objects.company-config.department-group-member": {
            /**
             * @description System-assigned key for the department group member.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Department group member ID. Same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the department group member.
             * @example /objects/company-config/department-group-member/23
             */
            readonly href?: string;
            /** @description Department that this member represents. */
            department?: {
                /**
                 * @description Department key.
                 * @example 24
                 */
                key?: string;
                /**
                 * @description Department ID.
                 * @example DES
                 */
                id?: string;
                /**
                 * @description Department name.
                 * @example Designing
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/24
                 */
                readonly href?: string;
            };
            /** @description Department group that this member belongs to. */
            readonly departmentGroup?: {
                /**
                 * @description Department group key.
                 * @example 33
                 */
                readonly key?: string;
                /**
                 * @description Department group ID.
                 * @example SA01
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the department group.
                 * @example /objects/company-config/department-group/33
                 */
                readonly href?: string;
            };
            /**
             * @description Sort order of the department when the department group is displayed in reports.
             * @example 2
             */
            sortOrder?: number;
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description An employee object represents someone who executes work for a company and is associated with financial transactions such as timesheet entries or expenses. */
        "objects.company-config.employee": {
            /**
             * @description System-assigned unique key for the employee.
             * @example 3086
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the employee.
             * @example jsmith
             */
            id?: string;
            /**
             * @description Name of the employee.
             * @example John Smith
             */
            name?: string;
            /**
             * Format: date
             * @description Date on which the employee started work.
             * @example 2021-04-30
             */
            startDate?: string | null;
            /**
             * @description Specifies the employee's current position in the company, such as software engineer.
             * @example VP Sales
             */
            jobTitle?: string | null;
            status?: components["schemas"]["status"];
            /**
             * Format: date
             * @description Indicates the employee's date of birth.
             * @example 1984-04-13
             */
            birthDate?: string | null;
            /**
             * Format: date
             * @description Specifies the date the employment was terminated.
             * @example 2026-04-01
             */
            endDate?: string | null;
            /**
             * @description Indicates whether the actual cost with variance is posted when earning type is salary. Set to `true` to post actual cost with variance.
             * @default false
             * @example false
             */
            postActualCostWithVariance?: boolean;
            /**
             * @description Indicates whether the system can merge payment requests. Set to `true` to enable merging.
             * @default true
             * @example true
             */
            mergePaymentRequests?: boolean;
            /**
             * @description Indicates whether the system can send automatic payment notifications when the employee is issued an expense reimbursement. Set to `true` to enable automatic notifications.
             * @default false
             * @example true
             */
            sendAutomaticPaymentNotification?: boolean;
            /** @description References the manager of the employee. */
            manager?: {
                /**
                 * @description Unique key for the manager.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the manager.
                 * @example jsmith
                 */
                id?: string | null;
                /**
                 * @description Name of the manager.
                 * @example johnsmith
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the manager.
                 * @example /objects/company-config/employee/1
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies the gender of the employee.
             * @default null
             * @example female
             * @enum {string|null}
             */
            gender?: null | "female" | "male";
            /** @description References the location where the employee works. Required when an employee is created at the top level in a multi-entity, multi-base-currency company. */
            location?: {
                /**
                 * @description Unique key for the location.
                 * @example 5
                 */
                key?: string | null;
                /**
                 * @description Identifier for the location.
                 * @example US
                 */
                id?: string | null;
                /**
                 * @description Name of the location.
                 * @example USA
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/1
                 */
                readonly href?: string;
            };
            /** @description References the department that the employee works for. */
            department?: {
                /**
                 * @description Unique key for the department.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the department.
                 * @example HR
                 */
                id?: string | null;
                /**
                 * @description Name of the department.
                 * @example HR
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/1
                 */
                readonly href?: string;
            };
            /** @description References the class that the employee is associated with. */
            class?: {
                /**
                 * @description Unique key for the class.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the class.
                 * @example A
                 */
                id?: string | null;
                /**
                 * @description Name of the class.
                 * @example A
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the class.
                 * @example /objects/company-config/class/1
                 */
                readonly href?: string;
            };
            /** @description References the default customer that the employee is associated with. */
            defaultCustomer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the customer.
                 * @example A
                 */
                id?: string | null;
                /**
                 * @description Name of the customer.
                 * @example A
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/1
                 */
                readonly href?: string;
            };
            /** @description References the default item that the employee is associated with. */
            defaultItem?: {
                /**
                 * @description Unique key for the item.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the item.
                 * @example A
                 */
                id?: string | null;
                /**
                 * @description Name of the item.
                 * @example A
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/1
                 */
                readonly href?: string;
            };
            /** @description References the default vendor that the employee is associated with. */
            defaultVendor?: {
                /**
                 * @description Unique key for the vendor.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the vendor.
                 * @example A
                 */
                id?: string | null;
                /**
                 * @description Name of the vendor.
                 * @example A
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/1
                 */
                readonly href?: string;
            };
            /** @description References the default time allocation that the employee is associated with. */
            defaultTimeAllocation?: {
                /**
                 * @description Identifier for the allocation.
                 * @example 2
                 */
                id?: string | null;
                /**
                 * @description Unique key for the allocation.
                 * @example 2
                 */
                key?: string | null;
                /**
                 * @description URL endpoint for the transaction allocation template.
                 * @example /objects/general-ledger/txn-allocation-template/21
                 */
                readonly href?: string;
            };
            /** @description References the default expense distribution that the employee is associated with. */
            defaultExpenseDistribution?: {
                /**
                 * @description Identifier for the allocation.
                 * @example 2
                 */
                id?: string | null;
                /**
                 * @description Unique key for the allocation.
                 * @example 2
                 */
                key?: string | null;
                /**
                 * @description URL endpoint for the transaction allocation template.
                 * @example /objects/general-ledger/txn-allocation-template/21
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies the currency to use for the employee's expense reports and payments, if different from the company's base currency. For companies using multiple transaction currencies.
             * @example USD
             */
            defaultCurrency?: string | null;
            /** @description References the primary contact name for the employee. */
            primaryContact?: {
                /**
                 * @description Unique key for the employee contact.
                 * @example 12345
                 */
                key?: string;
                /**
                 * @description Identifier for the employee contact.
                 * @example rkincaid
                 */
                id?: string;
                /**
                 * @description Last name of the employee contact.
                 * @example Kincaid
                 */
                readonly lastName?: string;
                /**
                 * @description First name of the employee contact.
                 * @example Reuben
                 */
                readonly firstName?: string;
                /**
                 * @description Middle name or initial of the employee contact.
                 * @example X
                 */
                readonly middleName?: string | null;
                /**
                 * @description Prefix for the employee contact, such as Mr., Mrs., or Ms.
                 * @example Mr.
                 */
                readonly prefix?: string | null;
                /**
                 * @description Primary email address for the employee contact.
                 * @example reuben@mycompany.com
                 */
                readonly email1?: string | null;
                /**
                 * @description Secondary email address for the employee contact.
                 * @example robert@mycompany.com
                 */
                readonly email2?: string | null;
                /**
                 * @description Primary phone number for the employee contact.
                 * @example 4151231234
                 */
                readonly phone1?: string | null;
                /**
                 * @description Secondary phone number for the employee contact.
                 * @example 4158661823
                 */
                readonly phone2?: string | null;
                /**
                 * @description Mobile phone number for the employee contact.
                 * @example 4159879876
                 */
                readonly mobile?: string | null;
                /**
                 * @description Pager number for the employee contact.
                 * @example 4151112222
                 */
                readonly pager?: string | null;
                /**
                 * @description Fax number for the employee contact.
                 * @example 4152221111
                 */
                readonly fax?: string | null;
                /**
                 * @description URL for the employee contact.
                 * @example https://mycompany.com
                 */
                readonly URL1?: string | null;
                /**
                 * @description Secondary URL for the employee contact.
                 * @example https://whitehouse.gov
                 */
                readonly URL2?: string | null;
                /**
                 * @description Name of the company associated with the employee contact.
                 * @example AlcoSoft Inc
                 */
                readonly companyName?: string | null;
                /**
                 * @description Official printed name of the employee contact, as it appears on bills, invoices, etc.
                 * @example Reuben Kincaid
                 */
                readonly printAs?: string;
                /**
                 * mailingAddress
                 * @description Mailing address for the employee contact, for shipping or billing.
                 */
                mailingAddress?: {
                    /**
                     * @description First line of the employeemailing address.
                     * @example 300 Park Avenue
                     */
                    readonly addressLine1?: string | null;
                    /**
                     * @description Second line of the employee mailing address.
                     * @example Suite 1400
                     */
                    readonly addressLine2?: string | null;
                    /**
                     * @description Third line of the employee mailing address.
                     * @example 14th Floor
                     */
                    readonly addressLine3?: string | null;
                    /**
                     * @description City of the employee mailing address.
                     * @example San Jose
                     */
                    readonly city?: string | null;
                    /**
                     * @description State of the employee mailing address.
                     * @example California
                     */
                    readonly state?: string | null;
                    /**
                     * @description Zip or Postal Code of the employee mailing address.
                     * @example 95110
                     */
                    readonly postCode?: string | null;
                    /**
                     * @description Country of the employee mailing address.
                     * @example United States
                     */
                    readonly country?: string;
                    /**
                     * @description ISO country code of the employee mailing address.
                     * @example US
                     */
                    readonly isoCountryCode?: string;
                };
                /**
                 * @description URL endpoint for the employee contact.
                 * @example /objects/company-config/contact/12345
                 */
                readonly href?: string;
            };
            /** @description References the employee type, such as full time, part time, or contractor. */
            employeeType?: {
                /**
                 * @description Unique key for the employee type.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the employee type.
                 * @example hourly
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the employee type.
                 * @example /objects/company-config/employee-type/1
                 */
                readonly href?: string;
            };
            /** @description References the earning type for the employee. Specifies the GL accounts that the employee's labor costs are posted to. */
            earningType?: {
                /**
                 * @description Unique key for the earning type.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the earning type.
                 * @example Overtime pay
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the earning type.
                 * @example /objects/company-config/earning-type/1
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies the social security number for the employee. Do not include dashes.
             * @example 078051120
             */
            SSN?: string | null;
            /** @description References the employee position, applies only to companies with a Construction subscription. */
            employeePosition?: {
                /**
                 * @description Unique key for the employee position.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the employee position.
                 * @example SV001
                 */
                id?: string | null;
                /**
                 * @description Name of the employee position.
                 * @example permanent
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the employee position.
                 * @example /objects/construction/employee-position/1
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies the termination status, if the employee has left the company.
             * @default null
             * @example voluntary
             * @enum {string|null}
             */
            terminationType?: null | "voluntary" | "involuntary" | "deceased" | "disability" | "retired";
            /**
             * @description Provides information relating to the 1099 form for the employee.
             *
             *     For more information, read the [step-by-step guide to employee 1099s](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Employee_overview_1099) in the Sage Intacct Help Center.
             */
            form1099?: {
                /**
                 * @description Employee name as it appears on the 1099 form, generally, this matches the `primaryContact` name.
                 * @example John Smith
                 */
                name?: string | null;
                /**
                 * @description Specifies the type of 1099 form for the employee.
                 * @example MISC
                 */
                type?: string | null;
                /**
                 * @description Indicates the 1099 category box where transactions for the employee will be tracked. Used to classify payments, such as royalties, non-employee compensation, or rent, in accordance with IRS reporting requirements.
                 * @example 3
                 */
                box?: string | null;
            };
            /** @description Automated Clearing House (ACH) electronic payment details for the employee, used when they are paid by ACH bank transfers. */
            ach?: {
                /**
                 * @description Indicates whether ACH is enabled for the employee. Set to `true` to enable ACH.
                 * @default false
                 * @example false
                 */
                enabled?: boolean;
                /**
                 * @description ACH routing number of the employee's bank used for electronic payments.
                 * @example 325070760
                 */
                bankRoutingNumber?: string | null;
                /**
                 * @description ACH account number of the employee's bank account used for electronic payments.
                 * @example 3123123456
                 */
                accountNumber?: string | null;
                /**
                 * @description ACH account type of the employee's bank account used for electronic payments.
                 * @default null
                 * @example checkingAccount
                 * @enum {string|null}
                 */
                accountType?: null | "checkingAccount" | "savingsAccount";
                /**
                 * @description ACH remittance type used for sending electronic payments to the employee's bank.
                 * @default null
                 * @example personalPPD
                 * @enum {string|null}
                 */
                remittanceType?: null | "personalPPD" | "businessCCD" | "businessCTX";
            };
            /**
             * @description Indicates whether this employee is a placeholder resource. Only used for the Projects application. Set to `true` to mark as a placeholder.
             * @default false
             * @example false
             */
            isPlaceholderResource?: boolean;
            /**
             * @description Specifies the type of payment service used to process employee payments.
             * @default none
             * @example ach
             * @enum {string|null}
             */
            filePaymentService?: null | "ach" | "bankFile" | "none";
            bankFile?: {
                /**
                 * @description Specifies the country code used in the bank file for processing employee payments. Required when `filePaymentService` is `bankFile`.
                 * @example gb
                 */
                paymentCountryCode?: (string & components["schemas"]["country-code"]) | null;
                /**
                 * @description Indicates the currency used in the bank file for processing employee payments.
                 * @example EUR
                 */
                paymentCurrency?: string | null;
            };
            /** @description References the bank file setup for the employee, containing the information needed to send electronic payments to the employee using a bank file. */
            bankFileSetup?: components["schemas"]["objects.company-config.employee-bank-file-setup"][];
            /**
             * @description Specifies the employee's preferred method for receiving payments.
             * @default null
             * @example cash
             * @enum {string|null}
             */
            preferredPaymentMethod?: null | "printedCheck" | "eft" | "cash" | "ach";
            /** @description References the folder for storing attachments related to the employee. */
            attachmentFolder?: {
                /**
                 * @description Unique key for the attachment folder.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the attachment folder.
                 * @example RK495
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the attachment folder.
                 * @example /objects/company-config/folder/1
                 */
                readonly href?: string;
            };
            /** @description References the cost rates for the employee. */
            employeeRates?: components["schemas"]["objects.company-config.employee-rate"][];
            /** @description References an array of positions and skills associated with the employee. */
            positionSkills?: {
                /**
                 * @description Unique key for the position skill.
                 * @example 7
                 */
                key?: string | null;
                /**
                 * @description Identifier for the position skill.
                 * @example Care giver
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the position skill.
                 * @example /objects/projects/position-skill/7
                 */
                readonly href?: string;
            }[];
            audit?: components["schemas"]["audit.s1"];
            /** @description Record URL for the employee. */
            readonly webURL?: string;
            entity?: components["schemas"]["entity-ref"];
            /**
             * @description URL endpoint for the employee.
             * @example /objects/company-config/employee/28
             */
            readonly href?: string;
        };
        "company-config-employeeRequiredProperties": {
            primaryContact?: Record<string, never>;
        };
        /** @description Employee type is a customizable classification that can be defined in a company and assigned to employees to enhance reporting and insight into the value delivered by different employee categories, such as contractor, full-time, and part-time. */
        "objects.company-config.employee-type": {
            /**
             * @description System-assigned unique key for the employee type.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the employee type.
             * @example Contractor
             */
            id?: string;
            /**
             * @description URL endpoint for the employee type.
             * @example /objects/company-config/employee-type/23
             */
            readonly href?: string;
            /** @description References the parent employee type in employee type hierarchies. */
            parent?: {
                /**
                 * @description Unique key for the parent employee type.
                 * @example 7
                 */
                key?: string | null;
                /**
                 * @description Identifier for the parent employee type.
                 * @example Contractor
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the parent employee type.
                 * @example /objects/company-config/employee-type/7
                 */
                readonly href?: string;
            };
            /** @description Provides information relating to the 1099 form for the employee type. */
            readonly form1099?: {
                /**
                 * @description Specifies the type of 1099 form for the employee type.
                 * @example MISC
                 */
                readonly type?: string | null;
                /**
                 * @description Indicates the 1099 category box where transactions for the employee type will be tracked. Used to classify payments, such as royalties, non-employee compensation, or rent, in accordance with IRS reporting requirements.
                 * @example 3
                 */
                readonly box?: string | null;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "company-config-employee-typeRequiredProperties": Record<string, never>;
        /** @description An employee rate, including history. */
        "objects.company-config.employee-rate": {
            /**
             * @description System-assigned unique key for the employee rate.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the employee rate. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the employee rate.
             * @example /objects/projects/employee-rate/23
             */
            readonly href?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies the hourly rate for the employee.
             * @example 50
             */
            hourlyRate?: string;
            /**
             * @description Specifies the annual salary for the employee.
             * @example 100000
             */
            annualSalary?: string | null;
            /**
             * Format: date
             * @description Indicates the start date for the hourly rate or annual salary.
             * @example 2023-04-01
             */
            startDate?: string;
            /**
             * Format: date
             * @description Specifies the end date for the hourly rate or annual salary.
             * @example 2023-04-01
             */
            endDate?: string;
            /** @description References the employee associated with the rate. */
            readonly employee?: {
                /**
                 * @description Identifier for the employee.
                 * @example 111
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the employee.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Name of the employee.
                 * @example John Smith
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/23
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description A specified set of employees, or a set of employees that meet certain criteria. */
        "objects.company-config.employee-group": {
            /**
             * @description System-assigned unique key for the employee group.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the employee group. Employee group IDs cannot be changed.
             * @example MGR
             */
            id?: string;
            /**
             * @description Endpoint URL for the employee group.
             * @example /objects/company-config/employee-group/23
             */
            readonly href?: string;
            /**
             * @description Name for the employee group.
             * @example Sr. Managers
             */
            name?: string;
            /**
             * @description Description for the employee group.
             * @example Managers G10 and above
             */
            description?: string | null;
            /**
             * @description The group type and related fields determine which employees are included in the group. For reports that use employees in rows or columns, these fields also determine the column headings and row headings that will appear, and the order in which they will be listed.
             *
             *     * `specific` - Specify the employees to include and their order in the `groupMembers` array. You can optionally filter the array with the `memberFilter` settings.
             *     * `all` - All employees that match the `memberFilter` criteria.
             * @default all
             * @example specific
             * @enum {string}
             */
            groupType?: "all" | "specific";
            /** @description One or more filters to select the employees to include in the employee group. Can be used in addition to the `groupMembers` array to filter from a selected list of employees. */
            memberFilter?: components["schemas"]["member-filter"] & Record<string, never>;
            /** @description Members of the employee group and their sort order. Only applicable when `groupType` is set to `specific`. */
            groupMembers?: {
                /**
                 * @description System-assigned key for the employee.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the employee.
                 * @example jsmith
                 */
                id?: string;
                /**
                 * @description Endpoint URL for the employee.
                 * @example /objects/company-config/employee/23
                 */
                readonly href?: string;
                /**
                 * @description Status for the employee.
                 * @example active
                 * @enum {string}
                 */
                readonly status?: "active" | "inactive";
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
        "company-config-employee-groupRequiredProperties": Record<string, never>;
        /** @description A bank file enables electronic payments to be made to employees using a local bank file format. Bank files are standard files used by banks to make multiple payments. */
        "objects.company-config.employee-bank-file-setup": {
            /**
             * @description System-assigned unique key for the employee bank file setup.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Identifier for the employee bank file setup. This value is the same as `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description Provides the bank account number used for electronic bank file payments.
             * @example IE26SCT666666
             */
            bankAccountNumber?: string;
            /**
             * @description Specifies the bank account name used for electronic bank file payments.
             * @example Jane Blogs Corp.
             */
            bankAccountName?: string;
            /**
             * @description Indicates the bank branch number for the employee bank account, Australia (AU) only.
             * @example 047-359
             */
            bsbNumber?: string | null;
            /**
             * @description Specifies the bank sort code that identifies the employee's bank branch, United Kingdom (GB) only.
             * @example 204718
             */
            sortCode?: string | null;
            /**
             * @description Indicates the payment reference number to connect the bank file with the expenses to be reimbursed, Australia (AU) and South Africa (ZA) only. Used when no reference exists or multiple references apply.
             * @example ZG8609
             */
            paymentReference?: string | null;
            /**
             * @description Specifies the branch code for the employee bank account to which payments are made, South Africa (ZA) only.
             * @example 213456
             */
            branchCode?: string | null;
            /**
             * @description Indicates the account type to which employee payments are made, South Africa (ZA) only. The available account types are determined by the bank file format selected for the associated checking account.
             * @example 4
             */
            bankAccountType?: string | null;
            /**
             * @description Provides the account code for the employee bank account to which payments are made, South Africa (ZA) only.
             * @example ACME345624
             */
            bankAccountCode?: string | null;
            /**
             * @description Indicates whether to print the proof of payment when the bank file payment batch is authorized, South Africa (ZA) only.
             * @example true
             */
            printPaymentProof?: string | null;
            /**
             * @description Provides the creditor bank identifier code for the bank account, supports all European countries where Generic-SEPA file format is supported.
             * @example AIBKIE2D491
             */
            businessIdCode?: string | null;
            /**
             * @description Specifies the creditor code for the bank account, Canada (CA) only.
             * @example 1234567891234567
             */
            creditorCode?: string | null;
            /**
             * @description Indicates the bank number, as assigned by the account CAD financial institution, Canada (CA) only.
             * @example 00710423598
             */
            secondaryIdentifier?: string | null;
            /**
             * @description Indicates the account classification for Automated Clearing House (ACH) transactions, United States (US) only.
             *
             *       - `ppd`: Prearranged Payment and Deposit for transactions with individual or consumer accounts.
             *       - `ccd`: Corporate Credit or Debit for transactions with business or corporate accounts.
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
            /** @description References the employee associated with the bank file setup. */
            employee?: {
                /**
                 * @description Unique key for the employee.
                 * @example 518
                 */
                key?: string;
                /**
                 * @description Identifier for the employee.
                 * @example E-00014
                 */
                id?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/518
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the employee bank file setup.
             * @example /objects/company-config/employee-bank-file-setup/25
             */
            readonly href?: string;
        };
        /** @description Earning types for employee labor costs. */
        "objects.company-config.earning-type": {
            /**
             * @description System-assigned unique key for the earning type.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Earning type name.
             * @example Over time
             */
            id?: string;
            /** @description General ledger account to post billable labor cost for an employee assigned to this earning type. */
            billableGLAccount?: {
                /**
                 * @description GL account key.
                 * @example 158
                 */
                key?: string | null;
                /**
                 * @description GL account ID.
                 * @example 6775.30
                 */
                id?: string | null;
                /**
                 * @description Name of the GL account.
                 * @example Travel
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/23
                 */
                readonly href?: string;
            };
            /** @description General ledger account to post non-billable labor cost for an employee assigned to this earning type. */
            nonBillableGLAccount?: {
                /**
                 * @description GL account key.
                 * @example 158
                 */
                key?: string | null;
                /**
                 * @description GL account ID.
                 * @example 6774.30
                 */
                id?: string | null;
                /**
                 * @description Name of the GL account.
                 * @example Expense
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/23
                 */
                readonly href?: string;
            };
            /**
             * @description Calculation method.
             * @default salary
             * @example hourly
             * @enum {string}
             */
            calculationMethod?: "hourly" | "salary";
            /**
             * @description The amount by which the normal hourly rate is multiplied when `calculationMethod` = `hourly`. For example, in the case of overtime hours, the typical multiplier for the rate is 1.5 or 2. Regular hours have a multiplier of 1.
             * @example 2
             */
            rateMultiplier?: string | null;
            audit?: components["schemas"]["audit.s1"];
        };
        "company-config-earning-typeRequiredProperties": Record<string, never>;
        /** @description Location is a dimension that is used to represent the geographic locations of offices or facilities. It can also be used for divisions in a company, if that is more significant than geographic locations. Once defined, locations can be set on transactions, and that information can be used to provide new insights in reports. */
        "objects.company-config.location": {
            /**
             * @description System-assigned unique key for the location. Used to identify the location in URLs or JSON bodies for all operations on the location.
             * @example 3345
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the location.
             * @example 1-Lyon
             */
            id?: string;
            /**
             * @description URL endpoint for this location.
             * @example /objects/company-config/location/21
             */
            readonly href?: string;
            /**
             * @description Name of the location.
             * @example Lyon-France
             */
            name?: string;
            status?: components["schemas"]["dimension-status"];
            /**
             * @description State tax ID or VAT registration number.
             * @example US4321112
             */
            taxId?: string;
            /**
             * @description The SIREN is a 9-digit number that identifies the company itself. This field is only available for use when the Operating country is set to France.
             * @example 874563210
             */
            businessId?: string;
            /**
             * Format: date
             * @description Start date of operation at this location.
             * @example 2021-01-01
             */
            startDate?: string;
            /**
             * Format: date
             * @description End date of operation at this location.
             * @example 2022-04-01
             */
            endDate?: string;
            /** @description The list of contacts for the location. */
            contacts?: {
                /** @description The primary location contact specifies the company name, address, and other details as they should appear on invoices, bills, and other forms. */
                primary?: components["schemas"]["contact-ref"] & Record<string, never>;
                /** @description The address for receiving goods and services, if different from the primary contact address. */
                shipTo?: components["schemas"]["contact-ref"] & Record<string, never>;
            };
            /**
             * @deprecated
             * @description Location information displayed in reports, in addition to the location name. For example, a location title might include the address and manager name.
             * @example Seattle Sales Office
             */
            locationReportingTitle?: string;
            /**
             * @description Location information displayed in reports, in addition to the location name. For example, a location title might include the address and manager name.
             * @example Seattle Sales Office
             */
            reportTitle?: string;
            /**
             * @description The name of the location as it will appear on reports and invoices that are printed for the location.
             * @example Lyon-France
             */
            printAs?: string;
            /** @description Parent location, for location hierarchies. */
            parent?: {
                /**
                 * @description Parent location key.
                 * @example 65
                 */
                key?: string;
                /**
                 * @description Parent location ID.
                 * @example 1-France
                 */
                id?: string;
                /**
                 * @description URL endpoint of parent location.
                 * @example /objects/company-config/location/65
                 */
                readonly href?: string;
                /**
                 * @description Name of the parent location.
                 * @example California
                 */
                readonly name?: string;
                /**
                 * @description This field indicates an parent object of type:
                 *     - `entity` - company-config-entity
                 *     - `elimination` - company-config-entity configured as elimination that is used solely for posting consolidation entries
                 *     - `location` - company-config-location
                 * @example location
                 * @enum {string}
                 */
                readonly locationType?: null | "entity" | "elimination" | "location";
            };
            /** @description The employee that manages the location. */
            manager?: {
                /**
                 * @description Manager's employee key.
                 * @example 81
                 */
                key?: string;
                /**
                 * @description ID of the manager employee.
                 * @example anne.jason
                 */
                id?: string;
                /**
                 * @description URL endpoint of the manager employee.
                 * @example /objects/company-config/employee/81
                 */
                readonly href?: string;
                /**
                 * @description Name of the manager.
                 * @example Donations
                 */
                readonly name?: string;
            };
            /**
             * @description Locations and entities are related as a hierarchy and this field will allow building it with the help of the `parent` field.
             *     This field indicates an object of type:
             *     - `entity` - company-config-entity
             *     - `elimination` - company-config-entity configured as elimination that is used solely for posting consolidation entries
             *     - `location` - company-config-location
             * @example location
             * @enum {string}
             */
            readonly locationType?: "entity" | "elimination" | "location";
            /**
             * @description Base currency of the entity for multi-currency companies.
             * @example GBP
             */
            readonly baseCurrency?: string;
            /** @description Entity associated with the location. */
            readonly entity?: {
                /**
                 * @description System-assigned key for the entity.
                 * @example 46
                 */
                readonly key?: string | null;
                /**
                 * @description Unique identifier for the entity.
                 * @example NYC
                 */
                readonly id?: string | null;
                /**
                 * @description Name of the entity.
                 * @example New York City
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/46
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "company-config-locationRequiredProperties": Record<string, never>;
        /** @description A location group is a named set of locations used to filter or aggregate location data in particular financial reports. */
        "objects.company-config.location-group": {
            /**
             * @description System-assigned unique key for the location group.
             * @example 33
             */
            readonly key?: string;
            /**
             * @description Location group ID. Displayed together with the group name in Sage Intacct (_ID_--_Name_). Location group IDs cannot be changed after the group has been created.
             * @example WH1
             */
            id?: string;
            /**
             * @description URL endpoint for the location group.
             * @example /objects/company-config/location-group/33
             */
            readonly href?: string;
            /**
             * @description Location group name. Displayed together with the group ID in Sage Intacct (_ID_--_Name_).
             * @example Western Region Warehouses
             */
            name?: string;
            /**
             * @description Description of the location group.
             * @example Western Region Warehouses
             */
            description?: string;
            /** @description Primary contact for the location group. */
            primaryContact?: {
                /**
                 * @description Unique key for the contact.
                 * @example 7
                 */
                key?: string;
                /**
                 * @description Name of the contact.
                 * @example Jeff Pinkerton
                 */
                id?: string;
                /**
                 * @description URL endpoint for the contact.
                 * @example /objects/company-config/contact/7
                 */
                readonly href?: string;
            };
            /**
             * @description Group membership type. The group type and related fields determine which locations are included in the group. If you are creating reports that use locations in rows or columns, these fields also determine the column headings and row headings that will appear, and the order in which they will be listed.
             *
             *     * `specific` - Specify the locations to include and their order in the `groupMembers` array. You can optionally filter the array with the `memberFilter` settings.
             *     * `all` - All locations that match the `memberFilter` criteria.
             * @default all
             * @example specific
             * @enum {string}
             */
            groupType?: "all" | "specific";
            /** @description One or more filters to select the locations to include in the location group. Can be used in addition to the `groupMembers` array to filter from a selected list of locations. */
            memberFilter?: components["schemas"]["member-filter"] & Record<string, never>;
            /** @description Members of the location group and their sort order. Only applicable when `groupType` = `specific`. */
            groupMembers?: components["schemas"]["objects.company-config.location-group-member"][];
            /**
             * @description Indicates whether a dimension structure is created from the group. If true, the group can be added to the rows or columns of a financial report.
             * @default false
             * @example false
             */
            isDimensionStructure?: boolean;
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "company-config-location-groupRequiredProperties": Record<string, never>;
        /** @description A member in a location group. */
        "objects.company-config.location-group-member": {
            /**
             * @description System-assigned unique key for the location group member.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the location group member. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the location group member.
             * @example /objects/company-config/location-group-member/23
             */
            readonly href?: string;
            /** @description Location that this member represents. */
            location?: {
                /**
                 * @description Unique key for the location.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Location ID.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description Location name.
                 * @example United States of America
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the location.
                 * @example /objects/company-config/location/1
                 */
                readonly href?: string;
            };
            /** @description Location group that this member belongs to. */
            readonly locationGroup?: {
                /**
                 * @description Unique key for the location group.
                 * @example 33
                 */
                readonly key?: string;
                /**
                 * @description ID for the location group.
                 * @example WH1
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the location group.
                 * @example /objects/company-config/location-group/33
                 */
                readonly href?: string;
            };
            /**
             * @description Sort order of the location when the location group is displayed in reports.
             * @example 2
             */
            readonly sortOrder?: number;
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Container to hold one or more files. */
        "objects.company-config.attachment": {
            /**
             * @description System-assigned unique key for the attachment.
             * @example 123
             */
            readonly key?: string;
            /**
             * @description Unique ID for the attachment container.
             * @example 2024 Taxes
             */
            id?: string;
            /**
             * @description Brief name for the attachment container.
             * @example 2022 tax forms
             */
            name?: string;
            /**
             * @description Description of the attachment container.
             * @example February invoices
             */
            description?: string | null;
            /**
             * @description URL endpoint for the attachment container.
             * @example /objects/company-config/attachment/123
             */
            readonly href?: string;
            /** @description Folder that this attachment is in. */
            folder?: {
                /**
                 * @description Unique key of the folder.
                 * @example 4
                 */
                key?: string;
                /**
                 * @description Unique name of the folder.
                 * @example SupDocFolder1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the folder.
                 * @example /objects/company-config/folder/4
                 */
                readonly href?: string;
            };
            entity?: components["schemas"]["entity-ref"];
            /** @description Files contained in the attachment. */
            files?: components["schemas"]["objects.company-config.file"][];
            readonly audit?: {
                /**
                 * Format: date-time
                 * @description Date-time when this record was created.
                 * @example 2023-05-16T15:34:35Z
                 */
                readonly createdDateTime?: string;
                /**
                 * Format: date-time
                 * @description Date-time when this record was modified.
                 * @example 2024-09-14T21:23:42Z
                 */
                readonly modifiedDateTime?: string;
                /**
                 * @deprecated
                 * @description Key for the user who created this object.
                 * @example 436
                 */
                readonly createdBy?: string | null;
                /**
                 * @deprecated
                 * @description Key for the user who last modified this object.
                 * @example 3086
                 */
                readonly modifiedBy?: string | null;
                /** @description The user who created this object. */
                readonly createdByUser?: {
                    /**
                     * @description User key.
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
                     * @description User key.
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
        "company-config-attachmentRequiredProperties": Record<string, never>;
        /** @description A file in an attachment. */
        "objects.company-config.file": {
            /**
             * @description System-assigned unique key for the file.
             * @example 962
             */
            readonly key?: string;
            /**
             * @description Unique ID for the file. This value is the same as the `key` for this object.
             * @example 962
             */
            readonly id?: string;
            /**
             * @description Name for the file with extension.
             * @example 02-28-2022-invoice.txt
             */
            name?: string;
            /**
             * @description Size of the file in bytes.
             * @example 27449
             */
            readonly size?: number;
            /**
             * @description Id returned by the external storage service.
             * @example a8d2cbd2-f2a8-48dc-a191-3a202b65b87a
             */
            readonly externalStorageId?: string;
            /**
             * Format: base64zip
             * @description Base64-encoded (zipped) binary file data.
             * @example Y2V2YSwgYWx0Y2V2YQ0Kc2kgaW5jYSBjZXZh
             */
            data?: string;
            /** @description Attachment associated with the file. */
            readonly attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 123
                 */
                readonly key?: string;
                /**
                 * @description ID for the attachment.
                 * @example 2022 February invoices
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/1
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the file.
             * @example /objects/company-config/file/962
             */
            readonly href?: string;
        };
        /** @description Folder for holding one or more attachments. */
        "objects.company-config.folder": {
            /**
             * @description System-assigned unique key for the folder. Used to identify the folder in URLs or JSON bodies for all operations on the folder.
             * @example 88
             */
            readonly key?: string;
            /**
             * @description Unique name for the folder. Cannot be changed after the folder is created.
             * @example 2026 Taxes
             */
            id?: string;
            /**
             * @description Description of the folder.
             * @example 2026 tax forms
             */
            description?: string;
            /** @description Parent folder, for folder hierarchies. */
            parent?: {
                /**
                 * @description Unique key for the parent folder.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Name for the parent folder.
                 * @example fld3
                 */
                id?: string;
                /**
                 * @description URL endpoint for the parent folder.
                 * @example /objects/company-config/folder/3
                 */
                readonly href?: string;
            };
            entity?: components["schemas"]["entity-ref"];
            /**
             * @description URL endpoint for the folder.
             * @example /objects/company-config/folder/1
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            readonly audit?: {
                /**
                 * Format: date-time
                 * @description Date-time when this record was created.
                 * @example 2026-05-16T15:34:35Z
                 */
                readonly createdDateTime?: string;
                /**
                 * Format: date-time
                 * @description Date-time when this record was modified.
                 * @example 2026-09-14T21:23:42Z
                 */
                readonly modifiedDateTime?: string;
                /**
                 * @deprecated
                 * @description Key for the user who created this object.
                 * @example 436
                 */
                readonly createdBy?: string | null;
                /**
                 * @deprecated
                 * @description Key for the user who last modified this object.
                 * @example 3086
                 */
                readonly modifiedBy?: string | null;
                /** @description The user who created this object. */
                readonly createdByUser?: {
                    /**
                     * @description Unique key for the user.
                     * @example 436
                     */
                    readonly key?: string | null;
                    /**
                     * @description ID for the user.
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
                     * @description Unique key for the user.
                     * @example 3086
                     */
                    readonly key?: string | null;
                    /**
                     * @description ID for the user.
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
             * @description Indicates whether the folder contains any subfolders.
             * @default false
             * @example false
             */
            readonly hasSubfolders?: boolean;
            /**
             * @description Indicates whether the folder contains any attachments.
             * @default false
             * @example false
             */
            readonly hasAttachments?: boolean;
        };
        "company-config-folderRequiredProperties": Record<string, never>;
        /** @description A contact hold all the information needed to contact an individual or business, including name, email address, phone number, mailing address, and more. */
        "objects.company-config.contact": {
            /**
             * @description System-assigned unique key for the contact.
             * @example 21
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the contact.
             * @example rkincaid
             */
            id?: string;
            /**
             * @description URL endpoint for the contact.
             * @example /objects/company-config/contact/21
             */
            readonly href?: string;
            /**
             * @description Last name.
             * @example Kincaid
             */
            lastName?: string | null;
            /**
             * @description First name.
             * @example Reuben
             */
            firstName?: string | null;
            /**
             * @description Middle name or initial.
             * @example X
             */
            middleName?: string | null;
            /**
             * @description Prefix, such as Mr., Mrs., or Ms.
             * @example Mr.
             */
            prefix?: string | null;
            /**
             * @description Primary email address.
             * @example reuben@mycompany.com
             */
            email1?: string | null;
            /**
             * @description Secondary email address.
             * @example robert@mycompany.com
             */
            email2?: string | null;
            /**
             * @description Primary phone number.
             * @example 4151231234
             */
            phone1?: string | null;
            /**
             * @description Secondary phone number.
             * @example 4158661823
             */
            phone2?: string | null;
            /**
             * @description Mobile phone number.
             * @example 4159879876
             */
            mobile?: string | null;
            /**
             * @description Pager number.
             * @example 4151112222
             */
            pager?: string | null;
            /**
             * @description Fax number.
             * @example 4152221111
             */
            fax?: string | null;
            /**
             * @description Web page address for this contact.
             * @example https://mycompany.com
             */
            URL1?: string | null;
            /**
             * @description Secondary web page address.
             * @example https://whitehouse.gov
             */
            URL2?: string | null;
            /**
             * @description Name of the company associated with this contact.
             * @example AlcoSoft Inc
             */
            companyName?: string | null;
            /**
             * @description The contact's name as it will appear on bills, invoices, AR statements, advances, adjustments, checks, expense reports, expense reimbursements, and 1099s.
             * @example Reuben Kincaid
             */
            printAs?: string;
            /**
             * @description Set to `true` to display the contact in the contact list.
             * @default true
             * @example true
             */
            showInContactList?: boolean;
            /**
             * @description Default discount percentage to be applied to order entry transactions involving this contact.
             * @example 33
             */
            discount?: string | null;
            /**
             * @description Entity use codes are assigned to customers or transactions to indicate the reason for a tax exemption.
             * @example A
             */
            entityUseCode?: string | null;
            status?: components["schemas"]["status"];
            /** @description The entity that the contact is associated with. Contacts created at the top level do not have an entity reference so the `key`, `id`, and `name` properties will be `null`. */
            readonly entity?: {
                /**
                 * @description Entity key.
                 * @example 54
                 */
                readonly key?: string;
                /**
                 * @description Entity ID.
                 * @example Western Region
                 */
                readonly id?: string;
                /**
                 * @description Entity name.
                 * @example Western Region
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/54
                 */
                readonly href?: string;
            };
            /** @description The mailing address of the contact. */
            mailingAddress?: {
                /**
                 * @description The first address line for shipping, billing, etc.
                 * @example 300 Park Avenue
                 */
                addressLine1?: string | null;
                /**
                 * @description The second address line for shipping, billing, etc.
                 * @example Suite 1400
                 */
                addressLine2?: string | null;
                /**
                 * @description The third address line for shipping, billing, etc. which provides additional geographical information.
                 * @example Western industrial area
                 */
                addressLine3?: string | null;
                /**
                 * @description City.
                 * @example San Jose
                 */
                city?: string | null;
                /**
                 * @description State.
                 * @example California
                 */
                state?: string | null;
                /**
                 * @description Zip or Postal Code.
                 * @example 95110
                 */
                postCode?: string | null;
                /**
                 * @deprecated
                 * @description Country. This field is deprecated; please use `isoCountryCode` instead.
                 * @default United States
                 * @example United States
                 */
                country?: string | null;
                /**
                 * @description ISO country code.
                 * @default US
                 * @example US
                 */
                isoCountryCode?: string | null;
            };
            /** @description Default price list used in order entry when this contact places orders. Read [the notes in the Help Center](https://www.intacct.com/ia/docs/en_US/help_action/Order_Entry/Setting_up_Order_Entry/Price_lists/assign-OE-price-list-to-objects.htm#Assignapricelisttoacontact) for requirements and additional information. */
            priceList?: {
                /**
                 * @description Price list key.
                 * @example 7
                 */
                key?: string | null;
                /**
                 * @description Price list ID.
                 * @example Custom-Pricelist
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the price list.
                 * @example /objects/order-entry/price-list/7
                 */
                readonly href?: string;
            };
            /** @description Price schedule used in order entry when this contact places orders. */
            priceSchedule?: {
                /**
                 * @description Price schedule key.
                 * @example 7
                 */
                key?: string | null;
                /**
                 * @description Price schedule ID.
                 * @example Discount-Premium
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the price schedule.
                 * @example /objects/order-entry/price-schedule/7
                 */
                readonly href?: string;
            };
            /** @description Tax settings needed for Intacct to calculate taxes on transactions for this contact. */
            tax?: {
                /**
                 * @description Set to `true` to enable tax calculation.
                 * @default true
                 * @example true
                 */
                isTaxable?: boolean;
                /**
                 * @description State tax ID or VAT registration number for this contact.
                 * @example US2333
                 */
                taxId?: string | null;
                /** @description The contact tax group to be used with this contact. */
                group?: {
                    /**
                     * @description Contact tax group key.
                     * @example 7
                     */
                    key?: string | null;
                    /**
                     * @description Contact tax group ID.
                     * @example Taxes-for-residents
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint of the contact tax group.
                     * @example /objects/company-config/contact-tax-group/7
                     */
                    readonly href?: string;
                };
            };
        };
        "company-config-contactRequiredProperties": Record<string, never>;
        /** @description Contact version captures the changes to a contact object. */
        "objects.company-config.contact-version": {
            /**
             * @description System-assigned key for the contact version.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the contact version. The value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the contact version.
             * @example /objects/contact-version/23
             */
            readonly href?: string;
            /** @description Contact associated with the contact version. */
            contact?: {
                /**
                 * @description System-assigned key for the contact.
                 * @example 197
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the contact.
                 * @example John Doe
                 */
                id?: string;
                /**
                 * @description URL endpoint for the contact.
                 * @example /objects/company-config/contact/197
                 */
                readonly href?: string | null;
            };
            /**
             * @description Indicates if the company associated with the contact is GST registered.
             * @default false
             * @example true
             */
            isGSTRegistered?: boolean;
            /**
             * @description Name of the company associated with the contact.
             * @example Simonis Ltd
             */
            companyName?: string | null;
            /**
             * @description Prefix, such as Mr., Mrs., or Ms.
             * @example Mr.
             */
            prefix?: string | null;
            /**
             * @description First name for the contact.
             * @example Clinton
             */
            firstName?: string | null;
            /**
             * @description Last name for the contact.
             * @example Pemberton
             */
            lastName?: string | null;
            /**
             * @description Middle name or initial.
             * @example P
             */
            middleName?: string | null;
            /**
             * @description The contact's name as it will appear on bills, invoices, AR statements, advances, adjustments, checks, expense reports, expense reimbursements, and 1099s.
             * @example Clinton P. Pemberton
             */
            printAs?: string;
            /** @description Price schedule associated with the contact version. */
            priceSchedule?: {
                /**
                 * @description System-assigned key for the price schedule.
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
                 * @example /objects/order-entry/price-schedule/5
                 */
                readonly href?: string | null;
            };
            /**
             * Format: percent-precision-2
             * @description Discount percentage for the contact, for example, specify 25.00 for 25.00% discount.
             * @example 25.00
             */
            discountPercent?: string | null;
            /**
             * @deprecated
             * @description This field is deprecated, please use `discountPercent` instead.
             */
            discount?: string | null;
            /**
             * @description Primary phone number for the contact.
             * @example 4151231234
             */
            phone1?: string | null;
            /**
             * @description Secondary phone number for the contact.
             * @example 4151231255
             */
            phone2?: string | null;
            /**
             * @description Mobile phone number for the contact.
             * @example 4441231234
             */
            mobile?: string | null;
            /**
             * @description Pager number for the contact.
             * @example 4455231234
             */
            pager?: string | null;
            /**
             * @description Fax number for the contact.
             * @example 4151232222
             */
            fax?: string | null;
            /**
             * @description Primary email address for the contact.
             * @example clinton.pemberton@gmail.com
             */
            email1?: string | null;
            /**
             * @description Secondary email addresses for the contact.
             * @example pemberton.clinton@gmail.com
             */
            email2?: string | null;
            /**
             * @description Web page address for the contact.
             * @example https://mycompany.com
             */
            URL1?: string | null;
            /**
             * @description Secondary web page address for the contact.
             * @example https://myothercompany.com
             */
            URL2?: string | null;
            /**
             * @description Set to `true` to include the contact in the contact list.
             * @default true
             * @example true
             */
            showInContactList?: boolean;
            /** @description The mailing address for the contact. */
            mailingAddress?: {
                /**
                 * @description The first address line for shipping, billing, etc.
                 * @example 4301 Green Avenue
                 */
                addressLine1?: string | null;
                /**
                 * @description The second address line for shipping, billing, etc.
                 * @example Suite 300
                 */
                addressLine2?: string | null;
                /**
                 * @description The third address line for shipping, billing, etc. which provides additional geographical information.
                 * @example Western industrial area
                 */
                addressLine3?: string | null;
                /**
                 * @description City where the contact is located.
                 * @example San Jose
                 */
                city?: string | null;
                /**
                 * @description State where the contact is located.
                 * @example CA
                 */
                state?: string | null;
                /**
                 * @description Zip or postal code for the contact.
                 * @example 10001
                 */
                postCode?: string | null;
                /**
                 * @deprecated
                 * @description Country. This field is deprecated, please use `isoCountryCode`.
                 * @example United States
                 */
                readonly country?: string | null;
                /**
                 * @description ISO country code for the contact.
                 * @example us
                 */
                isoCountryCode?: (string & components["schemas"]["country-code"]) | null;
            };
            /** @description Default price list used in order entry when this contact places orders. */
            priceList?: {
                /**
                 * @description System-assigned key for the price list.
                 * @example 31
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the price list.
                 * @example Base Price List
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the price list.
                 * @example /objects/order-entry/price-list/31
                 */
                readonly href?: string | null;
            };
            /** @description Tax settings used by Intacct to calculate taxes on transactions for this contact version. */
            tax?: {
                /**
                 * @description Indicates whether transactions for the contact are taxable.
                 * @default true
                 * @example true
                 */
                isTaxable?: boolean;
                /**
                 * @description State tax ID or VAT registration number for the contact.
                 * @example US2333
                 */
                taxId?: string | null;
                /**
                 * Format: date
                 * @description Date the tax ID was last validated.
                 * @example 2025-04-03
                 */
                taxIdValidationDate?: string | null;
                /**
                 * @description Company name as registered.
                 * @example Sage Inc.
                 */
                taxCompanyName?: string | null;
                /**
                 * @description Tax address for the contact.
                 * @example 14508 Archer Ave
                 */
                taxAddress?: string | null;
                /** @description The contact tax group associated with the contact version. */
                group?: {
                    /**
                     * @description System-assigned key for the contact tax group.
                     * @example 7
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the contact tax group.
                     * @example Taxes-for-residents
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint of the contact tax group.
                     * @example /objects/company-config/contact-tax-group/7
                     */
                    readonly href?: string | null;
                };
                /**
                 * tax-solution
                 * @description Tax solution associated with the contact version.
                 */
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
                     * @description URL endpoint for the tax solution.
                     * @example /objects/tax/tax-solution/4
                     */
                    readonly href?: string | null;
                };
                /** @description Tax schedule associated with the contact version. */
                taxSchedule?: {
                    /**
                     * @description System-assigned key for the tax schedule.
                     * @example 7
                     */
                    key?: string | null;
                    /**
                     * @description Unique identifier for the tax schedule.
                     * @example TaxSchedule
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the tax schedule.
                     * @example /objects/tax/tax-schedule/7
                     */
                    readonly href?: string | null;
                };
            };
            /**
             * @description Entity use codes are assigned to customers or transactions to indicate the reason for a tax exemption.
             * @example A
             */
            entityUseCode?: string | null;
            status?: components["schemas"]["status"];
        };
        /** @description Document sequencing */
        "objects.company-config.document-sequence": {
            /**
             * @description System-assigned unique key for the document sequence.
             * @example 61
             */
            readonly key?: string;
            /**
             * @description Unique name for the document sequence.
             * @example Vendors
             */
            id?: string;
            /**
             * @description The sequence name that prints on invoice PDFs.
             * @example Vendors
             */
            printTitle?: string;
            /**
             * @description Numeric or alpha sequence. Alpha sequences are currently only available for use with Cash Management, or French companies.
             * @default numeric
             * @example numeric
             * @enum {string}
             */
            type?: "numeric" | "alpha";
            /**
             * @description The total length of the primary sequence, including any padding characters, up to 16 characters. Numeric sequences will be padded with zeroes and alpha sequence will be padded with a's.
             * @example 16
             */
            fixedLength?: string | null;
            /**
             * @description Characters that appear before the primary sequence.
             * @example INV
             */
            fixedPrefix?: string | null;
            /**
             * @description Characters to use between the prefix and the auto-generated sequence.
             * @example -
             */
            prefixSeparator?: string | null;
            /**
             * @description Characters that appear after the primary sequence.
             * @example COMPANY
             */
            fixedSuffix?: string | null;
            /**
             * @description Characters to use between the auto-generated sequence and the suffix.
             * @example -
             */
            suffixSeparator?: string | null;
            /**
             * @description Starting number for `numeric` sequences. Required when `type` is `numeric`.
             * @example 1
             */
            startingNumber?: number | null;
            /**
             * @description Ending number for `numeric` sequences.
             * @example 100
             */
            endingNumber?: number | null;
            /**
             * @description Next number. Required when `type` is `numeric`.
             * @example 1
             */
            nextNumber?: number | null;
            /**
             * @description Starting sequence. Required when `type` is `alpha`.
             * @example a
             */
            startingSequence?: string | null;
            /**
             * @description Ending sequence.
             * @example zzz
             */
            endingSequence?: string | null;
            /**
             * @description Next sequence. Required when `type` is `alpha`.
             * @example a
             */
            nextSequence?: string | null;
            /**
             * Format: date-time
             * @description Date and time when the document sequence was last modified.
             * @example 2024-04-01T11:28:12Z
             */
            whenModified?: string;
            /** @description Entity that the document sequence can be used in. */
            readonly entity?: {
                /**
                 * @description Entity Key.
                 * @example 54
                 */
                key?: string;
                /**
                 * @description Entity ID.
                 * @example Western Region
                 */
                id?: string;
                /**
                 * @description Entity name.
                 * @example Western Region
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/54
                 */
                readonly href?: string;
            };
            /**
             * @description Fiscal year rollover configuration for the document sequence, which will automatically restart the document sequence for each fiscal year.
             *     Use the `fiscalYears` to configure the next number or alpha values used to generate sequences for the fiscal years.
             *     If the configuration for a fiscal year is missing then it will be generated by the system when the first sequence is generated. The next number or alpha values will be taken from the base start values.
             */
            rollover?: {
                /**
                 * @description Set to `true` to enable sequence rollover by fiscal years.
                 * @default false
                 * @example false
                 */
                isEnabled?: boolean;
                /**
                 * Format: date
                 * @description The date the rollover configuration was enabled for the first time.
                 * @example 2021-01-23
                 */
                readonly enabledDate?: string;
                /**
                 * @description Where to insert the fiscal year in document sequence values.
                 *
                 *     ** Valid values **
                 *
                 *       - `none` Do not automatically insert the fiscal year into the document sequence.
                 *       - `prefix` Use the fiscal year and the rollover `separator`` as a prefix to the document sequence.
                 *       - `suffix` Append the rollover `separator`` and the fiscal year as a suffix to the document sequence.
                 * @default none
                 * @example prefix
                 * @enum {string}
                 */
                fiscalYearAffixPosition?: "none" | "prefix" | "suffix";
                /**
                 * @description Rollover separator used when the `fiscalYearAffixPosition` is set to `prefix` or `suffix`.
                 * @example -
                 */
                separator?: string | null;
                /** @description Array of document-sequence-rollover objects that define the next number or alpha values to use to generate sequences for specific fiscal years. */
                fiscalYears?: components["schemas"]["objects.company-config.document-sequence-rollover"][];
            };
            status?: components["schemas"]["status"];
            /**
             * @description URL endpoint of the document-sequence
             * @example /objects/company-config/document-sequence/61
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "company-config-document-sequenceRequiredProperties": Record<string, never>;
        /** @description Generate next document sequence value request. */
        "company-config-document-sequence-generate-next-value-request": {
            /**
             * @description Key for the document sequence.
             * @example 14
             */
            key?: string;
            /**
             * @description Unique identifier for the document sequence.
             * @example AR Inv
             */
            id?: string;
            /**
             * @description Fiscal year is used to generate next value when rollover is enabled for a document sequence.
             * @example 2024
             */
            fiscalYear?: number;
        } & (unknown | unknown);
        /** @description Generate next document sequence value response. */
        "company-config-document-sequence-generate-next-value-response": {
            /**
             * @description Key for the document sequence.
             * @example 14
             */
            key?: string;
            /**
             * @description Unique identifier for the document sequence.
             * @example AR Inv
             */
            id?: string;
            /**
             * @description The next document sequence value.
             * @example INV-16
             */
            nextValue?: string;
            /**
             * @description The fiscal year associated with the document sequence.
             * @example 2024
             */
            fiscalYear?: number;
        };
        /**
         * @description The rollover configuration holds the next number or alpha values used to generate sequences for the fiscal years.
         *     When rollover is enabled for a document sequence then a restart of the document sequence is initiated for each fiscal year.
         *     If the configuration for a fiscal year is missing then it is automatically generated by the system when the first sequence is generated.
         *     When the system generates a configuration the next number or alpha values are taken over from the base start values.
         */
        "objects.company-config.document-sequence-rollover": {
            /**
             * @description System-assigned unique key for the document sequence rollover.
             * @example 100
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the document sequence rollover. This value is the same as the `key` for this object.
             * @example 100
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the document sequence rollover.
             * @example /objects/company-config/document-sequence-rollover/100
             */
            readonly href?: string;
            /** @description Document sequence that the rollover configuration applies to. */
            readonly documentSequence?: {
                /**
                 * @description Document sequence key.
                 * @example 107
                 */
                readonly key?: string;
                /**
                 * @description Document sequence ID.
                 * @example BOA_ACH_BatchNo
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the document sequence.
                 * @example /objects/company-config/document-sequence/107
                 */
                readonly href?: string;
            };
            /**
             * @description Fiscal year during which this rollover configuration is used.
             * @example 2024
             */
            fiscalYear?: number;
            /**
             * @description Next number used to generate sequences for the fiscal year when the document-sequence `type` is `numeric`. Must be within the limits set by the `startingNumber` and `endingNumber` fields in the document-sequence.
             * @example 1
             */
            nextNumber?: number | null;
            /**
             * @description Next sequence used to generate sequences for the fiscal year when the document-sequence `type` is `alpha`. Must be within the limits set by the `startingSequence` and `endingSequence` fields in the document-sequence.
             * @example a
             */
            nextSequence?: string | null;
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Listing of the templates for sending out any electronic order entry transaction with the person who created it. (Legacy) */
        "objects.company-config.email-template": {
            /**
             * @description System-assigned unique key for the email template.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Email Template ID. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint of the email template.
             * @example /objects/company-config/email-template/23
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            /**
             * @description Name for the email template.
             * @example Sales invoice-Monthly
             */
            name?: string;
            /**
             * @description Description of the email template.
             * @example Used to send monthly sales invoices.
             */
            description?: string;
            /** @description Sender information for the email template. */
            sender?: {
                /**
                 * @deprecated
                 * @description Legacy derived reply-to email address for the template. This value is retained for backward
                 *     compatibility and is populated from the underlying approved sender email configuration.
                 * @example someEmail@co.com
                 */
                readonly replyTo?: string;
                /**
                 * @description Display name used for the sender on the email template.
                 * @example John Smith
                 */
                senderName?: string;
                /**
                 * @description Identifier for the approved sender email entry. The reply-to address is automatically populated
                 *     from the referenced entry. Required when `useOwnEmailAddress` is `false` or not set.
                 *     This value is `null` when `useOwnEmailAddress` is `true`.
                 * @example 11
                 */
                approvedSenderEmailId?: string | null;
                /**
                 * @description Set to `true` to use the sending user's own email address as the reply-to address for this template.
                 *     When `true`, `approvedSenderEmailId` is not required. When `false` or not set, `approvedSenderEmailId` is required.
                 * @default false
                 * @example false
                 */
                useOwnEmailAddress?: boolean;
            };
            /** @description Recipient information for the email template. You can put one or more email addresses in each field (use commas to separate multiple addresses), or you can use one or more [merge fields](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Email_merge_fields) in each field. The merge fields are replaced with the actual email addresses when the email is sent. */
            recipients?: {
                /**
                 * @description The primary recipients of the email.
                 * @example someEmail@co.com
                 */
                to?: string;
                /**
                 * @description Recipients who should receive a courtesy copy of the email.
                 * @example someEmail@co.com
                 */
                cc?: string;
                /**
                 * @description Recipients who should receive a copy of the email but not be visible to other recipients.
                 * @example someEmail@co.com
                 */
                bcc?: string;
            };
            /**
             * @description Enter a combination of text and merge fields as desired to create an informative subject line.
             * @example Account statement due by {!ARINVOICE.WHENDUE!}
             */
            subject?: string;
            /**
             * @description Enter a combination of text, merge fields, and HTML markup as desired to create and customize the message.
             * @example Message for all to see
             */
            body?: string;
            /** @description Logo information for the email template. The logo is included in the email if the `isLogoIncluded` property is set to `true`. */
            logo?: {
                /**
                 * @description Set to `true` to include the logo image file identified on the Company Information page in the email template.
                 * @default false
                 * @example true
                 */
                isLogoIncluded?: boolean;
                /**
                 * @description Vertical logo position. Sets whether the logo should appear at the top or bottom of the email.
                 * @default bottom
                 * @example bottom
                 * @enum {string}
                 */
                verticalPosition?: "top" | "bottom";
                /**
                 * @description Horizontal logo position. Sets whether the logo should appear on the left or right side of the email.
                 * @default left
                 * @example left
                 * @enum {string}
                 */
                horizontalPosition?: "left" | "right";
            };
            /**
             * @description Set to `true` to include documents attached to the transaction, such as receipts, in emails sent from transactions. Attachments are emailed in the format in which they were attached to the transaction. For example, if you attached a TXT file, the file is sent as a TXT file.
             * @default false
             * @example true
             */
            includeTxnAttachments?: boolean;
            /**
             * @description Set to `true` to include all source document attachments linked to a project invoice when emailing the invoice. Attachments are emailed in the format in which they were attached to the transaction. For example, if you attached a TXT file, the file is sent as a TXT file.
             * @default false
             * @example true
             */
            includeProjectInvoiceTxnAttachments?: boolean;
            /**
             * @description The type of transaction to use this email template for. This value determines the merge fields available for use in the subject and body of the email template.
             * @default arInvoice
             * @example arInvoice
             * @enum {string}
             */
            templateType?: "arInvoice" | "arStatement" | "dunningNotice" | "contract" | "orderEntryTxn" | "purchasingTxn" | "changeRequest" | "projectChangeOrder" | "compliance" | "closeWorkspaceTaskApproachingDeadline" | "closeWorkspaceOverdueTasks" | "closeWorkspacePrerequisiteTasksAtRisk" | "closeWorkspaceDependentTasksAtRisk" | "closeWorkspaceOutstandingTasksUsers" | "closeWorkspaceAllTasksCompletedUsers" | "closeWorkspacePrerequisiteTaskFinished" | "budgetVariance" | "apRemittance";
            budgetVarianceNotification?: {
                /**
                 * @description This field specifies the condition under which a notification is triggered for Budget vs Actuals analysis.
                 *     This value is only applicable when the `templateType` is set to `budgetVariance`.
                 * @default null
                 * @example exceedOperatingExpense
                 * @enum {string|null}
                 */
                notificationType?: null | "exceedOperatingExpense";
                /**
                 * @description This field is used to identify the audience for Budget vs Actuals analysis.
                 *     This value is only applicable when the templateType is set to budgetVariance.
                 * @default null
                 * @example managers
                 * @enum {string|null}
                 */
                recipients?: null | "unrestrictedUsers" | "managers";
            };
            /**
             * @description Set to `true` to use dates in the email in the user preference setting.
             * @default false
             * @example true
             */
            useSendersPreferredDateFormat?: boolean;
            /**
             * @description Combine attachments into a zip file
             *     - `none` - Do not combine attachments into a zip file
             *     - `single` - Combine attachments into a single zip file
             *     - `expenseType` - Combine attachments into a single zip file by expense type
             * @default none
             * @example none
             * @enum {string}
             */
            combineAttachmentsToZip?: "none" | "single" | "expenseType";
            audit?: components["schemas"]["audit.s1"];
        };
        "company-config-email-templateRequiredProperties": Record<string, never>;
        /** @description In a multi-entity shared company, entities represent a separate tax identification or a separately secured, fully balancing set of books. */
        "objects.company-config.entity": {
            /**
             * @description System-assigned unique key for the entity.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the entity. 20 characters max. The ID cannot be changed after the entity has been created.
             * @example Lyon
             */
            id?: string;
            /**
             * @description URL endpoint for the entity.
             * @example /objects/company-config/entity/2
             */
            readonly href?: string;
            /**
             * @description Name for the entity.
             * @example California
             */
            name?: string;
            /**
             * Format: date
             * @description The date when the entity became operational.
             * @example 2024-02-02
             */
            startDate?: string | null;
            /**
             * Format: date
             * @description The date when the entity was taken out of operation.
             * @example 2025-03-03
             */
            endDate?: string | null;
            /**
             * @description The federal tax ID for the entity. This value is required but is only used if the company is configured to issue a separate 1099 for each US entity.
             * @example 123456789
             */
            federalId?: string | null;
            /** @description Base transaction currency for the entity, for multi-currency companies. */
            baseCurrency?: {
                /**
                 * @description URL endpoint for the transaction currency.
                 * @example /objects/company-config/txn-currency/1
                 */
                readonly href?: string;
                /**
                 * @description System-assigned key for the transaction currency.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique currency code. For ISO currency type, the value must be one of ('USD','AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BRL','BSD','BTN','BWP','BYN','BYR','BZD','CAD','CDF','CHF','CLP','CNY','COP','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','**P','GBP','GEL','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','INR','IQD','IRR','ISK','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','STD','SVC','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','UYU','UZS','VEF','VES','VND','VUV','WST','XAF','XCD','XOF','XPF','YER','ZAR','ZMW','ZWL').
                 * @example USD
                 */
                id?: string;
            };
            /**
             * @description First fiscal month.
             * @default null
             */
            firstFiscalMonth?: (string & components["schemas"]["month"]) | null;
            /**
             * @description First tax month.
             * @default null
             */
            firstTaxMonth?: (string & components["schemas"]["month"]) | null;
            /**
             * @description The first day of each week. This value enables the system to provide accurate data for reports that begin on the first day of a week.
             * @default null
             */
            weekStart?: (string & components["schemas"]["weekdays"]) | null;
            /** @description Contact information for the entity. */
            contacts?: {
                /** @description Primary contact information. This may be for the entity itself or for an individual. */
                primary?: components["schemas"]["contact-ref"] & Record<string, never>;
                /** @description Contact information to use for shipping, if the entity uses a different address for receiving goods and services. */
                shipTo?: components["schemas"]["contact-ref"] & Record<string, never>;
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
                 * @example 500
                 */
                registeredCapital?: number;
                /**
                 * @description Details the specific VAT rules and regulations applicable to the business, including requirements for VAT collection, application, and reporting within France.
                 * @example Monthly
                 */
                valueAddedTaxRegime?: string;
            };
            /** @description Texts used in invoices and reports. */
            texts?: {
                /**
                 * @description Text that appears on invoices and reports for the entity.
                 * @example Superior financial applications. Real-time business visibility. Open, on-demand platform.
                 */
                message?: string | null;
                /**
                 * @description Marketing text.
                 * @example Intacct. A Better Way to Run Your Business
                 */
                marketing?: string | null;
                /**
                 * @description Footnote text that appears on reports and invoices that are printed for the entity.
                 * @example All sales final.
                 */
                footnote?: string | null;
                /**
                 * @description The name of the entity as it appears on reports and invoices that are printed for the entity.
                 * @example My Company LLC
                 */
                reportPrintAs?: string;
                /**
                 * @description Entity information displayed in reports, in addition to the entity name. For example, an entity title might include the address and manager name.
                 * @example San Jose, California
                 */
                customTitle?: string | null;
            };
            /**
             * @description Used in Cash Management (checking account) to indicate whether this is a working entity.
             * @default false
             * @example false
             */
            readonly isRoot?: boolean;
            /**
             * @description Work days for each week. May be used to control whether employees can submit hours for time worked on these days and, if they can, to apply a different pay rate if desired.
             * @default []
             * @example [
             *       "monday",
             *       "tuesday",
             *       "wednesday",
             *       "thursday",
             *       "friday"
             *     ]
             */
            businessDays?: string[];
            /**
             * @description Weekend days for each week. May be used to control whether employees can submit hours for time worked on these days and, if they can, to apply a different pay rate if desired.
             * @default []
             * @example [
             *       "saturday",
             *       "sunday"
             *     ]
             */
            weekendDays?: string[];
            /**
             * @description The state or territory tax ID, or VAT ID.
             * @example 192354308
             */
            taxId?: string | null;
            /**
             * @description Default country for addresses associated with the entity.
             * @default unitedStates
             */
            defaultCountryForAddresses?: string & components["schemas"]["country"];
            /**
             * @description A company's business ID (SIRET) is a 14-digit number that starts with the SIREN (a 9-digit number that identifies the company itself) followed by 5 digits that identifies the company's physical location or branch. For companies operating in France only.
             * @example 453 983 245 12345
             */
            businessId?: string | null;
            /**
             * Format: date
             * @description Date when the books are open for the entity.
             * @example 2024-01-01
             */
            openBooksStartDate?: string | null;
            /**
             * @description The country in which the entity operates.
             * @default null
             */
            operatingCountry?: (string & components["schemas"]["country"]) | null;
            /** @description Legal contact information for the entity to be used on 1099 form, 1096 form, and taxable payments annual report (TPAR). */
            legalContact?: {
                /**
                 * @description Set to `true` to include the legal name and address on forms 1099 and 1096 for the entity.
                 * @default false
                 * @example false
                 */
                enableOnTaxForms?: boolean;
                /**
                 * @description Set to `true` to include the legal name and address on taxable payments annual report (TPAR) for Australian companies and entities.
                 * @default false
                 * @example false
                 */
                enableOnTPAR?: boolean;
                /**
                 * @description Legal name to be printed on 1099 form, 1096 form, and taxable payments annual report (TPAR).
                 * @example Expert Sage Intacct LTD
                 */
                name?: string | null;
                /** @description Legal address to be used on 1099 form, 1096 form and taxable payments annual report (TPAR). */
                address?: {
                    /**
                     * @description Legal address line 1.
                     * @example 300 Park Avenue
                     */
                    address1?: string | null;
                    /**
                     * @description Legal address line 2.
                     * @example Suite 1400
                     */
                    address2?: string | null;
                    /**
                     * @description Legal address line 3.
                     * @example Western industrial area
                     */
                    address3?: string | null;
                    /**
                     * @description City where the legal entity is registered.
                     * @example San Jose
                     */
                    city?: string | null;
                    /**
                     * @description State or territory where the legal entity is registered.
                     * @example California
                     */
                    state?: string | null;
                    /**
                     * @description ZIP or postal code where the legal entity is registered.
                     * @example 95110
                     */
                    zipCode?: string | null;
                    /**
                     * @description Country where the legal entity is registered.
                     * @example United States
                     */
                    country?: string | null;
                    /**
                     * @description Country code for the country where the legal entity is registered.
                     * @default null
                     */
                    countryCode?: (string & components["schemas"]["country-code"]) | null;
                };
                /** @description Legal contact information to include on the taxable payments annual report (TPAR) form. */
                tpar?: {
                    /** @description Legal contact for taxable payments annual report (TPAR). */
                    contact?: {
                        /**
                         * @description Name for the legal contact.
                         * @example John Doe
                         */
                        name?: string | null;
                        /**
                         * @description Phone number for the legal contact.
                         * @example 1022223333
                         */
                        phone?: string | null;
                        /**
                         * @description Fax number for the legal contact.
                         * @example 1009288888
                         */
                        fax?: string | null;
                        /**
                         * @description Email for the legal contact.
                         * @example contact@example.com
                         */
                        email?: string | null;
                    };
                    /**
                     * @description Legal branch number on taxable payments annual report (TPAR).
                     * @example 001
                     */
                    branchNumber?: string | null;
                };
            };
            /**
             * @description Set to `true` to enable partial VAT exemption for eligible bill items. Applicable for United Kingdom VAT or France.
             * @default false
             * @example true
             */
            isPartialExempt?: boolean;
            /**
             * @description Set to `true` to mark items as partially exempt by default on bills and invoices for Accounts Payable and Purchasing with Australia GST (RITC), Canadian Sales Tax (ITC), France, or UK VAT tax solutions.
             * @default false
             * @example true
             */
            isDefaultPartialExempt?: boolean;
            /**
             * @description Accounting type.
             * @default entity
             * @example entity
             * @enum {string|null}
             */
            accountingType?: null | "entity" | "fund";
            /**
             * Format: date
             * @description Reporting period due date for the entity, used for GL setup approval configuration.
             * @example 2021-01-01
             */
            statutoryReportingPeriodDate?: string | null;
            /** @description Customer associated with the entity. */
            customer?: {
                /**
                 * @description System-assigned key for the customer.
                 * @example 15
                 */
                key?: string | null;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/23
                 */
                readonly href?: string | null;
                /**
                 * @description Unique identifier for the customer.
                 * @example C-00003
                 */
                id?: string;
                /**
                 * @description Name for the customer.
                 * @example Logic Solutions
                 */
                readonly name?: string | null;
            };
            /** @description Vendor associated with the entity. */
            vendor?: {
                /**
                 * @description System-assigned key for the vendor.
                 * @example 15
                 */
                key?: string;
                /**
                 * @description URL endpoint for the vendor.
                 * @example /objects/accounts-payable/vendor/15
                 */
                readonly href?: string;
                /**
                 * @description Unique identifier for the vendor.
                 * @example V-00014
                 */
                id?: string;
                /**
                 * @description Name for the vendor.
                 * @example Pac bell
                 */
                readonly name?: string | null;
            };
            /** @description Unrecoverable tax account used for posting partial exemptions for the entity. Transactions are posted to the GL account if this account is not specified. */
            unrecoverableTaxAccount?: {
                /**
                 * @description System-assigned key for the account.
                 * @example 23
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the account.
                 * @example 123.45
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/23
                 */
                readonly href?: string;
            };
            /**
             * @description Set to `true` to enable using different payable and receivable accounts for inter-entity transactions.
             * @default false
             * @example true
             */
            enableInterEntityRelationships?: boolean;
            /** @description Inter-entity payable account associated with the entity. Only applicable if `enableInterEntityRelationships` is set to `true`. */
            interEntityPayableGLAccount?: {
                /**
                 * @description System-assigned key for the account.
                 * @example 89
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the account.
                 * @example 555.99
                 */
                id?: string | null;
                /**
                 * @description Inter-entity payable account number.
                 * @example 123436
                 */
                readonly accountNumber?: string | null;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/89
                 */
                readonly href?: string;
            };
            /** @description Inter-entity receivable account associated with the entity. Only applicable if `enableInterEntityRelationships` is set to `true`. */
            interEntityReceivableGLAccount?: {
                /**
                 * @description System-assigned key for the account.
                 * @example 876
                 */
                key?: string | null;
                /**
                 * @description Unique identifier for the account.
                 * @example 555.98
                 */
                id?: string | null;
                /**
                 * @description Inter-entity receivable account number.
                 * @example 123436
                 */
                readonly accountNumber?: string | null;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/general-ledger/account/876
                 */
                readonly href?: string;
            };
            /** @description The employee who manages the entity. */
            manager?: {
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/81
                 */
                readonly href?: string;
                /**
                 * @description Unique identifier for the employee.
                 * @example jsmith
                 */
                id?: string;
                /**
                 * @description System-assigned key for the employee.
                 * @example 81
                 */
                key?: string;
                /**
                 * @description Name for the employee.
                 * @example John Smith
                 */
                readonly name?: string | null;
                /**
                 * @description Primary email address for the employee.
                 * @example supervisor1@example.com
                 */
                readonly email1?: string | null;
                /**
                 * @description Secondary email address for the employee.
                 * @example supervisor2@example.com
                 */
                readonly email2?: string | null;
            };
            /** @description Tax solution for the entity. Only for companies subscribed to the Taxes application. */
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
                 * @description Unique identifier for the tax solution.
                 * @example Australia - GST
                 */
                id?: string;
                /**
                 * @description Tax calculation method.
                 * @example simpleTax
                 * @enum {string}
                 */
                taxCalculationMethod?: null | "NoTax" | "SimpleTax" | "AdvancedTax" | "AvaTax" | "VAT";
            };
            /**
             * @description Set to 'true' to indicate that this is a limited entity.
             * @default false
             * @example true
             */
            isLimitedEntity?: boolean;
            /**
             * @description Set to 'true' to enable e-invoicing for the entity.
             * @default false
             * @example true
             */
            readonly enableEInvoicing?: boolean;
            /**
             * @description Electronic address used for electronic invoicing, required for businesses in France to comply with local electronic invoicing regulations.
             * @default
             * @example 123456789-Emp_001-Dept_001
             */
            readonly electronicAddress?: string | null;
            /** @description Branding configuration for the entity, including logo. */
            branding?: {
                /**
                 * Format: base64zip
                 * @description Entity branding logo file.
                 * @example UEsDBBQABgAIAAAAIQDfpNJsW
                 */
                logo?: string | null;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "company-config-entityRequiredProperties": Record<string, never>;
        /** @description Affiliate entities are associated separate legal entities defined within your Sage Intacct company. You use an affiliate entity to tag the related entity in a transaction, enabling more detailed reporting. Affiliate entity is a read-only standard dimension based on the list of entities in your company. */
        "objects.company-config.affiliate-entity": {
            /**
             * @description System-assigned unique key for the affiliate entity.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the affiliate entity.
             * @example E200
             */
            readonly id?: string;
            /**
             * @description Name for the affiliate entity.
             * @example Mariposa LLC
             */
            name?: string;
            /**
             * @description URL endpoint for the affiliate entity.
             * @example /objects/company-config/affiliate-entity/23
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description An affiliate entity group forms a collection of associated entities for reporting, for example, the parent entity E100 is associated with entities E200 and E500, as a reporting group. */
        "objects.company-config.affiliate-entity-group": {
            /**
             * @description System-assigned unique key for the affiliate entity group.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the affiliate entity group.
             * @example AF-MBE
             */
            id?: string;
            /**
             * @description URL endpoint for the affiliate entity group.
             * @example /objects/company-config/affiliate-entity-group/23
             */
            readonly href?: string;
            /**
             * @description Name for the affiliate entity group.
             * @example Mariposa Business Entities
             */
            name?: string;
            /**
             * @description Description for the affiliate entity group.
             * @example E100 E200 E500 affiliate entity group
             */
            description?: string;
            /**
             * @description Specifies the group membership type, indicating which affiliate entities are included in the group. When reports include affiliate entities in rows or columns, this field also defines the row and column headings and the order in which they are displayed.
             *
             *       - `specific` - Specify the affiliate entities to include and their order in the `groupMembers` array. You can optionally filter the array with the `memberFilter` settings.
             *       - `all` - All affiliate entities that match the `memberFilter` criteria.
             * @default all
             * @example specific
             * @enum {string}
             */
            groupType?: "all" | "specific";
            /** @description One or more filters that define which affiliate entities are included in the group. This can be used with the `groupMembers` array to filter a predefined list of affiliate entities. */
            memberFilter?: components["schemas"]["member-filter"] & Record<string, never>;
            /** @description Indicates the affiliate entities to include in the group when `groupType` is set to `specific`. */
            groupMembers?: {
                /**
                 * @description Unique key for affiliate entity.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the affiliate entity.
                 * @example E200
                 */
                id?: string;
                /**
                 * @description Name for the affiliate entity.
                 * @example Mariposa
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the affiliate entity.
                 * @example /objects/company-config/affiliate-entity/23
                 */
                readonly href?: string;
            }[];
            /**
             * @description Indicates whether a dimension structure is created from the group. If `true`, the group can be added to the rows or columns of a financial report.
             * @default false
             * @example false
             */
            isDimensionStructure?: boolean;
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "company-config-affiliate-entity-groupRequiredProperties": Record<string, never>;
        /** @description Configure inter-entity account mapping subscriptions for multi-entity shared companies to designate payable and receivable accounts for inter-entity transactions. */
        "objects.company-config.inter-entity-account-mapping": {
            /**
             * @description System-assigned unique key for the inter-entity account mapping.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the inter-entity account mapping. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description Indicates whether to use the `basic` or `advanced` inter-entity account mapping plans:
             *     * `basic` - Use one set of inter-entity accounts per entity for higher-level tracking
             *     * `advanced` - Define separate sets of inter-entity accounts for each entity relationship, or entity pair.
             * @example advanced
             * @enum {string}
             */
            readonly interEntityAccountMappingPlan?: "basic" | "advanced";
            /**
             * @description URL endpoint for the inter-entity account mapping.
             * @example /objects/company-config/inter-entity-account-mapping/23
             */
            readonly href?: string;
            /** @description References the inter-entity account mapping details for a basic `interEntityAccountMappingPlan`. */
            interEntityBasicMaps?: components["schemas"]["objects.company-config.inter-entity-basic-map"][];
            /** @description References the inter-entity account mapping details for an advanced `interEntityAccountMappingPlan`. */
            interEntityAdvancedMaps?: components["schemas"]["objects.company-config.inter-entity-advanced-map"][];
        };
        /** @description Basic inter-entity account mapping enables you to map entities to accounts which post inter-entity transactions (IETs). */
        "objects.company-config.inter-entity-basic-map": {
            /**
             * @description System-assigned unique key for the inter-entity basic map.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the inter-entity basic map. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the inter-entity basic map.
             * @example /objects/company-config/inter-entity-basic-map/23
             */
            readonly href?: string;
            /** @description References the entity associated with the inter-entity basic map. */
            entity?: {
                /**
                 * @description Unique key for the entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the entity.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description Name for the entity.
                 * @example United States of America
                 */
                readonly name?: string;
                /**
                 * @description Current status of the entity.
                 * @example active
                 */
                readonly status?: string;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/1
                 */
                readonly href?: string;
            };
            /** @description References the General Ledger (GL) payable account assigned to the entity to record inter-entity payable (IEP) transactions. */
            interEntityPayableGLAccount?: {
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
            /** @description References the General Ledger (GL) receivable account assigned to the entity to record inter-entity receivable (IER) transactions. */
            interEntityReceivableGLAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 13
                 */
                key?: string;
                /**
                 * @description Identifier for the GL account.
                 * @example 1004
                 */
                id?: string;
                /**
                 * @description Name for the GL account.
                 * @example Lloyds bank
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/13
                 */
                readonly href?: string;
            };
            /** @description References the account mapping configuration for the inter-entity basic map. */
            readonly interEntityAccountMapping?: {
                /**
                 * @description Unique key for the account mapping configuration.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the account mapping configuration.
                 * @example 1
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the parent account mapping configuration.
                 * @example /objects/company-config/inter-entity-account-mapping/1
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Advanced inter-entity account mapping enables a multi-entity company to map pairs of transacting entities using up to four accounts to record inter-entity transactions (IETs). */
        "objects.company-config.inter-entity-advanced-map": {
            /**
             * @description System-assigned unique key for the inter-entity advanced map.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the inter-entity advanced map. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the inter-entity advanced map.
             * @example /objects/company-config/inter-entity-advanced-map/23
             */
            readonly href?: string;
            /** @description References the General Ledger (GL) payable account assigned to the entity to record inter-entity payable (IEP) transactions. */
            interEntityPayableGLAccount?: {
                /**
                 * @description Unique key for the GLaccount.
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
            /** @description References the General Ledger (GL) receivable account assigned to the entity to record inter-entity receivable (IER) transactions. */
            interEntityReceivableGLAccount?: {
                /**
                 * @description Unique key for the GL account.
                 * @example 13
                 */
                key?: string;
                /**
                 * @description Identifier for the GL account.
                 * @example 1004
                 */
                id?: string;
                /**
                 * @description Name for the GL account.
                 * @example Lloyds bank
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the GL account.
                 * @example /objects/general-ledger/account/13
                 */
                readonly href?: string;
            };
            /** @description References the source entity associated with the inter-entity advanced map. */
            sourceEntity?: {
                /**
                 * @description Unique key for the source entity.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the source entity.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description Name for the source entity.
                 * @example United States of America
                 */
                readonly name?: string;
                /**
                 * @description Current status of the source entity.
                 * @example active
                 */
                readonly status?: string;
                /**
                 * @description URL endpoint for the source entity.
                 * @example /objects/company-config/entity/1
                 */
                readonly href?: string;
            };
            /** @description References the target entity associated with the inter-entity advanced map. */
            targetEntity?: {
                /**
                 * @description Unique key for the target entity.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Identifier for the target entity.
                 * @example 2
                 */
                id?: string;
                /**
                 * @description Name for the target entity.
                 * @example India
                 */
                readonly name?: string;
                /**
                 * @description Current status of the target entity.
                 * @example active
                 */
                readonly status?: string;
                /**
                 * @description URL endpoint for the target entity.
                 * @example /objects/company-config/entity/2
                 */
                readonly href?: string;
            };
            /** @description References the account mapping configuration for the inter-entity advanced map. */
            readonly interEntityAccountMapping?: {
                /**
                 * @description Unique key for the account mapping configuration. This value is always '1' for this object.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the account mapping configuration. This value is the same as `key` for this object.
                 * @example 1
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the account mapping configuration.
                 * @example /objects/company-config/inter-entity-account-mapping/1
                 */
                readonly href?: string;
            };
        };
        /** @description Exchange rates convert one currency to another when a company chooses not to use the Intacct Daily Rate. */
        "objects.company-config.exchange-rate": {
            /**
             * @description System-assigned unique key for the exchange rate.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the exchange rate. This is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the exchange rate.
             * @example /objects/company-config/exchange-rate/23
             */
            readonly href?: string;
            /**
             * @description Specifies the currency of the original transaction being converted from.
             * @example USD
             */
            fromCurrency?: string;
            /**
             * @description Specifies the currency of the transaction being converted to.
             * @example GBP
             */
            toCurrency?: string;
            /** @description Indicates the exchange rate type being converted. */
            exchangeRateType?: {
                /**
                 * @description Unique key for the exchange rate type.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description Exchange rate type ID.
                 * @example 123
                 */
                id?: string;
                /**
                 * @description Name of the exchange rate type.
                 * @example GBP-Rate
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the exchange rate type.
                 * @example /objects/company-config/exchange-rate-type/123
                 */
                readonly href?: string;
            };
            /** @description Line items related to this exchange rate, each line represents a rate and an effective starting date. */
            lines?: components["schemas"]["objects.company-config.exchange-rate-line"][];
            audit?: components["schemas"]["audit.s1"];
        };
        "company-config-exchange-rateRequiredProperties": Record<string, never>;
        /** @description Exchange rate lines are entries within an exchange rate object that contain details such as effective start date, exchange rate, and reciprocal rate. */
        "objects.company-config.exchange-rate-line": {
            /**
             * @description System-assigned unique key for the exchange rate line.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the exchange rate line. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the exchange rate line.
             * @example /objects/company-config/exchange-rate-line/23
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Specifies the date the exchange rate becomes effective.
             * @example 2021-01-31
             */
            effectiveStartDate?: string;
            /**
             * @description The conversion rate.
             * @example 2
             */
            rate?: number;
            /**
             * @description Specifies the reverse of the conversion rate (`rate`). For example, if you are establishing a `rate` to convert dollars to Euros, the `reciprocalRate` is used to convert Euros to dollars.
             * @example 0.5
             */
            reciprocalRate?: number;
            /** @description Reference to the exchange rate to which this line belongs. */
            exchangeRate?: {
                /**
                 * @description Unique key for the exchange rate.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the exchange rate.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description URL endpoint for the exchange rate.
                 * @example /objects/company-config/exchange-rate/23
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "company-config-exchange-rate-lineRequiredProperties": Record<string, never>;
        /** @description Exchange rate types control how currency conversions are applied in Sage Intacct, enabling foreign currency transactions to use exchange rates tailored to specific business needs. */
        "objects.company-config.exchange-rate-type": {
            /**
             * @description System-assigned unique key for the exchange rate type.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the exchange rate type.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the the exchange rate type.
             * @example /objects/company-config/exchange-rate-type/23
             */
            readonly href?: string;
            /**
             * @description Name for the exchange rate type.
             * @example GBP-Rate
             */
            name?: string;
            /**
             * @description Indicates whether the system should use the exchange rate type as the default. Setting `isDefault` to `true` for an exchange rate type will automatically set it to `false` for the current default exchange rate type.
             * @default false
             * @example false
             */
            isDefault?: boolean;
            audit?: components["schemas"]["audit.s1"];
        };
        "company-config-exchange-rate-typeRequiredProperties": Record<string, never>;
        /** @description User information */
        "objects.company-config.user": {
            /**
             * @description System-assigned unique key for the user. Used to identify the user in URLs or JSON bodies for all operations on the user.
             * @example 29
             */
            readonly key?: string;
            /**
             * @description User login ID. This unique identifier cannot be changed after the user is created.
             * @example john.doe
             */
            id?: string;
            /**
             * @description The name that will be used to identify the user. This name is displayed in the user interface.
             * @example John Doe
             */
            userName?: string;
            /**
             * @description User email address.
             * @example john.doe@company.com
             */
            accountEmail?: string;
            /**
             * @description The user type for this user. User types determines the _maximum_ set of features and activities that a user can access and perform in Intacct. The things a user can do also depend on the permissions that are assigned to the user. For more information see [User types](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_user_types).
             * @default business
             * @example employee
             * @enum {string}
             */
            userType?: "business" | "employee" | "viewOnly" | "dashboard" | "projectManager" | "paymentApprover" | "client" | "platform" | "crm" | "warehouse" | "constructionManager";
            /**
             * @description User admin privileges.
             *
             *     * `off` - No admin privileges
             *     * `full` - Complete administration privileges including the ability to create other full administrators and use Platform Services features. Requires that `userType` is set to `business`.
             *     * `limited` - All administration privileges, except for the previously mentioned items.  Requires that `userType` is set to `business`.
             * @default off
             * @example off
             * @enum {string}
             */
            adminPrivileges?: "off" | "limited" | "full";
            /**
             * @description User status.
             *
             *     - `active` - The user can log in and access Intacct.
             *     - `inactive` -  Hides the user from lists throughout Intacct but retains the user information in the system. Cannot be used when creating a new user.
             *     - `lockedOut` - Set by Intacct due to too many failed login attempts, or by an administrator to prevent the user from logging in. The user cannot log in until an administrator sets the status to `active`.
             * @default active
             * @example active
             * @enum {string}
             */
            status?: "active" | "inactive" | "lockedOut";
            /** @description Specifies whether the user is allowed to use Sage Intacct Web Services (API). */
            webServices?: {
                /**
                 * @description Set to `true` to allow the user to use web services.
                 * @example true
                 */
                readonly isEnabled?: boolean;
                /**
                 * @description Specifies whether the user is restricted to Web Services only. That is, when set to `true` the user cannot log in to the Sage Intacct user interface.
                 * @default false
                 * @example true
                 */
                isRestricted?: boolean;
            };
            /** @description Password properties. */
            password?: {
                /**
                 * @description Specifies whether the user's password expires. Set to `true` to prevent the user's password from expiring. Use this setting only for Web Services API users.
                 * @default false
                 * @example true
                 */
                neverExpires?: boolean;
                /**
                 * @description Set to `true` to trigger the password reset flow for the user.
                 * @default false
                 * @example false
                 */
                requiresReset?: boolean;
                /**
                 * @description Specifies whether password requirements are disabled for the user.
                 * @default false
                 * @example false
                 */
                disablePassword?: boolean;
            };
            /** @description Single sign-on settings for the user. */
            sso?: {
                /**
                 * @description Specifies whether single sign-on is enabled for the user.
                 * @default false
                 * @example true
                 */
                isSSOEnabled?: boolean;
                /**
                 * @description Federated SSO user ID.
                 * @example john.doe
                 */
                federatedSSOId?: string;
            };
            /** @description Entity level restrictions. */
            entityAccess?: {
                /**
                 * @description Specifies whether the user can access all entities in the company. Set to `false` to restrict the user to the entities listed in the `entities` array.
                 * @default true
                 * @example true
                 */
                allowUnrestrictedAccess?: boolean;
                /**
                 * @description Specifies whether the user can access the top-level entity in the company. It's a best practice to enable access to the top level for all users who are restricted to a single entity in a multi-entity shared company.
                 * @default false
                 * @example false
                 */
                allowTopLevelAccess?: boolean;
            };
            /** @description The contact associated with this user. */
            contact?: components["schemas"]["contact-ref"] & Record<string, never>;
            /**
             * @description Whether to recognize trusted devices for the user-- always, never, or use the company setting.
             * @default companyDefault
             * @example always
             * @enum {string}
             */
            trustedDevices?: "companyDefault" | "always" | "never";
            /**
             * @description Specifies whether the Intacct Collaborate feature is disabled for the user.
             * @default false
             * @example false
             */
            isChatterDisabled?: boolean;
            /**
             * @description Specifies whether to hide transactions from this user that do not belong to the departments listed in the `departments` array.
             * @default false
             * @example false
             */
            hideOtherDepartmentTransactions?: boolean;
            /**
             * @deprecated
             * @description This object array is deprecated, please use the `entities` array.
             */
            locations?: {
                /**
                 * @deprecated
                 * @description Location key.
                 */
                key?: string;
                /**
                 * @deprecated
                 * @description Location ID.
                 */
                id?: string;
                /**
                 * @deprecated
                 * @description Endpoint URL for the location.
                 */
                readonly href?: string;
            }[];
            /** @description Locations that the user is allowed to view and work with. Leave empty to allow the user to work with all locations. */
            entities?: {
                /**
                 * @description Unique key for the entity.
                 * @example 42
                 */
                key?: string;
                /**
                 * @description Entity ID.
                 * @example PNW
                 */
                id?: string;
                /**
                 * @description Endpoint URL for the entity.
                 * @example /objects/company-config/entity/21
                 */
                readonly href?: string;
            }[];
            /** @description Departments that the user is allowed to view and work with. Leave empty to allow the user to work with all departments. */
            departments?: {
                /**
                 * @description Unique key for the department.
                 * @example 79
                 */
                key?: string;
                /**
                 * @description Department ID.
                 * @example Sales
                 */
                id?: string;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/7
                 */
                readonly href?: string;
            }[];
            /** @description List of territories that the user is assigned to. */
            territories?: {
                /**
                 * @description Unique key for the territory.
                 * @example 9
                 */
                key?: string;
                /**
                 * @description Territory ID.
                 * @example T1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the territory.
                 * @example /objects/accounts-receivable/territory/9
                 */
                readonly href?: string;
            }[];
            /** @description List of roles assigned to the user. The array will be empty for companies that have user-based permissions. */
            roles?: {
                /**
                 * @description Unique key for the role.
                 * @example 7
                 */
                key?: string;
                /**
                 * @description Role ID.
                 * @example Employee
                 */
                id?: string;
                /**
                 * @description URL endpoint for the role.
                 * @example /objects/company-config/role/7
                 */
                readonly href?: string;
            }[];
            /** @description Array of objects that define the permissions and access rights assigned to the user. */
            permissionAssignments?: {
                /** @description Reference to a permission that is assigned to the user. */
                permission?: {
                    /**
                     * @description Unique key for the permission.
                     * @example 414
                     */
                    key?: string;
                    /**
                     * @description Permission ID.
                     * @example 414
                     */
                    id?: string;
                    /**
                     * @description Endpoint URL for the permission.
                     * @example /objects/company-config/permission/404
                     */
                    readonly href?: string;
                };
                /**
                 * @description List of functions or tasks that the user can perform for the specified permission. Note that not all permissions support all functions and tasks.
                 * @example [
                 *       "list",
                 *       "readonly",
                 *       "add",
                 *       "modify",
                 *       "delete"
                 *     ]
                 */
                accessRights?: components["schemas"]["permission-access-rights"][];
            }[];
            /** @description Array of objects that define the user's permissions and access rights for custom applications. */
            customPermissionAssignments?: {
                application?: {
                    /**
                     * @description Unique key for the custom application.
                     * @example 10005
                     */
                    key?: string;
                    /**
                     * @description Custom application ID.
                     * @example Custom Dimension
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the custom application.
                     * @example /objects/platform/custom-application/404
                     */
                    readonly href?: string;
                    /**
                     * @deprecated
                     * @description Array of permissions for the custom application.
                     */
                    permission?: {
                        /**
                         * @deprecated
                         * @description Permission name.
                         * @example view_object
                         */
                        readonly name?: string;
                        /**
                         * @deprecated
                         * @description Area where the permission applies.
                         * @example objects
                         * @enum {string}
                         */
                        readonly group?: "actions" | "objects" | "menus";
                    }[];
                    /** @description Array of permissions for the custom application. */
                    permissions?: {
                        /**
                         * @description Permission name.
                         * @example view_object
                         */
                        name?: string;
                        /**
                         * @description Area where the permission applies.
                         * @example objects
                         * @enum {string}
                         */
                        group?: "actions" | "objects" | "menus";
                    }[];
                };
                /**
                 * @deprecated
                 * @description Permission access rights.
                 * @example [
                 *       "list",
                 *       "readonly",
                 *       "add",
                 *       "modify",
                 *       "delete"
                 *     ]
                 */
                accessRights?: components["schemas"]["permission-access-rights"][];
                /**
                 * @description Permission access rights.
                 * @example [
                 *       "list",
                 *       "readonly",
                 *       "add",
                 *       "modify",
                 *       "delete"
                 *     ]
                 */
                allowedAccessRights?: components["schemas"]["permission-access-rights"][];
            }[];
            /** @description List of permissions for Copilot agents. */
            agentPermissionAssignments?: {
                /** @description Copilot agent. */
                agent?: {
                    /**
                     * @description System-assigned key for the agent.
                     * @example 9030801000000002
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the agent.
                     * @example scm-to-transaction-converter
                     */
                    id?: string;
                    /** @description List of permissions for Copilot agents. */
                    permissions?: {
                        /**
                         * @description Name for the agent.
                         * @example Convert an SCM document to the specified transaction type
                         */
                        name?: string;
                        /**
                         * @description Area where the permission applies.
                         * @example agents
                         * @enum {string}
                         */
                        group?: "agents";
                    }[];
                };
                /**
                 * @description Permission access rights.
                 * @example [
                 *       "run"
                 *     ]
                 */
                allowedAccessRights?: components["schemas"]["permission-access-rights"][];
            }[];
            audit?: components["schemas"]["audit.s1"];
            /** @description The entity that the user is associated with. Users created at the top level do not have an entity reference so the `key`, `id`, and `name` properties will be `null`. */
            entity?: {
                /**
                 * @description Unique key for the entity.
                 * @example 54
                 */
                key?: string;
                /**
                 * @description Entity ID.
                 * @example 313131
                 */
                id?: string;
                /**
                 * @description Entity name.
                 * @example Central Region
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/54
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for user.
             * @example /objects/company-config/user/21
             */
            readonly href?: string;
        };
        "company-config-userRequiredProperties": Record<string, never>;
        /** @description List of users assigned to user groups. */
        "objects.company-config.user-group": {
            /**
             * @description System-assigned unique key for the user group.
             * @example 21
             */
            readonly key?: string;
            /**
             * @description Name of the user group. The name cannot be changed after the group is created.
             * @example AP
             */
            id?: string;
            /**
             * @description URL endpoint for the user group.
             * @example /objects/company-config/user-group/21
             */
            readonly href?: string;
            /**
             * @description Description of the user group.
             * @example Accounts Payable
             */
            description?: string;
            /** @description List of roles assigned to the user group. All users in the group inherit the permissions defined by the roles. Only applies to companies that use role-based permissions instead of user-based permissions. */
            roles?: {
                /**
                 * @description Unique key of the role.
                 * @example 7
                 */
                key?: string;
                /**
                 * @description Name of the role.
                 * @example Warehouse users
                 */
                id?: string;
                /**
                 * @description Endpoint of the role.
                 * @example /objects/company-config/role/7
                 */
                readonly href?: string;
            }[];
            audit?: components["schemas"]["audit.s1"];
        };
        "company-config-user-groupRequiredProperties": Record<string, never>;
        /** @description A user group member represents a user assigned to a user group. */
        "objects.company-config.user-group-member": {
            /**
             * @description System-assigned unique key for the user group member.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the user group member. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the user group member.
             * @example /objects/company-config/user-group-member/23
             */
            readonly href?: string;
            /** @description User group that the user is a member of. */
            userGroup?: {
                /**
                 * @description Unique key for the user group.
                 * @example 21
                 */
                key?: string;
                /**
                 * @description Name of the user group.
                 * @example AP
                 */
                id?: string;
                /**
                 * @description URL endpoint for the user group.
                 * @example /objects/company-config/user-group/21
                 */
                readonly href?: string;
            };
            /** @description User that is a member of the user group. */
            user?: {
                /**
                 * @description Unique key for the user.
                 * @example 159
                 */
                key?: string;
                /**
                 * @description ID for the user.
                 * @example tsmith
                 */
                id?: string;
                /**
                 * @description Name of the user.
                 * @example Tony Smith
                 */
                readonly userName?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/1
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s2"];
        };
        "company-config-member-user-groupRequiredProperties": Record<string, never>;
        /** @description A user role. */
        "objects.company-config.role": {
            /**
             * @description System-assigned unique key for the role. Used to identify the role in URLs or JSON bodies for all operations on the role.
             * @example 24
             */
            readonly key?: string;
            /**
             * @description Unique ID for the role. Cannot be changed after the role is created.
             *
             *     Note that the `id` values for system-generated roles begin with `::SYS::`.
             * @example Employee
             */
            id?: string;
            /**
             * @description URL endpoint for the role.
             * @example /objects/company-config/role/24
             */
            readonly href?: string;
            /**
             * @description Description of the role.
             * @example Full employee permissions including approvals
             */
            description?: string;
            /**
             * @description The type of company in which the role will be used.
             *
             *     * `enterprise`: A single entity company with unique chart of accounts.
             *     * `eConsole`: Accountant or Partner console.
             *     * `multiEntityDistributed`: Separate companies with different charts of accounts accessed from a Management console.
             *     * `multiEntityShared`: Multiple units or locations with the same chart of accounts.
             * @default enterprise
             * @example enterprise
             * @enum {string}
             */
            roleType?: "enterprise" | "eConsole" | "multiEntityDistributed" | "multiEntityShared";
            /**
             * @description Role is applicable to users with specified access method.
             * @default loginAndSlideIn
             * @example loginAndSlideIn
             * @enum {string}
             */
            applyTo?: "loginAndSlideIn" | "loginOnly" | "slideInOnly";
            /** @description Array of permissions and access rights for the role. */
            rolePermissionAssignments?: components["schemas"]["objects.company-config.role-permission-assignment"][];
            /** @description Array of permissions for custom applications. */
            customRolePermissionAssignments?: {
                application?: {
                    /**
                     * @description Custom application key.
                     * @example 10004
                     */
                    key?: string;
                    /**
                     * @description Custom application ID.
                     * @example Custom Dimension
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the custom application.
                     * @example /objects/platform/custom-application/404
                     */
                    readonly href?: string;
                    /**
                     * @deprecated
                     * @description Array of permissions for the custom application.
                     */
                    permission?: {
                        /**
                         * @deprecated
                         * @description Permission name.
                         * @example view_object
                         */
                        readonly name?: string;
                        /**
                         * @deprecated
                         * @description Area where the permission applies.
                         * @example objects
                         * @enum {string}
                         */
                        readonly group?: "actions" | "objects" | "menus";
                    }[];
                    /** @description Array of permissions for the custom application. */
                    permissions?: {
                        /**
                         * @description Permission name.
                         * @example view_object
                         */
                        name?: string;
                        /**
                         * @description Area where the permission applies.
                         * @example objects
                         * @enum {string}
                         */
                        group?: "actions" | "objects" | "menus";
                    }[];
                };
                /**
                 * @deprecated
                 * @description Permission access rights.
                 * @example [
                 *       "list",
                 *       "readonly",
                 *       "add",
                 *       "modify",
                 *       "delete"
                 *     ]
                 */
                accessRights?: components["schemas"]["permission-access-rights"][];
                /**
                 * @description Permission access rights.
                 * @example [
                 *       "list",
                 *       "readonly",
                 *       "add",
                 *       "modify",
                 *       "delete"
                 *     ]
                 */
                allowedAccessRights?: components["schemas"]["permission-access-rights"][];
            }[];
            /** @description List of permissions for Copilot agents. */
            agentRolePermissionAssignments?: {
                /** @description Copilot agent. */
                agent?: {
                    /**
                     * @description System-assigned key for the agent.
                     * @example 9030801000000002
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the agent.
                     * @example scm-to-transaction-converter
                     */
                    id?: string;
                    /** @description List of permissions for the Copilot agent. */
                    permissions?: {
                        /**
                         * @description Name for the agent.
                         * @example Convert an SCM document to the specified transaction type
                         */
                        name?: string;
                        /**
                         * @description Area where the permission applies.
                         * @example agents
                         * @enum {string}
                         */
                        group?: "agents";
                    }[];
                };
                /**
                 * @description Permission access rights.
                 * @example [
                 *       "run"
                 *     ]
                 */
                allowedAccessRights?: components["schemas"]["permission-access-rights"][];
            }[];
            /** @description Array of users assigned to the role. */
            readonly roleUsers?: components["schemas"]["objects.company-config.role-user-map"][];
            /** @description Array of user groups assigned to the role. */
            readonly roleGroups?: components["schemas"]["objects.company-config.role-user-group-map"][];
            audit?: components["schemas"]["audit.s1"];
        };
        "company-config-roleRequiredProperties": Record<string, never>;
        /** @description Map of roles assigned to users. */
        "objects.company-config.role-user-map": {
            /**
             * @description System-assigned key for the role user map.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the roll user map. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the role user map.
             * @example /objects/company-config/role-user-map/23
             */
            readonly href?: string;
            /** @description A role assigned to the user. */
            readonly role?: {
                /**
                 * @description Role key.
                 * @example 469
                 */
                readonly key?: string;
                /**
                 * @description Role name.
                 * @example Admin role
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the role.
                 * @example /objects/company-config/role/469
                 */
                readonly href?: string;
            };
            /** @description User to whom the role is assigned. */
            readonly user?: {
                /**
                 * @description User key.
                 * @example 189
                 */
                readonly key?: string;
                /**
                 * @description User login ID.
                 * @example Admin
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/189
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Map of roles assigned to user groups. */
        "objects.company-config.role-user-group-map": {
            /**
             * @description System-assigned unique key for the role user group map.
             * @example 761
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the roll user group map. This value is the same as the `key` for this object.
             * @example 761
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the role user group map.
             * @example /objects/company-config/role-user-group-map/761
             */
            readonly href?: string;
            /** @description Role assigned to the user group. */
            readonly role?: {
                /**
                 * @description Role key.
                 * @example 805
                 */
                readonly key?: string;
                /**
                 * @description Role name.
                 * @example ::SYS::Multi Entity Shared-ROLE-FOR - Aaron
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the role.
                 * @example /objects/company-config/role/805
                 */
                readonly href?: string;
            };
            /** @description User group that has the assigned role. */
            readonly userGroup?: {
                /**
                 * @description User group key.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description User group name.
                 * @example Bypass group
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the user group.
                 * @example /objects/company-config/user-group/1
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Permission definition. */
        "objects.company-config.permission": {
            /**
             * @description System-assigned unique key for the permission. Used to identify the permission in URLs or JSON bodies for all operations on the permission.
             * @example 24
             */
            readonly key?: string;
            /**
             * @description Unique ID for the permission. Same as `key` for this object.
             * @example 24
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the permission.
             * @example /objects/company-config/permission/24
             */
            readonly href?: string;
            module?: components["schemas"]["module"];
            name?: components["schemas"]["permission-name"];
            /**
             * @description The group that a standard permission belongs to.
             * @example activitiesAndLists
             * @enum {string|null}
             */
            readonly permissionGroup?: null | "activitiesAndLists" | "objectIds" | "reports";
            /**
             * @description Allowed access rights for the permission.
             * @example [
             *       "list",
             *       "readonly",
             *       "void"
             *     ]
             */
            readonly allowedAccessRights?: components["schemas"]["permission-access-rights"][];
        };
        /** @description List of permissions assigned to the roles for standard objects. */
        "objects.company-config.role-permission-assignment": {
            /**
             * @description System-assigned key for the role permission assignment.
             * @example 1748
             */
            readonly key?: string;
            /**
             * @description Role permission assignment ID. Same as `key` for this object.
             * @example 1748
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the role permission assignment.
             * @example /objects/company-config/role-permission-assignment/1748
             */
            readonly href?: string;
            /** @description Role that the permission and access rights are assigned to. */
            readonly role?: {
                /**
                 * @description Role key.
                 * @example 528
                 */
                readonly key?: string;
                /**
                 * @description Role ID.
                 * @example ::SYS::Multi Entity Shared-ROLE-FOR - EMP4-US
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the role.
                 * @example /objects/company-config/role/528
                 */
                readonly href?: string;
            };
            /** @description Permission assigned to the role. */
            permission?: {
                /**
                 * @description Permission key.
                 * @example 3295
                 */
                key?: string;
                /**
                 * @description Permission ID.
                 * @example 3295
                 */
                id?: string;
                module?: components["schemas"]["module"];
                /** @description Permission name. */
                name?: string & components["schemas"]["permission-name"];
                /**
                 * @description URL endpoint for the permission.
                 * @example /objects/company-config/permission/3295
                 */
                readonly href?: string;
            };
            /**
             * @description Permission access rights.
             * @example [
             *       "list",
             *       "readonly",
             *       "add",
             *       "modify",
             *       "delete"
             *     ]
             */
            accessRights?: components["schemas"]["permission-access-rights"][];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Provides information about field level changes for a given object. */
        "objects.company-config.audit-history": {
            /**
             * Format: base64url
             * @description System-assigned key for the audit history.
             * @example OTA6MjgwOTU4
             */
            readonly key?: string;
            /**
             * @description Internal audit trail identifier for the modification.
             * @example 12:221
             */
            readonly id?: string;
            changeDetails?: {
                /**
                 * @description Name of the object that was accessed or modified.
                 * @example accounts-payable/vendor
                 */
                readonly objectName?: string;
                /**
                 * @description Unique identifier for the object, which differs based on the object type.
                 * @example 23
                 */
                readonly objectId?: string;
                /**
                 * @description Name for the field that was modified.
                 * @example contactName
                 */
                readonly fieldName?: string;
                /**
                 * @description Value stored in the field before the modification was made.
                 * @example John Doe
                 */
                readonly previousValue?: string;
                /**
                 * @description Value stored in the field after the modification was made.
                 * @example Johnathan Doe
                 */
                readonly newValue?: string;
            };
            changeSource?: {
                /**
                 * @description Source where the access or modification originated.
                 * @example userInterface
                 * @enum {string}
                 */
                readonly source?: "userInterface" | "api" | "csvImport" | "system" | "smartEvent" | "importService" | "copilot";
                /**
                 * @description Login ID of the user who modified the object.
                 * @example Admin
                 */
                readonly completedBy?: string;
                /**
                 * Format: date-time
                 * @description The date and time when the object was accessed.
                 * @example 2024-02-13T11:28:45Z
                 */
                readonly accessDateTime?: string;
                /**
                 * @description The type of the action performed on the object.
                 * @example modify
                 * @enum {string}
                 */
                readonly actionPerformed?: "access" | "create" | "delete" | "modify" | "workflow" | "userAction" | "activity" | "systemAudit";
                /**
                 * @description If the modification made was due to a workflow action, this field contains the identifier for the workflow.
                 * @example 2
                 */
                readonly workflowAction?: string;
                /**
                 * @description IP address of the user who initiated the action.
                 * @example 10.225.1.153
                 */
                readonly clientIPAddress?: string;
                /**
                 * @description Sender ID associated with the API request that triggered the change.
                 * @example sage_sender_01
                 */
                readonly senderId?: string;
                /**
                 * @description Client ID associated with the API request that triggered the change.
                 * @example sage_client_01
                 */
                readonly clientId?: string;
            };
            /**
             * @description System-generated details about the modified record.
             * @example CONTACTNAME:computerstore(Vcomputerstore)
             */
            readonly notes?: string;
            /**
             * @description URL endpoint for the audit history.
             * @example /objects/company-config/audit-history/OTA6MjgwOTU4
             */
            readonly href?: string;
        };
        /** @description Provides information about access to a given object. */
        "objects.company-config.advanced-audit-history": {
            /**
             * Format: base64url
             * @description System-assigned key for the advanced audit history.
             * @example OTA6MjgwOTU4
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the advanced audit history.
             * @example 103:305:DISPLAYCONTACT.INITIAL:JohnDoe
             */
            readonly id?: string;
            accessDetails?: {
                /**
                 * @description Name of the object that was accessed or modified. This value is `null` if the audit is related to an administrative task, such as a password change.
                 * @example company-config/contact
                 * @enum {string}
                 */
                readonly objectName?: "company-config/contact" | "accounts-payable/vendor" | "accounts-receivable/customer" | null;
                /**
                 * @description Unique identifier for the object.
                 * @example 23
                 */
                readonly objectId?: string;
            };
            accessSource?: {
                /**
                 * @description Login ID of the user who modified the object.
                 * @example Admin
                 */
                readonly completedBy?: string;
                /**
                 * Format: date-time
                 * @description Date and time when the object was accessed.
                 * @example 2024-02-13T11:28:45Z
                 */
                readonly accessDateTime?: string;
                /**
                 * @description The type of the action performed on the object.
                 * @example personalData
                 * @enum {string}
                 */
                readonly actionPerformed?: "personalDataAccess" | "dataChange";
                /**
                 * @description If the modification made was due to a workflow action, this field contains the identifier for the workflow.
                 * @example 5
                 */
                readonly workflowAction?: string;
                /**
                 * @description IP address of the user who initiated the action.
                 * @example 10.225.1.153
                 */
                readonly clientIPAddress?: string;
                /**
                 * @description Source where the access or modification originated.
                 * @example userInterface
                 * @enum {string}
                 */
                readonly source?: "userInterface" | "api" | "csvImport" | "system" | "smartEvent" | "importService" | "copilot";
            };
            /**
             * @description URL endpoint for the advanced audit history.
             * @example /objects/company-config/advanced-audit-history/OTA6MjgwOTU4
             */
            readonly href?: string;
        };
        /** @description Cloud storage defines targets for delivery of report output. */
        "objects.company-config.cloud-storage": {
            /**
             * @description System-assigned key for the cloud storage.
             * @example 44
             */
            readonly key?: string;
            /**
             * @description Name for the cloud storage.
             * @example Amazon Storage Plan
             */
            id?: string;
            /**
             * @description Endpoint URL for the cloud storage.
             * @example /objects/company-config/cloud-storage/44
             */
            readonly href?: string;
            /**
             * @description Cloud storage targets supported for Intacct report delivery.
             * @example box
             * @enum {string}
             */
            storageType?: "http" | "dropbox" | "googleDrive" | "box" | "aws" | "oneDrive" | "azureStorage";
            /**
             * @description Set internally at the time of delivery service creation. If the `storageType' field is set to:
             *
             *     * `http`, `aws`, or `azureStorage` - this field is set to `active`
             *     * 'googleDrive', 'box', or 'oneDrive' - based on the OAuth authorization token, this field is set to `loggedIn` or `loggedOut`
             *     * 'dropbox' - based on the OAuth secret, this field is set to `loggedIn` or `loggedOut`
             * @example loggedIn
             * @enum {string}
             */
            readonly state?: "loggedIn" | "loggedOut" | "active";
            /**
             * @description The email address where any error reports for the cloud storage target are sent.
             * @example john.doe@sage.com
             */
            errorNotificationEmail?: string;
            /** @description For report output delivered to another application using an HTTP POST request. */
            httpStorage?: {
                /**
                 * @description Complete address where the report output is sent starting with `http` or `https`.
                 * @example https://intacctdev1.blob.core.windows.net/?sv=2022-11-02&ss=bfqt&srt=co&sp=rwdlacupiytfx&se=2023-12-05T14:22:30Z&st=2023-12-05T06:22:30Z&spr=https,http&sig=lxcTbphsbi3Gj5hhzBeO1mQ55yHIyVue9IUmZVl13s8%3D
                 */
                addressOrURL?: string;
                /**
                 * @description User name for the HTTP storage service.
                 * @example Admin
                 */
                userName?: string;
                /**
                 * @description Password for the HTTP storage service.
                 * @example ExmPass!123
                 */
                password?: string;
            };
            /**
             * @description Number of deliveries in queued state.
             * @example 2
             */
            readonly queuedCount?: number;
            /**
             * @description Private targets can be used only by the owner of the target and any administrators.
             * @default true
             * @example true
             */
            isPrivate?: boolean;
            /**
             * @description The location relative to the top level of the cloud storage target, where reports are to be delivered.
             * @example /
             */
            path?: string;
            /**
             * Format: date-time
             * @description Date and time of the most recent delivery.
             * @example 2023-01-12T18:08:58Z
             */
            readonly lastDeliveryDateTime?: string;
            /**
             * @description The status of the most recent delivery.
             * @example Delivery error
             */
            lastDeliveryStatus?: string;
            /** @description Storage details for report output delivered to Amazon. */
            awsStorage?: {
                /**
                 * @description Bucket for your company in your Amazon S3 account.
                 * @example S3
                 */
                s3Bucket?: string;
                /**
                 * @description Indicates whether to enable encryption for Amazon cloud storage.
                 * @default false
                 * @example false
                 */
                enableEncryption?: boolean;
                /**
                 * @description Restrict file access to one of the following:
                 *
                 *     * `bucketOwnersOnly` - restricts file access to the Amazon S3 bucket owner and the account owner
                 *     * `authenticatedUsers` -  allows any Amazon Web Services user access to the file with the Amazon S3 file URL
                 *     * `public` - unrestricted
                 * @default bucketOwnerOnly
                 * @example bucketOwnerOnly
                 * @enum {string}
                 */
                restrictFileAccess?: "public" | "authenticatedUsers" | "bucketOwnerOnly";
            };
            /** @description The user who owns the cloud storage target. */
            owner?: {
                /**
                 * @description Sysstem-assigned key for the user.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the user.
                 * @example Admin
                 */
                id?: string;
                /**
                 * @description The name for the user.
                 * @example ADMIN
                 */
                readonly userName?: string;
                /**
                 * @description Endpoint URL for the user.
                 * @example /objects/company-config/user/1
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "company-config-cloud-storageRequiredProperties": Record<string, never>;
        /** @description Use company messages to share short announcements or reminders with users in a company. */
        "objects.company-config.company-message": {
            /**
             * @description System-assigned unique key for the company message.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the company message. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the company message.
             * @example /objects/company-config/company-message/23
             */
            readonly href?: string;
            /**
             * Format: date
             * @description The date the company message was created.
             * @example 2025-08-10
             */
            readonly createdDate?: string;
            /**
             * Format: date
             * @description The date the company message was last updated.
             * @example 2025-08-10
             */
            readonly lastUpdatedDate?: string;
            /**
             * Format: date
             * @description The date the company message expires.
             * @example 2025-09-19
             */
            expirationDate?: string;
            /**
             * @description Subject or title for the company message.
             * @example Weekly office hours
             */
            subject?: string;
            /**
             * @description Specifies the type of users permitted to view the message.
             * @default allUsers
             * @example allUsers
             * @enum {string}
             */
            viewLevel?: "allUsers" | "businessUsers" | "administrators";
            /**
             * @description Priority level for the company message.
             * @default urgent
             * @example high
             * @enum {string}
             */
            priority?: "urgent" | "high" | "normal";
            /**
             * @description Contents of the company message.
             * @example New office hours will be effective starting next week
             */
            message?: string;
            /** @description Reference to the user associated with the company message. */
            readonly postedBy?: {
                /**
                 * @description System-assigned key for the user.
                 * @example 1
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the user.
                 * @example Admin
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/1
                 */
                readonly href?: string;
            };
            /** @description Reference to the entity associated with the company message. */
            entity?: {
                /**
                 * @description System-assigned key for the entity.
                 * @example 54
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example 313131
                 */
                id?: string;
                /**
                 * @description Name for the entity.
                 * @example Central Region
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/54
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
        };
        "company-config-company-messageRequiredProperties": Record<string, never>;
        /** @description A cover letter is a document that you can include in a group of reports. When you send the group of reports, use the cover letter to introduce the reports and describe what information they contain. In Intacct, you can create a cover letter and include it in a memorized report group. */
        "objects.company-config.cover-letter-template": {
            /**
             * @description System-assigned unique key for the cover letter template.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the cover letter template. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the cover letter template.
             * @example /objects/company-config/cover-letter-template/23
             */
            readonly href?: string;
            /**
             * @description Name for the cover letter template.
             * @example Application cover letter
             */
            name?: string;
            /**
             * @description Description for the cover letter template.
             * @example The cover letter provides information about the application
             */
            description?: string;
            /**
             * @description Indicates whether the cover letter template is the default template.
             * @default false
             * @example true
             */
            isDefault?: boolean;
            /** @description File that contains the cover letter template. */
            file?: {
                /**
                 * Format: base64zip
                 * @description The cover letter template content in Microsoft Word format.
                 * @example UEsDBBQABgAIAAAAIQDfpNJsWgEAACAFAAATAAgCW0NvbnRlbnRfVHlwZXNdLnhtbCCiBAIooAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0lMtuwjAQRfeV+g+Rt1Vi6KKqKgKLPpYtUukHGHsCVv2Sx7z+vhMCUVUBkQpsIiUz994zVsaD0dqabAkRtXcl6xc9loGTXmk3K9nX5C1/ZBkm4ZQw3kHJNoBsNLy9GUw2ATAjtcOSzVMKT5yjnIMVWPgAjiqVj1Ykeo0zHoT8FjPg973eA5feJXApT7UHGw5eoBILk7LXNX1uSCIYZNlz01hnlUyEYLQUiep86dSflHyXUJBy24NzHfCOGhg/mFBXjgfsdB90NFEryMYipndhqYuvfFRcebmwpCxO2xzg9FWlJbT62i1ELwGRztyaoq1Yod2e/ygHpo0BvDxF49sdDymR4BoAO+dOhBVMP69G8cu8E6Si3ImYGrg8RmvdCZFoA6F59s/m2NqciqTOcfQBaaPjP8ber2ytzmngADHp039dm0jWZ88H9W2gQB3I5tv7bfgDAAD//wMAUEsDBBQABgAIAAAAIQAekRq37wAAAE4CAAALAAgCX3JlbHMvLnJlbHMgogQCKKAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArJLBasMwDEDvg/2D0b1R2sEYo04vY9DbGNkHCFtJTBPb2GrX/v082NgCXelhR8vS05PQenOcRnXglF3wGpZVDYq9Cdb5XsNb+7x4AJWFvKUxeNZw4gyb5vZm/cojSSnKg4tZFYrPGgaR+IiYzcAT5SpE9uWnC2kiKc/UYySzo55xVdf3mH4zoJkx1dZqSFt7B6o9Rb6GHbrOGX4KZj+xlzMtkI/C3rJdxFTqk7gyjWop9SwabDAvJZyRYqwKGvC80ep6o7+nxYmFLAmhCYkv+3xmXBJa/ueK5hk/Nu8hWbRf4W8bnF1B8wEAAP//AwBQSwMEFAAGAAgAAAAhANNRGms6AwAAagwAABEAAAB3b3JkL2RvY3VtZW50LnhtbKSX247bIBBA3yv1Hyy/J9hxrtYmK+0l1T5UWjW7H0Awsa0Fg4DESb++gy9xtm5XjiNFwcDMmWEYxvju/siZc6BKpyJbuv7Qcx2aERGlWbx039/Wg7nraIOzCDOR0aV7otq9X33/dpeHkSB7TjPjACLTYS7J0k2MkSFCmiSUYz3kKVFCi50ZEsGR2O1SQlEuVIRGnu8VT1IJQrUGe484O2DtVjhy7EaLFM5B2QLHiCRYGXpsGP7VkAlaoHkbNOoBghWO/DYquBo1RdarFmjcCwRetUiTfqR/LG7ajzRqk2b9SEGbNO9HaqUTbye4kDSDyZ1QHBvoqhhxrD72cgBgiU26TVlqTsD0pjUGp9lHD49A60zgQXQ1YYa4iCgLopoilu5eZWGlPzjrW9fDUr9qzhqUdTML5haIHg3TptZVXWJXqj9VhaWIGlKUQRxFppNUnqsD70uDyaSGHL4KwIGzWi6Xfsej9r/S9lRuQwPs4n61d5yVnn9N9L0Ou2kRZ40uLny2WXvCIYMbw71CcxFcv2PxqQGjFmBKaMeXRc2YVwxEmtNtOWnHY1Vzyl2xnLQJrN+xBv7tzAVARyZKrqKM6rgiq4sNTrA+J7ol0uucmpxxJ34RIxnfdhB+KLGXDS29jfbSlMTcXk6uYFUH6vKQ69uc2SRYQqXkJHyJM6HwloFHcDwcyHCn2AH7D4lim+KRHotxu9eOrTHuCm5VWxGdbCthbhxKrPALJOXIf/YfFrPALUbhnWTsaBBMZrPnB7iz5SHc4KJfS9fzZsHYW1vBcuhV2cFgPQrWjdwT3eE9M3bmcTIeP5em5auyjSobhrMY5A8Yaj7NBu8bF63uUDWNGumuKnlY3BRDLTGByEhFNVUH6q7eklQ78LOSppQvmJeLqvy/2dYGc8loy9QV3BURcF12GDWGquEnkA2KldGUmNdP7n+1J0Xk481vmISa7PsLe1PIQzj+/nQezK15K/ATW6IR8Orwx+NyK9M4MU13K4wRvOkzuruYTSiOKNideXPb3QlhLrrx3i4HvCrNEcE0jFbhszLFMNz4fyibwCFLM/qaGgJeBtNCCdXrLh7LLEbNR8LqDwAAAP//AwBQSwMEFAAGAAgAAAAhANZks1H0AAAAMQMAABwACAF3b3JkL19yZWxzL2RvY3VtZW50LnhtbC5yZWxzIKIEASigAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArJLLasMwEEX3hf6DmH0tO31QQuRsSiHb1v0ARR4/qCwJzfThv69ISevQYLrwcq6Yc8+ANtvPwYp3jNR7p6DIchDojK971yp4qR6v7kEQa1dr6x0qGJFgW15ebJ7Qak5L1PWBRKI4UtAxh7WUZDocNGU+oEsvjY+D5jTGVgZtXnWLcpXndzJOGVCeMMWuVhB39TWIagz4H7Zvmt7ggzdvAzo+UyE/cP+MzOk4SlgdW2QFkzBLRJDnRVZLitAfi2Myp1AsqsCjxanAYZ6rv12yntMu/rYfxu+wmHO4WdKh8Y4rvbcTj5/oKCFPPnr5BQAA//8DAFBLAwQUAAYACAAAACEAtvRnmNIGAADJIAAAFQAAAHdvcmQvdGhlbWUvdGhlbWUxLnhtbOxZS4sbRxC+B/IfhrnLes3oYaw10kjya9c23rWDj71Sa6atnmnR3dq1MIZgn3IJBJyQQwy55RBCDDHE5JIfY7BJnB+R6h5JMy31xI9dgwm7glU/vqr+uqq6ujRz4eL9mDpHmAvCko5bPVdxHZyM2JgkYce9fTAstVxHSJSMEWUJ7rgLLNyLO59/dgGdlxGOsQPyiTiPOm4k5ex8uSxGMIzEOTbDCcxNGI+RhC4Py2OOjkFvTMu1SqVRjhFJXCdBMai9MZmQEXYOlEp3Z6V8QOFfIoUaGFG+r1RjQ0Jjx9Oq+hILEVDuHCHacWGdMTs+wPel61AkJEx03Ir+c8s7F8prISoLZHNyQ/23lFsKjKc1LcfDw7Wg5/leo7vWrwFUbuMGzUFj0Fjr0wA0GsFOUy6mzmYt8JbYHChtWnT3m/161cDn9Ne38F1ffQy8BqVNbws/HAaZDXOgtOlv4f1eu9c39WtQ2mxs4ZuVbt9rGngNiihJplvoit+oB6vdriETRi9b4W3fGzZrS3iGKueiK5VPZFGsxege40MAaOciSRJHLmZ4gkaACxAlh5w4uySMIPBmKGEChiu1yrBSh//q4+mW9ig6j1FOOh0aia0hxccRI05msuNeBa1uDvLqxYuXj56/fPT7y8ePXz76dbn2ttxllIR5uTc/ffPP0y+dv3/78c2Tb+14kce//uWr13/8+V/qpUHru2evnz979f3Xf/38xALvcnSYhx+QGAvnOj52brEYNmhZAB/y95M4iBDJS3STUKAEKRkLeiAjA319gSiy4HrYtOMdDunCBrw0v2cQ3o/4XBIL8FoUG8A9xmiPceuerqm18laYJ6F9cT7P424hdGRbO9jw8mA+g7gnNpVBhA2aNym4HIU4wdJRc2yKsUXsLiGGXffIiDPBJtK5S5weIlaTHJBDI5oyocskBr8sbATB34Zt9u44PUZt6vv4yETC2UDUphJTw4yX0Fyi2MoYxTSP3EUyspHcX/CRYXAhwdMhpswZjLEQNpkbfGHQvQZpxu72PbqITSSXZGpD7iLG8sg+mwYRimdWziSJ8tgrYgohipybTFpJMPOEqD74ASWF7r5DsOHut5/t25CG7AGiZubcdiQwM8/jgk4Qtinv8thIsV1OrNHRm4dGaO9iTNExGmPs3L5iw7OZYfOM9NUIssplbLPNVWTGquonWECtpIobi2OJMEJ2H4esgM/eYiPxLFASI16k+frUDJkBXHWxNV7paGqkUsLVobWTuCFiY3+FWm9GyAgr1Rf2eF1ww3/vcsZA5t4HyOD3loHE/s62OUDUWCALmAMEVYYt3YKI4f5MRB0nLTa3yk3MQ5u5obxR9MQkeWsFtFH7+B+v9oEK49UPTy3Y06l37MCTVDpFyWSzvinCbVY1AeNj8ukXNX00T25iuEcs0LOa5qym+d/XNEXn+aySOatkzioZu8hHqGSy4kU/Alo96NFa4sKnPhNC6b5cULwrdNkj4OyPhzCoO1po/ZBpFkFzuZyBCznSbYcz+QWR0X6EZrBMVa8QiqXqUDgzJqBw0sNW3WqCzuM9Nk5Hq9XVc00QQDIbh8JrNQ5lmkxHG83sAd5ave6F+kHrioCSfR8SucVMEnULieZq8C0k9M5OhUXbwqKl1Bey0F9Lr8Dl5CD1SNz3UkYQbhDSY+WnVH7l3VP3dJExzW3XLNtrK66n42mDRC7cTBK5MIzg8tgcPmVftzOXGvSUKbZpNFsfw9cqiWzkBpqYPecYzlzdBzUjNOu4E/jJBM14BvqEylSIhknHHcmloT8ks8y4kH0kohSmp9L9x0Ri7lASQ6zn3UCTjFu11lR7/ETJtSufnuX0V97JeDLBI1kwknVhLlVinT0hWHXYHEjvR+Nj55DO+S0EhvKbVWXAMRFybc0x4bngzqy4ka6WR9F435IdUURnEVreKPlknsJ1e00ntw/NdHNXZn+5mcNQOenEt+7bhdRELmkWXCDq1rTnj493yedYZXnfYJWm7s1c117luqJb4uQXQo5atphBTTG2UMtGTWqnWBDklluHZtEdcdq3wWbUqgtiVVfq3taLbXZ4DyK/D9XqnEqhqcKvFo6C1SvJNBPo0VV2uS+dOScd90HF73pBzQ9KlZY/KHl1r1Jq+d16qev79erAr1b6vdpDMIqM4qqfrj2EH/t0sXxvr8e33t3Hq1L73IjFZabr4LIW1u/uq7Xid/cOAcs8aNSG7Xq71yi1691hyev3WqV20OiV+o2g2R/2A7/VHj50nSMN9rr1wGsMWqVGNQhKXqOi6LfapaZXq3W9Zrc18LoPl7aGna++V+bVvHb+BQAA//8DAFBLAwQUAAYACAAAACEA3o/UTTAEAAAMDAAAEQAAAHdvcmQvc2V0dGluZ3MueG1stFbbbts4EH1fYP/B0PM6uliWE6FOEcfRJkXcFnUW+0xJlEWEF4Gk7LjF/vsOKdFymrRIWuTFpubMnBlShzN69/6B0dEWS0UEn3vhSeCNMC9ESfhm7v1zl41PvZHSiJeICo7n3h4r7/35n3+826UKaw1uagQUXKWsmHu11k3q+6qoMUPqRDSYA1gJyZCGR7nxGZL3bTMuBGuQJjmhRO/9KAgSr6cRc6+VPO0pxowUUihRaROSiqoiBe7/XIR8Sd4uZCmKlmGubUZfYgo1CK5q0ijHxn6VDcDakWx/tokto85vFwYv2O5OyPIQ8ZLyTEAjRYGVghfEqCuQ8CFx/ITokPsEcvdbtFQQHgZ2dVz59HUE0ROCpMAPr+M47Tl8iDzmIeXreJIDDxkONkx+rZgjAlXqsn4VS+TO1TexSKMaqYOKDCN+XVHTA92eDWek6EtU00G3JJdIdneylwwr0psNFxLlFMoB6Yzg7Y9sdeYXDtH82SV+sHZzDt459IivQrDRLm2wLOCiQIMJAs83AMhTVGuNNFCkG4kYNIa5V1CMeOdQ4gq1VN+hfK1FA05bBLuYRX18USOJCo3lukEFiPxScC0FdX6l+Cj0JTQZCXegj7AtZ1itu/YFERwx2NejlrQSJfSXXdpK8vIXYAJs9nB6nPL7RALarSQlvjPnudZ7ijMofk2+4gtefmiVJsBoG9NvVPCzAjA3mT+BAu72Dc4w0i0c0xsls28io6RZESmFvOElCOHNkpGqwhISEBDWCuRDpNjZc77GqIQp90Z5W4X/BWe4gJM7kOX9Qmgt2PW+qeGsf+9NWr37x/KFWV0qt/gihD64BmeTSTBbdJUadEAmWTTJ+rvzGJlN4iCbPIf8mO0si7Pl7DnkchrHV3Ffc18pS81s/Czdysh9xLqIS8RySdBoZaanbzxyeb8g3OE5hhaFj5F1mztwPO4AxRClGRy8A+xGWVoS1SxxZdd0heRm4O095LNW6D0fDlymcWH5txRt06E7iZpOxs4ljOM+knB9S5izqzZfuygOTfUIann5aSvtOQ3Hs0s1yMK2g1tk5WV9MR/ffOzlR+XaSAevUNN0Csw34dyjZFPr0IhGw1MJH1n2Id9EPRZZLOow+4AKszPw7heDLXK2I7+Js00GW+xs8WCbOtt0sCXOlhhbDT1HUsLv4TK4pbFXglKxw+X1gD8xdYegatTgZTcfQF6iM/QDQ422KX6AUYNLouHbtSElQw9m8kSJCe+9KdqLVj/yNZhxbh4zmKncX3//UbCV+He1mLlVEJDjes/yYRyddIVToqB1NDC5tJAO+8tiYZyWorgxkzTuRRWEy4vwdNnBUzvxtO0u8N6/4GqBFC57zIVOu9BvsyCMZ8uzxThJLpJxfHVxNj6bnC7G0ySeXU2jbBkvr/7rL6n7jD//HwAA//8DAFBLAwQUAAYACAAAACEAQ6RslocLAAAPcwAADwAAAHdvcmQvc3R5bGVzLnhtbLydW3PbuhHH3zvT78DRU/uQyFc5yRznjOMktae2j0/kNM8QCVmoQULlxZd++gIgJUFeguKCW78k1mV/APHHf4nlTb/9/pzK6JHnhVDZ6Wj//d4o4lmsEpHdn45+3n1/92EUFSXLEiZVxk9HL7wY/f75r3/57elTUb5IXkQakBWf0vh0tCjL5afxuIgXPGXFe7Xkmf5wrvKUlfplfj9OWf5QLd/FKl2yUsyEFOXL+GBvbzJqMHkfiprPRcy/qrhKeVba+HHOpSaqrFiIZbGiPfWhPak8WeYq5kWhNzqVNS9lIltj9o8AKBVxrgo1L9/rjWl6ZFE6fH/P/pXKDeAYBzgAgEnMn3GMDw1jrCNdjkhwnMmaIxKHE9YZB1AkZbJAUQ5W4zo2saxkC1YsXCLHdep4jXtJzRil8afL+0zlbCY1SaseaeEiCzb/6u03/9k/+bN932zC6LP2QqLir3zOKlkW5mV+mzcvm1f2v+8qK4vo6RMrYiHudAd1K6nQDV6cZYUY6U84K8qzQrDWDxfmj9ZP4qJ03v4iEjEamxaL/+oPH5k8HR0crN45Nz3Yek+y7H71Hs/eXd64PbFv/Zyat2aaezpi+bvpmQkcNxtW/+9s7vL1K9vwksXCtsPmJdc235/sGagUJqscHH9cvfhRmcFnVamaRiyg/n+NHYMR1+7XuWBapyT9KZ9fqfiBJ9NSf3A6sm3pN39e3uZC5TrtnI4+2jb1m1OeiguRJDxzvpgtRMJ/LXj2s+DJ5v0/v9vU0bwRqyrTfx+eTOwskEXy7TnmS5OI9KcZM5rcmABpvl2JTeM2/D8r2H6jRFv8gjOTjaP91wjbfRTiwEQUzta2M6tX226/hWro8K0aOnqrho7fqqHJWzV08lYNfXirhizm/9mQyBKd+O33YTOAuovjcSOa4zEbmuPxEprjsQqa43ECmuOZ6GiOZx6jOZ5piuCUKvbNQmeyH3pmezd39z4ijLt7lxDG3b0HCOPuTvhh3N35PYy7O52HcXdn7zDu7mSN59ZLrehS2ywrB7tsrlSZqZJHJX8eTmOZZtkSlYZndno8J9lIAkyd2Zod8WBazOzr3TPEmjR8f16aSi9S82gu7qucF4M7zrNHLtWSRyxJNI8QmPOyyj0jEjKncz7nOc9iTjmx6aCmEoyyKp0RzM0luydj8SwhHr4VkSQprCe0rp8XxiSCYFKnLM7V8K4pRpYfrkQxfKwMJPpSScmJWDc0U8yyhtcGFjO8NLCY4ZWBxQwvDBzNqIaooRGNVEMjGrCGRjRu9fykGreGRjRuDY1o3Bra8HG7E6W0Kd5ddez3P3Z3LpU5qTC4H1NxnzG9ABi+u2mOmUa3LGf3OVsuInNUuh3rbjO2nS8qeYnuKPZpaxLVut5OkXO91SKrhg/oFo3KXGsekb3WPCKDrXnDLXatl8lmgXZBU89Mq1nZalpL6mXaKZNVvaAd7jZWDp9hGwN8F3lBZoN2LMEMvjHLWSMnRebb9HJ4xzas4bZ6nZVIu9cgCXopVfxAk4YvXpY812XZw2DSdyWleuIJHXFa5qqea67lD6wkvSz/LV0uWCFsrbSF6L+rX12OEF2z5eANupVMZDS6fXuXMiEjuhXExd31VXSnlqbMNANDA/yiylKlZMzmSODffvHZ32k6eKaL4OyFaGvPiA4PWdi5INjJ1CSVEJH0MlNkgmQfann/5C8zxfKEhnab8/oKoJITEacsXdaLDgJv6bz4pPMPwWrI8v7FcmGOC1GZ6o4E5hw2LKrZv3k8PNXdqIjkyNAfVWmPP9qlro2mww1fJmzhhi8RrJp692DmL8HGbuGGb+wWjmpjzyUrCuE9hRrMo9rcFY96e4cXfw1PSZXPK0k3gCsg2QiugGRDqGSVZgXlFlse4QZbHvX2Ek4ZyyM4JGd5/8hFQiaGhVEpYWFUMlgYlQYWRirA8Ct0HNjwy3Qc2PBrdWoY0RLAgVHNM9LdP9FZHgdGNc8sjGqeWRjVPLMwqnl2+DXi87leBNPtYhwk1ZxzkHQ7mqzk6VLlLH8hQn6T/J4RHCCtabe5mptbQ1RWX8RNgDTHqCXhYrvGUYn8i8/IumZYlP0iOCLKpFSK6NjaZodjI7evXdsVZu/kGNyFW8livlAy4blnm/yxul6e1rdlvO6+7Uavw55X4n5RRtPF+mi/i5ns7YxcFexbYbsbbBvzyep+lrawa56IKl11FN5MMTnsH2xn9Fbw0e7gzUpiK/K4ZyRsc7I7crNK3oo86RkJ2/zQM9L6dCuyyw9fWf7QOhFOuubPusbzTL6Trlm0Dm5ttmsirSPbpuBJ1yzaskp0FsfmbAFUp59n/PH9zOOPx7jIT8HYyU/p7Ss/ostgP/ijMHt2TNK07a2vngB53y6ie2XOPytVH7ffOuHU/6auS71wygoetXIO+5+42soy/nHsnW78iN55x4/onYD8iF6ZyBuOSkl+Su/c5Ef0TlJ+BDpbwT0CLlvBeFy2gvEh2QpSQrLVgFWAH9F7OeBHoI0KEWijDlgp+BEoo4LwIKNCCtqoEIE2KkSgjQoXYDijwnicUWF8iFEhJcSokII2KkSgjQoRaKNCBNqoEIE2auDa3hseZFRIQRsVItBGhQi0Ue16cYBRYTzOqDA+xKiQEmJUSEEbFSLQRoUItFEhAm1UiEAbFSJQRgXhQUaFFLRRIQJtVIhAG7W+1TDcqDAeZ1QYH2JUSAkxKqSgjQoRaKNCBNqoEIE2KkSgjQoRKKOC8CCjQgraqBCBNipEoI1qTxYOMCqMxxkVxocYFVJCjAopaKNCBNqoEIE2KkSgjQoRaKNCBMqoIDzIqJCCNipEoI0KEV3zszlF6bvMfh9/1NN7xX7/U1dNp364t3K7qMP+qFWv/Kz+9yJ8Ueohar3x8NDWG/0gYiaFsoeoPafVXa69JAJ14vOP8+47fFz6wIcuNfdC2HOmAH7UNxIcUznqmvJuJCjyjrpmuhsJVp1HXdnXjQS7waOupGt9ubooRe+OQHBXmnGC9z3hXdnaCYdD3JWjnUA4wl2Z2QmEA9yVj53A48gk59fRxz3HabK+vhQQuqajQzjxE7qmJdRqlY6hMfqK5if0Vc9P6Cujn4DS04vBC+tHoRX2o8KkhjbDSh1uVD8BKzUkBEkNMOFSQ1Sw1BAVJjVMjFipIQErdXhy9hOCpAaYcKkhKlhqiAqTGu7KsFJDAlZqSMBKPXCH7MWESw1RwVJDVJjUcHGHlRoSsFJDAlZqSAiSGmDCpYaoYKkhKkxqUCWjpYYErNSQgJUaEoKkBphwqSEqWGqI6pLaHkXZkhqlsBOOW4Q5gbgdshOIS85OYEC15EQHVksOIbBaglqtNMdVS65ofkJf9fyEvjL6CSg9vRi8sH4UWmE/KkxqXLXUJnW4Uf0ErNS4askrNa5a6pQaVy11So2rlvxS46qlNqlx1VKb1OHJ2U8IkhpXLXVKjauWOqXGVUt+qXHVUpvUuGqpTWpctdQm9cAdshcTLjWuWuqUGlct+aXGVUttUuOqpTapcdVSm9S4askrNa5a6pQaVy11So2rlvxS46qlNqlx1VKb1LhqqU1qXLXklRpXLXVKjauWOqXGVUvXOkQQPAJqmrK8jOieF3fBikXJhj+c8GeW80LJR55EtJt6hdrK8dPWz18Ztv1tPv39Uo+ZeQK6c7tSUj8BtgHaL14m65+pMsGmJ1Hzg2DN27bDzenaukUbCJuKF7qtuHl2laep5hm065uo7BNoXzfseVCt7chmAq6+3QzpZrzq722NVme/SzPhO/psDdE5RrVnfB382CSBXT3U/ZnJ+ifT9B+XWaIBT83PhdU9TZ5ZjdKfn3Mpr1n9bbX0f1XyeVl/ur9nH1nw6vNZ/fQ9b3xu07QXMN7uTP2y+dk2z3jXz+Nvrh/wTkmTi1qG217MMnSkN31b/VV8/h8AAAD//wMAUEsDBBQABgAIAAAAIQDvCilOTgEAAH4DAAAUAAAAd29yZC93ZWJTZXR0aW5ncy54bWyc019rwjAQAPD3wb5DybumyhQpVmEMx17GYNsHiOnVhiW5kour7tPv2qlz+GL3kv/34y4h8+XO2eQTAhn0uRgNU5GA11gYv8nF+9tqMBMJReULZdFDLvZAYrm4vZk3WQPrV4iRT1LCiqfM6VxUMdaZlKQrcIqGWIPnzRKDU5GnYSOdCh/beqDR1SqatbEm7uU4TafiwIRrFCxLo+EB9daBj128DGBZRE+VqemoNddoDYaiDqiBiOtx9sdzyvgTM7q7gJzRAQnLOORiDhl1FIeP0m7k7C8w6QeML4Cphl0/Y3YwJEeeO6bo50xPjinOnP8lcwZQEYuqlzI+3qtsY1VUlaLqXIR+SU1O3N61d+R09rTxGNTassSvnvDDJR3ctlx/23VD2HXrbQliwR8C62ic+YIVhvuADUGQ7bKyFpuX50eeyD+/ZvENAAD//wMAUEsDBBQABgAIAAAAIQCv6f6G8AEAAHoGAAASAAAAd29yZC9mb250VGFibGUueG1s3JPBjpswEIbvlfoOyPcNhoRsipas1HYjVap6qLYP4BgD1mIbeZyQvH3HhrCRopWWHnpYDsb84/mY+RkeHk+qjY7CgjS6IMmCkkhobkqp64L8ed7dbUgEjumStUaLgpwFkMft508PfV4Z7SDCfA254gVpnOvyOAbeCMVgYTqhMVgZq5jDR1vHitmXQ3fHjeqYk3vZSneOU0rXZMTY91BMVUkuvht+UEK7kB9b0SLRaGhkBxda/x5ab2zZWcMFAPas2oGnmNQTJlndgJTk1oCp3AKbGSsKKExPaNip9hWQzQOkN4A1F6d5jM3IiDHzmiPLeZz1xJHlFeffirkCQOnKZhYlvfga+1zmWMOguSaKeUVlE+6svEeK5z9qbSzbt0jCrx7hh4sC2K/Yv7+FrTgF3bdAtuOvEPW5Zgozv7FW7q0MgY5pAyLB2JG1BcEedjSjvpeUrujSryT2B3nDLAgPGQ7SQa6Yku35okIvAYZAJx1vLvqRWemrHkIgawwcYE8L8rSiNH3a7cigJFgdzne6uv86Kql/V7i+jMpyUqhXeOCEx2Tg8MCZzuA748GBGyeepRIQ/RJ99Nsopt9wJKVrdCJDP7wzy1mO2MCd5Qi9cQSV+032XxwZZyP6KevGvTkhfi4+6ISMG9j+BQAA//8DAFBLAwQUAAYACAAAACEA50z8tIYBAADzAgAAEQAIAWRvY1Byb3BzL2NvcmUueG1sIKIEASigAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfJJdT8MgFIbvTfwPDdd20E7NbLoaP6I3mpg448cdwnHDtUDgbHX/XtpunTXGOw7n4cnhhfz8qyqjNTivjJ6SZMRIBFoYqfR8Sp5mN/GERB65lrw0GqZkA56cF4cHubCZMA4enLHgUIGPgkn7TNgpWSDajFIvFlBxPwqEDs0P4yqOoXRzarlY8jnQlLFTWgFyyZHTRhjb3ki2Sil6pV25shVIQaGECjR6mowSumcRXOX/PNB2fpCVwo2FP9Fds6e/vOrBuq5H9bhFw/wJfbm/e2yvGivdZCWAFLkUGSosocjpfhlWfvX+CQK77b4Ia+GAo3HFrQG95EfRLdfgFy22azWhL2FTGyd9EAyqgEnwwimL4Sk7/WAj0CX3eB/e9kOBvNwUryH19VF0seZyscLW94toDjlYq+Z3FMct0Zf5NupuOpBRiCjrAt11nsdX17MbUqQsTWM2iVkyY2dZmmSMvTUDDs7vhdV2gP+NxzEbx0k6S1h2cjY07gRdRsNvWnwDAAD//wMAUEsDBBQABgAIAAAAIQAIwGUTcQEAAMcCAAAQAAgBZG9jUHJvcHMvYXBwLnhtbCCiBAEooAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJxSy07DMBC8I/EPUe7UaQVVhTZGqBXiwEtqWs6WvUksHNuyDaJ/z4a0IYgbPu3Mekcza8PNZ2eyDwxRO1vm81mRZ2ilU9o2Zb6r7i5WeRaTsEoYZ7HMDxjzG35+Bi/BeQxJY8xIwsYyb1Py14xF2WIn4ozaljq1C51IBEPDXF1riRsn3zu0iS2KYsnwM6FVqC78KJgPitcf6b+iysneX9xXB096HCrsvBEJ+VM/aWbKpQ7YyELlkjCV7pDPiR4BvIgGY88NBby6oCK/BDYUsG5FEDLR/vjiCtgEwq33RkuRaLH8UcvgoqtT9vztNuvHgU2vACXYonwPOh14AWwK4UHbwcZQkK0gmiB8e/Q2IthKYXBN2XktTERgPwSsXeeFJTk2VqT3Fne+cpt+DceR3+Qk46tO7dYLSRYWq2naSQO2xKIi+6ODkYB7eo5genmatQ2q052/jX5/++Ff8vlyVtD5XtiJo9jjh+FfAAAA//8DAFBLAQItABQABgAIAAAAIQDfpNJsWgEAACAFAAATAAAAAAAAAAAAAAAAAAAAAABbQ29udGVudF9UeXBlc10ueG1sUEsBAi0AFAAGAAgAAAAhAB6RGrfvAAAATgIAAAsAAAAAAAAAAAAAAAAAkwMAAF9yZWxzLy5yZWxzUEsBAi0AFAAGAAgAAAAhANNRGms6AwAAagwAABEAAAAAAAAAAAAAAAAAswYAAHdvcmQvZG9jdW1lbnQueG1sUEsBAi0AFAAGAAgAAAAhANZks1H0AAAAMQMAABwAAAAAAAAAAAAAAAAAHAoAAHdvcmQvX3JlbHMvZG9jdW1lbnQueG1sLnJlbHNQSwECLQAUAAYACAAAACEAtvRnmNIGAADJIAAAFQAAAAAAAAAAAAAAAABSDAAAd29yZC90aGVtZS90aGVtZTEueG1sUEsBAi0AFAAGAAgAAAAhAN6P1E0wBAAADAwAABEAAAAAAAAAAAAAAAAAVxMAAHdvcmQvc2V0dGluZ3MueG1sUEsBAi0AFAAGAAgAAAAhAEOkbJaHCwAAD3MAAA8AAAAAAAAAAAAAAAAAthcAAHdvcmQvc3R5bGVzLnhtbFBLAQItABQABgAIAAAAIQDvCilOTgEAAH4DAAAUAAAAAAAAAAAAAAAAAGojAAB3b3JkL3dlYlNldHRpbmdzLnhtbFBLAQItABQABgAIAAAAIQCv6f6G8AEAAHoGAAASAAAAAAAAAAAAAAAAAOokAAB3b3JkL2ZvbnRUYWJsZS54bWxQSwECLQAUAAYACAAAACEA50z8tIYBAADzAgAAEQAAAAAAAAAAAAAAAAAKJwAAZG9jUHJvcHMvY29yZS54bWxQSwECLQAUAAYACAAAACEACMBlE3EBAADHAgAAEAAAAAAAAAAAAAAAAADHKQAAZG9jUHJvcHMvYXBwLnhtbFBLBQYAAAAACwALAMECAABuLAAAAAA=
                 */
                data?: string;
                /**
                 * @description Filename for the cover letter template file, without extension.
                 * @example applicationDetails
                 */
                name?: string;
                /**
                 * @description The extension of the cover letter template filename (doc/docx).
                 * @example doc
                 */
                type?: string;
            };
            /**
             * @description System-assigned key for the company.
             * @example 1
             */
            readonly companyKey?: string;
            /**
             * @description Unique identifier for the company.
             * @example SAGECNYID
             */
            readonly companyId?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s2"];
        };
        "company-config-cover-letter-templateRequiredProperties": Record<string, never>;
        /** @description The delivery record for the email delivery service lets you check if any sent email encountered errors. */
        "objects.company-config.email-delivery-record": {
            /**
             * @description System-assigned key for the email delivery record.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the email delivery record. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the email delivery record.
             * @example /objects/company-config/email-delivery-record/23
             */
            readonly href?: string;
            /**
             * @description Identifier for the email provider.
             * @example dt2FGrVFSNO0JQXAGSxTag
             */
            readonly emailProviderId?: string;
            /**
             * @description The status of the email.
             * @example queued
             * @enum {string}
             */
            readonly status?: "queued" | "processed" | "delivered" | "alert" | "error" | "failed";
            /**
             * @description X-Tenant token value.
             * @example WDIjad73gE8Q8aNLYEkv2zJn/CO3rAUxt3ia1wLRKFGeqC+4lSp48iFoYJ5LJLf36toGA7faZAVS/J5H1xHDfB8NQwyCi2HUtQNrWsE176jr7vRb
             */
            readonly tenantContext?: string;
            /**
             * @description The sender email address, which can be a user's email address, a group email address, a generic company address, and so on.
             * @example Support <support@intacct.com>
             */
            readonly from?: string;
            /**
             * @description The subject as defined in the email template.
             * @example dev20: logo sageqa
             */
            readonly subject?: string;
            /**
             * @description The failure status of the email.
             * @example return.body
             */
            readonly failureStatus?: string | null;
            /**
             * @description The reason for the failure.
             * @example {"response":413,"details":[{"message":"Undecodable Body","field":"return.body"}]}
             */
            readonly failureReason?: string | null;
            /**
             * Format: date-time
             * @description The date and time that the email was sent.
             * @example 2024-02-01T12:54:25Z
             */
            readonly sentDateTime?: string;
            /**
             * Format: date-time
             * @description The date and time that the email was last updated.
             * @example 2024-02-01T12:54:25Z
             */
            readonly lastUpdatedDateTime?: string | null;
            emailMessage?: components["schemas"]["email-body"];
            /**
             * @description The email addresses to which the email was sent.
             * @example sageqa@mail.com
             */
            readonly to?: string;
            /**
             * @description The email addresses to which a copy of the email was sent.
             * @example sageqa@mail.com
             */
            readonly cc?: string;
            /**
             * @description The email addresses to which a blind copy of the email was sent.
             * @example sageqa@mail.com
             */
            readonly bcc?: string;
            /**
             * @description The email addresses to send the reply to.
             * @example Support <support@intacct.com>
             */
            readonly replyTo?: string;
            /**
             * @description Body of the email.
             * @example Email Template...<br/><br/><br/><br/><br/><br/><br/>
             */
            readonly body?: string;
            /** @description The history of email activity. */
            readonly deliveryHistory?: {
                /**
                 * @description System-assigned key for the email delivery history.
                 * @example 390
                 */
                readonly key?: string;
                /**
                 * @description Unique identifier for the email delivery record. This value is the same as the `key` for this object.
                 * @example 390
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the email delivery record.
                 * @example /objects/company-config/email-delivery-record/390
                 */
                readonly href?: string;
                /**
                 * @description The recipient email address to which the email is sent.
                 * @example john.doe@company.com
                 */
                readonly sendTo?: string;
                /**
                 * @description Status for each state of the email in its delivery lifecycle. (e.g., processed, queued, delivered, open).
                 * @example queued
                 */
                readonly status?: string;
                /**
                 * Format: date-time
                 * @description Date and time when the email status was recorded.
                 * @example 2024-02-01T12:54:25Z
                 */
                readonly dateTime?: string;
                /**
                 * @description Additional details related to the email status (e.g., protocol info, error codes).
                 * @example TSL: 1
                 */
                additionalInfo?: string;
            }[];
        };
        /** @description External authorization. */
        "objects.company-config.external-authorization": {
            /**
             * @description System-assigned unique key for the external authorization.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the external authorization.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description The company ID of the company to which you are authorizing access.
             * @example RisingSun
             */
            externalCompanyId?: string | null;
            /**
             * @description The name of the company to which you are authorizing access.
             * @example Sunrise mornings
             */
            readonly externalCompanyName?: string | null;
            /**
             * @description Specifies whether the external authorization is in effect.
             * @default true
             * @example true
             */
            isExternalAccessEnabled?: boolean;
            /**
             * @description External access type.
             *
             *       * `consolidation` - Give access to your parent consolidating company for use with Advanced Consolidations.
             *       * `console` - Give access to a company linked to a console.
             *       * `support` - Used by Intacct Customer Support and Platform Services only.
             *       * `services` - Give access to an external services provider.
             *       * `portal` - External authorization for a portal.
             * @example support
             * @enum {string}
             */
            accessType?: "consolidation" | "console" | "support" | "services" | "portal";
            /**
             * @description Indicates whether your company is linked to the company on the external authorization.
             * @default false
             * @example true
             */
            readonly isLinked?: boolean;
            /**
             * @description Description for the external authorization.
             * @example External authorization for a console
             */
            description?: string;
            /**
             * Format: date
             * @description The date the external authorization record expires.
             *     To extend access to a company, provide a new expiration date for this record.
             *     This field is only applicable if `accessType` is set to `services` or `support`.
             * @example 2026-01-31
             */
            expirationDate?: string | null;
            /**
             * @description URL endpoint for the external authorization.
             * @example /objects/company-config/external-authorization/23
             */
            readonly href?: string;
        };
        "company-config-external-authorizationRequiredProperties": Record<string, never>;
        /** @description Specifies a holiday established for a company and the schedule to which that holiday belongs. */
        "objects.company-config.holiday": {
            /**
             * @description System-assigned unique key for the holiday.
             * @example 3
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the holiday. This value is the same as the key for this object.
             * @example 3
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the holiday.
             * @example /objects/company-config/holiday/3
             */
            readonly href?: string;
            /**
             * @description The name of the holiday.
             * @example Diwali
             */
            name?: string;
            /**
             * Format: date
             * @description The date of the holiday.
             * @example 2020-05-31
             */
            holidayDate?: string;
            /** @description Reference to the holiday schedule associated with the holiday. */
            holidaySchedule?: {
                /**
                 * @description System-assigned key for the holiday schedule.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Unique identifier or name for the holiday schedule.
                 * @example Holiday 2023
                 */
                id?: string;
                /**
                 * @description URL endpoint for the holiday schedule.
                 * @example /objects/company-config/holiday-schedule/2
                 */
                readonly href?: string;
            };
            /** @description Reference to the timesheet rule associated with the holiday. */
            timesheetRule?: {
                /**
                 * @description System-assigned key for the timesheet rule.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Unique identifier for the timesheet rule.
                 * @example 1
                 */
                id?: string;
                /**
                 * @description URL endpoint for the timesheet rule.
                 * @example /objects/time/timesheet-rule/1
                 */
                readonly href?: string;
            };
            /** @description Reference to the entity associated with the holiday. */
            entity?: {
                /**
                 * @description System-assigned key for entity.
                 * @example 4
                 */
                key?: string;
                /**
                 * @description Unique identifier of the entity. 20 characters max. The ID cannot be changed after the entity has been created.
                 * @example Central Region
                 */
                id?: string;
                /**
                 * @description Name for the entity.
                 * @example Central Region
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/4
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description List of holiday schedules. */
        "objects.company-config.holiday-schedule": {
            /**
             * @description System-assigned unique key for the holiday schedule.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the holiday schedule.
             * @example Holiday Schedule 2023
             */
            id?: string;
            /**
             * @description URL endpoint for the holiday schedule.
             * @example /objects/company-config/holiday-schedule/23
             */
            readonly href?: string;
            /** @description Reference to the entity associated with the holiday schedule. */
            entity?: {
                /**
                 * @description System-assigned key for the entity.
                 * @example 21
                 */
                key?: string;
                /**
                 * @description Unique identifier for the entity.
                 * @example 253422
                 */
                id?: string;
                /**
                 * @description URL endpoint for the entity.
                 * @example /objects/company-config/entity/21
                 */
                readonly href?: string;
            };
            /** @description Reference to the timesheet rule associated with the holiday schedule. */
            timesheetRule?: {
                /**
                 * @description System-assigned key for the timesheet rule.
                 * @example 21
                 */
                key?: string;
                /**
                 * @description Unique identifier for the timesheet rule.
                 * @example 21
                 */
                id?: string;
                /**
                 * @description Name for the timesheet rule.
                 * @example firstAndOnlyRule
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the timesheet rule.
                 * @example /objects/time/timesheet-rule/21
                 */
                readonly href?: string;
            };
            holidays?: components["schemas"]["objects.company-config.holiday"][];
            audit?: components["schemas"]["audit.s2"];
        };
        "company-config-holiday-scheduleRequiredProperties": Record<string, never>;
        /** @description A payment provider notification refers to a notification that Intacct receives and subsequently processes to update an object, depending on the notification type. */
        "objects.company-config.payment-provider-notification": {
            /**
             * @description System-assigned key for the payment-provider-notification.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description System-assigned key for the payment-provider-notification.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description Endpoint for the payment-provider-notification.
             * @example /objects/company-config/payment-provider-notification/23
             */
            readonly href?: string;
            /**
             * @description Notification ID.
             * @example c391804c-d1ab-4527-bafc-0086788d9ee7
             */
            notificationGUID?: string;
            /**
             * @description The type of notification.
             * @example BatchPatched
             */
            notificationType?: string;
            /**
             * @description This body contains the detailed information about a given notification type (can be a payment request payload, subscription request payload, vendor or bank account enrolment payload) from partner. Based on the type of notification we update the respective records in our system.
             * @example {\"type\":\"BatchPatched\",\"notificationParties\":{\"organisationId\":\"32574d23-8181-4bef-904a-85338044fedd\",\"companyId\":\"be368f13-41dd-4ac5-bf34-1b17910a5db5\",\"applicationId\":\"sage.intacct\",\"subscriptionId\":\"46f2cc63-3f68-484e-8ecd-535abb4a2c11\",\"externalOrganisationId\":\"08978319B0B7EF5BE0637610E20A576E\",\"externalCompanyId\":\"0\"},\"resource\":{\"id\":\"c391804c-d1ab-4527-bafc-0086788d9ee7\",\"type\":\"batchpayments\",\"batchpayment\":{\"data\":{\"status\":\"Processing\",\"extendedStatus\":\"Reconcile\",\"extendedStatusDetail\":\"Payment.\",\"providerReference\":\"16488223\",\"creditorLocalInstrument\":\"ACH\",\"fundingId\":\"1336062\",\"payments\":[{\"paymentId\":\"c391804c-d1ab-4527-bafc-0086788d9ee7-00000\",\"status\":\"None\",\"providerReference\":\"16488223\",\"creditorLocalInstrument\":\"ACH\",\"fundingId\":\"1336062\",\"paymentCompletedDate\":\"2024-05-18T01:05:16Z\"}]}}}}
             */
            notificationBody?: string;
            /**
             * @description State.
             * @default Queued
             * @example success
             * @enum {string}
             */
            state?: "queued" | "success" | "failed";
            /**
             * @description Error description in case notification processing failed.
             * @example Unable to update the payment request record, RECORDNO:75310
             */
            errorDescription?: string | null;
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description A sandbox is a copy of your production environment that you can use for testing or training without affecting your production data or configuration. */
        "objects.company-config.sandbox": {
            /**
             * @description System-assigned unique key for the sandbox.
             * @example 10
             */
            readonly key?: string;
            /**
             * @description Unique ID for the sandbox. This value is the same as the key for this object.
             * @example 10
             */
            readonly id?: string;
            /**
             * @description Full title of the sandbox, formed by appending the suffix from the `name` field to the company ID.
             * @example PacBell-sandbox
             */
            readonly title?: string;
            /**
             * @description The suffix that is appended to the company ID to form the full title of the sandbox.
             * @example sandbox
             */
            name?: string;
            /**
             * @description Description of the sandbox.
             * @example Sandbox description
             */
            description?: string;
            /**
             * @description Current state of the sandbox.
             * @default pending
             * @example pending
             * @enum {string}
             */
            readonly state?: "ready" | "inProgress" | "pending" | "failed";
            /**
             * Format: date
             * @description Date the sandbox expires.
             * @example 2026-01-08
             */
            readonly expirationDate?: string;
            /**
             * Format: date
             * @description Date the sandbox was last refreshed.
             * @example 2026-01-08
             */
            readonly lastRefreshedDate?: string;
            /**
             * @description URL endpoint for the sandbox.
             * @example /objects/company-config/sandbox/10
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "company-config-sandboxRequiredProperties": Record<string, never>;
        "company-config-sandbox-actions-refresh-request": {
            /**
             * @description System-assigned unique key for the sandbox.
             * @example 10
             */
            key: string;
        };
        "company-config-sandbox-actions-refresh-response": {
            /**
             * @description System-assigned unique key for the sandbox.
             * @example 10
             */
            readonly key?: string;
            /**
             * @description Unique ID for the sandbox. This value is the same as the key for this object.
             * @example 10
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the sandbox.
             * @example /objects/company-config/sandbox/10
             */
            readonly href?: string;
            /**
             * @description Current state of the sandbox.
             * @example pending
             * @enum {string}
             */
            readonly state?: "pending";
        };
        /** @description The transaction currency object defines both ISO and custom currencies that can be used in company transactions where multiple transaction currencies are enabled. */
        "objects.company-config.txn-currency": {
            /**
             * @description System-assigned unique key for the transaction currency.
             * @example 235
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the transaction currency. When `currencyType` is set to `iso`, choose a valid ISO currency code from this list:
             *
             *     ('USD','AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BRL','BSD','BTN','BWP','BYN','BYR','BZD','CAD','CDF','CHF','CLP','CNY','COP','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','**P','GBP','GEL','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','INR','IQD','IRR','ISK','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','STD','SVC','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','UYU','UZS','VEF','VES','VND','VUV','WST','XAF','XCD','XOF','XPF','YER','ZAR','ZMW','ZWL')
             * @example USD
             */
            id?: string;
            /**
             * @description URL endpoint for the transaction currency.
             * @example /objects/company-config/txn-currency/235
             */
            readonly href?: string;
            /**
             * @description Specifies the type of the transaction currency:
             *
             *     * `iso` - An ISO currency with predefined properties. The `id` field must be set to a valid ISO currency code, and the other properties will be automatically populated based on the selected ISO currency.
             *     * `custom` - A user-defined currency with custom properties, provide values for the other properties to define the custom currency.
             * @default iso
             * @example iso
             * @enum {string}
             */
            currencyType?: "iso" | "custom";
            /**
             * @description Specifies the name of the transaction currency. Required when `currencyType` is set to `custom`.
             * @example US Dollar
             */
            name?: string;
            /**
             * @description Specifies the official ISO-4217 numeric code for the transaction currency. Applies only when `currencyType` is set to `iso`, and the value is automatically populated based on the selected ISO currency code in the `id` field. For example, if `id` is set to `GBP`, the `isoCode` will be automatically populated with `826`.
             * @example 826
             */
            readonly isoCode?: string | null;
            /**
             * @description Specifies the format of the transaction currency. Required when `currencyType` is set to `custom`.
             * @example british
             * @enum {string}
             */
            currencyFormat?: "australian" | "brazilian" | "british" | "canadian" | "danish" | "dutch" | "european" | "finnish" | "flemish" | "french" | "frenchCanadian" | "german" | "greek" | "indian" | "italian" | "mexican" | "norwegian" | "southAfrica" | "spanish" | "swedish" | "swissFrench" | "swissGerman" | "swissItalian" | "swissFranc" | "unitedStates" | "unitedArabEmirates" | "custom";
            /**
             * @description Indicates the major unit of currency, such as dollars, pounds, or yen. Required when `currencyType` is set to `custom`.
             * @example pounds
             */
            unit?: string;
            /**
             * @description Indicates the sub-unit of currency, such as cents, pence, or centavos. Required when `currencyType` is set to `custom`.
             * @example pence
             */
            subUnit?: string;
            /**
             * @description Specifies the standard currency symbol, such as $, £, €, or ¥. Required when `currencyType` is set to `custom`.
             * @example £
             */
            symbol?: string;
            /**
             * @description Indicates the symbol used as the thousand separator, such as a comma or period. This has no mathematical impact, but helps the reader distinguish large values. Required when `currencyType` is set to `custom`.
             * @example ,
             */
            thousandSeparator?: string;
            /**
             * @description Indicates the symbol used to separate the main units from the subunits, such as a period or comma. Required when `currencyType` is set to `custom`.
             * @example .
             */
            decimalSeparator?: string;
            /**
             * @description Indicates whether the currency symbol is displayed to the left or the right of the number. Required when `currencyType` is set to `custom`.
             * @example left
             * @enum {string}
             */
            alignment?: "left" | "right";
            audit?: components["schemas"]["audit.s1"];
        };
        "company-config-txn-currencyRequiredProperties": Record<string, never>;
        /** @description Company preferences. */
        "objects.company-config.company-preference": {
            /**
             * @description System-assigned key for the company preference.
             * @example setup
             */
            key?: string;
            /**
             * @description Unique identifier for the company preference.
             * @example SAGECNYID
             */
            id?: string;
            /**
             * @description The contract number for the customer set by the sales team in Salesforce.
             * @example C1234
             */
            readonly contractCustomerId?: string;
            /**
             * @description The name for the company.
             * @example Expert Sage
             */
            name?: string;
            /**
             * @description The legal name for the company.
             * @example Expert Sage Intacct LTD
             */
            legalName?: string;
            /**
             * @description Indicates whether Intacct should use the ISO 3166-1 standard country codes to identify your country.
             * @default true
             * @example true
             */
            readonly useISOCountryCodes?: boolean;
            /**
             * @description The VAT or GST registration number for the company.
             * @example CO1000002
             */
            taxId?: string;
            /**
             * @description The country in which the company operates.
             * @default unitedStates
             * @example unitedStates
             */
            operatingCountry?: string & components["schemas"]["country"];
            /**
             * @description Business identification number for EU companies.
             * @example 123
             */
            internationalTaxId?: string;
            /**
             * @description Identifies the type of organization under French law, encompassing various recognized forms for both private and public entities.
             * @example 24 Fiduciary
             */
            legalCategory?: string;
            /**
             * @description Specifies the primary economic activities the company engages in, helping classify the nature of operations.
             * @example 10.3 Transformation and conservation of fruits and vegetables
             */
            mainActivity?: string;
            /**
             * @description Classifies the company based on legal structure, size, activities, or other key characteristics.
             * @example 03 Intermediate sized enterprises
             */
            typeOfCompany?: string;
            /**
             * @description Represents the total capital invested by shareholders upon the company's formation.
             * @example 37 000
             */
            registeredCapital?: number;
            /**
             * @description Specifies VAT rules and regulations applicable to the company, including requirements for VAT collection, application, and reporting within France.
             * @example Monthly
             */
            valueAddedTaxRegime?: string;
            /** @description The address where the company is legally incorporated or established. */
            legalAddress?: {
                /**
                 * @description The first line of the company legal address.
                 * @example 300 Park Avenue
                 */
                addressLine1?: string;
                /**
                 * @description The second line of the company legal address.
                 * @example Suite 1400
                 */
                addressLine2?: string;
                /**
                 * @description The third line of the company legal address.
                 * @example Western industrial area
                 */
                addressLine3?: string;
                /**
                 * @description The city where the company operates in legally incorporated or established.
                 * @example San Jose
                 */
                city?: string;
                /**
                 * @description The state or territory in which the company is legally incorporated or established. Intacct uses this value on 1099 tax forms for vendors and employees who qualify for 1099 eligibility.
                 * @example California
                 */
                stateOrRegion?: string;
                /**
                 * @description The ZIP or post code where the company is legally incorporated or established.
                 * @example 95110
                 */
                postCode?: string;
                /**
                 * @description The country where the company is legally incorporated or established.
                 * @example unitedStates
                 */
                country?: components["schemas"]["country"];
            };
            /** @description The address of the company. */
            companyAddress?: {
                /**
                 * @description The first line of the company address used for outgoing documents and emails.
                 * @example Dows Street 5
                 */
                addressLine1?: string;
                /**
                 * @description The second line of the company address used for outgoing documents and emails.
                 * @example Flt 22
                 */
                addressLine2?: string;
                /**
                 * @description The third line of the company address used for outgoing documents and emails.
                 * @example Western industrial area
                 */
                addressLine3?: string;
                /**
                 * @description The city the company operates in used for outgoing documents and emails.
                 * @example New York
                 */
                city?: string;
                /**
                 * @description The country used to identify the company on outgoing documents and emails.
                 * @default unitedStates
                 */
                country?: string & components["schemas"]["country"];
                /**
                 * @description The company state or territory used for outgoing documents and emails.
                 * @example CA
                 */
                stateOrRegion?: string;
                /**
                 * @description The ZIP or post code used for outgoing documents or emails.
                 * @example 90210
                 */
                postCode?: string;
            };
            /** @description The person in your company with administrative privileges who can be contacted regarding administrative matters. An administrative contact can only be a business user with full admin privileges. */
            administrativeContact?: {
                /** @description A business user in your company with full administrative privileges who can be contacted regarding administrative matters. */
                adminUser?: {
                    /**
                     * @description System-assigned key for the administrative user.
                     * @example 21
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the administrative user.
                     * @example JohnD
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the administrative user.
                     * @example /objects/company-config/user/21
                     */
                    readonly href?: string;
                };
                /**
                 * @description Name of the the administrative user.
                 * @example John Doe
                 */
                readonly name?: string;
                /**
                 * @description Phone number for the administrative user.
                 * @example 1022223333
                 */
                readonly phone?: string;
                /**
                 * @description Email address for the administrative user.
                 * @example contact@example.com
                 */
                readonly email?: string;
                /**
                 * @description Fax number for the administrative user.
                 * @example 1009288888
                 */
                readonly fax?: string;
            };
            /**
             * @description Indicates whether the company has a flat or hierarchical structure, for console companies.
             * @default flat
             * @example flat
             * @enum {string}
             */
            companyStructure?: "flat" | "hierarchical";
            /**
             * @description Specifies whether you will set permissions on an individual user basis, or set permissions for certain roles.
             * @default roleBased
             * @example userBased
             * @enum {string}
             */
            permissionType?: "userBased" | "roleBased";
            /**
             * @description When set to `true`, automated jobs are disabled, including all recurring transactions, scheduled or offline reports, and renewal templates.
             * @default false
             * @example false
             */
            disableScheduledJobs?: boolean;
            /**
             * @description Scheduled jobs are executed shortly after midnight in your local time zone. Use this field to adjust the time when scheduled jobs begin execution. To avoid conflict with other scheduled processes, select how many hours past midnight you want your company's scheduled jobs to begin. For example, to begin executing schedule jobs at 2 am in your local time zone, select 2.
             * @default 0
             * @example 10
             */
            scheduledJobsExecutionOffsetHours?: number;
            /** @description Login timeout inactivity settings. */
            userSessionSettings?: {
                /**
                 * @description The number of minutes a user session can remain inactive before Intacct automatically logs out the user.
                 * @example 60
                 */
                inactivityTimeOutMinutes?: number;
                /**
                 * @description The maximum number of hours of inactivity that can be set by users in their preferences.
                 * @example 4
                 */
                userPreferenceInactivityMaxHours?: number;
                /**
                 * @description The number of minutes minutes a user can remain logged in before Intacct automatically logs out the user.
                 * @example 30
                 */
                sessionTimeoutMinutes?: number;
                /**
                 * @description The maximum number of hours that can be set by users in their preferences for session duration.
                 * @example 5
                 */
                userPreferenceTimeoutMaxHours?: number;
            };
            /** @description Password configuration settings. */
            passwordSettings?: {
                /**
                 * @description The number of failed login attempts a user can make in a 24 hour period before Intacct locks them out. The recorded number of attempts resets after a successful login. After Intacct locks out a user, only an administrator can reset user status from locked out to active. This setting applies to all users.
                 * @default 5
                 * @example 2
                 */
                maxLoginAttempts?: number;
                /**
                 * @description The frequency at which users must change their Sage Intacct passwords.
                 * @default quarterly
                 * @example monthly
                 * @enum {string}
                 */
                changeFrequency?: "weekly" | "everyTwoWeeks" | "monthly" | "everyTwoMonths" | "quarterly" | "everySixMonths" | "yearly" | "never";
                /**
                 * @description The number of recent passwords that cannot be reused when resetting a password.
                 * @example 5
                 */
                passwordReuseHistoryLength?: number;
                /**
                 * @description The minimum number of characters required for a password.
                 * @default 8
                 * @example 8
                 */
                minLength?: number;
                /**
                 * @description The maximum number of password reset attempts that can be tried by a user in a 24 hour period.
                 * @default 5
                 * @example 8
                 */
                maxDailyChangeAttempts?: number;
                /**
                 * @description The maximum number of times incorrect information can be entered in a password reset attempt. When the limit is reached, Intacct locks the account for 24 hours.
                 * @default 5
                 * @example 5
                 */
                maxFailAttemptsPerPasswordReset?: number;
            };
            /**
             * @description Use IP address filtering to restrict login to your company to locations with known IP addresses only (such as those coming from your corporate office). When you enforce IP address filters, any login that does not come from the list of allowed IP addresses is denied, preventing login attempts from unknown locations.
             * @default none
             * @example companyLevel
             * @enum {string}
             */
            ipAddressFiltering?: "none" | "companyLevel" | "companyLevelOverrideUserLevel" | "userLevel";
            /** @description Date and time settings */
            dateTimeSettings?: {
                /**
                 * @description Time zone for the company.
                 * @default GMT (Greenwich Mean Time) Dublin, Edinburgh, London
                 * @example GMT-10:00 Hawaii
                 */
                timeZone?: string & components["schemas"]["timezone"];
                /**
                 * @description Date format used throughout Intacct to display dates.
                 * @default MM/DD/YYYY
                 * @example MM.DD.YYYY
                 * @enum {string}
                 */
                dateFormat?: "MM/DD/YYYY" | "MM/DD/YY" | "MM.DD.YY" | "MM.DD.YYYY" | "MM-DD-YY" | "MM-DD-YYYY" | "MM DD YY" | "MM DD YYYY" | "DD/MM/YY" | "DD/MM/YYYY" | "DD.MM.YY" | "DD.MM.YYYY" | "DD-MM-YY" | "DD-MM-YYYY" | "DD MM YY" | "DD MM YYYY" | "YY/MM/DD" | "YYYY/MM/DD" | "YY.MM.DD" | "YYYY.MM.DD" | "YY-MM-DD" | "YYYY-MM-DD" | "YY MM DD" | "YYYY MM DD";
                /**
                 * @description Time format used throughout Intacct to display time.
                 * @default HH24:MI:SS
                 * @example HH24:MI:SS
                 * @enum {string|null}
                 */
                timeFormat?: "HH24:MI:SS" | "HH12:MI:SS AM/PM" | null;
            };
            /**
             * @description The symbol that separates decimals, usually the period.
             * @default period
             * @example period
             * @enum {string}
             */
            decimalsSeparator?: "comma" | "period" | "underscore" | "space" | "companyDefault";
            /**
             * @description The symbol that separates groups of thousands, usually the comma.
             * @default comma
             * @example comma
             * @enum {string}
             */
            thousandsSeparator?: "comma" | "period" | "underscore" | "space" | "companyDefault";
            /**
             * @description Indicates whether UTF-8 encoding should be used for PDF format.
             * @default true
             * @example true
             */
            useUTF8ForPDF?: boolean;
            /** @description You can use your company logo to co-brand the login page and main title bar of Sage Intacct. You can also add your company logo on documents such as invoices, statements, and financial reports. */
            branding?: {
                /**
                 * @description Your company color in HEX format.
                 * @example D8006F
                 */
                entityColor?: string;
                /** @description Your company logo. */
                readonly companyLogo?: {
                    /**
                     * @description Company logo file name.
                     * @example cnylogo_j.jpg
                     */
                    readonly fileName?: string;
                    /**
                     * @description Your company logo in base64 encoded binary format.
                     * @example binarydata
                     */
                    readonly data?: string;
                };
                /** @description Branding logo for console companies. */
                readonly brandingLogo?: {
                    /**
                     * @description Branding logo file name.
                     * @example brandinglogo_j.jpg
                     */
                    readonly fileName?: string;
                    /**
                     * @description The branding logo for console companies in base64 encoded binary format.
                     * @example binarydata
                     */
                    readonly data?: string;
                };
                /** @description Logo for XSL custom documents. */
                readonly xslDocumentsLogo?: {
                    /**
                     * @description Logo file name for XSL custom documents.
                     * @example custlogo_j.jpg
                     */
                    readonly fileName?: string;
                    /**
                     * @description Logo for XSL custom documents in base64 encoded binary format.
                     * @example binarydata
                     */
                    readonly data?: string;
                };
                /** @description Logo for email templates. */
                readonly emailLogo?: {
                    /**
                     * @description Logo file name for email templates.
                     * @example emaillogo_j.jpg
                     */
                    readonly fileName?: string;
                    /**
                     * @description Logo for email templates in base64 encoded binary format.
                     * @example binarydata
                     */
                    readonly data?: string;
                };
                /**
                 * @description Text that appears in the top and bottom portions of your customer documents that use the available default templates.
                 * @example Intacct. A Better Way to Run Your Business
                 */
                marketingText?: string;
                /**
                 * @description Text that appears in or above the footer of your transaction.
                 * @example Superior financial Applications. Real-time business visibility. Open, on-demand platform.
                 */
                messageText?: string;
            };
            /** @description Accounting preferences. */
            accounting?: {
                /**
                 * @description Financial reporting periods:
                 *     * `standard` - 12 monthly periods that begin on the first day of the month and end on the last day of the month.
                 *     * `custom` - non-standard periods defined by an administrator. For example, 13 four-week periods.
                 * @default null
                 * @example standard
                 * @enum {string|null}
                 */
                readonly accountingPeriods?: null | "standard" | "custom";
                /** @description The month that your company fiscal year starts. If your company uses custom accounting periods, this field does not apply. */
                firstFiscalMonth?: components["schemas"]["month"];
                /**
                 * @description The day of the week that your calendar begins.
                 * @default null
                 * @example monday
                 * @enum {string|null}
                 */
                weekBeginsOn?: null | "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "firstDayOfTheYear";
                /**
                 * @description The default reporting method for the company.
                 * @default null
                 * @example accrualBasis
                 * @enum {string|null}
                 */
                readonly reportingMethod?: null | "accrualBasis" | "cashBasis";
                /** @description First tax month */
                firstTaxMonth?: components["schemas"]["month"];
                /**
                 * @description The primary accounting currency for the company.
                 * @default USD
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /**
                 * @description The number of digits for account numbers including any subaccounts and separators.
                 * @default 4
                 * @example 2
                 */
                readonly primaryAccountNumberLength?: number;
                /**
                 * @description The character that separates the primary account number from subaccount numbers.
                 * @default period
                 * @example colon
                 * @enum {string|null}
                 */
                readonly accountFieldSeparator?: null | "period" | "tilde" | "comma" | "colon" | "underscore" | "dash";
                /**
                 * @description The number of digits for subaccount numbers excluding the account field separator.
                 * @default 2
                 * @example 2
                 */
                readonly subAccountNumberLength?: number;
                /**
                 * @description Indicates whether you can create and use a custom currency for your company.
                 * @default false
                 * @example true
                 */
                enableCustomCurrency?: boolean;
            };
            /** @description The type of numbering sequence used for attachments. */
            attachmentSequenceType?: {
                /**
                 * @description System-assigned key for the document sequence.
                 * @example 61
                 */
                key?: string;
                /**
                 * @description Unique identifier for the document sequence.
                 * @example Vendors
                 */
                id?: string;
                /**
                 * @description URL endpoint for the document sequence.
                 * @example /objects/document-sequence/1
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies the order the applications appear in the Intacct UI main navigation menu. Possible values are (according to installed modules): dash - Dashboard, co - Company, ar - Accounts receivable, ap - Accounts payable, cm - Cash Management, gl - General ledger,
             *     cerp - Interactive custom reports, so - Order entry, pa - Projects, ee - Time and expenses, inv - Inventory control, po - Purchasing, budg - Budgets,
             *     reportcenter - Reports, cs - Consolidation, saasmt - SaaS Metrics, atlas - Global consolidations, pay - Construction payroll
             * @example [
             *       "dash",
             *       "co",
             *       "ar"
             *     ]
             */
            menuOrder?: string[];
            /** @description Single sign on (SSO) settings. */
            singleSignOn?: {
                /**
                 * @description Indicates whether single sign on is enabled.
                 * @default false
                 * @example true
                 */
                enableSingleSignOn?: boolean;
                /**
                 * @description Issuer URL that Intacct will invoke to attempt authentication.
                 * @example https://example.com
                 */
                issuerURL?: string;
                /**
                 * @description The link to your SSO login page, as provided by your identity provider.
                 * @example https://example.com
                 */
                loginURL?: string;
                /**
                 * @description The x.509 certificate issued by your identity provider for your application.
                 * @example AD377739999ALLLD
                 */
                certificate?: string;
                /**
                 * @description Identity provider type.
                 * @example saml2.0
                 * @enum {string|null}
                 */
                identityProviderType?: null | "saml2.0" | "saml2.0withAdfs";
                /**
                 * @description The level of authentication required for a login attempt.
                 * @default minimum
                 * @example maximum
                 * @enum {string}
                 */
                requestAuthenticationContentType?: "exact" | "minimum" | "maximum" | "better";
            };
            /** @description Multi-factor authentication (MFA) settings. */
            multifactorAuthentication?: {
                /**
                 * @description Indicates whether multi-factor authentication is enabled.
                 * @default no
                 * @example yes
                 * @enum {string}
                 */
                enableMultifactorAuthentication?: "yes" | "no" | "always";
                /**
                 * @description Indicates whether trusted devices are allowed. When set to `true`, users must enter a verification code via an authenticator app each time they log in.
                 * @default false
                 * @example true
                 */
                disallowTrustedDevices?: boolean;
                /**
                 * @description Specifies who must enter a verification code when logging in.
                 * @default selectedUsers
                 * @example allUsers
                 * @enum {string}
                 */
                multifactorAuthenticationUserMode?: "selectedUsers" | "allUsers";
            };
            /**
             * @description Maximum number of days to which external authorization may be set to expire after.
             * @default 90
             * @example 75
             * @enum {string}
             */
            externalAuthorizationMaxExpirationDays?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "14" | "21" | "28" | "30" | "31" | "45" | "60" | "75" | "90" | "120" | "150" | "180";
            /** @description Domain settings for emails. */
            emailSenderDomainSettings?: {
                /**
                 * @description A unique and static key generated for each company to prevent spoofing, and to specify that Intacct is allowed to send emails on your behalf.
                 * @example CB670951D9220F1AA0530811E11A9058
                 */
                globallyUniqueIdentifier?: string;
                /**
                 * @description Email sender domain.
                 * @example YourEmailSenderDomain.com
                 */
                emailSenderDomain?: string;
            };
            /**
             * @description Controls the display language and tailors terminology in the Sage Intacct UI to the terms and accounting standards followed by the specified locale.
             * @default en_US.UTF-8
             * @example en_US.UTF-8
             * @enum {string}
             */
            locale?: "en_AU.UTF-8" | "en_US.UTF-8" | "en_GB.UTF-8" | "en_ZA.UTF-8" | "fr_FR.UTF-8" | "fr_CA.UTF-8" | "de_DE.UTF-8" | "es_ES.UTF-8";
            /**
             * @description Specifies the default country to use for addresses.
             * @default unitedStates
             */
            defaultCountryForAddresses?: string & components["schemas"]["country"];
            /** @description Privacy settings. */
            sensitiveDataMasking?: {
                /**
                 * @description Indicates whether Sage Intacct should limit who sees employee SSN numbers when they view or edit an employee record.
                 * @default false
                 * @example true
                 */
                maskSocialSecurityNumbers?: boolean;
                /**
                 * @description Indicates whether Sage Intacct should limit who sees vendor bank details in an audit trail.
                 * @default false
                 * @example true
                 */
                maskVendorBankDetails?: boolean;
                /**
                 * @description Indicates whether Sage Intacct should limit who sees employee bank details in an audit trail.
                 * @default false
                 * @example true
                 */
                maskEmployeeBankDetails?: boolean;
            };
            /**
             * @description Specifies the accounting practice used by the company.
             * @default netAsset
             * @example netAsset
             * @enum {string}
             */
            accountingPractice?: "netAsset" | "traditional";
            /**
             * @description List of business days.
             * @default MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY
             * @example MONDAY,TUESDAY,WEDNESDAY,THURSDAY
             */
            workdays?: string;
            /**
             * @description List of weekend days.
             * @default SUNDAY,SATURDAY
             * @example FRIDAY,SUNDAY,SATURDAY
             */
            weekends?: string;
        };
        /** @description Configure preferences for consolidations in Sage Intacct for multi-entity companies. */
        "objects.company-config.multi-entity-preference": {
            /**
             * @description System-assigned unique key for the multi-entity preferences.
             * @example setup
             */
            key?: string;
            /**
             * @description Indicates whether multiple base currencies are enabled for entities within the company. When set to `true`, you can set up a separate base currency, or operating and reporting currency, for each entity in your company. When `false`, all entities in the company share the same base currency. Applies when multi-currency management is enabled in the General Ledger.
             *
             *     For more information, read about [enabling multiple base currencies](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Enable_multi_base_currency) in the Sage Intacct Help Center.
             * @default false
             */
            enableMultipleBaseCurrency?: boolean;
            /** @description Specifies the approval currency used to evaluate transaction approval thresholds for purchase transactions and expense reports. */
            approvalCurrency?: string;
            /**
             * @description Indicates whether 1099 forms are issued using entity-level information instead of top-level company information. When `true` Sage Intacct prints the 1099 forms using the legal and tax details defined for each entity.
             *
             *     For more information, read about [printing 1099 forms for multi-entity companies](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=ME_company_and_1099s) in the Sage Intacct Help Center.
             * @default false
             */
            isForm1099?: boolean;
            restrictions?: {
                /**
                 * @description Indicates whether access is restricted to the top-level company only. When `true`, users can only access the top-level company and cannot access or navigate to individual entities. Applies only to multi-entity companies with a single base currency.
                 * @default false
                 */
                disableEntitySlideIn?: boolean;
                /**
                 * @description Indicates whether to restrict subledger transactions to the entity level only. When `true`, users can only enter subledger transactions at the entity level.
                 * @default false
                 */
                restrictSubledgerTxnToEntity?: boolean;
                /**
                 * @description Indicates whether to restrict General Ledger transactions to the entity level only. When `true`, users can only enter General Ledger transactions at the entity level.
                 * @default false
                 */
                restrictGLTxnToEntity?: boolean;
                /**
                 * @description Indicates whether to restrict which locations and departments are available to each top-level customer. When set to `true`, you can restrict the locations and departments for each top-level customer.
                 * @default false
                 */
                enableCustomerRestrictions?: boolean;
                /**
                 * @description Indicates whether to restrict which locations and departments are available to each top-level vendor. When set to `true`, you can restrict the locations and departments for each top-level vendor.
                 * @default false
                 */
                enableVendorRestrictions?: boolean;
                /**
                 * @description Indicates whether to restrict which locations and departments can work with each checking account. When set to `true`, you can restrict the locations and departments for each checking account.
                 * @default false
                 */
                enableCheckingAccountRestrictions?: boolean;
                /**
                 * @description Indicates whether to restrict which locations and departments can work with each savings account. When set to `true`, you can restrict the locations and departments for each savings account.
                 * @default false
                 */
                enableSavingsAccountRestrictions?: boolean;
            };
            /**
             * @description Indicates whether to use the affiliate entity dimension in the company. When set to `true`, you can use the affiliate entity dimension for inter-entity transactions and reporting.
             *
             *     For more information, read about [the affiliate entity standard dimension](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_affiliate_entity_dimension) in the Sage Intacct Help Center.
             * @default false
             */
            enableAffiliateEntity?: boolean;
            /**
             * @description Specifies the type of inter-entity account mapping:
             *     * `basic`: Use only one set of inter-entity accounts per entity.
             *     * `advanced`: Define separate sets of inter-entity accounts for each entity relationship, or entity pair.
             * @default basic
             * @enum {string}
             */
            interEntityAccountMappingPlan?: "basic" | "advanced";
            /**
             * @description Indicates whether to limit Accounts Payable (AP) credits to the owning entity.When set to `true`, credits are applied only to bills owned by the same entity as the credit. When `false`, credits are applied to bills owned by the same entity first, and then to bills owned by other entities, starting with the oldest bill.
             * @default false
             */
            limitAPCredit?: boolean;
            /**
             * @description Indicates whether to limit Accounts Receivable (AR) credits to the owning entity. When set to `true`, credits are applied only to invoices owned by the same entity as the credit. When `false`, credits are applied to invoices owned by the same entity first, and then to invoices owned by other entities, starting with the oldest invoice.
             * @default false
             */
            limitARCredit?: boolean;
            /**
             * @description Indicates whether the multi-entity module has been configured for use in the company.
             * @default true
             */
            readonly isModuleConfigured?: boolean;
            /** @description Use these settings to control how Sage Intacct records transactions that involve two or more entities. */
            interEntityTxns?: {
                /**
                 * @description Indicates whether to enable inter-entity transactions for journal entries. When set to `true`, Sage Intacct automatically creates offsetting entries for journal entries that involve two or more entities. When `false`, all balancing line items must be entered manually.
                 * @default false
                 */
                enableForJournalEntry?: boolean;
                /**
                 * @description Indicates whether to disable automatic tracking of Accounts Payable (AP) and Accounts Receivable (AR) inter-entity subledger transactions.
                 *
                 *     When set to `true`, inter-entity AP and AR subledger transactions must be balanced manually, you do not need to specify a `creditsJournal`. When `false`, Sage Intacct automatically creates offsetting journal entries to track inter-entity AP and AR subledger transactions.
                 * @default false
                 */
                manuallyBalanceSubledgerTxns?: boolean;
                /**
                 * @description Indicates whether to disable automatic recording of Accounts Payable (AP) and Accounts Receivable (AR) inter-entity credits, adjustments, and advances.
                 *
                 *     When set to `true`, inter-entity AP and AR credits must be balanced manually, you do not need to specify a `creditsJournal`. When `false`, Sage Intacct automatically creates offsetting journal entries to track inter-entity AP and AR credits, adjustments, and advances.
                 * @default false
                 */
                manuallyBalanceSubledgerCredits?: boolean;
                /** @description Specifies the journal to use when posting inter-entity credit bills or invoices to AP or AR, respectively. This journal is used when credits are applied to AR invoices or AP bills that generate an inter-entity transaction (IET) with no source payment record. */
                creditsJournal?: {
                    /** @description Unique key for the credits journal. */
                    key?: string;
                    /** @description Identifier for the credits journal. */
                    id?: string;
                    /** @description Name for the credits journal */
                    name?: string;
                    /** @description URL endpoint for the credits journal. */
                    readonly href?: string;
                };
            };
            /**
             * @description Indicates whether to enforce journal entry balancing by location or entity. If you choose not to enable inter-entity transactions, you can enforce journal entry balancing by location instead of entity.
             * @default entity
             * @enum {string}
             */
            balanceJournalEntryBy?: "location" | "entity";
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Configure preferences for consolidations in Sage Intacct for domestic, global, and advanced ownership consolidation. */
        "objects.company-config.consolidation-preference": {
            /**
             * @description System-assigned unique key for the consolidation preferences.
             * @example setup
             */
            key?: string;
            /**
             * @description Specifies the consolidation subscription type:
             *
             *     * `domesticOrGlobalConsolidation` - Standard consolidation features.
             *     * `advancedOwnershipConsolidation` - Advanced consolidation features including multi-tier consolidations and complex ownership structures.
             *
             *     For more information, read about [consolidation subscriptions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Comparison_consolidation_options) in the Sage Intacct Help Center.
             * @default consolidation
             * @example consolidation
             * @enum {string}
             */
            consolidationSubscriptionSelection?: "domesticOrGlobalConsolidation" | "advancedOwnershipConsolidation";
            /**
             * @description Set to `true` to enable management console reporting for consolidations. Only applicable when `consolidationSubscriptionSelection` is set to `advancedOwnershipConsolidation`.
             * @default false
             * @example true
             */
            enableManagementConsoleReporting?: boolean;
            /**
             * @description URL endpoint for the consolidation preferences.
             * @example /objects/company-config/consolidation-preference/setup
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Configure preferences for consolidations in Sage Intacct for advanced ownership consolidation. */
        "objects.company-config.advanced-consolidation-preference": {
            /**
             * @description System-assigned unique key for the advanced consolidation preferences.
             * @example setup
             */
            key?: string;
            /**
             * @description Specifies the email address to send consolidation notifications on completion of a successful or failed consolidation.
             * @example john.smith@company.com
             */
            notificationEmail?: string;
            /** @description Specifies the details for the minority interest General Ledger (GL) accounts to which minority interest amounts are assigned. */
            minorityInterestGLAccounts?: {
                /** @description References the income or expense account for the minority interest General Ledger (GL). */
                incomeOrExpenseGLAccount?: {
                    /**
                     * @description Unique key for the income or expense account.
                     * @example 123
                     */
                    key?: string;
                    /**
                     * @description Identifier for the income or expense account.
                     * @example 1000
                     */
                    id?: string;
                    /**
                     * @description Name of the income or expense account.
                     * @example Bank of India
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the income or expense account.
                     * @example /objects/general-ledger/account/9
                     */
                    readonly href?: string;
                };
                /** @description References the interest liability account for the minority interest General Ledger (GL). */
                interestLiabilityGLAccount?: {
                    /**
                     * @description Unique key for the interest liability account.
                     * @example 123
                     */
                    key?: string;
                    /**
                     * @description Identifier for the interest liability account.
                     * @example 1100
                     */
                    id?: string;
                    /**
                     * @description Name of the interest liability account.
                     * @example State Bank Of India
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the interest liability account.
                     * @example /objects/general-ledger/account/12
                     */
                    readonly href?: string;
                };
            };
            /** @description References the location to which the consolidated financial data is assigned. */
            consolidatingLocation?: {
                /**
                 * @description Unique key for the consolidating location.
                 * @example 123
                 */
                key?: string;
                /**
                 * @description Identifier for the consolidating location.
                 * @example 999
                 */
                id?: string;
                /**
                 * @description Name of the consolidating location.
                 * @example India
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the consolidating location.
                 * @example /objects/company-config/location/65
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "company-config-advanced-consolidation-preferenceRequiredProperties": Record<string, never>;
        /** @description Manage settings and preferences for the Order Entry application. */
        "objects.company-config.order-entry-preference": {
            /**
             * @description System-assigned key for the Order Entry preference. This value must be set to `setup` for this object.
             * @example setup
             */
            key?: string;
            /**
             * @description The workflow that specifies transaction definitions to determine how Order Entry transactions are routed through your company's financial system.
             * @default none
             * @example inventory
             * @enum {string}
             */
            readonly installedWorkflow?: null | "none" | "inventory" | "nonInventory" | "inventoryAndNonInventory" | "invoiceOnly" | "softwareStandard" | "softwareWithActivation" | "custom";
            /** @description Applicable offset account information for Order Entry transactions in a simplified company setup. */
            accountingPreferences?: {
                /** @description The default General Ledger (GL) account to use for the credit side of Order Entry transactions (offset account). */
                offsetGLAccount?: {
                    /**
                     * @description System-assigned key for the offset GL account.
                     * @example 101
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the offset GL account.
                     * @example 2000
                     */
                    id?: string;
                    /**
                     * @description Name for the offset GL account.
                     * @example Account Payable - Offset
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the offset GL account.
                     * @example /objects/general-ledger/account/101
                     */
                    readonly href?: string;
                };
                /** @description The default unbilled account to use in unbilled workflows. */
                unbilledGLAccount?: {
                    /**
                     * @description System-assigned key for the unbilled GL account.
                     * @example 110
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the unbilled GL account.
                     * @example 2001
                     */
                    id?: string;
                    /**
                     * @description Name for the unbilled GL account.
                     * @example Account Payable - Unbilled
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the unbilled GL account.
                     * @example /objects/general-ledger/account/110
                     */
                    readonly href?: string;
                };
            };
            /**
             * @description For multi-currency companies, set to `true` to use multiple currencies in your Order Entry transactions.
             * @default false
             * @example true
             */
            enableForeignCurrency?: boolean;
            /**
             * @description Set to `true` to inherit the thresholds that are configured for the General Ledger and Accounts Payable for handling transactions that have a future GL posting date.
             * @default true
             * @example false
             */
            enableFuturePostingRestriction?: boolean;
            /**
             * @description Set to `true` to allow saving transactions as a draft to finish and post later. This setting does not apply to recurring transactions.
             * @default true
             * @example false
             */
            enableDraftMode?: boolean;
            /**
             * @description When `true`, draft transactions are not flagged as printed after any print or email option is used.
             * @default false
             * @example true
             */
            omitMarkDraftPrintedTxn?: boolean;
            /**
             * @description When `true`, allows access to payment details for Order Entry transactions directly. Applies only to transactions that post to Accounts Payable.
             * @default false
             * @example false
             */
            displayPaymentStatus?: boolean;
            /**
             * @description Advanced transaction processing provides access to the following features for Order Entry transactions:
             *     - Convert two or more transactions into one transaction
             *     - Convert line items from different transactions into one transaction
             *     - Process two or more transactions at a time
             * @default false
             * @example true
             */
            enableAdvanceTxnProcessing?: boolean;
            /**
             * @description When `true`, you can add a bill-to contact on contract invoice line items. Applicable to Contracts data only.
             * @default false
             * @example true
             */
            enableBillToContactAtLine?: boolean;
            /**
             * @description When `true`, you can add a ship-to contact on a transaction line item to:
             *       - Calculate tax at the line level based on the ship-to contact. Taxes are always calculated at the line level based on a ship-to contact.
             *         However, you can change the ship-to contact at the line level, depending on the transaction definition configuration.
             *       - Specify multiple ship-to addresses on a single sales transaction for use when printing sales documents.
             *     A ship-to contact at the line level for tax calculation is only applicable to Avalara and Advanced Tax users.
             * @default false
             * @example true
             */
            enableShipToContactAtLine?: boolean;
            /**
             * @description For sales transactions that use inventory from another entity, set to `true` to ensure that the value of the sold inventory is properly recorded in the General Ledger.
             *     Journal entries for inter-entity receivables and payables are automatically created for the COGS (cost of goods sold) when the sales transaction is posted.
             * @default false
             * @example true
             */
            enableInterEntityCOGSPostings?: boolean;
            /**
             * @description For top-level transactions in a multi-entity environment only. Set to `true` to have the dimension values that are enabled for line items used as the dimension values in the subtotal lines.
             *     If `editDimensionInSubtotal` is also `true`, the dimension values from the line items override any dimension values that are enabled for the lines in the subtotals.
             * @default false
             * @example true
             */
            useLineItemDimensionsInSubtotal?: boolean;
            /**
             * @description For top-level transactions in a multi-entity environment only. Set to `true` to specify dimension values in the subtotal lines for transactions.
             *     If `useLineItemDimensionsInSubtotal` is also `true`, the dimension values from the line items override any dimension values that are enabled for the lines in the subtotals.
             * @default false
             * @example true
             */
            editDimensionInSubtotal?: boolean;
            /**
             * @description When `editDimensionInSubtotal` is `true`, set this field to `true` at the top level in a multi-entity company, to enable selecting values for location and department in subtotal lines.
             * @default false
             * @example true
             */
            editLocationDepartmentInSubtotal?: boolean;
            /**
             * @description Applicable only for multi-entity companies and entity level users. Set to `true` to distribute dimensions across subtotal lines, including proportional distributions.
             *     For custom reports for subtotal details, the subtotal information for the entity-level transactions is included.
             * @default false
             * @example true
             */
            distributeDimensions?: boolean;
            /**
             * @description Set to `true` to select price instead of quantity (default) as a conversion option for non-inventory line items on orders and invoices.
             * @default false
             * @example true
             */
            enablePriceConversion?: boolean;
            /**
             * @description For non-inventory items, set to `true` to allow to change the default conversion type to price on orders and invoices.
             * @default false
             * @example true
             */
            overrideDefaultTxnConversionType?: boolean;
            /** @description Preferences applicable for construction enabled companies. */
            constructionPreferences?: {
                /**
                 * @description Set to `true` if you want a 0 (zero) to prefill on lines price or quantity (depending on conversion type) when converting a document, rather than converting the remaining amount.
                 * @default false
                 * @example true
                 */
                prefillConversionZero?: boolean;
                /**
                 * @description Set to `true` to include fully converted lines during conversion.
                 * @default false
                 * @example true
                 */
                includeFullyConvertedLines?: boolean;
                /**
                 * @description Set to `true` to enable reverse conversions.
                 * @default false
                 * @example true
                 */
                enableReverseConversions?: boolean;
            };
            /** @description Contact details for transactions. */
            contactPreferences?: {
                /**
                 * @description Specifies the source for adding contact details to emails with attached transactions (name, email address, and phone number).
                 *     - `userProfile` - Use the sender email details from user profile, if it exists, else use the company email.
                 *     - `contactProfile` - Use the sender email details from the company profile.
                 * @default userProfile
                 * @example contactProfile
                 * @enum {string}
                 */
                senderEmailProfile?: "userProfile" | "contactProfile";
                /**
                 * @description Determines whether to include all contacts or only contacts related to customer in transaction for pay-to, return-to, or deliver-to contacts.
                 *     - `all` - Include all contacts in transaction dropdown lists.
                 *     - `vendorContacts` - Restrict the contacts that are included in transaction dropdown lists to the contacts that are associated with the selected customer.
                 * @default all
                 * @example vendorContacts
                 * @enum {string}
                 */
                contactsInTxn?: "all" | "vendorContacts";
            };
            /** @description Tax preferences for Order Entry transactions. */
            taxPreferences?: {
                /**
                 * @description Enable Advanced Tax as the tax calculation method for Order Entry transactions:
                 *
                 *
                 *
                 *
                 *
                 *       - Set to `true` if your company is not subscribed to the Taxes application. This option enables Advanced Tax for the tax calculation method. You create tax details, tax schedules, and tax schedule maps to define the tax mapping that Sage Intacct uses to calculate taxes in transactions.
                 *       - Set to `false` if you've enabled Avalara AvaTax for your application or plan to use Simple Tax. Advanced Tax is not compatible with using either of these two other tax calculation methods.
                 *       - This field is set to `true` and cannot be changed if you're subscribed to the Taxes application. You can create an Advanced Tax solution and assign the tax solution to the applicable entities.
                 * @default false
                 * @example true
                 */
                enableAdvancedTax?: boolean;
                /**
                 * @description Set to `true` to use templates to populate the subtotals in transaction definitions. You can configure different entities to use different subtotals.
                 * @default false
                 * @example true
                 */
                enableSubtotalTemplates?: boolean;
                /**
                 * @description Set to `true` to override tax entry level for sale orders.
                 * @default false
                 * @example true
                 */
                overrideTaxScheduleOnLine?: boolean;
            };
            /** @description Price and discount preferences for Order Entry transactions. */
            priceAndDiscountPreferences?: {
                /**
                 * @description Set to `true` to enable adding a discount percent to line items on Order Entry transactions to add custom discounts.
                 * @default false
                 * @example true
                 */
                enableSuggestedPriceDiscount?: boolean;
                /**
                 * @description Set to `true` to enable price schedule for Order Entry transactions. You can then apply any price schedule associated with a customer to order entry for that customer.
                 * @default false
                 * @example true
                 */
                enablePriceSchedule?: boolean;
                /**
                 * @description Set to `true` to enable customer price lists for Order Entry transactions. You can then assign price lists to specific customers. If you assign a price list to a customer, the price list overrides the one associated with the transaction definition for the Order Entry transaction.
                 * @default false
                 * @example true
                 */
                enableCustomerPriceLists?: boolean;
                /**
                 * @description Set to `true` to enable fixed customer discount for Order Entry transactions. You can then apply the fixed or blanket discount percentage for a customer to Order Entry for that customer.
                 * @default false
                 * @example true
                 */
                enableFixedCustomerDiscount?: boolean;
            };
            /**
             * @description Determines the number of decimal places used for unit price and cost.
             * @default 2
             * @example 2
             */
            itemPrecision?: number;
            /**
             * @description Set to `true` if you have items that are contracts or subscriptions. When you enable this option, Intacct adds a Contract tab to the Item Information page so that you can define the contract period for an item.
             *     When this option is enabled, you can:
             *
             *
             *
             *
             *
             *       - Define the contract period for an item. For example, you might have a subscription item that has a 12-month period.
             *       - Add the item to an order, along with the actual start and end date.
             * @default false
             * @example true
             */
            enableStartAndEndDate?: boolean;
            /**
             * @description Set to `true` to enable grouping a set of individual components, which you build and invoice as a single item. For example, you can build a group of computer components into a computer that you sell and invoice as a single item.
             * @default false
             * @example true
             */
            enableKit?: boolean;
            /**
             * @description Determines whether you can save Order Entry or Inventory Control transactions that create negative inventory for items:
             *     - Set to `true` to prevent saving transactions that would cause the quantity on hand to become negative at all warehouses. Sage Intacct issues a warning message instead.
             *     - Set to `false` to permit transactions which cause the quantity on hand to become negative.
             * @default false
             * @example true
             */
            preventNegativeInventory?: boolean;
            /**
             * @description Set to `true` to prevent users from making certain changes during the workflow, such as editing a line item to increase the quantity or adding new line items. When `true`, users can still decrease quantities and delete line items.
             * @default false
             * @example true
             */
            disableQuantityChange?: boolean;
            /**
             * @description Set to `true` to enable advanced workflow for order entry transactions. When `true`, users can set up different transaction definitions for different types of order entry transactions.
             * @default false
             * @example true
             */
            enableAdvanceWorkflow?: boolean;
            /**
             * @description Set to `false` to validate whether a line reference exists between change order documents. A line reference between change orders determines the order in which you can delete change orders.
             * @default false
             * @example true
             */
            doNotValidateLinesBeforeDeleting?: boolean;
            /**
             * @description URL endpoint for the Order Entry preference.
             * @example /objects/company-config/order-entry-preference/setup
             */
            readonly href?: string;
            /**
             * @description If your company is subscribed to Order Entry and Purchasing, set to `true` to enable a drop-ship workflow that allows the system to automatically create Purchasing transactions for sales transaction line items that are selected for drop ship.
             * @default false
             * @example true
             */
            enableDropShip?: boolean;
            /** @description Details of the drop ship preference. */
            dropShipLines?: components["schemas"]["objects.order-entry.txn-drop-ship-preference"][];
            /**
             * @description If your company is subscribed to Order Entry and Purchasing, set to `true` to enable a buy-to-order workflow that allows the system to automatically create Purchasing transactions for sales transaction line items that are selected for buy to order.
             * @default false
             * @example true
             */
            enableBuyToOrder?: boolean;
            /** @description Details of the buy to order preference. */
            buyToOrderLines?: components["schemas"]["objects.order-entry.txn-buy-to-order-preference"][];
            /** @description Details of the document configuration preference. */
            documentConfigurationLines?: components["schemas"]["objects.order-entry.document-configuration-preference"][];
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description Use the purchasing preference object to manage settings and preferences for the Purchasing application. */
        "objects.company-config.purchasing-preference": {
            /**
             * @description System-assigned key for the Purchasing preference object. This value must be set to `setup` for this object.
             * @example setup
             */
            key?: string;
            /**
             * @description The workflow that specifies transaction definitions to determine how Purchasing transactions are routed through your company's financial system.
             * @default none
             * @example inventory
             * @enum {string}
             */
            readonly installedWorkflow?: null | "none" | "inventory" | "inventoryUnbilled" | "nonInventory" | "nonInventoryUnbilled" | "inventoryAndNonInventory" | "inventoryAndNonInventoryUnbilled" | "custom";
            /** @description Applicable offset account information for Purchasing transactions in a simplified company setup. */
            accountingPreferences?: {
                /** @description The default Accounts Payable (AP) account to use for the credit side of Purchasing transactions (offset account). */
                offsetGLAccount?: {
                    /**
                     * @description System-assigned key for the offset GL account.
                     * @example 101
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the offset GL account.
                     * @example 2000
                     */
                    id?: string;
                    /**
                     * @description Name for the offset GL account.
                     * @example Account Payable - Offset
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the offset GL account.
                     * @example /objects/general-ledger/account/101
                     */
                    readonly href?: string;
                };
                /** @description The default unbilled account to use in unbilled workflows. */
                unbilledGLAccount?: {
                    /**
                     * @description System-assigned key for the unbilled GL account.
                     * @example 110
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the unbilled GL account.
                     * @example 2001
                     */
                    id?: string;
                    /**
                     * @description Name for the unbilled GL account.
                     * @example Account Payable - Unbilled
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint for the unbilled GL account.
                     * @example /objects/general-ledger/account/110
                     */
                    readonly href?: string;
                };
            };
            /**
             * @description For multi-currency companies, set to `true` to use multiple currencies in your Purchasing transactions.
             * @default false
             * @example true
             */
            enableForeignCurrency?: boolean;
            /**
             * @description Set to `true` to inherit the thresholds that are configured for the General Ledger and Accounts Payable for handling transactions that have a future GL posting date.
             * @default false
             * @example false
             */
            enableFuturePostingRestriction?: boolean;
            /**
             * @description Set to `true` to allow saving transactions as a draft to finish and post later. This setting does not apply to recurring transactions.
             * @default true
             * @example false
             */
            enableDraftMode?: boolean;
            /**
             * @description Indicates whether access to Purchasing transactions is restricted for employee users:
             *     - When `true`, employee users can only access the Purchasing transactions that they created.
             *     - When `false`, employee users can access all Purchasing transactions that have a template type set to `quote`.
             * @default false
             * @example true
             */
            restrictEmployeeToPurchasing?: boolean;
            /**
             * @description When `true`, allows to access payment details for Purchasing transactions directly. Applies only to transactions that post to Accounts Payable.
             * @default false
             * @example false
             */
            displayPaymentStatus?: boolean;
            /**
             * @description Advanced transaction processing provides access to the following features for Purchasing transactions:
             *     - Convert two or more transactions into one transaction
             *     - Convert line items from different transactions into one transaction
             *     - Process two or more transactions at a time
             * @default false
             * @example true
             */
            enableAdvanceTxnProcessing?: boolean;
            /**
             * @description Use to add a deliver-to contact to Purchasing transactions to:
             *     - Calculate tax using the contact that corresponds to where your company will take possession of products or services and optionally calculate line-level tax subtotals for different deliver-to contacts. Only applicable to Avalara and Advanced Tax.
             *     - Specify multiple delivery addresses on a single Purchasing transaction for use when printing Purchasing documents.
             */
            deliverToContactPreferences?: {
                /**
                 * @description When `true`, users can set default deliver-to contact at the header level of the Purchasing transaction.
                 * @default false
                 * @example true
                 */
                deliverToHeaderLevelContact?: boolean;
                /** @description When `deliverToHeaderLevelContact` is `true`, specifies the deliver-to contact for the Purchasing transactions. */
                deliverToContact?: {
                    /**
                     * @description System-assigned key for the deliver-to contact.
                     * @example 1
                     */
                    key?: string;
                    /**
                     * @description Unique identifier or name for the deliver-to contact.
                     * @example Joe
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the deliver-to contact.
                     * @example /objects/company-config/contact/1
                     */
                    readonly href?: string;
                };
                /**
                 * @description Set to `true` to allow different deliver-to contacts for the line items in a Purchasing transaction. Enabling line-level deliver-to contacts also enables line-level subtotals.
                 * @default false
                 * @example true
                 */
                deliverToLineLevelContact?: boolean;
            };
            /**
             * @description For multi-currency companies, enables additional postings to be posted in the transaction currency and not the base currency.
             *     Posting in the transaction currency ensures that journal entries are consistently recorded for all posted transactions in compliance with the rules for multi-currency transaction posting. The transaction currency is converted to the base currency using the exchange rate in effect at the time transactions are posted.
             * @default false
             * @example true
             */
            postAdditionsInTxnCurrency?: boolean;
            /**
             * @description Set to `true` to enable match tolerances, which validate the percent tolerance for quantity and unit price when converting a source transaction to the transaction to validate. Sage Intacct flags the lines in the transaction as an exception, when either the quantity, unit price, or both is higher or lower than the percent tolerance.
             *     Manage transaction definitions that you want to validate and the percent tolerance for quantity and unit price using the 'purchasing/match-tolerance-setup' object.
             * @default false
             * @example true
             */
            enableMatchTolerances?: boolean;
            /**
             * @description Match tolerance GL account. When `enableMatchTolerances` is set to `true`, the variance posts to this account.
             *     When `null`, the variance posts according to the account mapping in the transaction definition.
             */
            matchTolerancesGLAccount?: {
                /**
                 * @description System-assigned key for the match tolerance GL account.
                 * @example 201
                 */
                key?: string;
                /**
                 * @description Unique identifier for the match tolerance GL account.
                 * @example 2101
                 */
                id?: string;
                /**
                 * @description Name for the match tolerance GL account.
                 * @example Variance Account
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the match tolerance GL account.
                 * @example /objects/general-ledger/account/201
                 */
                readonly href?: string;
            };
            /**
             * @description For top-level transactions in a multi-entity environment only. Set to `true` to have the dimension values that are specified for line items used as the dimension values in the subtotal lines.
             *     If `editDimensionInSubtotal` is also `true`, the dimension values from the line items override any dimension values that are specified for the lines in the subtotals.
             * @default false
             * @example true
             */
            useLineItemDimensionsInSubtotal?: boolean;
            /**
             * @description For top-level transactions in a multi-entity environment only. Set to `true` to specify dimension values in the subtotal lines for transactions.
             *     If `useLineItemDimensionsInSubtotal` is also `true`, the dimension values from the line items override any dimension values that are specified for the lines in the subtotals.
             * @default false
             * @example true
             */
            editDimensionInSubtotal?: boolean;
            /**
             * @description When `allowEditDimensionInSubtotal` is `true`, set this field to `true` to allow to specify values for location and department in the subtotal lines, at the top level in a multi-entity company.
             * @default false
             * @example true
             */
            editLocationDepartmentInSubtotal?: boolean;
            /**
             * @description Applicable only for multi-entity companies at entity level users. Set to `true` to distribute dimensions across subtotal lines, including proportional distributions.
             *     When you run custom reports for subtotal details, the subtotal information for the entity-level transactions is included.
             * @default false
             * @example true
             */
            distributeDimensions?: boolean;
            /**
             * @description Set to `true` to choose price instead of quantity (default) as a conversion option for non-inventory line items on orders and invoices.
             * @default false
             * @example true
             */
            enablePriceConversion?: boolean;
            /**
             * @description For non-inventory items, set to `true` to change the default conversion type to price on orders and invoices.
             * @default false
             * @example true
             */
            overrideDefaultTxnConversionType?: boolean;
            /**
             * @description Set to `true` to convert multiple documents, including lines of documents, into a single Purchasing transaction so that you can pay a vendor in one payment.
             * @default false
             * @example true
             */
            enableMultipleDocumentConversion?: boolean;
            /** @description Construction preferences, for Construction enabled companies. */
            constructionPreferences?: {
                /**
                 * @description Set to `true` to prefill conversion price or quantity (depending on conversion type) with 0 (zero).
                 * @default false
                 * @example true
                 */
                prefillConversionZero?: boolean;
                /**
                 * @description Set to `true` to include fully converted lines during conversion.
                 * @default false
                 * @example true
                 */
                includeFullyConvertedLines?: boolean;
                /**
                 * @description Set to `true` to enable reverse conversions.
                 * @default false
                 * @example true
                 */
                enableReverseConversions?: boolean;
            };
            /** @description Contact preferences for Purchasing transactions. */
            contactPreferences?: {
                /**
                 * @description The source for contact details in emails with attached transactions (name, email address, and phone number).
                 * @default userProfile
                 * @example contactProfile
                 * @enum {string}
                 */
                senderEmailProfile?: null | "userProfile" | "contactProfile";
                /**
                 * @description Indicates whether to include all contacts or restrict to contacts related to a specified vendor, in transaction for pay-to, return-to, or deliver-to contacts.
                 * @default all
                 * @example vendorContacts
                 * @enum {string}
                 */
                contactsInTxn?: "all" | "vendorContacts";
            };
            /** @description Tax preferences for Purchasing transactions. */
            taxPreferences?: {
                /**
                 * @description Set to `true` to use Advanced Tax as the tax calculation method. Create tax details, schedules, and tax schedule maps to define the tax mapping for the tax calculations in transactions. Set to `true` by default when subscribed to the Taxes application and cannot modified.
                 *
                 *     Set to `false` if you've enabled Avalara AvaTax or plan to use Simple Tax. Advanced Tax is not compatible with using either of these two other tax calculation methods.
                 * @default false
                 * @example true
                 */
                enableAdvancedTax?: boolean;
                /**
                 * @description Set to `true` to use templates to populate the subtotals in transaction definitions. You can configure transaction definitions to use different subtotals for different entities.
                 *     Transactions created from an entity will use the subtotals from the subtotal template associated with the entity.
                 * @default false
                 * @example true
                 */
                enableSubtotalTemplates?: boolean;
                /**
                 * @description Set to `true` to override the tax entry level for purchase orders.
                 * @default false
                 * @example true
                 */
                overrideTaxScheduleOnLine?: boolean;
            };
            /** @description Price and discount preferences for Purchasing transactions. */
            priceAndDiscountPreferences?: {
                /**
                 * @description Set to `true` to apply any price schedule associated with a vendor to purchasing for that vendor.
                 * @default false
                 * @example true
                 */
                enablePriceSchedule?: boolean;
                /**
                 * @description Enable vendor price lists for Purchasing transactions. This enables you to assign price lists to specific vendors. If you assign a price list to a vendor, this price list overrides the one associated with the transaction definition for the Purchasing transaction.
                 * @default false
                 * @example true
                 */
                enableVendorPriceLists?: boolean;
                /**
                 * @description Set to `true` to apply the fixed or blanket discount percentage for a vendor to purchasing for that vendor.
                 * @default false
                 * @example true
                 */
                enableFixedVendorDiscount?: boolean;
            };
            /**
             * @description The default is 2 decimal places for unit price and cost. Depending on your required level of precision, you can set as many as 10 decimal places.
             * @default 2
             * @example 2
             */
            itemPrecision?: number;
            /**
             * @description Set to `true` to prevent certain changes during the workflow, such as modifying a line item to increase the quantity or adding new line items. You can still decrease quantities and delete line items.
             * @default false
             * @example true
             */
            disableQuantityChange?: boolean;
            /** @description Price variance GL posting preferences for Purchasing transaction. */
            priceVarianceGLPostingPreferences?: {
                /**
                 * @description Set to `true` to have the variance between the standard cost and the actual purchase or invoice price automatically posted.
                 * @default false
                 * @example true
                 */
                automatePriceVariancePosting?: boolean;
                /** @description Price variance GL account for Purchasing transactions. */
                purchasePriceVarianceGLAccount?: {
                    /**
                     * @description System-assigned key for the price variance GL account.
                     * @example 202
                     */
                    key?: string;
                    /**
                     * @description Unique identifier fot the price variance GL account.
                     * @example 2102
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the price variance GL account.
                     * @example /objects/general-ledger/account/202
                     */
                    readonly href?: string;
                };
                /** @description Invoice price variance GL account. */
                invoicePriceVarianceGLAccount?: {
                    /**
                     * @description System-assigned key for the invoice price variance GL account.
                     * @example 203
                     */
                    key?: string;
                    /**
                     * @description Unique identifier for the invoice price variance GL account.
                     * @example 2103
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the invoice price variance GL account.
                     * @example /objects/general-ledger/account/203
                     */
                    readonly href?: string;
                };
            };
            /** @description Approval preferences for Purchasing transactions. */
            approvalPreferences?: {
                /**
                 * @description Set to `true` to enable approval workflow for Purchasing transactions. Manage approval policies and rules via the `purchasing/approval-policy` object.
                 * @default false
                 * @example true
                 */
                enablePurchasingApproval?: boolean;
                /**
                 * @description Set to `true` to require a vendor to be specified on the transaction before being sent for approval. After a vendor is specified for the transaction, the vendor cannot be changed.
                 * @default false
                 * @example true
                 */
                requireVendorForApproval?: boolean;
                /**
                 * @description Specify the conditions under which a transaction requires reapproval.
                 *     - `noReapproval` - The transaction does not require reapproval.
                 *     - `whenLineAmountChange` - The transaction requires reapproval only if the line amount changes.
                 *     - `anyLineOrSubtotalAmountChange` - The transaction requires reapproval if any line or subtotal amount changes.
                 * @default noReapproval
                 * @example lineAmountChange
                 * @enum {string}
                 */
                requireReapproval?: "noReapproval" | "lineAmountChange" | "anyLineOrSubtotalAmountChange";
                /**
                 * @description Set to `true` to enable email notifications for Purchasing approval transactions.
                 * @default false
                 * @example true
                 */
                enableEmailNotifications?: boolean;
                /**
                 * @description Set to `true` to enable delegation for Purchasing approval, so that an admin user can delegate their approval tasks to another user.
                 * @default false
                 * @example true
                 */
                enableDelegation?: boolean;
                /** @description An admin user who can terminate the rest of the approval cycle for a transaction by approving or declining the transaction. */
                adminApprover?: {
                    /**
                     * @description System-assigned key of the user.
                     * @example 6
                     */
                    key?: string;
                    /**
                     * @description Unique identifier of the user.
                     * @example John
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the user.
                     * @example /objects/company-config/user/6
                     */
                    readonly href?: string;
                };
            };
            /**
             * @description Set to `true` to enable advanced workflows for Purchasing transactions. Turning on advanced workflows cannot be reversed. If you enable advanced workflows in one application, it is automatically enabled for Order Entry, Purchasing, and Inventory Control.
             * @default false
             * @example true
             */
            enableAdvanceWorkflow?: boolean;
            /**
             * @description With AP Automation with Purchasing, you define which Purchasing transactions you want to automate. You can automate transactions with document matching, without document matching, or both.
             *     Then, instead of manually adding and converting Purchasing documents to vendor invoices, you let Sage Intacct create incoming transactions using email or upload vendor invoice documents for automated processing.
             */
            automationPreferences?: {
                /**
                 * @description Set to `true` to automate transactions with document matching. Manage the transaction definition mapping via the 'purchasing/txn-automation-preference' object.
                 * @default false
                 * @example true
                 */
                enableAutomationWithDocumentMatching?: boolean;
                /**
                 * @description Set to `true` to enable line level matching for Purchasing automation. When enabled, automation matches with line items from the document.
                 * @default false
                 * @example true
                 */
                enableLineLevelPOMatching?: boolean;
                /**
                 * @description Set to `true` to enable standalone purchase order matching for Purchasing automation. Manage transaction definition mapping via the 'purchasing/txn-automation-without-match-preference' object.
                 * @default false
                 * @example true
                 */
                enableAutomationNoDocumentMatching?: boolean;
            };
            /**
             * @description By default, transaction line items for a 1099 vendor are flagged for 1099 treatment. Set this field to `true` to let users manage individual line items, which exclude them from a 1099 form for a 1099 vendor.
             * @default false
             * @example true
             */
            enableForm1099?: boolean;
            /**
             * @description By default, all transaction line items for a vendor are associated with a specific 1099 form and box. Set this field to `true` to override the default for an individual line item within a transaction.
             * @default false
             * @example true
             */
            enableOverrideForm1099?: boolean;
            /**
             * @description Set to `true` to validate whether a line reference exists between change order documents. A line reference between change orders determines the order in which you can delete change orders.
             * @default false
             * @example true
             */
            doNotValidateLinesBeforeDeleting?: boolean;
            /**
             * @description URL endpoint for the Purchasing setup.
             * @example /objects/company-config/purchasing-preference/setup
             */
            readonly href?: string;
            /** @description Details of the match tolerance configuration. */
            txnMatchToleranceLines?: components["schemas"]["objects.purchasing.txn-match-tolerance-preference"][];
            /** @description Details of the transaction automation preference. */
            txnAutomationLines?: components["schemas"]["objects.purchasing.txn-automation-preference"][];
            /** @description Details of the transaction automation without matching preferences. */
            txnAutomationWithoutMatchLines?: components["schemas"]["objects.purchasing.txn-automation-without-match-preference"][];
            /** @description Details of the document configuration preference. */
            documentConfigurationLines?: components["schemas"]["objects.purchasing.document-configuration-preference"][];
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
        /**
         * @description Object status. Active objects are fully functional. Inactive objects are essentially hidden and cannot be used or referenced.
         * @default active
         * @example active
         * @enum {string}
         */
        status: "active" | "inactive";
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
        /**
         * @example may
         * @enum {string|null}
         */
        month: null | "january" | "february" | "march" | "april" | "may" | "june" | "july" | "august" | "september" | "october" | "november" | "december";
        /**
         * @example monday
         * @enum {string|null}
         */
        weekdays: null | "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
        /**
         * @example france
         * @enum {string|null}
         */
        country: null | "unitedStates" | "afghanistan" | "alandIslands" | "albania" | "algeria" | "americanSamoa" | "andorra" | "angola" | "anguilla" | "antarctica" | "antiguaAndBarbuda" | "argentina" | "armenia" | "aruba" | "australia" | "austria" | "azerbaijan" | "bahamas" | "bahrain" | "bangladesh" | "barbados" | "belarus" | "belgium" | "belize" | "benin" | "bermuda" | "bhutan" | "bolivia" | "bonaire,SintEustatiusAndSaba" | "bosniaAndHerzegovina" | "botswana" | "bouvetIsland" | "brazil" | "britishIndianOceanTerritory" | "bruneiDarussalam" | "bulgaria" | "burkinaFaso" | "burundi" | "cambodia" | "cameroon" | "canada" | "canaryIslands" | "capeVerde" | "caymanIslands" | "centralAfricanRepublic" | "chad" | "chile" | "china" | "christmasIsland" | "cocos(Keeling)Islands" | "colombia" | "comoros" | "congo" | "congo,DemocraticRepublic" | "cookIslands" | "costaRica" | "côteD'Ivoire" | "croatia" | "cuba" | "curaçao" | "cyprus" | "czechRepublic" | "denmark" | "djibouti" | "dominica" | "dominicanRepublic" | "ecuador" | "egypt" | "elSalvador" | "equatorialGuinea" | "eritrea" | "estonia" | "eswatini" | "ethiopia" | "falklandIslands(Malvinas)" | "faroeIslands" | "fiji" | "finland" | "france" | "frenchGuiana" | "frenchPolynesia" | "frenchSouthernTerritories" | "gabon" | "gambia" | "georgia" | "germany" | "ghana" | "gibraltar" | "greece" | "greenland" | "grenada" | "guadeloupe" | "guam" | "guatemala" | "guernsey" | "guinea" | "guineaBissau" | "guyana" | "haiti" | "heardIs.&McdonaldIslands" | "honduras" | "hongKong" | "hungary" | "iceland" | "india" | "indonesia" | "iran,IslamicRepublicOf" | "iraq" | "ireland" | "isleOfMan" | "israel" | "italy" | "jamaica" | "japan" | "jersey" | "jordan" | "kazakhstan" | "kenya" | "kiribati" | "korea,RepublicOf" | "korea,Demo.People'sRep." | "kosovo" | "kuwait" | "kyrgyzstan" | "lao" | "latvia" | "lebanon" | "lesotho" | "liberia" | "libyanArabJamahiriya" | "liechtenstein" | "lithuania" | "luxembourg" | "macao" | "macedonia" | "madagascar" | "malawi" | "malaysia" | "maldives" | "mali" | "malta" | "marshallIslands" | "martinique" | "mauritania" | "mauritius" | "mayotte" | "mexico" | "micronesia" | "moldova,RepublicOf" | "monaco" | "mongolia" | "montenegro" | "montserrat" | "morocco" | "mozambique" | "myanmar" | "namibia" | "nauru" | "nepal" | "netherlands" | "netherlandsAntilles" | "newCaledonia" | "newZealand" | "nicaragua" | "niger" | "nigeria" | "niue" | "norfolkIsland" | "northernMarianaIslands" | "norway" | "oman" | "pakistan" | "palau" | "palestine,StateOf" | "panama" | "papuaNewGuinea" | "paraguay" | "peru" | "philippines" | "pitcairn" | "poland" | "portugal" | "puertoRico" | "qatar" | "reunion" | "romania" | "russianFederation" | "rwanda" | "saintBarthelemy" | "saintHelena" | "saintKittsAndNevis" | "saintLucia" | "saintMartin" | "saintPierreAndMiquelon" | "saintVincentAndTheGrenadines" | "samoa" | "sanMarino" | "saoTomeAndPrincipe" | "saudiArabia" | "senegal" | "serbia" | "seychelles" | "sierraLeone" | "singapore" | "sintMaarten" | "slovakia" | "slovenia" | "solomonIslands" | "somalia" | "southAfrica" | "s.Georgia&S.SandwichIs." | "spain" | "sriLanka" | "sudan" | "southSudan" | "suriname" | "svalbardAndJanMayen" | "sweden" | "switzerland" | "syrianArabRepublic" | "taiwan" | "tajikistan" | "tanzania,UnitedRepublicOf" | "thailand" | "timorLeste" | "togo" | "tokelau" | "tonga" | "trinidadAndTobago" | "tunisia" | "turkey" | "turkmenistan" | "turksAndCaicosIslands" | "tuvalu" | "uganda" | "ukraine" | "unitedArabEmirates" | "unitedKingdom" | "uSMinorOutlyingIslands" | "uruguay" | "uzbekistan" | "vanuatu" | "vaticanCityState" | "venezuela" | "vietnam" | "virginIslands,British" | "virginIslands,U.S." | "wallisAndFutuna" | "westernSahara" | "yemen" | "zambia" | "zimbabwe";
        /**
         * @example edit
         * @enum {string}
         */
        "permission-access-rights": "ach" | "achSetup" | "add" | "addExpense" | "apiProxy" | "approvalLevel1" | "approvalLevel2" | "approvalLevel3" | "approvalLevel4" | "approvalLevel5" | "approvalLevel6" | "authorize" | "cancel" | "calendar" | "clone" | "close" | "config" | "confirm" | "delete" | "deleteExpense" | "edit" | "editExpense" | "enable" | "export" | "final" | "financial" | "group" | "ignore" | "import" | "impersonate" | "level1" | "level2" | "level3" | "level4" | "level5" | "level6" | "list" | "listExpenses" | "manualMatch" | "mapAccount" | "menu" | "modify" | "offsetAccount" | "open" | "overrideException" | "permission" | "post" | "print" | "readonly" | "readonlyExpense" | "receipts" | "reclass" | "reclassExpense" | "reconcile" | "refresh" | "release" | "reopen" | "report" | "resend" | "reversalEdit" | "reverse" | "reverseExpense" | "run" | "statutoryReportingPeriod" | "submit" | "subscribe" | "template" | "uncancel" | "unmask" | "upload" | "view" | "viewAll" | "void" | "reassignDimensions";
        /**
         * @description Permission module.
         * @example accountsPayable
         * @enum {string}
         */
        module: "accountsPayable" | "accountsReceivable" | "administration" | "advancedAuditTrail" | "aiMachineLearning" | "avalaraTax" | "budgets" | "cashManagement" | "company" | "console" | "consolidation" | "construction" | "constructionPayroll" | "contracts" | "customizationServices" | "dataDeliveryService" | "dataImport" | "digitalBoardBook" | "digitalNetworkSync" | "dimensionSync" | "dynamicAllocations" | "eInvoicing" | "externalServicesProvider" | "fixedAssets" | "generalLedger" | "globalTransactionSecurity" | "intacctCollaborate" | "intacctSalesforceIntegration" | "intacctSalesforceIntegrationV2" | "interactiveCustomReportWriter" | "interactiveVisualExplorer" | "inventoryApplications" | "inventoryControl" | "managementConsole" | "managementConsoleConsolidation" | "msTeamsIntegration" | "multiEntity" | "myAccounting" | "myClients" | "myPractice" | "orderEntry" | "outboundPaymentServices" | "outsourcedPaymentServices" | "paymentServices" | "projects" | "purchasing" | "quickbooksMigration" | "realEstate" | "revenueManagement" | "saasMetrics" | "sageCloudServices" | "sageCopilotCloseAssistant" | "sageIntacctBudgetingAndPlanningConnector" | "sagePeople" | "siCollaboration" | "siFundRaising" | "smartTransaction" | "spendManagement" | "suppliesInventory" | "taxExport" | "taxes" | "expenses" | "vendorCompliance" | "webServices" | "wellsFargoPaymentManager" | "loanManagement" | "budgetVsActual" | "depositoryManagement" | "time" | "siEMRConnect" | "closeWorkspace" | "paymentAcceptanceServices" | "fieldWorkOrderManagement" | "taxServices" | "financeIntelligenceAgent" | "managementConsoleReporting";
        /**
         * @description Permission name
         * @example postedPayments
         * @enum {string}
         */
        "permission-name": "1099Reports" | "aatrix" | "accessLog" | "accountAllocationDefinitions" | "accountAllocationGroups" | "accountGroups" | "accountMappingStatus" | "accountTitleByEntity" | "accountingEntriesFile" | "accountingPeriods" | "accounts" | "accumulationTypes" | "achBankConfigurations" | "achFileGenerator" | "achPaymentFile" | "addToCheckRun" | "adjustAccount" | "adjustedAvailableCash" | "adjustingJournalEntries" | "adjustmentJournals" | "adjustments" | "affiliateEntityGroups" | "aisle" | "analysisAndReporting" | "apAccountLabels" | "apAdvances" | "apAmortizationForecastReport" | "apAmortizationTemplate" | "apBillsApprovalLevels" | "apLedger" | "apOpenItemsRevaluationReport" | "apReleaseRetainage" | "apTerms" | "applicationAdministration" | "applicationSetup" | "applicationSubscriptions" | "applyPenalties" | "approveBills" | "approveExpenses" | "approveJournalEntries" | "approvePayments" | "approvePurchaseTransaction" | "approveReimbursements" | "approveTimesheets" | "approveVendors" | "arAccountLabelTaxGroups" | "arAccountLabels" | "arAmortizationForecastReport" | "arAmortizationTemplate" | "arLedger" | "arOpenItemsRevaluationReport" | "arReleaseRetainage" | "arTerms" | "archive" | "assignmentCategories" | "assignmentConstraints" | "assignmentDependents" | "assignmentStatus" | "assignments" | "assuranceDocuments" | "attachmentFolders" | "attachments" | "auditLog" | "automatedTransactions" | "bankAccounts" | "bankCheckRegister" | "bankFeeds" | "bankFile" | "bankFileGenerator" | "bankInterestAndCharges" | "bankTransactionAssignmentRules" | "bankTransactionRuleSets" | "bankTransactionRules" | "bankTransactions" | "billBackTemplates" | "billPercentageRent" | "billingGroup" | "billingGroupInvoicePreview" | "billingGroupInvoiceRuns" | "billingTemplate" | "bills" | "bin" | "binFace" | "binSize" | "books" | "budgetVariance" | "budgets" | "buildAndDisassembleKits" | "bulkActionRuns" | "caDe542Report" | "cancelService" | "cashAnalysis" | "cashBalances" | "cashRequirements" | "changeRequestStatus" | "changeRequestTypes" | "changeRequests" | "chargeCardAccounts" | "chargeCardRegister" | "chargeCardTransactions" | "chargePayoffs" | "checkReconciliation" | "checkRegister" | "checkRun" | "checkRunDetail" | "checkingAccounts" | "checklistCategories" | "checklistItem" | "checklistOptions" | "checklistStatus" | "checklists" | "checks" | "class" | "classGroups" | "classId" | "clearCompanyData" | "clients" | "closeAnalytics" | "closeAssistant" | "closeChecklistTemplateTasks" | "closeChecklistTemplates" | "closeChecklists" | "closeDashboard" | "closeTaskCategories" | "closeTaskTemplates" | "closeTasks" | "closeTemplateCategories" | "cloudStorage" | "cmRevaluationReport" | "companyInformationMyPractice" | "companySetupChecklist" | "compensationTables" | "complianceRecords" | "complianceSetup" | "configuration" | "consolidateStructure" | "consolidateSubsidiaryData" | "constructionReporting" | "consumerPriceIndexEscalations" | "contactTaxGroup" | "contacts" | "contract" | "contractBillingTemplate" | "contractComplianceChecklist" | "contractComplianceTaskItem" | "contractExpenseTemplate" | "contractGroups" | "contractMEAPriceList" | "contractPriceList" | "contractRevenueTemplate" | "contractTypes" | "contracts" | "contributions" | "costCodeOverrides" | "costTypeGroups" | "costTypes" | "costingChanges" | "coverLetters" | "creditCardChargesAndOtherFees" | "customApplicationsWithUserDefinedDimensions" | "customReports" | "customerAgingReportsGraphs" | "customerBacklog" | "customerBankAccounts" | "customerCardAccounts" | "customerGLGroups" | "customerGroups" | "customerListReport" | "customerReconciliation" | "customerTypes" | "customers" | "cycleCounts" | "dashboard" | "dataDeliveryService" | "datevDataExport" | "deferredRevenueDetails" | "deferredRevenueForecast" | "deferredRevenueForecastGraph" | "deferredRevenueRevaluationReport" | "departmentActivityReport" | "departmentGroups" | "departmentId" | "departmentMappingStatus" | "departments" | "deposits" | "depositsRegister" | "documentNumbering" | "drillDownToAllTransactionsFromReports" | "dunningLevels" | "eReports" | "earningTypes" | "electronicReceipts" | "emailDeliveryLog" | "emailTemplates" | "employeeAgingReportsGraphs" | "employeeGroups" | "employeeOutOfOffice" | "employeePositions" | "employeeRates" | "employeeTypes" | "employees" | "entities" | "entity" | "escalations" | "estimateTypes" | "evergreenTemplates" | "exchangeRate" | "exchangeRateTypes" | "executiveSummary" | "expenseAdjustments" | "expenseApprovalLevels" | "expenseLedger" | "expensePaymentTypes" | "expenseRecovery" | "expenseSummaries" | "expenseTypes" | "exportClientTaxData" | "extendedGeneralLedger" | "externalAuthorizations" | "fairValuePriceListEntry" | "fairValuePriceLists" | "financeIntelligenceAgentAccess" | "financialContexts" | "financialInstitution" | "financials" | "form1099" | "fulfillment" | "fundsTransfers" | "gaapAdjustingEntries" | "gaapAdjustmentJournals" | "ganttChart" | "generalLedger" | "generalLedgerRevaluationReport" | "generateAllocation" | "generateInvoices" | "generateLateCharges" | "generateReceipt" | "generateScheduledCharges" | "glAccountId" | "glDynamicAccountReclassificationReport" | "glMatching" | "glMatchingActivity" | "goBDDataExport" | "grantAdminRights" | "graphs" | "hourTypes" | "imports" | "individualCharges" | "initialOpenItems" | "interEntityAccountMapping" | "interEntityTransactions" | "interactiveAccountGroups" | "interactiveCustomReports" | "interactiveDataVisualizationReports" | "interactiveReportAreas" | "interactiveReportsMasterConsumerRole" | "interestrates" | "inventoryAnalysis" | "inventoryControlSetup" | "inventoryCosting" | "inventoryCycles" | "inventoryFulfillment" | "inventoryJournal" | "inventoryRecurring" | "inventoryRegister" | "inventoryReorders" | "inventorySelfHelp" | "inventoryStatus" | "inventoryTotals" | "inventoryTransactionDefinitions" | "inventoryTransactions" | "inventoryValuation" | "invoicePolicies" | "invoices" | "itemActivity" | "itemGLGroups" | "itemGroups" | "itemProfitability" | "itemTaxGroups" | "items" | "jobs" | "journalActivityReport" | "journalEntries" | "journalEntryMappingLink" | "journals" | "kitAnalysis" | "laborClasses" | "laborShifts" | "laborUnions" | "landedCostAdjustment" | "landedCostsCategory" | "leaseRenewal" | "leases" | "linkSubsidiaries" | "loanTypes" | "loans" | "locationActivityReport" | "locationGroups" | "locationMappingStatus" | "locations" | "lotCategory" | "lotTracking" | "maintainInventoryValuation" | "manageBooks" | "manageContributions" | "managePayments" | "managePlan" | "manageProjectBillableExpenses" | "manageResourceSchedules" | "manageSchedules" | "manageSupplies" | "manageTimesheets" | "managementCompanies" | "managementFees" | "managersAndBrokers" | "mandates" | "manualPayment" | "mapReportingInstance" | "meaAllocation" | "memorizedEntryTemplates" | "memorizedReportGroups" | "memorizedReports" | "messages" | "multiCurrencyProcessing" | "myExpenses" | "myTimesheets" | "notes" | "offlineJobQueue" | "opsbidBills" | "orderAnalysis" | "orderEntrySetup" | "orderEntryStatus" | "orderEntryTransactionDefinitions" | "orderEntryTransactions" | "otherReceipts" | "ownerDistribution" | "ownerInformation" | "ownershipStructure" | "partnerSyncEvents" | "payBills" | "payGroups" | "payInAdvance" | "paymentAccountInformation" | "paymentDefaults" | "paymentExchangeRateInformation" | "paymentManagerPayments" | "paymentRequests" | "payments" | "payrollReportCheck" | "payrollReportCheckSummary" | "payrollReportCompensationTable" | "payrollReportEmployee" | "payrollReportGrossPay" | "payrollReportHourType" | "payrollReportPTOAccrualSchedule" | "payrollReportPayGroup" | "payrollReportPayModifier" | "payrollReportPayModifierSetup" | "payrollReportPtoActivity" | "payrollReportPtoType" | "payrollReportTax" | "payrollReportTaxSetup" | "payrollReportTimecard" | "payrollReportTimecardReport" | "payrollReportTrade" | "payrollReportUnionLocal" | "pendingReimbursements" | "period" | "periodMappingStatus" | "physicalInventory" | "pickEngagements" | "pickList" | "pickingList" | "planStatement" | "poTransactionDefinitions" | "positionsAndSkills" | "postExpenseReports" | "postScheduledTransactions" | "postTemplates" | "postedAdvances" | "postedPayments" | "postedReimbursements" | "preferences" | "preparerSignoff" | "priceListEntry" | "priceLists" | "priceSchedules" | "printChecks" | "printEMailDocuments" | "printEMailDunningNotice" | "printEMailInvoices" | "printEMailStatements" | "printPaymentCopies" | "printedDocumentTemplates" | "priorPeriodCogsAdjustments" | "processContractSchedules" | "productLine" | "productLines" | "projectChangeOrders" | "projectContractInvoicing" | "projectContractRateTables" | "projectContractTypes" | "projectContracts" | "projectDetailReporting" | "projectEstimates" | "projectExpenses" | "projectGroups" | "projectResources" | "projectStatus" | "projectTransactions" | "projectTypes" | "projects" | "properties" | "ptoAccrualSchedules" | "ptoTypes" | "purchasePriceVarianceInvoicePriceVariance" | "purchasingAnalysis" | "purchasingApprovalLevels" | "purchasingRecurring" | "purchasingSetup" | "purchasingTransaction" | "purchasingTransactions" | "quickCheckEntry" | "quickDeposits" | "receiptHistory" | "receiptsRegister" | "receiveAdvances" | "reclassificationReport" | "reconcileBank" | "reconcileCharges" | "reconcileCreditCard" | "recoveryTemplates" | "recurringAllocations" | "recurringBills" | "recurringInvoices" | "recurringJournalEntries" | "recurringSchedules" | "recurringStatisticalJournalEntries" | "recurringTransactionForecast" | "recurringTransactionStatus" | "recurringTransactions" | "refunds" | "releaseToPay" | "renewalTemplates" | "renewalsForecast" | "replenishInventory" | "replenishmentFluctuatingForecasts" | "reporting" | "reportingAccounts" | "reportingAccountsMappingReport" | "reportingCategories" | "reportingPeriods" | "reports" | "requestSupplies" | "restrictionRelease" | "revenueRecognitionCategory" | "revenueRecognitionSchedule" | "revenueRecognitionTemplate" | "revenueSummaries" | "revenueTxnEntries" | "reverseConversions" | "reviewNote" | "reviewerSignoff" | "rolesPermissionsReport" | "row" | "ruleSetPerformanceLog" | "runConsolidations" | "saasChangeType" | "saasSchedule" | "saasScheduleEntry" | "salesAnalysis" | "salesEntry" | "salesRecurring" | "salesTaxReport" | "salesforceSyncJobs" | "salesforceSynchronizationReport" | "salesforceSynchronizationStatus" | "sandbox" | "savingsAccounts" | "selectToReimburse" | "sendgridEmailDeliveryLog" | "serialMask" | "serialTracking" | "serviceAuthorizations" | "sharedLimits" | "shipmentHistory" | "shippingMethods" | "smartEventJobs" | "spendInsight" | "staffTimesheets" | "standardCostTypes" | "standardTasks" | "statisticalAccountId" | "statisticalAccountMappingStatus" | "statisticalAccounts" | "statisticalAdjustingJournalEntries" | "statisticalAdjustingJournals" | "statisticalJournalEntries" | "statisticalJournals" | "statisticalMemorizedEntryTemplates" | "subledgerAndScmCombinedObjects" | "subscriptionUsage" | "subsidiaryAccounts" | "subsidiaryDepartments" | "subsidiaryLocations" | "subsidiaryReportingPeriods" | "subsidiaryStatisticalAccounts" | "summaries" | "support" | "switchToConsole" | "switchToManagementConsole" | "switchToMyAccounting" | "systemPayModifiers" | "t5018ReportForCanada" | "taskGroups" | "taskResources" | "taskTypes" | "tasks" | "taxAdjustingEntries" | "taxAdjustmentJournals" | "taxAuthority" | "taxDetail" | "taxDetailBox" | "taxReciprocity" | "taxRecords" | "taxReport" | "taxSchedule" | "taxScheduleMap" | "taxSolutions" | "taxSubmissions" | "taxablePaymentsAnnualReport" | "taxes" | "taxesLink" | "templates" | "tenantConfiguration" | "tenantchargeback" | "tenantledger" | "tenants" | "tenantstatement" | "territories" | "territoryGroups" | "timeCards" | "timePreferences" | "timeSources" | "timeTypes" | "timesheetRules" | "trades" | "transactionAllocations" | "transactionCurrencies" | "transactionRule" | "transactionTemplates" | "trialBalance" | "triggerLogs" | "unions" | "units" | "unitsOfMeasure" | "usageAndMetrics" | "userDefinedBooks" | "userDefinedJournalEntries" | "userDefinedJournals" | "users" | "vendorAgingReportsGraphs" | "vendorException" | "vendorGLGroups" | "vendorGroups" | "vendorInsuranceReport" | "vendorReconciliation" | "vendorTypes" | "vendors" | "viewAllocationLog" | "viewMyClients" | "viewMyServiceAuthorizations" | "warehouseGroups" | "warehouseTransfer" | "warehouses" | "wipManagement" | "wipRelief" | "workOrderCallTypes" | "workOrderGroups" | "workOrderProblemCodes" | "workOrderStates" | "workOrderTypes" | "workOrders" | "zone";
        /**
         * @description Content of email.
         * @example {
         *       "FROM": "Support <support@intacct.com>",
         *       "SENDERNAME": "Support",
         *       "SENDEREMAIL": "support@intacct.com",
         *       "REPLY_TO": "with Hello <sageqa@mail.com>",
         *       "TO": [
         *         "sageqa@tmail.com"
         *       ],
         *       "CC": [
         *         "sageqa@tmailcc.com"
         *       ],
         *       "BCC": [
         *         "sageqa@tmail.com"
         *       ],
         *       "SUBJECT": "dev20: logo sageqa",
         *       "BODY": "Email Template...<br/><img style=\\\"border: 0;\\\" src=\\\"cid:email_logo\\\"><br/><br/><br/><br/><br/><br/><hr/><img src=\\\"https://intacct-ops-prod-public-assets.s3.us-west-2.amazonaws.com/logo.png\\\" alt=\\\"\\\"/>"
         *     }
         */
        "email-body": Record<string, never>;
        /**
         * @description Time zone.
         * @example GMT-08:00 Pacific Standard Time
         * @enum {string|null}
         */
        timezone: null | "GMT (Greenwich Mean Time) Dublin, Edinburgh, London" | "GMT+00:00 Western Europe Time" | "GMT+01:00 Western Europe Summer Time" | "GMT+01:00 British Summer Time" | "GMT+01:00 Irish Summer Time" | "GMT+01:00 Central Europe Time" | "GMT+01:00 Berlin, Stockholm, Rome, Bern, Brussels" | "GMT+01:00 Lisbon, Warsaw" | "GMT+01:00 Paris, Madrid" | "GMT+01:00 Prague" | "GMT+02:00 Central Europe Summer Time" | "GMT+02:00 Eastern Europe Time" | "GMT+02:00 Athens, Helsinki, Istanbul" | "GMT+02:00 Cairo" | "GMT+02:00 Harare, Pretoria" | "GMT+02:00 Israel" | "GMT+03:00 Eastern Europe Summer Time" | "GMT+03:00 Baghdad, Kuwait, Nairobi, Riyadh" | "GMT+03:00 Moscow, St. Petersburg, Volgograd" | "GMT+03:30 Tehran" | "GMT+04:00 Moscow Summer Time" | "GMT+04:00 Abu Dhabi, Muscat, Tbilisi, Kazan" | "GMT+04:30 Kabul" | "GMT+05:00 Islamabad, Karachi, Sverdlovsk, Tashkent" | "GMT+05:30 Bombay, Calcutta, Madras, New Delhi" | "GMT+06:00 Almaty, Dhaka" | "GMT+07:00 Bangkok, Jakarta, Hanoi" | "GMT+08:00 Beijing, Chongqing, Urumqi" | "GMT+08:00 Hong Kong SAR, Perth, Singapore, Taipei" | "GMT+08:00 (Australian) Western Standard Time" | "GMT+09:00 Tokyo, Osaka, Sapporo, Seoul, Yakutsk" | "GMT+09:30 (Australian) Central Standard Time" | "GMT+10:30 (Australian) Central Daylight Time" | "GMT+09:30 Adelaide" | "GMT+09:30 Darwin" | "GMT+10:00 Brisbane, Melbourne, Sydney" | "GMT+10:00 Guam, Port Moresby" | "GMT+10:00 Vladivostok" | "GMT+10:00 (Australian) Eastern Standard Time" | "GMT+11:00  (Australian) Eastern Daylight Time" | "GMT+12:00 Fiji Islands, Marshall Islands" | "GMT+12:00 Kamchatka" | "GMT+12:00 Magadan, Solomon Islands, New Caledonia" | "GMT+12:00 Wellington, Auckland" | "GMT+13:00 Nuku`alofa" | "GMT+13:00 Samoa" | "GMT-01:00 Azores, Cape Verde Island" | "GMT-03:00 Brasilia" | "GMT-03:00 Buenos Aires, Georgetown" | "GMT-03:30 Newfoundland Standard Time" | "GMT-02:30 Newfoundland Daylight Time" | "GMT-04:00 Atlantic Standard Time" | "GMT-03:00 Atlantic Daylight Time" | "GMT-04:00 Caracas, La Paz" | "GMT-05:00 Bogota, Lima" | "GMT-05:00 Eastern Standard Time" | "GMT-04:00 Eastern Daylight Saving Time" | "GMT-05:00 Indiana (East)" | "GMT-06:00 Central Standard Time" | "GMT-05:00 Central Daylight Saving Time" | "GMT-06:00 Mexico City, Tegucigalpa" | "GMT-06:00 Saskatchewan" | "GMT-07:00 Arizona" | "GMT-07:00 Mountain Standard Time" | "GMT-06:00 Mountain Daylight Saving Time" | "GMT-08:00 Pacific Standard Time" | "GMT-07:00 Pacific Daylight Saving Time" | "GMT-09:00 Alaska Standard Time" | "GMT-08:00 Alaska Standard Daylight Saving Time" | "GMT-10:00 Hawaii" | "GMT-11:00 Midway Island, Samoa" | "GMT-12:00 Eniwetok, Kwajalein";
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
    "get-company-config-dimensions-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["company-config-dimensions-list-response"][];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-class": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-class": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Class object to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.class"] & components["schemas"]["company-config-classRequiredProperties"];
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
    "get-company-config-class-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the class.
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
                        "ia::result"?: components["schemas"]["objects.company-config.class"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-class-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the class.
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
    "update-company-config-class-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the class.
                 * @example 43
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.class"];
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
    "list-company-config-class-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-class-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.class-group"] & components["schemas"]["company-config-class-groupRequiredProperties"];
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
    "get-company-config-class-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the class group.
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
                        "ia::result"?: components["schemas"]["objects.company-config.class-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-class-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the class group.
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
    "update-company-config-class-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the class group.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.class-group"] & {
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
    "list-company-config-department": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
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
        };
    };
    "create-company-config-department": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Department to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.department"] & components["schemas"]["company-config-departmentRequiredProperties"];
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
    "get-company-config-department-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the department.
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
                        "ia::result"?: components["schemas"]["objects.company-config.department"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-department-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the department.
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
    "update-company-config-department-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the department.
                 * @example 28
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.department"];
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
    "list-company-config-department-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-department-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates a new department group. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.department-group"] & components["schemas"]["company-config-department-groupRequiredProperties"];
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
    "get-company-config-department-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the department group.
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
                        "ia::result"?: components["schemas"]["objects.company-config.department-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-department-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the department group.
                 * @example 18
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
    "update-company-config-department-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the department group.
                 * @example 18
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.department-group"] & {
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
    "list-company-config-department-group-member": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-department-group-member-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the department group member.
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
                        "ia::result"?: components["schemas"]["objects.company-config.department-group-member"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-employee": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-employee": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new employee. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.employee"] & components["schemas"]["company-config-employeeRequiredProperties"];
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
    "get-company-config-employee-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee.
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
                        "ia::result"?: components["schemas"]["objects.company-config.employee"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-employee-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee.
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
    "update-company-config-employee-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee.
                 * @example 63
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.employee"] & {
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
    "list-company-config-employee-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-employee-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new employee type */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.employee-type"] & components["schemas"]["company-config-employee-typeRequiredProperties"];
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
    "get-company-config-employee-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee type.
                 * @example 256
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.employee-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-employee-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee type.
                 * @example 256
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
    "update-company-config-employee-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee type.
                 * @example 256
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.employee-type"] & {
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
    "list-projects-employee-rate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-projects-employee-rate-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee rate.
                 * @example 236
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.employee-rate"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-employee-rate-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee rate.
                 * @example 236
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
    "list-company-config-employee-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-employee-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates a new employee group. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.employee-group"] & components["schemas"]["company-config-employee-groupRequiredProperties"];
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
    "get-company-config-employee-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee group.
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
                        "ia::result"?: components["schemas"]["objects.company-config.employee-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-employee-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee group.
                 * @example 33
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
    "update-company-config-employee-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee group.
                 * @example 33
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.employee-group"] & {
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
    "list-company-config-employee-bank-file-setup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-employee-bank-file-setup-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee bank file setup.
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
                        "ia::result"?: components["schemas"]["objects.company-config.employee-bank-file-setup"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-objects-company-config-earning-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-objects-company-config-earning-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.earning-type"] & components["schemas"]["company-config-earning-typeRequiredProperties"];
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
    "get-company-config-earning-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for an earning type.
                 * @example 24
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.earning-type"];
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
    "delete-objects-company-config-earning-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for an earning type.
                 * @example 24
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
    "patch-objects-company-config-earning-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for an earning type.
                 * @example 24
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.earning-type"] & {
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
    "list-company-config-location": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-location": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create location object */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.location"] & components["schemas"]["company-config-locationRequiredProperties"];
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
    "get-company-config-location-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the location.
                 * @example 92
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.location"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-location-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the location.
                 * @example 92
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
    "update-company-config-location-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the location.
                 * @example 92
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.location"] & {
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
    "list-company-config-location-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-location-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.location-group"] & components["schemas"]["company-config-location-groupRequiredProperties"];
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
    "get-company-config-location-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the location group.
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
                        "ia::result"?: components["schemas"]["objects.company-config.location-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-location-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the location group.
                 * @example 49
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
    "update-company-config-location-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the location group.
                 * @example 49
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.location-group"] & {
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
    "list-company-config-location-group-member": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-location-group-member-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the location group member.
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
                        "ia::result"?: components["schemas"]["objects.company-config.location-group-member"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-attachment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-attachment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Attachment to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.attachment"] & components["schemas"]["company-config-attachmentRequiredProperties"];
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
    "get-company-config-attachment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the attachment.
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
                        "ia::result"?: components["schemas"]["objects.company-config.attachment"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-attachment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the attachment.
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
    "update-company-config-attachment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the attachment.
                 * @example 43
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.attachment"] & {
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
    "list-company-config-file": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-file-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the file.
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
                        "ia::result"?: components["schemas"]["objects.company-config.file"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-file-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the file.
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
    "list-company-config-folder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-folder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Folder to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.folder"] & components["schemas"]["company-config-folderRequiredProperties"];
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
    "get-company-config-folder-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the folder.
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
                        "ia::result"?: components["schemas"]["objects.company-config.folder"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-folder-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the folder.
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
    "update-company-config-folder-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the folder.
                 * @example 28
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.folder"] & {
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
    "list-company-config-contact": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-contact": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Contact object to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.contact"] & components["schemas"]["company-config-contactRequiredProperties"];
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
    "get-company-config-contact-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for a contact.
                 * @example 65
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.contact"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-contact-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for a contact.
                 * @example 65
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
    "update-company-config-contact-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for a contact.
                 * @example 65
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.contact"] & {
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
    "list-company-config-contact-version": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-contact-version-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contact version.
                 * @example 2354
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.contact-version"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-document-sequence": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-document-sequence": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Document sequence to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.document-sequence"] & components["schemas"]["company-config-document-sequenceRequiredProperties"];
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
    "get-company-config-document-sequence-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the document sequence.
                 * @example 107
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.document-sequence"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-document-sequence-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the document sequence.
                 * @example 107
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
    "update-company-config-document-sequence-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the document sequence.
                 * @example 107
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.document-sequence"] & {
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
    "company-config-document-sequence-generate-next-value": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["company-config-document-sequence-generate-next-value-request"];
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
                        "ia::result"?: components["schemas"]["company-config-document-sequence-generate-next-value-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-document-sequence-rollover": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-document-sequence-rollover-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the document sequence rollover object.
                 * @example 651
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.document-sequence-rollover"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-email-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-email-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Email template to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.email-template"] & components["schemas"]["company-config-email-templateRequiredProperties"];
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
    "get-company-config-email-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the email-template.
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
                        "ia::result"?: components["schemas"]["objects.company-config.email-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-email-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the email-template.
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
    "update-company-config-email-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the email-template.
                 * @example 12
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.email-template"] & {
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
    "list-company-config-entity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-entity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create entity object */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.entity"] & components["schemas"]["company-config-entityRequiredProperties"];
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
    "get-company-config-entity-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the entity.
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
                        "ia::result"?: components["schemas"]["objects.company-config.entity"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-entity-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the entity.
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
    "update-company-config-entity-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the entity.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.entity"] & {
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
    "list-company-config-affiliate-entity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-affiliate-entity-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the affiliate entity.
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
                        "ia::result"?: components["schemas"]["objects.company-config.affiliate-entity"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-affiliate-entity-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-affiliate-entity-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates a new affiliate entity group. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.affiliate-entity-group"] & components["schemas"]["company-config-affiliate-entity-groupRequiredProperties"];
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
    "get-company-config-affiliate-entity-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the affiliate entity group.
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
                        "ia::result"?: components["schemas"]["objects.company-config.affiliate-entity-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-affiliate-entity-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the affiliate entity group.
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
    "update-company-config-affiliate-entity-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the affiliate entity group.
                 * @example 9
                 */
                key: string;
            };
            cookie?: never;
        };
        /** @description Updates an affiliate entity group */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.affiliate-entity-group"] & {
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
    "list-company-config-inter-entity-account-mapping": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-inter-entity-account-mapping-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inter-entity account mapping. This value is always '1' for this object.
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
                        "ia::result"?: components["schemas"]["objects.company-config.inter-entity-account-mapping"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-company-config-inter-entity-account-mapping-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inter-entity account mapping. This value is always '1' for this object.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.inter-entity-account-mapping"];
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
    "list-company-config-inter-entity-basic-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-inter-entity-basic-map-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inter-entity basic map.
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
                        "ia::result"?: components["schemas"]["objects.company-config.inter-entity-basic-map"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-inter-entity-basic-map-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inter-entity basic map.
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
    "list-company-config-inter-entity-advanced-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-inter-entity-advanced-map-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inter-entity advanced map.
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
                        "ia::result"?: components["schemas"]["objects.company-config.inter-entity-advanced-map"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-inter-entity-advanced-map-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the inter-entity advanced map.
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
    "list-company-config-exchange-rate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-exchange-rate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Exchange rate to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.exchange-rate"] & components["schemas"]["company-config-exchange-rateRequiredProperties"];
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
    "get-company-config-exchange-rate-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the exchange rate.
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
                        "ia::result"?: components["schemas"]["objects.company-config.exchange-rate"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-exchange-rate-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the exchange rate.
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
    "update-company-config-exchange-rate-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the exchange rate.
                 * @example 40
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.exchange-rate"] & {
                    readonly exchangeRateType?: unknown;
                    readonly toCurrency?: unknown;
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
    "list-company-config-exchange-rate-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-exchange-rate-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create an exchange rate line. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.exchange-rate-line"] & components["schemas"]["company-config-exchange-rate-lineRequiredProperties"];
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
    "get-company-config-exchange-rate-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the exchange rate line.
                 * @example 87
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.exchange-rate-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-exchange-rate-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the exchange rate line.
                 * @example 87
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
    "update-company-config-exchange-rate-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the exchange rate line.
                 * @example 87
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.exchange-rate-line"] & {
                    /** Format: date */
                    readonly effectiveStartDate?: string;
                    readonly exchangeRate?: unknown;
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
    "list-company-config-exchange-rate-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-exchange-rate-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create an exchange rate type. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.exchange-rate-type"] & components["schemas"]["company-config-exchange-rate-typeRequiredProperties"];
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
    "get-company-config-exchange-rate-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the exchange rate type.
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
                        "ia::result"?: components["schemas"]["objects.company-config.exchange-rate-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-exchange-rate-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the exchange rate type.
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
    "update-company-config-exchange-rate-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the exchange rate type.
                 * @example 5
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.exchange-rate-type"];
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
    "list-company-config-user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description User to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.user"] & components["schemas"]["company-config-userRequiredProperties"];
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
    "get-company-config-user-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for a user.
                 * @example 65
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.user"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-user-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for a user.
                 * @example 65
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
    "update-company-config-user-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for a user.
                 * @example 65
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.user"] & {
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
    "list-company-config-user-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-user-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description User group to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.user-group"] & components["schemas"]["company-config-user-groupRequiredProperties"];
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
    "get-company-config-user-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the user group.
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
                        "ia::result"?: components["schemas"]["objects.company-config.user-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-user-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the user group.
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
    "update-company-config-user-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the user group.
                 * @example 41
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.user-group"] & {
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
    "list-company-config-user-group-member": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-user-group-member": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.user-group-member"] & components["schemas"]["company-config-member-user-groupRequiredProperties"];
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
    "get-company-config-user-group-member-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the user group member.
                 * @example 2354
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.user-group-member"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-user-group-member-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the user group member.
                 * @example 2354
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
    "list-company-config-role": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-role": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.role"] & components["schemas"]["company-config-roleRequiredProperties"];
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
    "get-company-config-role-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the role.
                 * @example 470
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.role"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-role-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the role.
                 * @example 470
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
    "update-company-config-role-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the role.
                 * @example 470
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.role"] & {
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
    "list-company-config-role-user-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-role-user-map-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the role user map.
                 * @example 618
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.role-user-map"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-role-user-group-map": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-role-user-group-map-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the role user group map.
                 * @example 761
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.role-user-group-map"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-permission": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-permission-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the permission.
                 * @example 102
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.permission"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-role-permission-assignment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-role-permission-assignment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the role permission assignment.
                 * @example 1748
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.role-permission-assignment"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-company-config-role-permission-assignment-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the role permission assignment.
                 * @example 1748
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.role-permission-assignment"] & {
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
    "list-company-config-audit-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-audit-history": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the audit history.
                 * @example OTA6MjgwOTU4
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.audit-history"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-advanced-audit-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-advanced-audit-history": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the advanced audit history.
                 * @example OTA6MjgwOTU4
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.advanced-audit-history"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-cloud-storage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-cloud-storage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates a new cloud storage object. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.cloud-storage"] & components["schemas"]["company-config-cloud-storageRequiredProperties"];
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
    "get-company-config-cloud-storage-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the cloud storage.
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
                        "ia::result"?: components["schemas"]["objects.company-config.cloud-storage"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-cloud-storage-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the cloud storage.
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
    "update-company-config-cloud-storage-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the cloud storage.
                 * @example 34
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.cloud-storage"] & {
                    readonly id?: unknown;
                    readonly storageType?: unknown;
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
    "list-company-config-company-message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-company-message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description New company message */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.company-message"] & components["schemas"]["company-config-company-messageRequiredProperties"];
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
    "get-company-config-company-message-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the company message.
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
                        "ia::result"?: components["schemas"]["objects.company-config.company-message"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-company-message-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the company message.
                 * @example 42
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
    "update-company-config-company-message-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the company message.
                 * @example 42
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.company-message"];
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
    "list-company-config-cover-letter-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-cover-letter-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.cover-letter-template"] & components["schemas"]["company-config-cover-letter-templateRequiredProperties"];
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
    "get-company-config-cover-letter-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the cover letter template.
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
                        "ia::result"?: components["schemas"]["objects.company-config.cover-letter-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-cover-letter-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the cover letter template.
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
    "update-company-config-cover-letter-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the cover letter template.
                 * @example 9
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.cover-letter-template"];
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
    "get-company-config-email-delivery-record": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-email-delivery-record-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the email delivery record.
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
                        "ia::result"?: components["schemas"]["objects.company-config.email-delivery-record"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-external-authorization": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-external-authorization": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.external-authorization"] & components["schemas"]["company-config-external-authorizationRequiredProperties"];
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
    "get-company-config-external-authorization-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the external authorization.
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
                        "ia::result"?: components["schemas"]["objects.company-config.external-authorization"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-company-config-external-authorization-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the external authorization.
                 * @example 2
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.external-authorization"] & {
                    readonly externalCompanyId?: unknown;
                    readonly accessType?: unknown;
                    readonly isLinked?: unknown;
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
    "list-company-config-holiday": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-holiday-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the holiday.
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
                        "ia::result"?: components["schemas"]["objects.company-config.holiday"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-holiday-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-holiday-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.holiday-schedule"] & components["schemas"]["company-config-holiday-scheduleRequiredProperties"];
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
    "get-company-config-holiday-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the holiday schedule.
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
                        "ia::result"?: components["schemas"]["objects.company-config.holiday-schedule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-holiday-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the holiday schedule.
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
    "update-company-config-holiday-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the holiday schedule.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.holiday-schedule"] & {
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
    "list-company-config-payment-provider-notification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-company-config-payment-provider-notification-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the payment-provider-notification.
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
                        "ia::result"?: components["schemas"]["objects.company-config.payment-provider-notification"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-sandbox": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-sandbox": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.sandbox"] & components["schemas"]["company-config-sandboxRequiredProperties"];
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
    "get-company-config-sandbox-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the sandbox.
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
                        "ia::result"?: components["schemas"]["objects.company-config.sandbox"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-sandbox-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the sandbox.
                 * @example 10
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
    "update-company-config-sandbox-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the sandbox.
                 * @example 10
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.sandbox"];
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
    "refresh-company-config-sandbox": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["company-config-sandbox-actions-refresh-request"];
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
                        "ia::result"?: components["schemas"]["company-config-sandbox-actions-refresh-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-company-config-txn-currency": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-company-config-txn-currency": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new transaction currency. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.txn-currency"] & components["schemas"]["company-config-txn-currencyRequiredProperties"];
            };
        };
        responses: {
            /** @description Transaction currency created. */
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
    "get-company-config-txn-currency-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction currency.
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
                        "ia::result"?: components["schemas"]["objects.company-config.txn-currency"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-company-config-txn-currency-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction currency.
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
    "update-company-config-txn-currency-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the transaction currency.
                 * @example 74
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.txn-currency"] & {
                    readonly id?: unknown;
                    readonly currencyType?: unknown;
                    readonly name?: unknown;
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
    "get-company-config-company-preference": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the company preference. This value must be set to `setup` for this object.
                 * @example setup
                 */
                key: string;
            };
            cookie?: never;
        };
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
    "update-company-config-company-preference": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the company preference. This value must be set to `setup` for this object.
                 * @example setup
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.company-preference"] & {
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
    "get-company-config-multi-entity-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the multi-entity preference. This value must be set to `setup` for this object.
                 * @example setup
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-company-config-multi-entity-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the multi-entity preference. This value must be set to `setup` for this object.
                 * @example setup
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.multi-entity-preference"] & {
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
    "get-services-preferences.consolidation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "Get consolidation preferences": {
                     *         "value": {
                     *           "ia::result": {
                     *             "consolidationSubscriptionSelection": "domesticOrGlobalConsolidation",
                     *             "enableManagementConsoleReporting": false,
                     *             "audit": {
                     *               "modifiedDateTime": "2025-04-13T09:19:58Z",
                     *               "modifiedBy": "1",
                     *               "modifiedByUser": {
                     *                 "key": "1",
                     *                 "id": "Admin",
                     *                 "href": "/objects/company-config/user/1"
                     *               },
                     *               "createdDateTime": "2025-04-13T09:05:08Z",
                     *               "createdBy": "1",
                     *               "createdByUser": {
                     *                 "key": "1",
                     *                 "id": "Admin",
                     *                 "href": "/objects/company-config/user/1"
                     *               }
                     *             },
                     *             "href": "/services/company-config/preferences/consolidation"
                     *           },
                     *           "ia::meta": {
                     *             "totalCount": 1,
                     *             "totalSuccess": 1,
                     *             "totalError": 0
                     *           }
                     *         }
                     *       }
                     *     }
                     */
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.consolidation-preference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-services-preferences.consolidation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.consolidation-preference"];
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
    "get-services-preferences.advanced-consolidation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "Get advanced consolidation preferences": {
                     *         "value": {
                     *           "ia::result": {
                     *             "notificationEmail": "john.smith@company.com",
                     *             "consolidatingLocation": {
                     *               "key": "19",
                     *               "id": "FF",
                     *               "name": "Frankfurt",
                     *               "href": "/objects/location/19"
                     *             },
                     *             "minorityInterestGLAccounts": {
                     *               "interestLiabilityGLAccount": {
                     *                 "key": "256",
                     *                 "id": "6252",
                     *                 "name": "Entertainment",
                     *                 "href": "/objects/gl-account/256"
                     *               },
                     *               "incomeOrExpenseGLAccount": {
                     *                 "key": "10",
                     *                 "id": "1001",
                     *                 "name": "CitiBank",
                     *                 "href": "/objects/gl-account/10"
                     *               }
                     *             },
                     *             "audit": {
                     *               "modifiedDateTime": "2025-04-13T09:19:58Z",
                     *               "modifiedBy": "1",
                     *               "modifiedByUser": {
                     *                 "key": "1",
                     *                 "id": "Admin",
                     *                 "href": "/objects/company-config/user/1"
                     *               },
                     *               "createdDateTime": "2025-04-13T09:05:08Z",
                     *               "createdBy": "1",
                     *               "createdByUser": {
                     *                 "key": "1",
                     *                 "id": "Admin",
                     *                 "href": "/objects/company-config/user/1"
                     *               }
                     *             },
                     *             "href": "/services/company-config/preferences/advanced-consolidation"
                     *           },
                     *           "ia::meta": {
                     *             "totalCount": 1,
                     *             "totalSuccess": 1,
                     *             "totalError": 0
                     *           }
                     *         }
                     *       }
                     *     }
                     */
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.advanced-consolidation-preference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-services-preferences.advanced-consolidation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create advanced consolidation preferences */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.company-config.advanced-consolidation-preference"] & components["schemas"]["company-config-advanced-consolidation-preferenceRequiredProperties"];
            };
        };
        responses: {
            /** @description Reference to advanced consolidation preferences. */
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
    "update-services-preferences.advanced-consolidation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.advanced-consolidation-preference"] & {
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
    "get-company-config-order-entry-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the Order Entry preference. This value must be set to `setup` for this object.
                 * @example setup
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "Get an Order Entry preference": {
                     *         "value": {
                     *           "ia::result": {
                     *             "enableBillToContactAtLine": false,
                     *             "enableShipToContactAtLine": false,
                     *             "enableAdvanceTxnProcessing": null,
                     *             "displayPaymentStatus": false,
                     *             "installedWorkflow": "inventoryAndNonInventory",
                     *             "enableForeignCurrency": true,
                     *             "contactPreferences": {
                     *               "senderEmailProfile": "userProfile",
                     *               "contactsInTxn": "all"
                     *             },
                     *             "preventNegativeInventory": null,
                     *             "disableQuantityChange": false,
                     *             "enableFuturePostingRestriction": false,
                     *             "enableDraftMode": true,
                     *             "omitMarkDraftPrintedTxn": false,
                     *             "itemPrecision": null,
                     *             "enableStartAndEndDate": true,
                     *             "enableKit": true,
                     *             "accountingPreferences": {
                     *               "offsetGLAccount": {
                     *                 "key": null,
                     *                 "id": null,
                     *                 "name": null
                     *               },
                     *               "unbilledGLAccount": {
                     *                 "id": null,
                     *                 "name": null,
                     *                 "key": null
                     *               }
                     *             },
                     *             "priceAndDiscountPreferences": {
                     *               "enableCustomerPriceLists": null,
                     *               "enableSuggestedPriceDiscount": true,
                     *               "enableFixedCustomerDiscount": null,
                     *               "enablePriceSchedule": null
                     *             },
                     *             "taxPreferences": {
                     *               "enableAdvancedTax": false,
                     *               "enableSubtotalTemplates": false,
                     *               "overrideTaxScheduleOnLine": false
                     *             },
                     *             "enableDropShip": true,
                     *             "enableBuyToOrder": true,
                     *             "enableInterEntityCOGSPostings": false,
                     *             "enablePriceConversion": false,
                     *             "overrideDefaultTxnConversionType": false,
                     *             "doNotValidateLinesBeforeDeleting": false,
                     *             "editDimensionInSubtotal": false,
                     *             "useLineItemDimensionsInSubtotal": false,
                     *             "distributeDimensions": false,
                     *             "editLocationDepartmentInSubtotal": false,
                     *             "constructionPreferences": {
                     *               "enableReverseConversions": false,
                     *               "includeFullyConvertedLines": false,
                     *               "prefillConversionZero": false
                     *             },
                     *             "audit": {
                     *               "createdDateTime": "2025-09-12T12:02:11Z",
                     *               "modifiedDateTime": "2025-10-09T07:05:57Z",
                     *               "createdByUser": {
                     *                 "key": null
                     *               },
                     *               "modifiedByUser": {
                     *                 "key": "1",
                     *                 "href": "/objects/company-config/user/1"
                     *               }
                     *             },
                     *             "documentConfigurationLines": [
                     *               {
                     *                 "id": "57",
                     *                 "key": "57",
                     *                 "moduleKey": "8.SO",
                     *                 "documentType": {
                     *                   "id": "36",
                     *                   "key": "36",
                     *                   "name": "Sales Credit Memo",
                     *                   "status": true,
                     *                   "href": "/objects/order-entry/txn-definition::Sales%20Credit%20Memo/36"
                     *                 },
                     *                 "summaryFrequency": "daily",
                     *                 "inventoryJournal": {
                     *                   "key": null,
                     *                   "id": null,
                     *                   "name": null
                     *                 },
                     *                 "revenueRecognitionJournal": {
                     *                   "key": null,
                     *                   "id": null,
                     *                   "name": null
                     *                 },
                     *                 "defaultDeferredRevenueGLAccount": {
                     *                   "key": null,
                     *                   "id": null,
                     *                   "name": null
                     *                 },
                     *                 "salesJournal": {
                     *                   "key": null,
                     *                   "id": null,
                     *                   "name": null
                     *                 },
                     *                 "additionalPostingJournal": {
                     *                   "key": null,
                     *                   "id": null,
                     *                   "name": null
                     *                 },
                     *                 "emailTemplate": {
                     *                   "id": null,
                     *                   "key": null,
                     *                   "name": null
                     *                 },
                     *                 "audit": {
                     *                   "createdDateTime": "2025-09-13T05:20:59Z",
                     *                   "modifiedDateTime": "2025-10-09T07:05:56Z",
                     *                   "createdByUser": {
                     *                     "key": null
                     *                   },
                     *                   "modifiedByUser": {
                     *                     "key": "1",
                     *                     "href": "/objects/company-config/user/1"
                     *                   }
                     *                 },
                     *                 "href": "/objects/order-entry/document-configuration-preference/57"
                     *               }
                     *             ],
                     *             "dropShipLines": [
                     *               {
                     *                 "id": "8",
                     *                 "key": "8",
                     *                 "salesTxnDefinition": {
                     *                   "id": "30",
                     *                   "key": "30",
                     *                   "name": "Sales Order",
                     *                   "href": "/objects/order-entry/txn-definition::Sales%20Order/30"
                     *                 },
                     *                 "purchasingTxnDefinition": {
                     *                   "id": "23",
                     *                   "key": "23",
                     *                   "name": "PO Receiver Invoice",
                     *                   "href": "/objects/purchasing/txn-definition::PO%20Receiver%20Invoice/23"
                     *                 },
                     *                 "status": true,
                     *                 "moduleKey": "8.SO",
                     *                 "audit": {
                     *                   "createdDateTime": "2025-10-09T07:07:51Z",
                     *                   "modifiedDateTime": "2025-10-09T07:10:03Z",
                     *                   "createdByUser": {
                     *                     "key": "1",
                     *                     "href": "/objects/company-config/user/1"
                     *                   },
                     *                   "modifiedByUser": {
                     *                     "key": "1",
                     *                     "href": "/objects/company-config/user/1"
                     *                   }
                     *                 },
                     *                 "entity": {
                     *                   "key": null,
                     *                   "id": null,
                     *                   "name": null
                     *                 },
                     *                 "href": "/objects/order-entry/txn-drop-ship-preference/8"
                     *               }
                     *             ],
                     *             "buyToOrderLines": [
                     *               {
                     *                 "id": "8",
                     *                 "key": "8",
                     *                 "salesTxnDefinition": {
                     *                   "id": "30",
                     *                   "key": "30",
                     *                   "name": "Sales Order",
                     *                   "href": "/objects/order-entry/txn-definition::Sales%20Order/30"
                     *                 },
                     *                 "purchasingTxnDefinition": {
                     *                   "id": "23",
                     *                   "key": "23",
                     *                   "name": "PO Receiver Invoice",
                     *                   "href": "/objects/purchasing/txn-definition::PO%20Receiver%20Invoice/23"
                     *                 },
                     *                 "status": true,
                     *                 "moduleKey": "8.SO",
                     *                 "audit": {
                     *                   "createdDateTime": "2025-10-09T05:49:47Z",
                     *                   "modifiedDateTime": "2025-10-09T07:05:57Z",
                     *                   "createdByUser": {
                     *                     "key": "1",
                     *                     "href": "/objects/company-config/user/1"
                     *                   },
                     *                   "modifiedByUser": {
                     *                     "key": "1",
                     *                     "href": "/objects/company-config/user/1"
                     *                   }
                     *                 },
                     *                 "entity": {
                     *                   "key": null,
                     *                   "id": null,
                     *                   "name": null
                     *                 },
                     *                 "href": "/objects/order-entry/txn-buy-to-order-preference/8"
                     *               }
                     *             ],
                     *             "enableAdvanceWorkflow": true,
                     *             "key": "setup",
                     *             "href": "/objects/company-config/order-entry-preference/setup"
                     *           },
                     *           "ia::meta": {
                     *             "totalCount": 1,
                     *             "totalSuccess": 1,
                     *             "totalError": 0
                     *           }
                     *         }
                     *       }
                     *     }
                     */
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.order-entry-preference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-company-config-order-entry-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the Order Entry preference. This value must be set to `setup` for this object.
                 * @example setup
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.order-entry-preference"];
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
    "get-company-config-purchasing-preference": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the Purchasing preference. This value must be set to `setup` for this object.
                 * @example setup
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "Details of the Purchasing preference": {
                     *         "value": {
                     *           "ia::result": {
                     *             "key": "setup",
                     *             "displayPaymentStatus": false,
                     *             "priceVarianceGLPostingPreferences": {
                     *               "invoicePriceVarianceGLAccount": {
                     *                 "id": null,
                     *                 "key": null
                     *               },
                     *               "automatePriceVariancePosting": null,
                     *               "purchasePriceVarianceGLAccount": {
                     *                 "id": null,
                     *                 "key": null
                     *               }
                     *             },
                     *             "contactPreferences": {
                     *               "contactsInTxn": "all",
                     *               "senderEmailProfile": "contactProfile"
                     *             },
                     *             "enableAdvanceTxnProcessing": true,
                     *             "installedWorkflow": "inventoryAndNonInventory",
                     *             "enableForeignCurrency": true,
                     *             "disableQuantityChange": false,
                     *             "taxPreferences": {
                     *               "enableAdvancedTax": false,
                     *               "enableSubtotalTemplates": false,
                     *               "overrideTaxScheduleOnLine": false
                     *             },
                     *             "priceAndDiscountPreferences": {
                     *               "enableFixedVendorDiscount": true,
                     *               "enablePriceSchedule": true,
                     *               "enableVendorPriceLists": true
                     *             },
                     *             "itemPrecision": 9,
                     *             "accountingPreferences": {
                     *               "offsetGLAccount": {
                     *                 "id": null,
                     *                 "name": null,
                     *                 "key": null
                     *               },
                     *               "unbilledGLAccount": {
                     *                 "id": null,
                     *                 "name": null,
                     *                 "key": null
                     *               }
                     *             },
                     *             "enableFuturePostingRestriction": false,
                     *             "enableDraftMode": true,
                     *             "automationPreferences": {
                     *               "enableDraftMode": true,
                     *               "enableLineLevelPOMatching": false,
                     *               "enableAutomationWithDocumentMatching": true,
                     *               "enableAutomationNoDocumentMatching": false
                     *             },
                     *             "enableAdvanceWorkflow": false,
                     *             "enablePriceConversion": false,
                     *             "doNotValidateLinesBeforeDeleting": false,
                     *             "overrideDefaultTxnConversionType": false,
                     *             "editDimensionInSubtotal": false,
                     *             "useLineItemDimensionsInSubtotal": true,
                     *             "distributeDimensions": false,
                     *             "editLocationDepartmentInSubtotal": false,
                     *             "constructionPreferences": {
                     *               "enableReverseConversions": false,
                     *               "includeFullyConvertedLines": false,
                     *               "prefillConversionZero": false
                     *             },
                     *             "postAdditionsInTxnCurrency": false,
                     *             "enableOverrideForm1099": false,
                     *             "enableForm1099": false,
                     *             "deliverToContactPreferences": {
                     *               "deliverToLineLevelContact": false,
                     *               "deliverToHeaderLevelContact": false,
                     *               "deliverToContact": {
                     *                 "id": null,
                     *                 "key": null
                     *               }
                     *             },
                     *             "approvalPreferences": {
                     *               "enableEmailNotifications": false,
                     *               "enableDelegation": false,
                     *               "requireReapproval": "noReapproval",
                     *               "requireVendorForApproval": false,
                     *               "enablePurchasingApproval": true,
                     *               "adminApprover": {
                     *                 "id": null,
                     *                 "key": null
                     *               }
                     *             },
                     *             "restrictEmployeeToPurchasing": false,
                     *             "enableMatchTolerances": true,
                     *             "enableMultipleDocumentConversion": false,
                     *             "matchTolerancesGLAccount": {
                     *               "id": "1090",
                     *               "key": "34",
                     *               "name": "Petty Cash",
                     *               "href": "/objects/general-ledger/account/34"
                     *             },
                     *             "txnMatchToleranceLines": [
                     *               {
                     *                 "key": "24",
                     *                 "id": "24",
                     *                 "txnDefinitionToValidate": {
                     *                   "key": "1",
                     *                   "id": "1",
                     *                   "name": "Purchase Requisition",
                     *                   "href": "/objects/purchasing/txn-definition::Purchase%20Requisition/1"
                     *                 },
                     *                 "quantityTolerance": 14,
                     *                 "priceTolerance": 15,
                     *                 "moduleName": "purchasing",
                     *                 "audit": {
                     *                   "createdDateTime": "2025-08-05T07:07:59Z",
                     *                   "modifiedDateTime": "2025-08-14T12:01:00Z",
                     *                   "createdByUser": {
                     *                     "key": "1",
                     *                     "id": "Admin",
                     *                     "href": "/objects/company-config/user/1"
                     *                   },
                     *                   "modifiedByUser": {
                     *                     "key": "1",
                     *                     "id": "Admin",
                     *                     "href": "/objects/company-config/user/1"
                     *                   }
                     *                 }
                     *               }
                     *             ],
                     *             "txnAutomationLines": [
                     *               {
                     *                 "key": "33",
                     *                 "id": "33",
                     *                 "entity": {
                     *                   "key": "1",
                     *                   "id": "1",
                     *                   "name": "1--United States of America",
                     *                   "href": "/objects/company-config/entity/1"
                     *                 },
                     *                 "sourceDocumentType": {
                     *                   "key": "11",
                     *                   "id": "11",
                     *                   "name": "Purchase Order",
                     *                   "href": "/objects/purchasing/txn-definition::Purchase%20Order/11"
                     *                 },
                     *                 "targetDocumentType": {
                     *                   "key": "2",
                     *                   "id": "2",
                     *                   "name": "Vendor Invoice",
                     *                   "href": "/objects/purchasing/txn-definition::Vendor%20Invoice/2"
                     *                 },
                     *                 "moduleName": "purchasing",
                     *                 "audit": {
                     *                   "createdDateTime": "2025-08-05T07:08:20Z",
                     *                   "modifiedDateTime": "2025-08-13T09:49:22Z",
                     *                   "createdByUser": {
                     *                     "key": null
                     *                   },
                     *                   "createdBy": null,
                     *                   "modifiedByUser": {
                     *                     "key": "1",
                     *                     "href": "/objects/company-config/user/1"
                     *                   },
                     *                   "modifiedBy": "1"
                     *                 },
                     *                 "href": "/objects/purchasing/txn-automation-preference/33"
                     *               }
                     *             ],
                     *             "txnAutomationWithoutMatchLines": [
                     *               {
                     *                 "key": "50",
                     *                 "id": "50",
                     *                 "entity": {
                     *                   "key": null,
                     *                   "id": null,
                     *                   "name": "Top level",
                     *                   "href": "/objects/company-config/entity/null"
                     *                 },
                     *                 "targetDocumentType": {
                     *                   "key": "86",
                     *                   "id": "86",
                     *                   "name": "Purchase Order-root",
                     *                   "href": "/objects/purchasing/txn-definition::Purchase%20Order-root/86"
                     *                 },
                     *                 "moduleName": "purchasing",
                     *                 "audit": {
                     *                   "createdDateTime": "2025-08-06T08:38:56Z",
                     *                   "modifiedDateTime": "2025-08-16T11:44:51Z",
                     *                   "createdByUser": {
                     *                     "key": null
                     *                   },
                     *                   "modifiedByUser": {
                     *                     "key": "1",
                     *                     "href": "/objects/company-config/user/1"
                     *                   }
                     *                 },
                     *                 "href": "/objects/purchasing/txn-automation-without-match-preference/50"
                     *               }
                     *             ],
                     *             "documentConfigurationLines": [
                     *               {
                     *                 "key": "382",
                     *                 "id": "382",
                     *                 "documentType": {
                     *                   "key": "124",
                     *                   "id": "124",
                     *                   "name": "PO Receiver-root",
                     *                   "href": "/objects/purchasing/txn-definition::PO%20Receiver-root/124"
                     *                 },
                     *                 "summaryFrequency": "daily",
                     *                 "additionalPostingJournal": {
                     *                   "key": "1",
                     *                   "id": "POJ",
                     *                   "name": "Purchasing Journal",
                     *                   "href": "/objects/general-ledger/journal/1"
                     *                 },
                     *                 "purchasingJournal": {
                     *                   "key": "58",
                     *                   "id": "UNB",
                     *                   "name": "Unbilled Journal",
                     *                   "href": "/objects/general-ledger/journal/58"
                     *                 },
                     *                 "emailTemplate": {
                     *                   "id": "1",
                     *                   "key": "1",
                     *                   "name": "purchasing email template",
                     *                   "href": "/objects/company-config/email-template/1"
                     *                 },
                     *                 "moduleName": "purchasing",
                     *                 "audit": {
                     *                   "createdDateTime": "2025-08-06T06:17:09Z",
                     *                   "modifiedDateTime": "2025-08-14T12:01:00Z",
                     *                   "createdByUser": {
                     *                     "key": null
                     *                   },
                     *                   "createdBy": null,
                     *                   "modifiedByUser": {
                     *                     "key": "1",
                     *                     "href": "/objects/company-config/user/1"
                     *                   },
                     *                   "modifiedBy": "1"
                     *                 },
                     *                 "href": "/objects/purchasing/document-configuration-preference/382"
                     *               }
                     *             ],
                     *             "audit": {
                     *               "createdDateTime": "2025-08-05T07:07:42Z",
                     *               "modifiedDateTime": "2025-08-13T09:49:22Z",
                     *               "createdByUser": {
                     *                 "key": null
                     *               },
                     *               "createdBy": null,
                     *               "modifiedByUser": {
                     *                 "key": "1",
                     *                 "href": "/objects/company-config/user/1"
                     *               },
                     *               "modifiedBy": "1"
                     *             },
                     *             "href": "/objects/company-config/purchasing-preference/setup"
                     *           },
                     *           "ia::meta": {
                     *             "totalCount": 1,
                     *             "totalSuccess": 1,
                     *             "totalError": 0
                     *           }
                     *         }
                     *       }
                     *     }
                     */
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.company-config.purchasing-preference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-company-config-purchasing-preference-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the Purchasing preference. This value must be set to `setup` for this object.
                 * @example setup
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.company-config.purchasing-preference"];
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

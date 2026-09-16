// Generated from spec/project-and-resource-management.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/projects/project": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List projects
         * @description Returns a collection with a key, ID, and link for each project. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-projects-project"];
        put?: never;
        /**
         * Create a project
         * @description Creates a new project. If document sequencing is enabled for projects in the company, the `id` property is optional. If you do not provide an `id` value, the next value in the document sequence is used. If document sequencing is not enabled, the `id` value is required.
         */
        post: operations["create-projects-project"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/project/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project.
                 * @example 635
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project
         * @description Returns detailed information for a specified project.
         */
        get: operations["get-projects-project-key"];
        put?: never;
        post?: never;
        /**
         * Delete a project
         * @description Deletes a project. You can only delete projects without posted transactions. If posted transactions exist for the project, you can make the project inactive but cannot delete it.
         */
        delete: operations["delete-projects-project-key"];
        options?: never;
        head?: never;
        /**
         * Update a project
         * @description Updates an existing project by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-projects-project-key"];
        trace?: never;
    };
    "/objects/projects/project-resource": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project resources
         * @description Returns a collection with a key, ID, and link for each resource. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find project resources that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-projects-project-resource"];
        put?: never;
        /**
         * Create a project resource
         * @description Creates a new project resource.
         */
        post: operations["create-projects-project-resource"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/project-resource/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a project resource.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project resource
         * @description Returns detailed information for a specified project resource.
         */
        get: operations["get-projects-project-resource-key"];
        put?: never;
        post?: never;
        /**
         * Delete a project resource
         * @description Deletes a project resource.
         */
        delete: operations["delete-projects-project-resource-key"];
        options?: never;
        head?: never;
        /**
         * Update a project resource
         * @description Updates an existing project resource by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-projects-project-resource-key"];
        trace?: never;
    };
    "/objects/projects/project-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project statuses
         * @description Returns a collection with a key, ID, and link for each project status. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-projects-project-status"];
        put?: never;
        /**
         * Create a project status
         * @description Creates a new project status.
         */
        post: operations["create-projects-project-status"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/project-status/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project status.
                 * @example 1038
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project status
         * @description Returns detailed information for a specified project status.
         */
        get: operations["get-projects-project-status-key"];
        put?: never;
        post?: never;
        /**
         * Delete a project status
         * @description Deletes a project status.
         */
        delete: operations["delete-projects-project-status-key"];
        options?: never;
        head?: never;
        /**
         * Update a project status
         * @description Updates an existing project status by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-projects-project-status-key"];
        trace?: never;
    };
    "/objects/projects/project-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project types
         * @description Returns a collection with a key, ID, and link for each project type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-projects-project-type"];
        put?: never;
        /**
         * Create a project type
         * @description Creates a new project type.
         */
        post: operations["create-projects-project-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/project-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project type.
                 * @example 956
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project type
         * @description Returns detailed information for a specified project type.
         */
        get: operations["get-projects-project-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete a project type
         * @description Deletes a project type.
         */
        delete: operations["delete-projects-project-type-key"];
        options?: never;
        head?: never;
        /**
         * Update a project type
         * @description Updates an existing project type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-projects-project-type-key"];
        trace?: never;
    };
    "/objects/projects/project-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project groups
         * @description Returns a collection with a key, ID, and link for each project group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find project groups that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-projects-project-group"];
        put?: never;
        /**
         * Create a project group
         * @description Creates a new project group. Project groups created at the top level of a company can't include projects that belong to entities. You must create a project group from the entity to include those projects.
         */
        post: operations["create-projects-project-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/project-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project group.
                 * @example 46
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project group
         * @description Returns detailed information for a specified project group.
         */
        get: operations["get-projects-project-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete a project group
         * @description Deletes a project group.
         */
        delete: operations["delete-projects-project-group-key"];
        options?: never;
        head?: never;
        /**
         * Update a project group
         * @description Updates an existing project group by setting field values. Any fields not provided remain unchanged. Providing a new value for the `groupMembers` array replaces the entire array.
         */
        patch: operations["update-projects-project-group-key"];
        trace?: never;
    };
    "/objects/projects/project-group-member": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project group members
         * @description Returns a collection with a key, ID, and link for each project group member. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-projects-project-group-member"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/project-group-member/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project group member.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project group member
         * @description Returns detailed information for a specified project group member.
         */
        get: operations["get-projects-project-group-member-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/project-observed-percent-completed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project observed percent completed
         * @description Returns a collection with a key, ID, and link for each project observed percent completed object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-projects-project-observed-percent-completed"];
        put?: never;
        /**
         * Create a project observed percent completed object
         * @description Creates a new project observed percent completed object.
         */
        post: operations["create-projects-project-observed-percent-completed"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/project-observed-percent-completed/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project observed percent completed.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a project observed percent completed object
         * @description Returns detailed information for a specified project observed percent completed object.
         */
        get: operations["get-projects-project-observed-percent-completed-key"];
        put?: never;
        post?: never;
        /**
         * Delete a project observed percent completed object
         * @description Deletes a project observed percent completed object.
         */
        delete: operations["delete-projects-project-observed-percent-completed-key"];
        options?: never;
        head?: never;
        /**
         * Update a project observed percent completed object
         * @description Updates an existing project observed percent completed object by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-projects-project-observed-percent-completed-key"];
        trace?: never;
    };
    "/objects/construction/standard-task": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List standard tasks
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each standard task. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-standard-task"];
        put?: never;
        /**
         * Create a standard task
         * @description Creates a new standard task.
         */
        post: operations["create-construction-standard-task"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/standard-task/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the standard task.
                 * @example 312
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a standard task
         * @description Returns detailed information for a specified standard task.
         */
        get: operations["get-construction-standard-task-key"];
        put?: never;
        post?: never;
        /**
         * Delete a standard task
         * @description Deletes a standard task.
         */
        delete: operations["delete-construction-standard-task-key"];
        options?: never;
        head?: never;
        /**
         * Update a standard task
         * @description Updates an existing standard task by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-standard-task-key"];
        trace?: never;
    };
    "/objects/projects/task": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List tasks
         * @description Returns a collection with a key, ID, and link for each task. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find tasks that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-projects-task"];
        put?: never;
        /**
         * Create a task
         * @description Creates a new project task within a specified project. You may provide either a project task 'id' or a standard task `id`. If a standard task is used, `key` or `id` is optional - when provided, the task is created based on that standard task template.
         *
         *     If document sequencing is not enabled, `id` is required. If it is enabled, the task `id` is optional unless you wish to override the system-generated `id`.
         *
         *     If a parent task is provided, it must already exist in the project and defines the task hierarchy. If no parent task is specified, the system automatically creates any missing parent tasks based on the standard task hierarchy.
         *
         *     Task fields inherit values from the standard task unless defined in the request. Associated cost types from the standard task are also created automatically.
         *
         *     For more information, read about [adding tasks](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_Editing_and_Viewing_a_Task) in the Sage Intacct Help Center.
         */
        post: operations["create-projects-task"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/task/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the task.
                 * @example 497
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a task
         * @description Returns detailed information for a specified task.
         */
        get: operations["get-projects-task-key"];
        put?: never;
        post?: never;
        /**
         * Delete a task
         * @description Deletes a task.
         */
        delete: operations["delete-projects-task-key"];
        options?: never;
        head?: never;
        /**
         * Update a task
         * @description Updates an existing task by setting field values. Any fields not provided remain unchanged.
         *
         *     If the task does not already reference a standard task, you may assign one by by providing a standard task `id`. The standard task `id` must exactly match the project task `id`. Assigning a standard task does not update any other task fields. Once set, the standard task reference or it's hierarchy cannot be changed.
         *
         *     For more information, read about [defining standard tasks](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Standard_tasks) in the Sage Intacct Help Center.
         */
        patch: operations["update-projects-task-key"];
        trace?: never;
    };
    "/objects/projects/task-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List task groups
         * @description Returns a collection with a key, ID, and link for each task group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find tasks that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-projects-task-group"];
        put?: never;
        /**
         * Create a task group
         * @description Creates a new task group
         */
        post: operations["create-projects-task-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/task-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the task group.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a task group
         * @description Returns detailed information for a specified task group.
         */
        get: operations["get-projects-task-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete a task group
         * @description Deletes a task group
         */
        delete: operations["delete-projects-task-group-key"];
        options?: never;
        head?: never;
        /**
         * Update a task group
         * @description Updates an existing task group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-projects-task-group-key"];
        trace?: never;
    };
    "/objects/projects/task-resource": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List task resources
         * @description Returns a collection with a key, ID, and link for each task resource. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-projects-task-resource"];
        put?: never;
        /**
         * Create a task resource
         * @description Creates a new task resource.
         */
        post: operations["create-projects-task-resource"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/task-resource/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the task resource.
                 * @example 215
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a task resource
         * @description Returns detailed information for a specified task resource.
         */
        get: operations["get-projects-task-resource-key"];
        put?: never;
        post?: never;
        /**
         * Delete a task resource
         * @description Deletes a task resource.
         */
        delete: operations["delete-projects-task-resource-key"];
        options?: never;
        head?: never;
        /**
         * Update a task resource
         * @description Updates an existing task resource by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-projects-task-resource-key"];
        trace?: never;
    };
    "/objects/projects/task-observed-percent-completed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List task observed percent completed objects
         * @description Returns a collection with a key, ID, and link for each task observed percent completed object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-projects-task-observed-percent-completed"];
        put?: never;
        /**
         * Create a task observed percent completed object
         * @description Creates a new task observed percent completed object.
         */
        post: operations["create-projects-task-observed-percent-completed"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/task-observed-percent-completed/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the task observed percent completed object.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a task observed percent completed object
         * @description Returns detailed information for a specified task observed percent completed object.
         */
        get: operations["get-projects-task-observed-percent-completed-key"];
        put?: never;
        post?: never;
        /**
         * Delete a task observed percent completed object
         * @description Deletes a task observed percent completed object.
         */
        delete: operations["delete-projects-task-observed-percent-completed-key"];
        options?: never;
        head?: never;
        /**
         * Update a task observed percent completed object
         * @description Updates an existing task observed percent completed object by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-projects-task-observed-percent-completed-key"];
        trace?: never;
    };
    "/objects/construction/standard-cost-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List standard cost types
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each standard cost type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-standard-cost-type"];
        put?: never;
        /**
         * Create a standard cost type
         * @description Creates a new standard cost type.
         */
        post: operations["create-construction-standard-cost-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/standard-cost-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the standard cost type.
                 * @example 1050
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a standard cost type
         * @description Returns detailed information for a specified standard cost type.
         */
        get: operations["get-construction-standard-cost-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete a standard cost type
         * @description Deletes a standard cost type. You cannot delete a standard cost type if it has been used to create a cost type in a project.
         */
        delete: operations["delete-construction-standard-cost-type-key"];
        options?: never;
        head?: never;
        /**
         * Update a standard cost type
         * @description Updates an existing standard cost type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-standard-cost-type-key"];
        trace?: never;
    };
    "/objects/construction/cost-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List cost types.
         * @description Returns up to 100 object references from the collection with a key, ID, and link for each cost type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-construction-cost-type"];
        put?: never;
        /**
         * Create a cost type
         * @description Creates a new cost type. When you create a cost type, the following field values from the given standard cost type are used unless you override them:
         *
         *     * `accumulationType`
         *     * `glAccount`
         *     * `parent`
         *     * `item`
         *
         *     Custom field values from the standard cost type can also be used by the cost type. For this to work, the standard cost type and the cost type must have same custom fields with the same IDs, types, and lengths. Custom fields of type Sequence are not copied.
         *
         *     Parent-child relationships defined by standard cost types are preserved when cost types are created.
         */
        post: operations["create-construction-cost-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/construction/cost-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the cost type.
                 * @example 495
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a cost type
         * @description Returns detailed information for a specified cost type.
         */
        get: operations["get-construction-cost-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete a cost type
         * @description Deletes a cost type.
         */
        delete: operations["delete-construction-cost-type-key"];
        options?: never;
        head?: never;
        /**
         * Update a cost type
         * @description Updates an existing cost type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-construction-cost-type-key"];
        trace?: never;
    };
    "/objects/projects/invoice-run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List invoice runs
         * @description Returns a collection with a key, ID, and link for each invoice run. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find tasks that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-projects-invoice-run"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/invoice-run/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the invoice run.
                 * @example 2678
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an invoice run
         * @description Returns detailed information for a specified invoice run.
         */
        get: operations["get-projects-invoice-run-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/project-billing-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List billing templates
         * @description Returns a collection with a key, ID, and link for each project billing template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find tasks that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-projects-project-billing-template"];
        put?: never;
        /**
         * Create a project billing template
         * @description Creates a new project billing template.
         */
        post: operations["create-projects-project-billing-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/project-billing-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the billing template.
                 * @example 15
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a billing template
         * @description Returns detailed information for a specified billing template.
         */
        get: operations["get-projects-project-billing-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a billing template
         * @description Deletes a billing template.
         */
        delete: operations["delete-projects-project-billing-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a billing template
         * @description Updates an existing billing template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-projects-project-billing-template-key"];
        trace?: never;
    };
    "/objects/projects/project-billing-template-milestone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List billing template milestones
         * @description Returns a collection with a key, ID, and link for each project billing template milestone. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find tasks that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-projects-project-billing-template-milestone"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/project-billing-template-milestone/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the Project billing template milestone.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a Project billing template milestone
         * @description Returns detailed information for a particular project billing template milestone.
         */
        get: operations["get-projects-project-billing-template-milestone-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/position-skill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List position skills
         * @description Returns up to 100 position-skills from the collection with a key, ID, and link for each one. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find position-skills that meet certain criteria and specify the properties that are returned.
         */
        get: operations["list-projects-position-skill"];
        put?: never;
        /**
         * Create a position skill
         * @description Creates a new position skill.
         */
        post: operations["create-projects-position-skill"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/position-skill/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a position skill.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a position skill
         * @description Returns detailed information for a specified position skill.
         */
        get: operations["get-projects-position-skill-key"];
        put?: never;
        post?: never;
        /**
         * Delete a position skill
         * @description Deletes a position skill. You can only delete unassigned position skills. If you no longer use a permission or skill, change its `status` to `inactive`.
         */
        delete: operations["delete-projects-position-skill-key"];
        options?: never;
        head?: never;
        /**
         * Update a position skill
         * @description Updates an existing position skill by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-projects-position-skill-key"];
        trace?: never;
    };
    "/objects/projects/employee-out-of-office": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee out of office schedules
         * @description Returns a collection with a key, ID, and link for each employee out of office schedule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-projects-employee-out-of-office"];
        put?: never;
        /**
         * Create an employee out of office schedule
         * @description Creates a new employee out of office schedule.
         */
        post: operations["create-projects-employee-out-of-office"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/employee-out-of-office/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee out of office schedule.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee out of office
         * @description Returns detailed information for a specified employee out of office schedule.
         */
        get: operations["get-projects-employee-out-of-office-key"];
        put?: never;
        post?: never;
        /**
         * Delete an employee out of office schedule
         * @description Deletes an employee out of office schedule.
         */
        delete: operations["delete-projects-employee-out-of-office-key"];
        options?: never;
        head?: never;
        /**
         * Update an employee out of office schedule
         * @description Updates an existing employee out of office schedule by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-projects-employee-out-of-office-key"];
        trace?: never;
    };
    "/objects/projects/employee-out-of-office-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List employee out of office lines
         * @description Returns a collection with a key, ID, and link for each employee out of office line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-projects-employee-out-of-office-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/projects/employee-out-of-office-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee out of office line.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an employee out of office line
         * @description Returns detailed information for a specified employee out of office line.
         */
        get: operations["get-projects-employee-out-of-office-line-key"];
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
        /** @description Use projects in Sage Intacct to plan, manage, track, and report on work across your organization. */
        "objects.projects.project": {
            /**
             * @description System-assigned unique key for the project.
             * @example 83
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the project.
             * @example P-0045
             */
            id?: string;
            /**
             * @description Name for the project.
             * @example Implementation Project
             */
            name?: string;
            /**
             * @description Provides a brief description for the project.
             * @example Software Implementation Project
             */
            description?: string | null;
            /**
             * @description Specifies the currency used for the project.
             * @example USD
             */
            projectCurrency?: string | null;
            /**
             * @description Specifies the project category, used mainly for reporting and filtering purposes. You can use project categories to group and categorize projects.
             * @example contract
             * @enum {string|null}
             */
            category?: null | "contract" | "capitalized" | "internalNonBillable" | "internalBillable";
            /** @description References the current project status, used to track the progress of projects through different states. You can also use the project status to restrict transactions in the project. */
            projectStatus?: {
                /**
                 * @description Unique key for the project status.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the project status.
                 * @example In Progress
                 */
                id?: string | null;
                /**
                 * @description Indicates whether to generate project invoices for the project in the specified status. Set to `true` to prevent invoice generation.
                 * @example false
                 */
                readonly disableGenerateInvoice?: boolean | null;
                /**
                 * @description Indicates whether to create Accounts Payable (AP) or Purchase Order (PO) entries for the project in the specified status. Set to `true` to prevent AP/PO entries.
                 * @example false
                 */
                readonly disablePurchasingAPEntry?: boolean | null;
                /**
                 * @description Indicates whether to create expense entries for the project in the specified status. Set to `true` to prevent expense entries.
                 * @example false
                 */
                readonly disableExpenseEntry?: boolean | null;
                /**
                 * @description Indicates whether to create timesheet entries for the project in the specified status. Set to `true` to prevent timesheet entries.
                 * @example false
                 */
                readonly disableTimesheetEntry?: boolean | null;
                /**
                 * @description URL endpoint for the project status.
                 * @example /objects/projects/project-status/1
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Specifies the scheduled start date for the project.
             * @example 2023-01-23
             */
            startDate?: string | null;
            /**
             * Format: date
             * @description Specifies the scheduled end date for the project.
             * @example 2023-04-01
             */
            endDate?: string | null;
            /** @description Indicates the budget projections for the project. */
            budget?: {
                /**
                 * Format: decimal-precision-2
                 * @description Budgeted billing amount for the project.
                 * @example 10000.00
                 */
                billingAmount?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Budgeted duration (in hours) for the project.
                 * @example 250.00
                 */
                budgetedDuration?: string | null;
                /**
                 * Format: decimal-precision-2
                 * @description Budgeted cost for the project.
                 * @example 10000.00
                 */
                budgetedCost?: string | null;
            };
            /** @description References the General Ledger (GL) budget used by revenue recognition to calculate the projected cost amount for the project. */
            glBudget?: {
                /**
                 * @description Unique key for the budget.
                 * @example 5
                 */
                key?: string | null;
                /**
                 * @description Identifier for the budget.
                 * @example KPI Budgets
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the budget.
                 * @example /objects/general-ledger/budget/5
                 */
                readonly href?: string | null;
            };
            /**
             * Format: decimal-precision-2
             * @description Specifies the contracted amount for the project for reporting purposes.
             * @example 15000.00
             */
            contractAmount?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Specifies the actual amount for the project for reporting purposes.
             * @example 15000.00
             */
            actualAmount?: string | null;
            /** @description Indicates the calculated progress for the project. */
            readonly progress?: {
                /**
                 * @description Estimated duration for the project in hours.
                 * @example 200
                 */
                readonly estimatedDuration?: string | null;
                /**
                 * @description Actual duration for the project in hours.
                 * @example 183
                 */
                readonly actualDuration?: string | null;
                /**
                 * @description Approved duration for the project in hours.
                 * @example 175
                 */
                readonly approvedDuration?: string | null;
                /**
                 * @description Remaining duration for the project in hours, calculated as the difference between estimated and actual duration.
                 * @example 8
                 */
                readonly remainingDuration?: string | null;
                /**
                 * Format: percent-precision-2
                 * @description Calculated percentage of project completion, based on the ratio of actual duration to estimated duration for project tasks.
                 * @example 35.00
                 */
                readonly percentComplete?: string | null;
                /**
                 * Format: percent-precision-2
                 * @description Observed percentage of project completion, indicating how complete the project is as of a specific date.
                 * @example 50.00
                 */
                readonly observedPercentComplete?: string | null;
            };
            /**
             * @description Specifies how the project will be invoiced:
             *
             *     - `timeAndMaterial` - Invoices the customer for any time entry, expense, or AP/PO purchase that's marked as billable and assigned to this project.
             *     - `fixedFee` - Invoices the customer for fixed fees, based on line items in an Order Entry transaction definition.
             *     - `fixedFeeAndExpenses` - Invoices the customer for fixed fees, based on line items in an Order Entry transaction definition, plus any billable expenses.
             * @default null
             * @example timeAndMaterial
             * @enum {string|null}
             */
            billingType?: null | "timeAndMaterial" | "fixedFee" | "fixedFeeAndExpenses";
            /**
             * @description Specifies the sales order number for the project.
             * @example SO-5478
             */
            salesOrderNumber?: string | null;
            /**
             * @description Indicates the purchase order number for the project.
             * @example PO-7829
             */
            purchaseOrderNumber?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Specifies the project purchase order amount.
             * @example 4500.00
             */
            purchaseOrderAmount?: string | null;
            /**
             * @description Indicates the project purchase quote number.
             * @example 1453
             */
            purchaseQuoteNumber?: string | null;
            /**
             * @description Specifies the Salesforce key.
             * @example 1
             */
            readonly salesforceKey?: string | null;
            /**
             * @description Specifies a document number that can be used for custom project reporting.
             * @example 1453
             */
            documentNumber?: string | null;
            /** @description References the immediate parent project in the project hierarchy when the current project is a child project. */
            parent?: {
                /**
                 * @description Unique key for the parent project.
                 * @example 10
                 */
                key?: string | null;
                /**
                 * @description Identifier for the parent project.
                 * @example P-0040
                 */
                id?: string | null;
                /**
                 * @description Name for the parent project.
                 * @example NET-XML30-2
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the parent project.
                 * @example /objects/projects/project/1
                 */
                readonly href?: string | null;
            };
            /**
             * @description Indicates whether to include project transactions in invoices for the parent project.
             * @default false
             * @example true
             */
            invoiceWithParent?: boolean | null;
            /** @description References the root project at the highest level in the project hierarchy. */
            readonly rootProject?: {
                /**
                 * @description Unique key for the root project.
                 * @example 12
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the root project.
                 * @example 12
                 */
                readonly id?: string | null;
                /**
                 * @description Name for the root project.
                 * @example PRJ-RT-0001
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the root project.
                 * @example /objects/projects/project/12
                 */
                readonly href?: string;
            };
            /**
             * @description References the project included in the work-in-progress (WIP) schedule. This project consolidates values from multiple projects into a single WIP reporting project.
             *
             *     For more information, read [include projects in work in progress (WIP) schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=include_projects_in_wip) in the Sage Intacct Help Center.
             */
            wipScheduleProject?: {
                /**
                 * @description Unique key for the WIP reporting project.
                 * @example 12
                 */
                key?: string | null;
                /**
                 * @description Identifier for the WIP reporting project.
                 * @example 12
                 */
                id?: string | null;
                /**
                 * @description Name for the WIP reporting project.
                 * @example PRJ-RT-0001
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the WIP reporting project.
                 * @example /objects/projects/project/12
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates whether to exclude the project from work in progress schedules.
             * @default true
             * @example true
             */
            excludeFromWIPSchedule?: boolean;
            /** @description References the customer associated with the project. */
            customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 13
                 */
                key?: string | null;
                /**
                 * @description Identifier for the customer.
                 * @example 113
                 */
                id?: string | null;
                /**
                 * @description Name for the customer.
                 * @example Software company
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/1
                 */
                readonly href?: string;
            };
            /** @description References the sales contact for the project. */
            salesContact?: {
                /**
                 * @description Unique key for the sales contact.
                 * @example 10
                 */
                key?: string | null;
                /**
                 * @description Identifier for the sales contact.
                 * @example 100
                 */
                id?: string | null;
                /**
                 * @description Name for the sales contact.
                 * @example Carlos Jones
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the sales contact.
                 * @example /objects/company-config/employee/1
                 */
                readonly href?: string;
            };
            /** @description References the project type, used to categorize and report on projects. Project types let you group projects into categories for reporting. */
            projectType?: {
                /**
                 * @description Unique key for the project type.
                 * @example 3
                 */
                key?: string | null;
                /**
                 * @description Identifier for the project type.
                 * @example Internal
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the project type.
                 * @example /objects/projects/project-type/1
                 */
                readonly href?: string;
            };
            /** @description References the project manager for the project. Project managers usually approve timesheets and expense reports, they can also run and view project reports. */
            manager?: {
                /**
                 * @description Unique key for the project manager.
                 * @example 10
                 */
                key?: string | null;
                /**
                 * @description Identifier for the project manager.
                 * @example E10
                 */
                id?: string | null;
                /**
                 * @description Name for the project manager.
                 * @example Carl Smith
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the project manager.
                 * @example /objects/company-config/employee/1
                 */
                readonly href?: string;
            };
            /** @description References the department associated with this project. The project department overrides any department associated with an employee on a timesheet. If a project department is not set, the employee department is used. */
            department?: {
                /**
                 * @description Unique key for the department.
                 * @example 10
                 */
                key?: string | null;
                /**
                 * @description Identifier for the department.
                 * @example 20
                 */
                id?: string | null;
                /**
                 * @description Name for the department.
                 * @example Sales
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the department.
                 * @example /objects/company-config/department/1
                 */
                readonly href?: string;
            };
            /**
             * @description References the location associated with this project. The project location overrides any location associated with an employee on a timesheet. If a project location is not set, the employee location is used.
             *
             *     If you subscribe to Construction and you use WIP management, changing a project's location can cause the project to be handled incorrectly in WIP schedules. After changing a project's location, [check WIP project settings to ensure that the project is handled correctly in WIP schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=include_projects_in_wip).
             */
            location?: {
                /**
                 * @description Unique key for the project location.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the project location.
                 * @example DIA
                 */
                id?: string | null;
                /**
                 * @description Name for the project location.
                 * @example US
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the project location.
                 * @example /objects/company-config/location/1
                 */
                readonly href?: string;
            };
            /** @description References the asset in construction in progress (CIP) associated with the project. */
            cipAsset?: {
                /**
                 * @description Unique key for the CIP asset.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the CIP asset.
                 * @example CIP-COURSE-LAPTOP-001
                 */
                id?: string | null;
                /**
                 * @description Name for the CIP asset.
                 * @example Course Delivery Laptop - CIP Capital Equipment
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the CIP asset.
                 * @example /objects/fixed-assets/asset/1
                 */
                readonly href?: string;
            };
            /** @description References the Accounts Receivable (AR) payment term for the project, included on the invoice header. If `paymentTerm` is not set, the customer's terms are used. */
            paymentTerm?: {
                /**
                 * @description Unique key for the AR payment term.
                 * @example 10
                 */
                key?: string | null;
                /**
                 * @description Identifier for the AR payment term.
                 * @example 10
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the AR payment term.
                 * @example /objects/accounts-receivable/term/1
                 */
                readonly href?: string;
            };
            /** @description References the Sage Intacct user assigned as a customer representative with the ability to approve timesheets for the project. */
            customerUser?: {
                /**
                 * @description Unique key for the customer user.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the customer user.
                 * @example Admin
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the customer user.
                 * @example /objects/company-config/user/1
                 */
                readonly href?: string;
            };
            /** @description References the class associated with this project. A class adds a value to the dimension that you can use to tag transactions for reporting. */
            class?: {
                /**
                 * @description Unique key for the class.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the class.
                 * @example 10
                 */
                id?: string | null;
                /**
                 * @description Name for the class.
                 * @example Construction
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the class.
                 * @example /objects/company-config/class/1
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates the user restrictions for entering project time and expenses, overriding default user restrictions for the Projects application:
             *
             *
             *
             *
             *
             *       - `systemDefault` - Use the restrictions set for the Projects application.
             *       - `anyUser` - Allow any user to enter time and expenses for the project.
             *       - `projectUsers` - Allow only users assigned to the project to enter time and expenses.
             *       - `projectTaskUsers` - Allow only users assigned to the project and task to enter time and expenses.
             * @default systemDefault
             * @example systemDefault
             * @enum {string|null}
             */
            userRestrictions?: null | "systemDefault" | "anyUser" | "projectUsers" | "projectTaskUsers";
            /**
             * @description Indicates whether to bill employee expenses for the project.
             * @default false
             * @example true
             */
            isBillableEmployeeExpense?: boolean;
            /**
             * @description Indicates whether to bill Accounts Payable (AP) and Purchase Order (PO) expenses for the project. Set to `true` to bill AP/PO expenses.
             * @default false
             * @example true
             */
            isBillablePurchasingAPExpense?: boolean;
            /** @description Specifies the methods used to determine project billing rates and pricing, either `laborPricing` or `expensePricing`. */
            ratesAndPricing?: {
                /**
                 * @description Specifies the method used to determine labor pricing:
                 *
                 *     - `billingRate` - Pricing is based on a predefined billing rate.
                 *     - `costPlusFee` - Pricing is based on actual costs plus a markup percentage.
                 * @default billingRate
                 * @example billingRate
                 * @enum {string}
                 */
                laborPricing?: "billingRate" | "costPlusFee";
                /**
                 * Format: decimal-precision-2
                 * @description Indicates the percentage to add to labor costs when `laborPricing` is set to `costPlusFee`.
                 * @example 10.00
                 */
                laborMarkup?: string | null;
                /**
                 * @description Specifies the method used to determine expense pricing.
                 *
                 *     - `billingRate` - Charges are based on the vendor's billing rate.
                 *     - `costPlusFee` - Charges are based on the vendor's standard rate plus a markup percentage, specified in `expenseMarkup`.
                 * @default costPlusFee
                 * @example billingRate
                 * @enum {string}
                 */
                expensePricing?: "billingRate" | "costPlusFee";
                /**
                 * Format: decimal-precision-2
                 * @description Indicates the percentage to add to expense costs when `expensePricing` is set to `costPlusFee`.
                 * @example 10.00
                 */
                expenseMarkup?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Indicates the default percentage used to calculate pricing for Accounts Payable (AP), and Purchase Order (PO) transactions when generating project invoices.
                 * @example 12.00
                 */
                defaultRate?: string;
                /**
                 * @description Specifies the pricing method to be used for Accounts Payable (AP), and Purchase Order (PO) transactions.
                 * @default costPlusFee
                 * @example costPlusFee
                 * @enum {string}
                 */
                readonly purchasingAPPricing?: "costPlusFee";
            };
            /** @description References contact information for the project. */
            contacts?: {
                /** @description References the site contact for the project, the person or organization responsible for the project. */
                site?: {
                    /**
                     * @description Unique key for the site contact.
                     * @example 3
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the site contact.
                     * @example Jane
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the site contact.
                     * @example /objects/company-config/contact/3
                     */
                    readonly href?: string;
                };
                /** @description References the primary contact for the project, the person or organization responsible for the project. */
                primary?: {
                    /**
                     * @description Unique key for the primary contact.
                     * @example 1
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the primary contact.
                     * @example JSmith
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the primary contact.
                     * @example /objects/company-config/contact/1
                     */
                    readonly href?: string;
                };
                /** @description References the bill-to contact associated with the project, the person or organization responsible for paying project invoices. If not set, the customer contact will be used. */
                billTo?: {
                    /**
                     * @description Unique key for the bill-to contact.
                     * @example 2
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the bill-to contact.
                     * @example ABrown
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the bill-to contact.
                     * @example /objects/company-config/contact/2
                     */
                    readonly href?: string;
                };
                /** @description References the ship-to contact for the project, the person or organization to whom project invoices are sent. If not set, the customer contact is used for shipping. */
                shipTo?: {
                    /**
                     * @description Unique key for the ship-to contact.
                     * @example 2
                     */
                    key?: string | null;
                    /**
                     * @description Name for the ship-to contact.
                     * @example ABrown
                     */
                    id?: string | null;
                    /**
                     * @description URL endpoint for the ship-to contact.
                     * @example /objects/company-config/contact/2
                     */
                    readonly href?: string;
                };
            };
            /**
             * @description Specifies a custom invoice message that appears on the invoice header when you generate invoices for the project.
             * @example Invoice for project
             */
            invoiceMessage?: string | null;
            /**
             * @description Specifies the currency to use when generating invoices for the project.
             * @example USD
             */
            invoiceCurrency?: string | null;
            /**
             * @description Indicates the billing control to prevent or warn of billings that exceed the budgeted billing amount:
             *
             *
             *
             *
             *
             *       - `doNothing` - Take no action if billings exceed the projected billing amount.
             *       - `issueAWarningMessage` - Issue a warning message when billings exceed the budgeted billing amount, but allow the billing to proceed.
             *       - `preventBilling` - If the invoice amount exceeds your projected billing amount, you cannot generate an invoice.
             * @default doNothing
             * @example preventBilling
             * @enum {string}
             */
            billingOverMax?: "doNothing" | "issueAWarningMessage" | "preventBilling";
            /**
             * @description Indicates whether to exclude employee, Accounts Payable (AP), and Purchase Order (PO) expenses from the over-budget calculation. Set to `true` to exclude these expenses.
             * @default false
             * @example false
             */
            excludeExpenses?: boolean | null;
            /** @description References the contract associated with the project. */
            readonly contract?: {
                /**
                 * @description Unique key for the contract.
                 * @example 1
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the contract.
                 * @example CON-002
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the contract.
                 * @example /objects/contracts/contract/1
                 */
                readonly href?: string;
            };
            /** @description References documents associated with the project, such as statements of work, specifications, or agreements. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the attachment.
                 * @example 1
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/1
                 */
                readonly href?: string;
            };
            /** @description References grant funding information for the project. */
            grant?: {
                /**
                 * @description Specifies the ALN (Assistance Listing Number) found on the Federal award letter was formerly known as CFDA (Catalog of Federal Domestic Assistance). The ALN tracks federal awards and cooperative agreements. Reporting and auditing use the ALN.
                 * @example 10.555
                 */
                aln?: string | null;
                /**
                 * @description Name for the project receiving the grant funding.
                 * @example Undergraduate Programs
                 */
                fundedProjectName?: string | null;
                /**
                 * @description Agency responsible for the grant funding, for example, `World Bank`.
                 * @example US government
                 */
                agency?: string | null;
                /**
                 * @description Source of the grant funding (`federal` or `third party`).
                 * @default null
                 * @example federal
                 * @enum {string|null}
                 */
                payer?: null | "federal" | "thirdParty";
                /**
                 * @description Provides an additional identifier for the grant funding.
                 * @example Other
                 */
                otherId?: string | null;
                /**
                 * @description Indicates the type of grant funding (`cash` or `nonCash`).
                 * @default null
                 * @example cash
                 * @enum {string|null}
                 */
                assistanceType?: null | "cash" | "nonCash";
                /**
                 * @description Indicates the type of restriction on the received grant funding:
                 *
                 *       - `purpose` - Funds are restricted by purpose, for example, to be used for a specific program or project, for example on education initiatives.
                 *       - `time` - Funds are restricted by time, for example, to be used in a specific time period, for example within the current fiscal year.
                 *       - `NA` - There are no restrictions on the use of the funds, there are no purpose or time restrictions.
                 *       - `null` - If 'null', revenue restriction is not specified.
                 * @default null
                 * @example time
                 * @enum {string|null}
                 */
                revenueRestriction?: null | "purpose" | "time" | "NA";
                /**
                 * @description Duration of time-based restriction (in years).
                 * @example 1
                 */
                restrictionExpiry?: string | null;
                /**
                 * Format: date
                 * @description Date when first restriction expires on time-based restricted funding.
                 * @example 2021-01-23
                 */
                restrictionExpirationDate?: string | null;
                /**
                 * @description Indicates whether the release of restriction has been scheduled for time-based restrictions. Set to `true` if scheduled.
                 * @default false
                 * @example false
                 */
                isTimeSatisfactionScheduled?: boolean | null;
            };
            /**
             * @description References information about the scope and schedule for the project, including scope of work, inclusions, exclusions, and terms. (Construction subscription)
             *
             *     For more information, read [add the scope and schedule to a project](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_scope_and_schedule_to_project) in the Sage Intacct Help Center.
             */
            scopeDetails?: {
                /**
                 * @description Scope of the project, for example, the expected scope of work or materials to be delivered. Use 4000 or fewer characters.
                 * @example Subcontractor agrees to provide labor and materials for utility trenching for Five Oaks Storage facilities according to contract.
                 */
                scope?: string | null;
                /**
                 * @description Inclusions for the project, for example, items that are explicitly included in the terms of this project. Use 4000 or fewer characters.
                 * @example Includes drive through building and landscaping materials.
                 */
                inclusions?: string | null;
                /**
                 * @description Exclusions for the project, for example, items that are explicitly excluded in the terms of this project. Use 4000 or fewer characters.
                 * @example Excludes additional purchases of landscaping materials.
                 */
                exclusions?: string | null;
                /**
                 * @description Terms of the project, these may include additional terms or performance obligations. Use 4000 or fewer characters.
                 * @example Follow all safety rules and security procedure that are in force and applicable during execution of work.
                 */
                terms?: string | null;
            };
            /** @description References the schedule information for the project. */
            scheduleDetails?: {
                /**
                 * Format: date
                 * @description Scheduled start date, the date the project is scheduled to start.
                 * @example 2024-10-01
                 */
                scheduledStartDate?: string | null;
                /**
                 * Format: date
                 * @description Original scheduled completion date, the date the project is scheduled to be completed.
                 * @example 2024-12-30
                 */
                scheduledCompletionDate?: string | null;
                /**
                 * Format: date
                 * @description Actual start date, the date the project actually started.
                 * @example 2024-10-05
                 */
                actualStartDate?: string | null;
                /**
                 * Format: date
                 * @description Actual completion date, the date the project was actually completed.
                 * @example 2024-12-31
                 */
                actualCompletionDate?: string | null;
                /**
                 * Format: date
                 * @description Revised completion date, the revised date the project is scheduled to be completed.
                 * @example 2024-12-25
                 */
                revisedCompletionDate?: string | null;
                /**
                 * Format: date
                 * @description Substantial completion date, the date the work for the project is considered substantially complete.
                 * @example 2024-12-26
                 */
                substantialCompletionDate?: string | null;
                /**
                 * Format: date
                 * @description Notice to proceed date, the date when the project received formal notice to proceed.
                 * @example 2024-11-10
                 */
                noticeToProceedDate?: string | null;
                /**
                 * Format: date
                 * @description Response due date, the date when a response is expected from an external party for the project.
                 * @example 2024-11-10
                 */
                responseDueDate?: string | null;
                /**
                 * Format: date
                 * @description Executed on date, the date the project was formally executed.
                 * @example 2024-11-15
                 */
                executedOnDate?: string | null;
                /**
                 * @description Provide additional context about any impacts on the current schedule for the project. Use 100 or fewer characters.
                 * @example There are currently no schedule impacts.
                 */
                scheduleImpactNotes?: string | null;
            };
            /** @description If Advanced Tax or VAT is enabled, the tax schedule used to capture tax details for the project. */
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
            /** @description Tax solution used to calculate and capture taxes on the project. */
            taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 5
                 */
                key?: string | null;
                /**
                 * @description ID of the tax solution.
                 * @example Australia GST
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/5
                 */
                readonly href?: string | null;
            };
            multiEntityLocation?: components["schemas"]["entity-location-ref"];
            status?: components["schemas"]["status"];
            /** @description Record URL for the project. */
            readonly webURL?: string;
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        "projects-projectRequiredProperties": Record<string, never>;
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
        /** @description Project resources represent people or employees assigned to a project. You can assign a resource, typically an employee, to a project, including details such as billing rates, roles and assignment dates. */
        "objects.projects.project-resource": {
            /**
             * @description System-assigned unique key for the project resource.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the project resource. This is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the project resource.
             * @example /objects/projects/project-resource/23
             */
            readonly href?: string;
            /**
             * @description Description of the project resource.
             * @example Hourly resource
             */
            description?: string | null;
            /**
             * Format: date
             * @description Start date for the project resource, the date on which the project resource is scheduled to begin work.
             * @example 2025-04-01
             */
            startDate?: string | null;
            /** @description References the employee identified as the project resource. */
            employee?: {
                /**
                 * @description Unique key for the employee.
                 * @example 244
                 */
                key?: string | null;
                /**
                 * @description Identifier for the employee.
                 * @example jsmith
                 */
                id?: string | null;
                /**
                 * Format: date
                 * @description Start date for the employee, the date on which the employee is scheduled to begin work.
                 * @example 2025-01-01
                 */
                readonly startDate?: string | null;
                /**
                 * Format: date
                 * @description End date for the employee, the date on which the employee is scheduled to end work.
                 * @example 2026-01-01
                 */
                readonly endDate?: string | null;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/23
                 */
                readonly href?: string | null;
            };
            /** @description References the contact information for the employee identified as the project resource. */
            readonly employeeContact?: {
                /**
                 * @description Unique key for the employee contact.
                 * @example 977
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the employee contact.
                 * @example John Smith
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the employee contact.
                 * @example /objects/company-config/contact/973
                 */
                readonly href?: string;
            };
            /**
             * @description References an item for setting project-specific pricing for the project resource. You can assign an item to a project resource to set project-specific pricing for the resource.  The following rules apply when assigning an item to a project resource:
             *
             *     - If pricing is set for an item without specifying an employee, the pricing applies to the item regardless of the employee.
             *     - If an employee and item are specified together with a `laborRate` or `expenseRate`, the pricing applies to timesheet entries or expenses entered by the employee.
             *
             *       For more information, watch the video [assign project resources and pricing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Video_assign_project_resources_pricing) in the Sage Intacct Help Center.
             */
            item?: {
                /**
                 * @description Unique key for the item.
                 * @example 23
                 */
                key?: string | null;
                /**
                 * @description Identifier for the item.
                 * @example B002
                 */
                id?: string | null;
                /**
                 * @description Name for the item.
                 * @example Monitor-Acer
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/23
                 */
                readonly href?: string | null;
            };
            /**
             * @description Specifies the method used to determine pricing for the project resource, either `laborPricingMethod` or `expensePricingMethod`.
             *
             *     For more information, watch the video [assign project resources and pricing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Video_assign_project_resources_pricing) in the Sage Intacct Help Center.
             */
            pricing?: {
                /**
                 * @description Specifies the method used to determine labor pricing for the project resource. Labor pricing is based on a predefined billing rate or cost plus a markup percentage.
                 *
                 *     - `billingRate` - Pricing is based on a predefined billing rate.
                 *     - `costPlusFee` - Pricing is based on actual costs plus a markup percentage.
                 * @example billingRate
                 * @enum {string}
                 */
                readonly laborPricingMethod?: "billingRate" | "costPlusFee";
                /**
                 * @description Specifies the default labor rate for the project resource, applied when the resource logs time to the project. If a project resource has a specified `item` and the `laborRate` differs from the item's rate, the `laborRate` takes precedence. If they have multiple labor rates for the same scheduled time, only the first rate is applied.
                 * @example 10
                 */
                laborRate?: number | null;
                /**
                 * @description Specifies the method used to determine expense pricing for the project resource.
                 *
                 *     - `billingRate` - Pricing is based on a predefined billing rate.
                 *     - `costPlusFee` - Pricing is based on actual costs plus a markup percentage.
                 * @example billingRate
                 * @enum {string}
                 */
                readonly expensePricingMethod?: "billingRate" | "costPlusFee";
                /**
                 * @description Specifies the default expense rate for the project resource, applied when the resource logs expenses to the project.
                 * @example 120
                 */
                expenseRate?: number | null;
                /**
                 * @description Specifies the pricing method to be used for Accounts Payable (AP), and Purchase Order (PO) transactions, `costPlusFee` indicates that pricing is based on actual costs plus a markup percentage.
                 * @example costPlusFee
                 * @enum {string}
                 */
                readonly apPurchasingPricingMethod?: "costPlusFee";
                /**
                 * @description Specifies the default percentage used to calculate pricing for the project resource, applied when generating invoices for Accounts Payable (AP) and Purchase Order (PO).
                 * @example 100
                 */
                apPurchasingRate?: number | null;
            };
            /** @description References the project associated with this project resource. */
            project?: {
                /**
                 * @description Unique key for the project.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the project.
                 * @example P-0045
                 */
                id?: string;
                /**
                 * @description Name for the project.
                 * @example Implementation Project
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/23
                 */
                readonly href?: string;
            };
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        "projects-project-resourceRequiredProperties": Record<string, never>;
        /** @description Project statuses let you track the progress of projects through different states, used to categorize and report on projects. */
        "objects.projects.project-status": {
            /**
             * @description System-assigned unique key for project status.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the project status.
             * @example In Progress
             */
            id?: string;
            /**
             * @description Provides a brief description of the purpose of the project status.
             * @example Project is in the planning phase and not yet open for time or expense entry.
             */
            description?: string | null;
            /**
             * @description Indicates whether to create timesheet entries for the project in the specified status. Set to `true` to prevent timesheet entries.
             * @default false
             * @example false
             */
            disableTimesheetEntry?: boolean;
            /**
             * @description Indicates whether to create expense entries for the project in the specified status. Set to `true` to prevent expense entries.
             * @default false
             * @example false
             */
            disableExpenseEntry?: boolean;
            /**
             * @description Indicates whether to create Accounts Payable (AP) or Purchase Order (PO) entries for the project in the specified status. Set to `true` to prevent AP/PO entries.
             * @default false
             * @example false
             */
            disablePurchasingAPEntry?: boolean;
            /**
             * @description Indicates whether to generate project invoices for the project in the specified status. Set to `true` to prevent invoice generation.
             * @default false
             * @example false
             */
            disableGenerateInvoice?: boolean;
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description Endpoint for this project status.
             * @example /objects/projects/project-status/1
             */
            readonly href?: string;
        };
        "projects-project-statusRequiredProperties": Record<string, never>;
        /** @description Project types let you group projects into categories for reporting. */
        "objects.projects.project-type": {
            /**
             * @description System-assigned unique key for the project type.
             * @example 3
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the project type.
             * @example Internal
             */
            id?: string;
            /**
             * @description URL endpoint for the project type.
             * @example /objects/projects/project-type/3
             */
            readonly href?: string;
            /** @description References the project type of the immediate parent project in the project hierarchy when the current project is a child project. */
            parent?: {
                /**
                 * @description Unique key for the parent project type.
                 * @example 10
                 */
                key?: string | null;
                /**
                 * @description Identifier for the parent project type.
                 * @example Billable
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the parent project type.
                 * @example /objects/projects/project-type/1
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        "projects-project-typeRequiredProperties": Record<string, never>;
        /** @description A project group is a specified set of projects, or a set of projects that meet certain criteria. Use groups to filter or display information in multiple ways, for example, by showing data from only certain projects. */
        "objects.projects.project-group": {
            /**
             * @description System-assigned unique key for the project group.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Identifier for the project group.
             * @example PPO
             */
            id?: string;
            /**
             * @description URL endpoint for the project group.
             * @example /objects/projects/project-group/23
             */
            readonly href?: string;
            /**
             * @description Name for the project group.
             * @example Projects waiting for PO
             */
            name?: string;
            /**
             * @description Description of the project group.
             * @example Projects with G10 and above.
             */
            description?: string | null;
            /**
             * @description Specifies the group membership type for the project. The group type and related fields determine how projects will be organized hierarchically and how related projects will be managed in the Projects list. There are two types of project groups:
             *
             *
             *
             *
             *
             *       - `specific` - Specify the projects to include and their hierarchical relationships in the `groupMembers` array.
             *       - `all` - Include all projects that match the `memberFilter` criteria.
             *
             *     Depending on the group type, you can either specify individual projects to include and their order, or include all projects that match certain criteria. This will impact how parent and child projects are displayed and managed, providing up to 5 levels of hierarchical organization for enhanced billing flexibility and organizational clarity.
             * @default all
             * @example all
             * @enum {string}
             */
            groupType?: "all" | "specific";
            /**
             * @description One or more filters to select the projects to include in the project group, can be used with both `all` and `specific` group types.
             *
             *     You can use this filter to show only projects managed by the current user: `{"$eq":{"manager.id":"current(user)"}}`
             */
            memberFilter?: components["schemas"]["member-filter"] & Record<string, never>;
            /** @description References member projects of the project group and their sort order. Applies only when `groupType` = `specific`. */
            groupMembers?: {
                /**
                 * @description Unique key for the project.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the project.
                 * @example DIM - BTI
                 */
                id?: string;
                /**
                 * @description Name for the project.
                 * @example Dimensions - Berkeley Technology Inc
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/23
                 */
                readonly href?: string;
                /**
                 * @description Current status of the project.
                 * @example active
                 * @enum {string}
                 */
                readonly status?: "active" | "inactive";
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
        "projects-project-groupRequiredProperties": Record<string, never>;
        /** @description A project group member represents a project that is assigned to a project group. */
        "objects.projects.project-group-member": {
            /**
             * @description System-assigned unique key for the project group member.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the project group member. This value is the same as the `key` for this project group member.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the project group member.
             * @example /objects/projects/project-group-member/23
             */
            readonly href?: string;
            /**
             * @description Sort order for the project group member.
             * @example asc
             */
            sortOrder?: string;
            /** @description Project that is a member of the project group. */
            project?: {
                /**
                 * @description Unique key for the project.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description ID for the project.
                 * @example DIM - BTI
                 */
                id?: string;
                /**
                 * @description Name for the project.
                 * @example Dimensions - Berkeley Technology Inc
                 */
                name?: string;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/23
                 */
                readonly href?: string;
                /**
                 * @description Current status of the project.
                 * @example active
                 */
                status?: string;
            };
            /** @description References the project group to which this member belongs. */
            readonly projectGroup?: {
                /**
                 * @description ID for the project group.
                 * @example Sustainability initiatives
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the project group.
                 * @example 33
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the project group.
                 * @example /objects/projects/project-group/33
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Project observed percent completed objects record dated progress updates for a project. */
        "objects.projects.project-observed-percent-completed": {
            /**
             * @description System-assigned key for the observed-percent-completed object.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Observed percent completed ID. Same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * Format: date
             * @description Observation date.
             * @example 2024-05-05
             */
            asOfDate?: string;
            /**
             * Format: decimal-precision-2
             * @description Percent completed by the `asOfDate`.
             * @example 25
             */
            percentComplete?: string;
            /**
             * @description Note for the completion entry.
             * @example Signed off by J.Manager
             */
            notes?: string;
            audit?: components["schemas"]["audit.s1"];
        } & {
            /** @description Project associated with the observed percent completed object. */
            project?: {
                /**
                 * @description Unique key for the project.
                 * @example 109
                 */
                key?: string;
                /**
                 * @description Identifier for the project.
                 * @example 22-001
                 */
                readonly id?: string;
                /**
                 * @description Name of the project.
                 * @example Implementation Project
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/109
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the project observed percent completed object.
             * @example /objects/projects/project-observed-percent-completed/23
             */
            readonly href?: string;
        };
        "projects-project-observed-percent-completedRequiredProperties": Record<string, never>;
        /** @description Standard task */
        "objects.construction.standard-task": {
            /**
             * @description System-assigned key for the standard task.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the standard task.
             * @example 1-010
             */
            id?: string;
            /**
             * @description URL endpoint of the standard task.
             * @example /objects/construction/standard-task/2
             */
            readonly href?: string;
            /**
             * @description Name of the standard task.
             * @example Summary of Work
             */
            name?: string;
            /**
             * @description Description of the standard task.
             * @example Summary of Work
             */
            description?: string;
            /**
             * @description Production unit description of the standard task.
             * @example days
             */
            productionUnitDescription?: string;
            status?: components["schemas"]["status"];
            item?: components["schemas"]["item-ref"];
            /**
             * @description Set to `true` if tasks created from this standard task are billable.
             * @default false
             * @example true
             */
            isBillable?: boolean;
            /**
             * @description Set to `true` if tasks created from this standard task are milestones.
             * @default false
             * @example false
             */
            isMilestone?: boolean;
            /**
             * @description Set to `true if tasks created from this standard task are utilized. A utilized task indicates progress on a customer project or internal project.
             * @default false
             * @example true
             */
            isUtilized?: boolean;
            /**
             * @description Priority of tasks created from the standard task.
             * @example 1
             */
            priority?: number;
            /** @description Time type of the standard task. */
            timeType?: {
                /**
                 * @description Time type key.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Time type id.
                 * @example Hourly Salaries
                 */
                id?: string;
                /**
                 * @description URL endpoint of the time type.
                 * @example /objects/time/time-type/1
                 */
                readonly href?: string;
            };
            /**
             * @description Work breakdown structure code of the standard task.
             * @example 1
             */
            wbsCode?: string;
            /** @description Reference to the parent standard task of this standard task. */
            parent?: {
                /**
                 * @description Key of parent standard task.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description ID of parent standard task.
                 * @example 1-000
                 */
                id?: string;
                /**
                 * @description Name of parent standard task.
                 * @example GENERAL CONDITIONS
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint of parent standard task.
                 * @example /objects/construction/standard-task/1
                 */
                readonly href?: string;
            };
            class?: components["schemas"]["class-ref"];
            /** @description Array of standard cost types. */
            standardCostTypes?: {
                /**
                 * @description Standard cost type key.
                 * @example 7
                 */
                key?: string;
                /**
                 * @description Standard cost type ID.
                 * @example LABOR
                 */
                id?: string;
                /**
                 * @description URL endpoint of the standard cost type.
                 * @example /objects/construction/standard-cost-type/7
                 */
                readonly href?: string;
            }[];
            audit?: components["schemas"]["audit.s1"];
        };
        "construction-standard-taskRequiredProperties": Record<string, never>;
        /**
         * @description Tasks simplify the process of capturing task data for projects as you enter transactions. The uniqueness of a task is bound to a specific project, meaning you cannot select a task without first identifying the project.
         *
         *     For more information, read more about [task dimensions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Task_dimension_overview) in the Sage Intacct Help Center.
         */
        "objects.projects.task": {
            /**
             * @description System-assigned unique key for the task.
             * @example 101
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the task (20 characters maximum).
             * @example 01-010
             */
            id?: string;
            /**
             * @description Unique name for the task.
             * @example Client Onboarding - Requirements Gathering
             */
            name?: string;
            /**
             * @description Description for the task.
             * @example Conduct detailed sessions with the client to identify. document, and validate business, functional, and technical requirements.
             */
            description?: string | null;
            /** @description Specifies the parent task to which this task is subordinate. */
            parent?: {
                /**
                 * @description Unique key for the parent task.
                 * @example 11
                 */
                key?: string | null;
                /**
                 * @description Identifier for the parent task.
                 * @example MERIDIAN-TECH-CLIENT-ONBOARDING
                 */
                readonly id?: string | null;
                /**
                 * @description Name of the parent task.
                 * @example Client Onboarding - Meridian Technologies
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the parent task.
                 * @example /objects/projects/task/11
                 */
                readonly href?: string;
            };
            /** @description Specifies the project that the task is associated with. */
            project?: {
                /**
                 * @description Unique key for the project.
                 * @example 114
                 */
                key?: string;
                /**
                 * @description Identifier for the project.
                 * @example MERIDIAN-ERP-IMPLEMENTATION
                 */
                id?: string;
                /**
                 * @description Name of the project.
                 * @example ERP Implementation - Meridian Technologies
                 */
                readonly name?: string;
                /**
                 * Format: date
                 * @description Start date of the project.
                 * @example 2023-01-01
                 */
                readonly startDate?: string | null;
                /**
                 * Format: date
                 * @description End date of the project.
                 * @example 2023-04-01
                 */
                readonly endDate?: string | null;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/114
                 */
                readonly href?: string;
            };
            /** @description Specifies the customer associated with this task for billing purposes. */
            readonly customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 987
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the customer.
                 * @example CUST-MERIDIAN-001
                 */
                readonly id?: string | null;
                /**
                 * @description Name of the customer.
                 * @example Meridian Technologies Inc.
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/987
                 */
                readonly href?: string;
            };
            /** @description Specifies the work item associated with this task. Assigning an item is required for the task to be billable and included in customer invoicing. */
            item?: {
                /**
                 * @description Unique key for the item.
                 * @example 311
                 */
                key?: string | null;
                /**
                 * @description Identifier for the item.
                 * @example SERV-IMPLEMENT-001
                 */
                id?: string | null;
                /**
                 * @description Name of the item.
                 * @example Professional Services - Implementation.
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/311
                 */
                readonly href?: string;
            };
            /** @description Defines the scheduled start and end dates for the task. */
            planned?: {
                /**
                 * Format: date
                 * @description Specifies the date on which the project is scheduled to begin.
                 * @example 2023-04-01
                 */
                startDate?: string | null;
                /**
                 * Format: date
                 * @description Specifies the date on which the project is scheduled to end.
                 * @example 2023-05-05
                 */
                endDate?: string | null;
            };
            /** @description Defines the actual start and end dates for the task. */
            readonly actual?: {
                /**
                 * Format: date
                 * @description Specifies the date on which the project actually began.
                 * @example 2023-04-01
                 */
                readonly startDate?: string | null;
                /**
                 * Format: date
                 * @description Specifies the date on which the project actually ended.
                 * @example 2023-05-05
                 */
                readonly endDate?: string | null;
            };
            /** @description Indicates planned, estimated, actual, approved and remaining time values, including both total and billable durations. */
            duration?: {
                /**
                 * @description The initial scheduled duration of the task, measured in hours.
                 * @example 100
                 */
                planned?: number | null;
                /**
                 * @description The portion of the planned duration expected to be billable to the customer, measured in hours.
                 * @example 10
                 */
                readonly plannedBillable?: number | null;
                /**
                 * @description Represents the current estimated total duration of the task, measured in hours.
                 * @example 100
                 */
                estimated?: number | null;
                /**
                 * @description The current estimated total duration of the task, in hours, based on updated information or progress.
                 * @example 10
                 */
                readonly estimatedBillable?: number | null;
                /**
                 * @description The total number of hours recorded against the task. Reflects the actual effort spent to date, regardless of billable status.
                 * @example 105
                 */
                readonly actual?: number | null;
                /**
                 * @description The total number of billable hours recorded against the task. Represents the portion of actual work eligible for invoicing.
                 * @example 15
                 */
                readonly actualBillable?: number | null;
                /**
                 * @description The total number of hours recorded against the task that have been reviewed and approved, regardless of billable status.
                 * @example 100
                 */
                readonly approved?: number | null;
                /**
                 * @description The total number of billable hours recorded against the task that have been reviewed and approved for invoicing.
                 * @example 15
                 */
                readonly approvedBillable?: number | null;
                /**
                 * @description The estimated number of hours required to completed the task, this is automatically calculated.
                 * @example 100
                 */
                readonly remaining?: number | null;
            };
            /**
             * Format: percent-precision-2
             * @description Indicates the calculated percentage of task completion, recorded as a decimal. For example, a value of `0.25` represents 25% completion. This value is automatically calculated by dividing the actual hours worked on the task by the estimated duration.
             * @example 0.25
             */
            readonly percentComplete?: string | null;
            /**
             * Format: percent-precision-2
             * @description Represents the manually entered percentage of task completion, recorded as a decimal. For example, a value of `0.75` represents 75% completion.
             * @example 0.30
             */
            readonly observedPercentComplete?: string | null;
            /**
             * @description Indicates whether the task is a milestone. Set to `true` to designate the task as a key project checkpoint or deliverable.
             * @default false
             * @example true
             */
            isMilestone?: boolean;
            /**
             * @description Indicates whether the task contributes to project utilization. Set to `true` to mark the task as utilized, meaning the time spent is considered productive work on a customer or internal project. When set to `false`, represents a non-productive task, such as administration.
             * @default false
             * @example true
             */
            isUtilized?: boolean;
            /**
             * @description Indicates whether the time recorded against the task is billable to a customer. Set to `true` to include the task in invoicing.
             * @default false
             * @example true
             */
            isBillable?: boolean;
            /**
             * @description Specifies the work breakdown structure (WBS) code for the task. This code can contain up to 8 characters and is used to categorize and organize tasks within the project.
             * @example 43364836
             */
            wbsCode?: string | null;
            /**
             * @description Specifies the task's priority using a numeric value, A numeric value indicating the task priority.
             * @example 2
             */
            priority?: number | null;
            /**
             * @description Indicates the current status of the task. Once a task is marked as `completed`, no additional time entries can be recorded against it.
             * @example completed
             * @enum {string}
             */
            taskStatus?: "notStarted" | "planned" | "inProgress" | "completed" | "onHold";
            /**
             * @description Specifies the time type to be associated with this task, such as salary or overtime. Used for posting labor costs to the general ledger and for tracking how working time is categorized.
             *
             *     This field is required if labor cost posting is enabled. For more information, read about how to [setup labor cost posting](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_labor_cost_posting) in the Sage Intacct Help Center.
             */
            timeType?: {
                /**
                 * @description Unique key for the time type.
                 * @example 2
                 */
                key?: string | null;
                /**
                 * @description Identifier for the time type.
                 * @example Overtime
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the time type.
                 * @example /objects/time/time-type/2
                 */
                readonly href?: string;
            };
            /** @description Specifies the class associated with the task. */
            class?: {
                /**
                 * @description Unique key for the class.
                 * @example 19
                 */
                key?: string | null;
                /**
                 * @description Identifier for the class.
                 * @example PS-WEST
                 */
                id?: string | null;
                /**
                 * @description Name for the class.
                 * @example Professional Services - West Region.
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the class.
                 * @example /objects/company-config/class/19
                 */
                readonly href?: string;
            };
            /** @description Identifies a document associated with the task, such as a statement of work, technical specification, project plan or agreement. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 12
                 */
                key?: string | null;
                /**
                 * @description Identifier for the attachment.
                 * @example SOW - ERP Implementation - Meridian Technologies
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/12
                 */
                readonly href?: string;
            };
            /** @description Specifies the predecessor task that must be completed before this task can begin. Used to establish task dependencies and enforce proper sequencing within the project schedule. */
            dependentOn?: {
                /**
                 * @description Unique key for the predecessor task.
                 * @example 1330
                 */
                key?: string | null;
                /**
                 * @description Identifier for the predecessor task.
                 * @example TASK-MERIDIAN-REQS-001
                 */
                readonly id?: string | null;
                /**
                 * @description Name of the predecessor task.
                 * @example Finalize Business Requirements - Meridian Technologies
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the predecessor task.
                 * @example /objects/projects/task/1330
                 */
                readonly href?: string;
            };
            /** @description Used to track measurable output resulting from various cost inputs, such as material, labor, and equipment. */
            productionUnits?: {
                /**
                 * @description Specifies the estimated number of production units expected to be completed for the task.
                 * @example 1200
                 */
                estimate?: number | null;
                /**
                 * @description Defines the unit of measurement for tracking production output.
                 * @example Square Meter of Flooring Laid.
                 */
                description?: string | null;
            };
            /** @description Identifies the top-level task in the hierarchy from whcih this task originates. */
            readonly root?: {
                /**
                 * @description Identifier for the root task. If the task has a parent, this is the `id` of the topmost parent. If not, it is the `id` of the task itself.
                 * @example 1334
                 */
                readonly id?: string | null;
                /**
                 * @description Unique key for the root task. If the task has a parent, this is the `key` of the topmost parent. If not, it is the `key` of the task itself.
                 * @example 1334
                 */
                readonly key?: string | null;
                /**
                 * @description Name of the root task. If the task has a parent, this is the `name` of the topmost parent. If not, it is the `name` of the task itself.
                 * @example ERP Implementation - Meridian Technologies
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the root task.
                 * @example /objects/projects/task/1334
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies a predefined standard task used as the template for this task, defining consistent settings such as name, duration and billing attributes.
             *
             *     For more information, read about the [Standard Task Catalog](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Standard_tasks_catalog) in the Sage Intacct Help Center.
             */
            standardTask?: {
                /**
                 * @description Identifier for the standard task.
                 * @example STD-REQ-001
                 */
                id?: string | null;
                /**
                 * @description Unique key for the standard task.
                 * @example 13
                 */
                key?: string | null;
                /**
                 * @description Name of the standard task.
                 * @example Requirements Gathering
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the standard task.
                 * @example /objects/construction/standard-task/13
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates whether the purchasing tax schedule has been overridden for the task.
             * @default false
             * @example true
             */
            overridePurchasingTaxSchedule?: boolean;
            /** @description If Advanced Tax or VAT is enabled, the tax schedule used to capture tax details for the task. */
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
            /** @description Tax solution used to calculate and capture taxes on the task. This is inherited from the project and cannot be changed at the task level. */
            readonly taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 5
                 */
                readonly key?: string | null;
                /**
                 * @description ID of the tax solution.
                 * @example Australia GST
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/5
                 */
                readonly href?: string | null;
            };
            /**
             * @description URL endpoint for the task.
             * @example /objects/projects/task/101
             */
            readonly href?: string;
            audit?: components["schemas"]["audit.s1"];
        };
        "projects-taskRequiredProperties": Record<string, never>;
        /** @description Task groups categorize task dimension records, mainly for the purpose of structuring financial reporting. */
        "objects.projects.task-group": {
            /**
             * @description System-assigned unique key for the task group.
             * @example 4
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the task group.
             * @example INDHCS
             */
            id?: string;
            /**
             * @description URL endpoint for the task group.
             * @example /objects/projects/task-group/4
             */
            readonly href?: string;
            /**
             * @description Name of the task group.
             * @example India HCS
             */
            name?: string;
            /**
             * @description Provides additional descriptive context about the task group.
             * @example India DIM - HCS group
             */
            description?: string;
            /**
             * @description Specifies the group membership for the task group, which determines how tasks are selected for inclusion in the group. All tasks that meet the `memberFilter` criteria are included in the group.
             *
             *     When creating reports that use tasks in rows or columns, `groupType`, `memberFilter`, and `isDimensionStructure` determine which headings will appear in the report and the order in which they will be displayed.
             * @default all
             * @example all
             * @enum {string}
             */
            groupType?: "all";
            /** @description Defines the criteria used to select tasks to include in the task group. When `groupType` is set to `all`, all tasks that meet the criteria defined in the `memberFilter` are included in the group. */
            memberFilter?: components["schemas"]["member-filter"] & Record<string, never>;
            /**
             * @description Indicates whether a dimension structure is created from the task group, which, if `true`, can be added to the rows or columns of a financial report.
             * @default false
             * @example false
             */
            isDimensionStructure?: boolean;
            audit?: components["schemas"]["audit.s1"];
        };
        "projects-task-groupRequiredProperties": Record<string, never>;
        /** @description A task resource represents an employee assigned to a project task, along with planned, actual, and billable work details. */
        "objects.projects.task-resource": {
            /**
             * @description System-assigned unique key for the task resource.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the task resource. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the task resource.
             * @example /objects/projects/task-resource/23
             */
            readonly href?: string;
            /** @description Planned dates for the task resource. */
            planned?: {
                /**
                 * Format: date
                 * @description Planned start date for the task resource.
                 * @example 2026-01-01
                 */
                startDate?: string | null;
                /**
                 * Format: date
                 * @description Planned end date for the task resource.
                 * @example 2026-06-30
                 */
                endDate?: string | null;
            };
            /** @description Actual dates for the task resource. */
            actual?: {
                /**
                 * Format: date
                 * @description Actual start date for the task resource.
                 * @example 2026-01-08
                 */
                readonly startDate?: string | null;
                /**
                 * Format: date
                 * @description Actual end date for the task resource.
                 * @example 2026-04-01
                 */
                readonly endDate?: string | null;
            };
            /** @description Duration details for the task resource in hours. */
            duration?: {
                /**
                 * @description Planned duration (hours).
                 * @example 22
                 */
                planned?: number | null;
                /**
                 * @description Estimated duration (hours).
                 * @example 20
                 */
                estimated?: number | null;
                /**
                 * @description Actual duration (hours).
                 * @example 17
                 */
                readonly actual?: number | null;
                /**
                 * @description Approved duration (hours).
                 * @example 18
                 */
                readonly approved?: number | null;
                /**
                 * @description Remaining estimated duration or planned duration (hours).
                 * @example 8
                 */
                readonly remaining?: number | null;
                /**
                 * @description Billable task planned duration (hours).
                 * @example 10
                 */
                readonly plannedBillable?: number | null;
                /**
                 * @description Billable task estimated duration (hours).
                 * @example 10
                 */
                readonly estimatedBillable?: number | null;
                /**
                 * @description Billable actual duration (hours).
                 * @example 15
                 */
                readonly actualBillable?: number | null;
                /**
                 * @description Billable approved duration (hours).
                 * @example 15
                 */
                readonly approvedBillable?: number | null;
            };
            /**
             * @description Calculated estimated percent completed or planned percent completed.
             * @example 50
             */
            readonly percentComplete?: number | null;
            /**
             * @description Description of the task resource.
             * @example Resource of task RR-27-Q5
             */
            description?: string | null;
            /**
             * @description Indicates whether the task resource is fully booked.
             * @default false
             * @example true
             */
            isFullTime?: boolean;
            /**
             * @description Indicates whether the task resource is soft booked.
             * @default false
             * @example true
             */
            isSoftBook?: boolean;
            /** @description Employee assigned to the task resource. */
            employee?: {
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the employee.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the employee.
                 * @example jsmith
                 */
                id?: string;
                /**
                 * Format: date
                 * @description Start date for the employee.
                 * @example 2026-04-01
                 */
                readonly startDate?: string | null;
                /**
                 * Format: date
                 * @description End date for the employee.
                 * @example 2026-04-01
                 */
                readonly endDate?: string | null;
            };
            /** @description Contact associated with the employee. */
            readonly employeeContact?: {
                /**
                 * @description Unique key for the contact.
                 * @example 977
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the contact.
                 * @example John Smith
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the contact.
                 * @example /objects/company-config/contact/973
                 */
                readonly href?: string;
            };
            /** @description Project associated with the task resource. */
            project?: {
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the project.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the project.
                 * @example Q-Field
                 */
                id?: string;
                /**
                 * @description Name of the project.
                 * @example Quantum Field Repair
                 */
                readonly name?: string;
            };
            /** @description Task associated with the task resource. */
            task?: {
                /**
                 * @description URL endpoint for the task.
                 * @example /objects/projects/task/23
                 */
                readonly href?: string | null;
                /**
                 * @description Unique key for the task.
                 * @example 23
                 */
                key?: string | null;
                /**
                 * @description Identifier for the task.
                 * @example RR-27-Q5
                 */
                id?: string | null;
                /**
                 * @description Name of the task.
                 * @example Adjust flux capacitor
                 */
                readonly name?: string | null;
                /**
                 * @description Indicates whether work on the task is billable.
                 * @example true
                 */
                readonly isBillable?: string | null;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "projects-task-resourceRequiredProperties": Record<string, never>;
        /** @description Task observed percent completed objects capture dated progress updates for a task. */
        "objects.projects.task-observed-percent-completed": {
            /**
             * @description System-assigned key for the observed-percent-completed object.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Observed percent completed ID. Same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * Format: date
             * @description Observation date.
             * @example 2024-05-05
             */
            asOfDate?: string;
            /**
             * Format: decimal-precision-2
             * @description Percent completed by the `asOfDate`.
             * @example 25
             */
            percentComplete?: string;
            /**
             * @description Note for the completion entry.
             * @example Signed off by J.Manager
             */
            notes?: string;
            audit?: components["schemas"]["audit.s1"];
        } & {
            /** @description Task associated with this observed percent completed object. */
            task?: {
                /**
                 * @description Unique key for the task.
                 * @example 13
                 */
                key?: string;
                /**
                 * @description Identifier for the task.
                 * @example ST-13
                 */
                readonly id?: string;
                /**
                 * @description Name of the task.
                 * @example Rough framing
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the task.
                 * @example /objects/projects/task/13
                 */
                readonly href?: string;
            };
            /**
             * @description URL endpoint for the task observed percent completed object.
             * @example /objects/projects/task-observed-percent-completed/23
             */
            readonly href?: string;
        };
        "projects-task-observed-percent-completedRequiredProperties": Record<string, never>;
        /** @description Standard cost type */
        "objects.construction.standard-cost-type": {
            /**
             * @description System-assigned unique key for the standard cost type.
             * @example 3
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the standard cost type. Used by the system to create the IDs of any cost types created from this standard cost type. 12 characters or less.
             * @example EQ-Owned
             */
            id?: string;
            /**
             * @description URL endpoint of the standard cost type.
             * @example /objects/construction/standard-cost-type/3
             */
            readonly href?: string;
            /**
             * @description Name of the standard cost type.
             * @example EQ Owned
             */
            name?: string;
            /**
             * @description Description of the standard cost type.
             * @example EQ Owned
             */
            description?: string;
            /**
             * @description Describes the unit of measure used by this cost type. For example, for a labor cost type the cost unit represents an hour of labor. For a materials cost type, the cost unit could be "tons" or "feet" or similar.
             * @example each
             */
            costUnitDescription?: string | null;
            status?: components["schemas"]["status"];
            /** @description General ledger account associated with this cost type. */
            glAccount?: {
                /**
                 * @description Account key.
                 * @example 256
                 */
                key?: string;
                /**
                 * @description Account ID.
                 * @example 6252
                 */
                id?: string;
                /**
                 * @description GL Account name.
                 * @example Construction Labor
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the account.
                 * @example /objects/gl-account/256
                 */
                readonly href?: string;
            };
            /** @description Accumulation type associated with this cost type. */
            accumulationType?: {
                /**
                 * @description Accumulation type key.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Accumulation type ID.
                 * @example Equipment
                 */
                id?: string;
                /**
                 * @description URL endpoint of the accumulation type.
                 * @example /objects/construction/accumulation-type/1
                 */
                readonly href?: string;
            };
            /** @description Reference to a parent standard cost type to group standard cost types in the catalog. */
            parent?: {
                /**
                 * @description Parent standard cost type key.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Parent standard cost type ID.
                 * @example EQ
                 */
                id?: string;
                /**
                 * @description Name of the parent standard cost type.
                 * @example Equipment
                 */
                readonly name?: string;
                /**
                 * @description URL of the parent standard cost type.
                 * @example /objects/construction/standard-cost-type/2
                 */
                readonly href?: string;
            };
            item?: components["schemas"]["item-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        "construction-standard-cost-typeRequiredProperties": Record<string, never>;
        /** @description Cost type is a standard dimension used to capture and categorize project cost details in construction projects. */
        "objects.construction.cost-type": {
            /**
             * @description System-assigned unique key for the cost type.
             * @example 99
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the cost type. Created automatically from `id` of the `standardCostType`.
             * @example EQ
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the cost type.
             * @example /objects/construction/cost-type/2
             */
            readonly href?: string;
            /**
             * @description Name of the cost type.
             * @example Equipment
             */
            name?: string;
            /**
             * @description Cost type description.
             * @example Equipment
             */
            description?: string;
            /** @description Project that will use this cost type. */
            project?: {
                /**
                 * @description Project key.
                 * @example 109
                 */
                key?: string;
                /**
                 * @description Project ID.
                 * @example 22-001
                 */
                id?: string;
                /**
                 * @description Project name.
                 * @example Wallula Heights Conference Center
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the project.
                 * @example /objects/projects/project/109
                 */
                readonly href?: string;
            };
            /** @description Task that will use this cost type. */
            task?: {
                /**
                 * @description System-assigned unique key for the task record.
                 * @example 1410
                 */
                key?: string;
                /**
                 * @description Unique identifier for the task.
                 * @example 3-450
                 */
                id?: string;
                /**
                 * @description Task name.
                 * @example Architectural Precast
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the task.
                 * @example /objects/projects/task/1410
                 */
                readonly href?: string;
            };
            accumulationType?: components["schemas"]["accumulation-type-ref"];
            /**
             * @description Describes the unit of measure used by this cost type. For example, for a labor cost type, the cost unit represents an hour of labor. For a materials cost type, the cost unit could be "tons", "feet", or similar.
             * @example each
             */
            costUnitDescription?: string | null;
            /** @description General ledger account associated with this cost type. */
            glAccount?: {
                /**
                 * @description System-assigned key for the GL account.
                 * @example 256
                 */
                key?: string;
                /**
                 * @description User-assigned number for the GL account.
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
            /** @description Parent cost type, for cost type hierarchies. */
            parent?: {
                /**
                 * @description key for the parent cost type.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Parent cost type ID.
                 * @example EQ-GRP
                 */
                id?: string;
                /**
                 * @description Parent cost type name.
                 * @example Equipment Group
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the parent cost type.
                 * @example /objects/construction/cost-type/1
                 */
                readonly href?: string;
            };
            /** @description Item associated with this cost type. */
            item?: {
                /**
                 * @description Item key
                 * @example 319
                 */
                key?: string;
                /**
                 * @description Item ID
                 * @example Overhead
                 */
                id?: string;
                /**
                 * @description Item name.
                 * @example Overhead
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/319
                 */
                readonly href?: string;
            };
            /** @description Cost type planned dates. */
            planned?: {
                /**
                 * Format: date
                 * @description Planned begin date.
                 * @example 2023-01-04
                 */
                startDate?: string;
                /**
                 * Format: date
                 * @description Planned end date.
                 * @example 2023-02-24
                 */
                endDate?: string;
            };
            /** @description Cost type actual dates. */
            actual?: {
                /**
                 * Format: date
                 * @description Actual begin date.
                 * @example 2023-01-06
                 */
                startDate?: string;
                /**
                 * Format: date
                 * @description Actual end date.
                 * @example 2023-03-01
                 */
                endDate?: string;
            };
            status?: components["schemas"]["status"];
            /** @description The root cost type that this cost type descends from. */
            root?: {
                /**
                 * @description Key for the root cost type.
                 * @example 13921
                 */
                key?: string;
                /**
                 * @description Root cost type ID.
                 * @example EQ
                 */
                id?: string;
                /**
                 * @description Root cost type name.
                 * @example Equipment
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the root cost type.
                 * @example /objects/construction/cost-type/13921
                 */
                readonly href?: string;
            };
            /** @description The standard cost type that is the template for this cost type. */
            standardCostType?: {
                /**
                 * @description Key for the standard cost type.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Standard cost type ID.
                 * @example EQ
                 */
                id?: string;
                /**
                 * @description Standard cost type name.
                 * @example Equipment
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint of the standard cost type.
                 * @example /objects/construction/standard-cost-type/1
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates whether the purchasing tax schedule has been overridden for the cost type.
             * @default false
             * @example true
             */
            overridePurchasingTaxSchedule?: boolean;
            /** @description If Advanced Tax or VAT is enabled, the tax schedule used to capture tax details for the cost type. */
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
            /** @description Tax solution used to calculate and capture taxes on the cost type. This is inherited from the project and cannot be changed at the cost type level. */
            readonly taxSolution?: {
                /**
                 * @description Unique key for the tax solution.
                 * @example 5
                 */
                readonly key?: string | null;
                /**
                 * @description ID of the tax solution.
                 * @example Australia GST
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the tax solution.
                 * @example /objects/tax/tax-solution/5
                 */
                readonly href?: string | null;
            };
            /** @description Observed percent completed entry for cost type objects */
            observedPercentCompleted?: components["schemas"]["observed-percent-completed-ref"][];
            audit?: components["schemas"]["audit.s1"];
        };
        "construction-cost-typeRequiredProperties": Record<string, never>;
        /** @description An invoice run record is created every time you generate an invoice for a project. */
        "objects.projects.invoice-run": {
            /**
             * @description System-assigned unique key for the invoice run.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the invoice run. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the invoice run.
             * @example /objects/projects/invoice-run/23
             */
            readonly href?: string;
            /**
             * @description Specifies the percentage markup applied to expenses when generating invoices for a project.
             * @example 10
             */
            expensePriceMarkup?: string | null;
            /**
             * @description Provides additional descriptive context about the invoice run.
             * @example Invoice run created at 2025-05-08 13:33:45 GMT
             */
            description?: string;
            /**
             * @description Indicates whether the invoice run was executed offline.
             * @example false
             */
            readonly isOffline?: boolean;
            /**
             * @description Indicates the current status of the invoice run.
             *
             *     * `success` - The invoice run completed successfully without errors.
             *     * `failed` - The invoice run encountered errors and did not complete successfully.
             *     * `inTransit` - The invoice run is currently in progress.
             *     * `partialSuccess` - The invoice run completed with some errors.
             * @example success
             * @enum {string|null}
             */
            readonly state?: null | "success" | "failed" | "inTransit" | "partialSuccess";
            /** @description Indicates details of any errors encountered during invoice run. */
            readonly errorData?: string | null;
            /**
             * Format: date-time
             * @description Specifies the date and time of the invoice run.
             * @example 2025-04-20T16:20:00Z
             */
            readonly invoiceRunDateTime?: string;
            /** @description References the price list used to override pricing for transactions billed in the invoice run. */
            readonly priceList?: {
                /**
                 * @description Unique key for the price list.
                 * @example 4
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the price list.
                 * @example Base price list
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the price list.
                 * @example /objects/order-entry/price-list/4
                 */
                readonly href?: string;
            };
            /** @description References the invoice template used for generating invoices in the invoice run. */
            readonly invoiceTemplate?: {
                /**
                 * @description Unique key for the invoice template.
                 * @example 4
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the invoice template.
                 * @example 4
                 */
                readonly id?: string;
                /**
                 * @description Name for the invoice template.
                 * @example Sales Invoice
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the invoice template.
                 * @example /objects/order-entry/txn-definition/4
                 */
                readonly href?: string;
            };
            /** @description References the user who created the invoice run. */
            readonly createdBy?: {
                /**
                 * @description Unique key for the user.
                 * @example 2
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the user.
                 * @example JSmith
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/2
                 */
                readonly href?: string;
            };
            entity?: components["schemas"]["entity-ref"];
        };
        /** @description A billing template defines the rules that you want to use for invoicing a line item on a sales order, including whether the line item should be billed only when it's completed or at a specific percentage of completion. */
        "objects.projects.project-billing-template": {
            /**
             * @description System-assigned unique key for the project billing template.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the project billing template. This value is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the project billing template.
             * @example /objects/projects/project-billing-template/23
             */
            readonly href?: string;
            /**
             * @description Name of the project billing template.
             * @example Project Estimated Hours
             */
            name?: string;
            /**
             * @description Provides additional descriptive context for the project billing template.
             * @example Template for billing by estimated project hours.
             */
            description?: string;
            /**
             * @description Indicates the billing method used in the project billing template.
             * @default percentCompleted
             * @example percentCompleted
             * @enum {string}
             */
            billingMethod?: "percentCompleted" | "milestone";
            /**
             * @description Indicates the type of billing calculation for the project billing template.
             * @default project
             * @example project
             * @enum {string}
             */
            calculateOn?: "project" | "task";
            /**
             * @description Indicates the metric used to determine how the billing amount is calculated in the project billing template.
             * @default estimatedHours
             * @example plannedHours
             * @enum {string}
             */
            basedOn?: "plannedHours" | "estimatedHours" | "budgetedHours" | "observedPercentCompleted";
            status?: components["schemas"]["status"];
            /** @description Represents a collection of milestones associated with the project billing template. */
            milestones?: components["schemas"]["objects.projects.project-billing-template-milestone"][];
            entity?: components["schemas"]["entity-ref"];
        };
        "projects-project-billing-templateRequiredProperties": Record<string, never>;
        /** @description A project billing template milestone represents a specific billable event or checkpoint within a project billing template used for milestone billing. */
        "objects.projects.project-billing-template-milestone": {
            /**
             * @description System-assigned unique key for the project billing template milestone.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the project billing template milestone. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * Format: percent-precision-2
             * @description Indicates the project completion percentage that triggers invoice generation for this milestone.
             * @example 25.00
             */
            percentCompleted?: string;
            /**
             * Format: percent-precision-2
             * @description Specifies the percentage of the total project amount that will be invoiced when the milestone is reached.
             * @example 50.00
             */
            readonly percentToInvoice?: string;
            /**
             * @description Provides additional descriptive context for the milestone.
             * @example Invoice at 50%
             */
            description?: string | null;
            /**
             * @description URL endpoint for the project billing template milestone.
             * @example /objects/projects/project-billing-template-milestone/23
             */
            readonly href?: string;
            /** @description Reference to the project billing template associated with this milestone. */
            readonly projectBillingTemplate?: {
                /**
                 * @description Unique key for the project billing template.
                 * @example 23
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the project billing template.
                 * @example 23
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the project billing template.
                 * @example /objects/projects/project-billing-template/23
                 */
                readonly href?: string;
            };
        };
        /** @description List of positions and skills available to assign to employees. */
        "objects.projects.position-skill": {
            /**
             * @description System-assigned unique key for the position-skill.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Name of the position skill. The name appears when you assign the position or skill to an employee, as well as when you search for project resources based on qualifications. For this reason, be sure to use a name that distinguishes it from other positions and skills.
             * @example Quantum Mechanic
             */
            id?: string;
            /**
             * @description Description of the position or skill. The description appears on the Positions and Skills list next to the name.
             * @example Scientist who works with very tiny wrenches.
             */
            description?: string;
            /**
             * @description URL endpoint for the position skill.
             * @example /objects/projects/position-skill/23
             */
            readonly href?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
            entity?: components["schemas"]["entity-ref"];
        };
        "projects-position-skillRequiredProperties": Record<string, never>;
        /** @description An employee out of office schedule captures periods when an employee is unavailable to work on projects or tasks. */
        "objects.projects.employee-out-of-office": {
            /**
             * @description System-assigned unique key for the employee out of office schedule.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the employee out of office schedule. This value is the same as the `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the employee out of office schedule.
             * @example /objects/projects/employee-out-of-office/23
             */
            readonly href?: string;
            /** @description Employee associated with the out-of-office schedule. */
            employee?: {
                /**
                 * @description Unique key for the employee.
                 * @example 973
                 */
                key?: string;
                /**
                 * @description ID for the employee.
                 * @example E-001
                 */
                id?: string;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/973
                 */
                readonly href?: string;
            };
            /** @description Contact associated with the employee. */
            employeeContact?: {
                /**
                 * @description Unique key for the contact.
                 * @example 973
                 */
                readonly key?: string;
                /**
                 * @description Name of the employee contact.
                 * @example John Smith
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the employee contact.
                 * @example /objects/company-config/contact/973
                 */
                readonly href?: string;
            };
            /** @description References a collection of lines for the employee out of office schedule. */
            lines?: components["schemas"]["objects.projects.employee-out-of-office-line"][];
            audit?: components["schemas"]["audit.s1"];
        };
        "projects-employee-out-of-officeRequiredProperties": Record<string, never>;
        /** @description An employee out of office line represents a single unavailable time period for an employee. */
        "objects.projects.employee-out-of-office-line": {
            /**
             * @description System-assigned unique key for the employee out of office line.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique ID for the employee out of office line. This value is the same as the `key` for this employee out of office line.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the employee out of office line.
             * @example /objects/projects/employee-out-of-office-line/23
             */
            readonly href?: string;
            /**
             * @description Detailed explanation of the out of office line.
             * @example Leave
             */
            description?: string | null;
            /**
             * Format: date
             * @description Start date of the out of office line.
             * @example 2026-01-01
             */
            startDate?: string;
            /**
             * Format: date
             * @description End date of the out of office line.
             * @example 2026-01-05
             */
            endDate?: string;
            /**
             * @description Number of unavailable hours per day for the out of office line.
             * @example 8
             */
            hoursPerDay?: string;
            /** @description Header level details for the employee out of office. */
            readonly employeeOutOfOffice?: {
                /**
                 * @description Unique key for the employee out of office.
                 * @example 11
                 */
                readonly key?: string;
                /**
                 * @description ID for the employee out of office.
                 * @example 11
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the employee out of office.
                 * @example /objects/projects/employee-out-of-office/11
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
        "entity-location-ref": {
            /**
             * @description System-assigned key for the location.
             * @example 2
             */
            key?: string | null;
            /**
             * @description Unique identifier for the location.
             * @example DIA
             */
            id?: string | null;
            /**
             * @description Name for the location.
             * @example Canada
             */
            readonly name?: string | null;
            /**
             * @description URL endpoint for the location.
             * @example /objects/company-config/location/2
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
        /** @description Reference to an item. */
        "item-ref": {
            /**
             * @description System-assigned key for the item.
             * @example 319
             */
            key?: string;
            /**
             * @description Unique identifier for the item.
             * @example Overhead
             */
            id?: string;
            /**
             * @description Name for the item.
             * @example Overhead
             */
            readonly name?: string;
            /**
             * @description URL endpoint for the item.
             * @example /objects/inventory-control/item/319
             */
            readonly href?: string;
        };
        "class-ref": {
            /**
             * @description Unique identifier for the class.
             * @example 1-Goods
             */
            id?: string;
            /**
             * @description System-assigned key for the class.
             * @example 42
             */
            key?: string;
            /**
             * @description Name for the class.
             * @example Goods
             */
            readonly name?: string;
            /**
             * @description URL endpoint for the class.
             * @example /objects/company-config/class/42
             */
            readonly href?: string;
        };
        /** @description The accumulation type associated with the object. */
        "accumulation-type-ref": {
            /**
             * @description Accumulation type key.
             * @example 2
             */
            key?: string;
            /**
             * @description Accumulation type ID.
             * @example Direct cost
             */
            id?: string;
            /**
             * @description URL endpoint for the accumulation type.
             * @example /objects/construction/accumulation-type/2
             */
            readonly href?: string;
        };
        /** @description Observed percent completed entry for various objects (e.g., project, task, cost type) */
        "observed-percent-completed-ref": {
            /**
             * @description System-assigned key for the observed-percent-completed object.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Observed percent completed ID. Same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * Format: date
             * @description Observation date.
             * @example 2024-05-05
             */
            asOfDate?: string;
            /**
             * Format: decimal-precision-2
             * @description Percent completed by the `asOfDate`.
             * @example 25
             */
            percentComplete?: string;
            /**
             * @description Note for the completion entry.
             * @example Signed off by J.Manager
             */
            notes?: string;
            audit?: components["schemas"]["audit.s1"];
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
    "list-projects-project": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-projects-project": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a project. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.projects.project"] & components["schemas"]["projects-projectRequiredProperties"];
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
    "get-projects-project-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project.
                 * @example 635
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.projects.project"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-projects-project-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project.
                 * @example 635
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
    "update-projects-project-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project.
                 * @example 635
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.projects.project"] & {
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
    "list-projects-project-resource": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-projects-project-resource": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.projects.project-resource"] & components["schemas"]["projects-project-resourceRequiredProperties"];
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
    "get-projects-project-resource-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a project resource.
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
                        "ia::result"?: components["schemas"]["objects.projects.project-resource"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-projects-project-resource-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a project resource.
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
    "update-projects-project-resource-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a project resource.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.projects.project-resource"];
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
    "list-projects-project-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-projects-project-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new project status. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.projects.project-status"] & components["schemas"]["projects-project-statusRequiredProperties"];
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
    "get-projects-project-status-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project status.
                 * @example 1038
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.projects.project-status"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-projects-project-status-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project status.
                 * @example 1038
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
    "update-projects-project-status-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project status.
                 * @example 1038
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.projects.project-status"] & {
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
    "list-projects-project-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-projects-project-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new project type. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.projects.project-type"] & components["schemas"]["projects-project-typeRequiredProperties"];
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
    "get-projects-project-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project type.
                 * @example 956
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.projects.project-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-projects-project-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project type.
                 * @example 956
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
    "update-projects-project-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project type.
                 * @example 956
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.projects.project-type"] & {
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
    "list-projects-project-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-projects-project-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Creates a new project group. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.projects.project-group"] & components["schemas"]["projects-project-groupRequiredProperties"];
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
    "get-projects-project-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project group.
                 * @example 46
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.projects.project-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-projects-project-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project group.
                 * @example 46
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
    "update-projects-project-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project group.
                 * @example 46
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.projects.project-group"] & {
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
    "list-projects-project-group-member": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-projects-project-group-member-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project group member.
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
                        "ia::result"?: components["schemas"]["objects.projects.project-group-member"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-projects-project-observed-percent-completed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-projects-project-observed-percent-completed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Project observed percent completed object */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.projects.project-observed-percent-completed"] & components["schemas"]["projects-project-observed-percent-completedRequiredProperties"];
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
    "get-projects-project-observed-percent-completed-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project observed percent completed.
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
                        "ia::result"?: components["schemas"]["objects.projects.project-observed-percent-completed"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-projects-project-observed-percent-completed-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project observed percent completed.
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
    "update-projects-project-observed-percent-completed-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the project observed percent completed.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.projects.project-observed-percent-completed"] & {
                    readonly key?: unknown;
                    readonly project?: unknown;
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
    "list-construction-standard-task": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-construction-standard-task": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Standard task to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.standard-task"] & components["schemas"]["construction-standard-taskRequiredProperties"];
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
    "get-construction-standard-task-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the standard task.
                 * @example 312
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.construction.standard-task"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-standard-task-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the standard task.
                 * @example 312
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
    "update-construction-standard-task-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the standard task.
                 * @example 312
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.standard-task"] & {
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
    "list-projects-task": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-projects-task": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description New task definition */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.projects.task"] & components["schemas"]["projects-taskRequiredProperties"];
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
    "get-projects-task-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the task.
                 * @example 497
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.projects.task"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-projects-task-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the task.
                 * @example 497
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
    "update-projects-task-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the task.
                 * @example 497
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.projects.task"] & {
                    readonly id?: unknown;
                    readonly project?: unknown;
                    readonly taxSolution?: unknown;
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
    "list-projects-task-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-projects-task-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.projects.task-group"] & components["schemas"]["projects-task-groupRequiredProperties"];
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
    "get-projects-task-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the task group.
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
                        "ia::result"?: components["schemas"]["objects.projects.task-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-projects-task-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the task group.
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
    "update-projects-task-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the task group.
                 * @example 4
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.projects.task-group"] & {
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
    "list-projects-task-resource": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-projects-task-resource": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Task resource */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.projects.task-resource"] & components["schemas"]["projects-task-resourceRequiredProperties"];
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
    "get-projects-task-resource-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the task resource.
                 * @example 215
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.projects.task-resource"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-projects-task-resource-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the task resource.
                 * @example 215
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
    "update-projects-task-resource-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the task resource.
                 * @example 215
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.projects.task-resource"] & {
                    readonly project?: unknown;
                    readonly task?: unknown;
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
    "list-projects-task-observed-percent-completed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-projects-task-observed-percent-completed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Task observed percent completed object */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.projects.task-observed-percent-completed"] & components["schemas"]["projects-task-observed-percent-completedRequiredProperties"];
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
    "get-projects-task-observed-percent-completed-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the task observed percent completed object.
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
                        "ia::result"?: components["schemas"]["objects.projects.task-observed-percent-completed"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-projects-task-observed-percent-completed-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the task observed percent completed object.
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
    "update-projects-task-observed-percent-completed-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the task observed percent completed object.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.projects.task-observed-percent-completed"] & {
                    readonly key?: unknown;
                    readonly task?: unknown;
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
    "list-construction-standard-cost-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-construction-standard-cost-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Standard cost type to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.standard-cost-type"] & components["schemas"]["construction-standard-cost-typeRequiredProperties"];
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
    "get-construction-standard-cost-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the standard cost type.
                 * @example 1050
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.construction.standard-cost-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-standard-cost-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the standard cost type.
                 * @example 1050
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
    "update-construction-standard-cost-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the standard cost type.
                 * @example 1050
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.standard-cost-type"] & {
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
    "list-construction-cost-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-construction-cost-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Cost type to create */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.construction.cost-type"] & components["schemas"]["construction-cost-typeRequiredProperties"];
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
    "get-construction-cost-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the cost type.
                 * @example 495
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.construction.cost-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-construction-cost-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the cost type.
                 * @example 495
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
    "update-construction-cost-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the cost type.
                 * @example 495
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.construction.cost-type"] & {
                    readonly id?: unknown;
                    readonly taxSolution?: unknown;
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
    "list-projects-invoice-run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-projects-invoice-run-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the invoice run.
                 * @example 2678
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.projects.invoice-run"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-projects-project-billing-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-projects-project-billing-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a project billing template */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.projects.project-billing-template"] & components["schemas"]["projects-project-billing-templateRequiredProperties"];
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
    "get-projects-project-billing-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the billing template.
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
                        "ia::result"?: components["schemas"]["objects.projects.project-billing-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-projects-project-billing-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the billing template.
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
    "update-projects-project-billing-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the billing template.
                 * @example 15
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.projects.project-billing-template"] & {
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
    "list-projects-project-billing-template-milestone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-projects-project-billing-template-milestone-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the Project billing template milestone.
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
                        "ia::result"?: components["schemas"]["objects.projects.project-billing-template-milestone"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-projects-position-skill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-projects-position-skill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.projects.position-skill"] & components["schemas"]["projects-position-skillRequiredProperties"];
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
    "get-projects-position-skill-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a position skill.
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
                        "ia::result"?: components["schemas"]["objects.projects.position-skill"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-projects-position-skill-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a position skill.
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
    "update-projects-position-skill-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a position skill.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.projects.position-skill"] & {
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
    "list-projects-employee-out-of-office": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-projects-employee-out-of-office": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.projects.employee-out-of-office"] & components["schemas"]["projects-employee-out-of-officeRequiredProperties"];
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
    "get-projects-employee-out-of-office-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee out of office schedule.
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
                        "ia::result"?: components["schemas"]["objects.projects.employee-out-of-office"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-projects-employee-out-of-office-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee out of office schedule.
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
    "update-projects-employee-out-of-office-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee out of office schedule.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.projects.employee-out-of-office"] & {
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
    "list-projects-employee-out-of-office-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-projects-employee-out-of-office-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the employee out of office line.
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
                        "ia::result"?: components["schemas"]["objects.projects.employee-out-of-office-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
}

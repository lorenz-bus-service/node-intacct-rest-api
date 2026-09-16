// Generated from spec/contracts-and-revenue-management.json by scripts/generate.ts. Do not edit.
export interface paths {
    "/objects/contracts/contract-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contract groups
         * @description Returns a collection with a key, ID, and link for each contract group. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["get-objects-contract-group"];
        put?: never;
        /**
         * Create a contract group
         * @description Creates a new contract group.
         */
        post: operations["post-objects-contract-group"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/contract-group/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contract group.
                 * @example 235
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a contract group
         * @description Returns detailed information for a specified contract group.
         */
        get: operations["get-objects-contract-group-key"];
        put?: never;
        post?: never;
        /**
         * Delete a contract group
         * @description Deletes a contract group.
         */
        delete: operations["delete-objects-contract-group-key"];
        options?: never;
        head?: never;
        /**
         * Update a contract group
         * @description Updates an existing contract group by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["patch-objects-contract-group-key"];
        trace?: never;
    };
    "/objects/contracts/contract-group-member": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contract group members
         * @description Returns a collection with a key, ID, and link for each contract group member. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["get-objects-contract-group-member"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/contract-group-member/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the contract group member.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a contract group member
         * @description Returns detailed information for a specified contract group member.
         */
        get: operations["get-objects-contract-group-member-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/contract-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contract types
         * @description Returns a collection with a key, ID, and link for each contract type. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-contract-type"];
        put?: never;
        /**
         * Create a contract type
         * @description Creates a new contract type.
         */
        post: operations["create-contracts-contract-type"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/contract-type/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the contract type.
                 * @example 1546
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a contract type
         * @description Returns detailed information for a specified contract type.
         */
        get: operations["get-contracts-contract-type-key"];
        put?: never;
        post?: never;
        /**
         * Delete a contract type
         * @description Deletes a contract type. You cannot delete a contract type that is currently assigned to any contracts.
         */
        delete: operations["delete-contracts-contract-type-key"];
        options?: never;
        head?: never;
        /**
         * Update a contract type
         * @description Updates an existing contract type by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-contract-type-key"];
        trace?: never;
    };
    "/objects/contracts/contract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contracts
         * @description Returns a collection with a key, ID, and link for each contract. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-contract"];
        put?: never;
        /**
         * Create a contract
         * @description Creates a new contract. If document sequencing is not enabled for contracts, `id` is required. If it is enabled, `id` is optional unless you want to override the system-generated `id`.
         */
        post: operations["create-contracts-contract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/contract/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contract.
                 * @example 24
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a contract
         * @description Returns detailed information for a specified contract.
         */
        get: operations["get-contracts-contract-key"];
        put?: never;
        post?: never;
        /**
         * Delete a contract
         * @description Deletes a contract (if there are no related records). You can delete a contract only if there are no related records, such as contract lines, expense lines or other associated records. If related records exist, your must delete them before deleting the contract. If a related record cannot be deleted, cancel the contract instead.
         */
        delete: operations["delete-contracts-contract-key"];
        options?: never;
        head?: never;
        /**
         * Update a contract
         * @description Updates an existing contract by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-contract-key"];
        trace?: never;
    };
    "/objects/contracts/contract-renewal-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contract renewal templates
         * @description Returns a collection with a key, ID, and link for each contract renewal template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["get-objects-contracts-contract-renewal-template"];
        put?: never;
        /**
         * Create a contract renewal template
         * @description Creates a new contract renewal template.
         */
        post: operations["post-objects-contracts-contract-renewal-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/contract-renewal-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contract renewal template.
                 * @example 42
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a contract renewal template
         * @description Returns detailed information for a specified contract renewal template.
         */
        get: operations["get-objects-contracts-contract-renewal-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a contract renewal template
         * @description Deletes a contract renewal template. A template cannot be deleted if it is associated with active contracts.
         */
        delete: operations["delete-objects-contracts-contract-renewal-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a contract renewal template
         * @description Updates an existing contract renewal template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["patch-objects-contracts-contract-renewal-template-key"];
        trace?: never;
    };
    "/workflows/contracts/contract/post": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Post a contract
         * @description Posts a contract. You can save a contract as a `draft` without affecting the General Ledger (GL) or the Contracts subledger.
         *
         *     Posting a draft contract changes the status of the contract from `draft` to `inProgress` and sets all existing draft contract lines and expense lines to `inProgress` also. It also creates journal entries in the General Ledger (GL) for the flat/fixed amounts and expense amounts.
         *
         *     For more information, read about [draft contracts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Draft_contracts) in the Sage Intacct Help Center.
         */
        post: operations["post-contracts-contract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/contract/renew": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Renew a contract
         * @description Renews an existing contract. Renewable contracts that are current and active, have the `inProgress` status. On the renewal trigger date, Sage Intacct sets the state of the original (source) contract to `renewed` and creates a new child contract, which only contains contract lines that were selected for renewal. The start date of the new contract is the source contract end date plus 1 day.
         *
         *     If a contract completes its term without being renewed, the contract state changes from `inProgress` to `notRenewed`. You cannot make changes to a contract that is `notRenewed`, but you can continue to generate invoices and recognize revenue and expenses as applicable.
         *
         *     For more information, read [about contract renewals](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_contract_renewals) in the Sage Intacct Help Center.
         */
        post: operations["renew-contracts-contract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/contract/expire": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Expire a contract
         * @description Expires a contract. If a contract completes its term without being renewed, Sage Intacct changes the contract state from `inProgress` to `notRenewed`. You cannot make changes to a contract that is `notRenewed`, but you can continue to generate invoices and recognize revenue and expenses as applicable.
         *
         *     For more information, read about [cancelling contract schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Canceling_a_contract) in the Sage Intacct Help Center.
         */
        post: operations["expire-contracts-contract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/contract/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel a contract
         * @description Cancels a contract. This action changes the contract state to `canceled` and unwinds all system-created journal entries related to the contract.
         */
        post: operations["cancel-contracts-contract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/contract/uncancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Uncancel a contract
         * @description Uncancels a contract. When you uncancel a contract, Sage Intacct changes the contract state from `canceled` to `inProgress` and reverts all of the system-created journal entries that resulted from the cancellation.
         *
         *     For more information, read about [the uncancel process](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Uncancel_a_contract) in the Sage Intacct Help Center.
         */
        post: operations["uncancel-contracts-contract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/contract/hold-schedules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Hold contract schedules
         * @description Placing a contract schedule on hold temporarily pauses the revenue, billing, or expense schedule. This action sets the status of the contract schedule and its entries to `onHold`. The contract status remains `inProgress` when a contract schedule is placed on hold.
         *
         *     For more information, read about [holding contract schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Hold_resume_contract_schedules) in the Sage Intacct Help Center.
         */
        post: operations["hold-schedules-contracts-contract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/contract/resume-schedules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Resume contract schedules
         * @description Resumes a contract schedule. This releases the hold on a contract schedule and is effective as of the the resume date. This action sets the status of the contract schedule and its entries back to `inProgress` and allows the open periods to be available for posting or invoicing. The contract status remains `inProgress` when a contract schedule is resumed.
         *
         *     For more information, read about [resuming contract schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Hold_resume_contract_schedules) in the Sage Intacct Help Center.
         */
        post: operations["resume-schedules-contracts-contract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/contract-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contract lines
         * @description Returns a collection with a key, ID, and link for each contract line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-contract-line"];
        put?: never;
        /**
         * Create a contract line
         * @description Creates a new contract line.
         */
        post: operations["create-contracts-contract-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/contract-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the contract line.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a contract line
         * @description Returns detailed information for a specified contract line.
         */
        get: operations["get-contracts-contract-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a contract line
         * @description Deletes a contract line.
         */
        delete: operations["delete-contracts-contract-line-key"];
        options?: never;
        head?: never;
        /**
         * Update a contract line
         * @description Updates an existing contract line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-contract-line-key"];
        trace?: never;
    };
    "/workflows/contracts/contract-line/post": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Post a contract line
         * @description Posts a contract line. Posting a `draft` contract line sets the line to `inProgress`.
         *
         *     For more information, read about [posting a draft contract line](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Draft_contract_lines) in the Sage Intacct Help Center.
         */
        post: operations["post-contracts-contract-line-key"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/contract-line/deliver": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Deliver a contract line
         * @description Deliver a contract line. Delivering a contract line will change the `state` from `undelivered` to `delivered`.
         *
         *     For more information, read about [delivering contract lines](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Deliver_contract) in the Sage Intacct Help Center.
         */
        post: operations["deliver-contracts-contract-line-key"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/contract-line/reestimate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Re-estimate a contract line
         * @description Re-estimate a contract line. Re-estimating a contract line will update the estimated `quantity`, `rate`, and `flatFixedAmount` for the contract line without changing the actual amounts and dates. The contract line must be in the `inProgress` state to be re-estimated. Once re-estimated, the contract line will be in the `revalued` state.
         *
         *     For more information, read about [estimated time-based recognition](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Estimated_time-based_revenue_for_contracts) in the Sage Intacct Help Center.
         */
        post: operations["reestimate-contracts-contract-line-key"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/contract-line/hold-schedules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Hold schedules for a contract line
         * @description Hold billing, revenue, and expense schedules for a specified contract line. This workflow temporarily pauses the revenue, billing, or expense schedules. While the schedules are on hold, the contract line will remain in the `inProgress` state. The schedules will remain on hold until they are resumed.
         *
         *     For more information, read about [holding and resuming contract line schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Hold_resume_contract_schedules) in the Sage Intacct Help Center.
         */
        post: operations["hold-schedules-contracts-contract-line-key"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/contract-line/resume-schedules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Resume schedules for a contract line
         * @description Resume billing, revenue, and expense schedules for a specified contract line. Releases the hold effective as of the resume date and makes open periods available for posting or invoicing. When the schedules are resumed, the contract line will remain in the `inProgress` state.
         *
         *     For more information, read about [resuming contract line schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Hold_resume_contract_schedules) in the Sage Intacct Help Center.
         */
        post: operations["resume-schedules-contracts-contract-line-key"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/contract-line/revalue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Revalue a contract line
         * @description Revalue a contract line. Revaluing a contract line will update the `revaluedDate` for the contract line. The contract line must be in the `inProgress` state to be revalued. Once revalued, the contract line will be in the `revalued` state.
         *
         *     For more information, read about [revaluing a project time contract line](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Revalue_estimation) in the Sage Intacct Help Center.
         */
        post: operations["revalue-contracts-contract-line-key"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/contract-line/uncancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Uncancel a contract line
         * @description Uncancel a contract line. Uncanceling a contract line reverses the cancellation process by unwinding all of the system-created journal entries that resulted from the cancellation.
         *
         *     For more information, read about [uncanceling a contract line](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Uncancel_a_contract) in the Sage Intacct Help Center.
         */
        post: operations["uncancel-contracts-contract-line-key"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/contract-txn-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contract transaction histories
         * @description Returns a collection with a key, ID, and link for each contract transaction history. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-contract-txn-history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/contract-txn-history/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contract transaction history.
                 * @example 1
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a contract transaction history
         * @description Returns detailed information for a specified contract transaction history.
         */
        get: operations["get-contracts-contract-txn-history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/compliance-checklist-task": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List compliance checklist tasks
         * @description Returns a collection with a key, ID, and link for each compliance checklist task. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contract-compliance-checklist-task"];
        put?: never;
        /**
         * Create a compliance checklist task
         * @description Creates a new compliance checklist task.
         */
        post: operations["create-contract-compliance-checklist-task"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/compliance-checklist-task/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance checklist task.
                 * @example 125
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a compliance checklist task
         * @description Returns detailed information for a specified compliance checklist task.
         */
        get: operations["get-contract-compliance-checklist-task-key"];
        put?: never;
        post?: never;
        /**
         * Delete a compliance checklist task
         * @description Deletes a compliance checklist task.
         */
        delete: operations["delete-contract-compliance-checklist-task-key"];
        options?: never;
        head?: never;
        /**
         * Update a compliance checklist task
         * @description Updates an existing compliance checklist task by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contract-compliance-checklist-task-key"];
        trace?: never;
    };
    "/objects/contracts/compliance-note": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List compliance notes
         * @description Returns a collection with a key, ID, and link for each compliance note. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contract-compliance-note"];
        put?: never;
        /**
         * Create a compliance note
         * @description Creates a new compliance note.
         */
        post: operations["create-contract-compliance-note"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/compliance-note/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance note.
                 * @example 126
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a compliance note
         * @description Returns detailed information for a specified compliance note.
         */
        get: operations["get-contract-compliance-note-key"];
        put?: never;
        post?: never;
        /**
         * Delete a compliance note
         * @description Deletes a compliance note.
         */
        delete: operations["delete-contract-compliance-note-key"];
        options?: never;
        head?: never;
        /**
         * Update a compliance note
         * @description Updates an existing compliance note by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contract-compliance-note-key"];
        trace?: never;
    };
    "/objects/contracts/compliance-task": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List compliance tasks
         * @description Returns a collection with a key, ID, and link for each compliance task. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contract-compliance-task"];
        put?: never;
        /**
         * Create a compliance task
         * @description Creates a new compliance task.
         */
        post: operations["create-contract-compliance-task"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/compliance-task/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance task.
                 * @example 156
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a compliance task
         * @description Returns detailed information for a specified compliance task.
         */
        get: operations["get-contract-compliance-task-key"];
        put?: never;
        post?: never;
        /**
         * Delete a compliance task
         * @description Deletes a compliance task.
         */
        delete: operations["delete-contract-compliance-task-key"];
        options?: never;
        head?: never;
        /**
         * Update a compliance task
         * @description Updates an existing compliance task by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contract-compliance-task-key"];
        trace?: never;
    };
    "/objects/contracts/billing-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List billing schedules
         * @description Returns a collection with a key, ID, and link for each billing schedule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-billing-schedule"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/billing-schedule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a billing schedule.
                 * @example 1843
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a billing schedule
         * @description Returns detailed information for a specified billing schedule.
         */
        get: operations["get-contracts-billing-schedule-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a billing schedule
         * @description Updates an existing billing schedule by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-billing-schedule-key"];
        trace?: never;
    };
    "/objects/contracts/billing-schedule-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List billing schedule lines
         * @description Returns a collection with a key, ID, and link for each billing schedule line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-billing-schedule-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/billing-schedule-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing schedule line.
                 * @example 349
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a billing schedule line
         * @description Returns detailed information for a particular billing schedule line.
         */
        get: operations["get-contracts-billing-schedule-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/billing-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List billing templates
         * @description Returns a collection with a key, ID, and link for each billing template. This operation is mostly for use in testing. Use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-billing-template"];
        put?: never;
        /**
         * Create a billing template
         * @description Creates a new billing template.
         */
        post: operations["create-contracts-billing-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/billing-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing template.
                 * @example 10
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a billing template
         * @description Returns detailed information for a specified billing template.
         */
        get: operations["get-contracts-billing-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a billing template
         * @description Deletes a billing template.
         */
        delete: operations["delete-contracts-billing-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a billing template
         * @description Updates an existing billing template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-billing-template-key"];
        trace?: never;
    };
    "/objects/contracts/billing-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List billing template lines
         * @description Returns a collection with a key, ID, and link for each billing template line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-billing-template-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/billing-template-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing template line.
                 * @example 7
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a billing template line
         * @description Returns detailed information for a specified billing template line.
         */
        get: operations["get-contracts-billing-template-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/evergreen-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Evergreen templates
         * @description Returns a collection with a key, ID, and link for each evergreen template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["get-objects-evergreen-template"];
        put?: never;
        /**
         * Create an evergreen template
         * @description Creates a new evergreen template.
         */
        post: operations["post-objects-evergreen-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/evergreen-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the evergreen template.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an evergreen template
         * @description Returns detailed information for a specified evergreen template.
         */
        get: operations["get-objects-evergreen-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete an evergreen template
         * @description Deletes an evergreen template.
         */
        delete: operations["delete-objects-evergreen-template-key"];
        options?: never;
        head?: never;
        /**
         * Update an evergreen template
         * @description Updates an existing evergreen template by setting field values. Any field values not provided remain unchanged.
         */
        patch: operations["patch-objects-evergreen-template-key"];
        trace?: never;
    };
    "/objects/contracts/contract-usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contract usage
         * @description Returns a collection with a key, ID, and link for each contract usage object. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-contract-usage"];
        put?: never;
        /**
         * Create contract usage object
         * @description Creates a new contract usage object.
         */
        post: operations["create-contracts-contract-usage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/contract-usage/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the contract usage object.
                 * @example 4532
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a contract usage
         * @description Returns detailed information for a specified contract usage.
         */
        get: operations["get-contracts-contract-usage-key"];
        put?: never;
        post?: never;
        /**
         * Delete contract usage
         * @description Delete a contract usage. See the [Intacct Help for restrictions on deleting contract usage](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Delete_usage).
         */
        delete: operations["delete-contracts-contract-usage-key"];
        options?: never;
        head?: never;
        /**
         * Update a contract usage
         * @description Updates an existing contract usage by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-contract-usage-key"];
        trace?: never;
    };
    "/objects/contracts/revenue-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List revenue schedules
         * @description Returns a collection with a key, ID, and link for each revenue schedule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-revenue-schedule"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/revenue-schedule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the revenue schedule.
                 * @example 1287
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a revenue schedule
         * @description Returns detailed information for a specified revenue schedule.
         */
        get: operations["get-contracts-revenue-schedule-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a revenue schedule
         * @description Updates an existing revenue schedule by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-revenue-schedule-key"];
        trace?: never;
    };
    "/services/contracts/revenue-schedule/reallocate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reallocate a revenue schedule
         * @description Reallocates a revenue schedule based on different start and/or end dates. Applies to revenue schedules where the `journal` is set to `J1`, `status` is set to `inProgress`, and the `recognitionMethod` is set to either `straightLine` or `dailyRate`.
         *
         *     For more information, read about [reallocating revenue schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reallocate_revenue_schedules) in the Sage Intacct Help Center.
         */
        post: operations["reallocate-contract-revenue-schedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/revenue-schedule-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List revenue schedule lines
         * @description Returns a collection with a key, ID, and link for each revenue schedule line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-revenue-schedule-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/revenue-schedule-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the revenue schedule line.
                 * @example 897
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a revenue schedule line
         * @description Returns detailed information for a specified revenue schedule line.
         */
        get: operations["get-contracts-revenue-schedule-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/revenue-schedule-line/post": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Post a revenue schedule line
         * @description Posts a revenue schedule line. Posting a revenue schedule line recognizes revenue from an `open` line, changing the state to `posted`. When created, but not yet `posted` (recognized) it remains `open` until `posted`.
         *
         *     For more information, read about [adding a row to the revenue schedule](https://www.intacct.com/ia/docs/en_US/help_action/Contracts/Using_Contracts/Revenue/Revenue_schedules/revenue-schedule.htm?cshid=Termed_revenue_schedules#Addarowtotherevenueschedule) in the Sage Intacct Help Center.
         */
        post: operations["post-contracts-revenue-schedule-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/revenue-schedule-line/unpost": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Unpost a revenue schedule line
         * @description Unposts a revenue schedule line. Unposting a revenue schedule line clears recognized revenue from a `posted` line, changing the state to `open`. When `posted`, it can then be unposted (cleared), returning it to the `open` state.
         *
         *     For more information, read about [clearing a posted revenue journal entry](https://www.intacct.com/ia/docs/en_US/help_action/Contracts/Using_Contracts/Revenue/Revenue_schedules/revenue-schedule.htm?cshid=Termed_revenue_schedules#Clearapostedrevenuejournalentry) in the Sage Intacct Help Center.
         */
        post: operations["unpost-contracts-revenue-schedule-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/revenue-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List revenue templates
         * @description Returns a collection with a key, ID, and link for each revenue template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-revenue-template"];
        put?: never;
        /**
         * Create a revenue template
         * @description Creates a new revenue template.
         */
        post: operations["create-contracts-revenue-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/revenue-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the revenue template.
                 * @example 25
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a revenue template
         * @description Returns detailed information for a specified revenue template.
         */
        get: operations["get-contracts-revenue-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete a revenue template
         * @description Deletes a revenue template.
         */
        delete: operations["delete-contracts-revenue-template-key"];
        options?: never;
        head?: never;
        /**
         * Update a revenue template
         * @description Updates an existing revenue template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-revenue-template-key"];
        trace?: never;
    };
    "/objects/contracts/contract-mea-allocation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List MEA allocations
         * @description Returns a collection with a key, ID, and link for each MEA allocation. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["get-objects-contract-mea-allocation"];
        put?: never;
        /**
         * Create an MEA allocation
         * @description Creates a new MEA allocation.
         */
        post: operations["create-contracts-contract-mea-allocation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/contract-mea-allocation/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the MEA allocation.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an MEA allocation
         * @description Returns detailed information for a specified MEA allocation.
         */
        get: operations["get-contracts-contract-mea-allocation-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/contract/clear-all-mea": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Clear all MEA allocations
         * @description Clears all multiple element arrangement (MEA) allocations. This action resets the applicable revenue schedules to the amounts that existed prior to all MEA allocations. The contract status remains `inProgress` when MEA allocations are cleared.
         *
         *     For more information, read about [clearing MEA allocations](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Hold_resume_contract_schedules) in the Sage Intacct Help Center.
         */
        post: operations["clear-all-mea-contracts-contract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/contract/clear-last-active-mea": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Clear last active MEA allocation
         * @description Clears the last active multiple element arrangement (MEA) allocation. This action resets the applicable revenue schedules to the amounts that existed prior to the MEA allocation. The contract status remains `inProgress` when an MEA allocation is cleared.
         *
         *     For more information, read about [clearing MEA allocations](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Hold_resume_contract_schedules) in the Sage Intacct Help Center.
         */
        post: operations["clear-last-active-mea-contracts-contract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/bulk-action-run-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bulk action run summaries
         * @description Returns a collection with a key, ID, and link for each bulk action run summary. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-bulk-action-run-summary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/bulk-action-run-summary/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bulk action run summary.
                 * @example 23
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a bulk action run summary
         * @description Returns detailed information for a particular bulk action run summary.
         */
        get: operations["get-contracts-bulk-action-run-summary-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/expense": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List expenses
         * @description Returns a collection with a key, ID, and link for each expense. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-expense"];
        put?: never;
        /**
         * Create an expense
         * @description Creates a new expense.
         */
        post: operations["create-contracts-expense"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/expense/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense.
                 * @example 17
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an expense
         * @description Returns detailed information for a specified expense.
         */
        get: operations["get-contracts-expense-key"];
        put?: never;
        post?: never;
        /**
         * Delete an expense
         * @description Deletes an expense.
         */
        delete: operations["delete-contracts-expense-key"];
        options?: never;
        head?: never;
        /**
         * Update an expense
         * @description Updates an existing expense by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-expense-key"];
        trace?: never;
    };
    "/workflows/contracts/expense/post": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Post an expense
         * @description Posts an expense. You can save an expense as a `draft` without affecting the General Ledger (GL) or the Contracts subledger.
         *
         *     Posting a draft expense changes the status of the expense from `draft` to `inProgress`. It also creates journal entries in the General Ledger (GL) for the expense amounts.
         *
         *     For more information, read about the [expense workflow](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contract_expense_workflow) in the Sage Intacct Help Center.
         */
        post: operations["post-contracts-expense"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/expense/hold-schedules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Hold a schedule for an expense
         * @description Holds a schedule for an expense. Placing an expense schedule on hold temporarily pauses the expense schedule and sets the status of the schedule and its entries to `onHold`.
         *
         *     For more information, read about [holding expense schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Hold_resume_expense_schedules) in the Sage Intacct Help Center.
         */
        post: operations["hold-schedules-contracts-expense"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/expense/resume-schedules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Resume an expense schedule
         * @description Resumes a schedule for an expense. Releases the hold effective as of the resume date, and allows the open periods to be available for posting. The workflow action sets the status of the schedule and its entries to `inProgress`.
         *
         *     For more information, read about [resuming expense schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Hold_resume_expense_schedules) in the Sage Intacct Help Center.
         */
        post: operations["resume-schedules-contracts-expense"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/expense-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List expense schedules
         * @description Returns a collection with a key, ID, and link for each expense schedule. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-expense-schedule"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/expense-schedule/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense schedule.
                 * @example 762
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an expense schedule
         * @description Returns detailed information for a specified expense schedule.
         */
        get: operations["get-contracts-expense-schedule-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update an expense schedule
         * @description Updates an existing expense schedule by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-expense-schedule-key"];
        trace?: never;
    };
    "/services/contracts/expense-schedule/reallocate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reallocate an expense schedule
         * @description Reallocates an expense schedule based on different start and/or end dates. Applies to expense schedules where the `journal` is set to `J1`, `status` is set to `inProgress`, and the `recognitionMethod` is set to either `straightLine` or `dailyRate`.
         *
         *     For more information, read about [reallocating expense schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reallocate_expense_schedules) in the Sage Intacct Help Center.
         */
        post: operations["reallocate-contract-expense-schedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/expense-schedule-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List expense schedule lines
         * @description Returns a collection with a key, ID, and link for each expense schedule line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-expense-schedule-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/expense-schedule-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense schedule line.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an expense schedule line
         * @description Returns detailed information for a specified expense schedule line.
         */
        get: operations["get-contracts-expense-schedule-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/expense-schedule-line/post": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Post an expense schedule line
         * @description Post an expense schedule line. Posts a single Expense Journal 1 (J1) entry generated from an expense schedule, by posting an individual expense schedule line. Posting an expense schedule line changes the status from `open` to `posted`.
         *
         *     For more information, read about [expense schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Expense_schedules) in the Sage Intacct Help Center.
         */
        post: operations["post-contracts-expense-schedule-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/contracts/expense-schedule-line/unpost": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Unpost an expense schedule line
         * @description Unpost an expense schedule line. Reverses a single Expense Journal 1 (J1) entry generated from an expense schedule, by un-posting an individual expense schedule line. Unposting an expense schedule line changes the status from `posted` to `open`.
         *
         *     For more information, read about [expense schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Expense_schedules) in the Sage Intacct Help Center.
         */
        post: operations["unpost-contracts-expense-schedule-line"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/historical-schedule-run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List historical schedule runs
         * @description Returns a collection with a key, ID, and link for each historical schedule run. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-historical-schedule-run"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/historical-schedule-run/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the historical schedule run.
                 * @example 156
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a historical schedule run
         * @description Returns detailed information for a specified historical schedule run.
         */
        get: operations["get-contracts-historical-schedule-run-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/expense-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List expense templates
         * @description Returns a collection with a key, ID, and link for each expense template. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-expense-template"];
        put?: never;
        /**
         * Create an expense template
         * @description Creates an expense template.
         */
        post: operations["create-contracts-expense-template"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/expense-template/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense template.
                 * @example 136
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an expense template
         * @description Returns detailed information for a specified expense template.
         */
        get: operations["get-contracts-expense-template-key"];
        put?: never;
        post?: never;
        /**
         * Delete an expense template
         * @description Deletes an expense template.
         */
        delete: operations["delete-contracts-expense-template-key"];
        options?: never;
        head?: never;
        /**
         * Update an expense template
         * @description Updates an existing expense template by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-expense-template-key"];
        trace?: never;
    };
    "/objects/contracts/expense-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List expense template lines
         * @description Returns a collection with a key, ID, and link for each expense template line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-expense-template-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/expense-template-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense template line.
                 * @example 7
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an expense template line
         * @description Returns detailed information for a specified expense template line.
         */
        get: operations["get-contracts-expense-template-line-key"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/billing-price-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List billing price lists
         * @description Returns a collection with a key, ID, and link for each billing price list. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find billing price lists that meet specific criteria and to specify the properties that you want in the response.
         */
        get: operations["list-contracts-billing-price-list"];
        put?: never;
        /**
         * Create a billing price list
         * @description Creates a new billing price list.
         */
        post: operations["create-contracts-billing-price-list"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/billing-price-list/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing price list.
                 * @example 24
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a billing price list
         * @description Returns detailed information for a specified billing price list.
         */
        get: operations["get-contracts-billing-price-list-key"];
        put?: never;
        post?: never;
        /**
         * Delete a billing price list
         * @description Deletes a billing price list. You can delete a billing price list if it has not been used by any contracts. Deleted price lists cannot be recovered. Alternatively, you can change the status to `inactive`, which prevents it from being used but retains the price list for historical purposes.
         */
        delete: operations["delete-contracts-billing-price-list-key"];
        options?: never;
        head?: never;
        /**
         * Update a billing price list
         * @description Updates an existing billing price list by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-billing-price-list-key"];
        trace?: never;
    };
    "/objects/contracts/billing-price-list-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List billing price list entries
         * @description Returns a collection with a key, ID, and link for each billing price entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-billing-price-list-entry"];
        put?: never;
        /**
         * Create a billing price list entry
         * @description Creates a new billing price list entry.
         */
        post: operations["create-contracts-billing-price-list-entry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/billing-price-list-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing price list entry.
                 * @example 425
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a billing price list entry
         * @description Returns detailed information for a specified billing price list entry.
         */
        get: operations["get-contracts-billing-price-list-entry-key"];
        put?: never;
        post?: never;
        /**
         * Delete a/an billing price list entry
         * @description Deletes a billing price list entry.
         */
        delete: operations["delete-contracts-billing-price-list-entry-key"];
        options?: never;
        head?: never;
        /**
         * Update a billing price list entry
         * @description Updates an existing billing price list entry by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-billing-price-list-entry-key"];
        trace?: never;
    };
    "/objects/contracts/billing-price-list-entry-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List billing price list entry lines
         * @description Returns a collection with a key, ID, and link for each billing price entry line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-billing-price-list-entry-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/billing-price-list-entry-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing price list entry line.
                 * @example 10295
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a billing price list entry line
         * @description Returns detailed information for a specified billing price list entry line.
         */
        get: operations["get-contracts-billing-price-list-entry-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete a billing price list entry line
         * @description Deletes a billing price list entry line.
         */
        delete: operations["delete-contracts-billing-price-list-entry-line-key"];
        options?: never;
        head?: never;
        /**
         * Update a billing price list entry line
         * @description Updates an existing billing price list entry line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-billing-price-list-entry-line-key"];
        trace?: never;
    };
    "/objects/contracts/billing-price-list-entry-line-tier": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List billing price list entry line tiers
         * @description Returns a collection with a key, ID, and link for each billing price list entry line tier. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-billing-price-list-entry-line-tier"];
        put?: never;
        /**
         * Create a billing price list entry line tier
         * @description Creates a new billing price list entry line tier.
         */
        post: operations["create-contracts-billing-price-list-entry-line-tier"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/billing-price-list-entry-line-tier/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a billing price list entry line tier.
                 * @example 32195
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get a billing price list entry line tier
         * @description Returns detailed information for a specified billing price list entry line tier.
         */
        get: operations["get-contracts-billing-price-list-entry-line-tier-key"];
        put?: never;
        post?: never;
        /**
         * Delete a billing price list entry line tier
         * @description Deletes a billing price list entry line tier.
         */
        delete: operations["delete-contracts-billing-price-list-entry-line-tier-key"];
        options?: never;
        head?: never;
        /**
         * Update a billing price list entry line tier
         * @description Updates an existing billing price list entry line tier by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-billing-price-list-entry-line-tier-key"];
        trace?: never;
    };
    "/objects/contracts/mea-price-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List MEA price lists
         * @description Returns a collection with a key, ID, and link for each MEA price list. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-mea-price-list"];
        put?: never;
        /**
         * Create an MEA price list
         * @description Creates a new MEA price list.
         */
        post: operations["create-contracts-mea-price-list"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/mea-price-list/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the MEA price list.
                 * @example 61
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an MEA price list
         * @description Returns detailed information for a specified MEA price list.
         */
        get: operations["get-contracts-mea-price-list-key"];
        put?: never;
        post?: never;
        /**
         * Delete an MEA price list
         * @description Deletes an MEA price list. You can delete an MEA price list if it has not been used by any contracts. Deleted price lists cannot be recovered. Alternatively, you can change the status to `inactive`, which prevents it from being used but retains the price list for historical purposes.
         */
        delete: operations["delete-contracts-mea-price-list-key"];
        options?: never;
        head?: never;
        /**
         * Update an MEA price list
         * @description Update an existing MEA price list by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-mea-price-list-key"];
        trace?: never;
    };
    "/objects/contracts/mea-price-list-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List MEA price list entries
         * @description Returns a collection with a key, ID, and link for each MEA price list entry. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-mea-price-list-entry"];
        put?: never;
        /**
         * Create an MEA price list entry
         * @description Creates a new MEA price list entry.
         */
        post: operations["create-contracts-mea-price-list-entry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/mea-price-list-entry/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an MEA price list entry.
                 * @example 521
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an MEA price list entry
         * @description Returns detailed information for a specified MEA price list entry.
         */
        get: operations["get-contracts-mea-price-list-entry-key"];
        put?: never;
        post?: never;
        /**
         * Delete an MEA price list entry
         * @description Deletes an MEA price list entry.
         */
        delete: operations["delete-contracts-mea-price-list-entry-key"];
        options?: never;
        head?: never;
        /**
         * Update an MEA price list entry
         * @description Updates an existing MEA price list entry by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-mea-price-list-entry-key"];
        trace?: never;
    };
    "/objects/contracts/mea-price-list-entry-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List MEA price list entry lines
         * @description Returns a collection with a key, ID, and link for each MEA price list entry line. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-mea-price-list-entry-line"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/mea-price-list-entry-line/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an MEA price list entry line.
                 * @example 574
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an MEA price list entry line
         * @description Returns detailed information for a specified MEA price list entry line.
         */
        get: operations["get-contracts-mea-price-list-entry-line-key"];
        put?: never;
        post?: never;
        /**
         * Delete an MEA price list entry line
         * @description Deletes an MEA price list entry line.
         */
        delete: operations["delete-contracts-mea-price-list-entry-line-key"];
        options?: never;
        head?: never;
        /**
         * Update an MEA price list entry line
         * @description Updates an existing MEA price list entry line by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-mea-price-list-entry-line-key"];
        trace?: never;
    };
    "/objects/contracts/mea-category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List MEA fair value categories
         * @description Returns a collection with a key, ID, and link for each MEA category. This operation is mostly for use in testing; use the [query service](/intacct/apis/intacct/1/intacct-openapi/groups/common-resources/tags/common_resources_query) to find objects that meet certain criteria and to specify properties that are returned.
         */
        get: operations["list-contracts-mea-category"];
        put?: never;
        /**
         * Create an MEA category
         * @description Creates a new MEA category.
         */
        post: operations["create-contracts-mea-category"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/objects/contracts/mea-category/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an MEA category.
                 * @example 3
                 */
                key: string;
            };
            cookie?: never;
        };
        /**
         * Get an MEA category
         * @description Returns detailed information for a specified MEA category.
         */
        get: operations["get-contracts-mea-category-key"];
        put?: never;
        post?: never;
        /**
         * Delete an MEA category
         * @description Deletes an MEA category.
         */
        delete: operations["delete-contracts-mea-category-key"];
        options?: never;
        head?: never;
        /**
         * Update an MEA category
         * @description Updates an existing MEA category by setting field values. Any fields not provided remain unchanged.
         */
        patch: operations["update-contracts-mea-category-key"];
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
        /** @description A contract group is a logical collection of contracts used to drive reporting and analysis, with contracts as the group members. */
        "objects.contracts.contract-group": {
            /**
             * @description System-assigned unique key for the contract group.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the contract group.
             * @example CG-NA-RENEW-2026-001
             */
            id?: string;
            /**
             * @description URL endpoint for the contract group.
             * @example /objects/contracts/contract-group/23
             */
            readonly href?: string;
            /**
             * @description Name of the contract group.
             * @example Enterprise SaaS Annual Renewals - North America
             */
            name?: string;
            /**
             * @description Provides a brief contextual description of the contract group and its intended use.
             * @example Contains active enterprise SaaS contracts in North America that are due for annual renewal in the current fiscal year.
             */
            description?: string;
            /**
             * @description Indicates the group membership type for the contract group, which determines how contracts are included in the group:
             *
             *     * `specific` - Includes specific contracts as `groupMembers`. Use `memberFilter` to further filter the selected contracts if needed.
             *     * `all` - Includes all contracts that match the `memberFilter` criteria.
             * @default all
             * @example all
             * @enum {string}
             */
            groupType?: "all" | "specific";
            /** @description References a collection of filters that determine contract group membership. When `groupType` is `all`, the filter selects all matching contracts. When `groupType` is `specific`, the filter is applied to the contracts listed in `groupMembers`. */
            memberFilter?: components["schemas"]["member-filter"] & Record<string, never>;
            /** @description References the contracts included in the group when `groupType` is `specific`, along with their sort order. If `memberFilter` is provided, the filter is applied to this listed set. */
            groupMembers?: {
                /**
                 * @description Unique key for the contract.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the contract.
                 * @example CONT-128
                 */
                id?: string;
                /**
                 * @description Name for the contract.
                 * @example Power
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the contract.
                 * @example /objects/contracts/contract/23
                 */
                readonly href?: string;
                /**
                 * @description Sort order.
                 * @example 0
                 */
                readonly sortOrder?: string;
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
        "contracts-contract-groupRequiredProperties": Record<string, never>;
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
        /** @description A contract group member represents a contract that belongs to a contract group. */
        "objects.contracts.contract-group-member": {
            /**
             * @description System-assigned unique key for the contract group member.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the contract group member.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the contract group member.
             * @example /objects/contracts/contract-group-member/23
             */
            readonly href?: string;
            /** @description References the contract group to which this member belongs. */
            readonly contractGroup?: {
                /**
                 * @description Identifier for the contract group.
                 * @example 5
                 */
                readonly id?: string;
                /**
                 * @description Unique key of the contract group.
                 * @example 5
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the contract group.
                 * @example /objects/contracts/contract-group/5
                 */
                readonly href?: string;
            };
            /**
             * @description Sort order of the contract group member within the group.
             * @example 2
             */
            readonly sortOrder?: string;
            /** @description References the contract associated with this group member. */
            contract?: {
                /**
                 * @description Unique key of the contract.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the contract.
                 * @example CONT-2026-EMEA-00427
                 */
                id?: string;
                /**
                 * @description Name of the contract.
                 * @example Enterprise Software Subscription and Support Agreement - EMEA - FY2026 Renewal
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the contract.
                 * @example /objects/contracts/contract/23
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Contract types categorize contracts and can be used to filter reports, batch invoices, and so on. */
        "objects.contracts.contract-type": {
            /**
             * @description System-assigned unique key for the contract type.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the contract type.
             * @example Services
             */
            id?: string;
            /**
             * @description Description for the contract type.
             * @example Fixed price contract
             */
            description?: string | null;
            /**
             * @description URL endpoint for the contract type.
             * @example /objects/contracts/contract-type/12
             */
            readonly href?: string;
            /**
             * @description RecordURL of the contract type.
             * @example https://app.intacct.com/objects/contracts/contract-type/12
             */
            readonly webURL?: string;
            /** @description References the parent contract type to which the current contract type belongs. */
            parent?: {
                /**
                 * @description Unique key for the parent contract type.
                 * @example 11
                 */
                key?: string;
                /**
                 * @description Identifier for the parent contract type.
                 * @example API
                 */
                id?: string;
                /**
                 * @description URL endpoint for the parent contract type.
                 * @example /objects/contracts/contract-type/1
                 */
                readonly href?: string;
            };
            entity?: components["schemas"]["entity-ref"];
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-contract-typeRequiredProperties": Record<string, never>;
        /** @description A contract represents a customer agreement that defines the products or services that are provided to a specified customer. */
        "objects.contracts.contract": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the contract.
             * @example CON-0045-1
             */
            id?: string;
            /**
             * @description URL endpoint for the contract.
             * @example /objects/contracts/contract/12
             */
            readonly href?: string;
            /**
             * @description RecordURL of the contract.
             * @example https://app.intacct.com/objects/contracts/contract/12
             */
            readonly webURL?: string;
            /**
             * @description Name of the contract.
             * @example ACME Widgets - Service
             */
            name?: string;
            /** @description Specifies the original contract from which this contract was created. */
            readonly parent?: {
                /**
                 * @description Unique key for the parent contract.
                 * @example 59
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the parent contract.
                 * @example CON-0045
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the parent contract.
                 * @example /objects/contracts/contract/249
                 */
                readonly href?: string;
            };
            /**
             * @description Provides a brief description for the contract.
             * @example Annual licensing agreement for cloud platform services. Covers standard enterprise subscription terms and service-level commitments.
             */
            description?: string | null;
            status?: components["schemas"]["status"];
            /**
             * @description Indicates the current state of the contract.
             *
             *       * `draft` - The contract is saved, but not posted. A `draft` contract is not included in the General Ledger.
             *       * `inProgress` - The contract is active and posted. It remains in this state until renewed, cancelled or ended without renewal.
             *       * `canceled` - All revenue, expense and billing schedules for all associated contract lines have been canceled.
             *       * `notRenewed` - The `termed` contract completed its term and was not renewed.
             *       * `renewed` - The `termed` contract has been renewed.
             * @default inProgress
             * @example inProgress
             * @enum {string}
             */
            state?: "draft" | "inProgress" | "renewed" | "canceled" | "notRenewed";
            /**
             * @description Specifies how the contract is used and the associated application area.
             *
             *
             *
             *
             *
             *       * `contracts` - Standard contract used for billing and revenue recognition, available in the Contracts application which supports subscription billing and revenue management.
             *       * `orderEntry` - Tracking-only contracts used for reporting or analysis, available in both the Contracts and Order Entry applications and can be used as a dimension.
             *
             *     For more information, read about the [types of contracts tracked](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Types_of_contracts_supported) in the Sage Intacct Help Center.
             * @default contracts
             * @example contracts
             * @enum {string}
             */
            application?: "contracts" | "orderEntry";
            /**
             * Format: date
             * @description Indicates the date the contract begins. Once a contract line has been posted, the start date cannot be changed. For [evergreen contracts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Evergreen_quick_reference), the start date also determines the start of each recurring billing period. The billing frequency on the contract line (monthly, quarterly, or annually) defines the length of each period.
             * @example 2025-01-01
             */
            startDate?: string;
            /**
             * Format: date
             * @description Indicates the date the contract ends, determining the timing of the renewal process. Required for `termed` contracts.
             * @example 2025-12-31
             */
            endDate?: string;
            /** @description Provides details for the contacts associated with the contract. */
            contacts?: {
                /** @description Shipping contact information for the contract. If not provided, the `shipTo` contact defined in the customer record is used. */
                shipTo?: {
                    /**
                     * @description Unique key for the shipping contact.
                     * @example 1482
                     */
                    key?: string;
                    /**
                     * @description Identifier for the shipping contact.
                     * @example Gruppen (Estate Europe) Services
                     */
                    id?: string;
                    /**
                     * @description Primary email address for the shipping contact.
                     * @example john-smith@gruppen.com
                     */
                    readonly email1?: string;
                    /**
                     * @description Secondary email address for the shipping contact.
                     * @example karen-adams@gruppen.com
                     */
                    readonly email2?: string;
                    /**
                     * @description URL endpoint for the shipping contact.
                     * @example /objects/company-config/contact/1482
                     */
                    readonly href?: string;
                };
                /** @description Billing contact information for the contract. If not provided, the `billTo` contact defined in the customer record is used. */
                billTo?: {
                    /**
                     * @description Unique key for the billing contact.
                     * @example 1482
                     */
                    key?: string;
                    /**
                     * @description Identifier for the billing contact.
                     * @example Gruppen (Estate Europe) Services
                     */
                    id?: string;
                    /**
                     * @description Primary email address for the billing contact.
                     * @example karen-adams@gruppen.com
                     */
                    readonly email1?: string;
                    /**
                     * @description Secondary email address for the billing contact.
                     * @example john-smith@gruppen.com
                     */
                    readonly email2?: string;
                    /**
                     * @description URL endpoint of the billing contact.
                     * @example /objects/company-config/contact/1482
                     */
                    readonly href?: string;
                };
                /** @description Additional contact information for the contract. (Order Entry) */
                additionalContact?: {
                    /**
                     * @description Unique key for the additional contact.
                     * @example 1482
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the additional contact.
                     * @example Gruppen (Estate Europe) Services
                     */
                    id?: string | null;
                    /**
                     * @description Primary email address for the additional contact.
                     * @example michael-young@gruppen.com
                     */
                    readonly email1?: string | null;
                    /**
                     * @description Secondary email address for the additional contact.
                     * @example steven-sanderson@gruppen.com
                     */
                    readonly email2?: string | null;
                    /**
                     * @description URL endpoint for the additional contact.
                     * @example /objects/company-config/contact/1482
                     */
                    readonly href?: string;
                };
            };
            /**
             * Format: date
             * @description Indicates the date the contract cancellation takes effect. This marks the end of all billing, revenue, and expense schedules associated with the contract.
             * @example 2025-04-01
             */
            cancellationDate?: string | null;
            /**
             * @description Specifies how often the customer is billed under the contract and determines the interval for generating billing schedules.
             * @default null
             * @example monthly
             * @enum {string|null}
             */
            billingFrequency?: null | "monthly" | "quarterly" | "annually";
            /** @description References the Accounts Receivable (AR) payment term for the contract. */
            paymentTerm?: {
                /**
                 * @description Unique key for the AR payment term.
                 * @example 16
                 */
                key?: string;
                /**
                 * @description Identifier for the AR payment term.
                 * @example N90
                 */
                id?: string;
                /**
                 * @description URL endpoint for the AR payment term.
                 * @example /objects/accounts-receivable/term/16
                 */
                readonly href?: string;
            };
            /** @description References the price list used to determine billing rates for all contract lines, ensuring consistent pricing across the contract. */
            billingPriceList?: {
                /**
                 * @description Unique key for the billing price list.
                 * @example 12
                 */
                key?: string | null;
                /**
                 * @description Identifier for the billing price list.
                 * @example Software Packages
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the billing price list.
                 * @example /objects/contracts/billing-price-list/1
                 */
                readonly href?: string;
            };
            /** @description Specifies the multiple element arrangement (MEA) allocation price list for a `termed` contract. (Contract Advanced Revenue Recognition subscription) */
            meaPriceList?: {
                /**
                 * @description Unique key for the MEA price list.
                 * @example 12
                 */
                key?: string | null;
                /**
                 * @description Identifier for the MEA price list.
                 * @example Services MEA Price List
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the MEA price list.
                 * @example /objects/contracts/mea-price-list/12
                 */
                readonly href?: string;
            };
            /**
             * @description Indicates whether to hold the billing schedule for a `termed` contract. When `true`, invoices are not generated from the billing schedule.
             * @example false
             */
            holdBilling?: boolean | null;
            /**
             * @description Indicates whether to hold the revenue schedule for a contract. When `true`, revenue cannot be posted from the revenue schedule.
             * @example false
             */
            holdRevenue?: boolean | null;
            /**
             * @description Indicates whether to hold the expense schedule for a contract. When `true`, expenses are not posted from the revenue schedule.
             * @example false
             */
            holdExpense?: boolean | null;
            /** @description Provides details about the currencies used in contracts for multi-currency companies. */
            currency?: {
                /**
                 * @description Exchange rate type used to convert foreign currencies. If not provided, the system uses the Intacct Daily Rate. Once a contract line has been posted, the exchange rate cannot be changed.
                 * @example Corporate Rate
                 */
                exchangeRateType?: string;
                /**
                 * @description Base currency for the entity or company.
                 * @example USD
                 */
                baseCurrency?: string;
                /**
                 * @description Specifies the currency in which the contract transactions are recorded. If not set, the system uses the currency defined for the customer. All contract lines must use the same transaction currency. Once a contract line has been posted, the currency cannot be changed.
                 * @example USD
                 */
                txnCurrency?: string;
            };
            /**
             * @description Indicates whether the `termed` contract can be renewed.
             * @default false
             * @example false
             */
            isRenewable?: boolean;
            /** @description References the original contract associated with this renewal. */
            readonly renewedContract?: {
                /**
                 * @description Unique key for the original contract.
                 * @example 12
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the original contract.
                 * @example CON-0045-2
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the original contract.
                 * @example /objects/contracts/contract/12
                 */
                readonly href?: string;
            };
            /**
             * @deprecated
             * @description This field is deprecated. Use the `renewalTemplate` field instead.
             */
            renewal?: {
                /**
                 * @deprecated
                 * @description This field is deprecated. Use the `renewalTemplate.name` field instead.
                 */
                template?: string | null;
                /**
                 * @deprecated
                 * @description This field is deprecated. Use the `renewalTemplate.contractTermType` field instead.
                 * @default termed
                 * @enum {string}
                 */
                contractTermType?: "termed" | "evergreen";
                /**
                 * @deprecated
                 * @description This field is deprecated. Use the `renewalTemplate.termLength` field instead.
                 */
                termLength?: number | null;
                /**
                 * @deprecated
                 * @description This field is deprecated. Use the `renewalTemplate.termPeriod` field instead.
                 * @default months
                 * @enum {string}
                 */
                termPeriod?: "years" | "months" | "days";
                /**
                 * Format: date
                 * @deprecated
                 * @description This field is deprecated. Use the `renewalTemplate.triggerDate` field instead.
                 */
                triggerDate?: string | null;
                /**
                 * Format: date
                 * @deprecated
                 * @description This field is deprecated. Use the `renewalTemplate.renewalDate` field instead.
                 */
                date?: string | null;
                /**
                 * @deprecated
                 * @description This field is deprecated. Use the `renewalTemplate.billInAdvanceLengthRenewal` field instead.
                 */
                billInAdvanceLength?: number | null;
                /**
                 * @deprecated
                 * @description This field is deprecated. Use the `renewalTemplate.billInAdvancePeriodRenewal` field instead.
                 * @default null
                 * @enum {string|null}
                 */
                billInAdvancePeriod?: null | "days" | "months";
            };
            /** @description References the [contract renewal template](contracts.contract-renewal-template) used to generate renewal contracts, when `isRenewable` is set to `true`. */
            renewalTemplate?: {
                /**
                 * @description Unique key for the renewal template.
                 * @example 59
                 */
                key?: string;
                /**
                 * @description Identifier for the renewal template.
                 * @example 59
                 */
                id?: string;
                /**
                 * @description Name for the renewal template.
                 * @example 12 months with notifications
                 */
                name?: string | null;
                /**
                 * @description URL endpoint for the renewal template.
                 * @example /objects/contracts/contract-renewal-template/59
                 */
                readonly href?: string;
                /**
                 * @description Indicates the type of contract term, either `termed`, where a fixed duration is specified, or `evergreen`, where the contract continues indefinitely until canceled.
                 * @default termed
                 * @example termed
                 * @enum {string}
                 */
                contractTermType?: "termed" | "evergreen";
                /**
                 * @description Specifies the number of time periods that define the `termed` contract duration. Use with `termPeriod` to establish the length of the renewal term.
                 * @example 12
                 */
                termLength?: number | null;
                /**
                 * @description Specifies the time unit by which the `termed` contract is measured. Use with `termLength` to determine the renewal term.
                 * @default months
                 * @example months
                 * @enum {string}
                 */
                termPeriod?: "years" | "months" | "days";
                /**
                 * Format: date
                 * @description Indicates the date that triggers the renewal process and notifications to users about upcoming renewals.
                 * @example 2025-12-01
                 */
                readonly triggerDate?: string | null;
                /**
                 * Format: date
                 * @description Indicates the effective date of the renewal.
                 * @example 2025-12-01
                 */
                readonly renewalDate?: string | null;
                /**
                 * @description Specifies the number of time periods in advance of the renewal that billing occurs. Use with `billInAdvancePeriodRenewal` to set the length of the bill-in-advance period. Overrides the bill-in-advance settings for the customer.
                 *
                 *     For more information, read about [bill-in-advance parameters for contract renewals](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bill_contracts_in_advance) in the Sage Intacct Help Center.
                 * @example 2
                 */
                billInAdvanceLengthRenewal?: number | null;
                /**
                 * @description Specifies the time unit by which billing occurs in advance of the renewal. Use with `billInAdvanceLengthRenewal` to set the length of the bill-in-advance period. Required if bill-in-advance settings are enabled for renewals.
                 * @default null
                 * @example days
                 * @enum {string|null}
                 */
                billInAdvancePeriodRenewal?: null | "days" | "months";
            };
            /**
             * @description Specifies the number of time periods in advance of the contract that billing occurs. Overrides the bill-in-advance settings for the customer.
             *
             *     For more information, read about [bill-in-advance settings](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bill_contracts_in_advance) in the Sage Intacct Help Center.
             * @example 1
             */
            billInAdvanceLength?: number | null;
            /**
             * @description Specifies the time unit by which billing occurs in advance of the contract. Required if bill-in-advance settings are enabled for renewals.
             * @default null
             * @example months
             * @enum {string|null}
             */
            billInAdvancePeriod?: null | "days" | "months";
            /** @description Specifies the contract type used to group and categorize the contract for reporting and tracking. */
            contractType?: {
                /**
                 * @description Unique key for the contract type.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @deprecated
                 * @description This field is deprecated. Use the `id` field instead.
                 * @example service
                 */
                name?: string | null;
                /**
                 * @description Identifier for the contract type.
                 * @example service
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the contract type.
                 * @example /objects/contracts/contract-type/2
                 */
                readonly href?: string;
            };
            /**
             * @description Defines how estimated time-based revenue is deferred based on timesheet hours recorded against time-and-materials projects for `termed` contracts, when the company is set to defer revenue for time and materials projects.
             *
             *
             *
             *
             *
             *      * `project` - Links all timesheet hours to the project. A contract can only include one `inProgress` contract line for each project.
             *      * `projectAndItem` - Timesheet hours are linked to both a specific project and item. Each combination of project and item must be unique across contract lines in the project.
             *      * `projectAndTask` - Links timesheet hours to both a specific task and project. Each task/project combination must be unique across contract lines in the project.
             *
             *     For more information, read about [deferring estimated time-based revenue](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_estimated_time_based_recognition) in the Sage Intacct Help Center.
             * @default null
             * @example projectAndTask
             * @enum {string|null}
             */
            deferEstimatedTimeBasedRevenueBy?: null | "project" | "projectAndItem" | "projectAndTask";
            /**
             * Format: decimal-precision-2
             * @description Specifies the total fixed (flat-rate) value of the contract, excluding any usage-based charges.
             * @example 2300.00
             */
            readonly contractTotalAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Represents the total amount invoiced to the customer under the contract.
             * @example 1000.00
             */
            readonly billedAmount?: string;
            /** @description Supporting files related to the contract, such as signed agreements or terms. */
            attachment?: {
                /**
                 * @description Unique key for the attachment.
                 * @example 18
                 */
                key?: string | null;
                /**
                 * @description Identifier for the attachment.
                 * @example 18
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the attachment.
                 * @example /objects/company-config/attachment/18
                 */
                readonly href?: string;
            };
            /**
             * @description Provides additional comments or notes related to the posting of the contract.
             * @example Initial contract posted after legal approval.
             */
            postMemo?: string | null;
            entity?: components["schemas"]["entity-ref"];
            dimensions?: components["schemas"]["contract-dimension-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-contractRequiredProperties": {
            /** @example { "customer": { "id": "1" }, "location": { "id": "1" }} */
            dimensions?: unknown;
        };
        /** @description Contract renewal templates define sets of rules and actions that Sage Intacct performs when renewing a contract. */
        "objects.contracts.contract-renewal-template": {
            /**
             * @description System-assigned unique key for the contract renewal template.
             * @example 42
             */
            readonly key?: string;
            /**
             * @description Unique ID for the contract renewal template. This value is the same as the `key` for this object.
             * @example 42
             */
            readonly id?: string;
            /**
             * @description Name of the renewal template.
             * @example CNRenewal12Months
             */
            name?: string;
            /**
             * @description URL endpoint for the contract renewal template.
             * @example /objects/contracts/contract-renewal-template/42
             */
            readonly href?: string;
            /**
             * @description Description of the contract renewal template.
             * @example Standard 12-month contract renewal
             */
            description?: string;
            /** @description The default term applied to the renewed contract. */
            defaultTerm?: {
                /**
                 * @description Default renewal term length. For example, if `period` is set to `months` and this field is `12`, the term is 12 months.
                 * @example 12
                 */
                length?: number;
                /**
                 * @description Default renewal term period.
                 * @default months
                 * @example months
                 * @enum {string}
                 */
                period?: "years" | "months" | "days";
            };
            /** @description Pricing option for the renewed contract. */
            pricing?: {
                /**
                 * @description Pricing method for the renewed contract.
                 *     - `sameAsOriginal` - Use the same price as the original contract.
                 *     - `useBillingPriceList` - Use the billing price list.
                 *     - `markupOrMarkdown` - Apply a markup or markdown by a specified percentage or amount.
                 *     - `custom` - Requires manual price entry for each renewal.
                 * @default sameAsOriginal
                 * @example sameAsOriginal
                 * @enum {string}
                 */
                type?: "sameAsOriginal" | "useBillingPriceList" | "markupOrMarkdown" | "custom";
                /**
                 * @description Type of markup to apply. Applicable only when `pricing.type` is `markupOrMarkdown`.
                 * @default percentageMarkup
                 * @example percentageMarkup
                 * @enum {string}
                 */
                markup?: "percentageMarkup" | "percentageDiscount" | "actualMarkup" | "actualDiscount";
                /**
                 * Format: decimal-precision-2
                 * @description Value of the pricing markup. For percentages, use a whole number (for example, 5). For amounts, use the amount value (for example, 500.00).
                 * @example 5.00
                 */
                markupValue?: string | null;
            };
            recurrenceOptions?: {
                /**
                 * @description Number of days before or after the recurring billing period end date when Sage Intacct creates the contract line for the next recurring billing period.
                 * @default 10
                 * @example 10
                 */
                daysBeforeAfter?: number;
                /**
                 * @description Timing for creating the contract line for the next recurring billing period, before or after the renewal date.
                 * @default before
                 * @example before
                 * @enum {string}
                 */
                beforeOrAfterDateOfRenewal?: "before" | "after";
            };
            /** @description Email notification configuration for contract renewal. */
            renewalNotifications?: {
                /** @description Customer email notification properties. */
                customerEmail?: {
                    /**
                     * @description Indicates whether the system sends an email to the customer as part of the renewal process.
                     * @default false
                     * @example false
                     */
                    enableNotification?: boolean;
                    /**
                     * @description Number of days before or after the contract end date that the customer email is sent.
                     * @default 0
                     * @example 14
                     */
                    daysBeforeAfter?: number;
                    /**
                     * @description Indicates whether to send the customer email before or after the contract end date.
                     * @default before
                     * @example before
                     * @enum {string}
                     */
                    beforeOrAfterContractRenewal?: "before" | "after";
                    /** @description Email template to use for the customer notification. Sage Intacct recommends using an email template so that updated contact information is automatically reflected. */
                    emailTemplate?: {
                        /**
                         * @description Unique key for the customer email template.
                         * @example 10
                         */
                        key?: string | null;
                        /**
                         * @description ID for the customer email template.
                         * @example 10
                         */
                        id?: string | null;
                        /**
                         * @description URL endpoint for the customer email template.
                         * @example /objects/company-config/email-template/10
                         */
                        readonly href?: string;
                    };
                };
                /** @description Internal email notification properties. */
                internalEmail?: {
                    /**
                     * @description Indicates whether the system sends an internal email as part of the renewal process.
                     * @default false
                     * @example false
                     */
                    enableNotification?: boolean;
                    /**
                     * @description Number of days before or after the contract end date that the internal email is sent.
                     * @default 10
                     * @example 10
                     */
                    daysBeforeAfter?: number;
                    /**
                     * @description Indicates whether to send the internal email before or after the contract end date.
                     * @default before
                     * @example before
                     * @enum {string}
                     */
                    beforeOrAfterContractRenewal?: "before" | "after";
                    /** @description Email template to use for the internal notification. Sage Intacct recommends using an email template so that updated contact information is automatically reflected. */
                    emailTemplate?: {
                        /**
                         * @description Unique key for the internal email template.
                         * @example 12
                         */
                        key?: string | null;
                        /**
                         * @description ID for the internal email template.
                         * @example 12
                         */
                        id?: string | null;
                        /**
                         * @description URL endpoint for the internal email template.
                         * @example /objects/company-config/email-template/12
                         */
                        readonly href?: string;
                    };
                };
            };
            /** @description Salesforce opportunity properties. Applies only to companies subscribed to Sage Intacct Advanced CRM Integration. */
            salesforceOpportunity?: {
                /**
                 * @description Indicates whether the system creates a new opportunity in Salesforce when the contract renews.
                 * @default false
                 * @example false
                 */
                enableSalesforceOpportunity?: boolean;
                /**
                 * @description Indicates whether to create the Salesforce opportunity before or after the contract end date.
                 * @default before
                 * @example before
                 * @enum {string}
                 */
                beforeOrAfterContractRenewal?: "before" | "after";
                /**
                 * @description Number of days before or after the contract end date that the Salesforce opportunity is created.
                 * @default 10
                 * @example 10
                 */
                daysBeforeAfter?: string;
                /**
                 * @description Name for the Salesforce opportunity.
                 * @example AnnualContractRenewal
                 */
                renewalName?: string;
                /**
                 * @description Indicates whether the new opportunity includes products from the original opportunity.
                 * @default false
                 * @example false
                 */
                inheritProductsFromParent?: boolean;
                /**
                 * @description Sales stage for the new Salesforce opportunity.
                 * @example Proposal
                 */
                stageOfOpportunity?: string;
            };
            status?: components["schemas"]["status"];
            entity?: components["schemas"]["entity-ref"];
        };
        "contracts-contract-renewal-templateRequiredProperties": Record<string, never>;
        "contracts-contract-actions-post-request": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key: string;
            /**
             * Format: date
             * @description Date when a financial transaction is posted to the General Ledger.
             * @example 2022-01-01
             */
            glPostingDate?: string;
            /**
             * @description Additional comments or notes related to the post.
             * @example Post to the General Ledger.
             */
            postMemo?: string;
        };
        "contracts-contract-actions-post-response": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract.
             * @example /objects/contracts/contract/518
             */
            href?: string;
            /**
             * @description Current state of the contract.
             * @example inProgress
             * @enum {string}
             */
            state?: "inProgress";
        };
        "contracts-contract-actions-renew-request": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key: string;
        };
        "contracts-contract-actions-renew-response": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract.
             * @example /objects/contracts/contract/518
             */
            href?: string;
            /**
             * @description Current state of the contract.
             * @example renewed
             * @enum {string}
             */
            state?: "notRenewed" | "renewed";
        };
        "contracts-contract-actions-expire-request": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key: string;
        };
        "contracts-contract-actions-expire-response": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract.
             * @example /objects/contracts/contract/518
             */
            href?: string;
            /**
             * @description Current state of the contract.
             * @example notRenewed
             * @enum {string}
             */
            state?: "notRenewed";
        };
        "contracts-contract-actions-cancel-request": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key: string;
            /**
             * Format: date
             * @description Effective cancellation date for the contract.
             * @example 2019-02-01
             */
            cancelDate: string;
            /** @description Contract lines to cancel. Omit this list to cancel all cancellable lines. */
            cancelLines?: {
                /**
                 * @description Line number of the contract line to cancel.
                 * @example 3
                 */
                contractLineNo: number;
                /**
                 * @description If true, cancel the expense schedule for the line.
                 * @default false
                 * @example false
                 */
                cancelExpenseSchedule?: boolean;
                /**
                 * @description If true, create adjustments for the canceled line.
                 * @default false
                 * @example true
                 */
                createAdjustments?: boolean;
                /**
                 * @description If true, include usage when canceling the line.
                 * @default false
                 * @example false
                 */
                includeUsage?: boolean;
                /**
                 * @description If true, automatically generate percent complete option.
                 * @default false
                 * @example false
                 */
                autoGeneratePercentComplete?: boolean;
            }[];
        };
        "contracts-contract-actions-cancel-response": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract.
             * @example /objects/contracts/contract/518
             */
            href?: string;
            /**
             * @description Current state of the contract.
             * @example canceled
             * @enum {string}
             */
            state?: "canceled";
        };
        "contracts-contract-actions-uncancel-request": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key: string;
        };
        "contracts-contract-actions-uncancel-response": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract.
             * @example /objects/contracts/contract/518
             */
            href?: string;
            /**
             * @description Current state of the contract.
             * @example inProgress
             * @enum {string}
             */
            state?: "inProgress";
        };
        "contracts-contract-actions-hold-schedules-request": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 2
             */
            key: string;
            /**
             * @description Unique keys for the contract lines.
             * @example 2,3
             */
            contractLineKeys: string;
            /**
             * Format: date
             * @description Date the contract schedules are placed on hold.
             * @example 2022-01-01
             */
            asOfDate: string;
            /**
             * @description Additional comments or notes related to the held schedules.
             * @example Hold contract schedules for March.
             */
            memo: string;
            /**
             * @description Billing schedule to be held.
             * @example true
             */
            holdBilling: boolean;
            /**
             * @description Revenue schedule to be held.
             * @example false
             */
            holdRevenue: boolean;
            /**
             * @description Expense schedule to hold.
             * @example true
             */
            holdExpense: boolean;
        };
        "contracts-contract-actions-hold-schedules-response": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract.
             * @example /objects/contracts/contract/518
             */
            href?: string;
            /**
             * @description Current state of the contract.
             * @example inProgress
             * @enum {string}
             */
            state?: "inProgress";
        };
        "contracts-contract-actions-resume-schedules-request": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 2
             */
            key: string;
            /**
             * @description Unique keys for the contract lines.
             * @example 2,3
             */
            contractLineKeys: string;
            /**
             * Format: date
             * @description Date the contract schedules are resumed.
             * @example 2022-01-01
             */
            asOfDate: string;
            /**
             * @description Additional comments or notes related to the resumed schedules.
             * @example Resume contract schedules at the end of March.
             */
            memo: string;
            /**
             * @description Billing schedule to resume.
             * @example true
             */
            resumeBilling: boolean;
            /**
             * @description Revenue schedule to resume.
             * @example true
             */
            resumeRevenue: boolean;
            /**
             * @description Expense schedule to resume.
             * @example true
             */
            resumeExpense: boolean;
            /**
             * @description Type of revenue adjustment for the contract.
             * @default template
             * @example template
             * @enum {string}
             */
            revenueAdjustmentType?: "template" | "oneTime" | "distributed" | "walkForward";
        };
        "contracts-contract-actions-resume-schedules-response": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract.
             * @example /objects/contracts/contract/518
             */
            href?: string;
            /**
             * @description Current state of the contract.
             * @example inProgress
             * @enum {string}
             */
            state?: "inProgress";
        };
        /** @description A contract line defines a specific performance obligation within a contract, representing the agreed promise to deliver a product or service to the customer. */
        "objects.contracts.contract-line": {
            /**
             * @description System-assigned unique key for the contract line.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the contract line. This value is the same as `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the contract line.
             * @example /objects/contracts/contract-line/1
             */
            readonly href?: string;
            /**
             * @description RecordURL of the contract line.
             * @example https://app.intacct.com/objects/contracts/contract-line/1
             */
            readonly webURL?: string;
            /**
             * @description Indicates the current state of the contract line:
             *
             *     - `draft` - The contract line was saved as a preliminary version. A `draft` contract line iss not included in the General Ledger.
             *     - `inProgress` - The contract line was posted and is considered in effect. A contract line keeps this state unless it ends without being renewed or is canceled or revalued.
             *     - `canceled` - All contract schedules (revenue, expense, and billing) were canceled for this contract line.
             *     - ` closed` - For `evergreen` contract lines, indicates that the recurring billing period is closed. If all recurring billing periods are closed, the contract line ends.
             *     - `notRenewed` - The contract line was not renewed.
             *     - `renewalOnly` - Includes the contract line in the next renewal and does not affect the accounting for the current contract. This can also be considered a `draft` state.
             *     - `revalued` - For `projectTime` contract lines, indicates that the Revalue estimation function was used to either close out or revise the remaining un-billed balances for the project.
             *     - `completed` - All revenue for this contract line has been recognized.
             *     - `renewalForecast` - Generates [renewal forecast data](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Renewal_forecasts) for reporting only when a contract line is set to renew or is recurring and its status is `inProgress` on `renewalOnly`. This data does not affect the General Ledger.
             * @default draft
             * @example completed
             * @enum {string}
             */
            state?: "draft" | "inProgress" | "renewalOnly" | "canceled" | "notRenewed" | "completed" | "revalued" | "closed" | "renewalForecast";
            /**
             * @description The contract line number associated with the corresponding recurring period.
             * @example 1
             */
            readonly lineNumber?: string;
            /**
             * @description Specifies the recurring billing period number, which increases when a period ends. A new contract line is created with the same line number and assigned the next sequential period value.
             * @default 0
             * @example 2
             */
            readonly recurringBillingPeriod?: number | null;
            /**
             * Format: date
             * @description Specifies the contract line start date.
             * @example 2024-01-01
             */
            startDate?: string;
            /**
             * Format: date
             * @description Specifies the end date for the contract line.
             * @example 2024-04-30
             */
            endDate?: string;
            /**
             * Format: date
             * @description For canceled contract lines, specifies the cancellation date.
             * @example 2024-04-01
             */
            readonly cancelationDate?: string | null;
            /**
             * @description Indicates the type of change applied to the contract line:
             *
             *     - `newMRR` - Revenue associated with this contract line will be tracked as New MRR.
             *     - `addOnMRR` - Revenue associated with this contract line will be tracked as Add-on MRR.
             *     - `renewalUpgrade` - For renewed contracts, revenue associated with this contract line will be tracked as Renewal upgrade. Also applies when the contract line item was renewed.
             *     - `renewalDowngrade` - For renewed contracts, the contract line item is not renewed or the renewed flat/fixed amount is less than the original contract.
             *     - `churnMRR` - The contract line was part of a contract where all MRR contract lines were canceled.
             *     - `downgrade` - All contract schedules were canceled for the MRR contract line. Other MRR contract lines in the contract are still `inProgress`.
             *
             *     For `termed` contracts where the contract line item (not Kit) is eligible for tracking as monthly recurring revenue in companies subscribed to the [Software Digital Board Book](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_software_dbb).
             * @default null
             * @example newMRR
             * @enum {string|null}
             */
            changeType?: null | "newMRR" | "addOnMRR" | "renewalUpgrade" | "renewalDowngrade" | "churnMRR" | "downgrade";
            /**
             * @description Specifies a detailed description of the item.
             * @example Premium Support Package - with a dedicated Account Manager.
             */
            itemDescription?: string | null;
            /**
             * @description Provides notes or contextual information for the price calculation.
             * @example Flat/fixed Amount - 0, Billing Preference - One-time, Price Type - Tiered
             */
            readonly priceCalculationMemo?: string | null;
            /**
             * @description For `termed` contracts, indicates the current status of the delivery, either `delivered` or `undelivered`.
             * @default delivered
             * @example undelivered
             * @enum {string}
             */
            deliveryStatus?: "delivered" | "undelivered";
            /**
             * Format: date
             * @description For `termed` contracts, indicates the delivery date, when the delivery status for the contract line was set to `delivered`. If the default status for the item is `delivered`, this date is equal to the contract line start date.
             * @example 2024-04-30
             */
            readonly deliveryDate?: string;
            /**
             * Format: date
             * @description Specifies the date the contract line is posted to the General Ledger. For `termed` contracts, defaults to the contract line start date minus any bill-in-advance period. For `evergreen` contracts, defaults to the contract line start date and is not editable.
             * @example 2024-01-01
             */
            postingDate?: string;
            /**
             * @description Specifies the line type, indicates whether the contract line has a positive or negative value:
             *
             *     - `sale` - Has a positive flat/fixed amount.
             *     - `discount` - Has a positive quantity and a negative flat/fixed amount.
             *     - `debook` - Has a negative quantity and a positive rate, which results in a negative flat/fixed amount; or has a negative quantity and 0.00 flat/fixed amount.
             * @default sale
             * @example sale
             * @enum {string}
             */
            readonly lineType?: "sale" | "discount" | "debook";
            /**
             * @description Provides notes or contextual information for the contract line.
             * @example Q3 Upgrade - Additional 50 user licenses, billed monthly through the contract end date.
             */
            memo?: string | null;
            /**
             * @description Indicates the ship-to contact associated with the contract line:
             *
             *       - `contractValue` - Uses the ship-to contact from the contract header. If the header's ship-to contact is updated, all contract lines with this source value are updated to match.
             *       - `userSpecifiedValue` - Indicates a user-specified contact, these details are retained if the header's ship-to contact changes. Contract lines with this source value are not updated when the header contact changes.
             * @default contractValue
             * @example contractValue
             * @enum {string}
             */
            shipToSource?: "contractValue" | "userSpecifiedValue";
            /**
             * @description Indicates the bill-to contact associated with the contract line:
             *
             *       - `contractValue` - Uses the bill-to contact from the contract header. If the header's bill-to contact is updated, all contract lines with this source value are updated to match.
             *       - `userSpecifiedValue` - Indicates a user-specified contact, these details are retained if the header's bill-to contact changes. Contract lines with this source value  are not updated when the header contact changes.
             * @default contractValue
             * @example contractValue
             * @enum {string}
             */
            billToSource?: "contractValue" | "userSpecifiedValue";
            /**
             * @description For `termed` contracts, specifies the revenue recognition deferral status:
             *
             *       - `deferRevenueUntilItemIsDelivered` - The revenue schedule for the contract line will not start until `deliveryStatus` for this contract line is `delivered`.
             *       - `deferRevenueUntilAllItemsAreDelivered` - The revenue schedule for this contract line will not start until `deliveryStatus` for all contract lines in the contract are `delivered`.
             * @default deferRevenueUntilItemIsDelivered
             * @example deferRevenueUntilItemIsDelivered
             * @enum {string}
             */
            revenueDeferralStatus?: "deferRevenueUntilItemIsDelivered" | "deferRevenueUntilAllItemsAreDelivered";
            /**
             * @description For `evergreen` contracts, indicates whether the contract line will automatically renew after each recurring billing period ends or when indicated by the evergreen template.
             * @default false
             * @example false
             */
            isRecurring?: boolean;
            /** @description For multi-currency companies, specifies the currencies for the contract line. */
            currency?: {
                /**
                 * Format: date
                 * @description Exchange rate date for the contract line.
                 * @example 2024-01-01
                 */
                exchangeRateDate?: string | null;
                /**
                 * Format: decimal-precision-12
                 * @description Exchange rate for the contract line.
                 * @example 1.345
                 */
                exchangeRate?: string;
                /**
                 * @description Base currency for the contract.
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /**
                 * @description Transaction currency for the contract.
                 * @example USD
                 */
                readonly txnCurrency?: string;
            };
            /** @description Billing information for the contract line. */
            billing?: {
                /**
                 * @description For `termed` contracts, indicates how often the flat/fixed amount will be billed:
                 *
                 *       - `oneTime` - The flat/fixed amount should only be invoiced once, for example, a set up fee.
                 *       - `useBillingTemplate` - Use a billing template to divide the flat/fixed amount into a custom billing schedule. For example, a flat fee for training services divided into four invoices during the contract term.
                 *       - `includeWithEveryInvoice` - The flat/fixed amount should be included in every invoice, for example, a subscription or gym membership fee.
                 * @example oneTime
                 * @enum {string|null}
                 */
                amountFrequency?: null | "oneTime" | "useBillingTemplate" | "includeWithEveryInvoice";
                /** @description Billing template for the contract line, defines the schedule for invoicing the flat/fixed amount of a contract line over its term. */
                template?: {
                    /**
                     * @description Unique key for the billing template.
                     * @example 12
                     */
                    key?: string | null;
                    /**
                     * @description Identifier for the billing template.
                     * @example 12P_BeginningPeriod
                     */
                    id?: string | null;
                    /**
                     * @description Billing method for the billing template.
                     * @example predefinedPercentages
                     */
                    readonly method?: string;
                    /**
                     * @description URL endpoint for the billing template.
                     * @example /objects/contracts/billing-template/12
                     */
                    readonly href?: string;
                };
                /**
                 * contract-billing-schedule
                 * @description Billing schedule for the contract, indicates when the flat/fixed amount for a contract line is expected to be invoiced.
                 */
                readonly schedule?: {
                    /**
                     * @description Unique key for the billing schedule.
                     * @example 12
                     */
                    readonly key?: string | null;
                    /**
                     * @description Identifier for the billing schedule.
                     * @example 12
                     */
                    readonly id?: string | null;
                    /**
                     * @description Indicates the current status of the [billing schedule](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_Editing_and_Viewing_a_Billing_schedule):
                     *
                     *     - `draft` - Billing amounts for this schedule cannot be invoiced until the contract line is posted.
                     *     - `inProgress` - Billing amounts for this schedule are available to invoice.
                     *     - `onHold` - For `termed` contracts, billing amounts for this schedule cannot be invoiced until the billing schedule is resumed.
                     *     - `completed` - All billing amounts for this scheduled have been invoiced.
                     *     - `terminated` - The associated contract line was canceled.
                     *     - `estimateRevalued` - For `projectTime` contract lines, the Revalue estimation function was used to either close out or revise the remaining unbilled balances for the project.
                     *     - `renewalForecast` -  Includes renewal forecast data when building reports for the billing schedule.
                     * @example inProgress
                     * @enum {string|null}
                     */
                    readonly status?: null | "draft" | "inProgress" | "onHold" | "completed" | "terminated" | "estimateRevalued" | "renewalForecast";
                    /**
                     * @description URL endpoint for the billing schedule.
                     * @example /objects/contracts/billing-schedule/12
                     */
                    readonly href?: string;
                };
                /**
                 * @description Specifies the [billing method](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_billing_methods) for the contract line:
                 *
                 *     - `fixedPrice` - Total flat/fixed amount billed according to the selected frequency. The fixed price can also include a calculated value (fixed quantity * quantity rate).
                 *     - `quantityBased` - Billed based on the quantity used and also includes a flat/fixed amount. Quantity-based billing can be either variable or committed.
                 *     - `projectT&M` - Bills timesheet hours and other billable transactions for time-and-materials projects. The contract line has a 0.00 flat/fixed amount.
                 *     - `projectTime` - Bills timesheet hours for time-and-materials projects. Adjusts the contract line calculator to allow entry of estimated revenue factors.
                 *     - `projectMaterials` - Bills all billable transactions, except timesheets, for time-and-materials projects.
                 * @default fixedPrice
                 * @example fixedPrice
                 * @enum {string|null}
                 */
                method?: null | "fixedPrice" | "quantityBased" | "projectT&M" | "projectTime" | "projectMaterials";
                /**
                 * @description Specifies when the included units are counted and/or determines when the system billing counter resets:
                 *
                 *     - `afterEachRenewal` - The billed usage accumulates over the life of the contract and the counter is reset to zero at the end of the contract.
                 *     - `afterEachInvoice` - The billed usage does not accumulate. The billing counter is reset to zero each month.
                 *
                 *     Applies only when `method` is set to `quantityBased` and `quantityType` is set to `variable`.
                 * @default null
                 * @example afterEachRenewal
                 * @enum {string|null}
                 */
                usageQuantityReset?: null | "afterEachRenewal" | "afterEachInvoice";
                /**
                 * @description Indicates whether every usage record for a contract line is considered to be a recurring usage record.
                 *
                 *     Applies only when `method` is set to `quantityBased` and `quantityType` is set to `variable`. Does not apply to `evergreen` contract lines.
                 * @default false
                 * @example false
                 */
                isUsageQuantityRecurring?: boolean | null;
                /**
                 * @description Determines how to account for the remaining quantities when there are remaining unused quantities as of end date for the contract line:
                 *
                 *       - `billUnusedQuantity` - Creates a usage record for the remaining unused quantities and schedules it to bill on the contract line end date. When you invoice this amount, the billing schedule is completed.
                 *       - `cancelUnusedQuantity` - Multiplies the unused quantity by the rate, and credits un-billed AR and debits un-billed Deferred Revenue for the resulting amount. It terminates the remainder of the revenue schedule using the contract line end date as the cancellation date.
                 *       - `doNothing` - Takes no action. You can continue to add usage to the contract line past the contract line end date and bill against the committed quantity.
                 *
                 *     Applies only when `method` is set to `quantityBased` and `quantityType` is set to `committed`.
                 * @default null
                 * @example billUnusedQuantity
                 * @enum {string|null}
                 */
                committedQuantityEndAction?: null | "billUnusedQuantity" | "cancelUnusedQuantity" | "doNothing";
                /**
                 * @description Determines how to account for excess (overage) quantities if the contracted quantity is exceeded:
                 *
                 *       - `billOverage` - Enables you to add overage quantities and include the usage records on invoices. Overage quantities are treated as variable and invoiced at the applicable bill price tier rate.
                 *       - `doNotAllowOverage` - Prevents the addition of usage records for overage quantities. If a usage record exceeds the contracted quantity, Sage Intacct does not create the usage record.
                 *       - `doNothing` - Allows you to add overage quantities but does not include them when you generate invoices. You can report on this usage.
                 *
                 *     Applies only when `method` is set to `quantityBased` and `quantityType` is set to `committed`.
                 * @default null
                 * @example billOverage
                 * @enum {string|null}
                 */
                committedQuantityExcess?: null | "billOverage" | "doNotAllowOverage" | "doNothing";
                /**
                 * @description Specifies the quantity type for the contract line:
                 *
                 *       - `variable` - Total quantity used for the contract line can vary, and quantities may be billed at different rates. Usage quantity values of this type do not have billing or revenue schedules.
                 *       - `committed` -Total quantity and usage rate for the contract line are predefined resulting in a flat/fixed amount. When you add a usage record, multiplies the committed quantity by the rate and adds the amount to the billing schedule for invoicing.
                 *
                 *     Applies only when `method` is set to `quantityBased`.
                 * @default null
                 * @example variable
                 * @enum {string|null}
                 */
                quantityType?: null | "variable" | "committed";
                /**
                 * @description Specifies the duration (in periods) of the contract line. The duration is calculated with a precision of 10 and rounded to 2 decimal places.
                 *
                 *     When `proratePartialPeriods` is `true`, the value equals the number of full periods in the contract line term plus (number of days in partial period / number of days in month). If two partial periods exist, the second is also calculated and added to the duration. If `proratePartialPeriods` is `false`, equals the number of billing periods for the contract line.
                 *
                 *     Applies only when `amountFrequency` is set to `includeWithEveryInvoice`.
                 * @example 3
                 */
                durationInPeriods?: string;
                /**
                 * @description Indicates whether to automatically calculate prorated prices when a contract line's start and/or end date results in one or more partial periods.
                 *
                 *     Applies only when `amountFrequency` is set to `includeWithEveryInvoice`.
                 * @default false
                 * @example false
                 */
                proratePartialPeriods?: boolean;
                /**
                 * @description Indicates the frequency for recurring billing. Applies only when `amountFrequency` is set to `includeWithEveryInvoice`.
                 * @default null
                 * @example monthly
                 * @enum {string|null}
                 */
                frequency?: null | "monthly" | "quarterly" | "annually";
                /**
                 * Format: date
                 * @description Start date for the billing period.
                 * @example 2022-01-01
                 */
                startDate?: string;
                /**
                 * Format: date
                 * @description End date for the billing period.
                 * @example 2022-04-30
                 */
                endDate?: string;
                /**
                 * Format: date
                 * @description Date billing is placed on hold.
                 * @example 2022-04-01
                 */
                readonly holdDate?: string | null;
                /**
                 * Format: date
                 * @description When billing is on hold, the date billing resumes.
                 * @example 2022-04-10
                 */
                readonly resumeDate?: string | null;
                /**
                 * @description Provides notes or contextual information relating to billing.
                 * @example Cash customer
                 */
                memo?: string | null;
                /**
                 * @description Quantity used by the billing method.
                 * @example 8
                 */
                quantity?: string | null;
                /**
                 * @description Rate used by the billing method.
                 * @example 100
                 */
                rate?: string | null;
                /**
                 * @description Multiplies `flatFixedAmount` by a specified value, regardless of whether the item has a price list entry.
                 * @example 1
                 */
                multiplier?: string | null;
                /**
                 * @description Specifies a discount percentage to apply to the `flatFixedAmount`. Requires values in both `quantity` and `rate`.
                 * @default 0
                 * @example 10
                 */
                discount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Specifies the flat/fixed amount used by the billing method:
                 *
                 *       - `fixedPrice` - This amount is either the total fixed price for the line item (includes any fixed (contracted) quantity) or the amount to bill each period (when there is no contracted quantity).
                 *       - `quantityBased` - When `quantityType` is set to `variable`, this is the established amount to bill each period in addition to usage. When `quantityType` is set to `committed`, this is the committed amount that is billed based on the usage quantity for the billing period.
                 *       - `projectT&M` - This amount will be 0.00 and cannot be changed.
                 * @example 100.00
                 */
                flatFixedAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Specifies the base flat/fixed amount used by the billing method.
                 * @example 100.00
                 */
                readonly baseFlatFixedAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Specifies the total flat/fixed amount used by the billing method.
                 * @example 100.00
                 */
                readonly totalFlatFixedAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Specifies the total base flat/fixed amount used by the billing method.
                 * @example 100.00
                 */
                readonly totalBaseFlatFixedAmount?: string;
            };
            /** @description For `termed` contracts, references the expense schedule associated with the contract line. */
            expense?: {
                /**
                 * Format: date
                 * @description Specifies the date the expense schedule is placed on hold.
                 * @example 2022-04-01
                 */
                readonly holdDate?: string;
                /**
                 * Format: date
                 * @description For an expense schedule that is placed on hold, specifies the date the schedule resumes.
                 * @example 2022-04-01
                 */
                readonly resumeDate?: string;
                /**
                 * @description Provides notes or contextual information relating to the expense schedule associated with the contract line.
                 * @example Cash customer
                 */
                memo?: string | null;
            };
            /** @description References the revenue schedule associated with the contract line. */
            revenue?: {
                /**
                 * Revenue Type
                 * @description Revenue journal (J1) associated with revenue schedule 1.
                 */
                journal1?: {
                    /** @description Reference to the General Ledger (GL) journal associated with revenue schedule 1. */
                    readonly glJournal?: {
                        /**
                         * @description Unique key for the GL journal.
                         * @example 4
                         */
                        readonly key?: string | null;
                        /**
                         * @description Identifier for the GL journal.
                         * @example LEGACYREVREC
                         */
                        readonly id?: string | null;
                        /**
                         * @description Name of the GL journal.
                         * @example Revenue Journal 1
                         */
                        readonly name?: string;
                        /**
                         * @description URL endpoint for the GL journal.
                         * @example /objects/general-ledger/journal/4
                         */
                        readonly href?: string;
                    };
                    /** @description Reference to the revenue template that defines the revenue recognition schedule for the `flatFixedAmount` associated with a contract line. */
                    revenueTemplate?: {
                        /**
                         * @description Unique key for the revenue template.
                         * @example 13
                         */
                        key?: string | null;
                        /**
                         * @description Identifier for the revenue template.
                         * @example STRAIGHTLINE_MANUAL
                         */
                        id?: string;
                        /**
                         * @description Specifies the [recognition method](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Recognition_methods) used to calculate and recognize revenue over the contract term:
                         *
                         *     - `straightLine` - Allocates revenue evenly over time, calculating partial amounts first before distributing the remaining revenue evenly across the rest of the schedule.
                         *     - `dailyRate` - Revenue is allocated using a daily recognition rate.
                         *     - `quantityBased` - Allocates revenue when a usage record is associated with the contract line.
                         *     - `predefinedPercentages` - Revenue is allocated using a table that assigns a specific percentage of the flat/fixed amount to each recognition period.
                         *     - `projectPercentComplete` - Recognizes revenue proportionally based on project progress, calculated from approved hours compared to scheduled hours or a specified progress percentage.
                         *     - `taskPercentComplete` - Revenue is recognized based on each task's completion percentage, calculated from approved hours compared to scheduled hours or a specified progress percentage.
                         *     - `recognizeRevenueOnInvoice` - Revenue is recognized in full when the contract line is invoiced, with no deferral, revenue schedule or separate revenue posting required.
                         * @example straightLine
                         * @enum {string|null}
                         */
                        readonly recognitionMethod?: null | "straightLine" | "dailyRate" | "quantityBased" | "predefinedPercentages" | "projectPercentComplete" | "taskPercentComplete" | "recognizeRevenueOnInvoice";
                        /** @example /objects/contracts/revenue-template/13 */
                        readonly href?: string;
                    };
                    /**
                     * contract
                     * @description References the primary revenue schedule for the contract line, indicates how and when revenue is recognized.
                     */
                    readonly revenueSchedule?: {
                        /**
                         * @description Unique key for revenue schedule.
                         * @example 16
                         */
                        readonly key?: string | null;
                        /**
                         * @description Identifier for revenue schedule.
                         * @example 16
                         */
                        readonly id?: string | null;
                        status?: components["schemas"]["contract-revenue-schedule-status-ref"] & (string | null);
                        /**
                         * @description URL endpoint for the revenue schedule.
                         * @example /objects/contracts/revenue-schedule/16
                         */
                        readonly href?: string;
                    };
                    /**
                     * Format: date
                     * @description Specifies the start date for revenue schedule.
                     * @example 2022-04-01
                     */
                    startDate?: string | null;
                    /**
                     * Format: date
                     * @description Specifies the end date for revenue schedule.
                     * @example 2022-04-30
                     */
                    endDate?: string | null;
                };
                /**
                 * Revenue Type
                 * @description Revenue journal (J2) associated with revenue schedule 2.
                 */
                journal2?: {
                    /** @description Reference to the General Ledger (GL) journal associated with revenue schedule 2. */
                    readonly glJournal?: {
                        /**
                         * @description Unique key for the GL journal.
                         * @example 3
                         */
                        readonly key?: string | null;
                        /**
                         * @description Identifier for the GL journal.
                         * @example ASC606REVREC
                         */
                        readonly id?: string | null;
                        /**
                         * @description Name of the GL journal.
                         * @example Revenue Journal 2
                         */
                        readonly name?: string;
                        /**
                         * @description URL endpoint for the GL journal.
                         * @example /objects/general-ledger/journal/3
                         */
                        readonly href?: string;
                    };
                    /** @description Reference to the revenue template that defines the revenue recognition schedule for the `flatFixedAmount`. */
                    revenueTemplate?: {
                        /**
                         * @description Unique key for the revenue template.
                         * @example 15
                         */
                        key?: string | null;
                        /**
                         * @description Identifier for the revenue template.
                         * @example STRAIGHTLINE_MANUAL
                         */
                        id?: string | null;
                        /**
                         * @description Specifies the [recognition method](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Recognition_methods) used to calculate and recognize revenue over the contract term:
                         *
                         *     - `straightLine` - Allocates revenue evenly over time, calculating partial amounts first before distributing the remaining revenue evenly across the rest of the schedule.
                         *     - `dailyRate` - Revenue is allocated using a daily recognition rate.
                         *     - `quantityBased` - Allocates revenue when a usage record is associated with the contract line.
                         *     - `predefinedPercentages` - Revenue is allocated using a table that assigns a specific percentage of the flat/fixed amount to each recognition period.
                         *     - `projectPercentComplete` - Recognizes revenue proportionally based on project progress, calculated from approved hours compared to scheduled hours or a specified progress percentage.
                         *     - `taskPercentComplete` - Revenue is recognized based on each task's completion percentage, calculated from approved hours compared to scheduled hours or a specified progress percentage.
                         *     - `recognizeRevenueOnInvoice` - Revenue is recognized in full when the contract line is invoiced, with no deferral, revenue schedule or separate revenue posting required.
                         * @example straightLine
                         * @enum {string|null}
                         */
                        readonly recognitionMethod?: null | "straightLine" | "dailyRate" | "quantityBased" | "predefinedPercentages" | "projectPercentComplete" | "taskPercentComplete" | "recognizeRevenueOnInvoice";
                        /** @example /objects/contracts/revenue-template/15 */
                        readonly href?: string;
                    };
                    /**
                     * contract
                     * @description References the secondary revenue schedule for the contract line, indicates how and when revenue is recognized.
                     */
                    readonly revenueSchedule?: {
                        /**
                         * @description Unique key for revenue schedule.
                         * @example 16
                         */
                        readonly key?: string | null;
                        /**
                         * @description Identifier for revenue schedule.
                         * @example 16
                         */
                        readonly id?: string | null;
                        status?: components["schemas"]["contract-revenue-schedule-status-ref"] & (string | null);
                        /**
                         * @description URL endpoint for the revenue schedule.
                         * @example /objects/contracts/revenue-schedule/16
                         */
                        readonly href?: string;
                    };
                    /**
                     * Format: date
                     * @description Specifies the start date for revenue schedule.
                     * @example 2018-04-01
                     */
                    startDate?: string | null;
                    /**
                     * Format: date
                     * @description Specifies the end date for revenue schedule.
                     * @example 2022-04-30
                     */
                    endDate?: string | null;
                };
                /**
                 * @description Specifies the total quantity for the revenue schedule.
                 * @example 30
                 */
                totalQuantity?: string | null;
                /**
                 * Format: date
                 * @description Specifies the date the revenue schedule resumes.
                 * @example 2022-04-10
                 */
                readonly resumeDate?: string;
                /**
                 * Format: date
                 * @description Specifies the date the revenue schedule is placed on hold.
                 * @example 2022-04-02
                 */
                readonly holdDate?: string;
                /**
                 * @description Provides notes or contextual information relating to the revenue schedule.
                 * @example Cash customer
                 */
                memo?: string | null;
            };
            /** @description For `termed` contracts, specifies renewal details for the contract line. */
            renewal?: {
                /**
                 * @description Indicates whether the contract line is a renewal.
                 * @default false
                 * @example false
                 */
                renew?: boolean;
                /** @description When `renew` is `true`, specifies the template used to generate renewal contracts. */
                billingTemplate?: {
                    /**
                     * @description Unique key for the renewal billing template.
                     * @example 17
                     */
                    key?: string;
                    /**
                     * @description Identifier for the renewal billing template.
                     * @example 12P_BeginningPeriod
                     */
                    id?: string;
                    /**
                     * @description URL endpoint for the renewal billing template.
                     * @example /objects/contracts/billing-template/17
                     */
                    readonly href?: string;
                };
            };
            historical?: {
                /**
                 * @description Whether this is a historical line
                 * @default false
                 * @example true
                 */
                isHistorical?: boolean;
                /**
                 * Format: decimal-precision-2
                 * @description Historical billed amount
                 * @example 500.00
                 */
                billedAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Historical recognized amount
                 * @example 500.00
                 */
                recognizedAmount?: string;
                /**
                 * Format: date
                 * @description Represents the day before go-live. This cutoff date is used to separate historical activity from post-go-live activity, ensuring balances are recorded accurately in the system.
                 * @example 2024-12-31
                 */
                asOfDate?: string;
                /** historicalOffsetGlAccount */
                offsetGLAccount?: {
                    /**
                     * @description Historical Offset GL Account Key
                     * @example 9
                     */
                    key?: string;
                    /**
                     * @description Historical Offset GL Account No
                     * @example 1000
                     */
                    id?: string;
                    /**
                     * @description Historical Offset GL Account Title
                     * @example Bank of America A/c.
                     */
                    readonly name?: string;
                    /**
                     * @description URL endpoint of GL account
                     * @example /objects/general-ledger/account/9
                     */
                    readonly href?: string;
                };
            };
            /** @description Specifies the contact details associated with the contract line. */
            readonly contacts?: {
                /**
                 * shipTo
                 * @description Specifies the shipping contact details associated with the contract line. If not provided, the `shipTo` contact defined in the customer record is used.
                 */
                readonly shipTo?: {
                    /**
                     * @description Unique key for the shipping contact.
                     * @example 1472
                     */
                    readonly key?: string;
                    /**
                     * @description Identifier for the shipping contact.
                     * @example Gruppen (Europe) Services ABCUS-RT-0010
                     */
                    readonly id?: string;
                    /**
                     * @description URL endpoint for the shipping contact.
                     * @example /objects/company-config/contact/1472
                     */
                    readonly href?: string;
                };
                /**
                 * billTo
                 * @description Specifies the billing contact details associated with the contract. If not provided, the `billTo` contact defined in the customer record is used.
                 */
                readonly billTo?: {
                    /**
                     * @description Unique key for the billing contact.
                     * @example 1472
                     */
                    readonly key?: string;
                    /**
                     * @description Identifier for the billing contact.
                     * @example Gruppen (Europe) Services ABCUS-RT-0010
                     */
                    readonly id?: string;
                    /**
                     * @description URL endpoint of the billing contact.
                     * @example /objects/company-config/contact/1472
                     */
                    readonly href?: string;
                };
            };
            /** @description Reference to the owning contract for the contract line. */
            contract?: {
                /**
                 * @description Unique key for the contract.
                 * @example 249
                 */
                key?: string;
                /**
                 * @description Identifier for the contract.
                 * @example CON-0045
                 */
                id?: string;
                /**
                 * Format: date
                 * @description End date for the contract. This date determines the timing of the renewal process and is required when `contractTermType` is set to `termed`.
                 * @example 2022-04-30
                 */
                readonly endDate?: string;
                /**
                 * @description Specifies the type of duration for the contract, either `termed` or `evergreen`:
                 *
                 *       - `termed` - A fixed-duration contract that typically uses traditional payment terms, such as Net 30.
                 *       - `evergreen` - A perpetual contract with no defined end date that continues until explicitly canceled.
                 * @example termed
                 * @enum {string}
                 */
                readonly termType?: "termed" | "evergreen";
                /**
                 * @description Indicates the current state of the contract:
                 *
                 *     - `draft` - The contract was saved as a preliminary version. A `draft` contract has no effect on the General Ledger.
                 *     - `inProgress` - The contract was posted and is considered in effect. A contract keeps this state until it is renewed, ends without being renewed, or is canceled.
                 *     - `canceled` - All contract schedules (revenue, expense, and billing) were canceled for all contract lines associated with this contract.
                 *     - `notRenewed` - For `termed` contracts, the contract completed its term, but it was not renewed.
                 *     - `renewed` - For `termed` contracts, The contract was renewed.
                 * @example inProgress
                 * @enum {string}
                 */
                readonly state?: "inProgress" | "renewed" | "canceled" | "notRenewed" | "draft";
                /**
                 * @description Name of the contract.
                 * @example Nexora Solutions Inc - Cloud Platform Licensing Agreement
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the contract.
                 * @example /objects/contracts/contract/249
                 */
                readonly href?: string;
            };
            /** @description Reference to an item associated with the contract line. Items are goods, services, or kits that you purchase from vendors or sell to customers. */
            item?: {
                /**
                 * @description Unique key for the item.
                 * @example 13
                 */
                key?: string;
                /**
                 * @description Identifier for the item.
                 * @example API3.0
                 */
                id?: string;
                /**
                 * @description Name of the item.
                 * @example Platform pack
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/13
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description When `isRecurring` is `true`, specifies the date Sage Intacct creates the next recurring billing period. This is the `inProgress` contract line end date plus or minus the number of days specified in the selected evergreen template.
             * @example 2022-03-30
             */
            readonly renewalTriggerDate?: string | null;
            /**
             * Format: date
             * @description Specifies the renewal date for the contract line.
             * @example 2022-03-30
             */
            readonly lineRenewalDate?: string | null;
            /** @description Custom renewal pricing overrides for the contract line. */
            customRenewalAmounts?: {
                /**
                 * @description Record number for the renewal override.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Renewal number for the override.
                 * @example 2
                 */
                readonly renewalNumber?: number;
                /**
                 * @description Override amount for the renewal.
                 * @example 100.00
                 */
                overrideAmount?: string | null;
            }[];
            /** @description References the parent contract line associated with this contract line. */
            readonly parent?: {
                /**
                 * @description Unique key for the parent contract line.
                 * @example 60
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the parent contract line.
                 * @example 60
                 */
                readonly id?: string;
                /**
                 * @description Line number for the parent contract line.
                 * @example 2
                 */
                readonly lineNumber?: string | null;
                /**
                 * @description URL endpoint for the parent contract line.
                 * @example /objects/contracts/contract-line/60
                 */
                readonly href?: string;
            };
            dimensions?: components["schemas"]["contract-dimension-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-contract-lineRequiredProperties": Record<string, never>;
        /** @description Post request for a contract line. */
        "contracts-contract-line-actions-post-request": {
            /**
             * @description System-assigned unique key for the contract line.
             * @example 518
             */
            key: string;
            /**
             * Format: date
             * @description Specifies the General Ledger posting date for the contract line. The contract line will be posted with this date.
             * @example 2025-01-01
             */
            glPostingDate?: string;
            /**
             * @description Provides additional comments or notes related to the post.
             * @example Post to the General Ledger.
             */
            postMemo?: string;
        };
        /** @description Post response for a contract line. */
        "contracts-contract-line-actions-post-response": {
            /**
             * @description System-assigned unique key for the contract line.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract line.
             * @example /objects/contracts/contract-line/518
             */
            href?: string;
            /**
             * @description Indicates the state of the contract line once posted.
             * @example inProgress
             * @enum {string}
             */
            state?: "inProgress";
        };
        /** @description Deliver request for a contract line. */
        "contracts-contract-line-actions-deliver-request": {
            /**
             * @description System-assigned unique key for the contract line.
             * @example 518
             */
            key: string;
            /**
             * Format: date
             * @description Indicates the delivery date for the contract line.
             */
            deliveryDate: string;
        };
        /** @description Deliver response for a contract line. */
        "contracts-contract-line-actions-deliver-response": {
            /**
             * @description System-assigned unique key for the contract line.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract line.
             * @example /objects/contracts/contract-line/518
             */
            href?: string;
            /**
             * @description Indicates the state of the contract line once delivered.
             * @example delivered
             * @enum {string}
             */
            state?: "delivered";
        };
        /** @description Re-estimate request for a contract line. */
        "contracts-contract-line-actions-reestimate-request": {
            /**
             * @description System-assigned unique key for the contract line.
             * @example 518
             */
            key: string;
            /**
             * Format: date
             * @description Specifies the date the contract line was re-estimated.
             * @example 2025-04-01
             */
            revaluedDate?: string;
            /**
             * @description Indicates the quantity used for the re-estimation of the contract line based on the billing method defined for the contract line.
             * @example 8
             */
            quantity?: string | null;
            /**
             * @description Specifies the rate used for the re-estimation of the contract line based on the billing method defined for the contract line.
             * @example 100
             */
            rate?: string | null;
            /**
             * @description Specifies the flat/fixed amount used for the re-estimation of the contract line based on the billing method defined for the contract line.
             * @example 100
             */
            flatFixedAmount?: string;
        };
        /** @description Re-estimate response for a contract line. */
        "contracts-contract-line-actions-reestimate-response": {
            /**
             * @description System-assigned unique key for the contract line.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract line.
             * @example /objects/contracts/contract-line/518
             */
            href?: string;
            /**
             * @description Indicates the state of the contract line once re-estimated.
             * @example revalued
             * @enum {string}
             */
            state?: "revalued";
        };
        /** @description Hold schedules request for a contract line. */
        "contracts-contract-line-actions-hold-schedules-request": {
            /**
             * @description System-assigned unique key for the contract line.
             * @example 2
             */
            key: string;
            /**
             * Format: date
             * @description Specifies the date on which the contract schedules are held. Transactions on or after this date will be included in the held schedule.
             * @example 2025-01-01
             */
            asOfDate: string;
            /**
             * @description Provides additional comments or notes related to the hold schedules action.
             * @example Hold contract schedules for March.
             */
            memo: string;
            /**
             * @description Specifies whether the billing schedule is to be held.
             * @example true
             */
            holdBilling: boolean;
            /**
             * @description Indicates whether the revenue schedule is to be held.
             * @example false
             */
            holdRevenue: boolean;
            /**
             * @description Indicates whether the expense schedule is to be held.
             * @example true
             */
            holdExpense: boolean;
        };
        /** @description Hold schedules response for a contract line. */
        "contracts-contract-line-actions-hold-schedules-response": {
            /**
             * @description System-assigned unique key for the contract line.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract line.
             * @example /objects/contracts/contract-line/518
             */
            href?: string;
            /**
             * @description Indicates the state of the contract line once the schedules are held.
             * @example inProgress
             * @enum {string}
             */
            state?: "inProgress";
        };
        /** @description Resume schedules request for a contract line. */
        "contracts-contract-line-actions-resume-schedules-request": {
            /**
             * @description System-assigned unique key for the contract line.
             * @example 2
             */
            key: string;
            /**
             * Format: date
             * @description Specifies the date on which the contract schedules are resumed. Transactions on or after this date will be included in the resumed schedule.
             * @example 2025-01-01
             */
            asOfDate: string;
            /**
             * @description Provides additional comments or notes related to the resume schedules action.
             * @example Resume contract schedules at the end of March.
             */
            memo: string;
            /**
             * @description Specifies whether the billing schedule is to be resumed.
             * @example true
             */
            resumeBilling: boolean;
            /**
             * @description Indicates whether the revenue schedule is to be resumed.
             * @example true
             */
            resumeRevenue: boolean;
            /**
             * @description Specifies whether the expense schedule is to be resumed.
             * @example true
             */
            resumeExpense: boolean;
            /**
             * @description Indicates the type of revenue adjustment for the contract line.
             * @default template
             * @example template
             * @enum {string}
             */
            revenueAdjustmentType?: "template" | "oneTime" | "distributed" | "walkForward";
        };
        /** @description Resume schedules response for a contract line. */
        "contracts-contract-line-actions-resume-schedules-response": {
            /**
             * @description System-assigned unique key for the contract line.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract line.
             * @example /objects/contracts/contract-line/518
             */
            href?: string;
            /**
             * @description Indicates the state of the contract line once the schedules are resumed.
             * @example inProgress
             * @enum {string}
             */
            state?: "inProgress";
        };
        /** @description Revalue request for a contract line. */
        "contracts-contract-line-actions-revalue-request": {
            /**
             * @description System-assigned unique key for the contract line.
             * @example 518
             */
            key: string;
            /**
             * Format: date
             * @description Specifies the date the contract line was revalued.
             */
            revaluedDate?: string;
        };
        /** @description Revalue response for a contract line. */
        "contracts-contract-line-actions-revalue-response": {
            /**
             * @description System-assigned unique key for the contract line.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract line.
             * @example /objects/contracts/contract-line/518
             */
            href?: string;
            /**
             * @description Indicates the state of the contract line once revalued.
             * @example revalued
             * @enum {string}
             */
            state?: "revalued";
        };
        /** @description Uncancel request for a contract line. */
        "contracts-contract-line-actions-uncancel-request": {
            /**
             * @description System-assigned unique key for the contract line.
             * @example 518
             */
            key: string;
        };
        /** @description Uncancel response for a contract line. */
        "contracts-contract-line-actions-uncancel-response": {
            /**
             * @description System-assigned unique key for the contract line.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract line.
             * @example /objects/contracts/contract-line/518
             */
            href?: string;
            /**
             * @description Indicates the state of the contract line once uncanceled.
             * @example inProgress
             * @enum {string}
             */
            state?: "inProgress";
        };
        /** @description A contract transaction history represents a record of a financial transaction related to a contract, such as billing, revenue recognition, or adjustments. */
        "objects.contracts.contract-txn-history": {
            /**
             * @description System-assigned unique key for the transaction history.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the contract transaction history.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the contract transaction history.
             * @example /objects/contracts/contract-txn-history/23
             */
            readonly href?: string;
            /** @description References the contract expense associated with this transaction history. */
            readonly contractExpense?: {
                /**
                 * @description URL endpoint for the contract expense.
                 * @example /objects/contracts/expense/1
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the contract expense.
                 * @example 1
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the expense
                 * @example 1
                 */
                readonly id?: string | null;
            };
            /**
             * @description Indicates whether the transaction posting is related to revenue or expense. Revenue postings are either deferred revenue, sales revenue, or accounts receivable, whereas expense postings are either deferred expense, expense accrual, or recognized expense.
             * @example accountsReceivable
             * @enum {string}
             */
            postingType?: "deferredRevenue" | "salesRevenue" | "accountsReceivable" | "deferredExpense" | "expenseAccrual" | "recognizedExpense";
            /**
             * @description Indicates the type of balance for the associated transaction.
             * @example expense
             * @enum {string}
             */
            balanceType?: "accountsReceivable" | "revenue" | "expense";
            /**
             * @description Indicates which journal the associated transaction is posted to.
             * @example journal1
             * @enum {string}
             */
            journalType?: "journal1" | "journal2";
            /**
             * Format: decimal-precision-2
             * @description Specifies the amount of the transaction relating to this transaction history.
             * @example 50.00
             */
            amount?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies the base amount of the transaction relating to this transaction history. Applies only to multi-currency companies.
             * @example 50.00
             */
            baseAmount?: string;
            /**
             * Format: decimal-precision-12
             * @description Specifies the exchange rate of the transaction relating to this transaction history. Applies only to multi-currency companies.
             * @example 1.02
             */
            exchangeRate?: string;
            /**
             * @description Indicates the type of the transaction for this transaction history.
             * @default debit
             * @example credit
             * @enum {string}
             */
            txnType?: "debit" | "credit";
            /**
             * Format: date
             * @description Specifies the transaction date for this transaction history.
             * @example 2026-01-01
             */
            txnDate?: string;
            /**
             * @description Indicates whether the related transaction is classified as an expense or revenue. Revenue classifications are either unbilled, billed and paid, whereas expense classifications are either recognized or deferred.
             * @example billed
             * @enum {string}
             */
            classification?: "unbilled" | "billed" | "paid" | "deferred" | "recognized";
            /** @description References the subledger record line associated with this transaction history. */
            readonly paymentEntry?: {
                /**
                 * @description URL endpoint for the subledger record line.
                 * @example /objects/accounts-payable/subledger-record-line/1
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the subledger record line.
                 * @example 1
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the subledger record line.
                 * @example 1
                 */
                readonly id?: string | null;
            };
            /**
             * @description Indicates the type of event that triggered the associated transaction.
             * @example onPayment
             * @enum {string}
             */
            eventType?: "onCreate" | "onInvoice" | "onRecognition" | "onPayment" | "onPaymentReversal" | "onMEA" | "onKit" | "onExpense" | "onCancel" | "dataAdj";
            /**
             * @description Indicates whether the associated transaction is related to a flat/fixed contract, usage-based contract, time-based contract, or adjustment.
             * @example usage
             * @enum {string}
             */
            resolveType?: "flatFixed" | "usage" | "time" | "adjust";
            /**
             * @description Indicates whether the transaction is historical.
             * @default false
             * @example true
             */
            isHistorical?: boolean;
            /**
             * @description Data version.
             * @example 1
             */
            dataVersion?: string;
            /**
             * @description Indicates whether the transaction has been redone. If a transaction is posted before the current date, any transactions posted after that date need to be redone. This field indicates whether that process has completed.
             * @default false
             * @example false
             */
            isRedone?: boolean;
            /** @description References the Accounts Receivable (AR) adjustment associated with this transaction history. */
            readonly arAdjustment?: {
                /**
                 * @description URL endpoint for the AR adjustment.
                 * @example /objects/accounts-receivable/adjustment/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the AR adjustment.
                 * @example 15
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the AR adjustment.
                 * @example 15
                 */
                readonly id?: string | null;
            };
            /** @description References the contract associated with this transaction history. */
            contract?: {
                /**
                 * @description URL endpoint for the contract.
                 * @example /objects/contracts/contract/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the contract.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the contract.
                 * @example 1
                 */
                id?: string;
            };
            /** @description References the contract billing schedule line associated with this transaction history. */
            contractBillingScheduleLine?: {
                /**
                 * @description URL endpoint for the contract billing schedule line.
                 * @example /objects/contracts/billing-schedule-line/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the contract billing schedule line.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the contract billing schedule line.
                 * @example 1
                 */
                id?: string | null;
            };
            /** @description References the contract line associated with this transaction history. */
            contractLine?: {
                /**
                 * @description URL endpoint for the contract line.
                 * @example /objects/contracts/contract-line/1
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the contract line.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the contract line.
                 * @example 1
                 */
                id?: string | null;
            };
            /** @description References the contract expense schedule line associated with this transaction history. */
            contractExpenseScheduleLine?: {
                /**
                 * @description URL endpoint for the contract expense schedule line.
                 * @example /objects/contracts/expense-schedule-line/145
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the contract expense schedule line.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the contract expense schedule line.
                 * @example 1
                 */
                id?: string | null;
            };
            /** @description References the contract revenue schedule line associated with this transaction history. */
            contractRevenueScheduleLine?: {
                /**
                 * @description URL endpoint for the contract revenue schedule line.
                 * @example /objects/contracts/revenue-schedule-line/145
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the contract revenue schedule line.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the contract revenue schedule line.
                 * @example 1
                 */
                id?: string | null;
            };
            /** @description References the journal entry associated with this transaction history. */
            journalEntry?: {
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/general-ledger/journal-entry/23
                 */
                readonly href?: string;
                /**
                 * @description Unique key for the journal entry.
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Identifier for the journal entry.
                 * @example 1
                 */
                id?: string | null;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Contract compliance checklist tasks are the sign-off details for tasks within a specific compliance checklist, providing an audit trail of completions. */
        "objects.contracts.compliance-checklist-task": {
            /**
             * @description System-assigned unique key for the compliance checklist task.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the compliance checklist task.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the compliance checklist task.
             * @example /objects/contracts/compliance-checklist-task/23
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Specifies the date when the compliance checklist task was completed.
             * @example 2026-03-31
             */
            completionDate?: string | null;
            /**
             * @description Indicates whether the compliance checklist task has been signed off as completed.
             * @default false
             * @example false
             */
            isSignedOff?: boolean;
            /**
             * @description Provides a brief descriptive comment about the completion of the compliance checklist task, such as observations or notes from the reviewer.
             * @example Completed monthly review of vendor agreements for ASC 606 compliance with no issues.
             */
            comment?: string | null;
            /**
             * @description Specifies the contract key associated with the compliance checklist task.
             * @example 1
             */
            contractKey?: number;
            /** @description References the contract compliance task associated with this checklist task. */
            contractComplianceTask?: {
                /**
                 * @description Unique key for the compliance task.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the compliance task.
                 * @example 23
                 */
                id?: string;
                /**
                 * @description URL endpoint for the compliance task.
                 * @example /objects/contracts/compliance-task/23
                 */
                readonly href?: string;
                /**
                 * @description Name of the compliance task.
                 * @example Monthly compliance review - vendor agreements - ASC 606 - February 2026
                 */
                readonly name?: string;
                /**
                 * @description Description of the compliance task.
                 * @example Review of vendor agreements for monthly compliance as detailed in contract ASC 606.
                 */
                readonly description?: string | null;
                /**
                 * @description Specifies the numerical position of the compliance task in the checklist.
                 * @example 1
                 */
                readonly taskNumber?: number | null;
                /** @description Indicates the current status of the compliance task. */
                readonly status?: components["schemas"]["status"];
            };
            /** @description References the employee who completed the compliance checklist task. */
            completedBy?: {
                /**
                 * @description Unique key for the employee.
                 * @example 2
                 */
                key?: string | null;
                /**
                 * @description Identifier for the employee.
                 * @example rkincaid
                 */
                id?: string | null;
                /**
                 * @description URL endpoint for the employee.
                 * @example /objects/company-config/employee/2
                 */
                readonly href?: string;
                primaryContact?: {
                    /**
                     * @description Specifies the last name of the employee's primary contact.
                     * @example Smith
                     */
                    lastName?: string | null;
                };
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-compliance-checklist-taskRequiredProperties": {
            contractComplianceTask: Record<string, never>;
        };
        /** @description Contract compliance notes represent observations and comments associated with a compliance checklist, providing additional context and commentary. */
        "objects.contracts.compliance-note": {
            /**
             * @description System-assigned unique key for the contract note.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the compliance note.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the compliance note.
             * @example /objects/contracts/compliance-note/23
             */
            readonly href?: string;
            /**
             * @description Provides additional contextual information for a compliance note.
             * @example Completed monthly compliance review with no issues - ASC 606 - February 2026.
             */
            note?: string;
            /**
             * @description Indicates whether the note is visible to all users with access to the contract or only to the creator.
             * @default false
             * @example true
             */
            isPublic?: boolean;
            /**
             * @description Specifies the contract key associated with the compliance note.
             * @example 1
             */
            contractKey?: number;
            /** @description References the user who last updated the compliance note. */
            readonly lastUpdatedBy?: {
                /**
                 * @description Identifier for the user.
                 * @example john.smith
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the user.
                 * @example 2
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the user.
                 * @example /objects/company-config/user/2
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-compliance-noteRequiredProperties": Record<string, never>;
        /** @description Compliance tasks are reusable task templates that define what needs to be checked or completed as part of a compliance checklist. */
        "objects.contracts.compliance-task": {
            /**
             * @description System-assigned unique key for the compliance task.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the compliance task.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the compliance task.
             * @example /objects/contracts/compliance-task/1
             */
            readonly href?: string;
            /**
             * @description Name of the compliance task.
             * @example Monthly compliance review - vendor agreements - ASC 606 - February 2026
             */
            name?: string;
            /**
             * @description Provides a brief contextual description of the compliance task.
             * @example Review of vendor agreements for monthly compliance as detailed in contract ASC 606.
             */
            description?: string | null;
            /**
             * @description Specifies the numerical position of the task in the checklist. If `null`, Sage Intacct assigns the next available number. Updating the task number causes all remaining tasks in the checklist to be re-sequenced.
             * @example 1
             */
            taskNumber?: number | null;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-compliance-taskRequiredProperties": Record<string, never>;
        "contracts-billing-schedule": {
            /**
             * @description System-assigned unique key for the billing schedule.
             * @example 145
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the billing schedule. This is the same as `key` for this object.
             * @example 145
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the contract billing schedule.
             * @example /objects/contracts/billing-schedule/145
             */
            readonly href?: string;
            /**
             * @description Indicates the current status of the billing schedule.
             * @default inProgress
             * @example inProgress
             * @enum {string}
             */
            readonly status?: "draft" | "inProgress" | "onHold" | "completed" | "terminated" | "estimateRevalued";
            /** @description References an array of lines associated with this billing schedule. */
            lines?: components["schemas"]["objects.contracts.billing-schedule-line"][];
            /**
             * Format: date
             * @description Specifies the date on which the revaluation estimation function was executed for the project time contract line.
             * @example 2025-03-31
             */
            readonly estimateRevaluationDate?: string | null;
        } & {
            /**
             * @description Schedule system-assigned key.
             * @example 145
             */
            readonly key?: string;
            /**
             * @description Schedule unique identifier.
             * @example 145
             */
            readonly id?: string;
            /**
             * Format: date
             * @description Schedule cancellation date.
             * @example 2022-08-13
             */
            readonly cancellationDate?: string | null;
            contract?: components["schemas"]["contract-ref"];
            contractLine?: components["schemas"]["contract-schedule-contract-line-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Line items in a contract billing schedule represent a single billing for a contract line. */
        "objects.contracts.billing-schedule-line": {
            /**
             * @description System-assigned unique key for the billing schedule line.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the billing schedule line. This is the same as `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the billing schedule line.
             * @example /objects/contracts/billing-schedule-line/145
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Specifies the date the scheduled amount is expected to be invoiced.
             * @example 2025-04-30
             */
            scheduledBillingDate?: string;
            /**
             * @description Indicates whether the scheduled amount has been invoiced.
             * @example false
             */
            readonly billed?: boolean;
            /**
             * Format: date
             * @description Specifies the actual date the invoice was posted to the General Ledger if the scheduled amount was invoiced.
             * @example 2025-04-30
             */
            readonly actualBillingDate?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Specifies the actual amount expressed in the base currency for the company. Applies only to multi-currency companies.
             * @example 137.52
             */
            actualBaseAmount?: string | null;
            /**
             * Format: decimal-precision-12
             * @description Specifies the actual exchange rate used by the invoice when posted.
             * @example 1.345
             */
            actualExchangeRate?: string | null;
            /**
             * @description Specifies the total source hours for the project or task. Used with `approvedHours` to determine the percent complete calculation for the corresponding billing schedule entry. Applies only when `method` is set to `projectPercentComplete` or `taskPercentComplete` in the `contracts.billing-template` object.
             * @example 118
             */
            sourceHours?: string | null;
            /**
             * @description Specifies the total approved hours for the project or task.
             *
             *       * For percent complete billing templates, the total hours from all approved hours associated with the project or task. Used with `sourceHours` to determine the percent complete calculation for the corresponding billing schedule entry.
             *       * For project time contract lines, the total number of approved hours combined for the project, project/item, or project/task that were billed in the corresponding invoice.
             * @example 16
             */
            approvedHours?: string | null;
            /**
             * @description Indicates the document number of the applicable invoice.
             * @example Contract Invoice-CONIN-0100
             */
            readonly documentId?: string | null;
            /**
             * @description Indicates the schedule line computation memo.  This is a system generated memo to explain how the amount was calculated. Dates displayed in this field use YYYY/MM/DD format.
             * @example MEA amount 1000, adjustment amount 333.32. Total prorated amount after effective date 03/01/2025 is 333.32, before effective date is 0.
             */
            readonly computationMemo?: string | null;
            /**
             * Format: date
             * @description Specifies the beginning of the time frame during which business services are provided or consumed for this billing entry.
             * @example 2025-04-01
             */
            servicePeriodStartDate?: string | null;
            /**
             * Format: date
             * @description Specifies the end of the time frame during which business services are provided or consumed for this billing entry.
             * @example 2025-04-30
             */
            servicePeriodEndDate?: string | null;
            /** @description References the linked billing schedule line, used for linking a negative discount line to the original line. */
            readonly linkedBillingScheduleLine?: {
                /**
                 * @description Unique key for the linked billing schedule line.
                 * @example 145
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the linked billing schedule line.
                 * @example 145
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the linked billing schedule line.
                 * @example /objects/contracts/billing-schedule-line/145
                 */
                readonly href?: string;
            };
            contractBillingSchedule?: components["schemas"]["contract-billing-schedule-ref"];
            contractUsage?: components["schemas"]["contract-usage-ref"];
            /**
             * @description Indicates the scheduled operation key for the associated offline operation.
             * @example 57665
             */
            readonly scheduledOperationKey?: string | null;
            /**
             * @description Specifies the current state of the billing schedule line.
             *
             *       * `open` - Scheduled amount has not been invoiced.
             *       * `onHold` - Scheduled amount is on hold and cannot be invoiced. Applies only to termed contracts.
             *       * `posted` - Scheduled amount was invoiced.
             *       * `terminated` - Scheduled amount was canceled.
             * @example posted
             * @enum {string}
             */
            readonly state?: "open" | "terminated" | "posted" | "onHold";
            /**
             * Format: decimal-precision-2
             * @description Specifies the scheduled amount to be billed.
             * @example 125.27
             */
            scheduledAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies the amount in the company's base currency.
             * @example 137.52
             */
            scheduledBaseAmount?: string;
            /**
             * Format: decimal-precision-12
             * @description Specifies the exchange rate in effect on the contract line start date.
             * @example 1.345
             */
            scheduledExchangeRate?: string;
            /**
             * @description Indicates if the line is historical, added during initial implementation.
             * @example false
             */
            readonly isHistorical?: boolean;
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description A billing template defines the rules to use to invoice the flat or fixed amount of a contract line item. */
        "objects.contracts.billing-template": {
            /**
             * @description System-assigned unique key for the contract billing template.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the billing template.
             * @example 12P_BeginningPeriod
             */
            id?: string;
            /** @description URL endpoint for the billing template. */
            readonly href?: string;
            /**
             * @description Provides additional context about the billing template.
             * @example 12P Beginning Period
             */
            description?: string;
            /**
             * @description Defines the billing method that for the contract duration:
             *
             *       * `predefinedPercentages` - Billing is scheduled according to a predefined table that maps each billing period to the corresponding percentage of the flat/fixed amount to be billed for that period.
             *       * `projectPercentComplete` - Billing for a fixed-fee project is determined by project progress. Percentage completion is calculated either from the ratio of approved hours to total source hours or from a user-defined percentage.
             *       * `taskPercentComplete` - Billing for a task related to a fixed-fee project is determined by task progress. Percentage completion is calculated either from the ratio of approved hours to total source hours or from a user-defined percentage. For example, you could use task percent complete templates for milestone billing.
             * @default predefinedPercentages
             * @example predefinedPercentages
             * @enum {string}
             */
            method?: "predefinedPercentages" | "projectPercentComplete" | "taskPercentComplete";
            /**
             * @description Specifies the data source that determines the percentage of completeness for the project or task.
             *
             *
             *
             *
             *
             *       * `estimatedHours` - Divides the total estimated hours for the project or task by the number of approved hours (actual hours).
             *       * `observedPercentCompleted` - Uses the appropriate percent complete value entered by the user on the project or task.
             *       * `budgetedHours` - Divides the total budgeted hours for the project by the number of approved hours (actual hours). Applies only to projects.
             *       * `plannedHours` - Divides the total planned hours for the project or task by the number of approved hours (actual hours).
             * @default null
             * @example estimatedHours
             * @enum {string|null}
             */
            source?: null | "estimatedHours" | "observedPercentCompleted" | "budgetedHours" | "plannedHours";
            /**
             * @description Indicates whether to define billing thresholds to determine the percentage of the flat/fixed amount to invoice.
             * @default false
             * @example false
             */
            isStepBilling?: boolean;
            /** @description References an array of lines associated with the billing template. */
            lines?: components["schemas"]["objects.contracts.billing-template-line"][];
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-billing-templateRequiredProperties": Record<string, never>;
        /** @description Line items in a contract billing schedule specify the percentages complete at which you want to invoice. */
        "objects.contracts.billing-template-line": {
            /**
             * @description System-assigned unique key for the billing template line.
             * @example 15
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the billing template line. This value is the same as `key` for this object.
             * @example 15
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the billing template line.
             * @example /objects/contracts/billing-template-line/15
             */
            readonly href?: string;
            /**
             * @description Indicates the number of months after the billing template start date when the corresponding percentage will be billed. Use `0` to bill the percentage in the same month the billing starts. Applies only when `method` is set to `predefinedPercentages`.
             * @example 2
             */
            periodOffset?: string;
            /**
             * Format: decimal-precision-8
             * @description Specifies the percentage of the flat/fixed amount billed at the defined `periodOffset`, number of months after the billing template start date. The sum of all `percentToBill` values in a billing template must equal 100. Applies only when `method` is set to `predefinedPercentages`.
             * @example 11.00000000
             */
            percentToBill?: string;
            /**
             * Format: decimal-precision-8
             * @description Indicates the cumulative percentage of a project or tasks completion that serves as the billing threshold. When this percentage is reached, the corresponding invoice is generated. Applies only when `isStepBilling` in the `contracts.billing-template` object is set to `true` and `method` is set to `projectPercentComplete` or `taskPercentComplete`.
             * @example 10.00000000
             */
            stepPercent?: string | null;
            /** @description References the billing template to which this billing template line belongs. */
            contractBillingTemplate?: {
                /**
                 * @description Unique key for the billing template.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the billing template.
                 * @example 12P_BeginningPeriod
                 */
                id?: string;
                /**
                 * @description URL endpoint for the billing template.
                 * @example /objects/contracts/billing-template/1
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Evergreen templates define sets of actions Sage Intacct will perform when a recurring billing period on an evergreen contract line ends */
        "objects.contracts.evergreen-template": {
            /**
             * @description System-assigned unique key for the evergreen template.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the evergreen template.
             * @example SUBInvoiceSameAsOriginalPrice
             */
            id?: string;
            /**
             * @description URL endpoint for the evergreen template.
             * @example /objects/contracts/evergreen-template/23
             */
            readonly href?: string;
            /**
             * @description Provides a brief description of the evergreen template.
             * @example Subscription Invoice RevRec Creation Same as original price.
             */
            description?: string;
            pricing?: {
                /**
                 * @description Indicates the type of pricing to apply to the contract lines based on this evergreen template.
                 * @default sameAsOriginal
                 * @example sameAsOriginal
                 * @enum {string}
                 */
                type?: "sameAsOriginal" | "defaultPricing" | "markupOrMarkdown" | "custom";
                /**
                 * @description Indicates the type of pricing markup to apply to the contract lines based on this evergreen template. Applicable only if pricing type is set to `markupOrMarkdown`.
                 * @default percentageMarkup
                 * @example percentageMarkup
                 * @enum {string}
                 */
                markup?: "percentageMarkup" | "percentageDiscount" | "actualMarkup" | "actualDiscount";
                /**
                 * Format: decimal-precision-2
                 * @description Indicates the value of the pricing markup to apply to the contract lines based on this evergreen template. Applicable only if pricing type is set to `markupOrMarkdown`.
                 * @example 5.25
                 */
                markupValue?: string | null;
            };
            recurrenceOptions?: {
                /**
                 * @description Specifies when to create the contract line for the next recurring billing period in relation to the recurring billing period end date.
                 * @default 10
                 * @example 10
                 */
                daysBeforeAfter?: number;
                /**
                 * @description Specifies whether to create the contract line for the next recurring billing period before or after the renewal date.
                 * @default before
                 * @example before
                 * @enum {string}
                 */
                beforeOrAfterDateOfRenewal?: "before" | "after";
            };
            emailNotifications?: {
                customer?: {
                    /**
                     * @description Specifies whether to send an email to the customer.
                     * @default false
                     * @example false
                     */
                    sendToCustomer?: boolean;
                    /**
                     * @description Determines when to send the customer email by specifying the number of recurrences to wait before sending the email. Applies when `sendToCustomer` is set to true.
                     * @default 1
                     * @example 1
                     */
                    afterNumberOfRecurrences?: number;
                    /** @description References the email template to use when sending the customer email notification. */
                    customerEmailTemplate?: {
                        /**
                         * @description Unique key for the customer email template.
                         * @example 1
                         */
                        key?: string | null;
                        /**
                         * @description Identifier for the customer email template.
                         * @example 1
                         */
                        id?: string | null;
                        /**
                         * @description URL endpoint for the customer email template.
                         * @example /objects/company-config/email-template/23
                         */
                        readonly href?: string;
                    };
                };
                internal?: {
                    /**
                     * @description Specifies whether to send an internal email notification.
                     * @default false
                     * @example false
                     */
                    sendToInternal?: boolean;
                    /**
                     * @description Determines when to send the internal email by specifying the number of recurrences to wait before sending the email. Applies when `sendToInternal` is set to true.
                     * @default 1
                     * @example 10
                     */
                    afterNumberOfRecurrences?: number;
                    /** @description References the email template to use when sending the internal email notification. */
                    internalEmailTemplate?: {
                        /**
                         * @description Unique key for the internal email template.
                         * @example 1
                         */
                        key?: string | null;
                        /**
                         * @description Identifier for the internal email template.
                         * @example 1
                         */
                        id?: string | null;
                        /**
                         * @description URL endpoint for the internal email template.
                         * @example /objects/company-config/email-template/23
                         */
                        readonly href?: string;
                    };
                };
            };
            entity?: components["schemas"]["entity-ref"];
            status?: components["schemas"]["status"];
        };
        "contracts-evergreen-templateRequiredProperties": Record<string, never>;
        /** @description Contract usage objects represent the quantity of a contract line item that a customer used or consumed during a specific time period. */
        "objects.contracts.contract-usage": {
            /**
             * @description System-assigned unique key for the contract usage object.
             * @example 145
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the contract usage object. This is the same as `key` for this object.
             * @example 145
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the contract usage object.
             * @example /objects/contracts/contract-usage/1
             */
            readonly href?: string;
            /** @description References the contract associated with the contract usage object. */
            contract?: {
                /**
                 * @description Unique key for the contract.
                 * @example 34
                 */
                key?: string;
                /**
                 * @description Identifier for the contract.
                 * @example CAR-IMPLEMENTATION
                 */
                id?: string;
                /**
                 * @description Name for the contract.
                 * @example CAR-IMPLEMENTATION
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the contract.
                 * @example /objects/contracts/contract/34
                 */
                readonly href?: string;
            };
            /** @description References the contract line associated with the contract usage object. */
            contractLine?: {
                /**
                 * @description Unique key for the contract line.
                 * @example 3
                 */
                key?: string;
                /**
                 * @description Identifier for the contract line.
                 * @example 3
                 */
                id?: string;
                /**
                 * @description Line number for the contract line.
                 * @example 1
                 */
                readonly lineNumber?: string;
                /**
                 * @description URL endpoint for the contract line.
                 * @example /objects/contracts/contract-line/3
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Specifies the [usage date](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_Editing_and_Viewing_a_Contract_usage) associated with the contract usage object. This may represent when the usage was added, when it occurred, or, for recurring usage, when the usage becomes billable. Contract usage objects must be added in chronological order from oldest to newest.
             * @example 2025-02-01
             */
            usageDate?: string;
            /**
             * @description Specifies the quantity of the item used for the contract usage object.
             * @example 1
             */
            quantity?: number;
            /** @description Indicates the item associated with the contract usage object. */
            item?: {
                /**
                 * @description Unique key for the item.
                 * @example 306
                 */
                key?: string;
                /**
                 * @description Identifier for the item.
                 * @example LICNERP
                 */
                id?: string;
                /**
                 * @description Name for the item.
                 * @example Licenses-ERP
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/306
                 */
                readonly href?: string;
            };
            /**
             * @description Specifies the usage type for the contract line:
             *
             *       - `billingCommitted` - For [committed quantity billing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Committed_quantity_usage), the usage quantity is billed at the committed rate and counts towards the committed quantity.
             *       - `billingOverage` - For committed quantity billing, the committed quantity is fully consumed, overage billing is allowed, and the usage quantity is billed at the applicable billing price list rate.
             *       - `billingVariable` - For [variable quantity billing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Variable_quantity_billing), the usage quantity is billed at the applicable billing price list rate.
             *       - `revenue` - For [quantity-based revenue recognition](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Qty_based_revenue_recognition) that may also use committed quantity billing.
             *       - `trackedRevenue` - For quantity-based revenue recognition where the revenue quantity is fully consumed, the contract line may also use committed quantity billing and if `committedQuantityExcess` is set to `doNothing`, the usage cannot be recognized or billed.
             *       - `trackedVariable` - For quantity-based revenue recognition where the revenue quantity is fully consumed, and `committedQuantityExcess` is set to `doNothing`, the usage cannot be billed.
             *       - `canceled` - The contract usage object has been canceled and cannot be recognized or billed.
             * @default billingVariable
             * @example revenue
             * @enum {string}
             */
            usageType?: "billingVariable" | "revenue" | "canceled" | "trackedRevenue" | "billingCommitted" | "trackedVariable" | "billingOverage";
            /**
             * @description Specifies the document identifier associated with the contract usage object.
             * @example Contract-Invoice-CON-IN-0100-doc
             */
            readonly documentId?: string | null;
            /** @description Revenue schedule for the quantity-based revenue recognition. */
            readonly revenueSchedule?: {
                /**
                 * @description Unique key for the revenue schedule.
                 * @example 1
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the revenue schedule.
                 * @example 1
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the revenue schedule.
                 * @example /objects/contracts/revenue-schedule/1
                 */
                readonly href?: string;
            };
            /** @description Revenue schedule line for the quantity-based revenue recognition. */
            readonly revenueScheduleLine?: {
                /**
                 * @description Unique key for the revenue schedule line.
                 * @example 1
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the revenue schedule line.
                 * @example 1
                 */
                readonly id?: string | null;
                /**
                 * Format: date
                 * @description Posting date for the revenue schedule line.
                 * @example 2015-01-16
                 */
                readonly postingDate?: string | null;
                /**
                 * @description Amount in the transaction currency to be posted for the revenue schedule line.
                 * @example 162215.47
                 */
                readonly amount?: string | null;
                /**
                 * @description URL endpoint for the revenue schedule line.
                 * @example /objects/contracts/revenue-schedule-line/1
                 */
                readonly href?: string;
            };
            /** @description Revenue schedule for the quantity-based revenue recognition. */
            readonly revenue2Schedule?: {
                /**
                 * @description Unique key for the revenue schedule.
                 * @example 2
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the revenue schedule.
                 * @example 2
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the revenue schedule.
                 * @example /objects/contracts/revenue-schedule/2
                 */
                readonly href?: string;
            };
            /** @description Revenue schedule line for the quantity-based revenue recognition. */
            readonly revenue2ScheduleLine?: {
                /**
                 * @description Unique key for the revenue schedule line.
                 * @example 2
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the revenue schedule line.
                 * @example 2
                 */
                readonly id?: string | null;
                /**
                 * Format: date
                 * @description Posting date for the revenue schedule line.
                 * @example 2015-01-16
                 */
                readonly postingDate?: string | null;
                /**
                 * @description Amount in the transaction currency to be posted for the revenue schedule line.
                 * @example 162215.47
                 */
                readonly amount?: string | null;
                /**
                 * @description URL endpoint for the revenue schedule line.
                 * @example /objects/contracts/revenue-schedule-line/1
                 */
                readonly href?: string;
            };
            /** @description Specifies the billable usage for the contract line. */
            contractUsageBilling?: {
                /**
                 * Format: date
                 * @description Invoice transaction date for the contract usage object.
                 * @example 2022-01-01
                 */
                billedDate?: string | null;
                /**
                 * Format: date
                 * @description When the `isUsageQuantityRecurring` for the contract line is set to `true`, indicates the effective date of the initial recurring contract usage object.
                 * @example 2022-01-01
                 */
                recurringUsageDate?: string | null;
            };
            /** @description Customer associated with the contract. */
            readonly customer?: {
                /**
                 * @description Unique key for the customer.
                 * @example 13
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the customer.
                 * @example C-133872-NSRG
                 */
                readonly id?: string | null;
                /**
                 * @description Name of the customer.
                 * @example North Shore Retail Group
                 */
                readonly name?: string | null;
                /**
                 * @description URL endpoint for the customer.
                 * @example /objects/accounts-receivable/customer/13
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Indicates the beginning of the timeframe in which services are provided or consumed for this contract usage object.
             * @example 2025-04-01
             */
            servicePeriodStartDate?: string | null;
            /**
             * Format: date
             * @description Indicates the end of the timeframe in which services are provided or consumed for this contract usage object.
             * @example 2025-04-30
             */
            servicePeriodEndDate?: string | null;
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-contract-usageRequiredProperties": Record<string, never>;
        "contracts-revenue-schedule": {
            /**
             * @description System-assigned unique key for the revenue schedule.
             * @example 145
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the revenue schedule. This value is the same as `key` for this object.
             * @example 145
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the revenue schedule.
             * @example /objects/contracts/revenue-schedule/145
             */
            readonly href?: string;
            /**
             * @description Specifies the journal associated with the revenue schedule, J1 or J2. Depending on the journal selected, the revenue schedule will be associated with either revenue journal 1 or revenue journal 2.
             * @example J1
             * @enum {string}
             */
            readonly journal?: "J1" | "J2";
            /**
             * @description Indicates the current status (state) of the revenue schedule:
             *
             *     * `draft` - The revenue schedule is not yet active, draft revenue amounts cannot be recognized until the schedule is `inProgress`.
             *     * `inProgress` - Revenue amounts for this schedule can be recognized as the associated contract lines are processed.
             *     * `onHold` - Revenue schedule is temporarily paused. Revenue for this schedule cannot be recognized until the revenue schedule is resumed. Applies only to termed contracts.
             *     * `completed` - All revenue for this schedule has been recognized and the schedule is complete.
             *     * `terminated` - The associated contract line has been canceled and no further revenue amounts will be recognized.
             *     * `pendingDelivery` - The delivery status of the contract line is undelivered. Applies only to termed contracts.
             *     * `pendingDeliveryAll` - The revenue amounts will not be recognized until all contract lines in the contract have been delivered. Applies only to termed contracts.
             *     * `estimateRevalued` - The remaining amounts or timing of revenue recognition for this schedule have been adjusted based on updated estimates. Applies only to project time contracts.
             *     * `renewalForecast` - The revenue schedule is a forecast for a potential renewal and revenue amounts cannot be recognized until the renewal is finalized and the schedule is updated to reflect the actual renewal.
             *
             *     For more information, read about [revenue schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Termed_revenue_schedules) in the Sage Intacct Help Center.
             * @default inProgress
             * @example inProgress
             * @enum {string}
             */
            readonly status?: "draft" | "inProgress" | "onHold" | "completed" | "terminated" | "pendingDelivery" | "pendingDeliveryAll" | "estimateRevalued" | "renewalForecast";
            /**
             * Format: date
             * @description Specifies the date on which the revaluation estimation function was executed for the project time contract line.
             * @example 2025-03-31
             */
            readonly estimateRevaluationDate?: string | null;
            /** @description References a collection of revenue schedule lines associated with this schedule. */
            revenueScheduleLines?: components["schemas"]["objects.contracts.revenue-schedule-line"][];
        } & {
            /**
             * @description Schedule system-assigned key.
             * @example 145
             */
            readonly key?: string;
            /**
             * @description Schedule unique identifier.
             * @example 145
             */
            readonly id?: string;
            /**
             * Format: date
             * @description Schedule cancellation date.
             * @example 2022-08-13
             */
            readonly cancellationDate?: string | null;
            contract?: components["schemas"]["contract-ref"];
            contractLine?: components["schemas"]["contract-schedule-contract-line-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description reallocate request */
        "contract-schedule-reallocate-request-ref": {
            /**
             * @description Which journal to post this schedule for (J1 or J2).
             * @example J1
             * @enum {string}
             */
            journal?: "J1" | "J2";
            schedule?: {
                /**
                 * @description Contract schedule key.
                 * @example 546
                 */
                key?: string;
            };
            /**
             * Format: date
             * @description Start date for the reallocation.
             * @example 2022-02-24
             */
            startDate?: string;
            /**
             * Format: date
             * @description End date for the reallocation.
             * @example 2022-02-24
             */
            endDate?: string;
            /**
             * @description Post past dated open periods. If you use a start date that is earlier than today's
             *     date and there are open periods with past scheduled posting dates, this parameter
             *     indicates whether to post these. Use true to post the open periods, false otherwise.
             * @default false
             * @example true
             */
            postPastOpenPeriods?: boolean;
        };
        "contracts-revenue-schedule-reallocate-requestRequiredProperties": {
            schedule?: Record<string, never>;
        };
        /** @description reallocate response */
        "contract-schedule-reallocate-response-ref": {
            /**
             * @description status
             * @example completed
             * @enum {string}
             */
            status?: "completed";
        };
        /** @description A revenue schedule line represents a single entry in a revenue schedule, detailing the amount and timing of revenue recognition for a portion of a contract line. */
        "objects.contracts.revenue-schedule-line": {
            /**
             * @description System-assigned unique key for the revenue schedule line.
             * @example 145
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the revenue schedule line. This value is the same as `key` for this object.
             * @example 145
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the revenue schedule line.
             * @example /objects/contracts/revenue-schedule-line/145
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Indicates the date on which the revenue from the schedule line is recognized and posted to the General Ledger (GL).
             * @example 2025-04-30
             */
            readonly actualPostingDate?: string | null;
            /**
             * Format: date
             * @description Indicates the planned date on which revenue from the schedule line will be recognized and posted to the General Ledger. If this is set to `null`, the `derivedPostingDate` is used.
             * @example 2025-04-30
             */
            readonly scheduledPostingDate?: string;
            /**
             * Format: date
             * @description Indicates the date automatically calculated for posting revenue, when `scheduledPostingDate` is not set.
             * @example 2025-04-30
             */
            readonly derivedPostingDate?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Specifies the scheduled revenue amount in the transaction currency to be posted or the amount that was posted.
             * @example 100.00
             */
            readonly scheduledAmount?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Specifies the scheduled revenue amount expressed in your company's base currency. Applies to multi-currency companies.
             * @example 100.00
             */
            readonly scheduledBaseAmount?: string | null;
            /**
             * Format: decimal-precision-2
             * @description Specifies the posted revenue amount in your company's base currency. Applies to multi-currency companies.
             * @example 100.00
             */
            readonly postedBaseAmount?: string | null;
            /**
             * @description Provides detailed information related to the revenue allocation for the schedule line. Applies only to contract lines included in a multi-element-arrangement (MEA) allocation.
             * @example (1000 * 1 {line# 1})
             */
            readonly meaDetails?: string | null;
            /**
             * @description Indicates the reason or action that triggered an adjustment to the revenue schedule line, such as a contract revision, MEA allocation or early termination.
             * @example Contract modification, term reduced from 12 months to 6 months.
             */
            readonly adjustedFor?: string | null;
            /**
             * @description Percentage of the revenue schedule line recognized to date, calculated based on the ratio of `approvedHours` to `sourceHours`.
             * @example 25.18
             */
            readonly percentageRecognized?: string | null;
            /**
             * @description Determines the total hours from the project or task schedule, used with 'approvedHours' to calculate the percentage of revenue to be recognized.
             * @example 118
             */
            sourceHours?: string | null;
            /**
             * @description Indicates the total project hours that have been approved, used with `sourceHours` to calculate the percentage of revenue to be recognized.
             * @example 16
             */
            approvedHours?: string | null;
            /**
             * @description Provides a system-generated note explaining how the revenue amount on the schedule line was calculated.
             * @example MEA amount 1000, adjustment amount 333.32. Prorated amount before effective date 03/01/2022 is 0.
             */
            readonly computationMemo?: string | null;
            /** @description References the billing schedule line, used for allocating revenue across contract lines in a multi-element-arrangement (MEA). */
            readonly linkedBillingScheduleLine?: {
                /**
                 * @description Unique key for the billing schedule line.
                 * @example 145
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the billing schedule line.
                 * @example 145
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the billing schedule line.
                 * @example /objects/contracts/billing-schedule-line/145
                 */
                readonly href?: string;
            };
            /** @description References the revenue schedule that contains this revenue schedule line. */
            readonly contractRevenueSchedule?: {
                /**
                 * @description Unique key for the revenue schedule.
                 * @example 145
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the revenue schedule.
                 * @example 145
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the revenue schedule.
                 * @example /objects/contracts/revenue-schedule/145
                 */
                readonly href?: string;
            };
            /**
             * @description Scheduled operation key for the associated offline operation.
             * @example 57665
             */
            readonly scheduledOperationKey?: string | null;
            /**
             * @description Indicates the current state of the revenue schedule line:
             *
             *     * `open` - The scheduled amount is open and has not been posted.
             *     * `onHold` - Places the scheduled amount on hold, preventing it from being posted until the hold is removed. Applies only to termed contracts.
             *     * `posted` - The scheduled amount was posted.
             *     * `terminated` - Permanently cancels the scheduled amount.
             * @example posted
             * @enum {string}
             */
            readonly state?: "open" | "terminated" | "posted" | "onHold";
            /**
             * Format: decimal-precision-12
             * @description Specifies the exchange rate in effect on the contract line start date.
             * @example 1.345
             */
            scheduledExchangeRate?: string;
            /**
             * @description Indicates whether the revenue schedule line was added during initial implementation for historical purposes.
             * @example false
             */
            readonly isHistorical?: boolean;
            audit?: components["schemas"]["audit.s1"];
            /**
             * @description Indicates whether the revenue schedule line has been posted.
             * @example false
             */
            readonly posted?: boolean;
            /** @description References the journal entry created when the revenue schedule line is posted. */
            journalEntry?: {
                /**
                 * @description Unique key for the journal entry.
                 * @example 8153
                 */
                readonly key?: string | null;
                /**
                 * @description Identifier for the journal entry.
                 * @example 4765
                 */
                readonly id?: string | null;
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/general-ledger/journal-entry/8153
                 */
                readonly href?: string;
            };
        };
        "contracts-revenue-schedule-line-actions-post-request": {
            /**
             * @description System-assigned unique key for the revenue schedule line.
             * @example 518
             */
            key: string;
            /**
             * @description Indicates the date revenue from the schedule line was recognized and posted to the General Ledger.
             * @example 2025-01-01
             */
            actualPostingDate: string;
        };
        "contracts-revenue-schedule-line-actions-post-response": {
            /**
             * @description System-assigned unique key for the revenue schedule line.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the revenue schedule line.
             * @example /objects/contracts/revenue-schedule-line/518
             */
            href?: string;
            /**
             * @description Specifies the current state of the revenue schedule line.
             * @example posted
             * @enum {string}
             */
            state?: "posted";
        };
        "contracts-revenue-schedule-line-actions-unpost-request": {
            /**
             * @description System-assigned unique key for the revenue schedule line.
             * @example 518
             */
            key: string;
        };
        "contracts-revenue-schedule-line-actions-unpost-response": {
            /**
             * @description System-assigned unique key for the revenue schedule line.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the revenue schedule line.
             * @example /objects/contracts/revenue-schedule-line/518
             */
            href?: string;
            /**
             * @description Specifies the current state of the revenue schedule line.
             * @example open
             * @enum {string}
             */
            state?: "open";
        };
        /** @description A revenue template defines the revenue recognition schedule for the flat/fixed amount associated with a contract line. */
        "objects.contracts.revenue-template": {
            /**
             * @description System-assigned unique key for the revenue template.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the revenue template.
             * @example STRAIGHTLINE_MANUAL
             */
            id?: string;
            /**
             * @description URL endpoint for the revenue template.
             * @example /objects/contracts/revenue-template/2
             */
            readonly href?: string;
            /**
             * @description Provides additional context about the revenue template.
             * @example For fixed-fee contracts where revenue is recognized on a straight-line basis.
             */
            description?: string;
            /**
             * @description Specifies the frequency of revenue recognition over the contract duration, determines how often revenue is allocated and posted:
             *
             *       - `monthly` - Revenue is recognized every month.
             *       - `quarterly` - Revenue is recognized every three months.
             *       - `semiAnnually` - Revenue is recognized every six months.
             *       - `annually` - Revenue is recognized once a year.
             * @default monthly
             * @example monthly
             * @enum {string}
             */
            schedulePeriod?: "monthly" | "quarterly" | "semiAnnually" | "annually";
            /**
             * @description Defines how revenue is recognized over the contract duration:
             *
             *       - `straightLine` - Allocates revenue evenly over time, calculating partial amounts first before distributing the remaining revenue evenly across the rest of the schedule.
             *       - `dailyRate` - Revenue is allocated using a daily recognition rate.
             *       - `quantityBased` - Allocates revenue when a usage record is associated with the contract line.
             *       - `predefinedPercentages` - Revenue is allocated using a table that assigns a specific percentage of the fixed amount to each recognition period.
             *       - `projectPercentComplete` - Recognizes revenue proportionally based on project progress, calculated from approved hours compared to scheduled hours or a specified progress percentage.
             *       - `taskPercentComplete` - Revenue is recognized based on each task's completion percentage, calculated from approved hours compared to scheduled hours or a specified progress percentage.
             *       - `recognizeRevenueOnInvoice` - Recognizes the full revenue amount when the contract line is invoiced, without deferral, revenue schedule, or separate posting required.
             *
             *     For more information, read about [recognition methods](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Recognition_methods) and in the Sage Intacct Help Center.
             * @default straightLine
             * @example straightLine
             * @enum {string}
             */
            recognitionMethod?: "straightLine" | "dailyRate" | "quantityBased" | "predefinedPercentages" | "projectPercentComplete" | "taskPercentComplete" | "recognizeRevenueOnInvoice";
            /**
             * @description Specifies the data used to determine the percent complete for a project or task:
             *
             *       - `estimatedHours` - Percent complete is determined by dividing approved (actual) hours by the total estimated hours for the project or task.
             *       - `observedPercentCompleted` - Applies the latest percentage complete value with an as-of-date that is equal to or earlier than the invoice date, based on the project or task.
             *       - `budgetedHours` - Percent complete is calculated by dividing approved (actual) hours by the total budgeted hours for the project.
             *       - `plannedHours` - Calculates percent complete as approved (actual) hours divided by planned hours for the project or task.
             *
             *     You cannot update `recognitionSource` if the revenue template is linked to a contract line. Applies only if `recognitionMethod` is set to `projectPercentComplete` or `taskPercentComplete`.
             * @default null
             * @example estimatedHours
             * @enum {string|null}
             */
            recognitionSource?: null | "estimatedHours" | "observedPercentCompleted" | "budgetedHours" | "plannedHours";
            /**
             * @description Indicates whether the revenue template uses recognition thresholds. Applies only when `recognitionMethod` is set to `projectPercentComplete` or `taskPercentComplete`.
             * @default false
             * @example false
             */
            stepRevenue?: boolean;
            /**
             * @description Specifies whether revenue is posted automatically by the system or requires manual posting:
             *
             *       - `automatic` - Revenue journal entries are automatically posted on each scheduled posting date.
             *       - `manual` - When set to manual, revenue journal entries must be posted manually.
             * @default manual
             * @example automatic
             * @enum {string}
             */
            defaultPostingType?: "automatic" | "manual";
            /**
             * @description Specifies how revenue adjustments are handled when schedule before a contract line's delivery date or before the date the schedule resumes:
             *
             *       - `oneTime` - Sets all prior revenue scheduled before the delivery or resume date to occur on that date.
             *       - `distributed` - Starts the revenue schedule from the delivery or resume date and evenly spreads the revenue across the remaining term to catch up for missed periods.
             *       - `walkForward` - Regenerates the revenue schedule from the delivery or resume date and extends the end date by the number of days shifted. Partial periods are prorated, but full period amounts remain unchanged.
             *
             *     Applies when using [event-based recognition](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_event_driven_recognition_Contracts) or resuming a schedule from hold, and only if `recognitionMethod` is set to `dailyRate` or `straightLine`.
             * @default null
             * @example oneTime
             * @enum {string|null}
             */
            revenueAdjustmentOption?: null | "oneTime" | "distributed" | "walkForward";
            /**
             * @description Defines the percentage of the total revenue amount to be recognized in each period.
             *
             *     Applies only if:
             *       - `recognitionMethod` is set to `predefinedPercentages` or
             *       - `projectPercentComplete`, or
             *       - `recognitionMethod` is set to `taskPercentComplete` and `stepRevenue` is set to `true`.
             */
            recognitionPercentages?: {
                /**
                 * @description Specifies the number of months to delay revenue recognition from the contract line start date.
                 *
                 *     If `recognitionMethod` is set to `predefinedPercentages`, represents the number of months from the start date at which the corresponding `recognitionPercent` is recognized.
                 * @default null
                 * @example 5
                 */
                monthsOffset?: number | null;
                /**
                 * Format: decimal-precision-2
                 * @description Specifies the percentage of the total revenue amount to be recognized in the current period.
                 * @example 10
                 */
                percentToRecognize?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Specifies the minimum completion percentage before revenue is recognized.
                 * @example 70
                 */
                thresholdPercent?: string;
            }[];
            /**
             * @description Indicates if the revenue template is system generated.
             * @default false
             * @example false
             */
            isSystemGenerated?: boolean;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-revenue-templateRequiredProperties": Record<string, never>;
        /** @description A multiple-element arrangement (MEA) allocation represents the allocation of revenue to contract lines for a specific MEA allocation, which is used to adjust the revenue recognition schedule for the contract lines included in the MEA allocation. */
        "objects.contracts.contract-mea-allocation": {
            /**
             * @description System-assigned unique key for the MEA allocation.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the MEA allocation.
             * @example CON-0669-Chick-fil-A Mar 2026
             */
            id?: string;
            /**
             * @description URL endpoint for the MEA allocation.
             * @example /objects/contracts/contract-mea-allocation/23
             */
            readonly href?: string;
            /**
             * @description Provides a brief contextual description of the MEA allocation.
             * @example MEA reallocation effective 2026-04-01 after adding Premium Support add-on.
             */
            description?: string;
            /**
             * @description Indicates whether to apply the MEA allocation to Journal 1, defined when configuring the contract.
             * @default false
             * @example true
             */
            applyToJournal1?: boolean;
            /**
             * @description Indicates whether to apply the MEA allocation to Journal 2, defined when configuring the contract.
             * @default false
             * @example true
             */
            applyToJournal2?: boolean;
            /**
             * Format: date
             * @description Specifies the date on which the MEA allocation becomes effective.
             * @example 2026-01-01
             */
            effectiveDate?: string;
            /**
             * @description Specifies the type of adjustment to make to the revenue recognition schedule for the contract lines included in the MEA allocation.
             * @default oneTime
             * @example oneTime
             * @enum {string}
             */
            adjustmentType?: "oneTime" | "distributed";
            /**
             * @description Indicates how to treat open revenue on contract lines included in the MEA allocation, either:
             *
             *     * `postOpenEntries` - Post the revenue on the scheduled posting date.
             *     * `rescheduleOpenEntries` - Change the scheduled posting date to equal the MEA effective date.
             * @default postOpenEntries
             * @example postOpenEntries
             * @enum {string}
             */
            treatmentOfOpenRevenue?: "postOpenEntries" | "rescheduleOpenEntries";
            /**
             * @description Indicates which date basis to use when determining the fair value price for contract lines included in the MEA allocation.
             * @default meaAllocationEffectiveDate
             * @example meaAllocationEffectiveDate
             * @enum {string}
             */
            readonly fairValuePriceEffectiveAsOf?: "meaAllocationEffectiveDate" | "contractLineStartDate";
            /** @description References the contract associated with the MEA allocation. */
            contract?: {
                /**
                 * @description Unique key for the contract.
                 * @example 23
                 */
                key?: string;
                /**
                 * @description Identifier for the contract.
                 * @example CON-0081
                 */
                id?: string;
                /**
                 * @description Name of the contract.
                 * @example Enterprise Support Agreement Jan 2026
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the contract.
                 * @example /objects/contracts/contract/23
                 */
                readonly href?: string;
            };
            /** @description References a collection of MEA allocation details, which provide the breakdown of how revenue is allocated to each contract line included in the MEA allocation. */
            allocationDetails?: {
                /**
                 * @description Specifies the bundle number for the contract line. Bundle numbers are used to group contract lines together in a MEA allocation. All contract lines with the same bundle number are included in the same bundle, and revenue is allocated to the bundle as a whole.
                 * @example 1
                 */
                bundleNumber?: number;
                /**
                 * @description Specifies the contract line number for the contract line included in the MEA allocation.
                 * @example 2
                 */
                contractLineNumber?: number;
                /**
                 * Format: decimal-precision-12
                 * @description Indicates the percentage by which the revenue will be allocated to the corresponding item. This is calculated as the extended fair value price for the contract line divided by the total extended fair value price for all contract lines in the MEA.
                 * @example 16.9045830203
                 */
                readonly meaPercent?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Specifies the amount of revenue allocated to the contract line for the MEA allocation. This is calculated as the total extended contract price for all bundled contract lines multiplied by `meaPercent` (extended fair value of contract line / total extended fair value for all bundled contract lines).
                 * @example 19.20
                 */
                meaAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Indicates the MEA amount expressed in the company's base currency. Applies only to multi-currency companies.
                 * @example 19.20
                 */
                readonly meaBaseAmount?: string;
                /**
                 * @description Specifies either the contract line rate value or the discounted rate value. The discounted rate is a combination of the rate value and discount value if both are populated on the contract line. For Project Time contract lines, the rate value is the blended rate.
                 * @example 45000
                 */
                readonly rate?: string | null;
                /**
                 * @description Indicates the quantity (optional) for the contract line. Sage Intacct uses any values in these fields in the extended fair value price calculation.
                 * @example 1
                 */
                readonly quantity?: string | null;
                /**
                 * @description Indicates the multiplier (optional) for the contract line. Sage Intacct uses the multiplier to calculate the extended fair value price if a value exists.
                 * @example 1
                 */
                readonly multiplier?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Indicates the total flat amount for the contract line.
                 * @example 45000
                 */
                readonly totalFlatAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Specifies the base total flat amount for the contract line. Applies only to multi-currency companies.
                 * @example 45000
                 */
                readonly totalFlatBaseAmount?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Indicates the effective fair value price for the item recorded in the MEA price list selected on the contract.
                 * @example 45000
                 */
                readonly fairValueUnitPrice?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Indicates the extended fair value price for the contract line. The extended fair value price is calculated by multiplying the fair value price by the quantity and number of invoice periods for fixed prices. For percentage-based prices, this is the percentage multiplied by the sum of extended prices of similar items. If there is no fair value, the extended price is 0.
                 * @example 45000
                 */
                readonly extendedFairValuePrice?: string;
                /**
                 * @description Provides details on how the MEA amount was calculated for the contract line, including any relevant information about the fair value price and allocation method used.
                 * @example Lower limit = 1, Upper limit = 999999. Rule when outside range = Nearest boundary
                 */
                readonly computationMemo?: string;
                /**
                 * Format: decimal-precision-2
                 * @description Indicates the flat amount for the contract line.
                 * @example 45000
                 */
                readonly flatAmount?: string;
            }[];
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-contract-mea-allocationRequiredProperties": Record<string, never>;
        "contracts-contract-actions-clear-all-mea-request": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key: string;
        };
        "contracts-contract-actions-clear-all-mea-response": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract.
             * @example /objects/contracts/contract/518
             */
            href?: string;
            /**
             * @description Current state of the contract.
             * @example inProgress
             * @enum {string}
             */
            state?: "inProgress";
        };
        "contracts-contract-actions-clear-last-active-mea-request": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key: string;
        };
        "contracts-contract-actions-clear-last-active-mea-response": {
            /**
             * @description System-assigned unique key for the contract.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the contract.
             * @example /objects/contracts/contract/518
             */
            href?: string;
            /**
             * @description Current state of the contract.
             * @example inProgress
             * @enum {string}
             */
            state?: "inProgress";
        };
        /** @description A contract bulk action run summary represents the status of a bulk action request for contract management processing, for example posting or clearing revenue/expense recognition. */
        "objects.contracts.bulk-action-run-summary": {
            /**
             * @description Execution mode.
             * @default online
             * @example offline
             * @enum {string}
             */
            executionMode?: "online" | "offline";
            /**
             * @deprecated
             * @description This field has been deprecated. Use the `entity` field instead.
             */
            location?: components["schemas"]["location-ref"];
            entity?: components["schemas"]["entity-ref"];
            /** @description Progress count of the run by states. */
            runCount?: {
                /**
                 * @description Number of queued items.
                 * @example 1
                 */
                queued?: number;
                /**
                 * @description Number of items in progress.
                 * @example 1
                 */
                inProgress?: number;
                /**
                 * @description Number of successful items.
                 * @example 3
                 */
                success?: number;
                /**
                 * @description Number of failed items.
                 * @example 1
                 */
                failure?: number;
                /**
                 * @description Total count of items.
                 * @example 4
                 */
                total?: number;
            };
            audit?: components["schemas"]["audit.s2"];
        } & {
            /**
             * @description System-assigned unique key for the bulk action run summary.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the bulk action run summary.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the bulk action run summary.
             * @example /objects/contracts/bulk-action-run-summary/23
             */
            readonly href?: string;
            /**
             * @description Provides a brief contextual description of the bulk action run summary, such as the type of bulk action and when it was initiated.
             * @example Post ASC606REVREC revenue recognition
             */
            readonly description?: string;
            /**
             * @description Indicates the type of bulk action that was run for this summary, such as posting revenue/expense recognition, updating percentage completion, or scheduling tasks.
             * @example bulkAction
             * @enum {string}
             */
            bulkActionRunType?: "bulkAction" | "postRevenue" | "clearRevenue" | "postExpense" | "clearExpense" | "updatePercentComplete" | "processInvoicePolicies" | "renewEvergreenLine" | "updateRenewalForecast" | "postDepreciation" | "revertDepreciation" | "reverseDepreciation" | "holdSchedules" | "resumeSchedules" | "postTransactions" | "automaticContractRenewals" | "automaticContractExpirations" | "contractRenewalNotifications";
        };
        /** @description An expense is a cost incurred to obtain or fulfill a contract with a customer. The ASC 606 accounting rules require you to amortize contract acquisition expenses over the contract term. */
        "objects.contracts.expense": {
            /** @example /objects/contracts/expense/1 */
            readonly href?: string;
            /**
             * @description System-assigned unique key for the expense.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the expense. This value is the same as `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies the total amount that will be recognized over the recognition term. The amount is expressed in the transaction currency. Sage Intacct automatically rounds the expense amount to 2 decimal places.
             * @example 100.00
             */
            txnAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies the expense amount in the base currency. For multi-currency companies, the transaction currency for the expense may be different from the base currency of the company.
             * @example 100.00
             */
            baseAmount?: string;
            /** @description Specifies the currencies used for the expense. For multi-currency companies, the transaction currency for the expense may be different from the base currency of the company. */
            currency?: {
                /**
                 * Format: date
                 * @description Specifies the exchange rate date used for the expense schedule.
                 * @example 2025-01-01
                 */
                exchangeRateDate?: string;
                /**
                 * Format: decimal-precision-12
                 * @description Specifies the exchange rate associated with the expense amount when the transaction currency is different from the base currency.
                 * @example 1.345
                 */
                exchangeRate?: string;
                /**
                 * @description Indicates the base currency for the entity or company.
                 * @example USD
                 */
                readonly baseCurrency?: string;
                /**
                 * @description Specifies the currency in which the expense is recorded.
                 * @example USD
                 */
                readonly txnCurrency?: string;
            };
            /**
             * @description Indicates the line number for the expense.
             * @example 1
             */
            readonly lineNumber?: number;
            /**
             * Format: date
             * @description Indicates the date the expense was posted to the General Ledger (GL).
             * @example 2025-02-01
             */
            postingDate?: string;
            /**
             * Format: date
             * @description Indicates the date the expense was canceled and removed from the General Ledger (GL).
             * @example 2025-11-01
             */
            readonly cancelationDate?: string;
            /**
             * @description Specifies the current state of the expense. Use `draft` when creating an expense not yet ready for posting to the general ledger.
             *
             *     * `draft` - The expense was saved as a preliminary version. A draft expense has no effect on the GL.
             *     * `inProgress` - The expense was posted and is considered in effect. An expense remains `inProgress` unless it is canceled.
             *     * `canceled` - The expense was canceled.
             * @default inProgress
             * @example inProgress
             * @enum {string}
             */
            readonly state?: "draft" | "inProgress" | "canceled";
            /**
             * @description Indicates whether the expense is a `contract` or `contractLine` expense.
             * @default contract
             * @example contract
             * @enum {string}
             */
            readonly expenseType?: "" | "contract" | "contractLine";
            /**
             * @description Determines how an expense is processed when the expense is calculated.
             * @example manual
             */
            readonly calculatedExpensePostingType?: string;
            /**
             * @description Determines how an expense is processed when the expense is calculated.
             * @example manual
             */
            readonly calculatedExpense2PostingType?: string;
            /**
             * @description If the expense originated as a draft, provides additional information relating to the expense posting, such as tax details or contract specific information.
             * @example Draft expense includes VAT applicable under UK regulations.
             */
            readonly memo?: string;
            /** @description References the contract to which the expense is linked, ensuring the expense is processed according to the terms of the contract. */
            contract?: {
                /**
                 * @description Unique key for the contract.
                 * @example 59
                 */
                key?: string;
                /**
                 * @description Identifier for the contract.
                 * @example CON-0045-1
                 */
                id?: string;
                /**
                 * @description Name of the contract.
                 * @example Nexora Solutions Inc - Cloud Platform Licensing Agreement
                 */
                name?: string;
                /**
                 * @description Indicates the current status of the contract, either `active` or `inactive`.
                 * @example active
                 */
                readonly status?: string;
                /**
                 * @description URL endpoint for the contract.
                 * @example /objects/contracts/contract/59
                 */
                readonly href?: string;
            };
            /** @description References the specific line in the contract to which the expense is linked. */
            contractLine?: {
                /**
                 * @description Unique key for the contract line.
                 * @example 2
                 */
                key?: string;
                /**
                 * @description Identifier for the contract line.
                 * @example 2
                 */
                id?: string;
                /**
                 * @description Current state of the contract line.
                 * @example completed
                 */
                readonly state?: string;
                /**
                 * @description Contract line number for the contract line.
                 * @example 1
                 */
                readonly lineNumber?: number;
                /**
                 * @description URL endpoint for the contract line.
                 * @example /objects/contracts/contract-line/2
                 */
                readonly href?: string;
            };
            /** @description Provides details of predefined expense journal templates that determine how expenses are posted to the General Ledger (GL) based on the contract terms. */
            templates?: {
                /**
                 * Expense Journal 1
                 * @description Defines the primary expense journal configuration used to post contract-related expenses.
                 */
                expenseJournal1?: {
                    /**
                     * @description Indicates whether an expense is processed automatically or manually in the primary expense journal.
                     * @default null
                     * @example manual
                     * @enum {string|null}
                     */
                    readonly postingType?: null | "automatic" | "manual";
                    /**
                     * Format: date
                     * @description Specifies the effective date on which the posting type change takes effect in the primary expense journal; this date must fall within an open accounting period.
                     * @example 2025-05-01
                     */
                    readonly postingConversionDate?: string;
                    /** @description References the General Ledger (GL) journal associated with the primary expense journal. The GL journal defines how expenses are posted for the contract in the primary expense journal configuration. */
                    readonly glJournal?: {
                        /**
                         * @description Unique key for the primary expense GL journal.
                         * @example 3
                         */
                        readonly key?: string;
                        /**
                         * @description Name of the primary expense GL journal.
                         * @example Standard Expense Journal
                         */
                        readonly name?: string;
                        /**
                         * @description Identifier for the primary expense GL journal.
                         * @example STD-EJ-001
                         */
                        readonly id?: string;
                        /**
                         * @description URL endpoint for the expense GL journal.
                         * @example /objects/general-ledger/journal/3
                         */
                        readonly href?: string;
                    };
                    /** @description References the expense template for the primary expense journal used to define how expense entries are posted to the primary expense journal based on the contract terms. */
                    expenseTemplate?: {
                        /**
                         * @description Indicates whether an expense is processed automatically or manually in the primary expense journal.
                         * @example manual
                         */
                        readonly defaultPostingType?: string;
                        /**
                         * @description Identifier for the expense template.
                         * @example CONT_EXP_STD_MAN_001
                         */
                        id?: string;
                        /**
                         * @description Unique key for the expense template.
                         * @example 1
                         */
                        key?: string;
                        /**
                         * @description URL endpoint for the expense template.
                         * @example /objects/contracts/expense-template/1
                         */
                        readonly href?: string;
                    };
                    /** @description References the primary expense schedule used to define the timing and frequency of expense postings to the primary expense journal based on the contract terms. */
                    readonly schedule?: {
                        /**
                         * @description Identifier for the expense schedule.
                         * @example 12
                         */
                        readonly id?: string;
                        /**
                         * @description Unique key for the expense schedule.
                         * @example 12
                         */
                        readonly key?: string;
                        /**
                         * @description Status of the expense schedule.
                         * @example inProgress
                         */
                        readonly status?: string;
                        /**
                         * @description URL endpoint for the expense schedule.
                         * @example /objects/contracts/expense-schedule/12
                         */
                        readonly href?: string;
                    };
                    /**
                     * Format: date
                     * @description Specifies the date when expense recognition begins for the primary expense journal.
                     * @example 2025-01-01
                     */
                    startDate?: string;
                    /**
                     * Format: date
                     * @description Specifies the date when expense recognition ends for the primary expense journal.
                     * @example 2025-12-01
                     */
                    endDate?: string;
                };
                /**
                 * Expense Journal 2
                 * @description Defines the secondary expense journal configuration used to post contract-related expenses.
                 */
                expenseJournal2?: {
                    /**
                     * @description Indicates whether an expense is processed automatically or manually in the secondary expense journal.
                     * @default null
                     * @example manual
                     * @enum {string|null}
                     */
                    readonly postingType?: null | "automatic" | "manual";
                    /**
                     * Format: date
                     * @description Specifies the effective date on which the posting type change takes effect in the secondary expense journal; this date must fall within an open accounting period.
                     * @example 2025-05-01
                     */
                    readonly postingConversionDate?: string;
                    /** @description References the General Ledger (GL) journal associated with the secondary expense journal. The GL journal defines how expenses are posted for the contract in the secondary expense journal configuration. */
                    readonly glJournal?: {
                        /**
                         * @description Unique key for the secondary expense GL journal.
                         * @example 3
                         */
                        readonly key?: string;
                        /**
                         * @description Name of the secondary expense GL journal.
                         * @example Deferred Expense Journal
                         */
                        readonly name?: string;
                        /**
                         * @description Identifier for the secondary expense GL journal.
                         * @example DEF-EJ-002
                         */
                        readonly id?: string;
                        /**
                         * @description URL endpoint for the secondary expense GL journal.
                         * @example /objects/general-ledger/journal/3
                         */
                        readonly href?: string;
                    };
                    /** @description References the expense template for the secondary expense journal used to define how expense entries are posted to the secondary expense journal based on the contract terms. */
                    expenseTemplate?: {
                        /**
                         * @description Identifier for the expense template.
                         * @example CONT_EXP_DEF_MAN_001
                         */
                        id?: string;
                        /**
                         * @description Indicates whether an expense is processed automatically or manually in the secondary expense journal.
                         * @example manual
                         */
                        readonly defaultPostingType?: string;
                        /**
                         * @description Unique key for the expense template.
                         * @example 1
                         */
                        key?: string;
                        /**
                         * @description URL endpoint for the expense template.
                         * @example /objects/contracts/expense-template/1
                         */
                        readonly href?: string;
                    };
                    /** @description References the secondary expense schedule used to define the timing and frequency of expense postings to the secondary expense journal based on the contract terms. */
                    schedule?: {
                        /**
                         * @description Unique key for the expense schedule.
                         * @example 12
                         */
                        key?: string;
                        /**
                         * @description Status of the expense schedule.
                         * @example inProgress
                         */
                        readonly status?: string;
                        /**
                         * @description URL endpoint for the expense schedule.
                         * @example /objects/contracts/expense-schedule/12
                         */
                        readonly href?: string;
                    };
                    /**
                     * Format: date
                     * @description Specifies the date when expense recognition begins for the secondary expense journal.
                     * @example 2025-01-01
                     */
                    startDate?: string;
                    /**
                     * Format: date
                     * @description Specifies the date when expense recognition ends for the secondary expense journal.
                     * @example 2025-12-01
                     */
                    endDate?: string;
                };
            };
            /** @description References the temporary General Ledger (GL) account used to hold deferred expenses to be recognized in future periods. */
            readonly deferredExpenseGLAccount?: {
                /**
                 * @description Name of the deferred expense GL account.
                 * @example 1400 - Deferred Contract Expenses
                 */
                readonly name?: string;
                /**
                 * @description Identifier for the deferred expense GL account.
                 * @example 150
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the deferred expense GL account.
                 * @example 411
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the deferred expense GL account.
                 * @example /objects/general-ledger/account/411
                 */
                readonly href?: string;
            };
            /** @description References the General Ledger (GL) account used to record expenses that have been incurred but not yet billed or paid. */
            readonly expenseAccrualGLAccount?: {
                /**
                 * @description Name of the expense accrual GL account.
                 * @example 2105 - Accrued Contract Expenses
                 */
                readonly name?: string;
                /**
                 * @description Identifier for the expense accrual GL account.
                 * @example 4113
                 */
                readonly id?: string;
                /**
                 * @description Unique key for the expense accrual GL account.
                 * @example 412
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the expense accrual GL account.
                 * @example /objects/general-ledger/account/412
                 */
                readonly href?: string;
            };
            /** @description References the General Ledger (GL) account used to record expenses that have been fully recognized in the income statement. */
            readonly recognizedExpenseGLAccount?: {
                /**
                 * @description Identifier for the recognized expense GL account.
                 * @example 1501
                 */
                readonly id?: string;
                /**
                 * @description Name of the recognized expense GL account.
                 * @example 6000 - Contract Expense Recognition
                 */
                readonly name?: string;
                /**
                 * @description Unique key for the recognized expense GL account.
                 * @example 413
                 */
                readonly key?: string;
                /**
                 * @description URL endpoint for the recognized expense GL account.
                 * @example /objects/general-ledger/account/413
                 */
                readonly href?: string;
            };
            item?: components["schemas"]["item-ref"];
            dimensions?: components["schemas"]["contract-dimension-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-expenseRequiredProperties": Record<string, never>;
        /** @description Post request for an expense. */
        "contracts-expense-actions-post-request": {
            /**
             * @description Unique key for the expense to be posted.
             * @example 2
             */
            key: string;
            /**
             * Format: date
             * @description GL posting date for the expense. Transactions on or before this date will be posted.
             * @example 2025-01-01
             */
            glPostingDate?: string;
            /**
             * @description Memo or note for the post action on the expense.
             * @example January 2025 posting for IT services contract.
             */
            postMemo?: string;
        };
        /** @description Post response for an expense. */
        "contracts-expense-actions-post-response": {
            /**
             * @description System-assigned unique key for the expense.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the expense.
             * @example /objects/contracts/expense/518
             */
            href?: string;
            /**
             * @description Current state of the expense after being posted.
             * @example inProgress
             * @enum {string}
             */
            state?: "inProgress";
        };
        /** @description Hold schedule request for an expense */
        "contracts-expense-actions-hold-schedules-request": {
            /**
             * @description System-assigned unique key for the expense to be put on hold.
             * @example 2
             */
            key: string;
            /**
             * Format: date
             * @description Date on which the hold action should be effective. Transactions on or after this date will be affected by the hold action.
             * @example 2025-01-01
             */
            asOfDate: string;
        };
        /** @description Hold schedule response for an expense. */
        "contracts-expense-actions-hold-schedules-response": {
            /**
             * @description System-assigned unique key for the expense that has been put on hold.
             * @example 518
             */
            key?: string;
            /**
             * @description Current state of the expense after the hold action has been applied.
             * @example inProgress
             * @enum {string}
             */
            state?: "inProgress";
            templates?: {
                expenseJournal1?: {
                    /** @description Primary expense schedule associated with the expense. */
                    schedule?: {
                        /**
                         * @description Identifier for the primary expense schedule.
                         * @example 12
                         */
                        readonly id?: string;
                        /**
                         * @description Unique key for the primary expense schedule.
                         * @example 12
                         */
                        readonly key?: string;
                        /**
                         * @description Current status of the primary expense schedule.
                         * @example onHold
                         * @enum {string}
                         */
                        readonly status?: "onHold";
                        /**
                         * @description URL endpoint for the primary expense schedule.
                         * @example /objects/contracts/expense-schedule/12
                         */
                        readonly href?: string;
                    };
                };
                expenseJournal2?: {
                    /** @description Secondary expense schedule associated with the expense. */
                    schedule?: {
                        /**
                         * @description Identifier for the secondary expense schedule.
                         * @example 12
                         */
                        readonly id?: string;
                        /**
                         * @description Unique key for the secondary expense schedule.
                         * @example 12
                         */
                        readonly key?: string;
                        /**
                         * @description Current status of the secondary expense schedule.
                         * @example onHold
                         * @enum {string}
                         */
                        readonly status?: "onHold" | "";
                        /**
                         * @description URL endpoint for the secondary expense schedule.
                         * @example /objects/contracts/expense-schedule/12
                         */
                        readonly href?: string;
                    };
                };
            };
            /**
             * @description URL endpoint for the expense
             * @example /objects/contracts/expense/518
             */
            href?: string;
        };
        /** @description Resume schedule request for an expense. */
        "contracts-expense-actions-resume-schedules-request": {
            /**
             * @description Unique key for the expense to be resumed.
             * @example 2
             */
            key: string;
            /**
             * Format: date
             * @description Date on which the expense is to be resumed. Transactions on or after this date will be affected by the resume action.
             * @example 2025-01-01
             */
            asOfDate: string;
        };
        /** @description Resume schedule response for an expense. */
        "contracts-expense-actions-resume-schedules-response": {
            /**
             * @description System-assigned unique key for the expense that has been resumed.
             * @example 518
             */
            key?: string;
            /**
             * @description Current state of the expense after the resume action has been applied.
             * @example inProgress
             * @enum {string}
             */
            state?: "inProgress";
            templates?: {
                /** @description Primary expense journal associated with the expense. */
                expenseJournal1?: {
                    schedule?: {
                        /**
                         * @description Identifier for the primary expense schedule.
                         * @example 12
                         */
                        readonly id?: string;
                        /**
                         * @description Unique key for the primary expense schedule.
                         * @example 12
                         */
                        readonly key?: string;
                        /**
                         * @description Current status of the primary expense schedule.
                         * @example inProgress
                         * @enum {string}
                         */
                        readonly status?: "inProgress" | "";
                        /**
                         * @description URL endpoint for the primary expense schedule.
                         * @example /objects/contracts/expense-schedule/12
                         */
                        readonly href?: string;
                    };
                };
                /** @description Secondary expense journal associated with the expense. */
                expenseJournal2?: {
                    schedule?: {
                        /**
                         * @description Identifier for the secondary expense schedule.
                         * @example 12
                         */
                        readonly id?: string;
                        /**
                         * @description Unique key for the secondary expense schedule.
                         * @example 12
                         */
                        readonly key?: string;
                        /**
                         * @description Current status of the secondary expense schedule.
                         * @example inProgress
                         * @enum {string}
                         */
                        readonly status?: "inProgress" | "";
                        /**
                         * @description URL endpoint for the secondary expense schedule.
                         * @example /objects/contracts/expense-schedule/12
                         */
                        readonly href?: string;
                    };
                };
            };
            /**
             * @description URL endpoint for the expense
             * @example /objects/contracts/expense/518
             */
            href?: string;
        };
        "contracts-expense-schedule": {
            /**
             * @description System-assigned unique key for the expense schedule.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the expense schedule. This is the same as `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the expense schedule.
             * @example /objects/contracts/expense-schedule/145
             */
            readonly href?: string;
            /**
             * @description Specifies the journal associated with the expense schedule, J1 or J2. Depending on the journal selected, the expense schedule will post to either expense journal 1 or expense journal 2.
             * @example J1
             * @enum {string}
             */
            readonly journal?: "J1" | "J2";
            /**
             * @description Indicates the current state of the expense schedule:
             *
             *     * `draft` - The expense schedule is not yet active, draft expense amounts cannot be recognized until the schedule is `inProgress`.
             *     * `inProgress` - Expense amounts for this schedule can be recognized as the associated expense lines are processed.
             *     * `onHold` - The expense schedule is temporarily paused and no expense lines are being processed.
             *     * `completed` - All expense amounts have been recognized and the schedule is complete.
             *     * `terminated` - The associated expense has been terminated and no further expense amounts will be recognized.
             *     * `estimateRevalued` - The expense schedule has been revalued based on updated estimates, which may adjust the amounts or timing of remaining expense lines.
             *
             *     For more information, read about [expense schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_Editing_and_Viewing_a_Expense_schedule) in the Sage Intacct Help Center.
             * @example inProgress
             * @enum {string}
             */
            readonly status?: "draft" | "inProgress" | "onHold" | "completed" | "terminated" | "estimateRevalued";
            /** @description References a collection of expense schedule lines associated with this schedule. */
            expenseScheduleLines?: components["schemas"]["objects.contracts.expense-schedule-line"][];
        } & {
            /**
             * @description Schedule system-assigned key.
             * @example 145
             */
            readonly key?: string;
            /**
             * @description Schedule unique identifier.
             * @example 145
             */
            readonly id?: string;
            /**
             * Format: date
             * @description Schedule cancellation date.
             * @example 2022-08-13
             */
            readonly cancellationDate?: string | null;
            contract?: components["schemas"]["contract-ref"];
            contractLine?: components["schemas"]["contract-schedule-contract-line-ref"];
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-expense-schedule-reallocate-requestRequiredProperties": {
            schedule?: Record<string, never>;
        };
        /** @description An expense schedule line represents a single scheduled expense occurrence for a contract line. */
        "objects.contracts.expense-schedule-line": {
            /**
             * @description System-assigned unique key for the expense schedule line.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the expense schedule line. This is the same as `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the expense schedule line.
             * @example /objects/contracts/expense-schedule-line/145
             */
            readonly href?: string;
            contractExpenseSchedule?: components["schemas"]["contract-expense-schedule-ref"];
            /**
             * @description Specifies the scheduled operation key for the associated offline operation that will generate the scheduled expense line.
             * @example 57665
             */
            readonly scheduledOperationKey?: string;
            /**
             * @description Specifies the current state of the schedule line:
             *
             *     * `open` - Available for posting; no expense has been recognized.
             *     * `onHold` - On hold and cannot be posted or recognized. Applies only to `termed` contracts.
             *     * `posted` - Posted to the general ledger, and the related expense is recognized.
             *     * `terminated` - Permanently closed; cannot be posted or recognized. Applies only to `termed` contracts.
             * @example posted
             * @enum {string}
             */
            readonly state?: "open" | "terminated" | "posted" | "onHold";
            /**
             * Format: decimal-precision-2
             * @description Specifies the scheduled amount to be billed for the expense schedule line.
             * @example 125.27
             */
            scheduledAmount?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies the scheduled base amount for the expense schedule line, which is the amount before any adjustments or taxes are applied.
             * @example 137.52
             */
            scheduledBaseAmount?: string;
            /**
             * Format: decimal-precision-12
             * @description Indicates the exchange rate in effect on the contract line start date for the expense schedule line.
             * @example 1.345
             */
            scheduledExchangeRate?: string;
            /**
             * @description Indicates whether the line was added during initial implementation for historical purposes.
             * @example false
             */
            readonly isHistorical?: boolean;
            audit?: components["schemas"]["audit.s1"];
            /**
             * Format: date
             * @description Specifies the scheduled posting date for the expense schedule line, which is the date when the expense is expected to be recognized and posted to the general ledger.
             * @example 2025-04-30
             */
            scheduledPostingDate?: string;
            /**
             * @description Indicates if the line has been posted to the general ledger, which means the expense has been recognized.
             * @example false
             */
            readonly posted?: boolean;
            /**
             * Format: date
             * @description Specifies the actual posting date for the expense schedule line, which is the date when the expense was actually recognized and posted to the general ledger.
             * @example 2025-04-30
             */
            readonly actualPostingDate?: string;
            /** @description References the journal entry created when the scheduled expense line is posted. */
            journalEntry?: {
                /**
                 * @description Unique key for the journal entry.
                 * @example 8153
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the journal entry.
                 * @example 4765
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the journal entry.
                 * @example /objects/general-ledger/journal-entry/1981
                 */
                readonly href?: string;
            };
        };
        /** @description Post request for the expense schedule line. */
        "contracts-expense-schedule-line-actions-post-request": {
            /**
             * @description System-assigned unique key for the expense schedule line.
             * @example 518
             */
            key: string;
            /**
             * Format: date
             * @description Specifies the actual posting date for the expense schedule line, which is the date when the expense was actually recognized and posted to the general ledger.
             * @example 2025-01-31
             */
            actualPostingDate: string;
        };
        "contracts-expense-schedule-line-actions-post-response": {
            /**
             * @description System-assigned unique key for the expense schedule line.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the expense schedule line.
             * @example /objects/contracts/expense-schedule-line/518
             */
            href?: string;
            /**
             * @description Specifies the current state of the expense schedule line.
             * @example posted
             * @enum {string}
             */
            state?: "posted";
        };
        "contracts-expense-schedule-line-actions-unpost-request": {
            /**
             * @description System-assigned unique key for the expense schedule line.
             * @example 518
             */
            key: string;
        };
        "contracts-expense-schedule-line-actions-unpost-response": {
            /**
             * @description System-assigned unique key for the expense schedule line.
             * @example 518
             */
            key?: string;
            /**
             * @description URL endpoint for the expense schedule line.
             * @example /objects/contracts/expense-schedule-line/518
             */
            href?: string;
            /**
             * @description Specifies the current state of the expense schedule line.
             * @example open
             * @enum {string}
             */
            state?: "open";
        };
        /** @description A historical schedule run is used to build up reporting balances for historical and in-flight contracts when processing contract schedules in Sage Intacct. */
        "objects.contracts.historical-schedule-run": {
            /**
             * @description System-assigned unique key for the historical schedule run.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the historical schedule run.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the historical schedule run.
             * @example /objects/contracts/historical-schedule-run/1
             */
            readonly href?: string;
            /**
             * @description Indicates the current state of the historical schedule run, which can be used to track the progress of the run and identify when it has completed or if it has encountered any issues.
             * @default queued
             * @example success
             * @enum {string}
             */
            state?: "success" | "failed" | "inProgress" | "partialSuccess" | "queued";
            /**
             * Format: date
             * @description Specifies the date up to which schedule lines are calculated for this run.
             * @example 2026-01-01
             */
            asOfDate?: string;
            /**
             * @description Specifies the email address to which the run completion notification is sent. The default is the email address of the currently logged-in user.
             * @example john.smith@company.com
             */
            notificationEmail?: string;
            entity?: components["schemas"]["entity-ref"];
            audit?: components["schemas"]["audit.s2"];
        };
        /** @description An expense template defines the schedule to recognize an expense amount for a contract or contract line over the contract term. You can create any number of expense templates and reuse them across contracts. */
        "objects.contracts.expense-template": {
            /**
             * @description System-assigned unique key for the expense template.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the expense template.
             * @example EXPSTRAIGHTLINE_MAN
             */
            id?: string;
            /**
             * @description URL endpoint for the expense template.
             * @example /objects/contracts/expense-template/1
             */
            readonly href?: string;
            /**
             * @description Provides a brief contextual description of the expense template.
             * @example Expense straight line manual
             */
            description?: string;
            /**
             * @description Specifies the amortization schedule period for the expense template, which determines how often the expense will be recognized over the contract term.
             * @default monthly
             * @example annually
             * @enum {string}
             */
            amortizationSchedulePeriod?: "monthly" | "quarterly" | "semiAnnually" | "annually";
            /**
             * @description Specifies which day of the month the journal entry will be posted for the expense. This setting determines the exact day within the month when the expense recognition will occur.
             * @default 1
             * @example 1
             */
            readonly postingDay?: number;
            /**
             * @description Determines the amortization method used to recognize expenses for contracts using this template. The amortization method determines how the expense amount is allocated over the expense recognition term.
             *
             *     * `straightLine` - Allocates the expense amount evenly over the expense recognition term.
             *     * `dailyRate` - Expenses are allocated based on a daily rate.
             *     * `predefinedPercentages` - Allocates the expense amount based on custom percentages defined for each period in the expense recognition term.
             *
             *     For more information, read about [expense templates](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Expense_templates) in the Sage Intacct Help Center.
             * @default straightLine
             * @example straightLine
             * @enum {string}
             */
            amortizationMethod?: "straightLine" | "dailyRate" | "predefinedPercentages";
            /**
             * @description Specifies the method by which journal entries will be posted for contracts using this expense template. Depending on the posting type selected, journal entries will either be posted automatically by Intacct on each scheduled posting date or manually by the user when required.
             * @default manual
             * @example manual
             * @enum {string}
             */
            defaultPostingType?: "automatic" | "manual";
            /** @description References a collection of expense template lines associated with the expense template. */
            lines?: components["schemas"]["objects.contracts.expense-template-line"][];
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-expense-templateRequiredProperties": Record<string, never>;
        /** @description An expense template line defines the percentage of the total expense amount to be recognized at a specific number of months from the expense start date. */
        "objects.contracts.expense-template-line": {
            /**
             * @description System-assigned unique key for the expense template line.
             * @example 1
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the expense template line. This value is the same as `key` for this object.
             * @example 1
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the expense template line.
             * @example /objects/contracts/expense-template-line/1
             */
            readonly href?: string;
            /**
             * @description Specifies the number of months in the future from the expense start date the corresponding percentage will post. Use 0 if you want the corresponding percentage to be posted in the month the expense starts. Applies only when `amortizationMethod` is set to `predefinedPercentages`.
             * @example 2
             */
            periodOffset?: string;
            /**
             * Format: decimal-precision-8
             * @description Indicates the percentage of the expense amount that is posted at the corresponding number of months from the expense start date.
             * @example 10.12312000
             */
            percentToRecognize?: string;
            /** @description References the expense template to which this line belongs. */
            contractExpenseTemplate?: {
                /**
                 * @description Unique key for the expense template.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the expense template.
                 * @example EXPSTRAIGHTLINE_MAN
                 */
                id?: string;
                /**
                 * @description URL endpoint for the expense template.
                 * @example /objects/contracts/expense-template/1
                 */
                readonly href?: string;
            };
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description Use billing price lists to create pricing strategies for items with prices that are determined based on a fixed fee, the quantity used, or the contracted quantity. */
        "objects.contracts.billing-price-list": {
            /**
             * @description System-assigned unique key for the billing price list.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the billing price list. The `id` cannot be changed after the billing price list is created.
             * @example Lumber billing price list
             */
            id?: string;
            /**
             * @description URL endpoint for the billing price list.
             * @example /objects/contracts/billing-price-list/12
             */
            readonly href?: string;
            /**
             * @description Provides additional context about the billing price list.
             * @example Subscription price list
             */
            description?: string | null;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-billing-price-listRequiredProperties": Record<string, never>;
        /** @description A billing price list entry contains the pricing for a single item within a specified billing price list. */
        "objects.contracts.billing-price-list-entry": {
            /**
             * @description System-assigned unique key for the billing price list entry.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the billing price list entry. This is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the billing price list entry.
             * @example /objects/contracts/billing-price-list-entry/23
             */
            readonly href?: string;
            /**
             * @description RecordURL of the contract billing price list entry.
             * @example https://app.intacct.com/objects/contracts/billing-price-list-entry/23
             */
            readonly webURL?: string;
            /** @description Billing price list to which this entry belongs. */
            billingPriceList?: {
                /**
                 * @description Unique key for the billing price list.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the billing price list.
                 * @example SoftwarePackagePL
                 */
                id?: string;
                /**
                 * @description URL endpoint for the billing price list.
                 * @example /objects/contracts/billing-price-list/1
                 */
                readonly href?: string;
            };
            currency?: components["schemas"]["currency"];
            /**
             * @description Indicates whether the item is priced using `range` or `tiered` pricing:
             *
             *     * `range` - Pricing for items sold in large quantities, such as those measured in CPM. Pricing is set by quantity groups (thousands, hundreds, dozens, etc.), for example, ad clicks priced with an amount of 20.00 per 1000.
             *     * `tiered` - Use for items priced in tiers, where the unit price changes at defined quantity levels. Specify the pricing method with `tieredPricingType`. Each `billing-price-list-entry-line-tier` object defines the starting quantity and price for its tier.
             * @example range
             * @enum {string|null}
             */
            priceType?: null | "range" | "tiered";
            /**
             * @description Indicates how often the `flatAmount` from a `billing-price-list-entry-line` should be invoiced during the contract term.
             *
             *     * `oneTime` - Invoice the flat amount only once.
             *     * `useBillingTemplate` - Divide the flat amount into more than one invoice.
             *     * `includeWithEveryInvoice` - Include the flat amount with every invoice, used for evergreen contract lines.
             * @example oneTime
             * @enum {string|null}
             */
            flatAmountFrequency?: null | "oneTime" | "useBillingTemplate" | "includeWithEveryInvoice";
            /**
             * @description Indicates when the usage quantity should be reset to `0` to restart the pricing structure.
             *
             *     * `afterEachRenewal` - Resets at the beginning of each contract renewal term.
             *     * `afterEachInvoice` - Resets every time an invoice is generated. This is the default for quantity-based evergreen contract lines and cannot be changed.
             * @default afterEachRenewal
             * @example afterEachRenewal
             * @enum {string|null}
             */
            usageQuantityResetPeriod?: null | "afterEachRenewal" | "afterEachInvoice";
            /**
             * @description Indicates how the total usage is rounded after the total usage quantity is divided by the `variableUnitDivisor`. Applies on if `priceType` is set to `range`.
             *
             *     * `standard` - Any quantity between 1001 to 1499, round down to 1000, and any between 1500 to 1999, round up to 2000.
             *     * `roundUp` - Any quantity between 1001 and 1999, round up to 2000.
             *     * `round` - Any quantity between 1001 and 1999, round down to 1000.
             * @default standard
             * @example standard
             * @enum {string|null}
             */
            roundingType?: null | "standard" | "roundUp" | "roundDown";
            /**
             * @description Indicates whether the quantity is recurring.
             * @default false
             * @example false
             */
            isQuantityRecurring?: boolean;
            /**
             * @description Specifies the divisor applied to usage quantities for all lines to determine pricing ranges. Applies only if `priceType` is set to `range`.
             * @example 1000
             */
            variableUnitDivisor?: string;
            /**
             * @description Tiered pricing type. Applies only if `priceType` is set to `tiered`.
             *
             *     * `volume` - Total quantity is priced at the rate in the tier in which the quantity falls.
             *     * `step` - Item is priced at the successive tiers in which the quantity falls.
             *     * `absolute` - Set a specific amount to charge when the quantity falls within a tier.
             * @default volume
             * @example step
             * @enum {string}
             */
            tieredPricingType?: "volume" | "step" | "absolute";
            /**
             * @description Indicates the version of the billing price list entry.
             * @example 1
             */
            readonly version?: string | null;
            /** @description References the item associated with this price list entry. */
            item?: {
                /**
                 * @description Unique key for the item.
                 * @example 13
                 */
                key?: string;
                /**
                 * @description Identifier for the item.
                 * @example ID3614
                 */
                id?: string;
                /**
                 * @description Name of the item.
                 * @example Interior door
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint of the item.
                 * @example /objects/inventory-control/item/13
                 */
                readonly href?: string;
            };
            /** @description References an array of lines associated with this billing prices list entry. */
            lines?: components["schemas"]["objects.contracts.billing-price-list-entry-line"][];
            audit?: components["schemas"]["audit.s1"];
            status?: components["schemas"]["status"];
        };
        "contracts-billing-price-list-entryRequiredProperties": Record<string, never>;
        /** @description Billing price list entry lines define pricing details for an item specified in a billing price list entry. */
        "objects.contracts.billing-price-list-entry-line": {
            /**
             * @description System-assigned unique key for the billing price list entry line.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Identifier for the billing price list entry line. This is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the billing price list entry line.
             * @example /objects/contracts/billing-price-list-entry-line/23
             */
            readonly href?: string;
            /**
             * Format: date
             * @description Specifies the date on which the price becomes effective.
             * @example 2024-01-01
             */
            startDate?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies a fixed amount used to charge for an item, either:
             *
             *     * Established amount to bill each period, for example, a `flatAmount` of `10.00` billed each period might cover a set quantity of 5000 `includedUnits`, in this case, text messages.
             *     * A fixed price for items not priced by quantity, for example, a value of `300.00` might represent a service plan for a one-year term.
             *
             *     Set to `0` to price the item only by contracted quantity or usage.
             * @example 999.99
             */
            flatAmount?: string;
            /**
             * @description Specifies the amount to charge for each quantity range beyond the `includedUnits`. Applies only if `priceType` is set to `range`.
             * @example 11.99
             */
            variableUnitRate?: string | null;
            /**
             * @description Indicates the item quantity included in the `flatAmount`. Enter `0` in this field to:
             *
             *     * Price the item only by the contracted quantity or quantity used.
             *     * Set a fixed fee
             *     * Use the item with [committed quantity usage billing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Committed_quantity_usage), specify a value of `0` for a committed quantity contract line.
             * @example 2000
             */
            includedUnits?: string | null;
            /**
             * @description Specifies an optional note or description for the billing price list entry line.
             * @example Include 5000 SMS messages per month under the standard marketing package.
             */
            memo?: string | null;
            /** @description References the billing price list entry to which this line belongs. */
            readonly billingPriceListEntry?: {
                /**
                 * @description Unique key for the billing price list entry.
                 * @example 281
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the billing price list entry.
                 * @example 281
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the billing price list entry.
                 * @example /objects/contracts/billing-price-list-entry/281
                 */
                readonly href?: string;
            };
            /** @description References an array of pricing tiers associated with this billing price list entry line. Applies only if `priceType` is set to `tiered`. */
            tiers?: components["schemas"]["objects.contracts.billing-price-list-entry-line-tier"][];
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description A billing price list entry line tier defines the starting quantity and price for a single tier in a billing price list entry line. */
        "objects.contracts.billing-price-list-entry-line-tier": {
            /**
             * @description System-assigned unique key for the billing price list entry line tier.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Identifier for the billing price list entry line tier. This is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the billing price list line tier.
             * @example /objects/contracts/billing-price-list-entry-line-tier/23
             */
            readonly href?: string;
            /**
             * @description Specifies the starting usage quantity for the pricing tier. Use `0` for the first tier.
             * @example 0
             */
            beginQuantity?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies the price per quantity for the tier.
             * @example 850.00
             */
            tierRate?: string;
            /** @description References the billing price list entry line associated with the billing price list entry line tier. */
            billingPriceListEntryLine?: {
                /**
                 * @description Unique key for the billing price list entry line.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the billing price list entry line.
                 * @example 1
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the billing price list entry line.
                 * @example /objects/contracts/billing-price-list-entry-line/1
                 */
                readonly href?: string;
            };
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-billing-price-list-entry-line-tierRequiredProperties": Record<string, never>;
        /** @description MEA price lists are used in Multi-Element Arrangements (MEAs) to define fair value pricing for products or services included in the arrangement. */
        "objects.contracts.mea-price-list": {
            /**
             * @description System-assigned unique key for the MEA price list.
             * @example 12
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the MEA price list.
             * @example Subscription MEA price list
             */
            id?: string;
            /**
             * @description URL endpoint for the MEA price list.
             * @example /objects/contracts/mea-price-list/12
             */
            readonly href?: string;
            /**
             * @description Description of the MEA price list.
             * @example Fair value for high-volume customers.
             */
            description?: string;
            /**
             * @description Indicates whether this MEA price list is the default. Set to `true` if it is the default price list.
             * @example false
             */
            isDefault?: boolean;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-mea-price-listRequiredProperties": Record<string, never>;
        /** @description MEA price list entries are used in Multi-Element Arrangements (MEAs) to define fair value pricing for individual products or services included in the arrangement. */
        "objects.contracts.mea-price-list-entry": {
            /**
             * @description System-assigned unique key for the MEA price list entry.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the MEA price list entry. This is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the MEA price list entry.
             * @example /objects/contracts/mea-price-list-entry/23
             */
            readonly href?: string;
            /**
             * @description RecordURL of the MEA price list entry.
             * @example https://app.intacct.com/objects/contracts/mea-price-list-entry/23
             */
            readonly webURL?: string;
            /** @description References the MEA price list to which this entry belongs. */
            meaPriceList?: {
                /**
                 * @description Unique key for the MEA price list.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the MEA price list.
                 * @example SoftwarePackagePL
                 */
                id?: string;
                /**
                 * @description URL endpoint for the MEA price list.
                 * @example /objects/contracts/mea-price-list/1
                 */
                readonly href?: string;
            };
            /** @description References the fair value category to use to determine estimated standalone selling price. */
            fairValueCategory?: {
                /**
                 * @description Unique key for the MEA category.
                 * @example 1
                 */
                key?: string;
                /**
                 * @description Identifier for the MEA category.
                 * @example Software-License-ERP
                 */
                id?: string;
                /**
                 * @description URL endpoint for the MEA category.
                 * @example /objects/contracts/mea-category/3
                 */
                readonly href?: string;
            };
            /** @description References the item relating to this price list entry. */
            item?: {
                /**
                 * @description Unique key for the item.
                 * @example 13
                 */
                key?: string;
                /**
                 * @description Identifier for the item.
                 * @example API_Usage
                 */
                id?: string;
                /**
                 * @description Name for the item.
                 * @example API Usage
                 */
                readonly name?: string;
                /**
                 * @description URL endpoint for the item.
                 * @example /objects/inventory-control/item/13
                 */
                readonly href?: string;
            };
            currency?: components["schemas"]["currency"];
            /**
             * @description Indicates how the item is priced.
             * @default amount
             * @example amount
             * @enum {string}
             */
            priceType?: "amount" | "percent" | "priceRange" | "noFairValue";
            /**
             * @description Indicates how the percentage is calculated. Applies only if `priceType` is set to `percent`.
             * @default null
             * @example extendedFairValuePrice
             * @enum {string|null}
             */
            calculatePercentageBasedOn?: null | "extendedFairValuePrice" | "extendedContractLinePrice";
            /**
             * @description Indicates whether to use price range as the pricing method. Set to `true` to use the `priceRange`.
             * @default false
             * @example false
             */
            usePriceRange?: boolean;
            /**
             * @description Indicates how the price range variances are entered. Applies only if `priceType` is set to `priceRange`.
             * @default null
             * @example amount
             * @enum {string|null}
             */
            priceRangeVarianceType?: null | "amount" | "percent";
            /**
             * @description Indicates the price rule to use when outside the price range. Applies only if `priceType` is set to `priceRange`.
             * @default null
             * @example fairValue
             * @enum {string|null}
             */
            priceRuleOutsideRange?: null | "fairValue" | "nearestBoundary";
            /**
             * @description Indicates the version of the MEA price list entry.
             * @example 1
             */
            readonly version?: string | null;
            /** @description References a collection of lines associated with the MEA price list entry. */
            lines?: components["schemas"]["objects.contracts.mea-price-list-entry-line"][];
            audit?: components["schemas"]["audit.s1"];
            status?: components["schemas"]["status"];
        };
        "contracts-mea-price-list-entryRequiredProperties": {
            currency: unknown;
        };
        /** @description MEA price list entry lines define the pricing details for individual items within an MEA price list entry. */
        "objects.contracts.mea-price-list-entry-line": {
            /**
             * @description System-assigned unique key for the MEA price list entry line.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the MEA price list entry line. This is the same as `key` for this object.
             * @example 23
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the MEA price list entry line.
             * @example /objects/contracts/mea-price-list-entry-line/23
             */
            readonly href?: string;
            /** @description References the MEA price list entry to which this line belongs. */
            readonly meaPriceListEntry?: {
                /**
                 * @description Unique key for the MEA price list entry.
                 * @example 281
                 */
                readonly key?: string;
                /**
                 * @description Identifier for the MEA price list entry.
                 * @example 281
                 */
                readonly id?: string;
                /**
                 * @description URL endpoint for the MEA price list entry.
                 * @example /objects/contracts/mea-price-list-entry/281
                 */
                readonly href?: string;
            };
            /**
             * Format: date
             * @description Indicates the date on which the price list entry starts. You can enter past or future dates.
             * @example 2016-01-01
             */
            startDate?: string;
            /**
             * Format: decimal-precision-2
             * @description Specifies the value of the MEA price list entry line, expressed either as an `amount` or a `percent`, determined by the `priceType` in the `mea-price-list-entry` object.
             *
             *
             *
             *
             *
             *      If `priceType` is set to `amount`, enter the fair value price. For example, enter 1500 to denote 1,500.
             *     If `priceType` is set to `percent`, enter the percentage of the total price for items in the related fair value categories used to determine the fair value price. For example, enter 25 to denote 25%.
             * @example 999.99
             */
            amountOrPercent?: string;
            /**
             * @description Specifies the `amount` or `percent` to deduct from the fair value price to establish the `lowerLimit` of the price range. Whether this is an `amount` or a `percent` is determined by the `priceRangeVarianceType` in the `mea-price-list-entry` object.
             *
             *     Applies when `priceType` is set to `priceRange` and `usePriceRange` is true.
             * @example 125
             */
            markDown?: string;
            /**
             * @description Specifies the `amount` or `percent` to add to the fair value price to establish the `upperLimit` of the price range. Whether this is an `amount` or a `percent` is determined by the `priceRangeVarianceType` in the `mea-price-list-entry` object.
             *
             *     Applies when `priceType` is set to `priceRange` and `usePriceRange` is true.
             * @example 125
             */
            markUp?: string;
            /**
             * @description Specifies the lower limit for the `priceRange`. Applies when `priceType` is set to `priceRange` and `usePriceRange` is `true`.
             * @example 100
             */
            lowerLimit?: string;
            /**
             * @description Indicates the upper limit for the price range. Applies only if `priceType` is `priceRange` and `usePriceRange` is `true`.
             * @example 1000
             */
            upperLimit?: string;
            /**
             * @description Provides additional information about the MEA price list entry line.
             * @example Special pricing for high-volume customers.
             */
            memo?: string | null;
            audit?: components["schemas"]["audit.s1"];
        };
        /** @description MEA categories are used in Multi-Element Arrangements (MEAs) to label products or services included in the arrangement to categorize them for fair value allocation. */
        "objects.contracts.mea-category": {
            /**
             * @description System-assigned unique key for the MEA category.
             * @example 23
             */
            readonly key?: string;
            /**
             * @description Unique identifier for the MEA category.
             * @example Software-License-ERP
             */
            id?: string;
            /**
             * @description URL endpoint for the MEA category.
             * @example /objects/contracts/mea-category/23
             */
            readonly href?: string;
            /**
             * @description Description of the MEA category.
             * @example Fair value category for software licenses.
             */
            description?: string;
            status?: components["schemas"]["status"];
            audit?: components["schemas"]["audit.s1"];
        };
        "contracts-mea-categoryRequiredProperties": Record<string, never>;
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
        "contract-dimension-ref": {
            /** @description Location or entity associated with the contract. This field is required in a multi-entity environment. Contract lines are restricted to the specified location or entity or to a child of the location or entity. */
            location?: {
                /**
                 * @description Location Key
                 * @example 22
                 */
                key?: string;
                /**
                 * @description Location
                 * @example LOC-22
                 */
                id?: string;
                /**
                 * @description Location Name
                 * @example California
                 */
                readonly name?: string;
                /** @example /objects/company-config/location/731 */
                readonly href?: string;
            };
            /** @description Department associated with the contract. */
            department?: {
                /**
                 * @description Department Key
                 * @example 11
                 */
                key?: string | null;
                /**
                 * @description Department
                 * @example DEP-11
                 */
                id?: string | null;
                /**
                 * @description Department name
                 * @example Human Resources
                 */
                readonly name?: string | null;
                /** @example /objects/company-config/department/731 */
                readonly href?: string;
            };
            class?: {
                /**
                 * @description Class Key
                 * @example 731
                 */
                key?: string | null;
                /**
                 * @description Class ID
                 * @example REST_CLS_001
                 */
                id?: string | null;
                /**
                 * @description Class Name
                 * @example Enterprises
                 */
                readonly name?: string | null;
                /** @example /objects/company-config/class/731 */
                readonly href?: string;
            };
            task?: {
                /**
                 * @description Task ID
                 * @example 1
                 */
                id?: string | null;
                /**
                 * @description Task Key
                 * @example 1
                 */
                key?: string | null;
                /**
                 * @description Task Name
                 * @example Project Task
                 */
                readonly name?: string | null;
                /** @example /objects/projects/task/1 */
                readonly href?: string;
            };
            vendor?: {
                /**
                 * @description Vendor Key
                 * @example 357
                 */
                key?: string | null;
                /**
                 * @description Vendor ID
                 * @example 1605212096809
                 */
                id?: string | null;
                /**
                 * @description Vendor Name
                 * @example GenLab
                 */
                readonly name?: string | null;
                /** @example /objects/accounts-payable/vendor/357 */
                readonly href?: string;
            };
            /** @description Customer that the contract is associated with. The customer cannot be changed after a contract line has been posted to the contract. */
            customer?: {
                /**
                 * @description Customer Key
                 * @example 250
                 */
                key?: string;
                /**
                 * @description Customer ID
                 * @example CUS-RT-0011
                 */
                id?: string;
                /**
                 * @description Customer Name
                 * @example Ability Software
                 */
                readonly name?: string;
                /** @example /objects/accounts-receivable/customer/13 */
                readonly href?: string;
            };
            project?: {
                /**
                 * @description Project Key
                 * @example 2
                 */
                key?: string | null;
                /**
                 * @description Project ID
                 * @example NET-XML30-2
                 */
                id?: string | null;
                /**
                 * @description Project Name
                 * @example Talcomp training
                 */
                readonly name?: string | null;
                /** @example /objects/projects/project/2 */
                readonly href?: string;
            };
            employee?: {
                /**
                 * @description Employee Key
                 * @example 10
                 */
                key?: string | null;
                /**
                 * @description Employee ID
                 * @example EMP-10
                 */
                id?: string | null;
                /**
                 * @description Employee Name
                 * @example Thomas, Glenn
                 */
                readonly name?: string | null;
                /** @example /objects/company-config/employee/10 */
                readonly href?: string;
            };
        };
        /**
         * @example inProgress
         * @enum {string|null}
         */
        "contract-revenue-schedule-status-ref": null | "draft" | "inProgress" | "onHold" | "completed" | "terminated" | "pendingDelivery" | "pendingDeliveryAll" | "estimateRevalued" | "renewalForecast";
        "contract-ref": {
            /**
             * @description System-assigned key for the contract.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the contract.
             * @example CON-2
             */
            readonly id?: string;
            /**
             * @description URL of the contract.
             * @example /objects/contracts/contract/2
             */
            readonly href?: string;
        };
        "contract-schedule-contract-line-ref": {
            /**
             * @description System-assigned key for the contract line.
             * @example 2
             */
            readonly key?: string;
            /**
             * @description Unique identifier of the contract line.
             * @example 2
             */
            readonly id?: string;
            /**
             * @description URL of the contract line.
             * @example /objects/contracts/contract-line/2
             */
            readonly href?: string;
        };
        /** @description Reference to a contract billing schedule. */
        "contract-billing-schedule-ref": {
            /**
             * @description Contract billing schedule key.
             * @example 145
             */
            readonly key?: string;
            /**
             * @description Contract billing schedule ID.
             * @example 145
             */
            readonly id?: string;
            /**
             * @description URL endpoint for the contract billing schedule.
             * @example /objects/contracts/billing-schedule/145
             */
            readonly href?: string;
        };
        /** @description Reference to a contract usage, identifying usage of a quantity-based item. */
        "contract-usage-ref": {
            /**
             * @description Contract usage key.
             * @example 145
             */
            readonly key?: string | null;
            /**
             * @description Contract usage ID.
             * @example 145
             */
            id?: string | null;
            /**
             * @description Endpoint URL for the contract usage.
             * @example /objects/contracts/contract-usage/145
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
        "contract-expense-schedule-ref": {
            /**
             * @description Contract expense schedule system-assigned key.
             * @example 145
             */
            readonly key?: string;
            /**
             * @description Contract expense schedule unique identifier.
             * @example 145
             */
            readonly id?: string;
            /**
             * @description Contract expense schedule URL.
             * @example /objects/contracts/expense-schedule/145
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
    "get-objects-contract-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "post-objects-contract-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a contract group. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.contract-group"] & components["schemas"]["contracts-contract-groupRequiredProperties"];
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
    "get-objects-contract-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contract group.
                 * @example 235
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.contract-group"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-objects-contract-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contract group.
                 * @example 235
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
    "patch-objects-contract-group-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contract group.
                 * @example 235
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.contract-group"] & {
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
    "get-objects-contract-group-member": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-objects-contract-group-member-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description system-assigned unique key for the contract group member.
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
                        "ia::result"?: components["schemas"]["objects.contracts.contract-group-member"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-contracts-contract-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contracts-contract-type": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.contract-type"] & components["schemas"]["contracts-contract-typeRequiredProperties"];
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
    "get-contracts-contract-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the contract type.
                 * @example 1546
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.contract-type"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-contract-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the contract type.
                 * @example 1546
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
    "update-contracts-contract-type-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the contract type.
                 * @example 1546
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "Set status to inactive": {
                 *         "value": {
                 *           "status": "inactive"
                 *         }
                 *       }
                 *     }
                 */
                "application/json": components["schemas"]["objects.contracts.contract-type"] & {
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
    "list-contracts-contract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contracts-contract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.contract"] & components["schemas"]["contracts-contractRequiredProperties"];
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
    "get-contracts-contract-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contract.
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
                        "ia::result"?: components["schemas"]["objects.contracts.contract"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-contract-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contract.
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
    "update-contracts-contract-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contract.
                 * @example 24
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.contract"] & {
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
    "get-objects-contracts-contract-renewal-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "post-objects-contracts-contract-renewal-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a contract renewal template */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.contract-renewal-template"] & components["schemas"]["contracts-contract-renewal-templateRequiredProperties"];
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
    "get-objects-contracts-contract-renewal-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contract renewal template.
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
                        "ia::result"?: components["schemas"]["objects.contracts.contract-renewal-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-objects-contracts-contract-renewal-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contract renewal template.
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
    "patch-objects-contracts-contract-renewal-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contract renewal template.
                 * @example 42
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.contract-renewal-template"] & {
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
    "post-contracts-contract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-actions-post-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-actions-post-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "renew-contracts-contract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-actions-renew-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-actions-renew-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "expire-contracts-contract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-actions-expire-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-actions-expire-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "cancel-contracts-contract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-actions-cancel-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-actions-cancel-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "uncancel-contracts-contract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-actions-uncancel-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-actions-uncancel-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "hold-schedules-contracts-contract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-actions-hold-schedules-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-actions-hold-schedules-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "resume-schedules-contracts-contract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-actions-resume-schedules-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-actions-resume-schedules-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-contracts-contract-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contracts-contract-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a contract line. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.contract-line"] & components["schemas"]["contracts-contract-lineRequiredProperties"];
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
    "get-contracts-contract-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the contract line.
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
                        "ia::result"?: components["schemas"]["objects.contracts.contract-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-contract-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the contract line.
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
    "update-contracts-contract-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the contract line.
                 * @example 134
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.contract-line"];
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
    "post-contracts-contract-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-line-actions-post-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-line-actions-post-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "deliver-contracts-contract-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-line-actions-deliver-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-line-actions-deliver-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
        };
    };
    "reestimate-contracts-contract-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-line-actions-reestimate-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-line-actions-reestimate-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "hold-schedules-contracts-contract-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-line-actions-hold-schedules-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-line-actions-hold-schedules-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "resume-schedules-contracts-contract-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-line-actions-resume-schedules-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-line-actions-resume-schedules-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "revalue-contracts-contract-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-line-actions-revalue-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-line-actions-revalue-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
        };
    };
    "uncancel-contracts-contract-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-line-actions-uncancel-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-line-actions-uncancel-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-contracts-contract-txn-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-contracts-contract-txn-history": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the contract transaction history.
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
                        "ia::result"?: components["schemas"]["objects.contracts.contract-txn-history"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-contract-compliance-checklist-task": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contract-compliance-checklist-task": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a compliance checklist task. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.compliance-checklist-task"] & components["schemas"]["contracts-compliance-checklist-taskRequiredProperties"];
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
    "get-contract-compliance-checklist-task-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance checklist task.
                 * @example 125
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.compliance-checklist-task"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contract-compliance-checklist-task-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance checklist task.
                 * @example 125
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
    "update-contract-compliance-checklist-task-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance checklist task.
                 * @example 125
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.compliance-checklist-task"] & {
                    readonly id?: unknown;
                    readonly contractKey?: unknown;
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
    "list-contract-compliance-note": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contract-compliance-note": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a compliance note. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.compliance-note"] & components["schemas"]["contracts-compliance-noteRequiredProperties"];
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
    "get-contract-compliance-note-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance note.
                 * @example 126
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.compliance-note"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contract-compliance-note-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance note.
                 * @example 126
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
    "update-contract-compliance-note-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance note.
                 * @example 126
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.compliance-note"] & {
                    readonly id?: unknown;
                    readonly contractKey?: unknown;
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
    "list-contract-compliance-task": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contract-compliance-task": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a compliance task. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.compliance-task"] & components["schemas"]["contracts-compliance-taskRequiredProperties"];
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
    "get-contract-compliance-task-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance task.
                 * @example 156
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.compliance-task"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contract-compliance-task-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance task.
                 * @example 156
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
    "update-contract-compliance-task-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the compliance task.
                 * @example 156
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.compliance-task"] & {
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
    "list-contracts-billing-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-contracts-billing-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a billing schedule.
                 * @example 1843
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["contracts-billing-schedule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-contracts-billing-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a billing schedule.
                 * @example 1843
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-billing-schedule"];
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
    "list-contracts-billing-schedule-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-contracts-billing-schedule-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing schedule line.
                 * @example 349
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.billing-schedule-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-contracts-billing-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contracts-billing-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a billing template */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.billing-template"] & components["schemas"]["contracts-billing-templateRequiredProperties"];
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
    "get-contracts-billing-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing template.
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
                        "ia::result"?: components["schemas"]["objects.contracts.billing-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-billing-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing template.
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
    "update-contracts-billing-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing template.
                 * @example 10
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.billing-template"] & {
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
    "list-contracts-billing-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-contracts-billing-template-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing template line.
                 * @example 7
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.billing-template-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-objects-evergreen-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "post-objects-evergreen-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create an evergreen template */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.evergreen-template"] & components["schemas"]["contracts-evergreen-templateRequiredProperties"];
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
    "get-objects-evergreen-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the evergreen template.
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
                        "ia::result"?: components["schemas"]["objects.contracts.evergreen-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-objects-evergreen-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the evergreen template.
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
    "patch-objects-evergreen-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the evergreen template.
                 * @example 99
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.evergreen-template"] & {
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
    "list-contracts-contract-usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contracts-contract-usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create contract usage object */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.contract-usage"] & components["schemas"]["contracts-contract-usageRequiredProperties"];
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
    "get-contracts-contract-usage-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the contract usage object.
                 * @example 4532
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.contract-usage"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-contract-usage-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the contract usage object.
                 * @example 4532
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
    "update-contracts-contract-usage-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the contract usage object.
                 * @example 4532
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.contract-usage"];
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
    "list-contracts-revenue-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-contracts-revenue-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the revenue schedule.
                 * @example 1287
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["contracts-revenue-schedule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-contracts-revenue-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the revenue schedule.
                 * @example 1287
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-revenue-schedule"];
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
    "reallocate-contract-revenue-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["contract-schedule-reallocate-request-ref"] & components["schemas"]["contracts-revenue-schedule-reallocate-requestRequiredProperties"];
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
                        "ia::result"?: components["schemas"]["contract-schedule-reallocate-response-ref"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-contracts-revenue-schedule-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-contracts-revenue-schedule-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the revenue schedule line.
                 * @example 897
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.revenue-schedule-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "post-contracts-revenue-schedule-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-revenue-schedule-line-actions-post-request"];
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
                        "ia::result"?: components["schemas"]["contracts-revenue-schedule-line-actions-post-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "unpost-contracts-revenue-schedule-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-revenue-schedule-line-actions-unpost-request"];
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
                        "ia::result"?: components["schemas"]["contracts-revenue-schedule-line-actions-unpost-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-contracts-revenue-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contracts-revenue-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a revenue template */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.revenue-template"] & components["schemas"]["contracts-revenue-templateRequiredProperties"];
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
    "get-contracts-revenue-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the revenue template.
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
                        "ia::result"?: components["schemas"]["objects.contracts.revenue-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-revenue-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the revenue template.
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
    "update-contracts-revenue-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned key for the revenue template.
                 * @example 25
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.revenue-template"] & {
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
    "get-objects-contract-mea-allocation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contracts-contract-mea-allocation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create an MEA allocation */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.contract-mea-allocation"] & components["schemas"]["contracts-contract-mea-allocationRequiredProperties"];
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
    "get-contracts-contract-mea-allocation-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the MEA allocation.
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
                        "ia::result"?: components["schemas"]["objects.contracts.contract-mea-allocation"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "clear-all-mea-contracts-contract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-actions-clear-all-mea-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-actions-clear-all-mea-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "clear-last-active-mea-contracts-contract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-contract-actions-clear-last-active-mea-request"];
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
                        "ia::result"?: components["schemas"]["contracts-contract-actions-clear-last-active-mea-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-contracts-bulk-action-run-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-contracts-bulk-action-run-summary-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the bulk action run summary.
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
                        "ia::result"?: components["schemas"]["objects.contracts.bulk-action-run-summary"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-contracts-expense": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contracts-expense": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create an expense. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.expense"] & components["schemas"]["contracts-expenseRequiredProperties"];
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
    "get-contracts-expense-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense.
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
                        "ia::result"?: components["schemas"]["objects.contracts.expense"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-expense-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense.
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
    "update-contracts-expense-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense.
                 * @example 17
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.expense"] & {
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
    "post-contracts-expense": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-expense-actions-post-request"];
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
                        "ia::result"?: components["schemas"]["contracts-expense-actions-post-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "hold-schedules-contracts-expense": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-expense-actions-hold-schedules-request"];
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
                        "ia::result"?: components["schemas"]["contracts-expense-actions-hold-schedules-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "resume-schedules-contracts-expense": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-expense-actions-resume-schedules-request"];
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
                        "ia::result"?: components["schemas"]["contracts-expense-actions-resume-schedules-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-contracts-expense-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-contracts-expense-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense schedule.
                 * @example 762
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["contracts-expense-schedule"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "update-contracts-expense-schedule-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense schedule.
                 * @example 762
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-expense-schedule"];
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
    "reallocate-contract-expense-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["contract-schedule-reallocate-request-ref"] & components["schemas"]["contracts-expense-schedule-reallocate-requestRequiredProperties"];
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
                        "ia::result"?: components["schemas"]["contract-schedule-reallocate-response-ref"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-contracts-expense-schedule-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-contracts-expense-schedule-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense schedule line.
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
                        "ia::result"?: components["schemas"]["objects.contracts.expense-schedule-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "post-contracts-expense-schedule-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-expense-schedule-line-actions-post-request"];
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
                        "ia::result"?: components["schemas"]["contracts-expense-schedule-line-actions-post-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "unpost-contracts-expense-schedule-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["contracts-expense-schedule-line-actions-unpost-request"];
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
                        "ia::result"?: components["schemas"]["contracts-expense-schedule-line-actions-unpost-response"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-contracts-historical-schedule-run": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-contracts-historical-schedule-run-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the historical schedule run.
                 * @example 156
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.historical-schedule-run"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-contracts-expense-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contracts-expense-template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create an expense template. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.expense-template"] & components["schemas"]["contracts-expense-templateRequiredProperties"];
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
    "get-contracts-expense-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense template.
                 * @example 136
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.expense-template"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-expense-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense template.
                 * @example 136
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
    "update-contracts-expense-template-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense template.
                 * @example 136
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.expense-template"] & {
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
    "list-contracts-expense-template-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-contracts-expense-template-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the expense template line.
                 * @example 7
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.expense-template-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "list-contracts-billing-price-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contracts-billing-price-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new billing price list. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.billing-price-list"] & components["schemas"]["contracts-billing-price-listRequiredProperties"];
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
    "get-contracts-billing-price-list-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing price list.
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
                        "ia::result"?: components["schemas"]["objects.contracts.billing-price-list"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-billing-price-list-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing price list.
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
    "update-contracts-billing-price-list-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing price list.
                 * @example 24
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.billing-price-list"] & {
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
    "list-contracts-billing-price-list-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contracts-billing-price-list-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a billing price list entry. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.billing-price-list-entry"] & components["schemas"]["contracts-billing-price-list-entryRequiredProperties"];
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
    "get-contracts-billing-price-list-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing price list entry.
                 * @example 425
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.billing-price-list-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-billing-price-list-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing price list entry.
                 * @example 425
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
    "update-contracts-billing-price-list-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing price list entry.
                 * @example 425
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.billing-price-list-entry"];
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
    "list-contracts-billing-price-list-entry-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-contracts-billing-price-list-entry-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing price list entry line.
                 * @example 10295
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.billing-price-list-entry-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-billing-price-list-entry-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing price list entry line.
                 * @example 10295
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
    "update-contracts-billing-price-list-entry-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the billing price list entry line.
                 * @example 10295
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.billing-price-list-entry-line"];
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
    "list-contracts-billing-price-list-entry-line-tier": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contracts-billing-price-list-entry-line-tier": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a billing price list entry tier. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.billing-price-list-entry-line-tier"] & components["schemas"]["contracts-billing-price-list-entry-line-tierRequiredProperties"];
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
    "get-contracts-billing-price-list-entry-line-tier-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a billing price list entry line tier.
                 * @example 32195
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.billing-price-list-entry-line-tier"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-billing-price-list-entry-line-tier-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a billing price list entry line tier.
                 * @example 32195
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
    "update-contracts-billing-price-list-entry-line-tier-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for a billing price list entry line tier.
                 * @example 32195
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.billing-price-list-entry-line-tier"];
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
    "list-contracts-mea-price-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contracts-mea-price-list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new MEA price list. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.mea-price-list"] & components["schemas"]["contracts-mea-price-listRequiredProperties"];
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
    "get-contracts-mea-price-list-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the MEA price list.
                 * @example 61
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.mea-price-list"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-mea-price-list-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the MEA price list.
                 * @example 61
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
    "update-contracts-mea-price-list-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for the MEA price list.
                 * @example 61
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.mea-price-list"] & {
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
    "list-contracts-mea-price-list-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contracts-mea-price-list-entry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new MEA price list entry. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.mea-price-list-entry"] & components["schemas"]["contracts-mea-price-list-entryRequiredProperties"];
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
    "get-contracts-mea-price-list-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an MEA price list entry.
                 * @example 521
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.mea-price-list-entry"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-mea-price-list-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an MEA price list entry.
                 * @example 521
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
    "update-contracts-mea-price-list-entry-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an MEA price list entry.
                 * @example 521
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.mea-price-list-entry"];
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
    "list-contracts-mea-price-list-entry-line": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "get-contracts-mea-price-list-entry-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an MEA price list entry line.
                 * @example 574
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["objects.contracts.mea-price-list-entry-line"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-mea-price-list-entry-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an MEA price list entry line.
                 * @example 574
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
    "update-contracts-mea-price-list-entry-line-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an MEA price list entry line.
                 * @example 574
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.mea-price-list-entry-line"];
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
    "list-contracts-mea-category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        "ia::result"?: components["schemas"]["object-reference"][];
                        "ia::meta"?: components["schemas"]["metadata-pages"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "create-contracts-mea-category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Create a new MEA category. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["objects.contracts.mea-category"] & components["schemas"]["contracts-mea-categoryRequiredProperties"];
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
    "get-contracts-mea-category-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an MEA category.
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
                        "ia::result"?: components["schemas"]["objects.contracts.mea-category"];
                        "ia::meta"?: components["schemas"]["metadata"];
                    };
                };
            };
            400: components["responses"]["400error"];
        };
    };
    "delete-contracts-mea-category-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an MEA category.
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
    "update-contracts-mea-category-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description System-assigned unique key for an MEA category.
                 * @example 3
                 */
                key: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["objects.contracts.mea-category"];
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
